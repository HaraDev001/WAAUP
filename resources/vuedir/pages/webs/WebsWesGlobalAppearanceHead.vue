<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_appearance_head}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_appearance}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_appearance_head}}
                          <a href="#" id="webs-wesglobal-appearance-head-fav" data-status="off" data-page-info="Head_webs-wesglobal-appearance-head">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="page1_content_content_bar">
            <div class="page1_content_content_title" style="padding: 0px;">
                <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                    <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_list}}</div>
                </div>
            </div>

            <div class="col-md-12">
                <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                    <thead>
                    <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                        <th style="width:40px!important; border: 0;"></th>
                        <th style="border: 0;">{{cpgtxt_name}}</th>
                        <th style="border: 0;">{{cbtntxt_topheader}}</th>
                        <th style="border: 0;">{{cbtntxt_header}}</th>
                        <th style="border: 0;">{{cbtntxt_subheader}}</th>
                        <th style="text-align:right; padding-right: 40px;">
                            <div id="wwa_head_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody id="wwa_head_content_lists">

                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 text-center" >
                <div class="ssmu_page_nav" style="width: 100%;">

                </div>
            </div>
            <div class="col-md-2 text-right">
                <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="showWAWHeadModalBtn()">
                    <span>+ {{cbtntxt_add}}</span>
                </div>
            </div>
        </div>

        <!--Add Content Modal start-->
        <div class="modal fade" id="ModalWAWHeadContent">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 550px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_WAWHead_Title">{{cbtntxt_add}} {{cpgtxt_head}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="WAWHeadModalBody" style="padding: 0px 0rem 2rem">
                        <div class="col-md-12" style="margin-top: 20px;">
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_name}}</label>
                                </div>
                                <div class="col-md-10">
                                    <input type="text" class="form-control border-input-text" id="Modal_Head_Name" name="Modal_Head_Name">
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cbtntxt_topheader}}</label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_wawhTopheader_radio" id="Modal_Topheader_show" value="show">{{cpgtxt_show}}
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_wawhTopheader_radio" id="Modal_Topheader_hide" value="hide" checked>{{cpgtxt_hide}}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <select class="form-control" id="Modal_Topheader_Content_List" name="Modal_Topheader_Content_List" >

                                    </select>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cbtntxt_header}}</label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_wawhheader_radio" id="Modal_header_show" value="show">{{cpgtxt_show}}
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_wawhheader_radio" id="Modal_header_hide" value="hide" checked>{{cpgtxt_hide}}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <select class="form-control" id="Modal_header_Content_List" name="Modal_header_Content_List" >

                                    </select>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cbtntxt_subheader}}</label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_wawhSubheader_radio" id="Modal_Subheader_show" value="show">{{cpgtxt_show}}
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_wawhSubheader_radio" id="Modal_Subheader_hide" value="hide" checked>{{cpgtxt_hide}}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <select class="form-control" id="Modal_Subheader_Content_List" name="Modal_Subheader_Content_List" >

                                    </select>
                                </div>
                            </div>

                            <div class="col-md-12" style="text-align: center;">
                                <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addWAWHeadContentBtn()">
                                    <span>+ {{cbtntxt_add}} </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Add Content Modal end-->
    </div>

</template>
<style>
    .page1_content_content_bottom svg{
        color: #6b85e2;
    }
    .modal_top_bar{
        margin-right: 10px;
    }
    #awa_module_lists td{
        border: none;
    }
    #awa_headmodule_lists td{
        border: none;
    }
</style>

<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var preview='';
    var tabstatus=0;
    var vueOBJ=null;
    var wwgfield='topheader';
    var btntxt_save = "";
    var btntxt_delete = "";
    var btntxt_edit = "";
    var btntxt_change = "";
    var checked_del_items = new Array();
    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var is_edit = false;
    var edit_id = 0;
    var topHeaderLists = new Array();
    var headHeaderLists = new Array();
    var subHeaderLists = new Array();
    var radio_top = 0;
    var radio_head = 0;
    var radio_sub = 0;
    var header_names = new Array();
    var header_ids = new Array();
    var permss;



    function pageNavigation(totalpage) {
        var nav_tag='';
        nav_tag+='<nav aria-label="..." class="mb-4">';
        nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

        var disble="";
        if(pstart==1)
            disble="disabled"

        var prenum= parseInt(pstart) - 1;

        nav_tag+='<li class="page-item  '+disble+' ">';
        nav_tag+='<a class="page-link" href="#"  id="ssmunavnum_' + prenum + '" >';
        nav_tag+='<i class="ti-angle-left"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        var pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

        for(var idx = 0; idx < numg; idx++)
        {
            var actv="";
            var aria_current='';
            var spantag='';
            var oid='';

            if(pnum == pstart)
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

        var nextnum= parseInt(pstart) + 1;

        var edisble="";
        if(pstart == totalpage)
            edisble="disabled"

        nav_tag+='<li class="page-item '+edisble+' ">';
        nav_tag+='<a class="page-link" id="ssmunavnum_' + nextnum + '" href="#">';
        nav_tag+='<i class="ti-angle-right"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        nav_tag+='</ul>';
        nav_tag+='</nav>';

        $('.ssmu_page_nav').html(nav_tag);

        /* events { */
        $('a[id^="ssmunavnum_"]').click(function(){
            var oid = $(this).attr("id");
            pstart = oid.split('_')[1];
            getWWAHeadContentList();
        });
    }
    function wawHeadContentList(lists, tops, heads, subs, total_lists) {
        $('#wwa_head_content_lists').html('');
        var tags = '';
        header_ids = new Array();
        header_names = new Array();
        for(var i = 0; i < total_lists.length; i++){
            var id = total_lists[i].id;
            var name = total_lists[i].name;
            header_ids.push(id);
            header_names.push(name);
        }
        for(var i = 0; i < lists.length; i++){
            var id = lists[i].id;
            var name = lists[i].name;
            var is_top = lists[i].topheader_status;
            var is_head = lists[i].header_status;
            var is_sub = lists[i].subheader_status;
            var top = tops[i];
            if(is_top == 0)
                top = "--";
            var head = heads[i];
            if(is_head == 0)
                head = "--";
            var sub = subs[i];
            if(is_sub == 0)
                sub   = "--";

            tags += '<tr class="wawh_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="wawhCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>' + top + '</td>';
            tags += '   <td>' + head + '</td>';
            tags += '   <td>' + sub + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="wawh_content_list_edit-'+id+'" name="wawh_content_list_edit-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }
        $('#wwa_head_content_lists').html(tags);

        $('input[id^="wawhCheckbox_"]').change(function() {
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

        $('select[id^="wawh_content_list_edit-"]').change(function(){
            var id = $(this).attr("id");
            edit_id = id.split('-')[1];
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if (permss.pwrite == 1) {
                    is_edit = true;
                    selectWWAHeadContentList();
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "delete") {
                if (permss.pdelete == 1) {
                    myjs.data.confirmAlert(deleteWWAHeadContentList, edit_id, 'pgtxt_wantdeleteitem');
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });
    }
    function getWWAHeadContentList() {
        $.ajax({
            url: 'admin.getWWAHeadContentList',
            data: {
                userid: userid,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var tops = data.tops;
                    var heads = data.heads;
                    var subs = data.subs;
                    var total_lists = data.total_lists;
                    if(lists !== null && lists != "") {
                        wawHeadContentList(lists, tops, heads, subs, total_lists);
                    }
                    else
                        $('#wwa_head_content_lists').html('');
                    var total = data.total;
                    if(total <= 0){
                        $('.ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
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
    function showAppHeaderLists() {
        $.ajax({
            url: 'admin.getAWAHContentLists',
            data: {
                userid: userid
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    topHeaderLists = data.toplists;
                    headHeaderLists = data.headlists;
                    subHeaderLists = data.sublists;
                    setModalHeadercontentOptions();
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function wawHeadModalEventFunc() {
        $('#Modal_Topheader_show').click(function () {
            $('#Modal_Topheader_show').prop("checked", true);
            $('#Modal_Topheader_hide').prop("checked", false);
            $('#Modal_Topheader_Content_List').attr('disabled', false);
            $('#Modal_Topheader_Content_List').addClass('border-input-text');
            radio_top = 1;
        });
        $('#Modal_Topheader_hide').click(function () {
            $('#Modal_Topheader_show').prop("checked", false);
            $('#Modal_Topheader_hide').prop("checked", true);
            $('#Modal_Topheader_Content_List').attr('disabled', true);
            $('#Modal_Topheader_Content_List').removeClass('border-input-text');
            radio_top = 0;
        });
        $('#Modal_header_show').click(function () {
            $('#Modal_header_show').prop("checked", true);
            $('#Modal_header_hide').prop("checked", false);
            $('#Modal_header_Content_List').attr('disabled', false);
            $('#Modal_header_Content_List').addClass('border-input-text');
            radio_head = 1;
        });
        $('#Modal_header_hide').click(function () {
            $('#Modal_header_show').prop("checked", false);
            $('#Modal_header_hide').prop("checked", true);
            $('#Modal_header_Content_List').attr('disabled', true);
            $('#Modal_header_Content_List').removeClass('border-input-text');
            radio_head = 0;
        });
        $('#Modal_Subheader_show').click(function () {
            $('#Modal_Subheader_show').prop("checked", true);
            $('#Modal_Subheader_hide').prop("checked", false);
            $('#Modal_Subheader_Content_List').attr('disabled', false);
            $('#Modal_Subheader_Content_List').addClass('border-input-text');
            radio_sub = 1;
        });
        $('#Modal_Subheader_hide').click(function () {
            $('#Modal_Subheader_show').prop("checked", false);
            $('#Modal_Subheader_hide').prop("checked", true);
            $('#Modal_Subheader_Content_List').attr('disabled', true);
            $('#Modal_Subheader_Content_List').removeClass('border-input-text');
            radio_sub = 0;
        });
    }
    function editModalRadioEvent(top, head, sub) {
        $('#Modal_Topheader_Content_List').removeClass('border-input-text');
        $('#Modal_header_Content_List').removeClass('border-input-text');
        $('#Modal_Subheader_Content_List').removeClass('border-input-text');
        if(top == 1) {
            $('#Modal_Topheader_show').prop("checked", true);
            $('#Modal_Topheader_hide').prop("checked", false);
            $('#Modal_Topheader_Content_List').attr('disabled', false);
            $('#Modal_Topheader_Content_List').addClass('border-input-text');
        }
        if(top == 0) {
            $('#Modal_Topheader_show').prop("checked", false);
            $('#Modal_Topheader_hide').prop("checked", true);
            $('#Modal_Topheader_Content_List').attr('disabled', true);
        }
        if(head == 1) {
            $('#Modal_header_show').prop("checked", true);
            $('#Modal_header_hide').prop("checked", false);
            $('#Modal_header_Content_List').attr('disabled', false);
            $('#Modal_header_Content_List').addClass('border-input-text');
        }
        if(head == 0) {
            $('#Modal_header_show').prop("checked", false);
            $('#Modal_header_hide').prop("checked", true);
            $('#Modal_header_Content_List').attr('disabled', true);
        }
        if(sub == 1) {
            $('#Modal_Subheader_show').prop("checked", true);
            $('#Modal_Subheader_hide').prop("checked", false);
            $('#Modal_Subheader_Content_List').attr('disabled', false);
            $('#Modal_Subheader_Content_List').addClass('border-input-text');
        }
        if(sub == 0) {
            $('#Modal_Subheader_show').prop("checked", false);
            $('#Modal_Subheader_hide').prop("checked", true);
            $('#Modal_Subheader_Content_List').attr('disabled', true);
        }
    }
    function selectWWAHeadContentList() {
        $.ajax({
            url: 'admin.selectWWAHeadContentList',
            data: {
                userid: userid,
                sel_id:edit_id
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        $('#Modal_Head_Name').val(lists.name);
                        $('#Modal_Topheader_Content_List').val(lists.topheader_id);
                        $('#Modal_header_Content_List').val(lists.header_id);
                        $('#Modal_Subheader_Content_List').val(lists.suheader_id);
                        radio_top = lists.topheader_status;
                        radio_head = lists.header_status;
                        radio_sub = lists.subheader_status;
                        editModalRadioEvent(radio_top, radio_head, radio_sub);
                    }
                    $('#ModalWAWHeadContent').modal('show');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function setModalHeadercontentOptions() {
        var tags = '';
        for (var i = 0; i < topHeaderLists.length; i++){
            var id = topHeaderLists[i].id;
            var name = topHeaderLists[i].name;
            var selected = '';
            if (i == 0)
                selected = 'selected';
            tags += '<option '+selected+' value="'+id+'">'+name+'</option>';
        }
        $('#Modal_Topheader_Content_List').html(tags);

        tags = '';
        for (var i = 0; i < headHeaderLists.length; i++){
            var id = headHeaderLists[i].id;
            var name = headHeaderLists[i].name;
            var selected = '';
            if (i == 0)
                selected = 'selected';
            tags += '<option '+selected+' value="'+id+'">'+name+'</option>';
        }
        $('#Modal_header_Content_List').html(tags);

        tags = '';
        for (var i = 0; i < subHeaderLists.length; i++){
            var id = subHeaderLists[i].id;
            var name = subHeaderLists[i].name;
            var selected = '';
            if (i == 0)
                selected = 'selected';
            tags += '<option '+selected+' value="'+id+'">'+name+'</option>';
        }
        $('#Modal_Subheader_Content_List').html(tags);
    }
    function addWAWHeadContentList() {
        var name = $('#Modal_Head_Name').val();
        var sel_top = $('#Modal_Topheader_Content_List').val();
        var sel_head = $('#Modal_header_Content_List').val();
        var sel_sub = $('#Modal_Subheader_Content_List').val();
        var is_exist = false;
        for(var i = 0; i < header_names.length; i++){
            if(name == header_names[i]){
                is_exist = true;
                break;
            }
        }
        if(is_exist){
            alert("The title already exist.");
            return;
        }
        $.ajax({
            url: 'admin.addWWAHeadContentList',
            data: {
                userid: userid,
                name:name,
                pstart:pstart,
                pcnt:pcnt,
                sel_top:sel_top,
                sel_head:sel_head,
                sel_sub:sel_sub,
                radio_top:radio_top,
                radio_head:radio_head,
                radio_sub:radio_sub
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var tops = data.tops;
                    var heads = data.heads;
                    var subs = data.subs;
                    var total_lists = data.total_lists;
                    if(lists !== null && lists != "") {
                        wawHeadContentList(lists, tops, heads, subs, total_lists);
                    }
                    else
                        $('#wwa_head_content_lists').html('');
                    var total = data.total;
                    if(total <= 0){
                        $('.ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalWAWHeadContent').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function editWAWHeadContentList() {
        var name = $('#Modal_Head_Name').val();
        var sel_top = $('#Modal_Topheader_Content_List').val();
        var sel_head = $('#Modal_header_Content_List').val();
        var sel_sub = $('#Modal_Subheader_Content_List').val();
        var is_exist = false;

        for(var i = 0; i < header_names.length; i++){
            if(name == header_names[i] && header_ids[i] != edit_id){
                is_exist = true;
                break;
            }
        }
        if(is_exist){
            alert("The title already exist.");
            return;
        }
        $.ajax({
            url: 'admin.editWWAHeadContentList',
            data: {
                edit_id:edit_id,
                userid: userid,
                name:name,
                pstart:pstart,
                pcnt:pcnt,
                sel_top:sel_top,
                sel_head:sel_head,
                sel_sub:sel_sub,
                radio_top:radio_top,
                radio_head:radio_head,
                radio_sub:radio_sub
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var tops = data.tops;
                    var heads = data.heads;
                    var subs = data.subs;
                    var total_lists = data.total_lists;
                    if(lists !== null && lists != "") {
                        wawHeadContentList(lists, tops, heads, subs, total_lists);
                    }
                    else
                        $('#wwa_head_content_lists').html('');
                    var total = data.total;
                    if(total <= 0){
                        $('.ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalWAWHeadContent').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function deleteWWAHeadContentList(edit_id) {
        $.ajax({
            url: 'admin.deleteWWAHeadContentList',
            data: {
                edit_id:edit_id,
                userid: userid,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var tops = data.tops;
                    var heads = data.heads;
                    var subs = data.subs;
                    var total_lists = data.total_lists;
                    if(lists !== null && lists != "") {
                        wawHeadContentList(lists, tops, heads, subs, total_lists);
                    }
                    else
                        $('#wwa_head_content_lists').html('');
                    var total = data.total;
                    if(total <= 0){
                        $('.ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalWAWHeadContent').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function groupDeleteWWAHeadContentList() {
        $('#wwa_head_all_delete').click(function () {
            if (permss.pdelete == 1) {
                $.ajax({
                    url: 'admin.groupDeleteWWAHeadContentList',
                    data: {
                        ids: checked_del_items,
                        userid: userid,
                        pstart: pstart,
                        pcnt: pcnt
                    },
                    type: 'POST',
                    success: function (data) {
                        if (data.msg === "ok") {
                            var lists = data.lists;
                            var tops = data.tops;
                            var heads = data.heads;
                            var subs = data.subs;
                            var total_lists = data.total_lists;
                            if (lists !== null && lists != "") {
                                wawHeadContentList(lists, tops, heads, subs, total_lists);
                            } else
                                $('#wwa_head_content_lists').html('');
                            var total = data.total;
                            if (total <= 0) {
                                $('.ssmu_page_nav').html('');
                                return;
                            }
                            pstart = data.pstart;
                            var totalpage = data.totalpage;
                            pageNavigation(totalpage);
                            $('#ModalWAWHeadContent').modal('hide');
                        } else {
                            console.log(data.msg);
                        }
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


    export default {
        name: "WebsWesGlobalAppearanceHead",
        data(){
            return {
                pageid:'webs-wesglobal-appearance-head-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_appearance:'',
                musususu_webs_wesglobal_appearance_head:'',
                pgtxt_head:'',
                btntxt_add:'',
                btntxt_edit:'',
                btntxt_save:'',
                btntxt_delete:'',
                btntxt_change:'',
                btntxt_topheader:'',
                btntxt_header:'',
                btntxt_subheader:'',
                pgtxt_list:'',
                pgtxt_name:'',
                pgtxt_hide:'',
                pgtxt_show:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                btntxt_ok:'',
                btntxt_cancel:'',
            }
        },
        computed: {
            cmususu_webs_wesglobal_appearance:function () {
                return this.mususu_webs_wesglobal_appearance
            },
            cmusususu_webs_wesglobal_appearance_head:function () {
                return this.musususu_webs_wesglobal_appearance_head
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
            cbtntxt_add:function () {
                return this.btntxt_add;
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit;
            },
            cbtntxt_save:function () {
                return this.btntxt_save;
            },
            cbtntxt_change:function () {
                return this.btntxt_change;
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete;
            },
            cbtntxt_topheader:function () {
                return this.btntxt_topheader;
            },
            cbtntxt_header:function () {
                return this.btntxt_header;
            },
            cbtntxt_subheader:function () {
                return this.btntxt_subheader;
            },
            cpgtxt_list:function () {
                return this.pgtxt_list;
            },
            cpgtxt_name:function () {
                return this.pgtxt_name;
            },
            cpgtxt_hide:function () {
                return this.pgtxt_hide;
            },
            cpgtxt_show:function () {
                return this.pgtxt_show;
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
            btntxt_save = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_save');
            btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
            btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
            btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
            this.initpage();
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
            initpage() {
                showAppHeaderLists();
                wawHeadModalEventFunc();
                getWWAHeadContentList();
                groupDeleteWWAHeadContentList();
                $("#ModalWAWHeadContent").on('hide.bs.modal', function () {
                    $('select[id^="wawh_content_list_edit-"]').val('');
                });
            },
            showWAWHeadModalBtn(){
                if (permss.pcreate == 1) {
                    radio_top = 0;
                    radio_head = 0;
                    radio_sub = 0;
                    $('#Modal_Head_Name').val('');
                    setModalHeadercontentOptions();
                    $('#ModalWAWHeadContent').modal('show');
                    editModalRadioEvent(0, 0, 0);
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            addWAWHeadContentBtn(){
                if(is_edit)
                    editWAWHeadContentList();
                else
                    addWAWHeadContentList();
            }
        }//method


    }
</script>
