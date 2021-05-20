<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmususu_system_theme_color}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_system}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_theme}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_system_theme_color}}
                          <a href="#" id="system-theme-color-fav" data-status="off" data-page-info="Color_system-theme-color">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div id="SLLContainer" class="sl-tab-container active" style="margin-top:20px;">
            <div class="row"><!--{{templang}}-->
                <div class="col-md-12"  style="padding-top:20px;">
                    <div class="card">
                        <div class="card-body" style="padding: 20px;"><h6 class="card-title m-b-20">{{cmusu_system_theme}} {{cpgtxt_color}} {{cpgtxt_list}}</h6>
                            <div class="row" style="margin-left: 50px; margin-top: 30px;">
                                <div class="d-flex flex-wrap" id="addedSystemThemeColorList" style="display: flex;">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <form action="admin.dashboard" enctype="multipart/form-data" id="adminlogin_frm" method="post" target="_top">
                <input type="hidden" class="form-control" id="email"  name="email" value="">
                <input type="hidden" class="form-control" id="pwd"  name="pwd" value="">
                <input type="hidden" class="form-control" id="theme"  name="theme" value="theme">
            </form>
        </div>
</template>
<style>
    .table.table-lg td {
        padding: 0.7rem 0.75rem;
    }
    .sl-tab-container{
        display: none;
    }
    .sl-tab-container.active{
        display: block;
    }
    .delete-theme-color{
        cursor: pointer;
    }
    .selectedThemeColor{
        width: 50px;
        border: 1px solid #888;
        background: #ffffff;
        cursor: pointer;
    }
    .selectedThemeColorActive{
        width: 50px;
        height: 22px;
        margin-top: -1px;
        border: 2px solid #000000;
        background: #ffffff;
        cursor: pointer;
    }
</style>
<script>
    import nav_module from "../../assets/jsfunc/nav_module";
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";

    var permss;
    var colum_index = 0;
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var email = nav_module.data.jsonparse(window.Laravel.userinfo).email;
    var pwd = nav_module.data.jsonparse(window.Laravel.userinfo).password;
    var lang_name = '';
    var stored_langs='';
    var page_lang = '';
    var vueOBJ;

    function getColorList(jsonstr, sel_id) {
        if (jsonstr != ''){
            var color_list = $.parseJSON(jsonstr);
            var tags = '';

            for (var j = 0; j < color_list.length; j++) {
                var obj = color_list[j];
                var cid = obj.colorid;
                var color = obj.colorinfo;
                var color_cont = obj.contentdata;
                var color_name = color_cont[lang_name];

                tags += '<div style="margin-bottom: 20px;">';
                tags += '<div id="addedcolor_' + j + '" style="display: flex;flex-direction: row; height: 20px; margin-right: 20px;">';
                if(cid == sel_id)
                    tags += '   <div id="addcolor_' + j + '" class="selectedThemeColorActive" data-id="'+ cid +'" data-color="'+color+'" style="background: ' + color + '"></div>';
                else
                    tags += '   <div id="addcolor_' + j + '" class="selectedThemeColor" data-id="'+ cid +'" data-color="'+color+'" style="background: ' + color + '"></div>';
                tags += '   <div style="margin-left: 10px;"><span id="colorname_' + j + '" data-id="' + cid + '">'+color_name+'</span></div>';
                tags += '</div>';
                tags += '</div>';
            }
            $('#addedSystemThemeColorList').html(tags);
        }
    }

    function colorEvent() {
        $('div[id^="addcolor_"]').click(function () {
            if (permss.pcreate == 1 || permss.pwrite == 1) {
                var color_val = $(this).attr("data-color");
                var color_id = $(this).attr("data-id");
                $.ajax({
                    url: 'admin.setSystemThemeColor',
                    type: 'POST',
                    data:{
                        userid:userid,
                        color:color_val,
                        cid:color_id
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok") {
                            localStorage.clear();
                            $('#email').val(email);
                            $('#pwd').val(pwd);
                            $('#adminlogin_frm').submit();
                           /* $.ajax({
                                url:'/clear-cache',
                                type:'GET',
                                async: false,
                                success: function (data) {
                                    if(data==='ok'){
                                        //caches.keys().then((keyList) => Promise.all(keyList.map((key) => caches.delete(key))));
                                        localStorage.clear();
                                        $('#email').val(email);
                                        $('#pwd').val(pwd);
                                        $('#adminlogin_frm').submit();
                                    }
                                },
                                error: function (jqXHR, errdata, errorThrown) {
                                    console.log(errdata);
                                }
                            });*/
                        }
                        else
                            alert(data.msg);

                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });
    }
    function  showThemeColorPage() {
        $.ajax({
            url: 'admin.getAWAThemeColor',
            type: 'POST',
            data:{
                userid:userid
            },
            async: false,
            success: function (data) {
                if(data.msg=="ok") {
                    var color_list = data.list.color_info;
                    var sel_color = data.list.b_id;
                    getColorList(color_list, sel_color);
                    colorEvent();
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
        name: "SystemThemeColor",
        data(){
            return {
                pageid:'system-theme-color-fav',
                mu_system:'',
                musu_system_theme:'',
                mususu_system_theme_color:'',
                pgtxt_color:'',
                pgtxt_list:'',
                btntxt_add:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        mounted(){
            /* fav part*/
            vueOBJ = this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            permss = myjs.data.permissionDefinition();

            this.getWWGStoredLang();
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_system:function () {
                return this.mu_system
            },
            cmusu_system_theme:function () {
                return this.musu_system_theme
            },
            cmususu_system_theme_color:function () {
                return this.mususu_system_theme_color
            },
            cpgtxt_color:function () {
                return this.pgtxt_color
            },
            cpgtxt_list:function () {
                return this.pgtxt_list
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },


            contentchange: function () {//cckd
                page_lang = this.$store.state.defaultlang;
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                for(var i = 0; i < stored_langs.length; i++){
                    if(page_lang == stored_langs[i].iso){
                        lang_name = stored_langs[i].name.toLowerCase();
                        showThemeColorPage();
                    }
                }
                return this.$store.state.contentchange;
            },
        },
        watch: {
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
            /*fav part*/
            getWWGStoredLang(){
                axios.post('admin.getSystemStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg === "ok")
                    {
                        if(response.data.langlist!=''){
                            stored_langs = $.parseJSON(response.data.langlist);
                            vueOBJ.getThemeColor();
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            ShowColorPalette(){
                $('#hiddenThemeColorPicker').trigger('click');
            },
            getThemeColor()
            {
                for(var i = 0; i < stored_langs.length; i++){
                    if(page_lang == stored_langs[i].iso){
                        lang_name = stored_langs[i].name.toLowerCase();
                        showThemeColorPage();
                    }
                }
            },

        }//method

    }
</script>
