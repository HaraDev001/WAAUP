<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_apps_website_module_weblanguage}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_apps}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_apps_website}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_website_module}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_apps_website_module_weblanguage}}
                          <a href="#" id="apps-website-appearance-head-fav" data-status="off" data-page-info="Head_apps-website-appearance-head">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12" style="margin-bottom: 30px;">
                <div class="page1_content_side_bar" style="display: flex;">
                    <div class="awml_page_button">
                        <div id="aqah_page1_content_side_bar_text" class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="setting">{{cbtntxt_setting}}</div>
                    </div>
                    <div class="awml_page_button">
                        <div id="aqah_page2_content_side_bar_text" class="page1_content_side_bar_text" data-target="list">{{cpgtxt_list}}</div>
                    </div>
                </div>
            </div>

            <div class="col-md-12" style="padding-bottom: 20px; display: flex;">
                <div class="col-md-10 ">
                </div>
                <div class="col-md-2 text-right">
                    <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="showAddLanguageDialog()">
                        <span>+ {{cbtntxt_add}}</span>
                    </div>
                </div>
            </div>

            <!--setting-->
            <div class="col-md-12 page_slider_content_list active" id="setting">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding: 0px;">
                        <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                            <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cbtntxt_setting}}</div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                            <thead>
                            <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                <th style="width:40px!important; border: 0;"></th>
                                <th style="border: 0;">{{cpgtxt_name}}</th>
                                <th style="text-align:right; padding-right: 40px;">
                                    <div class="setting_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody id="awml_setting_content_lists">

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 text-center" >
                        <div id="awml_settingpage_nav" style="width: 100%;">
                        </div>
                    </div>
                </div>
            </div>

            <!--list-->
            <div class="col-md-12 page_slider_content_list"  id="list">
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
                                <th style="border: 0;">{{cpgtxt_language}}</th>
                                <th style="border: 0;">{{cpgtxt_style}}</th>
                                <th style="text-align:right; padding-right: 40px;">
                                    <div class="list_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody id="awml_list_content_lists">
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 text-center" >
                        <div id="awml_listpage_nav" style="width: 100%;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--modal dlg-->
        <div class="modal fade" id="mySettingLangModal">
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
                                                <tbody id="awmlang_dlg_list">

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="bottom" style="text-align: center; padding-top: 0px;">
                                            <button type="button" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" style="" @click.stop="awmlang_add()">+ {{ cbtntxt_add }}</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="myListLangModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 450px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" style="color: #055ada;font-size: 16px;">{{ cpgtxt_addlanguage }}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="myMenuAddModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="row"  id="awml_list_dlg_err" style="display: none">
                            <div class="col">
                                error;
                            </div>
                        </div>
                        <div class="panel" id="tab1">
                            <div class="row" style="padding-bottom: 10px;">
                                <div class="col-md-12">
                                    <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"></div>
                                </div>
                                <div style="margin: 10px 10px 0px 10px;">
                                    <div class="row" style="padding: 10px">
                                        <div class="col-md-1">
                                            <div class="form-group">
                                                <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_name}}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-11" style="padding-left: 62px;">
                                            <div class="">
                                                <input type="text" class="form-control" style="width: 200px;"  placeholder="" id="awml_list_dlg_input_name" aria-describedby="basic-addon2">
                                            </div>
                                        </div>

                                        <div class="col-md-1">
                                            <div class="form-group">
                                                <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_language}}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-11" style="padding-left: 62px;">
                                            <label style="margin-top: 8px; color:#666;" id="awml_list_dlg_selected_country"></label>
                                        </div>
                                        <div class="col-md-12 text-left" style="margin-top: -10px; padding-left: 97px; padding-bottom: 10px;">
                                            <div class="btn btn-outline-light  dash-my-btn-0 text-center" style="width: 70px; padding: 10px 20px;" @click.stop="showEditLangDialog()">
                                                {{cbtntxt_edit}}
                                            </div>
                                        </div>
                                        <div class="col-md-12 " style="display: flex;">
                                            <div class="col-md-3" style="padding-left: 0px;">
                                                <div class="form-group">
                                                    <label style="margin-top: 4px; color:#666; width:100px;">{{cpgtxt_css}}</label>
                                                </div>
                                            </div>
                                            <div class="form-check col-md-4" style="line-height: 24px;">
                                                <div class="form-check-input rect-group" id="awml_list_dlg_chk_icon">
                                                    <div></div>
                                                </div>
                                                <label class="form-check-label m-l-10">{{cpgtxt_icon}}</label>
                                            </div>
                                            <div class="form-check col-md-4" style="line-height: 24px;">
                                                <div class="form-check-input rect-group" id="awml_list_dlg_chk_text">
                                                    <div></div>
                                                </div>
                                                <label class="form-check-label m-l-10">{{cbtntxt_text}}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 row modal-dialog-row" style="padding-left: 50px; padding-bottom: 10px; display: none;" id="awml_icon_select_container">
                                            <div class="col-md-2 page2_content_text">
                                                <div class="" style="width: 80px;">
                                                    <span>{{cpgtxt_icon}}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-10" style="">
                                                <select class="form-control float-left" id="awml_sel_icon_type" name="awml_sel_icon_type" style="width: 200px;" >
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12 row modal-dialog-row" style="padding-left: 50px; padding-bottom: 10px; display: none;" id="awml_text_select_container">
                                            <div class="col-md-2 page2_content_text">
                                                <div class="" style="width: 80px;">
                                                    <span>{{cbtntxt_text}}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-10" style="">
                                                <select class="form-control float-left" id="awml_sel_text_type" name="awml_sel_text_type" style="width: 200px;" >

                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12 row modal-dialog-row" style="padding-left: 50px; padding-bottom: 10px; display: none;" id="awml_text_sizecolor_select_container">
                                            <div class="col-md-2 page2_content_text">
                                                <div class="" style="width: 80px;">
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div class="col-md-5" style="">
                                                <select class="form-control float-left" id="awml_sel_text_size" name="awml_sel_text_size" style="width: 200px;" >
                                                    <option value="11">11pt</option>
                                                    <option value="12">12pt</option>
                                                    <option value="13">13pt</option>
                                                    <option value="14">14pt</option>
                                                    <option value="15">15pt</option>
                                                    <option value="16">16pt</option>
                                                    <option value="17">17pt</option>
                                                    <option value="18">18pt</option>
                                                    <option value="19">19pt</option>
                                                    <option value="20">20pt</option>
                                                    <option value="22">22pt</option>
                                                    <option value="25">25pt</option>
                                                    <option value="27">27pt</option>
                                                    <option value="30">30pt</option>
                                                </select>
                                            </div>
                                            <div class="col-md-1 selectedThemeColor" id="selected_color_image" style=" margin-left: 40px;margin-top: 8px; margin-bottom: 8px;"  @click.stop="ShowColorPalette()">
                                                <input type="hidden" value="" id="hiddenThemeColorPicker" >
                                            </div>
                                            <div class="col-md-2 text-center" style="  height: 40px; line-height: 40px; text-align: center;">
                                                    <span id="selected_color_value">#000000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div id="wwgm-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addListLangDataOne()">
                                        <span>+ {{ cbtntxt_add }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="myListEditLangModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" style="color: #055ada;font-size: 16px;">{{ cbtntxt_edit }} {{cpgtxt_language}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="myListEditLangModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel"  style="display: block;">
                            <form >
                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="table-responsive" style="max-height: 300px; overflow-y: auto; min-height: 100px;">
                                            <table role="grid" aria-describedby="sslang-list_info" class="table table-lg  no-footer">
                                                <tbody id="awmlang_editdlg_list">

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="bottom" style="text-align: center; padding-top: 0px;">
                                            <button type="button" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" style="" @click.stop="awmlang_add_to_list_dialog()">+ {{ cbtntxt_add }}</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end modal -->
    </div>
</template>
<style>
    .page1_content_content_bottom svg{
        color: #6b85e2;
    }
    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .awml_page_button{
        width: 120px;
    }
    #aqah_page1_content_side_bar_text,
    #aqah_page2_content_side_bar_text,
    #aqah_page3_content_side_bar_text
    {
        float: left;
        cursor: pointer;
        height: auto;
    }
    #addpic_btn{
        height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;
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
    .selectedThemeColor{
        width: 50px;
        border: 2px solid #888;
        background: black;
        cursor: pointer;
    }
    .modal-dialog {
        max-width: 550px; /* New width for default modal */
    }
</style>

<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import media_module from "../../assets/jsfunc/media_module";

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var tabstatus=0;
    var vueOBJ=null;
    var wwgfield='setting';
    var btntxt_save = "";
    var btntxt_delete = "";
    var btntxt_enable = "";
    var btntxt_disable = "";
    var btntxt_edit = "";
    var btntxt_change = "";
    var checked_del_items = new Array();
    var checked_list_del_items = new Array();
    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var coutryLists=[];
    var precountryLists=[];
    var current_selected_id = '0';
    var permss;

    // setting tab start /////////////////////////////////////////////////////////////////////////////////////////////
    function settingPageNavigation(totalpage) {
        var nav_tag='';
        nav_tag+='<nav aria-label="..." class="mb-4">';
        nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

        var disble="";
        if(pstart==1)
            disble="disabled"

        var prenum= parseInt(pstart) - 1;

        nav_tag+='<li class="page-item  '+disble+' ">';
        nav_tag+='<a class="page-link" href="#"  id="settingpagenavnum_' + prenum + '" >';
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
                oid="settingpagenavnum_" + pnum;

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
        nav_tag+='<a class="page-link" id="settingpagenavnum_' + nextnum + '" href="#">';
        nav_tag+='<i class="ti-angle-right"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';
        nav_tag+='</ul>';
        nav_tag+='</nav>';

        $('#awml_settingpage_nav').html(nav_tag);

        /* events { */
        $('a[id^="settingpagenavnum_"]').click(function(){
            var oid = $(this).attr("id");
            pstart = oid.split('_')[1];
            if(tabstatus == 0) {
                getSettingLangData();
            }else if(tabstatus == 1) {
                getListLangData();
            }
        });
    }

    function  getSettingLangData() {
        $.ajax({
            url: 'admin.getAWMLanguage',
            data: {
                start:pstart,
                cnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var prelists = data.prelists;
                    if(prelists !== null && prelists != "") {
                        precountryLists=[];
                        for(var i = 0; i < prelists.length; i++) {
                            var obj = prelists[i];
                            precountryLists[i] = obj;
                        }
                    }
                    if(lists !== null && lists != "") {
                        settingContentList(lists);
                    }
                    else
                        $('#awml_setting_content_lists').html('');
                    var total = data.total;
                    if (total <= 0) {
                        $('#awml_settingpage_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    settingPageNavigation(totalpage);
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

    function  saveSettingLangChanges(id, status) {
        if(permss.pdelete == 0 && status == "delete"){
            myjs.data.showAlert('pgtxt_notpermission');
            return;
        }
        if(permss.pwrite == 0 && status != "delete"){
            myjs.data.showAlert('pgtxt_notpermission');
            return;
        }

        $.ajax({
            url: 'admin.saveAWMLanguageChanges',
            data: {
                id: id,
                status: status
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    pstart = 1;
                    getSettingLangData();
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function awmlangAddonDlg()
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
            var check="";
            for (var k = 0; k < precountryLists.length; k++)
            {
                var oneobj = precountryLists[k];
                var iso=oneobj.iso;
                var dialcd=oneobj.dialcode;
                var temp=iso+'-'+dialcd;
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

        $('#awmlang_dlg_list').html(c_tag);
    }

    function awmlangEditonDlg()
    {
        var c_tag="";
        var j=0;
        for (var i = 0; i < precountryLists.length; i++)
        {
            var oneobj = precountryLists[i];
            var name = oneobj.name;
            var dialCode= oneobj.dialcode;
            var iso2 = oneobj.iso;
            var status = oneobj.status;
            var ckid = iso2+'-'+dialCode;
            var check="";
            if (status == 'enable')  {
                if(j == 0)
                    c_tag +='<tr role="row" class="odd">';
                c_tag +='<td style="width:50%; border-bottom: 1px solid #dee2e6;">';
                c_tag +='<div class="form-check form-check-inline">';
                c_tag +='<input class="form-check-input m-r-10" data-country="'+name+'" type="checkbox" '+check+' id="oneeditlangCheckbox_'+ckid+'" value="">';
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
        }

        c_tag +='<tr role="row" class="odd"> <td style="padding: 0 0.75rem !important;width:50%;">&nbsp;</td>';
        c_tag +='<td  style="padding: 0 0.75rem !important;width:50%;">&nbsp;</td></tr>';

        $('#awmlang_editdlg_list').html(c_tag);
    }
    function hideAddLangDialog() {
        $("#mySettingLangModal").modal('hide');
    }

    function settingContentList(lists) {
        $('#awml_setting_content_lists').html('');
        var tags = '';
        for(var i = 0; i < lists.length; i++){
            var obj = lists[i];
            var id = lists[i].id;
            var name = lists[i].name;
            var status = lists[i].status;

            tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="subcontCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="setting_language_list_edit-'+id+'" name="setting_language_list_edit-'+id+'">';
            tags += '               <option value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            if (status != null && status != "" && status == "enable")
                tags += '<option value="enable" selected class="data-ajax" data-ajax="btntxt_enable">'+btntxt_enable+'</option>';
            else
                tags += '<option value="enable" class="data-ajax" data-ajax="btntxt_enable">'+btntxt_enable+'</option>';

            if (status != null && status != "" && status == "disable")
                tags += '<option value="disable" selected class="data-ajax" data-ajax="btntxt_disable">'+btntxt_disable+'</option>';
            else
                tags += '<option value="disable" class="data-ajax" data-ajax="btntxt_disable">'+btntxt_disable+'</option>';

            if (status != null && status != "" && status == "delete")
                tags += '<option value="delete" selected class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            else
                tags += '<option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#awml_setting_content_lists').html(tags);

        $('input[id^="subcontCheckbox_"]').change(function() {
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

        $('select[id^="setting_language_list_edit-"]').change(function(){
            var id = $(this).attr("id");
            var event_id = id.split('-')[1];
            var sel_val = $(this).val();
            saveSettingLangChanges(event_id, sel_val);
        });
    }

    function initUIEvent() {
        $('.setting_selected_all_delete').click(function () {
            if (permss.pdelete == 0) {
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            if(checked_del_items.length > 0) {
                $.ajax({
                    url: 'admin.deleteSeveralAWMLanguages',
                    data: {
                        ids: checked_del_items,
                    },
                    type: 'POST',
                    success: function (data) {
                        if (data.msg === "ok") {
                            checked_del_items = new Array();
                            pstart = 1;
                            getSettingLangData();
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
        $('.list_selected_all_delete').click(function () {
            if (permss.pdelete == 0) {
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            if(checked_list_del_items.length > 0) {
                $.ajax({
                    url: 'admin.deleteSeveralAWMListLanguages',
                    data: {
                        ids: checked_list_del_items,
                    },
                    type: 'POST',
                    success: function (data) {
                        if (data.msg === "ok") {
                            checked_list_del_items = new Array();
                            pstart = 1;
                            getListLangData();
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

        $('#awml_list_dlg_chk_icon').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('#awml_icon_select_container').css('display', 'none');
            } else {
                $(this).addClass('active');
                $('#awml_icon_select_container').css('display', 'flex');
            }
        });
        $('#awml_list_dlg_chk_text').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('#awml_text_select_container').css('display', 'none');
                $('#awml_text_sizecolor_select_container').css('display', 'none');
            } else {
                $(this).addClass('active');
                $('#awml_text_select_container').css('display', 'flex');
                $('#awml_text_sizecolor_select_container').css('display', 'flex');
            }
        });
        $('#awml_sel_text_type').change(function(){
            var value=$(this).val();
            var min=value.split("-")[0];
            var max = value.split("-")[1];
            initFontSizeSelect(min, max);
        });
    }
    // setting tab end ///////////////////////////////////////////////////////////////////////////////////////////////

    // list tab start /////////////////////////////////////////////////////////////////////////////////////////////
    function  getListLangData() {
        $.ajax({
            url: 'admin.getAWMListData',
            data: {
                start:pstart,
                cnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        listContentList(lists);
                    }
                    else
                        $('#awml_list_content_lists').html('');
                    var total = data.total;
                    if (total <= 0) {
                        $('#awml_listpage_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    listPageNavigation(totalpage);
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

    function listContentList(lists) {
        $('#awml_list_content_lists').html('');
        var tags = '';
        for(var i = 0; i < lists.length; i++){
            var obj = lists[i];
            var id = obj.id;
            var name = obj.name;
            var languagenames = obj.languagenames;
            var style = obj.style;

            tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="listcontCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>' + languagenames + '</td>';
            if (style == 0) {
                tags += '   <td>Icon</td>';
            }
            if (style == 1) {
                tags += '   <td>Text</td>';
            }
            if (style == 2) {
                tags += '   <td>Icon&Text</td>';
            }
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="list_language_list_edit-'+id+'" name="list_language_list_edit-'+id+'">';
            tags += '               <option value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#awml_list_content_lists').html(tags);

        $('input[id^="listcontCheckbox_"]').change(function() {
            var id = $(this).attr("id");
            var del_id = id.split('_')[1];
            if ($(this).is(':checked')) {
                checked_list_del_items.push(del_id);
            }
            else{
                const idx = checked_list_del_items.indexOf(del_id);
                if (idx > -1)
                    checked_list_del_items.splice(idx, 1);
            }
        });

        $('select[id^="list_language_list_edit-"]').change(function(){
            var id = $(this).attr("id");
            var event_id = id.split('-')[1];
            var sel_val = $(this).val();
            if (sel_val == 'delete') {
                if(permss.pdelete == 1) {
                    deleteListLangData(event_id);
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
            if (sel_val == 'change') {
                if(permss.pwrite == 1) {
                    current_selected_id = event_id;
                    showListLangDialog();
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }

        });
    }

    function listPageNavigation(totalpage) {
        var nav_tag='';
        nav_tag+='<nav aria-label="..." class="mb-4">';
        nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';
        var disble="";
        if(pstart==1)
            disble="disabled"
        var prenum= parseInt(pstart) - 1;
        nav_tag+='<li class="page-item  '+disble+' ">';
        nav_tag+='<a class="page-link" href="#"  id="listpagenavnum_' + prenum + '" >';
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
                oid="listpagenavnum_" + pnum;
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
        nav_tag+='<a class="page-link" id="listpagenavnum_' + nextnum + '" href="#">';
        nav_tag+='<i class="ti-angle-right"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';
        nav_tag+='</ul>';
        nav_tag+='</nav>';
        $('#awml_listpage_nav').html(nav_tag);
        /* events { */
        $('a[id^="listpagenavnum_"]').click(function(){
            var oid = $(this).attr("id");
            pstart = oid.split('_')[1];
            if(tabstatus == 0) {
                getSettingLangData();
            }else if(tabstatus == 1) {
                getListLangData();
            }
        });
    }

    function colorButtons(){
        const hiddenThemeColorPicker = document.getElementById('hiddenThemeColorPicker');
        let pickerLeft = new ColorPicker(hiddenThemeColorPicker, '#ffffff');
        hiddenThemeColorPicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#hiddenThemeColorPicker').val(color);
            document.getElementById("selected_color_value").innerHTML =color;
            var div = document.getElementById( 'selected_color_image' );
            div.style.backgroundColor = color;
        });
    }

    function deleteListLangData(id) {
        $.ajax({
            url: 'admin.deleteAWMListData',
            data: {
                id: id
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    pstart = 1;
                    getListLangData();
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function showListLangDialog() {
        $('#awml_list_dlg_err').text('').css({'display':'none'});
        initTextFieldData();
        initIconFieldData();
        initListDialogContent();
        $('#myListLangModal').modal('show');
    }

    function initTextFieldData() {
        $.ajax({
            url: 'admin.getSystemTextStyleList',
            data: {
            },
            type: 'POST',
            success: function (data) {
                var tags = ''
                if (data.msg === "ok") {
                    var lists = data.list;
                    if (lists.length > 0) {
                        $('#awml_sel_text_type').html('');
                        for (var i = 0; i < lists.length; i++) {
                            var name = lists[i].name;
                            var id = lists[i].id;
                            var max = lists[i].maxvalue;
                            var min = lists[i].minvalue;
                            if (i == 0) {
                                initFontSizeSelect(min, max);
                            }
                            var tvalue = min + '-' + max;
                            tags += '<option value="' + tvalue + '">' + name +'</option>';
                        }
                        $('#awml_sel_text_type').html(tags);
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

    function initIconFieldData() {
        $.ajax({
            url: 'admin.getSystemLogoStyleList',
            data: {
            },
            type: 'POST',
            success: function (data) {
                var tags = ''
                if (data.msg === "ok") {
                    var lists = data.list;
                    if (lists.length > 0) {
                        $('#awml_sel_icon_type').html('');
                        for (var i = 0; i < lists.length; i++) {
                            var name = lists[i].name;
                            var id = lists[i].id;
                            var size = lists[i].size;
                            var style = lists[i].style;
                            var capacity = lists[i].capacity;
                            var imgtype = lists[i].imgtype;
                            var tvalue = name + '#' + style + '#' + size + '#' + capacity ;
                            tags += '<option value="' + tvalue + '">' + name +'</option>';
                        }
                        $('#awml_sel_icon_type').html(tags);
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

    function initListDialogContent() {
        if (current_selected_id == '0') {
            $('#awml_list_dlg_input_name').val('');
            $('#awml_list_dlg_selected_country').text('');
            $('#awml_list_dlg_chk_icon').removeClass('active');
            $('#awml_list_dlg_chk_text').removeClass('active');
            $('#awml_icon_select_container').css('display', 'none');
            $('#awml_text_select_container').css('display', 'none');
            $('#awml_text_sizecolor_select_container').css('display', 'none');
        } else {
            $.ajax({
                url: 'admin.getAWMListDataFromId',
                data: {
                    id:current_selected_id,
                },
                type: 'POST',
                success: function (data) {
                    var tags = ''
                    if (data.msg === "ok") {
                        var list = data.list;
                        var name = list.name;
                        var languagenames = list.languagenames;
                        var style =parseInt(list.style) ;
                        $('#awml_list_dlg_input_name').val(name);
                        $('#awml_list_dlg_selected_country').text(languagenames);
                        if (style == 0) {
                            $('#awml_list_dlg_chk_icon').addClass('active');
                            $('#awml_list_dlg_chk_text').removeClass('active');
                            $('#awml_icon_select_container').css('display', 'flex');
                            $('#awml_text_select_container').css('display', 'none');
                            $('#awml_text_sizecolor_select_container').css('display', 'none');
                        }
                        else if (style == 1) {
                            $('#awml_list_dlg_chk_icon').removeClass('active');
                            $('#awml_list_dlg_chk_text').addClass('active');
                            $('#awml_icon_select_container').css('display', 'none');
                            $('#awml_text_select_container').css('display', 'flex');
                            $('#awml_text_sizecolor_select_container').css('display', 'flex');
                        }
                        else if (style == 2) {
                            $('#awml_list_dlg_chk_icon').addClass('active');
                            $('#awml_list_dlg_chk_text').addClass('active');
                            $('#awml_icon_select_container').css('display', 'flex');
                            $('#awml_text_select_container').css('display', 'flex');
                            $('#awml_text_sizecolor_select_container').css('display', 'flex');
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

    function initFontSizeSelect(minval, maxval) {
        var tmin = parseInt(minval);
        var tmax = parseInt(maxval);
        var limit = tmax + 1;
        var tags = '';
        // $('#awml_sel_text_size').html('');
        for (var i = tmin; i < limit; i++) {
            var name = i + ' pt';
            var tvalue = i;
            tags += '<option value="' + tvalue + '">' + name +'</option>';
        }
        // $('#awml_sel_text_size').html(tags);

    }

    export default {
        name: "AppsWebSiteModuleWeblanguage",
        data(){
            return {
                pageid:'apps-website-module-weblanguage-fav',
                mu_apps:'',
                musu_apps_website:'',
                mususu_apps_website_appear:'',
                mususu_apps_website_module:'',
                musususu_apps_website_appear_head:'',
                musususu_apps_website_module_weblanguage:'',
                btntxt_add:'',
                btntxt_edit:'',
                btntxt_enable:'',
                btntxt_disable:'',
                btntxt_save:'',
                btntxt_delete:'',
                btntxt_change:'',
                btntxt_topheader:'',
                btntxt_header:'',
                btntxt_setting:'',
                btntxt_subheader:'',
                btntxt_browse:'',
                btntxt_text:'',
                pgtxt_category:'',
                pgtxt_background:'',
                pgtxt_list:'',
                pgtxt_name:'',
                pgtxt_language:'',
                pgtxt_css:'',
                pgtxt_icon:'',
                pgtxt_operation:'',
                pgtxt_style:'',
                pgtxt_titleontheleft:'',
                pgtxt_titleontheright:'',
                pgtxt_breadcrumbsontheleft:'',
                pgtxt_breadcrumbsontheright:'',
                pgtxt_titlebreadcrumbsontheleft:'',
                pgtxt_titlebreadcrumbsontheright:'',
                pgtxt_titlebreadcrumbsonthemiddle:'',
                pgtxt_hide:'',
                pgtxt_fixed:'',
                pgtxt_breadcrumbs:'',
                pgtxt_page:'',
                pgtxt_title:'',
                pgtxt_yes:'',
                pgtxt_no:'',
                pgtxt_padding:'',
                pgtxt_use:'',
                pgtxt_value:'',
                pgtxt_swidth:'',
                pgtxt_or:'',
                pgtxt_example:'',
                pgtxt_readcontentfields:'',
                pgtxt_specifiedsize:'',
                pgtxt_nogreaterthan:'',
                pgtxt_addlanguage:'',
                pgtxt_color:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        computed: {
            cmususu_apps_website_appear:function () {
                return this.mususu_apps_website_appear;
            },
            cmususu_apps_website_module:function () {
                return this.mususu_apps_website_module;
            },
            cmusususu_apps_website_appear_head:function () {
                return this.musususu_apps_website_appear_head;
            },
            cmusususu_apps_website_module_weblanguage:function () {
                return this.musususu_apps_website_module_weblanguage;
            },
            cmu_apps:function () {
                return this.mu_apps;
            },
            cmusu_apps_website:function () {
                return this.musu_apps_website;
            },
            cbtntxt_add:function () {
                return this.btntxt_add;
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit;
            },
            cbtntxt_enable:function () {
                return this.btntxt_enable;
            },
            cbtntxt_disable:function () {
                return this.btntxt_disable;
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
            cbtntxt_setting:function () {
                return this.btntxt_setting;
            },
            cbtntxt_subheader:function () {
                return this.btntxt_subheader;
            },
            cbtntxt_browse:function () {
                return this.btntxt_browse;
            },
            cbtntxt_text:function () {
                return this.btntxt_text;
            },
            cpgtxt_category:function () {
                return this.pgtxt_category;
            },
            cpgtxt_background:function () {
                return this.pgtxt_background;
            },
            cpgtxt_list:function () {
                return this.pgtxt_list;
            },
            cpgtxt_name:function () {
                return this.pgtxt_name;
            },
            cpgtxt_language:function () {
                return this.pgtxt_language;
            },
            cpgtxt_css:function () {
                return this.pgtxt_css;
            },
            cpgtxt_icon:function () {
                return this.pgtxt_icon;
            },
            cpgtxt_operation:function () {
                return this.pgtxt_operation;
            },
            cpgtxt_style:function () {
                return this.pgtxt_style;
            },
            cpgtxt_titleontheleft:function () {
                return this.pgtxt_titleontheleft;
            },
            cpgtxt_titleontheright:function () {
                return this.pgtxt_titleontheright;
            },
            cpgtxt_breadcrumbsontheleft:function () {
                return this.pgtxt_breadcrumbsontheleft;
            },
            cpgtxt_breadcrumbsontheright:function () {
                return this.pgtxt_breadcrumbsontheright;
            },
            cpgtxt_titlebreadcrumbsontheleft:function () {
                return this.pgtxt_titlebreadcrumbsontheleft;
            },
            cpgtxt_titlebreadcrumbsontheright:function () {
                return this.pgtxt_titlebreadcrumbsontheright;
            },
            cpgtxt_titlebreadcrumbsonthemiddle:function () {
                return this.pgtxt_titlebreadcrumbsonthemiddle;
            },
            cpgtxt_hide:function () {
                return this.pgtxt_hide;
            },
            cpgtxt_fixed:function () {
                return this.pgtxt_fixed;
            },
            cpgtxt_breadcrumbs:function () {
                return this.pgtxt_breadcrumbs;
            },
            cpgtxt_page:function () {
                return this.pgtxt_page;
            },
            cpgtxt_title:function () {
                return this.pgtxt_title;
            },
            cpgtxt_yes:function () {
                return this.pgtxt_yes;
            },
            cpgtxt_no:function () {
                return this.pgtxt_no;
            },
            cpgtxt_padding:function () {
                return this.pgtxt_padding;
            },
            cpgtxt_use:function () {
                return this.pgtxt_use;
            },
            cpgtxt_value:function () {
                return this.pgtxt_value;
            },
            cpgtxt_swidth:function () {
                return this.pgtxt_swidth;
            },
            cpgtxt_or:function () {
                return this.pgtxt_or;
            },
            cpgtxt_example:function () {
                return this.pgtxt_example;
            },
            cpgtxt_readcontentfields:function () {
                return this.pgtxt_readcontentfields;
            },
            cpgtxt_specifiedsize:function () {
                return this.pgtxt_specifiedsize;
            },
            cpgtxt_nogreaterthan:function () {
                return this.pgtxt_nogreaterthan;
            },
            cpgtxt_addlanguage:function () {
                return this.pgtxt_addlanguage
            },
            cpgtxt_color:function () {
                return this.pgtxt_color;
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },


            contentchange: function () {
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
            permss = myjs.data.permissionDefinition();
            /* fav part*/
            btntxt_save = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_save');
            btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
            btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
            btntxt_enable = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_enable');
            btntxt_disable = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_disable');
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
                this.sliderTabs();
                tabstatus = 0;
                getSettingLangData();
                initUIEvent();
                colorButtons();
            }//initpage
            ,
            loaddata(){

            },
            ShowColorPalette(){
                $('#hiddenThemeColorPicker').trigger('click');
            },
            addDlgCategory(){

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

                    if(subid=='setting')
                    {
                        tabstatus=0;
                        wwgfield = 'setting';
                        getSettingLangData();
                    }
                    else if(subid=='list'){
                        tabstatus=1;
                        wwgfield = 'list';
                        getListLangData();
                    }
                });
            },
            showAddLanguageDialog(){
                if(permss.pcreate == 1) {
                    if (tabstatus == 0) {
                        $('#mySettingLangModal').modal('show');
                        awmlangAddonDlg();
                    } else if (tabstatus == 1) {
                        current_selected_id = '0';
                        showListLangDialog();
                    }
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            showEditLangDialog(){
                awmlangEditonDlg();
                $('#myListLangModal').modal('hide');
                $('#myListEditLangModal').modal('show');
            },
            awmlang_add()
            {
                let idlist=[];
                $('input:checkbox[id^="onelangCheckbox_"]:checked').each(function(){
                    var oneidstr=$(this).attr('id');
                    var cname=$(this).attr('data-country');
                    var t_id = oneidstr.split('_')[1];
                    t_id +='-'+cname;
                    idlist.push(t_id);
                });
                if(idlist.length > 0){
                    let postData = {
                        langlist: idlist
                    };
                    axios.post('admin.saveAWMLanguage', postData)
                        .then((response) => {
                            let msg = response.data.msg;
                            if(msg =="ok"){
                                if(response.data.cnt>0)
                                {
                                    var addlist = response.data.addlist;
                                    hideAddLangDialog();
                                    getSettingLangData();
                                }
                            }
                        }).catch(function (error) {
                        console.log(error);
                    })
                }
            },

            awmlang_add_to_list_dialog()
            {
                let idlist=[];
                let countrynamelist = [];
                $('input:checkbox[id^="oneeditlangCheckbox_"]:checked').each(function(){
                    var oneidstr=$(this).attr('id');
                    var cname=$(this).attr('data-country');
                    var t_id = oneidstr.split('_')[1];
                    t_id +='-'+cname;
                    countrynamelist.push(cname);
                    idlist.push(t_id);
                });
                $('#awml_list_dlg_selected_country').text(countrynamelist);
                $('#myListEditLangModal').modal('hide');
                $('#myListLangModal').modal('show');
                // showListLangDialog();
            },
            addListLangDataOne()
            {
                var name = $('#awml_list_dlg_input_name').val();
                if (name == null || name =='') {
                    $('#awml_list_dlg_err').text('Please select name!').css({'display':'block','color':'#d41b11'});
                    return;
                }
                var languagenames = $('#awml_list_dlg_selected_country').text();
                if (languagenames == null || languagenames =='') {
                    $('#awml_list_dlg_err').text('Please select language!').css({'display':'block','color':'#d41b11'});
                    return;
                }
                var style = -1;
                if ($('#awml_list_dlg_chk_icon').hasClass('active')) {
                    style = 0;
                }
                if ($('#awml_list_dlg_chk_text').hasClass('active')) {
                    style = 1;
                }
                if ($('#awml_list_dlg_chk_text').hasClass('active') && $('#awml_list_dlg_chk_icon').hasClass('active')) {
                    style = 2;
                }
                if (style == -1 ) {
                    $('#awml_list_dlg_err').text('Please select css!').css({'display':'block','color':'#d41b11'});
                    return;
                }
                var icon_select_val = $('#awml_sel_icon_type').val();
                var temparr = icon_select_val.split('#');
                var icon_name = temparr[0];
                var icon_style = temparr[1];
                var icon_size = temparr[2];
                var icon_capacity = temparr[3];
                var text_fontsize = $('#awml_sel_text_size').val();
                var text_color = $('#selected_color_value').html();

                let postData = {
                    id: current_selected_id,
                    name: name,
                    style: style,
                    languagenames: languagenames,
                    icon_name: icon_name,
                    icon_style: icon_style,
                    icon_size: icon_size,
                    icon_capacity: icon_capacity,
                    text_color: text_color,
                    text_fontsize: text_fontsize
                };
                axios.post('admin.saveAWMListData', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        if(msg =="ok"){
                            $('#awml_list_dlg_err').text('Success Save in DB!').css({'display':'block','color':'#0BC334'});
                            setTimeout(function () {
                                $("#myListLangModal").modal('hide');
                            },1000);
                            getListLangData();
                        } else if (msg == 'du') {
                            $('#awml_list_dlg_err').text('Name already exist!').css({'display':'block','color':'#d41b11'});
                        } else if (msg == 'err') {
                            $('#awml_list_dlg_err').text('Error insert in DB!').css({'display':'block','color':'#d41b11'});
                        }
                    }).catch(function (error) {
                    console.log(error);
                })
            },
        }//method
    }
</script>
