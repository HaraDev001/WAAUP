<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_media_audio}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_media}} >> {{cmusususu_webs_wesglobal_media_audio}}
                          <a href="#" id="webs-wesglobal-media-audio-fav" data-status="off" data-page-info="Audio_webs-wesglobal-media-audio">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 d-flex justify-content-end">
                <form method="post" enctype="multipart/form-data" name="upfile_frm" id="upfile_frm">
                    <div style="display: none">
                        <input type="hidden" name="uppath" id="uppath" value="">
                        <input type="file" name="upfiles[]" id="upfile" multiple>
                    </div>
                </form>

                <div id="media-createdir-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-20  m-r-20" @click.stop="createFolderByBtn">
                    <span><i class='far fa-plus-square'></i>&nbsp;{{cbtntxt_addfolder}}</span>
                </div>
                <div id="media-upload-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-20 m-r-20" @click.stop="fileUpload($event)">
                    <span><i class='fas fa-upload'></i>&nbsp;{{cpgtxt_upload}}</span>
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
                            <div class="card-body"  id="card-body-div" style="padding-top:1rem" @contextmenu="RightClickHandler($event)">
                                <div class="row">
                                    <div class="col-auto wes-theme-color" style="font-size: 16px">{{cpgtxt_list}}</div>
                                    <div class="col">  <!--folder-->  </div>
                                    <div class="col-auto">
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
                                <!-- <div class="d-flex justify-content-start flex-wrap text-center" id="dir_view" @contextmenu="RightClickHandler($event)">-->
                                <div class="d-flex flex-wrap justify-content-start text-center" id="dir_view">
                                    <!-- list of folder and file -->
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row" id="WWGMContextMenu" style="display: none; width: 180px; max-width: 180px;">
                <div class="col-12">
                    <div class="list-group" id="list-tab" role="tablist" style="background:white">
                        <a class="list-group-item list-group-item-action" id="list-viewdetails-list" href="#">{{cpgtxt_viewdetails}}</a>
                        <a class="list-group-item list-group-item-action" id="list-download-list" data-toggle="list" href="#list-Download" role="tab" aria-controls="Download">{{cpgtxt_download}}</a>
                        <a class="list-group-item list-group-item-action" id="list-rename-list" data-toggle="list" href="#list-Rename" role="tab" aria-controls="Rename">{{cpgtxt_rename}}</a>
                        <a class="list-group-item list-group-item-action" id="list-createfolder-list" data-toggle="list" href="#list-Createfolder" role="tab" aria-controls="Createfolder">{{cpgtxt_createfolder}}</a>
                        <a class="list-group-item list-group-item-action" id="list-copy-list" data-toggle="list" href="#list-Copy" role="tab" aria-controls="Copy">{{cpgtxt_copy}}</a>
                        <a class="list-group-item list-group-item-action" id="list-paste-list" data-toggle="list" href="#list-Paste" role="tab" aria-controls="Paste">{{cpgtxt_paste}}</a>
                        <a class="list-group-item list-group-item-action" id="list-cut-list" data-toggle="list" href="#list-Cut" role="tab" aria-controls="Cut">{{cpgtxt_cut}}</a>
                        <a class="list-group-item list-group-item-action" id="list-delete-list" data-toggle="list" href="#list-Delete" role="tab" aria-controls="Delete">{{cpgtxt_delete}}</a>
                    </div>
                </div>
            </div>

        </div>

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
                                <div class="col-md-12 text-center" id="objname-model-add-cont">
                                    <div id="objname-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click="setObjNameAddClick">
                                        <span>+ {{cbtntxt_add}}</span>
                                    </div>
                                </div>
                                <div class="col-md-12 text-center" style="display:none;" id="objname-model-change-cont">
                                    <div id="objname-model-change" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35"  @click="setObjNameAddClick">
                                        <span>{{cbtntxt_change}}</span>
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
    #card-body-div{
        min-height: 500px;
    }
    .list-group-item.list-group-item-action.s-none{
        display: none;
    }
    .list-group-item.list-group-item-action.t-redius{
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    .list-group-item.list-group-item-action.b-redius{
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
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
    .media_dir_name{
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background-color: #f3f3f3;
        border-top: 1px solid #e6e6e6;
        padding: 0;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .media_dir_detail{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .media_dir_detail_btn{
        font-weight: 800;
        border-radius: 25px;
        border: 1px solid #d9d5d5;
        color: #d9d5d5;
        width: 25px;
        height: 25px;
    }
    .list-group-item:first-child{
        border-top-left-radius: 1.0rem;
        border-top-right-radius: 1.0rem;
    }
    .list-group-item:last-child{
        border-bottom-left-radius: 1.0rem;
        border-bottom-right-radius: 1.0rem;
    }

</style>

<script>

    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import media_module from "../../assets/jsfunc/media_module";
    // import { faChessQueen } from '@fortawesome/free-solid-svg-icons'

    var vueOBJ=null;
    var  wwgfield='upload';
    var createtype='';//dir or file

    var curpath='/';

    var srcpath='';
    var srccmd='';

    var despath='';
    var descmd='';
    var permss={};
    var mineType={};

    var dirinfo={
        name:'',
        id:'',
        path:'',
        type:'',
        poptype:''
    };
    function InitDirObj(){
        dirinfo.name='';
        dirinfo.id='';
        dirinfo.path='';
        dirinfo.type='';
        dirinfo.poptype='';
    }
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

    function opensubfolder(fname){
        myjs.data.showAlert(fname);
    }

    function showClickHandler(e){
        e.preventDefault();
        e.stopPropagation();
        //e.stopImmediatePropagation();
        InitDirObj();
        $('div#WWGMContextMenu a').removeClass('active').removeClass('s-none');
        $('div#WWGMContextMenu a').removeClass('t-redius');
        $('div#WWGMContextMenu a').removeClass('b-redius');
        $('div#WWGMContextMenu a#list-createfolder-list, div#WWGMContextMenu a#list-paste-list').addClass('s-none');

        var contextID=$(e.target).data('info');
        var name = $('#'+contextID+' span.cgobj-name').text();
        var path= $('#'+contextID).data('path');

        dirinfo.name=name;
        dirinfo.id=contextID;
        dirinfo.path=path;
        dirinfo.type='dir';
        dirinfo.poptype='left';

        var x = e.pageX;
        var y = e.pageY;

        $('div#WWGMContextMenu').css({top: y + 'px', left: x + 'px', position:'absolute'});
        $('div#WWGMContextMenu').show();
    }

    function isUrlFound(url) {
        $('<img src="'+ url +'">').load(function() {
            return true;
        }).bind('error', function() {
            return false;
        });

        return false;
    }

    function getDirectories(p_path) {

        $('.spinner-border.text-info').removeClass('nonactive');
        // treePathMake(p_path);
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
                if(p_path.split('/').length > 0){
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
                    if(dirname.split('/').length > 1)
                    {
                        var s_dirname = dirname.split('/');
                        dirname = s_dirname[s_dirname.length-1];
                    }

                    dirname=dirname.replace(p_path,'');
                    var dirnameid = dirname.replace(/(\s*)/g, '');
                    var tag ='';
                    if(dirnameid == "[..]")
                    {
                        dirnameid = "nonDirectory";
                        tag = '<div class="d-flex flex-wrap cursor-pointer dir_folder_item  media_dir_boder" data-path="'+p_path+'" id="'+prefix+dirnameid+'" >';
                        tag += '<div class="col-12 media_dir_detail"></div>';
                        tag += '<div class="col-12 media_dir_icon"><img src="/images/up-arrow.png" style="max-width:63px;max-height:54px;opacity:0.5"></div>';
                        tag += '<div class="col-12 media_dir_name" style="border:0;display:none;"><span class="cgobj-name">'+dirname+'</span></div>';
                        tag += '</div>';

                    }
                    else
                    {
                        tag = '<div class="d-flex flex-wrap cursor-pointer dir_folder_item media_dir_boder" data-path="'+p_path+'" data-selected="off" id="'+prefix+dirnameid+'" >';

                        tag += '<div class="col-12 media_dir_detail"><div class="media_dir_detail_btn" data-info="'+prefix+dirnameid+'">···</div></div>';
                        tag += '<div class="col-12 media_dir_icon"><i class="'+mineType["folder"]+'" style="font-size:40px;color:#f0c243e3"></i></div>';
                        tag += '<div class="col-12 media_dir_name"><span class="cgobj-name">'+dirname+'</span></div>';

                        tag += '</div>';
                    }

                    $('#dir_view').append(tag);

                    $('#'+prefix+dirnameid).dblclick(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        var path = $(this).data('path');
                        var ename = $(this).find('span.cgobj-name').text();
                        //console.log(ename);
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
                $('.media_dir_detail_btn').click(function (e) {
                    $('.dir_folder_item').attr('data-selected','off');
                    showClickHandler(e);
                });

                var filelist = data.files;
                var thumblist = data.thumb;
                for(var i= 0; i< filelist.length; i++)
                {
                    var filename = filelist[i];
                    var thumbs = thumblist[i];
                    var fileid="";
                    if(filename.split('/').length > 1)
                    {
                        var s_filename = filename.split('/');
                        filename = s_filename[s_filename.length-1];
                    }

                    //fileid = filename.replace(/./g,"_");
                    //fileid = fileid.replace(/(\s*)/g, '');
                    fileid = filename.replace(/(\s*)/g, '');
                    var filename_split = fileid.split('.');
                    for(var s = 0; s < filename_split.length; s++){
                        if(s == 0)
                            fileid = filename_split[s];
                        else
                            fileid += '_' + filename_split[s];
                    }

                    var ftag = '<div class="d-flex flex-wrap flex-column p-20 cursor-pointer dir_file_item" data-path="'+p_path+'" data-selected="off" id="'+prefix+fileid+'">';
                    ftag += '<span class="file-icon">';

                    //if(isUrlFound(thumbs[0]))
                    ftag += '<img src="'+thumbs[0]+'" style="max-width:63px;max-height:54px;">';
                    //else
                    ///    ftag += '<i class="'+getMineType(filename)+'" style="font-size:48px;"></i>';
                    ftag += '</span>';
                    ftag += '<span class="cgobj-name" style="margin-top: 10px;">';
                    ftag += filename;
                    ftag += '</span>';
                    ftag += '</div>';

                    $('#dir_view').append(ftag);
                }

                /* $('#'+prefix+fileid).dblclick(function (e) {
                     e.preventDefault();
                     e.stopPropagation();
                     var path = $(this).data('path');
                     var ename = $(this).find('span.cgobj-name').text();
                     console.log(ename);
                 });*/

                $('.spinner-border.text-info').addClass('nonactive');

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function renameFolder(p_path, newname) {
        $('.spinner-border.text-info').removeClass('nonactive');
        var ret=false;
        if(dirinfo.name ==='')
        {
            dirinfo.id='';
            dirinfo.path='';
            return;
        }

        $.ajax({
            url: 'admin.renameHostDirectory',
            data:{
                orgname:dirinfo.name,
                newname:newname,
                path:p_path
            },
            type: 'POST',
            async: true,
            success: function (data) {
                if(data.msg=='ok')
                {
                    var newid=dirinfo.id;
                    $('#'+newid).find('span.cgobj-name').text(newname);
                    if(newid.split('_').length > 1)
                        newid = newid.split('_')[0]+'_'+newname;
                    $('#'+dirinfo.id).find('div.media_dir_detail_btn').attr('data-info',newid);
                    $('#'+dirinfo.id).attr('id',newid);
                    InitDirObj();
                    ret=true;
                    $('.spinner-border.text-info').addClass('nonactive');
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                $('.spinner-border.text-info').addClass('nonactive');
                console.log(errdata);
            }
        });

        return ret;
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
                    if(p_path.split('/').length > 0){
                        var s=p_path.split('/');
                        var len = s.length;
                        for(var j=1;j<len;j++)
                            prefix +='f';
                    }
                    else
                        prefix ='f';

                    prefix +='_';
                    var folderid = foldername.replace(/(\s*)/g, '');

                    var tag = '<div class="d-flex flex-wrap cursor-pointer dir_folder_item media_dir_boder" data-path="'+p_path+'" data-selected="off" id="'+prefix+folderid+'" >';

                    tag += '<div class="col-12 media_dir_detail"><div class="media_dir_detail_btn" data-info="'+prefix+folderid+'">···</div></div>';
                    tag += '<div class="col-12 media_dir_icon"><i class="'+mineType["folder"]+'" style="font-size:40px;color:#f0c243e3"></i></div>';
                    tag += '<div class="col-12 media_dir_name"><span class="cgobj-name">'+foldername+'</span></div>';

                    tag += '</div>';

                    $('#dir_view').append(tag);

                    $('#'+prefix+folderid).dblclick(function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        var id = $(this).attr('id');
                        var path = $(this).data('path');
                        var ename = $(this).find('span.cgobj-name').text();
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
            myjs.data.showAlert("pgtxt_filenamenocorrect");
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
        if(objinfo !== undefined && objinfo !==null && objinfo.id !=='' && objinfo.name !=='' && curpath !==''){
            srccmd='copy';
            srcpath=curpath + objinfo.name;
        }
        else{
            myjs.data.showAlert("pgtxt_selectfileorfoldercopy");
        }
    }
    function cutObj(objinfo) {
        if(objinfo !== undefined && objinfo !==null && objinfo.id !=="" && objinfo.name !=="" && curpath !==""){
            srccmd='cut';
            srcpath=curpath + objinfo.name;
        }
        else
        {
            myjs.data.showAlert("pgtxt_selectfileorfoldercut");
        }
    }
    function pasteObj(objinfo) {
        if(objinfo !== undefined && objinfo !==null && curpath !=="")
        {
            descmd='past';
            if(objinfo.id !=="" && objinfo.name !=="")
                despath=curpath + objinfo.name;
            else
                despath=curpath;

            if(srccmd=="" || srcpath=="")
                myjs.data.showAlert("pgtxt_selectfileorfolderpaste");
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
            myjs.data.showAlert("pgtxt_selectfileorfolderpaste");
        }
    }

    function deleteObj(objinfo) {

        if(objinfo !== undefined && objinfo !==null && objinfo.id !=="" && objinfo.name !=="" && curpath !==""){
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
    function isshowButtonArea(e){
        if($(e.target).is($('div.media_dir_detail_btn')))
            return  true;
        return false;
    }
    function  isIntoFocus(x, y) {
        var result= {
            name:'',
            id:0,
            path:'',
            type:''
        };

        $('#dir_view').children().each( (index, element) => {
            var pos = $(element).offset();
            var oleft=pos.left - 10;
            var otop=pos.top - 10;
            var oright = pos.left + $(element).width() + 10;
            var obotton = pos.top + $(element).height() + 10;
            if(x >= oleft && y >= otop && x <= oright && y <=obotton){
                var name = $(element).find('span.cgobj-name').text();
                result.id=$(element).attr('id');
                result.path=$(element).data('path');
                result.name=name;
                if($(element).hasClass('dir_folder_item'))
                    result.type='dir';
                else
                    result.type='file';
            }
        });

        return result;
    }

    export default {
        name: "WebsWesGlobalMediaAudio",
        components: {
            // 'font-awesome-icon': FontAwesomeIcon
        },
        data(){
            return {
                pageid:'webs-wesglobal-media-audio-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_media:'',
                musususu_webs_wesglobal_media_audio:'',
                pgtxt_upload:'',
                pgtxt_createfolder:'',
                pgtxt_download:'',
                pgtxt_rename:'',
                pgtxt_delete:'',
                pgtxt_media:'',
                pgtxt_search:'',
                pgtxt_copy:'',
                pgtxt_paste:'',
                pgtxt_cut:'',
                btntxt_add:'',
                btntxt_addfolder:'',
                pgtxt_name:'',
                pgtxt_viewdetails:'',
                btntxt_change:'',
                btntxt_ok:'',
                btntxt_cancel:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                pgtxt_list:'',
                pgtxt_selectfileorfolderpaste:'',
                pgtxt_selectfileorfoldercopy:'',
                pgtxt_selectfileorfoldercut:'',
                pgtxt_filenamenocorrect:'',
                pgtxt_alreadyexistname:'',
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
            cmusususu_webs_wesglobal_media_audio:function () {
                return this.musususu_webs_wesglobal_media_audio
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
            cpgtxt_download:function () {
                return this.pgtxt_download
            },
            cpgtxt_rename:function () {
                return this.pgtxt_rename
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
            cbtntxt_change:function () {
                return this.btntxt_change;
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cbtntxt_addfolder:function () {
                return this.btntxt_addfolder
            },
            cpgtxt_name:function () {
                return this.pgtxt_name
            },
            cpgtxt_list:function () {
                return this.pgtxt_list
            },
            cpgtxt_viewdetails:function () {
                return this.pgtxt_viewdetails
            },
            cpgtxt_selectfileorfolderpaste:function () {
                return this.pgtxt_selectfileorfolderpaste
            },
            cpgtxt_selectfileorfoldercopy:function () {
                return this.pgtxt_selectfileorfoldercopy
            },
            cpgtxt_selectfileorfoldercut:function () {
                return this.pgtxt_selectfileorfoldercut
            },
            cpgtxt_filenamenocorrect:function () {
                return this.pgtxt_filenamenocorrect
            },
            cpgtxt_alreadyexistname:function () {
                return this.pgtxt_alreadyexistname
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

            mineType = media_module.data.getMediaType();
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
                    if ($(e.target).is($('div.media_dir_detail_btn')))
                        return  true;
                    else if($(e.target).is($('#upfile')))
                        return true;

                    $('div#WWGMContextMenu').hide();
                    return false;
                });

                $('div#WWGMContextMenu a.list-group-item').click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    $('div#WWGMContextMenu').hide();

                    var aid = $(e.target).attr('id');
                    if(aid==='list-download-list'){
                        if(permss.pread!==1){
                            myjs.data.showAlert('pgtxt_notpermission');
                            return;
                        }
                    }
                    else if(aid==='list-rename-list'){
                        if(permss.pwrite!==1){
                            myjs.data.showAlert('pgtxt_notpermission');
                            return;
                        }
                        createtype='rename';
                        $('input#objModalName').val(name);
                        $('#objname-model-add-cont').css('display','none');
                        $('#objname-model-change-cont').css('display','block');
                        $('#objNameModal').modal('show');
                        $('input#objModalName').focus();
                    }
                    else if(aid==='list-delete-list'){
                        if(permss.pdelete!==1){
                            myjs.data.showAlert('pgtxt_notpermission');
                            return;
                        }
                        myjs.data.Confirm('pgtxt_wantdeleteitem',function (val) {
                            if(val){
                                deleteObj(dirinfo);
                            }
                        });
                    }
                    else if(aid==='list-copy-list'){
                        if(permss.pwrite!==1){
                            myjs.data.showAlert('pgtxt_notpermission');
                            return;
                        }
                        copyObj(dirinfo);
                    }
                    else if(aid==='list-cut-list'){
                        if(permss.pdelete!==1){
                            myjs.data.showAlert('pgtxt_notpermission');
                            return;
                        }
                        cutObj(dirinfo);
                    }
                    else if(aid==='list-paste-list'){
                        if(permss.pwrite!==1){
                            myjs.data.showAlert('pgtxt_notpermission');
                            return;
                        }
                        pasteObj(dirinfo);
                    }
                    else if(aid==='list-createfile-list')
                    {
                        if(permss.pcreate!==1){
                            myjs.data.showAlert('pgtxt_notpermission');
                            return;
                        }
                        createtype='file';
                        $('input#objModalName').val('');
                        $('#objNameModal').modal('show');
                        $('input#objModalName').focus();
                    }
                    else if(aid==='list-createfolder-list')
                    {
                        if(permss.pcreate!==1){
                            myjs.data.showAlert('pgtxt_notpermission');
                            return;
                        }
                        createtype='dir';
                        $('input#objModalName').val('');
                        $('#objNameModal').modal('show');
                        $('input#objModalName').focus();
                    }


                });

                $('#objNameModal').on('hidden.bs.modal', function (e) {
                    //myjs.data.showAlert('modal hide');
                    createtype='';
                    $('#objname-model-add-cont').css('display','block');
                    $('#objname-model-change-cont').css('display','none');
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
                                myjs.data.showAlert(data.msg);
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
                        else if(createtype=='rename'){
                            rt = renameFolder(curpath, objname);
                        }

                        $('input#objModalName').val('');
                        $('#objNameModal').modal('hide');
                    }
                    else{
                        myjs.data.showAlert('pgtxt_alreadyexistname');
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
                    var ename = $(element).find('span.cgobj-name').text();
                    //console.log(ename);
                    if(pname === ename){
                        rname.msg='same';
                    }
                });

                return rname;
            },
            fileUpload(e){
                if(permss.pcreate!==1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                $('#upfile').trigger('click');
            },
            fdirSearch(){
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
                                tag += '<span class="media_dir_icon">';
                                tag += '<i class="'+mineType["folder"]+'" style="font-size:48px;color:#f0c243e3"></i>';
                                tag += '</span>';
                                tag += '<span class="cgobj-name">';
                                tag += dirname;
                                tag += '</span>';
                                tag += '</div>';

                                $('#dir_view').append(tag);

                                $('#'+prefix+dirnameid).dblclick(function (e) {
                                    e.preventDefault();
                                    var path = $(this).data('path');
                                    var ename = $(this).find('span.cgobj-name').text();
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
            RightClickHandler(e){
                e.preventDefault();
                e.stopPropagation();
                var x = e.pageX;
                var y = e.pageY;

                if(isshowButtonArea(e)===true)
                    return;

                InitDirObj();
                var ret = isIntoFocus(x,y);
                dirinfo.id=ret.id;
                dirinfo.name=ret.name;
                dirinfo.path=ret.path;
                dirinfo.type=ret.type;
                dirinfo.poptype='right';
                if(ret.id !== '' && ret.name !== '') {
                    $('div#WWGMContextMenu a').removeClass('active').addClass('s-none');
                    $('div#WWGMContextMenu a#list-copy-list').addClass('t-redius');
                    $('div#WWGMContextMenu a#list-paste-list').removeClass('b-redius');
                    $('div#WWGMContextMenu a#list-delete-list, div#WWGMContextMenu a#list-copy-list, div#WWGMContextMenu a#list-paste-list, div#WWGMContextMenu a#list-cut-list').removeClass('s-none');
                    $('div#WWGMContextMenu').css({top: y + 'px', left: x + 'px', position: 'absolute'});
                    $('div#WWGMContextMenu').show();
                }
                else{
                    $('div#WWGMContextMenu a').removeClass('active').addClass('s-none');
                    $('div#WWGMContextMenu a#list-createfolder-list').addClass('t-redius');
                    $('div#WWGMContextMenu a#list-paste-list').addClass('b-redius');
                    $('div#WWGMContextMenu a#list-createfolder-list, div#WWGMContextMenu a#list-paste-list').removeClass('s-none');
                    $('div#WWGMContextMenu').css({top: y + 'px', left: x + 'px', position: 'absolute'});
                    $('div#WWGMContextMenu').show();
                }

            },
            createFolderByBtn(){
                if(permss.pcreate!==1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                createtype='dir';
                $('input#objModalName').val('');
                $('#objNameModal').modal('show');
                $('input#objModalName').focus();
            }


        }//method


    }
</script>
