<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_webs_wesglobal_appearance_theme}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_appearance}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_appearance_theme}}
                          <a href="#" id="webs-wesglobal-appearance-theme-fav" data-status="off" data-page-info="Theme_webs-wesglobal-appearance-theme">
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
                            <div id="awa_page2_content_side_bar_text" class="page1_content_side_bar_text" data-target="layout">{{cpgtxt_layout}}</div>
                        </div>
                    </div>
                </div>
                <!-- Color tab -->
                <div class="col-md-12 page_slider_content_list active" id="color" >
                    <div class="row"><!--{{templang}}-->
                        <div class="col-md-12"  style="padding-top:20px;">
                            <div class="card">
                                <div class="card-body" style="padding: 20px;"><h6 class="card-title m-b-20">{{cmusu_system_theme}} {{cpgtxt_color}} {{cpgtxt_list}}</h6>
                                    <div class="row" style="margin-left: 50px; margin-top: 30px;">
                                        <div class="d-flex flex-wrap" id="addedSystemThemeColorList" style="display: flex;">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- layout tab -->
                <div class="col-md-12 page_slider_content_list" id="layout">
                    <div style="text-align: right; margin-bottom: 25px;">
                        <div id="awat_addlayout" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="AddLayoutBtn()">
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
                                    <th style="border: 0;">{{cpgtxt_style}}</th>
                                    <th style="border: 0;">{{cpgtxt_left}} {{cpgtxt_occupied}}</th>
                                    <th style="border: 0;">{{cpgtxt_left}} {{cpgtxt_slider}}{{cpgtxt_bar}}</th>
                                    <th style="border: 0;">{{cpgtxt_right}} {{cpgtxt_occupied}}</th>
                                    <th style="border: 0;">{{cpgtxt_right}} {{cpgtxt_slider}}{{cpgtxt_bar}}</th>
                                    <th style="text-align:right; padding-right: 40px;">
                                        <div id="layout_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody id="wwat_layout_content_lists">

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
            <!--Add Layout Content Modal start-->
            <div class="modal fade" id="ModalWWATLayoutContent">
                <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 650px!important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="Modal_WWATLayout_Title">{{cbtntxt_add}} {{cpgtxt_layout}}</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body" id="AddWWATLayoutModalBody" style="padding: 0px 0rem 2rem">
                            <div class="col-md-12" style="margin-top: 20px;">
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-3">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_name}}</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control border-input-text" id="Modal_WWATLayout_Name" name="Modal_WWATLayout_Name" style="margin-left: -9px;">
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-3">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_style}}</label>
                                    </div>
                                    <div class="col-md-9">
                                        <select class="form-control border-input-text" id="Modal_WWATLayout_Style" name="Modal_WWATLayout_Style" style="margin-left: -9px;">
                                            <option selected value="Fullwidth">{{cpgtxt_fullwidth}}</option>';
                                            <option value="Boxed">{{cbtntxt_boxed}}</option>';
                                        </select>
                                    </div>
                                </div>

                                <div class="d-flex flex-wrap flex-boxed" id="BoxedListLayer">
                                    <div class="col-md-12">
                                        <select class="form-control border-input-text" id="Modal_WWATLayout_BoxedList" name="Modal_WWATLayout_BoxedList" style="margin-left: -9px;">

                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-12" style="display: flex;">
                                        <div class="col-md-3">
                                            <input class="form-check-input" type="checkbox" name="Modal_WWATLayout_Left" id="Modal_WWATLayout_Left" value="">{{cpgtxt_left}} {{cpgtxt_slider}}{{cpgtxt_bar}}
                                        </div>
                                        <div style="margin: auto 0;">
                                            <input type="text" class="form-control bgcolor-input-text" id="Modal_WWATLayout_left_occupied" readonly name="Modal_WWATLayout_left_occupied" style="width: 160px;">
                                        </div>
                                        <div style="margin: auto 0; width: 40px; text-align: center;">%</div>
                                        <div style="font-size: 11px; margin-left:5px;">
                                            <div style="margin-top: 8px;">
                                                <font style="color: #b0b0af;">{{cpgtxt_leftoccupieddesc}}</font>&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-12" style="display: flex;">
                                        <div class="col-md-2" style="margin-right: 50px;">
                                        </div>
                                        <div style="margin: auto 0;">
                                            <input type="text" class="form-control bgcolor-input-text" id="Modal_WWATLayout_left_padding" readonly name="Modal_WWATLayout_left_padding">
                                        </div>
                                        <div style="font-size: 11px; margin-left:5px;">
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
                                </div>
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-12" style="display: flex;">
                                        <div class="col-md-3">
                                            <input class="form-check-input" type="checkbox" name="Modal_WWATLayout_Right" id="Modal_WWATLayout_Right" value="">{{cpgtxt_right}} {{cpgtxt_slider}}{{cpgtxt_bar}}
                                        </div>
                                        <div style="margin: auto 0;">
                                            <input type="text" class="form-control bgcolor-input-text" id="Modal_WWATLayout_right_occupied" readonly name="Modal_WWATLayout_right_occupied" style="width: 160px;">
                                        </div>
                                        <div style="margin: auto 0; width: 40px; text-align: center;">%</div>
                                        <div style="font-size: 11px; margin-left:5px;">
                                            <div style="margin-top: 8px;">
                                                <font style="color: #b0b0af;">{{cpgtxt_rightoccupieddesc}}</font>&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-12" style="display: flex;">
                                        <div class="col-md-2" style="margin-right: 50px;"></div>
                                        <div style="margin: auto 0;">
                                            <input type="text" class="form-control bgcolor-input-text" id="Modal_WWATLayout_right_padding" readonly name="Modal_WWATLayout_right_padding">
                                        </div>
                                        <div style="font-size: 11px; margin-left:5px;">
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
                                </div>
                                <div class="col-md-12" style="text-align: center;">
                                    <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addWWATLayoutContentBtn()">
                                        <span>+ {{cbtntxt_add}} </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Add Topheader Content Modal end-->
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
    .selectedThemeColor{
        width: 50px;
        border: 1px solid #888;
        background: #ffffff;
        cursor: pointer;
    }
    .selectedThemeColorActive{
        width: 50px;
        height: 22px;
        margin-top: -1px;
        border: 2px solid #000000;
        background: #ffffff;
        cursor: pointer;
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
    .d-flex.flex-wrap.flex-boxed{
        display: none !important;
        margin-bottom: 20px;
        margin-left: 155px;
    }
    .d-flex.flex-wrap.flex-boxed.active{
        display: block !important;
        margin-bottom: 20px;
        margin-left: 155px;
    }

</style>
<script>
    import nav_module from "../../assets/jsfunc/nav_module";
    import myjs from "../../assets/jsfunc/mjs_module";
    import axios from "axios";

    let vueOBJ=null;
    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var tabstatus = 0;
    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var checked_del_items = new Array();
    var is_edit = false;
    var edit_id = "";
    var first_boxed = 0;
    var is_left = 0;
    var is_right = 0;
    var permss;
    var lang_name = '';
    var stored_langs='';
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
                getWWATLayoutList();
            }
        });
    }

    function getColorList(jsonstr, sel_id) {
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
                if(cid == sel_id)
                    tags += '   <div id="addcolor_' + j + '" class="selectedThemeColorActive" data-id="'+ cid +'" data-color="'+color+'" style="background: ' + color + '"></div>';
                else
                    tags += '   <div id="addcolor_' + j + '" class="selectedThemeColor" data-id="'+ cid +'" data-color="'+color+'" style="background: ' + color + '"></div>';
                tags += '   <div style="margin-left: 10px;"><span id="colorname_' + j + '" data-id="' + cid + '">'+color_name+'</span></div>';
                tags += '</div>';
                tags += '</div>';
            }
            $('#addedSystemThemeColorList').html(tags);
        }
    }
    function colorEvent() {
        $('div[id^="addcolor_"]').click(function () {
            if (permss.pwrite == 1) {
                var color_val = $(this).attr("data-color");
                var color_id = $(this).attr("data-id");
                $.ajax({
                    url: 'admin.setWebsiteThemeColor',
                    type: 'POST',
                    data: {
                        userid: userid,
                        color: color_val,
                        cid: color_id
                    },
                    async: false,
                    success: function (data) {
                        if (data.msg == "ok") {
                            var color_list = data.list.color_info;
                            var sel_color = data.list.f_id;
                            getColorList(color_list, sel_color);
                            colorEvent();
                        } else
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
                    var sel_color = data.list.f_id;
                    getColorList(color_list, sel_color);
                    colorEvent();
                }
                else
                    alert(data.msg);

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function setLayoutModalEvent() {
        $.ajax({
            url: 'admin.getWWATLayoutBoxedList',
            type: 'POST',
            data:{
                userid:userid
            },
            async: false,
            success: function (data) {
                if(data.msg=="ok") {
                    var boxeds = data.boxeds;
                    first_boxed = boxeds[0].id;
                    var tags = '';
                    for(var i = 0; i < boxeds.length; i++){
                        var id = boxeds[i].id;
                        var name = boxeds[i].name;
                        tags += '<option value="'+id+'">'+name+'</option>';
                    }
                    $('#Modal_WWATLayout_BoxedList').html(tags);
                }
                else
                    alert(data.msg);

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
        $('select[id="Modal_WWATLayout_Style"]').change(function () {
            var val = $(this).val();
            if(val == 'Fullwidth'){
                $('#BoxedListLayer').removeClass('active');
            }
            else if(val == 'Boxed'){
                $('#BoxedListLayer').addClass('active');
            }
        })

        $('input[id="Modal_WWATLayout_Left"]').change(function() {
            if ($(this).is(':checked')) {
                is_left = 1;
                $('#Modal_WWATLayout_left_occupied').attr('readonly', false);
                $('#Modal_WWATLayout_left_occupied').removeClass('bgcolor-input-text');
                $('#Modal_WWATLayout_left_occupied').addClass('border-input-text');
                $('#Modal_WWATLayout_left_padding').attr('readonly', false);
                $('#Modal_WWATLayout_left_padding').removeClass('bgcolor-input-text');
                $('#Modal_WWATLayout_left_padding').addClass('border-input-text');
            }
            else{
                is_left = 0;
                $('#Modal_WWATLayout_left_occupied').attr('readonly', true);
                $('#Modal_WWATLayout_left_occupied').removeClass('border-input-text');
                $('#Modal_WWATLayout_left_occupied').addClass('bgcolor-input-text');
                $('#Modal_WWATLayout_left_occupied').val('');
                $('#Modal_WWATLayout_left_padding').attr('readonly', true);
                $('#Modal_WWATLayout_left_padding').removeClass('border-input-text');
                $('#Modal_WWATLayout_left_padding').addClass('bgcolor-input-text');
                $('#Modal_WWATLayout_left_padding').val('')
            }
        });
        $('input[id="Modal_WWATLayout_Right"]').change(function() {
            if ($(this).is(':checked')) {
                is_right = 1;
                $('#Modal_WWATLayout_right_occupied').attr('readonly', false);
                $('#Modal_WWATLayout_right_occupied').removeClass('bgcolor-input-text');
                $('#Modal_WWATLayout_right_occupied').addClass('border-input-text');
                $('#Modal_WWATLayout_right_padding').attr('readonly', false);
                $('#Modal_WWATLayout_right_padding').removeClass('bgcolor-input-text');
                $('#Modal_WWATLayout_right_padding').addClass('border-input-text');
            }
            else{
                is_right = 0;
                $('#Modal_WWATLayout_right_occupied').attr('readonly', true);
                $('#Modal_WWATLayout_right_occupied').removeClass('border-input-text');
                $('#Modal_WWATLayout_right_occupied').addClass('bgcolor-input-text');
                $('#Modal_WWATLayout_right_occupied').val('');
                $('#Modal_WWATLayout_right_padding').attr('readonly', true);
                $('#Modal_WWATLayout_right_padding').removeClass('border-input-text');
                $('#Modal_WWATLayout_right_padding').addClass('bgcolor-input-text');
                $('#Modal_WWATLayout_right_padding').val('');
            }
        });
    }
    function setLayountModalValue(infos) {
        $('#Modal_WWATLayout_Name').val(infos[1]);
        $('#Modal_WWATLayout_Style').val(infos[2]);
        if(infos[2] == "Boxed"){
            $('#BoxedListLayer').addClass('active');
        }
        else{
            $('#BoxedListLayer').removeClass('active');
        }
        $('#Modal_WWATLayout_BoxedList').val(infos[3]);
        $('#Modal_WWATLayout_left_occupied').val(infos[4]);
        $('#Modal_WWATLayout_left_padding').val(infos[5]);
        is_left = infos[6];
        if(infos[6] == 0) {
            $('input[id="Modal_WWATLayout_Left"]').prop('checked', false);
            $('#Modal_WWATLayout_left_occupied').attr('readonly', true);
            $('#Modal_WWATLayout_left_occupied').removeClass('border-input-text');
            $('#Modal_WWATLayout_left_occupied').addClass('bgcolor-input-text');
            $('#Modal_WWATLayout_left_padding').attr('readonly', true);
            $('#Modal_WWATLayout_left_padding').removeClass('border-input-text');
            $('#Modal_WWATLayout_left_padding').addClass('bgcolor-input-text');
        }
        else {
            $('input[id="Modal_WWATLayout_Left"]').prop('checked', true);
            $('#Modal_WWATLayout_left_occupied').attr('readonly', false);
            $('#Modal_WWATLayout_left_occupied').removeClass('bgcolor-input-text');
            $('#Modal_WWATLayout_left_occupied').addClass('border-input-text');
            $('#Modal_WWATLayout_left_padding').attr('readonly', false);
            $('#Modal_WWATLayout_left_padding').removeClass('bgcolor-input-text');
            $('#Modal_WWATLayout_left_padding').addClass('border-input-text');
        }
        $('#Modal_WWATLayout_right_occupied').val(infos[7]);
        $('#Modal_WWATLayout_right_padding').val(infos[8]);
        is_right = infos[9];
        if(infos[9] == 0) {
            $('input[id="Modal_WWATLayout_Right"]').prop('checked', false);
            $('#Modal_WWATLayout_right_occupied').attr('readonly', true);
            $('#Modal_WWATLayout_right_occupied').removeClass('border-input-text');
            $('#Modal_WWATLayout_right_occupied').addClass('bgcolor-input-text');
            $('#Modal_WWATLayout_right_padding').attr('readonly', true);
            $('#Modal_WWATLayout_right_padding').removeClass('border-input-text');
            $('#Modal_WWATLayout_right_padding').addClass('bgcolor-input-text');
        }
        else {
            $('input[id="Modal_WWATLayout_Right"]').prop('checked', true);
            $('#Modal_WWATLayout_right_occupied').attr('readonly', false);
            $('#Modal_WWATLayout_right_occupied').removeClass('bgcolor-input-text');
            $('#Modal_WWATLayout_right_occupied').addClass('border-input-text');
            $('#Modal_WWATLayout_right_padding').attr('readonly', false);
            $('#Modal_WWATLayout_right_padding').removeClass('bgcolor-input-text');
            $('#Modal_WWATLayout_right_padding').addClass('border-input-text');
        }
    }
    function getWWATLayoutList() {
        $.ajax({
            url: 'admin.getWWATLayoutList',
            data: {
                userid:userid,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    $('#wwat_layout_content_lists').html('');
                    if(lists != null && lists != '')
                        showLayoutList(lists);
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
    function showLayoutList(lists) {
        is_edit = false;
        edit_id = "";
        var tags = '';
        var btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
        var btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');

        for(var i = 0; i < lists.length; i++){
            var infos = new Array();
            var id = lists[i].id;
            infos.push(id);
            var name = lists[i].name;
            infos.push(name);
            var style = lists[i].style
            infos.push(style);
            if(style == "Boxed")
                style = lists[i].bname;
            infos.push(lists[i].bid);
            var left_occupied = lists[i].left_occupied;
            infos.push(left_occupied);
            var left_padding = lists[i].left_padding;
            infos.push(left_padding);
            if(left_padding == '' || left_padding == null)
                left_padding = '-';
            infos.push(lists[i].is_left);
            var right_occupied = lists[i].right_occupied;
            infos.push(right_occupied);
            var right_padding = lists[i].right_padding;
            infos.push(right_padding);
            if(right_padding == '' || right_padding == null)
                right_padding = '-';
            infos.push(lists[i].is_right);

            tags += '<tr class="layount_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '" data-info="' + infos + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="layoutCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>' + style + '</td>';
            tags += '   <td>' + left_occupied + '%</td>';
            tags += '   <td>' + left_padding + '</td>';
            tags += '   <td>' + right_occupied + '%</td>';
            tags += '   <td>' + right_padding + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="layout_content_list_edit-'+id+'" name="layout_content_list_edit-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#wwat_layout_content_lists').html(tags);

        $('input[id^="layoutCheckbox_"]').change(function() {
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

        $('select[id^="layout_content_list_edit-"]').change(function(){
            var id = $(this).attr("id");
            edit_id = id.split('-')[1];
            var info = $('.layount_content_list-' + edit_id).attr("data-info");
            var infos = info.split(',');
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if (permss.pwrite == 1) {
                    is_edit = true;
                    setLayountModalValue(infos);
                    $('#ModalWWATLayoutContent').modal('show');
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "delete") {
                if (permss.pdelete == 1) {
                    myjs.data.confirmAlert(deleteWWATLayoutList, edit_id, 'pgtxt_wantdeleteitem');
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });
    }
    function addWWATLayoutList(){
        var name = $('#Modal_WWATLayout_Name').val();
        var style = $('#Modal_WWATLayout_Style').val();
        var bid = $('#Modal_WWATLayout_BoxedList').val();
        var left_occ = $('#Modal_WWATLayout_left_occupied').val();
        var left = $('#Modal_WWATLayout_left_padding').val();
        var right_occ = $('#Modal_WWATLayout_right_occupied').val();
        var right = $('#Modal_WWATLayout_right_padding').val();

        if(name != null && name != '') {
            $.ajax({
                url: 'admin.addWWATLayoutList',
                data: {
                    userid: userid,
                    name: name,
                    style: style,
                    bid: bid,
                    left_occ: left_occ,
                    left: left,
                    is_left: is_left,
                    right_occ: right_occ,
                    right: right,
                    is_right: is_right,
                    pstart: pstart,
                    pcnt: pcnt
                },
                type: 'POST',
                success: function (data) {
                    if (data.msg === "ok") {
                        var lists = data.lists;
                        $('#wwat_layout_content_lists').html('');
                        if (lists != null && lists != '')
                            showLayoutList(lists);
                        var total = data.total;
                        if (total <= 0) {
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                        $('#ModalWWATLayoutContent').modal('hide');
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
    function editWWATLayoutList(){
        var name = $('#Modal_WWATLayout_Name').val();
        var style = $('#Modal_WWATLayout_Style').val();
        var boxed = $('#Modal_WWATLayout_BoxedList').val();
        var left_occ = $('#Modal_WWATLayout_left_occupied').val();
        var left = $('#Modal_WWATLayout_left_padding').val();
        var right_occ = $('#Modal_WWATLayout_right_occupied').val();
        var right = $('#Modal_WWATLayout_right_padding').val();
        var is_save = false;
        if(is_left == 1){
            if(left_occ != null && left_occ != '')
                is_save = true;
        }
        if(is_right == 1){
            if(right_occ != null || right_occ != '')
                is_save = true;
        }
        if(is_save) {
            $.ajax({
                url: 'admin.editWWATLayoutList',
                data: {
                    userid: userid,
                    editid: edit_id,
                    name: name,
                    style: style,
                    boxed: boxed,
                    left_occ: left_occ,
                    left: left,
                    is_left: is_left,
                    right_occ: right_occ,
                    right: right,
                    is_right: is_right,
                    pstart: pstart,
                    pcnt: pcnt
                },
                type: 'POST',
                success: function (data) {
                    if (data.msg === "ok") {
                        var lists = data.lists;
                        $('#wwat_layout_content_lists').html('');
                        if (lists != null && lists != '')
                            showLayoutList(lists);
                        var total = data.total;
                        if (total <= 0) {
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                        $('#ModalWWATLayoutContent').modal('hide');
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
    function deleteWWATLayoutList(edit_id) {
        $.ajax({
            url: 'admin.deleteWWATLayoutList',
            data: {
                userid:userid,
                editid:edit_id,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    $('#wwat_layout_content_lists').html('');
                    if(lists != null && lists != '')
                        showLayoutList(lists);
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
    function allDeleteWWATLayoutList() {
        $('#layout_selected_all_delete').click(function () {
            if (permss.pdelete == 1) {
                if (checked_del_items.length > 0) {
                    $.ajax({
                        url: 'admin.allDeleteWWATLayoutList',
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
                                $('#wwat_layout_content_lists').html('');
                                if (lists != null && lists != '')
                                    showLayoutList(lists);
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
                }
            }else
                myjs.data.showAlert('pgtxt_notpermission');
        });
    }


    export default {
        name: "WebsWesGlobalAppearanceTheme",
        data(){
            return {
                pageid:'webs-wesglobal-appearance-theme-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_appearance:'',
                musususu_webs_wesglobal_appearance_theme:'',
                musu_system_theme:'',
                btntxt_add:'',
                btntxt_delete:'',
                btntxt_edit:'',
                btntxt_change:'',
                btntxt_boxed:'',
                pgtxt_name:'',
                pgtxt_color:'',
                pgtxt_list:'',
                pgtxt_layout:'',
                pgtxt_style:'',
                pgtxt_left:'',
                pgtxt_right:'',
                pgtxt_slider:'',
                pgtxt_bar:'',
                pgtxt_use:'',
                pgtxt_value:'',
                pgtxt_swidth:'',
                pgtxt_or:'',
                pgtxt_example:'',
                pgtxt_fullwidth:'',
                pgtxt_occupied :'',
                pgtxt_leftoccupieddesc :'',
                pgtxt_rightoccupieddesc :'',
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
            cmususu_webs_wesglobal_appearance:function () {
                return this.mususu_webs_wesglobal_appearance
            },
            cmusususu_webs_wesglobal_appearance_theme:function () {
                return this.musususu_webs_wesglobal_appearance_theme
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_wesglobal:function () {
                return this.musu_webs_wesglobal
            },
            cmusu_system_theme:function () {
                return this.musu_system_theme
            },
            cpgtxt_name:function () {
                return this.pgtxt_name
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
            cbtntxt_change:function () {
                return this.btntxt_change
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_boxed:function () {
                return this.btntxt_boxed;
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
            cpgtxt_layout:function () {
                return this.pgtxt_layout;
            },
            cpgtxt_style:function () {
                return this.pgtxt_style;
            },
            cpgtxt_left:function () {
                return this.pgtxt_left;
            },
            cpgtxt_right:function () {
                return this.pgtxt_right;
            },
            cpgtxt_slider:function () {
                return this.pgtxt_slider;
            },
            cpgtxt_bar:function () {
                return this.pgtxt_bar;
            },
            cpgtxt_fullwidth:function () {
                return this.pgtxt_fullwidth;
            },
            cpgtxt_occupied:function () {
                return this.pgtxt_occupied;
            },
            cpgtxt_leftoccupieddesc:function () {
                return this.pgtxt_leftoccupieddesc;
            },
            cpgtxt_rightoccupieddesc:function () {
                return this.pgtxt_rightoccupieddesc;
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
            /* fav part*/
            permss = myjs.data.permissionDefinition();

            this.getWWGStoredLang();
            this.sliderTabs();
        },
        methods:{
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
                    else if(subid=='layout'){
                        tabstatus=1;
                        setLayoutModalEvent()
                        getWWATLayoutList();
                        allDeleteWWATLayoutList();
                    }

                });
            },
            initpage(){
                for(var i = 0; i < stored_langs.length; i++){
                    if(page_lang == stored_langs[i].iso){
                        lang_name = stored_langs[i].name.toLowerCase();
                        showThemeColorPage();
                    }
                }
                $("#ModalWWATLayoutContent").on('hide.bs.modal', function () {
                    $('select[id^="layout_content_list_edit-"]').val('');
                });
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
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }

            },
            ShowColorPalette(){
                $('#hiddenThemeColorPicker').trigger('click');
            },
            AddLayoutBtn(){
                if (permss.pcreate == 1) {
                    is_edit = false;
                    is_left = 0;
                    is_right = 0;
                    var infos = ['0', '', 'Fullwidth', first_boxed, '', '', 0, '', '', 0];
                    setLayountModalValue(infos);
                    $('#ModalWWATLayoutContent').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            addWWATLayoutContentBtn(){
                if(is_edit)
                    editWWATLayoutList();
                else
                    addWWATLayoutList();

            },

        }//method

    }
</script>
