<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_menus_foot}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_menus}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_menus_foot}}
                          <a href="#" id="webs-wesglobal-menus-foot-fav" data-status="off" data-page-info="Foot_webs-wesglobal-menus-foot">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="page1_translate_bar">
                    <div class="page1_translate_text">{{cpgtxt_translation}}</div>
                    <input type="hidden" name="wwga_tranedLang" id="wwga_tranedLang" value="">
                    <div class="page1_translate_bar_left" id="translanglist">

                    </div>
                    <div class="page1_translate_bar_right">
                        <span class="page1_translate_span_right cursor-pointer" id="wwgm_save" @click="SavePageContent">
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
                <div class="page1_alarm_bar" style="margin-bottom: 0">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="mi:circle-warning"><g fill="none"><path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"></path><path d="M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z" fill="currentColor"></path><path d="M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"></path></g></svg>
                    <span>{{cpgtxt_nosavenoappear}}</span>
                </div>
            </div>
        </div>

        <div id="FootMenuContainer" class="sl-tab-container active" style="margin-top:25px;">
            <form method="post" enctype="multipart/form-data" name="wwgm_foot_frm" id="wwgm_foot_frm">
                <input type="hidden" name="wwgm_footbarleft_upload_preview_temp" id="wwgm_footbarleft_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwgm_footbarcent_upload_preview_temp" id="wwgm_footbarcent_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwgm_footbarright_upload_preview_temp" id="wwgm_footbarright_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwgafrm" value="footmenu"/>
                <input type="hidden" name="tranedLang"  value=""/>
                <div class="row"><!--{{menu0}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">

                                <h6 class="card-title m-b-20">{{cpgtxt_menu}} 1</h6>
                                <div class="d-flex flex-row m-b-20" style="padding: 0px 120px; align-items: center;">
                                    <div style="width: 130px;">
                                        <input class="form-check-input" type="radio" name="wwgm_footbarleft" id="wwgm_footbarleftnor" value="normal" checked>
                                        <label class="form-check-label" for="wwgm_footbarleftnor">
                                            {{cpgtxt_normal}}
                                        </label>
                                    </div>
                                    <div style="width: 130px;">
                                        <input class="form-check-input" type="radio" name="wwgm_footbarleft" id="wwgm_footbarleftcss" value="css" >
                                        <label class="form-check-label" for="wwgm_footbarleftcss">
                                            {{cpgtxt_css}}
                                        </label>
                                    </div>
                                </div>

                                <div class="footmenu0_normal_part" style="display: block">
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_fontcolour}} </div>
                                        <div style="flex-grow: 1;">
                                            <div style="display: flex;">
                                                <input type="hidden" name="wwgm_footbarleftcolorpicker_val" id="wwgm_footbarleftcolorpicker_val" value="#000000">
                                                <div id="wwgm_footbarleftcolorpicker" class="m-r-15" data-color="#000000" style="width: 70px; cursor: pointer; background: #000000;"></div>
                                                <div id="wwgm_footbarleftcolorpicker_value">#000000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_title}}</div>
                                        <div style="flex-grow: 1;">
                                            <input type="text" id="wwgm_footbarleft_fonttitle" name="wwgm_footbarleft_fonttitle" value="Service" class="form-control" style="width: 60%;">
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_size}}</div>
                                        <div style="flex-grow: 1;">
                                            <div id="wwgm_footbarleft_fontsize" class="m-r-15" style="width: 200px;">
                                                <select id="wwgm_footbarleft_fontsize_s" name="wwgm_footbarleft_fontsize_s" class="form-control">
                                                    <option value="11">11px</option>
                                                    <option value="12">12px</option>
                                                    <option value="14" selected="selected">14px</option>
                                                    <option value="16">16px</option>
                                                    <option value="18">18px</option>
                                                    <option value="20">20px</option>
                                                    <option value="22">22px</option>
                                                    <option value="24">24px</option>
                                                    <option value="26">26px</option>
                                                    <option value="28">28px</option>
                                                    <option value="30">30px</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_content}}</div>
                                        <div style="flex-grow: 1;" id="fontleftcont_list" data-cnt="0">


                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;"></div>
                                        <div style="flex-grow: 1;">
                                            <div id="fontleftcont_list-app-btn" class="btn btn-outline-light  dash-my-btn-0 webs_tab p-l-r-30">
                                                + <span class="m-l-10">{{cbtntxt_add}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_icon}}</div>
                                        <div style="flex-grow: 1;">
                                            <div class="flex-container">
                                                <div class="logimag" id="wwgm_footbarleft_upload_preview">ICON</div>
                                                <div style="display: none">
                                                    <input type="file" name="wwgm_footbarleft_upload" id="wwgm_footbarleft_upload" value=""/>
                                                </div>
                                                <div>
                                                    <div id="wwgm_footbarleft_editbtn" class="btn btn-outline-light webglogappearbtn">
                                                        <span>{{cbtntxt_edit}}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="footmenu0_css_part" style="display: none">
                                    <div class="d-flex flex-column m-b-20" style="padding: 0px 100px; align-items: center; margin-top: 30px;">
                                        <textarea name="editcont0" id="editcont0" value="" style="display: none"></textarea>
                                        <editor0
                                            api-key="vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh"
                                            cloud-channel="5-dev"
                                            :init="{
                                             id:'00',
                                            plugins: [
                                             'lists link image code table paste help wordcount '
                                            ],
                                            toolbar: 'undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ',
                                           images_upload_handler:upload_handler0,
                                           init_instance_callback : edit_init_callback0
                                          }"
                                            v-model="TinyMCMcontent0"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row"><!--{{Menu2)}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">

                                <h6 class="card-title m-b-20">{{cpgtxt_menu}} 2</h6>
                                <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                    <div style="width: 130px;margin-left: 20px;">
                                        <input class="form-check-input" type="radio" name="wwgm_footbar_cent" id="wwgm_footbarcent_nor" value="normal" checked>
                                        <label class="form-check-label" for="wwgm_footbarcent_nor">
                                            {{cpgtxt_normal}}
                                        </label>
                                    </div>
                                    <div style="width: 130px;">
                                        <input class="form-check-input" type="radio" name="wwgm_footbar_cent" id="wwgm_footbarcent_css" value="css" >
                                        <label class="form-check-label" for="wwgm_footbarcent_css">
                                            {{cpgtxt_css}}
                                        </label>
                                    </div>
                                </div>

                                <div class="footmenu1_normal_part" style="display: block;" >
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_fontcolour}} </div>
                                        <div style="flex-grow: 1;">
                                            <div style="display: flex;">
                                                <input type="hidden" name="wwgm_footbarcentcolorpicker_val" id="wwgm_footbarcentcolorpicker_val" value="#000000">
                                                <div id="wwgm_footbarcentcolorpicker" class="m-r-15" data-color="#000000" style="width: 70px; cursor: pointer; background: #000000;"></div>
                                                <div id="wwgm_footbarcentcolorpicker_value">#000000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_title}}</div>
                                        <div style="flex-grow: 1;">
                                            <input type="text" id="wwgm_footbarcent_fonttitle" name="wwgm_footbarcent_fonttitle" value="Service" class="form-control" style="width: 60%;">
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_size}}</div>
                                        <div style="flex-grow: 1;">
                                            <div id="wwgm_footbarcent_fontsize" class="m-r-15" style="width: 200px;">
                                                <select id="wwgm_footbarcent_fontsize_s" name="wwgm_footbarcent_fontsize_s" class="form-control">
                                                    <option value="11">11px</option>
                                                    <option value="12">12px</option>
                                                    <option value="14" selected="selected">14px</option>
                                                    <option value="16">16px</option>
                                                    <option value="18">18px</option>
                                                    <option value="20">20px</option>
                                                    <option value="22">22px</option>
                                                    <option value="24">24px</option>
                                                    <option value="26">26px</option>
                                                    <option value="28">28px</option>
                                                    <option value="30">30px</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_content}}</div>
                                        <div style="flex-grow: 1;" id="fontcentcont_list" data-cnt="0">

                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;"></div>
                                        <div style="flex-grow: 1;">
                                            <div id="fontcentcont_list-app-btn" class="btn btn-outline-light  dash-my-btn-0 webs_tab p-l-r-30">
                                                + <span class="m-l-10">{{cbtntxt_add}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_icon}}</div>
                                        <div style="flex-grow: 1;">
                                            <div class="flex-container">
                                                <div class="logimag" id="wwgm_footbarcent_upload_preview">ICON</div>
                                                <div style="display: none">
                                                    <input type="file" name="wwgm_footbarcent_upload" id="wwgm_footbarcent_upload" value=""/>
                                                </div>
                                                <div>
                                                    <div id="wwgm_footbarcent_editbtn" class="btn btn-outline-light webglogappearbtn">
                                                        <span>{{cbtntxt_edit}}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="footmenu1_css_part" style="display: none;margin-top: 30px;">
                                    <div class="d-flex flex-column m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <textarea name="editcont1" id="editcont1" value="" style="display: none"></textarea>
                                        <editor1
                                            api-key="vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh"
                                            cloud-channel="5-dev"
                                            :init="{
                                             id:'01',
                                            plugins: [
                                             'lists link image code table paste help wordcount '
                                            ],
                                            toolbar: 'undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ',
                                           images_upload_handler:upload_handler1,
                                           init_instance_callback : edit_init_callback1
                                          }"
                                            v-model="TinyMCMcontent1"/>
                                    </div>
                                </div>
                                <!-- <code>{{ editorData }}</code>-->

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row"><!--{{Menu3)}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">

                                <h6 class="card-title m-b-20">{{cpgtxt_menu}} 3</h6>
                                <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                    <div style="width: 130px;margin-left: 20px;">
                                        <input class="form-check-input" type="radio" name="wwgm_footbar_right" id="wwgm_footbarright_nor" value="normal" checked>
                                        <label class="form-check-label" for="wwgm_footbarright_nor">
                                            {{cpgtxt_normal}}
                                        </label>
                                    </div>
                                    <div style="width: 130px;">
                                        <input class="form-check-input" type="radio" name="wwgm_footbar_right" id="wwgm_footbarright_css" value="css" >
                                        <label class="form-check-label" for="wwgm_footbarright_css">
                                            {{cpgtxt_css}}
                                        </label>
                                    </div>
                                </div>

                                <div class="footmenu2_normal_part" style="display: block;" >
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_fontcolour}} </div>
                                        <div style="flex-grow: 1;">
                                            <div style="display: flex;">
                                                <input type="hidden" name="wwgm_footbarrightcolorpicker_val" id="wwgm_footbarrightcolorpicker_val" value="#000000">
                                                <div id="wwgm_footbarrightcolorpicker" class="m-r-15" data-color="#000000" style="width: 70px; cursor: pointer; background: #000000;"></div>
                                                <div id="wwgm_footbarrightcolorpicker_value">#000000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_title}}</div>
                                        <div style="flex-grow: 1;">
                                            <input type="text" id="wwgm_footbarright_fonttitle" name="wwgm_footbarright_fonttitle" value="Service" class="form-control" style="width: 60%;">
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_size}}</div>
                                        <div style="flex-grow: 1;">
                                            <div id="wwgm_footbarright_fontsize" class="m-r-15" style="width: 200px;">
                                                <select id="wwgm_footbarright_fontsize_s" name="wwgm_footbarright_fontsize_s" class="form-control">
                                                    <option value="11">11px</option>
                                                    <option value="12">12px</option>
                                                    <option value="14" selected="selected">14px</option>
                                                    <option value="16">16px</option>
                                                    <option value="18">18px</option>
                                                    <option value="20">20px</option>
                                                    <option value="22">22px</option>
                                                    <option value="24">24px</option>
                                                    <option value="26">26px</option>
                                                    <option value="28">28px</option>
                                                    <option value="30">30px</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px;">
                                        <div style="width: 130px;">{{cpgtxt_content}} {{cpgtxt_type}}</div>
                                        <div style="flex-grow: 1;">
                                            <div id="wwgm_footbarright_contenttype" class="m-r-15" style="width: 200px;">
                                                <select id="wwgm_footbarright_contenttype_s" name="wwgm_footbarright_contenttype_s" class="form-control">
                                                    <option value="serv">{{cpgtxt_service}}</option>
                                                    <option value="about">{{cpgtxt_aboutus}}</option>
                                                    <option value="infor" selected="selected">{{cpgtxt_news}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px;">
                                        <div style="width: 130px;">{{cpgtxt_orderbydate}}</div>
                                        <div style="flex-grow: 1;">
                                            <div id="wwgm_footbarright_orderby" class="m-r-15" style="width: 200px;">
                                                <select id="wwgm_footbarright_orderby_s" name="wwgm_footbarright_orderby_s" class="form-control">
                                                    <option value="asc" selected="selected">ASC</option>
                                                    <option value="desc">DESC</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px;">
                                        <div style="width: 130px;">{{cpgtxt_number}}</div>
                                        <div style="flex-grow: 1;">
                                            <div id="wwgm_footbarright_number" class="m-r-15" style="width: 200px;">
                                                <input type="number" id="wwgm_footbarright_number_i" name="wwgm_footbarright_number_i" value="" class="form-control" style="width: 60%;">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_icon}}</div>
                                        <div style="flex-grow: 1;">
                                            <div class="flex-container">
                                                <div class="logimag" id="wwgm_footbarright_upload_preview">ICON</div>
                                                <div style="display: none">
                                                    <input type="file" name="wwgm_footbarright_upload" id="wwgm_footbarright_upload" value=""/>
                                                </div>
                                                <div>
                                                    <div id="wwgm_footbarright_editbtn" class="btn btn-outline-light webglogappearbtn">
                                                        <span>{{cbtntxt_edit}}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="footmenu2_css_part" style="display: none;margin-top: 30px;">
                                    <div class="d-flex flex-column m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <textarea name="editcont2" id="editcont2" value="" style="display: none"></textarea>
                                        <editor2
                                            api-key="vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh"
                                            cloud-channel="5-dev"
                                            :init="{
                                             id:'02',
                                            plugins: [
                                             'lists link image code table paste help wordcount '
                                            ],
                                            toolbar: 'undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ',
                                           images_upload_handler:upload_handler2,
                                           init_instance_callback : edit_init_callback2
                                          }"
                                            v-model="TinyMCMcontent2"/>
                                    </div>
                                </div>
                                <!-- <code>{{ editorData }}</code>-->

                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>


        <!--modal-->
        <div class="modal fade" id="myMenuAddModal">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 450px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" style="color: #055ada;font-size: 17px;font-weight:800;padding-top: 10px;padding-left: 10px;">{{cpgtxt_createmenu}}</h4>
                        <p id="sfi_alert" style="display: none;padding:5px 10px;border-radius:20px;">Create Menu area.</p>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="myMenuAddModalbody" style="padding:0 1.5rem 1.5rem 1.5rem;">
                        <div class="panel" id="tab1">
                            <div class="row" style="padding-bottom: 10px;">
                                <div class="col-md-12">
                                    <div class="form-group m-b-0" style="padding: 1px 0px 0px 0px; font-family: SimHei;"><!--添加员工到部门 WES 及 组--></div>
                                </div>
                                <div style="margin: 10px 10px 0px 10px;">
                                    <div class="row" style="padding: 10px">
                                        <div class="col-md-1">
                                            <div class="form-group">
                                                <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_font}}{{cpgtxt_content}}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-11" style="padding-left: 62px;">
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" name="cont[]" style="width: 300px;"  placeholder="" aria-label="wwgm-menucont" id="wwgm-menucont" aria-describedby="basic-addon2">
                                            </div>
                                        </div>

                                        <div class="col-md-1">
                                            <div class="form-group">
                                                <label style="margin-top: 8px; color:#666; width:100px;">{{cpgtxt_link}}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-11" style="padding-left: 62px;">
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" name="link[]" style="width: 300px;"  placeholder="" aria-label="wwgm-menulink" id="wwgm-menulink" aria-describedby="basic-addon2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div id="wwgm-model-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35">
                                        <span>+ {{ cbtntxt_add }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end model-->
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
    .sl-tab-container{
        display: none;
    }
    .sl-tab-container.active{
        display: block;
    }
    .apper-top-lang{
        align-items:center;
        justify-content: center
    }
    .apper-top-lang div{
        line-height: 25px;
        text-align: center;
    }
    .form-check-input.group{
        width: 16px;height: 16px;border-radius: 16px; border: 1px solid #bbbbbb;
        cursor: pointer;
    }
    .form-check-input.group > div{
        width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;
    }
    .form-check-input.group.active > div{
        width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;
    }
    #wwgm_footbarleft_upload_preview, #wwgm_footbarcent_upload_preview, #wwgm_footbarright_upload_preview {
        background-repeat: no-repeat;
        background-size:100% 100%;
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
        min-height: 350px !important;
    }

</style>

<script>

    /*  import CKEditor from '@ckeditor/ckeditor5-build-classic';*/
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import Editor from '@tinymce/tinymce-vue';
    import nav_module from "../../assets/jsfunc/nav_module";


    var vueOBJ=null;
    var footmenucnt0 = 0;
    var footmenucnt1 = 0;
    var footmenucnt2 = 0;
    var pgtxt_selectlanguagesave = "";
    var permss;

    function colorButtons(){
        const wwgm_footbarleftcolorpicker = document.getElementById('wwgm_footbarleftcolorpicker');
        let pickerLeft = new ColorPicker(wwgm_footbarleftcolorpicker, '#000000');
        wwgm_footbarleftcolorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgm_footbarleftcolorpicker_value').text(color);
            $('#wwgm_footbarleftcolorpicker_val').val(color);
        });

        const wwgm_footbarcentcolorpicker = document.getElementById('wwgm_footbarcentcolorpicker');
        let pickercent = new ColorPicker(wwgm_footbarcentcolorpicker, '#000000');
        wwgm_footbarcentcolorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgm_footbarcentcolorpicker_value').text(color);
            $('#wwgm_footbarcentcolorpicker_val').val(color);
        });

        const wwgm_footbarrightcolorpicker = document.getElementById('wwgm_footbarrightcolorpicker');
        let pickerright = new ColorPicker(wwgm_footbarrightcolorpicker, '#000000');
        wwgm_footbarrightcolorpicker.addEventListener('colorChange', function (event) {
            const color = event.detail.color.hexa;
            $('#wwgm_footbarrightcolorpicker_value').text(color);
            $('#wwgm_footbarrightcolorpicker_val').val(color);
        });
    }

    function configmenu0ContList(menu0contlinks) {
        var lks = menu0contlinks;
        var fcontlist = lks.split(',');
        var ct = fcontlist.length;
        footmenucnt0 = ct;
        var txt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
        var dtxt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var tags = '';

        for (var i = 0; i < footmenucnt0; i++)
        {
            var item=fcontlist[i];
            var cont=item.split(':')[0];
            var lk=decodeURIComponent(item.split(':')[1]);
            var dt=item.split(':')[2];
            var itemcont='item0_'+i;
            var c_id = 'c_' + i;
            var l_id = 'l_' + i;
            tags += '<div class="d-flex m-b-10" id="'+itemcont+'">';
            tags += '<input type="hidden" id="createdate-'+itemcont+'" name="wwgm_createdate0[]" value="'+dt+'">';
            tags += '<div style="flex-grow: 1">';
            tags += '<input type="text" id="' + c_id + '" name="wwgm_fontleftcont[]" value="'+cont+'" class="form-control"  style="width: 100%;">';
            tags += ' </div>';
            tags += '<div style="flex-grow: 1;text-align: right;padding-right: 15px;line-height: 35px;min-width: 50px;" class="data-ajax" data-ajax="pgtxt_link">' + txt + '</div>';
            tags += '<div style="flex-grow: 1">';
            tags += '<input type="text" id="' + l_id + '" name="wwgm_fontleftlink[]" value="'+lk+'" class="form-control" style="width: 100%;">';
            tags += '</div>';
            tags += '<div style="flex-grow: 1;text-align: right;padding-right: 45px;line-height: 35px;">';
            tags += '<div class="btn btn-outline-light wwgmleftdelbtn" style="min-width: 60px;" data-cont="b_' + i + '" ><span class="data-ajax" data-ajax="btntxt_delete">' + dtxt + '</span></div>';
            tags += '</div>';
            tags += '</div>';
        }
        $('#fontleftcont_list').html(tags);

        $('.wwgmleftdelbtn').click(function () {
            if (permss.pdelete == 1) {
                var contid = $(this).attr('data-cont');
                var idx = contid.split('_')[1];
                var cidx = 'c_' + idx;
                var dcont = $.trim($('#' + cidx).val());
                $('#item0_' + idx).remove();
            }else
                myjs.data.showAlert('pgtxt_notpermission');
        });
    }

    function configmenu1ContList(menu1contlinks) {
        var lks = menu1contlinks;
        var fcontlist = lks.split(',');
        var ct = fcontlist.length;
        footmenucnt1 = ct;
        var txt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
        var dtxt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
        var tags = '';

        for (var i = 0; i < footmenucnt1; i++)
        {
            var item=fcontlist[i];
            var cont=item.split(':')[0];
            var lk=decodeURIComponent(item.split(':')[1]);
            var dt=item.split(':')[2];
            var itemcont='item1_'+i;
            var c_id = 'cc_' + i;
            var l_id = 'll_' + i;
            tags += '<div class="d-flex m-b-10" id="'+itemcont+'">';
            tags += '<input type="hidden" id="createdate-'+itemcont+'" name="wwgm_createdate1[]" value="'+dt+'">';
            tags += '<div style="flex-grow: 1">';
            tags += '<input type="text" id="' + c_id + '" name="wwgm_fontcentcont[]" value="'+cont+'" class="form-control"  style="width: 100%;">';
            tags += ' </div>';
            tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;" class="data-ajax" data-ajax="pgtxt_link">' + txt + '</div>';
            tags += '<div style="flex-grow: 1">';
            tags += '<input type="text" id="' + l_id + '" name="wwgm_fontcentlink[]" value="'+lk+'" class="form-control" style="width: 100%;">';
            tags += '</div>';
            tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;">';
            tags += '<div class="btn btn-outline-light wwgmcentdelbtn" data-cont="b_' + i + '" ><span class="data-ajax" data-ajax="btntxt_delete">' + dtxt + '</span></div>';
            tags += '</div>';
            tags += '</div>';
        }
        $('#fontcentcont_list').html(tags);

        $('.wwgmcentdelbtn').click(function () {
            if (permss.pdelete == 1) {
                var contid = $(this).attr('data-cont');
                var idx = contid.split('_')[1];
                var cidx = 'c_' + idx;
                var dcont = $.trim($('#' + cidx).val());
                $('#item1_' + idx).remove();
            }else
                myjs.data.showAlert('pgtxt_notpermission');
        });
    }

    function footloaddata(whisfrm)
    {
        var transedlang = $('#wwga_tranedLang').val();
        /*if(transedlang=='')
            return;*/
        $.ajax({
            url: 'admin.frontGetMenu',
            data: {
                tedLang: transedlang,
                wwgfield:whisfrm
            },
            type: 'POST',
            async: true,
            success: function (data) {
                var footlist = data.list;
                var trans = data.trans;
                //console.log(footlist);
                if (footlist!==null && footlist !== '')
                {
                    /* menu0 part */
                    if(footlist.menu0style!==undefined && footlist.menu0style!==null && footlist.menu0style==='normal'){
                        $('input[id="wwgm_footbarleftnor"]').prop('checked',true);
                        $('.footmenu0_normal_part').css('display','block');
                        $('.footmenu0_css_part').css('display','none');
                    }
                    else{
                        $('input[id="wwgm_footbarleftcss"]').prop('checked',true);
                        $('.footmenu0_normal_part').css('display','none');
                        $('.footmenu0_css_part').css('display','block');
                    }


                    if(footlist.menu0fontcolor!==undefined && footlist.menu0fontcolor!==null && footlist.menu0fontcolor!==''){
                        $('#wwgm_footbarleftcolorpicker_val').val(footlist.menu0fontcolor);
                        $('#wwgm_footbarleftcolorpicker').css('background',footlist.menu0fontcolor);
                        $('#wwgm_footbarleftcolorpicker').attr('data-color',footlist.menu0fontcolor);
                        $('#wwgm_footbarleftcolorpicker_value').text(footlist.menu0fontcolor);
                    }
                    if(footlist.menu0fonttitle!==undefined && footlist.menu0fonttitle!==null && footlist.menu0fonttitle!==''){
                        $('#wwgm_footbarleft_fonttitle').val(footlist.menu0fonttitle);
                    }

                    if(footlist.menu0fontsize!==undefined && footlist.menu0fontsize!==null && footlist.menu0fontsize!==''){
                        $('#wwgm_footbarleft_fontsize_s').val(footlist.menu0fontsize);
                    }

                    if(footlist.menu0contlinks!==undefined && footlist.menu0contlinks!==null && footlist.menu0contlinks!=='')
                    {
                        configmenu0ContList(footlist.menu0contlinks);
                    }

                    if(footlist.menu0icon!==undefined && footlist.menu0icon!==null && footlist.menu0icon!=='')
                    {
                        $('#wwgm_footbarleft_upload_preview').text('');
                        $('#wwgm_footbarleft_upload_preview_temp').val(footlist.menu0icon);
                        $('#wwgm_footbarleft_upload_preview').css('background-image', 'url("/uploads/images/waaupimg/'+footlist.menu0icon+'")');
                    }

                    if(footlist.edit0!==undefined && footlist.edit0!==null && footlist.edit0!==''){
                        var edt=htmldecodejs(footlist.edit0);
                        vueOBJ.TinyMCMcontent0=edt;
                    }

                    /* menu 1 part */
                    if(footlist.menu1style!==undefined && footlist.menu1style!==null && footlist.menu1style==='normal'){
                        $('input[id="wwgm_footbarcent_nor"]').prop('checked',true);
                        $('.footmenu1_normal_part').css('display','block');
                        $('.footmenu1_css_part').css('display','none');
                    }
                    else{
                        $('input[id="wwgm_footbarcent_css"]').prop('checked',true);
                        $('.footmenu1_normal_part').css('display','none');
                        $('.footmenu1_css_part').css('display','block');
                    }

                    if(footlist.menu1fontcolor!==undefined && footlist.menu1fontcolor!==null && footlist.menu1fontcolor!=='')
                    {
                        $('#wwgm_footbarcentcolorpicker_val').val(footlist.menu1fontcolor);
                        $('#wwgm_footbarcentcolorpicker').css('background',footlist.menu1fontcolor);
                        $('#wwgm_footbarcentcolorpicker').attr('data-color',footlist.menu1fontcolor);
                        $('#wwgm_footbarcentcolorpicker_value').text(footlist.menu1fontcolor);
                    }


                    if(footlist.menu1fonttitle!==undefined && footlist.menu1fonttitle!==null && footlist.menu1fonttitle!==''){
                        $('#wwgm_footbarcent_fonttitle').val(footlist.menu1fonttitle);
                    }
                    if(footlist.menu1fontsize!==undefined && footlist.menu1fontsize!==null && footlist.menu1fontsize!==''){
                        $('#wwgm_footbarcent_fontsize_s').val(footlist.menu1fontsize);
                    }

                    if(footlist.menu1contlinks!==undefined && footlist.menu1contlinks!==null && footlist.menu1contlinks!=='')
                    {
                        configmenu1ContList(footlist.menu1contlinks);
                    }

                    if(footlist.menu1icon!==undefined && footlist.menu1icon!==null && footlist.menu1icon!=='')
                    {
                        $('#wwgm_footbarcent_upload_preview').text('');
                        $('#wwgm_footbarcent_upload_preview_temp').val(footlist.menu1icon);
                        $('#wwgm_footbarcent_upload_preview').css('background-image', 'url("/uploads/images/waaupimg/'+footlist.menu1icon+'")');
                    }

                    if(footlist.edit1!==undefined && footlist.edit1!==null && footlist.edit1!==''){
                        var edt=htmldecodejs(footlist.edit1);
                        vueOBJ.TinyMCMcontent1=edt;
                    }

                    /* menu 2 part */
                    if(footlist.menu2style!==undefined && footlist.menu2style!==null && footlist.menu2style==='normal'){
                        $('input[id="wwgm_footbarright_nor"]').prop('checked',true);
                        $('.footmenu2_normal_part').css('display','block');
                        $('.footmenu2_css_part').css('display','none');
                    }
                    else{
                        $('input[id="wwgm_footbarright_css"]').prop('checked',true);
                        $('.footmenu2_normal_part').css('display','none');
                        $('.footmenu2_css_part').css('display','block');
                    }

                    if(footlist.menu2fontcolor!==undefined && footlist.menu2fontcolor!==null && footlist.menu2fontcolor!==''){
                        $('#wwgm_footbarrightcolorpicker_val').val(footlist.menu2fontcolor);
                        $('#wwgm_footbarrightcolorpicker').css('background',footlist.menu2fontcolor);
                        $('#wwgm_footbarrightcolorpicker').attr('data-color',footlist.menu2fontcolor);
                        $('#wwgm_footbarrightcolorpicker_value').text(footlist.menu2fontcolor);
                    }
                    if(footlist.menu2fonttitle!==undefined && footlist.menu2fonttitle!==null && footlist.menu2fonttitle!==''){
                        $('#wwgm_footbarright_fonttitle').val(footlist.menu2fonttitle);
                    }
                    if(footlist.menu2fontsize!==undefined && footlist.menu2fontsize!==null && footlist.menu2fontsize!==''){
                        $('#wwgm_footbarright_fontsize_s').val(footlist.menu2fontsize);
                    }
                    if(footlist.menu2contenttype!==undefined && footlist.menu2contenttype!==null && footlist.menu2contenttype!==''){
                        $('#wwgm_footbarright_contenttype_s').val(footlist.menu2contenttype);
                    }
                    if(footlist.menu2contenttype!==undefined && footlist.menu2contenttype!==null && footlist.menu2contenttype!==''){
                        $('#wwgm_footbarright_contenttype_s').val(footlist.menu2contenttype);
                    }
                    if(footlist.menu2orderbydate!==undefined && footlist.menu2orderbydate!==null && footlist.menu2orderbydate!==''){
                        $('#wwgm_footbarright_orderby_s').val(footlist.menu2orderbydate);
                    }
                    if(footlist.menu2number!==undefined && footlist.menu2number!==null && footlist.menu2number!==''){
                        $('#wwgm_footbarright_number_i').val(footlist.menu2number);
                    }

                    /*if(footlist.menu2contlinks!==undefined && footlist.menu2contlinks!==null && footlist.menu2contlinks!=='')
                    {
                        configmenu2ContList(footlist.menu2contlinks);
                    }*/

                    if(footlist.menu2icon!==undefined && footlist.menu2icon!==null && footlist.menu2icon!=='')
                    {
                        $('#wwgm_footbarright_upload_preview').text('');
                        $('#wwgm_footbarright_upload_preview_temp').val(footlist.menu2icon);
                        $('#wwgm_footbarright_upload_preview').css('background-image', 'url("/uploads/images/waaupimg/'+footlist.menu2icon+'")');
                    }

                    if(footlist.edit2!==undefined && footlist.edit2!==null && footlist.edit2!==''){
                        var edt=htmldecodejs(footlist.edit2);
                        vueOBJ.TinyMCMcontent2=edt;
                    }

                    if(transedlang!=null && transedlang!='')
                    {
                        $('.page1_alarm_bar').addClass('active');
                        $('.page1_alarm_bar span').text('Save  Appear');
                    }
                }
                else {
                    $('.page1_alarm_bar').removeClass('active');
                    $('.page1_alarm_bar span').text('No Save No Appear');
                }

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });

    }

    function  hidenModel(){
        $('#wwgm-menucont').val('');
        $('#wwgm-menulink').val('');
        $("#myMenuAddModal").modal('hide');
    }
    var  wwgfield='footmenu';
    export default {
        name: "WebsWesGlobalMenusFoot",
        components: {
            'editor0': Editor,
            'editor1': Editor,
            'editor2': Editor,
        },
        data(){
            return {
                pageid:'webs-wesglobal-menus-foot-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_menus:'',
                musususu_webs_wesglobal_menus_foot:'',
                mususu_mainmenu:'',
                mususu_footmenu:'',
                btntxt_add:'',
                pgtxt_font:'',
                pgtxt_content:'',
                pgtxt_link:'',
                pgtxt_createmenu:'',
                pgtxt_menu:'',
                pgtxt_normal:'',
                pgtxt_css:'',
                pgtxt_fontcolour:'',
                pgtxt_size:'',
                pgtxt_title:'',
                pgtxt_icon:'',
                btntxt_edit:'',
                pgtxt_news:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_translation:'',
                pgtxt_navigation:'',
                pgtxt_label:'',
                btntxt_change:'',
                btntxt_remove:'',
                pgtxt_nosavenoappear:'',
                pgtxt_type:'',
                pgtxt_service:'',
                pgtxt_aboutus:'',
                pgtxt_information:'',
                pgtxt_orderbydate:'',
                pgtxt_number:'',
                pgtxt_dbsaved:'',
                pgtxt_previewpage:'',
                pgtxt_releasesuccess:'',
                pgtxt_selectlanguagesave:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',

                TinyMCMcontent0: '',
                TinyMCMcontent1: '',
                TinyMCMcontent2: '',
            }
        },
        created() {

        },
        beforeMount(){
        },
        computed: {
            cmususu_webs_wesglobal_menus:function () {
                return this.mususu_webs_wesglobal_menus
            },
            cmusususu_webs_wesglobal_menus_foot:function () {
                return this.musususu_webs_wesglobal_menus_foot
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_wesglobal:function () {
                return this.musu_webs_wesglobal
            },
            cmususu_mainmenu:function () {
                return this.mususu_mainmenu
            },
            cmususu_footmenu:function () {
                return this.mususu_footmenu
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_font:function(){
                return this.pgtxt_font
            },
            cpgtxt_content:function(){
                return this.pgtxt_content
            },
            cpgtxt_link:function(){
                return this.pgtxt_link
            },
            cpgtxt_createmenu:function(){
                return this.pgtxt_createmenu
            },
            cpgtxt_menu:function(){
                return this.pgtxt_menu
            },
            cpgtxt_normal:function () {
                return this.pgtxt_normal
            },
            cpgtxt_css:function () {
                return this.pgtxt_css
            },
            cpgtxt_fontcolour:function () {
                return this.pgtxt_fontcolour
            },
            cpgtxt_size:function () {
                return this.pgtxt_size
            },
            cpgtxt_title:function () {
                return this.pgtxt_title
            },
            cpgtxt_icon:function () {
                return this.pgtxt_icon
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cpgtxt_news:function () {
                return this.pgtxt_news
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
            cpgtxt_translation:function () {
                return this.pgtxt_translation
            },
            cpgtxt_nosavenoappear:function () {
                return this.pgtxt_nosavenoappear
            },
            cpgtxt_type:function () {
                return this.pgtxt_type
            },
            cpgtxt_service:function () {
                return this.pgtxt_service
            },
            cpgtxt_aboutus:function () {
                return this.pgtxt_aboutus
            },
            cpgtxt_information:function () {
                return this.pgtxt_information
            },
            cpgtxt_orderbydate:function () {
                return this.pgtxt_orderbydate
            },
            cpgtxt_number:function () {
                return this.pgtxt_number
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
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },

            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj, key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        mounted(){
            /* fav part*/
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            permss = myjs.data.permissionDefinition();

            colorButtons();
            this.initpage();
            this.getWWGStoredLang();
        },
        methods:{
            /* fav part */
            getSiteFaveritelist(list){
                if(list!==null && list!=='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
                /* fav part*/
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
                                    $('#wwga_tranedLang').val(sky);
                                    if(wwgfield=='mainmenu')
                                        mainloaddata(wwgfield);
                                    else
                                        footloaddata(wwgfield);
                                }
                            });

                        }

                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            /*fav part*/
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
            edit_init_callback1(){
                $('.tox-statusbar').css('display','none');
            },
            upload_handler1(blobInfo, success, failure, progress) {
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
                    //$('#wwga_footbarleft_upload_preview_temp').val(json.filename);
                    success(json.location);
                };
                xhr.onerror = function () {
                    failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
                };
                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                xhr.send(formData);
            },
            edit_init_callback2(){
                $('.tox-statusbar').css('display','none');
            },
            upload_handler2(blobInfo, success, failure, progress) {
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
            initpage()
            {
                vueOBJ=this;
                wwgfield='footmenu';
                $('input[name="wwgmfrm"]').val('footmenu');

               /* $('#mainmenu-add-btn').click(function () {
                    $("#myMenuAddModal").modal('show');
                });*/

                $('input[name="wwgm_footbarleft"]').on( "click", function () {
                    var v = $(this).val();
                    //console.log(v);
                    if(v==='normal'){
                        $('.footmenu0_normal_part').css('display','block');
                        $('.footmenu0_css_part').css('display','none');
                    }
                    else if(v==='css'){
                        $('.footmenu0_normal_part').css('display','none');
                        $('.footmenu0_css_part').css('display','block');
                    }
                } );

                $('input[name="wwgm_footbar_cent"]').on( "click", function () {
                    var v = $(this).val();
                    //console.log(v);
                    if(v==='normal'){
                        $('.footmenu1_normal_part').css('display','block');
                        $('.footmenu1_css_part').css('display','none');
                    }
                    else if(v==='css'){
                        $('.footmenu1_normal_part').css('display','none');
                        $('.footmenu1_css_part').css('display','block');
                    }
                } );

                $('input[name="wwgm_footbar_right"]').on( "click", function () {
                    var v = $(this).val();
                    //console.log(v);
                    if(v==='normal'){
                        $('.footmenu2_normal_part').css('display','block');
                        $('.footmenu2_css_part').css('display','none');
                    }
                    else if(v==='css'){
                        $('.footmenu2_normal_part').css('display','none');
                        $('.footmenu2_css_part').css('display','block');
                    }
                } );

                $('#wwgm_footbarleft_editbtn').click(function () {
                    if (permss.pwrite == 1) {
                        $('#wwgm_footbarleft_upload').val('');
                        $('#wwgm_footbarleft_upload').trigger('click');
                    }else
                        myjs.data.showAlert('pgtxt_notpermission');
                });
                $("#wwgm_footbarleft_upload").change(function(){
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('#wwgm_footbarleft_upload_preview').text('');
                            $('#wwgm_footbarleft_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                        }
                        reader.readAsDataURL(this.files[0]); // convert to base64 string
                    }
                });

                $('#wwgm_footbarcent_editbtn').click(function () {
                    if (permss.pwrite == 1) {
                        $('#wwgm_footbarcent_upload').val('');
                        $('#wwgm_footbarcent_upload').trigger('click');
                    }else
                        myjs.data.showAlert('pgtxt_notpermission');
                });
                $("#wwgm_footbarcent_upload").change(function(){
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('#wwgm_footbarcent_upload_preview').text('');
                            $('#wwgm_footbarcent_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                        }
                        reader.readAsDataURL(this.files[0]); // convert to base64 string
                    }
                });

                $('#wwgm_footbarright_editbtn').click(function () {
                    if (permss.pwrite == 1) {
                        $('#wwgm_footbarright_upload').val('');
                        $('#wwgm_footbarright_upload').trigger('click');
                    }else
                        myjs.data.showAlert('pgtxt_notpermission');
                });
                $("#wwgm_footbarright_upload").change(function(){
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('#wwgm_footbarright_upload_preview').text('');
                            $('#wwgm_footbarright_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                        }
                        reader.readAsDataURL(this.files[0]); // convert to base64 string
                    }
                });


                $('#fontleftcont_list-app-btn').click(function () {
                    if (permss.pcreate == 1) {
                        var tags = '';
                        var txt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
                        var dtxt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
                        var c_id = 'c_' + footmenucnt0;
                        var l_id = 'l_' + footmenucnt0;
                        var timestamp = new Date().getTime();
                        var itemcont = 'item_' + footmenucnt0;
                        tags += '<div class="d-flex m-b-10" id="' + itemcont + '">';
                        tags += '<input type="hidden" id="createdate-' + itemcont + '" name="wwgm_createdate0[]" value="' + timestamp + '">';
                        tags += '<div style="flex-grow: 1" >';
                        tags += '<input type="text" id="' + c_id + '" name="wwgm_fontleftcont[]" value="" class="form-control" style="width: 100%;">';
                        tags += ' </div>';
                        tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;" class="data-ajax" data-ajax="pgtxt_link">' + txt + '</div>';
                        tags += '<div style="flex-grow: 1">';
                        tags += '<input type="text" id="' + l_id + '" name="wwgm_fontleftlink[]" value="" class="form-control" style="width: 100%;">';
                        tags += '</div>';
                        tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;">';
                        tags += '<div style="padding: 1px 15px;width: 70px;">&nbsp</div>';
                        tags += '</div>';
                        tags += '</div>';
                        $('#fontleftcont_list').append(tags);
                        footmenucnt0++;
                    }else
                        myjs.data.showAlert('pgtxt_notpermission');
                });
                /* right menu*/
                $('#fontcentcont_list-app-btn').click(function () {
                    if (permss.pcreate == 1) {
                        var tags = '';
                        var txt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
                        var dtxt = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
                        var c_id = 'c_' + footmenucnt1;
                        var l_id = 'l_' + footmenucnt1;
                        var timestamp = new Date().getTime();
                        var itemcont = 'item_' + footmenucnt1;
                        tags += '<div class="d-flex m-b-10" id="' + itemcont + '">';
                        tags += '<input type="hidden" id="createdate-' + itemcont + '" name="wwgm_createdate1[]" value="' + timestamp + '">';
                        tags += '<div style="flex-grow: 1" >';
                        tags += '<input type="text" id="' + c_id + '" name="wwgm_fontcentcont[]" value="" class="form-control" style="width: 100%;">';
                        tags += ' </div>';
                        tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;" class="data-ajax" data-ajax="pgtxt_link">' + txt + '</div>';
                        tags += '<div style="flex-grow: 1">';
                        tags += '<input type="text" id="' + l_id + '" name="wwgm_fontcentlink[]" value="" class="form-control" style="width: 100%;">';
                        tags += '</div>';
                        tags += '<div style="flex-grow: 1;text-align: right;padding-right: 50px;line-height: 35px;">';
                        tags += '<div style="padding: 1px 15px;width: 70px;">&nbsp</div>';
                        // tags +='<div class="btn btn-outline-light wwgmcentdelbtn" data-cont="b_'+footmenucnt+'"><span class="data-ajax" data-ajax="btntxt_delete">'+dtxt+'</span></div>';
                        tags += '</div>';
                        tags += '</div>';
                        $('#fontcentcont_list').append(tags);
                        footmenucnt1++;
                    }
                    else
                        myjs.data.showAlert('pgtxt_notpermission');
                });

                /*real menu add*/
                footloaddata(wwgfield);

                pgtxt_selectlanguagesave = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
            }//initpage
            ,PagePreview(){
                $("#previewModalModalbody").html('');
                var iframeH = $(window).height()-100;
                var lang = $('#wwga_tranedLang').val();
                if(lang=='')
                    lang = "en";
                else
                    lang = lang.split("-")[0];
                $("#previewModalModalbody").html('<iframe src="/'+lang+'/preview" style="border:none;width:100%; height: '+iframeH+'px;" title="preview"></iframe>');
                $("#previewModal").modal('show');
            },
            PageRelease(){
                if (permss.pwrite == 1) {
                    var tlang = $('#wwga_tranedLang').val();
                    if (tlang == '') {
                        alert(pgtxt_selectlanguagesave);
                        return;
                    }

                    var pgtxt_releasesuccess = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
                    var pgtxt_release = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');
                    if (window.confirm(pgtxt_release)) {
                        $.ajax({
                            url: 'admin.websGlobalFrontPageRelease',
                            type: 'POST',
                            data: {
                                trans: tlang,
                                part: "footmenu",
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
                                trans: tlang,
                                part: "footmenu",
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
            SavePageContent()
            {
                if (permss.pwrite == 1) {
                    var tlang = $('#wwga_tranedLang').val();
                    if (tlang == '') {
                        alert(pgtxt_selectlanguagesave);
                        return;
                    }
                    var pgtxt_dbsaved = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                    // encodeURIComponent ckdckd
                    $('input[name="tranedLang"]').val(tlang);
                    var formData = '';
                    let vobj = this;
                    var url = '';

                    $('#editcont0').val(this.TinyMCMcontent0);
                    $('#editcont1').val(this.TinyMCMcontent1);
                    $('#editcont2').val(this.TinyMCMcontent2);

                    $('input[name^="wwgm_fontleftlink"]').each(function () {
                        var surl = $.trim($(this).val());
                        surl = surl.replace(/(\s*)/g, '');
                        surl = encodeURIComponent(surl);
                        $(this).val(surl);
                    });
                    $('input[name^="wwgm_fontcentlink"]').each(function () {
                        var surl = $.trim($(this).val());
                        surl = surl.replace(/(\s*)/g, '');
                        surl = encodeURIComponent(surl);
                        $(this).val(surl);
                    });
                    /* $('input[name^="wwgm_fontrightlink"]').each(function(){
                        var surl = $.trim($(this).val());
                        surl = surl.replace(/(\s*)/g, '');
                        surl = encodeURIComponent(surl);
                        $(this).val(surl);
                    });*/

                    formData = new FormData($("#wwgm_foot_frm")[0]);
                    url = 'admin.WebsWesGlobalMenuUpload';

                    $.ajax({
                        url: url,
                        type: 'POST',
                        data: formData,
                        async: true,
                        success: function (data) {
                            // data = JSON.parse(data);
                            if (data.msg == "ok") {
                                footloaddata(wwgfield);
                                setTimeout(alert(pgtxt_dbsaved), 500);
                                //alert('Sucess save in Database');
                            } else {
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
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            }

        }//method


    }
</script>
