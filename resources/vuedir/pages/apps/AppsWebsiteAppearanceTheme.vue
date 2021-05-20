<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_apps_website_appear_theme}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_apps}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_apps_website}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_website_appear}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_apps_website_appear_theme}}
                          <a href="#" id="apps-website-appearance-theme-fav" data-status="off" data-page-info="Theme_apps-website-appearance-theme">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12" style="margin-bottom: 30px;">
                    <div class="page1_content_side_bar" style="display: flex;">
                        <div class="awat_page_button">
                            <div id="awa_page1_content_side_bar_text" class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="color">{{cpgtxt_color}}</div>
                        </div>
                        <div class="awat_page_button">
                            <div id="awa_page2_content_side_bar_text" class="page1_content_side_bar_text" data-target="boxed">{{cbtntxt_boxed}}</div>
                        </div>
                    </div>
                </div>
                <!-- color tab -->
                <div class="col-md-12 page_slider_content_list active"  id="color">
                    <div style="text-align: right; margin-bottom: 25px;">
                        <div id="themecoloraddbutton" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="AddColorPalette()">
                            <span>+ {{ cbtntxt_add }}</span>
                        </div>
                        <input type="hidden" value="" id="hiddenThemeColorPicker" >
                    </div>
                    <div class="card">
                        <div class="card-body" style="padding: 20px;"><h6 class="card-title m-b-20">{{cmusu_system_theme}} {{cpgtxt_color}} {{cpgtxt_list}}</h6>
                            <div class="row" style="margin-left: 50px; margin-top: 30px;">
                                <div class="d-flex flex-wrap" id="addedSystemThemeColorList" style="display: flex;">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- boxed tab -->
                <div class="col-md-12 page_slider_content_list"  id="boxed">
                    <div style="text-align: right; margin-bottom: 25px;">
                        <div id="awat_addboxed" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="AddBoxedBtn()">
                            <span>+ {{ cbtntxt_add }}</span>
                        </div>
                    </div>
                    <div class="page1_content_content_bar">
                        <div class="page1_content_content_title" style="padding: 0px; border: 0px;">
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
                                    <th style="border: 0;">{{cpgtxt_padding}}</th>
                                    <th style="text-align:right; padding-right: 40px;">
                                        <div id="boxed_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody id="awa_boxed_content_lists">

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-md-12" id="ssmu_page_nav">

                        </div>
                    </div>
                </div>
            </div>

            <!-- Add Boxed Modal start -->
            <div class="modal fade" id="ModalAddBoxedContent">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 600px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="Modal_BoxedContent_Title">{{cbtntxt_add}} {{cbtntxt_boxed}}</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body" id="AddBoxedContentModalBody" style="padding: 0px 0rem 2rem">
                            <div class="col-md-12" style="margin-top: 20px;">
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-2">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_name}}</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" class="form-control border-input-text" id="Modal_Boxed_Name" name="Modal_Boxed_Name">
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-2">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_padding}}</label>
                                    </div>
                                    <div class="col-md-5">
                                        <input type="text" class="form-control border-input-text" id="Modal_Boxed_padding" name="Modal_Boxed_padding">
                                    </div>
                                    <div style="font-size: 11px;">
                                        <div>
                                            <font style="color: #b0b0af;">{{cpgtxt_use}} {{cpgtxt_value}} {{cpgtxt_swidth}}</font>&nbsp;
                                            <font style="color: #000;">px</font>&nbsp;
                                            <font style="color: #b0b0af;">{{cpgtxt_or}}</font>&nbsp;
                                            <font style="color: #000;">em</font>
                                        </div>
                                        <div>
                                            <font style="color: #b0b0af;">{{cpgtxt_example}}:</font>&nbsp;
                                            <font style="color: #000;">20px 0</font>&nbsp;
                                            <font style="color: #b0b0af;">{{cpgtxt_or}}</font>&nbsp;
                                            <font style="color: #000;">20px 0 30px 0</font>&nbsp;
                                            <font style="color: #b0b0af;">{{cpgtxt_or}}</font>&nbsp;
                                            <font style="color: #000">2em 0</font>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12" style="text-align: center;">
                                    <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addBoxedContentBtn()">
                                        <span>+ {{cbtntxt_add}} </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Add Boxed Modal end -->
            <!--Add Color Modal part-->
            <div class="modal fade" id="ModalAddColorContent" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <!-- Modal content-->
                    <div class="modal-content color_first-content" style="display:block;">
                        <div class="modal-header">
                            <div class="modal-title color-add-letter" style="font-size: 20px; font-weight: 600;display: block">{{cbtntxt_add}} {{cpgtxt_color}}</div>
                            <div class="modal-title color-up-letter" style="font-size: 20px; font-weight: 600;display: none">{{cbtntxt_change}} {{cpgtxt_color}}</div>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body pt-0">
                            <div class="row"  id="dlgErr" style="display: none">
                                <div class="col">
                                    error;
                                </div>
                            </div>
                            <div class="page2_modal page2_content_text p-0">
                                <div class="container-fluid p-0 m-0">
                                    <div class="row m-2 mt-3">
                                        <label class="col-4 col-form-label">
                                            {{cpgtxt_choose}} {{cpgtxt_color}}
                                        </label>
                                        <div style="display: flex; line-height: 30px;">
                                            <input type="hidden" name="modalcolorpicker_val" id="modalcolorpicker_val" value="#ffffff">
                                            <div id="modalcolorpicker" class="m-r-15" data-color="#ffffff"></div>
                                            <div id="modalcolorpicker_value">#ffffff</div>
                                        </div>
                                    </div>
                                    <div class="row m-2" style="min-height: 80px;border:1px solid rgb(223, 221, 221);border-radius: 20px">
                                        <label class="col-3 col-form-label waaup-theme-color" style="line-height:3.5rem">
                                            {{cpgtxt_translation}}
                                        </label>
                                        <div class="col-9 d-flex flex-wrap" id="dlg-color-lang-list">
                                            <!--
                                             <div class="m-2" ><a class="color-disable">chinese</a></div>
                                             -->
                                        </div>
                                    </div>
                                    <div class="row m-2 mt-3">
                                        <label class="col-4 col-form-label">
                                            {{cpgtxt_color}} {{cpgtxt_name}}
                                        </label>
                                        <div class="col-8">
                                            <input type="text" class="form-control"  name="color_add_name" id="color_add_name" placeholder="" aria-label="content input" style="background: rgb(234, 234, 234); border-radius: 20px">
                                        </div>
                                    </div>
                                    <div class="row m-2 mt-3" id="color_add_span_messagebox_container" style="display:none;">
                                        <div class="col-12">
                                            <div  style="margin-bottom: 0px; height: auto; background-color: #ededed; line-height: 28px; border-radius: 20px; padding: 0 20px;">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-inline="false" data-icon="mi:circle-warning" class="iconify" style="font-size: 22px; transform: rotate(360deg);">
                                                    <g fill="none">
                                                        <path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"></path>
                                                        <path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z" fill="currentColor"></path>
                                                        <path d="M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"></path>
                                                    </g>
                                                </svg>
                                                <span id="color_add_span_messagebox"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="height: auto">
                            <button type="button" class="btn page1_custom_select_btn" id="addDlg_btn" @click="modal_nextstep">
                                <span class="iconify" data-inline="false" data-icon="gg:add" style="font-size: 24px;"></span>
                                {{cbtntxt_nextstep}}
                            </button>
                        </div>
                    </div>

                    <div class="modal-content color_next-content" style="display: none;">
                        <div class="modal-header">
                            <div class="wes-theme-color" style="font-size: 20px; font-weight: 600;">{{cpgtxt_confirm}}</div>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body pt-0">
                            <input type="hidden" name="colorchangeid" id="colorchangeid" value="">
                            <div class="row"  id="dlgNextErr" style="display: none;padding: 5px 10px 5px 20px;">
                                error
                            </div>
                            <div class="page2_modal page2_content_text p-0">
                                <div class="container-fluid p-0 m-0">
                                    <div class="row m-2" id="dlg-color-next-lang-list">
                                        <!-- <div class="col-3 wes-theme-color">
                                             Chinese
                                         </div>
                                         <div class="col-9">
                                             Chinese
                                         </div>    -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="height: auto;justify-content:center">
                            <button type="button" class="btn page1_custom_select_btn mr-2" id="addNextDlg_btn" @click="addColorModalToNextOne">
                                + {{cbtntxt_add}}
                            </button>
                            <button type="button" class="btn page1_custom_select_btn mr-2 " id="changeNextDlg_btn" @click="changeColorModalToNextOne">
                                {{cbtntxt_change}}
                            </button>
                            <button type="button" class="btn page1_custom_select_btn" id="cancelNextDlg_btn" @click="cancelColorModalToNextOne">
                                {{cbtntxt_cancel}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Add Color Modal end-->
        </div>
</template>
<style>
    .table.table-lg td {
        padding: 0.7rem 0.75rem;
    }
    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .delete-theme-color{
        cursor: pointer;
    }
    .selectedThemeColor{
        width: 50px;
        border: 2px solid #888;
        background: #ffffff;
    }
    #awa_page1_content_side_bar_text,
    #awa_page2_content_side_bar_text
    {
        float: left;
        cursor: pointer;
        height: auto;
    }
    .awat_page_button{
        width: 80px;
    }
    #dlg-color-lang-list div{
        line-height:20px;
    }
    #dlg-color-lang-list a{
        text-decoration:underline !important;
        padding: 3px;
        cursor: pointer;
        color:#b9b9b9;
    }
    #dlg-color-lang-list a.enable{
        color:rgba(0, 0, 0, 0.7);
    }
    #dlg-color-lang-list a.active{
        color:rgba(0, 0, 0, 1);
        font-weight: bold;
    }
    .waaup-theme-color{
        color: #d8be8f !important;
    }
    #modalcolorpicker{
        width: 70px;
        height: 25px;
        cursor: pointer;
        background: #ffffff;
        border: 1px solid #888888;
    }
</style>
<script>
    import axios from 'axios';
    import nav_module from "../../assets/jsfunc/nav_module";
    import lang_module from "../../assets/jsfunc/lang_module";
    import myjs from "../../assets/jsfunc/mjs_module";

    let vueOBJ=null;
    var btntxt_edit = "";
    var btntxt_change = "";
    var btntxt_delete = "";
    var tabstatus = 0;
    var colum_index = 0;
    var tagCount = 0;
    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var checked_del_items = new Array();
    var is_edit = false;
    var edit_id = "";
    var permss;

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var email = nav_module.data.jsonparse(window.Laravel.userinfo).email;
    var pwd = nav_module.data.jsonparse(window.Laravel.userinfo).password;
    var stored_langs='';
    var color_sel_lang={};
    var lang_name = '';
    var page_lang = '';

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
            pstart = oid.split('_')[1];
            if(tabstatus == 1) {
                getBoxedList();
            }
        });
    }

    function colorButtons(){
        const modalcolorpicker = document.getElementById('modalcolorpicker');
        let pickerLeft = new ColorPicker(modalcolorpicker, '#ffffff');
        modalcolorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#modalcolorpicker_value').text(color);
            $('#modalcolorpicker_val').val(color);
        });
    }
    function DeleteColorEvent() {
        $('span[id^="delcolor_"]').click(function () {
            if(permss.pdelete == 1)
            {
                var colorid = $(this).attr("data-id");
                $.ajax({
                    url: 'admin.delAWAThemeColor',
                    type: 'POST',
                    data:{
                        userid:userid,
                        colorid:colorid
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok") {
                            var color_list = data.list.color_info;
                            //var sel_color = data.list.sel_color;
                            getColorList(color_list);
                        }
                        else
                            alert(data.msg);

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
    function getColorList(jsonstr) {
        $('#addedSystemThemeColorList').html('');
        if (jsonstr != ''){
            var color_list = $.parseJSON(jsonstr);
            var tags = '';

            for (var j = 0; j < color_list.length; j++) {
                var obj = color_list[j];
                var cid = obj.colorid;
                var color = obj.colorinfo;
                var color_cont = obj.contentdata;
                var color_name = color_cont[lang_name];

                tags += '<div style="margin-bottom: 20px;">';
                tags += '<div id="addedcolor_' + j + '" style="display: flex;flex-direction: row; height: 20px; margin-right: 20px;">';
                tags += '   <div id="addcolor_' + j + '" class="selectedThemeColor" data-color="'+color+'" style="background: ' + color + '"></div>';
                tags += '   <div style="margin-left: 10px;"><span id="colorname_' + j + '" data-id="' + cid + '">'+color_name+'</span></div>';
                tags += '   <div style="margin-left: 10px;"><span >|</span></div>';
                tags += '   <div style="margin-left: 10px;"><span id="delcolor_' + j + '" data-id="' + cid + '" class="delete-theme-color">x</span></div>';
                tags += '</div>';
                tags += '</div>';

                tagCount = j;
            }
            $('#addedSystemThemeColorList').html(tags);
            DeleteColorEvent();
        }
    }
    function showThemeColorPage() {
        $.ajax({
            url: 'admin.getAWAThemeColor',
            type: 'POST',
            data:{
                userid:userid
            },
            async: false,
            success: function (data) {
                if(data.msg=="ok") {
                    var color_list = data.list.color_info;
                    getColorList(color_list);
                }

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function addThemeColor(color) {
        tagCount++;
        $.ajax({
            url: 'admin.addAWAThemeColor',
            type: 'POST',
            data:{
                userid:userid,
                color:color
            },
            async: false,
            success: function (data) {
                if(data.msg=="ok"){
                    var color_list = data.list.color_info;
                    getColorList(color_list);
                }
                else
                    alert(data.msg);

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function showLanguageItem(n) {
        var tags='';
        var f_ac=0;
        for (var j = 0; j < stored_langs.length; j++)
        {
            var obj = stored_langs[j];
            var iso = obj.iso;
            var dialCode = obj.dialcode;
            var cname = obj.name;
            var status = obj.status;
            var dcont=iso+'-'+cname.toLowerCase();
            if(status=='enable')
            {
                if(n===0){
                    color_sel_lang[cname.toLowerCase()]='';//add key lang
                    tags +='<div class="m-2"><a id="'+iso+'" data-state="add" data-cont="'+dcont+'" data-name="'+cname.toLowerCase()+'">'+cname+'</a></div>';
                }
                else
                {
                    var cls='';
                    if(color_sel_lang[cname.toLowerCase()]!==undefined && color_sel_lang[cname.toLowerCase()]!==null && color_sel_lang[cname.toLowerCase()]!==''){
                        if(f_ac===0)
                        {
                            cls=' class="active" ';
                            $('#color_add_name').val(color_sel_lang[cname.toLowerCase()]);
                            f_ac=1;
                        }
                        else
                            cls=' class="enable" ';
                    }
                    else
                        color_sel_lang[cname.toLowerCase()]='';

                    tags +='<div class="m-2"><a id="'+iso+'" '+cls+' data-state="add" data-cont="'+dcont+'" data-name="'+cname.toLowerCase()+'">'+cname+'</a></div>';
                }
            }
        }
        $('#dlg-color-lang-list').html(tags);
        dlg_color_lang_list_a_click();
    }
    function initColorDlg(n) {
        if(n == 0){
            color_sel_lang={};
            $('#dlg-color-lang-list').html('');
            $('#color_add_name').val('');
            $('#color_add_span_messagebox').html('');
            $('#color_add_span_messagebox_container').css('display','none');
            $('.color_first-first-content').css('display','block');

            $('#dlg-color-next-lang-list').html('');
            $('.color_first-next-content').css('display','none');
        }
        else if(n == 1)
        {
            $('#color_add_name').val('');
            $('#color_add_span_messagebox').html('');
            $('#color_add_span_messagebox_container').css('display','none');
            $('.color_first-first-content').css('display','block');

            $('#dlg-color-next-lang-list').html('');
            $('.color_first-next-content').css('display','none');
        }
    }
    function dlg_color_lang_list_a_click(){
        $('#dlg-color-lang-list a').click(function ()
        {
            var this_state = $(this).data('state');
            if(this_state==='up'){}
            else if(this_state==='add')
            {}

            var this_n = $(this).data('name');
            var this_id=$(this).attr('id');

            $('#dlg-color-lang-list a').each(function (index, element) {
                var ele_n = $(element).data('name');
                var ele_id = $(element).attr('id');
                if(this_id!==ele_id)
                {
                    var input_n='';
                    if($(element).hasClass('active'))
                    {
                        $(element).removeClass('active');
                        input_n = $.trim($('#color_add_name').val());
                        color_sel_lang[ele_n]=input_n;
                        if(color_sel_lang[ele_n]!=='')
                            $(element).addClass('enable');
                    }
                    else
                    {
                        if(color_sel_lang[ele_n]!=='')
                            $(element).addClass('enable');
                    }
                }
            });

            if(color_sel_lang[this_n]!=='')
            {
                $(this).removeClass('enable');
                $('#color_add_name').val(color_sel_lang[this_n]);
            }
            else
                $('#color_add_name').val('');

            $(this).addClass('active');

        });
    }
    function addColorModalToNextDlg() {
        var keys = Object.keys(color_sel_lang);
        $('#dlg-color-next-lang-list').html('');
        if(keys.length < 1)
            return;

        var tag='';
        for (var i = 0; i < keys.length; i++) {
            var key=keys[i];
            var v = color_sel_lang[key];
            tag+='<div class="col-3 wes-theme-color">';
            tag+= key;
            tag+='</div>';
            tag+='<div class="col-9">';
            tag+=v;
            tag+='</div>';
        }

        $('#dlg-color-next-lang-list').html(tag);
    }

    function showBoxedList(lists) {
        is_edit = false;
        edit_id = "";
        var tags = '';
        for(var i = 0; i < lists.length; i++){
            var id = lists[i].id;
            var name = lists[i].name;
            var padding = lists[i].padding;

            tags += '<tr class="boxed_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '" data-padding="' + padding + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="boxedCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>' + padding + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="boxed_content_list_edit-'+id+'" name="boxed_content_list_edit-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#awa_boxed_content_lists').html(tags);

        $('input[id^="boxedCheckbox_"]').change(function() {
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

        $('select[id^="boxed_content_list_edit-"]').change(function(){
            var id = $(this).attr("id");
            edit_id = id.split('-')[1];
            var name = $('.boxed_content_list-' + edit_id).attr("data-name");
            var padding = $('.boxed_content_list-' + edit_id).attr("data-padding");
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if(permss.pwrite == 1) {
                    is_edit = true;
                    $('#Modal_Boxed_Name').val(name);
                    $('#Modal_Boxed_padding').val(padding);
                    $('#ModalAddBoxedContent').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "delete") {
                if(permss.pdelete == 1) {
		            myjs.data.confirmAlert(deleteBoxedList, edit_id, 'pgtxt_wantdeleteitem');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });
    }
    function getBoxedList() {
        $.ajax({
            url: 'admin.getAWAThemeBoxedList',
            data: {
                userid:userid,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    $('#awa_boxed_content_lists').html('');
                    if(lists != null && lists != '')
                        showBoxedList(lists);
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function addBoxedList() {
        var name = $('#Modal_Boxed_Name').val();
        var padding = $('#Modal_Boxed_padding').val();
        if(name == '' || padding == '')
            return;
        $.ajax({
            url: 'admin.addAWAThemeBoxedList',
            data: {
                userid:userid,
                name:name,
                padding:padding,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    $('#awa_boxed_content_lists').html('');
                    if(lists != null && lists != '')
                        showBoxedList(lists);
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalAddBoxedContent').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function editBoxedList() {
        var name = $('#Modal_Boxed_Name').val();
        var padding = $('#Modal_Boxed_padding').val();
        if(name == '' || padding == '')
            return;
        $.ajax({
            url: 'admin.editAWAThemeBoxedList',
            data: {
                userid:userid,
                name:name,
                editid:edit_id,
                padding:padding,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    $('#awa_boxed_content_lists').html('');
                    if(lists != null && lists != '')
                        showBoxedList(lists);
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalAddBoxedContent').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function deleteBoxedList(edit_id) {
        $.ajax({
            url: 'admin.deleteAWAThemeBoxedList',
            data: {
                userid:userid,
                deleteid:edit_id,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    $('#awa_boxed_content_lists').html('');
                    if(lists != null && lists != '')
                        showBoxedList(lists);
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
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
    function allDeleteCheckedBoxed() {
        $('#boxed_selected_all_delete').click(function () {
            if (permss.pdelete == 0) {
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            if(checked_del_items.length == 0)
                return;
            $.ajax({
                url: 'admin.allDeleteAWAThemeBoxed',
                data: {
                    userid: userid,
                    ids: checked_del_items,
                    pstart: pstart,
                    pcnt: pcnt
                },
                type: 'POST',
                success: function (data) {
                    if (data.msg === "ok") {
                        var lists = data.lists;
                        $('#awa_boxed_content_lists').html('');
                        if (lists != null && lists != '')
                            showBoxedList(lists);
                        var total = data.total;
                        if (total <= 0) {
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                        checked_del_items = new Array();
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
        name: "AppsWebsiteAppearanceTheme",
        data(){
           return {
               pageid:'apps-website-appearance-theme-fav',
               mu_apps:'',
               musu_apps_website:'',
			   mususu_apps_website_appear:'',
               musususu_apps_website_appear_theme:'',
			   musu_system_theme:'',
               pgtxt_color:'',
               pgtxt_list:'',
               btntxt_add:'',
               btntxt_delete:'',
               btntxt_boxed:'',
               pgtxt_name:'',
               pgtxt_padding:'',
               pgtxt_use:'',
               pgtxt_value:'',
               pgtxt_swidth:'',
               pgtxt_or:'',
               pgtxt_example:'',
               pgtxt_wantdeleteitem:'',
               pgtxt_notpermission:'',
               pgtxt_notification:'',
               btntxt_ok:'',
               btntxt_cancel:'',
               btntxt_change:'',
               btntxt_nextstep:'',
               pgtxt_translation:'',
               pgtxt_choose:'',
               pgtxt_confirm:'',
               pgtxt_notlanguage:'',
               pgtxt_sucesssaveddata:'',
            }
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_apps:function () {
                return this.mu_apps
            },
            cmusu_apps_website:function () {
                return this.musu_apps_website
            },
            cmususu_apps_website_appear:function () {
                return this.mususu_apps_website_appear
            },
			cmusususu_apps_website_appear_theme:function () {
                return this.musususu_apps_website_appear_theme
            },
			cmusu_system_theme:function () {
                return this.musu_system_theme
            },

            cpgtxt_color:function () {
                return this.pgtxt_color
            },
            cpgtxt_list:function () {
                return this.pgtxt_list
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete
            },
            cbtntxt_boxed:function () {
                return this.btntxt_boxed
            },
            cpgtxt_name:function () {
                return this.pgtxt_name
            },
            cpgtxt_padding:function () {
                return this.pgtxt_padding
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
            cbtntxt_change:function () {
                return this.btntxt_change;
            },
            cbtntxt_nextstep:function () {
                return this.btntxt_nextstep;
            },
            cpgtxt_translation:function () {
                return this.pgtxt_translation;
            },
            cpgtxt_choose:function () {
                return this.pgtxt_choose;
            },
            cpgtxt_confirm:function () {
                return this.pgtxt_confirm;
            },
            cpgtxt_notlanguage:function () {
                return this.pgtxt_notlanguage;
            },
            cpgtxt_sucesssaveddata:function () {
                return this.pgtxt_sucesssaveddata;
            },

            contentchange: function () {
                page_lang = this.$store.state.defaultlang;
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                for(var i = 0; i < stored_langs.length; i++){
                    if(page_lang == stored_langs[i].iso){
                        lang_name = stored_langs[i].name.toLowerCase();
                        showThemeColorPage();
                    }
                }
                return this.$store.state.contentchange;
            },
        },
        watch: {
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
            btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
            btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
            btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');

            this.getWWGStoredLang();
            this.sliderTabs();
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
            getWWGStoredLang(){
                axios.post('admin.getSystemStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg === "ok")
                    {
                        if(response.data.langlist!=''){
                            stored_langs = $.parseJSON(response.data.langlist);
                            vueOBJ.initpage();
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            /*fav part*/
            sliderTabs()
            {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function()
                {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_slider_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    checked_del_items = new Array();

                    if(subid=='color'){
                        tabstatus=0;
                        showThemeColorPage();
                    }
                    else if(subid=='boxed'){
                        tabstatus=1;
                        getBoxedList();
                        allDeleteCheckedBoxed();
                    }

                });
            },
            initpage(){
                colorButtons();
                for(var i = 0; i < stored_langs.length; i++){
                    if(page_lang == stored_langs[i].iso){
                        lang_name = stored_langs[i].name.toLowerCase();
                        showThemeColorPage();
                    }
                }
                $("#ModalAddBoxedContent").on('hide.bs.modal', function () {
                    $('select[id^="boxed_content_list_edit-"]').val('');
                });
            },
            AddColorPalette(){
                if(permss.pcreate != 1) {
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }

                initColorDlg(0);
                $('#dlgErr').text('').css('display','none');

                $('.color-add-letter').css('display','block');
                $('.color-up-letter').css('display','none');
                $('.color_first-content').css('display','block');
                $('.color_next-content').css('display','none');

                $('#addNextDlg_btn').css('display','block');
                $('#changeNextDlg_btn').css('display','none');

                $('#modalcolorpicker_val').val('#ffffff');
                $('#modalcolorpicker_value').text('#ffffff');
                $('#modalcolorpicker').css('background','#ffffff');

                if(stored_langs!=='')
                {
                    $('#ModalAddColorContent').modal('show');
                    showLanguageItem(0)
                }
                else
                {
                    myjs.data.showAlert('pgtxt_notlanguage');
                }
            },
            modal_nextstep(){
                var input_n = $.trim($('#color_add_name').val());
                if(input_n !== ''){
                    var ele_n = $('#dlg-color-lang-list a.active').data('name');
                    if(ele_n !== undefined)
                        color_sel_lang[ele_n]=input_n;
                }
                else
                {
                    var ele_n = $('#dlg-color-lang-list a.active').data('name');
                    if(ele_n !== undefined)
                        color_sel_lang[ele_n]='';
                }
                var keys = Object.keys(color_sel_lang);
                if(keys.length < 1) return;
                var msg='';
                var idx=0;
                for (var i = 0; i < keys.length; i++) {
                    var key=keys[i];
                    var v = color_sel_lang[key];
                    if(v == '')
                    {
                        if(idx==0)
                            msg+='There is no content in <span style="color:#67a6d2">' + key + '</span>';
                        else
                            msg+=' and <span style="color:#67a6d2">' + key + '</span>';
                        idx++;
                    }
                }
                if(msg!=='')
                {
                    $('#color_add_span_messagebox').html(msg);
                    $('#color_add_span_messagebox_container').css('display','block');
                }
                else
                {
                    $('.color_first-content').css('display','none');
                    $('.color_next-content').css('display','block');
                    addColorModalToNextDlg();
                }
            },
            addColorModalToNextOne(){
                var pgtxt_sucesssaveddata = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_sucesssaveddata');
                var sel_color = $('#modalcolorpicker_val').val();
                $.ajax({
                    url: 'admin.addAWAThemeColor',
                    type: 'POST',
                    data: {
                        userid:userid,
                        color:sel_color,
                        contentdata:color_sel_lang
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok")
                        {
                            $('#dlgNextErr').text(pgtxt_sucesssaveddata).css({'display':'block','color':'#16D414'});
                            setTimeout(function () {
                                $('#dlgNextErr').text('').css('display','none');
                                $("#ModalAddColorContent").modal('hide');
                            },1000);
                            showThemeColorPage();
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            changeColorModalToNextOne(){

            },
            cancelColorModalToNextOne(){//return pre page
                /*initColorDlg(1);
                showLanguageItem(1);*/
                $('.color_first-content').css('display','block');
                $('.color_next-content').css('display','none');
                //$('#ModalAddColorContent').modal('hide');
            },
            AddBoxedBtn(){
                if(permss.pcreate == 1) {
                    is_edit = false;
                    $('#Modal_Boxed_Name').val('');
                    $('#Modal_Boxed_padding').val('');
                    $('#ModalAddBoxedContent').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            addBoxedContentBtn(){
                if(is_edit)
                    editBoxedList();
                else
                    addBoxedList();
            }

        }//method

    }
</script>
