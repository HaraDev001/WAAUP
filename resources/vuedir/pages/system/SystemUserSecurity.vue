<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmususu_system_suser_security}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg width="24" height="24" viewBox="0 0 16 16" class="bi bi-shield-lock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"/>
                           <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
                       </svg>
                        &nbsp;&nbsp; {{cmu_system}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_bsuser}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_system_suser_security}}
                        <a href="#" id="system-suser-security-fav" data-status="off" data-page-info="Account_system-suser-security">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                        </a>
                    </span>
            </div>
        </div>

        <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
            <div class="bsuser_security_tab">
                <div class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="passwordbar">{{cpgtxt_password}}</div>
            </div>
            <div class="bsuser_security_tab">
                <div class="page1_content_side_bar_text" data-target="emailbar">{{cpgtxt_email}}</div>
            </div>
            <div class="bsuser_security_tab">
                <div class="page1_content_side_bar_text" data-target="mobilebar">{{cpgtxt_mobile}}</div>
            </div>
        </div>

        <div class="row">
            <!--password-->
            <div class="col-md-12 page_slider_content_list active" id="passwordbar">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content page2_content_text">
                        <input type="hidden" name="sus_password_head_val" id="sus_password_head_val" value="">
                        <div id="sus-password-lists" class="m-b-15">
                        </div>
                    </div>
                </div>
            </div>

            <!--email-->
            <div class="col-md-12 page_slider_content_list" id="emailbar">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content page2_content_text">
                        <input type="hidden" name="sus_email_headbar_val" id="sus_email_headbar_val" value="">
                        <div id="sus-email-lists" class="m-b-15">
                        </div>

                        <div class="row">
                            <div id="sus-email-add" class="btn btn-outline-light  dash-my-btn-0" @click.stop="ShowAlertEmailModalDLG('')">
                                <span>+ {{cbtntxt_add}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--mobile-->
            <div class="col-md-12 page_slider_content_list" id="mobilebar">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content page2_content_text">
                        <input type="hidden" name="sus_mobile_headbar_val" id="sus_mobile_headbar_val" value="">
                        <div id="sus-mobile-lists" class="m-b-15">
                        </div>

                        <div class="row">
                            <div id="sus-mobile-add" class="btn btn-outline-light  dash-my-btn-0" @click.stop="ShowAlertMobileModalDLG('', '')">
                                <span>+ {{cbtntxt_add}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <div class="card border-0 m-b-10 text-right">
                <div>
                    <div class="btn btn-outline-light dash-my-btn-0 active p-l-r-30" @click.stop="saveContentChange()">
                        <span> {{cbtntxt_savechange}} </span>
                    </div>
                </div>
            </div>
        </div>

        <!--myAlertEmailModal start-->
        <div class="modal fade" id="myAlertEmailModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" style="color: #055ada;font-size: 17px;font-weight:800;padding-top: 10px;padding-left: 10px;">{{cpgtxt_createemail}}</h4>
                        <p id="sus-add-email" style="display: none;padding:5px 10px;border-radius:20px;">{{cpgtxt_createemail}}</p>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="myAlertEmailModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel">
                            <form id="sts-email-frm">
                                <div class="row" style="padding-bottom: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                    </div>
                                    <div style="margin: 10px 10px 0px 10px;">
                                        <div class="row" style="padding: 10px">
                                            <div class="col-md-1">
                                                <div class="form-group">
                                                    <label id="stua-email-title" style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_name}}</label>
                                                </div>
                                            </div>
                                            <div class="col-md-11" style="padding-left: 62px;">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" style="width: 300px;"  placeholder="" aria-label="sus-email-txt" id="sus-email-txt" name="sus-email-txt" aria-describedby="basic-addon2">
                                                    <label id="sus-email-txt-tmp" style="display: none"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <div id="sus-email-add-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addEmailItem()">
                                            <span> + {{cbtntxt_add}} </span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--myAlertEmailModal end-->

        <!--myAlertMobileModal start-->
        <div class="modal fade" id="myAlertMobileModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" style="color: #055ada;font-size: 17px;font-weight:800;padding-top: 10px;padding-left: 10px;">{{cpgtxt_createmobile}}</h4>
                        <p id="sus-add-mobile" style="display: none;padding:5px 10px;border-radius:20px;">{{cpgtxt_createmobile}}</p>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="myAlertMobileModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel">
                            <form id="sts-mobile-frm">
                                <div class="row" style="padding-bottom: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                    </div>
                                    <div style="margin: 10px 10px 0px 10px;">
                                        <div class="row" style="padding: 10px;">
                                            <div class="col-md-12">
                                                <div style="height: 200px; overflow-y: auto; overflow-x: hidden;">
                                                    <div class="">
                                                        <table class="table table-hover" style="text-align: center;">
                                                            <thead style="width: 100%">
                                                            <tr>
                                                                <th class="border-bottom-0">Name</th>
                                                                <th class="border-bottom-0">Country</th>
                                                                <th class="border-bottom-0">Characters</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody id="sus-mobile-list">

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-1 mt-3">
                                                <div class="form-group">
                                                    <label style="margin-top: 8px; color: #666; width: 100px;">Title</label>
                                                </div>
                                            </div>
                                            <div class="col-md-11" style="padding-left: 22px;">
                                                <div class="input-group" style="padding: 15px;">
                                                    <input type="text" class="form-control" style="background-color: #fff; border: 1px solid #ced4da; width: 300px;" placeholder="" aria-label="sus-mobile-title" id="sus-mobile-title" aria-describedby="basic-addon2" readonly>
                                                </div>
                                            </div>
                                            <input type="hidden" class="form-control" id="sus-mobile-data">

                                            <div class="col-md-12 text-center">
                                                <div id="sus-mobile-add-item" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addSystemSecurityMobileItem()">
                                                    <span>Add</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--                                            <div class="row" style="padding: 10px">-->
                                        <!--                                                <div class="col-md-1">-->
                                        <!--                                                    <div class="form-group">-->
                                        <!--                                                        <label id="stua-mobile-title" style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_name}}</label>-->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                                <div class="col-md-11" style="padding-left: 62px;">-->
                                        <!--                                                    <div class="input-group mb-3">-->
                                        <!--                                                        <input type="text" class="form-control" style="width: 300px;"  placeholder="" aria-label="sus-mobile-txt" id="sus-mobile-txt" name="sus-mobile-txt" aria-describedby="basic-addon2">-->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                                <label id="sus-mobile-txt-tmp" style="display: none"></label>-->
                                        <!--                                            </div>-->
                                        <!--                                            <div class="row" style="padding: 10px">-->
                                        <!--                                                <div class="col-md-1">-->
                                        <!--                                                    <div class="form-group">-->
                                        <!--                                                        <label id="stua-mobile-character-title" style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_characters}}</label>-->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                                <div class="col-md-11" style="padding-left: 62px;">-->
                                        <!--                                                    <div class="input-group mb-3">-->
                                        <!--                                                        <input type="tel" class="form-control" placeholder="" aria-label="sus-mobile-character-txt" id="sus-mobile-character-txt" name="sus-mobile-character-txt" aria-describedby="basic-addon2">-->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                                <input type="hidden" id="sus-mobile-countrycode" name="sus-mobile-countrycode" value="">-->
                                        <!--                                            </div>-->
                                    </div>
                                </div>
                                <!--                                    <div class="row">-->
                                <!--                                        <div class="col-md-12 text-center">-->
                                <!--                                            <div id="sus-mobile-add-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addMobileItem()">-->
                                <!--                                                <span> + {{cbtntxt_add}} </span>-->
                                <!--                                            </div>-->
                                <!--                                        </div>-->
                                <!--                                    </div>-->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--myAlertMobileModal end-->

        <!--myAlertPasswordModal start-->
        <div class="modal fade" id="myAlertPasswordModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 650px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" style="color: #055ada;font-size: 17px;font-weight:800;padding-top: 10px;padding-left: 10px;">Create Password</h4>
                        <p id="sus-password-modal" style="display: none;padding:5px 10px;border-radius:20px;">Create Password</p>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="myAlertPasswordModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel">
                            <form id="sts-password-frm">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                    </div>
                                </div>

                                <div class="row" style="display: none">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label id="stua-password-title" style="margin-top: 8px; color:#666;">Title Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-9" >
                                        <div class="row">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" aria-label="sus-pasword-txt" id="sus-password-txt" name="sus-password-txt" aria-describedby="basic-addon2">
                                            </div>
                                        </div>
                                    </div>
                                    <label id="sus-password-txt-tmp" style="display: none"></label>
                                </div>

                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label id="stua-password-format1-title" style="margin-top: 8px; color:#666;">{{cpgtxt_format}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="row">
                                            <div class="input-group mb-3">
                                                <select id="sus-password-format1-select" class="form-control">
                                                    <option value="0">Greater Than</option>
                                                    <option value="1">Equal To</option>
                                                    <option value="2" selected="selected">Less Than</option>
                                                    <option value="3">No Greater Than</option>
                                                    <option value="4">Not Less Than</option>
                                                </select>
                                            </div>
                                            <div class="input-group ">
                                                <select id="sus-password-format2-select" class="form-control">
                                                    <option value="0">Greater Than</option>
                                                    <option value="1">Equal To</option>
                                                    <option value="2">Less Than</option>
                                                    <option value="3" selected="selected">No Greater Than</option>
                                                    <option value="4">Not Less Than</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="input-group mb-3">
                                            <input type="number" class="form-control" style="width: 80px;"  placeholder="" aria-label="sus-password-format1-txt" id="sus-password-format1-txt" name="sus-password-format1-txt" aria-describedby="basic-addon2" value="8">
                                        </div>
                                        <div class="input-group ">
                                            <input type="number" class="form-control" style="width: 80px;"  placeholder="" aria-label="sus-password-format2-txt" id="sus-password-format2-txt" name="sus-password-format2-txt" aria-describedby="basic-addon2" value="12">
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-2">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label id="stua-password-style1-title" style="margin-top: 8px; color:#666;">{{cpgtxt_style}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="row">
                                            <div class="input-group mb-3">
                                                <div class="form-check" style="line-height: 24px;">
                                                    <div class="form-check-input rect-group" id="sus-password-letter">
                                                        <div></div>
                                                    </div>
                                                    <label class="form-check-label m-l-10">{{cpgtxt_alphabet}}</label>
                                                </div>
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="form-check" style="line-height: 24px;">
                                                    <div class="form-check-input rect-group" id="sus-password-digital">
                                                        <div></div>
                                                    </div>
                                                    <label class="form-check-label m-l-10">{{cpgtxt_number}}</label>
                                                </div>
                                            </div>
                                            <div class="input-group ">
                                                <div class="form-check" style="line-height: 24px;">
                                                    <div class="form-check-input rect-group" id="sus-password-special">
                                                        <div></div>
                                                    </div>
                                                    <label class="form-check-label m-l-10">{{cpgtxt_special}} {{cpgtxt_characters}}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="input-group ">
                                                <div class="form-check" style="line-height: 24px;">
                                                    <div class="form-check-input rect-group" id="sus-password-letter-option">
                                                        <div></div>
                                                    </div>
                                                    <label class="form-check-label">{{cpgtxt_upper_lower}}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label id="stua-password-color-title" style="margin-top: 8px; color:#666;">{{cpgtxt_colour}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-2 ">
                                        <div class="row">
                                            <div class="input-group mt-2">
                                                <div id="sus-password-color" class="m-r-15" data-color="#a2de9f" style="cursor: pointer; background: #a2de9f; width: 70px; height: 20px"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-2 ">
                                        <div class="row">
                                            <div class="input-group mt-2">
                                                <div id="sus-password-color_value">#a2de9f</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label id="stua-password-warning-title" style="margin-top: 8px; color:#666;">{{cpgtxt_warning}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="input-group ">
                                                <input type="text" class="form-control" placeholder="" aria-label="sus-password-warning-txt" id="sus-password-warning-txt" name="sus-password-warning-txt" aria-describedby="basic-addon2" value="Please Enter A Password Of 8-12 Characters">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label id="stua-password-warning-color-title" style="margin-top: 8px; color:#666;">{{cpgtxt_warning}} {{cpgtxt_colour}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-2 ">
                                        <div class="row">
                                            <div class="input-group mt-2">
                                                <div id="sus-password-warning-color" class="m-r-15" data-color="#e82b5c" style="cursor: pointer; background: #e82b5c; width: 70px; height: 20px;"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 ">
                                        <div class="row">
                                            <div class="input-group mt-2">
                                                <div id="sus-password-warning-color_value">#e82b5c</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <div id="sus-password-add-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addPasswordItem()">
                                            <span> + {{cbtntxt_add}} </span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--myAlertPasswordModal end-->
    </div>
</template>
<style>
    @import "../../assets/css/flag.min.css";

    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .page1_content_side_bar .page1_content_side_bar_text{
        cursor: pointer;
        float: left;
    }
    .bsuser_security_tab{
        width: 150px;
    }
    .form-check-input.rect-group{
        width: 16px;height: 16px; border: 1px solid #bbbbbb;
        cursor: pointer;
    }
    .form-check-input.rect-group > div{
        width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;
    }
    .form-check-input.rect-group.active > div{
        width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;
    }
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
    .form-check-inline a {
        margin-left: 20px; text-decoration: underline; color: #a7a7ed;
    }
</style>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import axios from "axios";
    import nav_module from "../../assets/jsfunc/nav_module";

    var vueOBJ=null;
    var tabstatus = 0;
    var permss;

    function ShowAlertEmailModalDlg() {
        $('#myAlertEmailModal').modal('show');
    }

    function ShowAlertMobileModalDlg() {
        // var input = document.querySelector('#sus-mobile-character-txt');
        // var iti = window.intlTelInputGlobals.getInstance(input);
        // var countrycode = $("#sus-mobile-countrycode").val();
        // iti.setCountry(countrycode);

        $('#myAlertMobileModal').modal('show');
    }

    function ShowAlertPasswordModalDlg() {
        $('#myAlertPasswordModal').modal('show');
    }

    function phonecountry() {
        var input = document.querySelector('#sus-mobile-character-txt');
        window.intlTelInput(input, {
            preferredCountries: ['cn'],
            separateDialCode: true,
        });
        $("#sus-mobile-countrycode").val("cn");

        input.addEventListener("countrychange", function () {
            var input = document.querySelector('#sus-mobile-character-txt');
            var iti = window.intlTelInputGlobals.getInstance(input);
            var countryData = iti.getSelectedCountryData();

            $("#sus-mobile-countrycode").val(countryData["iso2"]);
        });
    }

    export default {
        data(){
            return {
                pageid:'system-suser-security-fav',
                mususu_system_suser_security:'',
                mu_system:'',
                musu_system_bsuser:'',
                pgtxt_password:'',
                pgtxt_email: '',
                pgtxt_mobile: '',
                btntxt_add: '',
                btntxt_edit: '',
                btntxt_change: '',
                btntxt_save: '',
                btntxt_savechange:'',
                pgtxt_name: '',
                pgtxt_characters: '',
                pgtxt_format: '',
                pgtxt_style: '',
                pgtxt_colour: '',
                pgtxt_warning: '',
                pgtxt_alphabet: '',
                pgtxt_number: '',
                pgtxt_special: '',
                pgtxt_upper_lower: '',
                pgtxt_createemail: '',
                pgtxt_editemail: '',
                pgtxt_createmobile: '',
                pgtxt_editmobile: '',
                pgtxt_editpassword: '',
                pgtxt_font: '',
                pgtxt_size: '',
                pgtxt_pixels: '',
                pgtxt_line: '',
                pgtxt_height: '',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        computed: {
            // 계산된 getter
            cmususu_system_suser_security: function () {
                return this.mususu_system_suser_security
            },
            cmu_system: function() {
                return this.mu_system
            },
            cmusu_system_bsuser: function() {
                return this.musu_system_bsuser
            },
            cpgtxt_password: function() {
                return this.pgtxt_password
            },
            cpgtxt_email: function() {
                return this.pgtxt_email
            },
            cpgtxt_mobile: function() {
                return this.pgtxt_mobile
            },
            cbtntxt_add: function() {
                return this.btntxt_add
            },
            cbtntxt_edit: function() {
                return this.btntxt_edit
            },
            cbtntxt_change: function() {
                return this.btntxt_change
            },
            cbtntxt_save: function() {
                return this.btntxt_save
            },
            cbtntxt_savechange: function() {
                return this.btntxt_savechange
            },
            cpgtxt_name: function() {
                return this.pgtxt_name
            },
            cpgtxt_characters: function() {
                return this.pgtxt_characters
            },
            cpgtxt_format: function() {
                return this.pgtxt_format
            },
            cpgtxt_style: function() {
                return this.pgtxt_style
            },
            cpgtxt_colour: function() {
                return this.pgtxt_colour
            },
            cpgtxt_warning: function() {
                return this.pgtxt_warning
            },
            cpgtxt_alphabet: function() {
                return this.pgtxt_alphabet
            },
            cpgtxt_number: function() {
                return this.pgtxt_number
            },
            cpgtxt_special: function() {
                return this.pgtxt_special
            },
            cpgtxt_upper_lower: function() {
                return this.pgtxt_upper_lower
            },
            cpgtxt_createemail: function() {
                return this.pgtxt_createemail
            },
            cpgtxt_editemail: function() {
                return this.pgtxt_editemail
            },
            cpgtxt_createmobile: function() {
                return this.pgtxt_createmobile
            },
            cpgtxt_editmobile: function() {
                return this.pgtxt_editmobile
            },
            cpgtxt_editpassword: function() {
                return this.pgtxt_editpassword
            },
            cpgtxt_font: function() {
                return this.pgtxt_font
            },
            cpgtxt_size: function() {
                return this.pgtxt_size
            },
            cpgtxt_pixels: function() {
                return this.pgtxt_pixels
            },
            cpgtxt_line: function() {
                return this.pgtxt_line
            },
            cpgtxt_height: function() {
                return this.pgtxt_height
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

            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key] = value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
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
            this.initpage();
            // phonecountry();
        },
        methods: {
            getSiteFaveritelist(list) {
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src", imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
            },
            initpage() {
                this.sliderTabs();

                this.getPasswordItemList("strong");
                //this.getPasswordItemList("medium");
                //this.getPasswordItemList("low");

                $("#sus-password-letter, #sus-password-digital, #sus-password-special, #sus-password-letter-option").click(function () {
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else {
                        $(this).addClass('active');
                    }
                })

                const sus_password_color = document.getElementById('sus-password-color');
                let pickerColor = new ColorPicker(sus_password_color, '#a2de9f');
                sus_password_color.addEventListener('colorChange', function (event) {
                    const color = event.detail.color.hexa;

                    $('#sus-password-color_value').text(color);
                })

                const sus_password_warning_color = document.getElementById('sus-password-warning-color');
                let pickerWarningColor = new ColorPicker(sus_password_warning_color, '#e82b5c');
                sus_password_warning_color.addEventListener('colorChange', function (event) {
                    const color = event.detail.color.hexa;

                    $('#sus-password-warning-color_value').text(color);
                })
            },
            sliderTabs() {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_slider_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    if (subid == 'passwordbar')
                    {
                        tabstatus = 0;
                        vueOBJ.getPasswordItemList("strong");
                        //vueOBJ.getPasswordItemList("medium");
                        //vueOBJ.getPasswordItemList("low");
                    }
                    else if (subid == 'emailbar')
                    {
                        tabstatus = 1;
                        vueOBJ.getEmailItemList();
                    }
                    else if (subid == 'mobilebar')
                    {
                        tabstatus = 2;
                        vueOBJ.getSystemSecurityMobileList();
                    }
                });
            },
            ShowAlertEmailModalDLG(emailname) {
                if(emailname == ''){
                    if (permss.pcreate == 0) {
                        myjs.data.showAlert('pgtxt_notpermission');
                        return;
                    }
                }
                else{
                    if (permss.pwrite == 0) {
                        myjs.data.showAlert('pgtxt_notpermission');
                        return;
                    }
                }

                if (emailname === '') {
                    $('#myAlertEmailModal .modal-title').text(this.cpgtxt_createemail);
                    $('#myAlertEmailModal #sus-email-txt').val('');
                    $('#myAlertEmailModal #sus-email-txt-tmp').val('');
                } else {
                    $('#myAlertEmailModal .modal-title').text(this.cpgtxt_editemail);
                    $('#myAlertEmailModal #sus-email-txt').val(emailname);
                    $('#myAlertEmailModal #sus-email-txt-tmp').val(emailname);
                }

                ShowAlertEmailModalDlg();
            },
            ShowAlertMobileModalDLG(mobilename, mobilecharacter, countrycode) {
                if (permss.pcreate == 1) {
                    $("#sus-mobile-title").val("");
                    $("#sus-mobile-data").val("");

                    ShowAlertMobileModalDlg();

                    this.getSystemSettingMobileList();
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            ShowAlertPasswordModalDLG(modaltype,
                                      name = "",
                                      format1_opt = "",
                                      format1_val = "",
                                      format2_opt = "",
                                      format2_val = "",
                                      style_letter = "",
                                      style_digital = "",
                                      style_special = "",
                                      style_upper_lower = "",
                                      colour_val = "",
                                      warning_text = "",
                                      warning_colour_val = "")
            {
                $('#myAlertPasswordModal #sus-password-modal').text(modaltype);

                if (name === "") {
                    $('#myAlertPasswordModal .modal-title').text('Create Password');
                    $('#myAlertPasswordModal #sus-password-txt').val('');
                    $('#myAlertMobileModal #sus-password-txt-tmp').val('');
                    $('#myAlertPasswordModal #sus-password-format1-select').val('0');
                    $('#myAlertPasswordModal #sus-password-format1-txt').val('8');
                    $('#myAlertPasswordModal #sus-password-format2-select').val('3');
                    $('#myAlertPasswordModal #sus-password-format2-txt').val('12');

                    if ($('#sus-password-letter').hasClass('active'))
                        $('#myAlertPasswordModal #sus-password-letter').removeClass('active');

                    if ($('#sus-password-digital').hasClass('active'))
                        $('#myAlertPasswordModal #sus-password-digital').removeClass('active');

                    if ($('#sus-password-special').hasClass('active'))
                        $('#myAlertPasswordModal #sus-password-special').removeClass('active');

                    if ($('#sus-password-letter-option').hasClass('active'))
                        $('#myAlertPasswordModal #sus-password-letter-option').removeClass('active');

                    $('#myAlertPasswordModal #sus-password-color').css('background-color', '#a2de9f');
                    $('#myAlertPasswordModal #sus-password-color_value').text('#a2de9f');
                    $('#myAlertPasswordModal #sus-password-warning-txt').val('Please Enter A Password Of 8-12 Characters');
                    $('#myAlertPasswordModal #sus-password-warning-color').css('background-color', '#e82b5c');
                    $('#myAlertPasswordModal #sus-password-warning-color_value').text('#e82b5c');
                } else {
                    $('#myAlertPasswordModal .modal-title').text(this.cpgtxt_editpassword);
                    $('#myAlertPasswordModal #sus-password-txt').val(name);
                    $('#myAlertMobileModal #sus-password-txt-tmp').val(name);
                    $('#myAlertPasswordModal #sus-password-format1-select').val(format1_opt);
                    $('#myAlertPasswordModal #sus-password-format1-txt').val(format1_val);
                    $('#myAlertPasswordModal #sus-password-format2-select').val(format2_opt);
                    $('#myAlertPasswordModal #sus-password-format2-txt').val(format2_val);

                    if (style_letter === "1")
                        $('#myAlertPasswordModal #sus-password-letter').addClass('active');
                    if (style_digital === "1")
                        $('#myAlertPasswordModal #sus-password-digital').addClass('active');
                    if (style_special === "1")
                        $('#myAlertPasswordModal #sus-password-special').addClass('active');
                    if (style_upper_lower === "1")
                        $('#myAlertPasswordModal #sus-password-letter-option').addClass('active');

                    $('#myAlertPasswordModal #sus-password-color').css('background-color', colour_val);
                    $('#myAlertPasswordModal #sus-password-color_value').val(colour_val);
                    $('#myAlertPasswordModal #sus-password-warning-txt').val(warning_text);
                    $('#myAlertPasswordModal #sus-password-warning-color').css('background-color', warning_colour_val);
                    $('#myAlertPasswordModal #sus-password-warning-color_value').val(warning_colour_val);
                }

                ShowAlertPasswordModalDlg();
            },
            /*email*/
            getEmailItemList() {
                let postData = {

                };

                axios.post('admin.getSUSEmailItem', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg == "ok") {
                            let lists = response.data.list;

                            var tags = '';
                            var email_header_val = "";

                            var pgtxt_sua_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_sua_edit');
                            var pgtxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_delete');

                            Object.keys(lists).forEach(function (element) {
                                tags += "<div class='row'>";
                                tags += "<div class='form-check' style='margin: 10px; line-height: 24px;'>";

                                if (lists[element].check === "0")
                                    tags += "<div class='form-check-input rect-group' data-num='sus-email_' id='" + lists[element].name + "'>";
                                else {
                                    tags += "<div class='form-check-input rect-group active' data-num='sus-email_' id='" + lists[element].name + "'>";

                                    if (email_header_val == "")
                                        email_header_val = lists[element].name;
                                    else
                                        email_header_val += ":" + lists[element].name;
                                }

                                tags += "<div></div>";
                                tags += "</div>";
                                tags += "<label class='form-check-label'>" + lists[element].name + "</label>";
                                tags += "<div id='sus-email-edit_' class='form-check-inline m-l-30' data-name='" + lists[element].name + "'><a class='data-ajax' data-ajax='pgtxt_sua_edit' href='#'>" + pgtxt_sua_edit + "</a></div>";
                                tags += "<div id='sus-email-del_' class='form-check-inline' data-name='" + lists[element].name + "'><a class='data-ajax' data-ajax='pgtxt_delete' href='#'>" + pgtxt_delete + "</a></div>";
                                tags += "</div></div>";
                            });

                            $('#sus-email-lists').html(tags);

                            if (tags != '')
                                $("#sus-email-lists").show();
                            else
                                $("#sus-email-lists").hide();

                            $("div[id^='sus-email-edit_']").click(function () {
                                var name = $(this).attr("data-name");
                                vueOBJ.ShowAlertEmailModalDLG(name);
                            });

                            $("div[id^='sus-email-del_']").click(function () {
                                if (permss.pdelete == 1) {
                                    var name = $(this).attr("data-name");
                                    vueOBJ.deleteEmailItem(name);
                                }
                                else
                                    myjs.data.showAlert('pgtxt_notpermission');
                            });

                            $('#sus_email_headbar_val').val(email_header_val);

                            $("div[data-num^='sus-email_']").click(function () {
                                if ($(this).hasClass('active'))
                                {
                                    var thisid = $(this).attr('id');
                                    var sval = $('#sus_email_headbar_val').val();

                                    if (sval !== '')
                                    {
                                        var sval_list = sval.split(':');
                                        var tmp_list = '';

                                        if (sval_list.length > 0)
                                        {
                                            for (var i = 0; i < sval_list.length; i ++)
                                            {
                                                var item = sval_list[i];
                                                if (item !== thisid)
                                                {
                                                    if (tmp_list === '') {
                                                        tmp_list = item;
                                                    } else {
                                                        tmp_list += ':'+item;
                                                    }
                                                }
                                            }
                                            $('#sus_email_headbar_val').val(tmp_list);
                                        }
                                    } else {
                                        if (sval === thisid)
                                            $('#sus_email_headbar_val').val('');
                                    }
                                    $(this).removeClass('active');
                                } else {
                                    var thisid = $(this).attr('id');
                                    var sval = $('#sus_email_headbar_val').val();
                                    if (sval == '')
                                        sval = thisid;
                                    else {
                                        sval += ':'+thisid;
                                    }
                                    $('#sus_email_headbar_val').val(sval);
                                    $(this).addClass('active');
                                }
                            });
                        } else {
                            console.log(response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            addEmailItem() {
                var email_name = $.trim($('#sus-email-txt').val());
                var email_org = $.trim($('#sus-email-txt-tmp').val());

                if (email_name === '') {
                    alert("you must empty this fields.");
                } else {
                    let postData = {
                        org_name: email_org,
                        name: email_name,
                        check: "0"
                    };

                    axios.post('admin.insertSUSEmailItem', postData)
                        .then((response) => {
                            let msg = response.data.msg;

                            if (msg === "ok") {
                                $('#myAlertEmailModal').modal('hide');
                                this.getEmailItemList();
                            } else {
                                console.log(response.data.message);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                }
            },
            deleteEmailItem(email_name) {
                let postData = {
                    name: email_name
                };

                axios.post('admin.deleteSUSEmailItem', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg === "ok") {
                            this.getEmailItemList();
                        } else {
                            console.log(response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            /*password*/
            getPasswordItemList(password_type) {
                let postData = {

                };

                axios.post('admin.getSUSPasswordItem', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg === "ok") {
                            let lists = response.data.list;

                            var tags = "";
                            var password_head_val = "";

                            var btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
                            var pgtxt_strong = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_strong');
                            var pgtxt_medium = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_medium');
                            var pgtxt_weak = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_weak');

                            Object.keys(lists).forEach(function (element) {
                                tags += "<div class='row'>";
                                tags += "<div class='form-check' style='margin: 10px; line-height: 24px;'>";

                                if (lists[element].check === "0") {
                                    tags += "<div class='form-check-input rect-group' data-num='sus_password_' id='" + lists[element].name + "'>";
                                } else {
                                    tags += "<div class='form-check-input rect-group active' data-num='sus_password_' id='" + lists[element].name + "'>";

                                    if (password_head_val === "")
                                        password_head_val = lists[element].name;
                                    else
                                        password_head_val += ":" + lists[element].name;
                                }

                                tags += "<div></div>";
                                tags += "</div>";
                                if (lists[element].name === "Strong")
                                    tags += "<label class='form-check-label ml-2 data-ajax' data-ajax='pgtxt_strong'>" + pgtxt_strong + "</label>";
                                else if (lists[element].name === "Medium")
                                    tags += "<label class='form-check-label ml-2 data-ajax' data-ajax='pgtxt_medium'>" + pgtxt_medium + "</label>";
                                else if (lists[element].name === "Weak")
                                    tags += "<label class='form-check-label ml-2 data-ajax' data-ajax='pgtxt_weak'>" + pgtxt_weak + "</label>";
                                else
                                    tags += "<label class='form-check-label ml-2'>" + lists[element].name + "</label>";

                                tags += "</div>";
                                tags += "<div id='sus_password_edit_' class='btn btn-outline-light dash-my-btn-0 ml-auto m-t-b-5' " +
                                    "data-name='" + lists[element].name + "'" +
                                    "data-format1_opt='" + lists[element].format1_opt + "'" +
                                    "data-format1_val='" + lists[element].format1_val + "'" +
                                    "data-format2_opt='" + lists[element].format2_opt + "'" +
                                    "data-format2_val='" + lists[element].format2_val + "'" +
                                    "data-style_letter='" + lists[element].style_letter + "'" +
                                    "data-style_digital='" + lists[element].style_digital + "'" +
                                    "data-style_special='" + lists[element].style_special + "'" +
                                    "data-style_upper_lower='" + lists[element].style_upper_lower + "'" +
                                    "data-colour_val='" + lists[element].colour_val + "'" +
                                    "data-warning_text='" + lists[element].warning_text + "'" +
                                    "data-warning_colour_val='" + lists[element].warning_colour_val + "'" +
                                    ">";
                                tags += "<span class='data-ajax' data-ajax='btntxt_edit'>" + btntxt_edit + "</span>";
                                tags += "</div>";
                                tags += "</div>";
                            });

                            $("#sus-password-lists").html(tags);

                            if (tags !== "")
                                $('#sus-password-lists').show();
                            else
                                $('#sus-password-lists').hide();

                            $("div[id^='sus_password_edit_']").click(function () {
                                if (permss.pwrite == 1) {
                                    var name = $(this).attr("data-name");
                                    var format1_opt = $(this).attr("data-format1_opt");
                                    var format1_val = $(this).attr("data-format1_val");
                                    var format2_opt = $(this).attr("data-format2_opt");
                                    var format2_val = $(this).attr("data-format2_val");
                                    var style_letter = $(this).attr("data-style_letter");
                                    var style_digital = $(this).attr("data-style_digital");
                                    var style_special = $(this).attr("data-style_special");
                                    var style_upper_lower = $(this).attr("data-style_upper_lower");
                                    var colour_val = $(this).attr("data-colour_val");
                                    var warning_text = $(this).attr("data-warning_text");
                                    var warning_colour_val = $(this).attr("data-warning_colour_val");

                                    vueOBJ.ShowAlertPasswordModalDLG("password", name, format1_opt, format1_val, format2_opt, format2_val, style_letter, style_digital, style_special, style_upper_lower, colour_val, warning_text, warning_colour_val);
                                }
                                else
                                    myjs.data.showAlert('pgtxt_notpermission');
                            });

                            $("#sus_password_head_val").val(password_head_val);

                            $("div[data-num^='sus_password_']").click(function () {
                                if ($(this).hasClass('active'))
                                {
                                    var thisid = $(this).attr('id');
                                    var sval = $('#sus_password_head_val').val();

                                    if (sval !== '')
                                    {
                                        var sval_list = sval.split(':');
                                        var tmp_list = '';

                                        if (sval_list.length > 0)
                                        {
                                            for (var i = 0; i < sval_list.length; i ++)
                                            {
                                                var item = sval_list[i];
                                                if (item !== thisid)
                                                {
                                                    if (tmp_list === '') {
                                                        tmp_list = item;
                                                    } else {
                                                        tmp_list += ':'+item;
                                                    }
                                                }
                                            }
                                            $('#sus_password_head_val').val(tmp_list);
                                        }
                                    } else {
                                        if (sval === thisid)
                                            $('#sus_password_head_val').val('');
                                    }
                                    $(this).removeClass('active');
                                } else {
                                    var thisid = $(this).attr('id');
                                    var sval = $('#sus_password_head_val').val();

                                    if (sval == "")
                                        sval = thisid;
                                    else
                                        sval += ":" + thisid;

                                    $("#sus_password_head_val").val(sval);
                                    $(this).addClass('active');
                                }
                            });
                        } else {
                            console.log(response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            addPasswordItem() {
                let password_type = $.trim($('#sus-password-modal').text());
                let name = $.trim($('#sus-password-txt').val());
                let org_name = $.trim($('#sus-password-txt-tmp').val());
                let format1_option = $.trim($('#sus-password-format1-select').val());
                let format1_val = $.trim($('#sus-password-format1-txt').val());
                let format2_option = $.trim($('#sus-password-format2-select').val());
                let format2_val = $.trim($('#sus-password-format2-txt').val());

                var style_letter = "0";
                if ($('#sus-password-letter').hasClass('active'))
                    style_letter = "1";

                var style_digital = "0";
                if ($('#sus-password-digital').hasClass('active'))
                    style_digital = "1";

                var style_special = "0";
                if ($('#sus-password-special').hasClass('active'))
                    style_special = "1";

                var style_upper_lower = "0";
                if ($('#sus-password-letter-option').hasClass('active'))
                    style_upper_lower = "1";

                let colour_val = $.trim($('#sus-password-color_value').text());
                let warning_text = $.trim($('#sus-password-warning-txt').val());
                let warning_colour_val = $.trim($('#sus-password-warning-color_value').text());

                if (name === '' || format1_val === '' || format2_val === '' || warning_text === '')
                {
                    alert("you must empty this fields.");
                } else {
                    let postData = {
                        password_type: password_type,
                        name: name,
                        org_name: org_name,
                        format1_opt: format1_option,
                        format1_val: format1_val,
                        format2_opt: format2_option,
                        format2_val: format2_val,
                        style_letter: style_letter,
                        style_digital: style_digital,
                        style_special: style_special,
                        style_upper_lower: style_upper_lower,
                        colour_val: colour_val,
                        warning_text: warning_text,
                        warning_colour_val: warning_colour_val,
                        check: "0"
                    };

                    axios.post('admin.insertSUSPasswordItem', postData)
                        .then((response) => {
                            let msg = response.data.msg;

                            if (msg === "ok") {
                                $('#myAlertPasswordModal').modal('hide');
                                this.getPasswordItemList(password_type);
                            } else {
                                console.log(response.data.message);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                }
            },
            deletePasswordItem(password_type, name) {
                let postData = {
                    password_type: password_type,
                    name: name
                };

                axios.post('admin.deleteSUSPasswordItem', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg === "ok") {
                            this.getPasswordItemList(password_type);
                        } else {
                            console.log(response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            /*mobile*/
            getSystemSettingMobileList() {
                let postData = {
                    start: 1,
                    cnt: -1,
                    filter: 0,
                };
                axios.post('admin.getSystemSettingMobileItem', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg == "ok") {
                            var lists = response.data.list;
                            var tags = "";

                            for (var i = 0; i < lists.length; i ++) {
                                var list = lists[i];

                                var id = list.id;
                                var name = list.name;
                                var countryname = list.countryname;
                                var countryiso = list.countrycode;
                                var characters = list.characters;
                                var dialcode = list.dialcode;

                                tags += "<tr class='sus-mobile-list-item' data-name='"+name+"' data-countryname='"+countryname+"' data-countryiso='"+countryiso+"' data-characters='"+characters+"' data-dialcode='" + dialcode + "'>";
                                tags += "<td class='border-0' style='border-radius: 50px 0 0 50px'>" + name + "</td>";
                                tags += "<td class='border-0'><i class='" + countryiso + "  flag" + "'></i></td>";

                                tags += "<td class='border-0' style='border-radius: 0 50px 50px 0'>" + characters + "</td>";
                                tags += "</tr>";
                            }

                            $(document).on("click", ".sus-mobile-list-item", function () {
                                var name = $(this).attr("data-name");
                                var countryname = $(this).attr("data-countryname");
                                var countryiso = $(this).attr("data-countryiso");
                                var characters = $(this).attr("data-characters");
                                var dialcode = $(this).attr("data-dialcode");

                                var alldate = name+"-"+countryname+"-"+countryiso+"-"+characters+"-"+dialcode;
                                $("#sus-mobile-title").val(name);
                                $("#sus-mobile-data").val(alldate);
                            })

                            $("#sus-mobile-list").html(tags);
                        } else {
                            console.log(response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getSystemSecurityMobileList() {
                let postData = {

                };

                axios.post('admin.getSystemSecurityMobileItem', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg == "ok") {
                            let lists = response.data.list;

                            var tags = '';
                            var mobile_header_val = "";

                            var pgtxt_sua_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_sua_edit');
                            var pgtxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_delete');

                            Object.keys(lists).forEach(function (element) {
                                tags += "<div class='row'>";
                                tags += "<div class='form-check' style='margin: 10px; line-height: 24px;'>";

                                if (lists[element].check === "0")
                                    tags += "<div class='form-check-input rect-group' data-num='sus-mobile_' id='" + lists[element].name + "'>";
                                else {
                                    tags += "<div class='form-check-input rect-group active' data-num='sus-mobile_' id='" + lists[element].name + "'>";

                                    if (mobile_header_val == "")
                                        mobile_header_val = lists[element].name;
                                    else
                                        mobile_header_val += ":" + lists[element].name;
                                }

                                tags += "<div></div>";
                                tags += "</div>";
                                tags += "<label class='form-check-label'>" + lists[element].name + "</label>";
                                tags += "<div id='sus-mobile-edit_' style='display: none' class='form-check-inline m-l-30' data-name='" + lists[element].name + "' data-characters='" + lists[element].characters + "' data-countrycode='" + lists[element].countrycode +"'>";
                                tags +=     "<a class='data-ajax' data-ajax='pgtxt_sua_edit' href='#'>" + pgtxt_sua_edit + "</a>";
                                tags += "</div>";
                                tags += "<div id='sus-mobile-del_' class='form-check-inline' data-name='" + lists[element].name + "'>";
                                tags +=     "<a class='data-ajax' data-ajax='pgtxt_delete' href='#'>" + pgtxt_delete + "</a>";
                                tags += "</div>";
                                tags += "</div></div>";
                            });

                            $('#sus-mobile-lists').html(tags);

                            if (tags != '')
                                $("#sus-mobile-lists").show();
                            else
                                $("#sus-mobile-lists").hide();

                            $("div[id^='sus-mobile-edit_']").click(function () {
                                var name = $(this).attr("data-name");
                                var characters = $(this).attr("data-characters");
                                var countrycode = $(this).attr("data-countrycode");
                                vueOBJ.ShowAlertMobileModalDLG(name, characters, countrycode);
                            });

                            $("div[id^='sus-mobile-del_']").click(function () {
                                if (permss.pdelete == 1) {
                                    var name = $(this).attr("data-name");
                                    vueOBJ.deleteSystemSecurityMobileItem(name);
                                }
                                else
                                    myjs.data.showAlert('pgtxt_notpermission');
                            });

                            $('#sus_mobile_headbar_val').val(mobile_header_val);

                            $("div[data-num^='sus-mobile_']").click(function () {
                                if ($(this).hasClass('active'))
                                {
                                    var thisid = $(this).attr('id');
                                    var sval = $('#sus_mobile_headbar_val').val();

                                    if (sval !== '')
                                    {
                                        var sval_list = sval.split(':');
                                        var tmp_list = '';

                                        if (sval_list.length > 0)
                                        {
                                            for (var i = 0; i < sval_list.length; i ++)
                                            {
                                                var item = sval_list[i];
                                                if (item !== thisid)
                                                {
                                                    if (tmp_list === '') {
                                                        tmp_list = item;
                                                    } else {
                                                        tmp_list += ':'+item;
                                                    }
                                                }
                                            }
                                            $('#sus_mobile_headbar_val').val(tmp_list);
                                        }
                                    } else {
                                        if (sval === thisid)
                                            $('#sus_mobile_headbar_val').val('');
                                    }
                                    $(this).removeClass('active');
                                } else {
                                    var thisid = $(this).attr('id');
                                    var sval = $('#sus_mobile_headbar_val').val();
                                    if (sval == '')
                                        sval = thisid;
                                    else {
                                        sval += ':'+thisid;
                                    }
                                    $('#sus_mobile_headbar_val').val(sval);
                                    $(this).addClass('active');
                                }
                            });
                        } else {
                            console.log(response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            addSystemSecurityMobileItem() {
                // var mobile_name = $.trim($('#sus-mobile-txt').val());
                // var mobile_org = $.trim($('#sus-mobile-txt-tmp').val());
                // var mobile_characters = $.trim($('#sus-mobile-character-txt').val());
                // var countrycode = $.trim($("#sus-mobile-countrycode").val());
                var title = $.trim($("#sus-mobile-title").val());

                if (title == "") {
                    alert("you must empty this fields.");
                } else {
                    var alldata = $.trim($("#sus-mobile-data").val());
                    var name = alldata.split("-")[0];
                    var countryname = alldata.split("-")[1];
                    var countrycode = alldata.split("-")[2];
                    var characters = alldata.split("-")[3];
                    var dialcode = alldata.split("-")[4];

                    let postData = {
                        org_name: name,
                        name: name,
                        countrycode: countrycode,
                        characters: characters,
                        dialcode: dialcode,
                        check: "0"
                    };

                    axios.post('admin.addSystemSecurityMobileItem', postData)
                        .then((response) => {
                            let msg = response.data.msg;

                            if (msg === "ok") {
                                $('#myAlertMobileModal').modal('hide');
                                this.getSystemSecurityMobileList();
                            } else {
                                console.log(response.data.message);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                }
            },
            deleteSystemSecurityMobileItem(mobile_name) {
                let postData = {
                    name: mobile_name
                };

                axios.post('admin.delSystemSecurityMobileItem', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg === "ok") {
                            this.getSystemSecurityMobileList();
                        } else {
                            console.log(response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            saveContentChange() {
                if (permss.pwrite == 1) {
                    if (tabstatus === 0) {
                        var password_data = {};

                        var password_head_val = $.trim($('#sus_password_head_val').val());

                        if (password_head_val != '') {
                            var sval_list = password_head_val.split(':');

                            for (var i = 0; i < sval_list.length; i++) {
                                password_data[sval_list[i]] = {
                                    "name": sval_list[i],
                                    "check": "1"
                                }
                            }
                        }

                        let postData = {
                            // strong_data: strong_head_val !== '' ? strong_data : '',
                            // medium_data: medium_head_val !== '' ? medium_data : '',
                            // low_data: low_head_val !== '' ? low_data : ''
                            data: password_head_val !== '' ? password_data : '',
                        };

                        axios.post('admin.updateSUSPasswordItem', postData)
                            .then((response) => {
                                let msg = response.data.msg;

                                if (msg === "ok") {
                                    this.getPasswordItemList("strong");
                                    //this.getPasswordItemList("medium");
                                    ///this.getPasswordItemList("low");
                                } else {
                                    console.log(response.data.message);
                                }
                            })
                            .catch(function (error) {
                                console.log(error);
                            })
                    } else if (tabstatus === 1) {
                        //email
                        var email_header_val = $.trim($('#sus_email_headbar_val').val());
                        var postData;

                        if (email_header_val != '') {
                            var sval_list = email_header_val.split(':');
                            var arr_data = {};

                            for (var i = 0; i < sval_list.length; i++) {
                                arr_data[sval_list[i]] = {
                                    "name": sval_list[i],
                                    "check": 1
                                }
                            }

                            postData = {
                                data: arr_data
                            };
                        } else {
                            postData = {
                                data: ''
                            };
                        }

                        axios.post('admin.updateSUSEmailItem', postData)
                            .then((response) => {
                                let msg = response.data.msg;

                                if (msg === "ok") {
                                    this.getEmailItemList();
                                } else {
                                    console.log(response.data.message);
                                }
                            })
                            .catch(function (error) {
                                console.log(error);
                            })

                    } else if (tabstatus === 2) {
                        //mobile
                        var mobile_header_val = $.trim($('#sus_mobile_headbar_val').val());
                        var postData;

                        if (mobile_header_val != '') {
                            var sval_list = mobile_header_val.split(':');
                            var arr_data = {};

                            for (var i = 0; i < sval_list.length; i++) {
                                arr_data[sval_list[i]] = {
                                    "name": sval_list[i],
                                    "check": 1
                                }
                            }

                            postData = {
                                data: arr_data
                            };
                        } else {
                            postData = {
                                data: ''
                            };
                        }

                        axios.post('admin.updateSystemSecurityMobileItem', postData)
                            .then((response) => {
                                let msg = response.data.msg;

                                if (msg === "ok") {
                                    this.getSystemSecurityMobileList();
                                } else {
                                    console.log(response.data.message);
                                }
                            })
                            .catch(function (error) {
                                console.log(error);
                            })
                    }
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
        }
    }
</script>
