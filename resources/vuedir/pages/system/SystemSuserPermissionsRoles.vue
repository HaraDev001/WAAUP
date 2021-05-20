<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_system_suser_permissions_role}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_system}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_bsuser}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_system_suser_manage_perm}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_system_suser_permissions_role}}
                      <a href="#" id="system-suser-permissions-roles-fav" data-status="off" data-page-info="Roles_system-suser-permissions-roles">
                    &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                      </a>
                </span>
            </div>
        </div>

        <div class="col" id="supr_main_page">
            <div class="row" >
                <div class="col-md-12" style="margin-bottom: 30px;">
                    <div class="page1_content_side_bar" style="display: flex;">
                        <div class="supr_page_button">
                            <div id="supr_page1_content_side_bar_text" class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="department">{{cpgtxt_department}}</div>
                        </div>
                        <div class="supr_page_button">
                            <div id="supr_page2_content_side_bar_text" class="page1_content_side_bar_text" data-target="position">{{cpgtxt_position}}</div>
                        </div>
                        <div class="supr_page_button">
                            <div id="supr_page3_content_side_bar_text" class="page1_content_side_bar_text" data-target="group">{{cpgtxt_group}}</div>
                        </div>
                    </div>
                </div>

                <!--department-->
                <div class="col-md-12 page_slider_content_list active" id="department">
                    <div class="page1_content_content_bar">
                        <div class="page1_content_content_title" style="padding: 0px;">
                            <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                                <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_department}}</div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                <thead>
                                <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                    <th style="width:40px!important; border: 0;"></th>
                                    <th style="border: 0;">{{cpgtxt_name}}</th>
                                    <th style="border: 0;">{{cpgtxt_read}}</th>
                                    <th style="border: 0;">{{cpgtxt_write}}</th>
                                    <th style="border: 0;">{{cpgtxt_create}}</th>
                                    <th style="border: 0;">{{cbtntxt_delete}}</th>
                                    <th style="text-align:right; padding-right: 40px;">
                                        <div class="supr_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody id="supr_department_content_lists">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--position-->
                <div class="col-md-12 page_slider_content_list " id="position">
                    <div class="page1_content_content_bar">
                        <div class="page1_content_content_title" style="padding: 0px;">
                            <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                                <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_position}}</div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                <thead>
                                <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                    <th style="width:40px!important; border: 0;"></th>
                                    <th style="border: 0;">{{cpgtxt_name}}</th>
                                    <th style="border: 0;">{{cpgtxt_read}}</th>
                                    <th style="border: 0;">{{cpgtxt_write}}</th>
                                    <th style="border: 0;">{{cpgtxt_create}}</th>
                                    <th style="border: 0;">{{cbtntxt_delete}}</th>
                                    <th style="text-align:right; padding-right: 40px;">
                                        <div class="supr_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody id="supr_position_content_lists">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--group-->
                <div class="col-md-12 page_slider_content_list " id="group">
                    <div class="page1_content_content_bar">
                        <div class="page1_content_content_title" style="padding: 0px;">
                            <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                                <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_group}}</div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                <thead>
                                <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                    <th style="width:40px!important; border: 0;"></th>
                                    <th style="border: 0;">{{cpgtxt_name}}</th>
                                    <th style="border: 0;">{{cpgtxt_read}}</th>
                                    <th style="border: 0;">{{cpgtxt_write}}</th>
                                    <th style="border: 0;">{{cpgtxt_create}}</th>
                                    <th style="border: 0;">{{cbtntxt_delete}}</th>
                                    <th style="text-align:right; padding-right: 40px;">
                                        <div class="supr_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody id="supr_group_content_lists">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!--nav-->

                <!--<div class="col-md-12">-->
                <!--<div class="card">-->
                <!--<div class="card-body" style="padding:20px;">-->
                <!--<h6 class="card-title m-b-20">{{cpgtxt_department}}</h6>-->
                <!--<div class="row role-content" id = "supr_department_list">-->

                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--<div class="col-md-12">-->
                <!--<div class="card">-->
                <!--<div class="card-body" style="padding:20px;">-->
                <!--<h6 class="card-title m-b-20">{{cpgtxt_position}}</h6>-->
                <!--<div class="row role-content" id = "supr_position_list">-->

                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--<div class="col-md-12">-->
                <!--<div class="card">-->
                <!--<div class="card-body" style="padding:20px;">-->
                <!--<h6 class="card-title m-b-20">{{cpgtxt_group}}</h6>-->
                <!--<div class="row role-content" id = "supr_group_list">-->

                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
            </div>
            <div class="row">
                <div class="col-md-12 text-center" id="supr_page_nav" >
                </div>
            </div>
        </div>

        <div class="col" id="supr_edit_page" style="display: none;">
            <div class="row" >
                <div class="col-md-12" style="margin-bottom: 30px;">
                    <div class="page1_content_side_bar" >
                        <div class="" style="display: flex;">
                            <div class="page1_content_side_bar_text page1_content_side_bar_seleted" id="supr_edit_permission_name_title"></div>
                        </div>
                        <div class="col-md-12" style="display: flex; padding-left: 0px;" >
                            <div class="row" style="width: 100px; padding-left: 20px;">{{cpgtxt_read}}:</div>
                            <div class="row" id="edit_permission_top_read_container" style="width: 100%">
                            </div>
                        </div>
                        <div class="col-md-12" style="display: flex; padding-left: 0px;">
                            <div class="row" style="width: 100px; padding-left: 20px;">{{cpgtxt_write}}:</div>
                            <div class="row" id="edit_permission_top_write_container" style="width: 100%;">
                            </div>
                        </div>
                        <div class="col-md-12" style="display: flex; padding-left: 0px;">
                            <div class="row" style="width: 100px; padding-left: 20px;">{{cpgtxt_create}}:</div>
                            <div class="row" id="edit_permission_top_create_container" style="width: 100%;">
                            </div>
                        </div>
                        <div class="col-md-12" style="display: flex; padding-left: 0px;">
                            <div class="row" style="width: 100px; padding-left: 20px;">{{cbtntxt_delete}}:</div>
                            <div class="row" id="edit_permission_top_delete_container" style="width: 100%;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12" id="supr_edit_btn_container">
                    <div class="page1_content_side_bar text-center">
                        <div id="supr_edit_edit_btn" style="cursor: pointer">+ {{cbtntxt_edit}}</div>
                    </div>
                </div>
                <div class="col-md-12" id="supr_edit_permission_list_container" style="margin-bottom: 0px; display: none;">
                    <div class="page1_content_content_bar">
                        <div class="page1_content_content_title" style="padding: 0px;">
                            <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                                <div style="flex-grow: 1; margin-left:15px; ">{{cbtntxt_permissions}} {{cpgtxt_list}}</div>
                            </div>
                        </div>

                        <div class="col-md-12" style="padding-left: 0px; padding-right: 0px;">
                            <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info" style="text-align: center;">
                                <thead>
                                <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                    <th style="width:40px!important; border: 0;"></th>
                                    <th style="border: 0; text-align: left; width: 300px;">{{cpgtxt_name}}</th>
                                    <th style="border: 0; width: 50px;"></th>
                                    <th style="border: 0;">{{cpgtxt_read}}</th>
                                    <th style="border: 0;">{{cpgtxt_write}}</th>
                                    <th style="border: 0;">{{cpgtxt_create}}</th>
                                    <th style="border: 0;">{{cbtntxt_delete}}</th>
                                </tr>
                                </thead>
                                <tbody id="supr_edit_permissions_lists">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="text-right" style="padding-top: 20px;">
                        <div id="supr_edit_save_btn" class="btn btn-outline-light  dash-my-btn-0 active" style="font-size: 0.9rem;padding:10px 20px; margin-right: 15px;" >
                            <span>+ {{cbtntxt_save}} {{cbtntxt_change}}</span>
                        </div>
                        <div id="supr_edit_cancel_btn" class="btn btn-outline-light  dash-my-btn-0 " style="font-size: 0.9rem;padding:10px 20px;" >
                            <span>{{cbtntxt_cancel}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row m-t-15">
            <div class="col-md-12">

            </div>
        </div>

    </div>
</template>
<style>
    .role-content{
        padding-left: 30px;
        padding-right: 20px;
    }
    .role-item-name{
        font-size: 15px;
    }
    .role-edit-button{
        font-size: 15px;
        padding-left: 20px;
        cursor: pointer;
        height: 20px !important;
        line-height: 20px;
        border-bottom: 0px;
    }
    .role-permission-text{
        height: 20px;
        font-size: 13px;
        line-height: 20px;
        border-bottom: 0px;
        padding-left: 10px;
        padding-right: 5px;
    }
    .role-permission-box{
        padding-left: 0px;
        padding-right: 0px;
        height: 20px;
        display: flex;
    }
    .role-first-level-permission-text{
        font-size: 13px;
        display: flex;
    }
    .role-second-level-permission-box{
        display: flex;
        padding-left: 0px;
        padding-right: 0px;
    }
    .role-row-permission-box{
        display: flex;
        padding-left: 0px;
        padding-right: 0px;
    }
    .menu-permission-button{
        width: 100px;
        margin-bottom: 5px;
    }
    .permission-count-notice{
        height: 15px;
        padding-top: 4px !important;
        top: 8px !important;
        margin-left: 30px;
        text-align: center;
    }
    .form-check-input.rect-group{
        width: 16px;height: 16px; border: 1px solid #bbbbbb;
        cursor: pointer;
    }
    .form-check-input.rect-group > div{
        width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;background-color: #e4e6e8;
    }
    .form-check-input.rect-group.active > div{
        width: 10px; height: 10px; position: absolute;left: 2px;top: 2px; background-color: #0075ff;
    }
    .edit-button-size {
        width: 120px;
    }
    .supr_page_button{
        width: 120px;
    }
    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    #supr_page1_content_side_bar_text,
    #supr_page2_content_side_bar_text,
    #supr_page3_content_side_bar_text
    {
        float: left;
        cursor: pointer;
        height: auto;
    }
    .permission-name-left-1{
        padding-left: 10px !important;
    }
    .permission-name-left-2{
        padding-left: 40px !important;
    }
    .permission-name-left-3{
        padding-left: 70px !important;
    }
    .permission-name-left-4{
        padding-left: 100px !important;
    }
    .permission-name-left-5{
        padding-left: 130px !important;
    }
    .permission-name-left-6{
        padding-left: 160px !important;
    }
    .table-row-expanded{
        background: #f2f3f5;;
    }
    .table-row-collapsed{
        background: white;
    }

</style>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import axios from "axios";
    import nav_module from "../../assets/jsfunc/nav_module";
    import lang_module from '../../assets/jsfunc/lang_module.js';

    var tabstatus=0;
    var vueOBJ;
    var permss;
    var wwgfield='department';
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var btntxt_edit = "";
    var btntxt_permissions = "";
    var btntxt_change = "";
    var btntxt_delete = "";
    var secondlevelpermissions = [];
    var currentroletype;
    var currentid;
    var pgtxt_dbsaved = "";
    var pgtxt_error = "";
    var pstart = 1;
    var pcnt = 5;
    var numg = 5;
    var checked_del_items = new Array();
    var initial_permissions_list = new Array();
    var permissions_info_list = new Array();
    var iso_code = 'en';

    function getRoleDepartmentList() {
        checked_del_items = new Array();
        $.ajax({
            url: 'admin.getSUPRolesDepartmentList',
            data: {
                userid: userid,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.lists != "" && data.lists != null) {
                        var lists = data.lists;
                        $('#supr_department_content_lists').html('');
                        var tags = '';
                        for(var i = 0; i < lists.length; i++){
                            var obj = lists[i];
                            var id = lists[i].fid;
                            var name = lists[i].fname;
                            var permission = lists[i].permissions;
                            var readCount = 0;
                            var writeCount = 0;
                            var createCount = 0;
                            var deleteCount = 0;
                            if (permission != null && permission != '') {
                                var permission_lists = JSON.parse(permission);
                                for (var j = 0; j < permission_lists.length; j++) {
                                    var temp = permission_lists[j];
                                    if (temp.read == '1')
                                        readCount++;
                                    if (temp.write == '1')
                                        writeCount++;
                                    if (temp.create == '1')
                                        createCount++;
                                    if (temp.delete == '1')
                                        deleteCount++;
                                }
                            }

                            tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
                            tags += '   <td>';
                            tags += '   <div class="form-check form-check-inline">';
                            tags += '       <input class="form-check-input" type="checkbox" id="subDepartmentCheckbox_'+id+'" value="">';
                            tags += '   </div>';
                            tags += '   </td>';
                            tags += '   <td>' + name + '</td>';
                            tags += '   <td>' + readCount + '</td>';
                            tags += '   <td>' + writeCount + '</td>';
                            tags += '   <td>' + createCount + '</td>';
                            tags += '   <td>' + deleteCount + '</td>';
                            tags += '   <td>';
                            tags += '       <div class="form-group m-b-0">';
                            tags += '           <select class="my-border-radius-slt form-control float-right" id="supr_department_list_edit-'+id+'" name="supr_department_list_edit-'+id+'">';
                            tags += '               <option value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
                            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
                            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
                            tags += '           </select>';
                            tags += '       </div>';
                            tags += '   </td>';
                            tags += '</tr>';
                        }
                        $('#supr_department_content_lists').html(tags);

                        var total = data.total;
                        if (total <= 0) {
                            $('#supr_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);

                        $('input[id^="subDepartmentCheckbox_"]').change(function() {
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

                        $('select[id^="supr_department_list_edit-"]').change(function(){
                            var id = $(this).attr("id");
                            var event_id = id.split('-')[1];
                            var sel_val = $(this).val();
                            if (sel_val == 'change'){
                                if (permss.pwrite == 1) {
                                    showEditPermissionPage();
                                    getRolePermissionsData(tabstatus, event_id);
                                }
                                else
                                    myjs.data.showAlert('pgtxt_notpermission');
                            }
                            else if (sel_val == 'delete') {
                                if (permss.pdelete == 1) {
                                    myjs.data.confirmAlert(deleteRolePermissionData, event_id, 'pgtxt_wantdeleteitem');
                                }
                                else
                                    myjs.data.showAlert('pgtxt_notpermission');
                            }
                        });
                    }
                    else {
                        $('#supr_department_content_lists').html('');
                    }
                } else {
                    console.log(data.msg);
                    $('#supr_department_content_lists').html('');
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function pageNavigation(totalpage) {
        var nav_tag='';
        nav_tag+='<nav aria-label="..." class="mb-4">';
        nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

        var disble="";
        if(pstart==1)
            disble="disabled"

        var prenum= parseInt(pstart) - 1;

        nav_tag+='<li class="page-item  '+disble+' ">';
        nav_tag+='<a class="page-link" href="#"  id="suprnavnum_' + prenum + '" >';
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
                oid="suprnavnum_" + pnum;

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
        nav_tag+='<a class="page-link" id="suprnavnum_' + nextnum + '" href="#">';
        nav_tag+='<i class="ti-angle-right"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        nav_tag+='</ul>';
        nav_tag+='</nav>';

        $('#supr_page_nav').html(nav_tag);
        /* events { */
        $('a[id^="suprnavnum_"]').click(function(){
            var oid = $(this).attr("id");
            pstart = oid.split('_')[1];
            if(tabstatus == 0) {
                getRoleDepartmentList();
            }else if(tabstatus == 1) {
                getRolePositionList();
            }else if(tabstatus == 2) {
                getRoleGroupList();
            }
        });
    }

    function getRolePositionList() {
        checked_del_items = new Array();
        $.ajax({
            url: 'admin.getSUPRolesPositionList',
            data: {
                userid: userid,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.lists != "" && data.lists != null) {
                        var lists = data.lists;
                        $('#supr_position_content_lists').html('');
                        var tags = '';
                        for(var i = 0; i < lists.length; i++){
                            var obj = lists[i];
                            var id = lists[i].fid;
                            var name = lists[i].fname;
                            var permission = lists[i].permissions;
                            var readCount = 0;
                            var writeCount = 0;
                            var createCount = 0;
                            var deleteCount = 0;
                            if (permission != null && permission != '') {
                                var permission_lists = JSON.parse(permission);
                                for (var j = 0; j < permission_lists.length; j++) {
                                    var temp = permission_lists[j];
                                    if (temp.read == '1')
                                        readCount++;
                                    if (temp.write == '1')
                                        writeCount++;
                                    if (temp.create == '1')
                                        createCount++;
                                    if (temp.delete == '1')
                                        deleteCount++;
                                }
                            }

                            tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
                            tags += '   <td>';
                            tags += '   <div class="form-check form-check-inline">';
                            tags += '       <input class="form-check-input" type="checkbox" id="subPositionCheckbox_'+id+'" value="">';
                            tags += '   </div>';
                            tags += '   </td>';
                            tags += '   <td>' + name + '</td>';
                            tags += '   <td>' + readCount + '</td>';
                            tags += '   <td>' + writeCount + '</td>';
                            tags += '   <td>' + createCount + '</td>';
                            tags += '   <td>' + deleteCount + '</td>';
                            tags += '   <td>';
                            tags += '       <div class="form-group m-b-0">';
                            tags += '           <select class="my-border-radius-slt form-control float-right" id="supr_position_list_edit-'+id+'" name="supr_position_list_edit-'+id+'">';
                            tags += '               <option value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
                            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
                            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
                            tags += '           </select>';
                            tags += '       </div>';
                            tags += '   </td>';
                            tags += '</tr>';
                        }
                        $('#supr_position_content_lists').html(tags);

                        var total = data.total;
                        if (total <= 0) {
                            $('#supr_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);

                        $('input[id^="subPositionCheckbox_"]').change(function() {
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

                        $('select[id^="supr_position_list_edit-"]').change(function(){
                            var id = $(this).attr("id");
                            var event_id = id.split('-')[1];
                            var sel_val = $(this).val();
                            if (sel_val == 'change'){
                                if(permss.pwrite == 1) {
                                    showEditPermissionPage();
                                    getRolePermissionsData(tabstatus, event_id);
                                }else
                                    myjs.data.showAlert('pgtxt_notpermission');
                            }
                            else if (sel_val == 'delete') {
                                if(permss.pdelete == 1) {
                                    myjs.data.confirmAlert(deleteRolePermissionData, event_id, 'pgtxt_wantdeleteitem');
                                }else
                                    myjs.data.showAlert('pgtxt_notpermission');
                            }
                        });

                    }
                    else {
                        $('#supr_position_content_lists').html('');
                    }
                } else {
                    console.log(data.msg);
                    $('#supr_position_content_lists').html('');
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function getRoleGroupList() {
        checked_del_items = new Array();
        $.ajax({
            url: 'admin.getSUPRolesGroupList',
            data: {
                userid: userid,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.lists != "" && data.lists != null) {
                        var lists = data.lists;
                        $('#supr_group_content_lists').html('');
                        var tags = '';
                        for(var i = 0; i < lists.length; i++){
                            var obj = lists[i];
                            var id = lists[i].fid;
                            var name = lists[i].fname;
                            var permission = lists[i].permissions;
                            var readCount = 0;
                            var writeCount = 0;
                            var createCount = 0;
                            var deleteCount = 0;
                            if (permission != null && permission != '') {
                                var permission_lists = JSON.parse(permission);
                                for (var j = 0; j < permission_lists.length; j++) {
                                    var temp = permission_lists[j];
                                    if (temp.read == '1')
                                        readCount++;
                                    if (temp.write == '1')
                                        writeCount++;
                                    if (temp.create == '1')
                                        createCount++;
                                    if (temp.delete == '1')
                                        deleteCount++;
                                }
                            }

                            tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
                            tags += '   <td>';
                            tags += '   <div class="form-check form-check-inline">';
                            tags += '       <input class="form-check-input" type="checkbox" id="subGroupCheckbox_'+id+'" value="">';
                            tags += '   </div>';
                            tags += '   </td>';
                            tags += '   <td>' + name + '</td>';
                            tags += '   <td>' + readCount + '</td>';
                            tags += '   <td>' + writeCount + '</td>';
                            tags += '   <td>' + createCount + '</td>';
                            tags += '   <td>' + deleteCount + '</td>';
                            tags += '   <td>';
                            tags += '       <div class="form-group m-b-0">';
                            tags += '           <select class="my-border-radius-slt form-control float-right" id="supr_group_list_edit-'+id+'" name="supr_group_list_edit-'+id+'">';
                            tags += '               <option value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
                            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
                            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
                            tags += '           </select>';
                            tags += '       </div>';
                            tags += '   </td>';
                            tags += '</tr>';
                        }
                        $('#supr_group_content_lists').html(tags);

                        var total = data.total;
                        if (total <= 0) {
                            $('#supr_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);

                        $('input[id^="subGroupCheckbox_"]').change(function() {
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
                        $('select[id^="supr_group_list_edit-"]').change(function(){
                            var id = $(this).attr("id");
                            var event_id = id.split('-')[1];
                            var sel_val = $(this).val();
                            if (sel_val == 'change'){
                                if(permss.pwrite == 1) {
                                    showEditPermissionPage();
                                    getRolePermissionsData(tabstatus, event_id);
                                }else
                                    myjs.data.showAlert('pgtxt_notpermission');
                            }
                            else if (sel_val == 'delete') {
                                if(permss.pdelete == 1) {
                                    myjs.data.confirmAlert(deleteRolePermissionData, event_id, 'pgtxt_wantdeleteitem');
                                }else
                                    myjs.data.showAlert('pgtxt_notpermission');
                            }
                        });

                    }
                    else {
                        $('#supr_group_content_lists').html('');
                    }
                } else {
                    console.log(data.msg);
                    $('#supr_group_content_lists').html('');
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function getRolePermissionsData(roletype, id) {
        //roletype 0: department, 1: position, 2: group
        //id: id of selected role
        currentid = id;
        $.ajax({
            url: 'admin.getSUPRolePermissionData',
            data: {
                id: id,
                roletype:roletype
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    permissions_info_list = new Array();
                    var name = data.name;
                    var sub_title = btntxt_edit + ' ' + name + ' ' + btntxt_permissions;
                    $('#supr_edit_permission_name_title').html(sub_title);
                    if (data.lists != null && data.lists != '') {
                        permissions_info_list = JSON.parse(data.lists);
                        //if (permissions_info_list.length != initial_permissions_list.length) {
                        if (permissions_info_list.length == 0) {
                            permissions_info_list = new Array();
                            permissions_info_list = initial_permissions_list;
                        }
                        else {
                            for (var i = 0; i < permissions_info_list.length; i++) {
                                var p_menu_id = permissions_info_list[i].menu_id;
                                for (var j = 0; j < initial_permissions_list.length; j++) {
                                    var i_menu_id = initial_permissions_list[j].menu_id;
                                    if (p_menu_id == i_menu_id) {
                                        permissions_info_list[i].trans_name = initial_permissions_list[j].trans_name;
                                        break;
                                    }
                                }
                            }
                        }
                    } else {
                        permissions_info_list = initial_permissions_list;
                    }
                    changeEditUIStatus();
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function saveRolePermissionData() {
        //roletype 0: department, 1: position, 2: group
        //id: id of selected role
        var permissions_str = JSON.stringify(permissions_info_list);
        $.ajax({
            url: 'admin.saveSUPRolePermissionData',
            data: {
                id: currentid,
                roletype:tabstatus,
                permissions:permissions_str
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    if (tabstatus == 0) {
                        getRoleDepartmentList();
                    }
                    else if (tabstatus == 1) {
                        getRolePositionList();
                    }
                    else if (tabstatus == 2) {
                        getRoleGroupList();
                    }
                } else {
                    // alert(pgtxt_error);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function deleteRolePermissionData(event_id) {
        currentid = event_id;
        var permissions_str = JSON.stringify(initial_permissions_list);
        $.ajax({
            url: 'admin.saveSUPRolePermissionData',
            data: {
                id: currentid,
                roletype:tabstatus,
                permissions:permissions_str
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    // alert(pgtxt_dbsaved);
                    if (tabstatus == 0) {
                        getRoleDepartmentList();
                    }
                    else if (tabstatus == 1) {
                        getRolePositionList();
                    }
                    else if (tabstatus == 2) {
                        getRoleGroupList();
                    }
                } else {
                    // alert(pgtxt_error);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function deleteSeveralRolePermissionData() {
        if(checked_del_items.length > 0) {
            var permissions_str = JSON.stringify(initial_permissions_list);
            $.ajax({
                url: 'admin.deleteSeveralSUPRolePermissionData',
                data: {
                    roletype:tabstatus,
                    permissions:permissions_str,
                    ids: checked_del_items,
                },
                type: 'POST',
                success: function (data) {
                    if (data.msg === "ok") {
                        pstart = 1;
                        if (tabstatus == '0') {
                            getRoleDepartmentList();
                        }
                        if (tabstatus == '1') {
                            getRolePositionList();
                        }
                        if (tabstatus == '2') {
                            getRoleGroupList();
                        }
                    } else {
                        pstart = 1;
                        if (tabstatus == '0') {
                            getRoleDepartmentList();
                        }
                        if (tabstatus == '1') {
                            getRolePositionList();
                        }
                        if (tabstatus == '2') {
                            getRoleGroupList();
                        }
                    }
                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        }
    }

    function showEditPermissionPage() {
        $('#supr_edit_page').css('display', 'block');
        $('#supr_main_page').css('display', 'none');
        $('#supr_edit_btn_container').css('display', 'block');
        $('#supr_edit_permission_list_container').css('display', 'none');
        $('div[id^="supr_permission_total_checkbox_"]').removeClass('active');
    }

    function showMainPage() {
        $('#supr_edit_page').css('display', 'none');
        $('#supr_main_page').css('display', 'block');
    }
    function showEditPermissionList() {
        $('#supr_edit_btn_container').css('display', 'none');
        $('#supr_edit_permission_list_container').css('display', 'block');
    }

    function getAllMenuList() {
        $.ajax({
            url: 'admin.getSUPRAllMenuList',
            data: {
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.lists != "" && data.lists != null) {
                        var lists = data.lists;
                        var tags = '';
                        initial_permissions_list = new Array();
                        for(var i = 0; i < lists.length; i++){
                            var obj = lists[i];
                            var id = obj.id;
                            var name = obj.name;
                            var level = obj.level;
                            var p_id = obj.p_id;
                            var have_page = obj.have_page;
                            var f_id = obj.f_id;
                            var tran_key = obj.trans_key;
                            var item = {menu_id: id, read: 0, write: 0, create: 0, delete: 0, p_id: p_id, have_page: have_page, f_id:f_id, level:level, name: name, tran_key: tran_key};
                            initial_permissions_list.push(item);
                        }
                        getPermissionTransName();
                    }
                    else {
                        $('#supr_department_content_lists').html('');
                    }
                } else {
                    console.log(data.msg);
                    $('#supr_department_content_lists').html('');
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function getPermissionTransName() {
        var trans_array = new Array();
        for (var i = 0; i < initial_permissions_list.length; i++) {
            var permissions_item = initial_permissions_list[i];
            var menu_id = permissions_item.menu_id;
            var tran_key =permissions_item.tran_key;
            var str_type = tran_key.split('-')[0];
            var str_key = tran_key.split('-')[1];
            var item = {menu_id: menu_id, str_type: str_type, str_key: str_key};
            trans_array.push(item);
        }
        if (trans_array.length > 0) {
            $.ajax({
                url: 'admin.getPermissionTransName',
                data: {
                    iso:iso_code,
                    trans_array: trans_array
                },
                type: 'POST',
                async: false,
                success: function (data) {
                    if (data.msg === "ok") {
                        var transed_array = data.lists;
                        for (var i = 0; i < initial_permissions_list.length; i++) {
                            initial_permissions_list[i].trans_name = transed_array[i].trans_name;
                        }
                        setPermissionListMenu();
                    } else {
                        console.log(data.msg);
                    }
                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        }
    }

    function setPermissionListMenu() {
        var lists = initial_permissions_list;
        $('#supr_edit_permissions_lists').html('');
        var tags = '';
        for(var i = 0; i < lists.length; i++){
            var obj = lists[i];
            var id = obj.menu_id;
            var name = obj.trans_name;
            var level = obj.level;
            var p_id = obj.p_id;
            var have_page = obj.have_page;
            if (level === 1) {
                tags += '<tr id="supr_edit_permission_row_'+id+'/'+have_page+'" style="display: table-row" class="table-row-collapsed" data-id="' + id + '" data-name="' + name + '">';
            }
            else {
                tags += '<tr id="supr_edit_permission_row_'+id+'/'+have_page+'" style="display: none;" class="table-row-expanded related_parent_id_' + p_id + '" data-id="' + id + '" data-name="' + name + '">';
            }
            tags += '   <td>';
            tags+='<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
            tags+='<div class="form-check-input rect-group content-type-checkbox" style="position: relative; margin: 0 auto;" id="supr_permission_total_checkbox_'+id+'">';
            tags+='<div></div>';
            tags+='</div>';
            tags+='</div>';
            tags += '   </td>';
            tags += '   <td style="text-align: left;" class="permission-name-left-' + level +'">' + name;
            tags += '<span class="badge badge-round nav-link-notify permission-count-notice" id="supr_first_level_count_' + id + '"></span>';
            tags += '</td>';
            tags += '   <td>' ;
            tags+='<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
            if (have_page == '0') {
                tags+= '<i class="sub-menu-arrow fa fa-caret-down " style="cursor: pointer;" id="supr_permission_arrow_'+id +'"></i>';
            }
            tags+='</div>';
            tags += '</td>';
            tags += '   <td>' ;
            tags+='<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
            tags+='<div class="form-check-input rect-group content-type-checkbox" style="position: relative; margin: 0 auto;" id="supr_permission_read_checkbox_'+id+'">';
            tags+='<div></div>';
            tags+='</div>';
            tags+='</div>';
            tags += '</td>';
            tags += '   <td>' ;
            tags+='<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
            tags+='<div class="form-check-input rect-group content-type-checkbox" style="position: relative; margin: 0 auto;" id="supr_permission_write_checkbox_'+id+'">';
            tags+='<div></div>';
            tags+='</div>';
            tags+='</div>';
            tags += '</td>';
            tags += '   <td>' ;
            tags+='<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
            tags+='<div class="form-check-input rect-group content-type-checkbox" style="position: relative; margin: 0 auto;" id="supr_permission_create_checkbox_'+id+'">';
            tags+='<div></div>';
            tags+='</div>';
            tags+='</div>';
            tags += '</td>';
            tags += '   <td>' ;
            tags+='<div class="form-check" style="line-height: 24px; padding-left: 0px;">';
            tags+='<div class="form-check-input rect-group content-type-checkbox" style="position: relative; margin: 0 auto;" id="supr_permission_delete_checkbox_'+id+'">';
            tags+='<div></div>';
            tags+='</div>';
            tags+='</div>';
            tags += '</td>';
            tags += '</tr>';
        }
        $('#supr_edit_permissions_lists').html(tags);

        $('div[id^="supr_permission_total_checkbox_"]').click(function(){
            var oid=$(this).attr("id");
            var menu_id = oid.split('_')[4];
            var setting_val = 0;
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                setting_val = 0;
            } else {
                $(this).addClass('active');
                setting_val = 1;
            }
            setPermissionReadValues(menu_id, setting_val);
            setPermissionWriteValues(menu_id, setting_val);
            setPermissionCreateValues(menu_id, setting_val);
            setPermissionDeleteValues(menu_id, setting_val);
            changeEditUIStatus();
        });

        $('div[id^="supr_permission_read_checkbox_"]').click(function(){
            var oid=$(this).attr("id");
            var menu_id = oid.split('_')[4];
            var read_val = 0;
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                read_val = 0;
            } else {
                $(this).addClass('active');
                read_val = 1;
            }
            setPermissionReadValues(menu_id, read_val);
            changeEditUIStatus();
        });

        $('div[id^="supr_permission_write_checkbox_"]').click(function(){
            var oid=$(this).attr("id");
            var menu_id = oid.split('_')[4];
            var write_val = 0;
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                write_val = 0;
            } else {
                $(this).addClass('active');
                write_val = 1;
            }
            setPermissionWriteValues(menu_id, write_val);
            changeEditUIStatus();
        });

        $('div[id^="supr_permission_create_checkbox_"]').click(function(){
            var oid=$(this).attr("id");
            var menu_id = oid.split('_')[4];
            var create_val = 0;
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                create_val =0;
            } else {
                $(this).addClass('active');
                create_val = 1;
            }
            setPermissionCreateValues(menu_id, create_val);
            changeEditUIStatus();

        });

        $('div[id^="supr_permission_delete_checkbox_"]').click(function(){
            var oid=$(this).attr("id");
            var menu_id = oid.split('_')[4];
            var delete_val = 0;
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                delete_val = 0;
            } else {
                $(this).addClass('active');
                delete_val = 1;
            }
            setPermissionDeleteValues(menu_id, delete_val);
            changeEditUIStatus();
        });

        $('i[id^="supr_permission_arrow_"]').click(function(){
            var oid=$(this).attr("id");
            var id = oid.split('_')[3];
            if ($(this).hasClass('fa-caret-up')) {
                $(this).removeClass('fa-caret-up');
                $(this).addClass('fa-caret-down');
                $(this).closest('tr').removeClass('table-row-expanded');
                $(this).closest('tr').addClass('table-row-collapsed');
                collapseChildrenRows(id);
            } else {
                $(this).removeClass('fa-caret-down');
                $(this).addClass('fa-caret-up');
                $(this).closest('tr').removeClass('table-row-collapsed');
                $(this).closest('tr').addClass('table-row-expanded');
                expandChildrenRows(id);
            }
        });
    }

    function setPermissionReadValues(menu_id, read_val) {
        for (var j =0; j < permissions_info_list.length; j++) {
            if (menu_id == permissions_info_list[j].menu_id ) {
                permissions_info_list[j].read = read_val;
            }
            if (menu_id == permissions_info_list[j].p_id && menu_id != permissions_info_list[j].menu_id) {
                var child_id = permissions_info_list[j].menu_id;
                setPermissionReadValues(child_id, read_val);
            }
        }
    }
    function setPermissionWriteValues(menu_id, write_val) {
        for (var j =0; j < permissions_info_list.length; j++) {
            if (menu_id == permissions_info_list[j].menu_id ) {
                permissions_info_list[j].write = write_val;
            }
            if (menu_id == permissions_info_list[j].p_id && menu_id != permissions_info_list[j].menu_id) {
                var child_id = permissions_info_list[j].menu_id;
                setPermissionWriteValues(child_id, write_val);
            }
        }
    }
    function setPermissionCreateValues(menu_id, create_val) {
        for (var j =0; j < permissions_info_list.length; j++) {
            if (menu_id == permissions_info_list[j].menu_id ) {
                permissions_info_list[j].create = create_val;
            }
            if (menu_id == permissions_info_list[j].p_id && menu_id != permissions_info_list[j].menu_id) {
                var child_id = permissions_info_list[j].menu_id;
                setPermissionCreateValues(child_id, create_val);
            }
        }
    }
    function setPermissionDeleteValues(menu_id, delete_val) {
        for (var j =0; j < permissions_info_list.length; j++) {
            if (menu_id == permissions_info_list[j].menu_id ) {
                permissions_info_list[j].delete = delete_val;
            }
            if (menu_id == permissions_info_list[j].p_id && menu_id != permissions_info_list[j].menu_id) {
                var child_id = permissions_info_list[j].menu_id;
                setPermissionDeleteValues(child_id, delete_val);
            }
        }
    }

    function changeEditUIStatus() {
        showCheckBoxesStatus();
        showFirstLevelNumbers();
        showTopAreaStatus();
    }

    function showCheckBoxesStatus() {
        for (var j =0; j < permissions_info_list.length; j++) {
            var p_info = permissions_info_list[j];
            var id = p_info.menu_id;
            let read_val = p_info.read;
            let write_val = p_info.write;
            let create_val = p_info.create;
            let delete_val = p_info.delete;
            let read_id_string = 'supr_permission_read_checkbox_' + id;
            let write_id_string = 'supr_permission_write_checkbox_' + id;
            let create_id_string = 'supr_permission_create_checkbox_' + id;
            let delete_id_string = 'supr_permission_delete_checkbox_' + id;
            if (read_val == '0') {
                $('#'+ read_id_string).removeClass('active');
            }
            else if (read_val == '1') {
                $('#'+ read_id_string).addClass('active');
            }
            if (write_val == '0') {
                $('#'+ write_id_string).removeClass('active');
            }
            else if (write_val == '1') {
                $('#'+ write_id_string).addClass('active');
            }
            if (create_val == '0') {
                $('#'+ create_id_string).removeClass('active');
            }
            else if (create_val == '1') {
                $('#'+ create_id_string).addClass('active');
            }
            if (delete_val == '0') {
                $('#'+ delete_id_string).removeClass('active');
            }
            else if (delete_val == '1') {
                $('#'+ delete_id_string).addClass('active');
            }
        }
    }

    function showFirstLevelNumbers() {
        for (var j =0; j < permissions_info_list.length; j++) {
            var p_info = permissions_info_list[j];
            var id = p_info.menu_id;
            var level = p_info.level;
            if (level == '1' ) {
                var permission_count = 0;
                for (var i = 0; i < permissions_info_list.length; i++) {
                    var temp = permissions_info_list[i];
                    if (temp.f_id == id) {
                        let read_val = temp.read;
                        let write_val = temp.write;
                        let create_val = temp.create;
                        let delete_val = temp.delete;
                        if (read_val == '1')
                            permission_count++;
                        if (write_val == '1')
                            permission_count++;
                        if (create_val == '1')
                            permission_count++;
                        if (delete_val == '1')
                            permission_count++;
                    }
                    let count_id_string = 'supr_first_level_count_' + id;
                    if (permission_count > 0) {
                        $('#' + count_id_string).html(permission_count);
                    }
                    else {
                        $('#' + count_id_string).html('');
                    }
                }
            }
        }
    }

    function showTopAreaStatus() {
        var first_level_id = '01-00-00-00';
        var start_index = 0;
        var end_index = 0;
        $('#edit_permission_top_read_container').html('');
        $('#edit_permission_top_write_container').html('');
        $('#edit_permission_top_create_container').html('');
        $('#edit_permission_top_delete_container').html('');
        var read_tags = '';
        var write_tags = '';
        var create_tags = '';
        var delete_tags = '';
        for (var i =0; i < permissions_info_list.length + 1; i++) {
            if (i == permissions_info_list.length) {
                read_tags+=getReadTagString(first_level_id, start_index, end_index);
                write_tags+=getWriteTagString(first_level_id, start_index, end_index);
                create_tags+=getCreateTagString(first_level_id, start_index, end_index);
                delete_tags+=getDeleteTagString(first_level_id, start_index, end_index);
            }
            else {
                var p_info = permissions_info_list[i];
                var id = p_info.menu_id;
                var level = p_info.level;
                if (level == 1) {
                    if (start_index < end_index) {
                        read_tags+=getReadTagString(first_level_id, start_index, end_index);
                        write_tags+=getWriteTagString(first_level_id, start_index, end_index);
                        create_tags+=getCreateTagString(first_level_id, start_index, end_index);
                        delete_tags+=getDeleteTagString(first_level_id, start_index, end_index);
                    }
                    first_level_id = id;
                    start_index = i;
                }
                else {
                    end_index = i;
                }
            }
        }
        $('#edit_permission_top_read_container').html(read_tags);
        $('#edit_permission_top_write_container').html(write_tags);
        $('#edit_permission_top_create_container').html(create_tags);
        $('#edit_permission_top_delete_container').html(delete_tags);

        $('button[id^=supr_read_first_level_delete_]').click(function () {
            var idstring=$(this).attr("id");
            var menu_id=idstring.split('_')[5];
            var setting_val = 0;
            setPermissionReadValues(menu_id, setting_val);
            changeEditUIStatus();
        });

        $('button[id^=supr_read_second_level_delete_]').click(function () {
            var idstring=$(this).attr("id");
            var menu_id=idstring.split('_')[5];
            var setting_val = 0;
            setPermissionReadValues(menu_id, setting_val);
            changeEditUIStatus();
        });

        $('button[id^=supr_write_first_level_delete_]').click(function () {
            var idstring=$(this).attr("id");
            var menu_id=idstring.split('_')[5];
            var setting_val = 0;
            setPermissionWriteValues(menu_id, setting_val);
            changeEditUIStatus();
        });

        $('button[id^=supr_write_second_level_delete_]').click(function () {
            var idstring=$(this).attr("id");
            var menu_id=idstring.split('_')[5];
            var setting_val = 0;
            setPermissionWriteValues(menu_id, setting_val);
            changeEditUIStatus();
        });

        $('button[id^=supr_create_first_level_delete_]').click(function () {
            var idstring=$(this).attr("id");
            var menu_id=idstring.split('_')[5];
            var setting_val = 0;
            setPermissionCreateValues(menu_id, setting_val);
            changeEditUIStatus();
        });

        $('button[id^=supr_create_second_level_delete_]').click(function () {
            var idstring=$(this).attr("id");
            var menu_id=idstring.split('_')[5];
            var setting_val = 0;
            setPermissionCreateValues(menu_id, setting_val);
            changeEditUIStatus();
        });

        $('button[id^=supr_delete_first_level_delete_]').click(function () {
            var idstring=$(this).attr("id");
            var menu_id=idstring.split('_')[5];
            var setting_val = 0;
            setPermissionDeleteValues(menu_id, setting_val);
            changeEditUIStatus();
        });

        $('button[id^=supr_delete_second_level_delete_]').click(function () {
            var idstring=$(this).attr("id");
            var menu_id=idstring.split('_')[5];
            var setting_val = 0;
            setPermissionDeleteValues(menu_id, setting_val);
            changeEditUIStatus();
        });
    }

    function getReadTagString(first_level_id, start_index, end_index) {
        var read_count = 0;
        var read_tags = '';
        for (var i = start_index; i < end_index + 1; i++) {
            var p_info = permissions_info_list[i];
            var p_id = p_info.p_id;
            var level = p_info.level;
            if (level != 1) {
                if (p_info.read == '1')
                    read_count++;
            }
        }
        if (read_count > 0) {
            for (var j = start_index; j < end_index + 1; j++) {
                if (j == start_index) {
                    var p_info = permissions_info_list[j];
                    var id  = p_info.menu_id;
                    var level = p_info.level;
                    var name = p_info.trans_name;
                    read_tags += '<div class="col-md-12" style="padding-left: 50px; padding-right: 0px;">';
                    read_tags += '<div class="col-md-12 role-row-permission-box" >';
                    read_tags += '<div class="col-md-2 role-first-level-permission-text" id="supr_read_first_level_permission_' + first_level_id + '">';
                    read_tags += '<div class="">'+ name +'</div>';
                    read_tags += '<div style="height: 20px; padding-left: 5px;">';
                    read_tags += '<button type="button" class="close" id="supr_read_first_level_delete_' + first_level_id +'">&times;</button>';
                    read_tags += '</div>';
                    read_tags += '</div>';
                    read_tags += '<div class="col-md-10 role-second-level-permission-box d-flex flex-wrap">';
                } else {
                    var p_info = permissions_info_list[j];
                    var id  = p_info.menu_id;
                    var read_val = p_info.read;
                    var name = p_info.trans_name;
                    if (read_val == '1') {
                        read_tags += '<div class=" role-permission-box" id="supr_read_second_level_permission_"'+ id +'>';
                        read_tags += '<div class="page1_content_content_title role-permission-text">'+ name+'</div>';
                        read_tags += '<div style="height: 20px; ">';
                        read_tags += '<button type="button" class="close" id="supr_read_second_level_delete_' + id + '">&times;</button>';
                        read_tags += '</div>';
                        read_tags += '</div>';
                    }
                }
            }
            read_tags += '</div>';
            read_tags += '</div>';
            read_tags += '</div>';
        }
        return read_tags;
    }

    function getWriteTagString(first_level_id, start_index, end_index) {
        var write_count = 0;
        var write_tags = '';
        for (var i = start_index; i < end_index + 1; i++) {
            var p_info = permissions_info_list[i];
            var p_id = p_info.p_id;
            if (p_id != '0') {
                if (p_info.write == '1')
                    write_count++;
            }
        }
        if (write_count > 0) {
            for (var j = start_index; j < end_index + 1; j++) {
                if (j == start_index) {
                    var p_info = permissions_info_list[j];
                    var id  = p_info.menu_id;
                    var level = p_info.level;
                    var name = p_info.trans_name;
                    write_tags += '<div class="col-md-12" style="padding-left: 50px; padding-right: 0px;">';
                    write_tags += '<div class="col-md-12 role-row-permission-box" >';
                    write_tags += '<div class="col-md-2 role-first-level-permission-text" id="supr_write_first_level_permission_' + first_level_id + '">';
                    write_tags += '<div class="">'+ name +'</div>';
                    write_tags += '<div style="height: 20px; padding-left: 5px;">';
                    write_tags += '<button type="button" class="close" id="supr_write_first_level_delete_' + first_level_id +'">&times;</button>';
                    write_tags += '</div>';
                    write_tags += '</div>';
                    write_tags += '<div class="col-md-10 role-second-level-permission-box d-flex flex-wrap">';
                }else {
                    var p_info = permissions_info_list[j];
                    var id  = p_info.menu_id;
                    var write_val = p_info.write;
                    var name = p_info.trans_name;
                    if (write_val == '1') {
                        write_tags += '<div class=" role-permission-box" id="supr_write_second_level_permission_"'+ id +'>';
                        write_tags += '<div class="page1_content_content_title role-permission-text">'+ name+'</div>';
                        write_tags += '<div style="height: 20px; ">';
                        write_tags += '<button type="button" class="close" id="supr_write_second_level_delete_' + id + '">&times;</button>';
                        write_tags += '</div>';
                        write_tags += '</div>';
                    }
                }
            }
            write_tags += '</div>';
            write_tags += '</div>';
            write_tags += '</div>';
        }
        return write_tags;
    }

    function getCreateTagString(first_level_id, start_index, end_index) {
        var create_count = 0;
        var create_tags = '';
        for (var i = start_index; i < end_index + 1; i++) {
            let p_info = permissions_info_list[i];
            let p_id = p_info.p_id;
            if (p_id != '0') {
                if (p_info.create == '1')
                    create_count++;
            }
        }
        if (create_count > 0) {
            for (var j = start_index; j < end_index + 1; j++) {
                if (j == start_index) {
                    let p_info = permissions_info_list[j];
                    let id  = p_info.menu_id;
                    let level = p_info.level;
                    var name = p_info.trans_name;
                    create_tags += '<div class="col-md-12" style="padding-left: 50px; padding-right: 0px;">';
                    create_tags += '<div class="col-md-12 role-row-permission-box" >';
                    create_tags += '<div class="col-md-2 role-first-level-permission-text" id="supr_create_first_level_permission_' + first_level_id + '">';
                    create_tags += '<div class="">'+ name +'</div>';
                    create_tags += '<div style="height: 20px; padding-left: 5px;">';
                    create_tags += '<button type="button" class="close" id="supr_create_first_level_delete_' + first_level_id +'">&times;</button>';
                    create_tags += '</div>';
                    create_tags += '</div>';
                    create_tags += '<div class="col-md-10 role-second-level-permission-box d-flex flex-wrap">';
                }else {
                    let p_info = permissions_info_list[j];
                    let id  = p_info.menu_id;
                    let create_val = p_info.create;
                    var name = p_info.trans_name;
                    if (create_val == '1') {
                        create_tags += '<div class=" role-permission-box" id="supr_create_second_level_permission_"'+ id +'>';
                        create_tags += '<div class="page1_content_content_title role-permission-text">'+ name+'</div>';
                        create_tags += '<div style="height: 20px; ">';
                        create_tags += '<button type="button" class="close" id="supr_create_second_level_delete_' + id + '">&times;</button>';
                        create_tags += '</div>';
                        create_tags += '</div>';
                    }
                }
            }
            create_tags += '</div>';
            create_tags += '</div>';
            create_tags += '</div>';
        }
        return create_tags;
    }
    function getDeleteTagString(first_level_id, start_index, end_index) {
        let delete_count = 0;
        let delete_tags = '';
        for (var i = start_index; i < end_index + 1; i++) {
            let p_info = permissions_info_list[i];
            let p_id = p_info.p_id;
            if (p_id != '0') {
                if (p_info.delete == '1')
                    delete_count++;
            }
        }
        if (delete_count > 0) {
            for (var j = start_index; j < end_index + 1; j++) {
                if (j == start_index) {
                    let p_info = permissions_info_list[j];
                    let id  = p_info.menu_id;
                    let level = p_info.level;
                    var name = p_info.trans_name;
                    delete_tags += '<div class="col-md-12" style="padding-left: 50px; padding-right: 0px;">';
                    delete_tags += '<div class="col-md-12 role-row-permission-box" >';
                    delete_tags += '<div class="col-md-2 role-first-level-permission-text" id="supr_delete_first_level_permission_' + first_level_id + '">';
                    delete_tags += '<div class="">'+ name +'</div>';
                    delete_tags += '<div style="height: 20px; padding-left: 5px;">';
                    delete_tags += '<button type="button" class="close" id="supr_delete_first_level_delete_' + first_level_id +'">&times;</button>';
                    delete_tags += '</div>';
                    delete_tags += '</div>';
                    delete_tags += '<div class="col-md-10 role-second-level-permission-box d-flex flex-wrap">';
                }else {
                    let p_info = permissions_info_list[j];
                    let id  = p_info.menu_id;
                    let delete_val = p_info.delete;
                    var name = p_info.trans_name;
                    if (delete_val == '1') {
                        delete_tags += '<div class=" role-permission-box" id="supr_delete_second_level_permission_"'+ id +'>';
                        delete_tags += '<div class="page1_content_content_title role-permission-text">'+ name+'</div>';
                        delete_tags += '<div style="height: 20px; ">';
                        delete_tags += '<button type="button" class="close" id="supr_delete_second_level_delete_' + id + '">&times;</button>';
                        delete_tags += '</div>';
                        delete_tags += '</div>';
                    }
                }
            }
            delete_tags += '</div>';
            delete_tags += '</div>';
            delete_tags += '</div>';
        }
        return delete_tags;
    }


    function expandChildrenRows(id) {
        var relatedClassName = 'related_parent_id_' + id;
        $('.' + relatedClassName).css('display', 'table-row');
        $('.' + relatedClassName).each(function(){
            var id_string = $(this).attr('id');
            var id_hpage = id_string.split('_')[4];
            var t_id = id_hpage.split('/')[0];
            var t_have_page = id_string.split('/')[1];
            $(this).removeClass('table-row-expanded');
            $(this).addClass('table-row-collapsed');
            if (t_have_page == '0'){
                var i_id = 'supr_permission_arrow_' + t_id;
                $('#' + i_id).addClass('fa-caret-down');
                $('#' + i_id).removeClass('fa-caret-up');
            }
        });
    }

    function collapseChildrenRows(id) {
        var relatedClassName = 'related_parent_id_' + id;
        $('.' + relatedClassName).css('display', 'none');
        $('.' + relatedClassName).each(function(){
            var id_string = $(this).attr('id');
            var id_hpage = id_string.split('_')[4];
            var t_id = id_hpage.split('/')[0];
            var t_have_page = id_string.split('/')[1];
            if (t_have_page == '0'){
                collapseChildrenRows(t_id);
            }
        });
    }

    export default {
        data(){
          return{
              pageid:'system-suser-permissions-roles-fav',
              mu_system:'',
              mu_dash:'',
              mu_apps:'',
              mu_users:'',
              mu_webs:'',
              mu_others:'',
              musu_dash_analy: '',
              musu_dash_stud: '',
              musu_dash_duser: '',
              musu_apps_website: '',
              musu_apps_ecomm: '',
              musu_apps_work: '',
              musu_users_org: '',
              musu_users_ind: '',
              musu_webs_wesglobal: '',
              musu_webs_waauptaiwan: '',
              musu_webs_waaupstore: '',
              musu_webs_waaupwaw: '',
              musu_webs_waaupmagazine: '',
              musu_webs_waauptravel: '',
              musu_webs_waaupmember: '',
              musu_others_emailtemp: '',
              musu_others_mulevel: '',
              musu_system_set: '',
              musu_system_theme: '',
              musu_system_bsuser:'',
              musususu_system_suser_permissions_role:'',
              musususu_system_suser_manage_perm:'',
              btntxt_permissions:'',
              btntxt_edit:'',
              btntxt_cancel:'',
              btntxt_delete:'',
              btntxt_save:'',
              btntxt_change:'',
              pgtxt_position:'',
              pgtxt_group:'',
              pgtxt_name:'',
              pgtxt_create:'',
              pgtxt_read:'',
              pgtxt_write:'',
              pgtxt_list:'',
              pgtxt_wantdeleteitem:'',
              pgtxt_department:'',
              pgtxt_dbsaved:'',
              pgtxt_error:'',
              pgtxt_notpermission:'',
              pgtxt_notification:'',
              btntxt_ok:'',
          }
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_system:function () {
                return this.mu_system;
            },
            cmu_dash:function () {
                return this.mu_dash;
            },
            cmu_apps:function () {
                return this.mu_apps;
            },
            cmu_users:function () {
                return this.mu_users;
            },
            cmu_webs:function () {
                return this.mu_webs;
            },
            cmu_others:function () {
                return this.mu_others;
            },
            cmusu_dash_analy: function () {
                return this.musu_dash_analy;
            },
            cmusu_dash_stud: function () {
                return this.musu_dash_stud;
            },
            cmusu_dash_duser: function () {
                return this.musu_dash_duser;
            },
            cmusu_apps_website: function () {
                return this.musu_apps_website;
            },
            cmusu_apps_ecomm: function () {
                return this.musu_apps_ecomm;
            },
            cmusu_apps_work: function () {
                return this.musu_apps_work;
            },
            cmusu_users_org: function () {
                return this.musu_users_org;
            },
            cmusu_users_ind: function () {
                return this.musu_users_ind;
            },
            cmusu_webs_wesglobal: function () {
                return this.musu_webs_wesglobal;
            },
            cmusu_webs_waauptaiwan: function () {
                return this.musu_webs_waauptaiwan;
            },
            cmusu_webs_waaupstore: function () {
                return this.musu_webs_waaupstore;
            },
            cmusu_webs_waaupwaw: function () {
                return this.musu_webs_waaupwaw;
            },
            cmusu_webs_waaupmagazine: function () {
                return this.musu_webs_waaupmagazine;
            },
            cmusu_webs_waauptravel: function () {
                return this.musu_webs_waauptravel;
            },
            cmusu_webs_waaupmember: function () {
                return this.musu_webs_waaupmember;
            },
            cmusu_others_emailtemp: function () {
                return this.musu_others_emailtemp;
            },
            cmusu_others_mulevel: function () {
                return this.musu_others_mulevel;
            },
            cmusu_system_set: function () {
                return this.musu_system_set;
            },
            cmusu_system_theme: function () {
                return this.musu_system_theme;
            },
            cmusu_system_bsuser:function () {
                return this.musu_system_bsuser;
            },
            cmusususu_system_suser_permissions_role:function () {
                return this.musususu_system_suser_permissions_role;
            },
            cmusususu_system_suser_manage_perm:function () {
                return this.musususu_system_suser_manage_perm;
            },
            cbtntxt_permissions:function () {
                return this.btntxt_permissions;
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit;
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel;
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete;
            },
            cbtntxt_save:function () {
                return this.btntxt_save;
            },
            cbtntxt_change:function () {
                return this.btntxt_change;
            },
            cpgtxt_department:function () {
                return this.pgtxt_department;
            },
            cpgtxt_position:function () {
                return this.pgtxt_position;
            },
            cpgtxt_group:function () {
                return this.pgtxt_group;
            },
            cpgtxt_name:function () {
                return this.pgtxt_name;
            },
            cpgtxt_create:function () {
                return this.pgtxt_create;
            },
            cpgtxt_read:function () {
                return this.pgtxt_read;
            },
            cpgtxt_write:function () {
                return this.pgtxt_write;
            },
            cpgtxt_list:function () {
                return this.pgtxt_list;
            },
            cpgtxt_dbsaved:function () {
                return this.pgtxt_dbsaved
            },
            cpgtxt_wantdeleteitem:function () {
                return this.pgtxt_wantdeleteitem
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


            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                iso_code = lang_module.data.getCurrentLangISO();
                getPermissionTransName();
                if (currentid != null && currentid != 0) {
                    getRolePermissionsData(tabstatus, currentid);
                }
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
	    created() {

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
            this.initPage();
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
            /*fav part*/
            initPage(){
                this.sliderTabs();
                tabstatus = 0;
                btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
                btntxt_permissions = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_permissions');
                pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                pgtxt_error= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_error');
                getRoleDepartmentList();
                getAllMenuList();
                $('div[id^="supr_chk_second_level_"]').click(function(){
                    var idstring=$(this).attr("id");
                    var firstlevelnum=idstring.split('_')[4];
                    var secondlevelnum =  idstring.split('_')[5];
                    var itemindex = firstlevelnum + "_" + secondlevelnum;
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        const sindex = secondlevelpermissions.indexOf(itemindex);
                        if (sindex > -1) {
                            secondlevelpermissions.splice(sindex, 1);
                        }
                    } else {
                        $(this).addClass('active');
                        secondlevelpermissions.push(itemindex);
                    }
                    showFooterPart();
                    showCenterPart();
                });
                $('button[id^=supr_second_level_delete_]').click(function () {
                    var idstring=$(this).attr("id");
                    var firstlevelnum=idstring.split('_')[4];
                    var secondlevelnum =  idstring.split('_')[5];
                    var itemindex = firstlevelnum + "_" + secondlevelnum;
                    const sindex = secondlevelpermissions.indexOf(itemindex);
                    if (sindex > -1) {
                        secondlevelpermissions.splice(sindex, 1);
                    }
                    showFooterPart();
                    showCenterPart();
                });
                $('button[id^=supr_first_level_delete_]').click(function () {
                    var idstring=$(this).attr("id");
                    var firstlevelnum=idstring.split('_')[4];
                    var toremove = [];
                    if (secondlevelpermissions.length > 0) {
                        for (var i = 0; i < secondlevelpermissions.length; i++){
                            var firstlevel = secondlevelpermissions[i].split('_')[0];
                            if (firstlevelnum == firstlevel) {
                                var deleteindex = secondlevelpermissions[i];
                                toremove.push(deleteindex);
                            }
                        }
                    }
                    if (toremove.length > 0) {
                        secondlevelpermissions = secondlevelpermissions.filter(function(x) {
                            return toremove.indexOf(x) < 0;
                        });
                    }
                    showFooterPart();
                    showCenterPart();
                });
                $('#supr_permission_save_btn').click(function () {
                    saveRolePermissionData();
                });
                $('#supr_edit_save_btn').click(function () {
                    showMainPage();
                    saveRolePermissionData();
                });
                $('#supr_edit_cancel_btn').click(function () {
                    showMainPage();
                });
                $('#supr_edit_edit_btn').click(function () {
                    showEditPermissionList();
                });
                $('.supr_selected_all_delete').click(function () {
                    if (permss.pdelete == 1) {
                        deleteSeveralRolePermissionData();
                    }else
                        myjs.data.showAlert('pgtxt_notpermission');
                });
            },
            sliderTabs()
            {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function()
                {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_slider_content_list').removeClass('active');
                    $('#'+subid).addClass('active');
                    $('#supr_page_nav').html('');
                    pstart = 1;
                    if(subid=='department')
                    {
                        tabstatus=0;
                        wwgfield = 'department';
                        getRoleDepartmentList();
                    }
                    else if(subid=='position'){
                        tabstatus=1;
                        wwgfield = 'position';
                        getRolePositionList();
                    }
                    else if(subid=='group'){
                        tabstatus=2;
                        wwgfield = 'group';
                        getRoleGroupList();
                    }
                });
            },
            tabClick(n) {
                $('.modal-body .btn.btn-outline-light').removeClass('active');
                if(n==1)
                {
                    $('#tab-mu-1').addClass('active');
                    $('#tab1').show();
                    $('#tab2').hide();
                    $('#tab3').hide();
                    $('#tab4').hide();
                    $('#tab5').hide();
                    $('#tab6').hide();
                }
                else if(n==2)
                {
                    $('#tab-mu-2').addClass('active');
                    $('#tab1').hide();
                    $('#tab2').show();
                    $('#tab3').hide();
                    $('#tab4').hide();
                    $('#tab5').hide();
                    $('#tab6').hide();
                }
                else if(n==3)
                {
                    $('#tab-mu-3').addClass('active');
                    $('#tab1').hide();
                    $('#tab2').hide();
                    $('#tab3').show();
                    $('#tab4').hide();
                    $('#tab5').hide();
                    $('#tab6').hide();
                }
                else if(n==4)
                {
                    $('#tab-mu-4').addClass('active');
                    $('#tab1').hide();
                    $('#tab2').hide();
                    $('#tab3').hide();
                    $('#tab4').show();
                    $('#tab5').hide();
                    $('#tab6').hide();
                }
                else if(n==5)
                {
                    $('#tab-mu-5').addClass('active');
                    $('#tab1').hide();
                    $('#tab2').hide();
                    $('#tab3').hide();
                    $('#tab4').hide();
                    $('#tab5').show();
                    $('#tab6').hide();
                }
                else if(n==6)
                {
                    $('#tab-mu-6').addClass('active');
                    $('#tab1').hide();
                    $('#tab2').hide();
                    $('#tab3').hide();
                    $('#tab4').hide();
                    $('#tab5').hide();
                    $('#tab6').show();
                }
            }
        }

    }
</script>
