<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_apps_website_fields_text}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_apps}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_apps_website}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_website_fields}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_apps_website_fields_text}}
                          <a href="#" id="apps-website-fields-text-fav"  data-status="off" data-page-info="Text_apps-website-fields-text">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>

            <!--            han 2020-11-03 start-->
            <div id="SSFContainer_2" class="sf-tab-container active" style="margin-top:20px;">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card border-0 m-b-10 text-right">
                            <div>
                                <div id="system-field-text-btn" class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="ShowSSFTextDLG()">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                    <span class="pl-2">{{ cbtntxt_add }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 p-t-10">
                        <div class="card" style="padding: 3px 20px; margin-bottom: 1rem">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive">
                                        <table role="grid" aria-describedby="text-list_info" class="table table-lg no-footer m-b-0">
                                            <tbody>
                                            <tr role="row" class="odd">
                                                <td style="width: 30%">{{cpgtxt_name}}</td>
                                                <td style="width: 30%">{{cpgtxt_limitation}}</td>
                                                <td style="width: 30%">{{cpgtxt_style}}</td>
                                                <td style="text-align:end;">{{cpgtxt_operation}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 p-t-10">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive">
                                        <table role="grid" aria-describedby="text-list_info" class="table table-lg no-footer" style="margin-top: 1rem">
                                            <tbody id="sitefieldtextlists">

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div id="ssmu_page_nav_text" class="col-md-12">

                    </div>
                </div>
            </div><!--/SSFContainer_2 Text-->
            <!--            han 2020-11-03 end-->

            <!--create text modal start-->
            <div class="modal fade" id="myAlertTextCreateModal">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" style="color: #055ada;font-size: 17px;font-weight:800;padding-top: 10px;padding-left: 10px;">{{cpgtxt_createemail}}</h4>
                            <p id="stft_alert" style="display: none;padding:5px 10px;border-radius:20px;">Create Text area.</p>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body" id="myAlertTextCreateModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="panel">
                                <form id="ssft-text-frm">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                        </div>
                                    </div>

                                    <div style="margin: 10px 10px 0px 10px;">
                                        <input type="hidden" class="form-control" placeholder="" aria-label="ssft-cid" id="ssft-cid" name="ssft-cid" aria-describedby="basic-addon2">
                                        <!--name field-->
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label style="margin-top: 8px; color: #666;">{{cpgtxt_name}}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" placeholder="" aria-label="ssft-text" id="ssft-text" name="ssft-text" aria-describedby="basic-addon2">
                                                </div>
                                            </div>
                                        </div>
                                        <!--limitation1 field-->
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label style="margin-top: 8px; color: #666;">Limitation</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="input-group mb-3">
                                                    <input type="number" class="form-control" placeholder="" aria-label="ssft-min-limitation" id="ssft-min-limitation" name="ssft-min-limitation" aria-describedby="basic-addon2">
                                                </div>
                                            </div>
                                            <div class="col-md-6 m-auto">
                                                <div class="input-group mb-3">
                                                    <span>Minimum Characters</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--limitation2 field-->
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="form-group" style="display: none">
                                                    <label style="margin-top: 8px; color: #666;">Limitation</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="input-group mb-3">
                                                    <input type="number" class="form-control" placeholder="" aria-label="ssft-max-limitation" id="ssft-max-limitation" name="ssft-max-limitation" aria-describedby="basic-addon2">
                                                </div>
                                            </div>
                                            <div class="col-md-6 m-auto">
                                                <div class="input-group mb-3">
                                                    <span>Maximum Characters</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--option1 field-->
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label style="margin-top: 8px; color: #666;">{{cpgtxt_style}}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="input-group mb-3">
                                                    <div class="form-check" style="line-height: 24px">
                                                        <div class="form-check-input circle-group" id="ssft-letter-option">
                                                            <div></div>
                                                        </div>
                                                        <label class="form-check-label m-l-10">{{cpgtxt_alphabet}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="input-group mb-3">
                                                    <div class="form-check" style="line-height: 24px">
                                                        <div class="form-check-input circle-group" id="ssft-upper-lower-option">
                                                            <div></div>
                                                        </div>
                                                        <label class="form-check-label m-l-10">{{cpgtxt_upper_lower}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--option2 field-->
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="form-group" style="display: none">
                                                    <label style="margin-top: 8px; color: #666;">Option</label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="input-group mb-3">
                                                    <div class="form-check" style="line-height: 24px">
                                                        <div class="form-check-input circle-group" id="ssft-number-option">
                                                            <div></div>
                                                        </div>
                                                        <label class="form-check-label m-l-10">{{cpgtxt_number}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="input-group mb-3">
                                                    <div class="form-check" style="line-height: 24px">
                                                        <div class="form-check-input circle-group" id="ssft-sepcial-option">
                                                            <div></div>
                                                        </div>
                                                        <label class="form-check-label m-l-10">{{cpgtxt_special}} {{cpgtxt_characters}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--style name field-->
                                        <div class="row" style="display: none;">
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label style="margin-top: 8px; color: #666;">{{cpgtxt_style}}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" placeholder="" aria-label="ssft-style" id="ssft-style" name="ssft-style" aria-describedby="basic-addon2">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <div id="ssft-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="ssf_model_text_add()">
                                                <span>{{cbtntxt_add}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--create text modal end-->
        </div><!--/content-->
</template>
<style>
.table .odd td{
 border:0;
}
.table tr.odd.bot{
    border-bottom: 1px solid #e6e6e6;
}
.sf-tab-container{
    display: none;
}
.sf-tab-container.active{
    display: block;
}
/*han 2020-11-03 start*/
.form-check-input.circle-group{
    width: 16px;height: 16px; border-radius: 16px; border: 1px solid #bbbbbb;
    cursor: pointer;
}
.form-check-input.circle-group > div{
    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;
}
.form-check-input.circle-group.active > div{
    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;
}
/*han 2020-11-03 end*/
</style>
<script>
    import axios from "axios";

    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var vueOBJ = null;
    var pstart=1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;

    var pstart1=1;
    var pnum1 = pstart1;
    var pcnt1=5;
    var numg1 = 5;

    var pstart_n=1;
    var pnum_n = pstart_n;
    var pcnt_n=5;
    var numg_n = 5;
    // han 2020-11-03 start
    var pstart_text = 1;
    var pnum_text = pstart_text;
    var pcnt_text = 5;
    var numg_text = 5;
    var permss;
    var sel_val = '';
    var names_arr = new Array();

    function showSSFTextDlg() {
        $("#myAlertTextCreateModal").modal('show');
    }

    function deleteSiteText(id) {
        let postData = {
            id: id
        };
        axios.post('admin.deleteSiteText', postData)
            .then((response) => {
                let msg = response.data.msg;

                if (msg === "ok")
                {
                    vueOBJ.getSFTextList();
                } else {
                    console.log(response.data.message);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    export default {
        name: "SystemFieldsText",
        data(){
            return {
                pageid:'apps-website-fields-text-fav',
                mu_apps:'',
                musu_apps_website:'',
                mususu_apps_website_fields:'',
                musususu_apps_website_fields_text:'',
                btntxt_img:'',
                btntxt_text:'',
                btntxt_number:'',
                pgtxt_number:'',
                btntxt_email:'',
                btntxt_date:'',
                pgtxt_name:'',
                pgtxt_font:'',
                pgtxt_size:'',
                pgtxt_style:'',
                pgtxt_operation:'',
                btntxt_add:'',
                pgtxt_email:'',
                pgtxt_ssf_footerlimit:'',
                pgtxt_ssf_limit:'',
                btntxt_savechange:'',
                pgtxt_line:'',
                pgtxt_weight:'',
                pgtxt_createimage:'',
                pgtxt_createemail:'',
                pgtxt_width:'',
                pgtxt_height:'',
                pgtxt_pixels:'',
                pgtxt_createnumber:'',
                pgtxt_alphabet:'',
                pgtxt_upper_lower: '',
                pgtxt_special: '',
                pgtxt_characters: '',
                pgtxt_limitation: '',
                btntxt_change:'',
                btntxt_edit:'',
                btntxt_delete:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                btntxt_ok:'',
                btntxt_cancel:'',
            }
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_apps: function () {
                return this.mu_apps
            },
            cmusu_apps_website: function () {
                return this.musu_apps_website
            },
            cmususu_apps_website_fields: function () {
                return this.mususu_apps_website_fields
            },
            cmusususu_apps_website_fields_text: function () {
                return this.musususu_apps_website_fields_text
            },
            cbtntxt_img: function () {
                return this.btntxt_img
            },
            cbtntxt_text:function(){
                return this.btntxt_text
            },
            cbtntxt_number:function(){
                return this.btntxt_number
            },
            cbtntxt_email:function(){
                return this.btntxt_email
            },
            cbtntxt_date:function(){
                return this.btntxt_date
            },
            cbtntxt_add:function(){
                return this.btntxt_add
            },
            cpgtxt_name:function(){
                return this.pgtxt_name
            },
            cpgtxt_font:function(){
                return this.pgtxt_font
            },
            cpgtxt_width:function(){
                return this.pgtxt_width
            },
            cpgtxt_height:function(){
                return this.pgtxt_height
            },
            cpgtxt_pixels:function(){
                return this.pgtxt_pixels
            },
            cpgtxt_size:function(){
                return this.pgtxt_size
            },
            cpgtxt_style:function(){
                return this.pgtxt_style
            },
            cpgtxt_line: function () {
                return this.pgtxt_line
            },
            cpgtxt_createnumber: function () {
                return this.pgtxt_createnumber
            },
            cpgtxt_operation:function(){
                return this.pgtxt_operation
            },
            cpgtxt_ssf_footerlimit:function(){
                return this.pgtxt_ssf_footerlimit
            },
            cpgtxt_ssf_limit:function(){
                return this.pgtxt_ssf_limit
            },
            cbtntxt_savechange:function(){
                return this.btntxt_savechange
            },
            cpgtxt_weight:function(){
                return this.pgtxt_weight
            },
            cpgtxt_email:function(){
                return this.pgtxt_email
            },
            cpgtxt_createimage:function(){
                return this.pgtxt_createimage
            },
            cpgtxt_createemail:function(){
                return this.pgtxt_createemail
            },
            cpgtxt_number:function(){
                return this.pgtxt_number
            },
            cpgtxt_alphabet: function() {
                return this.pgtxt_alphabet
            },
            cpgtxt_upper_lower: function() {
                return this.pgtxt_upper_lower
            },
            cpgtxt_special: function() {
                return this.pgtxt_special
            },
            cpgtxt_characters: function() {
                return this.pgtxt_characters
            },
            cpgtxt_limitation:function(){
                return this.pgtxt_limitation
            },
            cbtntxt_change:function(){
                return this.btntxt_change
            },
            cbtntxt_edit:function(){
                return this.btntxt_edit
            },
            cbtntxt_delete:function(){
                return this.btntxt_delete
            },
            cpgtxt_wantdeleteitem:function () {
                return this.pgtxt_wantdeleteitem;
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },
            cbtntxt_ok:function () {
                return this.btntxt_ok;
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel;
            },


            contentchange: function () {
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    // console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            }
        },
        created() {

        },
        beforeMount() {
        },
        mounted() {
            /* fav part*/
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            permss = myjs.data.permissionDefinition();

            this.getSFTextList();

            //han 2020-11-03 start
            $("#ssft-letter-option, #ssft-upper-lower-option, #ssft-number-option, #ssft-sepcial-option").click(function () {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                } else {
                    $(this).addClass("active");
                }
            });
            //     han 2020-11-03 end
        },
        methods: {
            /* fav part */
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }

            },
            foottxtlimit(){
              var tval = $('#ssft_state_limit').val();
                let postData = {
                    value:tval
                };
                axios.post('admin.chageSiteFootMaxTxt', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        if(msg =="ok"){
                           alert('Sucess Saveed.');
                        }
                        else
                        {
                            console.log(response.data.msg);
                        }
                    }).catch(function (error) {
                    console.log(error);
                })

            },
            // han 2020-11-03 start
            ShowSSFTextDLG() {
                if (permss.pcreate == 1) {
                    $('#myAlertTextCreateModal .modal-title').text('Create Text');
                    $('#myAlertTextCreateModal #ssft-cid').val('0');
                    $('#myAlertTextCreateModal #ssft-text').val('');
                    $('#myAlertTextCreateModal #ssft-min-limitation').val('0');
                    $('#myAlertTextCreateModal #ssft-max-limitation').val('0');

                    if ($('#myAlertTextCreateModal #ssft-letter-option').hasClass('active'))
                        $('#myAlertTextCreateModal #ssft-letter-option').removeClass('active')
                    if ($('#myAlertTextCreateModal #ssft-upper-lower-option').hasClass('active'))
                        $('#myAlertTextCreateModal #ssft-upper-lower-option').removeClass('active')
                    if ($('#myAlertTextCreateModal #ssft-number-option').hasClass('active'))
                        $('#myAlertTextCreateModal #ssft-number-option').removeClass('active')
                    if ($('#myAlertTextCreateModal #ssft-sepcial-option').hasClass('active'))
                        $('#myAlertTextCreateModal #ssft-sepcial-option').removeClass('active')

                    $('#myAlertTextCreateModal #ssft-style').val('');

                    showSSFTextDlg();
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            //han 2020-11-03 start
            ssf_model_text_add() {
                var vueOBJ = this;
                var cid = $.trim($('#ssft-cid').val());
                var name = $.trim($('#ssft-text').val());
                var same_name = false;
                for (var i = 0; i < names_arr.length; i++){
                    if(name == names_arr[i]){
                        $("#myAlertTextCreateModal").modal('hide');
                        myjs.data.showAlert("pgtxt_existsname");
                        same_name = true;
                        break;
                    }
                }
                if(same_name)
                    return;
                var min_limit = $.trim($('#ssft-min-limitation').val());
                var max_limit = $.trim($('#ssft-max-limitation').val());
                var alphabet_option = $('#ssft-letter-option').hasClass('active') ? 1 : 0;
                var upper_lower_option = $('#ssft-upper-lower-option').hasClass('active') ? 1 : 0;
                var number_option = $('#ssft-number-option').hasClass('active') ? 1 : 0;
                var special_option = $('#ssft-sepcial-option').hasClass('active') ? 1 : 0;
                var style_name = $.trim($('#ssft-style').val());

                if (name === ""/* || style_name === ""*/) {
                    alert("you must fill empty fields.");
                } else {
                    let postData = {
                        cid: cid,
                        name: name,
                        min_limit: min_limit,
                        max_limit: max_limit,
                        alphabet_option: alphabet_option,
                        upper_lower_option: upper_lower_option,
                        number_option: number_option,
                        special_option: special_option,
                        style_name: style_name
                    };

                    axios.post('admin.insertTextStyle', postData)
                        .then((response) => {
                            let msg = response.data.msg;

                            if (msg === "ok") {
                                $("#myAlertTextCreateModal").modal('hide');

                                vueOBJ.getSFTextList();
                            } else {
                                console.log(response.data.message);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            },
            getSFTextList() {
                var vueOBJ = this;
                let postData = {
                    start: pstart_text,
                    cnt: pcnt_text,
                    filter: 1,
                };
                var btntxt_change= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                var btntxt_edit= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                var btntxt_delete= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');

                axios.post('admin.getTextStyleList', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        var total = response.data.total;

                        if (total <= 0) {
                            $("#sitefieldtextlists").html('');
                            $("#ssmu_page_nav_text").html('');
                            return;
                        }

                        if (msg === "ok") {
                            pstart_text = response.data.start;
                            var totalpage = response.data.totalpage;
                            var textlists = response.data.list;

                            var tag = "";

                            names_arr = new Array();

                            for (var i = 0; i < textlists.length; i ++)
                            {
                                var list = textlists[i];
                                var id = list.id;
                                var name = list.name;
                                names_arr.push(name);
                                var minvalue = list.minvalue;
                                var maxvalue = list.maxvalue;
                                var style_alpha = list.style_alpha;
                                var style_num = list.style_num;
                                var style_upper_lower = list.style_upper_lower;
                                var style_special = list.style_special;
                                var style_title = list.style_title;

                                var cls="";
                                if (i < textlists.length - 1)
                                    cls = "bot";
                                var alldata = name+"-"+minvalue+"-"+maxvalue+"-"+style_alpha+"-"+style_num+"-"+style_upper_lower+"-"+style_special+"-"+style_title;

                                tag += "<tr role='row' class='odd " + cls + "'>";
                                tag +=   "<td style='width: 30%; padding-left: 30px'>" + name + "</td>";
                                tag +=   "<td style='width: 30%; padding-left: 30px'>" + minvalue + " - " + maxvalue +"</td>";
                                tag +=   "<td style='width: 30%; padding-left: 30px'>" + style_title + "</td>";
                                tag +=   "<td style='padding-right: 20px'>";
                                tag +=     "<div class='form-group m-b-0'>";
                                tag +=       "<select class='my-border-radius-slt form-control float-right' data-cont='" + alldata + "' id='ssftextselect_" + id + "' name='ssftextselect'>";
                                tag +=          "<option value='' class='data-ajax' data-ajax='btntxt_edit' >"+btntxt_edit+"</option>";
                                tag +=          "<option value='change' class='data-ajax' data-ajax='btntxt_change' >"+btntxt_change+"</option>";
                                tag +=          "<option value='delete' class='data-ajax' data-ajax='btntxt_delete' >"+btntxt_delete+"</option>";
                                tag +=       "</select>";
                                tag +=     "</div>";
                                tag +=   "</td>";
                                tag += "</tr>";
                            }

                            $("#sitefieldtextlists").html(tag);

                            var nav_tag = "";
                            nav_tag += "<nav aria-label='...' class='mb-4'>";
                            nav_tag += "<ul class='pagination pagination-rounded justify-content-center'>";

                            var disable = "";
                            if (pstart_text == 1)
                                disable="disabled";
                            var prenum = parseInt(pstart_text) - 1;

                            nav_tag += "<li class='page-item " + disable + "'>";
                            nav_tag += "<a class='page-link' href='#' data-num='ssmunavtext_" + prenum + "'>";
                            nav_tag += "<i class='ti-angle-left'></i>";
                            nav_tag += "</a>";
                            nav_tag += "</li>";

                            pnum_text = pstart_text <= numg_text ? 1 : parseInt(pstart_text) - 1;

                            for (var idx = 0; idx < numg_text; idx ++)
                            {
                                var actv = "";
                                var aria_current = "";
                                var spantag = "";
                                var oid = "";

                                if (pnum_text == pstart_text) {
                                    actv = "active";
                                    aria_current = "aria-current='page'";
                                    spantag="<span class='sr-only'>(current)</span>";
                                } else {
                                    oid = "ssmunavtext_" + pnum_text;
                                }

                                nav_tag += "<li class='page-item  " + actv + "'  " + aria_current + ">";
                                nav_tag += "<a class='page-link' data-num='" + oid + "' href='#'>" + pnum_text + "  " + spantag + "</a>";
                                nav_tag += "</li>";

                                if (pnum_text == totalpage) break;

                                pnum_text = pnum_text + 1;
                            }

                            var nextnum = parseInt(pstart_text) + 1;
                            var edisble = "";

                            if (pstart_text == totalpage)
                                edisble = "disabled";

                            nav_tag += "<li class='page-item " + edisble + "'>";
                            nav_tag += "<a class='page-link' data-num='ssmunavtext_" + nextnum + "' href='#'>";
                            nav_tag += "<i class='ti-angle-right'></i>";
                            nav_tag += "</a>";
                            nav_tag += "</li>";

                            nav_tag += "</ul>";
                            nav_tag += "</nav>";

                            $("#ssmu_page_nav_text").html(nav_tag);

                            $("a[data-num^='ssmunavtext_']").click(function () {
                                var oid = $(this).attr("data-num");
                                pstart_text = oid.split("_")[1];
                                vueOBJ.getSFTextList();
                            });

                            $("select[id^='ssftextselect_']").change(function () {
                                var tid = $(this).attr("id");
                                var t_id = tid.split("_")[1];
                                sel_val = $(this).val();

                                if (sel_val != "") {
                                    if (sel_val == "change")
                                    {
                                        if (permss.pwrite == 1) {
                                            var alldata = $(this).attr("data-cont");

                                            var name = alldata.split("-")[0];
                                            var minvalue = alldata.split("-")[1];
                                            var maxvalue = alldata.split("-")[2];
                                            var style_alpha = alldata.split("-")[3];
                                            var style_num = alldata.split("-")[4];
                                            var style_upper_lower = alldata.split("-")[5];
                                            var style_special = alldata.split("-")[6];
                                            var style_title = alldata.split("-")[7];

                                            $("#myAlertTextCreateModal .modal-title").text("Change Text");
                                            $("#myAlertTextCreateModal #ssft-cid").val(t_id);
                                            $("#myAlertTextCreateModal #ssft-text").val(name);
                                            $("#myAlertTextCreateModal #ssft-min-limitation").val(minvalue);
                                            $("#myAlertTextCreateModal #ssft-max-limitation").val(maxvalue);

                                            if (style_alpha === "1") {
                                                $("#myAlertTextCreateModal #ssft-letter-option").addClass("active");
                                            } else {
                                                if ($("#myAlertTextCreateModal #ssft-letter-option").hasClass("active"))
                                                    $("#myAlertTextCreateModal #ssft-letter-option").removeClass("active");
                                            }
                                            if (style_num === "1") {
                                                $("#myAlertTextCreateModal #ssft-number-option").addClass("active");
                                            } else {
                                                if ($("#myAlertTextCreateModal #ssft-number-option").hasClass("active"))
                                                    $("#myAlertTextCreateModal #ssft-number-option").removeClass("active");
                                            }
                                            if (style_upper_lower === "1") {
                                                $("#myAlertTextCreateModal #ssft-upper-lower-option").addClass("active");
                                            } else {
                                                if ($("#myAlertTextCreateModal #ssft-upper-lower-option").hasClass("active"))
                                                    $("#myAlertTextCreateModal #ssft-upper-lower-option").removeClass("active");
                                            }
                                            if (style_special === "1") {
                                                $("#myAlertTextCreateModal #ssft-sepcial-option").addClass("active");
                                            } else {
                                                if ($("#myAlertTextCreateModal #ssft-sepcial-option").hasClass("active"))
                                                    $("#myAlertTextCreateModal #ssft-sepcial-option").removeClass("active");
                                            }

                                            $("#myAlertTextCreateModal #ssft-style").val(style_title);

                                            showSSFTextDlg();
                                        }
                                        else
                                            myjs.data.showAlert('pgtxt_notpermission');
                                    } else {
                                        if (permss.pdelete == 1) {
                                            myjs.data.confirmAlert(deleteSiteText, t_id, 'pgtxt_wantdeleteitem');
                                        }
                                        else
                                            myjs.data.showAlert('pgtxt_notpermission');
                                    }
                                }
                            })
                        } else {
                            console.log(response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },

            //    han 2020-11-03 end
        }/*end method*/
    }
</script>
