<template>
    <div class="col-md-12">
        <div style="display: none">{{contentchange}}</div>
        <div class="row">
            <!--subheader-->
            <div class="col-md-12 page_slider_content_list active" id="subheader">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="height:auto; display: flex;">
                        <div class="col-md-1" id="subheader_title" style="margin: auto;">{{cpgtxt_category}}</div>
                        <div class="col-md-8 d-flex flex-wrap" id="subheader_category_lists" style="display: flex; color: rgba(0, 0, 0, 0.6);">

                        </div>
                        <div class="col-md-3" id="subheader_button" style="margin: auto;">
                            <button type="button" id="awah_sub_category_add" class="btn page1_custom_btn active" style="height: 40px; border-radius: 20px; padding: 0px 30px; margin: 0 25px 0px 0px;">
                                + {{cbtntxt_add}}
                            </button>
                            <button type="button" id="awah_sub_category_edit" class="btn page1_custom_btn" style="height: 40px; border-radius: 20px; padding: 0px 30px;">
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
                                            <input type="text" class="form-control" id="category_save_name" name="category_save_name">
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
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import media_module from "../../assets/jsfunc/media_module";

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var preview='';
    var tabstatus=2;
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

    var pgtxt_wantdeleteitem = "";
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
    var permss;
    var names_arr = new Array();
    var cg_id;


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
            getSubheaderContentList(1);
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
                    getSubheaderContentList(0);
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
        $('#subheader_category_lists').html(top_tags);

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
                                getSubheaderContentList(0);
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
    }
    function showSearchCategoryList() {
        var tags = '<option selected value="0" class="data-ajax" data-ajax="pgtxt_name">'+pgtxt_name+'</option>';
        tags += showCategoryList();
        $('#subheader_category_items').html(tags);
    }

    function getSystemFieldTextList() {
        var tags = '';
        for(var i = 0; i < systemTexts.length; i++){
            var id = systemTexts[i].id;
            var name = systemTexts[i].name;
            tags += '<option value="'+id+'">'+name+'</option>';
        }
        $('#Modal_Subheader_pagetitle').html(tags);
        $('#Modal_Subheader_breadcrumbs').html(tags);
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
        $('#subheader_category_items').change(function () {
            getSubheaderContentList(1);
        });
    }

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
            modal_background_color:modal_background_color
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
            modal_background_color:modal_background_color
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
        data(){
            return {
                btntxt_add:'',
                btntxt_edit:'',
                btntxt_save:'',
                btntxt_delete:'',
                btntxt_change:'',
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
                pgtxt_responsive:'',
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
            cpgtxt_responsive:function () {
                return this.pgtxt_responsive;
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
                initSubheader();
                getSubheaderContentList(0);
                allDeleteSubCheckedFunc();
                $("#ModalAddSubContent").on('hide.bs.modal', function () {
                    $('select[id^="sub_content_list_edit-"]').val('');
                });
                ChangeItemNameSelectTab();
            },
            addCategoryModalBtn(){
                addCategoryFunc();
            },
            saveCategoryModalBtn(){
                saveCategoryFunc();
            },
            SearchSubheaderCategoryBtn(){
                getSubheaderContentList(1)
            },
            addAWASubheaderContentModalBtn(){
                if(permss.pcreate == 1) {
                    initialize();
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
        }//method


    }
</script>
