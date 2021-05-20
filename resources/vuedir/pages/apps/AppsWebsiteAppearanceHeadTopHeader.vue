<template>
    <div class="col-md-12">
        <div style="display: none">{{contentchange}}</div>
        <div class="row">
            <!--topheader-->
            <div class="col-md-12 page_slider_content_list active" id="topheader">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="height:auto; display: flex;">
                        <div class="col-md-1" id="top_title" style="margin: auto;">{{cpgtxt_category}}</div>
                        <div class="col-md-8 d-flex flex-wrap" id="top_category_lists" style="display: flex; color: rgba(0, 0, 0, 0.6);">

                        </div>
                        <div class="col-md-3" id="top_button" style="margin: auto;">
                            <button type="button" id="awah_top_category_add" class="btn page1_custom_btn active" style="height: 40px; border-radius: 20px; padding: 0px 30px; margin: 0 25px 0px 0px;">
                                + {{cbtntxt_add}}
                            </button>
                            <button type="button" id="awah_top_category_edit" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0px 30px;">
                                {{cbtntxt_edit}}
                            </button>
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
                                            <input type="text" class="form-modal-control" id="category_item_name" name="category_item_name">
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
        <div class="modal fade" id="ModalSaveCategory">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_Save_Title">{{cbtntxt_edit}} {{cpgtxt_category}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="SaveCategoryModalBody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel">
                            <div class="row" style="padding-bottom: 20px;">
                                <div class="col-md-12" style="margin-top: 20px;">
                                    <div class="d-flex flex-wrap">
                                        <div class="col-md-2">
                                            <label style="margin-top: 8px; color:#666;" id="Modal_Save_Name">{{cpgtxt_name}}</label>
                                        </div>
                                        <div class="col-md-10">
                                            <input type="text" class="form-modal-control" id="category_save_name" name="category_save_name">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div id="ssfe-model-save" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="saveCategoryModalBtn()">
                                        <span>+ {{cbtntxt_add}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                                <div class="col-md-12" style="margin-top: 20px; height: 400px; overflow-y: auto;">
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
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 1150px!important;">
                <div class="modal-content" style="height: 700px;">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_TopContent_Title">{{cbtntxt_add}} {{cbtntxt_topheader}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="page1_content_content_bar" style="display: flex;margin: 0 25px; border-radius: 5px;">
                        <div class="col-md-3 page1_content_content_title responsive-text">{{cpgtxt_responsive}}</div>
                        <div class="col-md-3" style="margin: auto;"><label class="responsive-device active" id="device-D">{{cpgctl_desktop}}</label></div>
                        <div class="col-md-3" style="margin: auto;"><label class="responsive-device" id="device-T">{{cpgctl_tablet}}</label></div>
                        <div class="col-md-3" style="margin: auto;"><label class="responsive-device" id="device-M">{{cpgctl_mobile}}</label></div>
                    </div>
                    <div class="modal-body" id="AddTopContentModalBody" style="padding: 0px 0rem 2rem">
                        <div class="col-md-12" style="margin-top: 20px;">
                            <div class="d-flex flex-wrap col-md-12 non-padding" style="margin-bottom: 10px;">
                                <div class="d-flex flex-wrap col-md-3">
                                    <div class="col-md-5 non-padding">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_name}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <input type="text" class="form-modal-control" id="Modal_Topheader_Name" name="Modal_Topheader_Name">
                                    </div>
                                </div>
                                <div class="col-md-3"></div>
                                <div class="d-flex flex-wrap col-md-3 non-padding">
                                    <div class="col-md-4 non-padding">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_category}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <select class="form-modal-control w-100 select-noneborder-rightcolor" id="Modal_TopCategory_List" name="Modal_TopCategory_List" >

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap col-md-12 non-padding" style="margin-bottom: 10px;">
                                <div class="d-flex flex-wrap col-md-3">
                                    <div class="col-md-5 non-padding" >
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_maximumwidth}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <input type="text" class="form-modal-control" id="Modal_Topheader_Maxwidth" name="Modal_Topheader_Maxwidth" style="text-align: center;">
                                    </div>
                                </div>
                                <div class="col-md-3"></div>
                                <div class="d-flex flex-wrap col-md-3 non-padding">
                                    <div class="col-md-4 non-padding">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_padding}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <input type="text" class="form-modal-control" id="Modal_Topheader_padding" name="Modal_Topheader_padding">
                                    </div>
                                </div>
                                <div class="col-md-3 non-padding" style="font-size: 10px;">
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
                            <div class="d-flex flex-wrap col-md-12" style="padding: 0px; margin-bottom: 10px;">
                                <div class="d-flex flex-wrap col-md-6">
                                    <div class="col-md-2 non-padding">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_background}}</label>
                                    </div>
                                    <div class="col-md-7">
                                        <input type="text" class="form-modal-control" id="Modal_Topheader_background" name="Modal_Topheader_background" readonly>
                                    </div>
                                    <div class="col-md-2 non-padding">
                                        <div class="btn btn-outline-light dash-my-btn-0 active" style="padding: 10px 15px; border-radius: 5px; border-width: 0px;" @click.stop="addTopheaderImageBtn()">
                                            <svg t="1608175123337" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31858" width="200" height="200"><path d="M587.58656 750.78144A101.9648 101.9648 0 0 1 486.7072 758.784l-213.71904-100.62336-123.88864 64.5632a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77376a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-108.3648-42.2912-171.81696 117.1456z m176.62976-159.11936l118.3744 46.19264c31.50848 12.29312 47.09376 47.82592 34.81088 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l132.84864-69.23264a20.39296 20.39296 0 0 1 18.10944-0.36352l222.8736 104.92416a61.17888 61.17888 0 0 0 60.52352-4.80256l180.70528-123.20256a20.39296 20.39296 0 0 1 18.90304-2.1504z m-42.92608-177.19808l-133.70368 91.15648a101.9648 101.9648 0 0 1-100.87936 8.00768L314.17856 432.40448l-165.07904 86.02112a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192L721.29024 414.464z m4.8128-41.97376l156.4928 61.06624c31.50336 12.29312 47.08864 47.82592 34.80576 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l174.04416-90.69568a20.39296 20.39296 0 0 1 18.10944-0.36864l181.67296 85.53472a61.17888 61.17888 0 0 0 60.52864-4.80768l142.592-97.21344a20.39296 20.39296 0 0 1 18.89792-2.1504zM483.54304 98.98496L149.0944 273.26976a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80768l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-333.70624-130.22208a61.17376 61.17376 0 0 0-50.51392 2.7392z m399.04768 89.41568c31.50336 12.29312 47.08864 47.82592 34.80576 79.36a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.46432a101.9648 101.9648 0 0 1-100.87936 8.00768L132.46464 346.84928c-30.60224-14.40256-43.74016-50.91328-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l334.44352-174.2848a101.95968 101.95968 0 0 1 84.19328-4.56192l333.70624 130.22208z" p-id="31859"></path></svg>
                                            <span style="margin-left: 10px;"> {{cbtntxt_browse}} </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap col-md-3 non-padding">
                                    <div class="col-md-4 non-padding">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_color}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding" style="display: flex; margin: auto 0px;">
                                        <input type="hidden" name="topheader_background_color" id="topheader_background_color" value="#000000">
                                        <div id="topheader_background_colorpicker" class="m-r-15" data-color="#000000" style="border: 1px solid #000; width: 40px; cursor: pointer; background: #000000; height: 20px;"></div>
                                        <div id="topheader_background_colorpicker_value">#000000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap col-md-12" style="padding: 0px; margin-bottom: 10px;">
                                <div class="d-flex flex-wrap col-md-3">
                                    <div class="col-md-5 non-padding">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_fixed}}</label>
                                    </div>
                                    <div class="col-md-2 non-padding" style="margin: auto;">
                                        <input class="form-check-input" type="radio" name="Modal_Topheader_fixed" id="Modal_Topheader_fixed_yes" value="yes" checked>{{cpgtxt_yes}}
                                    </div>
                                    <div class="col-md-2 non-padding" style="margin: auto;">
                                        <input class="form-check-input" type="radio" name="Modal_Topheader_fixed" id="Modal_Topheader_fixed_no" value="no">{{cpgtxt_no}}
                                    </div>
                                </div>
                            </div>
                           <div class="d-flex flex-wrap page_content_bottom_border" style="">
                                {{cbtntxt_topheader}} {{cpgtxt_top}} {{cpgtxt_bar}}
                           </div>
                            <div class="d-flex flex-wrap col-md-12 non-padding" style="margin-bottom: 10px;">
                                <div class="d-flex flex-wrap col-md-3">
                                    <div class="col-md-5 non-padding">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_height}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <input type="text" class="form-modal-control" id="Modal_Topheader_Height" name="Modal_Topheader_Height" style="text-align: center;">
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap col-md-12 non-padding" style="margin-bottom: 10px;">
                                <div class="d-flex flex-wrap col-md-3">
                                    <div class="col-md-5 non-padding" >
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_left}} {{cpgtxt_padding}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <input type="text" class="form-modal-control" id="Modal_Topheader_leftpadding" name="Modal_Topheader_leftpadding">
                                    </div>
                                </div>
                                <div class="col-md-3 non-padding" style="font-size: 10px;">
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
                                <div class="d-flex flex-wrap col-md-3 non-padding">
                                    <div class="col-md-4 non-padding">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_right}} {{cpgtxt_padding}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <input type="text" class="form-modal-control" id="Modal_Topheader_rightpadding" name="Modal_Topheader_rightpadding">
                                    </div>
                                </div>
                                <div class="col-md-3 non-padding" style="font-size: 10px;">
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
                            <div class="d-flex flex-wrap col-md-12 non-padding" style="margin-bottom: 10px;">
                                <div class="d-flex flex-wrap col-md-3">
                                    <div class="col-md-5 non-padding" >
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_left}} {{cpgtxt_align}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <select class="form-modal-control w-100 select-noneborder-rightcolor" id="Modal_Topheader_leftalign_select" name="Modal_Topheader_leftalign_select" >
                                            <option value="left">Left</option>
                                            <option selected value="center">Center</option>
                                            <option value="right">Right</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3 non-padding"></div>
                                <div class="d-flex flex-wrap col-md-3 non-padding">
                                    <div class="col-md-4 non-padding">
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_right}} {{cpgtxt_align}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <select class="form-modal-control w-100 select-noneborder-rightcolor" id="Modal_Topheader_rightalign_select" name="Modal_Topheader_rightalign_select" >
                                            <option value="left">Left</option>
                                            <option selected value="center">Center</option>
                                            <option value="right">Right</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3"></div>
                            </div>
                            <div class="d-flex flex-wrap col-md-12 non-padding" style="margin-bottom: 10px;">
                                <div class="d-flex flex-wrap col-md-3">
                                    <div class="col-md-5 non-padding" ></div>
                                    <div class="col-md-7 non-padding">
                                        <div class="btn-block-edit active" @click.stop="editTopheaderLeftBlocks()">
                                            <span>{{cbtntxt_edit}} {{cpgtxt_left}} {{cpgtxt_blocks}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 non-padding"></div>
                                <div class="d-flex flex-wrap col-md-3 non-padding">
                                    <div class="col-md-4 non-padding"></div>
                                    <div class="col-md-7 non-padding">
                                        <div class="btn-block-edit active" @click.stop="editTopheaderRightBlocks()">
                                            <span>{{cbtntxt_edit}} {{cpgtxt_right}} {{cpgtxt_blocks}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3"></div>
                            </div>
                            <div class="d-flex flex-wrap page_content_bottom_border" style="">
                                {{cbtntxt_topheader}} {{cpgtxt_bottom}} {{cpgtxt_bar}}
                            </div>
                            <div class="d-flex flex-wrap col-md-12 non-padding" style="margin-bottom: 30px;">
                                <div class="d-flex flex-wrap col-md-4">
                                    <div class="col-md-2 non-padding" >
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_height}}</label>
                                    </div>
                                    <div class="col-md-5 non-padding">
                                        <input type="text" class="form-modal-control" id="Modal_Topheader_bottomheight" name="Modal_Topheader_bottomheight" style="text-align: center;">
                                    </div>
                                    <div class="col-md-4" style="font-size: 10px;">
                                        <font style="color: #b0b0af;">{{cpgtxt_notdisplaybar}}</font>&nbsp;
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap col-md-3">
                                    <div class="col-md-3 non-padding" >
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_padding}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <input type="text" class="form-modal-control" id="Modal_Topheader_bottompadding" name="Modal_Topheader_bottompadding">
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap col-md-3">
                                    <div class="col-md-3 non-padding" >
                                        <label style="margin-top: 8px; color:#666;">{{cpgtxt_align}}</label>
                                    </div>
                                    <div class="col-md-7 non-padding">
                                        <select class="form-modal-control w-100 select-noneborder-rightcolor" id="Modal_Topheader_bottomalign_select" name="Modal_Topheader_bottomalign_select" >
                                            <option value="left">Left</option>
                                            <option selected value="center">Center</option>
                                            <option value="right">Right</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-2 non-padding">
                                    <div class="btn-block-edit active" @click.stop="editTopheaderBottomBlocks()" style="width: 80%;">
                                        <span>{{cbtntxt_edit}} {{cpgtxt_bottom}} {{cpgtxt_blocks}}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12 align-self-center">
                                <div class="btn-block-edit active" @click.stop="addTopheaderContentBtn()" style="width: 100px; margin-left: 45%;">
                                    <span>+ {{cbtntxt_add}} </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Add Topheader Content Modal end-->
        <!--Edit Blocks Modal start-->
        <div class="modal fade" id="ModalEditBlocks">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <div id="Modal_Blocks_Title"><h4 class="modal-title">{{cpgtxt_left}} {{cpgtxt_bar}} {{cpgtxt_blocks}}</h4></div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="EditBlocksModalBody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel">
                            <div class="row" style="padding-bottom: 20px;">
                                <div class="col-md-12" style="margin-top: 20px; height: 400px; overflow-y: auto;">
                                    <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                                        <thead>
                                        <tr role="row">
                                            <th class="role_user_th" style="border: 0;">{{cpgtxt_name}}</th>
                                            <th class="role_user_th" style="border: 0; float: right;"></th>
                                        </tr>
                                        </thead>
                                        <tbody id="awa_blocks_lists">

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Edit Blocks Modal end-->

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
    .responsive-device.active{
        color: rgb(102, 102, 102);
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 0px;
    }
    .responsive-device{
        color: rgb(102, 102, 102);
        cursor: pointer;
        margin-bottom: 0px;
    }
    .page1_content_content_title.responsive-text{
        margin: auto;
        height: 0;
        line-height: 0;
        padding: 0 10px;
    }
    .non-padding{
        padding: 0px;
    }
</style>

<script>
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
    var modal_fixed_check = 1;
    var modal_left_blocks = new Array();
    var modal_right_blocks = new Array();
    var modal_bottom_blocks = new Array();

    var pgtxt_wantdeleteitem = "";
    var pgtxt_left = "";
    var pgtxt_right = "";
    var pgtxt_bottom = "";
    var pgtxt_bar = "";
    var pgtxt_blocks = "";
    var media_dlg = 0;
    var permss;
    var names_arr = new Array();
    var cg_id;
    var device_name = "D";
    var block_list = new Array()


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
            getTopheaderContentList(1);
        });
    }
    function addCategoryFunc() {
        var category_name = $('#category_item_name').val();
        var same_name = false;
        for(var i = 0; i < categorys.length; i++){
            if(categorys[i].scname == category_name){
                $("#ModalAddCategory").modal('hide');
                myjs.data.showAlert("pgtxt_existsname");
                same_name = true;
                break;
            }
        }
        if (same_name)
            return;

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
    function saveCategoryFunc(){
        var scname = $('#category_save_name').val();
        var same_name = false;
        var same_id = 0;
        for (var i = 0; i < categorys.length; i++) {
            if (scname == categorys[i].scname) {
                same_id = categorys[i].scid
                same_name = true;
                break;
            }
        }
        if(same_name){
            if(same_id != cg_id){
                $('#ModalSaveCategory').modal('hide');
                myjs.data.showAlert("pgtxt_existsname");
                return;
            }
        }

        $.ajax({
            url: 'admin.saveAWAHeadCategory',
            data: {
                userid: userid,
                sc_id:cg_id,
                sc_name:scname,
                tabstatus:tabstatus
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    $('#ModalSaveCategory').modal('hide');
                    sub_c_id = data.scid;
                    categorys = new Array();
                    if(data.lists != null && data.lists != '')
                        categorys = data.lists;
                    modifyFunc();
                    getTopheaderContentList(0);
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
        var top_tags = "";
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
            tags += '               <option value="save">'+btntxt_change+'</option>';
            tags += '               <option value="delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';

            if (i == 0)
                top_tags += '<div>' + name + "</div>";
            else
                top_tags += '<div>, ' + name + "</div>";
        }
        $('#awa_category_lists').html(tags);
        $('#top_category_lists').html(top_tags);

        $('select[id^="awa_category_item-"]').change(function(){
            var id = $(this).attr("id");
            cg_id = id.split('-')[1];
            var sel_val = $(this).val();
            var scname = $('#subheader_category-'+cg_id).val();
            if (sel_val == "save") {
                $('#ModalEditCategory').modal('hide');
                if(permss.pwrite != 1){
                    myjs.data.showAlert('pgtxt_notpermission');
                    return;
                }
                $('#category_save_name').val(scname);
                $('#ModalSaveCategory').modal('show');
            } else if (sel_val == "delete") {
                if (window.confirm(pgtxt_wantdeleteitem)) {
                    $.ajax({
                        url: 'admin.deleteAWAHeadCategory',
                        data: {
                            sc_id:cg_id,
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
                                getTopheaderContentList(0);
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
                    modifyFunc();
                    $('#Modal_TopCategory_List').html(showCategoryList());
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
    }
    function showSearchCategoryList() {
        var tags = '<option selected value="0" class="data-ajax" data-ajax="pgtxt_name">'+pgtxt_name+'</option>';
        tags += showCategoryList();
        $('#topheader_category_items').html(tags);
    }

    function initialize() {
        device_name = 'D';
        sub_c_id = 0;
        is_edit = false;
        checked_del_items = new Array();
        subedit_id = 0;
        modal_fixed_check = 1;
        modal_left_blocks = new Array();
        modal_right_blocks = new Array();
        modal_bottom_blocks = new Array();

        $('#Modal_TopCategory_List').html(showCategoryList());
        TopheaderAddModalEvent();
        $('#Modal_Topheader_Name').val('');
        $('#Modal_Topheader_Maxwidth').val('');
        $('#Modal_Topheader_padding').val('');
        $('#Modal_Topheader_background').val('');
        $('#Modal_Topheader_Height').val('');
        $('#Modal_Topheader_leftpadding').val('');
        $('#Modal_Topheader_rightpadding').val('');
        $('#Modal_Topheader_bottomheight').val('');
        $('#Modal_Topheader_bottompadding').val('');
        $('#Modal_Topheader_fixed_yes').attr("checked", true);
        $('#Modal_Topheader_fixed_no').attr("checked", false);
        setTopheaderColorPickers('#000000');

        $('.responsive-device').removeClass('active');
        $('#device-D').addClass('active');
        getBlocksList();
    }
    function ChangeItemNameSelectTab() {
        $('#topheader_category_items').change(function () {
            getTopheaderContentList(1);
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

        $('.responsive-device').click(function () {
            var id = $(this).attr("id");
            $('.responsive-device').removeClass('active');
            device_name = id.split('-')[1];
            $('#'+id).addClass('active');
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
    function setTopheaderColorPickers(color) {
        $('#topheader_background_colorpicker_value').text(color);
        $('#topheader_background_color').val(color);

        const topheader_background_colorpicker = document.getElementById('topheader_background_colorpicker');
        let picker2 = new ColorPicker(topheader_background_colorpicker, color);
        topheader_background_colorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            $('#topheader_background_colorpicker_value').text(color);
            $('#topheader_background_color').val(color);
        });
    }

    function topContentList(lists, cg_lists) {
        $('#awa_topheader_content_lists').html('');
        var tags = '';
        names_arr = new Array();
        for(var i = 0; i < lists.length; i++){
            var id = lists[i].id;
            var name = lists[i].name;
            names_arr.push(name);
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
                        $('#Modal_Topheader_Maxwidth').val(lists.maxwidth);
                        $('#Modal_Topheader_padding').val(lists.padding);
                        $('#Modal_Topheader_background').val(lists.bg_img);
                        setTopheaderColorPickers(lists.bg_color);
                        $('#Modal_Topheader_Height').val(lists.top_height);
                        $('#Modal_Topheader_leftpadding').val(lists.left_padding);
                        $('#Modal_Topheader_rightpadding').val(lists.right_padding);
                        $('#Modal_Topheader_leftalign_select').val(lists.left_align);
                        $('#Modal_Topheader_rightalign_select').val(lists.right_align);

                        $('#Modal_Topheader_bottomheight').val(lists.bottom_height);
                        $('#Modal_Topheader_bottompadding').val(lists.bottom_padding);
                        $('#Modal_Topheader_bottomalign_select').val(lists.bottom_align);

                        modal_left_blocks = $.parseJSON(lists.left_blocks);
                        modal_right_blocks = $.parseJSON(lists.right_blocks);
                        modal_bottom_blocks = $.parseJSON(lists.bottom_blocks);
                        showTopheaderModulepart(1);
                        $('#Modal_Topheader_Name').attr('readonly', true);
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
        var search_id = $('#topheader_category_items').val();
        var search_txt = $('#topheader_search_cont').val();
        var same_name = false;
        for (var i = 0; i < names_arr.length; i++){
            if(names_arr[i] == $('#Modal_Topheader_Name').val()){
                $("#ModalAddTopContent").modal('hide');
                myjs.data.showAlert("pgtxt_existsname");
                same_name = true;
                break;
            }
        }
        if (same_name)
            return;

        var postData = {
            userid: userid,
            device: device_name,
            search_id:search_id,
            search_txt:search_txt,
            pstart:pstart,
            pcnt:pcnt,
            modal_content_name : $('#Modal_Topheader_Name').val(),
            modal_category_id : $('#Modal_TopCategory_List').val(),
            modal_maxwidth : $('#Modal_Topheader_Maxwidth').val(),
            modal_padding : $('#Modal_Topheader_padding').val(),
            modal_background_image : $('#Modal_Topheader_background').val(),
            modal_background_color : $('#topheader_background_color').val(),
            modal_fixed_check : modal_fixed_check,
            modal_top_height : $('#Modal_Topheader_Height').val(),
            modal_left_padding : $('#Modal_Topheader_leftpadding').val(),
            modal_left_align : $('#Modal_Topheader_leftalign_select').val(),
            //modal_left_blocks : $('#Modal_Topheader_Name').val(),
            modal_right_padding : $('#Modal_Topheader_rightpadding').val(),
            modal_right_align : $('#Modal_Topheader_rightalign_select').val(),
            //modal_right_blocks : $('#Modal_Topheader_Name').val(),
            modal_bottom_height : $('#Modal_Topheader_bottomheight').val(),
            modal_bottom_padding : $('#Modal_Topheader_bottompadding').val(),
            modal_bottom_align : $('#Modal_Topheader_bottomalign_select').val(),
            //modal_bottom_blocks : $('#Modal_Topheader_Name').val()
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
                device: device_name,
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
        var search_id = $('#topheader_category_items').val();
        var search_txt = $('#topheader_search_cont').val();
        var postData = {
            userid: userid,
            device: device_name,
            editid:subedit_id,
            search_id:search_id,
            search_txt:search_txt,
            pstart:pstart,
            pcnt:pcnt,
            modal_content_name : $('#Modal_Topheader_Name').val(),
            modal_category_id : $('#Modal_TopCategory_List').val(),
            modal_maxwidth : $('#Modal_Topheader_Maxwidth').val(),
            modal_padding : $('#Modal_Topheader_padding').val(),
            modal_background_image : $('#Modal_Topheader_background').val(),
            modal_background_color : $('#topheader_background_color').val(),
            modal_fixed_check : modal_fixed_check,
            modal_top_height : $('#Modal_Topheader_Height').val(),
            modal_left_padding : $('#Modal_Topheader_leftpadding').val(),
            modal_left_align : $('#Modal_Topheader_leftalign_select').val(),
            //modal_left_blocks : $('#Modal_Topheader_Name').val(),
            modal_right_padding : $('#Modal_Topheader_rightpadding').val(),
            modal_right_align : $('#Modal_Topheader_rightalign_select').val(),
            //modal_right_blocks : $('#Modal_Topheader_Name').val(),
            modal_bottom_height : $('#Modal_Topheader_bottomheight').val(),
            modal_bottom_padding : $('#Modal_Topheader_bottompadding').val(),
            modal_bottom_align : $('#Modal_Topheader_bottomalign_select').val(),
            //modal_bottom_blocks : $('#Modal_Topheader_Name').val()
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
                device: device_name,
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
                        device: device_name,
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

    function getBlocksList() {
        $.ajax({
            url: 'admin.showAWAHeadBlocksList',
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    if(lists !== null && lists != "") {
                        block_list = $.parseJSON(lists);
                        console.log(block_list);
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
    function showBlockList(dc, idx, is_edit){
        if(is_edit){

        }
        else{
            for(var i = 0; i < block_list.length; i++){
                var block_item = block_list[i];
            }
        }
    }

    export default {
        data(){
            return {
                btntxt_add:'',
                btntxt_edit:'',
                btntxt_save:'',
                btntxt_delete:'',
                btntxt_change:'',
                btntxt_topheader:'',
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
                pgtxt_responsive:'',
                pgctl_desktop:'',
                pgctl_tablet:'',
                pgctl_mobile:'',
                pgtxt_maximumwidth:'',
                pgtxt_top:'',
                pgtxt_height:'',
                pgtxt_align:'',
                pgtxt_bottom:'',
                pgtxt_notdisplaybar:'',
                pgtxt_blocks:'',
            }
        },
        computed: {
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
            cpgtxt_responsive:function () {
                return this.pgtxt_responsive;
            },
            cpgctl_desktop:function () {
                return this.pgctl_desktop;
            },
            cpgctl_tablet:function () {
                return this.pgctl_tablet;
            },
            cpgctl_mobile:function () {
                return this.pgctl_mobile;
            },
            cpgtxt_maximumwidth:function () {
                return this.pgtxt_maximumwidth;
            },
            cpgtxt_top:function () {
                return this.pgtxt_top;
            },
            cpgtxt_height:function () {
                return this.pgtxt_height;
            },
            cpgtxt_align:function () {
                return this.pgtxt_align;
            },
            cpgtxt_bottom:function () {
                return this.pgtxt_bottom;
            },
            cpgtxt_notdisplaybar:function () {
                return this.pgtxt_notdisplaybar;
            },
            cpgtxt_blocks:function () {
                return this.pgtxt_blocks;
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
            pgtxt_wantdeleteitem = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_wantdeleteitem');
            pgtxt_name = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
            btntxt_save = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_save');
            btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
            btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
            btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
            pgtxt_left = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_left');
            pgtxt_right = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_right');
            pgtxt_bottom = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_bottom');
            pgtxt_bar = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_bar');
            pgtxt_blocks = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_blocks');
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
                initTopHeader();
                getTopheaderContentList(0);
                allDeleteTopCheckedFunc();
                $("#ModalAddTopContent").on('hide.bs.modal', function () {
                    $('select[id^="top_content_list_edit-"]').val('');
                });
                ChangeItemNameSelectTab();
            },
            addCategoryModalBtn(){
                addCategoryFunc();
            },
            saveCategoryModalBtn(){
                saveCategoryFunc();
            },
            SearchTopheaderCategoryBtn(){
                getTopheaderContentList(1);
            },
            addAWATopheaderContentModalBtn(){
                if(permss.pcreate == 1) {
                    initialize();
                    $('#Modal_Topheader_Name').attr('readonly', false);
                    $('#ModalAddTopContent').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
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
            editTopheaderLeftBlocks(){
                var tags = '<h4 className="modal-title" class="data-ajax" data-ajax="pgtxt_left,pgtxt_bar,pgtxt_blocks">'+pgtxt_left;
                var tags = ' ' + pgtxt_bar;
                var tags = ' ' + pgtxt_blocks;
                var tags = '</h4>';
                $('#Modal_Blocks_Title').html(tags);
            },
            editTopheaderRightBlocks(){
                var tags = '<h4 className="modal-title" class="data-ajax" data-ajax="pgtxt_right,pgtxt_bar,pgtxt_blocks">'+pgtxt_right;
                var tags = ' ' + pgtxt_bar;
                var tags = ' ' + pgtxt_blocks;
                var tags = '</h4>';
                $('#Modal_Blocks_Title').html(tags);
            },
            editTopheaderBottomBlocks(){
                var tags = '<h4 className="modal-title" class="data-ajax" data-ajax="pgtxt_bottom,pgtxt_bar,pgtxt_blocks">'+pgtxt_bottom;
                var tags = ' ' + pgtxt_bar;
                var tags = ' ' + pgtxt_blocks;
                var tags = '</h4>';
                $('#Modal_Blocks_Title').html(tags);
            },
        }//method


    }
</script>
