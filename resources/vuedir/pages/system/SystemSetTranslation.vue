<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_system_setting_language_trans}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_system}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_set}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_system_set_lang}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_system_setting_language_trans}}
                          <a href="#" id="system-setting-language-trans-fav" data-status="off" data-page-info="Translation_system-setting-language-trans">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>

        <div id="SLTContainer" class="sl-tab-container active" style="margin-top:25px;">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h6 class="card-title m-b-30">{{cpgtxt_filters}}</h6>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h6 class="card-title m-b-10" style="color: #878585;font-size: 13px;">{{cpgtxt_includestring}}<!--字符串包括--></h6>
                                    </div>
                                    <div class="col-md-6">
                                        <h6 class="card-title m-b-10" style="color: #878585;font-size: 13px;">{{cpgtxt_translationlanguage}}<!--翻译语言--></h6>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group m-b-0">
                                            <input class="form-control w-75"  type="text" placeholder="" id="ssl_orgname" @keyup.13="ssl_trans_search()"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group m-b-0">
                                            <select class="form-control w-75" id="ssl_trans_slt" name="ssl_trans_slt" @change="ssl_trans_search()">

                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row"><!--{{templang}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-12">
                                    <table class="table table-lg dataTable no-footer" role="grid" aria-describedby="lang-list_info">
                                        <thead>
                                        <tr role="row">
                                            <th class="sorting" tabindex="0" aria-controls="lang-list" rowspan="1" colspan="1" aria-label="language: activate to sort column ascending" style="width:40%;padding:30px 30px 20px 30px;font-size:13px">{{cpgtxt_basicstring}}</th>
                                            <th class="sorting" tabindex="0" aria-controls="lang-list" rowspan="1" colspan="1" aria-label="language: activate to sort column ascending" style="width:40%;padding:30px 30px 20px 30px;font-size:13px">{{cpgtxt_translationlanguage}}</th>
                                            <th class="sorting" tabindex="0" aria-controls="lang-list" rowspan="1" colspan="1" aria-label="action: activate to sort column ascending" style="width:20%;padding:30px 30px 20px 30px;font-size:13px">&nbsp;</th>
                                        </tr>
                                        </thead>

                                        <tbody id="sslang-trans-list" style="font-size:13px;">
                                        <!--  <tr role="row" class="odd">
                                              <td  style="padding:20px 30px;">
                                                  <span class="iti__country-name">中华人民共和国</span>
                                              </td>
                                              <td  style="padding:20px 30px;">
                                                  <span class="iti__country-name">中华人民共和国</span>
                                              </td>
                                              <td class="text-right" style="padding:20px 30px;">
                                                  <div class="form-group m-b-0 border-top-0">
                                                      <select class="my-border-radius-slt form-control float-right" id="sslang_status_2" name="sslang_status_2" @change="SSLChangeEvent('sslang_status_2');">
                                                          <option value="">Edit</option>
                                                          <option value="add">Add</option>
                                                          <option value="change">Change</option>
                                                          <option value="delete">Delete</option>
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


                <div class="row" >
                    <div class="col-md-12" id="ssl_trans_nav">
                        <!--<nav aria-label="..." class="mb-4">
                            <ul class="pagination pagination-rounded justify-content-center">
                                <li class="page-item  disabled ">
                                    <a class="page-link" href="#" id="ssmunavnum_0">
                                    <i class="ti-angle-left"></i>
                                    </a>
                                </li>
                                <li class="page-item active" aria-current="page">
                                    <a class="page-link" id="" href="#">1  <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="page-item ">
                                <a class="page-link" id="ssmunavnum_2" href="#">2  </a>
                                </li>
                                <li class="page-item ">
                                    <a class="page-link" id="ssmunavnum_3" href="#">3  </a>
                                </li>
                                <li class="page-item ">
                                    <a class="page-link" id="ssmunavnum_4" href="#">4  </a>
                                </li>
                            <li class="page-item  ">
                                <a class="page-link" id="ssmunavnum_next" href="#">
                                    <i class="ti-angle-right"></i>
                                </a>
                            </li>
                            </ul>
                        </nav>-->
                    </div>
                </div>

            </div>
            <!-- modal trans dlg -->
            <div class="modal fade" id="myLangTransModal">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" style="color: #055ada;font-size: 17px;font-weight:800;padding-top: 10px;padding-left: 10px;">{{cpgtxt_sua_edit}}</h4>
                            <p id="sfl_alert" style="display: none;padding:5px 10px;border-radius:20px;">Create Translate String.</p>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body" id="myLangTransModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="panel" id="tab3">
                                <form id="ssfi-num-add-frm">
                                    <div class="row" style="padding-bottom: 10px;">
                                        <div class="col-md-12">
                                            <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                        </div>
                                        <div style="margin: 10px 10px 0px 10px;">
                                            <div class="row" style="padding: 10px">
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label style="margin-top: 8px; color:#666; width:100px;" id="lb_lang_org">{{cpgtxt_basicstring}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-10" style="padding-left: 62px;">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" style="width: 300px;" readonly placeholder="" name="sslt-org-str" id="sslt-org-str" >
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label style="margin-top: 8px; color:#666; width:100px;" id="lb_lang_trans">{{cpgtxt_stringtotranslation}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-10" style="padding-left: 62px;">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" style="width: 300px;"  placeholder="" name="sslt-trans-str" id="sslt-trans-str" >
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <div id="sslt-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="sslt_trans_btn()">
                                                <span>+ {{ cbtntxt_add }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="sslt-str-type" value=""/>
                                    <input type="hidden" id="sslt-str-key" value=""/>
                                    <input type="hidden" id="sslt-iso" value=""/>
                                    <input type="hidden" id="sslt-id" value=""/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    import nav_module from "../../assets/jsfunc/nav_module";

    var permss;
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
    var pgtxt_wantdeleteitem = "";
    var pgtxt_select = "";
    var btntxt_edit = "";
    var btntxt_change = "";
    function showSSLTransDlg(){
        $("#myLangTransModal").modal('show');
    }

    export default {
        name: "SystemSetTranslation",
       data(){
           return {
               pageid:'system-setting-language-trans-fav',
               mu_system:'',
               musu_system_set:'',
               mususu_system_set_lang:'',
               musususu_system_setting_language_trans:'',
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
               pgtxt_wantdeleteitem:'',
               btntxt_edit:'',
               btntxt_change:'',
               pgtxt_select:'',
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
            btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
            btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
            pgtxt_select = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_select');
            pgtxt_wantdeleteitem = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_wantdeleteitem');
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
            cmusususu_system_setting_language_trans: function () {
                return this.musususu_system_setting_language_trans
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
            cbtntxt_change:function () {
                return this.btntxt_change;
            },
            cpgtxt_select:function () {
                return this.pgtxt_select
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
            getStoredLang(){
                axios.post('admin.sslang_getStoredLang').then((response) => {
                        let msg = response.data.msg;
                        if(msg === "ok")
                        {
                            if(response.data.cnt>0){
                               // stored_langs = JSON.parse(response.data.langlist);
                                var langlist = lang_module.data.getStoreLangList();

                                var otag='';
                                otag +='<option data-fname="" value="0" selected class="data-ajax" data-ajax="pgtxt_select">'+pgtxt_select+'</option>';
                                for (var i=0; i<langlist.length; i++){
                                    var item = langlist[i];
                                    if(item.indexOf('-') > -1){
                                        var shortname=item.split('-')[0];
                                        var isocode= item.split('-')[1];
                                        var name=item.split('-')[2];
                                        otag +='<option data-fname="'+shortname+'" value="'+shortname+'">'+name+'</option>';
                                    }
                                }
                                $('#ssl_trans_slt').html(otag);

                                this.getTransContLangs('en');//when start first
                            }
                        }
                    }).catch(function (error) {
                    console.log(error);
                })
            },
            SSLChangeEvent(id){
              /*  $('select[id^="sslangselect_"]').change(function(){
                });*/
                var val = $('select[id='+id+']').val();
                $("#myLangTransModal").modal('show');
               //
            },
            sslt_trans_btn(){
                var vueOBJ=this;
                var value=$('#myLangTransModal #sslt-id').val();
                var str_type=$('#myLangTransModal #sslt-str-type').val();
                var str_key=$('#myLangTransModal #sslt-str-key').val();
                var iso=$('#myLangTransModal #sslt-iso').val();
                var str_cont=$('#myLangTransModal #sslt-trans-str').val();

                var str_cont = $.trim(str_cont);
                if(str_cont.length < 1)
                {
                    alert('you have not content for translation!');
                    return;
                }

                var pdata={
                    iso: iso,
                    str_key:str_key,
                    str_type:str_type,
                    str_cont:str_cont,
                    value:value,
                    str_fname:g_fname
                }
                axios.post('admin.changesslangbyiso', pdata)
                    .then((response) => {
                        let msg = response.data.msg;
                        if(msg =="ok")
                        {

                            var status=response.data.status;//cckd
                            var sts= vueOBJ.$store.getters.getContentChange;
                            var ny='';
                            if(sts=='y')
                                ny='n';
                            else
                                ny='y';
                            vueOBJ.$store.dispatch('ContentChange',ny);//cckd
                            var localelang= vueOBJ.$store.getters.doDefaultLang;
                            if(localelang==g_fname)
                            {
                                var cstr = str_type+'_'+str_key;
                                var obj = this.$store.state.sitecontents;
                                var keys = Object.keys(obj);
                                for (var i = 0; i < keys.length; i++) {
                                    if(keys[i] == cstr ){
                                        obj[keys[i]]=str_cont;
                                        break;
                                    }
                                }
                            }

                            vueOBJ.getTransContLangs(iso);
                        }
                        $('#myLangTransModal').modal('hide');
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            ssl_trans_search(){
                if (permss.pread == 1) {
                    var objval = $('#ssl_trans_slt').val();
                    g_fname = $("#ssl_trans_slt option:selected").attr('data-fname');
                    if (objval == 0) {
                        g_fname = 'en';
                        objval = 'en';
                    }

	                var iso = objval;
                    var txt = $('#ssl_orgname').val();
                    txt = $.trim(txt);
                    g_Cont = txt;
                    this.getTransContLangs(iso);
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            getTransContLangs(iso)
            {
                var vueOBJ=this;
                let postData = {
                    start: pstart,
                    cnt:pcnt,
                    orgiso:g_fname,
                    iso: iso,
                    searchcont:g_Cont
                };
                axios.post('admin.getsslangbyiso', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        var total=response.data.total;
                        if(total<=0){
                            $('#sslang-trans-list').html('');
                            $('#ssl_trans_nav').html('');
                            return;
                        }

                        if(msg === "ok")
                        {
                            //var stored_langs = JSON.parse(response.data.addlist);
                            pstart=response.data.start;
                            var totalpage=response.data.totalpage;
                            var list = response.data.list;
                            var ltag='';
                            var iso = response.data.iso;
                            for(var j=0; j<list.length; j++)
                            {
                                var item = list[j];

                                var id=item.id;
                                var str_type=item.str_type;
                                var str_key=item.str_key;
                                var str_cont=item.str_cont;
                                var str_iso=item.iso;

                                var tid=parseInt(item.tid);
                                var tcont=item.tcont;
                                var tiso=item.tiso;

                                var explain="";
                                if(str_type=="mu")
                                    explain="(Main Menu)";
                                else if(str_type=="musu")
                                    explain="(Menu &nbsp;/&nbsp; Sub Menu)";
                                else if(str_type=="mususu")
                                    explain="(Menu &nbsp;/&nbsp; Sub Menu &nbsp;/&nbsp; Sub Menu)";
                                else if(str_type=="pgtit")
                                    explain="(Page Title)";
                                else if(str_type=="pgcont")
                                    explain="(Page Content)";
                                else if(str_type=="mutit")
                                    explain="(Menu Title)";


                                ltag +='<tr role="row" class="odd">';
                                ltag +='<td  style="padding:20px 30px;">';
                                ltag +='<span class="iti__country-name">'+str_cont+'&nbsp;&nbsp;'+explain+'</span>';
                                ltag +='</td>';
                                ltag +=' <td  style="padding:20px 30px;">';
                                ltag +=' <span class="iti__country-name">'+tcont+'</span>';
                                ltag +='</td>';
                                ltag +='<td class="text-right" style="padding:20px 30px;">';
                                ltag +='<div class="form-group m-b-0 border-top-0">';
                                ltag +='<select class="my-border-radius-slt form-control float-right" data-id="'+id+'" data-type="'+str_type+'" data-key="'+str_key+'" data-cont="'+str_cont+'" data-iso="'+str_iso+'" data-tid="'+tid+'" data-tcont="'+tcont+'" data-tiso="'+tiso+'" id="sslang_status_select_'+j+'" >';
                                ltag +='<option value=""class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';

                                if(tid>0)
                                    ltag +='<option value="change"class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
                              /*  else
                                    ltag +='<option value="add">&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;</option>';*/
                               /* ltag +='<option value="delete">Delete</option>';*/
                                ltag +='</select>';
                                ltag +='</div>';
                                ltag +=' </td>';
                                ltag +=' </tr>';
                            }

                            $('#sslang-trans-list').html(ltag);

                            var nav_tag='';
                            nav_tag+='<nav aria-label="..." class="mb-4">';
                            nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

                            var disble="";
                            if(pstart==1)
                                disble="disabled"

                            var prenum= parseInt(pstart) - 1;

                            nav_tag+='<li class="page-item  '+disble+' ">';
                            nav_tag+='<a class="page-link" data-tiso="'+iso+'" href="#"  data-num="sflunavnum_' + prenum + '" >';
                            nav_tag+='<i class="ti-angle-left"></i>';
                            nav_tag+='</a>';
                            nav_tag+='</li>';

                            //alert(totalpage);
                            pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;
                            // console.log("total:"+total);
                            for(var idx = 0; idx < numg; idx++)
                            {

                                var actv="";
                                var aria_current='';
                                var spantag='';
                                var oid='';

                                if(pnum==pstart)
                                {
                                    actv='active';
                                    aria_current='aria-current="page"';
                                    spantag='<span class="sr-only">(current)</span>';
                                }
                                else
                                    oid="sflunavnum_" + pnum;

                                nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
                                nav_tag+='<a class="page-link" data-tiso="'+iso+'" data-num="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
                                nav_tag+='</li>';

                                if(pnum==totalpage) break;

                                pnum = pnum + 1;

                            }

                            var nextnum= parseInt(pstart) + 1;
                            var edisble="";
                            if(pstart==totalpage)
                                edisble="disabled"

                            nav_tag+='<li class="page-item '+edisble+' ">';
                            nav_tag+='<a class="page-link" data-tiso="'+iso+'"  data-num="sflunavnum_' + nextnum + '" href="#">';
                            nav_tag+='<i class="ti-angle-right"></i>';
                            nav_tag+='</a>';
                            nav_tag+='</li>';

                            nav_tag+='</ul>';
                            nav_tag+='</nav>';

                            $('#ssl_trans_nav').html(nav_tag);

                            $('a[data-num^="sflunavnum_"]').click(function(){
                                var oid=$(this).attr("data-num");
                                pstart=oid.split('_')[1];
                                var ttiso=$(this).attr("data-tiso");
                                vueOBJ.getTransContLangs(ttiso);
                            });


                            $('select[id^="sslang_status_select_"]').change(function(){
                                var data_type=$(this).attr("data-type");
                                var data_key=$(this).attr("data-key");
                                var data_cont=$(this).attr("data-cont");
                                var data_id=$(this).attr("data-id");
                                var data_tid=$(this).attr("data-tid");
                                var data_tcont=$(this).attr("data-tcont");
                                var data_tiso=$(this).attr("data-tiso");
                                var value=$(this).val();

                                if(value!='')
                                {
                                    if(value=="add") {
                                        if (permss.pcreate == 1) {
                                            $('#myLangTransModal .modal-title').text('Add String');
                                            $('#myLangTransModal #lb_lang_org').text('Basic String');
                                            $('#myLangTransModal #sslt-org-str').val(data_cont);
                                            //$('#myLangTransModal #sslt-org-str').attr('readonly','readonly');
                                            $('#myLangTransModal #lb_lang_trans').text('String to Translation');

                                            $('#myLangTransModal #sslt-trans-str').val(data_tcont);
                                            $('#myLangTransModal #sslt-str-type').val(data_type);
                                            $('#myLangTransModal #sslt-str-key').val(data_key);
                                            $('#myLangTransModal #sslt-iso').val(data_tiso);

                                            $('#myLangTransModal #sslt-id').val('add');
                                            $('#myLangTransModal #sslt-model-add span').text('+ Add');

                                            showSSLTransDlg();
                                        }
                                        else
                                            myjs.data.showAlert('pgtxt_notpermission');
                                    }
                                    else if(value=="change")
                                    {
                                        if(parseInt(data_tid) < 1){
                                            alert('No empty to change data!');
                                            return;
                                        }
                                        else
                                        {
                                            if (permss.pwrite == 1) {
                                                $('#myLangTransModal .modal-title').text('Edit String');
                                                $('#myLangTransModal #lb_lang_org').text('Basic String');
                                                $('#myLangTransModal #sslt-org-str').val(data_cont);
                                                // $('#myLangTransModal #sslt-org-str').attr('readonly','readonly');
                                                $('#myLangTransModal #lb_lang_trans').text('Change String');

                                                $('#myLangTransModal #sslt-trans-str').val(data_tcont);
                                                $('#myLangTransModal #sslt-str-type').val(data_type);
                                                $('#myLangTransModal #sslt-str-key').val(data_key);
                                                $('#myLangTransModal #sslt-iso').val(data_tiso);

                                                $('#myLangTransModal #sslt-id').val('change');
                                                $('#myLangTransModal #sslt-model-add span').text('Save Change');

                                                showSSLTransDlg();//here
                                            }
                                            else
                                                myjs.data.showAlert('pgtxt_notpermission');
                                        }
                                    }
                                    else if(value=="delete")
                                    {
                                        if(parseInt(data_tid) < 1){
                                            alert('No empty to change data!');
                                            return;
                                        }
                                        else
                                        {
                                            if (permss.pdelete == 1) {
                                                if (window.confirm(pgtxt_wantdeleteitem)) {
                                                    var pdata = {
                                                        iso: data_tiso,
                                                        str_key: data_key,
                                                        str_type: data_type
                                                    }
                                                    axios.post('admin.deletesslangbyiso', pdata)
                                                        .then((response) => {
                                                            let msg = response.data.msg;
                                                            if (msg == "ok") {
                                                                vueOBJ.getTransContLangs(data_tiso);
                                                            }
                                                        })
                                                        .catch(function (error) {
                                                            console.log(error);
                                                        })
                                                }
                                            }
                                            else
                                                myjs.data.showAlert('pgtxt_notpermission');
                                        }
                                    }
                                }
                            });

                        }
                    }).catch(function (error) {
                    console.log(error);
                })
                //$( "#ssl_trans_slt option:selected" ).text();
            }


        }//method

    }
</script>
