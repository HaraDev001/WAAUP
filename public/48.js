(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var preview = '';
var tabstatus = 0;
var vueOBJ = null;
var transedlang = '';
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

function getSocialSettingEvent() {
  var pgtxt_please = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_please');
  var pgtxt_select = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_select');
  var pgtxt_setting = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_setting');
  var pgtxt_icon = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_icon');
  var pgtxt_name = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
  var pgtxt_size = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_size');
  var pgtxt_capacity = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_capacity');
  var pgtxt_format = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_format');
  var pgtxt_language = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_language');
  var pgtxt_translation = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_translation');
  var pgtxt_error = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_error');
  $('div[id^="wwgsschooseicons_"]').on("dragover", function (e) {
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

    if (down_pageindex != 0) {
      var index = e.target.id.split("_")[1];
      $('#seletedIconImage_' + id_down).attr('src', $('#seletedIconImage_' + index).attr('src'));
      $('#uploadiconpre_' + id_down).val($('#ifile_' + index).val());
      $('#ifile_' + id_down).val($('#ifile_' + index).val());
      $('#hfile_' + id_down).val($('#hfile_' + index).val());
      $('#ilink_' + id_down).val($('#ilink_' + index).val());
      $('#hlink_' + id_down).val($('#hlink_' + index).val());

      if ($('#ifile_' + id_down).val() == "" || $('#ifile_' + id_down).val() == null) {
        $('#seletedHoverImage_' + id_down).attr("src", "");
        $('#seletedHoverImage_' + id_down).css("display", "none");
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

      if ($('#ifile_' + index).val() != "" && $('#ifile_' + index).val() != null) {
        $('#seletedHoverImage_' + id_down).attr("src", icon_path + i_clickimg);
        $('#closeIconImage_' + index).css('display', 'block');
        $('#addIcontext_' + index).css('display', 'none');
        $('#iconIndex_' + index).val(1);
      }
    }
  });
  $('div[id^="wwgsschooseicons_"]').on('mouseover', function () {
    var index = $(this).attr('id').split("_")[1];
    var hover_img = $('#hfile_' + index).val();

    if (hover_img != null && hover_img != "") {
      //$('#' + $(this).attr('id') + ' > img').attr("src", icon_path + hover_img);
      $('#seletedHoverImage_' + index).attr("src", icon_path + hover_img);
      $('#seletedHoverImage_' + index).css("display", "block");
    }
  });
  $('div[id^="wwgsschooseicons_"]').on('mouseleave', function () {
    var index = $(this).attr('id').split("_")[1];
    var orig_img = $('#ifile_' + index).val();

    if (orig_img != null && orig_img != "") {
      $('#seletedHoverImage_' + index).attr("src", "");
      $('#seletedHoverImage_' + index).css("display", "none");
    }
  });
  $('div[id^="wwgsschooseicons_"]').on('mousedown', function () {
    if (transedlang == '') {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguage');
      return;
    }

    var index = $(this).attr('id').split("_")[1];
    down_pageindex = $('#iconIndex_' + index).val();
    id_down = index;
    i_clickimg = $('#ifile_' + index).val();
    h_clickimg = $('#hfile_' + index).val();
    i_clicktxt = $('#ilink_' + index).val();
    h_clicktxt = $('#hlink_' + index).val();
  });
  $('div[id^="wwgsschooseicons_"]').on('mouseup', function () {
    var id = $(this).attr('id');
    var index = id.split("_");
    $('#chooseIconId').val(index[1]);
    var pageindex = $('#iconIndex_' + index[1]).val();

    if (pageindex == "0") {
      if ($('#icon_cond').val() != "" && $('#hover_cond').val() != "") {
        if (permss.pcreate == 1) $('#uploadicon_' + index[1]).trigger('click');else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
      } else {
        alert(pgtxt_please + ' ' + pgtxt_select + ' ' + pgtxt_setting + ' ' + pgtxt_icon);
      }
    } else {
      detail_id = index[1];
      $('#IconSettinPage').css("display", "none");
      $('#SocialSettingChoosePart').css("display", "none");
      $('#IconDetailSettinPage').css("display", "block");
      $('#detailSettingIconImage').attr('src', icon_path + $('#ifile_' + detail_id).val());
      $('#file-detailhoverpre').attr('src', '');
      $('#detailchooseiconlink').val($('#ilink_' + detail_id).val());
      $('#detailchoosehoverlink').val($('#hlink_' + detail_id).val());
      if ($('#hfile_' + detail_id).val() != "") $('#detailSettingHoverImage').attr('src', icon_path + $('#hfile_' + detail_id).val());else $('#detailSettingHoverImage').attr('src', '/images/wes_add_camera_btn.png');
    }
  });
  $('input[name^="uploadicon_"]').change(function () {
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
          success: function success(data) {
            if (data.msg == "ok") {
              var pageindex = $('#iconIndex_' + index[1]).val();

              if (pageindex == 1) {
                $('#detailSettingIconImage').attr('src', icon_path + data.fname);
              } else {
                $('#closeIconImage_' + index[1]).css('display', 'block');
                $('#addIcontext_' + index[1]).css('display', 'none');
                $('#iconIndex_' + index[1]).val(1);
              }

              $('#ifile_' + index[1]).val(data.fname);
              $('#uploadiconpre_' + index[1]).attr('src', icon_path + data.fname);
              $('#seletedIconImage_' + index[1]).attr('src', icon_path + data.fname);
            } else if (data.msg == "size") {
              alert(pgtxt_error + " " + pgtxt_size);
            } else if (data.msg == "format") {
              alert(pgtxt_error + " " + pgtxt_format);
            } else if (data.msg == "capacity") {
              alert(pgtxt_error + " " + pgtxt_capacity);
            } else alert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          },
          cache: false,
          contentType: false,
          processData: false
        });
      };

      reader.readAsDataURL(this.files[0]);
    }
  });
  $('#seletedHoverImageBtn').click(function () {
    $('#file-detailhover').trigger('click');
  });
  $('#file-detailhover').change(function () {
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
          success: function success(data) {
            if (data.msg == "ok") {
              $('#file-detailhoverpre').attr('src', e.target.result);
              $('#detailSettingHoverImage').attr('src', e.target.result);
            } else if (data.msg == "size") {
              alert(pgtxt_error + " " + pgtxt_size);
            } else if (data.msg == "format") {
              alert(pgtxt_error + " " + pgtxt_format);
            } else if (data.msg == "capacity") {
              alert(pgtxt_error + " " + pgtxt_capacity);
            } else alert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          },
          cache: false,
          contentType: false,
          processData: false
        });
      };

      reader.readAsDataURL(this.files[0]);
    }
  });
  $('img[id^="closeIconImage_"]').click(function () {
    if (transedlang == '') {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguage');
      return;
    }

    var index = $(this).attr('id').split("_")[1];
    var ifile = $('#ifile_' + index).val();
    var hfile = $('#hfile_' + index).val();
    $.ajax({
      url: 'admin.deleteSocialSettingIcon',
      type: 'POST',
      data: {
        ifile: ifile,
        hfile: hfile
      },
      async: false,
      success: function success(data) {
        if (data.msg == "ok") {
          $('#seletedHoverImage_' + index).attr("src", "");
          $('#seletedHoverImage_' + index).css("display", "none");
          $('#closeIconImage_' + index).css('display', 'none');
          $('#seletedIconImage_' + index).attr('src', '/images/wes_add_icon_btn.png');
          $('#addIcontext_' + index).css('display', 'block');
          $('#uploadicon_' + index).val('');
          $('#uploadiconpre_' + index).attr('src', '');
          $('#ifile_' + index).val("");
          $('#hfile_' + index).val("");
          $('#ilink_' + index).val("");
          $('#hlink_' + index).val("");
          $('#iconIndex_' + index).val("0");
        } else alert(data.msg);
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
    var formData = new FormData($("#social_setting_panel_frm")[0]);
    $.ajax({
      url: 'admin.saveSocialSettingPage',
      type: 'POST',
      data: formData,
      async: false,
      success: function success(data) {
        if (data.msg == "ok") {
          $('#closeIconImage_' + index[1]).css('display', 'none');
          $('#seletedIconImage_' + index[1]).attr('src', '/images/wes_add_icon_btn.png');
          $('#addIcontext_' + index[1]).css('display', 'block');
        } else alert(data.msg);
      },
      error: function error(jqXHR, errdata, errorThrown) {
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
      var postData = {
        start: 1,
        cnt: 10,
        // han 2020-10-21
        filter: 0 // han 2020-10-21

      };
      var tag = "";
      tag += '<tr role="row" class="odd">';
      tag += '<td style="width:200px;" class="data-ajax" data-ajax="pgtxt_name">' + pgtxt_name + '</td>';
      tag += '<td style="width:150px" class="data-ajax" data-ajax="pgtxt_size">' + pgtxt_size + '</td>';
      tag += '<td style="width:100px" class="data-ajax" data-ajax="pgtxt_capacity">' + pgtxt_capacity + '</td>';
      tag += '<td style="width:150px" class="data-ajax" data-ajax="pgtxt_format">' + pgtxt_format + '</td>';
      tag += '</tr>';
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getSiteLogoStylelist', postData).then(function (response) {
        var msg = response.data.msg;
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
              imgtype = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.jsonparse_one(imgtype);
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
                    if (index == 0) real_imgtype += real_types[0];else real_imgtype += " / " + real_types[0];
                    index++;
                  }
                }

                imgtype = real_imgtype;
              }
            }

            var cls = '';
            if (i < logolists.length - 1) cls = 'bot';
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
                if (setting_index == 1) style_1 = list;else style_2 = list;
                break;
              }
            }
          });
        } else {
          console.log(response.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
      });
      $("#iconSettingModal").modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
}

function JsonDataSocialSetting(jsonstr) {
  if (jsonstr != '') {
    var datas = $.parseJSON(jsonstr);
    $('#uploadiconpre_1').val(datas.i_img1);
    $('#ifile_1').val(datas.i_img1);
    $('#hfile_1').val(datas.h_img1);
    $('#ilink_1').val(datas.i_link1);
    $('#hlink_1').val(datas.h_link1);
    if (datas.i_img1 != "" && datas.i_img1 != null) $('#iconIndex_1').val(1);
    $('#uploadiconpre_2').val(datas.i_img2);
    $('#ifile_2').val(datas.i_img2);
    $('#hfile_2').val(datas.h_img2);
    $('#ilink_2').val(datas.i_link2);
    $('#hlink_2').val(datas.h_link2);
    if (datas.i_img2 != "" && datas.i_img2 != null) $('#iconIndex_2').val(1);
    $('#uploadiconpre_3').val(datas.i_img3);
    $('#ifile_3').val(datas.i_img3);
    $('#hfile_3').val(datas.h_img3);
    $('#ilink_3').val(datas.i_link3);
    $('#hlink_3').val(datas.h_link3);
    if (datas.i_img3 != "" && datas.i_img3 != null) $('#iconIndex_3').val(1);
    $('#uploadiconpre_4').val(datas.i_img4);
    $('#ifile_4').val(datas.i_img4);
    $('#hfile_4').val(datas.h_img4);
    $('#ilink_4').val(datas.i_link4);
    $('#hlink_4').val(datas.h_link4);
    if (datas.i_img4 != "" && datas.i_img4 != null) $('#iconIndex_4').val(1);
    $('#uploadiconpre_5').val(datas.i_img5);
    $('#ifile_5').val(datas.i_img5);
    $('#hfile_5').val(datas.h_img5);
    $('#ilink_5').val(datas.i_link5);
    $('#hlink_5').val(datas.h_link5);
    if (datas.i_img5 != "" && datas.i_img5 != null) $('#iconIndex_5').val(1);
    $('#uploadiconpre_6').val(datas.i_img6);
    $('#ifile_6').val(datas.i_img6);
    $('#hfile_6').val(datas.h_img6);
    $('#ilink_6').val(datas.i_link6);
    $('#hlink_6').val(datas.h_link6);
    if (datas.i_img6 != "" && datas.i_img6 != null) $('#iconIndex_6').val(1);
    $('#uploadiconpre_7').val(datas.i_img7);
    $('#ifile_7').val(datas.i_img7);
    $('#hfile_7').val(datas.h_img7);
    $('#ilink_7').val(datas.i_link7);
    $('#hlink_7').val(datas.h_link7);
    if (datas.i_img7 != "" && datas.i_img7 != null) $('#iconIndex_7').val(1);
    $('#uploadiconpre_8').val(datas.i_img8);
    $('#ifile_8').val(datas.i_img8);
    $('#hfile_8').val(datas.h_img8);
    $('#ilink_8').val(datas.i_link8);
    $('#hlink_8').val(datas.h_link8);
    if (datas.i_img8 != "" && datas.i_img8 != null) $('#iconIndex_8').val(1);
    $('#icon_cond').val(datas.i_cond);
    $('#hover_cond').val(datas.h_cond);
    $('#chooseIconId').val("");

    for (var i = 1; i <= 8; i++) {
      if ($('#ifile_' + i).val() == "") {
        $('#seletedHoverImage_' + i).attr("src", "");
        $('#seletedHoverImage_' + i).css("display", "none");
        $('#seletedIconImage_' + i).attr('src', '/images/wes_add_icon_btn.png');
        $('#closeIconImage_' + i).css('display', 'none');
        $('#addIcontext_' + i).css('display', 'block');
        $('#iconIndex_' + i).val(0);
      } else {
        $('#seletedHoverImage_' + i).attr("src", icon_path + $('#hfile_' + i).val());
        $('#seletedHoverImage_' + i).css("display", "none");
        $('#seletedIconImage_' + i).attr('src', icon_path + $('#ifile_' + i).val());
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
      success: function success(data) {
        if (data.msg == "ok") {
          $('#selected_icon_name').text(data.iconStyle.name);
          $('#selected_hover_name').text(data.hoverStyle.name);
        } else alert(data.msg);
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  } else {
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

    for (var i = 1; i <= 8; i++) {
      $('#seletedHoverImage_' + i).attr("src", "");
      $('#seletedHoverImage_' + i).css("display", "none");
      $('#seletedIconImage_' + i).attr('src', '/images/wes_add_icon_btn.png');
      $('#closeIconImage_' + i).css('display', 'none');
      $('#addIcontext_' + i).css('display', 'block');
      $('#iconIndex_' + i).val(0);
    }
  }
}

function getSocialSettingPage() {
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
    success: function success(data) {
      if (data.msg == "ok") {
        if (transedlang != null && transedlang != '') {
          $('.page1_alarm_bar').addClass('active');
          $('.page1_alarm_bar span').text('Save  Appear');
        }

        JsonDataSocialSetting(data.list);
      } else alert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalSocialSetting",

  /* components: {
       CKEditor
   },*/
  data: function data() {
    return {
      pageid: 'webs-wesglobal-social-setting-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_social: '',
      musususu_webs_wesglobal_social_setting: '',
      pgtxt_translation: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_korean: '',
      pgtxt_chinese: '',
      pgtxt_english: '',
      pgtxt_nosavenoappear: '',
      pgtxt_setting: '',
      pgtxt_image: '',
      pgtxt_size: '',
      pgtxt_navigation: '',
      pgtxt_choose: '',
      pgtxt_set: '',
      btntxt_edit: '',
      btntxt_savechanges: '',
      pgtxt_icon: '',
      pgtxt_hover: '',
      btntxt_add: '',
      pgtxt_character: '',
      pgtxt_please: '',
      pgtxt_select: '',
      pgtxt_social: '',
      pgtxt_link: '',
      pgtxt_title: '',
      pgtxt_language: '',
      pgtxt_error: '',
      pgtxt_format: '',
      pgtxt_capacity: '',
      pgtxt_dbsaved: '',
      pgtxt_previewpage: '',
      pgtxt_releasesuccess: '',
      pgtxt_selectlanguagesave: '',
      pgtxt_selectlanguage: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.permissionDefinition();
    this.getWWGStoredLang();
    this.loaddata();
  },
  computed: {
    cmususu_webs_wesglobal_social: function cmususu_webs_wesglobal_social() {
      return this.mususu_webs_wesglobal_social;
    },
    cmusususu_webs_wesglobal_social_setting: function cmusususu_webs_wesglobal_social_setting() {
      return this.musususu_webs_wesglobal_social_setting;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
    },
    cpgtxt_translation: function cpgtxt_translation() {
      return this.pgtxt_translation;
    },
    cpgtxt_save: function cpgtxt_save() {
      return this.pgtxt_save;
    },
    cpgtxt_preview: function cpgtxt_preview() {
      return this.pgtxt_preview;
    },
    cpgtxt_release: function cpgtxt_release() {
      return this.pgtxt_release;
    },
    cpgtxt_korean: function cpgtxt_korean() {
      return this.pgtxt_korean;
    },
    cpgtxt_chinese: function cpgtxt_chinese() {
      return this.pgtxt_chinese;
    },
    cpgtxt_english: function cpgtxt_english() {
      return this.pgtxt_english;
    },
    cpgtxt_setting: function cpgtxt_setting() {
      return this.pgtxt_setting;
    },
    cpgtxt_nosavenoappear: function cpgtxt_nosavenoappear() {
      return this.pgtxt_nosavenoappear;
    },
    cpgtxt_icon: function cpgtxt_icon() {
      return this.pgtxt_icon;
    },
    cpgtxt_hover: function cpgtxt_hover() {
      return this.pgtxt_hover;
    },
    cpgtxt_choose: function cpgtxt_choose() {
      return this.pgtxt_choose;
    },
    cpgtxt_set: function cpgtxt_set() {
      return this.pgtxt_set;
    },
    cpgtxt_image: function cpgtxt_image() {
      return this.pgtxt_image;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_savechanges: function cbtntxt_savechanges() {
      return this.btntxt_savechanges;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_character: function cpgtxt_character() {
      return this.pgtxt_character;
    },
    cpgtxt_please: function cpgtxt_please() {
      return this.pgtxt_please;
    },
    cpgtxt_select: function cpgtxt_select() {
      return this.pgtxt_select;
    },
    cpgtxt_social: function cpgtxt_social() {
      return this.pgtxt_social;
    },
    cpgtxt_link: function cpgtxt_link() {
      return this.pgtxt_link;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_language: function cpgtxt_language() {
      return this.pgtxt_language;
    },
    cpgtxt_error: function cpgtxt_error() {
      return this.pgtxt_error;
    },
    cpgtxt_format: function cpgtxt_format() {
      return this.pgtxt_format;
    },
    cpgtxt_capacity: function cpgtxt_capacity() {
      return this.pgtxt_capacity;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
    },
    cpgtxt_previewpage: function cpgtxt_previewpage() {
      return this.pgtxt_previewpage;
    },
    cpgtxt_releasesuccess: function cpgtxt_releasesuccess() {
      return this.pgtxt_releasesuccess;
    },
    cpgtxt_selectlanguage: function cpgtxt_selectlanguage() {
      return this.pgtxt_selectlanguage;
    },
    cpgtxt_notpermission: function cpgtxt_notpermission() {
      return this.pgtxt_notpermission;
    },
    cpgtxt_notification: function cpgtxt_notification() {
      return this.pgtxt_notification;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  methods: {
    /* fav part */
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list != null && list != '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
    },
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getWWGStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          var stored_langs = response.data.langlist;

          if (stored_langs != '') {
            stored_langs = $.parseJSON(stored_langs);
            var tags = '';

            for (var j = 0; j < stored_langs.length; j++) {
              var obj = stored_langs[j];
              var iso = obj.iso;
              var dialCode = obj.dialcode;
              var cname = obj.name;
              var status = obj.status;
              var dcont = iso + '-' + dialCode + '-' + cname; //var contyTname = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'contyTname');

              if (status == 'enable') tags += '<span class="page1_translate_span" style="cursor: pointer" data-cont="' + dcont + '">' + cname + '</span>&nbsp;&nbsp;&nbsp;';
            }

            $('#translanglist').html(tags);
            $('.page1_translate_span').click(function () {
              $('.page1_translate_span').removeClass('active');
              $(this).addClass('active');
              var cont = $(this).attr('data-cont');
              var len = cont.split('-').length;

              if (len > 0) {
                var sky = cont.split('-')[0] + '-' + cont.split('-')[1];
                transedlang = sky;
                $('.page1_alarm_bar').removeClass('active');
                $('.page1_alarm_bar span').text('No Save No Appear');
                $('#transedlang').val(transedlang);
                getSocialSettingPage();
              }
            });
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loaddata: function loaddata() {
      getSocialSettingPage();
      getSocialSettingEvent();

      if (transedlang != null && transedlang != '') {
        $('.page1_alarm_bar').removeClass('active');
        $('.page1_alarm_bar span').text('No Save No Appear');
      }
    },
    SavePageContent: function SavePageContent() {
      if (permss.pwrite == 1) {
        if (transedlang == '') {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguagesave');
          return;
        }

        var pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
        var formData = new FormData($("#social_setting_panel_frm")[0]);
        $.ajax({
          url: 'admin.saveSocialSettingPage',
          type: 'POST',
          data: formData,
          async: false,
          success: function success(data) {
            if (data.msg == "ok") {
              alert(pgtxt_dbsaved);
            } else alert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          },
          cache: false,
          contentType: false,
          processData: false
        });
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    },
    PagePreview: function PagePreview() {
      $("#previewModalModalbody").html('');
      var iframeH = $(window).height() - 100;
      var lang = "";
      if (transedlang == '') lang = "en";else lang = transedlang.split("-")[0];
      $("#previewModalModalbody").html('<iframe src="/' + lang + '/preview" style="border:none;width:100%; height: ' + iframeH + 'px;" title="preview"></iframe>');
      $("#previewModal").modal('show');
    },
    PageRelease: function PageRelease() {
      if (permss.pwrite == 1) {
        if (transedlang == '') {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguagesave');
          return;
        }

        var pgtxt_releasesuccess = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
        var pgtxt_release = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');

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
            success: function success(data) {
              if (data.msg == "ok") {
                alert(pgtxt_releasesuccess);
              } else alert(data.msg);
            },
            error: function error(jqXHR, errdata, errorThrown) {
              console.log(errdata);
            }
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
            success: function success(data) {},
            error: function error(jqXHR, errdata, errorThrown) {
              console.log(errdata);
            }
          });
        }
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    },
    setSocialSettingCondition: function setSocialSettingCondition() {
      if (style_1 != "" && setting_index == 1) {
        $('#icon_cond').val(style_1.id);
        $('#sliderimage_dlg_list').html('');
        $("#iconSettingModal").modal('hide');
        $('#selected_icon_name').text(style_1.name);
      }

      if (style_2 != "" && setting_index == 2) {
        $('#hover_cond').val(style_2.id);
        $('#sliderimage_dlg_list').html('');
        $("#iconSettingModal").modal('hide');
        $('#selected_hover_name').text(style_2.name);
      }
    },
    ChooseDetailIcon: function ChooseDetailIcon() {
      $('#uploadicon_' + detail_id).trigger('click');
    },
    SaveDetailIcon: function SaveDetailIcon() {
      var formData = new FormData($("#social_setting_panel_frm")[0]);
      $.ajax({
        url: 'admin.setSocialSettingDetailIcon',
        type: 'POST',
        data: formData,
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            var id = data.id;
            var org_img = data.icon_name;
            var hover_img = data.hover_name;
            $('#seletedIconImage_' + id).attr("src", icon_path + org_img);
            $('#ifile_' + id).val(org_img);
            $('#hfile_' + id).val(hover_img);
            $('#ilink_' + id).val($('#detailchooseiconlink').val());
            $('#hlink_' + id).val($('#detailchoosehoverlink').val());
            $('#IconSettinPage').css("display", "block");
            $('#SocialSettingChoosePart').css("display", "block");
            $('#IconDetailSettinPage').css("display", "none");
            detail_id = 0;
          } else alert(data.msg);
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        },
        cache: false,
        contentType: false,
        processData: false
      });
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    height: auto;\n}\n#addpic_btn{\n    height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n.wwgss_chooseicons{\n    position: relative;\n    width: 80px;\n    height: 80px;\n    background: #f7f7f9;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    cursor: pointer;\n    border-radius: 5px;\n    padding: 20px;\n}\n.wwgss_chooseicons_add_txt{\n    position: absolute;\n    margin-top: -1rem;\n    margin-left: 0.5rem;\n}\n.wwgss_chooseicons_close_btn{\n    display:none;\n    position: absolute;\n    width:1rem;\n    margin-top: -6.3rem;\n    margin-left: 4.4rem;\n    cursor: pointer;\n}\n.seletedIconImage{\n    width: 40px;\n    height: 40px;\n}\n.seletedHoverImage{\n    display:none;\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    -webkit-box-shadow: 1px 1px 3px 3px #aaaaaa;\n            box-shadow: 1px 1px 3px 3px #aaaaaa;\n    left: 2.2rem;\n    top: -1rem;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=template&id=8c190062&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=template&id=8c190062& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c("div", { staticStyle: { display: "none" } }, [
      _vm._v(_vm._s(_vm.contentchange))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "page-header" }, [
      _c("div", { staticClass: "page-title" }, [
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_social_setting))]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n                   "),
          _c(
            "svg",
            {
              staticClass: "feather feather-home",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "1.2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }
            },
            [
              _c("path", {
                attrs: { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }
              }),
              _vm._v(" "),
              _c("polyline", { attrs: { points: "9 22 9 12 15 12 15 22" } })
            ]
          ),
          _vm._v(
            "\n                         " +
              _vm._s(_vm.cmu_webs) +
              "   >> " +
              _vm._s(_vm.cmusu_webs_wesglobal) +
              "   >>  " +
              _vm._s(_vm.cmususu_webs_wesglobal_social) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_social_setting) +
              "\n                      "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "page1_translate_bar" }, [
          _c("div", { staticClass: "page1_translate_text" }, [
            _vm._v(_vm._s(_vm.cpgtxt_translation))
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "page1_translate_bar_left",
            attrs: { id: "translanglist" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "page1_translate_bar_right" }, [
            _c(
              "span",
              {
                staticClass: "page1_translate_span_right cursor-pointer",
                attrs: { id: "wwgm_save" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.SavePageContent($event)
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "iconify",
                    staticStyle: {
                      "font-size": "24px",
                      transform: "rotate(360deg)"
                    },
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      focusable: "false",
                      width: "1em",
                      height: "1em",
                      preserveAspectRatio: "xMidYMid meet",
                      viewBox: "0 0 24 24",
                      "data-inline": "false",
                      "data-icon": "ic:sharp-save-alt"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z",
                        fill: "currentColor"
                      }
                    })
                  ]
                ),
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.cpgtxt_save) +
                    "\n                    "
                )
              ]
            ),
            _vm._v("   |   \n                    "),
            _c(
              "span",
              {
                staticClass: "page1_translate_span_right cursor-pointer",
                on: { click: _vm.PagePreview }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "iconify",
                    staticStyle: {
                      "font-size": "24px",
                      transform: "rotate(360deg)"
                    },
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      focusable: "false",
                      width: "1em",
                      height: "1em",
                      preserveAspectRatio: "xMidYMid meet",
                      viewBox: "0 0 24 24",
                      "data-inline": "false",
                      "data-icon": "ic:outline-preview"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z",
                        fill: "currentColor"
                      }
                    })
                  ]
                ),
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.cpgtxt_preview) +
                    "\n                    "
                )
              ]
            ),
            _vm._v("   |   \n                    "),
            _c(
              "span",
              {
                staticClass: "page1_translate_span_right cursor-pointer",
                on: { click: _vm.PageRelease }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "iconify",
                    staticStyle: {
                      "font-size": "24px",
                      transform: "rotate(360deg)"
                    },
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      focusable: "false",
                      width: "1em",
                      height: "1em",
                      preserveAspectRatio: "xMidYMid meet",
                      viewBox: "0 0 24 24",
                      "data-inline": "false",
                      "data-icon": "ic:outline-new-releases"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z",
                        fill: "currentColor"
                      }
                    })
                  ]
                ),
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.cpgtxt_release) +
                    "\n                    "
                )
              ]
            ),
            _vm._v("   \n                ")
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "page1_alarm_bar" }, [
          _c(
            "svg",
            {
              staticClass: "iconify",
              staticStyle: { "font-size": "24px", transform: "rotate(360deg)" },
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "aria-hidden": "true",
                focusable: "false",
                width: "1em",
                height: "1em",
                preserveAspectRatio: "xMidYMid meet",
                viewBox: "0 0 24 24",
                "data-inline": "false",
                "data-icon": "mi:circle-warning"
              }
            },
            [
              _c("g", { attrs: { fill: "none" } }, [
                _c("path", {
                  attrs: {
                    d:
                      "M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z",
                    fill: "currentColor"
                  }
                }),
                _c("path", {
                  attrs: {
                    d: "M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z",
                    fill: "currentColor"
                  }
                }),
                _c("path", {
                  attrs: {
                    d: "M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z",
                    fill: "currentColor"
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.cpgtxt_nosavenoappear))])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "socialsetting" }
        },
        [
          _c(
            "form",
            {
              attrs: {
                method: "post",
                enctype: "multipart/form-data",
                name: "social_setting_panel_frm",
                id: "social_setting_panel_frm"
              }
            },
            [
              _c("input", {
                attrs: {
                  type: "hidden",
                  name: "chooseIconId",
                  id: "chooseIconId",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  name: "icon_cond",
                  id: "icon_cond",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  name: "hover_cond",
                  id: "hover_cond",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  name: "transedlang",
                  id: "transedlang",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  name: "condId",
                  id: "condId",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "page1_content_content_bar" }, [
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_setting))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "page1_content_content page2_content_text",
                    attrs: { id: "IconSettinPage" }
                  },
                  [
                    _c("div", { staticClass: "row page2_row" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_icon) +
                              " " +
                              _vm._s(_vm.cpgtxt_image)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn page1_custom_btn",
                            staticStyle: {
                              height: "40px",
                              "border-radius": "20px",
                              padding: "0 30px",
                              "margin-right": "15px"
                            },
                            attrs: { type: "button", id: "settingbtn_1" }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                                "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_hover) +
                              " " +
                              _vm._s(_vm.cpgtxt_image)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn page1_custom_btn",
                            staticStyle: {
                              height: "40px",
                              "border-radius": "20px",
                              padding: "0 30px",
                              "margin-right": "15px"
                            },
                            attrs: { type: "button", id: "settingbtn_2" }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                                "
                            )
                          ]
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "page1_content_content page2_content_text",
                    attrs: { id: "IconDetailSettinPage" }
                  },
                  [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-2",
                          staticStyle: {
                            display: "flex",
                            "align-items": "center"
                          }
                        },
                        [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.cpgtxt_social) +
                                " " +
                                _vm._s(_vm.cpgtxt_icon)
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(6),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: {
                            display: "flex",
                            "align-items": "center"
                          }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info",
                              staticStyle: {
                                background: "#5c6bc0 !important",
                                "border-color": "#5c6bc0 !important",
                                "border-radius": "6px !important",
                                padding: "7px 14px"
                              },
                              attrs: { type: "button" },
                              on: { click: _vm.ChooseDetailIcon }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_choose) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_icon)
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row page2_row",
                        staticStyle: { "margin-bottom": "15px" }
                      },
                      [
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.cpgtxt_icon) +
                                " " +
                                _vm._s(_vm.cpgtxt_link)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(7)
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row page2_row",
                        staticStyle: { "margin-bottom": "15px" }
                      },
                      [
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.cpgtxt_hover) +
                                " " +
                                _vm._s(_vm.cpgtxt_title)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(8)
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row page2_row",
                        staticStyle: { "margin-bottom": "15px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-md-2",
                            staticStyle: {
                              display: "flex",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_hover) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_image)
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(9)
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: {
                            display: "flex",
                            "align-items": "center"
                          }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info",
                              staticStyle: {
                                background: "#5c6bc0 !important",
                                "border-color": "#5c6bc0 !important",
                                "border-radius": "6px !important",
                                padding: "7px 14px"
                              },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.SaveDetailIcon($event)
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_save) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_icon)
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "page1_content_content_bar",
                  attrs: { id: "SocialSettingChoosePart" }
                },
                [
                  _c("div", { staticClass: "page1_content_content_title" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.cpgtxt_choose) +
                        " " +
                        _vm._s(_vm.cpgtxt_icon) +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "page1_content_content page2_content_text",
                      attrs: { id: "chooseicon-container" }
                    },
                    [
                      _c("div", { staticClass: "row page2_row" }, [
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm._m(10),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass: "wwgss_chooseicons",
                                attrs: { id: "wwgsschooseicons_1" }
                              },
                              [
                                _c("img", {
                                  staticClass: "seletedIconImage",
                                  attrs: {
                                    src: "/images/wes_add_icon_btn.png",
                                    id: "seletedIconImage_1"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "wwgss_chooseicons_add_txt",
                                    attrs: { id: "addIcontext_1" }
                                  },
                                  [_vm._v(_vm._s(_vm.cbtntxt_add))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "seletedHoverImage",
                              attrs: { src: "", id: "seletedHoverImage_1" }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "wwgss_chooseicons_close_btn",
                              attrs: {
                                src: "/images/wes_close_icon_btn.png",
                                id: "closeIconImage_1"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm._m(11),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass: "wwgss_chooseicons",
                                attrs: { id: "wwgsschooseicons_2" }
                              },
                              [
                                _c("img", {
                                  staticClass: "seletedIconImage",
                                  attrs: {
                                    src: "/images/wes_add_icon_btn.png",
                                    id: "seletedIconImage_2"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "wwgss_chooseicons_add_txt",
                                    attrs: { id: "addIcontext_2" }
                                  },
                                  [_vm._v(_vm._s(_vm.cbtntxt_add))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "seletedHoverImage",
                              attrs: { src: "", id: "seletedHoverImage_2" }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "wwgss_chooseicons_close_btn",
                              attrs: {
                                src: "/images/wes_close_icon_btn.png",
                                id: "closeIconImage_2"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm._m(12),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass: "wwgss_chooseicons",
                                attrs: { id: "wwgsschooseicons_3" }
                              },
                              [
                                _c("img", {
                                  staticClass: "seletedIconImage",
                                  attrs: {
                                    src: "/images/wes_add_icon_btn.png",
                                    id: "seletedIconImage_3"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "wwgss_chooseicons_add_txt",
                                    attrs: { id: "addIcontext_3" }
                                  },
                                  [_vm._v(_vm._s(_vm.cbtntxt_add))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "seletedHoverImage",
                              attrs: { src: "", id: "seletedHoverImage_3" }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "wwgss_chooseicons_close_btn",
                              attrs: {
                                src: "/images/wes_close_icon_btn.png",
                                id: "closeIconImage_3"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm._m(13),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass: "wwgss_chooseicons",
                                attrs: { id: "wwgsschooseicons_4" }
                              },
                              [
                                _c("img", {
                                  staticClass: "seletedIconImage",
                                  attrs: {
                                    src: "/images/wes_add_icon_btn.png",
                                    id: "seletedIconImage_4"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "wwgss_chooseicons_add_txt",
                                    attrs: { id: "addIcontext_4" }
                                  },
                                  [_vm._v(_vm._s(_vm.cbtntxt_add))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "seletedHoverImage",
                              attrs: { src: "", id: "seletedHoverImage_4" }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "wwgss_chooseicons_close_btn",
                              attrs: {
                                src: "/images/wes_close_icon_btn.png",
                                id: "closeIconImage_4"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row page2_row" }, [
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm._m(14),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass: "wwgss_chooseicons",
                                attrs: { id: "wwgsschooseicons_5" }
                              },
                              [
                                _c("img", {
                                  staticClass: "seletedIconImage",
                                  attrs: {
                                    src: "/images/wes_add_icon_btn.png",
                                    id: "seletedIconImage_5"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "wwgss_chooseicons_add_txt",
                                    attrs: { id: "addIcontext_5" }
                                  },
                                  [_vm._v(_vm._s(_vm.cbtntxt_add))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "seletedHoverImage",
                              attrs: { src: "", id: "seletedHoverImage_5" }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "wwgss_chooseicons_close_btn",
                              attrs: {
                                src: "/images/wes_close_icon_btn.png",
                                id: "closeIconImage_5"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm._m(15),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass: "wwgss_chooseicons",
                                attrs: { id: "wwgsschooseicons_6" }
                              },
                              [
                                _c("img", {
                                  staticClass: "seletedIconImage",
                                  attrs: {
                                    src: "/images/wes_add_icon_btn.png",
                                    id: "seletedIconImage_6"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "wwgss_chooseicons_add_txt",
                                    attrs: { id: "addIcontext_6" }
                                  },
                                  [_vm._v(_vm._s(_vm.cbtntxt_add))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "seletedHoverImage",
                              attrs: { src: "", id: "seletedHoverImage_6" }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "wwgss_chooseicons_close_btn",
                              attrs: {
                                src: "/images/wes_close_icon_btn.png",
                                id: "closeIconImage_6"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm._m(16),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass: "wwgss_chooseicons",
                                attrs: { id: "wwgsschooseicons_7" }
                              },
                              [
                                _c("img", {
                                  staticClass: "seletedIconImage",
                                  attrs: {
                                    src: "/images/wes_add_icon_btn.png",
                                    id: "seletedIconImage_7"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "wwgss_chooseicons_add_txt",
                                    attrs: { id: "addIcontext_7" }
                                  },
                                  [_vm._v(_vm._s(_vm.cbtntxt_add))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "seletedHoverImage",
                              attrs: { src: "", id: "seletedHoverImage_7" }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "wwgss_chooseicons_close_btn",
                              attrs: {
                                src: "/images/wes_close_icon_btn.png",
                                id: "closeIconImage_7"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _vm._m(17),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass: "wwgss_chooseicons",
                                attrs: { id: "wwgsschooseicons_8" }
                              },
                              [
                                _c("img", {
                                  staticClass: "seletedIconImage",
                                  attrs: {
                                    src: "/images/wes_add_icon_btn.png",
                                    id: "seletedIconImage_8"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "wwgss_chooseicons_add_txt",
                                    attrs: { id: "addIcontext_8" }
                                  },
                                  [_vm._v(_vm._s(_vm.cbtntxt_add))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "seletedHoverImage",
                              attrs: { src: "", id: "seletedHoverImage_8" }
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "wwgss_chooseicons_close_btn",
                              attrs: {
                                src: "/images/wes_close_icon_btn.png",
                                id: "closeIconImage_8"
                              }
                            })
                          ])
                        ])
                      ])
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "iconSettingModal" } },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered modal-sm",
            staticStyle: { "min-width": "500px!important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h4",
                  {
                    staticClass: "modal-title",
                    staticStyle: { color: "#055ada", "font-size": "16px" }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cpgtxt_character) +
                        " " +
                        _vm._s(_vm.cpgtxt_set)
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("×")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-body",
                  staticStyle: { padding: "0 1.5rem 1.5rem 1.5rem" },
                  attrs: { id: "iconSettingModalbody" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "panel",
                      staticStyle: { display: "block" },
                      attrs: { id: "tab4" }
                    },
                    [
                      _c("form", { attrs: { id: "slider-image-form" } }, [
                        _vm._m(18),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _c(
                              "div",
                              {
                                staticClass: "bottom",
                                staticStyle: {
                                  "text-align": "center",
                                  "padding-top": "0px"
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-info",
                                    staticStyle: {
                                      background: "#5c6bc0 !important",
                                      "border-color": "#5c6bc0 !important",
                                      "border-radius": "1.8rem !important",
                                      padding: "10px 20px"
                                    },
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.setSocialSettingCondition()
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.cbtntxt_savechanges))]
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "previewModal", role: "dialog" }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-sm",
            staticStyle: { "min-width": "95%!important" }
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-content",
                staticStyle: { "border-radius": "0" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "modal-header",
                    staticStyle: { height: "25px", padding: "0 5px" }
                  },
                  [
                    _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        staticStyle: {
                          color: "#242424",
                          "font-size": "15px",
                          margin: "0 auto"
                        }
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_previewpage))]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        staticStyle: {
                          width: "18px",
                          height: "18px",
                          padding: "0"
                        },
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("×")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "modal-body",
                  staticStyle: { padding: "0" },
                  attrs: { id: "previewModalModalbody" }
                })
              ]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          href: "#",
          id: "webs-wesglobal-social-setting-fav",
          "data-status": "off",
          "data-page-info": "Setting_webs-wesglobal-social-setting"
        }
      },
      [
        _vm._v("\n                       "),
        _c("img", {
          staticClass: "iconsimg",
          attrs: {
            src: "/images/icons/star_e.png",
            width: "16",
            height: "16",
            onerror: "this.src ='/images/noimg.png';"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "settingiconpre",
          id: "settingiconpre",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "settingicon",
          id: "settingicon",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("span", {
        staticStyle: { color: "#5c6bc0", "font-size": "16px" },
        attrs: { id: "selected_icon_name" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "settinghoverpre",
          id: "settinghoverpre",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "settinghover",
          id: "settinghover",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("span", {
        staticStyle: { color: "#5c6bc0", "font-size": "16px" },
        attrs: { id: "selected_hover_name" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "file-detailhoverpre",
          id: "file-detailhoverpre",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "file-detailhover",
          id: "file-detailhover",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c(
        "div",
        { staticClass: "wwgss_chooseicons", staticStyle: { cursor: "auto" } },
        [
          _c("img", {
            staticClass: "seletedIconImage",
            attrs: { src: "", id: "detailSettingIconImage" }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("input", {
        staticClass: "page2_input",
        staticStyle: { "border-radius": "10px", "background-color": "#f4f4f4" },
        attrs: {
          type: "text",
          value: "",
          name: "detailchooseiconlink",
          id: "detailchooseiconlink"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("input", {
        staticClass: "page2_input",
        staticStyle: { "border-radius": "10px", "background-color": "#f4f4f4" },
        attrs: {
          type: "text",
          value: "",
          name: "detailchoosehoverlink",
          id: "detailchoosehoverlink"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c(
        "div",
        {
          staticClass: "wwgss_chooseicons",
          attrs: { id: "seletedHoverImageBtn" }
        },
        [
          _c("img", {
            staticClass: "seletedIconImage",
            attrs: {
              src: "/images/wes_add_camera_btn.png",
              id: "detailSettingHoverImage"
            }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "uploadiconpre_1",
          id: "uploadiconpre_1",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "hidden",
          name: "iconIndex_1",
          id: "iconIndex_1",
          value: "0"
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "uploadicon_1",
          id: "uploadicon_1",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ifile_1", id: "ifile_1", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hfile_1", id: "hfile_1", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ilink_1", id: "ilink_1", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hlink_1", id: "hlink_1", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "uploadiconpre_2",
          id: "uploadiconpre_2",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "hidden",
          name: "iconIndex_2",
          id: "iconIndex_2",
          value: "0"
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "uploadicon_2",
          id: "uploadicon_2",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ifile_2", id: "ifile_2", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hfile_2", id: "hfile_2", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ilink_2", id: "ilink_2", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hlink_2", id: "hlink_2", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "uploadiconpre_3",
          id: "uploadiconpre_3",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "hidden",
          name: "iconIndex_3",
          id: "iconIndex_3",
          value: "0"
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "uploadicon_3",
          id: "uploadicon_3",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ifile_3", id: "ifile_3", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hfile_3", id: "hfile_3", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ilink_3", id: "ilink_3", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hlink_3", id: "hlink_3", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "uploadiconpre_4",
          id: "uploadiconpre_4",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "hidden",
          name: "iconIndex_4",
          id: "iconIndex_4",
          value: "0"
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "uploadicon_4",
          id: "uploadicon_4",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ifile_4", id: "ifile_4", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hfile_4", id: "hfile_4", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ilink_4", id: "ilink_4", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hlink_4", id: "hlink_4", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "uploadiconpre_5",
          id: "uploadiconpre_5",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "hidden",
          name: "iconIndex_5",
          id: "iconIndex_5",
          value: "0"
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "uploadicon_5",
          id: "uploadicon_5",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ifile_5", id: "ifile_5", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hfile_5", id: "hfile_5", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ilink_5", id: "ilink_5", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hlink_5", id: "hlink_5", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "uploadiconpre_6",
          id: "uploadiconpre_6",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "hidden",
          name: "iconIndex_6",
          id: "iconIndex_6",
          value: "0"
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "uploadicon_6",
          id: "uploadicon_6",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ifile_6", id: "ifile_6", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hfile_6", id: "hfile_6", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ilink_6", id: "ilink_6", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hlink_6", id: "hlink_6", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "uploadiconpre_7",
          id: "uploadiconpre_7",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "hidden",
          name: "iconIndex_7",
          id: "iconIndex_7",
          value: "0"
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "uploadicon_7",
          id: "uploadicon_7",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ifile_7", id: "ifile_7", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hfile_7", id: "hfile_7", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ilink_7", id: "ilink_7", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hlink_7", id: "hlink_7", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "uploadiconpre_8",
          id: "uploadiconpre_8",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "hidden",
          name: "iconIndex_8",
          id: "iconIndex_8",
          value: "0"
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: {
          type: "file",
          name: "uploadicon_8",
          id: "uploadicon_8",
          value: ""
        }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ifile_8", id: "ifile_8", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hfile_8", id: "hfile_8", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "ilink_8", id: "ilink_8", value: "" }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "hlink_8", id: "hlink_8", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row", staticStyle: { padding: "10px" } }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          {
            staticClass: "table-responsive",
            staticStyle: {
              "max-height": "300px",
              "overflow-y": "auto",
              "min-height": "100px"
            }
          },
          [
            _c(
              "table",
              {
                staticClass: "table table-lg  no-footer",
                attrs: {
                  id: "slider-image-table",
                  role: "grid",
                  "aria-describedby": "slider-image_info"
                }
              },
              [_c("tbody", { attrs: { id: "sliderimage_dlg_list" } })]
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue":
/*!********************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalSocialSetting_vue_vue_type_template_id_8c190062___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalSocialSetting.vue?vue&type=template&id=8c190062& */ "./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=template&id=8c190062&");
/* harmony import */ var _WebsWesGlobalSocialSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalSocialSetting.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalSocialSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalSocialSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalSocialSetting_vue_vue_type_template_id_8c190062___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalSocialSetting_vue_vue_type_template_id_8c190062___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalSocialSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=template&id=8c190062&":
/*!***************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=template&id=8c190062& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_template_id_8c190062___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalSocialSetting.vue?vue&type=template&id=8c190062& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalSocialSetting.vue?vue&type=template&id=8c190062&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_template_id_8c190062___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalSocialSetting_vue_vue_type_template_id_8c190062___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);