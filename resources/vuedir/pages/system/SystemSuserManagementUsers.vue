<!--suppress ALL -->
<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title p-b-25">
                    <h3>{{cmusususu_system_suser_manage_users}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_system}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_bsuser}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_system_suser_manage}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_system_suser_manage_users}}
                          <a href="#" id="system-suser-management-users-fav" data-status="off" data-page-info="Users_system-suser-management-users">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">

                    <div class="card">
                        <div class="card-body" style="padding:20px;">
                            <h6 class="card-title m-b-20">{{cpgtxt_filters}}</h6>
                            <h6 class="card-title m-b-10" style="color: #878585;font-size: 0.9rem;">{{cpgtxt_nameoremail}}</h6>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group m-b-0">
                                        <input class="form-control w-75"  type="text" placeholder="" id="ssmuser_nameoremailsearch" @keyup.13="ssmuser_nameoremailsearch()"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group m-b-0">
                                        <select class="form-control w-75" id="ssmuser_state" name="ssmuser_state" @change="ssmuser_nameoremailsearch()">
                                            <option value="">{{cpgctl_any}}</option>
                                            <option value="2">{{cpgctl_activie}}</option>
                                            <option value="1">{{cpgctl_inactive}}</option>
                                            <option value="0">{{cpgctl_block}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="card">

                        <div class="row"  style="padding:30px 30px 5px 40px;">
                            <div class="col-md-4">
                                <h6 class="card-title m-b-20">{{cpgtxt_suserlist}}</h6>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group m-b-0">
                                    <select class="form-control w-75 float-right" id="ssmuser_table_all_actions" name="ssmuser_table_all_actions" @change="ssmu_user_allCheck_change(statusid)" v-model="statusid">
                                        <option value="">{{cpgctl_actions}}</option>
                                        <option v-for="status in statuss" :value="status.id">{{status.text}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4 text-right">
                                <div id="ssmuser_table_btn" class="btn btn-outline-light  dash-my-btn-0 active" style="font-size: 0.9rem;padding:10px 20px;" @click.stop="addSSMU()">
                                    <span>+ {{cbtntxt_adduser}}</span></div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive"> <!-- Required for Responsive -->
                                    <!-- user list {-->
                                    <table id="user-list" class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                        <thead>
                                        <tr role="row">
                                            <th style="width:20px!important">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="ssmu_allCheckbox" @click.stop="ssmu_user_all_check()" value="all">
                                                </div>
                                            </th>
                                            <th style="font-size:14px;">{{cpgtxt_name}}</th>
                                            <th style="font-size:14px;">{{cpgtxt_username}}</th>
                                            <!--<th style="font-size:14px;">{{cpgtxt_email}}</th>-->
                                            <th style="font-size:14px;">{{cpgtxt_department}}</th>
                                            <th style="font-size:14px;">{{cpgtxt_position}}</th>
                                            <th style="font-size:14px;">{{cpgtxt_status}}</th>
                                            <th style="text-align: center;font-size:14px;">{{cpgtxt_operation}}</th>
                                        </tr>
                                        </thead>
                                        <tbody id="ssmu_user_list">




                                        </tbody>
                                    </table>
                                    <!-- } user list -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row" >
                <div class="col-md-12" id="ssmu_page_nav">

                </div>
            </div>


            <!-- modal dlg -->
            <div class="modal fade" id="myAlertModal">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" style="color: #055ada;font-size: 16px;">{{cpgtxt_adduser}}</h4>
                            <p id="ssmu_alert" style="display: none;padding:5px 10px;border-radius:20px;">SMS alram area.</p>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body" id="myAlertModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                            <div class="row">
                                <div class="col-md-12">
                                    <div  class="btn btn-outline-light active  dash-my-btn-1" id="tab-mu-1" @click.stop="tabClick(1)"><span>{{cbtntxt_link}}</span></div>
                                    <div  class="btn btn-outline-light  dash-my-btn-1 m-l-15" id="tab-mu-2" @click.stop="tabClick(2)"><span>{{cbtntxt_sms}}</span></div>
                                    <div  class="btn btn-outline-light  dash-my-btn-1 m-l-15" id="tab-mu-3" @click.stop="tabClick(3)"><span>{{cbtntxt_mail}}</span></div>
                                    <div  class="btn btn-outline-light  dash-my-btn-1 m-l-15" id="tab-mu-4" @click.stop="tabClick(4)"><span>{{cbtntxt_manual}}</span></div>
                                </div>
                            </div>
                            <div class="panel" id="tab1">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0" style="padding: 20px 10px 5px 10px; color: #999999;font-family: SimHei;">
                                            <input type="checkbox" name="tablinkcontentckbtn" id="tablinkcontentckbtn" @click.stop="tablinkCheckbox()" checked>允许快速注册
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div id="ssmu_link_content" class="form-group m-b-0" style="padding: 20px 10px 15px 20px; color: #888888; font-family: SimHei;">那些立即邀请许同事的人远<br>
                                            更快掌握 WES 并提高使用<br>
                                            效率。 复制链接并将其发送给您的同事 - <br>
                                            他们将在没有您的帮助下完成注册。
                                        </div>
                                    </div>
                                </div>
                                <div class="row tab-link-cont">
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0" style="padding: 0px 10px 0px 10px; border-bottom: 1px solid #a7a7a7;"></div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group m-b-0" style="padding: 20px 10px 5px 10px; color: #999999; font-family: SimHei;"><span>快速注册链接</span></div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group m-b-0 text-right" style="padding: 20px 10px 5px 10px;">
                                            <a href="#"  @click.stop="UpdateRandomUrl()">
                                                <span  style="color:#a7a7a7; font-family: SimHei;">更新链接</span>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="feather feather-bar-chart-2 nav-link-icon">
                                                    <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0">
                                            <input type="text" value = "" readonly="readonly" id="allow_register_fastreg_input" name="allow_register_fastreg_input" class="form-control w-100">
                                            <!--<input type="hidden" id="allow_register_fastreg_input_c" name="allow_register_fastreg_input_c" value="">-->
                                        </div>
                                    </div>
                                    <div class="col-md-12 m-t-5">
                                        <a href="#" data-toggle="popover" data-placement="right" @click.stop="copyClipboardtoUrl('allow_register_fastreg_input')"  title="" style="padding-left: 10px" data-content="Link copied to clipboard.">复制链接</a>
                                    </div>
                                </div>
                                <!--  <div class="row">
                                      <div class="col-md-12">
                                          <div class="form-group m-b-0" style="padding: 5px 10px 5px 10px;">
                                              <span>
                                              <a href="#"><u style="color:#548ce0; font-family: SimHei;">附加设置</u></a>
                                              </span>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="row">
                                      <div class="col-md-12">
                                          <div class="bottom" style="text-align: center; padding-top: 10px;">
                                              <button type="button" class="btn btn-info" style="font-family: SimHei;background:#5c6bc0 !important;border-color: #5c6bc0 !important">Save</button>
                                              <button type="button" class="btn btn-light" style="font-family: SimHei;">关闭</button>
                                          </div>
                                      </div>
                                  </div>
                                  -->
                            </div>
                            <div class="panel" id="tab2" style="display: none;">
                                <div class="row" style="background-color: #eef2f5; margin-top: 20px; padding-bottom: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 Btrix 及 组--></div>
                                    </div>
                                    <div style="width:100%; background-color: #f9fbfa; margin: 10px 10px 0px 10px; padding-bottom: 10px;">
                                        <div class="col-md-12">
                                            <div class="form-group m-b-0" style="padding: 10px 10px 0px 0px; color: #a9a9a9; font-family: SimHei;">电话</div>
                                        </div>
                                        <div class="input-group mb-3" style="padding: 10px 10px 0px 10px;">
                                            <input id="phone" name="phone" type="tel" class="form-control"  placeholder="" aria-label="phone" aria-describedby="basic-addon1">
                                        </div>
                                        <!-- <div class="col-md-12">
                                             <div class="form-group m-b-0" style="padding: 0px 10px 10px 0px; color: #a9a9a9; font-family: SimHei;">添加</div>
                                         </div>
                                         <div class="col-md-12">
                                             <div class="form-group m-b-0" style="padding: 10px 10px 10px 0px; color: #a9a9a9; font-family: SimHei;">消息文本</div>
                                         </div>-->
                                        <div style="background-color: #f4f4f4; margin: 0px 10px 0px 10px;">
                                            <div class="col-md-12 p-t-b-10">
                                                <textarea id="ssmu_sms_cont" class="form-control" readonly="readonly" style="background-color: #fff;border: 1px solid #f2f2f2; min-height: 62px;-ms-overflow-style:none;resize:none;">{{ssmu_sms_cont}}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="bottom" style="text-align: center; padding-top: 10px;">
                                            <button type="button" class="btn btn-info" style="font-family: SimHei;background:#5c6bc0 !important;border-color: #5c6bc0 !important" @click.stop="SSMU_SendSMS()">{{cbtntxt_send}}</button>
                                            <button type="button" class="btn btn-light" style="font-family: SimHei;" @click.stop="SSMU_DialogClose()">{{cbtntxt_cancel}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel" id="tab3" style="display: none;">
                                <div class="row" style="background-color: #eef2f5; margin-top: 20px; padding-bottom: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--邀请员工到部门 Btrix 及 组--></div>
                                    </div>

                                    <div  style="width: 100%; background-color: #f9fbfa; margin: 10px 10px 0px 10px;">
                                        <div class="col-md-12">
                                            <div class="form-group" style="margin-bottom:0">
                                                <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_mail}}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12" style="padding-bottom: 15px;">
                                            <div class="input-group">
                                                <textarea class="form-control" style="background-color: #fff;border: 1px solid #ced4da;min-height:70px;"  placeholder="" aria-label="useremails" id="useremails" aria-describedby="basic-addon2"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group m-b-0" style="padding: 10px 0 0 10px; color: #a9a9a9; font-family: SimHei;">{{cpgtxt_msgtxt}}</div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group m-b-0"  style="padding: 10px; color: #a9a9a9; font-family: SimHei;">
                                            <textarea id="ssmu_mail_cont" class="form-control" style="background-color: #fff;border: 1px solid #f2f2f2;">{{ssmu_mail_cont}}</textarea>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="bottom" style="text-align: center; padding-top: 10px;">
                                            <button type="button" class="btn btn-info" style="font-family: SimHei;background:#5c6bc0 !important;border-color: #5c6bc0 !important" @click.stop="SSMU_SendMail()">{{cbtntxt_request}}</button>
                                            <button type="button" class="btn btn-light" style="font-family: SimHei;" @click.stop="SSMU_DialogClose()">{{cbtntxt_close}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel" id="tab4" style="display: none;">
                                <form id="ssmu_reg_by_manager">
                                    <div class="row" style="background-color: #eef2f5; margin-top: 20px; padding-bottom: 10px;">
                                        <div class="col-md-12">
                                            <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                        </div>
                                        <form>
                                            <div style="background-color: #f9fbfa; margin: 10px 10px 0px 10px; padding-bottom: 10px;">
                                                <div class="row" style="padding: 10px 10px 10px 10px;">
                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_email}}<!--电子邮件--></label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11" style="padding-left: 62px;">
                                                        <div class="input-group mb-3">
                                                            <input type="email" class="form-control" style="background-color: #fff;border: 1px solid #ced4da; width: 300px;"  placeholder="" aria-label="ssmu-email" id="ssmu-email" aria-describedby="basic-addon2">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_username}}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11" style="padding-left: 62px;">
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control" style="background-color: #fff;border: 1px solid #ced4da; width: 300px;"  placeholder="" aria-label="ssmu-username" id="ssmu-username" aria-describedby="basic-addon2">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_name}}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11" style="padding-left: 62px;">
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control" style="background-color: #fff;border: 1px solid #ced4da; width: 300px;"  placeholder="" aria-label="ssmu-name" id="ssmu-name" aria-describedby="basic-addon2">
                                                        </div>
                                                    </div>

                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_password}}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11" style="padding-left: 62px;">
                                                        <div class="input-group mb-3">
                                                            <input type="password" class="form-control" style="background-color: #fff;border: 1px solid #ced4da; width: 300px;" autocomplete="off" placeholder="" aria-label="ssmu-pwd" id="ssmu-pwd" aria-describedby="basic-addon2">
                                                        </div>
                                                    </div>

                                                    <div class="col-md-1">
                                                        <div class="form-group">
                                                            <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_remark}}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-11" style="padding-left: 62px;">
                                                        <div class="input-group mb-3">
                                                            <!-- <input type="text" class="form-control" style="background-color: #fff;border: 1px solid #ced4da; width: 300px;"  placeholder="" aria-label="remark" id="remark" aria-describedby="basic-addon2">-->
                                                            <textarea id="ssmu-remark"></textarea>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="col-md-12">
                                                         <div class="form-group m-b-0" style="padding: 0px 0px 10px 75px; color: #999999; font-family: SimHei;">
                                                             <input type="checkbox" name="confirmation" checked>无需确认</div>
                                                     </div>-->
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="bottom" style="text-align: center; padding-top: 10px;">
                                                <button type="button" class="btn btn-info m-r-10" style="font-family: SimHei;background:#5c6bc0 !important;border-color: #5c6bc0 !important" @click.stop="ssmu_manual_reg()">{{cbtntxt_add}}</button>
                                                <button type="button" class="btn btn-light" style="font-family: SimHei;" @click.stop="SSMU_DialogClose()">{{cbtntxt_close}}</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!--<div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" style="background-color: #5877bb!important;border-color: #5877bb!important">{{cbtntxt_add}}</button>
                        </div>-->

                    </div>
                </div>
            </div>
            <!-- modal -->

        </div>
</template>
<style>
    div,input{
        /* font-family: SimHei;*/
    }
    textarea[id=ssmu-remark] {
        resize: none;
        border-radius: 0.8rem;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        overflow: visible;
        transition: all 0.2s;
        display: block;
        width: 100%;
        padding: 10px;
    }

  a[data-toggle="popover"]:hover {
  color: #0e61de;
  font-weight: bold;
}

</style>
<script>
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";


    let loginusermail = '';
    let s_nameORemail = '';
    let s_status=-1;
    var countries = [];

    var pgctl_activie = "";
    var pgctl_inactive = "";
    var pgctl_block = "";
    var btntxt_edit = "";
    var btntxt_delete = "";
    var permss;

    var randHex = function(len)
    {
        var maxlen = 8;
        var    min = Math.pow(16,Math.min(len,maxlen)-1);
        var    max = Math.pow(16,Math.min(len,maxlen)) - 1;
        var    n   = Math.floor( Math.random() * (max-min+1) ) + min;
        var    r   = n.toString(16);
        while ( r.length < len )
        {
            r = r + randHex( len - maxlen );
        }
        return r;
    };

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function g_updateurl(vueobj)
    {
        var rstr =  randHex(12);
        //var protocol=document.location.protocol; http:
        var a=window.location.href;
        a = a.replace('#','');
        if(a.indexOf('admin.dashboard') > -1){
            a = a.split('admin.dashboard')[0];
            a = a+'admin.dashboard/fastreg='+rstr;
        }
        else
        {
            var aa=window.location.pathname;
            a= a.replace(aa,'/admin.dashboard');
            a = a+'/fastreg='+rstr;
        }
        //ckd
       var urlval=a;
       // var urlval="http://www.waaup.com.cn/admin.dashboard/fastreg="+rstr;
        $('#allow_register_fastreg_input').val(urlval);
        var smstxt="wes快速通道:您可以点击查看 \n"+urlval;
        $('#ssmu_sms_cont').val(smstxt);
        vueobj.savefasttoken();
    }

    function addSSMUDlg()
    {
        $("#myAlertModal").modal('show');
        var dh = Math.max($(document).height(), $(document.body).height());
        //var mh = $('.modal .modal-content').height();alert(mh);
        // var tp = dh / 2 - 350;
        // $('#myAlertModal').css('top',tp);
    }

    function addUserInfo()
    {
        let postData = {
            name: 'name',
            username: 'username',
            email: 'test@163.com',
            sex: 1,
            birthday: '1990-02-08',
            phone: '15524206580',
            address: 'jilin,jilinshi,gaoxinbeiqu',
            city: 'jilin',
            remark: '我是这个软件开发人',
            status:0
        }

        axios.post('inserSystemUserManagementUsersAdd', postData)
            .then((response) => {
                let type = response.type;
            }).catch(function (error) {
            console.log(error);
        })
    }

    function phonecountry(){
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            // allowDropdown: false,
            // autoHideDialCode: false,
            // autoPlaceholder: "off",
            // dropdownContainer: document.body,
            // excludeCountries: ["us"],
            // formatOnDisplay: false,
            // geoIpLookup: function(callback) {
            //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            //     var countryCode = (resp && resp.country) ? resp.country : "";
            //     callback(countryCode);
            //   });
            // },
            // hiddenInput: "full_number",
            // initialCountry: "auto",
            //localizedCountries: { 'cn': 'Deutschland' },
            // nationalMode: false,
            // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
            onlyCountries: countries,
            // placeholderNumberType: "MOBILE",
            // preferredCountries: ['cn'],
            separateDialCode: true,
            // utilsScript: "build/js/utils.js",
        });
    }

    function show_fade_alert(text, n){
        // if(n==1)
        $('#ssmu_alert').text(text).css({"background":"#000000", "color":"#ffffff"});
        //  else
        //      $('#ssmu_alert').text(text).css({"color":"#e8071a"});

        $("#ssmu_alert").fadeIn(800, function(){
            setTimeout(function () {
                $("#ssmu_alert").fadeOut(1000);
            },3000);
        });
    }



    var pstart=1;
    var pnum = pstart;

    var pcnt=5;
    var numg = 5;

    function getSSMUUserList()
    {
        let postData = {
            email: loginusermail,
            s_nameORemail:s_nameORemail,
            s_status:s_status,
            start: pstart,
            cnt:pcnt
        };
        axios.post('admin.ssmu.getDashUserListByEmail', postData)
            .then((response) => {
                var status = response.data.status;
                if(status=="ok")
                {
                    var total=response.data.total;
                    if(total<=0){
                        $('#ssmu_user_list').html('');
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart=response.data.start;
                    var totalpage=response.data.totalpage;
                    var userlist = JSON.parse(response.data.userlist);
                    var tags='';
                    for(var i = 0; i < userlist.length; i++)
                    {
                        var user = userlist[i];
                        tags+='<tr role="row" class="odd">';
                        tags+='<td>';
                        tags+='<div class="form-check form-check-inline">';
                        tags+='<input class="form-check-input" type="checkbox" id="oneCheckbox_'+user.id+'" value="">';
                        tags+='</div>';
                        tags+='</td>';
                        tags+='<td>';
                        tags+='<a href="#">';
                        tags+='<figure class="avatar avatar-sm mr-2">';
                        if(user.photo!=null && user.photo!="")
                            tags+='<img src="/uploads/images/'+user.photo+'" class="rounded-circle" alt="avatar" onerror="this.src =\'/images/noimg.png\';">';
                        else
                            tags+='<img src="/uploads/images/someone.png" class="rounded-circle" alt="avatar" onerror="this.src =\'/images/noimg.png\';">';
                        tags+='</figure>';
                        tags+=user.name;
                        tags+='</a>';
                        tags+='</td>';
                        tags+='<td>'+user.username+'</td>';
                        /*tags+='<td>'+user.email+'</td>';*/
                        tags+='<td>'+user.department+'</td>';
                        tags+='<td>'+user.position+'</td>';
                        if(user.status == 0){
                            tags+='<td id="ssmu_user_status_view_'+user.id+'" class="data-ajax" data-ajax="pgctl_block">'+pgctl_block+'</td>';
                        }
                        else if(user.status == 1){
                            tags+='<td id="ssmu_user_status_view_'+user.id+'" class="data-ajax" data-ajax="pgctl_inactive">'+pgctl_inactive+'</td>';
                        }
                        else if(user.status == 2){
                            tags+='<td id="ssmu_user_status_view_'+user.id+'" class="data-ajax" data-ajax="pgctl_activie">'+pgctl_activie+'</td>';
                        }
                        tags+='<td>';
                        tags+='<div class="form-group m-b-0">';
                        tags+='<select class="my-border-radius-slt form-control float-right" id="ssmuser_table_status_'+user.id+'" name="ssmuser_table_state'+user.id+'">';
                        tags+='<option value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
                        tags+='<option value="active" class="data-ajax" data-ajax="pgctl_activie">'+pgctl_activie+'</option>';
                        tags+='<option value="inactive" class="data-ajax" data-ajax="pgctl_inactive">'+pgctl_inactive+'</option>';
                        tags+='<option value="block" class="data-ajax" data-ajax="pgctl_block">'+pgctl_block+'</option>';
                        tags+='<option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
                        tags+='</select>';
                        tags+='</div>';
                        tags+='</td>';
                        tags+='</tr>';


                    }

                    $('#ssmu_user_list').html(tags);


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

                    pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

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
                            oid="ssmunavnum_" + pnum;

                        nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
                        nav_tag+='<a class="page-link" id="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
                        nav_tag+='</li>';

                        if(pnum==totalpage) break;

                        pnum = pnum + 1;


                    }



                    var nextnum= parseInt(pstart) + 1;

                    var edisble="";
                    if(pstart==totalpage)
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
                        var oid=$(this).attr("id");
                        pstart=oid.split('_')[1];
                        getSSMUUserList();
                    });

                    $("#ssmu_allCheckbox").prop('checked',false);

                    /* click to induvidual checkbox */
                    $('input[id^="oneCheckbox_"]').click(function() {
                        if($(this).is(':checked'))
                            $("#ssmu_allCheckbox").prop('checked',false);
                        else
                            $("#ssmu_allCheckbox").prop('checked',false);
                    });

                    $('select[id^="ssmuser_table_status_"]').change(function(){
                        var tid=$(this).attr("id");
                        var t_id=tid.split("_")[3];
                        var value=$(this).val();
                       var cvalue = $('#ssmu_user_status_view_'+t_id).text();
                        if(value!='' && value!=cvalue){
                            setSSMUUserStatusChange(t_id,value);
                        }

                    });
                }
                else
                    console.log('getSSMUUserList Error');
            }).catch(function (error) {
                console.log(error);
            });


    }

    function setSSMUUserStatusChange(t_id,value){
        var st = value=='block' ? 0 : value=='inactive' ? 1 : 2;
        if(value == 'delete')
            st = 3;
        let postData = {
            id: t_id,
            value:st
        };

        if (permss.pwrite == 1 || permss.pdelete == 1) {
            if(permss.pdelete == 0 && value == 'delete'){
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            axios.post('admin.ssmu.setSSMUUserStatusChange', postData)
                .then((response) => {
                    var type = response.data.status;
                    if (type == "ok") {
                        var txt_val = 'Activie';
                        if(st == 0)
                            txt_val = 'Block';
                        else if(st == 1)
                            txt_val = 'Inactivie';
                        else if(st == 2)
                            txt_val = 'Activie';
                        $('#ssmu_user_status_view_' + t_id).text(txt_val);
                        if (value == 'delete')
                            getSSMUUserList();
                    } else {
                        console.log(type);
                    }

                }).catch(function (error) {
                console.log(error);
            })
        }
        else
            myjs.data.showAlert('pgtxt_notpermission');
    }

    function getsettingData() {
        $.ajax({
            url: 'admin.ssrGetSetting',
            data: {
                transLang: "en-1"
            },
            type: 'POST',
            async: false,
            success: function (data) {
                if (data.msg === "ok") {
                    if (data.item != "") {
                        var dt = data.item;
                        dt = $.parseJSON(dt);
                        var ct = decodeURIComponent(dt.help);
                        $("#ssmu_link_content").text(ct);
                    }

                    if (data.sms) {
                        let lists = data.sms;

                        Object.keys(lists).forEach(function (elem) {
                            countries.push(lists[elem].countrycode);
                        });

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

    /* default part */
    export default {
        components: {
        },
        data () {
            return {
                ssmu_sms_cont: '',
                ssmu_mail_cont: '',
                statuss:[
                    {text:'Blocked',id:0},
                    {text:'Inactived',id:1},
                    {text:'Activied',id:2},
                    {text:'Delete',id:3}
                ],
                statusid:'',
                pageid:'system-suser-management-users-fav',
                musususu_system_suser_manage_users:'',
                mu_system:'',
                musu_system_bsuser:'',
                mususu_system_suser_manage:'',
                pgtxt_filters:'',
                pgtxt_nameoremail:'',
                pgctl_any:'',
                pgctl_activie:'',
                pgctl_inactive:'',
                pgctl_block:'',
                pgtxt_suserlist:'',
                pgctl_actions:'',
                btntxt_adduser:'',
                btntxt_delete:'',
                btntxt_edit:'',
                pgtxt_name:'',
                pgtxt_username:'',
                pgtxt_email:'',
                pgtxt_department:'',
                pgtxt_position:'',
                pgtxt_status:'',
                pgtxt_operation:'',
                pgtxt_adduser:'',
                btntxt_link:'',
                btntxt_sms:'',
                btntxt_mail:'',
                btntxt_manual:'',
                btntxt_send:'',
                btntxt_cancel:'',
                pgtxt_mail:'',
                pgtxt_msgtxt:'',
                btntxt_request:'',
                btntxt_close:'',
                btntxt_add:'',
                pgtxt_ssmu_name:'',
                pgtxt_username:'',
                pgtxt_password:'',
                pgtxt_remark:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                pgtxt_dontregnewuser:'',
            }
        },
        created() {

        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmusususu_system_suser_manage_users:function () {
                return this.musususu_system_suser_manage_users
            },
            cmu_system:function () {
                return this.mu_system
            },
            cmusu_system_bsuser:function () {
                return this.musu_system_bsuser
            },
            cmususu_system_suser_manage:function () {
                return this.mususu_system_suser_manage
            },
            cpgtxt_filters:function () {
                return this.pgtxt_filters
            },
            cpgtxt_nameoremail:function () {
                return this.pgtxt_nameoremail
            },
            cpgctl_any:function () {
                return this.pgctl_any
            },
            cpgctl_activie:function () {
                return this.pgctl_activie
            },
            cpgctl_inactive:function () {
                return this.pgctl_inactive
            },
            cpgctl_block:function () {
                return this.pgctl_block
            },
            cpgtxt_suserlist:function () {
                return this.pgtxt_suserlist
            },
            cpgctl_actions:function () {
                return this.pgctl_actions
            },
            cbtntxt_adduser:function () {
                return this.btntxt_adduser
            },
            cpgtxt_name:function () {
                return this.pgtxt_name
            },
            cpgtxt_username:function () {
                return this.pgtxt_username
            },
            cpgtxt_email:function () {
                return this.pgtxt_email
            },
            cpgtxt_department:function () {
                return this.pgtxt_department
            },
            cpgtxt_position:function () {
                return this.pgtxt_position
            },
            cpgtxt_status:function () {
                return this.pgtxt_status
            },
            cpgtxt_operation:function () {
                return this.pgtxt_operation
            },
            cpgtxt_adduser:function () {
                return this.pgtxt_adduser
            },
            cbtntxt_link:function () {
                return this.btntxt_link
            },
            cbtntxt_sms:function () {
                return this.btntxt_sms
            },
            cbtntxt_mail:function () {
                return this.btntxt_mail
            },
            cbtntxt_manual:function () {
                return this.btntxt_manual
            },
            cbtntxt_send:function () {
                return this.btntxt_send
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cpgtxt_mail:function () {
                return this.pgtxt_mail
            },
            cpgtxt_msgtxt:function () {
                return this.pgtxt_msgtxt
            },
            cbtntxt_request:function () {
                return this.btntxt_request
            },
            cbtntxt_close:function () {
                return this.btntxt_close
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_ssmu_name:function () {
                return this.pgtxt_ssmu_name
            },
            cpgtxt_username:function () {
                return this.pgtxt_username
            },
            cpgtxt_password:function () {
                return this.pgtxt_password
            },
            cpgtxt_remark:function () {
                return this.pgtxt_remark
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_dontregnewuser;
            },

            contentchange: function () {
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            }
        },
        beforeMount(){
        },
        mounted() {
            loginusermail = this.$store.state.userinfo.email;
            /* fav part*/
            var vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            permss = myjs.data.permissionDefinition();

            pgctl_activie = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_activie');
            pgctl_inactive = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_inactive');
            pgctl_block= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_block');
            btntxt_edit= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
            btntxt_delete= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');

            getSSMUUserList();
            getsettingData();
            phonecountry();
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
            ssmuser_nameoremailsearch(){
                if (permss.pread == 1) {
                    var objval = $('#ssmuser_state').val();

                    var st = parseInt(objval);
                    if (isNaN(st)) {
                        s_status = -1;
                    } else
                        s_status = st;

                    var txt = $('#ssmuser_nameoremailsearch').val();

                    txt = $.trim(txt);

                    s_nameORemail = txt;

                    getSSMUUserList();
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            ssmu_user_allCheck_change(pid){
                if (permss.pwrite == 1) {
                    var id = parseInt(pid);
                    if (isNaN(id)) {
                        return;
                    }

                    let idlist = [];
                    // if($("#ssmu_allCheckbox").is(':checked'))
                    // {
                    //alert(id);
                    $('input:checkbox[id^="oneCheckbox_"]:checked').each(function () {
                        var oneidstr = $(this).attr('id');
                        var t_id = oneidstr.split('_')[1];
                        idlist.push(parseInt(t_id));
                    });
                    this.setSSMUUserStatusAllChange(idlist, parseInt(id));
                    // }
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            setSSMUUserStatusAllChange(idlist, id){
                let postData = {
                    idlists: idlist,
                    value:id
                };
                axios.post('admin.ssmu.setSSMUUserStatusAllChange', postData)
                    .then((response) => {
                        var type = response.data.status;
                        if(type=="ok")
                        {
                           for(var idx=0;idx < idlist.length;idx++)
                           {
                               var tid=idlist[idx];
                               var txt= id==0 ? 'block' : id==1 ? 'inactive' : 'active';
                               $('#ssmu_user_status_view_'+tid).text(txt);
                           }
                           if(id == 3){
                               getSSMUUserList();
                               $('#ssmuser_table_all_actions').val("");
                           }

                        }
                        else
                        {
                            console.log(type);
                        }

                    }).catch(function (error) {
                        console.log(error);
                    })
            },
            data_toggle_popover(){

            },
            UpdateRandomUrl(){
                g_updateurl(this);
            },
            get_sms_mail_cont(){
                let postData = {
                    cont: ''
                }
                axios.post('admin.ssmu.getsmsmailcont', postData)
                    .then((response) => {
                        var type = response.data.status;
                        if(type =="ok"){
                           // this.ssmu_sms_cont=response.data.sms_cont;
                            this.ssmu_mail_cont=response.data.mail_cont;
                        }
                        else
                        {
                            console.log('db or empty');
                        }
                    }).catch(function (error) {
                        console.log(error);
                    })
            },
            addSSMU() {
                if (permss.pcreate == 1) {
                    addSSMUDlg();
                    this.readFastToken();
                    //g_updateurl(this);
                    this.get_sms_mail_cont();
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            readFastToken(){
                let postData = {
                    email: loginusermail
                }
                axios.post('getfasttoken', postData)
                    .then((response) => {
                        var type = response.data.type;
                        if(type=="ok")
                        {
                           var rstr = response.data.address;
                            //var protocol=document.location.protocol; http:
                            var a=window.location.href;
                            a = a.replace('#','');
                            if(a.indexOf('admin.dashboard') > -1){
                                a = a.split('admin.dashboard')[0];
                                a = a+'admin.dashboard/fastreg='+rstr;
                            }
                            else
                            {
                                var aa=window.location.pathname;
                                a= a.replace(aa,'/admin.dashboard');
                                a = a+'/fastreg='+rstr;
                            }
                            //ckd
                            var urlval=a;
                           // var urlval="http://www.waaup.com.cn:8080/admin.dashboard/fastreg="+rstr;

                            $('#allow_register_fastreg_input').val(urlval);
                            var smstxt="wes快速通道:您可以点击查看 \n"+urlval;
                            $('#ssmu_sms_cont').val(smstxt);
                        }
                        else
                        {
                            console.log('no address');
                        }
                    }).catch(function (error) {
                        console.log(error);
                    })
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
                }
                else if(n==2)
                {
                    $('#tab-mu-2').addClass('active');
                    $('#tab1').hide();
                    $('#tab2').show();
                    $('#tab3').hide();
                    $('#tab4').hide();
                }
                else if(n==3)
                {
                    $('#tab-mu-3').addClass('active');
                    $('#tab1').hide();
                    $('#tab2').hide();
                    $('#tab3').show();
                    $('#tab4').hide();
                }
                else if(n==4)
                {
                    $('#tab-mu-4').addClass('active');
                    $('#tab1').hide();
                    $('#tab2').hide();
                    $('#tab3').hide();
                    $('#tab4').show();
                }

                //addUserInfo();
            },
            tablinkCheckbox(){
                if($("#tablinkcontentckbtn").is(':checked'))
                    $(".tab-link-cont").show();  // checked
                else
                    $(".tab-link-cont").hide();
            },
            copyClipboardtoUrl(lkid){
                var Url = document.getElementById(lkid);
                Url.focus();
                Url.select();
                Url.setSelectionRange(0, 99999); /*For mobile devices*/
                document.execCommand("Copy");
                $('[data-toggle="popover"]').popover('show');
               // this.savefasttoken();
                setTimeout(function () {
                    $('[data-toggle="popover"]').popover('hide');
                },1500);
            }, /*  서버에로 토근보관  */
            savefasttoken(){
                var spt=$('#allow_register_fastreg_input').val();
                var a_dd=spt.split('=')[1];
                let postData = {
                    email: loginusermail,
                    address: a_dd
                };
                axios.post('savefasttoken', postData)
                    .then((response) => {
                        var type = response.data.type;
                        if(type=="ok"){

                        }
                    }).catch(function (error) {
                        console.log(error);
                    })
            },
            SSMU_SendSMS(){
              //  this.set_ssmu_sms_mail_cont();
                var smscont = $('#ssmu_sms_cont').val();
                if(smscont=="")
                {
                    alert("error: empty content of sms!"); return;
                }
                if(smscont.indexOf("fastreg=") < 0)
                {
                    alert("error: content of sms!"); return;
                }
                var fastreg=smscont.split('=')[1];

                var countrycode = $('.iti__selected-dial-code').html();
                countrycode = countrycode.replace("+", "");
                var phnum = $('#phone').val();
                var patt = /^\d+$/;
                if(phnum.match(patt)) {
                    let  postData = {
                        phone: countrycode+phnum,
                        fastreg:fastreg
                    };
                    //ckd
                    var svurl = 'admin.InvokeSMS';
                    if(window.Laravel.g_path==="remote")
                        svurl = 'http://waaup.org/admin.InvokeSMS';
                    // for hk server
                   // if(countrycode=="86" || countrycode==86)
                   //  svurl = 'http://52.80.36.179/admin.InvokeSMS';

                   axios.post(svurl, postData)
                        .then((response) => {
                            var type = response.data.status;
                            if(type=="ok")
                            {
                                show_fade_alert('Success: send SMS',1);
                            }
                            else
                            {
                                console.log('type::'+type);
                                show_fade_alert(type,0);
                            }

                        }).catch(function (error) {
                            console.log(error);
                        })
                }
                else {
                    show_fade_alert('Invalid is phone number!',0);
                }

            },
            set_ssmu_sms_mail_cont()
            {
                var smscont = $('#ssmu_sms_cont').val();
                var mailcont = $('#ssmu_mail_cont').val();
                //if(smscont=="" && mailcont=="") return;//ckd
                if(mailcont=="") return;
                let postData = {
                    //sms_cont: smscont,//ckd
                    sms_cont: '',
                    mail_cont: mailcont
                };
                //alert(smscont+':'+mailcont);
                axios.post('admin.ssmu.setSmsMailCont', postData)
                    .then((response) => {
                        var type = response.data.status;
                    }).catch(function (error) {
                        console.log(error);
                    })

            },
            SSMU_SendMail()
            {
                var emaillist = $('#useremails').val();
                if(emaillist.length < 5) {
                    myjs.data.showAlert('pgtxt_invalidemail');
                    return;
                }

                myjs.data.Confirm('Are you sure you want to send mails',function (val) {
                   if(val){
                       vueOBJ.set_ssmu_sms_mail_cont();
                       /*var r = window.confirm("Are you sure you want to send mails");
                       if (r == false)
                           return;*/
                       emaillist = emaillist.replace("\n", " ");
                       emaillist = emaillist.replace("\t", " ");
                       emaillist = emaillist.replace(",", " ");
                       emaillist = emaillist.replace(";", " ");
                       emaillist = emaillist.replace(":", " ");

                       var a_emails = emaillist.split(" ");

                       let email_str= "";
                       for (var i = 0; i < a_emails.length; i++){
                           var em=a_emails[i];
                           var rt = myjs.data.validateEmail(em);
                           if(rt)
                               email_str = email_str + em + "#";
                       }

                       if(email_str.length < 5)
                       {
                           myjs.data.showAlert('pgtxt_invalidpattern');
                           return;
                       }

                       email_str = encodeURIComponent(email_str);
                       var mailcont = $('#ssmu_mail_cont').val();
                       mailcont = encodeURIComponent(mailcont);

                       let postData ={
                           emails: email_str,
                           mailcont:mailcont
                       };
                        //current is window.location.hostname  : wes.local.com
                       var hostname = window.location.hostname;
                       var flag = hostname.indexOf('waaup.org');
                       var svurl = "admin.InvokeMail";
                        //if(window.Laravel.g_path=="remote")
                       if(flag < 0)
                            svurl = 'http://waaup.org/admin.InvokeMail';
                       axios.post(svurl, postData)
                           .then((response) => {
                               var type = response.data.status;
                               if(type=="ok") {
                                   show_fade_alert('Success: send mail',1);
                               }
                               else
                               {
                                   show_fade_alert('Error: send mail',0);
                               }
                           })
                           .catch(function (error) {
                                console.log(error);
                           })
                   }
                });
            },
            SSMU_DialogClose(){
                $("#myAlertModal").modal('hide');
            },
            ssmu_user_all_check()
            {
                if($("#ssmu_allCheckbox").is(':checked')) {
                    $('input[id^="oneCheckbox_"]').prop('checked',true);
                }
                else {
                    $('input[id^="oneCheckbox_"]').prop('checked',false);
                }
            },
            ssmu_manual_reg(){
                var email = $.trim($("#ssmu-email").val());
                var username = $.trim($("#ssmu-username").val());
                var name = $.trim($("#ssmu-name").val());
                var pwd = $.trim($("#ssmu-pwd").val());
                var remark = $.trim($("#ssmu-remark").val());

                if(email=="")
                {
                    alert("This email must not empty.");
                    return false;
                }

                if(username=="")
                {
                    alert("This username must not empty.");
                    return false;
                }

                if(name=="")
                {
                    alert("This name have must not empty.");
                    return false;
                }

                if(pwd=="")
                {
                    alert('This password1 and password2 must not empty.');
                    return false;
                }

                let postData = {
                    name:name
                    ,username: username
                    , qualify:''
                    , contact:''
                    , contactmethod:''
                    , contactaddr:''
                    , email:email
                    , password:pwd
                    , phonenumEmail:''
                    , uploaddoc:''
                    , photo:''
                    , remark:remark
                    , partwho:2
                };

                axios.post('/user.fastreg', postData)
                    .then((response) => {
                        if(response.data.status=="dup"){
                            myjs.data.showAlert('pgtxt_dontregnewuser');
                        }
                        else if(response.data.status=="ok")
                        {
                            //show_fade_alert('Success add new user.',0);
                            //setTimeout(function () {
                                getSSMUUserList();
                            //},3000);
                            $("#myAlertModal").modal('hide');
                        }
                    }).catch(function (error) {
                        console.log(error);
                    })

            },

        }
    }
</script>
