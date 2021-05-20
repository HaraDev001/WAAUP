<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_pages_register}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_pages}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_pages_register}}
                          <a href="#" id="webs-wesglobal-pages-register-fav" data-status="off" data-page-info="Register_webs-wesglobal-pages-register">
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

                    </div>
                    <div class="page1_translate_bar_right" style="display: flex">
                        <div class="page1_translate_div" @click="SavePageContent" style="cursor: pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:sharp-save-alt"><path d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z" fill="currentColor"></path></svg>
                            <span class="page1_translate_span_right">{{cpgtxt_save}}</span>
                        </div>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <div class="page1_translate_div" @click="PagePreview" style="cursor: pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-preview"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
                            <span class="page1_translate_span_right">{{cpgtxt_preview}}</span>
                        </div>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <div class="page1_translate_div" @click="PageRelease" style="cursor: pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-new-releases"><path d="M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z" fill="currentColor"></path></svg>
                            <span class="page1_translate_span_right">{{cpgtxt_release}}</span>
                        </div> &nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="page1_alarm_bar">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="mi:circle-warning"><g fill="none"><path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"></path><path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z" fill="currentColor"></path><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"></path></g></svg>
                    <span>{{cpgtxt_nosavenoappear}}</span>
                </div>
            </div>
        </div>

        <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
            <div class="page_register_tab">
                <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="organization">{{cpgtxt_organization}}</div>
            </div>
            <div class="page_register_tab">
                <div class="page1_content_side_bar_text" data-target="individual">{{cpgtxt_individual}}</div>
            </div>
            <div class="page_register_tab">
                <div class="page1_content_side_bar_text" data-target="studentregistration">{{cpgtxt_studentregistration}}</div>
            </div>
        </div>

        <div class="row">
            <!--organization-->
            <div class="col-md-12 page_slider_content_list active" id="organization">
                <form method="post" enctype="multipart/form-data" name="organization_frm" id="organization_frm">

                <div class="page1_content_content_bar">
                        <input type="hidden" name="transLang" id="organization_frm_transLang" value=""  >
                        <input type="hidden" name="register_organization_content_val" id="register_organization_content_val" value="en-1">
                        <div class="page1_content_content_title">{{cpgtxt_organization}} {{cpgtxt_bar}}</div>
                        <div class="page1_content_content page2_content_text">
                            <div class="row page2_row">
                                <div class="col-md-4">
                                    <span>{{cpgtxt_content}}</span>
                                </div>
                                <div class="col-md-7">
                                    <input type="text"  class="page2_input" name="register_organization_content" id="register_organization_content" placeholder="only teachers are allowed to register" value=""></input>
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-sm-4">
                                    <span>{{cpgtxt_maximumcharacters}}</span>
                                </div>
                                <div class="col-md-3">
                                    <input type="number" value="20"  class="page2_input" name="register_organization_maxline" id="register_organization_maxline">
                                </div>
                                <div class="col-md-3">
                                    {{cpgtxt_pleaseenter}} 0-100
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-sm-4">
                                    <span>{{cpgtxt_fontcolour}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="wwgp_organization_font_color_val" id="wwgp_organization_font_color_val" value="#000000">
                                    <div id="wwgp_organization_font_colorpicker"  data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius:10px; cursor: pointer; background: rgb(227, 13, 13);"></div>

                                </div>
                                <div class="col-md-4">
                                    <div id="wwgp_organization_font_color_value">#000000</div>
                                </div>
                            </div>

                            <div class="row page2_row">
                                <div class="col-sm-4">
                                    <span>{{cpgtxt_tab}}  {{cpgtxt_border}}  {{cpgtxt_color}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="wwgp_organization_border_color_val" id="wwgp_organization_border_color_val" value="#000000">
                                    <div id="wwgp_organization_border_colorpicker"  data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius:10px; cursor: pointer; background: rgb(227, 13, 13);"></div>
                                </div>
                                <div class="col-md-4">
                                    <div id="wwgp_organization_border_color_value">#000000</div>
                                </div>
                            </div>

                            <div class="row page2_row">
                                <div class="col-sm-4">
                                    <span>{{cpgtxt_tab}}  {{cpgtxt_background}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="wwgp_organization_back_color_val" id="wwgp_organization_back_color_val" value="#000000">
                                    <div id="wwgp_organization_back_colorpicker"  data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius:10px; cursor: pointer; background: rgb(227, 13, 13);"></div>
                                </div>
                                <div class="col-md-4">
                                    <div id="wwgp_organization_back_color_value">#000000</div>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="page1_content_content_bar">
                        <div class="page1_content_content_title">{{cpgtxt_advanced}} {{cpgtxt_css}}</div>
                        <div class="page1_content_content">
                            <div class="row">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_image}}</span>
                                </div>
                                <div class="col-md-3">
                                    <div style="display: none">
                                        <input type="hidden" name="organization_file_pre" id="organization_file_pre" value="">
                                        <input type="file" name="organization_file" id="organization_file" value="">
                                    </div>
                                    <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="organization_file_preview" onerror="this.src ='/images/noimg.png';">
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn page1_custom_btn" id="organization_file_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                        {{cbtntxt_edit}}
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>

                </form>
            </div>

            <!--individual-->
            <div class="col-md-12 page_slider_content_list" id="individual">
                <form method="post" enctype="multipart/form-data" name="individual_frm" id="individual_frm">

                <div class="page1_content_content_bar">
                        <input type="hidden" name="transLang" id="individual_frm_transLang" value=""  >
                        <input type="hidden" name="register_individual_content_val" id="register_individual_content_val" value="en-1">
                        <div class="page1_content_content_title">{{cpgtxt_individual}} {{cpgtxt_bar}}</div>
                        <div class="page1_content_content page2_content_text">
                            <div class="row page2_row">
                                <div class="col-md-4">
                                    <span>{{cpgtxt_content}}</span>
                                </div>
                                <div class="col-md-7">
                                    <input type="text"  class="page2_input" name="register_individual_content" id="register_individual_content" placeholder="only teachers are allowed to register" value=""></input>
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-sm-4">
                                    <span>{{cpgtxt_maximumcharacters}}</span>
                                </div>
                                <div class="col-md-3">
                                    <input type="number" value="20"  class="page2_input" name="register_individual_maxline" id="register_individual_maxline">
                                </div>
                                <div class="col-md-3">
                                    {{cpgtxt_pleaseenter}} 0-100
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-sm-4">
                                    <span>{{cpgtxt_fontcolour}}</span>
                                </div>
                                <div class="col-md-2">
                                        <input type="hidden" name="wwgp_individual_font_color_val" id="wwgp_individual_font_color_val" value="#000000">
                                        <div id="wwgp_individual_font_colorpicker"  data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius:10px; cursor: pointer; background: rgb(227, 13, 13);"></div>

                                </div>
                                <div class="col-md-4">
                                    <div id="wwgp_individual_font_color_value">#000000</div>
                                </div>
                            </div>

                            <div class="row page2_row">
                                <div class="col-sm-4">
                                    <span>{{cpgtxt_tab}}  {{cpgtxt_border}}  {{cpgtxt_color}}</span>
                                </div>
                                <div class="col-md-2">
                                        <input type="hidden" name="wwgp_individual_border_color_val" id="wwgp_individual_border_color_val" value="#000000">
                                        <div id="wwgp_individual_border_colorpicker"  data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius:10px; cursor: pointer; background: rgb(227, 13, 13);"></div>
                                </div>
                                <div class="col-md-4">
                                    <div id="wwgp_individual_border_color_value">#000000</div>
                                </div>
                            </div>

                            <div class="row page2_row">
                                <div class="col-sm-4">
                                    <span>{{cpgtxt_tab}}  {{cpgtxt_background}}</span>
                                </div>
                                <div class="col-md-2">
                                        <input type="hidden" name="wwgp_individual_back_color_val" id="wwgp_individual_back_color_val" value="#000000">
                                        <div id="wwgp_individual_back_colorpicker"  data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius:10px;  cursor: pointer; background: rgb(227, 13, 13);"></div>
                                </div>
                                <div class="col-md-4">
                                    <div id="wwgp_individual_back_color_value">#000000</div>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="page1_content_content_bar">
                        <div class="page1_content_content_title">{{cpgtxt_advanced}} {{cpgtxt_css}}</div>
                        <div class="page1_content_content">
                            <div class="row">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_image}}</span>
                                </div>
                                <div class="col-md-3">
                                    <div style="display: none">
                                        <input type="hidden" name="individual_file_pre" id="individual_file_pre" value="">
                                        <input type="file" name="individual_file" id="individual_file" value="">
                                    </div>
                                    <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="individual_file_preview" onerror="this.src ='/images/noimg.png';">
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn page1_custom_btn" id="individual_file_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                        {{cbtntxt_edit}}
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>

                </form>
            </div>

            <!--studentregistration-->
            <div class="col-md-12 page_slider_content_list" id="studentregistration">
                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="studentregistration_frm" id="studentregistration_frm">
                        <input type="hidden" name="transLang" id="studentregistration_frm_transLang" value=""  >
                        <div class="page1_content_content_title">{{cpgtxt_advanced}} {{cpgtxt_css}}</div>
                        <div class="page1_content_content">
                            <div class="row">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_image}}</span>
                                </div>
                                <div class="col-md-3">
                                    <div style="display: none">
                                        <input type="hidden" name="studentregistration_file_pre" id="studentregistration_file_pre" value="">
                                        <input type="file" name="studentregistration_file" id="studentregistration_file" value="">
                                    </div>
                                    <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="studentregistration_file_preview" onerror="this.src ='/images/noimg.png';">
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn page1_custom_btn" id="studentregistration_file_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                        {{cbtntxt_edit}}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
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
    .page1_content_content_bottom svg{
        color: #6b85e2;
    }
    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .page1_content_side_bar .page1_content_side_bar_text{
        cursor: pointer;
        height: auto;
        float: left;
    }
    .page1_content_side_bar{
        min-width: 10vw !important;
    }
    #addpic_btn{
        height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;
    }
    .page_register_tab{
        width: 150px;
    }
</style>

<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var preview='';
    var tabstatus=0;
    var vueOBJ=null;
    var transedlang='';
    var wwgfield='organization';
    var pgtxt_selectlanguagesave = "";

    function initorganization() {
        const wwgp_organization_font_colorpicker = document.getElementById('wwgp_organization_font_colorpicker');
        let pickercolor = new ColorPicker(wwgp_organization_font_colorpicker, '#000000');
        wwgp_organization_font_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgp_organization_font_color_value').text(color);
            $('#wwgp_organization_font_color_val').val(color);
        });

        const wwgp_organization_border_colorpicker = document.getElementById('wwgp_organization_border_colorpicker');
        let pickerborder = new ColorPicker(wwgp_organization_border_colorpicker, '#000000');
        wwgp_organization_border_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgp_organization_border_color_value').text(color);
            $('#wwgp_organization_border_color_val').val(color);
        });

        const wwgp_organization_back_colorpicker = document.getElementById('wwgp_organization_back_colorpicker');
        let pickerbk = new ColorPicker(wwgp_organization_back_colorpicker, '#000000');
        wwgp_organization_back_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgp_organization_back_color_value').text(color);
            $('#wwgp_organization_back_color_val').val(color);
        });

        $('input#register_organization_content').on('keyup', function() {

            var lengthOfText = $(this).val().replace(/\s/g, '').length;
            var maxnum = $('#register_organization_maxline').val();
            if(lengthOfText > maxnum)
                alert('Maximum Characters Per Number '+maxnum+'.');

        });

        $('#organization_file_upbtn').click(function () {
            $('#organization_file').trigger('click');
        });
        $('#organization_file').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#organization_file_preview').attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    function  getorganizationData() {
        $.ajax({
            url: 'admin.wwgpGetRegisterOrg',
            data:{
                transLang:transedlang
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg=="ok"){
                    if(data.item!='')
                    {
                        var dt = data.item;
                        dt = $.parseJSON(dt);
                        var ct = decodeURIComponent(dt.help);
                        $('#register_organization_content').val(ct);
                        $('#register_organization_maxline').val(dt.maxline);

                        $('#wwgp_organization_font_color_val').val(dt.fontcolor);
                        $('#wwgp_organization_font_color_value').text(dt.fontcolor);
                        $('#wwgp_organization_font_colorpicker').css('background',dt.fontcolor);

                        $('#wwgp_organization_border_color_value').text(dt.bordercolor);
                        $('#wwgp_organization_border_color_val').val(dt.bordercolor);
                        $('#wwgp_organization_border_colorpicker').css('background',dt.bordercolor);

                        $('#wwgp_organization_back_color_value').text(dt.backcolor);
                        $('#wwgp_organization_back_color_val').val(dt.backcolor);
                        $('#wwgp_organization_back_colorpicker').css('background',dt.backcolor);

                        if(dt.advancss!='')
                        {
                            $('#organization_file_preview').attr('src','/uploads/images/waaupimg/'+dt.advancss);
                            $('#organization_file_pre').val(dt.advancss);
                        }

                        if(transedlang!=null && transedlang !=''){
                            $('.page1_alarm_bar').addClass('active');
                            $('.page1_alarm_bar span').text('Save  Appear');
                        }
                    }
                }
                else
                    alert(data.msg);
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });

    }

    function initindividual() {
        const wwgp_individual_font_colorpicker = document.getElementById('wwgp_individual_font_colorpicker');
        let pickercolor = new ColorPicker(wwgp_individual_font_colorpicker, '#000000');
        wwgp_individual_font_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgp_individual_font_color_value').text(color);
            $('#wwgp_individual_font_color_val').val(color);
        });

        const wwgp_individual_border_colorpicker = document.getElementById('wwgp_individual_border_colorpicker');
        let pickerborder = new ColorPicker(wwgp_individual_border_colorpicker, '#000000');
        wwgp_individual_border_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgp_individual_border_color_value').text(color);
            $('#wwgp_individual_border_color_val').val(color);
        });

        const wwgp_individual_back_colorpicker = document.getElementById('wwgp_individual_back_colorpicker');
        let pickerbk = new ColorPicker(wwgp_individual_back_colorpicker, '#000000');
        wwgp_individual_back_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgp_individual_back_color_value').text(color);
            $('#wwgp_individual_back_color_val').val(color);
        });


        $('input#register_individual_content').on('keyup', function() {

            var lengthOfText = $(this).val().replace(/\s/g, '').length;
            var maxnum = $('#register_individual_maxline').val();
            if(lengthOfText > maxnum)
                alert('Maximum Characters Per Number '+maxnum+'.');

        });

        $('#individual_file_upbtn').click(function () {
            $('#individual_file').trigger('click');
        });
        $('#individual_file').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#individual_file_preview').attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });

    }

    function getindividualData() {
        $.ajax({
            url: 'admin.wwgpGetRegisterInd',
            data:{
                transLang:transedlang
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg=="ok"){
                    if(data.item!='')
                    {
                        var dt = data.item;
                        dt = $.parseJSON(dt);
                        var ct = decodeURIComponent(dt.help);
                        $('#register_individual_content').val(ct);
                        $('#register_individual_maxline').val(dt.maxline);

                        $('#wwgp_individual_font_color_val').val(dt.fontcolor);
                        $('#wwgp_individual_font_color_value').text(dt.fontcolor);
                        $('#wwgp_individual_font_colorpicker').css('background',dt.fontcolor);

                        $('#wwgp_individual_border_color_value').text(dt.bordercolor);
                        $('#wwgp_individual_border_color_val').val(dt.bordercolor);
                        $('#wwgp_individual_border_colorpicker').css('background',dt.bordercolor);

                        $('#wwgp_individual_back_color_value').text(dt.backcolor);
                        $('#wwgp_individual_back_color_val').val(dt.backcolor);
                        $('#wwgp_individual_back_colorpicker').css('background',dt.backcolor);

                        if(dt.advancss!='')
                        {
                            $('#individual_file_preview').attr('src','/uploads/images/waaupimg/'+dt.advancss);
                            $('#individual_file_pre').val(dt.advancss);
                        }

                        if(transedlang!=null && transedlang !=''){
                            $('.page1_alarm_bar').addClass('active');
                            $('.page1_alarm_bar span').text('Save  Appear');
                        }
                    }
                }
                else
                    alert(data.msg);
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function initStudentregistration() {
        $('#studentregistration_file_upbtn').click(function () {
            $('#studentregistration_file').trigger('click');
        });
        $('#studentregistration_file').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#studentregistration_file_preview').attr('src', e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    function getStudentregistrationData() {
        $.ajax({
            url: 'admin.wwgpGetRegisterStd',
            data:{
                transLang:transedlang
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.msg=="ok")
                {
                    if(data.content!='')
                    {
                        $('#studentregistration_file_preview').attr('src','/uploads/images/waaupimg/'+data.content);
                        $('#studentregistration_file_pre').val(data.content);

                        if(transedlang!=null && transedlang !=''){
                            $('.page1_alarm_bar').addClass('active');
                            $('.page1_alarm_bar span').text('Save  Appear');
                        }
                    }
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
        name: "WebsWesGlobalPagesRegister",
        /* components: {
             CKEditor
         },*/
        data(){
            return {
                pageid:'webs-wesglobal-pages-register-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_pages:'',
                musususu_webs_wesglobal_pages_register:'',
                pgtxt_translation:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_korean:'',
                pgtxt_chinese:'',
                pgtxt_english:'',
                pgtxt_nosavenoappear:'',
                pgtxt_organization:'',
                pgtxt_individual:'',
                pgtxt_studentregistration:'',
                pgtxt_css:'',
                pgtxt_bar:'',
                pgtxt_pleaseenter:'',
                pgtxt_font:'',
                pgtxt_content:'',
                pgtxt_background:'',
                btntxt_add:'',
                pgtxt_maximumcharactersperline:'',
                pgtxt_maximumcharacterspernumber:'',
                pgtxt_color:'',
                pgtxt_tab:'',
                pgtxt_border:'',
                pgtxt_index:'',
                pgtxt_page:'',
                pgtxt_advanced:'',
                pgtxt_fontcolour:'',
                pgtxt_image:'',
                btntxt_edit:'',
                pgtxt_dbsaved:'',
                pgtxt_previewpage:'',
                pgtxt_releasesuccess:'',
                pgtxt_selectlanguagesave:'',
            }
        },
        created() {

        },
        beforeMount(){
        },
        computed: {
            cmususu_webs_wesglobal_pages:function () {
                return this.mususu_webs_wesglobal_pages
            },
            cmusususu_webs_wesglobal_pages_register:function () {
                return this.musususu_webs_wesglobal_pages_register
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_wesglobal:function () {
                return this.musu_webs_wesglobal
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
            cpgtxt_korean:function () {
                return this.pgtxt_korean
            },
            cpgtxt_chinese:function () {
                return this.pgtxt_chinese
            },
            cpgtxt_english:function () {
                return this.pgtxt_english
            },
            cpgtxt_nosavenoappear:function () {
                return this.pgtxt_nosavenoappear
            },
            cpgtxt_organization:function () {
                return this.pgtxt_organization
            },
            cpgtxt_individual:function () {
                return this.pgtxt_individual
            },
            cpgtxt_studentregistration:function () {
                return this.pgtxt_studentregistration
            },
            cpgtxt_pleaseenter:function () {
                return this.pgtxt_pleaseenter
            },
            cpgtxt_font:function () {
                return this.pgtxt_font
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cpgtxt_background:function () {
                return this.pgtxt_background
            },
            cpgtxt_maximumcharacters  :function () {
                return this.pgtxt_maximumcharactersperline
            },
            cpgtxt_maximumcharacterspernumber:function () {
                return this.pgtxt_maximumcharacterspernumber
            },
            cpgtxt_color:function () {
                return this.pgtxt_color
            },
            cpgtxt_tab:function () {
                return this.pgtxt_tab
            },
            cpgtxt_border:function () {
                return this.pgtxt_border
            },
            cpgtxt_index:function () {
                return this.pgtxt_index
            },
            cpgtxt_page:function () {
                return this.pgtxt_page
            },
            cpgtxt_bar:function () {
                return this.pgtxt_bar
            },
            cpgtxt_css:function () {
                return this.pgtxt_css
            },
            cpgtxt_fontcolour:function () {
                return this.pgtxt_fontcolour
            },
            cpgtxt_image:function () {
                return this.pgtxt_image
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cpgtxt_advanced:function () {
                return this.pgtxt_advanced
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
            this.getWWGStoredLang();
            this.initpage();
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

                            $('.page1_translate_span').click(function ()
                            {
                                $('.page1_translate_span').removeClass('active');
                                $(this).addClass('active');

                                var cont = $(this).attr('data-cont');
                                var len= cont.split('-').length;
                                if(len > 0)
                                {
                                    var sky = cont.split('-')[0]+'-'+cont.split('-')[1];
                                    transedlang = sky;
                                    $('.page1_alarm_bar').removeClass('active');
                                    $('.page1_alarm_bar span').text('No Save No Appear');

                                    if(wwgfield=='organization')
                                        getorganizationData();
                                    else if(wwgfield=='individual')
                                        getindividualData();
                                    else if(wwgfield=='studentregistration')
                                        getStudentregistrationData();
                                }
                            });
                        }

                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            initpage() {
                this.sliderTabs();
                getorganizationData();
                $('.page1_alarm_bar span').text('No Save No Appear');
                $('.page1_alarm_bar').removeClass('active');
            }//initpage
            ,
            sliderTabs()
            {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function()
                {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_slider_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    $('.page1_alarm_bar span').text('No Save No Appear');
                    $('.page1_alarm_bar').removeClass('active');
                    $('.page1_translate_span').removeClass('active');

                    transedlang='';
                    if(subid=='organization')
                    {
                        tabstatus=0;
                        wwgfield='organization';
                        getorganizationData();
                    }
                    else if(subid=='individual'){
                        tabstatus=1;
                        wwgfield='individual';
                        getindividualData();
                    }
                    else if(subid=='studentregistration'){
                        tabstatus=2;
                        wwgfield='studentregistration';
                        getStudentregistrationData();
                    }
                });
                initorganization();
                initindividual();
                initStudentregistration();
            },
            SavePageContent(){
                var pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                if(tabstatus==0)
                {
                    var ct = $('#register_organization_content').val();
                    ct = encodeURIComponent(ct);
                    $('#register_organization_content_val').val(ct);
                    $("#organization_frm_transLang").val(transedlang);
                    var  formData = new FormData($("#organization_frm")[0]);
                    $.ajax({
                        url: 'admin.wwgpRegisterOrg',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if(data.msg=="ok"){
                                alert(pgtxt_dbsaved);
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
                }
                else if(tabstatus==1)
                {
                    var ct = $('#register_individual_content').val();
                    ct = encodeURIComponent(ct);
                    $('#register_individual_content_val').val(ct);
                    $("#individual_frm_transLang").val(transedlang);
                    var  formData = new FormData($("#individual_frm")[0]);
                    $.ajax({
                        url: 'admin.wwgpRegisterInd',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if(data.msg=="ok"){
                                alert(pgtxt_dbsaved);
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
                }
                else if(tabstatus==2)
                {
                    var ct = $('#register_individual_content').val();
                    ct = encodeURIComponent(ct);
                    $('#register_individual_content_val').val(ct);
                    $("#individual_frm_transLang").val(transedlang);

                    var formData = new FormData($("#studentregistration_frm")[0]);
                    $.ajax({
                        url: 'admin.wwgpRegisterStd',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if(data.msg=="ok"){
                                alert(pgtxt_dbsaved);
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
                }

            }//save
            ,PagePreview(){
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
                if(transedlang=='')
                {
                    alert(pgtxt_selectlanguagesave);
                    return;
                }

                var pgtxt_releasesuccess= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
                var pgtxt_release= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');
                if (window.confirm(pgtxt_release)){
                    $.ajax({
                        url: 'admin.wwgpRegisterRelease',
                        type: 'POST',
                        data: {
                            trans:transedlang,
                            tabstatus:tabstatus,
                            release:1
                        },
                        success: function (data) {
                            if(data.msg=="ok"){
                                alert(pgtxt_releasesuccess);
                            }
                            else
                                alert(data.msg);
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                    });
                }
                else {
                    $.ajax({
                        url: 'admin.wwgpRegisterRelease',
                        type: 'POST',
                        data: {
                            trans:transedlang,
                            tabstatus:tabstatus,
                            release:0
                        },
                        success: function (data) {

                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                    });
                }

            },

        }//method


    }
</script>
