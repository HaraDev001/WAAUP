<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_pages_content}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_pages}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_pages_content}}
                      <a href="#" id="webs-wesglobal-pages-content-fav" data-status="off" data-page-info="Content_webs-wesglobal-pages-content">
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
                        <div class="page1_translate_div" @click="PagePreview" style="cursor: pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-preview"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
                            <span class="page1_translate_span_right">{{cpgtxt_preview}}</span>
                        </div>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <div class="page1_translate_div" @click="PageRelease" style="cursor: pointer">
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

        <div class="page1_content_side_bar" style="display: flex; margin-bottom: 20px;">
            <div class="global_page_content_tab" style="width: 60px;">
                <div class="page1_content_side_bar_text" data-target="list">{{cpgtxt_list}}</div>
            </div>
            <div class="global_page_content_tab">
                <div class="page1_content_side_bar_text" data-target="pagetype">{{cpgtxt_contenttype}}</div>
            </div>
            <div class="global_page_content_tab">
                <div class="page1_content_side_bar_text" data-target="wwpc_sidebar">{{cpgtxt_sidebar}}</div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 text-right" style="height: 50px;">
                <button type="button" class="btn page1_custom_select_btn mb-sm-2" id="pageContAdd_btn" style="height: 40px; border-radius: 20px; padding: 0 25px; float: right; display: block;">
                    <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);margin-right: 5px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="gg:add"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7z" fill="currentColor"></path></g></svg>
                    {{cbtntxt_add}}
                </button>
            </div>
        </div>

        <div class="row">
            <!--list-->
            <div class="col-md-12 page_slider_content_list active" id="list">
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
                                <th>{{cpgtxt_contenttype}}</th>
                                <th>{{cpgtxt_theauthor}}</th>
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
                    <div id="wwgpc_pagelist_nav" class="col-md-12">

                    </div>
            </div>
        </div>

            <!--page setting-->
            <div class="col-md-12 page_slider_content_list"  id="pagesetting">
                <form method="post" enctype="multipart/form-data" name="pagesetting_frm" id="pagesetting_frm">
                    <input type="hidden" name="pgsettype"  value=""/>
                    <input type="hidden" name="pgsetdate"  value=""/>
                    <input type="hidden" name="pgsetstate"  value="add"/>
                    <input type="hidden" name="pgsetid"  value=0/>
                    <input type="hidden" name="pgseturl"  value=""/>
                    <input type="hidden" name="pgsettranedLang"  value=""/>
                    <div class="page1_content_content_bar">

                        <div class="page1_content_content_title">{{cpgtxt_content}} {{cpgtxt_setting}}</div>
                        <div class="page1_content_content page2_content_text" style="padding: 2.0rem 1.5rem">

                            <div class="row" style="padding-bottom: 1.5rem">
                                <div style="width: 105px;padding-left: 15px">
                                    <span>{{cpgtxt_title}}</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 95%">
                                        <input type="text" id="pagesetting_title" name="pagesetting_title" class="form-control page2_input" placeholder="" aria-label="page content search" aria-describedby="basic-addon1">
                                     </div>
                                </div>
                                <div style="width: 105px;padding-left: 15px">
                                    <span>{{cpgtxt_theauthor}}</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 95%">
                                        <input type="text" id="pagesetting_author" name="pagesetting_author" class="form-control page2_input" placeholder="" aria-label="page content search">
                                    </div>
                                    <div class="form-check" style="line-height: 1.35rem; padding-left: 2.2rem; margin-top: 5px;">
                                        <input type="checkbox" class="form-check-input" name="author_invisible" id="author_invisible">
                                        <label class="form-check-label" for="author_invisible">
                                            {{cpgtxt_invisible}}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="padding-bottom: 1.5rem">
                                <div style="width: 105px;padding-left: 15px">
                                    <span>{{cpgtxt_content}} {{cpgtxt_type}}</span>
                                </div>
                                <div class="col">
                                    <div class="input-group" style="width: 95%">
                                        <select id="pagesetting_pgtype" name="pagesetting_pgtype" class="form-control page2_input">

                                        </select>
                                    </div>
                                    <div class="form-check" style="line-height: 1.35rem; padding-left: 2.2rem; margin-top: 5px;">
                                        <input type="checkbox" class="form-check-input" name="type_invisible" id="type_invisible">
                                        <label class="form-check-label" for="type_invisible">
                                            {{cpgtxt_invisible}}
                                        </label>
                                    </div>
                                </div>
                                <div style="width: 105px;padding-left: 15px">
                                    <span>{{cpgtxt_time}}</span>
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
                                    <div class="form-check" style="line-height: 1.35rem; padding-left: 2.2rem; margin-top: 5px;">
                                        <input type="checkbox" class="form-check-input" name="time_invisible" id="time_invisible">
                                        <label class="form-check-label" for="time_invisible">
                                            {{cpgtxt_invisible}}
                                        </label>
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
                                            {{cpgtxt_autogenlink}}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row" style=" border-top: 1px solid #d6d6d6; padding: 2.5rem 0 1rem 0;">
                                <div style="width: 105px;padding-left: 15px">
                                    <span>{{cpgtxt_priority}}</span>
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
                                    <span>{{cpgtxt_showhide}}</span>
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

            <!--pagetype-->
            <div class="col-md-12 page_slider_content_list"  id="pagetype">

                <form method="post" enctype="multipart/form-data" name="pagetype_frm" id="pagetype_frm">
                    <div class="page1_content_content_bar">
                        <div class="page1_content_content_title">{{cpgtxt_contenttype}}</div>
                            <div class="card-body" id="pagetype-container">

                            </div>
                    </div>
                </form>

            </div>

            <!--sidebar-->
            <div class="col-md-12 page_slider_content_list" id="wwpc_sidebar">
                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="wwpc_content_type_frm" id="wwpc_content_type_frm">
                        <input type="hidden" name="wfm" value="st">
                        <div class="page1_content_content_title">
                            &nbsp;&nbsp; &nbsp;&nbsp;Sidebar &nbsp;&nbsp;&gt;&gt;&nbsp;Content Type
                        </div>
                        <div class="page_content" style="padding: 25px 20px">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="col col-md-12">
                                        <div class="col-md-8">
                                            <div class="col content-type-checkbox-container" style="display: flex" id="wwpc_side_type_checkbox_container">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 text-right" style="padding-right: 0px;">
                                                <button type="button" class="btn page1_custom_select_btn mb-sm-2" id="wwpc_side_content_type_add" style="height: 40px; border-radius: 10px; padding: 0 35px; margin-right: 0px;" @click="">
                                                    {{cbtntxt_add}}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive page1_content_content_bar">
                                        <table id="content-type" class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info" style="text-align: center">
                                            <thead>
                                            <tr role="row">
                                                <th style="font-size:14px;">{{cpgtxt_order}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_mode}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_title}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_type}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_number}}</th>
                                                <th style="text-align: center;font-size:14px;">{{cpgtxt_picture}} {{cpgtxt_mode}}</th>
                                                <th style="text-align: center;font-size:14px;">{{cpgtxt_operation}}</th>
                                            </tr>
                                            </thead>
                                            <tbody id="wwpc_content_type_list">
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row" >
                                        <div class="col-md-12" id="wwpc_content_type_nav">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="page1_content_content_bar">
                    <form method="post" enctype="multipart/form-data" name="wwpc_content_page_frm" id="wwpc_content_page_frm" onkeydown="return event.key != 'Enter';">
                        <input type="hidden" name="wfm" value="st">
                        <div class="page1_content_content_title">
                            &nbsp;&nbsp; &nbsp;&nbsp;Sidebar &nbsp;&nbsp;&gt;&gt;&nbsp;Content Page
                        </div>
                        <div class="col page1_content_content_title" style="display: flex; padding-top: 0px; height: 75px; align-items: center;">
                            <div class="col-md-1" style="width: auto;padding-left: 15px">
                                <span>{{cpgtxt_type}}</span>
                            </div>
                            <div class="col-md-5">
                                <div class="input-group" style="width: 80%">
                                    <select id="wwpc_select_content_page_type" name="wwpc_select_content_page_type" class="form-control page2_input" @change="select_content_page_search()">

                                    </select>
                                </div>
                            </div>
                            <div class="col-md-1" style="width: auto;padding-left: 15px">
                                <span>{{cpgtxt_title}}</span>
                            </div>
                            <div class="col-md-5">
                                <div class="input-group" style="width: 80%">
                                    <input type="text" id="wwpc_search_content_page" class="form-control page2_input" placeholder="" aria-label="page content search" >
                                    <div class="input-group-append input-group-append-my" >
                                        <span class="input-group-text input-group-text-my" id="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search "><circle cx="11" cy="11" r="8"></circle> <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page_content" style="padding: 25px 20px">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="col col-md-12">
                                        <div class="row">
                                            <div class="col-md-12 text-right" style="padding-right: 0px;">
                                                <button type="button" class="btn page1_custom_select_btn mb-sm-2" id="wwpc_side_content_page_add" style="height: 40px; border-radius: 10px; padding: 0 35px; margin-right: 0px;" @click="">
                                                    {{cbtntxt_add}}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive page1_content_content_bar">
                                        <table id="wwpc_content_page" class="table table-lg  no-footer" role="grid" style="text-align: center">
                                            <thead>
                                            <tr role="row">
                                                <th style="font-size:14px;">{{cpgtxt_order}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_mode}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_title}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_type}}</th>
                                                <th style="font-size:14px;">{{cpgtxt_number}}</th>
                                                <th style="text-align: center;font-size:14px;">{{cpgtxt_picture}} {{cpgtxt_mode}}</th>
                                                <th style="text-align: center;font-size:14px;">{{cpgtxt_operation}}</th>
                                            </tr>
                                            </thead>
                                            <tbody id="wwpc_content_page_list">

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row" >
                                        <div class="col-md-12" id="wwpc_content_page_nav">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!--modal part-->
        <div class="modal fade" id="myAddPageTypeModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <div style="color: #5c6bc0; font-size: 20px; font-weight: 600;">{{cpgtxt_create}}</div>
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

        <div class="modal fade" id="wwpc_mySideContentTypeModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <div style="color: #5c6bc0; font-size: 20px; font-weight: 600;">{{cpgtxt_create}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="row"  id="wwpc_content_type_dlgErr" style="display: none">
                            <div class="col">
                                error;
                            </div>
                        </div>
                        <div class=" ">
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_mode}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_type_mode" name="wwpc_sel_content_type_mode" style="" >
                                        <option value="0" selected="selected">{{cpgtxt_list}}</option>
                                        <option value="1" >{{cpgtxt_picture}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div style="width: 80px;">
                                        <span>{{cpgtxt_title}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="padding-bottom: 5px;">
                                    <input type="text" placeholder="" value="" autocomplete="off" class="page2_input" name="wwpc_input_content_type_title" id="wwpc_input_content_type_title" style="background-color: #ededed; border-radius: 12px;">
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_type}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_type_type" name="wwpc_sel_content_type_type" style="" >
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_number}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_type_number" name="wwpc_sel_content_type_number" style="" >
                                        <option value="1" selected="selected">1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_order}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_type_order" name="wwpc_sel_content_type_order" style="" >

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center" style="height: auto">
                        <div class="row modal-dialog-row">
                            <button type="button" class="btn page1_custom_select_btn justify-content-center" style="width: 100px;" id="wwpc_content_type_addDlg_btn"  @click="addSideContentTypeOne">
                                <span class="iconify" data-inline="false" data-icon="gg:add" style="font-size: 24px;"></span>
                                {{cbtntxt_add}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="wwpc_myEditSideContentTypeModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <div style="color: #5c6bc0; font-size: 20px; font-weight: 600;">{{cbtntxt_edit}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="row"  id="wwpc_edit_content_type_dlgErr" style="display: none">
                            <div class="col">
                                error;
                            </div>
                        </div>
                        <div class=" ">
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_mode}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_edit_sel_content_type_mode" name="wwpc_sel_content_type_mode" style="" >
                                        <option value="0" selected="selected">{{cpgtxt_list}}</option>
                                        <option value="1" >{{cpgtxt_picture}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div style="width: 80px;">
                                        <span>{{cpgtxt_title}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="padding-bottom: 5px;">
                                    <input type="text" placeholder="" value="" autocomplete="off" class="page2_input" name="wwpc_edit_input_content_type_title" id="wwpc_edit_input_content_type_title" style="background-color: #ededed; border-radius: 12px;">
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_type}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_edit_sel_content_type_type" name="wwpc_edit_sel_content_type_type" style="" >

                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_number}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_edit_sel_content_type_number" name="wwpc_sel_content_type_number" style="" >
                                        <option value="1" selected="selected">1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>{{cpgtxt_order}}</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_edit_sel_content_type_order" name="wwpc_edit_sel_content_type_order" style="" >

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center" style="height: auto">
                        <div class="row modal-dialog-row">
                            <button type="button" class="btn page1_custom_select_btn justify-content-center" style="width: 100px;" id="wwpc_edit_content_type_addDlg_btn"  @click="editSideContentDataOne">
                                <span class="iconify" data-inline="false" data-icon="gg:add" style="font-size: 24px;"></span>
                                {{cbtntxt_edit}}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="modal fade" id="wwpc_mySideContentPageModal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <div style="color: #5c6bc0; font-size: 20px; font-weight: 600;">{{cpgtxt_create}}</div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="row"  id="wwpc_content_page_dlgErr" style="display: none">
                            <div class="col">
                                error;
                            </div>
                        </div>
                        <div class=" ">
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>Mode</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_page_mode" name="wwpc_sel_content_page_mode" style="" >
                                        <option value="0" selected="selected">List</option>
                                        <option value="1" >Picture</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div style="width: 80px;">
                                        <span>Title</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="padding-bottom: 5px;">
                                    <input type="text" placeholder="" value="" autocomplete="off" class="page2_input" name="wwpc_input_content_page_title" id="wwpc_input_content_page_title" style="background-color: #ededed; border-radius: 12px;">
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>Type</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_page_type" name="wwpc_sel_content_page_type" style="" >
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>Number</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_page_number" name="wwpc_sel_content_page_number" style="" >
                                        <option value="1" selected="selected">1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row modal-dialog-row">
                                <div class="col-md-3 page2_content_text">
                                    <div class="" style="width: 80px;">
                                        <span>Order</span>
                                    </div>
                                </div>
                                <div class="col-md-9" style="">
                                    <select class="form-control float-right" id="wwpc_sel_content_page_order" name="wwpc_sel_content_page_order" style="" >
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center" style="height: auto">
                        <div class="row modal-dialog-row">
                            <button type="button" class="btn page1_custom_select_btn justify-content-center" style="width: 100px;" id="wwpc_content_page_addDlg_btn"  @click="addSideContentPageOne">
                                <span class="iconify" data-inline="false" data-icon="gg:add" style="font-size: 24px;"></span>
                                {{cbtntxt_add}}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="modal fade" id="wwpc_previewModal" role="dialog">
            <div class="modal-dialog modal-sm" style="min-width: 95%!important;">
                <div class="modal-content" style="border-radius:0">
                    <div class="modal-header" style="height: 25px;padding: 0 5px;">
                        <h4 class="modal-title" style="color: #242424;font-size: 15px;margin: 0 auto">{{cpgtxt_previewpage}}</h4>
                        <button type="button" class="close" data-dismiss="modal" style="width: 18px; height: 18px;padding: 0;">&times;</button>
                    </div>
                    <div class="modal-body" id="wwpc_previewModalModalbody" style="padding:0;">
                        <!-- <iframe src="/home" style="border:none;" title="preview"></iframe>-->
                    </div>
                </div>
            </div>
        </div>
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
    .global_page_content_tab{
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

    .content-table-row{
        height: 45px;
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
    .modal-dialog-row{
        padding-top: 5px;
        padding-bottom: 5px;
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
    var contentypetype = 0;
    var contentpagetype = 0;
    var psearchstring = '';
    var contenttypetypecheckboxid = '';
    var pgtxt_selectlanguagesave = "";
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

    function initSideBar() {
        psearchstring = '';
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

        $('#wwpc_search_content_page').on('input',function (e) {
            var val=$(this).val();
            if(val!==null){
                psearchstring = val.trim();
                getSideContentPageData();
            }
        });
    }

    function  getPageList()
    {
        var trans = 'en-1';
        if(transedlang != '' && transedlang != null)
            trans = transedlang;

        var scont = $.trim($('#wwgpp_list_s_c').val());
        var pcnt = $('#wwgpp_list_nav_cnt').val();
        $.ajax({
            url: 'admin.getPageSettingList',
            data:{
                lang:trans,
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
                    $('#wwgpc_pagelist_nav').html('');

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

                        $('#wwgpc_pagelist_nav').html(nav_tag);
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
                                            $('.col-md-12.page_slider_content_list').removeClass('active');
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

        var trans = 'en-1';
        if(transedlang != '' && transedlang != null)
            trans = transedlang;
        $.ajax({
            url: 'admin.getPageTypeList',
            data:{
                lang:trans
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
        $('input[name="pgsetdate"]').val(yy+'/'+mm+'/'+dd);

        var tag='';
        for (var i = 0; i < ppagetype.length; i++){
            var oneobj = ppagetype[i];
            var name = oneobj.name;
            var id = oneobj.id;

            var seleted='';
            if(id===pitem.pagetypeId){
                seleted='selected="selected"';
                $('input[name="pgsettype"]').val(id);
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
        if(pitem.auth_state == 0)
            $('#author_invisible').attr('checked', false);
        else
            $('#author_invisible').attr('checked', true);

        if(pitem.type_state == 0)
            $('#type_invisible').attr('checked', false);
        else
            $('#type_invisible').attr('checked', true);

        if(pitem.date_state == 0)
            $('#time_invisible').attr('checked', false);
        else
            $('#time_invisible').attr('checked', true);



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

        $('input[id^="author_invisible"]').click(function() {
            if($(this).is(':checked')){
                $('#pagesetting_author').attr('readonly', true);
            }
            else{
                $('#pagesetting_author').attr('readonly', false);
            }
        });

        $('input[id^="type_invisible"]').click(function() {
            if($(this).is(':checked')){
                $('input[name="pgsettype"]').val($('#pagesetting_pgtype').val());
                $('#pagesetting_pgtype').attr('disabled', true);
            }
            else{
                $('#pagesetting_pgtype').attr('disabled', false);
            }
        });
        $('input[id^="time_invisible"]').click(function() {
            if($(this).is(':checked')){
                $('input[name="pgsetdate"]').val($('#pagesetting_datapicker').val());
                $('#pagesetting_datapicker').attr('disabled', true);
            }
            else{
                $('#pagesetting_datapicker').attr('disabled', false);
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
        $('input[name="pgsetdate"]').val(yy+'/'+mm+'/'+dd);


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

        $('input[id^="author_invisible"]').click(function() {
            if($(this).is(':checked')){
                $('#pagesetting_author').attr('readonly', true);
            }
            else{
                $('#pagesetting_author').attr('readonly', false);
            }
        });
        $('input[id^="type_invisible"]').click(function() {
            if($(this).is(':checked')){
                $('input[name="pgsettype"]').val($('#pagesetting_pgtype').val());
                $('#pagesetting_pgtype').attr('disabled', true);
            }
            else{
                $('#pagesetting_pgtype').attr('disabled', false);
            }
        });
        $('input[id^="time_invisible"]').click(function() {
            if($(this).is(':checked')){
                $('input[name="pgsetdate"]').val($('#pagesetting_datapicker').val());
                $('#pagesetting_datapicker').attr('disabled', true);
            }
            else{
                $('#pagesetting_datapicker').attr('disabled', false);
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
                                    $('input[name="pgsettype"]').val(id);
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

    function initContentTypeCheckboxes() {
        var checkboxes = document.getElementsByClassName("content-type-checkbox");
        if (checkboxes !=null && checkboxes.length > 0) {
            for (var i = 0; i < checkboxes.length; i++) {
                var checkbox = checkboxes[i];
                if (checkbox.id != contenttypetypecheckboxid)
                    checkbox.classList.remove('active');
            }
        }
        contentypetype = 0;
    }

    function initContentPageSelectbox(list) {
        var sel_content_page_tags = '';
        sel_content_page_tags+='<option value="0">All</option>';
        if (list instanceof Array)
        {
            for (var i = 0; i < list.length; i++){
                var item = list[i];
                var name = item.name;
                var id = item.id;
                sel_content_page_tags+='<option value="'+id+'">'+name+'</option>';
            }
        }
        $('#wwpc_select_content_page_type').html(sel_content_page_tags);
    }

    function initDialogSelectbox(list) {
        var add_type_dialog_tags = '';
        var add_page_dialog_tags = '';
        var edit_dialog_tags = '';
        if (list instanceof Array)
        {
            for (var i = 0; i < list.length; i++){
                var item = list[i];
                var name = item.name;
                var id = item.id;
                add_type_dialog_tags+='<option value="'+id+'">'+name+'</option>';
                add_page_dialog_tags+='<option value="'+id+'">'+name+'</option>';
                edit_dialog_tags+='<option value="'+id+'">'+name+'</option>';
            }
        }
        $('#wwpc_sel_content_type_type').html(add_type_dialog_tags);
        $('#wwpc_sel_content_page_type').html(add_page_dialog_tags);
        $('#wwpc_edit_sel_content_type_type').html(edit_dialog_tags);
    }

    var pcnt=5;
    function getSideContentTypeData()
    {
        var pgtxt_list= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_list');
        var pgtxt_picture= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_picture');
        var btntxt_delete= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var btntxt_edit= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var pgtxt_operation= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_operation');
        var trans = 'en-1';
        if(transedlang != '' && transedlang != null)
            trans = transedlang;

        let postData = {
            trans:trans,
            start: pstart,
            cnt:pcnt,
            type:contentypetype
        };
        axios.post('admin.getSideContentTypeData', postData)
            .then((response) => {
                var status = response.data.msg;
                if(status=="ok")
                {
                    var total=response.data.total;
                    if(total<=0){
                        $('#wwpc_content_type_list').html('');
                        $('#wwpc_content_type_nav').html('');
                        return;
                    }
                    pstart=response.data.start;
                    var totalpage=response.data.totalpage;
                    var contentList = response.data.list;
                    var tags='';
                    for(var i = 0; i < contentList.length; i++)
                    {
                        var content = contentList[i];
                        tags+='<tr role="row" class="odd content-table-row">';
                        var order = i+1;
                        tags+='<td>'+order+'</td>';
                        var mode;
                        if (content.mode == 0)
                            mode = pgtxt_list;
                        else
                            mode = pgtxt_picture;
                        tags+='<td>'+mode+'</td>';
                        tags+='<td>'+content.title+'</td>';
                        tags+='<td>'+content.name+'</td>';
                        tags+='<td>'+content.number+'</td>';
                        var picture_mode = '';
                        if (content.picture_mode == 0)
                            picture_mode = pgtxt_list;
                        else
                            picture_mode = pgtxt_picture;
                        tags+='<td>'+picture_mode+'</td>';
                        tags+='<td>';
                        tags+='<div class="form-group m-b-0">';
                        tags+='<select class="my-border-radius-slt form-control float-right" id="wwpc_contenttype_status_'+content.id+'" name="wwpc_contenttype_status_'+content.id+'">';
                        tags+='<option value="operation">'+pgtxt_operation+'</option>';
                        tags+='<option value="edit">'+btntxt_edit+'</option>';
                        tags+='<option value="delete">'+btntxt_delete+'</option>';
                        tags+='</select>';
                        tags+='</div>';
                        tags+='</td>';
                        tags+='</tr>';
                    }
                    $('#wwpc_content_type_list').html(tags);

                    var nav_tag='';
                    nav_tag+='<nav aria-label="..." class="mb-4">';
                    nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

                    var disble="";
                    if(pstart==1)
                        disble="disabled"

                    var prenum= parseInt(pstart) - 1;

                    nav_tag+='<li class="page-item  '+disble+' ">';
                    nav_tag+='<a class="page-link" href="#"  id="wwpc_ctypenavnum_' + prenum + '" >';
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
                            oid="wwpc_ctypenavnum_" + pnum;

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
                    nav_tag+='<a class="page-link" id="wwpc_ctypenavnum_' + nextnum + '" href="#">';
                    nav_tag+='<i class="ti-angle-right"></i>';
                    nav_tag+='</a>';
                    nav_tag+='</li>';

                    nav_tag+='</ul>';
                    nav_tag+='</nav>';

                    $('#wwpc_content_type_nav').html(nav_tag);

                    /* events { */
                    $('a[id^="wwpc_ctypenavnum_"]').click(function(){
                        var oid=$(this).attr("id");
                        pstart=oid.split('_')[2];
                        getSideContentTypeData();
                    });

                    $('select[id^="wwpc_contenttype_status_"]').change(function(){
                        var tid=$(this).attr("id");
                        var t_id=tid.split("_")[3];
                        var value=$(this).val();
                        if (value == 'edit'){
                            showEditSideContentTypeDialog(0, t_id);
                        }
                        else if (value == 'delete') {
                            if(confirm('Really remove? ')==false)
                                return;
                            deleteSideContentData(t_id, 0);
                        }
                    });
                }
                else{
                    $('#wwpc_content_type_list').html('');
                    $('#wwpc_content_type_nav').html('');
                    // return;
                }
            }).catch(function (error) {
            console.log(error);
        });
    }

    var firsttypeselectId = 0;
    function getSidePageTypeList() {
        var trans = 'en-1';
        if(transedlang != '' && transedlang != null)
            trans = transedlang;
        $.ajax({
            url: 'admin.getSidePageTypeList',
            data:{
                lang:trans
            },
            type: 'POST',
            async: false,
            success: function (data) {
                $('#wwpc_side_type_checkbox_container').html('');
                if(data.msg=="ok")
                {
                    var list = data.list;
                    var tags = '';
                    if(list!==null)
                    {
                        if (list instanceof Array)
                        {
                            for (var i = 0; i < list.length; i++){
                                var item = list[i];
                                var name = item.name;
                                var id = item.id;
                                if (i == 0)
                                    firsttypeselectId = id;
                                tags+='<div class="input-group mb-3">';
                                tags+='<div class="form-check" style="line-height: 24px;">';
                                tags+='<div class="form-check-input rect-group content-type-checkbox" id="wwpc_content_type_checkbox_'+id+'">';
                                tags+='<div></div>';
                                tags+='</div>';
                                tags+='<label class="form-check-label m-l-10">'+name+'</label>';
                                tags+='</div>';
                                tags+='</div>';
                            }
                        }
                        $('#wwpc_side_type_checkbox_container').html(tags);

                        initContentPageSelectbox(list);
                        initDialogSelectbox(list);

                        $('div[id^="wwpc_content_type_checkbox_"]').click(function(){
                            var oid=$(this).attr("id");
                            contenttypetypecheckboxid = oid;
                            initContentTypeCheckboxes();
                            if ($(this).hasClass('active')) {
                                $(this).removeClass('active');
                            } else {
                                $(this).addClass('active');
                                contentypetype=oid.split('_')[4];
                            }
                            getSideContentTypeData();
                        });
                    }
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    var currentId = 0;
    var currentSidebarType = 0;
    function showEditSideContentTypeDialog(sidebarType, selectedId){
        // sidebarType 0: content type, 1: content page
        // selectedId: id of selected row
        if(transedlang===''){
            alert(pgtxt_selectlanguage);
            return;
        }
        else
        {
            currentId = selectedId;
            currentSidebarType = sidebarType;
            getSideContentCountAccoringPageType(sidebarType, firsttypeselectId, 1);
            getSideContentDataFromId(selectedId);
            $('#wwpc_edit_content_type_dlgErr').text('').css('display','none');
            $('#wwpc_myEditSideContentTypeModal').modal('show');
        }
    }

    function getSideContentCountAccoringPageType(sidetype, pagetypeid, add_edit_flag) {
        // sidtype 0: content_type, 1: content page
        // pagetypeid: pagetype_id
        // add_edit_flag  0: add, 1: edit
        //
        var trans = 'en-1';
        if(transedlang != '' && transedlang != null)
            trans = transedlang;
        let postData = {
            lang: trans,
            sidetype: sidetype,
            pagetypeid: pagetypeid
        };
        axios.post('admin.getSideContentCountAccoringPageType', postData)
            .then((response) => {
                var status = response.data.msg;
                if(status=="ok") {
                    if (add_edit_flag == 0) {
                        if (sidetype == 0) {
                            $('#wwpc_sel_content_type_order').html('');
                            var tags='';
                            var availablecount =  response.data.cnt + 2;
                            for(var i = 1; i < availablecount; i++)
                            {
                                tags+='<option value="'+i+'">'+i+'</option>';
                            }
                            $('#wwpc_sel_content_type_order').html(tags);
                        }
                        else {
                            $('#wwpc_sel_content_page_order').html('');
                            var tags='';
                            var availablecount =  response.data.cnt + 2;
                            for(var i = 1; i < availablecount; i++)
                            {
                                tags+='<option value="'+i+'">'+i+'</option>';
                            }
                            $('#wwpc_sel_content_page_order').html(tags);
                        }
                    }
                    else {
                        $('#wwpc_edit_sel_content_type_order').html('');
                        var tags='';
                        var availablecount =  response.data.cnt + 1;
                        for(var i = 1; i < availablecount; i++)
                        {
                            tags+='<option value="'+i+'">'+i+'</option>';
                        }
                        if(response.data.cnt == 0)
                            tags+='<option value="1">1</option>';
                        $('#wwpc_edit_sel_content_type_order').html(tags);
                    }
                }
                else{
                    alert(response.data.msg);
                }
            }).catch(function (error) {
            console.log(error);
        });
    }

    function getSideContentDataFromId(selectedId) {
        let postData = {
            id: selectedId
        };
        axios.post('admin.getSideContentDataFromId', postData)
            .then((response) => {
                var status = response.data.msg;
                if(status=="ok") {
                    var contentList = response.data.list;
                    var mode = contentList.mode;
                    var sidetype = contentList.sidebar_type;
                    var title = contentList.title;
                    var number = contentList.number;
                    var order_no = contentList.order_no;
                    var picture_mode = contentList.picture_mode;
                    var type = contentList.pagetype_id;
                    $('#wwpc_edit_input_content_type_title').val(title);
                    $('#wwpc_edit_sel_content_type_mode').val(mode);
                    $('#wwpc_edit_sel_content_type_type').val(pagetype_id);
                    $('#wwpc_edit_sel_content_type_number').val(number);
                    $('#wwpc_edit_sel_content_type_order').val(order_no);
                    getSideContentCountAccoringPageType(sidetype, pagetype_id, 1);
                }
                else{

                }
            }).catch(function (error) {
            console.log(error);
        });
    }

    function deleteSideContentData(contentId, pageType) {
        var trans = 'en-1';
        if(transedlang != '' || transedlang != null)
            trans = transedlang;
        let postData = {
            id: contentId,
            lang:trans
        };
        axios.post('admin.deleteSideContentData', postData)
            .then((response) => {
                var status = response.data.msg;
                if(status=="ok") {
                    alert("Remove success");
                    if (pageType == 0) {
                        getSideContentTypeData();
                    }
                    else if (pageType == 1) {
                        getSideContentPageData();
                    }
                }
                else{
                    alert("Remove failed");
                }
            }).catch(function (error) {
            console.log(error);
        });
    }

    function getSideContentPageData()
    {
        var pgtxt_list= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_list');
        var pgtxt_picture= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_picture');
        var btntxt_delete= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var btntxt_edit= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
        var pgtxt_operation= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_operation');
        var trans = 'en-1';
        if(transedlang != '' || transedlang != null)
            trans = transedlang;

        let postData = {
            trans:trans,
            start: pstart,
            cnt:pcnt,
            type:contentpagetype,
            tstring:psearchstring
        };
        axios.post('admin.getSideContentPageData', postData)
            .then((response) => {
                var status = response.data.msg;
                if(status=="ok")
                {
                    var total=response.data.total;
                    if(total<=0){
                        $('#wwpc_content_page_list').html('');
                        $('#wwpc_content_page_nav').html('');
                        return;
                    }
                    pstart=response.data.start;
                    var totalpage=response.data.totalpage;
                    var contentList = response.data.list;
                    var tags='';
                    for(var i = 0; i < contentList.length; i++)
                    {
                        var content = contentList[i];
                        tags+='<tr role="row" class="odd">';
                        var order = i+1;
                        tags+='<td>'+order+'</td>';
                        var mode = '';
                        if (content.mode == 0)
                            mode = pgtxt_list;
                        else
                            mode = pgtxt_picture;
                        tags+='<td>'+mode+'</td>';
                        tags+='<td>'+content.title+'</td>';
                        tags+='<td>'+content.name+'</td>';
                        tags+='<td>'+content.number+'</td>';
                        var picture_mode = '';
                        if (content.picture_mode == 0)
                            picture_mode = pgtxt_list;
                        else
                            picture_mode = pgtxt_picture;
                        tags+='<td>'+picture_mode+'</td>';
                        tags+='<td>';
                        tags+='<div class="form-group m-b-0">';
                        tags+='<select class="my-border-radius-slt form-control float-right" id="wwpc_contentpage_status_'+content.id+'" name="wwpc_contentpage_status_'+content.id+'">';
                        tags+='<option value="operation">'+pgtxt_operation+'</option>';
                        tags+='<option value="edit">'+btntxt_edit+'</option>';
                        tags+='<option value="delete">'+btntxt_delete+'</option>';
                        tags+='</select>';
                        tags+='</div>';
                        tags+='</td>';
                        tags+='</tr>';
                    }
                    $('#wwpc_content_page_list').html(tags);

                    var nav_tag='';
                    nav_tag+='<nav aria-label="..." class="mb-4">';
                    nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

                    var disble="";
                    if(pstart==1)
                        disble="disabled"

                    var prenum= parseInt(pstart) - 1;

                    nav_tag+='<li class="page-item  '+disble+' ">';
                    nav_tag+='<a class="page-link" href="#"  id="wwpc_cpagenavnum_' + prenum + '" >';
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
                            oid="wwpc_cpagenavnum_" + pnum;

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
                    nav_tag+='<a class="page-link" id="wwpc_cpagenavnum_' + nextnum + '" href="#">';
                    nav_tag+='<i class="ti-angle-right"></i>';
                    nav_tag+='</a>';
                    nav_tag+='</li>';

                    nav_tag+='</ul>';
                    nav_tag+='</nav>';

                    $('#wwpc_content_page_nav').html(nav_tag);

                    /* events { */
                    $('a[id^="wwpc_cpagenavnum_"]').click(function(){
                        var oid=$(this).attr("id");
                        pstart=oid.split('_')[2];
                        getSideContentPageData();
                    });

                    $('select[id^="wwpc_contentpage_status_"]').change(function(){
                        var tid=$(this).attr("id");
                        var t_id=tid.split("_")[3];
                        var value=$(this).val();
                        if (value == 'edit'){
                            showEditSideContentTypeDialog(1, t_id);
                        }
                        else if (value == 'delete') {
                            if(confirm('Really remove? ')==false)
                                return;
                            deleteSideContentData(t_id, 1);
                        }
                    });
                }
                else {
                    $('#wwpc_content_page_list').html('');
                    $('#wwpc_content_page_nav').html('');
                }
            }).catch(function (error) {
            console.log(error);
        });
    }

    export default {
        name: "WebsWesGlobalPagesContent",
        components: {
            'editor0': Editor
        },
        data(){
            return {
                pageid:'webs-wesglobal-pages-content-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_pages:'',
                musususu_webs_wesglobal_pages_page:'',
                musususu_webs_wesglobal_pages_content:'',
                pgtxt_translation:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_nosavenoappear:'',
                pgtxt_list:'',
                pgtxt_contenttype:'',
                pgtxt_function:'',
                pgtxt_sidebar:'',
                pgtxt_order:'',
                pgtxt_mode:'',
                pgtxt_picture:'',
                pgtxt_select:'',
                pgtxt_operation:'',
                pgtxt_news:'',
                pgtxt_aboutus:'',
                pgtxt_service:'',
                pgtxt_help:'',
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
                pgtxt_setting:'',
                pgtxt_type:'',
                pgtxt_theauthor:'',
                pgtxt_autogenlink:'',
                pgtxt_priority:'',
                pgtxt_showhide:'',
                pgtxt_invisible:'',
		        pgtxt_create:'',
                pgtxt_dbsaved:'',
                pgtxt_previewpage:'',
                pgtxt_releasesuccess:'',
                pgtxt_selectlanguagesave:'',
                pgtxt_selectlanguage:'',

                btntxt_add:'',
                btntxt_edit:'',
                btntxt_delete:'',
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
            pgtxt_selectlanguagesave = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');

            this.initpage();
            this.getWWGStoredLang();
        },
        computed: {
            cmususu_webs_wesglobal_pages:function () {
                return this.mususu_webs_wesglobal_pages
            },
            cmusususu_webs_wesglobal_pages_page:function () {
                return this.musususu_webs_wesglobal_pages_page
            },
            cmusususu_webs_wesglobal_pages_content:function () {
                return this.musususu_webs_wesglobal_pages_content
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
            cpgtxt_list:function () {
                return this.pgtxt_list
            },
            cpgtxt_contenttype:function () {
                return this.pgtxt_contenttype
            },
            cpgtxt_function:function () {
                return this.pgtxt_function
            },
            cpgtxt_sidebar:function () {
                return this.pgtxt_sidebar
            },
            cpgtxt_order:function () {
                return this.pgtxt_order
            },
            cpgtxt_mode:function () {
                return this.pgtxt_mode
            },
            cpgtxt_picture:function () {
                return this.pgtxt_picture
            },
            cpgtxt_select:function () {
                return this.pgtxt_select
            },
            cpgtxt_operation:function () {
                return this.pgtxt_operation
            },
            cpgtxt_news:function () {
                return this.pgtxt_news
            },
            cpgtxt_aboutus:function () {
                return this.pgtxt_aboutus
            },
            cpgtxt_service:function () {
                return this.pgtxt_service
            },
            cpgtxt_help:function () {
                return this.pgtxt_help
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_theauthor:function () {
                return this.pgtxt_theauthor
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
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete
            },
            cpgtxt_search:function () {
                return this.pgtxt_search
            },
            cpgtxt_setupthe:function () {
                return this.pgtxt_setupthe
            },
            cpgtxt_setting:function () {
                return this.pgtxt_setting
            },
            cpgtxt_type:function () {
                return this.pgtxt_type
            },
            cpgtxt_autogenlink:function () {
                return this.pgtxt_autogenlink
            },
            cpgtxt_priority:function () {
                return this.pgtxt_priority
            },
            cpgtxt_showhide:function () {
                return this.pgtxt_showhide
            },
            cpgtxt_invisible:function () {
                return this.pgtxt_invisible
            },
	        cpgtxt_create:function () {
                return this.pgtxt_create
            },
            cpgtxt_dbsaved:function () {
                return this.pgtxt_dbsaved
            },
            cpgtxt_previewpage:function () {
                return this.pgtxt_previewpage
            },
            cpgtxt_releasesuccess:function () {
                return this.pgtxt_releasesuccess
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
            select_content_page_search(){
                var objval=$('#wwpc_select_content_page_type').val();

                var pagetype=parseInt(objval);
                if (isNaN(pagetype)) {
                    pagetype=0;
                }
                else
                    contentpagetype = pagetype;

                getSideContentPageData();
            },
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

                                    $('.page1_alarm_bar').addClass('active');
                                    $('.page1_alarm_bar span').text('Save  Appear');

                                    if(tabstatus==0){
                                        pstart=1;
                                        getPageList();
                                    }
                                    else if(tabstatus==1){
                                        getPagetype();
                                    }
                                    else if(tabstatus==5) {
                                        getSideContentTypeData();
                                        getSideContentPageData();
                                        getSidePageTypeList();
                                    }
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
                getPageList();
                transedlang='';
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function()
                {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_slider_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    $('.page1_alarm_bar span').text('No Save No Appear');
                    $('.page1_alarm_bar').removeClass('active');
                    $('.page1_translate_span').removeClass('active');

                    transedlang = '';

                    if(subid=='list')
                    {
                        tabstatus=0;
                        pstart=1;
                        $("#pageContAdd_btn").css('display','block');
                        getPageList();
                    }
                    else if(subid=='pagetype')
                    {
                        tabstatus=1;
                        $("#pageContAdd_btn").css('display','block');
                        getPagetype();
                    }
                    else if(subid=='wwpc_sidebar'){
                        tabstatus=5;
                        $("#pageContAdd_btn").css('display','none');
                        getSideContentTypeData();
                        getSideContentPageData();
                        getSidePageTypeList();
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
                       $('.col-md-12.page_slider_content_list').removeClass('active');
                       $('#pagesetting').addClass('active');

                       $("#pagesetting_frm")[0].reset();
                       $('#pagesetting_author').attr('readonly', false);
                       $('#pagesetting_pgtype').attr('disabled', false);
                       $('#pagesetting_datapicker').attr('disabled', false);

                       $('input[name="pgsettranedLang"]').val('');
                       $('input[name="pgseturl"]').val('');
                       $('input[name="pgsetstate"]').val('add');
                       $('input[name="pagesetting_author"]').val(vueOBJ.username);

                       tabstatus=3;
                       getPagesetting();
                   }
                });

                $('#wwpc_side_content_type_add').click(function () {

                    if(transedlang===''){
                        alert(pgtxt_selectlanguage);
                        return;
                    }
                    else
                    {
                        $('#wwpc_content_type_dlgErr').text('').css('display','none');
                        $('#wwpc_sel_content_type_type').val(firsttypeselectId);
                        $('#wwpc_mySideContentTypeModal').modal('show');
                        getSideContentCountAccoringPageType(0, firsttypeselectId, 0);
                    }
                });

                $('#wwpc_sel_content_type_type').change(function () {

                    var typeid = $('#wwpc_sel_content_type_type').val();
                    getSideContentCountAccoringPageType(0, typeid, 0);
                });

                $('#wwpc_edit_sel_content_type_type').change(function () {

                    var typeid = $('#wwpc_edit_sel_content_type_type').val();
                    getSideContentCountAccoringPageType(0, typeid, 1);
                });

                $('#wwpc_side_content_page_add').click(function () {

                    if(transedlang===''){
                        alert(pgtxt_selectlanguage);
                        return;
                    }
                    else
                    {
                        $('#wwpc_content_page_dlgErr').text('').css('display','none');
                        $('#wwpc_sel_content_page_type').val(firsttypeselectId);
                        $('#wwpc_mySideContentPageModal').modal('show');
                        getSideContentCountAccoringPageType(1, firsttypeselectId, 0);
                    }
                });

                $('#wwpc_sel_content_page_type').change(function () {
                    var typeid = $('#wwpc_sel_content_page_type').val();
                    getSideContentCountAccoringPageType(1, typeid, 0);
                });
                initPageList();
                initSideBar();
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

                var pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                if(tabstatus==1)//page type
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
                                alert(pgtxt_dbsaved);
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
                                    alert(pgtxt_dbsaved);
                                    $("#pagesetting_frm")[0].reset();
                                    $('#pagesetting_author').attr('readonly', false);
                                    $('#pagesetting_pgtype').attr('disabled', false);
                                    $('#pagesetting_datapicker').attr('disabled', false);
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
                                    $('input[name="pgsetdate"]').val(yy+'/'+mm+'/'+dd);
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
                else if(tabstatus == 5)
                {
                    alert(pgtxt_dbsaved);
                }

            },
            PagePreview(){
                $("#wwpc_previewModalModalbody").html('');
                var iframeH = $(window).height()-100;
                var lang = "";
                if(transedlang=='')
                    lang = "en";
                else
                    lang = transedlang.split("-")[0];
                $("#wwpc_previewModalModalbody").html('<iframe src="/'+lang+'/preview" style="border:none;width:100%; height: '+iframeH+'px;" title="preview"></iframe>');
                $("#wwpc_previewModal").modal('show');
            },
            PageRelease(){
                if(transedlang=='')
                {
                    alert(pgtxt_selectlanguagesave);
                    return;
                }

                var pgtxt_releasesuccess= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
                var pgtxt_release= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');
                if (window.confirm(pgtxt_release)){
                    $.ajax({
                        url: 'admin.wwpContentRelease',
                        type: 'POST',
                        data: {
                            trans:transedlang,
                            tabstatus:tabstatus,
                            release:1
                        },
                        success: function (data) {
                            if(data.msg=="ok"){
                                alert(pgtxt_releasesuccess);
                            }
                            else
                                alert(data.msg);
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                    });
                }
                else {
                    $.ajax({
                        url: 'admin.wwpContentRelease',
                        type: 'POST',
                        data: {
                            trans:transedlang,
                            tabstatus:tabstatus,
                            release:0
                        },
                        success: function (data) {

                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                    });
                }

            },
            addPageTypeToOne(){
                if(transedlang===''){
                    alert(pgtxt_selectlanguage);
                    $("#myAddPageTypeModal").modal('hide');
                    return;
                }
                var cont = $.trim($('#pagetype_add_name').val());
                if(cont==''){
                    // alert("empty");
                    $('#dlgErr').text('Input content!').css({'display':'block','color':'#d41b11'});
                    return;
                }
                var pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
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

            addSideContentTypeOne(){
                if(transedlang===''){
                    alert(pgtxt_selectlanguage);
                    $("#wwpc_mySideContentTypeModal").modal('hide');
                    return;
                }
                var typeId = -1;
                var mode = $('#wwpc_sel_content_type_mode').val();
                var title = $.trim($('#wwpc_input_content_type_title').val());
                if (title == null || title ==''){
                    alert('Please Input Title!');
                    return;
                }
                var type = $('#wwpc_sel_content_type_type').val();
                var number = $('#wwpc_sel_content_type_number').val();
                var order = $('#wwpc_sel_content_type_order').val();

                $.ajax({
                    url: 'admin.addSideContentTypeData',
                    type: 'POST',
                    data: {
                        id: typeId,
                        trans: transedlang,
                        mode:mode,
                        title:title,
                        type:type,
                        number:number,
                        order:order
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#wwpc_content_type_dlgErr').text('Success Save in DB!').css({'display':'block','color':'#0BC334'});
                            setTimeout(function () {
                                $("#wwpc_mySideContentTypeModal").modal('hide');
                            },1000);

                            getSideContentTypeData();
                        }
                        else
                            $('#wwpc_content_type_dlgErr').text('Error insert in DB!').css({'display':'block','color':'#d41b11'});
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },

            editSideContentDataOne(){
                if(transedlang===''){
                    alert(pgtxt_selectlanguage);
                    $("#wwpc_myEditSideContentTypeModal").modal('hide');
                    return;
                }
                var typeId = currentId;
                var mode = $('#wwpc_edit_sel_content_type_mode').val();
                var title = $.trim($('#wwpc_edit_input_content_type_title').val());
                if (title == null || title ==''){
                    alert('Please Input Title!');
                    return;
                }
                var type = $('#wwpc_edit_sel_content_type_type').val();
                var number = $('#wwpc_edit_sel_content_type_number').val();
                var order = $('#wwpc_edit_sel_content_type_order').val();
                var sidebartype = currentSidebarType;

                $.ajax({
                    url: 'admin.editSideContentData',
                    type: 'POST',
                    data: {
                        id: typeId,
                        sidetype: sidebartype,
                        mode:mode,
                        title:title,
                        type:type,
                        number:number,
                        order:order
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#wwpc_edit_content_type_dlgErr').text('Success Save in DB!').css({'display':'block','color':'#0BC334'});
                            setTimeout(function () {
                                $("#wwpc_myEditSideContentTypeModal").modal('hide');
                            },1000);
                            if (sidebartype == 0)
                                getSideContentTypeData();
                            else
                                getSideContentPageData();
                        }
                        else
                            $('#wwpc_edit_content_type_dlgErr').text('Error insert in DB!').css({'display':'block','color':'#d41b11'});
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },

            addSideContentPageOne(){
                if(transedlang===''){
                    alert(pgtxt_selectlanguage);
                    $("#wwpc_mySideContentPageModal").modal('hide');
                    return;
                }
                var pageId = -1;
                var mode = $('#wwpc_sel_content_page_mode').val();
                var title = $.trim($('#wwpc_input_content_page_title').val());
                var type = $('#wwpc_sel_content_page_type').val();
                var number = $('#wwpc_sel_content_page_number').val();
                var order = $('#wwpc_sel_content_page_order').val();

                $.ajax({
                    url: 'admin.addSideContentPageData',
                    type: 'POST',
                    data: {
                        id: pageId,
                        trans: transedlang,
                        mode:mode,
                        title:title,
                        type:type,
                        number:number,
                        order:order
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#wwpc_content_page_dlgErr').text('Success Save in DB!').css({'display':'block','color':'#0BC334'});
                            setTimeout(function () {
                                $("#wwpc_mySideContentPageModal").modal('hide');
                            },1000);

                            getSideContentPageData();
                        }
                        else
                            $('#wwpc_content_page_dlgErr').text(data.msg).css('display','block');
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
            wwpc_contentpage_search_btn(){
                var val = $('#wwpc_search_content_page').val();
                if(val!==null){
                    psearchstring = val.trim();
                    getSideContentPageData();
                }
            },

        }//method

    }
</script>
