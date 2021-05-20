<?php

namespace App\Http\Controllers;

use Faker\Guesser\Name;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use App\Models\UserModel;
use JoggApp\GoogleTranslate\GoogleTranslateClient;
use PhpParser\Node\Expr\Array_;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class DashboardWebsController extends BaseController
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function renameHostDirectory(Request $request){
        $path = $request->post('path');
        $orgdirname = $request->post('orgname');
        $newdirname = $request->post('newname');
        $result = Storage::disk('local')->move($path.$orgdirname, $path.$newdirname);
        $ret1 = Storage::disk('thumbfolder')->move($path.$orgdirname, $path.$newdirname);
        if($result && $ret1)
        {
            return \Response::json([
                'msg'   =>  'ok'
            ]);
        }
        else
        {
            return \Response::json([
                'msg'   =>  'err'
            ]);
        }
        exit();
    }

    public function makeHostDirectory(Request $request){
        $path = $request->post('path');
        $foldername = $request->post('foldername');
        $result = Storage::disk('local')->makeDirectory($path.$foldername);
        $thumbfolder = Storage::disk('thumbfolder')->makeDirectory($path.$foldername);
       if($result && $thumbfolder)
       {
           return \Response::json([
               'msg'   =>  'ok'
           ]);
       }
       else
       {
           return \Response::json([
               'msg'   =>  'err'
           ]);
       }
       exit();
    }

    public function searchAllHostObj(Request $request){
        $path = $request->post('path');
        $scont = $request->post('scont');
        $param = $request->post('param');

        $dirs = Storage::disk('local')->allDirectories($path);
        $rdirs=array();
        if($param == 1)
            array_push($rdirs,"[..]");
        if(count($dirs) > 0)
        {
            foreach ($dirs as $dir)
            {
                $dirname = pathinfo($dir, PATHINFO_DIRNAME);
                $basename = pathinfo($dir, PATHINFO_BASENAME);
                if(strpos($basename, $scont) !== false) {
                    $a="/".$dirname."&&".$basename;
                    array_push($rdirs, $a);
                }
            }
        }

        $files = Storage::disk('local')->allFiles($path);
        $rfiles=array();
        $thumbs = array();
        if(count($files) > 0)
        {
            foreach ($files as $file)
            {
                $dirname = pathinfo($file, PATHINFO_DIRNAME);
                $basename = pathinfo($file, PATHINFO_BASENAME);
                if(strpos($basename, $scont) !== false){
                    $a="/".$dirname."&&".$basename;
                    array_push($rfiles, $a);
                }
                $type = $this->searchFileType($file);
                array_push($thumbs, $type);
            }
        }

        return \Response::json([
            'msg' => 'ok',
            'dirs' => $rdirs,
            'files'=> $rfiles,
            'thumb'=> $thumbs
        ]);
    }

    public function getHostDirectories(Request $request){
        $topDir = array();
        $path = $request->post('path');
        $param = $request->post('param');
        $arrDir = explode("/", $path);
        $dirs = Storage::disk('local')->directories($path);
        if(count($arrDir) > 2 && intval($param) === 1){
            array_push($topDir,"[..]");
            for($i = 0; $i < count($dirs); $i++){
                array_push($topDir,$dirs[$i]);
            }
            $dirs = $topDir;
        }
        $files = Storage::disk('local')->files($path);
        $thumbs = array();
        $fileUrl = array();
        foreach($files as $file){
            $type = $this->searchFileType($file);
            array_push($thumbs, $type);
            $url = Storage::url($file);
            array_push($fileUrl, $url);
        }
            return \Response::json([
                'dirs' => $dirs,
                'files'=> $files,
                'thumb'=> $thumbs,
                'fileUrl'=>$fileUrl
            ]);

        exit(1);
    }

    private function setCopyfoldername($despath, $srcpath){
        $path = rtrim($despath, '/');
        $is_sub = false;
        if($path != $srcpath){
            $despath = $path.$srcpath;
            $is_sub = true;
        }
        $exists  = Storage::disk('local')->exists($despath);
        if($exists) {
            $folder = $srcpath."-Copy";
            if($is_sub) {
                $folder = $path.$srcpath."-Copy";
            }
            $despath = $folder.'/';
            return $this->setCopyfoldername($despath, $folder);
        }
        else
            return $despath;
    }
    private function setCopyfilename($path, $file, $ext){
        $exists  = Storage::disk('local')->exists($path.$file);
        $fname = $file;
        if($exists) {
            $fname = str_replace('.'.$ext, '', $file);
            $fname = $fname."-Copy".".".$ext;
            return $this->setCopyfilename($path, $fname, $ext);
        }
        else
            return $fname;
    }

    public function changeHostObj(Request $request){
        $srccmd = $request->post('srccmd');
        $srcpath = $request->post('srcpath');
        $descmd = $request->post('descmd');
        $despath = $request->post('despath');

        $ret=false;
        $ret1 = true;
        $msg="ok";
        try{
            if($srccmd==='copy' && $descmd==='past')
            {
                $ext = pathinfo($srcpath, PATHINFO_EXTENSION);
                if($ext!=='')//it is file
                {
                    $filename = pathinfo($srcpath, PATHINFO_FILENAME);
                    $filename = $filename.".".$ext;

                    $despath = rtrim($despath, '/');
                    $despath = $despath.'/';

                    $filename = $this->setCopyfilename($despath, $filename, $ext);
                    $ret = Storage::disk('local')->copy($srcpath, $despath.$filename);

                    $filetype = $this->searchFileType($filename);
                    if($filetype[1] == "image") {
                        $ret1 = Storage::disk('thumbfolder')->copy($srcpath, $despath.$filename);
                    }
                }
                else // it is dir.
                {
                    $dirname = pathinfo($srcpath, PATHINFO_DIRNAME);
                    $despath = rtrim($despath, '/');
                    $despath = $despath.'/';

                    $folder = $this->setCopyfoldername($despath, $srcpath);
                    $dirs = Storage::disk('local')->allDirectories($srcpath);

                    if(count($dirs) > 0){
                        foreach ($dirs as $dir)
                        {
                            $sdirname = ltrim($srcpath,"/");
                            $tdir=str_replace($sdirname,"",$dir);
                            $tdir = $folder.$tdir;
                            $ret = Storage::disk('local')->makeDirectory($tdir);
                            $ret1 = Storage::disk('thumbfolder')->makeDirectory($tdir);
                        }
                    }
                    else
                    {
                        $tpath=str_replace($dirname,"", $folder);
                        $tpath = ltrim($tpath, '/');
                        $ret = Storage::disk('local')->makeDirectory($tpath);
                        $ret1 = Storage::disk('thumbfolder')->makeDirectory($tpath);
                    }
                    $files = Storage::disk('local')->allFiles($srcpath);
                    foreach ($files as $file){
                        $sdirname = ltrim($srcpath,"/");
                        $tfile=str_replace($sdirname,"",$file);
                        $tfile = $folder.$tfile;
                        $ret = Storage::disk('local')->copy("/".$file, $tfile);

                        $filetype = $this->searchFileType($tfile);
                        if($filetype[1] == "image") {
                            $ret1 = Storage::disk('thumbfolder')->copy("/".$file, $tfile);
                        }
                    }
                }
            }
            else if($srccmd==='cut' && $descmd==='past')
            {

                $ext = pathinfo($srcpath, PATHINFO_EXTENSION);
                if($ext!=='')//it is file
                {
                    $filename = pathinfo($srcpath, PATHINFO_FILENAME);
                    $filename = $filename.".".$ext;

                    $despath = rtrim($despath, '/');
                    $despath = $despath.'/';

                    $filename = $this->setCopyfilename($despath, $filename, $ext);
                    $ret = Storage::disk('local')->move($srcpath, $despath.$filename);

                    $filetype = $this->searchFileType($filename);
                    if($filetype[1] == "image") {
                        $ret1 = Storage::disk('thumbfolder')->copy($srcpath, $despath.$filename);
                    }
                }
                else // it is dir.
                {
                    $dirname = pathinfo($srcpath, PATHINFO_DIRNAME);
                    $despath = rtrim($despath, '/');
                    $despath = $despath.'/';

                    $folder = $this->setCopyfoldername($despath, $srcpath);
                    $dirs = Storage::disk('local')->allDirectories($srcpath);

                    if(count($dirs) > 0){
                        foreach ($dirs as $dir)
                        {
                            $sdirname = ltrim($srcpath,"/");
                            $tdir=str_replace($sdirname,"",$dir);
                            $tdir = $folder.$tdir;
                            $ret = Storage::disk('local')->makeDirectory($tdir);
                            $ret1 = Storage::disk('thumbfolder')->makeDirectory($tdir);
                        }
                    }
                    else
                    {
                        $tmppath=str_replace($dirname,"", $folder);
                        $tmppath = ltrim($tmppath, '/');
                        $ret = Storage::disk('local')->makeDirectory($tmppath);
                        $ret1 = Storage::disk('thumbfolder')->makeDirectory($tmppath);
                    }

                    $files = Storage::disk('local')->allFiles($srcpath);
                    foreach ($files as $file){
                        $sdirname = ltrim($srcpath,"/");
                        $tfile=str_replace($sdirname,"",$file);
                        $tfile = $folder.$tfile;
                        $ret = Storage::disk('local')->copy("/".$file, $tfile);

                        $filetype = $this->searchFileType($tfile);
                        if($filetype[1] == "image") {
                            $ret1 = Storage::disk('thumbfolder')->copy("/".$file, $tfile);
                        }
                    }

                    $ret = Storage::disk('local')->deleteDirectory($srcpath);
                    $ret1 = Storage::disk('thumbfolder')->deleteDirectory($srcpath);
                }
            }

        }
        catch (FileException $exception){
            $msg="err";
        }

        if(!$ret || !$ret1)
            $msg='err';

        return \Response::json([
            'msg' => $msg
        ]);

        exit();
    }

    public function deleteHostObj(Request $request){
        $fpath = $request->post('fpath');

        $ext = pathinfo($fpath, PATHINFO_EXTENSION);

        if($ext!=='') {
            $ret = Storage::disk('local')->delete($fpath);
            $ret1 = Storage::disk('thumbfolder')->delete($fpath);
        }
        else {
            $ret = Storage::disk('local')->deleteDirectory($fpath);
            $ret1 = Storage::disk('thumbfolder')->deleteDirectory($fpath);
        }

        $msg='ok';

        if(!$ret || !$ret1)
            $msg='err';

        return \Response::json([
            'msg' => $msg
        ]);

        exit();
    }

    public function deleteAllHostObj(Request $request){
        $objlist = $request->post('objlist');
        $ret1 = true;
        foreach ($objlist as $item)
        {
            $ext = pathinfo($item, PATHINFO_EXTENSION);
            try
            {
                if($ext!=='') {
                    $ret = Storage::disk('local')->delete($item);
                    $filetype = $this->searchFileType($item);
                    if($filetype[1] == "image")
                        $ret1 = Storage::disk('thumbfolder')->delete($item);
                    //if($filetype[1] == "video")
                    //    $ret1 = Storage::disk('thumbfolder')->delete($item.".png");

                }
                else {
                    $ret = Storage::disk('local')->deleteDirectory($item);
                    $ret1 = Storage::disk('thumbfolder')->deleteDirectory($item);
                }
            }
            catch (FileException $exception){

            }
        }

        $msg='ok';

        if(!$ret || !$ret1)
            $msg='err';

        return \Response::json([
            'msg' => $msg
        ]);

        exit();
    }

    private function searchFileType($file){
        $exes = explode(".", $file);
        $thumbfile = "";
        $res = array();
        $exe = $exes[count($exes) - 1];
        $filename = $exes[0];
        for($k = 1; $k < count($exes) - 1; $k++){
            $filename .=  ".".$exes[$k];
        }
        switch ($exe)
        {
            case "pdf":
                $thumbfile = "/thumbnail/document/Pdf.png";
                $filetype = "doc";
                break;
            case "doc":
                $thumbfile = "/thumbnail/document/WordLogo.png";
                $filetype = "doc";
                break;
            case "docx":
                $thumbfile = "/thumbnail/document/WordLogo.png";
                $filetype = "doc";
                break;
            case "xls":
                $thumbfile = "/thumbnail/document/ExcelLogo.png";
                $filetype = "doc";
                break;
            case "xlsx":
                $thumbfile = "/thumbnail/document/ExcelLogo.png";
                $filetype = "doc";
                break;
            case "ppt":
                $thumbfile = "/thumbnail/document/PowerPnt.png";
                $filetype = "doc";
                break;
            case "pptx":
                $thumbfile = "/thumbnail/document/PowerPnt.png";
                $filetype = "doc";
                break;
            case "mdb":
                $thumbfile = "/thumbnail/document/AccessLogo.png";
                $filetype = "doc";
                break;
            case "accdb":
                $thumbfile = "/thumbnail/document/AccessLogo.png";
                $filetype = "doc";
                break;
            case "gzip":
                $thumbfile = "/thumbnail/document/Zip.png";
                $filetype = "doc";
                break;
            case "zip":
                $thumbfile = "/thumbnail/document/Zip.png";
                $filetype = "doc";
                break;
            case "rar":
                $thumbfile = "/thumbnail/document/Zip.png";
                $filetype = "doc";
                break;
            case "htm":
                $thumbfile = "/thumbnail/document/Internet.png";
                $filetype = "doc";
                break;
            case "html":
                $thumbfile = "/thumbnail/document/Internet.png";
                $filetype = "doc";
                break;
            case "mp3":
                $thumbfile = "/thumbnail/document/Audio.png";
                $filetype = "doc";
                break;
            case "wav":
                $thumbfile = "/thumbnail/document/Audio.png";
                $filetype = "doc";
                break;
            case "m4a":
                $thumbfile = "/thumbnail/document/Audio.png";
                $filetype = "doc";
                break;
            case "jpg":
                $thumbfile = "/thumbnail/folder/".$filename.".jpg";
                $filetype = "image";
                break;
            case "jpeg":
                $thumbfile = "/thumbnail/folder/".$filename.".jpeg";
                $filetype = "image";
                break;
            case "png":
                $thumbfile = "/thumbnail/folder/".$filename.".png";
                $filetype = "image";
                break;
            case "gif":
                $thumbfile = "/thumbnail/folder/".$filename.".gif";
                $filetype = "image";
                break;
            case "mp4":
                //$thumbfile = "/thumbnail/folder/".$file.".png";
                //$filetype = "video";
                $thumbfile = "/thumbnail/document/Video.png";
                $filetype = "doc";
                break;
            case "avi":
                //$thumbfile = "/thumbnail/folder/".$file.".png";
                //$filetype = "video";
                $thumbfile = "/thumbnail/document/Video.png";
                $filetype = "doc";
                break;
            default:
                $thumbfile = "/thumbnail/document/File.png";
                $filetype = "doc";
                break;
        }

        array_push($res, $thumbfile);
        array_push($res, $filetype);

        return $res;
    }

    function resize_crop_image($max_width, $max_height, $source_file, $dst_dir, $quality = 80){
        $imgsize = getimagesize($source_file);
        $width = $imgsize[0];
        $height = $imgsize[1];
        $mime = $imgsize['mime'];

        switch($mime){
            case 'image/gif':
                $image_create = "imagecreatefromgif";
                break;

            case 'image/png':
                $image_create = "imagecreatefrompng";
                break;

            case 'image/jpeg':
                $image_create = "imagecreatefromjpeg";
                break;
            case 'image/jpg':
                $image_create = "imagecreatefromjpeg";
                break;

            default:
                return false;
                break;
        }

        $dst_img = imagecreatetruecolor($max_width, $max_height);
        $src_img = $image_create($source_file);

        $width_new = $height * $max_width / $max_height;
        $height_new = $width * $max_height / $max_width;
        //if the new width is greater than the actual width of the image, then the height is too large and the rest cut off, or vice versa
        if($width_new > $width){
            //cut point by height
            $h_point = (($height - $height_new) / 2);
            //copy image
            imagecopyresampled($dst_img, $src_img, 0, 0, 0, $h_point, $max_width, $max_height, $width, $height_new);
        }else{
            //cut point by width
            $w_point = (($width - $width_new) / 2);
            imagecopyresampled($dst_img, $src_img, 0, 0, $w_point, 0, $max_width, $max_height, $width_new, $height);
        }

        if(strpos(strtolower($dst_dir), ".jpg"))
            imagejpeg($dst_img, $dst_dir);
        else if(strpos(strtolower($dst_dir), ".jpeg"))
            imagejpeg($dst_img, $dst_dir);
        else if(strpos(strtolower($dst_dir), ".png"))
            imagepng($dst_img, $dst_dir);
        else if(strpos(strtolower($dst_dir), ".gif"))
            imagegif($dst_img, $dst_dir);
        //$image($dst_img, $dst_dir, $quality);

        if($dst_img)imagedestroy($dst_img);
        if($src_img)imagedestroy($src_img);

        return $dst_img;
    }

    public function wwgMediaUpload(Request $request){
        $files = $request->file('upfiles');
        $uppath= $request->post('uppath');

        $result=false;
        $msg="ok";
        $fcnt = count($files);
        if($fcnt > 0)
        {
            foreach ($files as $file)
            {
                $filename = $file->getClientOriginalName();
                try{
                    $uppath = rtrim($uppath, "/");
                    $result = $file->storeAs($uppath, $filename);

                    $filetype = $this->searchFileType($result);
                    if($filetype[1] == "image") {
                        $this->resize_crop_image(63, 54, $file, public_path().$filetype[0]);
                    }
                    if($filetype[1] == "video") {

                    }

                }catch (FileException $e){
                    $result = false;
                }
            }
        }

       /*
            $file = $validation['file'];
            $fileName = 'profile-'.time().'.'.$file->getClientOriginalExtension();

            // Save the file
            $s3 = Storage::disk('s3');
            $filePath = '/uploads/media/'.$fileName;
            $s3->put($filePath, file_get_contents($file), 'public');
        * */

        if(!$result){
            $msg="err";
        }
        return \Response::json([
            'msg'   =>  $msg
        ]);

        exit(1);
    }

    public function getPageTypeList(Request $request){
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

    public function addPageType(Request $request)
    {
        $lang = $request->post('lang');
        $name = $request->post('name');

        $row = DB::connection($this->waaupglobal)->table('tb_pagecontent_type')
            ->select(DB::connection($this->waaupglobal)->raw('name'))
            ->where([
                ['trans', $lang],
                ['name', $name],
                ['g_path', $this->g_path]
            ])->get()->first();

        if($row!==null){
            return \Response::json([
                'msg'   =>  'du'
            ]);
        }
        else{
            $createtime = date("Y-m-d h:i:s", time());
            $iid =  DB::connection($this->waaupglobal)->table('tb_pagecontent_type')->insertGetId(
                [
                     'trans' => $lang
                    ,'name' => $name
                    ,'created_at'=>$createtime
                    ,'g_path'=>$this->g_path
                ]
            );

            if($iid > 0)
                $msg="ok";
            else
                $msg="inserterr";

            return \Response::json([
                'msg'   =>  $msg
                ,'id' => $iid
                ,'name' =>$name
            ]);
        }
        exit();
    }

    public function changePageType(Request $request){
        $lang = $request->post('lang');
        $cond = $request->post('cond');
        $id = $request->post('id');
        $name = $request->post('name');
        $sucess=-1;
        if($cond==='sv'){
            $sucess = DB::connection($this->waaupglobal)->table('tb_pagecontent_type')->where([
                ['id', $id],
                ['trans', '=', $lang],
                ['g_path', $this->g_path]
            ])->update(['name' => $name]);
            if($sucess > -1){
                return \Response::json([
                    'msg'   =>  'ok'
                ]);
            }
            else{
                return \Response::json([
                    'msg'   =>  'err'
                ]);
            }
        }
        else if($cond==='rm')
        {

            $sucess = DB::connection($this->waaupglobal)->table('tb_pagecontent_type')->where([
                ['id', $id],
                ['trans', $lang],
                ['g_path', $this->g_path]
            ])->delete();

            $sucess = DB::connection($this->waaupglobal)->table('tb_pagecontent_sidebar')->where([
                ['pagetype_id', $id]
            ])->delete();

           // DB::connection($this->waaupdb)->table('tb_pagecontent_list')->where('pagetypeId', $id)->delete();

            if($sucess > -1){
                return \Response::json([
                    'msg'   =>  'ok'
                ]);
            }
            else{
                return \Response::json([
                    'msg'   =>  'err'
                ]);
            }
        }
    }

    public  function addNumInPageType(Request $request){
        $lang = $request->post('lang');
        $num = $request->post('num');
        $id = $request->post('id');
        $sucess=-1;
        $sucess = DB::connection($this->waaupglobal)->table('tb_pagecontent_type')->where([
            ['id', $id],
            ['trans', $lang],
            ['g_path', $this->g_path]
        ])->update(['item_cnt' => $num]);
        if($sucess > -1){
            return \Response::json([
                'msg'   =>  'ok'
            ]);
        }
        else
         {
            return \Response::json([
                'msg'   =>  'err'
            ]);
        }
    }

    public function addwwgpp_pagesetting(Request $request){
        $translang = $request->post('pgsettranedLang');
        $url = $request->post('pgseturl');
        $title = $request->post('pagesetting_title');
        $author = $request->post('pagesetting_author');
        $pgtype = $request->post('pgsettype');
        $datapicker = $request->post('pgsetdate');
        $Priority = $request->post('pagesetting_Priority');
        $swhi = $request->post('pagesetting_swhi');

        $state = $request->post('pgsetstate');
        $oldid = $request->post('pgsetid');

        $author_in = $request->post('author_invisible');
        if($author_in == "on")
            $author_in = 1;
        else
            $author_in = 0;
        $type_in = $request->post('type_invisible');
        if($type_in == "on")
            $type_in = 1;
        else
            $type_in = 0;
        $time_in = $request->post('time_invisible');
        if($time_in == "on")
            $time_in = 1;
        else
            $time_in = 0;

        $editor0 = $request->post('editcont0');
        if($editor0!==null && $editor0 !== '')
            $editor0 =  htmlentities($editor0);//html_entity_decode($editor0);

        if($state==='edit'){
            $iid=0;
            try{
                DB::connection($this->waaupglobal)->table('tb_pagecontent_list')
                    ->Where('id', $oldid)
                    ->where('g_path', $this->g_path)
                    ->update([
                        'trans' => $translang
                        , 'pagetypeId' => intval($pgtype)
                        , 'title' => $title
                        , 'author' => $author
                        , 'url' => $url
                        , 'priority' => $Priority
                        , 'shstate' => $swhi
                        , 'content' => $editor0
                        , 'created_at' => $datapicker
                        , 'auth_state' => $author_in
                        , 'type_state' => $type_in
                        , 'date_state' => $time_in
                        , 'is_contentlist' => 0
                    ]);
                $iid=1;
            }
            catch(\Exception $e){}


        }
        else{
            $iid =  DB::connection($this->waaupglobal)->table('tb_pagecontent_list')->insertGetId(
                [
                    'trans' => $translang
                    , 'pagetypeId' => intval($pgtype)
                    , 'title' => $title
                    , 'author' => $author
                    , 'url' => $url
                    , 'priority' => $Priority
                    , 'shstate' => $swhi
                    , 'content' => $editor0
                    , 'created_at' => $datapicker
                    , 'auth_state' => $author_in
                    , 'type_state' => $type_in
                    , 'date_state' => $time_in
                    , 'g_path'=>$this->g_path
                    , 'is_contentlist' => 0
                ]
            );
        }



        if($iid > 0){
            return \Response::json([
                'msg'  =>  "ok"
            ]);
        }
        else
        {
            return \Response::json([
                'msg'  =>  "Error Insert in database"
            ]);
        }

        exit();

    }

    public function getPageSettingList(Request $request){
        $lang = $request->post('lang');
        $searchcont = $request->post('cont');
        $start  = intval($request->post('start'));
        $cnt    = intval($request->post('cnt'));
        $start_from = ($start-1) * $cnt;

        $where =' where a.trans = "'.$lang.'"  and a.g_path="'.$this->g_path.'" ';
        if($searchcont!==null && $searchcont!==''){
            $where .=' and a.content like "%'.$searchcont.'%" ';
        }
        $query='';
        $query.='SELECT a.*, b.name FROM tb_pagecontent_list AS a';
        $query.=' INNER JOIN tb_pagecontent_type AS b';
        $query.=' ON a.pagetypeId = b.id ';
        $query.=$where.' ORDER BY a.priority asc LIMIT '.$start_from.', '.$cnt.'';
        $rows = DB::connection($this->waaupglobal)->select($query);

        $query1='';
        $query1.='SELECT a.id FROM tb_pagecontent_list AS a';
        $query1.=' INNER JOIN tb_pagecontent_type AS b';
        $query1.=' ON a.pagetypeId = b.id ';
        $query1.=$where.' ORDER BY a.id DESC ';
        $cntrows = DB::connection($this->waaupglobal)->select($query1);

        $total = count($cntrows);
        $totalpage = ceil($total / $cnt);

        if($rows!==null && count($rows) > 0){
            return \Response::json([
                'msg'   =>  'ok',
                'total'    =>  $total,
                'start'    =>  $start,
                'lang'    =>  $lang,
                'totalpage'    =>  $totalpage,
                'list' =>  $rows
            ]);
        }
        else{
            return \Response::json([
                'msg'   =>  'err',
                'total'    =>  $total,
                'start'    =>  $start,
                'lang'    =>  $lang,
                'totalpage'    =>  $totalpage,
                'list' =>  ''
            ]);
        }

        exit();
    }

    public function changePageSettingitem(Request $request){
        $lang = $request->post('lang');
        $cond = $request->post('cond');
        $id  = intval($request->post('id'));
        if($cond==='edit'){

            $row =DB::connection($this->waaupglobal)->table('tb_pagecontent_list')->where([
                ['id', $id],
                ['trans', $lang],
                ['g_path', $this->g_path]
            ])->get()->first();

            $pgtypes = DB::connection($this->waaupglobal)->table('tb_pagecontent_type')
                ->where('trans',$lang)
                ->where('g_path', $this->g_path)->get();

            if($row!==null){
                return \Response::json([
                    'msg'   =>  'ok',
                    'lang'    =>  $lang,
                    'pagetype' => $pgtypes,
                    'items' =>  $row
                ]);
            }
            else{
                return \Response::json([
                    'msg'   =>  'err',
                    'pagetype' => '',
                    'lang'    =>  $lang,
                    'items' =>  ''
                ]);
            }
        }
        else if($cond==='del'){
            $ret=1;
            try{
                DB::connection($this->waaupglobal)->table('tb_pagecontent_list')
                    ->where('id', $id)
                    ->where('g_path', $this->g_path)->delete();
            }
            catch (\Exception $e)
            {
                $ret=0;
            }

              if($ret > 0){
                  return \Response::json([
                      'msg'   =>  'ok'
                  ]);
              }
              else{
                  return \Response::json([
                      'msg'   =>  'err'
                  ]);
              }

        }

        exit();
    }

/* wes global page register part */
    public function wwgpRegisterOrg(Request $request)
    {
        $trans = trim($request->post('transLang'));
        $register_org_content= trim($request->post('register_organization_content_val'));
        $register_org_maxline= trim($request->post('register_organization_maxline'));
        $wwgp_org_font_color_val= trim($request->post('wwgp_organization_font_color_val'));
        $wwgp_org_border_color_val= trim($request->post('wwgp_organization_border_color_val'));
        $wwgp_org_back_color_val= trim($request->post('wwgp_organization_back_color_val'));
        $register_org_content = utf8_decode($register_org_content);

        $destinationPath = 'uploads/images/waaupimg/';
        $file_pre = $request->post('organization_file_pre');
        $file = $request->file('organization_file');
        $filename='';
        if(!file_exists($_FILES['organization_file']['tmp_name']) && !empty($file_pre)){
            $filename=$file_pre;
        }
        else{
            $filename = time().'-'.$file->getClientOriginalName();

		/*	if($this->g_path!=="local")
			{
			   $this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
			   if(!empty($file_pre) && $this->filesystem->has('/'.$destinationPath.$file_pre))
				$this->filesystem->delete('/'.$destinationPath.$file_pre);
			}
			else*/
			{
			  $file->move(public_path().'/'.$destinationPath, $filename);//ckd
			   if(!empty($file_pre))
				@unlink(public_path().'/'.$destinationPath.$file_pre);
			}

        }

        $dbstr= array(
            'maxline' => $register_org_maxline,
            'fontcolor' => $wwgp_org_font_color_val,
            'bordercolor' => $wwgp_org_border_color_val,
            'backcolor' => $wwgp_org_back_color_val,
            'help' => $register_org_content,
            'advancss' =>$filename
        );
        $strjson =json_encode($dbstr);
        $row = DB::connection($this->waaupglobal)->table('tb_pageregister')
            ->Where([
                ['trans' , $trans],
                ['type' , 'org'],
                ['g_path', $this->g_path]
            ])->get()->first();

        $sucess = -1;
        if($row!==null)
        {
            $sucess = DB::connection($this->waaupglobal)->table('tb_pageregister')
                ->Where([
                    ['trans' , $trans],
                    ['type' , 'org'],
                    ['g_path', $this->g_path]
                ])
                ->update(['content' => $strjson, 'is_register' => 0]);
        }
        else
        {
            $sucess =  DB::connection($this->waaupglobal)->table('tb_pageregister')->insertGetId(
                [
                    'trans' => $trans,
                    'type'=>'org',
                    'content' => $strjson,
                    'g_path'=>$this->g_path,
                    'is_register' => 0
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

    public function wwgpGetRegisterOrg(Request $request){
        $transLang = $request->post('transLang');
        $row=null;
        if($transLang===null || $transLang === '')
        {
            $row = DB::connection($this->waaupglobal)->table('tb_pageregister')
                ->select(DB::connection($this->waaupglobal)->raw('content'))
                ->where('type','org')
                ->where('g_path', $this->g_path)
                ->get()->first();
        }
        else
        {
            $row = DB::connection($this->waaupglobal)->table('tb_pageregister')
                ->select(DB::connection($this->waaupglobal)->raw('content'))
                ->where([
                ['trans' , $transLang],
                ['type' , 'org'],
                ['g_path', $this->g_path]
            ])->get()->first();
        }

        if($row!==null){
            $content = $row->content;
        }
        else
            $content='';

        return \Response::json([
            'msg'  =>  'ok',
            'item' => $content
        ]);

        exit();
    }

    public function wwgpRegisterInd(Request $request)
    {
        $trans = trim($request->post('transLang'));
        $register_ind_content= trim($request->post('register_individual_content_val'));
        $register_ind_maxline= trim($request->post('register_individual_maxline'));
        $wwgp_ind_font_color_val= trim($request->post('wwgp_individual_font_color_val'));
        $wwgp_ind_border_color_val= trim($request->post('wwgp_individual_border_color_val'));
        $wwgp_ind_back_color_val= trim($request->post('wwgp_individual_back_color_val'));
        $register_ind_content = utf8_decode($register_ind_content);

        $destinationPath = 'uploads/images/waaupimg/';
        $file_pre = $request->post('individual_file_pre');
        $file = $request->file('individual_file');
        $filename='';
        if(!file_exists($_FILES['individual_file']['tmp_name']) && !empty($file_pre)){
            $filename=$file_pre;
        }
        else{
            $filename = time().'-'.$file->getClientOriginalName();

 /*          if($this->g_path!=="local")
			{
			   $this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
			   if(!empty($file_pre) && $this->filesystem->has('/'.$destinationPath.$file_pre))
				$this->filesystem->delete('/'.$destinationPath.$file_pre);
			}
			else*/
			{
			  $file->move(public_path().'/'.$destinationPath, $filename);//ckd

			   if(!empty($file_pre))
				@unlink(public_path().'/'.$destinationPath.$file_pre);
			}

        }

        $dbstr= array(
            'maxline' => $register_ind_maxline,
            'fontcolor' => $wwgp_ind_font_color_val,
            'bordercolor' => $wwgp_ind_border_color_val,
            'backcolor' => $wwgp_ind_back_color_val,
            'help' => $register_ind_content,
            'advancss' =>$filename
        );
        $strjson =json_encode($dbstr);
        $row = DB::connection($this->waaupglobal)->table('tb_pageregister')
            ->Where([
                ['trans' , $trans],
                ['type' , 'ind'],
                ['g_path', $this->g_path]
            ])->get()->first();

        $sucess = -1;
        if($row!==null)
        {
            $sucess = DB::connection($this->waaupglobal)->table('tb_pageregister')
                ->Where([
                    ['trans' , $trans],
                    ['type' , 'ind'],
                    ['g_path', $this->g_path]
                ])
                ->update(['content' => $strjson]);
        }
        else
        {
            $sucess =  DB::connection($this->waaupglobal)->table('tb_pageregister')->insertGetId(
                [
                    'trans' => $trans,
                    'type'=>'ind',
                    'content' => $strjson,
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

    public function wwgpGetRegisterInd(Request $request){
        $transLang = $request->post('transLang');
        $row=null;
        if($transLang===null || $transLang === '')
        {
            $row = DB::connection($this->waaupglobal)->table('tb_pageregister')
                ->select(DB::connection($this->waaupglobal)->raw('content'))
                ->where('type','ind')
                ->where('g_path', $this->g_path)
                ->get()->first();
        }
        else
        {
            $row = DB::connection($this->waaupglobal)->table('tb_pageregister')
                ->select(DB::connection($this->waaupglobal)->raw('content'))
                ->where([
                    ['trans' , $transLang],
                    ['type' , 'ind'],
                    ['g_path', $this->g_path]
                ])->get()->first();
        }

        if($row!==null){
            $content = $row->content;
        }
        else
            $content='';

        return \Response::json([
            'msg'  =>  'ok',
            'item' => $content
        ]);

        exit();
    }


    public  function wwgpRegisterStd(Request $request)
    {
        $trans = $request->post('transLang');
        $destinationPath = 'uploads/images/waaupimg/';
        $file_pre = $request->post('studentregistration_file_pre');
        $file = $request->file('studentregistration_file');
        $filename='';
        if(!file_exists($_FILES['studentregistration_file']['tmp_name']) && !empty($file_pre)){
            $filename=$file_pre;
        }
        else{
            $filename = time().'-'.$file->getClientOriginalName();
/*
			if($this->g_path!=="local")
			{
				$this->filesystem->write('/'.$destinationPath.$filename, file_get_contents($file));//ckd
				if(!empty($file_pre) && $this->filesystem->has('/'.$destinationPath.$file_pre))
					$this->filesystem->delete('/'.$destinationPath.$file_pre);
			}
			else*/
			{
				$file->move(public_path().'/'.$destinationPath, $filename);//ckd
				if(!empty($file_pre))
					@unlink(public_path().'/'.$destinationPath.$file_pre);
			}

        }

        $row = DB::connection($this->waaupglobal)->table('tb_pageregister')
            ->Where([
            ['trans' , $trans],
            ['type' , 'std'],
             ['g_path', $this->g_path]
        ])->get()->first();

        $sucess = -1;
        if($row!==null){
            $sucess = DB::connection($this->waaupglobal)->table('tb_pageregister')
                ->Where([
                    ['trans' , $trans],
                    ['type' , 'std'],
                    ['g_path', $this->g_path]
                ])
                ->update(['content' => $filename]);
        }
        else{
            $sucess =  DB::connection($this->waaupglobal)->table('tb_pageregister')->insertGetId(
                [
                    'trans' => $trans,
                    'type' => 'std',
                    'content' => $filename,
                    'g_path'=>$this->g_path
                ]
            );
        }

        if($sucess > -1){
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

    public function wwgpGetRegisterStd(Request $request){

        $tranedLang = $request->post('transLang');
        $row =null;
        if($tranedLang===null || $tranedLang === '')
        {
            $row = DB::connection($this->waaupglobal)->table('tb_pageregister')
                ->select(DB::connection($this->waaupglobal)->raw('trans, content'))
                ->where('type','std')
                ->where('g_path', $this->g_path)
                ->get()->first();
        }else{
            $row = DB::connection($this->waaupglobal)->table('tb_pageregister')
                ->select(DB::connection($this->waaupglobal)->raw('trans, content'))
                ->where([
                    ['trans' , $tranedLang],
                    ['type' , 'std'],
                    ['g_path', $this->g_path]
                ])
                ->get()->first();
        }

        $content='';
        if($row!==null && $row->content!==null && !empty($row->content)){
            $content=$row->content;
        }
        return \Response::json([
            'msg'  =>  'ok',
            'content' => $content
        ]);

        exit();
    }

    public function wwgpRegisterRelease(Request $request)
    {
        $trans = trim($request->post('trans'));
        $tabstatus = trim($request->post('tabstatus'));
        $release = trim($request->post('release'));

        $where = "";
        $type = "";
        if($tabstatus == 0)
            $type = "org";
        else if($tabstatus == 1)
            $type = "ind";
        else if($tabstatus == 2)
            $type = "std";
        $where = "trans='".$trans."' and type='".$type."' and g_path='".$this->g_path."'";
        $row = DB::connection($this->waaupglobal)->table('tb_pageregister')
            ->whereRaw($where)->get()->first();

        $sucess = -1;
        if($row!==null)
        {
            $sucess = DB::connection($this->waaupglobal)->table('tb_pageregister')
                ->whereRaw($where)->update(['is_register' => $release]);
        }
        else
        {
            $sucess =  DB::connection($this->waaupglobal)->table('tb_pageregister')->insertGetId(
                [
                    'trans' => $trans,
                    'type'=>$type,
                    'g_path'=>$this->g_path,
                    'is_register' => $release
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



}//class
