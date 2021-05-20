<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_system_setting_language_lang}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_system}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_set}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_system_set_lang}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_system_setting_language_lang}}
                          <a href="#" id="system-setting-language-lang-fav" data-status="off" data-page-info="Language_system-setting-language-lang">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>

          <!--  <div class="row">
            <div class="col-md-12">
                <div class="card border-0 m-b-10">
                    <div>
                        <div id="system-setting-lang-btn" class="btn btn-outline-light  dash-my-btn-0  lang_tab active p-l-r-30 m-r-15" @click.stop="SLtabClick(1)">
                            <svg style="color:white;fill:white" t="1599123866231" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11767" width="17" height="17">
                                <path style="color:white;fill:white" d="M673.409026 907.907944l-90.543629-98.029912H126.363712c-48.216419 0-87.320961-41.029587-87.320961-91.28988V190.779023c0-50.402889 39.251892-91.28988 87.320961-91.28988h755.049918c48.216419 0 87.316208 41.029587 87.316208 91.28988v527.956478c0 50.402889-39.247138 91.28988-87.316208 91.28988H770.540583l-97.131557 97.882563zM126.363712 135.390031c-29.15135 0-52.979121 24.9115-52.979121 55.388992v527.956478c0 30.477492 23.827771 55.388992 52.979121 55.388992h471.222333l76.669049 83.081111 82.277821-83.081111h124.742872c29.15135 0 52.979121-24.9115 52.979122-55.388992V190.779023c0-30.477492-23.827771-55.388992-52.979122-55.388992H126.363712z" fill="#707070" p-id="11768"></path><path d="M670.999155 921.601901l-91.812731-101.437953H131.41636c-51.025558 0-92.378362-44.304539-92.378362-98.643074V189.500413c0-54.485884 41.490647-98.633568 92.378362-98.633567h744.935117c51.025558 0 92.378362 44.290279 92.378361 98.633567v532.020461c0 54.490638-41.490647 98.643074-92.378361 98.643074h-106.889869l-98.462453 101.437953zM131.41636 104.009432c-44.114411 0-79.924989 38.391563-79.924989 85.348385v532.015708c0 47.108924 35.953174 85.343632 79.924989 85.343632h453.155435l86.845641 95.981284 93.062822-95.981284h111.871219c44.109658 0 79.924989-38.382057 79.924988-85.343632V189.500413c0-47.099418-35.94842-85.348385-79.924988-85.348385H131.41636v-0.142596z m540.414604 766.353018l-78.133033-86.522425H131.41636c-32.221915 0-58.497582-28.058115-58.497582-62.471253V189.500413c0-34.403632 26.270914-62.4665 58.497582-62.4665h744.935117c32.217162 0 58.502335 28.058115 58.502334 62.4665v532.020461c0 34.403632-26.275667 62.461747-58.502334 62.461747h-120.583827l-83.936686 86.379829zM126.506308 135.637197c-25.781334 0-46.652618 22.292489-46.652617 49.813493v539.036178c0 27.535264 20.876036 49.822999 46.652617 49.823h473.698748l74.116583 81.983122 79.592265-81.983122h127.219288c25.781334 0 46.652618-22.292489 46.652617-49.823V185.460197c0-27.530511-20.876036-49.80874-46.652617-49.80874H126.506308v-0.01426z" fill="#707070" p-id="11769"></path>
                                <path style="color:white;fill:white" d="M483.480825 227.530733h43.510755l188.283595 471.711912h-52.123546l-55.094294-142.890574H410.866251L359.018391 699.242645H307.080219m121.83867-193.649953h159.864237l-49.219343-130.698627c-14.963061-39.660666-26.237641-72.376914-33.481512-97.830277a601.554963 601.554963 0 0 1-25.458117 90.11584l-51.705265 138.413064z" fill="#707070" p-id="11770"></path>
                                <path style="color:white;fill:white" d="M722.371696 713.136237h-68.127556l-55.374732-146.983076h-188.464217l-52.118792 146.983076H299.765051l187.537343-499.494342h35.282973l199.786329 499.494342z m-58.507088-14.288107h46.799967l-188.307361-470.913375h-34.726849l-176.828393 470.918128h37.721362l52.118793-146.97357h208.009358l55.213123 146.968817z m-69.491723-184.904073H413.504275l55.688443-152.054736a632.531541 632.531541 0 0 0 25.287002-91.579825l5.585005-29.04678 7.914071 28.409852c7.286649 25.871645 18.45666 59.685881 33.505278 99.992982l52.888811 144.278507z m-189.486154 26.632157h198.265306l-64.928655-175.801703c-14.867997-40.040922-27.107476-75.604334-36.718438-106.020034a918.540843 918.540843 0 0 1-28.195958 94.612364l-68.422255 187.209373z" fill="#707070" p-id="11771"></path></svg>
                            <span class="m-l-10">{{ cpgtxt_language }}</span>
                        </div>
                        <div id="system-setting-tran-btn" class="btn btn-outline-light  dash-my-btn-0 lang_tab p-l-r-30" @click.stop="SLtabClick(2)">
                            <svg style="color:white;fill:white" t="1599123973688" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12823" width="17" height="17">
                                <path style="color:white;fill:white" d="M981.845333 738.304H925.013333a159.232 159.232 0 0 0-27.477333-66.389333l40.106667-40.106667c10.069333-10.069333 10.069333-26.453333 0-36.522667-10.069333-10.069333-26.453333-10.069333-36.522667 0l-40.106667 40.106667a157.2864 157.2864 0 0 0-66.389333-27.648v-56.661333c0-14.336-11.605333-25.770667-25.770667-25.770667-14.336 0-25.770667 11.605333-25.770666 25.770667v56.661333c-24.405333 4.096-47.104 13.653333-66.389334 27.477333l-40.106666-40.106666c-10.069333-10.069333-26.453333-10.069333-36.522667 0-10.069333 10.069333-10.069333 26.453333 0 36.522666l40.106667 40.106667a157.2864 157.2864 0 0 0-27.648 66.389333h-56.661334c-14.336 0-25.770667 11.605333-25.770666 25.770667 0 14.336 11.605333 25.770667 25.770666 25.770667h56.661334c4.096 24.405333 13.653333 47.104 27.477333 66.389333l-40.106667 40.106667c-10.069333 10.069333-10.069333 26.453333 0 36.522666 10.069333 10.069333 26.453333 10.069333 36.522667 0l40.106667-40.106666c19.285333 13.994667 41.984 23.552 66.389333 27.648v56.832c0 14.336 11.605333 25.770667 25.770667 25.770666s25.770667-11.605333 25.770666-25.770666v-56.661334a159.232 159.232 0 0 0 66.389334-27.477333l40.106666 40.106667c10.069333 10.069333 26.453333 10.069333 36.522667 0 10.069333-10.069333 10.069333-26.453333 0-36.522667l-40.106667-40.106667a157.2864 157.2864 0 0 0 27.648-66.389333h56.661334c14.336 0 25.770667-11.605333 25.770666-25.770667 0.170667-14.336-11.434667-25.941333-25.6-25.941333z m-212.992 133.12c-59.221333 0-107.349333-48.128-107.349333-107.349333s48.128-107.349333 107.349333-107.349334 107.349333 48.128 107.349334 107.349334-48.298667 107.349333-107.349334 107.349333z" p-id="12824"></path><path d="M273.92 746.496h65.024l73.216-178.858667 50.346667-1.024 55.466666-49.664-83.968 1.365334 108.032-280.405334 109.738667 272.554667-64.682667 1.194667 43.178667 44.032 79.36-13.994667-6.485333-62.805333-129.365334-298.325334h-63.658666" p-id="12825"></path><path d="M517.290667 954.368H136.021333c-44.714667 0-81.066667-36.693333-81.066666-81.749333V131.584c0-45.056 36.352-81.749333 81.066666-81.749333h731.989334c44.714667 0 81.066667 36.693333 81.066666 81.749333v356.010667c0 14.165333-11.434667 25.6-25.6 25.6s-25.6-11.434667-25.6-25.6V131.584c0-16.896-13.312-30.549333-29.866666-30.549333H136.021333c-16.384 0-29.866667 13.653333-29.866666 30.549333v741.034667c0 16.896 13.312 30.549333 29.866666 30.549333h381.269334c14.165333 0 25.6 11.434667 25.6 25.6s-11.434667 25.6-25.6 25.6z" p-id="12826"></path></svg>
                            <span class="m-l-10">{{ cpgtxt_translation }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->

        <div id="SLLContainer" class="sl-tab-container active" style="margin-top:20px;">
        <div class="row"><!--{{templang}}-->
            <div class="col-md-12">
                <div class="card border-0 m-b-10 text-right">
                    <div>
                        <div id="system-add-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="SSLangDlgShow()">
                            <span>+ {{ cbtntxt_add }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12"  style="padding-top:20px;">
                <div class="card">
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table table-lg dataTable no-footer" role="grid" aria-describedby="user-list_info">
                                <tbody id="sslang-main-list">

                            <!--   <tr role="row" class="odd">
                                    <td class="border-top-0" style="width:70%;padding-left:20px;">
                                            <div class="iti__flag-box">
                                                <div class="iti__flag iti__cn"></div>
                                            </div>
                                            <span class="iti__country-name">China</span>
                                    </td>
                                    <td class="text-right border-top-0" style="width:30%;">
                                        <div class="form-group m-b-0 border-top-0">
                                            <select class="my-border-radius-slt form-control float-right" id="sslang_status_1" name="sslang_status_1">
                                                <option value="">Edit</option>
                                                <option value="active">Enable</option>
                                                <option value="inactive">Disable</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>-->


                               </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
            <!-- modal dlg -->
            <div class="modal fade" id="myLangModal">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" style="color: #055ada;font-size: 16px;">{{ cpgtxt_addlanguage }}</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body" id="myAlertModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="panel" id="tab4" style="display: block;">
                                <form id="sslang_reg_lang">
                                    <div class="row" style="padding: 10px;">
                                        <div class="col-md-12">
                                            <div class="table-responsive" style="max-height: 300px; overflow-y: auto; min-height: 100px;">
                                                <table id="sslang-list-table" role="grid" aria-describedby="sslang-list_info" class="table table-lg  no-footer">
                                                    <tbody id="sslang_dlg_list">

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="bottom" style="text-align: center; padding-top: 0px;">
                                                <button type="button" class="btn btn-info" style="background:#5c6bc0 !important;border-color: #5c6bc0 !important;border-radius:1.8rem !important;padding: 10px 20px;" @click.stop="sslang_add()">+ {{ cbtntxt_add }}</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <!-- modal -->
            <!-- modal -->
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">language translating...</span>
            </div>

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
    .spinner-border {
        display: none;
        width: 6rem;
        height: 6rem;
        vertical-align: text-bottom;
        border: 0.6em solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        -webkit-animation: spinner-border .75s linear infinite;
        animation: spinner-border .75s linear infinite;
        position: absolute;
        top: 50%;
        left: 50%;
    }
</style>
<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    var coutryLists=[];
    var precountryLists=[];//us-1-
    var pstart=1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var g_Cont='';

    var g_fname='en';
    var org_iso=1;
    var showlangDlg=true;
    var btntxt_delete = "";
    var btntxt_enable = "";
    var btntxt_disable = "";
    var btntxt_edit = "";
    var permss;

    function sslangAddonDlg()
    {
        var c_tag="";
        var j=0;
        for (var i = 0; i < coutryLists.length; i++)
        {
            var nameobj = coutryLists[i].name;
            var name = $.trim(nameobj.split('(')[0]);
            var dialCode= $.trim(coutryLists[i].dialCode);
            var iso2 = $.trim(coutryLists[i].iso2);
            var ckid = iso2+'-'+dialCode;
            var check='';
            for (var k = 0; k < precountryLists.length; k++)
            {
                var oneobj = precountryLists[k];
                var iso=oneobj.split('-')[0];
                var dialcd=oneobj.split('-')[1];
                var temp=iso+'-'+dialcd;
                if(temp===ckid)
                {
                  //  console.log(ckid);
                    check="checked";
                    break;
                }
            }

            if(j == 0)
             c_tag +='<tr role="row" class="odd">';

            c_tag +='<td style="width:50%;">';
            c_tag +='<div class="form-check form-check-inline">';
            c_tag +='<input class="form-check-input m-r-10" data-country="'+name+'" type="checkbox" '+check+' id="onelangCheckbox_'+ckid+'" value="">';
            c_tag +='<div class="iti__flag-box">';
            c_tag +='<div class="iti__flag iti__'+iso2+'"></div>';
            c_tag +='</div>';
            c_tag +='<span class="iti__country-name">'+name+'</span>';
            c_tag +='</div>';
            c_tag +='</td>';
            j++;

            if(j==2){
                c_tag +='</tr>';
                j=0;
            }
        }

        c_tag +='<tr role="row" class="odd"> <td style="padding: 0 0.75rem !important;width:50%;">&nbsp;</td>';
        c_tag +='<td  style="padding: 0 0.75rem !important;width:50%;">&nbsp;</td></tr>';

        $('#sslang_dlg_list').html(c_tag);
    }

    function showSSLTransDlg(){
        $("#myLangTransModal").modal('show');
    }

    export default {
        name: "SystemSetLanguage",
       data(){
           return {
               pageid:'system-setting-language-lang-fav',
               mu_system:'',
               musu_system_set:'',
               mususu_system_set_lang:'',
               musususu_system_setting_language_lang:'',
               pgtxt_language:'',
               pgtxt_translation:'',
               btntxt_add:'',
               pgtxt_addlanguage:'',
               pgtxt_filters:'',
               pgtxt_includestring:'',
               pgtxt_translationlanguage:'',
               pgtxt_basicstring:'',
               pgtxt_sua_edit:'',
               pgtxt_stringtotranslation:'',
               btntxt_edit:'',
               btntxt_enable:'',
               btntxt_disable:'',
               btntxt_delete:'',
               pgtxt_notpermission:'',
               pgtxt_notification:'',
            }
        },
        created() {

            coutryLists = lang_module.data.getLangCodes();
        },
        beforeMount(){
        },
        mounted(){
            /* fav part*/
            var vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            permss = myjs.data.permissionDefinition();

            this.getStoredLang();
            btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
            btntxt_enable = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_enable');
            btntxt_disable = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_disable');
            btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_system:function () {
                return this.mu_system
            },
            cmusu_system_set:function () {
                return this.musu_system_set
            },
            cmususu_system_set_lang: function () {
                return this.mususu_system_set_lang
            },
            cmusususu_system_setting_language_lang: function () {
                return this.musususu_system_setting_language_lang
            },

            cpgtxt_language: function () {
                return this.pgtxt_language
            },
            cpgtxt_translation: function () {
                return this.pgtxt_translation
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_addlanguage:function () {
                return this.pgtxt_addlanguage
            },
            cpgtxt_filters:function () {
                return this.pgtxt_filters
            },
            cpgtxt_includestring:function () {
                return this.pgtxt_includestring
            },
            cpgtxt_translationlanguage:function () {
                return this.pgtxt_translationlanguage
            },
            cpgtxt_basicstring:function () {
                return this.pgtxt_basicstring
            },
            cpgtxt_sua_edit:function () {
                return this.pgtxt_sua_edit
            },
            cpgtxt_stringtotranslation:function () {
                return this.pgtxt_stringtotranslation
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit;
            },
            cbtntxt_enable:function () {
                return this.btntxt_enable;
            },
            cbtntxt_disable:function () {
                return this.btntxt_disable;
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete;
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },

            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
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
            SSLangDlgShow(){
                if (permss.pcreate == 1) {
                    if(showlangDlg===true){
                        $("#myLangModal").modal('show');
                        sslangAddonDlg();
                    }
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            getStoredLang(){
                axios.post('admin.sslang_getStoredLang').then((response) => {
                        let msg = response.data.msg;
                        if(msg === "ok")
                        {
                            if(response.data.cnt>0){
                               // stored_langs = JSON.parse(response.data.langlist);
                               var stored_langs = response.data.langlist;
                               this.sslangMainAdd(stored_langs, 0);
                            }
                        }
                    }).catch(function (error) {
                    console.log(error);
                })
            },
            sslangMainAdd(stored_langs, n)
            {
                if(n==0){
                    precountryLists = [];
                    $('#sslang-main-list').html('');
                }
                var clen = $("#sslang-main-list").children().length;
                for(var j=0; j<stored_langs.length; j++)
                {
                    var obj=stored_langs[j];

                    precountryLists.push(obj);

                    var iso = obj.split('-')[0];
                    var dialCode = obj.split('-')[1];
                    var cname = obj.split('-')[2];
                    var status = obj.split('-')[3];
                    var idx=iso+'-'+dialCode+'-'+cname;
                    var c_tag='';
                    var border_top="border-top: 1px solid #dee2e6;";
                    if(clen == 0 && j==0)
                        border_top="border-top: 0px solid #dee2e6;";


                    c_tag +='<tr role="row" class="odd" id="sslangonerow_'+idx+'">';
                    c_tag +='<td style="width:70%;padding-left:20px;'+border_top+'">';
                    c_tag +='<div class="iti__flag-box">';
                    c_tag +='<div class="iti__flag iti__'+iso+'"></div>';
                    c_tag +='</div>';
                    c_tag +='<span class="iti__country-name">'+cname+'</span>';
                    c_tag +='</td>';
                    c_tag +='<td class="text-right" style="width:30%;'+border_top+'">';
                    c_tag +='<div class="form-group m-b-0 border-top-0">';
                    c_tag +='<select class="my-border-radius-slt form-control float-right" id="sslangselect_'+idx+'">';
                    c_tag +='<option value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';

                    if(status!=null && status !="" && status=="enable")
                      c_tag +='<option value="enable" selected class="data-ajax" data-ajax="btntxt_enable">'+btntxt_enable+'</option>';
                    else
                        c_tag +='<option value="enable" class="data-ajax" data-ajax="btntxt_enable">'+btntxt_enable+'</option>';

                    if(status!=null && status !="" && status=="disable")
                        c_tag +='<option value="disable" selected class="data-ajax" data-ajax="btntxt_disable">'+btntxt_disable+'</option>';
                    else
                        c_tag +='<option value="disable" class="data-ajax" data-ajax="btntxt_disable">'+btntxt_disable+'</option>';

                    if(status!=null && status !="" && status=="delete")
                        c_tag +='<option value="delete" selected class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
                    else
                        c_tag +='<option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';

                    c_tag +='</select>';
                    c_tag +='</div>';
                    c_tag +='</td>';
                    c_tag +='</tr>';
                    $('#sslang-main-list').append(c_tag);
                }

                var vueObj=this;
                /* start event */
                $('select[id^="sslangselect_"]').change(function()
                {

                   var cssdis = $('div.spinner-border').css('display');
                    if(cssdis=='block')
                        return;

                    if(showlangDlg===false) return;

                    var tid=$(this).attr("id");
                    var t_id=tid.split("_")[1];
                    var value=$(this).val();
                    if(value!=null && value!='')
                    {
                        var iso=t_id.split("-")[0];
                        var dialcode = t_id.split("-")[1];
                        var name= t_id.split("-")[2];
                        var status = value;
                        var ckid=iso+'-'+dialcode;
                        let postData = {
                            iso: iso,
                            dialcode:dialcode,
                            status:status
                        };

                        if (permss.pwrite == 1 || permss.pdelete == 1) {
                            if(status == 'delete'){
                                if (permss.pdelete == 0) {
                                    myjs.data.showAlert('pgtxt_notpermission');
                                    return;
                                }
                            }
                            if (status == 'enable') {
                                $('div.spinner-border').css('display', 'block');
                                showlangDlg = false;
                            }
                            axios.post('admin.sslang_saveStatusChange', postData)
                                .then((response) => {
                                    let msg = response.data.msg;
                                    if (msg == "ok") {
                                        // console.log(vueObj);
                                        if (status == "disable" || status == "delete") {

                                            if (status == "delete") {
                                                $('#sslangonerow_' + t_id).remove();
                                                var ttmp = [];
                                                var j = 0;
                                                for (var k = 0; k < precountryLists.length; k++) {
                                                    var oneobj = precountryLists[k];
                                                    var iso1 = oneobj.split('-')[0];
                                                    var dialcd1 = oneobj.split('-')[1];
                                                    var temp = iso1 + '-' + dialcd1;
                                                    if (temp !== ckid)
                                                        ttmp[j++] = oneobj;
                                                }
                                                precountryLists = [];
                                                precountryLists = ttmp;
                                                //console.log(precountryLists);
                                            }
                                            var langlist = lang_module.data.getStoreLangList();
                                            var templist = [];
                                            var jj = 0;
                                            for (var i = 0; i < langlist.length; i++) {
                                                var lang = langlist[i];
                                                try {
                                                    if (t_id !== lang && lang.indexOf('-') > -1)
                                                        templist[jj++] = lang;
                                                } catch (e) {
                                                }
                                            }
                                            lang_module.data.setStoreLangList(templist);
                                        } else //enable
                                        {

                                            var langlist = lang_module.data.getStoreLangList();
                                            var templist = [];
                                            var jj = 0;
                                            for (var i = 0; i < langlist.length; i++) {
                                                var lang = langlist[i];
                                                //console.log("ee::"+lang+"::"+t_id);
                                                try {
                                                    if (t_id !== lang && lang.indexOf('-') > -1)
                                                        templist[jj++] = lang;
                                                } catch (e) {
                                                }
                                            }
                                            templist[templist.length] = t_id;
                                            lang_module.data.setStoreLangList(templist);
                                            $('div.spinner-border').css('display', 'none');
                                        }
                                        //console.log(vueObj);
                                        vueObj.$store.dispatch('LangChange', status);
                                    }
                                    showlangDlg = true;
                                }).catch(function (error) {
                                console.log(error);
                            })
                        }
                        else
                            myjs.data.showAlert('pgtxt_notpermission');
                    }
                });
                /* end  event */
            },
            sslang_add()//add back
            {
                let idlist=[];
                $('input:checkbox[id^="onelangCheckbox_"]:checked').each(function(){
                    var oneidstr=$(this).attr('id');
                    var cname=$(this).attr('data-country');
                    var t_id = oneidstr.split('_')[1];
                    t_id +='-'+cname;
                    idlist.push(t_id);
                });
                // console.log(idlist); return;//ckd
                if(idlist.length > 0)
                {
                    let postData = {
                        langlist: idlist
                    };
                    axios.post('admin.sslang_saveLang', postData)
                        .then((response) => {
                            let msg = response.data.msg;
                            if(msg =="ok"){
                                if(response.data.cnt>0){
                                    //var stored_langs = JSON.parse(response.data.addlist);
                                    var addlist = response.data.addlist;
                                    this.sslangMainAdd(addlist, 1);
                                    $("#myLangModal").modal('hide');
                                }
                            }
                        }).catch(function (error) {
                        console.log(error);
                    })
                }

            },


        }//method

    }
</script>
