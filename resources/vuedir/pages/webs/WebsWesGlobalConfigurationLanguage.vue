<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_configuration_language}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_configuration}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_configuration_language}}
                          <a href="#" id="webs-wesglobal-configuration-language-fav" data-status="off" data-page-info="Language_webs-wesglobal-configuration-language">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

      <!--  <div class="row">
            <div class="col-md-12">
                <div class="card border-0 m-b-0">
                    <div style="padding-bottom: 30px;">
                        <button type="button" class="btn page1_custom_select_btn" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                            <i class='fab fa-angular' style="margin-right: 5px;"></i>
                            {{cpgtxt_language}}
                        </button>
                    </div>
                </div>
            </div>
        </div>-->

        <div class="row" style="margin-top: 30px;">
            <div class="col-md-12 page_slider_content_list active" id="Listbar"><!--slider-->
                <div class="card">
                    <div class="row">
                        <div class="col-md-12">
                            <table role="grid" aria-describedby="user-list_info" style="margin-bottom:0" class="table table-lg dataTable no-footer">
                                <tbody id="wwglang-main-list">
                              <!--
                              <tr role="row" class="odd" id="wwglangonerow_en-1-English">
                                    <td class="" style="width:70%;padding-left:20px;border:0">
                                        <div class="iti__flag-box">
                                        <div class="iti__flag iti__en"></div>
                                    </div>
                                        <span class="iti__country-name">English</span>
                                    </td>
                                    <td class="text-right " style="width:30%;border:0">
                                        <div class="form-group m-b-0 border-top-0">
                                            <select class="my-border-radius-slt form-control float-right" id="wwglangselect_en-1-English">
                                                <option value="">Edit</option>
                                                <option value="enable" selected="">Enable</option>
                                                <option value="disable">Disable</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                              -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-12">
            <div class="card border-0 m-b-10 text-right">
                <div>
                    <div id="system-add-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30" @click.stop="WWGLangDlgShow()"><span>+ {{cbtntxt_add}}</span></div>
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
                                            <button type="button" class="btn btn-info" style="background:#5c6bc0 !important;border-color: #5c6bc0 !important;border-radius:1.8rem !important;padding: 10px 20px;" @click.stop="wwglang_add()">+ {{ cbtntxt_add }}</button>
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
}
.btn.page1_custom_select_btn.add_lang{
    height: 40px;
    border-radius: 20px;
    padding: 0 30px;
    margin-right: 15px;
}
</style>

<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var coutryLists=[];
    var precountryLists=[];//us-1-
    var permss;

    function hidenLangModel() {
        $("#myLangModal").modal('hide');
    }
    function wwglangAddonDlg()
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
            //console.log(ckid+': country');
            var check="";
            for (var k = 0; k < precountryLists.length; k++)
            {
                var oneobj = precountryLists[k];
                var iso=oneobj.iso;
                var dialcd=oneobj.dialcode;
                var temp=iso+'-'+dialcd;
                //console.log(temp+': precountry');
                if(temp==ckid){
                    check="checked";
                    break;
                }
            }
            if(j == 0)
                c_tag +='<tr role="row" class="odd">';
            c_tag +='<td style="width:50%;">';
            c_tag +='<div class="form-check form-check-inline">';
            c_tag +='<input class="form-check-input m-r-10" data-country="'+name+'" type="checkbox" '+check+' id="onelangCheckbox_'+ckid+'" value="">';
           // c_tag +='<div class="iti__flag-box">';
           // c_tag +='<div class="iti__flag iti__'+iso2+'"></div>';
           // c_tag +='</div>';
            c_tag += '<span class="iti__country-name" style="background: #3f6ad2; color: white; text-transform:uppercase;border: 1px solid transparent; border-radius: 20px; padding: 5px 3px; font-size: 12px">' + iso2 + '</span>';
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

    function  wwglangMainAdd(stored_langs, n) {
        var fidx = 0;
        var plen = precountryLists.length > 0 ? 1 : 0;
        stored_langs = $.parseJSON(stored_langs);
        var c_tag = "";
       // console.log(vueOBJ);

        var edittxt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var enabletxt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_enable');
        var deletetxt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var disabletxt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_disable');

        for (var j = 0; j < stored_langs.length; j++)
        {
            var obj = stored_langs[j];
            precountryLists[j] = obj;
            //console.log(precountryLists[j]+':aaaaaa');
            var iso = obj.iso;
            var dialCode = obj.dialcode;
            var cname = obj.name;
            var status = obj.status;
            var idx = iso + '-' + dialCode + '-' + cname;
            var border_top = "";
          /*  if (fidx == 0 && plen == 0)
                border_top = "border-top-0";*/
            if (j == 0)
                border_top = "border-top-0";
            c_tag += '<tr role="row" class="odd" id="wwglangonerow_' + idx + '">';
            c_tag += '<td class="' + border_top + '" style="width:70%;padding-left:20px;">';
           // c_tag += '<div class="iti__flag-box">';
           // c_tag += '<div class="iti__flag iti__' + iso + '"></div>';
           // c_tag += '</div>';
            c_tag += '<span class="iti__country-name" style="background: #3f6ad2; color: white; text-transform:uppercase;border: 1px solid transparent; border-radius: 20px; padding: 5px 3px; font-size: 12px">' + iso + '</span>';
            c_tag += '<span class="iti__country-name">' + cname + '</span>';
            c_tag += '</td>';
            c_tag += '<td class="text-right ' + border_top + '" style="width:30%;">';
            c_tag += '<div class="form-group m-b-0 border-top-0">';
            c_tag += '<select class="my-border-radius-slt form-control float-right" id="wwglangselect_' + idx + '">';
            c_tag += '<option value="">'+edittxt+'</option>';

            if (status != null && status != "" && status == "enable")
                c_tag += '<option value="enable" selected>'+enabletxt+'</option>';
            else
                c_tag += '<option value="enable">'+enabletxt+'</option>';

            if (status != null && status != "" && status == "disable")
                c_tag += '<option value="disable" selected>'+disabletxt+'</option>';
            else
                c_tag += '<option value="disable">'+disabletxt+'</option>';

            if (status != null && status != "" && status == "delete")
                c_tag += '<option value="delete" selected>'+deletetxt+'</option>';
            else
                c_tag += '<option value="delete">'+deletetxt+'</option>';

            c_tag += '</select>';
            c_tag += '</div>';
            c_tag += '</td>';
            c_tag += '</tr>';
            fidx++;
        }
        $('#wwglang-main-list').html(c_tag);
        /* start event */
        $('select[id^="wwglangselect_"]').change(function () {
            var tid = $(this).attr("id");
            var t_id = tid.split("_")[1];
            var value = $(this).val();
            if (value != null && value != "") {
                var iso = t_id.split("-")[0];
                var dialcode = t_id.split("-")[1];
                var name = t_id.split("-")[2];
                var status = value;
                let postData = {
                    iso: iso,
                    dialcode: dialcode,
                    status: status
                };
                if (status == "enable" && permss.pwrite == 0){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                if (status == "disable" && permss.pwrite == 0){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                if (status == "delete" && permss.pdelete == 0){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }

                if (status == 'enable') {
                    if (permss.pwrite == 1) {
                        $('div.spinner-border').css('display', 'block');
                    }else
                        myjs.data.showAlert('pgtxt_notpermission');
                }
                axios.post('admin.wwglang_saveStatusChange', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        if (msg == "ok")
                        {
                            if (status == "disable" || status == "delete")
                            {
                                if (status == "delete")
                                {
                                    $('#wwglangonerow_' + t_id).remove();
                                    var tempaayy = [];
                                    for (var k = 0; k < precountryLists.length; k++) {
                                        var oneobj = precountryLists[k];
                                        var piso = oneobj.iso;
                                        var pdialcd = oneobj.dialcode;
                                        //console.log(temp+': precountry');
                                        if (iso != piso && dialcode != pdialcd) {
                                            tempaayy.push(oneobj);
                                        }
                                    }
                                    precountryLists = tempaayy;
                                }
                                var langlist = lang_module.data.getStoreWWGLangList();
                                var templist = [];
                                for (var i = 0; i < langlist.length; i++) {
                                    var lang = langlist[i];
                                    try {
                                        if (t_id != lang && lang.indexOf('-') > -1)
                                            templist[i] = lang;
                                    } catch (e) {
                                    }
                                }
                                lang_module.data.setStoreWWGLangList(templist);
                            }
                            else //enable
                            {
                                var langlist = lang_module.data.getStoreWWGLangList();
                                var templist = [];
                                for (var i = 0; i < langlist.length; i++) {
                                    var lang = langlist[i];
                                    //console.log("ee::"+lang+"::"+t_id);
                                    try {
                                        if (t_id != lang && lang.indexOf('-') > -1)
                                            templist[i] = lang;
                                    } catch (e) {
                                    }
                                }
                                templist[templist.length] = t_id;
                                lang_module.data.setStoreWWGLangList(templist);
                                $('div.spinner-border').css('display', 'none');
                            }
                        }
                    }).catch(function (error) {
                    console.log(error);
                })
            }
        })

    }

    let vueOBJ=null;

    export default {
        name: "WebsWesGlobalConfigurationLanguage",
       /* components: {
            CKEditor
        },*/
        data(){
            return {
                pageid:'webs-wesglobal-configuration-language-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_configuration:'',
                musususu_webs_wesglobal_configuration_language:'',
                pgtxt_language:'',
                btntxt_add:'',
                pgtxt_addlanguage:'',
                pgtxt_link:'',
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
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            permss = myjs.data.permissionDefinition();
           // this.getWWGFrontStoredLang();
        },
        computed: {
            cmususu_webs_wesglobal_configuration:function () {
                return this.mususu_webs_wesglobal_configuration
            },
            cmusususu_webs_wesglobal_configuration_language:function () {
                return this.musususu_webs_wesglobal_configuration_language
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_wesglobal:function () {
                return this.musu_webs_wesglobal
            },
            cpgtxt_language:function () {
                return this.pgtxt_language
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_addlanguage:function () {
                return this.pgtxt_addlanguage
            },
            cpgtxt_link:function () {
                return this.pgtxt_link
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_enable:function () {
                return this.btntxt_enable
            },
            cbtntxt_disable:function () {
                return this.btntxt_disable
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete
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
                this.getWWGFrontStoredLang();
                return this.$store.state.contentchange;
            },
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
            WWGLangDlgShow() {
                if (permss.pcreate == 1) {
                    $("#myLangModal").modal('show');
                    wwglangAddonDlg();
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            wwglang_add()
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
               if(idlist.length > 0){
                    let postData = {
                        langlist: idlist
                    };
                    axios.post('admin.wwgLang_SaveLang', postData)
                        .then((response) => {
                            let msg = response.data.msg;
                            if(msg =="ok"){
                                if(response.data.cnt>0)
                                {
                                    var addlist = response.data.addlist;
                                    wwglangMainAdd(addlist, 1);
                                    hidenLangModel();
                                }
                            }
                        }).catch(function (error) {
                        console.log(error);
                    })
                }

            },
            getWWGFrontStoredLang(){
                axios.post('admin.getWWGFrontStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        // stored_langs = JSON.parse(response.data.langlist);
                        var stored_langs = response.data.langlist;
                        //console.log(stored_langs);
                        if(stored_langs!='')
                         wwglangMainAdd(stored_langs, 0);
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            }
        }//method


    }
</script>
