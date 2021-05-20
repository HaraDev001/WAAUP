<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cpgtxt_front}} {{cpgtxt_pages}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_configuration}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cpgtxt_font}} {{cpgtxt_page}}
                          <a href="#" id="webs-wesglobal-configuration-frontpages-fav" data-status="off" data-page-info="Frontpages_webs-wesglobal-configuration-frontpages">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div id="GeneralContainer" class="sl-tab-container active">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body" style="padding: 0px;">
                            <h6 class="card-title m-20">{{cbtntxt_setting}}</h6>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive">
                                        <table id="user-list" class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                            <thead>
                                            <tr role="row">
                                                <th style="width:20px!important">
                                                    <div class="form-check form-check-inline">
                                                    </div>
                                                </th>
                                                <th style="width: 20%;">{{cpgtxt_pages}}</th>
                                                <th style="width: 45%;">{{cpgtxt_page}} {{cpgtxt_name}}</th>
                                                <th style="width: 15%;">{{cpgtxt_lastsaved}}</th>
                                                <th style="">{{cpgtxt_user}}</th>
                                            </tr>
                                            </thead>
                                            <tbody id="wwcf_page_content_list" style="color: gray;">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="text-right" style="">
                        <div id="supr_edit_save_btn" class="btn btn-outline-light  dash-my-btn-0 active" style="font-size: 0.9rem;padding:10px 20px; margin-right: 15px;" >
                            <span>{{cbtntxt_save}} {{cbtntxt_change}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    .page-title-input{
        border: 1px solid #bbbbbb;
        background-color: #fff;
        border-radius: 20px;
        height: 30px;
        width: 300px;
        padding: 0px 20px;
        color: gray;
    }

</style>

<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    let vueOBJ=null;
    var transedlang='';
    var btntxt_changes = "";
    var pgtxt_no = "";
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var username = nav_module.data.jsonparse(window.Laravel.userinfo).username;
    var page_content_list = new Array();
    var permss;

    function pageEvent() {
        $('#supr_edit_save_btn').click(function () {
            if (permss.pcreate == 1 || permss.pwrite == 1) {
                savePageContentData();
            }else
                myjs.data.showAlert('pgtxt_notpermission');
        });
    }

    function pageLoad() {
        if (transedlang == null || transedlang == ''){
            transedlang = 'en-1';
        }
        $.ajax({
            url: 'admin.getWWCFrontPageList',
            data: {
                trans: transedlang,
                userid: userid,
            },
            type: 'POST',
            success: function (data) {
                if(data.msg=="ok"){
                    var data_list = data.lists;
                    var tags='';
                    page_content_list = new Array();
                    var pgtxt_index= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_index');
                    var pgtxt_login= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_login');
                    var pgtxt_register= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_register');
                    var pgtxt_notfound= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_notfound');
                    var pgtxt_accessdenied= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_accessdenied');
                    var pgtxt_construction= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_construction');
                    var pgtxt_comingback= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_comingback');

                    for(var i = 0; i < data_list.length; i++)
                    {
                        var item = data_list[i];
                        var id = i;
                        var page_name = '';
                        var ajax_name = '';
                        if (i == 0) {
                            page_name = pgtxt_index;
                            ajax_name = 'pgtxt_index';
                        }
                        if (i == 1) {
                            page_name = pgtxt_login;
                            ajax_name = 'pgtxt_login';
                        }
                        if (i == 2) {
                            page_name = pgtxt_register;
                            ajax_name = 'pgtxt_register';
                        }
                        if (i == 3) {
                            page_name = pgtxt_construction;
                            ajax_name = 'pgtxt_construction';
                        }
                        if (i == 4) {
                            page_name = pgtxt_notfound;
                            ajax_name = 'pgtxt_notfound';
                        }
                        if (i == 5) {
                            page_name = pgtxt_accessdenied;
                            ajax_name = 'pgtxt_accessdenied';
                        }
                        if (i == 6) {
                            page_name = pgtxt_comingback;
                            ajax_name = 'pgtxt_index';
                        }

                        var page_title = item.index;
                        var user_name = item.name;
                        var save_time = item.date;

                        var array_item = {id: id, page_title: page_title, changed: 0};
                        page_content_list.push(array_item);

                        tags+='<tr role="row" class="odd" style="height: 55px;">';
                        tags+='<td>';
                        tags+='<div class="form-check form-check-inline">';
                        tags += '</div>';
                        tags += '</td>';
                        tags += '<td class="data-ajax" data-ajax="'+ajax_name+'">' + page_name + '</td>';
                        tags += '<td>';
                        tags += '<div class="input-group" style="width: 70%">';
                        tags += '<input type="text" id="wwpc_page_title_'+id+'" class="page-title-input" value="'+page_title+'">';
                        tags += '</div>';
                        tags += '</td>';
                        tags += '<td>' + save_time + '</td>';
                        tags += '<td>' + user_name + '</td>';
                        tags += '</tr>';
                    }
                    $('#wwcf_page_content_list').html(tags);
                }
                else{
                    $('#wwcf_page_content_list').html('');
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function savePageContentData() {
        for (var i = 0; i < page_content_list.length; i++) {
            var content = page_content_list[i];
            var id = content.id;
            var page_title = content.page_title.toString();
            var idstring = 'wwpc_page_title_' + id;
            var change_page_title =$('#' + idstring).val().toString();
            if (page_title.localeCompare(change_page_title) == 0) {
                page_content_list[i].changed = 0;
            }
            else {
                page_content_list[i].changed = 1;
                page_content_list[i].page_title = change_page_title;
            }
        }
        var changed = false;
        for (var i = 0; i< page_content_list.length; i++) {
            if (page_content_list[i].changed == 1) {
                changed = true;
                break;
            }
        }
        if (changed) {
            $.ajax({
                url: 'admin.saveWWCFrontPageList',
                data: {
                    content_list: page_content_list,
                    user_name: username,
                    userid: userid
                },
                type: 'POST',
                success: function (data) {
                    if(data.msg=="ok"){
                        myjs.data.showAlert('pgtxt_dbsaved');
                        pageLoad();
                    }
                    else{
                        myjs.data.showAlert('pgtxt_error');
                        pageLoad();
                    }
                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        }
        else {
            alert(pgtxt_no + ' ' + btntxt_changes);
            pageLoad();
        }
    }

    export default {
        name: "WebsWesGlobalConfigurationFrontpages",
        data(){
            return {
                pageid:'webs-wesglobal-configuration-frontpages-fav',
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
                btntxt_setting:'',
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
                pgtxt_front:'',
                btntxt_save:'',
                btntxt_change:'',
                pgtxt_page:'',
                pgtxt_dbsaved:'',
                pgtxt_previewpage:'',
                pgtxt_releasesuccess:'',
                pgtxt_selectlanguagesave:'',
                pgtxt_pages:'',
                pgtxt_lastsaved:'',
                pgtxt_user:'',
                pgtxt_name:'',
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
            cbtntxt_setting:function () {
                return this.btntxt_setting
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
            cbtntxt_save:function () {
                return this.btntxt_save;
            },
            cbtntxt_change:function () {
                return this.btntxt_change;
            },
            cpgtxt_front:function () {
                return this.pgtxt_front
            },
            cpgtxt_pages:function () {
                return this.pgtxt_pages
            },
            cpgtxt_lastsaved:function () {
                return this.pgtxt_lastsaved
            },
            cpgtxt_user:function () {
                return this.pgtxt_user
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
            pgtxt_no= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_no');
            btntxt_changes= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_changes');
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
                                // console.log(obj);
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
            initpage() {
                pageEvent();
                pageLoad();
            },
            loaddata()
            {
                transedlang = $('#transedlang').val();
                pageLoad();
            }
        }//method

    }
</script>
