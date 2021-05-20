<template>
    <div style="width: 100%">
        <div style="display: none">{{contentchange}}</div>

        <div class="row">
            <div class="col-md-12 page_front_content_list active" id="frontpage_register">
                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="ssb_frontpage_register_frm" id="ssb_frontpage_register_frm">
                        <input type="hidden" name="ssb_frontpage_register_tip_val" id="ssb_frontpage_register_tip_val" value="">
                        <div class="page1_content_content_title">{{cpgtxt_setting}}</div>
                        <div class="page1_content_content page2_content_text">
                            <div class="row page2_row">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_background}}</span>
                                </div>
                                <div class="col-md-2">
                                    <div style="display: none">
                                        <input type="hidden" name="ssb_frontpage_regback_pre" id="ssb_frontpage_regback_pre" value="">
                                        <input type="file" name="ssb_frontpage_regback" id="ssb_frontpage_regback" value="">
                                    </div>
                                    <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="ssb_frontpage_regback_preview" onerror="this.src ='/images/noimg.png';">
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn page1_custom_btn" id="ssb_frontpage_regback_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                        {{cbtntxt_edit}}
                                    </button>
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_logo}}</span>
                                </div>
                                <div class="col-md-2">
                                    <div style="display: none">
                                        <input type="hidden" name="ssb_frontpage_reglogo_pre" id="ssb_frontpage_reglogo_pre" value="">
                                        <input type="file" name="ssb_frontpage_reglogo" id="ssb_frontpage_reglogo" value="">
                                    </div>
                                    <img src="/images/icons/image_tp.png" style="width: 100px;" alt="" id="ssb_frontpage_reglogo_preview" onerror="this.src ='/images/noimg.png';">
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn page1_custom_btn" id="ssb_frontpage_reglogo_upbtn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                        {{cbtntxt_edit}}
                                    </button>
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_tip}}</span>
                                </div>
                                <div class="col-md-5">
                                    <textarea  placeholder="" class="form-control border-input-text" name="ssb_frontpage_register_tip" id="ssb_frontpage_register_tip" style="min-height: 60px;" value=""></textarea>
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-sm-2">
                                    <span>{{cpgtxt_fontcolour}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="ssb_frontpage_register_font_color_val" id="ssb_frontpage_register_font_color_val" value="#ffffff">
                                    <div id="ssb_frontpage_register_font_colorpicker"  data-color="#ffffff" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; cursor: pointer; background: rgb(227, 13, 13);"></div>

                                </div>
                                <div class="col-md-4">
                                    <div id="ssb_frontpage_register_font_color_value">#ffffff</div>
                                </div>
                            </div>

                            <div class="row page2_row">
                                <div class="col-sm-2">
                                    <span>{{cbtntxt_theme}} {{cpgtxt_color}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="ssb_frontpage_register_theme_color_val" id="ssb_frontpage_register_theme_color_val" value="#104f8e">
                                    <div id="ssb_frontpage_register_theme_colorpicker"  data-color="#104f8e" style="border: 1px solid #aaaaaa; width: 70px; height: 75%; cursor: pointer; background: rgb(227, 13, 13);"></div>
                                </div>
                                <div class="col-md-4">
                                    <div id="ssb_frontpage_register_theme_color_value">#104f8e</div>
                                </div>
                            </div>

                            <div class="row page2_row">
                                <div class="col-sm-2">
                                    <span>{{cpgtxt_back}}  {{cpgtxt_color}}</span>
                                </div>
                                <div class="col-md-2">
                                    <input type="hidden" name="ssb_frontpage_register_back_color_val" id="ssb_frontpage_register_back_color_val" value="#ffffff">
                                    <div id="ssb_frontpage_register_back_colorpicker"  data-color="#ffffff" style="border: 1px solid #aaaaaa; width: 70px; height: 75%;  cursor: pointer; background: rgb(227, 13, 13);"></div>
                                </div>
                                <div class="col-md-4">
                                    <div id="ssb_frontpage_register_back_color_value">#ffffff</div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div style="text-align: right; margin-bottom: 15px;">
            <div id="add_domainBtn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="SavePageContent()">
                <span>{{ cbtntxt_savechange }}</span>
            </div>
        </div>

    </div>
</template>
<style>
    .page1_content_content_bottom svg{
        color: #6b85e2;
    }
    .page_front_content_list{
        display: none;
    }
    .page_front_content_list.active{
        display: block;
    }
    .page1_content_side_bar .page1_content_side_bar_text{
        cursor: pointer;
        height: auto;
        float: left;
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
    import media_module from "../../assets/jsfunc/media_module";

    var permss;
    var preview='';
    var tabstatus=0;
    var vueOBJ=null;

    function initpage() {
        $('#ssb_frontpage_regback_upbtn').click(function () {
            $('.Media_directory_files').html("");
            $('#Media_Modal_Search_Text').val("");
            media_module.data.setImageTagID("ssb_frontpage_regback_preview", "ssb_frontpage_regback_pre");
            media_module.data.getDirectories('/');
            media_module.data.MediaSelectImageModal(vueOBJ);
            $('#MediaDirectoryModal').modal('show');
        });

        $('#ssb_frontpage_reglogo_upbtn').click(function () {
            $('.Media_directory_files').html("");
            $('#Media_Modal_Search_Text').val("");
            media_module.data.setImageTagID("ssb_frontpage_reglogo_preview", "ssb_frontpage_reglogo_pre");
            media_module.data.getDirectories('/');
            media_module.data.MediaSelectImageModal(vueOBJ);
            $('#MediaDirectoryModal').modal('show');
        });

        const ssb_frontpage_register_font_colorpicker = document.getElementById('ssb_frontpage_register_font_colorpicker');
        let pickercolor = new ColorPicker(ssb_frontpage_register_font_colorpicker, '#ffffff');
        ssb_frontpage_register_font_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#ssb_frontpage_register_font_color_value').text(color);
            $('#ssb_frontpage_register_font_color_val').val(color);
        });

        const ssb_frontpage_register_theme_colorpicker = document.getElementById('ssb_frontpage_register_theme_colorpicker');
        let pickerborder = new ColorPicker(ssb_frontpage_register_theme_colorpicker, '#104f8e');
        ssb_frontpage_register_theme_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#ssb_frontpage_register_theme_color_value').text(color);
            $('#ssb_frontpage_register_theme_color_val').val(color);
        });

        const ssb_frontpage_register_back_colorpicker = document.getElementById('ssb_frontpage_register_back_colorpicker');
        let pickerbk = new ColorPicker(ssb_frontpage_register_back_colorpicker, '#ffffff');
        ssb_frontpage_register_back_colorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#ssb_frontpage_register_back_color_value').text(color);
            $('#ssb_frontpage_register_back_color_val').val(color);
        });
    }

    function getRegisterSettingData() {
        $.ajax({
            url: 'admin.getSystemSettingBasicRegister',
            type: 'POST',
            async: false,
            success: function (data) {
                if(data.pageinfo != '')
                {
                    var dt = data.pageinfo;
                    dt = $.parseJSON(dt);
                    $('#ssb_frontpage_regback_preview').attr('src', dt.backimg);
                    $('#ssb_frontpage_regback_pre').val(dt.backimg);
                    $('#ssb_frontpage_reglogo_preview').attr('src', dt.logoimg);
                    $('#ssb_frontpage_reglogo_pre').val(dt.logoimg);

                    var ct = decodeURIComponent(dt.tiptxt);
                    $('#ssb_frontpage_register_tip').val(ct);

                    $('#ssb_frontpage_register_font_color_val').val(dt.fontcolor);
                    $('#ssb_frontpage_register_font_color_value').text(dt.fontcolor);
                    $('#ssb_frontpage_register_font_colorpicker').css('background',dt.fontcolor);

                    $('#ssb_frontpage_register_theme_color_value').text(dt.themecolor);
                    $('#ssb_frontpage_register_theme_color_val').val(dt.themecolor);
                    $('#ssb_frontpage_register_theme_colorpicker').css('background',dt.themecolor);

                    $('#ssb_frontpage_register_back_color_value').text(dt.backcolor);
                    $('#ssb_frontpage_register_back_color_val').val(dt.backcolor);
                    $('#ssb_frontpage_register_back_colorpicker').css('background',dt.backcolor);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    export default {
        data(){
            return {
                pgtxt_setting:'',
                pgtxt_font:'',
                pgtxt_background:'',
                pgtxt_logo:'',
                btntxt_add:'',
                pgtxt_tip:'',
                pgtxt_color:'',
                btntxt_theme:'',
                pgtxt_back:'',
                pgtxt_fontcolour:'',
                btntxt_edit:'',
                pgtxt_media:'',
                btntxt_search:'',
                pgtxt_dbsaved:'',
                btntxt_savechange:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        computed: {
            cpgtxt_setting:function () {
                return this.pgtxt_setting
            },
            cpgtxt_font:function () {
                return this.pgtxt_font
            },
            cpgtxt_background:function () {
                return this.pgtxt_background
            },
            cpgtxt_logo:function () {
                return this.pgtxt_logo
            },
            cpgtxt_tip:function () {
                return this.pgtxt_tip
            },
            cpgtxt_color:function () {
                return this.pgtxt_color
            },
            cpgtxt_back:function () {
                return this.pgtxt_back
            },
            cbtntxt_theme:function () {
                return this.btntxt_theme
            },
            cpgtxt_fontcolour:function () {
                return this.pgtxt_fontcolour
            },
            cpgtxt_media:function () {
                return this.pgtxt_media
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_search:function () {
                return this.btntxt_search
            },
            cpgtxt_dbsaved:function () {
                return this.pgtxt_dbsaved
            },
            cbtntxt_savechange:function () {
                return this.btntxt_savechange
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
            vueOBJ=this;
            permss = myjs.data.permissionDefinition();
            this.initpage();
        },
        methods:{
            initpage() {
                initpage();
                getRegisterSettingData();
            },
            SavePageContent(){
                if (permss.pcreate == 1 || permss.pwrite == 1) {
                    var ct = $('#ssb_frontpage_register_tip').val();
                    ct = encodeURIComponent(ct);
                    $('#ssb_frontpage_register_tip_val').val(ct);
                    var  formData = new FormData($("#ssb_frontpage_register_frm")[0]);
                    $.ajax({
                        url: 'admin.setSystemSettingBasicRegister',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if(data.msg=="ok"){
                                myjs.data.showAlert('pgtxt_dbsaved');
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
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },

        }//method


    }
</script>
