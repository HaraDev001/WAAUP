<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmususu_system_suser_registered}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_system}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_bsuser}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_system_suser_registered}}
                          <a href="#" id="system-suser-registered-fav" data-status="off" data-page-info="Registered_system-suser-registered">
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
                        <!--translation langs-->
                    </div>
                    <div class="page1_translate_bar_right">
                        <span class="page1_translate_span_right cursor-pointer" id="wwga_save" @click="SavePageContent">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em"  style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:sharp-save-alt"><path d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z" fill="currentColor"></path></svg>
                            {{cpgtxt_save}}
                        </span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <span class="page1_translate_span_right cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-preview"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
                            {{cpgtxt_preview}}
                        </span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <span class="page1_translate_span_right cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-new-releases"><path d="M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z" fill="currentColor"></path></svg>
                            {{cpgtxt_release}}
                        </span>&nbsp;&nbsp;&nbsp;
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

<!--        <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
            <div class="bsuser_registered_tab">
                <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="appearancebar">{{cpgtxt_appearance}}</div>
            </div>
            <div class="bsuser_registered_tab">
                <div class="page1_content_side_bar_text" data-target="settingbar">{{cpgtxt_setting}}</div>
            </div>
        </div>

        <div class="row">
            &lt;!&ndash;appearance&ndash;&gt;
            <div class="col-md-12 page_slider_content_list active" id="appearancebar">
                <form method="post" enctype="multipart/form-data" name="appearance_frm" id="appearance_frm">
                    <div class="page1_content_content_bar">
                        <input type="hidden" name="transLang" id="appearance_frm_transLang" value="">
                        <input type="hidden" name="registered_appearance_content_val" id="registered_appearance_content_val" value="en-1">
                        <div class="page1_content_content_title">{{cpgtxt_instructionbar}}</div>
                        <div class="page1_content_content page2_content_text">
                            &lt;!&ndash;content&ndash;&gt;
                            <div class="row page2_row">
                                <div class="col-md-3">
                                    <span>{{cpgtxt_content}}</span>
                                </div>
                                <div class="col-md-7">
                                    <input type="text" class="page2_input" name="ssr_appearance_content" id="ssr_appearance_content" placeholder="only teachers are allowed to register" value="" />
                                </div>
                            </div>
                            &lt;!&ndash;maximum characters&ndash;&gt;
                            <div class="row page2_row">
                                <div class="col-md-3">
                                    <span>{{cpgtxt_maximumcharacters}}</span>
                                </div>
                                <div class="col-md-4">
                                    <input type="number" value="20" class="page2_input" name="ssr_appearance_maxline" id="ssr_appearance_maxline">
                                </div>
                                <div class="col-md-5">
                                    {{cpgtxt_pleaseenter}} 0 - 100
                                </div>
                            </div>
                            &lt;!&ndash;font colour&ndash;&gt;
                            <div class="row page2_row">
                                <div class="col-md-3">
                                    <span>{{cpgtxt_fontcolour}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="ssr_appearance_font_color_val" id="ssr_appearance_font_color_val" value="#000000">
                                    <div id="ssr_appearance_font_colorpicker" data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius: 10px; cursor: pointer; background-color: rgb(227, 13, 13);" />
                                </div>
                                <div class="col-md-5">
                                    <div id="ssr_appearance_font_color_value">#000000</div>
                                </div>
                            </div>
                            &lt;!&ndash;tab border color&ndash;&gt;
                            <div class="row page2_row">
                                <div class="col-md-3">
                                    <span>{{cpgtxt_tab}}  {{cpgtxt_border}}  {{cpgtxt_color}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="ssr_appearance_border_color_val" id="ssr_appearance_border_color_val" value="#000000">
                                    <div id="ssr_appearance_border_colorpicker" data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius: 10px; cursor: pointer; background-color: rgb(227, 13, 13);" />
                                </div>
                                <div class="col-md-5">
                                    <div id="ssr_appearance_border_color_value">#000000</div>
                                </div>
                            </div>
                            &lt;!&ndash;tab background&ndash;&gt;
                            <div class="row page2_row">
                                <div class="col-md-3">
                                    <span>{{cpgtxt_tab}}  {{cpgtxt_background}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="ssr_appearance_back_color_val" id="ssr_appearance_back_color_val" value="#000000">
                                    <div id="ssr_appearance_back_colorpicker" data-color="#000000" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; border-radius: 10px; cursor: pointer; background-color: rgb(227, 13, 13);"></div>
                                </div>
                                <div class="col-md-4">
                                    <div id="ssr_appearance_back_color_value">#000000</div>
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
                                        <input type="hidden" name="ssr_appearance_file_pre" id="ssr_appearance_file_pre" value="">
                                        <input type="file" name="ssr_appearance_file" id="ssr_appearance_file" value="">
                                    </div>
                                    <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="ssr_appearance_file_preview" onerror="this.src ='/images/noimg.png';">
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn page1_custom_btn" id="ssr_appearance_file_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                        {{cbtntxt_edit}}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            &lt;!&ndash;setting&ndash;&gt;
            <div class="col-md-12 page_slider_content_list" id="settingbar">
                <form method="post" enctype="multipart/form-data" name="setting_frm" id="setting_frm">
                    <div class="page1_content_content_bar">
                        <input type="hidden" name="transLang" id="setting_frm_transLang" value="">
                        <input type="hidden" name="registered_setting_content_val" id="registered_setting_content_val" value="en-1">
                        <div class="page1_content_content_title">{{cpgtxt_link}}</div>
                        <div class="page1_content_content page2_content_text">
                            <div class="row page2_row">
                                <div class="col-md-3">
                                    <span>{{cpgtxt_content}}</span>
                                </div>
                                <div class="col-md-7">
                                    <textarea  placeholder="only teachers are allowed to register" class="page2_input login_instruction_content" name="ssr_setting_content" id="ssr_setting_content" value=""></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="page1_content_content_bar">
                        <input type="hidden" name="ssr_setting_headbar_val" id="ssr_setting_headbar_val" value="">
                        <div class="page1_content_content_title">{{cpgtxt_sms}}</div>
                        <div class="page1_content_content page2_content_text">
                            <div class="row page2_row">
                                <div class="col-md-3">
                                    <span>{{cpgtxt_sua_Country}}</span>
                                </div>
                                <div class="col-md-9">
                                    <div id="ssr_setting_country_section" style="display: flex; align-content: flex-start">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>-->
    </div>
</template>
<style>
    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .page1_content_side_bar .page1_content_side_bar_text{
        cursor: pointer;
        float: left;
    }
    .form-check-input.rect-group{
        width: 16px;height: 16px; border: 1px solid #bbbbbb;
        cursor: pointer;
    }
    .form-check-input.rect-group > div{
        width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;
    }
    .form-check-input.rect-group.active > div{
        width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;
    }
    .bsuser_registered_tab{
        width: 120px;
    }
</style>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import axios from "axios";
    import Lang_module from "../../assets/jsfunc/lang_module";
    import nav_module from "../../assets/jsfunc/nav_module";


    var vueOBJ = null;
    var tabstatus = 0;
    var transedlang = "";
    var ssr_field = "appearance";
    var pgtxt_selectlanguage = "";
    var pgtxt_selectlanguagesave = "";

    function getappearanceData() {
        var trans = transedlang;
        if(transedlang = "")
            trans = "en-1";
        $.ajax({
            url: 'admin.ssrGetAppearance',
            data: {
                transLang: trans
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.item != "") {
                        var dt = data.item;
                        if(dt != null && dt != "") {
                            dt = $.parseJSON(dt);
                            var ct = decodeURIComponent(dt.help);
                            $("#ssr_appearance_content").val(ct);
                            $("#ssr_appearance_maxline").val(dt.maxline);

                            $("#ssr_appearance_font_color_val").val(dt.fontcolor);
                            $("#ssr_appearance_font_color_value").text(dt.fontcolor);
                            $("#ssr_appearance_font_colorpicker").css("background", dt.fontcolor);

                            $("#ssr_appearance_border_color_val").val(dt.bordercolor);
                            $("#ssr_appearance_border_color_value").text(dt.bordercolor);
                            $("#ssr_appearance_border_colorpicker").css("background", dt.bordercolor);

                            $("#ssr_appearance_back_color_val").val(dt.backcolor);
                            $("#ssr_appearance_back_color_value").text(dt.backcolor);
                            $("#ssr_appearance_back_colorpicker").css("background", dt.backcolor);

                            if (dt.advancss != "") {
                                $("#ssr_appearance_file_preview").attr("src", "/uploads/images/waaupimg/" + dt.advancss);
                                $("#ssr_appearance_file_pre").val(dt.advancss);
                            }
                        }
                    }
                } else {
                    alert(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    /*function initappearance() {
        const ssr_appearance_font_colorpicker = document.getElementById("ssr_appearance_font_colorpicker");
        let pickercolor = new ColorPicker(ssr_appearance_font_colorpicker, "#000000");
        ssr_appearance_font_colorpicker.addEventListener("colorChange", function (event) {
            const color = event.detail.color.hexa;
            $("#ssr_appearance_font_color_value").text(color);
            $("#ssr_appearance_font_color_val").val(color);
        });

        const ssr_appearance_border_colorpicker = document.getElementById("ssr_appearance_border_colorpicker");
        let pickerborder = new ColorPicker(ssr_appearance_border_colorpicker, "#000000");
        ssr_appearance_border_colorpicker.addEventListener("colorChange", function (event) {
            const color = event.detail.color.hexa;
            $("#ssr_appearance_border_color_value").text(color);
            $("#ssr_appearance_border_color_val").val(color);
        });

        const ssr_appearance_back_colorpicker = document.getElementById("ssr_appearance_back_colorpicker");
        let pickerbk = new ColorPicker(ssr_appearance_back_colorpicker, "#000000");
        ssr_appearance_back_colorpicker.addEventListener("colorChange", function (event) {
            const color = event.detail.color.hexa;
            $("#ssr_appearance_back_color_value").text(color);
            $("#ssr_appearance_back_color_val").val(color);
        });

        $("input#ssr_appearance_content").on("keyup", function () {
            var lengthOfText = $(this).val().replace(/\s/g, '').length;
            var maxnum = $("#ssr_appearance_maxline").val();
            if (lengthOfText > maxnum)
                alert("Maximum Characters Per Number " + maxnum + ".");
        });

        $("#ssr_appearance_file_upbtn").click(function () {
            if(transedlang===''){
                alert(pgtxt_selectlanguage);
                return;
            }
            $("#ssr_appearance_file").trigger("click");
        });
        $("#ssr_appearance_file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#ssr_appearance_file_preview").attr("src", e.target.result);
                }
                reader.readAsDataURL(this.files[0]);
            }
        })
    }*/

    /*function getsettingData() {
        var trans = transedlang;
        if(transedlang = "")
            trans = "en-1";
        $.ajax({
            url: 'admin.ssrGetSetting',
            data: {
                transLang: trans
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.sms != "") {
                        let lists = data.sms;
                        var tags = "";
                        var header_val = "";

                        Object.keys(lists).forEach(function (element) {
                            tags += "<div class='input-group w-25' style='line-height: 24px'>";
                                tags += "<div class='form-check' style='margin-top: 5px;'>";
                                    tags += "<div id='" + lists[element].name + "' data-num='ssr_setting_country_check_" + lists[element].name + "' class='form-check-input rect-group'>";
                                        tags += "<div></div>";
                                    tags += "</div>";
                                    tags += "<label class='form-check-label m-l-10'>" + lists[element].name + "</label>";
                                tags += "</div>";
                            tags += "</div>";
                        });

                        $("#ssr_setting_country_section").html(tags);

                        $("div[data-num^='ssr_setting_country_check_']").click(function () {
                            if ($(this).hasClass("active")) {
                                var thisid = $(this).attr("id");
                                var sval = $("#ssr_setting_headbar_val").val();

                                if (sval != "") {
                                    var sval_list = sval.split(":");
                                    var tmp_list = "";

                                    if (sval_list.length > 0)
                                    {
                                        for (var i = 0; i < sval_list.length; i ++)
                                        {
                                            var item = sval_list[i];
                                            if (item != thisid) {
                                                if (tmp_list === "") {
                                                    tmp_list = item;
                                                } else {
                                                    tmp_list += ":" + item;
                                                }
                                            }
                                        }
                                        $("#ssr_setting_headbar_val").val(tmp_list);
                                    }
                                } else {
                                    if (sval == thisid)
                                        $("#ssr_setting_headbar_val").val("");
                                }

                                $(this).removeClass("active");
                            } else {
                                var thisid = $(this).attr("id");
                                var sval = $("#ssr_setting_headbar_val").val();
                                if (sval == "") {
                                    sval = thisid;
                                } else {
                                    sval += ":"+thisid;
                                }
                                $("#ssr_setting_headbar_val").val(sval);
                                $(this).addClass("active");
                            }
                        });

                    }

                    if (data.item != "") {
                        var dt = data.item;
                        dt = $.parseJSON(dt);
                        var ct = decodeURIComponent(dt.help);
                        $("#ssr_setting_content").val(ct);

                        var countrylist = dt.sms;

                        if (countrylist == "" || countrylist == null) {

                        } else {
                            var sval_list = countrylist.split(":");

                            if (sval_list.length > 0)
                            {
                                for (var i = 0; i < sval_list.length; i ++)
                                {
                                    var item = sval_list[i];

                                    if (header_val == "")
                                        header_val = item;
                                    else
                                        header_val += ":"+item;

                                    item = "ssr_setting_country_check_" + item;

                                    $("div[data-num^='"+item+"']").addClass("active");
                                }

                                $("#ssr_setting_headbar_val").val(header_val);
                            }
                        }

                    }
                } else {
                    alert(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }*/

    function initsetting() {

    }

    export default {
        components: {Lang_module},
        data() {
            return {
                pageid: 'system-suser-registered-fav',
                mususu_system_suser_account: '',
                mu_system: '',
                musu_system_bsuser: '',
                mususu_system_suser_registered: '',
                pgtxt_translation: '',
                pgtxt_save: '',
                pgtxt_preview: '',
                pgtxt_release: '',
                pgtxt_setting: '',
                pgtxt_appearance: '',
                pgtxt_content: '',
                pgtxt_maximumcharacters: '',
                pgtxt_pleaseenter: '',
                pgtxt_fontcolour: '',
                pgtxt_tab: '',
                pgtxt_border: '',
                pgtxt_color: '',
                pgtxt_background: '',
                pgtxt_advanced: '',
                pgtxt_css: '',
                pgtxt_image: '',
                btntxt_edit: '',
                pgtxt_link: '',
                pgtxt_sms: '',
                pgtxt_sua_Country: '',
                pgtxt_instructionbar: '',
                pgtxt_nosavenoappear: '',
                pgtxt_dbsaved:'',
                pgtxt_selectlanguage: '',
                pgtxt_selectlanguagesave: '',

            }
        },
        computed: {
            title: function () {
                return this.$store.state.curMenu
            },
            cmususu_system_suser_account: function () {
                return this.mususu_system_suser_account;
            },
            cmu_system: function () {
                return this.mu_system;
            },
            cmusu_system_bsuser: function () {
                return this.musu_system_bsuser;
            },
            cmususu_system_suser_registered: function () {
                return this.mususu_system_suser_registered;
            },
            cpgtxt_translation: function () {
                return this.pgtxt_translation;
            },
            cpgtxt_save: function () {
                return this.pgtxt_save;
            },
            cpgtxt_preview: function () {
                return this.pgtxt_preview;
            },
            cpgtxt_release: function () {
                return this.pgtxt_release;
            },
            cpgtxt_setting: function () {
                return this.pgtxt_setting;
            },
            cpgtxt_appearance: function () {
                return this.pgtxt_appearance;
            },
            cpgtxt_content: function () {
                return this.pgtxt_content;
            },
            cpgtxt_maximumcharacters: function () {
                return this.pgtxt_maximumcharacters;
            },
            cpgtxt_pleaseenter: function () {
                return this.pgtxt_pleaseenter;
            },
            cpgtxt_fontcolour: function () {
                return this.pgtxt_fontcolour;
            },
            cpgtxt_tab: function () {
                return this.pgtxt_tab;
            },
            cpgtxt_border: function () {
                return this.pgtxt_border;
            },
            cpgtxt_color: function () {
                return this.pgtxt_color;
            },
            cpgtxt_background: function () {
                return this.pgtxt_background;
            },
            cpgtxt_advanced: function () {
                return this.pgtxt_advanced;
            },
            cpgtxt_css: function () {
                return this.pgtxt_css;
            },
            cpgtxt_image: function () {
                return this.pgtxt_image;
            },
            cbtntxt_edit: function () {
                return this.btntxt_edit;
            },
            cpgtxt_link: function () {
                return this.pgtxt_link;
            },
            cpgtxt_sms: function () {
                return this.pgtxt_sms;
            },
            cpgtxt_sua_Country: function () {
                return this.pgtxt_sua_Country;
            },
            cpgtxt_instructionbar: function () {
                return this.pgtxt_instructionbar;
            },
            cpgtxt_nosavenoappear: function () {
                return this.pgtxt_nosavenoappear;
            },
            cpgtxt_dbsaved: function () {
                return this.pgtxt_dbsaved;
            },

            contentchange: function () {
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
                    if (obj.hasOwnProperty(key)) {
                        obj[key] = value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
	    created() {

        },
        mounted() {
            vueOBJ = this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);

            pgtxt_selectlanguage = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguage');
            pgtxt_selectlanguagesave = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
            this.getWWGStoredLang();
            this.sliderTabs();
            //getappearanceData();
        },
        methods: {
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }

            },
            SavePageContent() {
                /*var tlang = $('#wwga_tranedLang').val();
                if(tlang == "" || tlang == null){
                    alert(pgtxt_selectlanguagesave);
                    return;
                }
                var pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                if (tabstatus == 0) {
                    var ct = $('#ssr_appearance_content').val();
                    ct = encodeURIComponent(ct);
                    $('#registered_appearance_content_val').val(ct);
                    var formData = new FormData($('#appearance_frm')[0]);
                    $.ajax({
                        url: 'admin.ssrRegisterAppearance',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if (data.msg === "ok") {
                                alert(pgtxt_dbsaved);
                            } else {
                                alert(data.msg);
                            }
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false,
                    });
                } else if (tabstatus == 1) {
                    var ct = $('#ssr_setting_content').val();
                    ct = encodeURIComponent(ct);
                    $('#registered_setting_content_val').val(ct);
                    $('#setting_frm_transLang').val(transedlang);

                    var formData = new FormData($('#setting_frm')[0]);
                    $.ajax({
                        url: 'admin.ssrRegisterSetting',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if (data.msg === "ok") {
                                alert(pgtxt_dbsaved);
                            } else {
                                alert(data.msg);
                            }
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false,
                    });
                }*/
            },
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
                                    $('#wwga_tranedLang').val(transedlang);
                                    $(".page1_alarm_bar").addClass("active");
                                    $(".page1_alarm_bar span").text("Save  Appear");

                                    if (ssr_field == "appearance") {
                                        getappearanceData();
                                    } else if (ssr_field == "setting") {
                                        getsettingData();
                                    }
                                }
                            });
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            sliderTabs() {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_slider_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    $('.page1_alarm_bar span').text("No Save No Appear");
                    $(".page1_alarm_bar").removeClass("active");
                    $(".page1_translate_span").removeClass("active");

                    transedlang = "";
                    if (subid == 'appearancebar')
                    {
                        tabstatus = 0;
                        ssr_field = "appearance";
                        //getappearanceData();
                    }
                    else if (subid == 'settingbar')
                    {
                        tabstatus = 1;
                        ssr_field = "setting";
                        //getsettingData();
                    }
                });

                //initappearance();
                //initsetting();
            },
        }
    }
</script>
