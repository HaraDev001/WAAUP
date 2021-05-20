<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_apps_website_fields_number}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_apps}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_apps_website}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_website_fields}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_apps_website_fields_number}}
                          <a href="#" id="apps-website-fields-number-fav"  data-status="off" data-page-info="Number_apps-website-fields-number">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>


            <div id="SSFContainer_3" class="sf-tab-container active" style="margin-top:20px;">
                <div class="row"><!--{{templang}}-->
                    <div class="col-md-12">
                        <div class="card border-0 m-b-10 text-right">
                            <div>
                                <div id="system-field-num-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="ShowSSFNumDLG()">
                                    <span>+ {{ cbtntxt_add }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12"  style="padding-top:10px;">
                        <div class="card" style="padding: 3px 20px;margin-bottom:1rem">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive">
                                        <table role="grid" aria-describedby="user-list_info" class="table table-lg  no-footer m-b-0">
                                            <tbody>
                                            <tr role="row" class="odd">
                                                <td style="width:23%">{{cpgtxt_name}}</td>
                                                <td style="width: 15%">{{cpgtxt_number}}</td>
                                                <td style="width:15%">{{cpgtxt_font}} {{cpgtxt_size}}</td>
                                                <td style="width:15%">{{cpgtxt_line}} {{cpgtxt_height}}</td>
                                                <td style="width:25%">{{cpgtxt_font}} {{cpgtxt_weight}} & {{cpgtxt_style}}</td>
                                                <td style="text-align:end;">{{cpgtxt_operation}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--/title part-->

                    <div class="col-md-12"  style="padding-top:10px;">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive">

                                        <table role="grid" aria-describedby="user-list_info" class="table table-lg  no-footer" style="margin-top:1rem">
                                            <tbody id="sitefieldnumlists">
                                            <!--<tr role="row" class="odd bot">
                                                <td style="width:30%; padding-left:30px">Logo001</td>
                                                <td style="width:30%">135*50</td>
                                                <td style="width:30%">Style 1</td>
                                                <td style="padding-right:20px">
                                                    <div class="form-group m-b-0">
                                                        <select class="my-border-radius-slt form-control float-right" id="ssf_logo1" name="ssf_logo1">
                                                            <option value="">Edit</option>
                                                            <option value="active">Active</option>
                                                            <option value="inactive">Inactive</option>
                                                            <option value="block">Block</option>
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
                </div>

                <div class="row">
                    <div id="sfn_num_nav" class="col-md-12">
                        <!-- <nav aria-label="..." class="mb-4">
                             <ul class="pagination pagination-rounded justify-content-center">
                                 <li class="page-item  disabled ">
                                     <a class="page-link" href="#" id="ssmunavnum_0">
                                         <i class="ti-angle-left"></i>
                                     </a>
                                 </li>
                                 <li class="page-item active" aria-current="page">
                                     <a class="page-link" id="" href="#">1  <span class="sr-only">(current)</span></a>
                                 </li>
                                 <li class="page-item "><a class="page-link" id="ssmunavnum_2" href="#">2  </a></li>
                                 <li class="page-item "><a class="page-link" id="ssmunavnum_3" href="#">3  </a></li>
                                 <li class="page-item "><a class="page-link" id="ssmunavnum_4" href="#">4  </a></li>
                                 <li class="page-item  "><a class="page-link" id="ssmunavnum_5" href="#"><i class="ti-angle-right"></i></a></li>
                             </ul>
                         </nav>-->
                    </div>
                </div><!--/nav page-->

            </div><!--/SSFContainer_3 Number-->

            <div class="modal fade" id="myAlertNumAddModal">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" style="color: #055ada;font-size: 17px;font-weight:800;padding-top: 10px;padding-left: 10px;">{{cpgtxt_createnumber}}</h4>
                            <p id="sfn_alert" style="display: none;padding:5px 10px;border-radius:20px;">Create image area.</p>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body" id="myAlertMumModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="panel" id="tab3">
                                <form id="ssfi-num-add-frm">
                                    <div class="row" style="padding-bottom: 10px;">
                                        <div class="col-md-12">
                                            <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                        </div>
                                        <div style="margin: 10px 10px 0px 10px;">
                                            <div class="row" style="padding: 10px">
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_name}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-11" style="padding-left: 62px;">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" style="width: 300px;"  placeholder="" aria-label="ssfn-name" id="ssfn-name" aria-describedby="basic-addon2">
                                                    </div>
                                                </div>

                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_number}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-11" style="padding-left: 62px;">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" style="width: 300px;"  placeholder="" aria-label="ssfn-fnumber" id="ssfn-fnumber" aria-describedby="basic-addon2">
                                                    </div>
                                                </div>

                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_font}} {{cpgtxt_size}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-11" style="padding-left: 62px;">
                                                    <div class="input-group mb-3" style="align-items:center;">
                                                        <div style="width:85%;">
                                                            <input type="number" class="form-control" style="width: 100%;"  placeholder="" aria-label="ssfn-fsize" id="ssfn-fsize" aria-describedby="basic-addon2">
                                                        </div>
                                                        <div class="p-l-10">{{cpgtxt_pixels}}</div>
                                                    </div>
                                                </div>

                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_line}} {{cpgtxt_height}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-11" style="padding-left: 62px;">
                                                    <div class="input-group mb-3" style="align-items:center;">
                                                        <div style="width:85%;">
                                                            <input type="number" class="form-control" style="width:100%;"  placeholder="" aria-label="ssfn-lineheight" id="ssfn-lineheight" aria-describedby="basic-addon2">
                                                        </div>
                                                        <div class="p-l-10">{{cpgtxt_pixels}}</div>
                                                    </div>
                                                </div>

                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_font}} {{cpgtxt_weight}} & {{cpgtxt_style}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-11" style="padding-left: 62px;">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" style="width: 300px;"  placeholder="" aria-label="ssfn-fwstyle" id="ssfn-fwstyle" aria-describedby="basic-addon2">
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <div id="ssfn-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="ssf_model_num_add()">
                                                <span>+ {{cbtntxt_add}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="ssfn-id" value=""/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    var permss;
    var sel_val = '';

    function showSSFIMGDlg()
    {
        $("#myAlertImgAddModal").modal('show');
        var dh = Math.max($(document).height(), $(document.body).height());
    }
    function showSSFEmailDlg()
    {
        $("#myAlertEmailAddModal").modal('show');
    }
    function showSSFNumberDlg(){
        $("#myAlertNumAddModal").modal('show');
    }
    function deleteSiteNumber(id)
    {
        let postData = {
            id: id,
            value:sel_val
        };
        axios.post('admin.deleteSiteNumber', postData)
            .then((response) => {
                let msg = response.data.msg;
                if(msg =="ok")
                {

                    vueOBJ.getSFNumList();
                }
                else
                {
                    console.log(response.data.msg);
                }
            }).catch(function (error) {
            console.log(error);
        })
    }
    export default {
        data(){
            return {
                pageid:'apps-website-fields-number-fav',
                mu_apps:'',
                musu_apps_website:'',
                mususu_apps_website_fields:'',
                musususu_apps_website_fields_number:'',
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
            cmusususu_apps_website_fields_number: function () {
                return this.musususu_apps_website_fields_number
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
            this.getSFNumList();
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
            ShowSSFNumDLG(){
                if (permss.pcreate == 1) {
                    $('#myAlertNumAddModal .modal-title').text('Create Number');
                    $('#myAlertNumAddModal #ssfn-name').val('');
                    $('#myAlertNumAddModal #ssfn-fnumber').val('');
                    $('#myAlertNumAddModal #ssfn-fsize').val('');
                    $('#myAlertNumAddModal #ssfn-lineheight').val('');
                    $('#myAlertNumAddModal #ssfn-fwstyle').val('');
                    $('#myAlertNumAddModal #ssfn-id').val('');
                    $('#myAlertNumAddModal #ssfn-model-add span').text('+ Add');

                    showSSFNumberDlg();
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            ssf_model_num_add(){
                var fname = $.trim($('#ssfn-name').val());
                var fnumber = $.trim($('#ssfn-fnumber').val());
                var fsize = $.trim($('#ssfn-fsize').val());
                var lineheight = $.trim($('#ssfn-lineheight').val());
                var fwstyle = $.trim($('#ssfn-fwstyle').val());

                if(fname == '' || fnumber == '' || fsize == '' || lineheight == '')
                {
                    alert("you must empty this fields.");
                }
                else
                {
                    var id = $('#myAlertNumAddModal #ssfn-id').val();
                    var etype='save';
                    if(id != '' && parseInt(id) > 0){
                        etype='change';
                    }

                    let postData = {
                        fname:fname,
                        fnumber:fnumber,
                        fsize:fsize,
                        lineheight:lineheight,
                        fwstyle:fwstyle,
                        etype:etype,
                        cid:parseInt(id)
                    };
                    axios.post('admin.savesitefieldnumber', postData)
                        .then((response) => {
                            let msg = response.data.msg;
                            if(msg =="ok")
                            {
                                $('#ssfn-name').val('');
                                $('#ssfn-fnumber').val('');
                                $('#ssfn-fsize').val('');
                                $('#ssfn-lineheight').val('');
                                $('#ssfn-fwstyle').val('');
                                $('#myAlertNumAddModal #ssfn-id').val('');

                                vueOBJ.getSFNumList();

                                $("#myAlertNumAddModal").modal('hide');
                            }
                            else
                            {
                              console.log(response.data.message);
                            }
                        }).catch(function (error) {
                        console.log(error);
                    })

                }
            },
            getSFNumList(){
                let postData = {
                    start: pstart_n,
                    cnt: pcnt_n,
                    filter: 1
                };
                var btntxt_change= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                var btntxt_edit= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                var btntxt_delete= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');

                axios.post('admin.getSiteNumlist', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        var total=response.data.total;
                        if(total<=0)
                        {
                            $('#sitefieldnumlists').html('');
                            $('#sfn_num_nav').html('');
                            return;
                        }

                        if(msg =="ok" && total > 0)
                        {

                            pstart_n=response.data.start;
                            var totalpage=response.data.totalpage;
                            var logolists =  response.data.list;
                            //console.log(logolists);
                            var tag="";
                            for(var i=0;i<logolists.length;i++)
                            {
                                var list = logolists[i];
                                var id = list.id;
                                var fname = list.fname;
                                var fnumber = list.fnumber;
                                var fontsize = list.fontsize;
                                var flineheight = list.flineheight;
                                var fweightstyle = list.fweightstyle;

                                var cls='';
                                if(i<logolists.length -1)
                                    cls='bot';
                                var alldate=fname+'-'+fnumber+'-'+fontsize+'-'+flineheight+'-'+fweightstyle;

                                tag+='<tr role="row" class="odd '+cls+'">';
                                tag+='<td style="width:26%; padding-left:30px">'+fname+'</td>';
                                tag+='<td style="width:16%">'+fnumber+'</td>';
                                tag+='<td style="width:16%">'+fontsize+'</td>';
                                tag+='<td style="width:16%">'+flineheight+'</td>';
                                tag+='<td style="width:26%">'+fweightstyle+'</td>';
                                tag+='<td style="padding-right:20px">';
                                tag+=        '<div class="form-group m-b-0">';
                                tag+=            '<select class="my-border-radius-slt form-control float-right" data-cont="'+alldate+'" id="ssfnumselect_'+id+'" name="ssfnumselect">';
                                tag+=            '<option value="" class="data-ajax" data-ajax="btntxt_edit" >'+btntxt_edit+'</option>';
                                tag+=            '<option value="change" class="data-ajax" data-ajax="btntxt_change" >'+btntxt_change+'</option>';
                                tag+=            '<option value="delete" class="data-ajax" data-ajax="btntxt_delete" >'+btntxt_delete+'</option>';
                                tag+=            '</select>';
                                tag+=        '</div>';
                                tag+='</td>';
                                tag+='</tr>';

                            }

                            $('#sitefieldnumlists').html(tag);

                            var nav_tag='';
                            nav_tag+='<nav aria-label="..." class="mb-4">';
                            nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

                            var disble="";
                            if(pstart_n==1)
                                disble="disabled"

                            var prenum= parseInt(pstart_n) - 1;

                            nav_tag+='<li class="page-item  '+disble+' ">';
                            nav_tag+='<a class="page-link" href="#"  data-num="ssmunavnum_' + prenum + '" >';
                            nav_tag+='<i class="ti-angle-left"></i>';
                            nav_tag+='</a>';
                            nav_tag+='</li>';

                            //alert(totalpage);
                            pnum_n = pstart_n <= numg_n ? 1 : parseInt(pstart_n) - 1;
                            // console.log("total:"+total);

                            for(var idx = 0; idx < numg_n; idx++)
                            {

                                var actv="";
                                var aria_current='';
                                var spantag='';
                                var oid='';

                                if(pnum_n==pstart_n)
                                {
                                    actv='active';
                                    aria_current='aria-current="page"';
                                    spantag='<span class="sr-only">(current)</span>';
                                }
                                else
                                    oid="ssmunavnum_" + pnum_n;

                                nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
                                nav_tag+='<a class="page-link" data-num="' + oid + '"  href="#" >' + pnum_n + '  ' + spantag + '</a>';
                                nav_tag+='</li>';

                                if(pnum_n==totalpage) break;

                                pnum_n = pnum_n + 1;

                            }

                            var nextnum= parseInt(pstart_n) + 1;
                            var edisble="";
                            if(pstart_n==totalpage)
                                edisble="disabled"

                            nav_tag+='<li class="page-item '+edisble+' ">';
                            nav_tag+='<a class="page-link" data-num="ssmunavnum_' + nextnum + '" href="#">';
                            nav_tag+='<i class="ti-angle-right"></i>';
                            nav_tag+='</a>';
                            nav_tag+='</li>';

                            nav_tag+='</ul>';
                            nav_tag+='</nav>';

                            $('#sfn_num_nav').html(nav_tag);

                            /* events { */
                            $('a[data-num^="ssmunavnum_"]').click(function(){
                                var oid=$(this).attr("data-num");
                                pstart_n = oid.split('_')[1];
                                vueOBJ.getSFNumList();
                            });

                            $('select[id^="ssfnumselect_"]').change(function(){
                                var tid=$(this).attr("id");
                                var t_id=tid.split("_")[1];
                                sel_val=$(this).val();
                                if(sel_val!='')
                                {
                                    if(sel_val=='change')
                                    {
                                        if (permss.pwrite == 1) {
                                            var alldate = $(this).attr("data-cont");
                                            var fname = alldate.split('-')[0];
                                            var fnumber = alldate.split('-')[1];
                                            var fontsize = alldate.split('-')[2];
                                            var flineheight = alldate.split('-')[3];
                                            var fweightstyle = alldate.split('-')[4];

                                            $('#myAlertNumAddModal .modal-title').text('Change Number');
                                            $('#myAlertNumAddModal #ssfn-name').val(fname);
                                            $('#myAlertNumAddModal #ssfn-fnumber').val(fnumber);
                                            $('#myAlertNumAddModal #ssfn-fsize').val(fontsize);
                                            $('#myAlertNumAddModal #ssfn-lineheight').val(flineheight);
                                            $('#myAlertNumAddModal #ssfn-fwstyle').val(fweightstyle);
                                            $('#myAlertNumAddModal #ssfn-id').val(t_id);
                                            $('#myAlertNumAddModal #ssfn-model-add span').text('Change');

                                            showSSFNumberDlg();
                                        }
                                        else
                                            myjs.data.showAlert('pgtxt_notpermission');
                                    }
                                    else
                                    {
                                        if (permss.pdelete == 1) {
                                            myjs.data.confirmAlert(deleteSiteNumber, t_id, 'pgtxt_wantdeleteitem');
                                        }
                                        else
                                            myjs.data.showAlert('pgtxt_notpermission');
                                    }
                                }
                            });
                            /* } events */

                        }
                        else
                        {

                            console.log(response.data.message);
                        }
                    }).catch(function (error) {
                    console.log(error);
                })
            },

        }/*end method*/
    }
</script>
