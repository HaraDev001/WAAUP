<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_appearance_foot}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_appearance}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_appearance_foot}}
                          <a href="#" id="webs-wesglobal-appearance-foot-fav" data-status="off" data-page-info="Foot_webs-wesglobal-appearance-foot">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='';">
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
                        <!--translation langs-->
                    </div>
                    <div class="page1_translate_bar_right">
                        <span class="page1_translate_span_right cursor-pointer" id="wwga_save" @click="SavePageContent">
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

        <div id="FootContainer" class="sl-tab-container active" style="margin-top:25px;">
            <form method="post" enctype="multipart/form-data" name="wwga_foot_flw" id="wwga_foot_flw">
                <input type="hidden" name="wwgafrm" value="foot"/>
                <input type="hidden" name="tranedLang"  value=""/>
                <input type="hidden" name="wwga_footbarleft_upload_preview_temp" id="wwga_footbarleft_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwga_footbarcent_upload_preview_temp" id="wwga_footbarcent_upload_preview_temp"  value=""/>
                <input type="hidden" name="wwga_footbarright_upload_preview_temp" id="wwga_footbarright_upload_preview_temp"  value=""/>

                <div class="row"><!--{{Barleft}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-20">{{cpgtxt_bar}}({{cpgtxt_left}})</h6>
                                <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                    <div style="width: 130px;margin-left: 20px;">
                                        <input class="form-check-input" type="radio" name="wwga_footbarleft" id="wwga_footbarleftnor" value="normal" checked>
                                        <label class="form-check-label" for="wwga_footbarleftnor">
                                            {{cpgtxt_normal}}
                                        </label>
                                    </div>
                                    <div style="width: 130px;">
                                        <input class="form-check-input" type="radio" name="wwga_footbarleft" id="wwga_footbarleftcss" value="css" >
                                        <label class="form-check-label" for="wwga_footbarleftcss">
                                            {{cpgtxt_css}}
                                        </label>
                                    </div>
                                </div>

                                <div class="barleft_normal_part" style="display: block">
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}}</div>
                                        <div style="flex-grow: 1;">
                                            <div style="display: flex;">
                                                <input type="hidden" name="wwga_footbarleftcolorpicker_val" id="wwga_footbarleftcolorpicker_val" value="#000000">
                                                <div id="wwga_footbarleftcolorpicker" class="m-r-15" data-color="#000000" style="width: 70px; cursor: pointer; background: rgb(227, 13, 13);"></div>
                                                <div id="wwga_footbarleftcolorpicker_value">#000000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_size}}</div>
                                        <div style="flex-grow: 1;">
                                            <div id="wwga_footbarleft_fontsize" class="m-r-15" style="width: 200px;">
                                                <select id="wwga_footbarleft_fontsize_s" name="wwga_footbarleft_fontsize_s" class="form-control">
                                                    <option value="11">11px</option>
                                                    <option value="12">12px</option>
                                                    <option value="14">14px</option>
                                                    <option value="16">16px</option>
                                                    <option value="18">18px</option>
                                                    <option value="20" selected="selected">20px</option>
                                                    <option value="22">22px</option>
                                                    <option value="24">24px</option>
                                                    <option value="26">26px</option>
                                                    <option value="28">28px</option>
                                                    <option value="30">30px</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_content}}</div>
                                        <div style="flex-grow: 1;">
                                            <input type="text" id="wwga_footbarleft_fontcont" name="wwga_footbarleft_fontcont" value="Copyright @WES 2020" class="form-control" style="width: 60%;">
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_image}}</div>
                                        <div style="flex-grow: 1;">
                                            <div class="flex-container">
                                                <div class="logimag" id="wwga_footbarleft_upload_preview">LOGO</div>
                                                <div style="display: none">
                                                    <input type="file" name="wwga_footbarleft_upload" id="wwga_footbarleft_upload" value=""/>
                                                </div>
                                                <div>
                                                    <div id="wwga_footbarleft_editbtn" class="btn btn-outline-light webglogappearbtn">
                                                        <span>{{cbtntxt_edit}}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_image}} {{cpgtxt_link}}</div>
                                        <div style="flex-grow: 1;">
                                            <input type="text" id="wwga_footbarleft_imglink" name="wwga_footbarleft_imglink" placeholder="Image Link" value="" class="form-control" style="width: 60%;">
                                        </div>
                                    </div>
                                </div>

                                <div class="barleft_css_part" style="display: none; margin-top:30px;">
                                    <textarea name="editcont0" id="editcont0" value="" style="display: none"></textarea>
                                    <div class="d-flex flex-column m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <editor0
                                            api-key="vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh"
                                            cloud-channel="5-dev"
                                            :init="{
                                             id:'00',
                                             height:250,
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

                <div class="row"><!--{{Bar(Center)}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-20">{{cpgtxt_bar}}({{cpgtxt_center}})</h6>
                                <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                    <div style="width: 130px;margin-left: 20px;">
                                        <input class="form-check-input" type="radio" name="wwga_footbar_cent" id="wwga_footbarcent_nor" value="normal" checked>
                                        <label class="form-check-label" for="wwga_footbarcent_nor">
                                            {{cpgtxt_normal}}
                                        </label>
                                    </div>
                                    <div style="width: 130px;">
                                        <input class="form-check-input" type="radio" name="wwga_footbar_cent" id="wwga_footbarcent_css" value="css" >
                                        <label class="form-check-label" for="wwga_footbarcent_css">
                                            {{cpgtxt_css}}
                                        </label>
                                    </div>
                                </div>

                                <div class="barcent_normal_part" style="display: block">
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}}</div>
                                        <div style="flex-grow: 1;">
                                            <div style="display: flex;">
                                                <input type="hidden" name="wwga_footbarcentcolorpicker_val" id="wwga_footbarcentcolorpicker_val" value="#000000">
                                                <div id="wwga_footbarcentcolorpicker" class="m-r-15" data-color="#000000" style="width: 70px; cursor: pointer; background: rgb(227, 13, 13);"></div>
                                                <div id="wwga_footbarcentcolorpicker_value">#000000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_size}}</div>
                                        <div style="flex-grow: 1;">
                                            <div id="wwga_footbarcent_fontsize" class="m-r-15" style="width: 200px;">
                                                <select id="wwga_footbarcent_fontsize_s" name="wwga_footbarcent_fontsize_s" class="form-control">
                                                    <option value="11">11px</option>
                                                    <option value="12">12px</option>
                                                    <option value="14">14px</option>
                                                    <option value="16">16px</option>
                                                    <option value="18">18px</option>
                                                    <option value="20" selected="selected">20px</option>
                                                    <option value="22">22px</option>
                                                    <option value="24">24px</option>
                                                    <option value="26">26px</option>
                                                    <option value="28">28px</option>
                                                    <option value="30">30px</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_content}}</div>
                                        <div style="flex-grow: 1;">
                                            <input type="text" id="wwga_footbarcent_fontcont" name="wwga_footbarcent_fontcont" value="Copyright @WES 2020" class="form-control" style="width: 60%;">
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_image}}</div>
                                        <div style="flex-grow: 1;">
                                            <div class="flex-container">
                                                <div class="logimag" id="wwga_footbarcent_upload_preview">LOGO</div>
                                                <div style="display: none">
                                                    <input type="file" name="wwga_footbarcent_upload" id="wwga_footbarcent_upload" value=""/>
                                                </div>
                                                <div>
                                                    <div id="wwga_footbarcent_editbtn" class="btn btn-outline-light webglogappearbtn">
                                                        <span>{{cbtntxt_edit}}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_image}} {{cpgtxt_link}}</div>
                                        <div style="flex-grow: 1;">
                                            <input type="text" id="wwga_footbarcent_imglink" name="wwga_footbarcent_imglink" placeholder="Image Link" value="" class="form-control" style="width: 60%;">
                                        </div>
                                    </div>
                                </div>

                                <div class="barcent_css_part" style="display: none; margin-top:30px;">
                                    <div class="d-flex flex-column m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <textarea name="editcont1" id="editcont1" value="" style="display: none"></textarea>
                                        <editor1
                                            api-key="vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh"
                                            cloud-channel="5-dev"
                                            :init="{
                                             id:'01',
                                             height:250,
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

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row"><!--{{Barright}}-->
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title m-b-20">{{cpgtxt_bar}}({{cpgtxt_right}})</h6>
                                <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                    <div style="width: 130px;margin-left: 20px;">
                                        <input class="form-check-input" type="radio" name="wwga_footbarright" id="wwga_footbarright_nor" value="normal" checked>
                                        <label class="form-check-label" for="wwga_footbarright_nor">
                                            {{cpgtxt_normal}}
                                        </label>
                                    </div>
                                    <div style="width: 130px;">
                                        <input class="form-check-input" type="radio" name="wwga_footbarright" id="wwga_footbarright_css" value="css" >
                                        <label class="form-check-label" for="wwga_footbarright_css">
                                            {{cpgtxt_css}}
                                        </label>
                                    </div>
                                </div>

                                <div class="barright_normal_part" style="display: block">
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} </div>
                                        <div style="flex-grow: 1;">
                                            <div style="display: flex;">
                                                <input type="hidden" name="wwga_footbarrightcolorpicker_val" id="wwga_footbarrightcolorpicker_val" value="#000000">
                                                <div id="wwga_footbarrightcolorpicker" class="m-r-15" data-color="#000000" style="width: 70px; cursor: pointer; background: rgb(227, 13, 13);"></div>
                                                <div id="wwga_footbarrightcolorpicker_value">#000000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_size}}</div>
                                        <div style="flex-grow: 1;">
                                            <div id="wwga_footbarright_fontsize" class="m-r-15" style="width: 200px;">
                                                <select id="wwga_footbarright_fontsize_s"  name="wwga_footbarright_fontsize_s" class="form-control">
                                                    <option value="11">11px</option>
                                                    <option value="12">12px</option>
                                                    <option value="14">14px</option>
                                                    <option value="16">16px</option>
                                                    <option value="18">18px</option>
                                                    <option value="20" selected="selected">20px</option>
                                                    <option value="22">22px</option>
                                                    <option value="24">24px</option>
                                                    <option value="26">26px</option>
                                                    <option value="28">28px</option>
                                                    <option value="30">30px</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_font}} {{cpgtxt_content}}</div>
                                        <div style="flex-grow: 1;">
                                            <input type="text" id="wwga_footbarright_fontcont" name="wwga_footbarright_fontcont" placeholder="Link your future" value="" class="form-control" style="width: 60%;">
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_image}}</div>
                                        <div style="flex-grow: 1;">
                                            <div class="flex-container">
                                                <div class="logimag" id="wwga_footbarright_upload_preview">LOGO</div>
                                                <div style="display: none">
                                                    <input type="file" name="wwga_footbarright_upload" id="wwga_footbarright_upload" value=""/>
                                                </div>
                                                <div>
                                                    <div id="wwga_footbarright_editbtn" class="btn btn-outline-light webglogappearbtn">
                                                        <span>{{cbtntxt_edit}}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row  m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <div style="width: 130px;">{{cpgtxt_image}} {{cpgtxt_link}}</div>
                                        <div style="flex-grow: 1;">
                                            <input type="text" id="wwga_footbarright_imglink" name="wwga_footbarright_imglink" placeholder="Image Link" value="" class="form-control" style="width: 60%;">
                                        </div>
                                    </div>
                                </div>
                                <div class="barright_css_part" style="display: none;  margin-top: 30px;">
                                    <textarea name="editcont2" id="editcont2" value="" style="display: none"></textarea>
                                    <div class="d-flex flex-column m-b-20" style="padding: 0px 100px; align-items: center;">
                                        <editor2
                                            api-key="vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh"
                                            cloud-channel="5-dev"
                                            :init="{
                                             id:'02',
                                             height:250,
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

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
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
    .ck.ck-editor {
        width: 100%;
    }
    .tox.tox-tinymce{
        border-radius: 20px;
        width: 100% !important;
        min-height: 350px !important;
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
    #wwga_footbarleft_upload_preview, #wwga_footbarright_upload_preview, #wwga_slogan_upload_preview, #wwga_log_upload_preview{
        background-repeat: no-repeat;
        background-size:100% 100%;
    }

</style>

<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import Editor from '@tinymce/tinymce-vue';
    import nav_module from "../../assets/jsfunc/nav_module";

    var pgtxt_selectlanguagesave = "";
    var permss;

    function colorButtons(){
        const wwga_footbarleftcolorpicker = document.getElementById('wwga_footbarleftcolorpicker');
        let pickerLeft = new ColorPicker(wwga_footbarleftcolorpicker, '#000000');
        wwga_footbarleftcolorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            //console.log(color);
            $('#wwga_footbarleftcolorpicker_value').text(color);
            $('#wwga_footbarleftcolorpicker_val').val(color);
        });

        const wwga_footbarcentcolorpicker = document.getElementById('wwga_footbarcentcolorpicker');
        let pickerCenter = new ColorPicker(wwga_footbarcentcolorpicker, '#000000');
        wwga_footbarcentcolorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            //console.log(color);
            $('#wwga_footbarcentcolorpicker_value').text(color);
            $('#wwga_footbarcentcolorpicker_val').val(color);
        });

        const wwga_footbarrightcolorpicker = document.getElementById('wwga_footbarrightcolorpicker');
        let pickerRight = new ColorPicker(wwga_footbarrightcolorpicker, '#000000');
        wwga_footbarrightcolorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            //console.log(color);
            $('#wwga_footbarrightcolorpicker_value').text(color);
            $('#wwga_footbarrightcolorpicker_val').val(color);
        });

    }
    let vueOBJ=null;
    let  wwgfield='foot';

    export default {
        name: "WebsWesGlobalAppearanceFoot",
        components: {
            'editor0': Editor,
            'editor1': Editor,
            'editor2': Editor,
        },
        data(){
            return {
                pageid:'webs-wesglobal-appearance-foot-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_appearance:'',
                musususu_webs_wesglobal_appearance_foot:'',
                pgtxt_head:'',
                pgtxt_foot:'',
                pgtxt_topheader:'',
                pgtxt_hide:'',
                pgtxt_location:'',
                pgtxt_logo:'',
                btntxt_edit:'',
                pgtxt_slogan:'',
                pgtxt_bar:'',
                pgtxt_normal:'',
                pgtxt_css:'',
                pgtxt_content:'',
                pgtxt_image:'',
                pgtxt_link:'',
                pgtxt_center:'',
                pgtxt_right:'',
                pgtxt_font:'',
                pgtxt_size:'',
                pgtxt_toolbar:'',
                pgtxt_calendar:'',
                pgtxt_module:'',
                pgtxt_left:'',
                btntxt_add:'',
                pgtxt_language:'',
                pgtxt_translation:'',
                pgtxt_save:'',
                pgtxt_preview:'',
                pgtxt_release:'',
                pgtxt_nosavenoappear:'',
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
            cmususu_webs_wesglobal_appearance:function () {
                return this.mususu_webs_wesglobal_appearance
            },
            cmusususu_webs_wesglobal_appearance_foot:function () {
                return this.musususu_webs_wesglobal_appearance_foot
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_wesglobal:function () {
                return this.musu_webs_wesglobal
            },
            cpgtxt_head:function () {
                return this.pgtxt_head
            },
            cpgtxt_foot:function () {
                return this.pgtxt_foot
            },
            cpgtxt_topheader:function () {
                return this.pgtxt_topheader
            },
            cpgtxt_hide:function () {
                return this.pgtxt_hide
            },
            cpgtxt_location:function () {
                return this.pgtxt_location
            },
            cpgtxt_logo:function () {
                return this.pgtxt_logo
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit
            },
            cpgtxt_slogan:function () {
                return this.pgtxt_slogan
            },
            cpgtxt_bar:function () {
                return this.pgtxt_bar
            },
            cpgtxt_normal:function () {
                return this.pgtxt_normal
            },
            cpgtxt_css:function () {
                return this.pgtxt_css
            },
            cpgtxt_content:function () {
                return this.pgtxt_content
            },
            cpgtxt_image:function () {
                return this.pgtxt_image
            },
            cpgtxt_link:function () {
                return this.pgtxt_link
            },
            cpgtxt_center:function () {
                return this.pgtxt_center
            },
            cpgtxt_right:function () {
                return this.pgtxt_right
            },
            cpgtxt_left:function () {
                return this.pgtxt_left
            },
            cpgtxt_font:function () {
                return this.pgtxt_font
            },
            cpgtxt_size:function () {
                return this.pgtxt_size
            },
            cpgtxt_toolbar:function () {
                return this.pgtxt_toolbar
            },
            cpgtxt_calendar:function () {
                return this.pgtxt_calendar
            },
            cpgtxt_module:function () {
                return this.pgtxt_module
            },
            cbtntxt_add:function () {
                return this.btntxt_add
            },
            cpgtxt_language:function () {
                return this.pgtxt_language
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
            cpgtxt_nosavenoappear:function(){
                return this.pgtxt_nosavenoappear
            },
            cpgtxt_dbsaved:function(){
                return this.pgtxt_dbsaved
            },
            cpgtxt_previewpage:function(){
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
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
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
            /* fav part*/
            permss = myjs.data.permissionDefinition();
            pgtxt_selectlanguagesave = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');

            colorButtons();
            this.initpage();
            this.getWWGStoredLang();

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
            },  /*fav part*/
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
            getWWGStoredLang(){
                axios.post('admin.getWWGStoredLang').then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok")
                    {
                        var stored_langs = response.data.langlist;
                        if(stored_langs!==''){
                            stored_langs = $.parseJSON(stored_langs);
                            var tags='';
                            for (var j = 0; j < stored_langs.length; j++)
                            {
                                var obj = stored_langs[j];
                                // console.log(obj);
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
                                    vueOBJ.loaddata();
                                }
                            });
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            },
            PagePreview(){
                $("#previewModalModalbody").html('');
                var iframeH = $(window).height()-100;
                var lang = $('#wwga_tranedLang').val();
                if(lang=='' || lang==null)
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
                                part: "HeadFootBar",
                                tabstatus: 'foot',
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
                                part: "HeadFootBar",
                                tabstatus: 'foot',
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
            SavePageContent() {
                if (permss.pwrite == 1) {
                    var formData = '';
                    var tlang = $('#wwga_tranedLang').val();

                    if (tlang == '') {
                        alert(pgtxt_selectlanguagesave);
                        return;
                    }
                    var pgtxt_dbsaved = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                    $('input[name="tranedLang"]').val(tlang);
                    $('#editcont0').val(this.TinyMCMcontent0);
                    $('#editcont1').val(this.TinyMCMcontent1);
                    $('#editcont2').val(this.TinyMCMcontent2);
                    formData = new FormData($("#wwga_foot_flw")[0]);
                    $.ajax({
                        url: 'admin.WebsWesGlobalUpload',
                        type: 'POST',
                        data: formData,
                        async: false,
                        success: function (data) {
                            // data = JSON.parse(data);
                            if (data.msg == "ok") {
                                alert(pgtxt_dbsaved);
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
            },
            initpage() {

                $('input[name="wwga_footbarleft"]').on( "click", function () {
                    var v = $(this).val();
                    //console.log(v);
                    if(v=='normal'){
                        $('.barleft_css_part').css('display','none');
                        $('.barleft_normal_part').css('display','block');
                    }
                    else if(v=='css'){
                        $('.barleft_css_part').css('display','block');
                        $('.barleft_normal_part').css('display','none');
                    }
                } );
                /*barcent*/
                $('input[name="wwga_footbar_cent"]').on( "click", function () {
                    var v = $(this).val();
                    //console.log(v);
                    if(v=='normal'){
                        $('.barcent_css_part').css('display','none');
                        $('.barcent_normal_part').css('display','block');
                    }
                    else if(v=='css'){
                        $('.barcent_css_part').css('display','block');
                        $('.barcent_normal_part').css('display','none');
                    }
                } );

                /*foot*/
                $('#wwga_footbarleft_editbtn').click(function () {
                    if (permss.pdelete == 1) {
                        $('#wwga_footbarleft_upload').val('');
                        $('#wwga_footbarleft_upload').trigger('click');
                    }else
                        myjs.data.showAlert('pgtxt_notpermission');
                });
                $("#wwga_footbarleft_upload").change(function(){
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('#wwga_footbarleft_upload_preview').text('');
                            $('#wwga_footbarleft_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                        }
                        reader.readAsDataURL(this.files[0]); // convert to base64 string
                    }
                });

                $('#wwga_footbarcent_editbtn').click(function () {
                    $('#wwga_footbarcent_upload').val('');
                    $('#wwga_footbarcent_upload').trigger('click');
                });
                $("#wwga_footbarcent_upload").change(function(){
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('#wwga_footbarcent_upload_preview').text('');
                            $('#wwga_footbarcent_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                        }
                        reader.readAsDataURL(this.files[0]); // convert to base64 string
                    }
                });

                $('#wwga_footbarright_editbtn').click(function () {
                    $('#wwga_footbarright_upload').val('');
                    $('#wwga_footbarright_upload').trigger('click');
                });
                $("#wwga_footbarright_upload").change(function(){
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('#wwga_footbarright_upload_preview').text('');
                            $('#wwga_footbarright_upload_preview').css('background-image', 'url("'+e.target.result+'")');
                        }
                        reader.readAsDataURL(this.files[0]); // convert to base64 string
                    }
                });

                $('input[name="wwga_footbarright"]').on( "click", function () {
                    var v = $(this).val();
                    //console.log(v);
                    if(v=='normal'){
                        $('.barright_css_part').css('display','none');
                        $('.barright_normal_part').css('display','block');
                    }
                    else if(v=='css'){
                        $('.barright_css_part').css('display','block');
                        $('.barright_normal_part').css('display','none');
                    }
                } );

                this.loaddata();

            },
            loaddata()
            {
                var transedlang = $('#wwga_tranedLang').val();
                $.ajax({
                    url: 'admin.getWebsWesGlobalUpload',
                    data: {
                        tedLang: transedlang,
                        wwgfield:wwgfield
                    },
                    type: 'POST',
                    success: function (data) {
                        var list = data.lists;
                        //console.log(list);
                        if(list!=='')
                        {

                                if(list.barleft=='normal')
                                {
                                    $('input[id="wwga_footbarleftnor"]').prop('checked',true);
                                    $('.barleft_normal_part').css('display','block');
                                    $('.barleft_css_part').css('display','none');
                                }
                                else if(list.barleft=='css'){
                                    $('input[id="wwga_footbarleftcss"]').prop('checked',true);
                                    $('.barleft_normal_part').css('display','none');
                                    $('.barleft_css_part').css('display','block');
                                }
                                if(list.barleftfontcolor!=''){
                                    $('#wwga_footbarleftcolorpicker_val').val(list.barleftfontcolor);
                                    $('#wwga_footbarleftcolorpicker').css('background',list.barleftfontcolor);
                                    $('#wwga_footbarleftcolorpicker').attr('data-color',list.barleftfontcolor);
                                    $('#wwga_footbarleftcolorpicker_value').text(list.barleftfontcolor);
                                }

                                $('#wwga_footbarleft_fontsize_s').val(list.barleftfontsize);
                                $('#wwga_footbarleft_fontcont').val(list.barleftfontcont);

                                if(list.barleftimg!='')
                                {
                                    $('#wwga_footbarleft_upload_preview').text('');
                                    $('#wwga_footbarleft_upload_preview_temp').val(list.slogan);
                                    $('#wwga_footbarleft_upload_preview').css('background-image', 'url("/uploads/images/waaupimg/'+list.barleftimg+'")');

                                }

                                if(list.barleftfontlink!='#')
                                    $('#wwga_footbarleft_imglink').val(list.barleftfontlink);

                                /* bar center*/
                                if(list.barcent=='normal'){
                                    $('input[id="wwga_footbarcent_nor"]').prop('checked',true);
                                    $('.barcent_normal_part').css('display','block');
                                    $('.barcent_css_part').css('display','none');
                                }
                                else if(list.barcent=='css'){
                                    $('input[id="wwga_footbarcent_css"]').prop('checked',true);
                                    $('.barcent_normal_part').css('display','none');
                                    $('.barcent_css_part').css('display','block');
                                }

                                if(list.barcentfontcolor!=''){
                                    $('#wwga_footbarcentcolorpicker_val').val(list.barcentfontcolor);
                                    $('#wwga_footbarcentcolorpicker').css('background',list.barcentfontcolor);
                                    $('#wwga_footbarcentcolorpicker').attr('data-color',list.barcentfontcolor);
                                    $('#wwga_footbarcentcolorpicker_value').text(list.barcentfontcolor);
                                }

                                $('#wwga_footbarcent_fontsize_s').val(list.barcentfontsize);
                                $('#wwga_footbarcent_fontcont').val(list.barcentfontcont);

                                if(list.barcentimg!='')
                                {
                                    $('#wwga_footbarcent_upload_preview').text('');
                                    $('#wwga_footbarcent_upload_preview_temp').val(list.barcentimg);
                                    $('#wwga_footbarcent_upload_preview').css('background-image', 'url("/uploads/images/waaupimg/'+list.barcentimg+'")');
                                }

                                if(list.barcentfontlink!='#')
                                    $('#wwga_footbarcent_imglink').val(list.barcentfontlink);

                                if(list.edit0!=''){
                                    var edt0=htmldecodejs(list.edit0);
                                    vueOBJ.TinyMCMcontent0 = edt0;
                                }
                                if(list.edit1!=''){
                                    var edt1=htmldecodejs(list.edit1);
                                    vueOBJ.TinyMCMcontent1= edt1;
                                }
                                if(list.edit2!=''){
                                    var edt2=htmldecodejs(list.edit2);
                                    vueOBJ.TinyMCMcontent2= edt2;
                                }

                                /*foot right*/
                                if(list.barright=='normal'){
                                    $('input[id="wwga_footbarright_nor"]').prop('checked',true);
                                    $('.barright_normal_part').css('display','block');
                                    $('.barright_css_part').css('display','none');
                                }
                                else if(list.barright=='css'){
                                    $('input[id="wwga_footbarright_css"]').prop('checked',true);
                                    $('.barright_normal_part').css('display','none');
                                    $('.barright_css_part').css('display','block');
                                }
                                if(list.barrightfontcolor!=''){
                                    $('#wwga_footbarrightcolorpicker_val').val(list.barrightfontcolor);
                                    $('#wwga_footbarrightcolorpicker').css('background',list.barrightfontcolor);
                                    $('#wwga_footbarrightcolorpicker').attr('data-color',list.barrightfontcolor);
                                    $('#wwga_footbarrightcolorpicker_value').text(list.barrightfontcolor);
                                }

                                $('#wwga_footbarright_fontsize_s').val(list.barrightfontsize);
                                $('#wwga_footbarright_fontcont').val(list.barrightfontcont);

                                if(list.barrightimg!='')
                                {
                                    $('#wwga_footbarright_upload_preview').text('');
                                    $('#wwga_footbarright_upload_preview_temp').val(list.barrightimg);
                                    $('#wwga_footbarright_upload_preview').css('background-image', 'url("/uploads/images/waaupimg/'+list.barrightimg+'")');

                                }

                                if(list.barrightfontlink!='#')
                                    $('#wwga_footbarright_imglink').val(list.barrightfontlink);


                            if(transedlang!=null && transedlang!='')
                            {
                                $('.page1_alarm_bar').addClass('active');
                                $('.page1_alarm_bar span').text('Save  Appear');
                            }

                        }
                        else{
                            $('.page1_alarm_bar').removeClass('active');
                            $('.page1_alarm_bar span').text('No Save No Appear');
                        }

                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            }
        }//method


    }
</script>
