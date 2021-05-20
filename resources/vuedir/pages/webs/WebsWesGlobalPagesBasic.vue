<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_pages_basic}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_pages}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_pages_basic}}
                          <a href="#" id="webs-wesglobal-pages-basic-fav" data-status="off" data-page-info="Page_webs-wesglobal-pages-basic">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="page1_translate_bar">
                    <div class="page1_translate_text">{{cpgtxt_translation}}</div>
                    <div class="page1_translate_bar_left" id="translanglist">

                    </div>
                    <div class="page1_translate_bar_right" style="display: flex">
                        <div class="page1_translate_div" @click="SavePageContent" style="cursor: pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:sharp-save-alt"><path d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z" fill="currentColor"></path></svg>
                            <span class="page1_translate_span_right">{{cpgtxt_save}}</span>
                        </div>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <div class="page1_translate_div" style="cursor: pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-preview"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
                            <span class="page1_translate_span_right">{{cpgtxt_preview}}</span>
                        </div>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <div class="page1_translate_div" style="cursor: pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-new-releases"><path d="M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z" fill="currentColor"></path></svg>
                            <span class="page1_translate_span_right">{{cpgtxt_release}}</span>
                        </div> &nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="page1_alarm_bar" style="margin-bottom: 10px">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="mi:circle-warning"><g fill="none"><path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"></path><path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z" fill="currentColor"></path><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"></path></g></svg>
                    <span>{{cpgtxt_nosavenoappear}}</span>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 text-right">
<!--
                <button type="button" class="btn page1_custom_select_btn mb-sm-2" id="pageContAdd_btn" style="height: 40px; border-radius: 20px; padding: 0 25px; margin-right: 15px;" @click="">
                    <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);margin-right: 5px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="gg:add"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7z" fill="currentColor"></path></g></svg>
                    {{cbtntxt_add}}
                </button>
-->
            </div>
        </div>

        <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
            <div class="global_page_course_tab" style="width: 60px;">
                <div class="page1_content_side_bar_text" data-target="list">{{cpgtxt_list}}</div>
            </div>
            <div class="global_page_course_tab">
                <div class="page1_content_side_bar_text" data-target="pagetype">{{cpgtxt_description}}</div>
            </div>
            <div class="global_page_course_tab">
                <div class="page1_content_side_bar_text" data-target="function">{{cpgtxt_search}}</div>
            </div>
        </div>

        <div class="row">
            <!--list-->
<!--
            <div class="col-md-10 page_slider_content_list active" id="list">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title">{{cpgtxt_filters}}</div>
                    <div class="page1_content_content page2_content_text" style="padding:1.5rem">
                        <div class="row">
                            <div style="width: auto;padding-left: 15px">
                                <span>{{cpgtxt_search}}</span>
                            </div>
                            <div class="col">
                                <div class="input-group" style="width: 95%">
                                    <input type="text" id="wwgpp_list_s_c" name="wwgpp_list_s_c" class="form-control page2_input" placeholder="" aria-label="page content search" aria-describedby="basic-addon1" @keyup.13="wwgpp_search">
                                    <div class="input-group-append input-group-append-my">
                                        <span class="input-group-text input-group-text-my" id="basic-addon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search "><circle cx="11" cy="11" r="8"></circle> <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div style="width: auto;padding-left: 15px">
                                <span>{{cpgtxt_setupthe}}</span>
                            </div>
                            <div class="col">
                                <div class="input-group" style="width: 95%">
                                    <select id="wwgpp_list_nav_cnt" name="wwgpp_list_nav_cnt" class="form-control page2_input">
                                        <option value="1">1</option>
                                        <option value="5" selected="selected">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page1_content_content_bar">

                    <div class="table-responsive" id="list_container">

                        <table id="user-list" role="grid" aria-describedby="user-list_info" class="table table-lg  no-footer" style="margin:10px 0">
                            <thead>
                            <tr role="row">
                                <th class="th-lp-20">{{cpgtxt_title}}</th>
                                <th>{{cpgtxt_pagetype}}</th>
                                <th>{{cpgtxt_theauther}}</th>
                                <th>{{cpgtxt_time}}</th>
                                <th>{{cpgtxt_url}}</th>
                                <th class="th-rp-20" style="text-align: right;">{{cpgtxt_theeditor}}</th>
                            </tr>
                            </thead>
                            <tbody id="wwgpp_list_container">

                            </tbody>
                        </table>
                    </div>

                </div>

                <div class="row">
                    <div id="wwgpp_pagelist_nav" class="col-md-12">

                    </div>
            </div>
        </div>
-->
            <!--page setting-->
<!--
            <div class="col-md-10 page_slider_content_list"  id="pagesetting">
                <form method="post" enctype="multipart/form-data" name="pagesetting_frm" id="pagesetting_frm">
                    <input type="hidden" name="pgsetstate"  value="add"/>
                    <input type="hidden" name="pgsetid"  value=0/>
                    <input type="hidden" name="pgseturl"  value=""/>
                    <input type="hidden" name="pgsettranedLang"  value=""/>
                <div class="page1_content_content_bar">

                        <div class="page1_content_content_title">Page setting</div>
                        <div class="page1_content_content page2_content_text" style="padding: 2.0rem 1.5rem">

                            <div class="row" style="padding-bottom: 1.5rem">
                                <div style="width: 105px;padding-left: 15px">
                                    <span>Title</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 95%">
                                        <input type="text" id="pagesetting_title" name="pagesetting_title" class="form-control page2_input" placeholder="" aria-label="page content search" aria-describedby="basic-addon1">
                                     </div>
                                </div>
                                <div style="width: 105px;padding-left: 15px">
                                    <span>The author</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 95%">
                                        <input type="text" id="pagesetting_author" name="pagesetting_author" class="form-control page2_input" placeholder="" aria-label="page content search">
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="padding-bottom: 1.5rem">
                                <div style="width: 105px;padding-left: 15px">
                                    <span>Pagetype</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 95%">
                                        <select id="pagesetting_pgtype" name="pagesetting_pgtype" class="form-control page2_input">

                                        </select>
                                    </div>
                                </div>
                                <div style="width: 105px;padding-left: 15px">
                                    <span>Time</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 95%">

                                        <input type="text" class="form-control page2_input" name="pagesetting_datapicker" id="pagesetting_datapicker">
                                        <div class="input-group-append input-group-append-my">
                                            <span class="input-group-text input-group-text-my">
                                            <i class='far fa-edit' style='font-size:20px'></i>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="row" style="padding-bottom: 0.1rem">
                                <div style="width: 105px;padding-left: 15px">
                                    <span>URL</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 95%">
                                        <input type="text" id="pagesetting_url" name="pagesetting_url" class="form-control page2_input" placeholder="">
                                    </div>
                                </div>
                                <div style="width: 105px;padding-left: 15px">

                                </div>
                                <div class="col">

                                </div>
                            </div>
                            <div class="row" style="padding-bottom: 1.5rem">
                                <div class="container-fluid" style="text-align: left; width: 95%;padding-left: 105px;">
                                    <div class="form-check" style="line-height: 1.35rem;">
                                        <input type="checkbox" class="form-check-input" name="pagesetting_autock" id="pagesetting_autock">
                                        <label class="form-check-label" for="pagesetting_autock">
                                            Automatically generates link aliases
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row" style=" border-top: 1px solid #d6d6d6; padding: 2.5rem 0 1rem 0;">
                                <div style="width: 105px;padding-left: 15px">
                                    <span>Priority</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 95%">
                                        <select id="pagesetting_Priority" name="pagesetting_Priority" class="form-control page2_input">
                                            <option value="1" selected="selected">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                        </select>
                                    </div>
                                </div>
                                <div style="width: 105px;padding-left: 15px">
                                    <span>Show or Hide</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 95%">
                                        <select id="pagesetting_swhi" name="pagesetting_swhi" class="form-control page2_input">
                                            <option value="1" selected="selected">Yes</option>
                                            <option value="2">No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                </div>

                <div class="d-flex" style="margin: 3rem 0">
                    <textarea name="editcont0" id="editcont0" value="" style="display: none"></textarea>
                    <editor0
                        api-key="vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh"
                        cloud-channel="5-dev"
                        @onClick="editorclick0"
                        @onBlur="editorblue0"
                        :init="{
                                 id:'02',

                                plugins: [
                                 'lists link image code table paste help wordcount '
                                ],
                                toolbar: 'undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ',
                               images_upload_handler:upload_handler0,
                               init_instance_callback : edit_init_callback0
                              }"
                        v-model="TinyMCMcontent0"/>
                </div>
                </form>
            </div>
-->
            <!--pagetype-->
<!--
            <div class="col-md-10 page_slider_content_list"  id="pagetype">

                <form method="post" enctype="multipart/form-data" name="pagetype_frm" id="pagetype_frm">
                    <div class="page1_content_content_bar">
                        <div class="page1_content_content_title">{{cpgtxt_pagetype}}</div>
                            <div class="card-body" id="pagetype-container">

                            </div>
                    </div>
                </form>

            </div>
-->
            <!--function-->
<!--
            <div class="col-md-10 page_slider_content_list" id="function">
                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="function_frm" id="function_frm">
                        <input type="hidden" name="wfm" value="st">
                        <div class="page1_content_content_title">Function</div>
                        <div class="page_content" style="padding: 25px 20px">
                            <div class="row m-0" style="padding-bottom: 0.1rem">
                                <div style="width: 55px">
                                    <span>{{cpgtxt_content}}</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 50%">
                                        <select id="wwgpp_f_s" name="wwgpp_f_s" class="form-control page2_input" style="height: 40px">
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row m-0" style="line-height: 22px;  padding-bottom: 13px;  padding-top: 4px;">
                                <div style="width: 55px">
                                    <span></span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 50%" id="wwgpp_f_s_c">
                                        {{cpgtxt_currentnumber}} : 1
                                    </div>
                                </div>
                            </div>

                            <div class="row m-0" style="padding-bottom: 5px;">
                                <div style="width: 55px">
                                    <span>{{cpgtxt_number}}</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 50%">
                                        <select id="wwgpp_f_s_n" name="wwgpp_f_s_n" class="form-control page2_input" style="height: 40px">
                                            <option value="1" selected="selected">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="5">6</option>
                                            <option value="5">7</option>
                                            <option value="5">8</option>
                                            <option value="5">9</option>
                                            <option value="5">10</option>
                                            <option value="5">12</option>
                                            <option value="5">15</option>
                                            <option value="5">20</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
-->
        </div>

        <!--modal part-->
<!--
        <div class="modal fade" id="myAddPageTypeModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <div style="color: #5c6bc0; font-size: 20px; font-weight: 600;">create</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="row"  id="dlgErr" style="display: none">
                            <div class="col">
                                error;
                            </div>
                        </div>
                        <div class="page2_modal page2_content_text">
                            <div class="row page2_row">
                                <div style="width: 80px;">
                                    <span>{{cpgtxt_fontcontent}}</span>
                                </div>
                                <div class="col">
                                    <input type="text" placeholder="" value="" autocomplete="off" class="page2_input" name="pagetype_add_name" id="pagetype_add_name">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="height: auto">
                        <button type="button" class="btn page1_custom_select_btn" id="addDlg_btn"  @click="addPageTypeToOne">
                            <span class="iconify" data-inline="false" data-icon="gg:add" style="font-size: 24px;"></span>
                            {{cbtntxt_add}}
                        </button>
                    </div>
                </div>

            </div>
        </div>
-->
        <!--end modal-->
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
    .page1_content_side_bar .page1_content_side_bar_text{
        cursor: pointer;
        height: auto;
        float: left;
    }
    .global_page_course_tab{
        width: 100px;
    }
    #addDlg_btn{
        height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;
    }
    .input-group-append-my{
        border-top-right-radius:1.25rem;border-bottom-right-radius:1.25rem;
    }
    .input-group-text-my{
        background-color: #d6d6d6;border-top-right-radius:1.25rem;border-bottom-right-radius:1.25rem;
    }
    .form-control.page2_input:focus,.form-control.page2_input:hover{
        background-color:#d6d6d6;
    }
    .table thead th{
        text-transform:none;
        font-size: 14px;
    }
    .table thead th.th-lp-20, .table tbody td.th-lp-20{
        padding-left: 20px;
    }
    .table thead th.th-rp-20, .table tbody td.th-rp-20{
        padding-right: 20px;
    }
    .mainmenu-item-container{
        width: 100%;line-height: 30px;padding: 0 20px;align-items: baseline;
    }
    .mainmenu-item-container-sub{
        width: 100%;
        line-height: 30px;
        padding:20px;
        border-top: 1px solid #e4e4e4;
        display: none
    }
    .mainmenu-item-container-sub.active{
        width: 100%;
        line-height: 30px;
        padding:20px;
        border-top: 1px solid #e4e4e4;
        display: block;
    }
    .tox.tox-tinymce{
        border-radius: 20px;
        width: 100% !important;
        height: 150px;
        min-height: 150px !important;
    }
    .rotation_9{
        transform: rotate(90deg);
    }
    #dlgErr{
        color: #d41b11;
        text-align:center;
    }
</style>

<script>

    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import Editor from '@tinymce/tinymce-vue';
    import nav_module from "../../assets/jsfunc/nav_module";


    var preview='';
    var tabstatus=0;
    var vueOBJ=null;
    var transedlang='';//default;
    var pstart=1;
    var pnum = pstart;
    var numg = 5;
    var pgtxt_selectlanguage = "";
    //tinymce.activeEditor.getContent();

    function initPageList() {
        $('#wwgpp_list_nav_cnt').change(function () {
            var val=$(this).val();
            tabstatus=0;
            pstart=1;
            getPageList();
        });
    }

    function initPagetype() {

    }

    function initFunction() {
        $('#wwgpp_f_s_c').text('Current Number : ...');
        $('#wwgpp_f_s').change(function () {
            var val=$(this).val();
            if(val!==null){
              if(val.split('_').length > 1){
                  var num=val.split('_')[1];
                  $('#wwgpp_f_s_c').text('Current Number : '+num);
              }
              else
                  $('#wwgpp_f_s_c').text('Current Number : 1');
            }
        });
    }

    function initPagesetting() {

    }

    function  getPageList()
    {
     if(transedlang==='')
         return;

        var scont = $.trim($('#wwgpp_list_s_c').val());
        var pcnt = $('#wwgpp_list_nav_cnt').val();
        $.ajax({
            url: 'admin.getPageSettingList',
            data:{
                lang:transedlang,
                cont:scont,
                start:pstart,
                cnt:pcnt
            },
            type: 'POST',
            async: false,
            success: function (data) {
                var total=data.total;
                if(total<=0)
                {
                    $('#wwgpp_list_container').html('');
                    $('#wwgpp_pagelist_nav').html('');
                    $('.page1_alarm_bar').removeClass('active');
                    $('.page1_alarm_bar span').text('No Save No Appear');
                    return;
                }
                if(data.msg==="ok")
                {
                    var list = data.list;
                    pstart=data.start;
                    var totalpage=data.totalpage;
                    if (list instanceof Array)
                    {
                        var tags='';
                        for (var i = 0; i < list.length; i++)
                        {
                            var item = list[i];
                            var pagetype = item.name;
                            var id = item.id;
                            var url = decodeURIComponent(item.url);
                            tags+='<tr role="row" class="odd" id="pglistitem_'+id+'">';
                            tags+='<td class="th-lp-20">';
                            tags+=item.title;
                            tags+='</td>';
                            tags+='<td>'+pagetype+'</td>';
                            tags+='<td>'+item.author+'</td>';
                            tags+='<td>'+item.created_at+'</td>';
                            tags+='<td id="0">'+url+'</td>';
                            tags+='<td class="th-rp-20">';
                            tags+='<div class="form-group m-b-0">';
                            tags+='<select class="my-border-radius-slt form-control float-right" data-id="'+id+'" id="wwgpp_plist_ctrl_'+id+'" name="wwgpp_plist_ctrl_'+id+'">';
                            tags+='<option value="">select</option>';
                            tags+='<option value="edit">Edit</option>';
                            tags+='<option value="del">Delete</option>';
                            tags+='</select>';
                            tags+='</div>';
                            tags+='</td>';
                            tags+='</tr>';
                        }

                        if(transedlang!==null && transedlang!=='')
                        {
                            $('.page1_alarm_bar').addClass('active');
                            $('.page1_alarm_bar span').text('Save  Appear');
                        }

                        $('#wwgpp_list_container').html(tags);

                        var nav_tag='';
                        nav_tag+='<nav aria-label="..." class="mb-4">';
                        nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

                        var disble="";
                        if(pstart==1)
                            disble="disabled"

                        var prenum= parseInt(pstart) - 1;

                        nav_tag+='<li class="page-item  '+disble+' ">';
                        nav_tag+='<a class="page-link"  href="#"  data-num="sflunavnum_' + prenum + '" >';
                        nav_tag+='<i class="ti-angle-left"></i>';
                        nav_tag+='</a>';
                        nav_tag+='</li>';

                        //alert(totalpage);
                        pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;
                        // console.log("total:"+total);
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
                                oid="sflunavnum_" + pnum;

                            nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
                            nav_tag+='<a class="page-link"  data-num="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
                            nav_tag+='</li>';

                            if(pnum==totalpage) break;

                            pnum = pnum + 1;

                        }

                        var nextnum= parseInt(pstart) + 1;
                        var edisble="";
                        if(pstart==totalpage)
                            edisble="disabled"

                        nav_tag+='<li class="page-item '+edisble+' ">';
                        nav_tag+='<a class="page-link" data-lang="'+transedlang+'"  data-num="sflunavnum_' + nextnum + '" href="#">';
                        nav_tag+='<i class="ti-angle-right"></i>';
                        nav_tag+='</a>';
                        nav_tag+='</li>';
                        nav_tag+='</ul>';
                        nav_tag+='</nav>';

                        $('#wwgpp_pagelist_nav').html(nav_tag);
                        //console.log(nav_tag);

                        $('a[data-num^="sflunavnum_"]').click(function(){
                            var oid=$(this).attr("data-num");
                            pstart=oid.split('_')[1];
                            getPageList();
                        });


                        $('select[name^="wwgpp_plist_ctrl_"]').change(function(){
                            var value=$(this).val();
                            if(value=='') return;
                            var id=$(this).attr('data-id');

                            $.ajax({
                                method: "POST",
                                url: "admin.changePageSettingitem",
                                data: {
                                    id: id
                                    , cond:value
                                    , lang:transedlang
                                },
                                success: function(response) {
                                    if(response.msg==="ok")
                                    {
                                        if(value==="edit")
                                        {
                                            $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                                            $('.col-md-10.page_slider_content_list').removeClass('active');
                                            $('#pagesetting').addClass('active');

                                            $('input[name="pgsettranedLang"]').val('');
                                            $('input[name="pgseturl"]').val('');
                                            $('input[name="pgsetstate"]').val('edit');
                                            $('input[name="pgsetid"]').val(id);

                                            tabstatus=3;
                                            PageSettingOne(response.pagetype, response.items);
                                        }
                                        else{
                                            $('#pglistitem_'+id).remove();
                                        }
                                    }
                                    else {
                                        alert('Error get one item from db!');
                                    }
                                },
                                error: function (jqXHR, errdata, errorThrown) {
                                    console.log(errdata);
                                }
                            });

                        });

                    }
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });


    }

    function getPagetype() {

        $.ajax({
            url: 'admin.getPageTypeList',
            data:{
                lang:transedlang
            },
            type: 'POST',
            async: false,
            success: function (data) {
                $('#pagetype-container').html('');
                if(data.msg=="ok")
                {
                    var list = data.list;
                    if(list!==null)
                    {
                        if (list instanceof Array)
                        {

                            for (var i = 0; i < list.length; i++){
                                var item = list[i];
                                var name = item.name;
                                var id = item.id;
                                pageTypeAddEvent(id, name,0);
                            }

                            if(transedlang!==null && transedlang!=='')
                            {
                                $('.page1_alarm_bar').addClass('active');
                                $('.page1_alarm_bar span').text('Save  Appear');
                            }

                        }

                    }
                    else{
                        $('.page1_alarm_bar').removeClass('active');
                        $('.page1_alarm_bar span').text('No Save No Appear');
                    }
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function getFunction()
    {
        $.ajax({
            url: 'admin.getPageTypeList',
            data:{
                lang:transedlang
            },
            type: 'POST',
            async: false,
            success: function (data) {
                $('#wwgpp_f_s').html('');
                if(data.msg=="ok")
                {
                    var list = data.list;
                    if(list!==null)
                    {
                        if (list instanceof Array)
                        {
                          var tags='';
                            for (var i = 0; i < list.length; i++)
                            {
                                var item = list[i];
                                var name = item.name;
                                var id = item.id;
                                var num = item.item_cnt;
                                var val = id+'_'+num;
                                var seleted='';
                                if(i==0){
                                    seleted='selected="selected"';
                                    $('#wwgpp_f_s_c').text('Current Number : '+num);
                                }
                                tags+='<option value="'+val+'" '+seleted+'>'+name+'</option>';
                            }
                            $('#wwgpp_f_s').html(tags);
                            if(transedlang!==null && transedlang!=='')
                            {
                                $('.page1_alarm_bar').addClass('active');
                                $('.page1_alarm_bar span').text('Save  Appear');
                            }
                        }
                    }
                    else{
                        $('.page1_alarm_bar').removeClass('active');
                        $('.page1_alarm_bar span').text('No Save No Appear');
                        $('#wwgpp_f_s_c').text('');
                    }
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function PageSettingOne(ppagetype, pitem) {

        $('#pagesetting_title').val(pitem.title);
        $('#pagesetting_author').val(pitem.author);
        $('#pagesetting_datapicker').datepicker({dateFormat: 'yy/mm/dd'});
        var d = new Date();
        var yy = d.getFullYear();
        var mm = d.getMonth()+1;
        var dd = d.getDate();
        var data_str = pitem.created_at;
        if(pitem.created_at.split(' ').length > 1){
            data_str = pitem.created_at.split(' ')[0];
            if(data_str.split('-').length > 2){
                yy=data_str.split('-')[0];
                mm=data_str.split('-')[1];
                dd=data_str.split('-')[2];
            }
        }
        $('#pagesetting_datapicker').val(yy+'/'+mm+'/'+dd);

        var tag='';
        for (var i = 0; i < ppagetype.length; i++){
            var oneobj = ppagetype[i];
            var name = oneobj.name;
            var id = oneobj.id;

            var seleted='';
            if(id===pitem.pagetypeId){
                seleted='selected="selected"';
            }
            tag +='<option value="'+id+'" '+seleted+'>'+name+'</option>';
        }
        $('#pagesetting_pgtype').html(tag);
        var url = decodeURIComponent(pitem.url);
        $('#pagesetting_url').val(url);
        $('#pagesetting_Priority').val(pitem.priority);
        $('#pagesetting_swhi').val(pitem.shstate);
        if(pitem.content!==undefined && pitem.content!==''){
            $('.tox.tox-tinymce').css('height','350px');
            var edt0=htmldecodejs(pitem.content);
            vueOBJ.TinyMCMcontent0 = edt0;
        }

        $('input[id^="pagesetting_autock"]').click(function() {
            if($(this).is(':checked')){
                if(transedlang !==null && transedlang !==null && transedlang.indexOf('en') > -1){
                    var title = $.trim($('#pagesetting_title').val());
                    var sel = document.getElementById('pagesetting_pgtype');
                    if(sel.options.length > 0){
                        var pgtype =  sel.options[sel.selectedIndex].text;
                        var url ='';
                        if(pgtype!==null && pgtype !=='')
                            url += '/'+pgtype;
                        if(title!==null && title !=='')
                            url += '/'+title;
                        $('#pagesetting_url').val(url);
                    }
                }
                else
                {
                    $('#pagesetting_url').val('/Service');//not english
                }

            }
            else{
                $('#pagesetting_url').val('');
            }
        });

    }

    function getPagesetting() {

        var d = new Date();
        var yy = d.getFullYear();
        var mm = d.getMonth()+1;
        var dd = d.getDate();
        $('#pagesetting_datapicker').datepicker({dateFormat: 'yy/mm/dd'});
        $('#pagesetting_datapicker').val(yy+'/'+mm+'/'+dd);

        $('input[id^="pagesetting_autock"]').click(function() {
            if($(this).is(':checked'))
            {
                if(transedlang !==null && transedlang !=='' && transedlang.indexOf('en') > -1){
                    var title = $.trim($('#pagesetting_title').val());
                    var sel = document.getElementById('pagesetting_pgtype');
                    if(sel.options.length > 0){
                        var pgtype =  sel.options[sel.selectedIndex].text;
                        var url ='';
                        if(pgtype!==null && pgtype !=='')
                            url += '/'+pgtype;
                        if(title!==null && title !=='')
                            url += '/'+title;
                        $('#pagesetting_url').val(url);
                    }
                }
                else
                {
                    $('#pagesetting_url').val('/Service');//not english
                }
            }
            else{
                $('#pagesetting_url').val('');
            }
        });

        if(transedlang===null || transedlang === '')
        {
            alert(pgtxt_selectlanguage);return;
        }

        $.ajax({
            url: 'admin.getPageTypeList',
            data:{
                lang:transedlang
            },
            type: 'POST',
            async: false,
            success: function (data) {
                $('#pagesetting_pgtype').html('');
                if(data.msg==="ok")
                {
                    var list = data.list;
                    if(list!==null)
                    {
                        if (list instanceof Array)
                        {
                            var tag='';
                            for (var i = 0; i < list.length; i++){
                                var item = list[i];
                                var name = item.name;
                                var id = item.id;

                                var seleted='';
                                if(i==0){
                                    seleted='selected="selected"';
                                }
                                tag +='<option value="'+id+'" '+seleted+'>'+name+'</option>';
                            }

                            $('#pagesetting_pgtype').html(tag);
                        }
                    }
                    else{
                        alert('page type must do not empty!');
                        return;
                    }
                }
                else{
                    alert('page type must do not empty!');
                    return;
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    function pageTypeAddEvent(id, name) {
        var tags='';
        tags +='<div class="d-flex flex-column" id="item-container-'+id+'" style="width:50%; border: 1px solid #e4e0e0;border-radius: 20px; margin-bottom: 1.2rem">';
        tags +='<div class="d-flex flex-row justify-content-between mainmenu-item-container">';
        tags +='<div id="fpagetypename_'+id+'">'+name+'</div>';
        tags +='<div>';
        tags +='</div>';
        tags +='<div style="cursor: pointer" data-id="'+id+'" id="fmenuarrow_'+id+'">';
        tags +='<i class="fas fa-caret-down" aria-hidden="true"></i>';
        tags +='</div>';
        tags +='</div>';
        tags +='<div class="mainmenu-item-container-sub" id="fmenusubcont_'+id+'">';
        tags +='<div class="d-flex flex-row justify-content-start">';
        tags +='<div class="data-ajax" data-ajax="pgtxt_navigation,pgtxt_label" style="flex-grow: 1;width: 100px">Navigation Label</div>';
        tags +='<div style="flex-grow: 6">';
        tags +='<input class="form-control form-control-sm" type="text" name="cont[]" autocomplete="off" data-cont="" id="fpagetypesub_'+id+'" value="'+name+'">';
        tags +='</div>';
        tags +='</div>';
        tags +='<div class="d-flex flex-row justify-content-end m-t-15">';

        tags +='<div class="btn btn-outline-light  dash-my-btn-0" style="padding: 10px 20px;">';
        tags +='<span class="data-ajax m-l-10" data-ajax="btntxt_save" data-id="'+id+'" id="fmenusa_'+id+'">Save</span>';
        tags +='</div>';
        tags +='<div class="btn btn-outline-light  dash-my-btn-0" style="margin-left:20px;padding: 10px 20px;">';
        tags +='<span class="data-ajax m-l-10" data-ajax="btntxt_remove" data-id="'+id+'" id="fmenurv_'+id+'">Remove</span>';
        tags +='</div>';

        tags +='</div>';
        tags +='</div>';
        tags +='</div>';

        $('#pagetype-container').append(tags);

        $('div[id^="fmenuarrow_'+id+'"]').click(function () {
            var id = $(this).attr('data-id');
            if( $('#fmenusubcont_'+id).hasClass('active'))
            {
                $(this).removeClass('rotation_9');
                $('#fmenusubcont_'+id).removeClass('active');
            }
            else{
                $(this).addClass('rotation_9');
                $('#fmenusubcont_'+id).addClass('active');
            }

        });

        $('span[id^="fmenusa_'+id+'"]').click(function () {
            if(transedlang===''){
                alert(pgtxt_selectlanguage);return;;
            }
            var id = $(this).attr('data-id');
            var cont = $.trim($('#fpagetypesub_'+id).val());
            if(cont=='')return;
            $.ajax({
                url: 'admin.changePageType',
                type: 'POST',
                data: {
                    lang:transedlang,
                    cond:'sv',
                    id:id,
                    name:cont
                },
                async: false,
                success: function (data) {
                    if(data.msg=="ok"){
                       $('#fpagetypename_'+id).text(cont);
                    }
                    else{
                        alert('Error Save from DB!');
                    }
                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });

        });

        $('span[id^="fmenurv_'+id+'"]').click(function () {
            if(transedlang===''){
                alert(pgtxt_selectlanguage);return;;
            }
            var id = $(this).attr('data-id');
            var cont = $.trim($('#fpagetypesub_'+id).val());
            if(cont=='')return;
            $.ajax({
                url: 'admin.changePageType',
                type: 'POST',
                data: {
                    lang:transedlang,
                    cond:'rm',
                    id:id,
                    name:cont
                },
                async: false,
                success: function (data) {
                    if(data.msg=="ok"){
                        $('#item-container-'+id).remove();
                        var clen = $("#pagetype-container").children().length;
                        if(clen==0){
                            $('.page1_alarm_bar').removeClass('active');
                            $('.page1_alarm_bar span').text('No Save No Appear');
                        }
                    }
                    else{
                        alert('Error Delete from DB!');
                    }
                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        });
    }

    export default {
        name: "WebsWesGlobalPagesBasic",
        components: {
            'editor0': Editor
        },
        data(){
            return {
                pageid:'webs-wesglobal-pages-basic-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_pages:'',
                musususu_webs_wesglobal_pages_basic:'',
                pgtxt_translation:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_nosavenoappear:'',
                pgtxt_description:'',
                pgtxt_list:'',
                pgtxt_pagetype:'',
                pgtxt_function:'',
                pgtxt_title:'',
                pgtxt_theauther:'',
                pgtxt_time:'',
                pgtxt_url:'',
                pgtxt_theeditor:'',
                pgtxt_content:'',
                pgtxt_currentnumber:'',
                pgtxt_number:'',
                pgtxt_fontcontent:'',
                pgtxt_filters:'',
                pgtxt_search:'',
                pgtxt_setupthe:'',
                pgtxt_dbsaved:'',
                pgtxt_selectlanguage: '',

                btntxt_add:'',
                TinyMCMcontent0: '',
                username:'',
                uname:'',
            }
        },
        created() {

            var userinfo = nav_module.data.jsonparse(window.Laravel.userinfo);
            this.username = userinfo.username;
            this.uname = userinfo.name;
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
            /* fav part*/
            pgtxt_selectlanguage = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguage');
            this.initpage();
            this.getWWGStoredLang();
        },
        computed: {
            cmususu_webs_wesglobal_pages:function () {
                return this.mususu_webs_wesglobal_pages
            },
            cmusususu_webs_wesglobal_pages_basic:function () {
                return this.musususu_webs_wesglobal_pages_basic
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_wesglobal:function () {
                return this.musu_webs_wesglobal
            },
            cpgtxt_translation:function () {
                return this.pgtxt_translation
            },
            cpgtxt_save:function () {
                return this.pgtxt_save
            },
            cpgtxt_preview:function () {
                return this.pgtxt_preview
            },
            cpgtxt_release:function () {
                return this.pgtxt_release
            },
            cpgtxt_nosavenoappear:function () {
                return this.pgtxt_nosavenoappear
            },
            cpgtxt_description:function () {
                return this.pgtxt_description
            },
            cpgtxt_list:function () {
                return this.pgtxt_list
            },
            cpgtxt_pagetype:function () {
                return this.pgtxt_pagetype
            },
            cpgtxt_function:function () {
                return this.pgtxt_function
            },

            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_theauther:function () {
                return this.pgtxt_theauther
            },
            cpgtxt_time:function () {
                return this.pgtxt_time
            },
            cpgtxt_url:function () {
                return this.pgtxt_url
            },
            cpgtxt_theeditor:function () {
                return this.pgtxt_theeditor
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cpgtxt_currentnumber:function () {
                return this.pgtxt_currentnumber
            },
            cpgtxt_number:function () {
                return this.pgtxt_number
            },
            cpgtxt_fontcontent:function () {
                return this.pgtxt_fontcontent
            },
            cpgtxt_filters:function () {
                return this.pgtxt_filters
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_search:function () {
                return this.pgtxt_search
            },
            cpgtxt_setupthe:function () {
                return this.pgtxt_setupthe
            },
            cpgtxt_dbsaved:function () {
                return this.pgtxt_dbsaved
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
                axios.post('admin.getWWGStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        var stored_langs = response.data.langlist;
                        if(stored_langs!=''){
                            stored_langs = $.parseJSON(stored_langs);
                            var tags='';
                            for (var j = 0; j < stored_langs.length; j++)
                            {
                                var obj = stored_langs[j];
                                var iso = obj.iso;
                                var dialCode = obj.dialcode;
                                var cname = obj.name;
                                var status = obj.status;
                                var dcont=iso+'-'+dialCode+'-'+cname;
                                if(status=='enable')
                                    tags +='<span class="page1_translate_span" style="cursor: pointer" data-cont="'+dcont+'">'+cname+'</span>&nbsp;&nbsp;&nbsp;';
                            }
                            $('#translanglist').html(tags);

                            $('.page1_translate_span').click(function () {
                                $('.page1_translate_span').removeClass('active');
                                $(this).addClass('active');
                                var cont = $(this).attr('data-cont');
                                var len= cont.split('-').length;
                                if(len > 0){
                                    var sky = cont.split('-')[0]+'-'+cont.split('-')[1];
                                    transedlang = sky;
                                    $('.page1_alarm_bar').removeClass('active');
                                    $('.page1_alarm_bar span').text('No Save No Appear');

                                    if(tabstatus==0){
                                        pstart=1;
                                        getPageList();
                                    }
                                    else if(tabstatus==1)
                                        getPagetype();
                                    else if(tabstatus==2)
                                        getFunction();
                                    else if(tabstatus==3){
                                        $('#pgsetstate').val('add');
                                        $('#pgsetid').val(0);
                                        $('#pagesetting_frm')[0].reset();
                                        getPagesetting();
                                    }

                                }
                            });

                        }

                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            initpage()
            {
                transedlang='';
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function()
                {

                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_slider_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    $('.page1_alarm_bar').removeClass('active');
                    $('.page1_alarm_bar span').text('No Save No Appear');

                    if(subid=='list')
                    {
                        tabstatus=0;
                        pstart=1;
                        getPageList();
                    }
                    else if(subid=='pagetype')
                    {
                        tabstatus=1;
                        getPagetype();
                    }
                    else if(subid=='function'){
                        tabstatus=2;
                        getFunction();
                    }

                });



                $('#pageContAdd_btn').click(function () {

                    if(transedlang===''){
                        alert(pgtxt_selectlanguage);
                        return;
                    }

                   if(tabstatus===1)
                   {

                       $('#dlgErr').text('').css('display','none');
                       $('#pagetype_add_name').val('');
                       $('#myAddPageTypeModal').modal('show');
                   }
                   else
                   {
                       $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                       $('.col-md-10.page_slider_content_list').removeClass('active');
                       $('#pagesetting').addClass('active');

                       $("#pagesetting_frm")[0].reset();
                       $('input[name="pgsettranedLang"]').val('');
                       $('input[name="pgseturl"]').val('');
                       $('input[name="pgsetstate"]').val('add');
                       $('input[name="pagesetting_author"]').val(vueOBJ.username);

                       tabstatus=3;
                       getPagesetting();
                   }
                });

                initPageList();
                initPagetype();
                initFunction();
                initPagesetting();

            },
            editorclick0(){
               $('.tox.tox-tinymce').css('height','350px');
            },
            editorblue0(){
                $('.tox.tox-tinymce').css('height','150px');
            },
            edit_init_callback0(){
                $('.tox-statusbar').css('display','none');
            },
            upload_handler0(blobInfo, success, failure, progress) {
                var xhr, formData;
                xhr = new XMLHttpRequest();
                xhr.withCredentials = false;
                xhr.open('POST', 'admin.UpdateWWGBarCenterImg');
                xhr.upload.onprogress = function (e) {
                    progress(e.loaded / e.total * 100);
                };
                xhr.onload = function() {
                    var json;
                    if (xhr.status < 200 || xhr.status >= 300) {
                        failure('HTTP Error: ' + xhr.status);
                        return;
                    }
                    json = JSON.parse(xhr.responseText);

                    if (!json || typeof json.location != 'string') {
                        failure('Invalid JSON: ' + xhr.responseText);
                        return;
                    }
                    // $('#wwga_footbarleft_upload_preview_temp').val(json.filename);
                    success(json.location);
                };
                xhr.onerror = function () {
                    failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
                };
                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                xhr.send(formData);
            },
            SavePageContent(){
                if(transedlang===''){
                    alert(pgtxt_selectlanguage);
                    return;
                }

                if(tabstatus==0)//list
                {

                }
                else if(tabstatus==1)//page type
                {
                    //자체로 보관을 진행한다.
                }
                else if(tabstatus==2)//function
                {
                    var val = $('#wwgpp_f_s').val();
                    var cnt = $('#wwgpp_f_s_n').val();

                    if(val==null || val=='')
                        return;

                    var id=0;
                    if(val.split('_').length > 1){
                        id=val.split('_')[0];
                    }

                    if(parseInt(id)==0)return;

                    $.ajax({
                        url: 'admin.addNumInPageType',
                        type: 'POST',
                        data: {
                            id:id,
                            num:cnt,
                            lang:transedlang
                        },
                        async: false,
                        success: function (data)
                        {
                            if(data.msg==="ok"){
                                $('#wwgpp_f_s_c').text('Current Number : '+cnt);
                                //$('#wwgpp_f_s').val(id+'_'+cnt);
                                var sel = document.getElementById('wwgpp_f_s');
                                sel.options[sel.selectedIndex].value = id+'_'+cnt;
                                alert('Success Add Number on Content!');
                            }
                            else
                                alert('Error Add Number on Content!');

                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        }
                    });

                }
                else if(tabstatus==3)//page setting.
                {
                    $('#editcont0').val(this.TinyMCMcontent0);
                    $('input[name="pgsettranedLang"]').val(transedlang);
                    var surl = $('#pagesetting_url').val();
                    surl = $.trim(surl);
                    surl = surl.replace(/(\s*)/g, '');
                    surl = encodeURIComponent(surl);
                    $('input[name="pgseturl"]').val(surl);
                    var state =$('input[name="pgsetstate"]').val();
                    var  formData = new FormData($("#pagesetting_frm")[0]);
                    $.ajax({
                        url: 'admin.addwwgpp_pagesetting',
                        type: 'POST',
                        data: formData,
                        async: true,
                        success: function (data) {
                            // data = JSON.parse(data);
                            if(data.msg=="ok")
                            {
                                if(state==='edit'){
                                    alert('Success edit!');
                                }
                                else{
                                    alert('Success add in database!');
                                    $("#pagesetting_frm")[0].reset();
                                }
                            }
                            else
                            {
                                alert(data.msg);
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

            },
            addPageTypeToOne(){
                if(transedlang===''){
                    alert(pgtxt_selectlanguage);
                    $("#myAddPageTypeModal").modal('hide');
                    return;
                }
                var pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                var cont = $.trim($('#pagetype_add_name').val());
                if(cont=='')return;
                $.ajax({
                    url: 'admin.addPageType',
                    type: 'POST',
                    data: {
                        name:cont,
                        lang:transedlang
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#dlgErr').text(pgtxt_dbsaved).css({'display':'block','color':'#0BC334'});
                            setTimeout(function () {
                                $("#myAddPageTypeModal").modal('hide');
                            },1000);

                            var name = data.name;
                            var id = data.id;

                            pageTypeAddEvent(id,name);

                            $('.page1_alarm_bar').addClass('active');
                            $('.page1_alarm_bar span').text('Save  Appear');

                        }
                        else if(data.msg=="du"){
                            $('#dlgErr').text('Exist same name in DB!').css({'display':'block','color':'#d41b11'});
                        }
                        else if(data.msg=="inserterr"){
                            $('#dlgErr').text('Error insert in DB!').css({'display':'block','color':'#d41b11'});
                        }
                        else
                           $('#dlgErr').text(data.msg).css('display','block');

                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });


            },
            SetSubSubMenuChange(selectedMenu, pid) {
                this.$store.dispatch('SetSubMenuChange', selectedMenu+'|'+pid);
            },
            wwgpp_search(){
                var scont = $.trim($('#wwgpp_list_s_c').val());
                if(scont!==null && scont !=='')
                  getPageList();
            },

        }//method

    }
</script>
