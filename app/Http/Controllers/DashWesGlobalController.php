<?php

namespace App\Http\Controllers;

use Faker\Guesser\Name;
use Faker\Provider\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use App\Models\UserModel;
use JoggApp\GoogleTranslate\GoogleTranslateClient;
use PhpParser\Node\Expr\Array_;
use League\Flysystem\Filesystem;
use League\Flysystem\Sftp\SftpAdapter;

class DashWesGlobalController extends BaseController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    private $iconPath = '/uploads/images/waaupimg/icons/';
    private $logPath = '/uploads/images/waaupimg/logo/';


    public function setWebsiteThemeColor(Request $request)
    {
        $userid = $request->post('userid');
        $color = $request->post('color');
        $cid = $request->post('cid');

        DB::connection($this->waaupapps)->table('tb_themecolor')->where('user_id', $userid)->update(['sel_color'=>$color, 'f_id'=>$cid]);
        return $this->getColor($userid, $color, 'front');
    }

    private function FileUploadFunc($file, $upPath){
        $filename = time().'-'.$file->getClientOriginalName();
        $file->move(public_path().$upPath, $filename);

        return $filename;
    }

    private function overwriteFileUploadFunc($file, $oldfilename, $upPath){
        if($file != null) {
            $filename = time().'-'.$file->getClientOriginalName();
            $file->move(public_path().$upPath, $filename);

            if (!empty($oldfilename) && $oldfilename != "") {
                if (file_exists(public_path().$upPath.$oldfilename))
                    @unlink(public_path().$upPath.$oldfilename);
            }
        }
        else{
            $filename = $oldfilename;
        }

        return $filename;
    }

    public function setSocialSettingDetailIcon(Request $request)
    {
        $sel_id = $request->post('chooseIconId');
        $iconfile = $request->file('uploadicon_'.$sel_id);
        $iconpre = $request->post('uploadiconpre_'.$sel_id);
        $hoverfile = $request->file('file-detailhover');
        $hoverpre = $request->post('hfile_'.$sel_id);

        if($iconfile != null)
            $iconpath = $this->FileUploadFunc($iconfile, $this->iconPath);
        else{
            if($iconpre != null && $iconpre != "")
                $iconpath = $iconpre;
            else
                $iconpath = "";
        }
        if($hoverfile != null)
            $hoverpath = $this->FileUploadFunc($hoverfile, $this->iconPath);
        else{
            if($hoverpre != null && $hoverpre != "")
                $hoverpath = $hoverpre;
            else
                $hoverpath = "";
        }

        return \Response::json([
            'msg'  =>  "ok",
            'id' => $sel_id,
            'icon_name' => $iconpath,
            'hover_name' => $hoverpath
        ]);

        exit();
    }

    public function chooseIconImageUpload(Request $request)
    {
        $sel_id = $request->post('chooseIconId');
        $i_cond = $request->post('icon_cond');
        $icon_style = DB::connection($this->waaupdb)->table('sitelogoimgstyle')->where('g_path', $this->g_path)->where('id', $i_cond)->get()->first();
        $h_cond = $request->post('hover_cond');
        $hover_style = DB::connection($this->waaupdb)->table('sitelogoimgstyle')->where('g_path', $this->g_path)->where('id', $h_cond)->get()->first();
        $condId = $request->post('condId');
        if($condId == 1)
        {
            $size = $icon_style->size;
            $fort = $icon_style->imgtype;
            $capa = $icon_style->capacity;
            $file = $request->file('uploadicon_'.$sel_id);
            $data = getimagesize($_FILES['uploadicon_'.$sel_id]['tmp_name']);
        }
        else{
            $size = $hover_style->size;
            $fort = $hover_style->imgtype;
            $capa = $hover_style->capacity;
            $file = $request->file('file-detailhover');
            $data = getimagesize($_FILES['file-detailhover']['tmp_name']);
        }
        $capa = (int)$capa * 1000;


        $width = $data[0];
        $height = $data[1];
        $format = $file->getClientMimeType();
        $capacity = $file->getSize();

        $filesize = explode("*", $size);
        $arr = explode("/", $format);
        $fileformat = str_replace("e", "", $arr[1]);
        if(count($filesize) > 1) {
            if ($width > $filesize[0] || $height > $filesize[1])
                return \Response::json([
                    'msg' => 'size'
                ]);
        }
        if($capa != null && $capa != '') {
            if ($capacity > $capa)
                return \Response::json([
                    'msg' => 'capacity',
                ]);
        }
        if($fort != null && $fort != '') {
            if (strpos($fort, $fileformat) !== false){

            }
            else{
                return \Response::json([
                    'msg' => 'format'
                ]);
            }
        }

        $filename = $this->FileUploadFunc($file, $this->iconPath);

        return \Response::json([
            'msg'  =>  "ok",
            "fname"=>$filename
        ]);

    }

    public function deleteSocialSettingIcon(Request $request)
    {
        $ifile = $request->post('ifile');
        $hfile = $request->post('hfile');

        if($ifile != "" && $ifile != null)
            @unlink(public_path().$this->iconPath.$ifile );
        if($hfile != "" && $hfile != null)
            @unlink(public_path().$this->iconPath.$hfile );

        return \Response::json([
            'msg'  =>  "ok",
        ]);

        exit();
    }

    public function getLogoImageStyle(Request $request)
    {
        $icon_id = $request->post('i_cond');
        $icon_style = DB::connection($this->waaupdb)->table('sitelogoimgstyle')->where('g_path', $this->g_path)->where('id', $icon_id)->get()->first();

        $hover_id = $request->post('h_cond');
        $hover_style = DB::connection($this->waaupdb)->table('sitelogoimgstyle')->where('g_path', $this->g_path)->where('id', $hover_id)->get()->first();

        if($icon_style == null && empty($icon_style))
            $icon_style = "";
        if($hover_style == null && empty($hover_style))
            $hover_style = "";

        return \Response::json([
            'msg'  =>  "ok",
            'iconStyle' => $icon_style,
            'hoverStyle' => $hover_style
        ]);

        exit();
    }

    public function getSocialSettingPage(Request $request){
        $tranedLang = $request->post('tansLang');

        $row=null;
        if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::connection($this->waaupglobal)->table('tb_frontpages')
                ->select(DB::connection($this->waaupglobal)->raw('trans, socialsetting'))
                ->where('g_path', $this->g_path)
                ->get()->first();
        }else{
            $row = DB::connection($this->waaupglobal)->table('tb_frontpages')
                ->select(DB::connection($this->waaupglobal)->raw('trans, socialsetting'))
                ->whereRaw('trans like "'.$tranedLang.'%"')
                ->where('g_path', $this->g_path)
                ->get()->first();
        }

        $instrjson='';
        if($row!==null)
            $instrjson = $row->socialsetting;
        if($instrjson == null)
            $instrjson = '';
        return \Response::json([
            'msg'  =>  'ok',
            'list' => $instrjson
        ]);

        exit();
    }

    public function saveSocialSettingPage(Request $request){
        $tranedLang = $request->post('transedlang');
        $i_cond = $request->post('icon_cond');
        $h_cond = $request->post('hover_cond');
        $i_img1 = $request->post('ifile_1');
        if($i_img1 == null)
            $i_img1 = "";
        $i_img2 = $request->post('ifile_2');
        if($i_img2 == null)
            $i_img2 = "";
        $i_img3 = $request->post('ifile_3');
        if($i_img3 == null)
            $i_img3 = "";
        $i_img4 = $request->post('ifile_4');
        if($i_img4 == null)
            $i_img4 = "";
        $i_img5 = $request->post('ifile_5');
        if($i_img5 == null)
            $i_img5 = "";
        $i_img6 = $request->post('ifile_6');
        if($i_img6 == null)
            $i_img6 = "";
        $i_img7 = $request->post('ifile_7');
        if($i_img7 == null)
            $i_img7 = "";
        $i_img8 = $request->post('ifile_8');
        if($i_img8 == null)
            $i_img8 = "";
        $h_img1 = $request->post('hfile_1');
        if($h_img1 == null)
            $h_img1 = "";
        $h_img2 = $request->post('hfile_2');
        if($h_img2 == null)
            $h_img2 = "";
        $h_img3 = $request->post('hfile_3');
        if($h_img3 == null)
            $h_img3 = "";
        $h_img4 = $request->post('hfile_4');
        if($h_img4 == null)
            $h_img4 = "";
        $h_img5 = $request->post('hfile_5');
        if($h_img5 == null)
            $h_img5 = "";
        $h_img6 = $request->post('hfile_6');
        if($h_img6 == null)
            $h_img6 = "";
        $h_img7 = $request->post('hfile_7');
        if($h_img7 == null)
            $h_img7 = "";
        $h_img8 = $request->post('hfile_8');
        if($h_img8 == null)
            $h_img8 = "";
        $i_link1 = $request->post('ilink_1');
        if($i_link1 == null)
            $i_link1 = "";
        $i_link2 = $request->post('ilink_2');
        if($i_link2 == null)
            $i_link2 = "";
        $i_link3 = $request->post('ilink_3');
        if($i_link3 == null)
            $i_link3 = "";
        $i_link4 = $request->post('ilink_4');
        if($i_link4 == null)
            $i_link4 = "";
        $i_link5 = $request->post('ilink_5');
        if($i_link5 == null)
            $i_link5 = "";
        $i_link6 = $request->post('ilink_6');
        if($i_link6 == null)
            $i_link6 = "";
        $i_link7 = $request->post('ilink_7');
        if($i_link7 == null)
            $i_link7 = "";
        $i_link8 = $request->post('ilink_8');
        if($i_link8 == null)
            $i_link8 = "";
        $h_link1 = $request->post('hlink_1');
        if($h_link1 == null)
            $h_link1 = "";
        $h_link2 = $request->post('hlink_2');
        if($h_link2 == null)
            $h_link2 = "";
        $h_link3 = $request->post('hlink_3');
        if($h_link3 == null)
            $h_link3 = "";
        $h_link4 = $request->post('hlink_4');
        if($h_link4 == null)
            $h_link4 = "";
        $h_link5 = $request->post('hlink_5');
        if($h_link5 == null)
            $h_link5 = "";
        $h_link6 = $request->post('hlink_6');
        if($h_link6 == null)
            $h_link6 = "";
        $h_link7 = $request->post('hlink_7');
        if($h_link7 == null)
            $h_link7 = "";
        $h_link8 = $request->post('hlink_8');
        if($h_link8 == null)
            $h_link8 = "";

        $dbstr=array(
            'i_cond'  => $i_cond,
            'h_cond'  => $h_cond,
            'i_img1'  => $i_img1,
            'i_link1' => $i_link1,
            'h_img1'  => $h_img1,
            'h_link1' => $h_link1,
            'i_img2'  => $i_img2,
            'i_link2' => $i_link2,
            'h_img2'  => $h_img2,
            'h_link2' => $h_link2,
            'i_img3'  => $i_img3,
            'i_link3' => $i_link3,
            'h_img3'  => $h_img3,
            'h_link3' => $h_link3,
            'i_img4'  => $i_img4,
            'i_link4' => $i_link4,
            'h_img4'  => $h_img4,
            'h_link4' => $h_link4,
            'i_img5'  => $i_img5,
            'i_link5' => $i_link5,
            'h_img5'  => $h_img5,
            'h_link5' => $h_link5,
            'i_img6'  => $i_img6,
            'i_link6' => $i_link6,
            'h_img6'  => $h_img6,
            'h_link6' => $h_link6,
            'i_img7'  => $i_img7,
            'i_link7' => $i_link7,
            'h_img7'  => $h_img7,
            'h_link7' => $h_link7,
            'i_img8'  => $i_img8,
            'i_link8' => $i_link8,
            'h_img8'  => $h_img8,
            'h_link8' => $h_link8
        );
        $strjson =json_encode($dbstr);

        $row=null;
        if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::connection($this->waaupglobal)->table('tb_frontpages')
                ->select(DB::connection($this->waaupglobal)->raw('trans, socialsetting'))
                ->where('g_path', $this->g_path)
                ->get()->first();
        }else{
            $row = DB::connection($this->waaupglobal)->table('tb_frontpages')
                ->select(DB::connection($this->waaupglobal)->raw('trans, socialsetting'))
                ->where('trans',$tranedLang)
                ->where('g_path', $this->g_path)
                ->get()->first();
        }

        $sucess = -1;
        if($row!==null){
            $sucess = DB::connection($this->waaupglobal)->table('tb_frontpages')
                ->Where('trans', $tranedLang)
                ->where('g_path', $this->g_path)
                ->update(['socialsetting' => $strjson, 'is_socialsetting' => 0]);
        }
        else{
            $sucess =  DB::connection($this->waaupglobal)->table('tb_frontpages')->insertGetId(
                [
                    'trans' => $tranedLang,
                    'socialsetting' => $strjson,
                    'is_socialsetting' => 0,
                    'g_path'=>$this->g_path
                ]
            );
        }

        if($sucess > -1)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else{
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }

        exit();
    }

    public function saveConfigurationGeneral(Request $request){
        $tranedLang = $request->post('transedlang');
        $siteTitle = $request->post('wwga_sitetitle_input');
        $sloganTxt = $request->post('wwga_slogan_input');
        $logofile = $request->file('wwga_logo_upload');
        $logopre = $request->post('wwga_logo_upload_preview_temp');
        $sitelogofile = $request->file('wwga_sitelogo_upload');
        $sitelogopre = $request->post('wwga_sitelogo_upload_preview_temp');
        $sloganfile = $request->file('wwga_slogan_upload');
        $sloganpre = $request->post('wwga_slogan_upload_preview_temp');
        $favicofile = $request->file('wwga_favico_upload');
        $favicopre = $request->post('wwga_favico_upload_preview_temp');

        $logoImg = $this->overwriteFileUploadFunc($logofile, $logopre, $this->logPath);
        $sitelogoImg = $this->overwriteFileUploadFunc($sitelogofile, $sitelogopre, $this->logPath);
        $sloganImg = $this->overwriteFileUploadFunc($sloganfile, $sloganpre, $this->logPath);
        $favicoImg = $this->overwriteFileUploadFunc($favicofile, $favicopre, $this->logPath);

        if($siteTitle == null)
            $siteTitle = "";
        if($sloganTxt == null)
            $sloganTxt = "";


        $dbstr=array(
            'logoImg'  => $logoImg,
            'sitelogoImg'  => $sitelogoImg,
            'sitetitle'  => $siteTitle,
            'sloganImg'  => $sloganImg,
            'slogantxt' => $sloganTxt,
            'favicoImg' => $favicoImg
        );
        $strjson =json_encode($dbstr);

        $row=null;
        if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::connection($this->waaupglobal)->table('tb_frontpages')
                ->select(DB::connection($this->waaupglobal)->raw('trans, configgenereal'))
                ->where('g_path', $this->g_path)
                ->get()->first();
        }else{
            $row = DB::connection($this->waaupglobal)->table('tb_frontpages')
                ->select(DB::connection($this->waaupglobal)->raw('trans, configgenereal'))
                ->where('trans',$tranedLang)
                ->where('g_path', $this->g_path)
                ->get()->first();
        }

        $sucess = -1;
        if($row!==null){
            $sucess = DB::connection($this->waaupglobal)->table('tb_frontpages')
                ->Where('trans', $tranedLang)
                ->where('g_path', $this->g_path)
                ->update(['configgenereal' => $strjson, 'is_configgenereal' => 0]);
        }
        else{
            $sucess =  DB::connection($this->waaupglobal)->table('tb_frontpages')->insertGetId(
                [
                    'trans' => $tranedLang,
                    'configgenereal' => $strjson,
                    'is_configgenereal' => 0,
                    'g_path'=>$this->g_path
                ]
            );
        }

        if($sucess > -1)
        {
            return \Response::json([
                'msg'  =>  'ok',
                'logoImg' => $logoImg,
                'sitelogoImg' => $sitelogoImg,
                'sloganImg' => $sloganImg,
                'favicoImg' => $favicoImg
            ]);
        }
        else{
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }

        exit();
    }

    public function getConfigurationGeneral(Request $request)
    {
        $tranedLang = $request->post('transedlang');

        $row=null;
        if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::connection($this->waaupglobal)->table('tb_frontpages')
                ->select(DB::connection($this->waaupglobal)->raw('trans, configgenereal'))
                ->where('g_path', $this->g_path)
                ->get()->first();
        }else{
            $row = DB::connection($this->waaupglobal)->table('tb_frontpages')
                ->select(DB::connection($this->waaupglobal)->raw('trans, configgenereal'))
                ->where('g_path', $this->g_path)
                ->where('trans',$tranedLang)
                ->get()->first();
        }

        $instrjson='';
        if($row!==null)
            $instrjson = $row->configgenereal;
        if($instrjson == null)
            $instrjson = '';
        return \Response::json([
            'msg'  =>  'ok',
            'lists' => $instrjson
        ]);

        exit();
    }

    public function getWesTranslation(Request $request){
        $iso=$request->post('iso');
        $org_iso=$request->post('orgiso');
        $searchcont  = $request->post('searchcont');
        $cnt    = $request->post('cnt');
        $start  = $request->post('start');
        $start_from = ($start-1) * $cnt;

        $where =" iso ='".$org_iso."'";
        if($searchcont!=null && $searchcont!=''){
            $where .=' and str_cont like "%'.$searchcont.'%" ';
        }
        $lists = DB::connection($this->waaupdb)->table('wesfront_lang')->whereRaw($where)->orderBy('id')->offset($start_from)->limit($cnt)->get();
        $rows =   DB::connection($this->waaupdb)->table('wesfront_lang')->whereRaw($where)->get();
        $total = count($rows);
        $totalpage = ceil($total / $cnt);
        if($total > 0)
        {
            $collection = collect();
            if($iso !=null)
            {
                foreach($lists as $list)
                {
                    $str_type = $list->str_type;
                    $str_key = $list->str_key;
                    $row = DB::connection($this->waaupdb)->table('wesfront_lang')
                        ->where('iso',$iso)
                        ->where('str_type',$str_type)
                        ->where('str_key',$str_key)->get()->first();
                    $list->tid=0;
                    $list->tcont='';
                    $list->tiso= $iso;
                    if($row!=null){
                        $list->tid=$row->id;
                        $list->tcont=$row->str_cont;
                        $list->tiso=$iso;
                    }
                    $collection[] =$list;
                }
            }
            else
            {
                foreach($lists as $list)
                {
                    $list->tid=$list->id;
                    $list->tcont=$list->str_cont;
                    $list->tiso=$iso;
                    $collection[] =$list;
                }
            }

            return \Response::json([
                'msg'   =>  'ok',
                'total'    =>  $total,
                'start'    =>  $start,
                'iso'    =>  $iso,
                'totalpage'    =>  $totalpage,
                'list' =>  $collection
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err",
                'total'    =>  $total,
                'iso'    =>  $iso,
                'message' => 'empty data in database'
            ]);
        }

        exit();
    }

    public function changeWesTranslation(Request $request){
        $iso=$request->post('iso');
        $str_key=$request->post('str_key');
        $str_type  = $request->post('str_type');
        $str_cont    = $request->post('str_cont');
        $value    = $request->post('value');
        $str_fname    = $request->post('str_fname');

        $createtime = date("Y-m-d h:i:s", time());
        $iid=0;
        if($value=='change')
        {
            try{

                DB::connection($this->waaupdb)->table('wesfront_lang')
                    ->Where('str_type', $str_type)
                    ->Where('str_key', $str_key)
                    ->Where('iso', $iso)
                    ->update([
                        'str_cont' => $str_cont
                        , 'updated_at' => $createtime
                    ]);
                $iid=1;


            }
            catch(\Exception $e){}
        }
        else //add
        {
            $iid =  DB::connection($this->waaupdb)->table('wesfront_lang')->insertGetId(
                [
                    'str_type' => $str_type
                    , 'str_key' => $str_key
                    , 'str_cont' => $str_cont
                    , 'iso' => $iso
                    , 'created_at' => $createtime
                ]
            );
        }

        /*    if(!empty($str_fname) && intval($iso) > 0){ //cckd
                $file = $_SERVER['DOCUMENT_ROOT'].'/../resources/vuedir/langs/translations/'.$str_fname.'.json';
                $rowlang = DB::connection($this->waaupdb)->table('sitetranslatecont')->where('iso',$iso)->get();
                if(count($rowlang) > 0){
                    $pagecont = '{';
                    foreach ($rowlang as $row)
                    {
                        $pagecont .= '"'.$row->str_type."_".$row->str_key.'":"'.$row->str_cont.'",';
                    }
                    $pagecont = rtrim($pagecont, ',');
                    $pagecont .= '}';
                    file_put_contents($file, $pagecont, LOCK_EX);
                }
            }*/


        if($iid > 0){
            return \Response::json([
                'msg'  =>  "ok"
                , 'iso' => $iso
                , 'status' =>$value
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "err"
                , 'iso' => $iso
                , 'status' =>$value
                ,'message' => "Error insert in db"
            ]);
        }
        exit();
    }

    public function websGlobalFrontPageRelease(Request $request)
    {
        $trans = $request->post('trans');
        $part = $request->post('part');
        $tabstatus = $request->post('tabstatus');
        $release = $request->post('release');
        $state_sql = "";

        if($part == "index"){
            switch ($tabstatus)
            {
                case 0:
                    $state_sql = "is_pageslider = ".$release;
                    break;
                case 1:
                    $state_sql = "is_teacher = ".$release;
                    break;
                case 2:
                    $state_sql = "is_student = ".$release;
                    break;
                case 3:
                    $state_sql = "is_background = ".$release;
                    break;
            }
        }
        if($part == "mainmenu"){
            $state_sql = "is_mainmenu = ".$release;
        }
        if($part == "footmenu"){
            $state_sql = "is_footmenu = ".$release;
        }
        if($part == "HeadFootBar"){
            switch ($tabstatus)
            {
                case 'head':
                    $state_sql = "is_head = ".$release;
                    break;
                case 'foot':
                    $state_sql = "is_foot = ".$release;
                    break;
            }
        }
        if($part == "configgeneral"){
            $state_sql = "is_configgenereal = ".$release;
        }
        if($part == "socialsetting"){
            $state_sql = "is_socialsetting = ".$release;
        }

        try{
            $dbstate = DB::connection($this->waaupglobal)->statement("UPDATE tb_frontpages SET ".$state_sql." where trans ='".$trans."'");
        }
        catch(\Exception $e){}

        if($dbstate) {
            return \Response::json([
                'msg' => "ok",
            ]);
        }
        else {
            return \Response::json([
                'msg' => "update error",
            ]);
        }

        exit();
    }

    public function getSideContentTypeData(Request $request)
    {
        $trans  = $request->trans;
        $start  = $request->start;
        $cnt    = $request->cnt;
        $ptype   = $request->type;
        $start_from = ($start-1) * $cnt;

        $query='';
        $query.='Select a.*, p.name ';
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='LEFT JOIN tb_pagecontent_type as p ';
        $query.='ON a.pagetype_id = p.id ';
        $query.='WHERE a.sidebar_type = 0 ';
        if ($ptype > 0) {
            $query.='AND a.pagetype_id  = '.$ptype.' ';
        }
        $query.='AND a.trans = "'.$trans.'" ';
        $query.='ORDER BY a.order_no asc LIMIT '.$start_from.', '.$cnt.'';
        $rows = DB::connection($this->waaupglobal)->select($query);

        $query1='';
        $query1.='Select a.*, p.name ';
        $query1.='FROM tb_pagecontent_sidebar as a ';
        $query1.='LEFT JOIN tb_pagecontent_type as p ';
        $query1.='ON a.pagetype_id = p.id ';
        $query1.='WHERE a.sidebar_type = 0 ';
        if ($ptype > 0) {
            $query1.='AND a.pagetype_id  = '.$ptype.' ';
        }
        $query1.='AND a.trans = "'.$trans.'" ';
        $query1.='ORDER BY a.order_no asc';
        $cntrows = DB::connection($this->waaupglobal)->select($query1);

        $total = count($cntrows);
        $totalpage = ceil($total / $cnt);

        if($rows!==null && count($rows) > 0){
            return \Response::json([
                'msg'   =>  'ok',
                'total'    =>  $total,
                'start'    =>  $start,
                'totalpage'    =>  $totalpage,
                'list' =>  $rows
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err'
            ]);
        }

        exit();
    }

    public function addSideContentTypeData(Request $request)
    {
        $id = $request->id;
        $trans  = $request->trans;
        $mode  = $request->mode;
        $title  = $request->title;
        $type  = $request->type;
        $number  = $request->number;
        $order =  $request->order;
        $created_at = date("Y-m-d h:i:s", time());
        $updated_at = date("Y-m-d h:i:s", time());

        $query='';
        $query.='Select a.* ';
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='WHERE a.sidebar_type = 0 ';
        $query.='AND a.pagetype_id  = '.$type.' ';
        $query.='AND a.order_no >= '.$order.' ';

        $fixrows = DB::connection($this->waaupglobal)->select($query);
        $fixcount = count($fixrows);

        if ($fixcount > 0) {
            foreach ($fixrows as $k => $v) {
                $order_no = $v->order_no;
                $id = $v->id;
                $cnt = DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')->where('sidebar_type', 0)->where('pagetype_id', $type)->doesntExist();

                if(!$cnt){

                    $sucess =  DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')
                        ->updateOrInsert(
                            ['id' => $id],
                            [
                                'order_no' => $order_no + 1,
                                'updated_at' => $updated_at
                            ]
                        );
                }
            }
        }

        $sucess =  DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')->insertGetId(
            [
                'sidebar_type' => 0,
                'trans' => $trans,
                'mode' => $mode,
                'title' => $title,
                'type' => $mode,
                'number' => $number,
                'order_no' => $order,
                'pagetype_id' => $type,
                'created_at' => $created_at,
                'updated_at' => $updated_at
            ]
        );

        if($sucess)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }

        exit();
    }

    public function editSideContentData(Request $request)
    {
        $id = $request->id;
        $sidebar_type = $request->sidetype;
        $mode  = $request->mode;
        $title  = $request->title;
        $type  = $request->type;
        $number  = $request->number;
        $order =  $request->order;
        $updated_at = date("Y-m-d h:i:s", time());

        $cnt = DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')->where('id', $id)->doesntExist();
        if(!$cnt){
            $row = DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')->where('id', $id)->get()->first();
            $old_order = $row ->order_no;
            $change_another = false;
            $biger_than_old = false;
            if ($order > $old_order) {
                $change_another = true;
                $biger_than_old = true;
            }
            else if ($order < $old_order){
                $change_another = true;
                $biger_than_old = false;
            }

            if ($change_another) {
                $query='';
                $query.='Select a.* ';
                $query.='FROM tb_pagecontent_sidebar as a ';
                $query.='WHERE a.sidebar_type = '. $sidebar_type. ' ';
                $query.='AND a.pagetype_id  = '.$type.' ';
                if ($biger_than_old) {
                    $query.='AND a.order_no > '.$old_order.' ';
                    $query.='AND a.order_no <= '.$order.' ';
                }
                else {
                    $query.='AND a.order_no < '.$old_order.' ';
                    $query.='AND a.order_no >= '.$order.' ';
                }

                $fixrows = DB::connection($this->waaupglobal)->select($query);
                $fixcount = count($fixrows);
                if ($fixcount > 0) {
                    foreach ($fixrows as $k => $v) {
                        $order_no = $v->order_no;
                        if ($biger_than_old)
                            $new_order = $order_no - 1;
                        else
                            $new_order = $order_no + 1;
                        $tid = $v->id;
                        $cnt = DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')
                            ->where('sidebar_type', $sidebar_type)
                            ->where('pagetype_id', $type)->doesntExist();
                        if(!$cnt){
                            $sucess =  DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')
                                ->updateOrInsert(
                                    ['id' => $tid],
                                    [
                                        'order_no' => $new_order,
                                        'updated_at' => $updated_at
                                    ]
                                );
                        }
                    }
                }
            }
            $sucess =  DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')
                ->updateOrInsert(
                    ['id' => $id],
                    [
                        'sidebar_type' => $sidebar_type,
                        'mode' => $mode,
                        'title' => $title,
                        'type' => $mode,
                        'number' => $number,
                        'order_no' => $order,
                        'pagetype_id' => $type,
                        'updated_at' => $updated_at
                    ]
                );
        }

        if($sucess)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }
        exit();
    }

    public function getSideContentPageData(Request $request)
    {
        $trans  = $request->trans;
        $start  = $request->start;
        $cnt    = $request->cnt;
        $ptype  = $request->type;
        $start_from = ($start-1) * $cnt;
        $tstring = $request->tstring;

        $query='';
        $query.='Select a.*, p.name ';
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='LEFT JOIN tb_pagecontent_type as p ';
        $query.='ON a.pagetype_id = p.id ';
        $query.='WHERE a.sidebar_type = 1 ';
        $query.='AND a.trans = "'.$trans.'" ';
        if ($ptype > 0)
            $query.='AND a.pagetype_id  = '.$ptype.' ';
        if ($tstring !=='')
            $query.='AND a.title LIKE "%'.$tstring.'%" ';
        $query.='ORDER BY a.order_no asc LIMIT '.$start_from.', '.$cnt.'';
        $rows = DB::connection($this->waaupglobal)->select($query);

        $query1='';
        $query1.='Select a.*, p.name ';
        $query1.='FROM tb_pagecontent_sidebar as a ';
        $query1.='LEFT JOIN tb_pagecontent_type as p ';
        $query1.='ON a.pagetype_id = p.id ';
        $query1.='WHERE a.sidebar_type = 1 ';
        $query1.='AND a.trans = "'.$trans.'" ';
        if ($ptype > 0)
            $query1.='AND a.pagetype_id  = '.$ptype.' ';
        if ($tstring !=='')
            $query1.='AND a.title LIKE "%'.$tstring.'%" ';
        $query1.='ORDER BY a.order_no asc';
        $cntrows = DB::connection($this->waaupglobal)->select($query1);

        $total = count($cntrows);
        $totalpage = ceil($total / $cnt);

        if($rows!==null && count($rows) > 0){
            return \Response::json([
                'msg'   =>  'ok',
                'total'    =>  $total,
                'start'    =>  $start,
                'totalpage'    =>  $totalpage,
                'list' =>  $rows
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err'
            ]);
        }

        exit();
    }

    public function addSideContentPageData(Request $request)
    {
        $id = $request->id;
        $trans  = $request->trans;
        $mode  = $request->mode;
        $title  = $request->title;
        $type  = $request->type;
        $number  = $request->number;
        $order =  $request->order;
        $created_at = date("Y-m-d h:i:s", time());
        $updated_at = date("Y-m-d h:i:s", time());

        $query='';
        $query.='Select a.* ';
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='WHERE a.sidebar_type = 1 ';
        $query.='AND a.pagetype_id  = '.$type.' ';
        $query.='AND a.order_no >= '.$order.' ';

        $fixrows = DB::connection($this->waaupglobal)->select($query);
        $fixcount = count($fixrows);
        if ($fixcount > 0) {
            foreach ($fixrows as $k => $v) {
                $order_no = $v->order_no;
                $id = $v->id;
                $cnt = DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')
                    ->where('sidebar_type', 1)
                    ->where('pagetype_id', $type)->doesntExist();
                if(!$cnt){
                    $sucess =  DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')
                        ->updateOrInsert(
                            ['id' => $id],
                            [
                                'order_no' => $order_no + 1,
                                'updated_at' => $updated_at
                            ]
                        );
                }
            }
        }

        $sucess =  DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')->insertGetId(
            [
                'sidebar_type' => 1,
                'trans' => $trans,
                'mode' => $mode,
                'title' => $title,
                'type' => $mode,
                'number' => $number,
                'order_no' => $order,
                'pagetype_id' => $type,
                'created_at' => $created_at,
                'updated_at' => $updated_at
            ]
        );

        if($sucess)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  'err'
            ]);
        }

        exit();
    }

    public function deleteSideContentData(Request $request)
    {
        $id = $request->id;
        $lang = $request->lang;
        $updated_at = date("Y-m-d h:i:s", time());
        $msg='ok';
        try{
            $row = DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')->where('id', $id)->get()->first();
            $sidetype = $row ->sidebar_type;
            $order_no = $row ->order_no;
            $pagetype_id = $row ->pagetype_id;

            $query='';
            $query.='Select a.* ';
            $query.='FROM tb_pagecontent_sidebar as a ';
            $query.='WHERE a.trans = '.$lang.' ';
            $query.='AND a.sidebar_type  = '.$sidetype.' ';
            $query.='AND a.pagetype_id  = '.$pagetype_id.' ';
            $query.='AND a.order_no >= '.$order_no.' ';

            $fixrows = DB::connection($this->waaupglobal)->select($query);
            $fixcount = count($fixrows);
            if ($fixcount > 0) {
                foreach ($fixrows as $k => $v) {
                    $order_no = $v->order_no;
                    $tid = $v->id;
                    $cnt = DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')
                        ->where('sidebar_type', $sidetype)
                        ->where('pagetype_id', $pagetype_id)->doesntExist();
                    if(!$cnt){
                        $sucess =  DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')
                            ->where('trans', $lang)
                            ->updateOrInsert(
                                ['id' => $tid],
                                [
                                    'order_no' => $order_no - 1,
                                    'updated_at' => $updated_at
                                ]
                            );
                    }
                }
            }

            DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')
                ->delete($id);
        }
        catch(\Exception $e){
            $msg='err';
        }
        return \Response::json([
            'msg'   =>  $msg
        ]);

        exit();
    }

    public function getSideContentCountAccoringPageType(Request $request)
    {
        $lang = $request->lang;
        $sidetype  = $request->sidetype;
        $pagetype = $request->pagetypeid;

        $query='';
        $query.='Select a.*, p.name ';
        $query.='FROM tb_pagecontent_sidebar as a ';
        $query.='LEFT JOIN tb_pagecontent_type as p ';
        $query.='ON a.pagetype_id = p.id ';
        $query.='WHERE a.trans = "'.$lang.'" ';
        $query.='AND a.sidebar_type = '.$sidetype. ' ';
        if ($pagetype > 0)
            $query.='AND a.pagetype_id  = '.$pagetype.' ';
        $rows = DB::connection($this->waaupglobal)->select($query);
        $cnt = count($rows);

        if($cnt!==null){
            return \Response::json([
                'msg'   =>  'ok',
                'cnt'    =>  $cnt,
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err',
            ]);
        }

        exit();
    }

    public function getSideContentDataFromId(Request $request)
    {
        $id  = $request->id;
        $row = DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')->where('id', $id)->get()->first();


        if($row!==null){
            return \Response::json([
                'msg'   =>  'ok',
                'list' =>  $row
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err',
            ]);
        }

        exit();
    }

    public  function wwpContentRelease(Request $request){
        $trans = $request->post('trans');
        $tabstatus = $request->post('tabstatus');
        $release = $request->post('release');

        $table = "";
        $field = "";
        if($tabstatus == 0 || $tabstatus == 3)
        {
            $table = "tb_pagecontent_list";
            $field = "is_contentlist";
        }
        else if($tabstatus == 1)
        {
            $table = "tb_pagecontent_type";
            $field = "is_contenttype";
        }
        else if($tabstatus == 5)
        {
            $table = "tb_pagecontent_sidebar";
            $field = "is_sidebar";
        }
        $row = DB::connection($this->waaupglobal)->table($table)
            ->Where([
                ['trans' , $trans],
                ['g_path', $this->g_path]
            ])->get()->first();

        $sucess = -1;
        if($row!==null)
        {
            $sucess = DB::connection($this->waaupglobal)->table($table)
                ->Where([
                    ['trans' , $trans],
                    ['g_path', $this->g_path]
                ])
                ->update([$field => $release]);
        }
        else
        {
            $sucess =  DB::connection($this->waaupglobal)->table('tb_pageregister')->insertGetId(
                [
                    'trans' => $trans,
                    'g_path'=>$this->g_path,
                    $field => $release
                ]
            );
        }
        if($sucess > -1)
        {
            return \Response::json([
                'msg'  =>  'ok'
            ]);
        }
    }

    public function getSidePageTypeList(Request $request){
        $lang = $request->post('lang');
        $rows = DB::connection($this->waaupglobal)->table('tb_pagecontent_type')
            ->where('trans',$lang)
            ->where('g_path', $this->g_path)->get();
        $arows = DB::connection($this->waaupglobal)->table('tb_pagecontent_type')
            ->where('g_path', $this->g_path)->get();
        if($rows!==null && count($rows) > 0){
            return \Response::json([
                'msg'   =>  'ok'
                ,'list' => $rows
            ]);
        }
        else
        {
            /* if($arows!==null && count($arows) > 0)
             {
                 return \Response::json([
                     'msg'   =>  'ok'
                     ,'list' => $arows
                 ]);
             }
             else*/
            {
                return \Response::json([
                    'msg'   =>  'err'
                    ,'list' => ''
                ]);
            }
        }

        exit();
    }

    private function getAppearanceHeadList($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM tb_appearance_head ";
        $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::connection($this->waaupglobal)->select( DB::connection($this->waaupglobal)->raw($sql));
        return $rows;
    }
    private function getAppsHeaderName($table, $userid, $lists, $idx){
        $headers = array();

        foreach ($lists as $list){
            $wid = "";
            if($idx == 1)
                $wid = $list->topheader_id;
            else if($idx == 2)
                $wid = $list->header_id;
            else if($idx == 3)
                $wid = $list->suheader_id;
            $rows = DB::connection($this->waaupapps)->table($table)
                ->where("userid", $userid)
                ->where("id", $wid)
                ->get()->first();
            array_push($headers, $rows->name);
        }

        return $headers;
    }
    public function getWWAHeadContentList(Request $request){
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getAppearanceHeadList($userid, $pstart, $pcnt, 0);
        $total = $this->getAppearanceHeadList($userid, $pstart, $pcnt, 1);
        $totalpage = ceil(count($total) / $pcnt);

        $topheaders = $this->getAppsHeaderName('tb_topheadcontent', $userid, $lists, 1);
        $headheaders = $this->getAppsHeaderName('tb_headheadcontent', $userid, $lists, 2);
        $subheaders = $this->getAppsHeaderName('tb_subheadcontent', $userid, $lists, 3);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "tops" => $topheaders,
            "heads" => $headheaders,
            "subs" => $subheaders,
            'total_lists' => $total,
            'pstart' => $pstart,
            'total' => count($total),
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function selectWWAHeadContentList(Request $request){
        $userid = $request->post('userid');
        $sel_id = $request->post('sel_id');

        $rows = DB::connection($this->waaupglobal)->table('tb_appearance_head')
            ->where("userid", $userid)
            ->where("id", $sel_id)
            ->get()->first();

        return \Response::json([
            "msg" => "ok",
            "lists" => $rows
        ]);

        exit();
    }
    public function getAWAHContentLists(Request $request){
        $userid = $request->post('userid');

        $topheaders = $rows = DB::connection($this->waaupapps)->table('tb_topheadcontent')
            ->where("userid", $userid)
            ->get();
        $headheaders = $rows = DB::connection($this->waaupapps)->table('tb_headheadcontent')
            ->where("userid", $userid)
            ->get();
        $subheaders = $rows = DB::connection($this->waaupapps)->table('tb_subheadcontent')
            ->where("userid", $userid)
            ->get();

        return \Response::json([
            "msg" => "ok",
            "toplists" => $topheaders,
            "headlists" => $headheaders,
            "sublists" => $subheaders,
        ]);

        exit();
    }
    public function addWWAHeadContentList(Request $request){
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $name = $request->post('name');
        $sel_top = $request->post('sel_top');
        $sel_head = $request->post('sel_head');
        $sel_sub = $request->post('sel_sub');
        $radio_top = $request->post('radio_top');
        $radio_head = $request->post('radio_head');
        $radio_sub = $request->post('radio_sub');

        $res = DB::connection($this->waaupglobal)->table('tb_appearance_head')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'topheader_id'=>$sel_top,
                    'topheader_status'=>$radio_top,
                    'header_id'=>$sel_head,
                    'header_status'=>$radio_head,
                    'suheader_id'=>$sel_sub,
                    'subheader_status'=>$radio_sub]
            );
        $lists = $this->getAppearanceHeadList($userid, $pstart, $pcnt, 0);
        $total = $this->getAppearanceHeadList($userid, $pstart, $pcnt, 1);
        $totalpage = ceil(count($total) / $pcnt);

        $topheaders = $this->getAppsHeaderName('tb_topheadcontent', $userid, $lists, 1);
        $headheaders = $this->getAppsHeaderName('tb_headheadcontent', $userid, $lists, 2);
        $subheaders = $this->getAppsHeaderName('tb_subheadcontent', $userid, $lists, 3);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "tops" => $topheaders,
            "heads" => $headheaders,
            "subs" => $subheaders,
            'total_lists' => $total,
            'pstart' => $pstart,
            'total' => count($total),
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editWWAHeadContentList(Request $request){
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $name = $request->post('name');
        $sel_top = $request->post('sel_top');
        $sel_head = $request->post('sel_head');
        $sel_sub = $request->post('sel_sub');
        $radio_top = $request->post('radio_top');
        $radio_head = $request->post('radio_head');
        $radio_sub = $request->post('radio_sub');

        $res = DB::connection($this->waaupglobal)->table('tb_appearance_head')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$name,
                    'topheader_id'=>$sel_top,
                    'topheader_status'=>$radio_top,
                    'header_id'=>$sel_head,
                    'header_status'=>$radio_head,
                    'suheader_id'=>$sel_sub,
                    'subheader_status'=>$radio_sub]
            );
        $lists = $this->getAppearanceHeadList($userid, $pstart, $pcnt, 0);
        $total = $this->getAppearanceHeadList($userid, $pstart, $pcnt, 1);
        $totalpage = ceil(count($total) / $pcnt);

        $topheaders = $this->getAppsHeaderName('tb_topheadcontent', $userid, $lists, 1);
        $headheaders = $this->getAppsHeaderName('tb_headheadcontent', $userid, $lists, 2);
        $subheaders = $this->getAppsHeaderName('tb_subheadcontent', $userid, $lists, 3);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "tops" => $topheaders,
            "heads" => $headheaders,
            "subs" => $subheaders,
            'total_lists' => $total,
            'pstart' => $pstart,
            'total' => count($total),
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteWWAHeadContentList(Request $request){
        $editid = $request->post('edit_id');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupglobal)->table('tb_appearance_head')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->delete();
        $lists = $this->getAppearanceHeadList($userid, $pstart, $pcnt, 0);
        $total = $this->getAppearanceHeadList($userid, $pstart, $pcnt, 1);
        $totalpage = ceil(count($total) / $pcnt);

        $topheaders = $this->getAppsHeaderName('tb_topheadcontent', $userid, $lists, 1);
        $headheaders = $this->getAppsHeaderName('tb_headheadcontent', $userid, $lists, 2);
        $subheaders = $this->getAppsHeaderName('tb_subheadcontent', $userid, $lists, 3);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "tops" => $topheaders,
            "heads" => $headheaders,
            "subs" => $subheaders,
            'total_lists' => $total,
            'pstart' => $pstart,
            'total' => count($total),
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function groupDeleteWWAHeadContentList(Request $request){
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::connection($this->waaupglobal)->table('tb_appearance_head')
                ->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }
        $lists = $this->getAppearanceHeadList($userid, $pstart, $pcnt, 0);
        $total = $this->getAppearanceHeadList($userid, $pstart, $pcnt, 1);
        $totalpage = ceil(count($total) / $pcnt);

        $topheaders = $this->getAppsHeaderName('tb_topheadcontent', $userid, $lists, 1);
        $headheaders = $this->getAppsHeaderName('tb_headheadcontent', $userid, $lists, 2);
        $subheaders = $this->getAppsHeaderName('tb_subheadcontent', $userid, $lists, 3);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            "tops" => $topheaders,
            "heads" => $headheaders,
            "subs" => $subheaders,
            'total_lists' => $total,
            'pstart' => $pstart,
            'total' => count($total),
            'totalpage' => $totalpage
        ]);

        exit();
    }

    public function getWWATLayoutBoxedList(Request $request)
    {
        $userid = $request->post('userid');
        $boxeds = $rows = DB::connection($this->waaupapps)->table('tb_boxed')
            ->where("userid", $userid)
            ->get();

        return \Response::json([
            "msg" => "ok",
            "boxeds" => $boxeds
        ]);

        exit();
    }
    private function getWWATLayout($userid, $pstart, $pcnt, $all){
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT id, userid, name, style, boxed_id AS bid, left_occupied, left_padding, is_left, right_occupied, right_padding, is_right, ";
        $sql .= "(SELECT name FROM waaupapps.tb_boxed WHERE id=bid) AS bname ";
        $sql .= "FROM waaupglobal.tb_appearance_layout ";
        $sql .= "WHERE userid=".$userid." ";
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::connection($this->waaupglobal)->select( DB::connection($this->waaupglobal)->raw($sql) );
        return $rows;
    }
    public function getWWATLayoutList(Request $request)
    {
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $lists = $this->getWWATLayout($userid, $pstart, $pcnt, 0);
        $total = count($this->getWWATLayout($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function addWWATLayoutList(Request $request)
    {
        $userid = $request->post('userid');
        $name = $request->post('name');
        $style = $request->post('style');
        $bid = $request->post('bid');
        if($bid == null || $bid == '')
            $bid = 0;
        $left_occ = $request->post('left_occ');
        $left = $request->post('left');
        $is_left = $request->post('is_left');
        $right_occ = $request->post('right_occ');
        $right = $request->post('right');
        $is_right = $request->post('is_right');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupglobal)->table('tb_appearance_layout')
            ->insertGetId([
                    'userid' => $userid,
                    'name'=>$name,
                    'style'=>$style,
                    'boxed_id'=>$bid,
                    'left_occupied'=>$left_occ,
                    'left_padding'=>$left,
                    'is_left'=>$is_left,
                    'right_occupied'=>$right_occ,
                    'right_padding'=>$right,
                    'is_right'=>$is_right]
            );

        $lists = $this->getWWATLayout($userid, $pstart, $pcnt, 0);
        $total = count($this->getWWATLayout($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function editWWATLayoutList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $name = $request->post('name');
        $style = $request->post('style');
        $bid = $request->post('bid');
        if($bid == null || $bid == '')
            $bid = 0;
        $left_occ = $request->post('left_occ');
        $left = $request->post('left');
        $is_left = $request->post('is_left');
        $right_occ = $request->post('right_occ');
        $right = $request->post('right');
        $is_right = $request->post('is_right');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupglobal)->table('tb_appearance_layout')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->update([
                    'name'=>$name,
                    'style'=>$style,
                    'boxed_id'=>$bid,
                    'left_occupied'=>$left_occ,
                    'left_padding'=>$left,
                    'is_left'=>$is_left,
                    'right_occupied'=>$right_occ,
                    'right_padding'=>$right,
                    'is_right'=>$is_right]
            );

        $lists = $this->getWWATLayout($userid, $pstart, $pcnt, 0);
        $total = count($this->getWWATLayout($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function deleteWWATLayoutList(Request $request)
    {
        $userid = $request->post('userid');
        $editid = $request->post('editid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        $res = DB::connection($this->waaupglobal)->table('tb_appearance_layout')
            ->where('userid', $userid)
            ->where('id', $editid)
            ->delete();

        $lists = $this->getWWATLayout($userid, $pstart, $pcnt, 0);
        $total = count($this->getWWATLayout($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function allDeleteWWATLayoutList(Request $request)
    {
        $userid = $request->post('userid');
        $ids = $request->post('ids');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');

        foreach ($ids as $id) {
            $res = DB::connection($this->waaupglobal)->table('tb_appearance_layout')
                ->where('userid', $userid)
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getWWATLayout($userid, $pstart, $pcnt, 0);
        $total = count($this->getWWATLayout($userid, $pstart, $pcnt, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }

    private function getPagesList($trans, $pstart, $pcnt, $search, $all)
    {
        $pfrom = (intval($pstart) - 1) * $pcnt;

        $sql = "SELECT * FROM tb_pages_management ";
        $sql .= "WHERE (title LIKE '%".$search."%' OR page_name LIKE '%".$search."%') ";
        if($trans != '' && $trans != null)
            $sql .= "AND trans='".$trans."' ";
        $sql .= "AND active=1 ";
        $sql .= "ORDER BY id ASC ";
        if($all == 0)
            $sql .= "LIMIT ".$pcnt." OFFSET ".$pfrom;

        $rows = DB::connection($this->waaupglobal)->select( DB::connection($this->waaupglobal)->raw($sql));
        return $rows;
    }
    public function wwppGetLayoutAndHeadFoot(Request $request){
        $userid = $request->post('userid');
        $head = DB::connection($this->waaupglobal)->table('tb_appearance_head')
            ->where('userid', $userid)->get();
        $head_list = array();
        foreach ($head as $h){
            array_push($head_list, $h);
        }
        $layout = DB::connection($this->waaupglobal)->table('tb_appearance_layout')
            ->where('userid', $userid)->get();
        $layout_list = array();
        foreach ($layout as $l){
            array_push($layout_list, $l);
        }
        return \Response::json([
            "msg" => "ok",
            'head' => $head_list,
            'layout' => $layout_list
        ]);

        exit();
    }
    public function wwppGetContent(Request $request)
    {
        $trans = $request->post('trans');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $search = $request->post('search');

        $lists = $this->getPagesList($trans, $pstart, $pcnt, $search, 0);
        $total = count($this->getPagesList($trans, $pstart, $pcnt, $search, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function wwppChangeStatus(Request $request)
    {
        $trans = $request->post('trans');
        $editid = $request->post('editid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $search = $request->post('search');
        $status = $request->post('status');

        $res = DB::connection($this->waaupglobal)->table('tb_pages_management')
            ->where('id', $editid)
            ->update(['status'=>$status]);

        $lists = $this->getPagesList($trans, $pstart, $pcnt, $search, 0);
        $total = count($this->getPagesList($trans, $pstart, $pcnt, $search, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function wwppSelectContent(Request $request)
    {
        $pagename = $request->post('pagename');

        $row = DB::connection($this->waaupglobal)->table('tb_pages_management')
            ->where('page_name', $pagename)
            ->get();

        return \Response::json([
            "msg" => "ok",
            "row" => $row
        ]);

        exit();
    }
    private function wwppExistUrlAndTitle($userid, $trans, $field, $val){
        $row = DB::connection($this->waaupglobal)->table('tb_pages_management')
            ->where('trans', $trans)
            ->where($field, $val)
            ->get();

        return $row;
    }
    public function wwppSaveContent(Request $request)
    {
        $allData = $request->post('allData');
        $pgsetstate = $request->post('pgsetstate');

        $page_name = '';
        if(is_array($allData)){
            $ary_in=array();
            foreach ($allData as $item) {
                foreach ($item as $key => $value) {
                    switch ($key) {
                        case "langname":
                            $langname = $value;
                            break;
                        case "trans":
                            $trans = $value;
                            break;
                        case "pagename":
                            $pagename = $value;
                            $page_name = $pagename;
                            break;
                        case "title":
                            $title = $value;
                            break;
                        case "url":
                            $url = $value;
                            break;
                        case "author":
                            $author = $value;
                            break;
                        case "is_author":
                            $is_author = $value;
                            break;
                        case "time":
                            $time = $value;
                            break;
                        case "is_time":
                            $is_time = $value;
                            break;
                        case "layout":
                            $layout = $value;
                            break;
                        case "head":
                            $head = $value;
                            break;
                        case "is_head":
                            $is_head = $value;
                            break;
                        case "foot":
                            $foot = $value;
                            break;
                        case "is_foot":
                            $is_foot = $value;
                            break;
                        case "content":
                            $content = $value;
                            break;
                        case "active":
                            $active = $value;
                            break;
                    }

                }

                $ary_item = array(
                    'trans' => $trans,
                    'page_name' => $pagename,
                    'page_type' => 'Basic',
                    'language' => $langname,
                    'title' => $title,
                    'author' => $author,
                    'is_author' => $is_author,
                    'created_at' => $time,
                    'is_time' => $is_time,
                    'url' => $url,
                    'layout' => $layout,
                    'head' => $head,
                    'is_head' => $is_head,
                    'foot' => $foot,
                    'is_foot' => $is_foot,
                    'content' => $content,
                    'active' => $active
                );

                array_push($ary_in, $ary_item);
            }
        }

        if($pgsetstate==='add')
        {
            $iid =  DB::connection($this->waaupglobal)->table('tb_pages_management')->insert($ary_in);
        }
        if($pgsetstate==='mod')
        {
            for($i = 0; $i < count($ary_in); $i++) {
                $item = $ary_in[$i];
                $iid = DB::connection($this->waaupglobal)->table('tb_pages_management')
                    ->where('page_name', $page_name)
                    ->where('trans', $item['trans'])
                    ->update($ary_in[$i]);
            }
        }
        $msg = 'ok';
        if($iid===false)
            $msg='err';

        return \Response::json([
            'msg'  =>  $msg
        ]);

        exit();
    }
    public function wwppDeleteContent(Request $request)
    {
        $trans = $request->post('trans');
        $editid = $request->post('editid');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $search = $request->post('search');

        DB::connection($this->waaupglobal)->table('tb_pages_management')
            ->where('id', $editid)
            ->delete();

        $lists = $this->getPagesList($trans, $pstart, $pcnt, $search, 0);
        $total = count($this->getPagesList($trans, $pstart, $pcnt, $search, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }
    public function wwppAllDeleteContent(Request $request)
    {
        $trans = $request->post('trans');
        $ids = $request->post('ids');
        $userid = $request->post('userid');
        $pstart = $request->post('pstart');
        $pcnt = $request->post('pcnt');
        $search = $request->post('search');

        foreach ($ids as $id) {
            DB::connection($this->waaupglobal)->table('tb_pages_management')
                ->where('id', $id)
                ->delete();
        }

        $lists = $this->getPagesList($trans, $pstart, $pcnt, $search, 0);
        $total = count($this->getPagesList($trans, $pstart, $pcnt, $search, 1));
        $totalpage = ceil($total / $pcnt);

        return \Response::json([
            "msg" => "ok",
            "lists" => $lists,
            'pstart' => $pstart,
            'total' => $total,
            'totalpage' => $totalpage
        ]);

        exit();
    }

    public function getWebsStoredLang(Request $request)
    {
        $rows = DB::connection($this->waaupglobal)->table('tb_conflanguage')->get();
        $cnt = count($rows);
        if($rows!== null && $cnt > 0)
        {
            $addlist=array();
            for($i=0;$i<$cnt;$i++){
                $row = $rows[$i];
                $iso=$row->iso;
                $dialcode=$row->dialcode;
                $status=$row->status;
                $name=$row->name;
                $one=$iso.'-'.$dialcode.'-'.$name.'-'.$status;
                array_push($addlist, $one);
            }

            return \Response::json([
                'msg'  =>  "ok",
                'cnt' =>$cnt,
                'langlist' => $addlist
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "empty",
                'cnt' => 0,
                'langlist' => ''
            ]);
        }

        exit();
    }

}
