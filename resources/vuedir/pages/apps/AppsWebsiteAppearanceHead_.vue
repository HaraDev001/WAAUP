<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_apps_website_appear_head}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_apps}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_apps_website}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_website_appear}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_apps_website_appear_head}}
                          <a href="#" id="apps-website-appearance-head-fav" data-status="off" data-page-info="Head_apps-website-appearance-head">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12" style="margin-bottom: 30px;">
                <div class="page1_content_side_bar" style="display: flex;">
                    <div class="awah_page_button">
                        <div id="aqah_page1_content_side_bar_text" class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="topheader">{{cbtntxt_topheader}}</div>
                    </div>
                    <div class="awah_page_button">
                        <div id="aqah_page2_content_side_bar_text" class="page1_content_side_bar_text" data-target="header">{{cbtntxt_header}}</div>
                    </div>
                    <div class="awah_page_button">
                        <div id="aqah_page3_content_side_bar_text" class="page1_content_side_bar_text" data-target="subheader">{{cbtntxt_subheader}}</div>
                    </div>
                </div>
            </div>

            <!--topheader-->
            <div class="col-md-12 page_slider_content_list active" id="topheader">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding:20px 20px; height:auto">
                        {{cpgtxt_category}}
                        <button type="button" id="awah_top_category_add" class="btn page1_custom_btn active" style="height: 40px; border-radius: 20px; padding: 0px 30px; margin: 0 25px 0 50px;">
                            + {{cbtntxt_add}}
                        </button>
                        <button type="button" id="awah_top_category_edit" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0px 30px;">
                            {{cbtntxt_edit}}
                        </button>
                    </div>
                    <div class="page1_content_content_title border-0" style="padding:20px 20px; height:auto;display: flex;align-items: center;">
                        {{cpgtxt_background}}
                        <div id="awah_topcategory_background" style="width: 250px; margin-left: 50px">
                            <select class="form-control" id="awa_system_field_images-top" name="awa_system_field_images-top">

                            </select>
                        </div>
                    </div>
                </div>

                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding: 0px;">
                        <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                            <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_list}}</div>
                            <div style="width: 380px;position: relative;display: flex;">
                                <div class="input-group-append" @click.stop="SearchTopheaderCategoryBtn" style="width: 100%;">
                                    <input type="text" class="form-control" id="topheader_search_cont" name="topheader_search_cont" style="height: calc(1.5em + .75rem + 6px); padding-left:160px;">
                                    <span class="btn" style="padding: 5px;right: 30px;"><i class="ti-search"></i></span>
                                </div>

                                <div  style="display: flex;flex-direction: row;width: 150px;position: absolute; border-right: 1px solid #fff;">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="topheader_category_items" name="topheader_category_items" style="border-bottom: 0px;" >

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                            <thead>
                            <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                <th style="width:40px!important; border: 0;"></th>
                                <th style="border: 0;">{{cpgtxt_name}}</th>
                                <th style="border: 0;">{{cpgtxt_category}}</th>
                                <th style="text-align:right; padding-right: 40px;">
                                    <div id="topheader_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody id="awa_topheader_content_lists">

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
                        <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addAWATopheaderContentModalBtn()">
                            <span>+ {{cbtntxt_add}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!--header-->
            <div class="col-md-12 page_slider_content_list"  id="header">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding:20px 20px; height:auto">
                        {{cpgtxt_category}}
                        <button type="button" id="awah_head_category_add" class="btn page1_custom_btn active" style="height: 40px; border-radius: 20px; padding: 0px 30px; margin: 0 25px 0 50px;">
                            + {{cbtntxt_add}}
                        </button>
                        <button type="button" id="awah_head_category_edit" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0px 30px;">
                            {{cbtntxt_edit}}
                        </button>
                    </div>
                    <div class="page1_content_content_title border-0" style="padding:20px 20px; height:auto;display: flex;align-items: center;">
                        {{cpgtxt_background}}
                        <div id="awah_headcategory_background" style="width: 250px; margin-left: 50px">
                            <select class="form-control" id="awa_system_field_images-head" name="awa_system_field_images-head">

                            </select>
                        </div>
                    </div>
                </div>

                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding: 0px;">
                        <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                            <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_list}}</div>
                            <div style="width: 380px;position: relative;display: flex;">
                                <div class="input-group-append" @click.stop="SearchHeadheaderCategoryBtn" style="width: 100%;">
                                    <input type="text" class="form-control" id="headheader_search_cont" name="headheader_search_cont" style="height: calc(1.5em + .75rem + 6px); padding-left:160px;">
                                    <span class="btn" style="padding: 5px;right: 30px;"><i class="ti-search"></i></span>
                                </div>

                                <div  style="display: flex;flex-direction: row;width: 150px;position: absolute; border-right: 1px solid #fff;">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="headheader_category_items" name="headheader_category_items" style="border-bottom: 0px;" >

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                            <thead>
                            <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                <th style="width:40px!important; border: 0;"></th>
                                <th style="border: 0;">{{cpgtxt_name}}</th>
                                <th style="border: 0;">{{cpgtxt_category}}</th>
                                <th style="text-align:right; padding-right: 40px;">
                                    <div id="headheader_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody id="awa_headheader_content_lists">

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
                        <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addAWAHeadheaderContentModalBtn()">
                            <span>+ {{cbtntxt_add}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!--subheader-->
            <div class="col-md-12 page_slider_content_list" id="subheader">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding:20px 20px; height:auto">
                        {{cpgtxt_category}}
                        <button type="button" id="awah_sub_category_add" class="btn page1_custom_btn active" style="height: 40px; border-radius: 20px; padding: 0px 30px; margin: 0 25px 0 50px;">
                           + {{cbtntxt_add}}
                        </button>
                        <button type="button" id="awah_sub_category_edit" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0px 30px;">
                            {{cbtntxt_edit}}
                        </button>
                    </div>
                    <div class="page1_content_content_title border-0" style="padding:20px 20px; height:auto;display: flex;align-items: center;">
                        {{cpgtxt_background}}
                        <div id="awah_category_background" style="width: 250px; margin-left: 50px">
                            <select class="form-control" id="awa_system_field_images-sub" name="awa_system_field_images-sub">

                            </select>
                        </div>
                    </div>
                </div>

                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding: 0px;">
                        <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                            <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_list}}</div>
                            <div style="width: 380px;position: relative;display: flex;">
                                <div class="input-group-append" @click.stop="SearchSubheaderCategoryBtn" style="width: 100%;">
                                    <input type="text" class="form-control" id="subheader_search_cont" name="subheader_search_cont" style="height: calc(1.5em + .75rem + 6px); padding-left:160px;">
                                    <span class="btn" style="padding: 5px;right: 30px;"><i class="ti-search"></i></span>
                                </div>

                                <div  style="display: flex;flex-direction: row;width: 150px;position: absolute; border-right: 1px solid #fff;">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="subheader_category_items" name="subheader_category_items" style="border-bottom: 0px;" >

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                            <thead>
                            <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                <th style="width:40px!important; border: 0;"></th>
                                <th style="border: 0;">{{cpgtxt_name}}</th>
                                <th style="border: 0;">{{cpgtxt_category}}</th>
                                <th style="text-align:right; padding-right: 40px;">
                                    <div id="subheader_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody id="awa_subheader_content_lists">

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
                        <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addAWASubheaderContentModalBtn()">
                            <span>+ {{cbtntxt_add}}</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>


        <!--Add Category Modal start-->
        <div class="modal fade" id="ModalAddCategory">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_Title">{{cbtntxt_add}} {{cpgtxt_category}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="AddCategoryModalBody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel" id="tab4">
                            <div class="row" style="padding-bottom: 20px;">
                                <div class="col-md-12" style="margin-top: 20px;">
                                    <div class="d-flex flex-wrap">
                                        <div class="col-md-2">
                                            <label style="margin-top: 8px; color:#666;" id="Modal_Add_Name">{{cpgtxt_name}}</label>
                                        </div>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="category_item_name" name="category_item_name">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div id="ssfe-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addCategoryModalBtn()">
                                        <span>+ {{cbtntxt_add}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Add Category Modal end-->
        <!--Edit Category Modal start-->
        <div class="modal fade" id="ModalEditCategory">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_Edit_Title">{{cbtntxt_edit}} {{cpgtxt_category}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="EditCategoryModalBody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel">
                            <div class="row" style="padding-bottom: 20px;">
                                <div class="col-md-12" style="margin-top: 20px; height: 200px; overflow-y: auto;">
                                    <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                        <thead>
                                        <tr role="row">
                                            <th class="role_user_th" style="border: 0;">{{cpgtxt_name}}</th>
                                            <th class="role_user_th" style="border: 0; float: right;">{{cpgtxt_operation}}</th>
                                        </tr>
                                        </thead>
                                        <tbody id="awa_category_lists">

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Edit Category Modal end-->
        <!--Add Topheader Content Modal start-->
        <div class="modal fade" id="ModalAddTopContent">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 650px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_TopContent_Title">{{cbtntxt_add}} {{cbtntxt_topheader}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="AddTopContentModalBody" style="padding: 0px 0rem 2rem">
                        <div class="col-md-12" style="margin-top: 20px;">
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_name}}</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="Modal_Topheader_Name" name="Modal_Topheader_Name">
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_category}}</label>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_TopCategory_List" name="Modal_TopCategory_List" >

                                    </select>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_module}}</label>
                                </div>
                                <div class="col-md-10" style="display: flex; margin-top: 8px;">
                                    <div id="top_leftbar" style="width: 70px;">{{cpgtxt_left}} {{cpgtxt_bar}} /</div>
                                    <div class="d-flex flex-wrap" id="ModalAddTopContent_leftbar">

                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2"></div>
                                <div class="col-md-10" style="display: flex;">
                                    <div id="top_rightbar" style="width: 80px;">{{cpgtxt_right}} {{cpgtxt_bar}} /</div>
                                    <div class="d-flex flex-wrap" id="ModalAddTopContent_rightbar">

                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2"></div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="btn btn-outline-light dash-my-btn-0" style="padding: 10px 15px;" @click.stop="changeTopEditModuleBtn()">
                                        <span> {{cbtntxt_edit}} </span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_fixed}}</label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_Topheader_fixed" id="Modal_Topheader_fixed_yes" value="yes" checked>{{cpgtxt_yes}}
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;"></label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_Topheader_fixed" id="Modal_Topheader_fixed_no" value="no">{{cpgtxt_no}}
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_padding}}</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="Modal_Topheader_padding" name="Modal_Topheader_padding">
                                </div>
                                <div class="col-md-6" style="font-size: 11px;">
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
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cbtntxt_text}}</label>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_Topheader_text" name="Modal_Topheader_text" >

                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_Topheader_text_size" name="Modal_Topheader_text_size" >
                                        <option value="11pt">11pt</option>
                                        <option value="12pt">12pt</option>
                                        <option value="13pt">13pt</option>
                                        <option value="14pt">14pt</option>
                                        <option value="15pt">15pt</option>
                                        <option value="16pt">16pt</option>
                                        <option value="17pt">17pt</option>
                                        <option value="18pt">18pt</option>
                                        <option value="19pt">19pt</option>
                                        <option value="20pt">20pt</option>
                                        <option value="22pt">22pt</option>
                                        <option value="25pt">25pt</option>
                                        <option value="27pt">27pt</option>
                                        <option value="30pt">30pt</option>
                                    </select>
                                </div>
                                <div class="col-md-3" style="display: flex;">
                                    <input type="hidden" name="topheader_text_color" id="topheader_text_color" value="#000000">
                                    <div id="topheader_text_colorpicker" class="m-r-15" data-color="#000000" style="border: 1px solid #000; width: 40px; cursor: pointer; background: #000000; height: 20px;"></div>
                                    <div id="topheader_text_colorpicker_value">#000000</div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_background}}</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="Modal_Topheader_background" name="Modal_Topheader_background" readonly>
                                </div>
                                <div class="col-md-2">
                                    <div class="btn btn-outline-light dash-my-btn-0" style="padding: 10px 15px;" @click.stop="addTopheaderImageBtn()">
                                        <svg t="1608175123337" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31858" width="200" height="200"><path d="M587.58656 750.78144A101.9648 101.9648 0 0 1 486.7072 758.784l-213.71904-100.62336-123.88864 64.5632a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77376a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-108.3648-42.2912-171.81696 117.1456z m176.62976-159.11936l118.3744 46.19264c31.50848 12.29312 47.09376 47.82592 34.81088 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l132.84864-69.23264a20.39296 20.39296 0 0 1 18.10944-0.36352l222.8736 104.92416a61.17888 61.17888 0 0 0 60.52352-4.80256l180.70528-123.20256a20.39296 20.39296 0 0 1 18.90304-2.1504z m-42.92608-177.19808l-133.70368 91.15648a101.9648 101.9648 0 0 1-100.87936 8.00768L314.17856 432.40448l-165.07904 86.02112a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192L721.29024 414.464z m4.8128-41.97376l156.4928 61.06624c31.50336 12.29312 47.08864 47.82592 34.80576 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l174.04416-90.69568a20.39296 20.39296 0 0 1 18.10944-0.36864l181.67296 85.53472a61.17888 61.17888 0 0 0 60.52864-4.80768l142.592-97.21344a20.39296 20.39296 0 0 1 18.89792-2.1504zM483.54304 98.98496L149.0944 273.26976a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80768l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-333.70624-130.22208a61.17376 61.17376 0 0 0-50.51392 2.7392z m399.04768 89.41568c31.50336 12.29312 47.08864 47.82592 34.80576 79.36a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.46432a101.9648 101.9648 0 0 1-100.87936 8.00768L132.46464 346.84928c-30.60224-14.40256-43.74016-50.91328-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l334.44352-174.2848a101.95968 101.95968 0 0 1 84.19328-4.56192l333.70624 130.22208z" p-id="31859"></path></svg>
                                        <span style="margin-left: 10px;"> {{cbtntxt_browse}} </span>
                                    </div>
                                </div>
                                <div class="col-md-4" style="font-size: 11px;">
                                    <div style="margin-left: 20px;"><font style="color: #b0b0af;">{{cpgtxt_readcontentfields}}</font></div>
                                    <div style="margin-left: 20px;">
                                        <font style="color: #b0b0af;">{{cpgtxt_specifiedsize}} : </font>
                                        <font style="color: #000;" class="awa_selectable_image_size"></font>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <font style="color: #b0b0af">{{cpgtxt_nogreaterthan}} : </font>
                                        <font style="color: #000;" class="awa_selectable_image_capacity"></font>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2"></div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" name="Modal_Topheader_background_check" id="Modal_Topheader_background_check" value="normal" checked>{{cpgtxt_color}}
                                    </div>
                                    <div class="col-md-8" style="display: flex;">
                                        <input type="hidden" name="topheader_background_color" id="topheader_background_color" value="#000000">
                                        <div id="topheader_background_colorpicker" class="m-r-15" data-color="#000000" style="border: 1px solid #000; width: 40px; cursor: pointer; background: #000000; height: 20px;"></div>
                                        <div id="topheader_background_colorpicker_value">#000000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12" style="text-align: center;">
                                <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addTopheaderContentBtn()">
                                    <span>+ {{cbtntxt_add}} </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Add Topheader Content Modal end-->
        <!--Edit Module Modal start-->
        <div class="modal fade" id="ModalEditModule">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 450px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_EditModule_Title">{{cbtntxt_edit}} {{cbtntxt_topheader}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="EditModuleModalBody" style="padding: 0px 0rem 2rem">
                        <div class="col-md-12" style="margin-top: 20px;">
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-4" style="display: flex;">
                                    <div class="btn btn-outline-light bar leftbar active dash-my-btn-0" style="padding: 10px 15px;" @click.stop="leftbarModuleBtn()">
                                        <span> {{cpgtxt_left}} {{cpgtxt_bar}} </span>
                                    </div>
                                </div>
                                <div style="display: flex;">
                                    <div class="btn btn-outline-light bar rightbar dash-my-btn-0" style="padding: 10px 15px;" @click.stop="rightbarModuleBtn()">
                                        <span> {{cpgtxt_right}} {{cpgtxt_bar}} </span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap">
                                <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                    <tbody id="awa_module_lists">

                                    </tbody>
                                </table>
                            </div>

                            <div class="col-md-12" style="text-align: center;">
                                <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="changeModuleBtn()">
                                    <span> {{cbtntxt_save}} {{cbtntxt_change}} </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Edit Module Modal end-->
        <!--Add Topheader Content Modal start-->
        <div class="modal fade" id="ModalAddHeadContent">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 650px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_HeadContent_Title">{{cbtntxt_add}} {{cbtntxt_header}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="AddHeadContentModalBody" style="padding: 0px 0rem 2rem">
                        <div class="col-md-12" style="margin-top: 20px;">
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_name}}</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="Modal_Headheader_Name" name="Modal_Headheader_Name">
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_category}}</label>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_HeadCategory_List" name="Modal_HeadCategory_List" >

                                    </select>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_module}}</label>
                                </div>
                                <div class="col-md-10" style="display: flex; margin-top: 8px;">
                                    <div id="head_leftbar" style="width: 70px;">{{cpgtxt_left}} {{cpgtxt_bar}} /</div>
                                    <div class="d-flex flex-wrap" id="ModalAddHeadContent_leftbar">

                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 10px;">
                                <div class="col-md-2"></div>
                                <div class="col-md-10" style="display: flex;">
                                    <div id="head_middlebar" style="width: 90px;">{{cpgtxt_middle}} {{cpgtxt_bar}} /</div>
                                    <div class="d-flex flex-wrap" id="ModalAddHeadContent_middlebar">

                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2"></div>
                                <div class="col-md-10" style="display: flex;">
                                    <div id="head_rightbar" style="width: 80px;">{{cpgtxt_right}} {{cpgtxt_bar}} /</div>
                                    <div class="d-flex flex-wrap" id="ModalAddHeadContent_rightbar">

                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2"></div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="btn btn-outline-light dash-my-btn-0" style="padding: 10px 15px;" @click.stop="changeHeadEditModuleBtn()">
                                        <span> {{cbtntxt_edit}} </span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_fixed}}</label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_Headheader_fixed" id="Modal_Headheader_fixed_yes" value="yes" checked>{{cpgtxt_yes}}
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;"></label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_Headheader_fixed" id="Modal_Headheader_fixed_no" value="no">{{cpgtxt_no}}
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_padding}}</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="Modal_Headheader_padding" name="Modal_Headheader_padding">
                                </div>
                                <div class="col-md-6" style="font-size: 11px;">
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
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cbtntxt_text}}</label>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_Headheader_text" name="Modal_Headheader_text" >

                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_Headheader_text_size" name="Modal_Headheader_text_size" >
                                        <option value="11pt">11pt</option>
                                        <option value="12pt">12pt</option>
                                        <option value="13pt">13pt</option>
                                        <option value="14pt">14pt</option>
                                        <option value="15pt">15pt</option>
                                        <option value="16pt">16pt</option>
                                        <option value="17pt">17pt</option>
                                        <option value="18pt">18pt</option>
                                        <option value="19pt">19pt</option>
                                        <option value="20pt">20pt</option>
                                        <option value="22pt">22pt</option>
                                        <option value="25pt">25pt</option>
                                        <option value="27pt">27pt</option>
                                        <option value="30pt">30pt</option>
                                    </select>
                                </div>
                                <div class="col-md-3" style="display: flex;">
                                    <input type="hidden" name="topheader_text_color" id="headheader_text_color" value="#000000">
                                    <div id="headheader_text_colorpicker" class="m-r-15" data-color="#000000" style="border: 1px solid #000; width: 40px; cursor: pointer; background: #000000; height: 20px;"></div>
                                    <div id="headheader_text_colorpicker_value">#000000</div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_background}}</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="Modal_Headheader_background" name="Modal_Headheader_background" readonly>
                                </div>
                                <div class="col-md-2">
                                    <div class="btn btn-outline-light dash-my-btn-0" style="padding: 10px 15px;" @click.stop="addHeadheaderImageBtn()">
                                        <svg t="1608175123337" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31858" width="200" height="200"><path d="M587.58656 750.78144A101.9648 101.9648 0 0 1 486.7072 758.784l-213.71904-100.62336-123.88864 64.5632a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77376a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-108.3648-42.2912-171.81696 117.1456z m176.62976-159.11936l118.3744 46.19264c31.50848 12.29312 47.09376 47.82592 34.81088 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l132.84864-69.23264a20.39296 20.39296 0 0 1 18.10944-0.36352l222.8736 104.92416a61.17888 61.17888 0 0 0 60.52352-4.80256l180.70528-123.20256a20.39296 20.39296 0 0 1 18.90304-2.1504z m-42.92608-177.19808l-133.70368 91.15648a101.9648 101.9648 0 0 1-100.87936 8.00768L314.17856 432.40448l-165.07904 86.02112a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192L721.29024 414.464z m4.8128-41.97376l156.4928 61.06624c31.50336 12.29312 47.08864 47.82592 34.80576 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l174.04416-90.69568a20.39296 20.39296 0 0 1 18.10944-0.36864l181.67296 85.53472a61.17888 61.17888 0 0 0 60.52864-4.80768l142.592-97.21344a20.39296 20.39296 0 0 1 18.89792-2.1504zM483.54304 98.98496L149.0944 273.26976a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80768l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-333.70624-130.22208a61.17376 61.17376 0 0 0-50.51392 2.7392z m399.04768 89.41568c31.50336 12.29312 47.08864 47.82592 34.80576 79.36a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.46432a101.9648 101.9648 0 0 1-100.87936 8.00768L132.46464 346.84928c-30.60224-14.40256-43.74016-50.91328-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l334.44352-174.2848a101.95968 101.95968 0 0 1 84.19328-4.56192l333.70624 130.22208z" p-id="31859"></path></svg>
                                        <span style="margin-left: 10px;"> {{cbtntxt_browse}} </span>
                                    </div>
                                </div>
                                <div class="col-md-4" style="font-size: 11px;">
                                    <div style="margin-left: 20px;"><font style="color: #b0b0af;">{{cpgtxt_readcontentfields}}</font></div>
                                    <div style="margin-left: 20px;">
                                        <font style="color: #b0b0af;">{{cpgtxt_specifiedsize}} : </font>
                                        <font style="color: #000;" class="awa_selectable_image_size"></font>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <font style="color: #b0b0af">{{cpgtxt_nogreaterthan}} : </font>
                                        <font style="color: #000;" class="awa_selectable_image_capacity"></font>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 10px;">
                                <div class="col-md-2"></div>
                                <div class="col-md-6" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" name="Modal_Headheader_background_check" id="Modal_Headheader_background_check" value="normal" checked>{{cpgtxt_color}}
                                    </div>
                                    <div class="col-md-8" style="display: flex;">
                                        <input type="hidden" name="topheader_background_color" id="headheader_background_color" value="#000000">
                                        <div id="headheader_background_colorpicker" class="m-r-15" data-color="#000000" style="border: 1px solid #000; width: 40px; cursor: pointer; background: #000000; height: 20px;"></div>
                                        <div id="headheader_background_colorpicker_value">#000000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12" style="text-align: center;">
                                <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addHeadheaderContentBtn()">
                                    <span>+ {{cbtntxt_add}} </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Add Topheader Content Modal end-->
        <!--Edit Head Module Modal start-->
        <div class="modal fade" id="ModalEditHeadModule">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 650px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_EditHeadModule_Title">{{cbtntxt_edit}} {{cbtntxt_header}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="EditHeadModuleModalBody" style="padding: 0px 0rem 2rem">
                        <div class="col-md-12" style="margin-top: 20px;">
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div style="display: flex; margin-right: 20px;">
                                    <div class="btn btn-outline-light bar leftbar active dash-my-btn-0" style="padding: 10px 15px;" @click.stop="leftbarHeadModuleBtn()">
                                        <span> {{cpgtxt_left}} {{cpgtxt_bar}} </span>
                                    </div>
                                </div>
                                <div style="display: flex; margin-right: 20px;">
                                    <div class="btn btn-outline-light bar middlebar dash-my-btn-0" style="padding: 10px 15px;" @click.stop="middlebarHeadModuleBtn()">
                                        <span> {{cpgtxt_middle}} {{cpgtxt_bar}} </span>
                                    </div>
                                </div>
                                <div style="display: flex;">
                                    <div class="btn btn-outline-light bar rightbar dash-my-btn-0" style="padding: 10px 15px;" @click.stop="rightbarHeadModuleBtn()">
                                        <span> {{cpgtxt_right}} {{cpgtxt_bar}} </span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap">
                                <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                    <tbody id="awa_headmodule_lists">

                                    </tbody>
                                </table>
                            </div>

                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_background}}</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="Modal_headerModule_background" name="Modal_headerModule_background" readonly>
                                </div>
                                <div class="col-md-2">
                                    <div class="btn btn-outline-light dash-my-btn-0" style="padding: 10px 15px;" @click.stop="addheaderModuleImageBtn()">
                                        <svg t="1608175123337" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31858" width="200" height="200"><path d="M587.58656 750.78144A101.9648 101.9648 0 0 1 486.7072 758.784l-213.71904-100.62336-123.88864 64.5632a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77376a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-108.3648-42.2912-171.81696 117.1456z m176.62976-159.11936l118.3744 46.19264c31.50848 12.29312 47.09376 47.82592 34.81088 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l132.84864-69.23264a20.39296 20.39296 0 0 1 18.10944-0.36352l222.8736 104.92416a61.17888 61.17888 0 0 0 60.52352-4.80256l180.70528-123.20256a20.39296 20.39296 0 0 1 18.90304-2.1504z m-42.92608-177.19808l-133.70368 91.15648a101.9648 101.9648 0 0 1-100.87936 8.00768L314.17856 432.40448l-165.07904 86.02112a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192L721.29024 414.464z m4.8128-41.97376l156.4928 61.06624c31.50336 12.29312 47.08864 47.82592 34.80576 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l174.04416-90.69568a20.39296 20.39296 0 0 1 18.10944-0.36864l181.67296 85.53472a61.17888 61.17888 0 0 0 60.52864-4.80768l142.592-97.21344a20.39296 20.39296 0 0 1 18.89792-2.1504zM483.54304 98.98496L149.0944 273.26976a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80768l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-333.70624-130.22208a61.17376 61.17376 0 0 0-50.51392 2.7392z m399.04768 89.41568c31.50336 12.29312 47.08864 47.82592 34.80576 79.36a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.46432a101.9648 101.9648 0 0 1-100.87936 8.00768L132.46464 346.84928c-30.60224-14.40256-43.74016-50.91328-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l334.44352-174.2848a101.95968 101.95968 0 0 1 84.19328-4.56192l333.70624 130.22208z" p-id="31859"></path></svg>
                                        <span style="margin-left: 10px;"> {{cbtntxt_browse}} </span>
                                    </div>
                                </div>
                                <div class="col-md-4" style="font-size: 11px;">
                                    <div style="margin-left: 20px;"><font style="color: #b0b0af;">{{cpgtxt_readcontentfields}}</font></div>
                                    <div style="margin-left: 20px;">
                                        <font style="color: #b0b0af;">{{cpgtxt_specifiedsize}} : </font>
                                        <font style="color: #000;" class="awa_selectable_image_size"></font>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <font style="color: #b0b0af">{{cpgtxt_nogreaterthan}} : </font>
                                        <font style="color: #000;" class="awa_selectable_image_capacity"></font>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2"></div>
                                <div class="col-md-6" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" name="Modal_headerModule_background_check" id="Modal_headerModule_background_check" value="normal" checked>{{cpgtxt_color}}
                                    </div>
                                    <div class="col-md-8" style="display: flex;">
                                        <input type="hidden" name="headerModule_background_color" id="headerModule_background_color" value="#000000">
                                        <div id="headerModule_background_colorpicker" class="m-r-15" data-color="#000000" style="border: 1px solid #000; width: 40px; cursor: pointer; background: #000000; height: 20px;"></div>
                                        <div id="headerModule_background_colorpicker_value">#000000</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12" style="text-align: center;">
                                <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="changeHeadModuleBtn()">
                                    <span> {{cbtntxt_save}} {{cbtntxt_change}} </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Edit Head Module Modal end-->
        <!--Add Subheader Content Modal start-->
        <div class="modal fade" id="ModalAddSubContent">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 650px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_SubContent_Title">{{cbtntxt_add}} {{cbtntxt_subheader}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="AddSubContentModalBody" style="padding: 0px 0rem 2rem">
                        <div class="col-md-12" style="margin-top: 20px;">
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_name}}</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="Modal_Subheader_Name" name="Modal_Subheader_Name">
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_category}}</label>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_Category_List" name="Modal_Category_List" >

                                    </select>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_style}}</label>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_Subheader_Styles" name="Modal_Subheader_Styles" >
                                        <option value="TL">{{cpgtxt_titleontheleft}}</option>
                                        <option value="TR">{{cpgtxt_titleontheright}}</option>
                                        <option value="BL">{{cpgtxt_breadcrumbsontheleft}}</option>
                                        <option value="BR">{{cpgtxt_breadcrumbsontheright}}</option>
                                        <option value="TBL">{{cpgtxt_titlebreadcrumbsontheleft}}</option>
                                        <option value="TBR">{{cpgtxt_titlebreadcrumbsontheright}}</option>
                                        <option value="TBM">{{cpgtxt_titlebreadcrumbsonthemiddle}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_hide}}</label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="Modal_Breadcrumbs_Hide" value="">{{cpgtxt_breadcrumbs}}
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;"></label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="Modal_Title_Hide" value="">{{cpgtxt_page}} {{cpgtxt_title}}
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_fixed}}</label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_Subheader_fixed" id="Modal_Subheader_fixed_yes" value="yes" checked>{{cpgtxt_yes}}
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;"></label>
                                </div>
                                <div class="col-md-4" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Modal_Subheader_fixed" id="Modal_Subheader_fixed_no" value="no">{{cpgtxt_no}}
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_padding}}</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="Modal_Subheader_padding" name="Modal_Subheader_padding">
                                </div>
                                <div class="col-md-6" style="font-size: 11px;">
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
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_page}} {{cpgtxt_title}}</label>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_Subheader_pagetitle" name="Modal_Subheader_pagetitle" >

                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_Subheader_pagetitle_size" name="Modal_Subheader_pagetitle_size" >
                                        <option value="11pt">11pt</option>
                                        <option value="12pt">12pt</option>
                                        <option value="13pt">13pt</option>
                                        <option value="14pt">14pt</option>
                                        <option value="15pt">15pt</option>
                                        <option value="16pt">16pt</option>
                                        <option value="17pt">17pt</option>
                                        <option value="18pt">18pt</option>
                                        <option value="19pt">19pt</option>
                                        <option value="20pt">20pt</option>
                                        <option value="22pt">22pt</option>
                                        <option value="25pt">25pt</option>
                                        <option value="27pt">27pt</option>
                                        <option value="30pt">30pt</option>
                                    </select>
                                </div>
                                <div class="col-md-3" style="display: flex;">
                                    <input type="hidden" name="subheader_pagetitle_color" id="subheader_pagetitle_color" value="#000000">
                                    <div id="subheader_pagetitle_colorpicker" class="m-r-15" data-color="#000000" style="border: 1px solid #000; width: 40px; cursor: pointer; background: #000000; height: 20px;"></div>
                                    <div id="subheader_pagetitle_colorpicker_value">#000000</div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_breadcrumbs}}</label>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_Subheader_breadcrumbs" name="Modal_Subheader_breadcrumbs" >

                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_Subheader_breadcrumbs_size" name="Modal_Subheader_breadcrumbs_size" >
                                        <option value="11pt">11pt</option>
                                        <option value="12pt">12pt</option>
                                        <option value="13pt">13pt</option>
                                        <option value="14pt">14pt</option>
                                        <option value="15pt">15pt</option>
                                        <option value="16pt">16pt</option>
                                        <option value="17pt">17pt</option>
                                        <option value="18pt">18pt</option>
                                        <option value="19pt">19pt</option>
                                        <option value="20pt">20pt</option>
                                        <option value="22pt">22pt</option>
                                        <option value="25pt">25pt</option>
                                        <option value="27pt">27pt</option>
                                        <option value="30pt">30pt</option>
                                    </select>
                                </div>
                                <div class="col-md-3" style="display: flex;">
                                    <input type="hidden" name="subheader_breadcrumbs_color" id="subheader_breadcrumbs_color" value="#000000">
                                    <div id="subheader_breadcrumbs_colorpicker" class="m-r-15" data-color="#000000" style="border: 1px solid #000; width: 40px; cursor: pointer; background: #000000; height: 20px;"></div>
                                    <div id="subheader_breadcrumbs_colorpicker_value">#000000</div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_background}}</label>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="Modal_Subheader_background" name="Modal_Subheader_background" readonly>
                                </div>
                                <div class="col-md-2">
                                    <div class="btn btn-outline-light dash-my-btn-0" style="padding: 10px 15px;" @click.stop="addSubheaderImageBtn()">
                                        <svg t="1608175123337" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31858" width="200" height="200"><path d="M587.58656 750.78144A101.9648 101.9648 0 0 1 486.7072 758.784l-213.71904-100.62336-123.88864 64.5632a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77376a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-108.3648-42.2912-171.81696 117.1456z m176.62976-159.11936l118.3744 46.19264c31.50848 12.29312 47.09376 47.82592 34.81088 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l132.84864-69.23264a20.39296 20.39296 0 0 1 18.10944-0.36352l222.8736 104.92416a61.17888 61.17888 0 0 0 60.52352-4.80256l180.70528-123.20256a20.39296 20.39296 0 0 1 18.90304-2.1504z m-42.92608-177.19808l-133.70368 91.15648a101.9648 101.9648 0 0 1-100.87936 8.00768L314.17856 432.40448l-165.07904 86.02112a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192L721.29024 414.464z m4.8128-41.97376l156.4928 61.06624c31.50336 12.29312 47.08864 47.82592 34.80576 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l174.04416-90.69568a20.39296 20.39296 0 0 1 18.10944-0.36864l181.67296 85.53472a61.17888 61.17888 0 0 0 60.52864-4.80768l142.592-97.21344a20.39296 20.39296 0 0 1 18.89792-2.1504zM483.54304 98.98496L149.0944 273.26976a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80768l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-333.70624-130.22208a61.17376 61.17376 0 0 0-50.51392 2.7392z m399.04768 89.41568c31.50336 12.29312 47.08864 47.82592 34.80576 79.36a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.46432a101.9648 101.9648 0 0 1-100.87936 8.00768L132.46464 346.84928c-30.60224-14.40256-43.74016-50.91328-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l334.44352-174.2848a101.95968 101.95968 0 0 1 84.19328-4.56192l333.70624 130.22208z" p-id="31859"></path></svg>
                                        <span style="margin-left: 10px;"> {{cbtntxt_browse}} </span>
                                    </div>
                                </div>
                                <div class="col-md-4" style="font-size: 11px;">
                                    <div style="margin-left: 20px;"><font style="color: #b0b0af;">{{cpgtxt_readcontentfields}}</font></div>
                                    <div style="margin-left: 20px;">
                                        <font style="color: #b0b0af;">{{cpgtxt_specifiedsize}} : </font>
                                        <font style="color: #000;" class="awa_selectable_image_size"></font>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <font style="color: #b0b0af">{{cpgtxt_nogreaterthan}} : </font>
                                        <font style="color: #000;" class="awa_selectable_image_capacity"></font>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2"></div>
                                <div class="col-md-6" style="display: flex;">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" name="Modal_Subheader_background_check" id="Modal_Subheader_background_check" value="normal" checked>{{cpgtxt_color}}
                                    </div>
                                    <div class="col-md-8" style="display: flex;">
                                        <input type="hidden" name="subheader_background_color" id="subheader_background_color" value="#000000">
                                        <div id="subheader_background_colorpicker" class="m-r-15" data-color="#000000" style="border: 1px solid #000; width: 40px; cursor: pointer; background: #000000; height: 20px;"></div>
                                        <div id="subheader_background_colorpicker_value">#000000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12" style="text-align: center;">
                                <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addSubheaderContentBtn()">
                                    <span>+ {{cbtntxt_add}} </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Add Subheader Content Modal end-->

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
    .awah_page_button{
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
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import media_module from "../../assets/jsfunc/media_module";

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var preview='';
    var tabstatus=0;
    var vueOBJ=null;
    var wwgfield='topheader';
    var btntxt_save = "";
    var btntxt_delete = "";
    var btntxt_edit = "";
    var btntxt_change = "";
    var pgtxt_name = "";
    var checked_del_items = new Array();
    var categorys = new Array();
    var systemTexts = new Array();
    var sub_c_id = 0;
    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var is_edit = false;
    var subedit_id = 0;
    var modal_breadcrumbs_hide_check = 0;
    var modal_title_hide_check = 0;
    var modal_fixed_check = 1;
    var modal_bgcolor_check = 0;
    var modal_content_name = "";
    var modal_category_id = 0;
    var modal_style = "";
    var modal_padding = "";
    var modal_pagetitle_id = 0;
    var modal_pagetitle_size = 0;
    var modal_pagetitle_color = "";
    var modal_breadcrumbs_id = 0;
    var modal_breadcrumbs_size = 0;
    var modal_breadcrumbs_color = "";
    var modal_background_image = "";
    var modal_background_color = "";
    var modal_left_bg = "";
    var modal_left_color = "#000000";
    var modal_left_check = 0;
    var modal_right_bg = "";
    var modal_right_color = "#000000";
    var modal_right_check = 0;
    var modal_middle_bg = "";
    var modal_middle_color = "#000000";
    var modal_middle_check = 0;

    var pgtxt_weblanguage = "";
    var pgtxt_location = "";
    var pgtxt_currency = "";
    var pgtxt_register = "";
    var pgtxt_login = "";
    var pgtxt_remind = "";
    var pgtxt_member = "";
    var pgtxt_logo = "";
    var pgtxt_slogan = "";
    var pgtxt_menu = "";
    var pgtxt_searchbar = "";
    var pgtxt_language = "";
    var is_leftnumbers = [0,0,0,0,0,0,0,0];
    var left_numbers = [1,2,3,4,5,6,7,8];
    var is_middlenumbers = [0,0,0,0,0,0,0,0];
    var middle_numbers = [1,2,3,4,5,6,7,8];
    var is_rightnumbers = [0,0,0,0,0,0,0,0];
    var right_numbers = [1,2,3,4,5,6,7,8];
    var bar_tabs = 0;
    var bar_str = new Array();
    var barhead_str = new Array();
    var media_dlg = 0;
    var image_size = "";
    var image_capacity = "";
    var back_size = "";
    var back_capacity = "";
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
            if(tabstatus == 0) {
                getTopheaderContentList(1);
            }else if(tabstatus == 1) {
                getHeadheaderContentList(1);
            }else if(tabstatus == 2) {
                getSubheaderContentList(1);
            }
        });
    }
    function addCategoryFunc() {
        var category_name = $('#category_item_name').val();
        $.ajax({
            url: 'admin.addAWAHeadCategory',
            data: {
                userid: userid,
                sc_id:sub_c_id,
                category_name:category_name,
                tabstatus:tabstatus
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    sub_c_id = data.scid;
                    categorys = new Array();
                    if(data.lists != null && data.lists != '')
                        categorys = data.lists;
                    modifyFunc();
                    $('#ModalAddCategory').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function editCategoryList() {
        $('#awa_category_lists').html('');
        var tags = "";
        for(var i = 0; i < categorys.length; i++){
            var id = categorys[i].scid;
            var name = categorys[i].scname;

            tags += '<tr style="border-bottom: 1px solid #e4e2e2;">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="text" id="subheader_category-'+id+'" value="'+name+'" style="border: none;">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="awa_category_item-'+id+'" name="awa_category_item-'+id+'">';
            tags += '               <option selected value="">'+btntxt_edit+'</option>';
            tags += '               <option value="save">'+btntxt_save+'</option>';
            tags += '               <option value="delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }
        $('#awa_category_lists').html(tags);

        $('select[id^="awa_category_item-"]').change(function(){
            var id = $(this).attr("id");
            var event_id = id.split('-')[1];
            var sel_val = $(this).val();
            var scname = $('#subheader_category-'+event_id).val();
            if (sel_val == "save") {
                $.ajax({
                    url: 'admin.saveAWAHeadCategory',
                    data: {
                        userid: userid,
                        sc_id:event_id,
                        sc_name:scname,
                        tabstatus:tabstatus
                    },
                    type: 'POST',
                    success: function (data) {
                        if (data.msg === "ok") {
                            sub_c_id = data.scid;
                            categorys = new Array();
                            if(data.lists != null && data.lists != '')
                                categorys = data.lists;
                            modifyFunc();
                        } else {
                            console.log(data.msg);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            } else if (sel_val == "delete") {
                if (window.confirm(pgtxt_wantdeleteitem)) {
                    $.ajax({
                        url: 'admin.deleteAWAHeadCategory',
                        data: {
                            sc_id:event_id,
                            userid: userid,
                            tabstatus:tabstatus
                        },
                        type: 'POST',
                        success: function (data) {
                            if (data.msg === "ok") {
                                sub_c_id = data.scid;
                                categorys = new Array();
                                if(data.lists != null && data.lists != '')
                                    categorys = data.lists;
                                modifyFunc();
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
        });
    }
    function getCategoryList() {
        $.ajax({
            url: 'admin.getAWACategoryList',
            data: {
                userid: userid,
                sc_id:sub_c_id,
                tabstatus:tabstatus
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    systemTexts = data.texts;
                    sub_c_id = data.scid;
                    categorys = new Array();
                    if(data.lists != null && data.lists != '')
                        categorys = data.lists;

                    getImageStyleList(data.images, data.selimg);
                    modifyFunc();
                    if(tabstatus == 0)
                        $('#Modal_TopCategory_List').html(showCategoryList());
                    if(tabstatus == 1)
                        $('#Modal_HeadCategory_List').html(showCategoryList());
                    else if(tabstatus == 2)
                        $('#Modal_Category_List').html(showCategoryList());
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function showCategoryList() {
        var tags = '';
        for(var i = 0; i < categorys.length; i++){
            var id = categorys[i].scid;
            var name = categorys[i].scname;
            tags += '<option value="'+id+'">'+name+'</option>';
        }
        return tags;
    }
    function modifyFunc() {
        editCategoryList();
        showSearchCategoryList();

        $('select[id^="awa_system_field_images-"]').change(function(){
            var imgstyle_id = $(this).val();
            $.ajax({
                url: 'admin.setAWAHeadBackground',
                data: {
                    userid: userid,
                    imgstyle_id:imgstyle_id,
                    tabstatus:tabstatus
                },
                type: 'POST',
                success: function (data) {
                    modalSelectImageCondition(data.lists);
                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        });
    }
    function showSearchCategoryList() {
        var tags = '<option selected value="0" class="data-ajax" data-ajax="pgtxt_name">'+pgtxt_name+'</option>';
        tags += showCategoryList();
        if(tabstatus == 0)
            $('#topheader_category_items').html(tags);
        else if(tabstatus == 1)
            $('#headheader_category_items').html(tags);
        else if(tabstatus == 2)
            $('#subheader_category_items').html(tags);
    }
    function getImageStyleList(lists, selimg) {
        var tags = '';
        if(selimg == 0)
            tags += '<option selected value=""></option>';
        else
            tags += '<option value=""></option>';
        for(var i = 0; i < lists.length; i++){
            var id = lists[i].id;
            var name = lists[i].name;
            if(selimg == id) {
                tags += '<option selected value="' + id + '">' + name + '</option>';
                modalSelectImageCondition(lists[i]);
            }
            else
                tags += '<option value="'+id+'">'+name+'</option>';
        }
        var id = 'awa_system_field_images-top';
        if(tabstatus == 0)
            id = 'awa_system_field_images-top';
        if(tabstatus == 1)
            id = 'awa_system_field_images-head';
        else if(tabstatus == 2)
            id = 'awa_system_field_images-sub';


        $('#'+id).html(tags);
    }
    function modalSelectImageCondition(data) {
        image_size = data.size;
        image_capacity = data.capacity;
        var size = image_size.split('*');
        $('.awa_selectable_image_size').text(size[0]+"px "+size[1]+"px");
        $('.awa_selectable_image_capacity').text(image_capacity+" kb");
    }
    function getSystemFieldTextList() {
        var tags = '';
        for(var i = 0; i < systemTexts.length; i++){
            var id = systemTexts[i].id;
            var name = systemTexts[i].name;
            tags += '<option value="'+id+'">'+name+'</option>';
        }
        if(tabstatus == 0)
            $('#Modal_Topheader_text').html(tags);
        else if(tabstatus == 1)
            $('#Modal_Headheader_text').html(tags);
        else if(tabstatus == 2){
            $('#Modal_Subheader_pagetitle').html(tags);
            $('#Modal_Subheader_breadcrumbs').html(tags);
        }
    }
    function initialize() {
        sub_c_id = 0;
        is_edit = false;
        checked_del_items = new Array();
        subedit_id = 0;
        modal_breadcrumbs_hide_check = 0;
        modal_title_hide_check = 0;
        modal_fixed_check = 1;
        modal_bgcolor_check = 0;
        modal_content_name = "";
        modal_category_id = 0;
        modal_style = "";
        modal_padding = "";
        modal_pagetitle_id = 0;
        modal_pagetitle_size = 0;
        modal_pagetitle_color = "";
        modal_breadcrumbs_id = 0;
        modal_breadcrumbs_size = 0;
        modal_breadcrumbs_color = "";
        modal_background_image = "";
        modal_background_color = "";
        bar_tabs = 0;
        is_leftnumbers = [0,0,0,0,0,0,0,0];
        left_numbers = [1,2,3,4,5,6,7,8];
        is_middlenumbers = [0,0,0,0,0,0,0,0];
        middle_numbers = [1,2,3,4,5,6,7,8];
        is_rightnumbers = [0,0,0,0,0,0,0,0];
        right_numbers = [1,2,3,4,5,6,7,8];

        getSystemFieldTextList();

        $('#Modal_TopCategory_List').html(showCategoryList());
        TopheaderAddModalEvent();
        $('#ModalAddTopContent_leftbar').html('');
        $('#ModalAddTopContent_rightbar').html('');
        $('#Modal_Topheader_Name').val('');
        $('#Modal_Topheader_fixed_yes').attr("checked", true);
        $('#Modal_Topheader_fixed_no').attr("checked", false);
        $('#Modal_Topheader_padding').val('');
        $('#Modal_Topheader_text_size').val('11pt');
        $('#Modal_Topheader_background').val('');
        $('#Modal_Topheader_background_check').attr('checked', false);
        setTopheaderColorPickers('#000000', '#000000');
        editModuleView(0);

        $('#Modal_HeadCategory_List').html(showCategoryList());
        HeadheaderAddModalEvent();
        $('#ModalAddHeadContent_leftbar').html('');
        $('#ModalAddHeadContent_rightbar').html('');
        $('#ModalAddHeadContent_middlebar').html('');
        $('#Modal_Headheader_Name').val('');
        $('#Modal_Headheader_fixed_yes').attr("checked", true);
        $('#Modal_Headheader_fixed_no').attr("checked", false);
        $('#Modal_Headheader_padding').val('');
        $('#Modal_Headheader_text_size').val('11pt');
        $('#Modal_Headheader_background').val('');
        $('#Modal_Headheader_background_check').attr('checked', false);
        setHeadheaderColorPickers('#000000', '#000000');
        setHeadHeaderModuleColorPickers();
        editHeadModuleView(0);

        $('#Modal_Category_List').html(showCategoryList());
        SubheaderAddModalEvent();
        $('#Modal_Subheader_Name').val('');
        $('#Modal_Subheader_Styles').val("TL");
        $('#Modal_Breadcrumbs_Hide').attr('checked', false);
        $('#Modal_Title_Hide').attr('checked', false);
        $('#Modal_Subheader_fixed_yes').attr("checked", true);
        $('#Modal_Subheader_fixed_no').attr("checked", false);
        $('#Modal_Subheader_padding').val('');
        $('#Modal_Subheader_pagetitle_size').val('11pt');
        $('#Modal_Subheader_breadcrumbs_size').val('11pt');
        $('#Modal_Subheader_background').val('');
        $('#Modal_Subheader_background_check').attr('checked', false);
        setSubheaderColorPickers('#000000', '#000000', '#000000');
    }
    function ChangeItemNameSelectTab() {
        $('#topheader_category_items').change(function () {
            getTopheaderContentList(1);
        });
        $('#headheader_category_items').change(function () {
            getHeadheaderContentList(1);
        });
        $('#subheader_category_items').change(function () {
            getSubheaderContentList(1);
        });
    }
    // Topheader tab start /////////////////////////////////////////////////////////////////////////////////////////////
    function initTopHeader() {
        getCategoryList();
        $('#awah_top_category_add').click(function () {
            if(permss.pcreate == 1) {
                $('#category_item_name').val('')
                $('#ModalAddCategory').modal('show');
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });

        $('#awah_top_category_edit').click(function () {
            if(permss.pwrite == 1) {
                editCategoryList();
                $('#ModalEditCategory').modal('show');
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });
    }
    function TopheaderAddModalEvent() {
        $('input[name="Modal_Topheader_fixed"]').on( "click", function () {
            var v = $(this).val();
            if(v=='yes'){
                $('#Modal_Topheader_fixed_yes').attr("checked", true);
                $('#Modal_Topheader_fixed_no').attr("checked", false);
                modal_fixed_check = 1;
            }
            else if(v=='no'){
                $('#Modal_Topheader_fixed_yes').attr("checked", false);
                $('#Modal_Topheader_fixed_no').attr("checked", true);
                modal_fixed_check = 0;
            }
        } );
    }
    function setTopheaderColorPickers(color1, color2) {
        $('#topheader_text_colorpicker_value').text(color1);
        $('#topheader_text_color').val(color1);
        $('#topheader_background_colorpicker_value').text(color2);
        $('#topheader_background_color').val(color2);

        const topheader_text_colorpicker = document.getElementById('topheader_text_colorpicker');
        let picker1 = new ColorPicker(topheader_text_colorpicker, color1);
        topheader_text_colorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            $('#topheader_text_colorpicker_value').text(color);
            $('#topheader_text_color').val(color);

        });

        const topheader_background_colorpicker = document.getElementById('topheader_background_colorpicker');
        let picker2 = new ColorPicker(topheader_background_colorpicker, color2);
        topheader_background_colorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            $('#topheader_background_colorpicker_value').text(color);
            $('#topheader_background_color').val(color);
        });
    }
    function editModuleView(sort) {
        $('#awa_module_lists').html('');
        var tags = '';
        if(sort == 0){
            for(var i = 0; i < 7; i++){
                var id = i;
                var number = left_numbers[i];
                var is_num = is_leftnumbers[i];
                tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + bar_str[i] + '">';
                tags += '   <td style="width: 20px; margin-right: 0px;">';
                if(is_num == 0) {
                    tags += '<input class="form-check" type="checkbox" id="moduleCheckbox-' + id + '" value="">';
                }
                else {
                    tags += '<input class="form-check" type="checkbox" checked id="moduleCheckbox-' + id + '" value="">';
                }
                tags += '   </td>';
                tags += '   <td style="width: 350px;">' + bar_str[i] + '</td>';
                tags += '   <td style="width: 70px;">';
                if(is_num == 0) {
                    tags += '<input class="form-control module_sort" type="text" id="module_sort-' + id + '" readonly value="' + number + '" style="text-align: center; border: 1px solid #c1c1c1; height: 30px; background-color: #ededed;">';
                }
                else{
                    tags += '<input class="form-control module_sort" type="text" id="module_sort-' + id + '" value="' + number + '" style="text-align: center; border: 1px solid #c1c1c1; height: 30px; background-color: white;">';
                }
                tags += '   </td>';
                tags += '</tr>';
            }
        }
        else {
            for(var i = 6; i >= 0; i--){
                var id = i;
                var number = right_numbers[i];
                var is_num = is_rightnumbers[i];
                tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + bar_str[i] + '">';
                tags += '   <td style="width: 20px; margin-right: 0px;">';
                if(is_num == 0) {
                    tags += '<input class="form-check" type="checkbox" id="moduleCheckbox-' + id + '" value="">';
                }
                else {
                    tags += '<input class="form-check" type="checkbox" checked id="moduleCheckbox-' + id + '" value="">';
                }
                tags += '   </td>';
                tags += '   <td style="width: 350px;">' + bar_str[i] + '</td>';
                tags += '   <td style="width: 70px;">';
                if(is_num == 0) {
                    tags += '<input class="form-control module_sort" type="text" id="module_sort-' + id + '" readonly value="' + number + '" style="text-align: center; border: 1px solid #c1c1c1; height: 30px; background-color: #ededed;">';
                }
                else{
                    tags += '<input class="form-control module_sort" type="text" id="module_sort-' + id + '" value="' + number + '" style="text-align: center; border: 1px solid #c1c1c1; height: 30px; background-color: white;">';
                }
                tags += '   </td>';
                tags += '</tr>';
            }
        }

        $('#awa_module_lists').html(tags);

        $('input[id^="moduleCheckbox-"]').change(function() {
            var id = $(this).attr("id");
            var num_id = id.split('-')[1];
            var val = 0;
            if ($(this).is(':checked')) {
                val = 1;
                $('#module_sort-'+num_id).css('background-color', '#ffffff');
                $('#module_sort-'+num_id).attr('readonly', false);
            }
            else{
                val = 0;
                $('#module_sort-'+num_id).css('background-color', '#ededed');
                $('#module_sort-'+num_id).attr('readonly', true);
            }
            for(var i = 0; i < 7; i++){
                if(i == num_id){
                    if(bar_tabs == 0)
                        is_leftnumbers[i] = val;
                    else
                        is_rightnumbers[i] = val;
                }
            }

        });
        $('input[id^="module_sort-"]').on('input', function (e) {
            var id = $(this).attr("id");
            var num_id = id.split('-')[1];
            var val = 0;

            for(var i = 0; i < 7; i++){
                if(i == num_id){
                    if(bar_tabs == 0)
                        left_numbers[i] = $(this).val();
                    else
                        right_numbers[i] = $(this).val();
                }
            }

        });
    }
    function showTopheaderModulepart() {
        var tags = "";
        var strs = new Array();
        $('#ModalAddTopContent_leftbar').html('');
        for(var i = 0; i < is_leftnumbers.length - 1; i++){
            if(is_leftnumbers[i] == 1) {
                strs.push(bar_str[i]);
            }
        }
        for(var j = 0; j < strs.length; j++){
            var str = strs[j];
            if(j != strs.length - 1)
                str += ",";
            tags += '<span class="modal_top_bar">' + str + '</span>';
        }
        $('#ModalAddTopContent_leftbar').html(tags);

        tags = "";
        strs = new Array();
        $('#ModalAddTopContent_rightbar').html('');
        for(var i = 0; i < is_rightnumbers.length - 1; i++){
            if(is_rightnumbers[i] == 1) {
                strs.push(bar_str[i]);
            }
        }
        for(var j = 0; j < strs.length; j++){
            var str = strs[j];
            if(j != strs.length - 1)
                str += ",";
            tags += '<span class="modal_top_bar">' + str + '</span>';
        }
        $('#ModalAddTopContent_rightbar').html(tags);
    }
    function TopheaderAddModalFunc() {
        modal_content_name = $('#Modal_Topheader_Name').val();
        modal_category_id = $('#Modal_TopCategory_List').val();
        if($('#Modal_Topheader_background_check').is(':checked')){
            modal_bgcolor_check = 1;
        }
        else {
            modal_bgcolor_check = 0;
        }
        modal_padding = $('#Modal_Topheader_padding').val();
        modal_pagetitle_id = $('#Modal_Topheader_text').val();
        modal_pagetitle_size = $('#Modal_Topheader_text_size').val();
        modal_pagetitle_color = $('#topheader_text_color').val();
        modal_background_image = $('#Modal_Topheader_background').val();
        modal_background_color = $('#topheader_background_color').val();
    }
    function topContentList(lists, cg_lists) {
        $('#awa_topheader_content_lists').html('');
        var tags = '';
        for(var i = 0; i < lists.length; i++){
            var id = lists[i].id;
            var name = lists[i].name;
            var category = cg_lists[i];

            tags += '<tr class="top_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="topcontCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>' + category + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="top_content_list_edit-'+id+'" name="top_content_list_edit-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#awa_topheader_content_lists').html(tags);

        $('input[id^="topcontCheckbox_"]').change(function() {
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

        $('select[id^="top_content_list_edit-"]').change(function(){
            var id = $(this).attr("id");
            var event_id = id.split('-')[1];
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if(permss.pwrite == 1) {
                    is_edit = true;
                    subedit_id = event_id;
                    $('#Modal_Category_List').html(showCategoryList());
                    getSystemFieldTextList();
                    TopheaderAddModalEvent();
                    editTopContentModal(event_id);
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "delete") {
                if(permss.pdelete == 1) {
		    myjs.data.confirmAlert(deldteTopheaderContentFunc, event_id, 'pgtxt_wantdeleteitem');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });
    }
    function editTopContentModal(id) {
        $.ajax({
            url: 'admin.showAWAHeadTopheaderContentItem',
            data: {
                userid:userid,
                id:id
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        $('#Modal_Topheader_Name').val(lists.name);
                        $('#Modal_TopCategory_List').val(lists.scid);
                        if(lists.fixed == 0){
                            $('#Modal_Topheader_fixed_yes').attr("checked", false);
                            $('#Modal_Topheader_fixed_no').attr("checked", true);
                        }
                        else{
                            $('#Modal_Topheader_fixed_yes').attr("checked", true);
                            $('#Modal_Topheader_fixed_no').attr("checked", false);
                        }
                        $('#Modal_Topheader_padding').val(lists.padding);
                        $('#Modal_Topheader_text').val(lists.text);
                        $('#Modal_Topheader_text_size').val(lists.text_size);
                        $('#Modal_Topheader_background').val(lists.bg_img);
                        back_size = lists.bg_size;
                        var size = back_size.split('*');
                        back_capacity = lists.bg_capacity;
                        $('.awa_selectable_image_size').text(size[0]+"px "+size[1]+"px");
                        $('.awa_selectable_image_capacity').text(back_capacity +" kb");

                        if(lists.bg_color_check == 1)
                            $('#Modal_Topheader_background_check').attr('checked', true);
                        else
                            $('#Modal_Topheader_background_check').attr('checked', false);
                        setTopheaderColorPickers(lists.text_color, lists.bg_color);
                        is_leftnumbers = $.parseJSON(lists.leftbar);
                        left_numbers = $.parseJSON(lists.leftbar_num);
                        is_rightnumbers = $.parseJSON(lists.rightbar);
                        right_numbers = $.parseJSON(lists.rightbar_num);
                        showTopheaderModulepart();
                        $('#ModalAddTopContent').modal('show');
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
    function addTopheaderContentFunc() {
        TopheaderAddModalFunc();
        var search_id = $('#topheader_category_items').val();
        var search_txt = $('#topheader_search_cont').val();

        var postData = {
            userid: userid,
            search_id:search_id,
            search_txt:search_txt,
            pstart:pstart,
            pcnt:pcnt,
            modal_content_name:modal_content_name,
            modal_category_id:modal_category_id,
            modal_left_bar:is_leftnumbers,
            modal_left_bar_num:left_numbers,
            modal_right_bar:is_rightnumbers,
            modal_right_bar_num:right_numbers,
            modal_fixed_check:modal_fixed_check,
            modal_bgcolor_check:modal_bgcolor_check,
            modal_padding:modal_padding,
            modal_text_id:modal_pagetitle_id,
            modal_text_size:modal_pagetitle_size,
            modal_text_color:modal_pagetitle_color,
            modal_background_image:modal_background_image,
            modal_background_color:modal_background_color,
            modal_background_size:image_size,
            modal_background_capacity:image_capacity
        }
        $.ajax({
            url: 'admin.setAWAHeadTopheaderContentList',
            data: postData,
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    $('#ModalAddTopContent').modal('hide');
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        topContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_topheader_content_lists').html('');
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
    function getTopheaderContentList(is_search) {
        var search_id = $('#topheader_category_items').val();
        var search_txt = $('#topheader_search_cont').val();
        if(is_search == 0)
        {
            search_id = "";
            search_txt = "";
        }
        $.ajax({
            url: 'admin.getAWAHeadTopheaderContentList',
            data: {
                userid: userid,
                search_id:search_id,
                search_txt:search_txt,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        topContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_topheader_content_lists').html('');
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
    function editTopheaderContentFunc() {
        TopheaderAddModalFunc();
        var search_id = $('#topheader_category_items').val();
        var search_txt = $('#topheader_search_cont').val();
        var postData = {
            userid: userid,
            editid:subedit_id,
            search_id:search_id,
            search_txt:search_txt,
            pstart:pstart,
            pcnt:pcnt,
            modal_content_name:modal_content_name,
            modal_category_id:modal_category_id,
            modal_left_bar:is_leftnumbers,
            modal_left_bar_num:left_numbers,
            modal_right_bar:is_rightnumbers,
            modal_right_bar_num:right_numbers,
            modal_fixed_check:modal_fixed_check,
            modal_bgcolor_check:modal_bgcolor_check,
            modal_padding:modal_padding,
            modal_text_id:modal_pagetitle_id,
            modal_text_size:modal_pagetitle_size,
            modal_text_color:modal_pagetitle_color,
            modal_background_image:modal_background_image,
            modal_background_color:modal_background_color,
            modal_background_size:back_size,
            modal_background_capacity:back_capacity
        }
        $.ajax({
            url: 'admin.editAWAHeadTopheaderContentList',
            data: postData,
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    $('#ModalAddTopContent').modal('hide');
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        topContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_topheader_content_lists').html('');
                    var total = data.total;
                    if(total <= 0){
                        $('.ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    is_edit = false;
                    subedit_id = 0;
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function deldteTopheaderContentFunc(del_id) {
        var search_id = $('#topheader_category_items').val();
        var search_txt = $('#topheader_search_cont').val();

        $.ajax({
            url: 'admin.deleteAWAHeadTopheaderContentList',
            data: {
                userid: userid,
                id: del_id,
                search_id:search_id,
                search_txt:search_txt,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        topContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_topheader_content_lists').html('');
                    var total = data.total;
                    if (total <= 0) {
                        $('.ssmu_page_nav').html('');
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
    function allDeleteTopCheckedFunc() {
        $('#topheader_selected_all_delete').click(function () {
            if (permss.pdelete == 0) {
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            var search_id = $('#topheader_category_items').val();
            var search_txt = $('#topheader_search_cont').val();
            if(checked_del_items.length > 0) {
                $.ajax({
                    url: 'admin.allDeleteAWATopheaderChecked',
                    data: {
                        userid: userid,
                        ids: checked_del_items,
                        search_id:search_id,
                        search_txt:search_txt,
                        pstart:pstart,
                        pcnt:pcnt
                    },
                    type: 'POST',
                    success: function (data) {
                        if (data.msg === "ok") {
                            var lists = data.lists;
                            var cg_lists = data.category_list;
                            if(lists !== null && lists != "") {
                                topContentList(lists, cg_lists);
                            }
                            else
                                $('#awa_topheader_content_lists').html('');
                            var total = data.total;
                            if (total <= 0) {
                                $('.ssmu_page_nav').html('');
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
        });
    }
    // Topheader tab end ///////////////////////////////////////////////////////////////////////////////////////////////

    // Headheader tab start ////////////////////////////////////////////////////////////////////////////////////////////
    function initHeadHeader() {
        getCategoryList();
        $('#awah_head_category_add').click(function () {
            if(permss.pcreate == 1){
                $('#category_item_name').val('')
                $('#ModalAddCategory').modal('show');
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });

        $('#awah_head_category_edit').click(function () {
            if(permss.pwrite == 1){
                editCategoryList();
                $('#ModalEditCategory').modal('show');
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });
    }
    function HeadheaderAddModalEvent() {
        $('input[name="Modal_Headheader_fixed"]').on( "click", function () {
            var v = $(this).val();
            if(v=='yes'){
                $('#Modal_Headheader_fixed_yes').attr("checked", true);
                $('#Modal_Headheader_fixed_no').attr("checked", false);
                modal_fixed_check = 1;
            }
            else if(v=='no'){
                $('#Modal_Headheader_fixed_yes').attr("checked", false);
                $('#Modal_Headheader_fixed_no').attr("checked", true);
                modal_fixed_check = 0;
            }
        } );
    }
    function setHeadheaderColorPickers(color1, color2) {
        $('#headheader_text_colorpicker_value').text(color1);
        $('#headheader_text_color').val(color1);
        $('#headheader_background_colorpicker_value').text(color2);
        $('#headheader_background_color').val(color2);

        const headheader_text_colorpicker = document.getElementById('headheader_text_colorpicker');
        let picker1 = new ColorPicker(headheader_text_colorpicker, color1);
        headheader_text_colorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            $('#headheader_text_colorpicker_value').text(color);
            $('#headheader_text_color').val(color);

        });

        const headheader_background_colorpicker = document.getElementById('headheader_background_colorpicker');
        let picker2 = new ColorPicker(headheader_background_colorpicker, color2);
        headheader_background_colorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            $('#headheader_background_colorpicker_value').text(color);
            $('#headheader_background_color').val(color);
        });
    }
    function setHeadHeaderModuleColorPickers() {
        const headerModule_background_colorpicker = document.getElementById('headerModule_background_colorpicker');
        if(bar_tabs == 0)
            new ColorPicker(headerModule_background_colorpicker, modal_left_color);
        else if(bar_tabs == 2)
            new ColorPicker(headerModule_background_colorpicker, modal_middle_color);
        else if(bar_tabs == 1)
            new ColorPicker(headerModule_background_colorpicker, modal_right_color);
        headerModule_background_colorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            $('#headerModule_background_colorpicker_value').text(color);
            $('#headerModule_background_color').val(color);

            if(bar_tabs == 0)
                modal_left_color = color;
            else if(bar_tabs == 2)
                modal_middle_color = color;
            else if(bar_tabs == 1)
                modal_right_color = color;
        });
    }
    function editHeadModuleView(sort) {
        $('#awa_headmodule_lists').html('');
        var tags = '';
        if(sort == 0){
            for(var i = 0; i < 8; i++){
                var id = i;
                var number = left_numbers[i];
                var is_num = is_leftnumbers[i];
                tags += '<tr class="head_content_list-' + id + '" data-id="' + id + '" data-name="' + barhead_str[i] + '">';
                tags += '   <td style="width: 20px; margin-right: 0px;">';
                if(is_num == 0) {
                    tags += '<input class="form-check" type="checkbox" id="headCheckbox-' + id + '" value="">';
                }
                else {
                    tags += '<input class="form-check" type="checkbox" checked id="headCheckbox-' + id + '" value="">';
                }
                tags += '   </td>';
                tags += '   <td style="width: 350px;">' + barhead_str[i] + '</td>';
                tags += '   <td style="width: 70px;">';
                if(is_num == 0) {
                    tags += '<input class="form-control module_sort" type="text" id="head_sort-' + id + '" readonly value="' + number + '" style="text-align: center; border: 1px solid #c1c1c1; height: 30px; background-color: #ededed;">';
                }
                else{
                    tags += '<input class="form-control module_sort" type="text" id="head_sort-' + id + '" value="' + number + '" style="text-align: center; border: 1px solid #c1c1c1; height: 30px; background-color: white;">';
                }
                tags += '   </td>';
                tags += '</tr>';
            }

            $('#Modal_headerModule_background').val(modal_left_bg);
        }
        else if(sort == 2){
            for(var i = 0; i < 8; i++){
                var id = i;
                var number = middle_numbers[i];
                var is_num = is_middlenumbers[i];
                tags += '<tr class="head_content_list-' + id + '" data-id="' + id + '" data-name="' + barhead_str[i] + '">';
                tags += '   <td style="width: 20px; margin-right: 0px;">';
                if(is_num == 0) {
                    tags += '<input class="form-check" type="checkbox" id="headCheckbox-' + id + '" value="">';
                }
                else {
                    tags += '<input class="form-check" type="checkbox" checked id="headCheckbox-' + id + '" value="">';
                }
                tags += '   </td>';
                tags += '   <td style="width: 350px;">' + barhead_str[i] + '</td>';
                tags += '   <td style="width: 70px;">';
                if(is_num == 0) {
                    tags += '<input class="form-control module_sort" type="text" id="head_sort-' + id + '" readonly value="' + number + '" style="text-align: center; border: 1px solid #c1c1c1; height: 30px; background-color: #ededed;">';
                }
                else{
                    tags += '<input class="form-control module_sort" type="text" id="head_sort-' + id + '" value="' + number + '" style="text-align: center; border: 1px solid #c1c1c1; height: 30px; background-color: white;">';
                }
                tags += '   </td>';
                tags += '</tr>';
            }
            $('#Modal_headerModule_background').val(modal_middle_bg);
        }
        else if(sort == 1) {
            for(var i = 7; i >= 0; i--){
                var id = i;
                var number = right_numbers[i];
                var is_num = is_rightnumbers[i];
                tags += '<tr class="head_content_list-' + id + '" data-id="' + id + '" data-name="' + barhead_str[i] + '">';
                tags += '   <td style="width: 20px; margin-right: 0px;">';
                if(is_num == 0) {
                    tags += '<input class="form-check" type="checkbox" id="headCheckbox-' + id + '" value="">';
                }
                else {
                    tags += '<input class="form-check" type="checkbox" checked id="headCheckbox-' + id + '" value="">';
                }
                tags += '   </td>';
                tags += '   <td style="width: 350px;">' + barhead_str[i] + '</td>';
                tags += '   <td style="width: 70px;">';
                if(is_num == 0) {
                    tags += '<input class="form-control module_sort" type="text" id="head_sort-' + id + '" readonly value="' + number + '" style="text-align: center; border: 1px solid #c1c1c1; height: 30px; background-color: #ededed;">';
                }
                else{
                    tags += '<input class="form-control module_sort" type="text" id="head_sort-' + id + '" value="' + number + '" style="text-align: center; border: 1px solid #c1c1c1; height: 30px; background-color: white;">';
                }
                tags += '   </td>';
                tags += '</tr>';
            }
            $('#Modal_headerModule_background').val(modal_right_bg);
        }

        $('#awa_headmodule_lists').html(tags);

        $('input[id^="headCheckbox-"]').change(function() {
            var id = $(this).attr("id");
            var num_id = id.split('-')[1];
            var val = 0;
            if ($(this).is(':checked')) {
                val = 1;
                $('#head_sort-'+num_id).css('background-color', '#ffffff');
                $('#head_sort-'+num_id).attr('readonly', false);
            }
            else{
                val = 0;
                $('#head_sort-'+num_id).css('background-color', '#ededed');
                $('#head_sort-'+num_id).attr('readonly', true);
            }
            for(var i = 0; i < 8; i++){
                if(i == num_id){
                    if(bar_tabs == 0)
                        is_leftnumbers[i] = val;
                    else if(bar_tabs == 1)
                        is_rightnumbers[i] = val;
                    else if(bar_tabs == 2)
                        is_middlenumbers[i] = val;
                }
            }

        });
        $('input[id^="head_sort-"]').on('input', function (e) {
            var id = $(this).attr("id");
            var num_id = id.split('-')[1];
            var val = 0;

            for(var i = 0; i < 8; i++){
                if(i == num_id){
                    if(bar_tabs == 0)
                        left_numbers[i] = $(this).val();
                    else if(bar_tabs == 1)
                        right_numbers[i] = $(this).val();
                    else if(bar_tabs == 2)
                        middle_numbers[i] = $(this).val();
                }
            }

        });
    }
    function showHeadheaderModulepart() {
        var tags = "";
        var strs = new Array();
        $('#ModalAddHeadContent_leftbar').html('');
        for(var i = 0; i < is_leftnumbers.length; i++){
            if(is_leftnumbers[i] == 1) {
                strs.push(barhead_str[i]);
            }
        }
        for(var j = 0; j < strs.length; j++){
            var str = strs[j];
            if(j != strs.length - 1)
                str += ",";
            tags += '<span class="modal_head_bar">' + str + '</span>';
        }
        $('#ModalAddHeadContent_leftbar').html(tags);

        tags = "";
        strs = new Array();
        $('#ModalAddHeadContent_middlebar').html('');
        for(var i = 0; i < is_middlenumbers.length; i++){
            if(is_middlenumbers[i] == 1) {
                strs.push(barhead_str[i]);
            }
        }
        for(var j = 0; j < strs.length; j++){
            var str = strs[j];
            if(j != strs.length - 1)
                str += ",";
            tags += '<span class="modal_head_bar">' + str + '</span>';
        }
        $('#ModalAddHeadContent_middlebar').html(tags);

        tags = "";
        strs = new Array();
        $('#ModalAddHeadContent_rightbar').html('');
        for(var i = 0; i < is_rightnumbers.length; i++){
            if(is_rightnumbers[i] == 1) {
                strs.push(barhead_str[i]);
            }
        }
        for(var j = 0; j < strs.length; j++){
            var str = strs[j];
            if(j != strs.length - 1)
                str += ",";
            tags += '<span class="modal_head_bar">' + str + '</span>';
        }
        $('#ModalAddHeadContent_rightbar').html(tags);
    }
    function HeadheaderAddModalFunc() {
        modal_content_name = $('#Modal_Headheader_Name').val();
        modal_category_id = $('#Modal_HeadCategory_List').val();
        if($('#Modal_Headheader_background_check').is(':checked')){
            modal_bgcolor_check = 1;
        }
        else {
            modal_bgcolor_check = 0;
        }
        if($('#Modal_headerModule_background_check').is(':checked')){
            if(bar_tabs == 0)
                modal_left_check = 1;
            else if(bar_tabs == 2)
                modal_middle_check = 1;
            else if(bar_tabs == 1)
                modal_right_check = 1;
        }
        else {
            if(bar_tabs == 0)
                modal_left_check = 0;
            else if(bar_tabs == 2)
                modal_middle_check = 0;
            else if(bar_tabs == 1)
                modal_right_check = 0;
        }

        modal_padding = $('#Modal_Headheader_padding').val();
        modal_pagetitle_id = $('#Modal_Headheader_text').val();
        modal_pagetitle_size = $('#Modal_Headheader_text_size').val();
        modal_pagetitle_color = $('#headheader_text_color').val();
        modal_background_image = $('#Modal_Headheader_background').val();
        modal_background_color = $('#headheader_background_color').val();
    }
    function headContentList(lists, cg_lists) {
        $('#awa_headheader_content_lists').html('');
        var tags = '';
        for(var i = 0; i < lists.length; i++){
            var id = lists[i].id;
            var name = lists[i].name;
            var category = cg_lists[i];

            tags += '<tr class="head_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="headcontCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>' + category + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="head_content_list_edit-'+id+'" name="head_content_list_edit-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#awa_headheader_content_lists').html(tags);

        $('input[id^="headcontCheckbox_"]').change(function() {
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

        $('select[id^="head_content_list_edit-"]').change(function(){
            var id = $(this).attr("id");
            var event_id = id.split('-')[1];
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if(permss.pwrite == 1) {
                    is_edit = true;
                    subedit_id = event_id;
                    $('#Modal_Category_List').html(showCategoryList());
                    getSystemFieldTextList();
                    HeadheaderAddModalEvent();
                    editHeadContentModal(event_id);
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "delete") {
                if(permss.pdelete == 1) {
		    myjs.data.confirmAlert(deldteHeadheaderContentFunc, event_id, 'pgtxt_wantdeleteitem');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });
    }
    function editHeadContentModal(id) {
        $.ajax({
            url: 'admin.showAWAHeadHeadheaderContentItem',
            data: {
                userid:userid,
                id:id
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        $('#Modal_Headheader_Name').val(lists.name);
                        $('#Modal_HeadCategory_List').val(lists.scid);
                        if(lists.fixed == 0){
                            $('#Modal_Headheader_fixed_yes').attr("checked", false);
                            $('#Modal_Headheader_fixed_no').attr("checked", true);
                        }
                        else{
                            $('#Modal_Headheader_fixed_yes').attr("checked", true);
                            $('#Modal_Headheader_fixed_no').attr("checked", false);
                        }
                        $('#Modal_Headheader_padding').val(lists.padding);
                        $('#Modal_Headheader_text').val(lists.text);
                        $('#Modal_Headheader_text_size').val(lists.text_size);
                        $('#Modal_Headheader_background').val(lists.bg_img);
                        back_size = lists.bg_size;
                        var size = back_size.split('*');
                        back_capacity = lists.bg_capacity;
                        $('.awa_selectable_image_size').text(size[0]+"px "+size[1]+"px");
                        $('.awa_selectable_image_capacity').text(back_capacity +" kb");
                        if(lists.bg_color_check == 1)
                            $('#Modal_Headheader_background_check').attr('checked', true);
                        else
                            $('#Modal_Headheader_background_check').attr('checked', false);
                        setHeadheaderColorPickers(lists.text_color, lists.bg_color);
                        is_leftnumbers = $.parseJSON(lists.leftbar);
                        left_numbers = $.parseJSON(lists.leftbar_num);
                        is_middlenumbers = $.parseJSON(lists.middlebar);
                        middle_numbers = $.parseJSON(lists.middlebar_num);
                        is_rightnumbers = $.parseJSON(lists.rightbar);
                        right_numbers = $.parseJSON(lists.rightbar_num);
                        modal_left_bg = lists.left_bg;
                        if(lists.left_color != null && lists.left_color != '')
                            modal_left_color = lists.left_color;
                        else
                            modal_left_color = "#000000";
                        modal_left_check = lists.left_check;
                        modal_right_bg = lists.right_bg;
                        if(lists.right_color != null && lists.right_color != '')
                            modal_right_color = lists.right_color;
                        else
                            modal_right_color = "#000000";
                        modal_right_check = lists.right_check;
                        modal_middle_bg = lists.middle_bg;
                        if(lists.middle_color != null && lists.middle_color != '')
                            modal_middle_color = lists.middle_color;
                        else
                            modal_middle_color = "#000000";
                        modal_middle_check = lists.middle_check;
                        showHeadheaderModulepart();
                        $('#ModalAddHeadContent').modal('show');
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
    function addHeadheaderContentFunc() {
        HeadheaderAddModalFunc();
        var search_id = $('#headheader_category_items').val();
        var search_txt = $('#headheader_search_cont').val();
        var postData = {
            userid: userid,
            search_id:search_id,
            search_txt:search_txt,
            pstart:pstart,
            pcnt:pcnt,
            modal_content_name:modal_content_name,
            modal_category_id:modal_category_id,
            modal_left_bar:is_leftnumbers,
            modal_left_bar_num:left_numbers,
            modal_middle_bar:is_middlenumbers,
            modal_middle_bar_num:middle_numbers,
            modal_right_bar:is_rightnumbers,
            modal_right_bar_num:right_numbers,
            modal_fixed_check:modal_fixed_check,
            modal_bgcolor_check:modal_bgcolor_check,
            modal_padding:modal_padding,
            modal_text_id:modal_pagetitle_id,
            modal_text_size:modal_pagetitle_size,
            modal_text_color:modal_pagetitle_color,
            modal_background_image:modal_background_image,
            modal_background_color:modal_background_color,
            modal_left_bg:modal_left_bg,
            modal_left_color:modal_left_color,
            modal_left_check:modal_left_check,
            modal_middle_bg:modal_middle_bg,
            modal_middle_color:modal_middle_color,
            modal_middle_check:modal_middle_check,
            modal_right_bg:modal_right_bg,
            modal_right_color:modal_right_color,
            modal_right_check:modal_right_check,
            modal_background_size:image_size,
            modal_background_capacity:image_capacity
        }
        $.ajax({
            url: 'admin.setAWAHeadHeadheaderContentList',
            data: postData,
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    $('#ModalAddHeadContent').modal('hide');
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        headContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_headheader_content_lists').html('');
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
    function getHeadheaderContentList(is_search) {
        var search_id = $('#headheader_category_items').val();
        var search_txt = $('#headheader_search_cont').val();
        if(is_search == 0)
        {
            search_id = "";
            search_txt = "";
        }
        $.ajax({
            url: 'admin.getAWAHeadHeadheaderContentList',
            data: {
                userid: userid,
                search_id:search_id,
                search_txt:search_txt,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        headContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_headheader_content_lists').html('');
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
    function editHeadheaderContentFunc() {
        HeadheaderAddModalFunc();
        var search_id = $('#headheader_category_items').val();
        var search_txt = $('#headheader_search_cont').val();
        var postData = {
            userid: userid,
            editid:subedit_id,
            search_id:search_id,
            search_txt:search_txt,
            pstart:pstart,
            pcnt:pcnt,
            modal_content_name:modal_content_name,
            modal_category_id:modal_category_id,
            modal_left_bar:is_leftnumbers,
            modal_left_bar_num:left_numbers,
            modal_middle_bar:is_middlenumbers,
            modal_middle_bar_num:middle_numbers,
            modal_right_bar:is_rightnumbers,
            modal_right_bar_num:right_numbers,
            modal_fixed_check:modal_fixed_check,
            modal_bgcolor_check:modal_bgcolor_check,
            modal_padding:modal_padding,
            modal_text_id:modal_pagetitle_id,
            modal_text_size:modal_pagetitle_size,
            modal_text_color:modal_pagetitle_color,
            modal_background_image:modal_background_image,
            modal_background_color:modal_background_color,
            modal_left_bg:modal_left_bg,
            modal_left_color:modal_left_color,
            modal_left_check:modal_left_check,
            modal_middle_bg:modal_middle_bg,
            modal_middle_color:modal_middle_color,
            modal_middle_check:modal_middle_check,
            modal_right_bg:modal_right_bg,
            modal_right_color:modal_right_color,
            modal_right_check:modal_right_check,
            modal_background_size:back_size,
            modal_background_capacity:back_capacity
        }
        $.ajax({
            url: 'admin.editAWAHeadHeadheaderContentList',
            data: postData,
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    $('#ModalAddHeadContent').modal('hide');
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        headContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_headheader_content_lists').html('');
                    var total = data.total;
                    if(total <= 0){
                        $('.ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    is_edit = false;
                    subedit_id = 0;
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function deldteHeadheaderContentFunc(del_id) {
        var search_id = $('#headheader_category_items').val();
        var search_txt = $('#headheader_search_cont').val();

        $.ajax({
            url: 'admin.deleteAWAHeadHeadheaderContentList',
            data: {
                userid: userid,
                id: del_id,
                search_id:search_id,
                search_txt:search_txt,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        headContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_headheader_content_lists').html('');
                    var total = data.total;
                    if (total <= 0) {
                        $('.ssmu_page_nav').html('');
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
    function allDeleteHeadCheckedFunc() {
        $('#headheader_selected_all_delete').click(function () {
            if (permss.pdelete == 0) {
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            var search_id = $('#headheader_category_items').val();
            var search_txt = $('#headheader_search_cont').val();
            if(checked_del_items.length > 0) {
                $.ajax({
                    url: 'admin.allDeleteAWAHeadheaderChecked',
                    data: {
                        userid: userid,
                        ids: checked_del_items,
                        search_id:search_id,
                        search_txt:search_txt,
                        pstart:pstart,
                        pcnt:pcnt
                    },
                    type: 'POST',
                    success: function (data) {
                        if (data.msg === "ok") {
                            var lists = data.lists;
                            var cg_lists = data.category_list;
                            if(lists !== null && lists != "") {
                                headContentList(lists, cg_lists);
                            }
                            else
                                $('#awa_headheader_content_lists').html('');
                            var total = data.total;
                            if (total <= 0) {
                                $('.ssmu_page_nav').html('');
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
        });
    }
    // Headheader tab end //////////////////////////////////////////////////////////////////////////////////////////////

    // Subheader tab start /////////////////////////////////////////////////////////////////////////////////////////////
    function initSubheader() {
        getCategoryList();
        $('#awah_sub_category_add').click(function () {
            if(permss.pcreate == 1) {
                $('#category_item_name').val('')
                $('#ModalAddCategory').modal('show');
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });

        $('#awah_sub_category_edit').click(function () {
            if(permss.pwrite == 1) {
                editCategoryList();
                $('#ModalEditCategory').modal('show');
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });
    }
    function subContentList(lists, cg_lists) {
        $('#awa_subheader_content_lists').html('');
        var tags = '';
        for(var i = 0; i < lists.length; i++){
            var id = lists[i].id;
            var name = lists[i].name;
            var category = cg_lists[i];

            tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="subcontCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>' + category + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="sub_content_list_edit-'+id+'" name="sub_content_list_edit-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#awa_subheader_content_lists').html(tags);

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

        $('select[id^="sub_content_list_edit-"]').change(function(){
            var id = $(this).attr("id");
            var event_id = id.split('-')[1];
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if(permss.pwrite == 1) {
                    is_edit = true;
                    subedit_id = event_id;
                    $('#Modal_Category_List').html(showCategoryList());
                    getSystemFieldTextList();
                    SubheaderAddModalEvent();
                    editSubContentModal(event_id);
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "delete") {
                if(permss.pdelete == 1) {
		    myjs.data.confirmAlert(deldteSubheaderContentFunc, event_id, 'pgtxt_wantdeleteitem');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });
    }
    function editSubContentModal(id) {
        $.ajax({
            url: 'admin.showAWAHeadSubheaderContentItem',
            data: {
                userid:userid,
                id:id
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        $('#Modal_Subheader_Name').val(lists.name);
                        $('#Modal_Category_List').val(lists.scid);
                        $('#Modal_Subheader_Styles').val(lists.style);
                        var hides = lists.hide.split(':');
                        if(hides[0] == 1)
                            $('#Modal_Breadcrumbs_Hide').attr('checked', true);
                        else
                            $('#Modal_Breadcrumbs_Hide').attr('checked', false);
                        if(hides[1] == 1)
                            $('#Modal_Title_Hide').attr('checked', true);
                        else
                            $('#Modal_Title_Hide').attr('checked', false);
                        if(lists.fixed == 0){
                            $('#Modal_Subheader_fixed_yes').attr("checked", false);
                            $('#Modal_Subheader_fixed_no').attr("checked", true);
                        }
                        else{
                            $('#Modal_Subheader_fixed_yes').attr("checked", true);
                            $('#Modal_Subheader_fixed_no').attr("checked", false);
                        }
                        $('#Modal_Subheader_padding').val(lists.padding);
                        $('#Modal_Subheader_pagetitle').val(lists.pagetitle);
                        $('#Modal_Subheader_pagetitle_size').val(lists.pagetitle_size);
                        $('#Modal_Subheader_breadcrumbs').val(lists.breadcrumbs);
                        $('#Modal_Subheader_breadcrumbs_size').val(lists.breadcrumbs_size);
                        $('#Modal_Subheader_background').val(lists.bg_img);
                        back_size = lists.bg_size;
                        var size = back_size.split('*');
                        back_capacity = lists.bg_capacity;
                        $('.awa_selectable_image_size').text(size[0]+"px "+size[1]+"px");
                        $('.awa_selectable_image_capacity').text(back_capacity +" kb");
                        if(lists.bg_color_check == 1)
                            $('#Modal_Subheader_background_check').attr('checked', true);
                        else
                            $('#Modal_Subheader_background_check').attr('checked', false);
                        setSubheaderColorPickers(lists.pagetitle_color, lists.breadcrumbs_color, lists.bg_color);
                        $('#ModalAddSubContent').modal('show');
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
    function getSubheaderContentList(is_search) {
        var search_id = $('#subheader_category_items').val();
        var search_txt = $('#subheader_search_cont').val();
        if(is_search == 0)
        {
            search_id = "";
            search_txt = "";
        }
        $.ajax({
            url: 'admin.getAWAHeadSubheaderContentList',
            data: {
                userid: userid,
                search_id:search_id,
                search_txt:search_txt,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        subContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_subheader_content_lists').html('');
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
    function SubheaderAddModalEvent() {
        $('input[name="Modal_Subheader_fixed"]').on( "click", function () {
            var v = $(this).val();
            if(v=='yes'){
                $('#Modal_Subheader_fixed_yes').attr("checked", true);
                $('#Modal_Subheader_fixed_no').attr("checked", false);
                modal_fixed_check = 1;
            }
            else if(v=='no'){
                $('#Modal_Subheader_fixed_yes').attr("checked", false);
                $('#Modal_Subheader_fixed_no').attr("checked", true);
                modal_fixed_check = 0;
            }
        } );
    }
    function setSubheaderColorPickers(color1, color2, color3) {
        $('#subheader_pagetitle_colorpicker_value').text(color1);
        $('#subheader_pagetitle_color').val(color1);
        $('#subheader_breadcrumbs_colorpicker_value').text(color2);
        $('#subheader_breadcrumbs_color').val(color2);
        $('#subheader_background_colorpicker_value').text(color3);
        $('#subheader_background_color').val(color3);

        const subheader_pagetitle_colorpicker = document.getElementById('subheader_pagetitle_colorpicker');
        let picker1 = new ColorPicker(subheader_pagetitle_colorpicker, color1);
        subheader_pagetitle_colorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            $('#subheader_pagetitle_colorpicker_value').text(color);
            $('#subheader_pagetitle_color').val(color);

        });

        const subheader_breadcrumbs_colorpicker = document.getElementById('subheader_breadcrumbs_colorpicker');
        let picker2 = new ColorPicker(subheader_breadcrumbs_colorpicker, color2);
        subheader_breadcrumbs_colorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            $('#subheader_breadcrumbs_colorpicker_value').text(color);
            $('#subheader_breadcrumbs_color').val(color);
        });

        const subheader_background_colorpicker = document.getElementById('subheader_background_colorpicker');
        let picker3 = new ColorPicker(subheader_background_colorpicker, color3);
        subheader_background_colorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            $('#subheader_background_colorpicker_value').text(color);
            $('#subheader_background_color').val(color);
        });
    }
    function SubheaderAddModalFunc() {
        modal_content_name = $('#Modal_Subheader_Name').val();
        modal_category_id = $('#Modal_Category_List').val();
        modal_style = $('#Modal_Subheader_Styles').val();
        if($('#Modal_Breadcrumbs_Hide').is(':checked')) {
            modal_breadcrumbs_hide_check = 1;
        }
        else {
            modal_breadcrumbs_hide_check = 0;
        }
        if($('#Modal_Title_Hide').is(':checked')) {
            modal_title_hide_check = 1;
        }
        else {
            modal_title_hide_check = 0;
        }
        if($('#Modal_Subheader_background_check').is(':checked')){
            modal_bgcolor_check = 1;
        }
        else {
            modal_bgcolor_check = 0;
        }
        modal_padding = $('#Modal_Subheader_padding').val();
        modal_pagetitle_id = $('#Modal_Subheader_pagetitle').val();
        modal_pagetitle_size = $('#Modal_Subheader_pagetitle_size').val();
        modal_pagetitle_color = $('#subheader_pagetitle_color').val();
        modal_breadcrumbs_id = $('#Modal_Subheader_breadcrumbs').val();
        modal_breadcrumbs_size = $('#Modal_Subheader_breadcrumbs_size').val();
        modal_breadcrumbs_color = $('#subheader_breadcrumbs_color').val();
        modal_background_image = $('#Modal_Subheader_background').val();
        modal_background_color = $('#subheader_background_color').val();
    }
    function addSubheaderContentFunc() {
        SubheaderAddModalFunc();
        var search_id = $('#subheader_category_items').val();
        var search_txt = $('#subheader_search_cont').val();
        var postData = {
            userid: userid,
            search_id:search_id,
            search_txt:search_txt,
            pstart:pstart,
            pcnt:pcnt,
            modal_content_name:modal_content_name,
            modal_category_id:modal_category_id,
            modal_style:modal_style,
            modal_breadcrumbs_hide_check:modal_breadcrumbs_hide_check,
            modal_title_hide_check:modal_title_hide_check,
            modal_fixed_check:modal_fixed_check,
            modal_bgcolor_check:modal_bgcolor_check,
            modal_padding:modal_padding,
            modal_pagetitle_id:modal_pagetitle_id,
            modal_pagetitle_size:modal_pagetitle_size,
            modal_pagetitle_color:modal_pagetitle_color,
            modal_breadcrumbs_id:modal_breadcrumbs_id,
            modal_breadcrumbs_size:modal_breadcrumbs_size,
            modal_breadcrumbs_color:modal_breadcrumbs_color,
            modal_background_image:modal_background_image,
            modal_background_color:modal_background_color,
            modal_background_size:image_size,
            modal_background_capacity:image_capacity
        }
        $.ajax({
            url: 'admin.setAWAHeadSubheaderContentList',
            data: postData,
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    $('#ModalAddSubContent').modal('hide');
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        subContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_subheader_content_lists').html('');
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
    function editSubheaderContentFunc() {
        SubheaderAddModalFunc();
        var search_id = $('#subheader_category_items').val();
        var search_txt = $('#subheader_search_cont').val();
        var postData = {
            userid: userid,
            editid:subedit_id,
            search_id:search_id,
            search_txt:search_txt,
            pstart:pstart,
            pcnt:pcnt,
            modal_content_name:modal_content_name,
            modal_category_id:modal_category_id,
            modal_style:modal_style,
            modal_breadcrumbs_hide_check:modal_breadcrumbs_hide_check,
            modal_title_hide_check:modal_title_hide_check,
            modal_fixed_check:modal_fixed_check,
            modal_bgcolor_check:modal_bgcolor_check,
            modal_padding:modal_padding,
            modal_pagetitle_id:modal_pagetitle_id,
            modal_pagetitle_size:modal_pagetitle_size,
            modal_pagetitle_color:modal_pagetitle_color,
            modal_breadcrumbs_id:modal_breadcrumbs_id,
            modal_breadcrumbs_size:modal_breadcrumbs_size,
            modal_breadcrumbs_color:modal_breadcrumbs_color,
            modal_background_image:modal_background_image,
            modal_background_color:modal_background_color,
            modal_background_size:back_size,
            modal_background_capacity:back_capacity
        }
        $.ajax({
            url: 'admin.editAWAHeadSubheaderContentList',
            data: postData,
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    $('#ModalAddSubContent').modal('hide');
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        subContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_subheader_content_lists').html('');
                    var total = data.total;
                    if(total <= 0){
                        $('.ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    is_edit = false;
                    subedit_id = 0;
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function deldteSubheaderContentFunc(del_id) {
        var search_id = $('#subheader_category_items').val();
        var search_txt = $('#subheader_search_cont').val();

        $.ajax({
            url: 'admin.deleteAWAHeadSubheaderContentList',
            data: {
                userid: userid,
                id: del_id,
                search_id:search_id,
                search_txt:search_txt,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var cg_lists = data.category_list;
                    if(lists !== null && lists != "") {
                        subContentList(lists, cg_lists);
                    }
                    else
                        $('#awa_subheader_content_lists').html('');
                    var total = data.total;
                    if (total <= 0) {
                        $('.ssmu_page_nav').html('');
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
    function allDeleteSubCheckedFunc() {
        $('#subheader_selected_all_delete').click(function () {
            if (permss.pdelete == 0) {
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            var search_id = $('#subheader_category_items').val();
            var search_txt = $('#subheader_search_cont').val();
            if(checked_del_items.length > 0) {
                $.ajax({
                    url: 'admin.allDeleteAWASubheaderChecked',
                    data: {
                        userid: userid,
                        ids: checked_del_items,
                        search_id:search_id,
                        search_txt:search_txt,
                        pstart:pstart,
                        pcnt:pcnt
                    },
                    type: 'POST',
                    success: function (data) {
                        if (data.msg === "ok") {
                            var lists = data.lists;
                            var cg_lists = data.category_list;
                            if(lists !== null && lists != "") {
                                subContentList(lists, cg_lists);
                            }
                            else
                                $('#awa_subheader_content_lists').html('');
                            var total = data.total;
                            if (total <= 0) {
                                $('.ssmu_page_nav').html('');
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
        });
    }
    // Subheader tab end ///////////////////////////////////////////////////////////////////////////////////////////////

    export default {
        name: "AppsWebSiteAppearanceHead",
        data(){
            return {
                pageid:'apps-website-appearance-head-fav',
                mu_apps:'',
                musu_apps_website:'',
                mususu_apps_website_appear:'',
                musususu_apps_website_appear_head:'',
                btntxt_add:'',
                btntxt_edit:'',
                btntxt_save:'',
                btntxt_delete:'',
                btntxt_change:'',
                btntxt_topheader:'',
                btntxt_header:'',
                btntxt_subheader:'',
                btntxt_browse:'',
                pgtxt_category:'',
                pgtxt_background:'',
                pgtxt_list:'',
                pgtxt_name:'',
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
                pgtxt_color:'',
                pgtxt_module:'',
                btntxt_text:'',
                pgtxt_weblanguage:'',
                pgtxt_location:'',
                pgtxt_currency:'',
                pgtxt_register:'',
                pgtxt_login:'',
                pgtxt_remind:'',
                pgtxt_member:'',
                pgtxt_left:'',
                pgtxt_middle:'',
                pgtxt_right:'',
                pgtxt_bar:'',
                pgtxt_logo:'',
                pgtxt_slogan:'',
                pgtxt_menu:'',
                pgtxt_searchbar:'',
                pgtxt_language:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                btntxt_ok:'',
                btntxt_cancel:'',
            }
        },
        computed: {
            cmususu_apps_website_appear:function () {
                return this.mususu_apps_website_appear;
            },
            cmusususu_apps_website_appear_head:function () {
                return this.musususu_apps_website_appear_head;
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
            cbtntxt_browse:function () {
                return this.btntxt_browse;
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
            cpgtxt_color:function () {
                return this.pgtxt_color;
            },
            cpgtxt_module:function () {
                return this.pgtxt_module;
            },
            cbtntxt_text:function () {
                return this.btntxt_text;
            },
            cpgtxt_weblanguage:function () {
                return this.pgtxt_weblanguage;
            },
            cpgtxt_location:function () {
                return this.pgtxt_location;
            },
            cpgtxt_currency:function () {
                return this.pgtxt_currency;
            },
            cpgtxt_register:function () {
                return this.pgtxt_register;
            },
            cpgtxt_login:function () {
                return this.pgtxt_login;
            },
            cpgtxt_remind:function () {
                return this.pgtxt_remind;
            },
            cpgtxt_member:function () {
                return this.pgtxt_member;
            },
            cpgtxt_left:function () {
                return this.pgtxt_left;
            },
            cpgtxt_middle:function () {
                return this.pgtxt_middle;
            },
            cpgtxt_right:function () {
                return this.pgtxt_right;
            },
            cpgtxt_bar:function () {
                return this.pgtxt_bar;
            },
            cpgtxt_logo:function () {
                return this.pgtxt_logo;
            },
            cpgtxt_sloganr:function () {
                return this.pgtxt_slogan;
            },
            cpgtxt_menu:function () {
                return this.pgtxt_menu;
            },
            cpgtxt_searchbar:function () {
                return this.pgtxt_searchbar;
            },
            cpgtxt_language:function () {
                return this.pgtxt_language;
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
            permss = myjs.data.permissionDefinition();
            /* fav part*/
            this.initpage();
            pgtxt_name = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
            btntxt_save = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_save');
            btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
            btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
            btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
            pgtxt_weblanguage = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_weblanguage');
            pgtxt_location = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_location');
            pgtxt_currency = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_currency');
            pgtxt_register = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_register');
            pgtxt_login = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_login');
            pgtxt_remind = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_remind');
            pgtxt_member = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_member');
            pgtxt_logo = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_logo');
            pgtxt_slogan = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_slogan');
            pgtxt_menu = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_menu');
            pgtxt_searchbar = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_searchbar');
            pgtxt_language = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_language');
            bar_str = [pgtxt_weblanguage, pgtxt_location, pgtxt_currency, pgtxt_register, pgtxt_login, pgtxt_remind, pgtxt_member];
            barhead_str = [pgtxt_logo, pgtxt_slogan, pgtxt_menu, pgtxt_searchbar, pgtxt_login, pgtxt_register, pgtxt_language, pgtxt_member];
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
                getTopheaderContentList(0);
                allDeleteTopCheckedFunc();
                $("#ModalAddTopContent").on('hide.bs.modal', function () {
                    $('select[id^="top_content_list_edit-"]').val('');
                });
                $("#ModalAddHeadContent").on('hide.bs.modal', function () {
                    $('select[id^="head_content_list_edit-"]').val('');
                });
                $("#ModalAddSubContent").on('hide.bs.modal', function () {
                    $('select[id^="sub_content_list_edit-"]').val('');
                });
                ChangeItemNameSelectTab();
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

                    categorys = new Array();
                    is_edit = false;

                    if(subid=='topheader'){
                        tabstatus=0;
                        wwgfield = 'topheader';
                        initTopHeader();
                        getTopheaderContentList(0);
                        allDeleteTopCheckedFunc();
                    }
                    else if(subid=='header'){
                        tabstatus=1;
                        wwgfield = 'header';
                        initHeadHeader();
                        getHeadheaderContentList(0);
                        allDeleteHeadCheckedFunc();
                    }
                    else if(subid=='subheader'){
                        tabstatus=2;
                        wwgfield = 'subheader';
                        systemTexts = new Array();
                        initSubheader();
                        getSubheaderContentList(0);
                        allDeleteSubCheckedFunc();
                    }

                });
                initTopHeader();
            },
            addCategoryModalBtn(){
                addCategoryFunc();
            },
            SearchTopheaderCategoryBtn(){
                getTopheaderContentList(1);
            },
            SearchHeadheaderCategoryBtn(){
                getHeadheaderContentList(1);
            },
            SearchSubheaderCategoryBtn(){
                getSubheaderContentList(1)
            },
            addAWATopheaderContentModalBtn(){
                if(permss.pcreate == 1) {
                    initialize();
                    var size = image_size.split('*');
                    $('.awa_selectable_image_size').text(size[0]+"px "+size[1]+"px");
                    $('.awa_selectable_image_capacity').text(image_capacity +" kb");
                    $('#ModalAddTopContent').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            changeTopEditModuleBtn(){
                bar_tabs = 0;
                $('.btn.btn-outline-light.bar').removeClass('active');
                $('.btn.btn-outline-light.bar.leftbar').addClass('active');
                editModuleView(bar_tabs);
                $('#ModalAddTopContent').modal('hide');
                $('#ModalEditModule').modal('show');
                $("#ModalEditModule").on('hide.bs.modal', function () {
                    $('#ModalAddTopContent').modal('show');
                });
            },
            addTopheaderImageBtn(){
                media_module.data.setImageTagID("Modal_Topheader_background", "Modal_Topheader_background");
                media_module.data.getDirectories('/');
                media_module.data.MediaSelectImageModal(vueOBJ);

                $('#ModalAddTopContent').modal('hide');
                $('#MediaDirectoryModal').modal('show');
                $("#MediaDirectoryModal").on('hide.bs.modal', function () {
                    $('#ModalAddTopContent').modal('show');
                });
            },
            addTopheaderContentBtn(){
                if(is_edit)
                    editTopheaderContentFunc();
                else
                    addTopheaderContentFunc();
            },
            addAWAHeadheaderContentModalBtn(){
                if(permss.pcreate == 1) {
                    initialize();
                    var size = image_size.split('*');
                    $('.awa_selectable_image_size').text(size[0]+"px "+size[1]+"px");
                    $('.awa_selectable_image_capacity').text(image_capacity +" kb");
                    $('#ModalAddHeadContent').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            changeHeadEditModuleBtn(){
                bar_tabs = 0;
                $('.btn.btn-outline-light.bar').removeClass('active');
                $('.btn.btn-outline-light.bar.leftbar').addClass('active');
                if(!is_edit){
                    modal_left_bg = "";
                    modal_left_color = "#000000";
                    modal_right_bg = "";
                    modal_right_color = "#000000";
                    modal_middle_bg = "";
                    modal_middle_color = "#000000";
                }
                setHeadHeaderModuleColorPickers();
                editHeadModuleView(bar_tabs);
                $('#ModalAddHeadContent').modal('hide');
                $('#ModalEditHeadModule').modal('show');
                $("#ModalEditHeadModule").on('hide.bs.modal', function () {
                    if(media_dlg != 2)
                        $('#ModalAddHeadContent').modal('show');
                });
            },
            addHeadheaderImageBtn(){
                media_dlg = 1;
                media_module.data.setImageTagID("Modal_Headheader_background", "Modal_Headheader_background");
                media_module.data.getDirectories('/');
                media_module.data.MediaSelectImageModal(vueOBJ);

                $('#ModalAddHeadContent').modal('hide');
                $('#MediaDirectoryModal').modal('show');
                $("#MediaDirectoryModal").on('hide.bs.modal', function () {
                    if(media_dlg == 1)
                        $('#ModalAddHeadContent').modal('show');
                });
            },
            addheaderModuleImageBtn(){
                media_dlg = 2;
                media_module.data.setImageTagID("Modal_headerModule_background", "Modal_headerModule_background");
                media_module.data.getDirectories('/');
                media_module.data.MediaSelectImageModal(vueOBJ);

                $('#ModalEditHeadModule').modal('hide');
                $('#MediaDirectoryModal').modal('show');
                $("#MediaDirectoryModal").on('hide.bs.modal', function () {
                    if(media_dlg == 2) {
                        $('#ModalEditHeadModule').modal('show');
                        if(bar_tabs == 0)
                            modal_left_bg = $('#Modal_headerModule_background').val();
                        else if(bar_tabs == 2)
                            modal_middle_bg = $('#Modal_headerModule_background').val();
                        else if(bar_tabs == 1)
                            modal_right_bg = $('#Modal_headerModule_background').val();
                        media_dlg = 1;
                    }
                });
            },
            addHeadheaderContentBtn(){
                if(is_edit)
                    editHeadheaderContentFunc();
                else
                    addHeadheaderContentFunc();
            },
            addAWASubheaderContentModalBtn(){
                if(permss.pcreate == 1) {
                    initialize();
                    var size = image_size.split('*');
                    $('.awa_selectable_image_size').text(size[0]+"px "+size[1]+"px");
                    $('.awa_selectable_image_capacity').text(image_capacity +" kb");
                    $('#ModalAddSubContent').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            addSubheaderImageBtn(){
                media_dlg = 0;
                media_module.data.setImageTagID("Modal_Subheader_background", "Modal_Subheader_background");
                media_module.data.getDirectories('/');
                media_module.data.MediaSelectImageModal(vueOBJ);

                $('#ModalAddSubContent').modal('hide');
                $('#MediaDirectoryModal').modal('show');
                $("#MediaDirectoryModal").on('hide.bs.modal', function () {
                    $('#ModalAddSubContent').modal('show');
                });
            },
            addSubheaderContentBtn(){
                if(is_edit)
                    editSubheaderContentFunc();
                else
                    addSubheaderContentFunc();
            },
            leftbarModuleBtn(){
                bar_tabs = 0;
                $('.btn.btn-outline-light.bar').removeClass('active');
                $('.btn.btn-outline-light.bar.leftbar').addClass('active');
                editModuleView(0);
            },
            rightbarModuleBtn(){
                bar_tabs = 1;
                $('.btn.btn-outline-light.bar').removeClass('active');
                $('.btn.btn-outline-light.bar.rightbar').addClass('active');
                editModuleView(1);
            },
            changeModuleBtn(){
                showTopheaderModulepart();
                $('#ModalAddTopContent').modal('show');
                $('#ModalEditModule').modal('hide');
            },
            leftbarHeadModuleBtn(){
                bar_tabs = 0;
                $('.btn.btn-outline-light.bar').removeClass('active');
                $('.btn.btn-outline-light.bar.leftbar').addClass('active');
                setHeadHeaderModuleColorPickers();
                editHeadModuleView(0);
            },
            middlebarHeadModuleBtn(){
                bar_tabs = 2;
                $('.btn.btn-outline-light.bar').removeClass('active');
                $('.btn.btn-outline-light.bar.middlebar').addClass('active');
                setHeadHeaderModuleColorPickers();
                editHeadModuleView(2);
            },
            rightbarHeadModuleBtn(){
                bar_tabs = 1;
                $('.btn.btn-outline-light.bar').removeClass('active');
                $('.btn.btn-outline-light.bar.rightbar').addClass('active');
                setHeadHeaderModuleColorPickers();
                editHeadModuleView(1);
            },
            changeHeadModuleBtn(){
                showHeadheaderModulepart();
                $('#ModalAddHeadContent').modal('show');
                $('#ModalEditHeadModule').modal('hide');
            },
        }//method


    }
</script>
