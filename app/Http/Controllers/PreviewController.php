<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use JoggApp\GoogleTranslate\GoogleTranslateClient;

class PreviewController extends BaseController
{

    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function index(Request $request, $lang=null)
    {

        $ciso = $this->compareSavedLang($lang);
        $pagecontents = collect([]);
        $frontContens = $this->FrontPageContent($ciso);
        $pagecontents->put('frtxt', $frontContens);
        $pagecontents->put('ciso', $ciso);
       // $pagecontents->put("IMGURL",  '');
        $temp =  $this->previewHeadersData($ciso);

        $items = $temp->all();
        foreach ($items as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp1 = $this->sliderData($ciso);
        $items1 = $temp1->all();
        foreach ($items1 as $key => $value) {
            $pagecontents->put($key, $value);
        }

        $temp2 =  $this->previewFootData($ciso);
        $items2 = $temp2->all();
        foreach ($items2 as $key => $value) {
            $pagecontents->put($key, $value);
        }
        $pagecontents->put('curMU', 'login');

        return view('home')->with($pagecontents->toArray());
    }

    public function previewHeadersData($ciso=null)
    {
        $pagecontents = collect([]);
        $langrow =   DB::connection($this->waaupglobal)->table('tb_conflanguage')
            ->select(DB::connection($this->waaupglobal)->raw('iso, dialcode, name'))
            ->where('status', 'enable')
            ->where('g_path', $this->g_path)->get();
        $pagecontents->put('langs',isset($langrow) ? $langrow: '');

        $row1 =null;
        $row2 =null;
        $row3 =null;
        $row4 =null;
        $row1  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('head'))
            ->whereRaw('trans like "'.$ciso.'%" and is_head=1')
            ->where('g_path', $this->g_path)->get()->first();
        $row2  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('mainmenu'))
            ->whereRaw('trans like "'.$ciso.'%" and is_mainmenu=1')
            ->where('g_path', $this->g_path)->get()->first();
        $row3  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('configgenereal'))
            ->whereRaw('trans like "'.$ciso.'%" and is_configgenereal=1')
            ->where('g_path', $this->g_path)->get()->first();
        $row4  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('background'))
            ->whereRaw('trans like "'.$ciso.'%" and is_background=1')
            ->where('g_path', $this->g_path)->get()->first();

        $rowfavico = DB::connection($this->waaupdb)->table('sitelogoinfo')->where('site_logtype','fav')
            ->where('g_path', $this->g_path)->get()->first();
        $favico = "waaup-logo.ico";
        if($rowfavico!= null)
        {
            $favico = '/images/'.$rowfavico->site_logname;
        }
        $pagecontents->put('favico', $favico);

        $countrycity='';

        $pagecontents->put('countrycity', $countrycity);

        if($row1!=null && !empty($row1))
        {
            $head = json_decode($row1->head);
            /*if($head ===null || empty($head))
            {
                if($rowt1!==null && !empty($rowt1) && isset($rowt1->head))
                    $head = json_decode($rowt1->head);
            }*/

            if($head!==null && !empty($head))
            {
                if (!property_exists($head, 'toplocation')) {
                    $pagecontents->put('toplocation', 'on');
                }
                else
                    $pagecontents->put('toplocation', $head->toplocation);

                if (!property_exists($head, 'topheader')) {
                    $pagecontents->put('topheader', 'on');
                }
                else
                    $pagecontents->put('topheader', $head->topheader);

                if (!property_exists($head, 'toolcalc')) {
                    $pagecontents->put('toolcalc', 'on');
                }
                else
                    $pagecontents->put('toolcalc', $head->toolcalc);

                if (!property_exists($head, 'toolbar')) {
                    $pagecontents->put('toolbar', 'on');
                }
                else
                    $pagecontents->put('toolbar', $head->toolbar);

                if (!property_exists($head, 'modules')) {
                    $pagecontents->put('modules', 'on');
                }
                else
                    $pagecontents->put('modules', $head->modules);

            }
            else{
                $pagecontents->put('topheader', 'on');
                $pagecontents->put('toplocation', 'on');
                $pagecontents->put('toolcalc', 'on');
                $pagecontents->put('toolbar', 'on');
                $pagecontents->put('modules', 'on');
            }
        }
        else
        {
            $pagecontents->put('topheader', 'on');
            $pagecontents->put('toplocation', 'on');
            $pagecontents->put('toolcalc', 'on');
            $pagecontents->put('toolbar', 'on');
            $pagecontents->put('modules', 'on');
        }
        if($row2!=null && !empty($row2))
        {
            $mainmenu = json_decode($row2->mainmenu);
            /*if($mainmenu ===null || empty($mainmenu))
            {
                if($rowt2!==null && !empty($rowt2) && isset($rowt2->mainmenu))
                    $mainmenu = json_decode($rowt2->mainmenu);
            }*/
            if($mainmenu!==null && !empty($mainmenu)){
                $muarray=array();
                foreach($mainmenu as $key => $link) {
                    $mu = $key.':'.$link;
                    array_push($muarray,$mu);
                }
                $pagecontents->put('topmenus',$muarray);
            }
            else
            {
                $pagecontents->put('topmenus',array());
            }
        }
        else
        {
            $pagecontents->put('topmenus',array());
        }

        if($row3!=null && !empty($row3))
        {
            $configgenereal = json_decode($row3->configgenereal);
            /*if($configgenereal ===null || empty($configgenereal))
            {
                if($rowt3!==null && !empty($rowt3) && isset($rowt3->configgenereal))
                    $configgenereal = json_decode($rowt3->configgenereal);
            }*/
            if($configgenereal!==null && !empty($configgenereal))
            {
                if (!property_exists($configgenereal, 'logoImg')) {
                    $pagecontents->put('logoImg', '');
                }
                else
                    $pagecontents->put('logoImg', $configgenereal->logoImg);

                if (!property_exists($configgenereal, 'sitelogoImg')) {
                    $pagecontents->put('sitelogoImg', '');
                }
                else
                    $pagecontents->put('sitelogoImg', $configgenereal->sitelogoImg);

                if (!property_exists($configgenereal, 'sitetitle')) {
                    $pagecontents->put('sitetitle', '');
                }
                else
                    $pagecontents->put('sitetitle', $configgenereal->sitetitle);

                if (!property_exists($configgenereal, 'sloganImg')) {
                    $pagecontents->put('sloganImg', '');
                }
                else
                    $pagecontents->put('sloganImg', $configgenereal->sloganImg);

                if (!property_exists($configgenereal, 'slogantxt')) {
                    $pagecontents->put('slogantxt', '');
                }
                else
                    $pagecontents->put('slogantxt', $configgenereal->slogantxt);

                if (!property_exists($configgenereal, 'favicoImg')) {
                    $pagecontents->put('favicoImg', '');
                }
                else
                    $pagecontents->put('favicoImg', $configgenereal->favicoImg);
            }
            else{
                $pagecontents->put('logoImg', '');
                $pagecontents->put('sitelogoImg', '');
                $pagecontents->put('sitetitle', '');
                $pagecontents->put('sloganImg', '');
                $pagecontents->put('slogantxt', '');
                $pagecontents->put('favicoImg', '/waaup-logo.ico');
            }
        }
        else{
            $pagecontents->put('logoImg', '');
            $pagecontents->put('sitelogoImg', '');
            $pagecontents->put('sitetitle', '');
            $pagecontents->put('sloganImg', '');
            $pagecontents->put('slogantxt', '');
            $pagecontents->put('favicoImg', '/waaup-logo.ico');
        }
        if($row4!=null && !empty($row4))
        {
            /*if($row4->background ===null || empty($row4->background))
            {
                if($rowt4!=null && !empty($rowt4) && isset($rowt4->background))
                    $row4->background = $rowt4->background;
            }*/
            $pagecontents->put('pgbk',isset($row->background) ? $row4->background : '');
        }
        else
        {
            $pagecontents->put('pgbk','');
        }
        return $pagecontents;
    }//getHeaderData

    public function sliderData($ciso=null)
    {
        $pagecontents = collect([]);
        $row1 =null;
        $row2 =null;
        $row3 =null;
        $row4 =null;
        $row1  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('pageslider, sliderstatus'))
            ->whereRaw('trans like "'.$ciso.'%" and g_path="'.$this->g_path.'" ')->get()->first();
        $row2  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('teacher'))
            ->whereRaw('trans like "'.$ciso.'%" and g_path="'.$this->g_path.'" ')->get()->first();
        $row3  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('student'))
            ->whereRaw('trans like "'.$ciso.'%" and g_path="'.$this->g_path.'" ')->get()->first();
        $row4  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('background'))
            ->whereRaw('trans like "'.$ciso.'%" and g_path="'.$this->g_path.'" ')->get()->first();

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
            $pagecontents->put('loginpageinstruction', $row->instruction);
            $pagecontents->put('loginpagebackground', $row->background);
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

    public function previewFootData($ciso=null)
    {
        $pagecontents = collect([]);
        $row =null;
        $row1  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('foot'))
            ->whereRaw('trans like "'.$ciso.'%"')
            ->where('g_path', $this->g_path)
            ->get()->first();
        $row2  =   DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('footmenu'))
            ->whereRaw('trans like "'.$ciso.'%"')
            ->where('g_path', $this->g_path)
            ->get()->first();

        if($row1!=null && !empty($row1))
        {

            $foot =json_decode($row1->foot);
            /*if($foot ===null || empty($foot))
            {
                if($rowt1!==null && !empty($rowt1) && isset($rowt1->foot))
                    $foot = json_decode($rowt1->foot);
            }*/

            if($foot!==null && !empty($foot))
            {
                $pagecontents->put('barleft', $foot->barleft);//css
                $pagecontents->put('barleftfontcolor', $foot->barleftfontcolor);
                $pagecontents->put('barleftfontsize', $foot->barleftfontsize);
                $pagecontents->put('barleftfontcont', trim($foot->barleftfontcont));
                $pagecontents->put('barleftimg', $foot->barleftimg==null ? '' : $foot->barleftimg);
                $pagecontents->put('barleftfontlink', empty($foot->barleftfontlink) ? '#' : $foot->barleftfontlink);

                if(isset($foot->edit0)){
                    $temp = trim($foot->edit0);
                    $temp = html_entity_decode($temp);
                    $pagecontents->put('footedit0', $temp);
                }
                else
                    $pagecontents->put('footedit0', '');

                $pagecontents->put('barcent', $foot->barcent);//css
                $pagecontents->put('barcentfontcolor', $foot->barcentfontcolor);
                $pagecontents->put('barcentfontsize', $foot->barcentfontsize);
                $pagecontents->put('barcentfontcont', trim($foot->barcentfontcont));
                $pagecontents->put('barcentimg', $foot->barcentimg==null ? '' : $foot->barcentimg);
                $pagecontents->put('barcentfontlink', empty($foot->barcentfontlink) ? '#' : $foot->barcentfontlink);
                if(isset($foot->edit1)){
                    $temp = trim($foot->edit1);
                    $temp = html_entity_decode($temp);
                    $pagecontents->put('footedit1', $temp);
                }
                else
                    $pagecontents->put('footedit1', '');

                $pagecontents->put('barright',$foot->barright);//css
                $pagecontents->put('barrightfontcolor',$foot->barrightfontcolor);
                $pagecontents->put('barrightfontsize',$foot->barrightfontsize);
                $pagecontents->put('barrightfontcont',trim($foot->barrightfontcont));
                $pagecontents->put('barrightimg',$foot->barrightimg==null ? '' : $foot->barrightimg);
                $pagecontents->put('barrightfontlink', empty($foot->barrightfontlink) ? '#' : $foot->barrightfontlink);

                if(isset($foot->edit2)){
                    $temp = trim($foot->edit2);
                    $temp = html_entity_decode($temp);
                    $pagecontents->put('footedit2', $temp);
                }
                else
                    $pagecontents->put('footedit2', '');

                $pagecontents->put('footbar', 'y');

            }
            else
            {
                $pagecontents->put('footbar', '');

            }
        }
        else
        {
            $pagecontents->put('footbar', '');

        }

        if($row2!=null && !empty($row2))
        {
            $footmenu =json_decode($row2->footmenu);
            /*if($footmenu === null || empty($footmenu))
            {
                if($rowt2!==null && !empty($rowt2) && isset($rowt2->footmenu))
                    $footmenu = json_decode($rowt2->footmenu);
            }*/

            $pagecontents->put('menu0style','');
            $pagecontents->put('menu0fontcolor','');
            $pagecontents->put('menu0fonttitle','');
            $pagecontents->put('menu0fontsize','');
            $pagecontents->put('menu0contlinks','');
            $pagecontents->put('menu0icon','');
            $pagecontents->put('edit0', '');//editor

            $pagecontents->put('menu1style','');
            $pagecontents->put('menu1fontcolor','');
            $pagecontents->put('menu1fonttitle','');
            $pagecontents->put('menu1fontsize','');
            $pagecontents->put('menu1contlinks','');
            $pagecontents->put('menu1icon','');
            $pagecontents->put('edit1', '');//editor

            $pagecontents->put('menu2style','');
            $pagecontents->put('menu2fontcolor','');
            $pagecontents->put('menu2fonttitle','');
            $pagecontents->put('menu2fontsize','');
            $pagecontents->put('menu2contlinks','');
            $pagecontents->put('menu2icon','');
            $pagecontents->put('edit2', '');//editor

            if($footmenu!==null && !empty($footmenu)){
                foreach($footmenu as $key => $link) {
                    //$mu = $key.'::'.$link;
                    if($key==='edit0' || $key==='edit1' || $key==='edit2'){
                        $link = trim($link);
                        $link = html_entity_decode($link);
                    }
                    $pagecontents->put($key,$link);
                    //array_push($muarray,$mu);
                }

                $pagecontents->put('footmenus','y');
            }
            else
                $pagecontents->put('footmenus','');
            /* center part of main page slider */
        }
        else
        {
            $pagecontents->put('menu0style','');
            $pagecontents->put('menu0fontcolor','');
            $pagecontents->put('menu0fonttitle','');
            $pagecontents->put('menu0fontsize','');
            $pagecontents->put('menu0contlinks','');
            $pagecontents->put('menu0icon','');
            $pagecontents->put('edit0', '');//editor

            $pagecontents->put('menu1style','');
            $pagecontents->put('menu1fontcolor','');
            $pagecontents->put('menu1fonttitle','');
            $pagecontents->put('menu1fontsize','');
            $pagecontents->put('menu1contlinks','');
            $pagecontents->put('menu1icon','');
            $pagecontents->put('edit1', '');//editor

            $pagecontents->put('menu2style','');
            $pagecontents->put('menu2fontcolor','');
            $pagecontents->put('menu2fonttitle','');
            $pagecontents->put('menu2fontsize','');
            $pagecontents->put('menu2contlinks','');
            $pagecontents->put('menu2icon','');
            $pagecontents->put('edit2', '');//editor
            $pagecontents->put('footmenus','');

        }

        $row=null;

        $row = DB::connection($this->waaupglobal)->table('tb_frontpages')
            ->select(DB::connection($this->waaupglobal)->raw('trans, socialsetting'))
            ->whereRaw('trans like "'.$ciso.'%"')
            ->where('g_path', $this->g_path)
            ->get()->first();

        $instrjson='';
        if (($row!==null) && property_exists($row, 'socialsetting')){
            $instrjson = $row->socialsetting;
        }
        $pagecontents->put('socialsetting',$instrjson);

        return $pagecontents;
    }//getFootData

}
