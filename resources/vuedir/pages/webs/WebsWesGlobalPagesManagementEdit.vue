<template>
    <div style="width: 100%">
        <div style="display: none">{{contentchange}}</div>
        <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
            <div class="page_index_tab">
                <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="page_management_list">{{cbtntxt_edit}} {{cpgtxt_content}} {{cpgtxt_page}}</div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 page_slider_content_list active"  id="wwgp_pageedit">
                <form method="post" enctype="multipart/form-data" name="pagesetting_frm" id="pagesetting_frm">
                    <input type="hidden" id="userid" name="userid" value="">
                    <input type="hidden" id="wwpp_edit" name="wwpp_edit" value="0">
                    <input type="hidden" id="wwpp_pstart" name="wwpp_pstart" value="">
                    <input type="hidden" id="wwpp_pcnt" name="wwpp_pcnt" value="">
                    <input type="hidden" id="wwpp_type" name="wwpp_type" value="Basic">
                    <input type="hidden" id="wwpp_author" name="wwpp_author" value="">
                    <input type="hidden" id="wwpp_time" name="wwpp_time" value="">
                    <input type="hidden" id="wwpp_head" name="wwpp_head" value="">
                    <input type="hidden" id="wwpp_foot" name="wwpp_foot" value="">

                    <div class="page1_content_content_bar">
                        <div class="d-flex flex-wrap" style="margin-bottom: 20px; margin-top: 20px;">
                            <div class="d-flex col-sm-6">
                                <div class="col-md-3" style="margin-top: 8px;">{{cpgtxt_page}} {{cpgtxt_name}}</div>
                                <div class="col-md-8">
                                    <input type="text" class="form-control page2_input" id="wwpp_input_page_name" name="wwpp_input_page_name" readonly>
                                </div>
                            </div>
                            <div class="d-flex col-sm-6">
                                <div class="col-md-3" style="margin-top: 8px;">{{cpgtxt_title}}</div>
                                <div class="col-md-8">
                                    <input type="text" class="form-control border-input-text" id="wwpp_input_page_title" name="wwpp_input_page_title">
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap" style="margin-bottom: 20px; margin-top: 20px;">
                            <div class="d-flex col-sm-6">
                                <div class="col-md-3" style="margin-top: 8px;">{{cpgtxt_url}}</div>
                                <div class="col-md-8">
                                    <input type="text" class="form-control border-input-text" id="wwpp_input_page_url" name="wwpp_input_page_url">
                                </div>
                            </div>
                            <div class="d-flex col-sm-6">
                                <div class="col-md-3" style="margin-top: 8px;">{{cpgtxt_author}}</div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control border-input-text" id="wwpp_input_page_author" name="wwpp_input_page_author">
                                </div>
                                <div class="col-2" style="line-height: 35px;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="" id="author_invisible" name="author_invisible">
                                        <label class="form-check-label" for="author_invisible">
                                            {{cpgtxt_hide}}
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                            <div class="d-flex col-sm-6">
                                <div class="col-md-3" style="margin-top: 8px;">{{cpgtxt_time}}</div>
                                <div class="col-md-6">
                                    <input type="text"  name="pagesetting_datapicker" id="pagesetting_datapicker" class="form-control page2_input" placeholder="">
                                </div>
                                <div class="col-2" style="line-height: 35px;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" value="" id="time_invisible" name="time_invisible">
                                        <label class="form-check-label" for="time_invisible">
                                            {{cpgtxt_hide}}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex col-sm-6">
                                <div class="col-md-3" style="margin-top: 8px;">{{cpgtxt_layout}}</div>
                                <div class="col-md-8">
                                    <select class="form-control" id="wwgp_management_layout_list" name="wwgp_management_layout_list" >

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap" style="margin-bottom: 20px; margin-top: 20px;">
                            <div class="d-flex col-sm-6">
                                <div class="col-md-3" style="margin-top: 8px;">{{cpgtxt_head}}</div>
                                <div class="col-md-3" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="wwgp_management_head_radio" id="wwgp_management_head_no" value="no" checked>{{cpgtxt_no}}
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="wwgp_management_head_radio" id="wwgp_management_head_yes" value="yes">{{cpgtxt_yes}}
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <select class="form-control" id="wwgp_management_head_list" name="wwgp_management_head_list" >

                                    </select>
                                </div>
                            </div>
                            <div class="d-flex col-sm-6">
                                <div class="col-md-3" style="margin-top: 8px;">{{cpgtxt_foot}}</div>
                                <div class="col-md-3" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="wwgp_management_foot_radio" id="wwgp_management_foot_no" value="no" checked>{{cpgtxt_no}}
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="wwgp_management_foot_radio" id="wwgp_management_foot_yes" value="yes">{{cpgtxt_yes}}
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <select class="form-control" id="wwgp_management_foot_list" name="wwgp_management_foot_list" >

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page1_translate_bar">
                                <div class="page1_translate_text">{{cpgtxt_translation}}</div>
                                <div class="page1_translate_bar_left" id="translanglist">

                                </div>
                                <div class="page1_translate_bar_right" style="display: flex;">
                                    <div class="page1_translate_div adddisablelang" @click="Adddisablelang" style="cursor: pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-inline="false" data-icon="gg:add" class="iconify" style="font-size: 20px; transform: rotate(360deg);"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7z" fill="currentColor"></path></g></svg>
                                        <span class="page1_translate_span_right">{{cbtntxt_add}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                    </div>
                                    <div class="page1_translate_div" @click="PagePreview" style="cursor: pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 20px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-preview"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
                                        <span class="page1_translate_span_right">{{cpgtxt_preview}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="margin: 1rem 0">
                        <textarea name="editcont0" id="editcont0" value="" style="display: none"></textarea>
                        <editor0
                            class="page_editor"
                            api-key="vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh"
                            cloud-channel="5-dev"
                            @onClick="editorclick0"
                            @onBlur="editorblue0"
                            :init="{
                                 id:'02',

                                plugins: [
                                 'lists link image code table paste help wordcount '
                                ],
                                toolbar: 'undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ',
                               images_upload_handler:upload_handler0,
                               init_instance_callback : edit_init_callback0
                              }"
                            v-model="TinyMCMcontent0"/>
                    </div>
                    <div class="row justify-content-end" style="padding-bottom: 1.5rem;">
                        <div class="col-md-4 col-sm-4 text-right">
                            <button type="button" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="wwpc_saveContentpage">{{ cbtntxt_savechange }}</button>
                        </div>
                        <div class="col-md-2 col-sm-2">
                            <button type="button" class="btn page1_custom_btn" @click.stop="wwpc_gotoContentList">
                                {{cbtntxt_cancel}}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal fade" id="wwpc_AddTranslationModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content page-type-first-content" style="display:block;">
                    <div class="modal-header">
                        <div class="modal-title paytype-add-letter" style="font-size: 20px; font-weight: 600;display: block">{{cbtntxt_add}} {{cpgtxt_translation}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" style="padding: 5px 10px !important">
                        <div class="container">
                            <div class="row m-10" style="line-height:30px" id="wwpc_disable_lang_add_body">

                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center" style="height: auto">
                        <button type="button" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click="wwpc_addTrans_btn_event">
                            + {{cbtntxt_add}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .page1_content_content_bottom svg{
        color: #6b85e2;
    }
    .page1_content_content_title{
        border: 0;
    }
    .form-control.page2_input:focus,.form-control.page2_input:hover{
        background-color:#d6d6d6;
    }
    .table thead th{
        text-transform:none;
        font-size: 14px;
    }
    .table thead th.th-lp-20, .table tbody td.th-lp-20{
        padding-left: 20px;
    }
    .table thead th.th-rp-20, .table tbody td.th-rp-20{
        padding-right: 20px;
    }
    .tox.tox-tinymce{
        border-radius: 20px;
        width: 100% !important;
        height: 350px;
        min-height: 350px !important;
    }
    .span_langitem_controller{
        color: #1b78c7;
        font-size: 15px;
        cursor: pointer;
        padding: 5px 5px 5px 0;
    }
    .page1_translate_span {
        padding-left: 20px;
    }
</style>

<script>

    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import Editor from '@tinymce/tinymce-vue';
    import axios from "axios";

    let vueOBJ=null;
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var edit_id = 0;
    var checked_del_items = new Array();
    var permss;
    var head_list = new Array();
    var foot_list = new Array();
    var layout_list = new Array();
    var transedlang='en-1';
    var stored_langs;
    var pageOBJS = [];
    var sel_lang = 'en-1';


    function selectPagesPage() {
        sel_lang = myjs.data.getEditLang();
        transedlang = sel_lang;
        $.ajax({
            url: 'admin.wwppSelectContent',
            data: {
                userid:userid,
                pagename:myjs.data.getEditPageName()
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    pageOBJS = new Array();
                    $('.page1_translate_span').removeClass('active');
                    $('span#'+sel_lang+' > span.page1_translate_span').addClass('active');

                    var row = data.row;
                    for(var i = 0; i < row.length; i++){
                        var item = row[i];
                        var d = new Date();
                        var yy = d.getFullYear();
                        var mm = d.getMonth()+1;
                        var dd = d.getDate();
                        if (item.created_at.split('-').length > 2) {
                            yy = item.created_at.split('-')[0];
                            mm = item.created_at.split('-')[1];
                            dd = item.created_at.split('-')[2];
                            dd = dd.substr(0, 2);
                        } else if (item.created_at.split('/').length > 2) {
                            yy = item.created_at.split('/')[0];
                            mm = item.created_at.split('/')[1];
                            dd = item.created_at.split('/')[2];
                            dd = dd.substr(0, 2);
                        }
                        var time = yy+'/'+mm+'/'+dd;

                        var obj = {
                            langname: item.language,
                            trans: item.trans,
                            pagename: item.page_name,
                            title: item.title,
                            url: item.url,
                            author: item.author,
                            is_author: item.is_author,
                            time: time,
                            is_time: item.is_time,
                            layout: item.layout,
                            head: item.head,
                            is_head: item.is_head,
                            foot: item.foot,
                            is_foot: item.is_foot,
                            content: item.content,
                            active: item.active,
                            langstate: item.langstate
                        };
                        pageOBJS.push(obj);

                        if(sel_lang == item.trans){
                            $('#wwpp_input_page_name').val(item.page_name);
                            $('#wwpp_input_page_title').val(item.title);
                            $('#wwpp_input_page_url').val(item.url);
                            $('#wwpp_input_page_author').val(item.author);
                            if(item.is_author == 1)
                                $('#author_invisible').prop("checked", false);
                            else
                                $('#author_invisible').prop("checked", true);
                            $('#pagesetting_datapicker').val(time);
                            if(item.is_time == 1)
                                $('#time_invisible').prop("checked", false);
                            else
                                $('#time_invisible').prop("checked", true);
                            $('#wwgp_management_layout_list').val(item.layout);
                            $('#wwgp_management_head_list').val(item.layout);
                            if(row.is_head == 1)
                            {
                                $('#wwgp_management_head_yes').prop("checked", true);
                                $('#wwgp_management_head_no').prop("checked", false);
                            }
                            else
                            {
                                $('#wwgp_management_head_yes').prop("checked", false);
                                $('#wwgp_management_head_no').prop("checked", true);
                            }
                            $('#wwgp_management_foot_list').val(item.layout);
                            if(row.is_head == 1)
                            {
                                $('#wwgp_management_foot_yes').prop("checked", true);
                                $('#wwgp_management_foot_no').prop("checked", false);
                            }
                            else
                            {
                                $('#wwgp_management_foot_yes').prop("checked", false);
                                $('#wwgp_management_foot_no').prop("checked", true);
                            }
                            var edt0 = htmldecodejs(item.content);
                            vueOBJ.TinyMCMcontent0 = edt0;
                        }
                    }
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function showHeadList(){
        $('#wwgp_management_head_list').html('');
        var tags = '';
        tags += '<option value="0">--</option>';
        for(var i = 0; i < head_list.length; i++){
            var id = head_list[i].id;
            var name = head_list[i].name;
            tags += '<option value="'+id+'">'+name+'</option>';
        }

        $('#wwgp_management_head_list').html(tags);
    }
    function showFootList(){
        $('#wwgp_management_foot_list').html('');
        var tags = '';
        tags += '<option value="0">--</option>';
        for(var i = 0; i < foot_list.length; i++){
            var id = foot_list[i].id;
            var name = foot_list[i].name;
            tags += '<option value="'+id+'">'+name+'</option>';
        }

        $('#wwgp_management_foot_list').html(tags);
    }
    function showLayoutList(){
        $('#wwgp_management_layout_list').html('');
        var tags = '';
        tags += '<option value="0">--</option>';
        for(var i = 0; i < layout_list.length; i++){
            var id = layout_list[i].id;
            var name = layout_list[i].name;
            tags += '<option value="'+id+'">'+name+'</option>';
        }

        $('#wwgp_management_layout_list').html(tags);
    }
    function getLayoutAndHeadFoot(){
        $.ajax({
            url: 'admin.wwppGetLayoutAndHeadFoot',
            data: {
                userid:userid
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    head_list = data.head;
                    layout_list = data.layout;
                    showHeadList();
                    showFootList();
                    showLayoutList();
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function createPageContent(){
        var name = createRandompageName();
        $('#wwpp_input_page_name').val(name);
        var url = '/' + name;
        $('#wwpp_input_page_url').val(url);
        var d = new Date();
        var yy = d.getFullYear();
        var mm = d.getMonth()+1;
        var dd = d.getDate();
        var time = yy+'/'+mm+'/'+dd;
        $('#pagesetting_datapicker').val(time);
    }
    function pageEventFunc(){
        $('#pagesetting_datapicker').datepicker({dateFormat: 'yy/mm/dd'});

        $('#wwpp_input_page_title').on("keyup", function () {
            var val = $("#wwpp_input_page_title").val();
            setContentVal(val, 3);
        });

        $('#wwpp_input_page_url').on("keyup", function () {
            var val = $("#wwpp_input_page_url").val();
            for(var i = 0; i < pageOBJS.length; i++) {
                pageOBJS[i].url = val;
            }
        });

        $('#wwpp_input_page_author').on("keyup", function () {
            var val = $("#wwpp_input_page_author").val();
            setContentVal(val, 5);
        });

        $('input[id="author_invisible"]').click(function() {
            if ($(this).is(':checked'))
                setContentVal(0, 6);
            else
                setContentVal(1, 6);
        });

        $('input[id="time_invisible"]').click(function() {
            if ($(this).is(':checked'))
                setContentVal(0, 8);
            else
                setContentVal(1, 8);
        });
        $('#wwgp_management_layout_list').change(function(){
            var val = parseInt($(this).val());
            setContentVal(val, 9);
        });

        $('#wwgp_management_head_list').change(function(){
            var val = parseInt($(this).val());
            setContentVal(val, 10);
        });

        $('input[id="wwgp_management_head_no"]').click(function() {
            if ($(this).is(':checked'))
                setContentVal(0, 11);
        });
        $('input[id="wwgp_management_head_yes"]').click(function() {
            if ($(this).is(':checked'))
                setContentVal(1, 11);
        });

        $('#wwgp_management_foot_list').change(function(){
            var val = parseInt($(this).val());
            setContentVal(val, 12);
        });
        $('input[id="wwgp_management_foot_no"]').click(function() {
            if ($(this).is(':checked'))
                setContentVal(0, 13);
        });
        $('input[id="wwgp_management_foot_yes"]').click(function() {
            if ($(this).is(':checked'))
                setContentVal(1, 13);
        });
    }
    function setContentVal(val, index){
        for (var j = 0; j < pageOBJS.length; j++)
        {
            if(pageOBJS[j].trans == transedlang){
                switch (index){
                    case 2:
                        pageOBJS[j].pagename = val;
                        break;
                    case 3:
                        pageOBJS[j].title = val;
                        break;
                    case 4:
                        pageOBJS[j].url = val;
                        break;
                    case 5:
                        pageOBJS[j].author = val;
                        break;
                    case 6:
                        pageOBJS[j].is_author = val;
                        break;
                    case 7:
                        pageOBJS[j].time = val;
                        break;
                    case 8:
                        pageOBJS[j].is_time = val;
                        break;
                    case 9:
                        pageOBJS[j].layout = val;
                        break;
                    case 10:
                        pageOBJS[j].head = val;
                        break;
                    case 11:
                        pageOBJS[j].is_head = val;
                        break;
                    case 12:
                        pageOBJS[j].foot = val;
                        break;
                    case 13:
                        pageOBJS[j].is_foot = val;
                        break;
                    case 14:
                        pageOBJS[j].active = val;
                        break;
                }
            }
        }
    }
    function createRandompageName(){
        var d=new Date();
        //var ymd=mjs_module.data.convertNumToStr(d.getFullYear())+mjs_module.data.convertNumToStr((d.getMonth()+1))+mjs_module.data.convertNumToStr((d.getDate()));
        var month = d.getMonth()+1;
        if(month < 10)
            month = '0' + month;
        var day = d.getDate();
        if(day < 10)
            day = '0' + day;
        var ymd=d.getFullYear()+''+month+''+day;
        var hours = d.getHours();
        if(hours < 10)
            hours = '0' + hours;
        var min = d.getMinutes();
        if(min < 10)
            min = '0' + min;
        var sec = d.getSeconds();
        if(sec < 10)
            sec = '0' + sec;
        var hms = '-'+hours+''+min+''+sec;
        var rpagename='WaaupBasicNode-' + ymd + hms;
        return rpagename;
    }
    function setContentPage(){
        var pgtxt_disabled = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_disabled');
        pageOBJS = new Array();
        var tags='';
        for (var j = 0; j < stored_langs.length; j++)
        {
            var obj = stored_langs[j];
            var iso = obj.iso;
            var dialCode = obj.dialcode;
            var cname = obj.name;
            var status = obj.status;
            var spanid = iso+'-'+dialCode;
            var dcont = iso+'-'+dialCode+'-'+cname;
            var name = $('#wwpp_input_page_name').val();
            var url = $('#wwpp_input_page_url').val();
            var time = $('#pagesetting_datapicker').val();

            var obj = {
                langname: cname,
                trans: spanid,
                pagename: name,
                title: '',
                url: url,
                author: '',
                is_author: 1,
                time: time,
                is_time: 1,
                layout: 0,
                head: 0,
                is_head: 0,
                foot: 0,
                is_foot: 0,
                content: '',
                active: 1,
                langstate:status
            };
            pageOBJS.push(obj);
            if(status==='enable') {
                tags += '<span id="' + spanid + '">';
                tags += '<span class="page1_translate_span" style="cursor: pointer; display: inline-block" data-cont="' + dcont + '">' + cname + '</span>&nbsp;&nbsp;|&nbsp;&nbsp;';
                tags += '<span class="span_langitem_controller" data-cont="' + dcont + '"> × </span>';
                tags += '</span>';
            }
            else {
                tags += '<span id="' + spanid + '">';
                tags += '<span class="page1_translate_span" style="cursor: pointer; display: inline-block" data-cont="' + dcont + '">' + cname;
                tags += '   <span class="data-ajax" data-ajax="pgtxt_disabled">(' + pgtxt_disabled + ')</span>';
                tags +=  '</span>'
                tags += '&nbsp;&nbsp;|&nbsp;&nbsp;<span class="span_langitem_controller" data-cont="' + dcont + '"> × </span>';
                tags += '</span>';
            }
        }
        $('#translanglist').html(tags);

        vueOBJ.initpage();
        selectLanguage();
    }
    function selectLanguage(){
        $('.page1_translate_span').click(function () {
            $('.page1_translate_span').removeClass('active');
            $(this).addClass('active');
            var cont = $(this).attr('data-cont');
            var len= cont.split('-').length;
            if(len > 0){
                var sky = cont.split('-')[0]+'-'+cont.split('-')[1];
                transedlang = sky;
                for(var i = 0; i < pageOBJS.length; i++) {
                    if (pageOBJS[i].trans == sel_lang) {
                        pageOBJS[i].time = $('#pagesetting_datapicker').val();
                        pageOBJS[i].content = vueOBJ.TinyMCMcontent0;
                        break;
                    }
                }
                for(var i = 0; i < pageOBJS.length; i++){
                    if(pageOBJS[i].trans == transedlang){
                        $('#wwpp_input_page_title').val(pageOBJS[i].title);
                        $('#wwpp_input_page_url').val(pageOBJS[i].url);
                        $('#wwpp_input_page_author').val(pageOBJS[i].author);
                        if (pageOBJS[i].is_author == 0) $('#author_invisible').attr('checked', true);else $('#author_invisible').attr('checked', false);
                        $('#pagesetting_datapicker').val(pageOBJS[i].time);
                        if (pageOBJS[i].is_time == 0) $('#time_invisible').attr('checked', true);else $('#time_invisible').attr('checked', false);
                        $('#wwgp_management_layout_list').val(pageOBJS[i].layout);
                        $('#wwgp_management_head_list').val(pageOBJS[i].head);
                        if (pageOBJS[i].is_head == 0) {
                            $('#wwgp_management_head_no').prop('checked', true);
                            $('#wwgp_management_head_yes').prop('checked', false);
                        }
                        else {
                            $('#wwgp_management_head_no').prop('checked', false);
                            $('#wwgp_management_head_yes').prop('checked', true);
                        }
                        $('#wwgp_management_foot_list').val(pageOBJS[i].foot);
                        if (pageOBJS[i].is_foot == 0) {
                            $('#wwgp_management_foot_no').prop('checked', true);
                            $('#wwgp_management_foot_yes').prop('checked', false);
                        }
                        else {
                            $('#wwgp_management_foot_no').prop('checked', false);
                            $('#wwgp_management_foot_yes').prop('checked', true);
                        }
                        if(pageOBJS[i].content!==undefined && pageOBJS[i].content!==null && pageOBJS[i].content!==''){
                            var edt0=htmldecodejs(pageOBJS[i].content);
                            $('#editcont0').val(edt0);
                            vueOBJ.TinyMCMcontent0 = edt0;
                        }
                        else {
                            $('#editcont0').val('');
                            vueOBJ.TinyMCMcontent0 = '';
                        }
                        break;
                    }
                }
                sel_lang = transedlang;
            }
        });
        $('.span_langitem_controller').click(function () {
            var dcont = $(this).attr('data-cont');
            if(dcont.split('-').length < 1)
                return;
            var iso=dcont.split('-')[0];
            var dialcode=dcont.split('-')[1];
            var cname=dcont.split('-')[2];
            var delid=iso+'-'+dialcode;
            $('#'+delid).remove();
            for(var i = 0; i < pageOBJS.length; i++){
                if(pageOBJS[i].trans == delid){
                    pageOBJS[i].title = '';
                    pageOBJS[i].author = '';
                    pageOBJS[i].is_author = 1;
                    pageOBJS[i].time = '';
                    pageOBJS[i].is_time = 1;
                    pageOBJS[i].layout = 0;
                    pageOBJS[i].head = 0;
                    pageOBJS[i].is_head = 0;
                    pageOBJS[i].foot = 0;
                    pageOBJS[i].is_foot = 0;
                    pageOBJS[i].content = '';
                    pageOBJS[i].active = 0;
                    break;
                }
            }
        });
    }


    export default {
        name: "WebsWesGlobalPagesManagement",
        components: {
            'editor0': Editor
        },
        data(){
            return {
                pageid:'webs-wesglobal-pages-management-fav',
                pgtxt_page:'',
                pgtxt_title:'',
                pgtxt_url:'',
                pgtxt_dbsaved:'',
                pgtxt_name:'',
                pgtxt_head:'',
                pgtxt_foot:'',
                pgtxt_layout:'',
                pgtxt_yes:'',
                pgtxt_no:'',
                btntxt_edit:'',
                btntxt_delete:'',
                btntxt_change:'',
                btntxt_savechange:'',
                btntxt_cancel:'',
                btntxt_add:'',
                pgtxt_create:'',
                pgtxt_basic:'',
                pgtxt_existstitle:'',
                TinyMCMcontent0: '',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_translation:'',
                pgtxt_author:'',
                pgtxt_time:'',
                pgtxt_content:'',
                pgtxt_hide:'',
                pgtxt_disabled:'',
            }
        },
        created() {

        },
        beforeMount(){
        },
        mounted(){
            /* fav part*/
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            permss = myjs.data.permissionDefinition();
            this.getWWGStoredLang();
        },
        computed: {
            cpgtxt_page:function () {
                return this.pgtxt_page
            },
            cpgtxt_name:function () {
                return this.pgtxt_name
            },
            cpgtxt_head:function () {
                return this.pgtxt_head
            },
            cpgtxt_foot:function () {
                return this.pgtxt_foot
            },
            cpgtxt_layout:function () {
                return this.pgtxt_layout
            },
            cpgtxt_yes:function () {
                return this.pgtxt_yes
            },
            cpgtxt_no:function () {
                return this.pgtxt_no
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_url:function () {
                return this.pgtxt_url
            },
            cpgtxt_dbsaved:function () {
                return this.pgtxt_dbsaved
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete
            },
            cbtntxt_change:function () {
                return this.btntxt_change
            },
            cbtntxt_savechange:function () {
                return this.btntxt_savechange
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_create:function () {
                return this.pgtxt_create
            },
            cpgtxt_basic:function () {
                return this.pgtxt_basic
            },
            cpgtxt_existstitle:function () {
                return this.pgtxt_existstitle
            },
            cpgtxt_existsurl:function () {
                return this.pgtxt_existsurl
            },
            cpgtxt_wantdeleteitem:function () {
                return this.pgtxt_wantdeleteitem;
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },
            cpgtxt_save:function () {
                return this.pgtxt_save
            },
            cpgtxt_preview:function () {
                return this.pgtxt_preview
            },
            cpgtxt_release:function () {
                return this.pgtxt_release
            },
            cpgtxt_translation:function () {
                return this.pgtxt_translation
            },
            cpgtxt_author:function () {
                return this.pgtxt_author
            },
            cpgtxt_time:function () {
                return this.pgtxt_time
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cpgtxt_hide:function () {
                return this.pgtxt_hide
            },


            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });

                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        methods:{
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
            },
            initpage()
            {
                $('#userid').val(userid);
                getLayoutAndHeadFoot();
                pageEventFunc();
                $('#wwpp_pstart').val(myjs.data.getPageIndex());
                $('#wwpp_pcnt').val(myjs.data.getRowCount());
            },
            getWWGStoredLang(){
                axios.post('admin.getAllStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        edit_id = myjs.data.getEditID();
                        if(edit_id == 0)
                            createPageContent();
                        stored_langs = response.data.langlist;
                        if(stored_langs!=''){
                            stored_langs = $.parseJSON(stored_langs);
                            setContentPage();
                        }
                        if(edit_id != 0)
                            selectPagesPage();

                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            editorclick0(){
                $('.tox.tox-tinymce').css('height','350px');
            },
            editorblue0(){
                $('.tox.tox-tinymce').css('height','150px');
            },
            edit_init_callback0(){
                $('.tox-statusbar').css('display','none');
            },
            upload_handler0(blobInfo, success, failure, progress) {
                var xhr, formData;
                xhr = new XMLHttpRequest();
                xhr.withCredentials = false;
                xhr.open('POST', 'admin.UpdateWWGBarCenterImg');
                xhr.upload.onprogress = function (e) {
                    progress(e.loaded / e.total * 100);
                };
                xhr.onload = function() {
                    var json;
                    if (xhr.status < 200 || xhr.status >= 300) {
                        failure('HTTP Error: ' + xhr.status);
                        return;
                    }
                    json = JSON.parse(xhr.responseText);

                    if (!json || typeof json.location != 'string') {
                        failure('Invalid JSON: ' + xhr.responseText);
                        return;
                    }
                    // $('#wwga_footbarleft_upload_preview_temp').val(json.filename);
                    success(json.location);
                };
                xhr.onerror = function () {
                    failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
                };
                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                xhr.send(formData);
            },
            PagePreview(){

            },
            Adddisablelang(){
                var tags='';
                $('#wwpc_disable_lang_add_body').html('');
                for(var i=0; i < pageOBJS.length;i++)
                {
                    var obj = pageOBJS[i];
                    if(obj.active === 0){
                        var dcont = obj.trans;
                        var cname = obj.langname;
                        tags += '<div class="col-4 form-check form-check-inline">';
                        tags += '<input class="form-check-input" type="checkbox" id="'+dcont+'" value="'+cname+'">';
                        tags +=  '<label class="form-check-label" htmlFor="'+dcont+'">'+cname;
                        if(obj.langstate === "disable"){
                            var pgtxt_disabled = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_disabled');
                            tags +=  '<span class="form-check-label data-ajax" data-ajax="pgtxt_disabled">('+pgtxt_disabled+')</span>';
                        }
                        tags += '</label>';
                        tags += '</div>';
                    }
                }
                $('#wwpc_disable_lang_add_body').html(tags);
                $('#wwpc_AddTranslationModal').modal('show');
            },
            wwpc_addTrans_btn_event(){
                $('#wwpc_disable_lang_add_body').children().each(function (index,element){
                    var inputOBJ=$(element).find('.form-check-input');
                    if($(inputOBJ).is(':checked')){
                        var objid=$(inputOBJ).attr('id');
                        var o_iso=objid.split('-')[0];
                        var o_dial=objid.split('-')[1];
                        var _iso_dial=o_iso+'-'+o_dial;
                        var tag='';

                        for (var j = 0; j < pageOBJS.length; j++)
                        {
                            var obj = pageOBJS[j];
                            var spanid = obj.trans;
                            var cname = obj.langname;
                            var dcont = spanid + '-' + cname;
                            if(_iso_dial===spanid)
                            {
                                obj.active = 1;
                                pageOBJS[j] = obj;
                                tag ='<span id="'+spanid+'">';
                                tag +='<span class="page1_translate_span" style="cursor: pointer" data-cont="'+dcont+'">'+cname;
                                if(obj.langstate == 'disable'){
                                    var pgtxt_disabled = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_disabled');
                                    tag += '   <span class="data-ajax" data-ajax="pgtxt_disabled">(' + pgtxt_disabled + ')</span>';
                                }
                                tag +='</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class="span_langitem_controller" data-cont="'+dcont+'">×</span></span>';
                                $('#translanglist').append(tag);

                                selectLanguage();
                                break;
                            }
                        }
                    }
                });

                $('#wwpc_AddTranslationModal').modal('hide');
            },
            wwpc_saveContentpage(){
                for(var i = 0; i < pageOBJS.length; i++){
                    if(pageOBJS[i].trans == transedlang){
                        pageOBJS[i].time= $('#pagesetting_datapicker').val();
                        pageOBJS[i].content = vueOBJ.TinyMCMcontent0;
                        break;
                    }
                }
                var pgsetstate = 'add';
                if(edit_id != 0)
                    pgsetstate = 'mod';
                var postData={
                    allData:pageOBJS,
                    pgsetstate:pgsetstate
                }
                $.ajax({
                    url: 'admin.wwppSaveContent',
                    type: 'POST',
                    dataType: 'json',
                    data: postData,
                    success: function (data) {
                        if(data.msg=="ok")
                        {
                            var pgtxt_dbsaved = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                            vueOBJ.TinyMCMcontent0 = '';
                            vueOBJ.wwpc_gotoContentList();
                        }
                        else
                        {
                            mjs_module.data.showAlertHidden(data.msg);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            wwpc_gotoContentList(){
                myjs.data.setEditID(0);
                this.$emit("fromchild", 0);
            }

        }//method

    }
</script>
