<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmususu_webs_wesglobal_media}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_media}}
                          <a href="#" id="webs-wesglobal-media-fav" data-status="off" data-page-info="Media_webs-wesglobal-media">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>
        <div class="card" style="padding:20px;">
            <div class="row" style="margin-top:10px;">
                <div class="col-md-12">
                    <div class="card border-0 m-b-0" id="current_path">
                        <span class="cursor-pointer" data-path="/">{{cpgtxt_media}}</span>
                        <!--<span>/</span>
                        <span class="cursor-pointer">Files</span>-->
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top:10px;">
                <div class="col-md-12">
                    <div class="card border-0 m-b-0">
                        <div class="input-group m-1" style="width: 35%;min-width: 300px;border-radius: 20px 0px 0px 20px;">
                            <div class="input-group-prepend" style="border-radius: 20px 0px 0px 20px;">
                                <span class="input-group-text" style="border-radius: 20px 0 0 20px; background-color: #ededed;">{{cpgtxt_search}}</span>
                            </div>
                            <input type="text" class="form-control" id="search-cont" name="search-cont" style="height: calc(1.5em + .75rem + 6px);">
                            <div class="input-group-append" @click.stop="fdirSearch" style="border-radius: 0px 20px 20px 0px;">
                            <span class="input-group-text" style="border-radius: 0px 20px 20px 0px; background-color: #ededed;">
                                <button class="btn" style="padding: 5px;"><i class="ti-search"></i></button>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" style="text-align: right;">
            <div class="col-md-12">
                <form method="post" enctype="multipart/form-data" name="upfile_frm" id="upfile_frm">
                    <div style="display: none">
                        <input type="hidden" name="uppath" id="uppath" value="">
                        <input type="file" name="upfiles[]" id="upfile" multiple>
                    </div>
                </form>
                <div id="media-upload-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-20 m-r-20" @click.stop="fileUpload">
                    <span><i class='fas fa-upload'></i>&nbsp;{{cpgtxt_upload}}</span>
                </div>

                <div id="media-createdir-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-20  m-r-20" @click.stop="createFolderByBtn">
                    <span><i class='far fa-plus-square'></i>&nbsp;{{cpgtxt_createfolder}}</span>
                </div>

                <div id="media-delete-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-20" @click.stop="allObjDelete">
                    <span><i class='far fa-file-code'></i>&nbsp;{{cpgtxt_delete}}</span>
                </div>
            </div>
        </div>

        <div class="wwgmcontainer">

            <div id="FootMenuContainer" class="sl-tab-container active" style="margin-top:10px;position: relative;">

                <div class="spinner-border text-info nonactive" role="status">
                    <span class="sr-only">Loading...</span>
                </div>

                <div class="row"><!--{{menu0}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body" @contextmenu="RightClickHandler($event)" id="card-body-div">

                                <h6 class="card-title m-b-20">
                                    <label class="checkbox-inline">
                                        <input type="checkbox" value="" style="width: 16px;height: 16px"  name="all_ck" id="all_ck" @click.stop="allCheckBox">&nbsp;{{cpgtxt_all}}
                                    </label>
                                </h6>

                                <div class="d-flex justify-content-start flex-wrap text-center" id="dir_view" >
                                    <!--
                                        <div class="d-flex flex-column p-20 cursor-pointer dir_item">
                                            <span>
                                            <i class='fas fa-folder' style='font-size:48px;color:#f0c243e3'></i>
                                            </span>
                                            <span>
                                                File1
                                            </span>
                                        </div>
                                        -->
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row" id="WWGMContextMenu" style="display: none; width: 180px; max-width: 180px;">
                <div class="col-12">
                    <div class="list-group" id="list-tab" role="tablist" style="background:white">
                        <a class="list-group-item list-group-item-action" id="list-createfolder-list" data-toggle="list" href="#list-Createfolder" role="tab" aria-controls="Createfolder">{{cpgtxt_createfolder}}</a>
                        <!--<a class="list-group-item list-group-item-action" id="list-createfile-list" data-toggle="list" href="#list-Createfile" role="tab" aria-controls="Createfile">Create file</a>-->
                        <a class="list-group-item list-group-item-action" id="list-copy-list" data-toggle="list" href="#list-Copy" role="tab" aria-controls="Copy">{{cpgtxt_copy}}</a>
                        <a class="list-group-item list-group-item-action" id="list-past-list" data-toggle="list" href="#list-Past" role="tab" aria-controls="Past">{{cpgtxt_paste}}</a>
                        <a class="list-group-item list-group-item-action" id="list-cut-list" data-toggle="list" href="#list-Cut" role="tab" aria-controls="Cut">{{cpgtxt_cut}}</a>
                        <a class="list-group-item list-group-item-action s-none" id="list-delete-list" data-toggle="list" href="#list-Delete" role="tab" aria-controls="Delete">{{cpgtxt_delete}}</a>
                    </div>
                </div>
            </div>

        </div>
        <!--modal-->
        <div class="modal fade" id="folderModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 450px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">create menu</h4>
                        <p id="sfi_alert" style="display: none;padding:5px 10px;border-radius:20px;">Create Menu area.</p>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="folderModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel" id="tab1">
                            <div class="row" style="padding-bottom: 10px;">
                                <div class="col-md-12">
                                    <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                </div>
                                <div style="margin: 10px 10px 0px 10px;">
                                    <div class="row" style="padding: 10px">
                                        <div class="col-md-1">
                                            <div class="form-group">
                                                <label style="margin-top: 8px; color:#666; width:100px;">font content</label>
                                            </div>
                                        </div>
                                        <div class="col-md-11" style="padding-left: 62px;">
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" name="cont[]" style="width: 300px;"  placeholder="" aria-label="wwgm-menucont" id="wwgm-menucont" aria-describedby="basic-addon2">
                                            </div>
                                        </div>

                                        <div class="col-md-1">
                                            <div class="form-group">
                                                <label style="margin-top: 8px; color:#666; width:100px;">link</label>
                                            </div>
                                        </div>
                                        <div class="col-md-11" style="padding-left: 62px;">
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" name="link[]" style="width: 300px;"  placeholder="" aria-label="wwgm-menulink" id="wwgm-menulink" aria-describedby="basic-addon2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div id="wwgm-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35">
                                        <span>+ {{cbtntxt_add}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end model-->
        <!-- name modal-->
        <div class="modal fade" id="objNameModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 450px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{cpgtxt_name}}</h4>
                        <p id="name_alert" style="display: none;padding:5px 10px;border-radius:20px;">{{cpgtxt_name}}</p>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="objNameModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel" id="tabname">
                            <div class="row" style="padding-bottom: 10px;">
                                <div class="col-md-12">
                                    <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                </div>
                                <div style="margin: 10px 10px 0px 10px;">
                                    <div class="row" style="padding: 10px">
                                        <div class="col-md-1">
                                            <div class="form-group">
                                                <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_name}}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-11" style="padding-left: 62px;">
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" name="objModalName" style="width: 300px;"  placeholder="" aria-label="wwgm-menucont" id="objModalName" aria-describedby="basic-addon2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div id="objname-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click="setObjNameAddClick">
                                        <span>+ {{cbtntxt_add}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end model-->
    </div>
</template>
<style>
    .dir_folder_item, .dir_file_item{
        width:fit-content;
        margin: 2px;
        background: none;
    }
    .dir_folder_item:hover, .dir_file_item:hover{
        background: #e5edf4;
    }
    #card-body-div{
        min-height: 450px;
    }
    .list-group-item.list-group-item-action.s-none{
        display: none;
    }
    #current_path{
        display: flex;
        flex-direction: row;
    }
    #current_path span{
        padding: 2px 4px;
    }
    #current_path span.cursor-pointer:hover{
        color: #1d91e8;
    }
    .spinner-border.text-info{
        position: absolute;
        top: 6rem;
        left: 21rem;
        z-index: 20;
        width: 4rem;
        height: 4rem;

        display: inline-block;
        vertical-align: text-bottom;
        border: 0.7em solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        -webkit-animation: spinner-border .75s linear infinite;
        animation: spinner-border .75s linear infinite;
        color: #5c6bc0 !important;
    }
    .spinner-border.text-info.nonactive{
        display: none;
    }

</style>

<script>

    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    // import { faChessQueen } from '@fortawesome/free-solid-svg-icons'

    var permss;

    var mineType= {
        image:'fas fa-file-image text-primary',
        jpg:'fas fa-file-image text-danger',
        gif:'fas fa-file-image text-warning',
        png:'fas fa-file-image text-primary',
        jpeg:'fas fa-file-image text-danger',
        audio:'fas fa-file-audio text-warning',
        mp3:'fas fa-file-audio text-warning',
        video:'fas fa-file-movie-o text-warning',
        mp4:'fas fa-file-movie-o text-warning',
        avi:'fas fa-file-movie-o text-warning',
        pdf:'fas fa-file-pdf text-danger',
        doc:'fas fa-file-word text-primary',
        docx:'fas fa-file-word text-primary',
        txt:'fas fa-file-text text-info',
        xls:'fas fa-file-excel text-success',
        xlsx:'fas fa-file-excel text-success',
        sheet:'fas fa-file-excel text-success',
        ppt:'fas fa-file-powerpoint text-danger',
        pptx:'fas fa-file-powerpoint text-danger',
        presentation:'fas fa-file-powerpoint text-danger',
        htm:'fas fa-file-code text-info',
        html:'fas fa-file-code text-info',
        gzip:'fas fa-file-archive text-muted',
        zip:'fas fa-file-archive text-muted',
        sql:'fas fa fa-database',
        rar:'fas fa-file-archive text-muted',
        folder: 'fas fa-folder',
        file:'fas fa-file'
    };

    var vueOBJ=null;
    var  wwgfield='upload';
    var createtype='';//dir or file

    var curpath='/';

    var srcpath='';
    var srccmd='';

    var despath='';
    var descmd='';

    function getMineType(fname) {

        var rt = mineType[fname];
        if(rt===undefined || rt===null || rt==="")
        {
            var ext = fname.split('.').pop();
            // console.log(ext);
            if(ext === fname)
                return mineType["file"];
            else{
                var fa =  mineType[ext];
                if(fa===undefined || fa===null || fa==="")
                    return mineType["file"];
                // console.log(fa);
                return fa;
            }
            return mineType["file"];
        }
        else
            return rt;
    }

    function  hidenModel(){
        $("#folderModal").modal('hide');
    }

    function opensubfolder(fname){
        alert(fname);
    }

    var is_allchecked = false;
    function  allChecked(onoff) {
        $('#dir_view').children().each( (index, element) => {
            if(onoff==='on'){
                $(element).css({background:'#e5edf4'});
                $(element).attr('data-selected','on');
                is_allchecked = true;
            }
            else if(onoff==='off'){
                $(element).css({background:'none'});
                $(element).attr('data-selected','off');
                is_allchecked = false;
            }
        });
    }

    function  isIntoFocus(x, y) {
        var result=false;
        $('#dir_view').children().each( (index, element) => {
            var pos = $(element).offset();
            var oleft=pos.left - 20;
            var otop=pos.top - 20;
            var oright = pos.left + $(element).width() + 20;
            var obotton = pos.top + $(element).height() + 20;
            if(x >= oleft && y >= otop && x <= oright && y <=obotton){
                $(element).css({background:'#e5edf4'});
                $(element).attr('data-selected','on');
                result = true;
            }
            else{
                $(element).css({background:'none'});
                $(element).attr('data-selected','off');
            }
        });
        return result;
    }

    function treePathMake(path) {
        var pgtxt_media= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_media');
        var pstr ='';
        if(path=='/'){
            pstr ='<span class="cursor-pointer data-ajax" id="p_" data-ajax="pgtxt_media">'+pgtxt_media+'</span>';
            $('#current_path').html(pstr);
        }
        else
        {
            var s_path = path.split('/');
            var id="p";
            for(var pi=0; pi < s_path.length; pi++)
            {
                var ct = s_path[pi];
                if(pi==0 && ct == ""){
                    id+="_";
                    pstr+='<span class="cursor-pointer data-ajax" id="'+id+'" data-ajax="pgtxt_media">'+pgtxt_media+'</span>';
                }
                else
                {
                    if(ct=="")
                    {
                        id+="_";
                        pstr+='<span>/</span>';
                    }
                    else
                    {
                        id+=ct+"_";
                        pstr+='<span>/</span><span class="cursor-pointer filepathlist" id="'+id+'">'+ct+'</span>';
                    }
                }

            }

            $('#current_path').html(pstr);
        }

        $("span[id^='p_']").click(function (e) {
            e.preventDefault();
            var id= $(this).attr('id');
            id = id.replace(/p_/g,"/");
            id = id.replace(/_/g,"/");
            getDirectories(id);
        });

    }

    function isUrlFound(url) {
        $('<img src="'+ url +'">').load(function() {
            return true;
        }).bind('error', function() {
            return false;
        });

        return false;
    }

    var selected_file = "";
    function getDirectories(p_path) {
        selected_file = "";

        $('.spinner-border.text-info').removeClass('nonactive');

        treePathMake(p_path);
        $.ajax({
            url: 'admin.getHostDirectories',
            data:{
                path:p_path,
                param:1
            },
            type: 'POST',
            async: true,
            success: function (data) {
                $('#dir_view').html('');
                var dirlist = data.dirs;
                curpath = p_path;
                var prefix ='';
                if(p_path.indexOf('/') > -1){
                    var s=p_path.split('/');
                    var len = s.length;
                    for(var j=1;j<len;j++)
                        prefix +='f';
                }
                else
                    prefix ='f';

                prefix +='_';

                for(var i= 0; i< dirlist.length; i++)
                {
                    var dirname = dirlist[i];
                    if(dirname.indexOf('/') > 0)
                    {
                        var s_dirname = dirname.split('/');
                        dirname = s_dirname[s_dirname.length-1];
                    }

                    dirname=dirname.replace(p_path,'');
                    var dirnameid = dirname.replace(/(\s*)/g, '')
                    if(dirnameid == "[..]")
                        dirnameid = "nonDirectory";
                    var tag = '<div class="d-flex flex-column p-20 cursor-pointer dir_folder_item" data-path="'+p_path+'" data-selected="off" id="'+prefix+dirnameid+'">';
                    tag += '<span class="folder-icon">';
                    tag += '<i class="'+mineType["folder"]+'" style="font-size:48px;color:#f0c243e3"></i>';
                    tag += '</span>';
                    tag += '<span class="cgobj-name">';
                    tag += dirname;
                    tag += '</span>';
                    tag += '</div>';

                    $('#dir_view').append(tag);

                    $('#'+prefix+dirnameid).dblclick(function (e) {
                        e.preventDefault();
                        var path = $(this).attr('data-path');
                        var ename = $(this).children('span.cgobj-name').text();
                        var selPath = path+ename+'/';
                        if(ename == "[..]"){
                            var out_path = '';
                            var path_arr = selPath.split('/');
                            for(var p = 0; p < path_arr.length - 3; p++){
                                out_path += path_arr[p] + '/';
                            }
                            selPath = out_path;
                        }
                        getDirectories(selPath);
                    });
                }

                var filelist = data.files;
                var thumblist = data.thumb;
                for(var i= 0; i< filelist.length; i++)
                {
                    var filename = filelist[i];
                    var thumbs = thumblist[i];
                    var fileid = "";
                    if(filename.indexOf('/') > 0)
                    {
                        var s_filename = filename.split('/');
                        filename = s_filename[s_filename.length-1];
                    }
                    //fileid = filename.replace(/./g, '_');
                    //fileid = fileid.replace(/(\s*)/g, '');
                    fileid = filename.replace(/(\s*)/g, '');
                    var filename_split = fileid.split('.');
                    for(var s = 0; s < filename_split.length; s++){
                        if(s == 0)
                            fileid = filename_split[s];
                        else
                            fileid += '_' + filename_split[s];
                    }
                    var ftag = '<div class="d-flex flex-column p-20 cursor-pointer dir_file_item" data-path="'+p_path+'" data-selected="off" id="mediafile-'+prefix+fileid+'">';
                    ftag += '<span class="file-icon">';

                    //if(isUrlFound(thumbs[0]))
                    ftag += '<img src="'+thumbs[0]+'">';
                    //else
                    ///    ftag += '<i class="'+getMineType(filename)+'" style="font-size:48px;"></i>';
                    ftag += '</span>';
                    ftag += '<span class="cgobj-name">';
                    ftag += filename;
                    ftag += '</span>';
                    ftag += '</div>';

                    $('#dir_view').append(ftag);
                    $('div[id^="mediafile-"]').on('mousedown', function (){
                        var pgtxt_media= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_media');
                        var path = $('#current_path').text();
                        var path_split = path.split('/');

                        var filename = $(this).attr('id');
                        filename = filename.replace('mediafile-', '');
                        filename = filename.replace(prefix, '');
                        var exes = filename.split("_");
                        for (var e = 0; e < exes.length - 1; e++) {
                            if (e == 0)
                                filename = exes[e];
                            else
                                filename += '_' + exes[e];
                        }
                        if(filename != selected_file) {
                            var filepath = '';
                            if (path_split.length == 1) {
                                var pstr = '<span class="cursor-pointer data-ajax" id="p_" data-ajax="pgtxt_media">' + pgtxt_media + '</span>';
                                filepath = pstr + '<span>/</span><span class="cursor-pointer selectedfile">' + filename + '</span>';
                            }
                            else{
                                path = path.replace(selected_file, '');
                                var path_split = path.split('/');
                                var pstr = '<span class="cursor-pointer data-ajax" id="p_" data-ajax="pgtxt_media">' + pgtxt_media + '</span>';
                                var id="p_";
                                for(var ps = 1; ps < path_split.length - 1; ps++){
                                    id += path_split[ps] + '_';
                                    pstr += '<span>/</span><span class="cursor-pointer filepathlist" id="'+id+'">' + path_split[ps] + '</span>';
                                }
                                filepath = pstr + '<span>/</span><span class="cursor-pointer selectedfile">'+filename+'</span>';
                            }

                            $('#current_path').html(filepath);
                        }
                        selected_file = filename;
                    });
                }

                $('.spinner-border.text-info').addClass('nonactive');

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }


    function createFolder(p_path, foldername) {
        $('.spinner-border.text-info').removeClass('nonactive');
        var ret=false;
        $.ajax({
            url: 'admin.makeHostDirectory',
            data:{
                foldername:foldername,
                path:p_path
            },
            type: 'POST',
            async: true,
            success: function (data) {
                if(data.msg=='ok')
                {
                    var prefix ='';
                    if(p_path.indexOf('/') > -1){
                        var s=p_path.split('/');
                        var len = s.length;
                        for(var j=1;j<len;j++)
                            prefix +='f';
                    }
                    else
                        prefix ='f';

                    prefix +='_';
                    var folderid = foldername.replace(/(\s*)/g, '')
                    var tag = '<div class="d-flex flex-column p-20 cursor-pointer dir_folder_item" data-path="'+p_path+'" data-selected="off" id="'+prefix+folderid+'">';
                    tag += '<span class="folder-icon">';
                    tag += '<i class="fas fa-folder" style="font-size:48px;color:#f0c243e3"></i>';
                    tag += '</span>';
                    tag += '<span class="cgobj-name">';
                    tag += foldername;
                    tag += '</span>';
                    tag += '</div>';
                    $('#dir_view').append(tag);
                    $('#'+prefix+folderid).dblclick(function (e) {
                        e.preventDefault();
                        var id = $(this).attr('id');
                        var path = $(this).attr('data-path');
                        var ename = $(this).children('span.cgobj-name').text();
                        getDirectories(path+ename+'/');
                    });

                    $('.spinner-border.text-info').addClass('nonactive');

                    ret=true;
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });

        return ret;
    }

    /* no using*/
    function createFile(p_path, filename) {
        if(filename.indexOf('.') < 1)
        {
            alert("file name is no correct");
            return false;
        }

        var prefix ='f';
        if(p_path.indexOf('/') > -1){
            var s=p_path.split('/');
            var len = s.length;
            for(var j=1;j<len;j++)
                prefix +='f';
        }
        prefix +='_';

        var fid = filename.replace(/./g, '_');
        var tag = '<div class="d-flex flex-column p-20 cursor-pointer dir_file_item" data-path="'+p_path+'" data-selected="off" id="'+prefix+fid+'">';
        tag += '<span class="file-icon">';
        tag += '<i class="far fa-file" style="font-size:48px;"></i>';
        tag += '</span>';
        tag += '<span class="cgobj-name">';
        tag += filename;
        tag += '</span>';
        tag += '</div>';
        $('#dir_view').append(tag);

        return true;
    }
    function copyObj(objinfo) {
        if(objinfo != undefined && objinfo !=null && objinfo.id !="" && objinfo.name !="" && curpath !=""){
            srccmd='copy';
            srcpath=curpath + objinfo.name;
        }
        else{
            alert("please select file or folder to copy");
        }
    }
    function cutObj(objinfo) {
        if(objinfo != undefined && objinfo !=null && objinfo.id !="" && objinfo.name !="" && curpath !=""){
            srccmd='cut';
            srcpath=curpath + objinfo.name;
        }
        else
        {
            alert("please select file or folder to cut");
        }
    }
    function pastObj(objinfo) {

        if(objinfo != undefined && objinfo !=null && curpath !="")
        {
            descmd='past';
            if(objinfo.id !="" && objinfo.name !="")
                despath=curpath + objinfo.name;
            else
                despath=curpath;
            // console.log('srccmd=' + srccmd+'; srcpath=' + srcpath+'; descmd=' + descmd+'; despath=' + despath);
            if(srccmd=="" || srcpath=="")
                alert("please select file or folder to past");
            else
            {
                $('.spinner-border.text-info').removeClass('nonactive');
                $.ajax({
                    url: 'admin.changeHostObj',
                    data:{
                        srccmd:srccmd,
                        srcpath:srcpath,
                        descmd:descmd,
                        despath:despath
                    },
                    type: 'POST',
                    async: true,
                    success: function (data) {
                        if(data.msg=="ok"){
                            srccmd="";
                            srcpath="";
                            descmd="";
                            despath="";
                            getDirectories(curpath);
                        }
                        $('.spinner-border.text-info').addClass('nonactive');
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                        $('.spinner-border.text-info').addClass('nonactive');
                    }
                });
            }
        }
        else
        {
            alert("please select file or folder to past");
        }
    }

    function  getSelectedItemInfo() {
        var name="";
        var id="";
        var path="";

        $('#dir_view').children().each( (index, element) => {
            var spre = $(element).attr('data-selected');
            if(spre=='on'){
                name = $(element).children('span.cgobj-name').text();
                id =   $(element).attr('id');
                path= $(element).attr('data-path');
                //console.log(name);
            }
        });
        var result={
            name:name,
            id:id,
            path:path
        };
        return result;
    }

    function deletefunc(){
        var objlists=[];
        var delids = [];
        $('#dir_view').children().each( (index, element) => {
            var spre = $(element).attr('data-selected');
            if(spre=='on'){
                var name = $(element).children('span.cgobj-name').text();
                var id =   $(element).attr('id');
                var self_path = $(element).attr('data-path');
                var fpath=self_path + name;
                objlists.push(fpath);
                id = id.replace(/(\s*)/g, '');
                delids.push(id);
            }
        });
        // console.log(objlists);

        if(objlists.length > 0)
        {
            $.ajax({
                url: 'admin.deleteAllHostObj',
                data:{
                    objlist:objlists
                },
                type: 'POST',
                async: true,
                success: function (data) {
                    if(data.msg=="ok"){
                        //$('#dir_view').html('');
                        for(var i = 0; i < delids.length; i++){
                            $('#'+delids[i]+'').remove();
                        }
                        $('input[id="all_ck"]').prop('checked', false);
                    }
                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });

        }
    }
    function deleteObj(objinfo) {
        /*console.log(objinfo.id);
        console.log(objinfo.name);
        console.log(curpath);*/
        if(!is_allchecked){
            if(objinfo != undefined && objinfo !=null && objinfo.id !="" && objinfo.name !="" && curpath !=""){
                $('.spinner-border.text-info').removeClass('nonactive');
                var fid = objinfo.id;
                if(objinfo.path==="")
                    objinfo.path=curpath;
                $.ajax({
                    url: 'admin.deleteHostObj',
                    data:{
                        fpath:objinfo.path + objinfo.name
                    },
                    type: 'POST',
                    async: true,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#'+fid+'').remove();
                        }
                        $('.spinner-border.text-info').addClass('nonactive');
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            }
        }
        else {
            if($('#all_ck').is(':checked'))
            {
                var objlists=[];
                $('#dir_view').children().each( (index, element) => {
                    var spre = $(element).attr('data-selected');
                    if(spre=='on'){
                        var name = $(element).children('span.cgobj-name').text();
                        var id =   $(element).attr('id');
                        var fpath=curpath + name;
                        objlists.push(fpath);
                    }
                });
                // console.log(objlists);

                if(objlists.length > 0)
                {
                    $.ajax({
                        url: 'admin.deleteAllHostObj',
                        data:{
                            objlist:objlists
                        },
                        type: 'POST',
                        async: true,
                        success: function (data) {
                            if(data.msg=="ok"){
                                $('#dir_view').html('');
                                $('input[id="all_ck"]').prop('checked', false);
                            }
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        }
                    });

                }
            }
        }

    }

    export default {
        name: "WebsWesGlobalMedia",
        components: {
            // 'font-awesome-icon': FontAwesomeIcon
        },
        data(){
            return {
                pageid:'webs-wesglobal-media-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_media:'',
                pgtxt_upload:'',
                pgtxt_createfolder:'',
                pgtxt_delete:'',
                pgtxt_media:'',
                pgtxt_search:'',
                pgtxt_copy:'',
                pgtxt_paste:'',
                pgtxt_cut:'',
                btntxt_add:'',
                pgtxt_name:'',
                pgtxt_all:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                pgtxt_wantdeleteitem:'',
                btntxt_ok:'',
                btntxt_cancel:'',
            }
        },
        created() {

        },
        beforeMount(){
        },
        computed: {
            /*queen () {
                return faChessQueen
            },*/
            cmususu_webs_wesglobal_media:function () {
                return this.mususu_webs_wesglobal_media
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_wesglobal:function () {
                return this.musu_webs_wesglobal
            },
            cpgtxt_upload:function () {
                return this.pgtxt_upload
            },
            cpgtxt_createfolder:function () {
                return this.pgtxt_createfolder
            },
            cpgtxt_delete:function () {
                return this.pgtxt_delete
            },
            cpgtxt_media:function () {
                return this.pgtxt_media
            },
            cpgtxt_search:function () {
                return this.pgtxt_search
            },
            cpgtxt_copy:function () {
                return this.pgtxt_copy
            },
            cpgtxt_paste:function () {
                return this.pgtxt_paste
            },
            cpgtxt_cut:function () {
                return this.pgtxt_cut
            },
            cpgtxt_all:function () {
                return this.pgtxt_all
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_name:function () {
                return this.pgtxt_name
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },
            cpgtxt_wantdeleteitem:function () {
                return this.pgtxt_wantdeleteitem;
            },
            cbtntxt_ok:function () {
                return this.btntxt_ok;
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel;
            },

            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj, key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        mounted(){
            /* fav part*/
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            permss = myjs.data.permissionDefinition();
            this.initpage();
        },
        methods:{
            /* fav part */
            getSiteFaveritelist(list){
                if(list!==null && list!=='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
                /* fav part*/
            },
            initpage(){
                $(document).on('click', '*', function (e)
                {
                    if (!$(e.target).is($('div.wwgmcontainer *')))//모든 오브젝트가 이 오브젝트안에 포함되지 않으면 되돌이.
                        return true;

                    if($("div#WWGMContextMenu").is(":visible"))
                    {
                        if (!$(e.target).is($('div#WWGMContextMenu, div#WWGMContextMenu *')))
                        {
                            $('a#list-delete-list').addClass('s-none');
                            $('div#WWGMContextMenu').hide();

                            var x = e.pageX;
                            var y = e.pageY;
                            isIntoFocus(x, y);
                        }
                        else
                        {
                            /*드롭다운메뉴선택시 commands*/
                            if ($(e.target).is($('div#WWGMContextMenu a.list-group-item'))) {
                                var txt = $(e.target).text();
                                var id = $(e.target).attr('id');
                                //console.log(txt);
                                if(id=='list-createfolder-list'){
                                    if (permss.pcreate == 1) {
                                        createtype = 'dir';
                                        $('input#objModalName').val('');
                                        $('#objNameModal').modal('show');
                                        $('input#objModalName').focus();
                                    }
                                    else
                                        myjs.data.showAlert('pgtxt_notpermission');
                                }
                                else if(id=='list-createfile-list'){
                                    createtype='file';
                                    $('input#objModalName').val('');
                                    $('#objNameModal').modal('show');
                                    $('input#objModalName').focus();
                                }
                                else if(id=='list-copy-list') {
                                    if (permss.pcreate == 1 && permss.pwrite == 1) {
                                        copyObj(getSelectedItemInfo());
                                    }
                                    else
                                        myjs.data.showAlert('pgtxt_notpermission');
                                }
                                else if(id=='list-cut-list')
                                    if (permss.pcreate == 1 && permss.pwrite == 1) {
                                        cutObj(getSelectedItemInfo());
                                    }else
                                        myjs.data.showAlert('pgtxt_notpermission');
                                else if(id=='list-past-list')
                                    if (permss.pcreate == 1 && permss.pwrite == 1) {
                                        pastObj(getSelectedItemInfo());
                                    }else
                                        myjs.data.showAlert('pgtxt_notpermission');
                                else if(id=='list-delete-list'){
                                    /*if (window.confirm("Do you want to delete this item")){
                                        deleteObj(getSelectedItemInfo());
                                    }*/
                                    if (permss.pdelete == 1) {
                                        myjs.data.confirmNormal(deletefunc, 'pgtxt_wantdeleteitem');
                                    }
                                    else
                                        myjs.data.showAlert('pgtxt_notpermission');
                                }

                                $('a#list-delete-list').addClass('s-none');
                                $('div#WWGMContextMenu').hide();

                            }


                        }

                        $('input[id="all_ck"]').prop('checked',false);
                        is_allchecked = false;
                    }
                    else
                    {
                        var x = e.pageX;
                        var y = e.pageY;
                        isIntoFocus(x, y);
                        $('input[id="all_ck"]').prop('checked',false);
                        is_allchecked = false;
                    }

                    return false;

                });

                $('#objNameModal').on('hidden.bs.modal', function (e) {
                    //alert('modal hide');
                    createtype='';
                    $('#objModalName').val('');
                });

                $('#upfile').change(function(){
                    $('input#uppath').val(curpath);
                    var  formData = new FormData($("#upfile_frm")[0]);
                    $.ajax({
                        url: 'admin.wwgMediaUpload',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if(data.msg=="ok"){
                                getDirectories(curpath);
                            }
                            else
                                alert(data.msg);
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                });

                getDirectories('/');
            },
            RightClickHandler(e){
                e.preventDefault();
                $('div#WWGMContextMenu a').removeClass('active');
                var x = e.pageX;
                var y = e.pageY;

                if(!is_allchecked){
                    if(isIntoFocus(x, y)){
                        $('a#list-delete-list').removeClass('s-none');
                    }
                }
                else{
                    $('a#list-delete-list').removeClass('s-none');
                }


                //$('input[id="all_ck"]').prop('checked',false);
                $('div#WWGMContextMenu').css({top: y + 'px', left: x + 'px', position:'absolute'});
                $('div#WWGMContextMenu').show();
            },
            setObjNameAddClick(){
                var objname = $.trim($('#objModalName').val());
                if(objname.length > 0)
                {
                    var ret = this.haveSameNameCheck(objname);
                    if(ret.msg==='ok')
                    {
                        var rt=true;
                        if(createtype=='dir'){
                            rt =  createFolder(curpath, objname);
                        }
                        else if(createtype=='file'){
                            rt =  createFile(curpath, objname);
                        }

                        // if(rt)
                        {
                            $('#objNameModal').modal('hide');
                            createtype='';
                        }
                    }
                    else{
                        alert('name is exist already\n');
                    }

                }

            },
            haveSameNameCheck(pname){
                // var childrens = $('#dir_view');
                var rname={
                    name:pname,
                    msg:'ok'
                };
                $('#dir_view').children().each( (index, element) => {
                    // console.log(index);     // children's index
                    var ename = $(element).children('span.cgobj-name').text();
                    //console.log(ename);
                    if(pname === ename){
                        rname.msg='same';
                    }
                });

                return rname;
            },
            allObjDelete(){
                /*if($('#all_ck').is(':checked'))
                {
                    if (window.confirm("Do you want to delete all items"))
                    {
                        var objlists=[];
                        $('#dir_view').children().each( (index, element) => {
                            var spre = $(element).attr('data-selected');
                            if(spre=='on'){
                               var name = $(element).children('span.cgobj-name').text();
                               var id =   $(element).attr('id');
                               var fpath=curpath + name;
                                objlists.push(fpath);
                            }
                        });
                       // console.log(objlists);

                        if(objlists.length > 0)
                        {
                            $.ajax({
                                url: 'admin.deleteAllHostObj',
                                data:{
                                    objlist:objlists
                                },
                                type: 'POST',
                                async: true,
                                success: function (data) {
                                    if(data.msg=="ok"){
                                        $('#dir_view').html('');
                                        $('input[id="all_ck"]').prop('checked', false);
                                    }
                                },
                                error: function (jqXHR, errdata, errorThrown) {
                                    console.log(errdata);
                                }
                            });

                        }
                    }
                }*/
                if (permss.pdelete == 1) {
                    myjs.data.confirmNormal(deletefunc, 'pgtxt_wantdeleteitem');
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            allCheckBox(){
                if($('#all_ck').is(':checked')){
                    var clen = $('#dir_view').children().length;
                    if(clen < 1) {
                        $('input[id="all_ck"]').prop('checked', false);
                        is_allchecked = false;
                    }
                    else
                        allChecked('on');
                }
                else
                    allChecked('off');

            },
            fileUpload(){
                if (permss.pcreate == 1) {
                    $('#upfile').trigger('click');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            fdirSearch(){
                if (permss.pread == 0) {
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                var cont = $('#search-cont').val();
                cont = $.trim(cont);
                if(cont==="")return;

                $('.spinner-border.text-info').removeClass('nonactive');

                $.ajax({
                    url: 'admin.searchAllHostObj',
                    data:{
                        path:curpath,
                        scont:cont,
                        param:1
                    },
                    type: 'POST',
                    async: true,
                    success: function (data) {
                        if(data.msg==="ok"){
                            //console.log(data.dirs);
                            //console.log(data.files);
                            $('#dir_view').html('');

                            var dirlist = data.dirs;
                            for(var i= 0; i< dirlist.length; i++)
                            {
                                var dirnameArr = dirlist[i];
                                var dpath = dirnameArr.split("&&")[0];
                                var dirname= dirnameArr.split("&&")[1];
                                var dirnameid = "";
                                if(dirnameArr == "[..]") {
                                    dirnameid = "nonDirectory";
                                    dirname = dirnameArr;
                                }
                                else {
                                    dirnameid = dirname.replace(/(\s*)/g, '')
                                }
                                var prefix ='';
                                if(dpath.indexOf('/') > -1){
                                    var s=dpath.split('/');
                                    var len = s.length;
                                    for(var j=1;j<len;j++)
                                        prefix +='f';
                                }
                                else
                                    prefix ='f';

                                prefix +='_';

                                var tag = '<div class="d-flex flex-column p-20 cursor-pointer dir_folder_item" data-path="'+dpath+'/" data-selected="off" id="'+prefix+dirnameid+'">';
                                tag += '<span class="folder-icon">';
                                tag += '<i class="'+mineType["folder"]+'" style="font-size:48px;color:#f0c243e3"></i>';
                                tag += '</span>';
                                tag += '<span class="cgobj-name">';
                                tag += dirname;
                                tag += '</span>';
                                tag += '</div>';

                                $('#dir_view').append(tag);

                                $('#'+prefix+dirnameid).dblclick(function (e) {
                                    e.preventDefault();
                                    var path = $(this).attr('data-path');
                                    var ename = $(this).children('span.cgobj-name').text();
                                    var selPath = path+ename+'/';
                                    if(ename == "[..]")
                                        selPath = "/";
                                    selPath = selPath.replace("./", "");
                                    getDirectories(selPath);
                                });
                            }

                            var filelist = data.files;
                            var thumblist = data.thumb;
                            for(var i= 0; i< filelist.length; i++)
                            {
                                var filenameArr = filelist[i];
                                var thumbs = thumblist[i];
                                var dpath = filenameArr.split("&&")[0];
                                var filename= filenameArr.split("&&")[1];

                                var prefix ='';
                                if(dpath.indexOf('/') > -1){
                                    var s=dpath.split('/');
                                    var len = s.length;
                                    for(var j=1;j<len;j++)
                                        prefix +='f';
                                }
                                else
                                    prefix ='f';

                                prefix +='_';

                                var fileid="";
                                fileid = filename.replace(/./g,"_");
                                fileid = fileid.replace(/(\s*)/g, '')
                                var ftag = '<div class="d-flex flex-column p-20 cursor-pointer dir_file_item" data-path="'+dpath+'/" data-selected="off" id="'+prefix+fileid+'">';
                                ftag += '<span class="file-icon">';

                                //if(isUrlFound(thumbs[0]))
                                ftag += '<img src="'+thumbs[0]+'">';
                                //else
                                //    ftag += '<i class="'+getMineType(filename)+'" style="font-size:48px;"></i>';
                                ftag += '</span>';
                                ftag += '<span class="cgobj-name">';
                                ftag += filename;
                                ftag += '</span>';
                                ftag += '</div>';

                                $('#dir_view').append(ftag);
                            }

                            $('.spinner-border.text-info').addClass('nonactive');


                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            createFolderByBtn(){
                if (permss.pcreate == 1) {
                    createtype = 'dir';
                    $('input#objModalName').val('');
                    $('#objNameModal').modal('show');
                    $('input#objModalName').focus();
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }


        }//method


    }
</script>
