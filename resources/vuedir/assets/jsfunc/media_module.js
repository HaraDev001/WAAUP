import axios from "axios";
import myjs from "./mjs_module";

    var vueNavOBJ=null;
    var curpath='/';
    var img_id = "";
    var file_pre_id = "";
    var is_upload = false;
    var id = "";
    var ajax_url = "";
    var trans = "";
    var dbname = "";
    var table = "";
    var field = "";
    var fval = "";
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

    function SearchMediaDirectory() {
        $('.Media_directory_files').html('');
        var cont = $('#Media_Modal_Search_Text').val();
        cont = $.trim(cont);
        if(cont==="")return;

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
                    var dirlist = data.dirs;
                    for(var i= 0; i< dirlist.length; i++)
                    {
                        var dirnameArr = dirlist[i];
                        var dpath = dirnameArr.split("&&")[0];
                        var dirname = dirnameArr.split("&&")[1];
                        var dirnameid = "";
                        if(dirnameArr == "[..]") {
                            dirnameid = "nonDirectory";
                            dirname = dirnameArr;
                        }
                        else {
                            dirnameid = dirname.replace(/(\s*)/g, '')
                        }
                        if (dpath.indexOf('/') > -1) {
                            var s = dpath.split('/');
                            var len = s.length;
                            for (var j = 1; j < len; j++)
                                prefix += 'f';
                        } else
                            prefix = 'f';

                        prefix += '_';

                        var tag = '<div id="sele_media_directory" style="font-size: 15px;">';
                        tag += '<div class="d-flex flex-row p-l-20 p-t-5 cursor-pointer dir_folder_item_modal" data-path="'+dpath+'/" data-selected="off" id="'+prefix+dirnameid+'">';
                        tag += '<span class="p-l-10 folder-icon">';
                        tag += '<i class="'+mineType["folder"]+'" style="font-size:20px;color:#f0c243e3"></i>';
                        tag += '</span>';
                        tag += '<span class="cgobj-name">';
                        tag += dirname;
                        tag += '</span>';
                        tag += '</div>';
                        tag += '</div>';

                        $('.Media_directory_files').append(tag);

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
                        var ftag = '<div id="sele_media_file">';
                        ftag += '<div class="d-flex flex-row p-l-20 p-t-5 cursor-pointer dir_file_item_modal" data-path="'+dpath+'/" data-selected="off" id="'+prefix+fileid+'" style="font-size: 15px;">';
                        ftag += '<span class="p-l-10 file-icon">';

                        //if(isUrlFound(thumbs[0]))
                        ftag += '<img src="'+thumbs[0]+'" style="width: 20px;">';
                        //else
                        //    ftag += '<i class="'+getMineType(filename)+'" style="font-size:48px;"></i>';
                        ftag += '</span>';
                        ftag += '<span class="cgobj-name">';
                        ftag += filename;
                        ftag += '</span>';
                        ftag += '</div>';
                        ftag += '</div>';

                        $('.Media_directory_files').append(ftag);
                    }
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    const setImageTagID = function (img, file_pre, is_up = false, ajax = '', fid = '', tran = '', db = '',  tb = '',  fd = '', v = '') {
        img_id = img;
        file_pre_id = file_pre;
        is_upload = is_up;
        id = fid;
        ajax_url = ajax;
        trans = tran;
        dbname = db;
        table = tb;
        field = fd;
        fval = v;
    }

    const getDirectories = function(p_path)
    {
        $.ajax({
            url: 'admin.getHostDirectories',
            data:{
                path:p_path,
                param:1
            },
            type: 'POST',
            async: true,
            success: function (data) {
                $('.Media_directory_files').html('');
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
                    var tag = '<div id="sele_media_directory" style="font-size: 15px;">';
                    tag += '<div class="d-flex flex-row p-l-20 p-t-5 cursor-pointer dir_folder_item_modal" data-path="'+p_path+'" data-selected="off" id="'+prefix+dirnameid+'">';
                    tag += '<span class="p-l-10 folder-icon">';
                    tag += '<i class="'+mineType["folder"]+'" style="font-size:20px; color:#f0c243e3"></i>';
                    tag += '</span>';
                    tag += '<span class="cgobj-name" style="margin-left: 10px">';
                    tag += dirname;
                    tag += '</span>';
                    tag += '</div>';
                    tag += '</div>';

                    $('.Media_directory_files').append(tag);

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
                    $('div[id^="sele_media_directory"]').on('mouseover', function () {
                        $(this).css("background", "#f5f5f5");
                    });

                    $('div[id^="sele_media_directory"]').on('mouseleave', function () {
                        $(this).css("background", "#ffffff");
                    });
                }

                var filelist = data.files;
                var thumblist = data.thumb;
                var urllist = data.fileUrl;
                for(var i= 0; i< filelist.length; i++)
                {
                    var filename = filelist[i];
                    var thumbs = thumblist[i];
                    var url = urllist[i];
                    var fileid="";
                    if(filename.indexOf('/') > 0)
                    {
                        var s_filename = filename.split('/');
                        filename = s_filename[s_filename.length-1];
                    }

                    fileid = filename.replace(/./g,"_");
                    fileid = fileid.replace(/(\s*)/g, '')
                    var ftag = '<div id="sele_media_file">';
                    ftag = '<div class="d-flex flex-row p-l-20 p-t-5 cursor-pointer dir_file_item_modal" data-path="'+p_path+'" dara-url="'+ url +'" data-selected="off" id="'+prefix+fileid+'" style="font-size: 15px;">';
                    ftag += '<span class="p-l-10 file-icon">';
                    //ftag += '<i class="'+getMineType(filename)+'" style="font-size:20px;"></i>';
                    ftag += '<img src="'+thumbs[0]+'" style="width: 20px;">';
                    ftag += '</span>';
                    ftag += '<span class="cgobj-name" style="margin-left: 10px">';
                    ftag += filename;
                    ftag += '</span>';
                    ftag += '</div>';
                    ftag += '</div>';

                    $('.Media_directory_files').append(ftag);

                    $('#'+prefix+fileid).dblclick(function (e) {
                        e.preventDefault();
                        var imgUrl = $(this).attr('dara-url');
                        //var ename = $(this).children('span.cgobj-name').text(); console.log(path+ename);
                        $('#'+img_id).attr('src', imgUrl);
                        $('#'+file_pre_id).val(imgUrl);
                        $('#MediaDirectoryModal').modal('hide');
                        var value = imgUrl + "||" + fval;
                        if(is_upload){
                            $.ajax({
                                url: ajax_url,
                                type: 'POST',
                                data:{
                                    id:id,
                                    trans:trans,
                                    dbname:dbname,
                                    table:table,
                                    field:field,
                                    fval:value,
                                },
                                success: function (data) {
                                    if(data.msg=="ok"){

                                    }
                                    else
                                        alert(data.msg);

                                },
                                error: function (jqXHR, errdata, errorThrown) {
                                    console.log(errdata);
                                },
                            });
                        }
                    });
                    $('div[id^="sele_media_file"]').on('mouseover', function () {
                        $(this).css("background", "#f5f5f5");
                    });

                    $('div[id^="sele_media_file"]').on('mouseleave', function () {
                        $(this).css("background", "#ffffff");
                    });
                }

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    const MediaSelectImageModal = function(vueOBJ){
        $('#MediaDirectoryModal').remove();
        vueNavOBJ = vueOBJ;
        var pgtxt_media= myjs.data.getByAjaxtext(vueNavOBJ.$store.state.sitecontents, 'pgtxt_media');
        var btntxt_search= myjs.data.getByAjaxtext(vueNavOBJ.$store.state.sitecontents, 'btntxt_search');

        let htag='';
        htag+='<div class="modal fade" id="MediaDirectoryModal">';
        htag+='<div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">';
        htag+='<div class="modal-content" style="height:420px;" >';
        htag+='<div class="modal-header" style="background: whitesmoke;">';
        htag+='<h4 class="modal-title">' + pgtxt_media + '</h4>';
        htag+='</div>';
        htag+='<div class="d-flex panel" style="margin: 20px 0px 0px 20px;">';
        htag+='<div>';
        htag+='<input type="text" class="form-control" style="background-color: #fff;border: 1px solid #ced4da; width: 350px; border-radius: 6px;" id="Media_Modal_Search_Text">';
        htag+='</div>';
        htag+='<div>';
        htag+='<div id="Media_Modal_Search_Btn" class="btn btn-outline-light  dash-my-btn-0 active" style="border-radius: 6px;">';
        htag+='<span>' + btntxt_search + '</span>';
        htag+='</div>';
        htag+='</div>';
        htag+='</div>';
        htag+='<div class="panel" style="margin: 20px;">';
        htag+='<div style="max-height: 250px; min-height: 250px; width: 100%; border: 1px solid #ced4da; overflow-y: auto;">';
        htag+='<div class="Media_directory_files">';

        htag+='</div>';
        htag+='</div>';
        htag+='</div>';
        htag+='</div>';
        htag+='</div>';
        htag+='</div>';

        $('body').append(htag);

        $('#Media_Modal_Search_Btn').click(function () {
            SearchMediaDirectory();
        });
    }

    const getMediaType=function () {
       return mineType;
    }

    export default {
        data:{
            setImageTagID,
            getDirectories,
            MediaSelectImageModal,
            getMediaType,
        }

    }

