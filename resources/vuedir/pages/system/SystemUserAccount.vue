<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmususu_system_suser_account}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_system}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_bsuser}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_system_suser_account}}
                          <a href="#" id="system-suser-account-fav" data-status="off" data-page-info="Account_system-suser-account">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>

                </div>
            </div>

            <div class="row m-t-15">
                <div class="col-md-12">
                  <div class="card">
                        <div class="card-body">
                            <div class="nav nav-pills nav-fill m-b-20" role="tablist" aria-orientation="vertical">
                                <a class="nav-item nav-link active m-r-15" style="flex: 0.02 1 auto;border: 1px solid #e6e6e6;border-radius:1.2rem" id="system_user_account_tab-1" data-toggle="pill" href="#system-user-profile-general" role="tab" aria-controls="system-user-profile-general" aria-selected="true">
                                    <svg t="1599124664697" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23124" width="17" height="17">
                                        <path d="M512.3 63.1C264.5 63.1 63.6 264 63.6 511.8c0 137.4 61.7 260.3 159 342.6 2.5 2.9 5.6 5.4 9 7.4 76.9 61.7 174.5 98.7 280.8 98.7 106.3 0 203.9-36.9 280.8-98.7 3.4-2 6.4-4.5 9-7.4 97.2-82.3 159-205.3 159-342.6-0.1-247.8-201-448.7-448.9-448.7z m0 822.7c-81 0-155.9-25.7-217.1-69.4l1.4-3.8c33-90.7 119.2-151.1 215.7-151.1 95.4 0 183.6 51.9 211 134.3L730 816c-61.2 43.9-136.4 69.8-217.7 69.8zM400.2 474.4c0-62 50.2-112.2 112.2-112.2s112.2 50.2 112.2 112.2-50.2 112.2-112.2 112.2-112.2-50.2-112.2-112.2z m390.4 287.3c-27.3-71.3-84.4-121.9-151.4-149.8 37-34.2 60.2-83.1 60.2-137.4 0-103.3-83.7-187-187-187s-187 83.7-187 187c0 55.2 23.9 104.8 62 139-66 29.7-120.4 82.5-151.5 150.2-60.6-66.5-97.5-154.8-97.5-251.8 0-206.5 167.4-373.9 373.9-373.9s373.9 167.4 373.9 373.9c0.1 96-36.1 183.5-95.6 249.8z" p-id="23125"></path>
                                    </svg>
                                    <span class="m-l-10">{{cbtntxt_general}}</span>
                                </a>
                                <a class="nav-item nav-link m-r-15" style="flex: 0.02 1 auto;border: 1px solid #e6e6e6;border-radius:1.2rem" id="system_user_account_tab-2" data-toggle="pill" href="#system-user-profile-infomation" role="tab" aria-controls="system-user-profile-infomation" aria-selected="false">
                                    <svg t="1599124713464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23895" width="17" height="17">
                                        <path d="M627.2 328.533333C597.333333 298.666667 554.666667 281.6 512 281.6c-89.6 0-162.133333 72.533333-162.133333 162.133333 0 89.6 72.533333 162.133333 162.133333 162.133334s162.133333-72.533333 162.133333-162.133334c0-42.666667-17.066667-85.333333-46.933333-115.2z" p-id="23896"></path>
                                        <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 977.066667C256 977.066667 46.933333 768 46.933333 512S256 46.933333 512 46.933333 977.066667 256 977.066667 512 768 977.066667 512 977.066667z" p-id="23897"></path>
                                        <path d="M725.333333 584.533333c34.133333-46.933333 51.2-110.933333 42.666667-174.933333-12.8-115.2-110.933333-209.066667-226.133333-221.866667C384 170.666667 256 294.4 256 443.733333c0 51.2 17.066667 102.4 42.666667 140.8l-93.866667 162.133334h128l64 110.933333 93.866667-162.133333h42.666666l93.866667 162.133333 64-110.933333h128L725.333333 584.533333z m-59.733333 119.466667l-38.4 64-72.533333-119.466667c-29.866667 8.533333-59.733333 8.533333-89.6 0l-68.266667 123.733334-38.4-64H281.6l72.533333-123.733334c-21.333333-25.6-38.4-55.466667-46.933333-89.6-34.133333-153.6 98.133333-285.866667 251.733333-251.733333 76.8 17.066667 140.8 81.066667 157.866667 157.866667 17.066667 72.533333-4.266667 140.8-46.933333 187.733333l72.533333 123.733333-76.8-8.533333z" p-id="23898"></path>
                                    </svg>
                                  <span class="m-l-10">{{cbtntxt_infomation}}</span>
                                </a>
                                <a class="nav-item nav-link m-r-15" style="flex: 0.02 1 auto;border: 1px solid #e6e6e6;border-radius:1.2rem" id="system_user_account_tab-3" data-toggle="pill" href="#system-user-profile-senior" role="tab" aria-controls="system-user-profile-senior" aria-selected="false">
                                    <svg t="1599124753113" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24641" width="17" height="17">
                                        <path d="M512 64a448 448 0 1 0 0.0512 896.0512A448 448 0 0 0 512 64z m0 820.0192a372.0704 372.0704 0 0 1 0-744.0384 372.0704 372.0704 0 0 1 0 744.0384z" p-id="24642"></path><path d="M464.0256 336.0256a48.0256 48.0256 0 1 0 96 0 48.0256 48.0256 0 0 0-96.0512 0zM536.0128 448H487.936a8.0384 8.0384 0 0 0-7.9872 7.9872v272.0256c0 4.4032 3.584 7.9872 7.9872 7.9872h48.0256c4.4032 0 7.9872-3.584 7.9872-7.9872V455.9872a8.0384 8.0384 0 0 0-7.9872-7.9872z" p-id="24643"></path>
                                    </svg>
                                    <span class="m-l-10">{{cbtntxt_senior}}</span>
                                </a>
                            </div>

                            <div class="tab-content">
                                <!--General Tab start-->
                                <div class="tab-pane fade show active" id="system-user-profile-general" role="tabpanel" aria-labelledby="system_user_account_tab-1">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="card p-30">
                                                <div id="sua-profile-default">
                                                    <div class='row'>
                                                        <div class='col-md-2'>
                                                            <div class='form-group'>
                                                                <label style='margin-top: 8px;'>{{cpgtxt_ProfilePhoto}}</label>
                                                            </div>
                                                        </div>
                                                        <div class='col-md-2 mt-2'>
                                                            <div id='ssua_general_photo_size' class='input-group' style='color: #a7a7ed'></div>
                                                        </div>
                                                        <div class='col-md-7 text-left'>
                                                            <div class='btn btn-outline-light dash-my-btn-0' id='ssua_general_photo_editBtn'>
                                                                <span>{{cbtntxt_edit}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-md-2'>
                                                            <div class='form-group'>
                                                                <label style='margin-top: 8px;'>{{cpgtxt_ProfileBackground}}</label>
                                                            </div>
                                                        </div>
                                                        <div class='col-md-2 mt-2'>
                                                            <div id='ssua_general_back_size' class='input-group' style='color: #a7a7ed'></div>
                                                        </div>
                                                        <div class='col-md-7 text-left'>
                                                            <div class='btn btn-outline-light dash-my-btn-0' id='ssua_general_back_editBtn'>
                                                                <span>{{cbtntxt_edit}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-md-2'>
                                                            <div class='form-group'>
                                                                <label style='margin-top: 8px'>{{cpgtxt_username}}</label>
                                                            </div>
                                                        </div>
                                                        <div class='col-md-2 mt-2'>
                                                            <div id='ssua_general_username_limit' class='input-group' style='color: #a7a7ed'></div>
                                                        </div>
                                                        <div class='col-md-7 text-left'>
                                                            <div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='ssua_general_username_editBtn'>
                                                                <span>{{cbtntxt_edit}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-md-2'>
                                                            <div class='form-group'>
                                                                <label style='margin-top: 8px'>{{cpgtxt_name}}</label>
                                                            </div>
                                                        </div>
                                                        <div class='col-md-2 mt-2'>
                                                            <div id='ssua_general_name_limit' class='input-group' style='color: #a7a7ed'></div>
                                                        </div>
                                                        <div class='col-md-7 text-left'>
                                                            <div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='ssua_general_name_editBtn'>
                                                                <span>{{cbtntxt_edit}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="card border-0 m-b-30 text-right">
                                                <div>
                                                    <div id="sua-profile-default-edit" class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="SaveBaseItemBtn()"><!-- han 2010-10-17 -->
                                                        <span>{{ cbtntxt_savechange }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--General Tab end-->
                                <!--Information Tab start-->
                                <div class="tab-pane fade" id="system-user-profile-infomation" role="tabpanel" aria-labelledby="system_user_account_tab-2">
<!--                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="card p-30">
                                                <div id="sua-information-default">
                                                    <h6 class="card-title m-b-20">{{cpgtxt_role}}</h6>
                                                    <div class='row'>
                                                        <div class='col-md-2'>
                                                            <div class='form-group'>
                                                                <label style='margin-top: 8px'>{{cpgtxt_department}}</label>
                                                            </div>
                                                        </div>
                                                        <div class='col-md-2 mt-2'>
                                                            <div id='information_department_limitation' class='input-group' data-item="" data-id="" style='color: #a7a7ed'></div>
                                                        </div>
                                                        <div class='col-md-7 text-left'>
                                                            <div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='ssua_information_department_editBtn'>
                                                                <span>{{cbtntxt_edit}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-md-2'>
                                                            <div class='form-group'>
                                                                <label style='margin-top: 8px'>{{cpgtxt_position}}</label>
                                                            </div>
                                                        </div>
                                                        <div class='col-md-2 mt-2'>
                                                            <div id='information_position_limitation' class='input-group' data-item="" data-id="" style='color: #a7a7ed'></div>
                                                        </div>
                                                        <div class='col-md-7 text-left'>
                                                            <div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='ssua_information_position_editBtn'>
                                                                <span>{{cbtntxt_edit}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-md-2'>
                                                            <div class='form-group'>
                                                                <label style='margin-top: 8px'>{{cpgtxt_group}}</label>
                                                            </div>
                                                        </div>
                                                        <div class='col-md-2 mt-2'>
                                                            <div id='information_group_limitation' class='input-group' data-item="" data-id="" style='color: #a7a7ed'></div>
                                                        </div>
                                                        <div class='col-md-7 text-left'>
                                                            <div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='ssua_information_group_editBtn'>
                                                                <span>{{cbtntxt_edit}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="card border-0 m-b-30 text-right">
                                                <div>
                                                    <div id="sua-information-default-save" class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="SaveBaseItemBtn()">
                                                        <span>{{ cbtntxt_savechange }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>-->
                                </div>
                                <!--Information Tab end-->
                                <!--Senior Tab start-->
                                <div class="tab-pane fade" id="system-user-profile-senior" role="tabpanel" aria-labelledby="system_user_account_tab-3">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="card p-30">
                                                <div id="sua-senior-default">
                                                    <h6 class="card-title m-b-20">{{cpgtxt_role}}</h6>
                                                    <div class='row'>
                                                        <div class='col-md-2'>
                                                            <div class='form-group'>
                                                                <label style='margin-top: 8px'>{{cpgtxt_department}}</label>
                                                            </div>
                                                        </div>
                                                        <div class='col-md-2 mt-2'>
                                                            <div id='senior_department_limitation' class='input-group' data-item="" data-id="" style='color: #a7a7ed'></div>
                                                        </div>
                                                        <div class='col-md-7 text-left'>
                                                            <div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='ssua_senior_department_editBtn'>
                                                                <span>{{cbtntxt_edit}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-md-2'>
                                                            <div class='form-group'>
                                                                <label style='margin-top: 8px'>{{cpgtxt_position}}</label>
                                                            </div>
                                                        </div>
                                                        <div class='col-md-2 mt-2'>
                                                            <div id='senior_position_limitation' class='input-group' data-item="" data-id="" style='color: #a7a7ed'></div>
                                                        </div>
                                                        <div class='col-md-7 text-left'>
                                                            <div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='ssua_senior_position_editBtn'>
                                                                <span>{{cbtntxt_edit}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class='row'>
                                                        <div class='col-md-2'>
                                                            <div class='form-group'>
                                                                <label style='margin-top: 8px'>{{cpgtxt_group}}</label>
                                                            </div>
                                                        </div>
                                                        <div class='col-md-2 mt-2'>
                                                            <div id='senior_group_limitation' class='input-group' data-item="" data-id="" style='color: #a7a7ed'></div>
                                                        </div>
                                                        <div class='col-md-7 text-left'>
                                                            <div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='ssua_senior_group_editBtn'>
                                                                <span>{{cbtntxt_edit}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="card border-0 m-b-30 text-right">
                                                <div>
                                                    <div id="sua-senior-default-save" class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="SaveBaseItemBtn()">
                                                        <span>{{ cbtntxt_savechange }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Senior Tab end-->
                                <!-- add account set item start-->
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="card p-30">
                                            <div id="ssua_add_item">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="card border-0 m-b-10 text-right">
                                            <div>
                                                <div id="sua-profile-add-item" class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="AccountSetAddItemBtn()">
                                                    <span>+ {{ cbtntxt_add }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- add account set item end-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--EditItemModal start-->
            <div class="modal fade" id="EditItemModal">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="modal_title"></h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body" id="Modalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="row">
                                <div class="col-md-12" id="selete_filed_div" style="text-align: center;">
                                </div>
                            </div>
                            <div class="panel">
                                <form id="stua-profile-photo-edit">
                                    <div class="col" style="padding-bottom: 10px;">
                                        <div class="col-md-12">
                                            <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"></div>
                                        </div>
                                        <div style="margin: 10px 10px 0px 10px;">
                                            <div class="row" style="padding: 10px">
                                                <div class="col-md-12">
                                                    <div style="height: 200px; overflow-y:auto; overflow-x: hidden;">
                                                        <div class="">
                                                        <table class="table table-hover" style="text-align: center;">
                                                            <thead style="width: 100%">
                                                            <tr id="ssua_table_header">

                                                            </tr>
                                                            </thead>
                                                            <tbody id="ssua_table_body">

                                                            </tbody>
                                                        </table>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-1 mt-3">
                                                    <div class="form-group">
                                                        <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_title}}</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-11 mt-3" style="padding-left: 22px;">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" style="background-color: #fff;border: 1px solid #ced4da; width: 300px;"  placeholder="" id="modal_table_select_item" aria-describedby="basic-addon2" readonly>
                                                    </div>
                                                </div>

                                                <div class="col-md-12 text-center">
                                                    <div id="modal_savechangeBtn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="ModalSaveItemBtn()">
                                                        <span>{{cbtntxt_savechange}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--EditItemModal end-->
            <input type="hidden" id="modal_item_id">
            <input type="hidden" id="modal_item_con">
            <input type="hidden" id="modal_item_name">
            <input type="hidden" id="add_index" value="0">

            <form method="post" enctype="multipart/form-data" name="system_user_account_frm" id="system_user_account_frm">
                <input type="hidden" id="base_item1_id"  name="base_item1_id" value="">
                <input type="hidden" id="base_item1_val" name="base_item1_val" value="">
                <input type="hidden" id="base_item2_id"  name="base_item2_id" value="">
                <input type="hidden" id="base_item2_val" name="base_item2_val" value="">
                <input type="hidden" id="base_item3_id"  name="base_item3_id" value="">
                <input type="hidden" id="base_item3_val" name="base_item3_val" value="">
                <input type="hidden" id="base_item4_id"  name="base_item4_id" value="">
                <input type="hidden" id="base_item4_val" name="base_item4_val" value="">
                <input type="hidden" id="tab_index" name="tab_index" value="1">
                <input type="hidden" id="user_id" name="user_id">
            </form>

        </div>
</template>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import axios from "axios";
    import Lang_module from "../../assets/jsfunc/lang_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var vueOBJ=null;
    var permss;
    var txt_name;
    var txt_size;
    var txt_style;
    var txt_limitation;
    var txt_character;
    var txt_image;
    var txt_set;
    var txt_pleaseselectitem;
    var txt_updatesucceeded;
    var txt_createitem;
    var txt_font;
    var txt_line;
    var txt_height;
    var txt_characters;

    var btn_edit;
    var btn_delete;
    var btn_text;
    var btn_number;
    var btn_email;
    var btn_date;

    var tabIndex = 1;
    var btnIndex = 0;
    var settingfield = "";
    var is_add = false;
    var is_edit = false;
    var editIndex = -1;

    function loadPageText() {
        txt_name = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
        txt_size = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_size');
        txt_style = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_style');
        txt_limitation = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_limitation');
        txt_image = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_image');
        txt_character = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_character');
        txt_set = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_set');
        txt_pleaseselectitem = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_pleaseselectitem');
        txt_updatesucceeded = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_updatesucceeded');
        txt_createitem = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_createitem');
        txt_font = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_font');
        txt_line = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_line');
        txt_height = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_height');
        txt_characters = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_characters');

        btn_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        btn_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        btn_text = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_text');
        btn_number = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_number');
        btn_email = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_email');
        btn_date = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_date');
    }
    function initAccountPage() {
        $("#user_id").val(userid);
        $('a[id^="system_user_account_tab-"]').click(function(){
            var id = $(this).attr('id');
            tabIndex = id.split("-")[1];
            $("#tab_index").val(tabIndex);
            loadingPageData();
        });
    }
    function ShowModalWindow() {
        var modalTableHeader = "";

        if(is_add)
        {
            $('#modal_title').text(txt_createitem);

            if(settingfield == "txt") {
                modalTableHeader +='<th class="border-bottom-0">'+txt_name+'</th>';
                modalTableHeader += '<th class="border-bottom-0">' + txt_limitation + '</th>';
                modalTableHeader += '<th class="border-bottom-0">' + txt_style + '</th>';
            }
            else if(settingfield == "number"){
                modalTableHeader +='<th class="border-bottom-0">'+txt_name+'</th>';
                modalTableHeader += '<th class="border-bottom-0">' + txt_font + ' ' + txt_size + '</th>';
                modalTableHeader += '<th class="border-bottom-0">' + txt_line + ' ' + txt_height + '</th>';
                modalTableHeader += '<th class="border-bottom-0">' + txt_characters + '</th>';
            }
        }
        else {
            if (settingfield == "img")
                $('#modal_title').text(txt_image + " " + txt_set);
            else if (settingfield == "txt")
                $('#modal_title').text(txt_character + " " + txt_set);

            modalTableHeader += '<th class="border-bottom-0">' + txt_name + '</th>';
            if (settingfield == "img")
                modalTableHeader += '<th class="border-bottom-0">' + txt_size + '</th>';
            else if (settingfield == "txt")
                modalTableHeader += '<th class="border-bottom-0">' + txt_limitation + '</th>';

            modalTableHeader +='<th class="border-bottom-0">'+txt_style+'</th>';
        }
        $('#ssua_table_header').html(modalTableHeader);

        $('#ssua_table_body').html("");
        $("#modal_table_select_item").val("");
        $.ajax({
            url: 'admin.getSystemSettingField',
            type: 'POST',
            data:{
                settingfield:settingfield
            },
            success: function (data) {
                if(data.msg=="ok"){
                    if(data.fieldData != "" && data.fieldData != null){
                        setTableBody(data.fieldData);
                    }
                }
                else
                    alert(data.msg);

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            },
        });

    }
    function setTableBody(fieldData) {
        var modalTableBody = "";
        var name = "";
        var cont = "";
        var style = "";
        var cont1 = "";
        var cont2 = "";
        var cont3 = "";
        for(var i = 0; i < fieldData.length; i++){
            var data = fieldData[i];
            if(settingfield == "img") {
                name = data.name;
                cont = data.size;
                style = data.style;
            }
            else if(settingfield == "txt"){
                name = data.name;
                cont = data.minvalue + "-" + data.maxvalue;
                style = data.style_title;
            }
            else if(settingfield == "number"){
                name = data.fname;
                cont1 = data.fontsize;
                cont2 = data.flineheight;
                cont = data.fnumber;
            }
            else if(settingfield == "email"){

            }
            else if(settingfield == "date"){

            }
            modalTableBody += "<tr class='sua-field-list-item' data-id='" + data.id + "' data-name='" + name + "' data-cont='" + cont + "'>";
            modalTableBody += "<td class='border-0' style='border-radius: 50px 0 0 50px'>" + name + "</td>";
            if(settingfield == "number"){
                modalTableBody += "<td class='border-0'>" + cont1 + "</td>";
                modalTableBody += "<td class='border-0'>" + cont2 + "</td>";
            }
            modalTableBody += "<td class='border-0'>" + cont + "</td>";
            modalTableBody += "<td class='border-0' style='border-radius: 0 50px 50px 0'>" + style + "</td>";
            modalTableBody += "</tr>";
        }

        $('#ssua_table_body').html(modalTableBody);

        $(document).on('click', '.sua-field-list-item', function () {
            var name = $(this).attr("data-name");
            var itemdata = $(this).attr("data-cont");
            var id = $(this).attr("data-id");

            $("#modal_table_select_item").val(name);
            $("#modal_item_con").val(itemdata);
            $("#modal_item_id").val(id);
            $("#modal_item_name").val(name);
        })
    }

    function pageEvent() {
        $('#ssua_general_photo_editBtn').click(function(){
            if (permss.pwrite == 1) {
                is_add = false;
                is_edit = false;
                btnIndex = 1;
                settingfield = "img";
                $('#selete_filed_div').html("");
                $('#EditItemModal').modal('show');
                ShowModalWindow();
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });
        $('#ssua_general_back_editBtn').click(function(){
            if (permss.pwrite == 1) {
                is_add = false;
                is_edit = false;
                btnIndex = 2;
                settingfield = "img";
                $('#selete_filed_div').html("");
                $('#EditItemModal').modal('show');
                ShowModalWindow();
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });
        $('#ssua_general_username_editBtn').click(function(){
            if (permss.pwrite == 1) {
                is_add = false;
                is_edit = false;
                btnIndex = 3;
                settingfield = "txt";
                $('#selete_filed_div').html("");
                $('#EditItemModal').modal('show');
                ShowModalWindow();
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });
        $('#ssua_general_name_editBtn').click(function(){
            if (permss.pwrite == 1) {
                is_add = false;
                is_edit = false;
                btnIndex = 4;
                settingfield = "txt";
                $('#selete_filed_div').html("");
                $('#EditItemModal').modal('show');
                ShowModalWindow();
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });

/*
        $('#ssua_information_department_editBtn').click(function(){
            is_add = false;
            is_edit = false;
            btnIndex = 1;
            settingfield = "txt";
            $('#selete_filed_div').html("");
            $('#EditItemModal').modal('show');
            ShowModalWindow();
        });
        $('#ssua_information_position_editBtn').click(function(){
            is_add = false;
            is_edit = false;
            btnIndex = 2;
            settingfield = "txt";
            $('#selete_filed_div').html("");
            $('#EditItemModal').modal('show');
            ShowModalWindow();
        });
        $('#ssua_information_group_editBtn').click(function(){
            is_add = false;
            is_edit = false;
            btnIndex = 3;
            settingfield = "txt";
            $('#selete_filed_div').html("");
            $('#EditItemModal').modal('show');
            ShowModalWindow();
        });
*/

        $('#ssua_senior_department_editBtn').click(function(){
            if (permss.pwrite == 1) {
                is_add = false;
                is_edit = false;
                btnIndex = 1;
                settingfield = "txt";
                $('#selete_filed_div').html("");
                $('#EditItemModal').modal('show');
                ShowModalWindow();
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });
        $('#ssua_senior_position_editBtn').click(function(){
            if (permss.pwrite == 1) {
                is_add = false;
                is_edit = false;
                btnIndex = 2;
                settingfield = "txt";
                $('#selete_filed_div').html("");
                $('#EditItemModal').modal('show');
                ShowModalWindow();
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });
        $('#ssua_senior_group_editBtn').click(function(){
            if (permss.pwrite == 1) {
                is_add = false;
                is_edit = false;
                btnIndex = 3;
                settingfield = "txt";
                $('#selete_filed_div').html("");
                $('#EditItemModal').modal('show');
                ShowModalWindow();
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });
    }

    function loadingPageData() {
        $.ajax({
            url: 'admin.getSystemUserAccountAllData',
            type: 'POST',
            data: {
                userid:userid,
                tabIndex:tabIndex
            },
            success: function (data) {
                if(data.msg=="ok"){
                    if(data.baseData != "" && data.baseData != null){
                        var baseData = $.parseJSON(data.baseData);
                        $("#base_item1_id").val(baseData[0].id_1);
                        $("#base_item1_val").val(baseData[0].val_1);
                        $("#base_item2_id").val(baseData[0].id_2);
                        $("#base_item2_val").val(baseData[0].val_2);
                        $("#base_item3_id").val(baseData[0].id_3);
                        $("#base_item3_val").val(baseData[0].val_3);
                        $("#base_item4_id").val(baseData[0].id_4);
                        $("#base_item4_val").val(baseData[0].val_4);

                        showPageBaseData(baseData)
                    }
                    if(data.addData != "" && data.addData != null){
                        showPageAddedData($.parseJSON(data.addData))
                    }
                    else {
                        $('#add_index').val(0);
                        $('#ssua_add_item').html("");
                    }
                }
                else
                    alert(data.msg);

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            },
        });
    }
    function showPageBaseData(baseData) {
        if(tabIndex == 1){
            $("#ssua_general_photo_size").text(baseData[0].val_1);
            $("#ssua_general_back_size").text(baseData[0].val_2);
            $("#ssua_general_username_limit").text(baseData[0].val_3);
            $("#ssua_general_name_limit").text(baseData[0].val_4);
        }
/*
        if(tabIndex == 2){
            $("#information_department_limitation").text(baseData[0].val_1);
            $("#information_position_limitation").text(baseData[0].val_2);
            $("#information_group_limitation").text(baseData[0].val_3);
        }
*/
        if(tabIndex == 3){
            $("#senior_department_limitation").text(baseData[0].val_1);
            $("#senior_position_limitation").text(baseData[0].val_2);
            $("#senior_group_limitation").text(baseData[0].val_3);
        }
    }
    function showPageAddedData(addData) {
        var tags = "";
        if(addData != null && addData != ""){
            $('#add_index').val(addData.length);
            for(var i = 0; i < addData.length; i++){
                var list = addData[i];
                var index = list.index;
                var settingfield = list.settingfield;
                var id = list.id;
                var name = list.name;
                var itemdata = list.itemdata;

                tags += "<div class='row'>";
                tags += "<div class='col-md-2'><div class='form-group'><label style='margin-top: 8px' class='data-ajax' data-ajax='pgtxt_name'>" + name + "</label></div></div>";
                tags += "<div class='col-md-2 mt-2'><div id='sua-name-limitation' class='input-group' style='color: #a7a7ed'>" + itemdata + "</div></div>";
                tags += "<div class='col-md-2 text-left'><div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='sua-text-list-item' data-id='" + id + "' data-cont='" + itemdata + "' data-name='" + name + "' data-index='" + index + "' data-ajax='btntxt_edit'><span>" + btn_edit + "</span></div></div>";
                tags += "<div class='col-md-3 text-left'><div class='btn btn-outline-light dash-my-btn-0 data-ajax' id='sua-text-del-item' data-index='" + index + "' data-ajax='btntxt_delete'><span>" + btn_delete + "</span></div></div>";
                tags += "</div>";
            }
            $('#ssua_add_item').html(tags);

            $('div[id="sua-text-list-item"]').click(function(){
                if (permss.pwrite == 1) {
                    editIndex = $(this).attr("data-index");
                    var name = $(this).attr("data-name");
                    var itemdata = $(this).attr("data-cont");
                    var id = $(this).attr("data-id");

                    $("#modal_item_con").val(itemdata);
                    $("#modal_item_id").val(id);
                    $("#modal_item_name").val(name);

                    is_edit = true;
                    is_add = false;
                    vueOBJ.AccountSetEditItemBtn();
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            });
            $('div[id="sua-text-del-item"]').click(function(){
                if (permss.pdelete == 1) {
                    var delIndex = $(this).attr("data-index");
                    $.ajax({
                        url: 'admin.deleteSystemUserAccountAddData',
                        type: 'POST',
                        data: {
                            userid: userid,
                            tabIndex: tabIndex,
                            delIndex: delIndex
                        },
                        success: function (data) {
                            if (data.msg == "ok") {
                                if (data.addData != "" && data.addData != null) {
                                    showPageAddedData($.parseJSON(data.addData));
                                } else {
                                    $('#ssua_add_item').html("");
                                    $('#add_index').val(0);
                                }
                            } else
                                alert(data.msg);

                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                    });
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            });
        }
    }

    function AddModalTabButton() {
        settingfield = "txt";
        $('#selete_filed_div').html("");
        $('#EditItemModal').modal('show');
        ShowModalWindow();
        var modalTab = "";
        modalTab += '<div class="btn btn-outline-light active dash-my-btn-1" id="tab-mu_1" style="width: 23%; margin-right: 5px;"><span class="m-auto">'+btn_text+'</span></div>';
        modalTab += '<div class="btn btn-outline-light dash-my-btn-1" id="tab-mu_2" style="width: 23%; margin-right: 5px;"><span class="m-auto">'+btn_number+'</span></div>';
        modalTab += '<div class="btn btn-outline-light dash-my-btn-1" id="tab-mu_3" style="width: 23%; margin-right: 5px;"><span class="m-auto">'+btn_email+'</span></div>';
        modalTab += '<div class="btn btn-outline-light dash-my-btn-1" id="tab-mu_4" style="width: 23%; margin-right: 5px;"><span class="m-auto">'+btn_date+'</span></div>';
        $('#selete_filed_div').html(modalTab);
        $('div[id^="tab-mu_"]').click(function () {
            var id = $(this).attr("id");
            modalTabClick(id.split("_")[1]);
        });
    }
    function modalTabClick(n) {
        $('.modal-body .btn.btn-outline-light').removeClass('active');

        if (n == 1) {
            settingfield = "txt";
            $('#tab-mu_1').addClass('active');
        } else if (n == 2) {
            settingfield = "number";
            $('#tab-mu_2').addClass('active');
        } else if (n == 3) {
            settingfield = "email";
            $('#tab-mu_3').addClass('active');
        } else if (n == 4) {
            settingfield = "date";
            $('#tab-mu_4').addClass('active');
        }

        ShowModalWindow();
    }

    export default {
        components: {Lang_module},
        data() {
            return {
                pageid: 'system-suser-account-fav',
                mususu_system_suser_account: '',
                mu_system: '',
                musu_system_bsuser: '',
                btntxt_general: '',
                btntxt_senior: '',
                btntxt_infomation: '',
                pgtxt_imgupcondition: '',
                pgtxt_username: '',
                pgtxt_name: '',
                pgtxt_mail: '',
                pgtxt_background: '',
                btntxt_edit: '',
                btntxt_add: '',
                pgtxt_ProfilePhoto: '',
                pgtxt_ProfileBackground:'',
                pgtxt_news: '',
                pgtxt_style: '',
                pgtxt_limitation: '',
                pgtxt_character: '',
                pgtxt_set: '',
                pgtxt_title: '',
                pgtxt_createitem: '',
                btntxt_text: '',
                btntxt_number: '',
                btntxt_email: '',
                btntxt_date: '',
                btntxt_delete: '',
                btntxt_savechange:'',
                pgtxt_font: '',
                pgtxt_size: '',
                pgtxt_line: '',
                pgtxt_height: '',
                pgtxt_characters: '',
                pgtxt_smsalramarea: '',
                pgtxt_department: '',
                pgtxt_position: '',
                pgtxt_group: '',
                pgtxt_role:'',
                pgtxt_image: '',
                pgtxt_pleaseselectitem:'',
                pgtxt_updatesucceeded:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cpgtxt_createitem: function () {
                return this.pgtxt_createitem
            },
            cbtntxt_text: function () {
                return this.btntxt_text
            },
            cbtntxt_number: function () {
                return this.btntxt_number
            },
            cbtntxt_email: function () {
                return this.btntxt_email
            },
            cbtntxt_date: function () {
                return this.btntxt_date
            },
            cpgtxt_font: function () {
                return this.pgtxt_font
            },
            cpgtxt_size: function () {
                return this.pgtxt_size
            },
            cpgtxt_line: function () {
                return this.pgtxt_line
            },
            cpgtxt_height: function () {
                return this.pgtxt_height
            },
            cpgtxt_characters: function () {
                return this.pgtxt_characters
            },
            cpgtxt_smsalramarea: function () {
                return this.pgtxt_smsalramarea
            },
            cmususu_system_suser_account: function () {
                return this.mususu_system_suser_account
            },
            cmu_system: function () {
                return this.mu_system
            },
            cmusu_system_bsuser: function () {
                return this.musu_system_bsuser
            },
            cbtntxt_general: function () {
                return this.btntxt_general
            },
            cbtntxt_senior: function () {
                return this.btntxt_senior
            },
            cbtntxt_infomation: function () {
                return this.btntxt_infomation
            },
            cpgtxt_sua_Information: function () {
                return this.pgtxt_sua_Information
            },
            cpgtxt_imgupcondition: function () {
                return this.pgtxt_imgupcondition
            },
            cpgtxt_username: function () {
                return this.pgtxt_username
            },
            cpgtxt_name: function () {
                return this.pgtxt_name
            },
            cpgtxt_style: function () {
                return this.pgtxt_style
            },
            cpgtxt_mail: function () {
                return this.pgtxt_mail
            },
            cpgtxt_background: function () {
                return this.pgtxt_background
            },
            cbtntxt_edit: function () {
                return this.btntxt_edit
            },
            cbtntxt_savechange: function () {
                return this.btntxt_savechange
            },
            cbtntxt_add: function () {
                return this.btntxt_add
            },
            cpgtxt_ProfilePhoto: function () {
                return this.pgtxt_ProfilePhoto
            },
            cpgtxt_ProfileBackground: function () {
                return this.pgtxt_ProfileBackground
            },
            cpgtxt_limitation: function () {
                return this.pgtxt_limitation
            },
            cpgtxt_character: function () {
                return this.pgtxt_character
            },
            cpgtxt_set: function () {
                return this.pgtxt_set
            },
            cpgtxt_title: function () {
                return this.pgtxt_title
            },
            cpgtxt_department: function () {
                return this.pgtxt_department
            },
            cpgtxt_position: function () {
                return this.pgtxt_position
            },
            cpgtxt_group: function () {
                return this.pgtxt_group
            },
            cpgtxt_role: function () {
                return this.pgtxt_role
            },
            cpgtxt_image: function () {
                return this.pgtxt_image
            },
            cpgtxt_pleaseselectitem: function () {
                return this.pgtxt_pleaseselectitem
            },
            cpgtxt_updatesucceeded: function () {
                return this.pgtxt_updatesucceeded
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },

            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
                    if (obj.hasOwnProperty(key)) {
                        obj[key] = value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        beforeMount() {

        },
        created() {
            var $userinfo = nav_module.data.jsonparse(window.Laravel.userinfo);
        },
        mounted() {
            /* fav part*/
            vueOBJ = this;
            $('#' + this.pageid).click(function () {
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            permss = myjs.data.permissionDefinition();

            this.initPage();
        },
        methods: {
            getSiteFaveritelist(list) {
                if (list != null && list != '') {
                    let imgsrc = '/images/icons/star_f.png';
                    $('#' + this.pageid + ' img').attr("src", imgsrc);
                    $('#' + this.pageid).attr("data-status", "on");
                }
            },
            initPage() {
                loadPageText();
                loadingPageData();
                initAccountPage();
                pageEvent();
            },
            SaveBaseItemBtn(){
                if (permss.pwrite == 1) {
                    var formData = new FormData($("#system_user_account_frm")[0]);
                    $.ajax({
                        url: 'admin.setSystemUserAccountBaseData',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if (data.msg == "ok") {
                                alert(txt_updatesucceeded);
                            }
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            AccountSetAddItemBtn(){
                if (permss.pcreate == 1) {
                    is_add = true;
                    is_edit = false;
                    AddModalTabButton();
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            AccountSetEditItemBtn(){
                is_add = false;
                is_edit = true;
                AddModalTabButton();
            },
            ModalSaveItemBtn(){
                var title = $('#modal_table_select_item').val();
                if (title === '') {
                    alert(txt_pleaseselectitem);
                }
                else {
                    if(tabIndex == 1) {
                        if (btnIndex == 1) {
                            $("#ssua_general_photo_size").text($("#modal_item_con").val());
                            $("#base_item1_id").val($("#modal_item_id").val());
                            $("#base_item1_val").val($("#modal_item_con").val());
                        }
                        if (btnIndex == 2) {
                            $("#ssua_general_back_size").text($("#modal_item_con").val());
                            $("#base_item2_id").val($("#modal_item_id").val());
                            $("#base_item2_val").val($("#modal_item_con").val());
                        }
                        if (btnIndex == 3) {
                            $("#ssua_general_username_limit").text($("#modal_item_con").val());
                            $("#base_item3_id").val($("#modal_item_id").val());
                            $("#base_item3_val").val($("#modal_item_con").val());
                        }
                        if (btnIndex == 4) {
                            $("#ssua_general_name_limit").text($("#modal_item_con").val());
                            $("#base_item4_id").val($("#modal_item_id").val());
                            $("#base_item4_val").val($("#modal_item_con").val());
                        }
                    }
/*
                    if(tabIndex == 2) {
                        if (btnIndex == 1) {
                            $("#information_department_limitation").text($("#modal_item_con").val());
                            $("#base_item1_id").val($("#modal_item_id").val());
                            $("#base_item1_val").val($("#modal_item_con").val());
                        }
                        if (btnIndex == 2) {
                            $("#information_position_limitation").text($("#modal_item_con").val());
                            $("#base_item2_id").val($("#modal_item_id").val());
                            $("#base_item2_val").val($("#modal_item_con").val());
                        }
                        if (btnIndex == 3) {
                            $("#information_group_limitation").text($("#modal_item_con").val());
                            $("#base_item3_id").val($("#modal_item_id").val());
                            $("#base_item3_val").val($("#modal_item_con").val());
                        }
                    }
*/
                    if(tabIndex == 3) {
                        if (btnIndex == 1) {
                            $("#senior_department_limitation").text($("#modal_item_con").val());
                            $("#base_item1_id").val($("#modal_item_id").val());
                            $("#base_item1_val").val($("#modal_item_con").val());
                        }
                        if (btnIndex == 2) {
                            $("#senior_position_limitation").text($("#modal_item_con").val());
                            $("#base_item2_id").val($("#modal_item_id").val());
                            $("#base_item2_val").val($("#modal_item_con").val());
                        }
                        if (btnIndex == 3) {
                            $("#senior_group_limitation").text($("#modal_item_con").val());
                            $("#base_item3_id").val($("#modal_item_id").val());
                            $("#base_item3_val").val($("#modal_item_con").val());
                        }
                    }
                    if(is_add)
                    {
                        var add_index = $('#add_index').val();
                        var id = $("#modal_item_id").val();
                        var itemdata = $("#modal_item_con").val();
                        var name = $("#modal_item_name").val();

                        $.ajax({
                            url: 'admin.setSystemUserAccountAddData',
                            type: 'POST',
                            data:{
                                userid:userid,
                                tabIndex:tabIndex,
                                add_index:add_index,
                                id:id,
                                name:name,
                                itemdata:itemdata,
                                settingfield:settingfield
                            },
                            success: function (data) {
                                if(data.msg=="ok"){
                                    if(data.addData != "" && data.addData != null){
                                        showPageAddedData($.parseJSON(data.addData));
                                    }
                                }
                                else
                                    alert(data.msg);

                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            },
                        });
                    }

                    if(is_edit)
                    {
                        var id = $("#modal_item_id").val();
                        var itemdata = $("#modal_item_con").val();
                        var name = $("#modal_item_name").val();
                        $.ajax({
                            url: 'admin.editSystemUserAccountAddData',
                            type: 'POST',
                            data:{
                                userid:userid,
                                tabIndex:tabIndex,
                                editIndex:editIndex,
                                id:id,
                                name:name,
                                itemdata:itemdata,
                                settingfield:settingfield
                            },
                            success: function (data) {
                                if(data.msg=="ok"){
                                    if(data.addData != "" && data.addData != null){
                                        showPageAddedData($.parseJSON(data.addData));
                                    }
                                }
                                else
                                    alert(data.msg);

                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            },
                        });
                    }
                    if(is_add)
                        is_add = false;
                    if(is_edit)
                        is_edit = false;
                    btnIndex = 0;
                    $('#selete_filed_div').html("");
                    $('#EditItemModal').modal('hide');
                }
            }


        }
    }
</script>
