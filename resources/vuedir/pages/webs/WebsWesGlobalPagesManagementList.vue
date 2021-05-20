<template>
    <div style="width: 100%">
        <div style="display: none">{{contentchange}}</div>
        <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
            <div class="page_index_tab" style="width: 70px;">
                <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="page_management_list">{{cpgtxt_list}}</div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 page_slider_content_list active"  id="wwgp_pagelist">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title">{{cpgtxt_filters}}</div>
                    <div class="page1_content_content page2_content_text" style="padding:1.5rem">
                        <div class="d-flex flex-wrap">
                            <div class="d-flex col-sm-4">
                                <div class="col-md-3">{{cpgtxt_language}}</div>
                                <div class="col-md-8">
                                    <select id="wwgp_management_language" name="wwgp_management_language" class="form-control page2_input" @change="wwgp_management_search">
                                        <option value="" selected="selected" style="font-weight: bold">---</option>
                                    </select>
                                </div>
                            </div>
                            <div class="d-flex col-sm-6">
                                <div class="col-md-2">{{cpgtxt_search}}</div>
                                <div class="col-md-8">
                                    <input type="text" class="form-control page2_input" id="wwgpp_list_s_c" name="wwgpp_list_s_c">
                                    <div class="input-group-append input-group-append-my cursor-pointer" @click="wwgp_management_search">
                                        <span class="input-group-text input-group-text-my" id="basic-addon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search ">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page1_content_content_bar">
                    <div style="padding-top: 20px; border: 0px; display: flex;">
                        <div class="page1_content_content_title" style="width: 50%;">{{cpgtxt_list}}</div>
                        <div class="col-md-6 text-right">
                            <button type="button" class="btn page1_custom_select_btn mb-sm-2" id="pageCreate_btn" style="height: 40px; border-radius: 20px; padding: 0 25px; margin-right: 15px;" @click="showWWPPModalBtn()">
                                + {{cpgtxt_create}} {{cpgtxt_page}}
                            </button>
                        </div>
                    </div>
                    <div class="table-responsive" id="list_container">

                        <table id="user-list" role="grid" aria-describedby="user-list_info" class="table table-lg  no-footer" style="margin:10px 0">
                            <thead>
                            <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                <th style="width:40px!important; border: 0;"></th>
                                <th style="border: 0;">{{cpgtxt_page}} {{cpgtxt_name}}</th>
                                <th style="border: 0;">{{cpgtxt_pagetype}}</th>
                                <th style="border: 0;">{{cpgtxt_language}}</th>
                                <th style="border: 0;">{{cpgtxt_title}}</th>
                                <th style="border: 0;">{{pgtxt_author}}</th>
                                <th style="border: 0;">{{pgtxt_time}}</th>
                                <th style="border: 0;">{{cpgtxt_url}}</th>
                                <th style="border: 0;">{{cpgtxt_status}}</th>
                                <th style="text-align:right; padding-right: 40px;">
                                    <div id="wwpp_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody id="wwgpp_list_container">

                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3" style="display: flex">
                        <div style="width: auto; padding-left: 15px; padding-right: 15px; line-height: 35px;">
                            <span>{{cpgtxt_setupthe}}</span>
                        </div>
                        <div class="input-group" style="width: 50%">
                            <select id="wwgpp_list_nav_cnt" name="wwgpp_list_nav_cnt" class="form-control page2_input">
                                <option value="5" selected="selected">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                    </div>
                    <div id="ssmu_page_nav" class="col-md-7">

                    </div>
                </div>
            </div>

        </div>
        <!-- Add Boxed Modal start -->
        <div class="modal fade" id="ModalAddWWPPContent">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 600px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_BoxedContent_Title">{{cpgtxt_create}} {{cpgtxt_page}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="col-md-12" style="text-align: left; margin-left: 10px;">
                        <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="setWWPPtypeBtn()">
                            <span>+ {{cpgtxt_basic}} </span>
                        </div>
                    </div>
                    <div class="modal-body" id="AddWWPPContentModalBody" style="padding: 0px 0rem 2rem">
                        <div class="col-md-12" style="margin-top: 20px;">
                            <div class="col-md-12" style="text-align: center;">
                                <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="CreateWWPPContentBtn()">
                                    <span>+ {{cpgtxt_create}} </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add Boxed Modal end -->
    </div>
</template>
<style>
    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .page1_content_content_bottom svg{
        color: #6b85e2;
    }
    .page1_content_content_title{
        border: 0;
    }
    .form-control.page2_input:focus,.form-control.page2_input:hover{
        background-color:#d6d6d6;
    }
    .table thead th{
        text-transform:none;
        font-size: 14px;
    }
    .table thead th.th-lp-20, .table tbody td.th-lp-20{
        padding-left: 20px;
    }
    .table thead th.th-rp-20, .table tbody td.th-rp-20{
        padding-right: 20px;
    }
    .tox.tox-tinymce{
        border-radius: 20px;
        width: 100% !important;
        height: 350px;
        min-height: 350px !important;
    }
    .input-group-append-my{
        border-top-right-radius:1.25rem;
        border-bottom-right-radius:1.25rem;
        position: absolute;
        top: 3px;
        right: 16px;
    }
    .input-group-text-my{
        background-color: #d6d6d6;
        border-top-right-radius:1.25rem;
        border-bottom-right-radius:1.25rem;
    }
</style>

<script>

    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import Editor from '@tinymce/tinymce-vue';
    import axios from "axios";

    let vueOBJ=null;
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var numg = 5;
    var edit_id = 0;
    var checked_del_items = new Array();
    var permss;
    var head_list = new Array();
    var foot_list = new Array();
    var layout_list = new Array();
    var is_head = 0;
    var is_foot = 0;
    var transedlang='en-1';

    function pageNavigation(totalpage) {
        var nav_tag='';
        nav_tag+='<nav aria-label="..." class="mb-4">';
        nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

        var disble="";
        if(myjs.data.getPageIndex()==1)
            disble="disabled"

        var prenum= parseInt(myjs.data.getPageIndex()) - 1;

        nav_tag+='<li class="page-item  '+disble+' ">';
        nav_tag+='<a class="page-link" href="#"  id="ssmunavnum_' + prenum + '" >';
        nav_tag+='<i class="ti-angle-left"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        var pnum = myjs.data.getPageIndex() <= numg ? 1 : parseInt(myjs.data.getPageIndex()) - 1;

        for(var idx = 0; idx < numg; idx++)
        {
            var actv="";
            var aria_current='';
            var spantag='';
            var oid='';

            if(pnum == myjs.data.getPageIndex())
            {
                actv='active';
                aria_current='aria-current="page"';
                spantag='<span class="sr-only">(current)</span>';
            }
            else
                oid="ssmunavnum_" + pnum;

            nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
            nav_tag+='<a class="page-link" id="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
            nav_tag+='</li>';

            if(pnum == totalpage) break;

            pnum = pnum + 1;
        }

        var nextnum= parseInt(myjs.data.getPageIndex()) + 1;

        var edisble="";
        if(myjs.data.getPageIndex() == totalpage)
            edisble="disabled";

        nav_tag+='<li class="page-item '+edisble+' ">';
        nav_tag+='<a class="page-link" id="ssmunavnum_' + nextnum + '" href="#">';
        nav_tag+='<i class="ti-angle-right"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        nav_tag+='</ul>';
        nav_tag+='</nav>';

        $('#ssmu_page_nav').html(nav_tag);

        /* events { */
        $('a[id^="ssmunavnum_"]').click(function(){
            var oid = $(this).attr("id");
            myjs.data.setPageIndex(oid.split('_')[1]);
            getPagesContentList();
        });
    }
    function getLanuage(stored_langs){
        var tags='';
        tags +='<option value="" style="font-weight: bold">---</option>';
        for (var j = 0; j < stored_langs.length; j++)
        {
            var obj = stored_langs[j];
            var iso = obj.iso;
            var dialCode = obj.dialcode;
            var cname = obj.name;
            var status = obj.status;
            var dcont=iso+'-'+dialCode;
            if(status=='enable'){
                tags +='<option value="'+dcont+'" >'+cname+'</option>';
            }

        }
        $('#wwgp_management_language').html(tags);//list of lists
    }
    function showPagesContentList(lists) {
        $('#wwgpp_list_container').html('');
        var btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
        var btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var pgctl_active = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_active');
        var pgctl_block = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_block');
        var tags = '';
        for(var i = 0; i < lists.length; i++){
            var id = lists[i].id;
            var pagename = lists[i].page_name;
            var title = lists[i].title;
            if(title == null)
                title = '';
            var page_type = lists[i].page_type;
            var language = lists[i].language;
            var author = lists[i].author;
            if(author == null)
                author = '';
            var time = lists[i].created_at;
            var url = lists[i].url;
            var status = lists[i].status;
            var trans = lists[i].trans;

            tags += '<tr class="wwpp_content_list-' + id + '" data-id="' + id + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="wwppCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + pagename + '</td>';
            tags += '   <td>' + page_type + '</td>';
            tags += '   <td>' + language + '</td>';
            tags += '   <td>' + title + '</td>';
            tags += '   <td>' + author + '</td>';
            tags += '   <td>' + time + '</td>';
            tags += '   <td>' + url + '</td>';
            if(status == 1)
                tags += '   <td class="data-ajax" data-ajax="pgctl_active">' + pgctl_active + '</td>';
            else
                tags += '   <td class="data-ajax" data-ajax="pgctl_block">' + pgctl_block + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="wwpp_content_list_edit-'+id+'" name="wwpp_content_list_edit-'+id+'" data-name="'+pagename+'" data-lang="'+trans+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="active" class="data-ajax" data-ajax="pgctl_active">'+pgctl_active+'</option>';
            tags += '               <option value="block" class="data-ajax" data-ajax="pgctl_block">'+pgctl_block+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#wwgpp_list_container').html(tags);

        $('input[id^="wwppCheckbox_"]').change(function() {
            var id = $(this).attr("id");
            var del_id = id.split('_')[1];
            if ($(this).is(':checked')) {
                checked_del_items.push(del_id);
            }
            else{
                const idx = checked_del_items.indexOf(del_id);
                if (idx > -1)
                    checked_del_items.splice(idx, 1);
            }
        });

        $('select[id^="wwpp_content_list_edit-"]').change(function(){
            var id = $(this).attr("id");
            var pagename = $(this).attr("data-name");
            var lang = $(this).attr("data-lang");
            edit_id = id.split('-')[1];
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if(permss.pwrite == 1) {
                    vueOBJ.setEdit(edit_id);
                    myjs.data.setEditLang(lang);
                    myjs.data.setEditPageName(pagename);
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "active") {
                if(permss.pwrite == 1) {
                    changePagesStatus(edit_id, 1);
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
            else if (sel_val == "block") {
                if(permss.pwrite == 1) {
                    changePagesStatus(edit_id, 0);
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
            else if (sel_val == "delete") {
                if(permss.pcreate == 1) {
                    myjs.data.confirmAlert(deletePagesContentList, edit_id, 'pgtxt_wantdeleteitem');
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });
    }

    function getPagesContentList() {
        transedlang = $('#wwgp_management_language').val();
        var search = $('#wwgpp_list_s_c').val();
        $.ajax({
            url: 'admin.wwppGetContent',
            data: {
                trans:transedlang,
                userid:userid,
                search:search,
                pstart:myjs.data.getPageIndex(),
                pcnt:myjs.data.getRowCount()
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists != null && lists != '')
                        showPagesContentList(lists);
                    else
                        $('#wwgpp_list_container').html('');
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function changePagesStatus(edit_id, status) {
        transedlang = $('#wwgp_management_language').val();
        var search = $('#wwgpp_list_s_c').val();
        $.ajax({
            url: 'admin.wwppChangeStatus',
            data: {
                trans:transedlang,
                editid:edit_id,
                search:search,
                status:status,
                pstart:myjs.data.getPageIndex(),
                pcnt:myjs.data.getRowCount()
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists != null && lists != '')
                        showPagesContentList(lists);
                    else
                        $('#wwgpp_list_container').html('');
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function deletePagesContentList(edit_id) {
        transedlang = $('#wwgp_management_language').val();
        var search = $('#wwgpp_list_s_c').val();
        $.ajax({
            url: 'admin.wwppDeleteContent',
            data: {
                trans:transedlang,
                editid:edit_id,
                userid:userid,
                search:search,
                pstart:myjs.data.getPageIndex(),
                pcnt:myjs.data.getRowCount()
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists != null && lists != '')
                        showPagesContentList(lists);
                    else
                        $('#wwgpp_list_container').html('');
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function allDeletePagesContentList() {
        transedlang = $('#wwgp_management_language').val();
        var search = $('#wwgpp_list_s_c').val();
        $('#wwpp_selected_all_delete').click(function () {
            $.ajax({
                url: 'admin.wwppAllDeleteContent',
                data: {
                    trans:transedlang,
                    ids:checked_del_items,
                    userid:userid,
                    search:search,
                    pstart:myjs.data.getPageIndex(),
                    pcnt:myjs.data.getRowCount()
                },
                type: 'POST',
                success: function (data) {
                    if (data.msg === "ok") {
                        var lists = data.lists;
                        if(lists != null && lists != '')
                            showPagesContentList(lists);
                        else
                            $('#wwgpp_list_container').html('');
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                    } else {
                        console.log(data.msg);
                    }
                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        });
    }



    export default {
        name: "WebsWesGlobalPagesManagementList",
        components: {

        },
        data(){
            return {
                pgtxt_list:'',
                pgtxt_pagetype:'',
                pgtxt_page:'',
                pgtxt_title:'',
                pgtxt_url:'',
                pgtxt_filters:'',
                pgtxt_name:'',
                btntxt_edit:'',
                btntxt_delete:'',
                btntxt_change:'',
                btntxt_cancel:'',
                pgtxt_create:'',
                pgtxt_setupthe:'',
                pgtxt_basic:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                pgtxt_language:'',
                pgtxt_author:'',
                pgtxt_time:'',
                pgtxt_status:'',
                pgtxt_search:'',
            }
        },
        created() {

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

            this.getWWGStoredLang();
        },
        computed: {
            cpgtxt_list:function () {
                return this.pgtxt_list
            },
            cpgtxt_pagetype:function () {
                return this.pgtxt_pagetype
            },
            cpgtxt_page:function () {
                return this.pgtxt_page
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_url:function () {
                return this.pgtxt_url
            },
            cpgtxt_name:function () {
                return this.pgtxt_name
            },
            cpgtxt_filters:function () {
                return this.pgtxt_filters
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete
            },
            cbtntxt_change:function () {
                return this.btntxt_change
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel
            },
            cpgtxt_create:function () {
                return this.pgtxt_create
            },
            cpgtxt_setupthe:function () {
                return this.pgtxt_setupthe
            },
            cpgtxt_basic:function () {
                return this.pgtxt_basic
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
            cpgtxt_language:function () {
                return this.pgtxt_language;
            },
            cpgtxt_author:function () {
                return this.pgtxt_author;
            },
            cpgtxt_time:function () {
                return this.pgtxt_time;
            },
            cpgtxt_status:function () {
                return this.pgtxt_status;
            },
            cpgtxt_search:function () {
                return this.pgtxt_search;
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
        methods:{
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
            },
            initpage()
            {
                $('#userid').val(userid);
                getPagesContentList();
                allDeletePagesContentList();
                $('input#wwgpp_list_s_c').on('keyup', function() {
                    $('#wwpp_search').val($('#wwgpp_list_s_c').val());
                    getPagesContentList();
                });
            },
            getWWGStoredLang(){
                axios.post('admin.getWWGStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        var stored_langs = response.data.langlist;
                        if(stored_langs!=''){
                            stored_langs = $.parseJSON(stored_langs);
                            getLanuage(stored_langs);
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });

                this.initpage();
            },
            setWWPPtypeBtn(){

            },
            showWWPPModalBtn(){
                if(permss.pcreate == 1) {
                    $('#ModalAddWWPPContent').modal('show');
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            CreateWWPPContentBtn(){
                vueOBJ.setEdit(0);
            },
            wwgp_management_search(){
                getPagesContentList();
            },
            setEdit(id){
                $('#ModalAddWWPPContent').modal('hide');
                myjs.data.setEditID(id);
                this.$emit("fromchild", 1);
            }

        }//method

    }
</script>
