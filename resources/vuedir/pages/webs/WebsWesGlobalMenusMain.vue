<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_menus_main}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_menus}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_menus_main}}
                          <a href="#" id="webs-wesglobal-menus-main-fav" data-status="off" data-page-info="Main_webs-wesglobal-menus-main">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="page1_translate_bar">
                    <div class="page1_translate_text">{{cpgtxt_translation}}</div>
                    <input type="hidden" name="wwga_tranedLang" id="wwga_tranedLang" value="">
                    <div class="page1_translate_bar_left" id="translanglist">

                    </div>
                    <div class="page1_translate_bar_right">
                        <span class="page1_translate_span_right cursor-pointer" id="wwgm_save" @click="SavePageContent">
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


        <div id="MainMenuContainer" class="sl-tab-container active" style="margin-top:20px;">
            <form method="post" enctype="multipart/form-data" name="wwgm_mainmenu_frm" id="wwgm_mainmenu_frm">
                <input type="hidden" name="wwgafrm" value="mainmenu"/>
                <input type="hidden" name="tranedLang"  value=""/>
                <div class="row"><!--{{mainmenu}}-->
                    <div class="col-md-12">
                        <div class="card border-0 m-b-10 text-right">
                            <div>
                                <div id="mainmenu-add-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30">
                                    <span>+ {{ cbtntxt_add }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card m-t-10">
                            <div class="card-body" id="mainmenu-container">
                              <!--  <div class="d-flex flex-column"  style="width:50%; border: 1px solid #e4e0e0;border-radius: 20px;">
                                   <div class="d-flex flex-row justify-content-between" style="width: 100%;line-height: 30px;padding: 0 20px;align-items: baseline;">
                                        <div>cousrse</div>
                                        <div></div>
                                        <div style="cursor: pointer"><i class='fas fa-caret-down'></i></div>
                                    </div>
                                    <div class="footmain-one-sub" style="width: 100%;line-height: 30px;padding:20px;border-top: 1px solid #e4e4e4;display: none">
                                        <div class="d-flex flex-row justify-content-start">
                                            <div style="flex-grow: 1;width: 100px">Navigation Label</div>
                                            <div style="flex-grow: 6">
                                                <input class="form-control form-control-sm" type="text" placeholder="">
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row justify-content-start m-t-15">
                                            <div style="flex-grow: 1;width: 100px">Original</div>
                                            <div style="flex-grow: 6">
                                                <input class="form-control form-control-sm" type="text" placeholder="">
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row justify-content-end m-t-15">
                                            <div class="btn btn-outline-light  dash-my-btn-0" style="padding: 10px 20px;">
                                                <span class="m-l-10">Remove</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <!--modal-->
        <div class="modal fade" id="myMenuAddModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 450px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" style="color: #055ada;font-size: 17px;font-weight:800;padding-top: 10px;padding-left: 10px;">{{cpgtxt_createmenu}}</h4>
                        <p id="sfi_alert" style="display: none;padding:5px 10px;border-radius:20px;">Create Menu area.</p>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="myMenuAddModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel" id="tab1">
                                <div class="row" style="padding-bottom: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                    </div>
                                    <div style="margin: 10px 10px 0px 10px;">
                                        <div class="row" style="padding: 10px">
                                            <div class="col-md-1">
                                                <div class="form-group">
                                                    <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_font}}{{cpgtxt_content}}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-11" style="padding-left: 62px;">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" name="cont[]" style="width: 300px;"  placeholder="" aria-label="wwgm-menucont" id="wwgm-menucont" aria-describedby="basic-addon2">
                                                </div>
                                            </div>

                                            <div class="col-md-1">
                                                <div class="form-group">
                                                    <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_link}}</label>
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
                                            <span>+ {{ cbtntxt_add }}</span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end model-->
        <!--modal part-->
        <div class="modal fade" id="previewModal" role="dialog">
            <div class="modal-dialog modal-sm" style="min-width: 95%!important;">
                <div class="modal-content" style="border-radius:0">
                    <div class="modal-header" style="height: 25px;padding: 0 5px;">
                        <h4 class="modal-title" style="color: #242424;font-size: 15px;margin: 0 auto">{{cpgtxt_previewpage}}</h4>
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
    #wwgm_footbarleft_upload_preview{
        background-repeat: no-repeat;
        background-size:100% 100%;
    }
    .mainmenu-item-container{
        width: 100%;line-height: 30px;padding: 0 20px;align-items: baseline;
    }
    .mainmenu-item-container-sub{
        width: 100%;
        line-height: 30px;
        padding:20px;
        border-top: 1px solid #e4e4e4;
        display: none
    }
    .mainmenu-item-container-sub.active{
        width: 100%;
        line-height: 30px;
        padding:20px;
        border-top: 1px solid #e4e4e4;
        display: block;
    }
    .tox.tox-tinymce{
        border-radius: 20px;
        width: 100% !important;
        min-height: 350px !important;
    }

</style>

<script>

  /*  import CKEditor from '@ckeditor/ckeditor5-build-classic';*/
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import Editor from '@tinymce/tinymce-vue';
    import nav_module from "../../assets/jsfunc/nav_module";


    var vueOBJ=null;
    var permss;
    var pgtxt_selectlanguagesave = "";

    function mainloaddata(whisfrm)
    {
        var transedlang = $('#wwga_tranedLang').val();
        /*if(transedlang=='')
            return;*/
       var pgtxt_navigation = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_navigation');
       var pgtxt_label= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_label');
       var btntxt_change= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
       var btntxt_remove= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_remove');
        var pgtxt_link= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
        //console.log(pgtxt_navigation);
        //$('#mainmenu-container').html('');
        $.ajax({
            url: 'admin.frontGetMenu',
            data: {
                tedLang: transedlang,
                wwgfield:whisfrm
            },
            type: 'POST',
            async: true,
            success: function (data) {
                var menulist = data.list;
                var ts = data.trans;

                var pgtxt_navigation = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_navigation');
                var pgtxt_label = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_label');
                var pgtxt_link = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
                var btntxt_remove = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_remove');

                if (menulist !== null && menulist !== '')
                {
                    var keys = Object.keys(menulist);
                    var tag = '';
                    for (var i = 0; i < keys.length; i++) {
                        var mcont = keys[i];
                        var link = decodeURIComponent(menulist[keys[i]]);
                        var style = "margin-top:25px";
                        if (i == 0)
                            style = "";

                        var tagid = "fmenuarrow_" + i;
                        var subid = "fmenusubcont_" + i;
                        var change = "fmenucg_" + i;
                        var remove = "fmenurv_" + i;
                        var fmenu_nave_cont = "fmenunavelb_" + i;
                        var fmenu_nave_lk = "fmenunavelk_" + i;
                        var itemcontainer = 'item-container-'+i;

                        tag += ' <div class="d-flex flex-column" id="'+itemcontainer+'" style="width:50%; border: 1px solid #e4e0e0;border-radius: 20px;' + style + '">';
                        tag += ' <div class="d-flex flex-row justify-content-between mainmenu-item-container" >';
                        tag += '<div>' + mcont + '</div>'
                        tag += '<div></div>';
                        tag += '<div style="cursor: pointer" id="' + tagid + '"><i class="fas fa-caret-down"></i></div>';
                        tag += '</div>';
                        tag += '<div class="mainmenu-item-container-sub" id="' + subid + '">';
                        tag += '<div class="d-flex flex-row justify-content-start">';
                        tag += '<div class="data-ajax" data-ajax="pgtxt_navigation,pgtxt_label" style="flex-grow: 1;width: 100px">'+pgtxt_navigation+pgtxt_label+'</div>';
                        tag += '<div style="flex-grow: 6">';
                        tag += '<input class="form-control form-control-sm" type="text" name="cont[]" data-cont="' + mcont + '" id="' + fmenu_nave_cont + '" placeholder="" value="' + mcont + '" >';
                        tag += '</div>';
                        tag += '</div>';
                        tag += ' <div class="d-flex flex-row justify-content-start m-t-15">';
                        tag += '<div class="data-ajax" data-ajax="pgtxt_link" style="flex-grow: 1;width: 100px">'+pgtxt_link+'</div>';
                        tag += '<div style="flex-grow: 6">';
                        tag += '<input class="form-control form-control-sm data-ajax" type="text" name="link[]" data-ajax="pgtxt_link" data-cont="' + link + '"  id="' + fmenu_nave_lk + '" placeholder="'+pgtxt_link+'" value="' + link + '">';
                        tag += '</div>';
                        tag += '</div>';
                        tag += '<div class="d-flex flex-row justify-content-end m-t-15">';
                       /* tag += '<div class="btn btn-outline-light  dash-my-btn-0  m-r-15" style="padding: 10px 20px;">';
                        tag += '<span class="m-l-10" data-id="' + i + '" id="' + change + '">'+btntxt_change+'</span>';
                        tag += '</div>';*/
                        tag += '<div class="btn btn-outline-light  dash-my-btn-0" data-id="' + i + '" id="' + remove + '" style="padding: 10px 20px;">';
                        tag += '<span class="data-ajax m-l-10" data-ajax="btntxt_remove">'+btntxt_remove+'</span>';
                        tag += '</div>';
                        tag += '</div>';
                        tag += '</div>';
                        tag += '</div>';
                    }
                    $('#mainmenu-container').html(tag);

                    $('div[id^="fmenuarrow_"]').click(function () {
                        var idstr = $(this).attr('id');
                        var id=idstr.split('_')[1];
                        if( $('#fmenusubcont_'+id+'').hasClass('active')){
                            $('#fmenusubcont_'+id+'').removeClass('active');
                        }
                        else
                            $('#fmenusubcont_'+id+'').addClass('active');
                    });

                    $('div[id^="fmenurv_"]').click(function () {
                        if (permss.pdelete == 1) {
                            var id = $(this).attr('data-id');
                            var itemcontainer = 'item-container-' + id;
                            $('#' + itemcontainer).remove();
                        }else
                            myjs.data.showAlert('pgtxt_notpermission');
                    });

                    if(transedlang!=null && transedlang!='')
                    {
                        $('.page1_alarm_bar').addClass('active');
                        $('.page1_alarm_bar span').text('Save  Appear');
                    }
                }
                else
                {
                    $('#mainmenu-container').html('');
                    $('.page1_alarm_bar').removeClass('active');
                    $('.page1_alarm_bar span').text('No Save No Appear');
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function  hidenModel(){
        $('#wwgm-menucont').val('');
        $('#wwgm-menulink').val('');
        $("#myMenuAddModal").modal('hide');
    }
    var  wwgfield='mainmenu';
    export default {
        name: "WebsWesGlobalMenusMain",
        components: {
            'editor0': Editor,
            'editor1': Editor,
            'editor2': Editor,
        },
        data(){
            return {
                pageid:'webs-wesglobal-menus-main-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_menus:'',
                musususu_webs_wesglobal_menus_main:'',
                mususu_mainmenu:'',
                mususu_footmenu:'',
                btntxt_add:'',
                pgtxt_font:'',
                pgtxt_content:'',
                pgtxt_link:'',
                pgtxt_createmenu:'',
                pgtxt_menu:'',
                pgtxt_normal:'',
                pgtxt_css:'',
                pgtxt_fontcolour:'',
                pgtxt_size:'',
                pgtxt_title:'',
                pgtxt_icon:'',
                btntxt_edit:'',
                pgtxt_news:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_translation:'',
                pgtxt_navigation:'',
                pgtxt_label:'',
                btntxt_change:'',
                btntxt_remove:'',
                pgtxt_nosavenoappear:'',
                pgtxt_dbsaved:'',
                pgtxt_releasesuccess:'',
                pgtxt_selectlanguagesave:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',

                TinyMCMcontent0: '',
                TinyMCMcontent1: '',
                TinyMCMcontent2: '',
            }
        },
        created() {
        },
        beforeMount(){
        },
        computed: {
            cmususu_webs_wesglobal_menus:function () {
                return this.mususu_webs_wesglobal_menus
            },
            cmusususu_webs_wesglobal_menus_main:function () {
                return this.musususu_webs_wesglobal_menus_main
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_wesglobal:function () {
                return this.musu_webs_wesglobal
            },
            cmususu_mainmenu:function () {
                return this.mususu_mainmenu
            },
            cmususu_footmenu:function () {
                return this.mususu_footmenu
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_font:function(){
                return this.pgtxt_font
            },
            cpgtxt_content:function(){
                return this.pgtxt_content
            },
            cpgtxt_link:function(){
                return this.pgtxt_link
            },
            cpgtxt_createmenu:function(){
                return this.pgtxt_createmenu
            },
            cpgtxt_menu:function(){
                return this.pgtxt_menu
            },
            cpgtxt_normal:function () {
                return this.pgtxt_normal
            },
            cpgtxt_css:function () {
                return this.pgtxt_css
            },
            cpgtxt_fontcolour:function () {
                return this.pgtxt_fontcolour
            },
            cpgtxt_size:function () {
                return this.pgtxt_size
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_icon:function () {
                return this.pgtxt_icon
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cpgtxt_news:function () {
                return this.pgtxt_news
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
            cpgtxt_nosavenoappear:function () {
                return this.pgtxt_nosavenoappear
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
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
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
            pgtxt_selectlanguagesave = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');

            this.initpage();
            this.getWWGStoredLang();
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
            getWWGStoredLang(){
                axios.post('admin.getWWGStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        var stored_langs = response.data.langlist;
                        if(stored_langs!=''){
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
                                    $('#wwga_tranedLang').val(sky);
                                    if(wwgfield=='mainmenu')
                                       mainloaddata(wwgfield);
                                    else
                                        footloaddata(wwgfield);
                                }
                            });

                        }

                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            /*fav part*/
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
            edit_init_callback1(){
                $('.tox-statusbar').css('display','none');
            },
            upload_handler1(blobInfo, success, failure, progress) {
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
                    //$('#wwga_footbarleft_upload_preview_temp').val(json.filename);
                    success(json.location);
                };
                xhr.onerror = function () {
                    failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
                };
                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                xhr.send(formData);
            },
            edit_init_callback2(){
                $('.tox-statusbar').css('display','none');
            },
            upload_handler2(blobInfo, success, failure, progress) {
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
            initpage()
            {
                vueOBJ=this;
                wwgfield='mainmenu';
                $('#mainmenu-add-btn').click(function () {
                    if (permss.pcreate == 1) {
                        $("#myMenuAddModal").modal('show');
                    }else
                        myjs.data.showAlert('pgtxt_notpermission');
                });

                /*real menu add*/
                $('#wwgm-model-add').click(function () {
                    var transedlang = $('#wwga_tranedLang').val();
                    if(transedlang==''){
                        alert('Please Select translate language!');
                        hidenModel();
                        return;
                    }

                    var cont = $.trim($('#wwgm-menucont').val());
                    var link = $.trim($('#wwgm-menulink').val());
                    if(cont == ''){
                        alert('Please enter content of Menu!');return;
                    }
                    if(link == ''){
                        alert('Please enter link of Menu!');return;
                    }

                    var pgtxt_navigation = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_navigation');
                    var pgtxt_label= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_label');
                    var btntxt_change= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                    var btntxt_remove= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_remove');
                    var pgtxt_link= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
                     var i=0;
                    $('input[name^="cont"]').each(function(){
                        i++;
                    });

                    var style = "margin-top:25px";
                    i = i - 1;
                    if (i == 0)
                        style = "";

                    var tagid = "fmenuarrow_" + i;
                    var subid = "fmenusubcont_" + i;
                    var change = "fmenucg_" + i;
                    var remove = "fmenurv_" + i;
                    var fmenu_nave_cont = "fmenunavelb_" + i;
                    var fmenu_nave_lk = "fmenunavelk_" + i;
                    var itemcontainer = 'item-container-'+i;
                    var tag='';
                    tag += ' <div class="d-flex flex-column" id="'+itemcontainer+'" style="width:50%; border: 1px solid #e4e0e0;border-radius: 20px;' + style + '">';
                    tag += ' <div class="d-flex flex-row justify-content-between mainmenu-item-container" >';
                    tag += '<div>' + cont + '</div>'
                    tag += '<div></div>';
                    tag += '<div style="cursor: pointer" id="' + tagid + '"><i class="fas fa-caret-down"></i></div>';
                    tag += '</div>';
                    tag += '<div class="mainmenu-item-container-sub" id="' + subid + '">';
                    tag += '<div class="d-flex flex-row justify-content-start">';
                    tag += '<div class="data-ajax" data-ajax="pgtxt_navigation,pgtxt_label" style="flex-grow: 1;width: 100px">'+pgtxt_navigation+pgtxt_label+'</div>';
                    tag += '<div style="flex-grow: 6">';
                    tag += '<input class="form-control form-control-sm" type="text" name="cont[]" data-cont="' + cont + '" id="' + fmenu_nave_cont + '" placeholder="" value="' + cont + '" >';
                    tag += '</div>';
                    tag += '</div>';
                    tag += ' <div class="d-flex flex-row justify-content-start m-t-15">';
                    tag += '<div class="data-ajax" data-ajax="pgtxt_link" style="flex-grow: 1;width: 100px">'+pgtxt_link+'</div>';
                    tag += '<div style="flex-grow: 6">';
                    tag += '<input class="data-ajax form-control form-control-sm" data-ajax="pgtxt_link" type="text" name="link[]" data-cont="' + link + '"  id="' + fmenu_nave_lk + '" placeholder="'+pgtxt_link+'" value="' + link + '">';
                    tag += '</div>';
                    tag += '</div>';
                    tag += '<div class="d-flex flex-row justify-content-end m-t-15">';
                    /* tag += '<div class="btn btn-outline-light  dash-my-btn-0  m-r-15" style="padding: 10px 20px;">';
                     tag += '<span class="m-l-10" data-id="' + i + '" id="' + change + '">'+btntxt_change+'</span>';
                     tag += '</div>';*/
                    tag += '<div class="btn btn-outline-light  dash-my-btn-0" data-id="' + i + '" id="' + remove + '" style="padding: 10px 20px;">';
                    tag += '<span class="data-ajax m-l-10" data-ajax="btntxt_remove">'+btntxt_remove+'</span>';
                    tag += '</div>';
                    tag += '</div>';
                    tag += '</div>';
                    tag += '</div>';

                $('#mainmenu-container').append(tag);

                    $('div[id^="fmenuarrow_"]').click(function () {
                        var idstr = $(this).attr('id');
                        var id=idstr.split('_')[1];
                        if( $('#fmenusubcont_'+id+'').hasClass('active')){
                            $('#fmenusubcont_'+id+'').removeClass('active');
                        }
                        else
                            $('#fmenusubcont_'+id+'').addClass('active');
                    });

                    $('div[id^="fmenurv_"]').click(function () {
                        if (permss.pdelete == 1) {
                            var id = $(this).attr('data-id');
                            var itemcontainer = 'item-container-' + id;
                            $('#' + itemcontainer).remove();
                        }else
                            myjs.data.showAlert('pgtxt_notpermission');
                    });

                    hidenModel();

                });

                mainloaddata(wwgfield);
            }//initpage
           ,
            SavePageContent()
            {
                if (permss.pwrite == 1) {
                    var tlang = $('#wwga_tranedLang').val();
                    if (tlang == '') {
                        alert(pgtxt_selectlanguagesave);
                        return;
                    }
                    var pgtxt_dbsaved = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                    // encodeURIComponent ckdckd
                    $('input[name="tranedLang"]').val(tlang);
                    var formData = '';
                    let vobj = this;
                    var url = '';

                    $('input[name^="link"]').each(function () {
                        var surl = $.trim($(this).val());
                        surl = surl.replace(/(\s*)/g, '');
                        surl = encodeURIComponent(surl);
                        $(this).val(surl);
                    });

                    formData = new FormData($("#wwgm_mainmenu_frm")[0]);
                    url = 'admin.frontAddMenu';

                    $.ajax({
                        url: url,
                        type: 'POST',
                        data: formData,
                        async: true,
                        success: function (data) {
                            // data = JSON.parse(data);
                            if (data.msg == "ok") {
                                mainloaddata(wwgfield);
                                setTimeout(alert(pgtxt_dbsaved), 500);
                                //alert('Sucess save in Database');
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
            PagePreview(){
                $("#previewModalModalbody").html('');
                var iframeH = $(window).height()-100;
                var lang = $('#wwga_tranedLang').val();
                if(lang=='')
                    lang = "en";
                else
                    lang = lang.split("-")[0];
                $("#previewModalModalbody").html('<iframe src="/'+lang+'/preview" style="border:none;width:100%; height: '+iframeH+'px;" title="preview"></iframe>');
                $("#previewModal").modal('show');
            },
            PageRelease(){
                if (permss.pwrite == 1) {
                    var tlang = $('#wwga_tranedLang').val();
                    if (tlang == '') {
                        alert(pgtxt_selectlanguagesave);
                        return;
                    }
                    var pgtxt_releasesuccess = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
                    var pgtxt_release = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');
                    if (window.confirm(pgtxt_release)) {
                        $.ajax({
                            url: 'admin.websGlobalFrontPageRelease',
                            type: 'POST',
                            data: {
                                trans: tlang,
                                part: "mainmenu",
                                tabstatus: -1,
                                release: 1
                            },
                            success: function (data) {
                                if (data.msg == "ok") {
                                    alert(pgtxt_releasesuccess);
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
                                trans: tlang,
                                part: "mainmenu",
                                tabstatus: -1,
                                release: 0
                            },
                            success: function (data) {
                                if (data.msg == "ok") {
                                    alert('Success Release Page');
                                } else
                                    alert(data.msg);
                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            },
                        });
                    }
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        }//method


    }
</script>
