<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_social_setting}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_social}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_social_setting}}
                          <a href="#" id="webs-wesglobal-social-setting-fav" data-status="off" data-page-info="Setting_webs-wesglobal-social-setting">
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
                    <div class="page1_translate_bar_right">
                        <span class="page1_translate_span_right cursor-pointer" id="wwgm_save" @click.stop="SavePageContent">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em"  style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:sharp-save-alt"><path d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z" fill="currentColor"></path></svg>
                            {{cpgtxt_save}}
                        </span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <span class="page1_translate_span_right cursor-pointer" @click="PagePreview">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-preview"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" fill="currentColor"></path></svg>
                            {{cpgtxt_preview}}
                        </span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <span class="page1_translate_span_right cursor-pointer" @click="PageRelease">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-new-releases"><path d="M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z" fill="currentColor"></path></svg>
                            {{cpgtxt_release}}
                        </span>&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="page1_alarm_bar">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="mi:circle-warning"><g fill="none"><path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"></path><path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z" fill="currentColor"></path><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"></path></g></svg>
                    <span>{{cpgtxt_nosavenoappear}}</span>
                </div>
            </div>
        </div>

        <div class="row">
            <!--slider-->
            <div class="col-md-12 page_slider_content_list active" id="socialsetting">
                <form method="post" enctype="multipart/form-data" name="social_setting_panel_frm" id="social_setting_panel_frm">
                    <input type="hidden" name="chooseIconId" id="chooseIconId" value="">
                    <input type="hidden" name="icon_cond" id="icon_cond" value="">
                    <input type="hidden" name="hover_cond" id="hover_cond" value="">
                    <input type="hidden" name="transedlang" id="transedlang" value="">
                    <input type="hidden" name="condId" id="condId" value="">

                    <div class="page1_content_content_bar">
                        <div class="page1_content_content_title">{{cpgtxt_setting}}</div>
                        <div class="page1_content_content page2_content_text" id="IconSettinPage">
                            <div class="row page2_row">
                                <div style="display: none">
                                    <input type="hidden" name="settingiconpre" id="settingiconpre" value="">
                                    <input type="file" name="settingicon" id="settingicon" value="">
                                </div>
                                <div class="col-md-2">
                                    <span>{{cpgtxt_icon}} {{cpgtxt_image}}</span>
                                </div>
                                <div class="col-md-2">
                                    <span id="selected_icon_name" style="color: #5c6bc0; font-size: 16px;"></span>
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn page1_custom_btn" id="settingbtn_1" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                        {{cbtntxt_edit}}
                                    </button>
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div style="display: none">
                                    <input type="hidden" name="settinghoverpre" id="settinghoverpre" value="">
                                    <input type="file" name="settinghover" id="settinghover" value="">
                                </div>
                                <div class="col-md-2">
                                    <span>{{cpgtxt_hover}} {{cpgtxt_image}}</span>
                                </div>
                                <div class="col-md-2">
                                    <span id="selected_hover_name" style="color: #5c6bc0; font-size: 16px;"></span>
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn page1_custom_btn" id="settingbtn_2" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">
                                        {{cbtntxt_edit}}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!--start Detail Setting Icon -->
                        <div class="page1_content_content page2_content_text" id="IconDetailSettinPage">
                            <div style="display: none">
                                <input type="hidden" name="file-detailhoverpre" id="file-detailhoverpre" value="">
                                <input type="file" name="file-detailhover" id="file-detailhover" value="">
                            </div>
                            <div class="row page2_row">
                                <div class="col-md-2" style="display: flex; align-items: center;">
                                    <span>{{cpgtxt_social}} {{cpgtxt_icon}}</span>
                                </div>
                                <div class="col-md-2">
                                    <div class="wwgss_chooseicons" style="cursor: auto;">
                                        <img src="" id="detailSettingIconImage" class="seletedIconImage" >
                                    </div>
                                </div>
                                <div class="col-md-3" style="display: flex; align-items: center;">
                                    <button type="button" class="btn btn-info" @click="ChooseDetailIcon" style="background:#5c6bc0 !important;border-color: #5c6bc0 !important;border-radius:6px !important;padding: 7px 14px;" >{{ cpgtxt_choose }} {{ cpgtxt_icon }}</button>
                                </div>
                            </div>
                            <div class="row page2_row" style="margin-bottom: 15px;">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_icon}} {{cpgtxt_link}}</span>
                                </div>
                                <div class="col-md-5">
                                    <input type="text" value="" class="page2_input" name="detailchooseiconlink" id="detailchooseiconlink" style="border-radius: 10px; background-color: #f4f4f4;">
                                </div>
                            </div>
                            <div class="row page2_row" style="margin-bottom: 15px;">
                                <div class="col-md-2">
                                    <span>{{cpgtxt_hover}} {{cpgtxt_title}}</span>
                                </div>
                                <div class="col-md-5">
                                    <input type="text" value="" class="page2_input" name="detailchoosehoverlink" id="detailchoosehoverlink" style="border-radius: 10px; background-color: #f4f4f4;">
                                </div>
                            </div>
                            <div class="row page2_row" style="margin-bottom: 15px;">
                                <div class="col-md-2" style="display: flex; align-items: center;">
                                    <span>{{cpgtxt_hover}} {{cpgtxt_image}}</span>
                                </div>
                                <div class="col-md-2">
                                    <div class="wwgss_chooseicons" id="seletedHoverImageBtn">
                                        <img src="/images/wes_add_camera_btn.png" id="detailSettingHoverImage" class="seletedIconImage" >
                                    </div>
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-3" style="display: flex; align-items: center;">
                                    <button type="button" class="btn btn-info" @click.stop="SaveDetailIcon" style="background:#5c6bc0 !important;border-color: #5c6bc0 !important;border-radius:6px !important;padding: 7px 14px;" >{{ cpgtxt_save }} {{ cpgtxt_icon }}</button>
                                </div>
                            </div>
                        </div>
                        <!--end Detail Setting Icon-->
                    </div>
                    <!--start Choose Icon part-->
                    <div class="page1_content_content_bar" id="SocialSettingChoosePart">
                        <div class="page1_content_content_title">
                            {{cpgtxt_choose}} {{cpgtxt_icon}}
                        </div>
                        <div class="page1_content_content page2_content_text" id="chooseicon-container">
                            <div class="row page2_row">
                                <div class="col-md-2">
                                    <div style="display: none">
                                        <input type="hidden" name="uploadiconpre_1" id="uploadiconpre_1" value="">
                                        <input type="hidden" name="iconIndex_1" id="iconIndex_1" value="0">
                                        <input type="file" name="uploadicon_1" id="uploadicon_1" value="">
                                        <input type="hidden" name="ifile_1" id="ifile_1" value="">
                                        <input type="hidden" name="hfile_1" id="hfile_1" value="">
                                        <input type="hidden" name="ilink_1" id="ilink_1" value="">
                                        <input type="hidden" name="hlink_1" id="hlink_1" value="">
                                    </div>
                                    <div>
                                        <div class="wwgss_chooseicons" id="wwgsschooseicons_1">
                                            <img src="/images/wes_add_icon_btn.png" id="seletedIconImage_1" class="seletedIconImage" >
                                            <span class="wwgss_chooseicons_add_txt" id="addIcontext_1">{{ cbtntxt_add }}</span>
                                        </div>
                                        <img src="" id="seletedHoverImage_1" class="seletedHoverImage" >
                                        <img class="wwgss_chooseicons_close_btn" src="/images/wes_close_icon_btn.png" id="closeIconImage_1" >
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div style="display: none">
                                        <input type="hidden" name="uploadiconpre_2" id="uploadiconpre_2" value="">
                                        <input type="hidden" name="iconIndex_2" id="iconIndex_2" value="0">
                                        <input type="file" name="uploadicon_2" id="uploadicon_2" value="">
                                        <input type="hidden" name="ifile_2" id="ifile_2" value="">
                                        <input type="hidden" name="hfile_2" id="hfile_2" value="">
                                        <input type="hidden" name="ilink_2" id="ilink_2" value="">
                                        <input type="hidden" name="hlink_2" id="hlink_2" value="">
                                    </div>
                                    <div>
                                        <div class="wwgss_chooseicons" id="wwgsschooseicons_2">
                                            <img src="/images/wes_add_icon_btn.png" id="seletedIconImage_2" class="seletedIconImage" >
                                            <span class="wwgss_chooseicons_add_txt" id="addIcontext_2">{{ cbtntxt_add }}</span>
                                        </div>
                                        <img src="" id="seletedHoverImage_2" class="seletedHoverImage" >
                                        <img class="wwgss_chooseicons_close_btn" src="/images/wes_close_icon_btn.png" id="closeIconImage_2" >
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div style="display: none">
                                        <input type="hidden" name="uploadiconpre_3" id="uploadiconpre_3" value="">
                                        <input type="hidden" name="iconIndex_3" id="iconIndex_3" value="0">
                                        <input type="file" name="uploadicon_3" id="uploadicon_3" value="">
                                        <input type="hidden" name="ifile_3" id="ifile_3" value="">
                                        <input type="hidden" name="hfile_3" id="hfile_3" value="">
                                        <input type="hidden" name="ilink_3" id="ilink_3" value="">
                                        <input type="hidden" name="hlink_3" id="hlink_3" value="">
                                    </div>
                                    <div>
                                        <div class="wwgss_chooseicons" id="wwgsschooseicons_3">
                                            <img src="/images/wes_add_icon_btn.png" id="seletedIconImage_3" class="seletedIconImage" >
                                            <span class="wwgss_chooseicons_add_txt" id="addIcontext_3">{{ cbtntxt_add }}</span>
                                        </div>
                                        <img src="" id="seletedHoverImage_3" class="seletedHoverImage" >
                                        <img class="wwgss_chooseicons_close_btn" src="/images/wes_close_icon_btn.png" id="closeIconImage_3" >
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div style="display: none">
                                        <input type="hidden" name="uploadiconpre_4" id="uploadiconpre_4" value="">
                                        <input type="hidden" name="iconIndex_4" id="iconIndex_4" value="0">
                                        <input type="file" name="uploadicon_4" id="uploadicon_4" value="">
                                        <input type="hidden" name="ifile_4" id="ifile_4" value="">
                                        <input type="hidden" name="hfile_4" id="hfile_4" value="">
                                        <input type="hidden" name="ilink_4" id="ilink_4" value="">
                                        <input type="hidden" name="hlink_4" id="hlink_4" value="">
                                    </div>
                                    <div>
                                        <div class="wwgss_chooseicons" id="wwgsschooseicons_4">
                                            <img src="/images/wes_add_icon_btn.png" id="seletedIconImage_4" class="seletedIconImage" >
                                            <span class="wwgss_chooseicons_add_txt" id="addIcontext_4">{{ cbtntxt_add }}</span>
                                        </div>
                                        <img src="" id="seletedHoverImage_4" class="seletedHoverImage" >
                                        <img class="wwgss_chooseicons_close_btn" src="/images/wes_close_icon_btn.png" id="closeIconImage_4" >
                                    </div>
                                </div>
                            </div>
                            <div class="row page2_row">
                                <div class="col-md-2">
                                    <div style="display: none">
                                        <input type="hidden" name="uploadiconpre_5" id="uploadiconpre_5" value="">
                                        <input type="hidden" name="iconIndex_5" id="iconIndex_5" value="0">
                                        <input type="file" name="uploadicon_5" id="uploadicon_5" value="">
                                        <input type="hidden" name="ifile_5" id="ifile_5" value="">
                                        <input type="hidden" name="hfile_5" id="hfile_5" value="">
                                        <input type="hidden" name="ilink_5" id="ilink_5" value="">
                                        <input type="hidden" name="hlink_5" id="hlink_5" value="">
                                    </div>
                                    <div>
                                        <div class="wwgss_chooseicons" id="wwgsschooseicons_5">
                                            <img src="/images/wes_add_icon_btn.png" id="seletedIconImage_5" class="seletedIconImage" >
                                            <span class="wwgss_chooseicons_add_txt" id="addIcontext_5">{{ cbtntxt_add }}</span>
                                        </div>
                                        <img src="" id="seletedHoverImage_5" class="seletedHoverImage" >
                                        <img class="wwgss_chooseicons_close_btn" src="/images/wes_close_icon_btn.png" id="closeIconImage_5" >
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div style="display: none">
                                        <input type="hidden" name="uploadiconpre_6" id="uploadiconpre_6" value="">
                                        <input type="hidden" name="iconIndex_6" id="iconIndex_6" value="0">
                                        <input type="file" name="uploadicon_6" id="uploadicon_6" value="">
                                        <input type="hidden" name="ifile_6" id="ifile_6" value="">
                                        <input type="hidden" name="hfile_6" id="hfile_6" value="">
                                        <input type="hidden" name="ilink_6" id="ilink_6" value="">
                                        <input type="hidden" name="hlink_6" id="hlink_6" value="">
                                    </div>
                                    <div>
                                        <div class="wwgss_chooseicons" id="wwgsschooseicons_6">
                                            <img src="/images/wes_add_icon_btn.png" id="seletedIconImage_6" class="seletedIconImage" >
                                            <span class="wwgss_chooseicons_add_txt" id="addIcontext_6">{{ cbtntxt_add }}</span>
                                        </div>
                                        <img src="" id="seletedHoverImage_6" class="seletedHoverImage" >
                                        <img class="wwgss_chooseicons_close_btn" src="/images/wes_close_icon_btn.png" id="closeIconImage_6" >
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div style="display: none">
                                        <input type="hidden" name="uploadiconpre_7" id="uploadiconpre_7" value="">
                                        <input type="hidden" name="iconIndex_7" id="iconIndex_7" value="0">
                                        <input type="file" name="uploadicon_7" id="uploadicon_7" value="">
                                        <input type="hidden" name="ifile_7" id="ifile_7" value="">
                                        <input type="hidden" name="hfile_7" id="hfile_7" value="">
                                        <input type="hidden" name="ilink_7" id="ilink_7" value="">
                                        <input type="hidden" name="hlink_7" id="hlink_7" value="">
                                    </div>
                                    <div>
                                        <div class="wwgss_chooseicons" id="wwgsschooseicons_7">
                                            <img src="/images/wes_add_icon_btn.png" id="seletedIconImage_7" class="seletedIconImage" >
                                            <span class="wwgss_chooseicons_add_txt" id="addIcontext_7">{{ cbtntxt_add }}</span>
                                        </div>
                                        <img src="" id="seletedHoverImage_7" class="seletedHoverImage" >
                                        <img class="wwgss_chooseicons_close_btn" src="/images/wes_close_icon_btn.png" id="closeIconImage_7" >
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div style="display: none">
                                        <input type="hidden" name="uploadiconpre_8" id="uploadiconpre_8" value="">
                                        <input type="hidden" name="iconIndex_8" id="iconIndex_8" value="0">
                                        <input type="file" name="uploadicon_8" id="uploadicon_8" value="">
                                        <input type="hidden" name="ifile_8" id="ifile_8" value="">
                                        <input type="hidden" name="hfile_8" id="hfile_8" value="">
                                        <input type="hidden" name="ilink_8" id="ilink_8" value="">
                                        <input type="hidden" name="hlink_8" id="hlink_8" value="">
                                    </div>
                                    <div>
                                        <div class="wwgss_chooseicons" id="wwgsschooseicons_8">
                                            <img src="/images/wes_add_icon_btn.png" id="seletedIconImage_8" class="seletedIconImage" >
                                            <span class="wwgss_chooseicons_add_txt" id="addIcontext_8">{{ cbtntxt_add }}</span>
                                        </div>
                                        <img src="" id="seletedHoverImage_8" class="seletedHoverImage" >
                                        <img class="wwgss_chooseicons_close_btn" src="/images/wes_close_icon_btn.png" id="closeIconImage_8" >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end Choose Icon part-->
                </form>
            </div>

        </div>

        <!--slider image modal part-->
        <div class="modal fade" id="iconSettingModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 500px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" style="color: #055ada;font-size: 16px;">{{ cpgtxt_character }} {{ cpgtxt_set }}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="iconSettingModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel" id="tab4" style="display: block;">
                            <form id="slider-image-form">
                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="table-responsive" style="max-height: 300px; overflow-y: auto; min-height: 100px;">
                                            <table id="slider-image-table" role="grid" aria-describedby="slider-image_info" class="table table-lg  no-footer">
                                                <tbody id="sliderimage_dlg_list">

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="bottom" style="text-align: center; padding-top: 0px;">
                                            <button type="button" class="btn btn-info" style="background:#5c6bc0 !important;border-color: #5c6bc0 !important;border-radius:1.8rem !important;padding: 10px 20px;" @click.stop="setSocialSettingCondition()">{{ cbtntxt_savechanges }}</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end slider image modal-->
        <!--modal part-->
        <div class="modal fade" id="previewModal" role="dialog">
            <div class="modal-dialog modal-sm" style="min-width: 95%!important;">
                <div class="modal-content" style="border-radius:0">
                    <div class="modal-header" style="height: 25px;padding: 0 5px;">
                        <h4 class="modal-title" style="color: #242424;font-size: 15px;margin: 0 auto">{{cpgtxt_previewpage}}</h4>
                        <button type="button" class="close" data-dismiss="modal" style="width: 18px; height: 18px;padding: 0;">&times;</button>
                    </div>
                    <div class="modal-body" id="previewModalModalbody" style="padding:0;">
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
    }
    #addpic_btn{
        height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;
    }
    .wwgss_chooseicons{
        position: relative;
        width: 80px;
        height: 80px;
        background: #f7f7f9;
        margin-top: 15px;
        margin-bottom: 15px;
        cursor: pointer;
        border-radius: 5px;
        padding: 20px;
    }
    .wwgss_chooseicons_add_txt{
        position: absolute;
        margin-top: -1rem;
        margin-left: 0.5rem;
    }
    .wwgss_chooseicons_close_btn{
        display:none;
        position: absolute;
        width:1rem;
        margin-top: -6.3rem;
        margin-left: 4.4rem;
        cursor: pointer;
    }
    .seletedIconImage{
        width: 40px;
        height: 40px;
    }

    .seletedHoverImage{
        display:none;
        position: absolute;
        width: 40px;
        height: 40px;
        box-shadow: 1px 1px 3px 3px #aaaaaa;
        left: 2.2rem;
        top: -1rem;
    }

</style>

<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var preview='';
    var tabstatus=0;
    var vueOBJ=null;
    var transedlang='';
    var setting_index = 0;
    var selected_image_name = "";
    var detail_id = 0;
    var icon_path = "/uploads/images/waaupimg/icons/";
    var style_1 = "";
    var style_2 = "";
    var id_down = "";
    var i_clickimg = "";
    var h_clickimg = "";
    var i_clicktxt = "";
    var h_clicktxt = "";
    var down_pageindex = "";
    var permss;

    function  getSocialSettingEvent() {
        var pgtxt_please= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_please');
        var pgtxt_select= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_select');
        var pgtxt_setting= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_setting');
        var pgtxt_icon= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_icon');
        var pgtxt_name= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
        var pgtxt_size= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_size');
        var pgtxt_capacity= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_capacity');
        var pgtxt_format= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_format');
        var pgtxt_language= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_language');
        var pgtxt_translation= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_translation');
        var pgtxt_error= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_error');

        $('div[id^="wwgsschooseicons_"]').on("dragover", function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
        $('div[id^="wwgsschooseicons_"]').on('dragenter', function (e) {
            e.stopPropagation();
            e.preventDefault();
        });
        $('div[id^="wwgsschooseicons_"]').on('drop', function (e) {
            e.stopPropagation();
            e.preventDefault();
            if(down_pageindex != 0) {
                var index = e.target.id.split("_")[1];

                $('#seletedIconImage_' + id_down).attr('src', $('#seletedIconImage_' + index).attr('src'));
                $('#uploadiconpre_' + id_down).val($('#ifile_' + index).val());
                $('#ifile_' + id_down).val($('#ifile_' + index).val());
                $('#hfile_' + id_down).val($('#hfile_' + index).val());
                $('#ilink_' + id_down).val($('#ilink_' + index).val());
                $('#hlink_' + id_down).val($('#hlink_' + index).val());
                if($('#ifile_' + id_down).val() == "" || $('#ifile_' + id_down).val() == null)
                {
                    $('#seletedHoverImage_'+id_down).attr("src", "");
                    $('#seletedHoverImage_'+id_down).css("display", "none");
                    $('#closeIconImage_' + id_down).css('display', 'none');
                    $('#addIcontext_' + id_down).css('display', 'block');
                    $('#iconIndex_' + id_down).val(0);
                }

                $('#seletedIconImage_' + index).attr('src', icon_path + i_clickimg);
                $('#uploadiconpre_' + index).val(i_clickimg);
                $('#ifile_' + index).val(i_clickimg);
                $('#hfile_' + index).val(h_clickimg);
                $('#ilink_' + index).val(i_clicktxt);
                $('#hlink_' + index).val(h_clicktxt);
                if($('#ifile_' + index).val() != "" && $('#ifile_' + index).val() != null)
                {
                    $('#seletedHoverImage_'+id_down).attr("src", icon_path + i_clickimg);
                    $('#closeIconImage_' + index).css('display', 'block');
                    $('#addIcontext_' + index).css('display', 'none');
                    $('#iconIndex_' + index).val(1);
                }

            }
        });

        $('div[id^="wwgsschooseicons_"]').on('mouseover', function () {
            var index = $(this).attr('id').split("_")[1];
            var hover_img = $('#hfile_'+index).val();
            if(hover_img != null && hover_img != "") {
                //$('#' + $(this).attr('id') + ' > img').attr("src", icon_path + hover_img);
                $('#seletedHoverImage_'+index).attr("src", icon_path + hover_img);
                $('#seletedHoverImage_'+index).css("display", "block");
            }
        });

        $('div[id^="wwgsschooseicons_"]').on('mouseleave', function () {
            var index = $(this).attr('id').split("_")[1];
            var orig_img = $('#ifile_'+index).val();
            if(orig_img != null && orig_img != "") {
                $('#seletedHoverImage_'+index).attr("src", "");
                $('#seletedHoverImage_'+index).css("display", "none");
            }
        });

        $('div[id^="wwgsschooseicons_"]').on('mousedown', function () {
            if(transedlang=='')
            {
                myjs.data.showAlert('pgtxt_selectlanguage');
                return;
            }

            var index = $(this).attr('id').split("_")[1];
            down_pageindex = $('#iconIndex_' + index).val();
            id_down = index;
            i_clickimg = $('#ifile_'+index).val();
            h_clickimg = $('#hfile_'+index).val();
            i_clicktxt = $('#ilink_'+index).val();
            h_clicktxt = $('#hlink_'+index).val();
        });

        $('div[id^="wwgsschooseicons_"]').on('mouseup', function () {
            var id= $(this).attr('id');
            var index = id.split("_");
            $('#chooseIconId').val(index[1]);
            var pageindex = $('#iconIndex_' + index[1]).val();
            if(pageindex == "0"){
                if($('#icon_cond').val() != "" && $('#hover_cond').val() != "") {
                    if (permss.pcreate == 1)
                        $('#uploadicon_'+index[1]).trigger('click');
                    else
                        myjs.data.showAlert('pgtxt_notpermission');
                }
                else{
                    alert(pgtxt_please + ' ' + pgtxt_select + ' ' + pgtxt_setting + ' ' + pgtxt_icon);
                }
            }
            else{
                detail_id = index[1];

                $('#IconSettinPage').css("display", "none");
                $('#SocialSettingChoosePart').css("display", "none");
                $('#IconDetailSettinPage').css("display", "block");

                $('#detailSettingIconImage').attr('src', icon_path + $('#ifile_'+detail_id).val());
                $('#file-detailhoverpre').attr('src', '');

                $('#detailchooseiconlink').val($('#ilink_'+detail_id).val());
                $('#detailchoosehoverlink').val($('#hlink_'+detail_id).val());
                if($('#hfile_'+detail_id).val() != "")
                    $('#detailSettingHoverImage').attr('src', icon_path + $('#hfile_'+detail_id).val());
                else
                    $('#detailSettingHoverImage').attr('src', '/images/wes_add_camera_btn.png');
            }
        });

        $('input[name^="uploadicon_"]').change(function(){
            var id = $(this).attr('id');
            var index = id.split("_");
            $('#chooseIconId').val(index[1]);

            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#condId').val(1);
                    var formData = new FormData($("#social_setting_panel_frm")[0]);
                    $.ajax({
                        url: 'admin.chooseIconImageUpload',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if(data.msg=="ok"){
                                var pageindex = $('#iconIndex_' + index[1]).val();
                                if(pageindex == 1){
                                    $('#detailSettingIconImage').attr('src', icon_path + data.fname);
                                }
                                else{
                                    $('#closeIconImage_' + index[1]).css('display', 'block');
                                    $('#addIcontext_' + index[1]).css('display', 'none');
                                    $('#iconIndex_' + index[1]).val(1);
                                }
                                $('#ifile_' + index[1]).val(data.fname);
                                $('#uploadiconpre_' + index[1]).attr('src', icon_path + data.fname);
                                $('#seletedIconImage_' + index[1]).attr('src', icon_path + data.fname);
                            }
                            else if(data.msg=="size"){
                                alert(pgtxt_error + " " + pgtxt_size);
                            }
                            else if(data.msg=="format"){
                                alert(pgtxt_error + " " + pgtxt_format);
                            }
                            else if(data.msg=="capacity"){
                                alert(pgtxt_error + " " + pgtxt_capacity);
                            }
                            else
                                alert(data.msg);

                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false
                    });

                }
                reader.readAsDataURL(this.files[0]);
            }
        });

        $('#seletedHoverImageBtn').click(function () {
            $('#file-detailhover').trigger('click');
        });
        $('#file-detailhover').change(function(){
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#condId').val(2);
                    var formData = new FormData($("#social_setting_panel_frm")[0]);
                    $.ajax({
                        url: 'admin.chooseIconImageUpload',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if(data.msg=="ok"){
                                $('#file-detailhoverpre').attr('src', e.target.result);
                                $('#detailSettingHoverImage').attr('src', e.target.result);
                            }
                            else if(data.msg=="size"){
                                alert(pgtxt_error + " " + pgtxt_size);
                            }
                            else if(data.msg=="format"){
                                alert(pgtxt_error + " " + pgtxt_format);
                            }
                            else if(data.msg=="capacity"){
                                alert(pgtxt_error + " " + pgtxt_capacity);
                            }
                            else
                                alert(data.msg);

                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                }
                reader.readAsDataURL(this.files[0]);
            }
        });

        $('img[id^="closeIconImage_"]').click(function(){
            if(transedlang=='')
            {
                myjs.data.showAlert('pgtxt_selectlanguage');
                return;
            }

            var index = $(this).attr('id').split("_")[1];

            var ifile = $('#ifile_' + index).val();
            var hfile = $('#hfile_' + index).val();
            $.ajax({
                url: 'admin.deleteSocialSettingIcon',
                type: 'POST',
                data: {
                    ifile:ifile,
                    hfile:hfile
                },
                async: false,
                success: function (data) {
                    if(data.msg=="ok"){
                        $('#seletedHoverImage_'+index).attr("src", "");
                        $('#seletedHoverImage_'+index).css("display", "none");
                        $('#closeIconImage_'+index).css('display', 'none');
                        $('#seletedIconImage_'+index).attr('src', '/images/wes_add_icon_btn.png');
                        $('#addIcontext_'+index).css('display', 'block');
                        $('#uploadicon_'+index).val('');
                        $('#uploadiconpre_'+index).attr('src', '');
                        $('#ifile_' + index).val("");
                        $('#hfile_' + index).val("");
                        $('#ilink_' + index).val("");
                        $('#hlink_' + index).val("");
                        $('#iconIndex_' + index).val("0");
                    }
                    else
                        alert(data.msg);

                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });

            var formData = new FormData($("#social_setting_panel_frm")[0]);
            $.ajax({
                url: 'admin.saveSocialSettingPage',
                type: 'POST',
                data: formData,
                async: false,
                success: function (data) {
                    if(data.msg=="ok"){
                        $('#closeIconImage_'+index[1]).css('display', 'none');
                        $('#seletedIconImage_'+index[1]).attr('src', '/images/wes_add_icon_btn.png');
                        $('#addIcontext_'+index[1]).css('display', 'block');
                    }
                    else
                        alert(data.msg);

                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                },
                cache: false,
                contentType: false,
                processData: false
            });
        });

        $('button[id^="settingbtn_"]').click(function () {
            if (permss.pwrite == 1) {
                var id = $(this).attr('id');
                setting_index = id.split("_")[1];

                let postData = {
                    start: 1,
                    cnt: 10,// han 2020-10-21
                    filter: 0,// han 2020-10-21
                };
                var tag = "";
                tag += '<tr role="row" class="odd">';
                tag += '<td style="width:200px;" class="data-ajax" data-ajax="pgtxt_name">' + pgtxt_name + '</td>';
                tag += '<td style="width:150px" class="data-ajax" data-ajax="pgtxt_size">' + pgtxt_size + '</td>';
                tag += '<td style="width:100px" class="data-ajax" data-ajax="pgtxt_capacity">' + pgtxt_capacity + '</td>';
                tag += '<td style="width:150px" class="data-ajax" data-ajax="pgtxt_format">' + pgtxt_format + '</td>';
                tag += '</tr>';
                axios.post('admin.getSiteLogoStylelist', postData)
                    .then((response) => {
                        let msg = response.data.msg;
                        var total = response.data.total;
                        if (total <= 0) {
                            $('#sitelogoimglists').html('');
                            return;
                        }
                        if (msg == "ok") {
                            var logolists = response.data.list;
                            $('#sliderimage_dlg_list').html('');
                            for (var i = 0; i < logolists.length; i++) {
                                var list = logolists[i];
                                var id = list.id;
                                var name = list.name;
                                var size = list.size;
                                var style = list.style;
                                var capacity = list.capacity === null ? "" : list.capacity + '(KB)';
                                var imgtype = list.imgtype === null ? "" : list.imgtype;
                                if (imgtype !== "") {
                                    imgtype = nav_module.data.jsonparse_one(imgtype);
                                    imgtype = imgtype.replace("{", "");
                                    imgtype = imgtype.replace("}", "");
                                    var types = imgtype.split(",");
                                    var real_imgtype = "";
                                    var index = 0;
                                    for (var k = 0; k < types.length; k++) {
                                        var type = types[k];
                                        var real_types = type.split(":");
                                        if (real_types.length > 1) {
                                            if (real_types[1] == 1) {
                                                if (index == 0)
                                                    real_imgtype += real_types[0];
                                                else
                                                    real_imgtype += " / " + real_types[0];
                                                index++;
                                            }
                                        }

                                        imgtype = real_imgtype;
                                    }
                                }
                                var cls = '';
                                if (i < logolists.length - 1)
                                    cls = 'bot';
                                var alldate = name + '-' + size + '-' + style;

                                tag += '<tr role="row" class="odd ' + cls + '" data-name="' + name + '" data-size="' + size + '" data-format="' + imgtype + '" data-capacity="' + capacity + '" style="cursor: pointer;" id="slider_' + id + '">';
                                tag += '<td style="width:200px;">' + name + '</td>';
                                tag += '<td style="width:150px">' + size + '</td>';
                                tag += '<td style="width:100px">' + capacity + '</td>';
                                tag += '<td style="width:150px">' + imgtype + '</td>';
                                tag += '</tr>';
                            }
                            $('#sliderimage_dlg_list').html(tag);

                            var temp_id = "";
                            $('tr[id^="slider_"]').click(function () {
                                var idstr = $(this).attr('id');
                                var id = idstr.split('_')[1];
                                $('#slider_' + temp_id + '').css("color", "black");
                                $(this).css("color", "cornflowerblue");
                                selected_image_name = $(this).data("name");
                                temp_id = id;
                                for (var i = 0; i < logolists.length; i++) {
                                    var list = logolists[i];
                                    if (list.id == id) {
                                        if (setting_index == 1)
                                            style_1 = list;
                                        else
                                            style_2 = list;
                                        break;
                                    }
                                }
                            });
                        } else {
                            console.log(response.data.message);
                        }
                    }).catch(function (error) {
                    console.log(error);
                })

                $("#iconSettingModal").modal('show');
            }
            else
                myjs.data.showAlert('pgtxt_notpermission');
        });

    }
    function JsonDataSocialSetting(jsonstr){
        if (jsonstr != ''){
            var datas = $.parseJSON(jsonstr);

            $('#uploadiconpre_1').val(datas.i_img1);
            $('#ifile_1').val(datas.i_img1);
            $('#hfile_1').val(datas.h_img1);
            $('#ilink_1').val(datas.i_link1);
            $('#hlink_1').val(datas.h_link1);
            if(datas.i_img1 != "" && datas.i_img1 != null)
                $('#iconIndex_1').val(1);

            $('#uploadiconpre_2').val(datas.i_img2);
            $('#ifile_2').val(datas.i_img2);
            $('#hfile_2').val(datas.h_img2);
            $('#ilink_2').val(datas.i_link2);
            $('#hlink_2').val(datas.h_link2);
            if(datas.i_img2 != "" && datas.i_img2 != null)
                $('#iconIndex_2').val(1);

            $('#uploadiconpre_3').val(datas.i_img3);
            $('#ifile_3').val(datas.i_img3);
            $('#hfile_3').val(datas.h_img3);
            $('#ilink_3').val(datas.i_link3);
            $('#hlink_3').val(datas.h_link3);
            if(datas.i_img3 != "" && datas.i_img3 != null)
                $('#iconIndex_3').val(1);

            $('#uploadiconpre_4').val(datas.i_img4);
            $('#ifile_4').val(datas.i_img4);
            $('#hfile_4').val(datas.h_img4);
            $('#ilink_4').val(datas.i_link4);
            $('#hlink_4').val(datas.h_link4);
            if(datas.i_img4 != "" && datas.i_img4 != null)
                $('#iconIndex_4').val(1);

            $('#uploadiconpre_5').val(datas.i_img5);
            $('#ifile_5').val(datas.i_img5);
            $('#hfile_5').val(datas.h_img5);
            $('#ilink_5').val(datas.i_link5);
            $('#hlink_5').val(datas.h_link5);
            if(datas.i_img5 != "" && datas.i_img5 != null)
                $('#iconIndex_5').val(1);

            $('#uploadiconpre_6').val(datas.i_img6);
            $('#ifile_6').val(datas.i_img6);
            $('#hfile_6').val(datas.h_img6);
            $('#ilink_6').val(datas.i_link6);
            $('#hlink_6').val(datas.h_link6);
            if(datas.i_img6 != "" && datas.i_img6 != null)
                $('#iconIndex_6').val(1);

            $('#uploadiconpre_7').val(datas.i_img7);
            $('#ifile_7').val(datas.i_img7);
            $('#hfile_7').val(datas.h_img7);
            $('#ilink_7').val(datas.i_link7);
            $('#hlink_7').val(datas.h_link7);
            if(datas.i_img7 != "" && datas.i_img7 != null)
                $('#iconIndex_7').val(1);

            $('#uploadiconpre_8').val(datas.i_img8);
            $('#ifile_8').val(datas.i_img8);
            $('#hfile_8').val(datas.h_img8);
            $('#ilink_8').val(datas.i_link8);
            $('#hlink_8').val(datas.h_link8);
            if(datas.i_img8 != "" && datas.i_img8 != null)
                $('#iconIndex_8').val(1);

            $('#icon_cond').val(datas.i_cond);
            $('#hover_cond').val(datas.h_cond);
            $('#chooseIconId').val("");

            for (var i = 1; i <= 8; i++){
                if($('#ifile_'+i).val() == "") {
                    $('#seletedHoverImage_'+i).attr("src", "");
                    $('#seletedHoverImage_'+i).css("display", "none");
                    $('#seletedIconImage_'+i).attr('src', '/images/wes_add_icon_btn.png');
                    $('#closeIconImage_' + i).css('display', 'none');
                    $('#addIcontext_' + i).css('display', 'block');
                    $('#iconIndex_' + i).val(0);
                }
                else {
                    $('#seletedHoverImage_'+i).attr("src", icon_path + $('#hfile_'+i).val());
                    $('#seletedHoverImage_'+i).css("display", "none");
                    $('#seletedIconImage_'+i).attr('src', icon_path + $('#ifile_'+i).val());
                    $('#closeIconImage_' + i).css('display', 'block');
                    $('#addIcontext_' + i).css('display', 'none');
                    $('#iconIndex_' + i).val(1);
                }
            }

            $.ajax({
                url: 'admin.getLogoImageStyle',
                type: 'POST',
                data: {
                    i_cond: datas.i_cond,
                    h_cond: datas.h_cond
                },
                async: false,
                success: function (data) {
                    if(data.msg=="ok"){
                        $('#selected_icon_name').text(data.iconStyle.name);
                        $('#selected_hover_name').text(data.hoverStyle.name);
                    }
                    else
                        alert(data.msg);

                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        }
        else{
            $('#ifile_1').val("");
            $('#hfile_1').val("");
            $('#ilink_1').val("");
            $('#hlink_1').val("");
            $('#iconIndex_1').val(0);

            $('#ifile_2').val("");
            $('#hfile_2').val("");
            $('#ilink_2').val("");
            $('#hlink_2').val("");
            $('#iconIndex_2').val(0);

            $('#ifile_3').val("");
            $('#hfile_3').val("");
            $('#ilink_3').val("");
            $('#hlink_3').val("");
            $('#iconIndex_3').val(0);

            $('#ifile_4').val("");
            $('#hfile_4').val("");
            $('#ilink_4').val("");
            $('#hlink_4').val("");
            $('#iconIndex_4').val(0);

            $('#ifile_5').val("");
            $('#hfile_5').val("");
            $('#ilink_5').val("");
            $('#hlink_5').val("");
            $('#iconIndex_5').val(0);

            $('#ifile_6').val("");
            $('#hfile_6').val("");
            $('#ilink_6').val("");
            $('#hlink_6').val("");
            $('#iconIndex_6').val(0);

            $('#ifile_7').val("");
            $('#hfile_7').val("");
            $('#ilink_7').val("");
            $('#hlink_7').val("");
            $('#iconIndex_7').val(1);

            $('#ifile_8').val("");
            $('#hfile_8').val("");
            $('#ilink_8').val("");
            $('#hlink_8').val("");
            $('#iconIndex_8').val(0);

            $('#icon_cond').val("");
            $('#hover_cond').val("");
            $('#chooseIconId').val("");

            $('#selected_icon_name').text("");
            $('#selected_hover_name').text("");

            for (var i = 1; i <= 8; i++){
                $('#seletedHoverImage_'+i).attr("src", "");
                $('#seletedHoverImage_'+i).css("display", "none");
                $('#seletedIconImage_' + i).attr('src', '/images/wes_add_icon_btn.png');
                $('#closeIconImage_' + i).css('display', 'none');
                $('#addIcontext_' + i).css('display', 'block');
                $('#iconIndex_' + i).val(0);
            }
        }

    }
    function  getSocialSettingPage() {
        $('#IconSettinPage').css("display", "block");
        $('#SocialSettingChoosePart').css("display", "block");
        $('#IconDetailSettinPage').css("display", "none");

        $.ajax({
            url: 'admin.getSocialSettingPage',
            type: 'POST',
            data: {
                tansLang: transedlang
            },
            async: false,
            success: function (data) {
                if(data.msg=="ok"){
                    if(transedlang!=null && transedlang!='')
                    {
                        $('.page1_alarm_bar').addClass('active');
                        $('.page1_alarm_bar span').text('Save  Appear');

                    }
                    JsonDataSocialSetting(data.list);
                }
                else
                    alert(data.msg);

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    export default {
        name: "WebsWesGlobalSocialSetting",
       /* components: {
            CKEditor
        },*/
        data(){
            return {
                pageid:'webs-wesglobal-social-setting-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_social:'',
                musususu_webs_wesglobal_social_setting:'',
                pgtxt_translation:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_korean:'',
                pgtxt_chinese:'',
                pgtxt_english:'',
                pgtxt_nosavenoappear:'',
                pgtxt_setting:'',
                pgtxt_image:'',
                pgtxt_size:'',
                pgtxt_navigation:'',
                pgtxt_choose:'',
                pgtxt_set:'',
                btntxt_edit:'',
                btntxt_savechanges:'',
                pgtxt_icon:'',
                pgtxt_hover:'',
                btntxt_add:'',
                pgtxt_character:'',
                pgtxt_please:'',
                pgtxt_select:'',
                pgtxt_social:'',
                pgtxt_link:'',
                pgtxt_title:'',
                pgtxt_language:'',
                pgtxt_error:'',
                pgtxt_format:'',
                pgtxt_capacity:'',
                pgtxt_dbsaved:'',
                pgtxt_previewpage:'',
                pgtxt_releasesuccess:'',
                pgtxt_selectlanguagesave:'',
                pgtxt_selectlanguage:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
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
            /* fav part*/
            permss = myjs.data.permissionDefinition();
            this.getWWGStoredLang();
            this.loaddata();
        },
        computed: {
            cmususu_webs_wesglobal_social:function () {
                return this.mususu_webs_wesglobal_social
            },
            cmusususu_webs_wesglobal_social_setting:function () {
                return this.musususu_webs_wesglobal_social_setting
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
            cpgtxt_korean:function () {
                return this.pgtxt_korean
            },
            cpgtxt_chinese:function () {
                return this.pgtxt_chinese
            },
            cpgtxt_english:function () {
                return this.pgtxt_english
            },
            cpgtxt_setting:function () {
                return this.pgtxt_setting
            },
            cpgtxt_nosavenoappear:function () {
                return this.pgtxt_nosavenoappear
            },
            cpgtxt_icon:function () {
                return this.pgtxt_icon
            },
            cpgtxt_hover:function () {
                return this.pgtxt_hover
            },
            cpgtxt_choose:function () {
                return this.pgtxt_choose
            },
            cpgtxt_set:function () {
                return this.pgtxt_set
            },
            cpgtxt_image:function () {
                return this.pgtxt_image
            },

            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cbtntxt_savechanges:function () {
                return this.btntxt_savechanges
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_character:function () {
                return this.pgtxt_character
            },
            cpgtxt_please:function () {
                return this.pgtxt_please
            },
            cpgtxt_select:function () {
                return this.pgtxt_select
            },
            cpgtxt_social:function () {
                return this.pgtxt_social
            },
            cpgtxt_link:function () {
                return this.pgtxt_link
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_language:function () {
                return this.pgtxt_language
            },
            cpgtxt_error:function () {
                return this.pgtxt_error
            },
            cpgtxt_format:function () {
                return this.pgtxt_format
            },
            cpgtxt_capacity:function () {
                return this.pgtxt_capacity
            },
            cpgtxt_size:function () {
                return this.pgtxt_size
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
            cpgtxt_selectlanguage:function () {
                return this.pgtxt_selectlanguage
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
                                //var contyTname = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'contyTname');
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
                                    $('#transedlang').val(transedlang);

                                    getSocialSettingPage();
                                }
                            });
                        }

                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            loaddata(){
                getSocialSettingPage();
                getSocialSettingEvent();
                if(transedlang!=null && transedlang!='')
                {
                    $('.page1_alarm_bar').removeClass('active');
                    $('.page1_alarm_bar span').text('No Save No Appear');
                }
            },
            SavePageContent() {
                if (permss.pwrite == 1) {
                    if (transedlang == '') {
                        myjs.data.showAlert('pgtxt_selectlanguagesave');
                        return;
                    }
                    var pgtxt_dbsaved = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                    var formData = new FormData($("#social_setting_panel_frm")[0]);
                    $.ajax({
                        url: 'admin.saveSocialSettingPage',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            if (data.msg == "ok") {
                                alert(pgtxt_dbsaved);
                            } else
                                alert(data.msg);

                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            PagePreview(){
                $("#previewModalModalbody").html('');
                var iframeH = $(window).height()-100;
                var lang = "";
                if(transedlang=='')
                    lang = "en";
                else
                    lang = transedlang.split("-")[0];
                $("#previewModalModalbody").html('<iframe src="/'+lang+'/preview" style="border:none;width:100%; height: '+iframeH+'px;" title="preview"></iframe>');
                $("#previewModal").modal('show');
            },
            PageRelease(){
                if (permss.pwrite == 1) {
                    if (transedlang == '') {
                        myjs.data.showAlert('pgtxt_selectlanguagesave');
                        return;
                    }

                    var pgtxt_releasesuccess = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
                    var pgtxt_release = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');
                    if (window.confirm(pgtxt_release)) {
                        $.ajax({
                            url: 'admin.websGlobalFrontPageRelease',
                            type: 'POST',
                            data: {
                                trans: transedlang,
                                part: "socialsetting",
                                tabstatus: -1,
                                release: 1
                            },
                            success: function (data) {
                                if (data.msg == "ok") {
                                    alert(pgtxt_releasesuccess);
                                } else
                                    alert(data.msg);
                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            },
                        });
                    } else {
                        $.ajax({
                            url: 'admin.websGlobalFrontPageRelease',
                            type: 'POST',
                            data: {
                                trans: transedlang,
                                part: "socialsetting",
                                tabstatus: -1,
                                release: 0
                            },
                            success: function (data) {

                            },
                            error: function (jqXHR, errdata, errorThrown) {
                                console.log(errdata);
                            },
                        });
                    }
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            setSocialSettingCondition(){

                if(style_1 != "" && setting_index == 1)
                {
                    $('#icon_cond').val(style_1.id);
                    $('#sliderimage_dlg_list').html('');
                    $("#iconSettingModal").modal('hide');
                    $('#selected_icon_name').text(style_1.name);
                }
                if(style_2 != "" && setting_index == 2)
                {
                    $('#hover_cond').val(style_2.id);
                    $('#sliderimage_dlg_list').html('');
                    $("#iconSettingModal").modal('hide');
                    $('#selected_hover_name').text(style_2.name);
                }
            },
            ChooseDetailIcon(){
                $('#uploadicon_'+detail_id).trigger('click');
            },
            SaveDetailIcon(){
                var formData = new FormData($("#social_setting_panel_frm")[0]);
                $.ajax({
                    url: 'admin.setSocialSettingDetailIcon',
                    type: 'POST',
                    data: formData,
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            var id = data.id;
                            var org_img = data.icon_name;
                            var hover_img = data.hover_name;

                            $('#seletedIconImage_'+id).attr("src", icon_path + org_img);

                            $('#ifile_'+id).val(org_img);
                            $('#hfile_'+id).val(hover_img);
                            $('#ilink_'+id).val($('#detailchooseiconlink').val());
                            $('#hlink_'+id).val($('#detailchoosehoverlink').val());

                            $('#IconSettinPage').css("display", "block");
                            $('#SocialSettingChoosePart').css("display", "block");
                            $('#IconDetailSettinPage').css("display", "none");
                            detail_id = 0;
                        }
                        else
                            alert(data.msg);
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    },
                    cache: false,
                    contentType: false,
                    processData: false
                });
            }



        }//method


    }
</script>
