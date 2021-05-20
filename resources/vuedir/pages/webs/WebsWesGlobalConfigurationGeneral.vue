<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_configuration_general}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_configuration}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_configuration_general}}
                          <a href="#" id="webs-wesglobal-configuration-general-fav" data-status="off" data-page-info="General_webs-wesglobal-configuration-general">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="page1_translate_bar">
                    <div class="page1_translate_text">{{cpgtxt_translation}}</div>
                    <div class="page1_translate_bar_left" id="translanglist">
                        <!--translation langs-->
                    </div>
                    <div class="page1_translate_bar_right">
                        <span class="page1_translate_span_right cursor-pointer" id="wwga_save" @click="SavePageContent">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em"  style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:sharp-save-alt"><path d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z" fill="currentColor"></path></svg>
                            {{cpgtxt_save}}
                        </span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <span class="page1_translate_span_right cursor-pointer" @click="PagePreview">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-preview"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
                            {{cpgtxt_preview}}
                        </span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <span class="page1_translate_span_right cursor-pointer" @click="PageRelease">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-new-releases"><path d="M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z" fill="currentColor"></path></svg>
                            {{cpgtxt_release}}
                        </span>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="page1_alarm_bar" style="margin-bottom: 0">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="mi:circle-warning"><g fill="none"><path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"></path><path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z" fill="currentColor"></path><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"></path></g></svg>
                    <span>{{cpgtxt_nosavenoappear}}</span>
                </div>
            </div>
        </div>

        <div id="GeneralContainer" class="sl-tab-container active" style="margin-top:20px;">
            <form method="post" enctype="multipart/form-data" name="wwga_configgeneral_flw" id="wwga_configgeneral_flw">
                <input type="hidden" name="transedlang" id="transedlang"  value=""/>
                <input type="hidden" name="wwga_logo_upload_preview_temp" id="wwga_logo_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwga_sitelogo_upload_preview_temp" id="wwga_sitelogo_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwga_slogan_upload_preview_temp" id="wwga_slogan_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwga_favico_upload_preview_temp" id="wwga_favico_upload_preview_temp"  value=""/>

                <div class="row"><!--{{site logo}}-->
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_site}} {{cpgtxt_logo}}</h6>
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="flex-container">
                                            <div class="logimag"  id="wwga_logo_upload_preview"></div>
                                            <div style="display: none">
                                                <input type="file" name="wwga_logo_upload" id="wwga_logo_upload" value=""/>
                                            </div>
                                            <div>
                                                <div id="wwga_logo_editbtn" class="btn btn-outline-light webglogappearbtn">
                                                    <span>{{cbtntxt_edit}}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row"><!--{{extra logo}}-->
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_extra}} {{cpgtxt_logo}}</h6>
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="flex-container">
                                            <div class="logimag"  id="wwga_sitelogo_upload_preview"></div>
                                            <div style="display: none">
                                                <input type="file" name="wwga_sitelogo_upload" id="wwga_sitelogo_upload" value=""/>
                                            </div>
                                            <div>
                                                <div id="wwga_sitelogo_editbtn" class="btn btn-outline-light webglogappearbtn">
                                                    <span>{{cbtntxt_edit}}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row"><!--{{favico}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">Fav Ico</h6>
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="flex-container">
                                            <div class="logimag"  id="wwga_favico_upload_preview"></div>
                                            <div style="display: none">
                                                <input type="file" name="wwga_favico_upload" id="wwga_favico_upload" value=""/>
                                            </div>
                                            <div>
                                                <div id="wwga_favico_editbtn" class="btn btn-outline-light webglogappearbtn">
                                                    <span>{{cbtntxt_edit}}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row"><!--{{site title}}-->
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_site}} {{cpgtxt_title}}</h6>
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="flex-container">
                                            <div class="form-group m-b-0" style="width: 40%;">
                                                <input class="form-control w-75"  type="text" :placeholder="[[cpgtxt_enter] [cpgtxt_title]]" name="wwga_sitetitle_input" id="wwga_sitetitle_input"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row"><!--{{slogan}}-->
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_slogan}}</h6>
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="flex-container">
                                            <div class="logimag" style="font-size: 22px;" id="wwga_slogan_upload_preview">
                                                <!--{{cpgtxt_slogan}}-->
                                            </div>
                                            <div style="display: none">
                                                <input type="file" name="wwga_slogan_upload" id="wwga_slogan_upload" value=""/>
                                            </div>
                                            <div>
                                                <div id="wwga_slogan_editbtn" class="btn btn-outline-light webglogappearbtn">
                                                    <span>{{cbtntxt_edit}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-container">
                                            <div class="form-group m-b-0" style="width: 40%;">
                                                <input class="form-control w-75"  type="text" :placeholder="[[{cpgtxt_enter}]] [[{cpgtxt_slogan}]]" name="wwga_slogan_input" id="wwga_slogan_input"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row"><!--{{site index}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-30">{{cpgtxt_index}} {{cpgtxt_page}}</h6>
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="form-group m-b-0">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div class="col-md-11">
                                        <div class="flex-container">
                                            <div class="form-group m-b-0" style="width: 40%;">
                                                <input class="form-control w-75"  type="text" placeholder="Index Page" name="wwga_siteindex_input" id="wwga_siteindex_input"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
        <!--modal part-->
        <div class="modal fade" id="previewModal" role="dialog">
            <div class="modal-dialog modal-sm" style="min-width: 95%!important;">
                <div class="modal-content" style="border-radius:0">
                    <div class="modal-header" style="height: 25px;padding: 0 5px;">
                        <h4 class="modal-title" style="margin: 0px auto;">{{cpgtxt_previewpage}}</h4>
                        <button type="button" class="close" data-dismiss="modal" style="width: 18px; height: 18px;padding: 0;">&times;</button>
                    </div>
                    <div class="modal-body" id="previewModalModalbody" style="padding:0;">
                        <!-- <iframe src="/home" style="border:none;" title="preview"></iframe>-->
                    </div>
                </div>
            </div>
        </div>
        <!--end modal-->
    </div>
</template>
<style>
    .sl-tab-container{
        display: none;
    }
    .sl-tab-container.active{
        display: block;
    }
    .ck.ck-editor {
        width: 100%;
    }
    .tox.tox-tinymce{
        border-radius: 20px;
        width: 100% !important;
        min-height: 350px !important;
    }
    .apper-top-lang{
        align-items:center;
        justify-content: center
    }
    .apper-top-lang div{
        line-height: 25px;
        text-align: center;
    }
    .form-check-input.group{
        width: 16px;height: 16px;border-radius: 16px; border: 1px solid #bbbbbb;
        cursor: pointer;
    }
    .form-check-input.group > div{
        width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;
    }
    .form-check-input.group.active > div{
        width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;
    }
    #wwga_sitelogo_upload_preview,
    #wwga_slogan_upload_preview,
    #wwga_logo_upload_preview,
    #wwga_favico_upload_preview
    {
        background-repeat: no-repeat;
        background-size:100% 100%;
    }

</style>

<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";



    let vueOBJ=null;
    var permss;
    var transedlang='';
    var logo_path = "/uploads/images/waaupimg/logo/";

    function JsonDataSocialSetting(jsonstr){
        if (jsonstr != ''){
            var datas = $.parseJSON(jsonstr);
            if (datas.logoImg != '' && datas.logoImg != null) {
                //$('#wwga_logo_upload_preview').text('');
                $('#wwga_logo_upload_preview_temp').val(datas.logoImg);
                $('#wwga_logo_upload_preview').css('background-image', 'url("' + logo_path + datas.logoImg + '")');
            }
            if (datas.sitelogoImg != '' && datas.sitelogoImg != null) {
                //$('#wwga_sitelogo_upload_preview').text('');
                $('#wwga_sitelogo_upload_preview_temp').val(datas.sitelogoImg);
                $('#wwga_sitelogo_upload_preview').css('background-image', 'url("' + logo_path + datas.sitelogoImg + '")');
            }
            if (datas.sloganImg != '' && datas.sloganImg != null) {
                //$('#wwga_slogan_upload_preview').text('');
                $('#wwga_slogan_upload_preview_temp').val(datas.sloganImg);
                $('#wwga_slogan_upload_preview').css('background-image', 'url("' + logo_path + datas.sloganImg + '")');

            }
            if (datas.favicoImg != '' && datas.favicoImg != null) {
                //$('#wwga_slogan_upload_preview').text('');
                $('#wwga_favico_upload_preview_temp').val(datas.favicoImg);
                $('#wwga_favico_upload_preview').css('background-image', 'url("' + logo_path + datas.favicoImg + '")');

            }
            if (datas.slogantxt != '') {
                $('#wwga_slogan_input').val(datas.slogantxt);
            }
            if (datas.sitetitle != '') {
                $('#wwga_sitetitle_input').val(datas.sitetitle);
            }
        }
        else{
            //$('#wwga_logo_upload_preview').text('');
            $('#wwga_logo_upload_preview_temp').val('');
            $('#wwga_logo_upload_preview').css('background-image', 'url("")');

            //$('#wwga_sitelogo_upload_preview').text('');
            $('#wwga_sitelogo_upload_preview_temp').val('');
            $('#wwga_sitelogo_upload_preview').css('background-image', 'url("")');

            //$('#wwga_slogan_upload_preview').text('');
            $('#wwga_slogan_upload_preview_temp').val('');
            $('#wwga_slogan_upload_preview').css('background-image', 'url("")');

            $('#wwga_favico_upload_preview_temp').val('');
            $('#wwga_favico_upload_preview').css('background-image', 'url("")');

            $('#wwga_slogan_input').val('');
            $('#wwga_sitetitle_input').val('');
        }

    }

    function pageEvent() {
        $('#wwga_logo_editbtn').click(function () {
            if (permss.pwrite == 1) {
                if (transedlang == '') {
                    myjs.data.showAlert('pgtxt_selectlanguage');
                    return;
                }
                $('#wwga_logo_upload').val('');
                $('#wwga_logo_upload').trigger('click');
            }else
                myjs.data.showAlert('pgtxt_notpermission');
        });
        $("#wwga_logo_upload").change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#wwga_logo_upload_preview').text('');
                    $('#wwga_logo_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                }
                reader.readAsDataURL(this.files[0]); // convert to base64 string
            }
        });

        $('#wwga_sitelogo_editbtn').click(function () {
            if (permss.pwrite == 1) {
                if (transedlang == '') {
                    myjs.data.showAlert('pgtxt_selectlanguage');
                    return;
                }

                $('#wwga_sitelogo_upload').val('');
                $('#wwga_sitelogo_upload').trigger('click');
            }else
                myjs.data.showAlert('pgtxt_notpermission');
        });
        $("#wwga_sitelogo_upload").change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#wwga_sitelogo_upload_preview').text('');
                    $('#wwga_sitelogo_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                }
                reader.readAsDataURL(this.files[0]); // convert to base64 string
            }
        });

        $('#wwga_favico_editbtn').click(function () {
            if (permss.pwrite == 1) {
                if (transedlang == '') {
                    myjs.data.showAlert('pgtxt_selectlanguage');
                    return;
                }

                $('#wwga_favico_upload').val('');
                $('#wwga_favico_upload').trigger('click');
            }else
                myjs.data.showAlert('pgtxt_notpermission');
        });
        $("#wwga_favico_upload").change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#wwga_favico_upload_preview').text('');
                    $('#wwga_favico_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                }
                reader.readAsDataURL(this.files[0]); // convert to base64 string
            }
        });

        $('#wwga_slogan_editbtn').click(function () {
            if (permss.pwrite == 1) {
                if (transedlang == '') {
                    myjs.data.showAlert('pgtxt_selectlanguage');
                    return;
                }

                $('#wwga_slogan_upload').val('');
                $('#wwga_slogan_upload').trigger('click');
            }else
                myjs.data.showAlert('pgtxt_notpermission');
        });
        $("#wwga_slogan_upload").change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#wwga_slogan_upload_preview').text('');
                    $('#wwga_slogan_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                }
                reader.readAsDataURL(this.files[0]); // convert to base64 string
            }
        });
    }

    function pageLoad() {
        $.ajax({
            url: 'admin.getConfigurationGeneral',
            data: {
                transedlang: transedlang,
            },
            type: 'POST',
            success: function (data) {
                if(data.msg=="ok"){
                    if(transedlang!=null && transedlang!='')
                    {
                        $('.page1_alarm_bar').addClass('active');
                        $('.page1_alarm_bar span').text('Save  Appear');

                    }
                    JsonDataSocialSetting(data.lists);
                }
                else
                    alert(data.msg);
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    export default {
        name: "WebsWesGlobalConfigurationGeneral",
        data(){
            return {
                pageid:'webs-wesglobal-configuration-general-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_configuration:'',
                musususu_webs_wesglobal_configuration_general:'',
                pgtxt_head:'',
                pgtxt_foot:'',
                pgtxt_topheader:'',
                pgtxt_hide:'',
                pgtxt_location:'',
                pgtxt_logo:'',
                pgtxt_site:'',
                pgtxt_title:'',
                pgtxt_enter:'',
                btntxt_edit:'',
                pgtxt_slogan:'',
                pgtxt_bar:'',
                pgtxt_normal:'',
                pgtxt_css:'',
                pgtxt_content:'',
                pgtxt_image:'',
                pgtxt_link:'',
                pgtxt_center:'',
                pgtxt_right:'',
                pgtxt_font:'',
                pgtxt_size:'',
                pgtxt_toolbar:'',
                pgtxt_calendar:'',
                pgtxt_module:'',
                pgtxt_left:'',
                btntxt_add:'',
                pgtxt_language:'',
                pgtxt_translation:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_nosavenoappear:'',
                pgtxt_please:'',
                pgtxt_select:'',
                pgtxt_extra:'',
                pgtxt_doesnt:'',
                pgtxt_work:'',
                pgtxt_index:'',
                pgtxt_page:'',
                pgtxt_dbsaved:'',
                pgtxt_previewpage:'',
                pgtxt_releasesuccess:'',
                pgtxt_selectlanguagesave:'',
                pgtxt_selectlanguage:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        created() {
        },
        beforeMount(){
        },
        computed: {
            cmususu_webs_wesglobal_configuration:function () {
                return this.mususu_webs_wesglobal_configuration
            },
            cmusususu_webs_wesglobal_configuration_general:function () {
                return this.musususu_webs_wesglobal_configuration_general
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_wesglobal:function () {
                return this.musu_webs_wesglobal
            },
            cpgtxt_head:function () {
                return this.pgtxt_head
            },
            cpgtxt_foot:function () {
                return this.pgtxt_foot
            },
            cpgtxt_topheader:function () {
                return this.pgtxt_topheader
            },
            cpgtxt_hide:function () {
                return this.pgtxt_hide
            },
            cpgtxt_location:function () {
                return this.pgtxt_location
            },
            cpgtxt_logo:function () {
                return this.pgtxt_logo
            },
            cpgtxt_site:function () {
                return this.pgtxt_site
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_enter:function () {
                return this.pgtxt_enter
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cpgtxt_slogan:function () {
                return this.pgtxt_slogan
            },
            cpgtxt_bar:function () {
                return this.pgtxt_bar
            },
            cpgtxt_normal:function () {
                return this.pgtxt_normal
            },
            cpgtxt_css:function () {
                return this.pgtxt_css
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cpgtxt_image:function () {
                return this.pgtxt_image
            },
            cpgtxt_link:function () {
                return this.pgtxt_link
            },
            cpgtxt_center:function () {
                return this.pgtxt_center
            },
            cpgtxt_right:function () {
                return this.pgtxt_right
            },
            cpgtxt_left:function () {
                return this.pgtxt_left
            },
            cpgtxt_font:function () {
                return this.pgtxt_font
            },
            cpgtxt_size:function () {
                return this.pgtxt_size
            },
            cpgtxt_toolbar:function () {
                return this.pgtxt_toolbar
            },
            cpgtxt_calendar:function () {
                return this.pgtxt_calendar
            },
            cpgtxt_module:function () {
                return this.pgtxt_module
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_language:function () {
                return this.pgtxt_language
            },
            cpgtxt_translation:function () {
                return this.pgtxt_translation
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
            cpgtxt_nosavenoappear:function(){
                return this.pgtxt_nosavenoappear
            },
            cpgtxt_please:function () {
                return this.pgtxt_please
            },
            cpgtxt_select:function () {
                return this.pgtxt_select
            },
            cpgtxt_extra:function () {
                return this.pgtxt_extra
            },
            cpgtxt_doesnt:function () {
                return this.pgtxt_doesnt
            },
            cpgtxt_work:function () {
                return this.pgtxt_work
            },
            cpgtxt_index:function () {
                return this.pgtxt_index
            },
            cpgtxt_page:function () {
                return this.pgtxt_page
            },
            cpgtxt_dbsaved:function () {
                return this.pgtxt_dbsaved
            },
            cpgtxt_previewpage:function () {
                return this.pgtxt_previewpage
            },
            cpgtxt_releasesuccess:function () {
                return this.pgtxt_releasesuccess
            },
            cpgtxt_selectlanguage:function () {
                return this.pgtxt_selectlanguage
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
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
        mounted(){
            /* fav part*/
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            permss = myjs.data.permissionDefinition();
            this.initpage();
            this.getWWGStoredLang();

        },
        methods:{
            /* fav part */
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
            },  /*fav part*/
            getWWGStoredLang(){
                axios.post('admin.getWWGStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        var stored_langs = response.data.langlist;
                        if(stored_langs!==''){
                            stored_langs = $.parseJSON(stored_langs);
                            var tags='';
                            for (var j = 0; j < stored_langs.length; j++)
                            {
                                var obj = stored_langs[j];
                                var iso = obj.iso;
                                var dialCode = obj.dialcode;
                                var cname = obj.name;
                                var status = obj.status;
                                var dcont=iso+'-'+dialCode+'-'+cname;
                                if(status=='enable')
                                    tags +='<span class="page1_translate_span" style="cursor: pointer" data-cont="'+dcont+'">'+cname+'</span>&nbsp;&nbsp;&nbsp;';
                            }
                            $('#translanglist').html(tags);

                            $('.page1_translate_span').click(function () {
                                $('.page1_translate_span').removeClass('active');
                                $(this).addClass('active');
                                var cont = $(this).attr('data-cont');
                                var len= cont.split('-').length;
                                if(len > 0){
                                    var sky = cont.split('-')[0]+'-'+cont.split('-')[1];
                                    transedlang = sky;
                                    $('#transedlang').val(transedlang);
                                    vueOBJ.loaddata();
                                }
                            });
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            PagePreview(){
                $("#previewModalModalbody").html('');
                var iframeH = $(window).height()-100;
                var lang = "";
                if(transedlang=='')
                    lang = "en";
                else
                    lang = transedlang.split("-")[0];
                $("#previewModalModalbody").html('<iframe src="/'+lang+'/preview" style="border:none;width:100%; height: '+iframeH+'px;" title="preview"></iframe>');
                $("#previewModal").modal('show');
            },
            PageRelease(){
                if (permss.pwrite == 1) {
                    if (transedlang == '') {
                        myjs.data.showAlert('pgtxt_selectlanguagesave');
                        return;
                    }

                    var pgtxt_releasesuccess = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
                    var pgtxt_release = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');
                    if (window.confirm(pgtxt_release)) {
                        $.ajax({
                            url: 'admin.websGlobalFrontPageRelease',
                            type: 'POST',
                            data: {
                                trans: transedlang,
                                part: "configgeneral",
                                tabstatus: -1,
                                release: 1
                            },
                            success: function (data) {
                                if (data.msg == "ok") {
                                    myjs.data.showAlert('pgtxt_releasesuccess');
                                } else
                                    alert(data.msg);
                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            },
                        });
                    } else {
                        $.ajax({
                            url: 'admin.websGlobalFrontPageRelease',
                            type: 'POST',
                            data: {
                                trans: transedlang,
                                part: "configgeneral",
                                tabstatus: -1,
                                release: 0
                            },
                            success: function (data) {

                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            },
                        });
                    }
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            SavePageContent() {
                if (permss.pwrite == 1) {
                    var formData = '';

                    if (transedlang == '') {
                        myjs.data.showAlert('pgtxt_selectlanguage');
                        return;
                    }

                    formData = new FormData($("#wwga_configgeneral_flw")[0]);

                    $.ajax({
                        url: 'admin.saveConfigurationGeneral',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if (data.msg == "ok") {
                                $('#wwga_logo_upload_preview_temp').val(data.logoImg);
                                $('#wwga_sitelogo_upload_preview_temp').val(data.sitelogoImg);
                                $('#wwga_slogan_upload_preview_temp').val(data.sloganImg);
                                $('#wwga_favico_upload_preview_temp').val(data.sloganImg);
                                myjs.data.showAlert('pgtxt_dbsaved');
                            } else {
                                alert(data.msg);
                            }

                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            initpage() {
                pageLoad();
                pageEvent();
            },
            loaddata()
            {
                transedlang = $('#transedlang').val();
                pageLoad();
            }
        }//method

    }
</script>
