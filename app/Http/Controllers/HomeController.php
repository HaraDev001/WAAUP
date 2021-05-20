<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use JoggApp\GoogleTranslate\GoogleTranslateClient;

class HomeController extends BaseController
{

    public function __construct(Request $request)
    {
        parent::__construct($request);
        //$this->get_seeder_cont();
    }

    public function get_seeder_cont()
    {
        /*$rows =DB::connection($this->waaupdb)->table('sitetranslatecont')
            ->where('iso', '1')->get();*/
        $rows =DB::connection($this->waaupdb)->table('wesfront_lang')
            ->where('iso', 'en')->get();

        $langtxt='['.PHP_EOL;
        $rowcnt=count($rows);
        foreach ($rows as $row){
            if($rowcnt < 2)
                $comma='';
            else
                $comma=',';

            $langtxt.='[';
            $langtxt.='"str_type" => "'.$row->str_type.'"';
            $langtxt.=', "str_key" => "'.$row->str_key.'"';
            $langtxt.=', "str_cont" => "'.$row->str_cont.'"';
            $langtxt.=', "str_link" => "'.$row->str_link.'"';
            $langtxt.=', "iso" => "en"';
            $langtxt.=', "g_path" => "remote"';
            $langtxt.=']'.$comma.PHP_EOL;
            --$rowcnt;
        }
        $langtxt.=']';

        $path = $_SERVER['DOCUMENT_ROOT']."/frontlang.txt";
        $wfile = @fopen($path, "w") or die("Unable to open file!");
        @fwrite($wfile, $langtxt);
        @fclose($wfile);
    }

    public function index(Request $request, $lang=null)
    {

        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);
        $pagecontents->put('ciso', $ciso);
       // $pagecontents->put("IMGURL",  '');
        $temp =  $this->getHeadersData($ciso);

        $items = $temp->all();
        foreach ($items as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp1 = $this->sliderData($ciso);
        $items1 = $temp1->all();
        foreach ($items1 as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp2 =  $this->getFootData($ciso);
        $items2 = $temp2->all();
        foreach ($items2 as $key => $value) {
            $pagecontents->put($key, $value);
        }
        $pagecontents->put('curMU', 'login');
       /* $templang = array();
        array_push($templang, array ('Text' =>"Hello, world!"));
        $commonctrl = new CommonController;
        $result = $commonctrl->Translate("ko", $templang);
        $transed = json_decode($result);
        var_dump($transed);
        exit();*/
        return view('home')->with($pagecontents->toArray());
    }

    public function sliderData($ciso=null)
    {
        $pagecontents = collect([]);
        $row1 =null;
        $row2 =null;
        $row3 =null;
        $row4 =null;
        $row1  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('pageslider, sliderstatus'))
            ->whereRaw('trans like "'.$ciso.'%" and is_pageslider=1 and g_path="'.$this->g_path.'" ')->get()->first();
        $row2  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('teacher'))
            ->whereRaw('trans like "'.$ciso.'%" and is_teacher=1 and g_path="'.$this->g_path.'" ')->get()->first();
        $row3  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('student'))
            ->whereRaw('trans like "'.$ciso.'%" and is_student=1 and g_path="'.$this->g_path.'" ')->get()->first();
        $row4  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('background'))
            ->whereRaw('trans like "'.$ciso.'%" and is_background=1 and g_path="'.$this->g_path.'" ')->get()->first();

        /* center part of main page slider */
        if($row1 !==null && !empty($row1->pageslider))
        {
            $pagecontents->put('pageslider',$row1->pageslider);
        }
        else
            $pagecontents->put('pageslider','');

        if($row1 !==null && !empty($row1->sliderstatus))
        {
            $pagecontents->put('sliderstatus',$row1->sliderstatus);
        }
        else
            $pagecontents->put('sliderstatus','');

        if($row2 !==null && !empty($row2->teacher))
        {
            $pagecontents->put('teacher',$row2->teacher);
        }
        else
            $pagecontents->put('teacher','');

        if($row3 !==null && !empty($row3->student))
        {
            $pagecontents->put('student',$row3->student);
        }
        else
            $pagecontents->put('student','');

        if($row4 !==null && !empty($row4->background))
        {
            $pagecontents->put('pgbk',$row4->background);
        }
        else
            $pagecontents->put('pgbk','');

        return $pagecontents;

    }
    public function login(Request $request, $lang=null)
    {
        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);
        $pagecontents->put('ciso', $ciso);
        $temp =  $this->getHeadersData($ciso);

        $items = $temp->all();
        foreach ($items as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp2 =  $this->getFootData($ciso);
        $items2 = $temp2->all();
        foreach ($items2 as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $row = null;
        $row = DB::connection($this->waaupdb)->table('sitebasicsetting')->get()->first();

        if($row !== null)
        {
            if($row->login !== null && $row->login !== ''){
                $logininfo = json_decode($row->login);
                $pagecontents->put('background', $logininfo->backimg);
                $pagecontents->put('logo', $logininfo->logoimg);
                $pagecontents->put('tiptxt', $logininfo->tiptxt);
                $pagecontents->put('fontcolor', $logininfo->fontcolor);
                $pagecontents->put('themecolor', $logininfo->themecolor);
                $pagecontents->put('backcolor', $logininfo->backcolor);
            }
            else{
                $pagecontents->put('background', '');
                $pagecontents->put('logo', '');
                $pagecontents->put('tiptxt', '');
                $pagecontents->put('fontcolor', '#ffffff');
                $pagecontents->put('themecolor', '#104f8e');
                $pagecontents->put('backcolor', '#ffffff');
            }
        }
        else
        {
            $pagecontents->put('background', '');
            $pagecontents->put('logo', '');
            $pagecontents->put('tiptxt', '');
            $pagecontents->put('fontcolor', '#ffffff');
            $pagecontents->put('themecolor', '#104f8e');
            $pagecontents->put('backcolor', '#ffffff');
        }

        $pagecontents->put('curMU', 'login');
        return view('wes.wesGloabalLogin')->with($pagecontents->toArray());
    }

    public function login_(Request $request, $lang=null)
    {
        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);
        $pagecontents->put('ciso', $ciso);
        $temp =  $this->getHeadersData($ciso);

        $items = $temp->all();
        foreach ($items as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp2 =  $this->getFootData($ciso);
        $items2 = $temp2->all();
        foreach ($items2 as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $row =null;
        $row = DB::connection($this->waaupglobal)->table('tb_pagelogin')
            ->whereRaw('trans like "'.$ciso.'%" and g_path like "'.$this->g_path.'" ')->get()->first();
        $rowt = DB::connection($this->waaupglobal)->table('tb_pagelogin')->where('g_path', $this->g_path)->get()->first();
        if($row===null)
        {
            $row = $rowt;
        }

        if($row!==null)
        {
            if($row->is_instr == 1)
                $pagecontents->put('loginpageinstruction', $row->instruction);
            else
                $pagecontents->put('loginpageinstruction', '');
            if($row->is_bg == 1)
                $pagecontents->put('loginpagebackground', $row->background);
            else
                $pagecontents->put('loginpagebackground', '');
        }
        else
        {
            $pagecontents->put('loginpageinstruction', '');
            $pagecontents->put('loginpagebackground', '');
        }

        $pagecontents->put('curMU', 'login');
        return view('wes.wesGloabalLogin')->with($pagecontents->toArray());
    }

    public function wesPageTemple(Request $request, $pg, $p0=null,$p1=null,$p2=null,$p3=null,$p4=null,$p5=null){
        $pathinfo = $request->getPathInfo();
        $ext = pathinfo($pathinfo, PATHINFO_EXTENSION);
        if($ext!=='')
            exit(1);

        if($pg==='undefined')
            exit(1);
        if (stripos($pathinfo, '/pg/uploads')){
            exit(1);
        }
        else if (stripos($pathinfo, 'pg/uploads')){
            exit(1);
        }
        else if (stripos($pathinfo, '/uploads/images')){
            exit(1);
        }
        else if (stripos($pathinfo, 'uploads/images')){
            exit(1);
        }
        else if (stripos($pathinfo, '/uploads/images')){
            exit(1);
        }
        else if (stripos($pathinfo, 'uploads/images')){
            exit(1);
        }
        else if (stripos($pathinfo, '/pg/vuedir/')){
            exit(1);
        }
        else if (stripos($pathinfo, 'pg/vuedir/')){
            exit(1);
        }

        $url = '';
        if($pg!==null)
        {
            $pos = strpos($pg, 'clang_');
            if ($pos !== false){
                $iso = explode('_',$pg)[1];
                $this->index($request, $iso);
                exit(1);
            }
            else
            $url .= $pg;
        }

        $lang=null;

        if($p0!==null){
            $pos = strpos($p0, 'clang_');
            if ($pos !== false){
               $larray = explode('_',$p0);
                $lang = $larray[1];
            }
            else
            $url .='/'.$p0;
        }
        if($p1!==null){
            $pos = strpos($p1, 'clang_');
            if ($pos !== false){
                $larray = explode('_',$p1);
                $lang = $larray[1];
            }
            else
                $url .='/'.$p1;
        }
        if($p2!==null){
            $pos = strpos($p2, 'clang_');
            if ($pos !== false){
                $larray = explode('_',$p2);
                $lang = $larray[1];
            }
            else
                $url .='/'.$p2;
        }
        if($p3!==null){
            $pos = strpos($p3, 'clang_');
            if ($pos !== false){
                $larray = explode('_',$p3);
                $lang = $larray[1];
            }
            else
                $url .='/'.$p3;
        }
        if($p4!==null){
            $pos = strpos($p4, 'clang_');
            if ($pos !== false){
                $larray = explode('_',$p4);
                $lang = $larray[1];
            }
            else
                $url .='/'.$p4;
        }
        if($p5!==null){
            $pos = strpos($p5, 'clang_');
            if ($pos !== false){
                $larray = explode('_',$p5);
                $lang = $larray[1];
            }
            else
                $url .='/'.$p5;
        }

        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $pagecontents->put('ciso', $ciso);

        $temp =  $this->getHeadersData($ciso);
        $items = $temp->all();
        foreach ($items as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp2 =  $this->getFootData($ciso);
        $items2 = $temp2->all();
        foreach ($items2 as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $pagecontents->put('curMU', '');

        $urlwhere='';
        if($url!==''){
            $url = urlencode($url);
            $urlwhere.=' and url like "%'.$url.'%" ';
        }

        $row = null;
        $row = DB::connection($this->waaupglobal)->table('tb_pagecontent_list')
            ->whereRaw('trans like "'.$lang.'%"  and  g_path like "'.$this->g_path.'"  and shstate="1" '.$urlwhere.'')->get()->first();
        if($row === null)
        {
            return view('wes.notFoundPage')->with($pagecontents->toArray());
            exit(1);
        }
        else
        {
            $frontContens = $this->FrontPageContent($ciso);
            $pagecontents->put('frtxt', $frontContens);

            //$temp = nl2br($row->content);
            //var_dump(htmlentities($row->content));exit();
            $pagecontents->put('title', $row->title);
            $pagecontents->put('author', $row->author);

            $pagetype = DB::connection($this->waaupglobal)->table('tb_pagecontent_type')
                ->whereRaw('trans like "'.$lang.'%"  and  g_path like "'.$this->g_path.'" and id = '.$row->pagetypeId.'')->get()->first();

            $date = $row->created_at;
            if($row->updated_at != null)
                $date = $row->updated_at;
            $date = explode(" ", $date);
            $pagecontents->put('created_at', $date[0]);
            $pagecontents->put('pagetype', $pagetype->name);
            $pagecontents->put('auth_state', $row->auth_state);
            $pagecontents->put('type_state', $row->type_state);
            $pagecontents->put('date_state', $row->date_state);
            $pagecontents->put('pagecontent', $row->content);
        }

        return view('wes.wesPageTemple')->with($pagecontents->toArray());
    }

    public function template(Request $request, $lang=null)
    {
        $pathinfo = $request->getPathInfo();
        $ext = pathinfo($pathinfo, PATHINFO_EXTENSION);
        if($ext!=='')
            exit(1);

        if($lang=='favicon.ico')
            exit(1);

        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $pagecontents->put('ciso', $ciso);
        $pagecontents->put('curMU', '');

        $temp =  $this->getHeadersData($ciso);
        $items = $temp->all();
        foreach ($items as $key => $value) {
            $pagecontents->put($key, $value);
        }
        $temp2 =  $this->getFootData($ciso);
        $items2 = $temp2->all();
        foreach ($items2 as $key => $value) {
            $pagecontents->put($key, $value);
        }
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);

        if(isset($ciso) && !empty($ciso))
            $pathinfo = str_replace(['/'.$ciso], '', $pathinfo);

        $url = urlencode($pathinfo);
        $urlwhere=' and url like "%'.$url.'%" ';
        $row = DB::connection($this->waaupglobal)->table('tb_pagecontent_list')
            ->whereRaw('trans like "'.$ciso.'%"  and  g_path like "'.$this->g_path.'"  and shstate="1" '.$urlwhere.'')->get()->first();
        if($row === null)
        {
            return view('wes.notFoundPage')->with($pagecontents->toArray());
            exit(1);
        }

        $pagecontents->put('title', $row->title);
        $pagecontents->put('author', $row->author);

        $pagetype = DB::connection($this->waaupglobal)->table('tb_pagecontent_type')
            ->whereRaw('trans like "'.$ciso.'%"  and  g_path like "'.$this->g_path.'" and id = '.$row->pagetypeId.'')->get()->first();

        $date = $row->created_at;
        if($row->updated_at != null)
            $date = $row->updated_at;
        $date = explode(" ", $date);
        $pagecontents->put('created_at', $date[0]);
        $pagecontents->put('pagetype', $pagetype->name);
        $pagecontents->put('auth_state', $row->auth_state);
        $pagecontents->put('type_state', $row->type_state);
        $pagecontents->put('date_state', $row->date_state);
        $pagecontents->put('pagecontent', $row->content);

        return view('wes.wesPageTemple')->with($pagecontents->toArray());
    }

    public function pagesTemplate(Request $request)
    {
        $page_content = DB::connection($this->waaupglobal)->table('tb_pagepages_content')
            ->whereRaw('trans like "'.$ciso.'%"  and  g_path like "'.$this->g_path.'" and id = '.$row->pagetypeId.'')->get()->first();
        $pagecontents = collect([]);
        $pagecontents->put('pages_content', $page_content);
        return view('wes.PagesTemplete')->with($pagecontents->toArray());
    }

}
