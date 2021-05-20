<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_system_suser_manage_roles}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_system}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_bsuser}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_system_suser_manage}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_system_suser_manage_roles}}
                          <a href="#" id="system-suser-management-roles-fav" data-status="off" data-page-info="Roles_system-suser-management-roles">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>

            <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
                <div class="bsuser_management_roles_tab">
                    <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="departmentbar">{{cpgtxt_department}}</div>
                </div>
                <div class="bsuser_management_roles_tab">
                    <div class="page1_content_side_bar_text" data-target="positionbar">{{cpgtxt_position}}</div>
                </div>
                <div class="bsuser_management_roles_tab">
                    <div class="page1_content_side_bar_text" data-target="groupbar">{{cpgtxt_group}}</div>
                </div>
            </div>

            <div class="row">
               <div class="col-md-12">
                   <div class="card border-0 m-b-10 text-right">
                       <div>
                           <div class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="addRoleList()">
                               <span> {{cbtntxt_add}} </span>
                           </div>
                       </div>
                   </div>
               </div>
               <!--deartmentbar start-->
               <div class="col-md-12 page_roles_content_list active" id="departmentbar">
                   <div class="card">
                       <div class="col-md-4" style="margin:20px 0px 0px 20px">
                           <h6 class="card-title m-b-20">{{cpgtxt_department}} {{cpgtxt_list}}</h6>
                       </div>
                       <div>
                           <div class="table-responsive"> <!-- Required for Responsive -->
                               <!-- user list {-->
                               <table id="sum-department-list" class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                   <thead>
                                   <tr role="row">
                                       <th style="width:40px!important"></th>
                                       <th style="font-size:14px;">{{cpgtxt_name}}</th>
                                       <th style="font-size:14px;">{{cpgtxt_position}}</th>
                                       <th style="font-size:14px;">{{cpgtxt_number}}</th>
                                       <th style="font-size:14px; text-align:right; padding-right: 40px;">
                                           <div class="roles_selected_all_delete" style="cursor: pointer;">{{cpgtxt_delete}}</div>
                                       </th>
                                   </tr>
                                   </thead>
                                   <tbody id="ssu_management_roles_department">

                                   </tbody>
                               </table>
                               <!-- } user list -->
                           </div>
                       </div>
                   </div>
               </div>
               <!--deartmentbar end-->
               <!--positionbar start-->
               <div class="col-md-12 page_roles_content_list" id="positionbar">
                   <div class="card">
                       <div class="col-md-4" style="margin:20px 0px 0px 20px">
                           <h6 class="card-title m-b-20">{{cpgtxt_position}} {{cpgtxt_list}}</h6>
                       </div>
                       <div>
                           <div class="table-responsive"> <!-- Required for Responsive -->
                               <!-- user list {-->
                               <table id="sum-position-list" class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                   <thead>
                                   <tr role="row">
                                       <th style="width:40px!important"></th>
                                       <th style="font-size:14px;">{{cpgtxt_name}}</th>
                                       <th style="font-size:14px;">{{cpgtxt_department}}</th>
                                       <th style="font-size:14px;">{{cpgtxt_number}}</th>
                                       <th style="font-size:14px; text-align:right; padding-right: 40px;">
                                           <div class="roles_selected_all_delete" style="cursor: pointer;">{{cpgtxt_delete}}</div>
                                       </th>
                                   </tr>
                                   </thead>
                                   <tbody id="ssu_management_roles_position">

                                   </tbody>
                               </table>
                               <!-- } user list -->
                           </div>
                       </div>
                   </div>
               </div>
               <!--positionbar end-->
               <!--groupbar start-->
               <div class="col-md-12 page_roles_content_list" id="groupbar">
                   <div class="card">
                       <div class="col-md-12" style="display: flex; padding:20px 20px 20px 20px; flex-direction: row; align-items: center;">
                           <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_group}} {{cpgtxt_list}}</div>

                           <div style="width: 330px;position: relative;display: flex;">

                               <div class="input-group-append" @click.stop="allGroupSearchBtn" style="width: 100%;">
                                   <input type="text" class="form-control" id="search-cont" name="search-cont" style="height: calc(1.5em + .75rem + 6px); padding-left:150px;">
                                   <span class="btn" style="padding: 5px;right: 30px;"><i class="ti-search"></i></span>
                               </div>

                               <div  style="display: flex;flex-direction: row;width: 135px;position: absolute;">
                                   <select class="form-control w-100 select-noneborder-rightcolor" id="sum_group_sel_bar" name="sum_group_sel_bar" >
                                       <option value="0" selected>{{cpgtxt_all}}</option>
                                       <option value="1">{{cpgtxt_department}}</option>
                                       <option value="2">{{cpgtxt_position}}</option>
                                   </select>
                               </div>
                           </div>
                       </div>

                       <div>
                           <div class="table-responsive"> <!-- Required for Responsive -->
                               <!-- user list {-->
                               <table id="sum-group-list" class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                   <thead>
                                   <tr role="row">
                                       <th style="width:40px!important"></th>
                                       <th style="font-size:14px;">{{cpgtxt_name}}</th>
                                       <th style="font-size:14px;">{{cpgtxt_position}}</th>
                                       <th style="font-size:14px;">{{cpgtxt_department}}</th>
                                       <th style="font-size:14px;">{{cpgtxt_number}}</th>
                                       <th style="font-size:14px; text-align:right; padding-right: 40px;">
                                           <div class="roles_selected_all_delete" style="cursor: pointer;">{{cpgtxt_delete}}</div>
                                       </th>
                                   </tr>
                                   </thead>
                                   <tbody id="ssu_management_roles_group">

                                   </tbody>
                               </table>
                               <!-- } user list -->
                           </div>
                       </div>
                   </div>
               </div>
               <!--groupbar end-->
            </div>

            <div class="row" >
                <div class="col-md-12" id="ssmu_page_nav">

                </div>
            </div>

            <!--Department Modal start-->
            <div class="modal fade" id="ModalForAddItem">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="Modal_Title"></h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <input type="hidden" id="item_id" name="item_id" value=""/>
                        <input type="hidden" id="select_id" name="select_id" value="0"/>
                        <input type="hidden" id="select_name" name="select_name" value="--None--"/>
                        <div class="modal-body" id="myAlertEmailModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="panel" id="tab4">
                                <form id="ssfe-email-frm">
                                    <div class="row" style="padding-bottom: 20px;">
                                        <div class="col-md-12" style="margin-top: 20px;">
                                            <div class="d-flex flex-wrap">
                                                <div class="col-md-4">
                                                    <label style="margin-top: 8px; color:#666;" id="Modal_Add_Name"></label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input type="text" class="form-control" id="item_name" name="item_name">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12" style="margin-top: 20px;">
                                            <div class="d-flex flex-wrap">
                                                <div class="col-md-4">
                                                    <label style="margin-top: 8px; color:#666;" id="Modal_Select_Title"></label>
                                                </div>
                                                <div class="col-md-8">
                                                    <select class="form-control w-100" id="sum_sel_items" name="sum_sel_items" >

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <div id="ssfe-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addModalBtn()">
                                                <span>+ {{cbtntxt_add}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="ssfe-id" value=""/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Department Modal end-->
            <!--group Modal start-->
            <div class="modal fade" id="ModalForGroupItem">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{cbtntxt_add}} {{cpgtxt_group}}</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <input type="hidden" id="sel_group_id" name="item_id" value=""/>
                        <input type="hidden" id="sel_group_name" name="select_name" value="--None--"/>
                        <div class="modal-body" id="groupModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="panel">
                                <form id="ssfe-groupModal-frm">
                                    <div class="row" style="padding-bottom: 20px;">
                                        <div class="col-md-12" style="margin-top: 20px;">
                                            <div class="d-flex flex-wrap">
                                                <div class="col-md-4">
                                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_group}} {{cpgtxt_name}}</label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input type="text" class="form-control" id="group_item_name" name="group_item_name">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12" style="margin-top: 20px;">
                                            <div class="d-flex flex-wrap">
                                                <div class="col-md-4">
                                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_colleagues}}</label>
                                                </div>
                                                <div class="col-md-8" style="display: flex">
                                                    <div><input type="text" class="form-control" id="group_item_usres" name="group_item_usres" readonly></div>
                                                    <div id="ssfe-groupuser-add" class="btn btn-outline-light dash-my-btn-0" style="margin-left: 10px;" @click.stop="selectUserBtn()">
                                                        <svg version="1.1" id="user" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                             viewBox="0 0 785.8159 1010" enable-background="new 0 0 785.8159 1010" xml:space="preserve">
                                                            <g id="user-user">
                                                                <path fill="#323B5A" d="M392.9692,0c135.251,0,244.8565,109.5234,244.8565,244.6914c0,135.312-109.6055,244.8145-244.8565,244.8145
                                                                    c-135.1269,0-244.7734-109.5025-244.7734-244.8145C148.1958,109.5234,257.8423,0,392.9692,0z"/>
                                                                <path fill="#323B5A" d="M785.8159,1010h-0.5762H0V876.8457c0-173.7793,109.3999-321.1318,261.9521-376.0586l131.0171,174.6016
                                                                    l130.9756-174.6016c152.5938,54.9268,261.8711,202.2793,261.8711,376.0586V1010z"/>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="div_ssu_management_group_user" style="display: none; position: absolute; margin-left: 180px; margin-top: 115px; font-size: 11px; z-index: 10;">
                                            <div class="table-responsive" style="border-radius: 10px; background-color: #e9ecef; border-top: 1px solid #e0dede; border-bottom: 1px solid #e0dede; height: 100px; overflow-y: auto;">
                                                <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                                    <thead>
                                                    <tr role="row">
                                                        <th class="role_user_th">{{cpgtxt_name}}</th>
                                                        <th class="role_user_th">{{cpgtxt_department}}</th>
                                                        <th class="role_user_th">{{cpgtxt_position}}</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody id="ssu_management_group_user">

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <div id="ssfe-groupmodel-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addGroupModalBtn()">
                                                <span>+ {{cbtntxt_add}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--group Modal end-->
            <!--userlist Modal start-->
            <div class="modal fade" id="ModalForUserItem">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{cpgtxt_suserlist}}</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <input type="hidden" id="sel_role_type" name="sel_role_type" value=""/>
                        <input type="hidden" id="sel_role_subtype" name="sel_role_subtype" value=""/>

                        <div class="modal-body" id="groupModalUserbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="panel">
                                <form id="ssfe-groupUserModal-frm">
                                    <div class="row" style="padding-bottom: 20px;">
                                        <div class="col-md-12" style="margin-top: 20px;">
                                            <div class="d-flex flex-wrap">
                                                <div style="width: 100%; position: relative; display: flex;">
                                                    <div class="input-group-append" style="width: 100%;">
                                                        <input type="text" class="form-control" id="user_search_cont" name="user_search_cont" style="height: calc(1.5em + .75rem + 6px); padding-left:270px; padding-right: 40px;">
                                                        <span class="btn" style="position: absolute; right: 0px;" @click.stop="role_userSearchBtn"><i class="ti-search"></i></span>
                                                    </div>

                                                    <div  style="display: flex; flex-direction: row; width: 135px; position: absolute;">
                                                        <select class="form-control w-100 select-noneborder-rightcolor" id="sum_user_role_sel" name="sum_user_role_sel" >
                                                            <option value="0" selected>{{cpgtxt_all}}</option>
                                                            <option value="1">{{cpgtxt_department}}</option>
                                                            <option value="2">{{cpgtxt_position}}</option>
                                                        </select>
                                                    </div>
                                                    <div  style="display: flex;flex-direction: row; width: 135px; position: absolute; margin-left: 125px;">
                                                        <select class="form-control w-100 select-noneborder-rightcolor" id="sum_user_role_content_sel" name="sum_user_role_content_sel" >

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12" style="margin-top: 20px;">
                                            <div class="table-responsive" style="border-top: 1px solid #e0dede; border-bottom: 1px solid #e0dede; height: 150px; overflow-y: auto;">
                                                <!-- user list {-->
                                                <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                                    <thead>
                                                    <tr role="row">
                                                        <th class="role_user_th" style="width:40px!important;"></th>
                                                        <th class="role_user_th">{{cpgtxt_name}}</th>
                                                        <th class="role_user_th">{{cpgtxt_department}}</th>
                                                        <th class="role_user_th">{{cpgtxt_position}}</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody id="ssu_management_roles_user">

                                                    </tbody>
                                                </table>
                                                <!-- } user list -->
                                            </div>
                                        </div>
                                        <div class="d-flex flex-wrap" id="select_users_name_group" style="width: 100%; height: 60px; overflow-y: auto; margin: 10px 15px 0px 20px;">

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addUserListModalBtn()">
                                                <span>+ {{cbtntxt_add}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--userlist Modal end-->
        </div>
</template>
<style>
    .page_roles_content_list{
        display: none;
    }
    .page_roles_content_list.active{
        display: block;
    }
    .page1_content_side_bar_text{
        cursor: pointer;
        float: left;
    }
    .select-noneborder-rightcolor{
        border-right: 1px solid #fff;
        border-radius: inherit;
        margin-left: 10px;
    }
    .role_user_th{
        color: #000 !important;
        font-size:11px;
        border-bottom: 0px !important;
    }
    .bsuser_management_roles_tab{
        width: 150px;
    }
</style>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import axios from "axios";
    import nav_module from "../../assets/jsfunc/nav_module";

    var vueOBJ;
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var tabstatus = 0;
    var btntxt_edit = "";
    var btntxt_change = "";
    var btntxt_delete = "";
    var pgtxt_department = "";
    var pgtxt_position = "";
    var pgtxt_superior = "";
    var pgtxt_name = "";
    var btntxt_add = "";

    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var is_edit = false;
    var group_user_ids = new Array();
    var group_user_names = new Array();
    var checked_del_items = new Array();
    var group_id = 0;
    var permss;

    String.prototype.trim = function() {
        var trimmed = this.replace(/^\s+|\s+$/g, '%|%');
        return trimmed;
    };
    String.prototype.ltrim = function() {
        var trimmed = this.replace(/^\s+/g, '%|%');
        return trimmed;
    };
    String.prototype.rtrim = function() {
        var trimmed = this.replace(/\s+$/g, '%|%');
        return trimmed;
    };

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

        $('#ssmu_page_nav').html(nav_tag);

        /* events { */
        $('a[id^="ssmunavnum_"]').click(function(){
            var oid = $(this).attr("id");
            pstart = oid.split('_')[1];
            if(tabstatus == 0) {
                showRolesDepartmentList();
            }else if(tabstatus == 1) {
                showRolesPositionList();
            }else if(tabstatus == 2) {
                showRolesGroupList();
            }
        });
    }

    function selectItemFunc(lists) {
        var tags = "";
        $('#sum_sel_items').html("");
        tags += "<option selected value='0'>--None--</option>";
        if (lists != "" && lists != null) {
            for (var i = 0; i < lists.length; i++) {
                tags += "<option value='" + lists[i].id + "'>" + lists[i].name + "</option>";
            }
        }
        $('#sum_sel_items').html(tags);

        $('#sum_sel_items').change(function() {
            var sel_name = $( "#sum_sel_items option:selected" ).text();
            var sel_id = $('#sum_sel_items').val();
            $('#select_name').val(sel_name);
            $('#select_id').val(sel_id);
        });
    }

    /// department /////////////////////////////////////////////////////////////////////////////////////////////////////
    function showDepartmentModal() {
        if(tabstatus == 0)
        {
            $('#Modal_Title').text(btntxt_add + " " + pgtxt_department);
            $('#Modal_Add_Name').text(pgtxt_department + " " + pgtxt_name);
            $('#Modal_Select_Title').text(pgtxt_superior + " " + pgtxt_department);
        }
        else if(tabstatus == 1)
        {
            $('#Modal_Title').text(btntxt_add + " " + pgtxt_position);
            $('#Modal_Add_Name').text(pgtxt_position + " " + pgtxt_name);
            $('#Modal_Select_Title').text(pgtxt_department);
        }
        $.ajax({
            url: 'admin.getSUMRolesDepartment',
            data: {
                userid: userid
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    selectItemFunc(data.lists);
                    $('#ModalForAddItem').modal('show');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function departmentList(lists) {
        var tags = '';
        for(var i = 0; i < lists.length; i++) {
            var id = lists[i].fid;
            var name = lists[i].fname;
            var position = lists[i].position;
            var number = lists[i].number;
            tags += '<tr class="sua_department_item-' + id + '" data-id="' + id + '" data-name="' + name + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="oneCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>'+position+'</td>';
            tags += '   <td>'+number+'</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="sumr_department_table-'+id+'" name="sumr_department_table-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }
        $('#ssu_management_roles_department').html(tags);

        $('input[id^="oneCheckbox_"]').change(function() {
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

        $('select[id^="sumr_department_table-"]').change(function(){
            var id = $(this).attr("id");
            var event_id = id.split('-')[1];
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if (permss.pwrite == 1) {
                    var item_name = $('.sua_department_item-' + event_id).attr("data-name");
                    $('#item_id').val(event_id);
                    $('#item_name').val(item_name);
                    is_edit = true;
                    showDepartmentModal();
                    $('#ModalForAddItem').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "delete") {
                if (permss.pdelete == 1) {
                    myjs.data.confirmAlert(deleteDepartmentItem, event_id, 'pgtxt_wantdeleteitem');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });

    }
    function showRolesDepartmentList() {
        $.ajax({
            url: 'admin.getSUMRolesDepartmentList',
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
                        if(lists !== null && lists != "") {
                            departmentList(lists);
                        }
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                    }
                    else
                        $('#ssu_management_roles_department').html('');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function addRolesDepartment() {
        var name = $('#item_name').val();
        var sel_id = $('#select_id').val();
        $.ajax({
            url: 'admin.addSUMRolesDepartment',
            data: {
                userid: userid,
                name:name,
                d_id:sel_id,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        departmentList(lists);
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                    }
                    else
                        $('#ssu_management_roles_department').html('');
                    $('#item_name').val('');
                    $('#select_name').val('');
                    $('#select_id').val('');
                    $('#ModalForAddItem').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function editRolesDepartment() {
        var name = $('#item_name').val();
        var sel_id = $('#select_id').val();
        var item_id = $('#item_id').val();
        $.ajax({
            url: 'admin.editSUMRolesDepartment',
            data: {
                item_id:item_id,
                userid: userid,
                name:name,
                d_id:sel_id,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        departmentList(lists)
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                    }
                    else
                        $('#ssu_management_roles_department').html('');
                    $('#item_name').val('');
                    $('#select_name').val('');
                    $('#select_id').val('');
                    $('#ModalForAddItem').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function deleteDepartmentItem(id) {
        $.ajax({
            url: 'admin.deleteSUMRolesDepartment',
            data: {
                userid: userid,
                id:id,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        departmentList(lists)
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                    }
                    else
                        $('#ssu_management_roles_department').html('');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /// position ///////////////////////////////////////////////////////////////////////////////////////////////////////
    function positionList(lists) {
        var tags = '';
        for(var i = 0; i < lists.length; i++) {
            var id = lists[i].fid;
            var name = lists[i].fname;
            var d_name = lists[i].d_name;
            var number = lists[i].number;
            tags += '<tr class="sua_position_item-' + id + '" data-id="' + id + '" data-name="' + name + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="posCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>'+d_name+'</td>';
            tags += '   <td>'+number+'</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="sumr_position_table-'+id+'" name="sumr_position_table-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#ssu_management_roles_position').html(tags);

        $('input[id^="posCheckbox_"]').change(function() {
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

        $('select[id^="sumr_position_table-"]').change(function(){
            var id = $(this).attr("id");
            var event_id = id.split('-')[1];
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if (permss.pwrite == 1) {
                    var item_name = $('.sua_position_item-' + event_id).attr("data-name");

                    $('#item_id').val(event_id);
                    $('#item_name').val(item_name);
                    is_edit = true;
                    showDepartmentModal();
                    $('#ModalForAddItem').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "delete") {
                if (permss.pdelete == 1) {
                    myjs.data.confirmAlert(deletePostionItem, event_id, 'pgtxt_wantdeleteitem');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });
    }
    function showRolesPositionList() {
        $.ajax({
            url: 'admin.getSUMRolesPositionList',
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
                        if(lists !== null && lists != "") {
                            positionList(lists);
                        }
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                    }
                    else
                        $('#ssu_management_roles_position').html('');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function addRolesPosition() {
        var name = $('#item_name').val();
        var sel_id = $('#select_id').val();
        $.ajax({
            url: 'admin.addSUMRolesPosition',
            data: {
                userid: userid,
                name:name,
                d_id:sel_id,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        positionList(lists);
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                    }
                    else
                        $('#ssu_management_roles_position').html('');
                    $('#select_id').val('')
                    $('#item_name').val('');
                    $('#ModalForAddItem').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function deletePostionItem(id) {
        $.ajax({
            url: 'admin.deleteSUMRolesPosition',
            data: {
                userid: userid,
                id:id,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        positionList(lists)
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                    }
                    else
                        $('#ssu_management_roles_position').html('');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function editRolesPosition() {
        var name = $('#item_name').val();
        var sel_id = $('#select_id').val();
        var item_id = $('#item_id').val();
        $.ajax({
            url: 'admin.editSUMRolesPosition',
            data: {
                item_id:item_id,
                userid: userid,
                name:name,
                d_id:sel_id,
                pstart: pstart,
                pcnt:pcnt
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        positionList(lists)
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                    }
                    else
                        $('#ssu_management_roles_position').html('');
                    $('#select_id').val('')
                    $('#item_name').val('');
                    $('#ModalForAddItem').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /// group //////////////////////////////////////////////////////////////////////////////////////////////////////////
    function selete_role_sel() {
        if($('#sum_user_role_sel').val() == 0){
            $('#sum_user_role_content_sel').html('<option value="0">Name</option>');
        }

        $('select[id^="sum_user_role_sel"]').change(function(){
            var sel_val = $(this).val();
            if(sel_val == 0){
                $('#sum_user_role_content_sel').html('<option value="0">Name</option>');
                showUserListTable();
            }
            else {
                getSubRoleType();
            }
        });
        $('select[id^="sum_user_role_content_sel"]').change(function(){
            var sel_val = $(this).val();
            showUserListTable();
        });

        $('.modal-content').click(function () {
            $('#div_ssu_management_group_user').css('display', 'none');
        });

        $('#group_item_name').click(function () {
            $('#div_ssu_management_group_user').css('display', 'none');
        });

        $('#group_item_usres').click(function () {
            showGroupedUsersList();
        });
    }
    function getSubRoleType() {
        var type = $('#sum_user_role_sel').val();
        $('#sum_user_role_content_sel').html('');
        if(type != 0){
            $.ajax({
                url: 'admin.getSubRoleType',
                data: {
                    type:type,
                    userid: userid
                },
                type: 'POST',
                async: false,
                success: function (data) {
                    if (data.msg === "ok") {
                        var lists = data.lists;
                        if(lists !== null && lists != "") {
                            var otag = "";
                            for(var i = 0; i < lists.length; i++){
                                otag += '<option value="'+lists[i].id+'">'+lists[i].name+'</option>';
                            }
                            $('#sum_user_role_content_sel').html(otag);
                            showUserListTable();
                        }
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
    function checked_users_func() {
        var u_tag = '';

        for(var i = 0; i < group_user_names.length; i++){
            if(group_user_names[i] != "") {
                u_tag += '<div style="display: flex; font-size: 15px; height: 20px;">';
                u_tag += '<div class="ssu_username" id="ssu_username-'+group_user_ids[i]+'" style="height: 20px; margin-right: 5px;">' + group_user_names[i] + '</div>';
                u_tag += '<div style="height: 20px;"><button type="button" class="close" id="selectedCloseBtn-'+group_user_ids[i]+'">&times;</button></div>';
                u_tag += '<div style="height: 20px; margin-right: 2px;">&nbsp;|&nbsp;</div>';
                u_tag += '</div>'
            }
        }
        $('#select_users_name_group').html(u_tag);

        var checked_users = new Array();
        var checked_ids = new Array();
        $('button[id^=selectedCloseBtn-]').click(function () {
            var un_id = $(this).attr('id').split("-")[1];

            $('#userCheckbox_'+un_id).prop("checked", false);
            var check_user = $('#ssu_username-'+un_id).text();
            const idx = group_user_ids.indexOf(un_id);
            if (idx > -1)
                group_user_ids.splice(idx, 1);
            const uname = group_user_names.indexOf(check_user);
            if (uname > -1)
                group_user_names.splice(uname, 1);

            checked_users_func();
        });
    }
    function user_list_func(lists) {
        var tags = '';
        for(var i = 0; i < lists.length; i++) {
            var is_checked = false;
            var id = lists[i].id;
            var name = lists[i].name;
            var department = lists[i].d_name;
            var position = lists[i].p_name;
            tags += '<tr class="sua_user_item-' + id + '" data-id="' + id + '" data-name="' + name + '">';
            tags += '<td>';
            tags += '<div class="form-check form-check-inline">';
            for (var c = 0; c < group_user_ids.length; c++) {
                if(group_user_ids[c] == id){
                    is_checked = true;
                    break;
                }
                else {
                    is_checked = false;
                }
            }
            if(is_checked){
                tags += '<input class="form-check-input" type="checkbox" checked id="userCheckbox_' + id + '" value="' + name + '">';
            }
            else {
                tags += '<input class="form-check-input" type="checkbox" id="userCheckbox_' + id + '" value="' + name + '">';
            }
            tags += '</div>';
            tags += '</td>';
            tags += '<td>'+name+'</td>';
            tags += '<td>'+department+'</td>';
            tags += '<td>'+position+'</td>';
            tags += '</tr>';
        }
        $('#ssu_management_roles_user').html(tags);

        $('input[id^="userCheckbox_"]').click(function() {
            var id = $(this).attr("id");
            var uid = id.split("_")[1];
            var user_name = $(this).val();

            if($(this).is(':checked')){
                group_user_ids.push(uid);
                group_user_names.push(user_name);
            } else {
                const idx = group_user_ids.indexOf(uid);
                if (idx > -1)
                    group_user_ids.splice(idx, 1);
                const uname = group_user_names.indexOf(user_name);
                if (uname > -1)
                    group_user_names.splice(uname, 1);
            }

            checked_users_func();
        });

    }
    function showUserListTable() {
        $('#ssu_management_roles_user').html('');
        var type = $('#sum_user_role_sel').val();
        var subtype = $('#sum_user_role_content_sel').val();
        var search = $('#user_search_cont').val();
        $.ajax({
            url: 'admin.getUserInfoList',
            data: {
                type:type,
                subtype:subtype,
                search:search
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        user_list_func(lists)
                    }
                    else
                        $('#ssu_management_roles_user').html('');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function addSelectedUsers() {
        var user_txt = "";
        for(var i = 0; i < group_user_names.length; i++){
            if(i == 0)
                user_txt += group_user_names[i];
            else
                user_txt += ' | ' + group_user_names[i];
        }
        $('#group_item_usres').val(user_txt);
    }
    function groupList(lists, d_numbers, p_numbers, g_numbers) {
        $('#ssu_management_roles_group').html('');
        var tags = '';
        for(var i = 0; i < lists.length; i++) {
            var id = lists[i].fid;
            var name = lists[i].fname;
            var d_number = d_numbers[i];
            var p_number = p_numbers[i];
            var g_number = g_numbers[i];

            tags += '<tr class="sua_group_item-' + id + '" data-id="' + id + '" data-name="' + name + '" data-num="' + i + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="groupCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>' + p_number + '</td>';
            tags += '   <td>' + d_number + '</td>';
            tags += '   <td>' + g_number + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="sumr_group_table-'+id+'" name="sumr_group_table-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#ssu_management_roles_group').html(tags);

        $('input[id^="groupCheckbox_"]').change(function() {
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

        $('select[id^="sumr_group_table-"]').change(function(){
            var id = $(this).attr("id");
            var event_id = id.split('-')[1];
            var sel_val = $(this).val();
            group_id = event_id;
            if (sel_val == "change") {
                if (permss.pwrite == 1) {
                    var group_name = $('.sua_group_item-' + event_id).attr("data-name");
                    var index = $('.sua_group_item-' + event_id).attr("data-num");
                    var unames = lists[index].user_names;
                    var uids = lists[index].user_ids;
                    group_user_names = $.parseJSON(unames);
                    group_user_ids = $.parseJSON(uids);
                    is_edit = true;
                    $('#group_item_name').val(group_name);
                    addSelectedUsers();
                    checked_users_func();
                    $('#ModalForGroupItem').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "delete") {
                if (permss.pdelete == 1) {
                    var index = $('.sua_group_item-' + event_id).attr("data-num");
                    var unames = lists[index].user_names;
                    var uids = lists[index].user_ids;
                    group_user_names = $.parseJSON(unames);
                    group_user_ids = $.parseJSON(uids);
                    myjs.data.confirmAlert(deleteGroupItem, event_id, 'pgtxt_wantdeleteitem');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });
    }
    function deleteGroupItem(gid) {
        $.ajax({
            url: 'admin.deleteSUMRolesGroup',
            data: {
                userid: userid,
                gid: gid,
                group_user_ids:group_user_ids,
                group_user_names:group_user_names,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.lists != "" && data.lists != null) {
                        var lists = data.lists;
                        var d_numbers = data.d_numbers;
                        var p_numbers = data.p_numbers;
                        var g_numbers = data.g_numbers;
                        if(lists !== null && lists != "") {
                            groupList(lists, d_numbers, p_numbers, g_numbers);
                        }
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                        group_user_ids = new Array();
                        group_user_names = new Array();
                    }
                    else
                        $('#ssu_management_roles_group').html('');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function addNewGroup(group_name) {
        $.ajax({
            url: 'admin.addSUMRolesGroup',
            data: {
                userid: userid,
                group_name: group_name,
                group_user_ids:group_user_ids,
                group_user_names:group_user_names,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.lists != "" && data.lists != null) {
                        var lists = data.lists;
                        var d_numbers = data.d_numbers;
                        var p_numbers = data.p_numbers;
                        var g_numbers = data.g_numbers;
                        if(lists !== null && lists != "") {
                            groupList(lists, d_numbers, p_numbers, g_numbers);
                        }
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                        group_user_ids = new Array();
                        group_user_names = new Array();
                    }
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function showRolesGroupList() {
        $.ajax({
            url: 'admin.getSUMRolesGroup',
            data: {
                userid: userid,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.lists != "" && data.lists != null) {
                        var lists = data.lists;
                        var d_numbers = data.d_numbers;
                        var p_numbers = data.p_numbers;
                        var g_numbers = data.g_numbers;

                        if(lists !== null && lists != "") {
                            groupList(lists, d_numbers, p_numbers, g_numbers);
                        }
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                    }
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function editGroup(group_name) {
        $.ajax({
            url: 'admin.editSUMRolesGroup',
            data: {
                gid: group_id,
                userid: userid,
                group_name: group_name,
                group_user_ids:group_user_ids,
                group_user_names:group_user_names,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.lists != "" && data.lists != null) {
                        var lists = data.lists;
                        var d_numbers = data.d_numbers;
                        var p_numbers = data.p_numbers;
                        var g_numbers = data.g_numbers;
                        if(lists !== null && lists != "") {
                            groupList(lists, d_numbers, p_numbers, g_numbers);
                        }
                        var total = data.total;
                        if(total <= 0){
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                        group_user_ids = new Array();
                        group_user_names = new Array();
                    }
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function showGroupedUsersList() {
        if(group_user_ids.length > 0) {
            $.ajax({
                url: 'admin.showGroupUserInfo',
                data: {
                    g_uids: group_user_ids
                },
                type: 'POST',
                success: function (data) {
                    if (data.msg === "ok") {
                        if (data.lists != "" && data.lists != null) {
                            var lists = data.lists;
                            $('#ssu_management_group_user').html('');
                            var tags = '';
                            for (var i = 0; i < lists.length; i++) {
                                var id = lists[i].id;
                                var name = lists[i].name;
                                var department = lists[i].d_name;
                                var position = lists[i].p_name;
                                tags += '<tr class="sua_user_item-' + id + '">';
                                tags += '   <td>' + name + '</td>';
                                tags += '   <td>' + department + '</td>';
                                tags += '   <td>' + position + '</td>';
                                tags += '</tr>';
                            }
                            $('#ssu_management_group_user').html(tags);
                            $('#div_ssu_management_group_user').css('display', 'block');
                        } else
                            $('#div_ssu_management_group_user').css('display', 'none');
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

    function allDeleteFunc() {
        $('.roles_selected_all_delete').click(function () {
            if (permss.pdelete == 0) {
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            if(checked_del_items.length > 0) {
                $.ajax({
                    url: 'admin.allDeleteSUMRolesChecked',
                    data: {
                        userid: userid,
                        ids: checked_del_items,
                        pstart: pstart,
                        pcnt: pcnt,
                        tabstatus: tabstatus
                    },
                    type: 'POST',
                    success: function (data) {
                        if (data.msg === "ok") {
                            var lists = data.lists;
                            var d_numbers = data.d_numbers;
                            var p_numbers = data.p_numbers;
                            var g_numbers = data.g_numbers;
                            if (lists !== null && lists != "") {
                                if (tabstatus == 0)
                                    departmentList(lists);
                                else if (tabstatus == 1)
                                    positionList(lists);
                                else if (tabstatus == 2)
                                    groupList(lists, d_numbers, p_numbers, g_numbers);
                                var total = data.total;
                                if (total <= 0) {
                                    $('#ssmu_page_nav').html('');
                                    return;
                                }
                                pstart = data.pstart;
                                var totalpage = data.totalpage;
                                pageNavigation(totalpage);
                                group_user_ids = new Array();
                                group_user_names = new Array();
                            } else {
                                if (tabstatus == 0)
                                    $('#ssu_management_roles_department').html('');
                                else if (tabstatus == 1)
                                    $('#ssu_management_roles_position').html('');
                                else if (tabstatus == 2)
                                    $('#ssu_management_roles_group').html('');
                            }
                            checked_del_items = new Array();
                        } else {
                            console.log(data.msg);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            }
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    export default {
        data(){
            return {
                pageid: 'system-suser-management-roles-fav',
                mu_system:'',
                musu_system_bsuser:'',
                mususu_system_suser_manage:'',
                musususu_system_suser_manage_roles:'',
                btntxt_roles:'',
                btntxt_add:'',
                btntxt_edit:'',
                btntxt_change:'',
                btntxt_delete:'',
                pgtxt_department:'',
                pgtxt_position:'',
                pgtxt_group:'',
                pgtxt_list:'',
                pgtxt_name:'',
                pgtxt_number:'',
                pgtxt_delete:'',
                pgtxt_superior:'',
                pgtxt_colleagues:'',
                pgtxt_suserlist:'',
                pgtxt_all:'',
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
            cmu_system:function () {
                return this.mu_system;
            },
            cmusu_system_bsuser:function () {
                return this.musu_system_bsuser;
            },
            cmususu_system_suser_manage:function () {
                return this.mususu_system_suser_manage;
            },
            cmusususu_system_suser_manage_roles:function () {
                return this.musususu_system_suser_manage_roles;
            },
            cbtntxt_roles:function () {
                return this.btntxt_roles;
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit;
            },
            cbtntxt_change:function () {
                return this.btntxt_change;
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete;
            },
            cbtntxt_add:function () {
                return this.btntxt_add;
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
            cpgtxt_list:function () {
                return this.pgtxt_list;
            },
            cpgtxt_name:function () {
                return this.pgtxt_name;
            },
            cpgtxt_number:function () {
                return this.pgtxt_number;
            },
            cpgtxt_delete:function () {
                return this.pgtxt_delete;
            },
            cpgtxt_superior:function () {
                return this.pgtxt_superior;
            },
            cpgtxt_colleagues:function () {
                return this.pgtxt_colleagues;
            },
            cpgtxt_suserlist:function () {
                return this.pgtxt_suserlist;
            },
            cpgtxt_all:function () {
                return this.pgtxt_all;
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },
            cpgtxt_wantdeleteitem:function () {
                return this.pgtxt_wantdeleteitem;
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
        mounted() {
            /* fav part*/
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            permss = myjs.data.permissionDefinition();

            this.sliderTabs();
            this.initPage();
        },
        methods: {
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }

            },
            initPage(){
                btntxt_add = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_add');
                btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
                btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
                pgtxt_department = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_department');
                pgtxt_position = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_position');
                pgtxt_superior = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_superior');
                pgtxt_name = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
                is_edit = false;
                showRolesDepartmentList();
                allDeleteFunc();
            },
            sliderTabs() {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
                    pstart = 1;
                    pnum = pstart;
                    $('#ssmu_page_nav').html('');
                    is_edit = false;
                    $('#item_id').val('');
                    checked_del_items = new Array();

                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.page_roles_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    if (subid == 'departmentbar')
                    {
                        tabstatus = 0;
                        showRolesDepartmentList();
                    }
                    else if (subid == 'positionbar')
                    {
                        tabstatus = 1;
                        showRolesPositionList();
                    }
                    else if (subid == 'groupbar')
                    {
                        tabstatus = 2;
                        selete_role_sel();
                        showRolesGroupList();
                    }
                    allDeleteFunc();
                });
            },
            addRoleList(){
                if (permss.pcreate == 1) {
                    is_edit = false;
                    $('#item_id').val('');
                    if (tabstatus == 0 || tabstatus == 1) {
                        showDepartmentModal();
                        $('#ModalForAddItem').modal('show');
                    } else if (tabstatus == 2) {
                        group_id = 0;
                        group_user_ids = new Array();
                        group_user_names = new Array();
                        $('#group_item_name').val('');
                        $('#group_item_usres').val('');
                        $('#select_users_name_group').html('');

                        $('#ModalForGroupItem').modal('show');
                    }
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            addModalBtn(){
                var item_name = $('#item_name').val();
                if(item_name != null && item_name != "") {
                    if (tabstatus == 0) {
                        if (is_edit) {
                            editRolesDepartment();
                        } else {
                            addRolesDepartment();
                        }
                    }
                    if (tabstatus == 1) {
                        if (is_edit) {
                            editRolesPosition();
                        } else {
                            addRolesPosition();
                        }
                    }
                    is_edit = false;
                    $('#item_id').val('');
                }
            },
            selectUserBtn(){
                $('#user_search_cont').val('')
                $('#div_ssu_management_group_user').css('display', 'none');
                showUserListTable();
                $('#ModalForGroupItem').modal('hide');
                $('#ModalForUserItem').modal('show');
            },
            allGroupSearchBtn(){

            },
            role_userSearchBtn(){
                showUserListTable();
            },
            addUserListModalBtn(){
                var str = $('#select_users_name_group').text();
                if(str != "" && str != null) {
                    addSelectedUsers();
                    $('#ModalForGroupItem').modal('show');
                    $('#ModalForUserItem').modal('hide');
                }
            },
            addGroupModalBtn(){
                var group_name = $('#group_item_name').val();
                if(group_name != '')
                {
                    if(!is_edit)
                        addNewGroup(group_name);
                    else
                        editGroup(group_name);
                    $('#ModalForGroupItem').modal('hide')
                    group_id = 0;
                    group_user_ids = new Array();
                    group_user_names = new Array();
                    $('#select_users_name_group').html('');
                    $('#group_item_name').val('');
                    $('#group_item_usres').val('');
                }
            },

        }
    }
</script>
