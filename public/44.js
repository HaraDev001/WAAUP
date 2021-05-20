(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/jsfunc/media_module */ "./resources/vuedir/assets/jsfunc/media_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var permss;
var preview = '';
var tabstatus = 0;
var vueOBJ = null;
var wwgfield = 'sliderbar';
var transedlang = '';
var pgtxt_selectlanguagesave = "";

function sliderPanelInit(jslists) {
  $('#picture-container').html('');
  if (jslists == '') return;
  var lists = $.parseJSON(jslists);
  var isarray = false;

  if (lists instanceof Array) {
    isarray = true;
  }

  var tags = '';
  var pgtxt_Name = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
  var pgtxt_Image = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_image');
  var btntxt_Edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
  var btntxt_Delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  var pgtxt_Link = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
  var pgtxt_error = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_error');
  var pgtxt_size = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_size');
  var pgtxt_format = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_format');
  var pgtxt_capacity = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_capacity');

  if (isarray) {
    for (var i = 0; i < lists.length; i++) {
      var item = lists[i];
      var fname = item.fname;
      var link = item.link;
      var name = item.name;
      var id = 'id_' + i;
      var border = '';
      if (i > 0) border = ' style="border-top: 1px solid #dbd7d7;"';
      tags += '<div class="page1_content_content page2_content_text" ' + border + '>';
      tags += '<div class="row page2_row">';
      tags += ' <div class="col-md-2">';
      tags += '<span class="data-ajax" data-ajax="pgtxt_name">' + pgtxt_Name + '</span>';
      tags += ' </div>';
      tags += '<div class="col-md-3">';
      tags += ' <input type="text" name="pic_name_' + id + '" id="pic_name_' + id + '"  value="' + name + '" class="page2_input">';
      tags += ' </div>';
      tags += '<div class="col-md-3">';
      tags += ' <span class="data-ajax" id="sizeerror_' + id + '" data-ajax="pgtxt_error,pgtxt_size" style="color: red; display: none;">' + pgtxt_error + ' ' + pgtxt_size + '</span>';
      tags += ' <span class="data-ajax" id="formaterror_' + id + '" data-ajax="pgtxt_error,pgtxt_format" style="color: red; display: none;">' + pgtxt_error + ' ' + pgtxt_format + '</span>';
      tags += ' <span class="data-ajax" id="capacityerror_' + id + '" data-ajax="pgtxt_error,pgtxt_capacity" style="color: red; display: none;">' + pgtxt_error + ' ' + pgtxt_capacity + '</span>';
      tags += ' </div>';
      tags += ' </div>';
      tags += '<div class="row page2_row">';
      tags += ' <div class="col-md-2">';
      tags += ' <span class="data-ajax" data-ajax="pgtxt_image">' + pgtxt_Image + '</span>';
      tags += ' </div>';
      tags += ' <div class="col-md-3">';
      tags += ' <input type="hidden" name="new_image_file_' + id + '" id="' + id + '">';
      tags += ' <img src="' + fname + '" style="width: 100px;" id="' + id + 'preview" onerror="this.src =\'/images/noimg.png\';">';
      tags += ' </div>';
      tags += ' <div class="col-md-2">';
      tags += ' <button type="button" class="btn page1_custom_btn panelEditBtn data-ajax"  data-ajax="btntxt_edit" data-fname="' + fname + '" data-name="' + name + '" data-link="' + link + '" data-id="' + id + '" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;min-width: 90px;">';
      tags += btntxt_Edit;
      tags += ' </button>';
      tags += ' </div>';
      tags += ' <div class="col-md-2">';
      tags += ' <button type="button" class="btn page1_custom_btn panelDelBtn data-ajax" data-ajax="btntxt_delete" data-fname="' + fname + '" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;min-width: 90px;">';
      tags += btntxt_Delete;
      tags += ' </button>';
      tags += ' </div>';
      tags += ' </div>';
      tags += '<div class="row page2_row">';
      tags += ' <div class="col-md-2">';
      tags += ' <span class="data-ajax" data-ajax="pgtxt_link">' + pgtxt_Link + '</span>';
      tags += ' </div>';
      tags += ' <div class="col-md-3">';
      tags += ' <input type="text" value="' + link + '" name="pic_link_' + id + '" id="pic_link_' + id + '"  class="page2_input">';
      tags += ' </div>';
      tags += '</div>';
      tags += '</div>';
    }
  } else {
    var fname = lists.fname;
    var link = lists.link;
    var name = lists.name;
    var id = 'id_0';
    var border = '';
    tags += '<div class="page1_content_content page2_content_text" ' + border + '>';
    tags += '<div class="row page2_row">';
    tags += ' <div class="col-md-2">';
    tags += '<span class="data-ajax" data-ajax="pgtxt_name">' + pgtxt_Name + '</span>';
    tags += ' </div>';
    tags += '<div class="col-md-3">';
    tags += ' <input type="text" name="pic_name_' + id + '" id="pic_name_' + id + '" value="' + name + '" class="page2_input">';
    tags += ' </div>';
    tags += '<div class="col-md-3">';
    tags += ' <span class="data-ajax" id="sizeerror_' + id + '" data-ajax="pgtxt_error,pgtxt_size" style="color: red; display: none;">' + pgtxt_error + ' ' + pgtxt_size + '</span>';
    tags += ' <span class="data-ajax" id="formaterror_' + id + '" data-ajax="pgtxt_error,pgtxt_format" style="color: red; display: none;">' + pgtxt_error + ' ' + pgtxt_format + '</span>';
    tags += ' <span class="data-ajax" id="capacityerror_' + id + '" data-ajax="pgtxt_error,pgtxt_capacity" style="color: red; display: none;">' + pgtxt_error + ' ' + pgtxt_capacity + '</span>';
    tags += ' </div>';
    tags += ' </div>';
    tags += '<div class="row page2_row">';
    tags += ' <div class="col-md-2">';
    tags += ' <span class="data-ajax" data-ajax="pgtxt_image">' + pgtxt_Image + '</span>';
    tags += ' </div>';
    tags += ' <div class="col-md-3">';
    tags += ' <input type="hidden" name="new_image_file_' + id + '" id="' + id + '">';
    tags += ' <img src="' + fname + '" style="width: 100px;" id="' + id + 'preview" onerror="this.src =\'/images/noimg.png\';">';
    tags += ' </div>';
    tags += ' <div class="col-md-2">';
    tags += ' <button type="button" class="btn page1_custom_btn panelEditBtn data-ajax"  data-ajax="btntxt_edit" data-fname="' + fname + '" data-name="' + name + '" data-link="' + link + '" data-id="' + id + '" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">';
    tags += btntxt_Edit;
    tags += ' </button>';
    tags += ' </div>';
    tags += ' <div class="col-md-2">';
    tags += ' <button type="button" class="btn page1_custom_btn panelDelBtn data-ajax" data-ajax="btntxt_delete" data-fname="' + fname + '" style="height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;">';
    tags += btntxt_Delete;
    tags += ' </button>';
    tags += ' </div>';
    tags += ' </div>';
    tags += '<div class="row page2_row">';
    tags += ' <div class="col-md-2">';
    tags += ' <span class="data-ajax" data-ajax="pgtxt_link">' + pgtxt_Link + '</span>';
    tags += ' </div>';
    tags += ' <div class="col-md-3">';
    tags += ' <input type="text" value="' + link + '"  name="pic_link_' + id + '" id="pic_link_' + id + '"   class="page2_input">';
    tags += ' </div>';
    tags += '</div>';
    tags += '</div>';
  }

  $('#picture-container').html(tags);
  $('.panelEditBtn').click(function () {
    if (permss.pwrite == 1) {
      if (transedlang == '') {
        alert('Please Select translate language!');
        return;
      }

      if ($('#selected_image_name').text() == '') {
        alert('Please select Slider Image!');
        return;
      }

      var oldname = $(this).attr('data-fname'); //var name = $(this).attr('data-name');
      //var link = $(this).attr('data-link');

      var id = $(this).attr('data-id');
      var name = $('#pic_name_' + id).val();
      var link = $('#pic_link_' + id).val();
      var value = name + '||' + link;
      preview = id + 'preview';
      $('.Media_directory_files').html("");
      $('#Media_Modal_Search_Text').val("");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID(preview, id, true, 'admin.wwgpChangesliderupload', id, transedlang, 'waaupglobal', 'tb_frontpages', 'pageslider', value);
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#MediaDirectoryModal').modal('show');
      $('#oldfilename').val(oldname);
      $('#sliderUploadId').val(id);
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
  $('.panelDelBtn').click(function () {
    if (permss.pdelete == 1) {
      var oldname = $(this).attr('data-fname');
      if (oldname == '') return;

      if (transedlang == '') {
        alert('Please Select translate language!');
        return;
      }

      $.ajax({
        url: 'admin.delwwgpsliderlist',
        type: 'POST',
        data: {
          tansLang: transedlang,
          delname: oldname
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            if (data.list == '') $('#picture-container').html('');else sliderPanelInit(data.list);
          } else alert(data.msg);
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
}

function sliderStatusInit(jsonstr) {
  if (jsonstr == '') {
    $('#slider_navication').val(1);
    $('#slider_playtime').val(1);
    $('#slider_sliding_time').val(3000);
    $('#slider_sliding_dir').val(1);
  } else {
    var status = $.parseJSON(jsonstr);
    $('#slider_navication').val(status.n);
    $('#slider_playtime').val(status.p);
    $('#slider_sliding_time').val(status.t);
    $('#slider_sliding_dir').val(status.d);
  }
}

function getSliderList() {
  //alert('tl:'+transedlang+' fd:'+wwgfield);
  $.ajax({
    url: 'admin.getwwgpsliderlist',
    type: 'POST',
    data: {
      tansLang: transedlang,
      wwgfield: wwgfield
    },
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        sliderPanelInit(data.list);
        sliderStatusInit(data.sliderstatus);

        if (data.condition != null && data.condition != "") {
          selected_image_size = data.condition.size;
          selected_image_name = data.condition.name;
          $('#filesize').val(selected_image_size);
          var capacity = data.condition.capacity === null ? "" : data.condition.capacity + '(KB)';
          var imgtype = data.condition.imgtype === null ? "" : data.condition.imgtype;

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

          $('#fileformat').val(imgtype);
          $('#filecapacity').val(capacity);
          $('#image_size').text(selected_image_size + 'px');
          $('#selected_image_name').text(selected_image_name);
        } else {
          selected_image_size = "";
          selected_image_name = "";
          $('#filesize').val('');
          $('#fileformat').val('');
          $('#filecapacity').val('');
          $('#image_size').text('');
          $('#selected_image_name').text('');
        }

        if (transedlang != null && transedlang != '') {
          if (data.list != '') {
            $('.page1_alarm_bar').addClass('active');
            $('.page1_alarm_bar span').text('Save  Appear');
          }
        }
      } else alert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

var selected_image_name = "";
var selected_image_size = "";
var selected_id = "";

function initTeacher() {
  $('#slider_image_upbtn').click(function () {
    if (permss.pwrite == 1) {
      var postData = {
        start: 1,
        cnt: 10,
        // han 2020-10-21
        filter: 0 // han 2020-10-21

      };
      var pgtxt_name = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
      var pgtxt_size = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_size');
      var pgtxt_capacity = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_capacity');
      var pgtxt_format = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_format');
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
            selected_image_size = $(this).data("size");
            $('#selCondition').val(id);
            $('#filesize').val($(this).data("size"));
            $('#fileformat').val($(this).data("format"));
            $('#filecapacity').val($(this).data("capacity"));
            temp_id = id;
            selected_id = id; //alert(imagename);
          });
        } else {
          console.log(response.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
      });
      $("#sliderModal").modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
  $('#teach_file_1_upbtn').click(function () {
    if (permss.pwrite == 1) {
      $('.Media_directory_files').html("");
      $('#Media_Modal_Search_Text').val("");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID('teach_file_1_preview', 'teach_file_1_pre');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#MediaDirectoryModal').modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
  $('#teach_file_2_upbtn').click(function () {
    if (permss.pwrite == 1) {
      $('.Media_directory_files').html("");
      $('#Media_Modal_Search_Text').val("");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID('teach_file_2_preview', 'teach_file_2_pre');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#MediaDirectoryModal').modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
  $('#teach_file_3_upbtn').click(function () {
    if (permss.pwrite == 1) {
      $('.Media_directory_files').html("");
      $('#Media_Modal_Search_Text').val("");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID('teach_file_3_preview', 'teach_file_3_pre');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#MediaDirectoryModal').modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
}

function initStudent() {
  $('#stud_file_1_upbtn').click(function () {
    if (permss.pwrite == 1) {
      $('.Media_directory_files').html("");
      $('#Media_Modal_Search_Text').val("");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID('stud_file_1_preview', 'stud_file_1_pre');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#MediaDirectoryModal').modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
  $('#stud_file_2_upbtn').click(function () {
    if (permss.pwrite == 1) {
      $('.Media_directory_files').html("");
      $('#Media_Modal_Search_Text').val("");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID('stud_file_2_preview', 'stud_file_2_pre');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#MediaDirectoryModal').modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
  $('#stud_file_3_upbtn').click(function () {
    if (permss.pwrite == 1) {
      $('.Media_directory_files').html("");
      $('#Media_Modal_Search_Text').val("");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID('stud_file_3_preview', 'stud_file_3_pre');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#MediaDirectoryModal').modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
}

function getTeacherData() {
  $.ajax({
    url: 'admin.getwwgpTeachData',
    data: {
      transLang: transedlang
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        if (data.list != '') {
          var dt = data.list;
          dt = $.parseJSON(dt);
          var t_1 = dt.t1;
          $('#teach_font1_tit').val(t_1.title);
          $('#teach_font1_cont').val(t_1.cont);
          $('#teach_font1_link').val(t_1.link);
          $('#teach_file_1_preview').attr('src', t_1.img);
          if (t_1.img != null && t_1.img != '') $('#teach_file_1_pre').val(t_1.img);
          var t_2 = dt.t2;
          $('#teach_font2_tit').val(t_2.title);
          $('#teach_font2_cont').val(t_2.cont);
          $('#teach_font2_link').val(t_2.link);
          $('#teach_file_2_preview').attr('src', t_2.img);
          if (t_2.img != null && t_2.img != '') $('#teach_file_2_pre').val(t_2.img);
          var t_3 = dt.t3;
          $('#teach_font3_tit').val(t_3.title);
          $('#teach_font3_cont').val(t_3.cont);
          $('#teach_font3_link').val(t_3.link);
          $('#teach_file_3_preview').attr('src', t_3.img);
          if (t_3.img != null && t_3.img != '') $('#teach_file_3_pre').val(t_3.img);

          if (transedlang != null && transedlang != '') {
            $('.page1_alarm_bar').addClass('active');
            $('.page1_alarm_bar span').text('Save  Appear');
          }
        }
      } else alert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function getStudentData() {
  $.ajax({
    url: 'admin.getwwgpStudData',
    data: {
      transLang: transedlang
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        if (data.list != '') {
          var dt = data.list;
          dt = $.parseJSON(dt);
          var t_1 = dt.t1;
          $('#stud_font1_tit').val(t_1.title);
          $('#stud_font1_cont').val(t_1.cont);
          $('#stud_font1_link').val(t_1.link);
          $('#stud_file_1_preview').attr('src', t_1.img);
          if (t_1.img != null && t_1.img != '') $('#stud_file_1_pre').val(t_1.img);
          var t_2 = dt.t2;
          $('#stud_font2_tit').val(t_2.title);
          $('#stud_font2_cont').val(t_2.cont);
          $('#stud_font2_link').val(t_2.link);
          $('#stud_file_2_preview').attr('src', t_2.img);
          if (t_2.img != null && t_2.img != '') $('#stud_file_2_pre').val(t_2.img);
          var t_3 = dt.t3;
          $('#stud_font3_tit').val(t_3.title);
          $('#stud_font3_cont').val(t_3.cont);
          $('#stud_font3_link').val(t_3.link);
          $('#stud_file_3_preview').attr('src', t_3.img);
          if (t_3.img != null && t_3.img != '') $('#stud_file_3_pre').val(t_3.img);

          if (transedlang != null && transedlang != '') {
            $('.page1_alarm_bar').addClass('active');
            $('.page1_alarm_bar span').text('Save  Appear');
          }
        }
      } else alert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function initAdvan() {
  $('#advan_file_upbtn').click(function () {
    if (permss.pwrite == 1) {
      $('.Media_directory_files').html("");
      $('#Media_Modal_Search_Text').val("");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID('advan_file_preview', 'advan_file_pre');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#MediaDirectoryModal').modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
}

function getAdvanData() {
  $.ajax({
    url: 'admin.getAdvanData',
    data: {
      transLang: transedlang
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        if (data.advan != '') {
          $('#advan_file_preview').attr('src', data.advan);
          $('#advan_file_pre').val(data.advan);

          if (transedlang != null && transedlang != '') {
            $('.page1_alarm_bar').addClass('active');
            $('.page1_alarm_bar span').text('Save  Appear');
          }
        }
      } else {
        alert(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalPagesIndex",

  /* components: {
       CKEditor
   },*/
  data: function data() {
    return {
      pageid: 'webs-wesglobal-pages-index-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_pages: '',
      musususu_webs_wesglobal_pages_index: '',
      pgtxt_translation: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_korean: '',
      pgtxt_chinese: '',
      pgtxt_english: '',
      pgtxt_nosavenoappear: '',
      pgtxt_slider: '',
      pgtxt_teacher: '',
      pgtxt_student: '',
      pgtxt_advanced: '',
      pgtxt_basicstring: '',
      pgtxt_css: '',
      pgtxt_bar: '',
      pgtxt_image: '',
      pgtxt_size: '',
      pgtxt_navigation: '',
      pgctl_dots: '',
      pgctl_blocked: '',
      pgtxt_pleaseenter: '',
      pgtxt_seconds: '',
      pgctl_fromrighttoleft: '',
      pgctl_fromlefttoright: '',
      pgtxt_picture: '',
      pgtxt_character: '',
      pgtxt_set: '',
      btntxt_edit: '',
      btntxt_savechanges: '',
      pgtxt_icon: '',
      pgtxt_font: '',
      pgtxt_title: '',
      pgtxt_link: '',
      pgtxt_content: '',
      pgtxt_background: '',
      pgtxt_slidingtime: '',
      pgtxt_createpicture: '',
      pgtxt_name: '',
      pgtxt_style: '',
      pgtxt_playingtime: '',
      btntxt_add: '',
      pgtxt_index: '',
      pgtxt_login: '',
      pgtxt_page: '',
      pgtxt_capacity: '',
      pgtxt_format: '',
      pgtxt_error: '',
      pgtxt_dbsaved: '',
      pgtxt_previewpage: '',
      pgtxt_releasesuccess: '',
      pgtxt_selectlanguagesave: '',
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
    this.initpage();
  },
  computed: {
    cmususu_webs_wesglobal_pages: function cmususu_webs_wesglobal_pages() {
      return this.mususu_webs_wesglobal_pages;
    },
    cmusususu_webs_wesglobal_pages_index: function cmusususu_webs_wesglobal_pages_index() {
      return this.musususu_webs_wesglobal_pages_index;
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
    cpgtxt_basicstring: function cpgtxt_basicstring() {
      return this.pgtxt_basicstring;
    },
    cpgtxt_nosavenoappear: function cpgtxt_nosavenoappear() {
      return this.pgtxt_nosavenoappear;
    },
    cpgtxt_slider: function cpgtxt_slider() {
      return this.pgtxt_slider;
    },
    cpgtxt_teacher: function cpgtxt_teacher() {
      return this.pgtxt_teacher;
    },
    cpgtxt_student: function cpgtxt_student() {
      return this.pgtxt_student;
    },
    cpgtxt_advanced: function cpgtxt_advanced() {
      return this.pgtxt_advanced;
    },
    cpgtxt_css: function cpgtxt_css() {
      return this.pgtxt_css;
    },
    cpgtxt_bar: function cpgtxt_bar() {
      return this.pgtxt_bar;
    },
    cpgtxt_playingtime: function cpgtxt_playingtime() {
      return this.pgtxt_playingtime;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_navigation: function cpgtxt_navigation() {
      return this.pgtxt_navigation;
    },
    cpgctl_dots: function cpgctl_dots() {
      return this.pgctl_dots;
    },
    cpgctl_blocked: function cpgctl_blocked() {
      return this.pgctl_blocked;
    },
    cpgtxt_pleaseenter: function cpgtxt_pleaseenter() {
      return this.pgtxt_pleaseenter;
    },
    cpgtxt_seconds: function cpgtxt_seconds() {
      return this.pgtxt_seconds;
    },
    cpgctl_fromrighttoleft: function cpgctl_fromrighttoleft() {
      return this.pgctl_fromrighttoleft;
    },
    cpgctl_fromlefttoright: function cpgctl_fromlefttoright() {
      return this.pgctl_fromlefttoright;
    },
    cpgtxt_picture: function cpgtxt_picture() {
      return this.pgtxt_picture;
    },
    cpgtxt_character: function cpgtxt_character() {
      return this.pgtxt_character;
    },
    cpgtxt_set: function cpgtxt_set() {
      return this.pgtxt_set;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_savechanges: function cbtntxt_savechanges() {
      return this.btntxt_savechanges;
    },
    cpgtxt_icon: function cpgtxt_icon() {
      return this.pgtxt_icon;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_link: function cpgtxt_link() {
      return this.pgtxt_link;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_background: function cpgtxt_background() {
      return this.pgtxt_background;
    },
    cpgtxt_image: function cpgtxt_image() {
      return this.pgtxt_image;
    },
    cpgtxt_createpicture: function cpgtxt_createpicture() {
      return this.pgtxt_createpicture;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_style: function cpgtxt_style() {
      return this.pgtxt_style;
    },
    cpgtxt_slidingtime: function cpgtxt_slidingtime() {
      return this.pgtxt_slidingtime;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_index: function cpgtxt_index() {
      return this.pgtxt_index;
    },
    cpgtxt_login: function cpgtxt_login() {
      return this.pgtxt_login;
    },
    cpgtxt_page: function cpgtxt_page() {
      return this.pgtxt_page;
    },
    cpgtxt_capacity: function cpgtxt_capacity() {
      return this.pgtxt_capacity;
    },
    cpgtxt_format: function cpgtxt_format() {
      return this.pgtxt_format;
    },
    cpgtxt_error: function cpgtxt_error() {
      return this.pgtxt_error;
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
                if (wwgfield == 'sliderbar') getSliderList();else if (wwgfield == 'teacherbar') getTeacherData();else if (wwgfield == 'studentbar') getStudentData();else if (wwgfield == 'advancedbar') getAdvanData();
              }
            });
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    initpage: function initpage() {
      pgtxt_selectlanguagesave = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
      this.sliderTabs();
      getSliderList();
    } //initpage
    ,
    loaddata: function loaddata() {},
    sliderTabs: function sliderTabs() {
      $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');
        $('.col-md-12.page_slider_content_list').removeClass('active');
        $('#' + subid).addClass('active');

        if (transedlang == '') {
          $('.page1_alarm_bar span').text('No Save No Appear');
          $('.page1_alarm_bar').removeClass('active');
          $('.page1_translate_span').removeClass('active');
        }

        if (subid == 'sliderbar') {
          tabstatus = 0;
          wwgfield = 'sliderbar';
          getSliderList();
        } else if (subid == 'teacherbar') {
          tabstatus = 1;
          wwgfield = 'teacherbar';
          getTeacherData();
        } else if (subid == 'studentbar') {
          tabstatus = 2;
          wwgfield = 'studentbar';
          getStudentData();
        } else if (subid == 'advancedbar') {
          tabstatus = 3;
          wwgfield = 'advancedbar';
          getAdvanData();
        }
      });
      initTeacher();
      initStudent();
      initAdvan();
      $('#new_image_file_dlg').change(function () {
        if (this.files && this.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $('#new_image_file_dlg_preview').attr('src', e.target.result);
          };

          reader.readAsDataURL(this.files[0]); // convert to base64 string
        }
      });
    },
    addpicmodalclose: function addpicmodalclose() {
      if (permss.pcreate == 1) {
        if (transedlang == '') {
          $("#myAddPicModal").modal('hide');
          alert(pgtxt_selectlanguagesave);
          return;
        }

        var file = $('#new_image_file_dlg').val();

        if (file == null || file == '') {
          $("#myAddPicModal").modal('hide');
          return;
        }

        $('#slider_img_transLang').val(transedlang);
        var formData = new FormData($("#slider_img_frm")[0]);
        $.ajax({
          url: 'admin.wwgpsliderupload',
          type: 'POST',
          data: formData,
          async: false,
          success: function success(data) {
            if (data.msg == "ok") {
              $('#new_image_file_dlg').val('');
              $('#new_image_file_dlg_preview').attr('src', '/images/icons/image_tp.png');
              $('#pic_name').val('');
              $('#pic_link').val('');
              sliderPanelInit(data.list);
            } else alert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          },
          cache: false,
          contentType: false,
          processData: false
        });
        $("#myAddPicModal").modal('hide');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    },
    getsliderimgfromfile: function getsliderimgfromfile() {
      //$('#new_image_file_dlg').trigger('click');
      $('.Media_directory_files').html("");
      $('#Media_Modal_Search_Text').val("");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID('new_image_file_dlg_preview', 'new_image_file_dlg');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#MediaDirectoryModal').modal('show');
    },
    SavePageContent: function SavePageContent() {
      if (permss.pwrite == 1) {
        if (transedlang == '') {
          alert(pgtxt_selectlanguagesave);
          return;
        }

        var pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');

        if (tabstatus == 0) {
          var snav = $('#slider_navication').val();
          var sptime = $('#slider_playtime').val();
          var stime = $('#slider_sliding_time').val();
          var sdir = $('#slider_sliding_dir').val();
          var cond = $('#selCondition').val();
          $.ajax({
            url: 'admin.wwgpSliderStatus',
            type: 'POST',
            data: {
              snav: snav,
              sptime: sptime,
              stime: stime,
              sdir: sdir,
              tansLang: transedlang,
              wwgfield: wwgfield,
              cond: cond
            },
            async: false,
            success: function success(data) {
              if (data.msg == "ok") {
                alert(pgtxt_dbsaved);
              } else alert(data.msg);
            },
            error: function error(jqXHR, errdata, errorThrown) {
              console.log(errdata);
            }
          });
        } else if (tabstatus == 1 || tabstatus == 2) {
          var formData = '';

          if (tabstatus == 1) {
            $("#teach_frm_transLang").val(transedlang);
            formData = new FormData($("#teach_frm")[0]);
          } else {
            $("#stud_frm_transLang").val(transedlang);
            formData = new FormData($("#stud_frm")[0]);
          }

          $.ajax({
            url: 'admin.wwgpTSupload',
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
        } else if (tabstatus == 3) {
          $("#advan_frm_transLang").val(transedlang);
          var formData = new FormData($("#advan_frm")[0]);
          $.ajax({
            url: 'admin.wwgpAdvanupload',
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
        }
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    } //save
    ,
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
          alert(pgtxt_selectlanguagesave);
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
              part: "index",
              tabstatus: tabstatus,
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
              part: "index",
              tabstatus: tabstatus,
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
    slider_image_add: function slider_image_add() {
      if (selected_id != "") {
        $.ajax({
          url: 'admin.setSiteLogoStyleState',
          type: 'POST',
          data: {
            id: selected_id
          },
          async: true,
          success: function success(data) {
            if (data.msg == "ok") {
              $('#sliderimage_dlg_list').html('');
              $("#sliderModal").modal('hide');
              $('#image_size').text(selected_image_size + 'px');
              $('#selected_image_name').text(selected_image_name);
            } else alert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
      }
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    height: auto;\n    float: left;\n}\n#addpic_btn{\n     height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n.page_index_tab{\n    width: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=template&id=1d136af2&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=template&id=1d136af2& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_pages_index))]),
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
              _vm._s(_vm.cmususu_webs_wesglobal_pages) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_pages_index) +
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
                on: { click: _vm.SavePageContent }
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
    _c(
      "div",
      {
        staticClass: "page1_content_side_bar",
        staticStyle: { display: "flex", "margin-bottom": "20px" }
      },
      [
        _c(
          "div",
          { staticClass: "page_index_tab", staticStyle: { width: "70px" } },
          [
            _c(
              "div",
              {
                staticClass:
                  "page1_content_side_bar_text page1_content_side_bar_seleted",
                attrs: { "data-target": "sliderbar" }
              },
              [_vm._v(_vm._s(_vm.cpgtxt_slider))]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "page_index_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "teacherbar" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_teacher) + " " + _vm._s(_vm.cpgtxt_bar))]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "page_index_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "studentbar" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_student) + " " + _vm._s(_vm.cpgtxt_bar))]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "page_index_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "advancedbar" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_advanced) + " " + _vm._s(_vm.cpgtxt_css))]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "sliderbar" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c("div", { staticClass: "page1_content_content_title" }, [
              _vm._v(_vm._s(_vm.cpgtxt_basicstring))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "page1_content_content page2_content_text" },
              [
                _c("div", { staticClass: "row page2_row" }, [
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_image) + " " + _vm._s(_vm.cpgtxt_size)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row page2_row" }, [
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("span", [_vm._v(_vm._s(_vm.cpgtxt_navigation))])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c(
                      "select",
                      {
                        staticClass: "form-control w-75 page2_select",
                        attrs: { id: "slider_navication" }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v(_vm._s(_vm.cpgctl_dots))
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v(_vm._s(_vm.cpgctl_blocked))
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row page2_row" }, [
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("span", [_vm._v(_vm._s(_vm.cpgtxt_playingtime))])
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_pleaseenter) +
                          " 1-20 " +
                          _vm._s(_vm.cpgtxt_seconds)
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row page2_row" }, [
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("span", [_vm._v(_vm._s(_vm.cpgtxt_slidingtime))])
                  ]),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_pleaseenter) +
                          " 1-10 " +
                          _vm._s(_vm.cpgtxt_seconds)
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row page2_row" }, [
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("span", [_vm._v(_vm._s(_vm.cpgtxt_style))])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c(
                      "select",
                      {
                        staticClass: "form-control w-75 page2_select",
                        attrs: { id: "slider_sliding_dir" }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v(_vm._s(_vm.cpgctl_fromrighttoleft))
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v(_vm._s(_vm.cpgctl_fromlefttoright))
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v(_vm._s(_vm.cpgctl_blocked))
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row page2_row" }, [
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_slider) +
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
                        attrs: { type: "button", id: "slider_image_upbtn" }
                      },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.cbtntxt_edit) +
                            "\n                            "
                        )
                      ]
                    )
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c("div", { staticClass: "page1_content_content_title" }, [
              _vm._v(_vm._s(_vm.cpgtxt_picture))
            ]),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "page1_content_content_bottom cursor-pointer",
                attrs: {
                  "data-toggle": "modal",
                  "data-target": "#myAddPicModal"
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
                      "data-icon": "gg:add"
                    }
                  },
                  [
                    _c("g", { attrs: { fill: "none" } }, [
                      _c("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d:
                            "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16z",
                          fill: "currentColor"
                        }
                      }),
                      _c("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d:
                            "M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7z",
                          fill: "currentColor"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.cbtntxt_add) +
                    "\n                "
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list",
          attrs: { id: "teacherbar" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "teach_frm",
                  id: "teach_frm"
                }
              },
              [
                _c("input", {
                  attrs: { type: "hidden", name: "wfm", value: "tc" }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: "transLang",
                    id: "teach_frm_transLang",
                    value: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_teacher) + " " + _vm._s(_vm.cpgtxt_bar)
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page1_content_content page2_content_text" },
                  [
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_title) +
                              "1"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(6)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_icon))])
                      ]),
                      _vm._v(" "),
                      _vm._m(7),
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
                            attrs: { type: "button", id: "teach_file_1_upbtn" }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_content) +
                              "1"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(8)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_link))])
                      ]),
                      _vm._v(" "),
                      _vm._m(9)
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "page1_content_content page2_content_text page3_content_content_bottom"
                  },
                  [
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_title) +
                              "2"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(10)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_icon))])
                      ]),
                      _vm._v(" "),
                      _vm._m(11),
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
                            attrs: { type: "button", id: "teach_file_2_upbtn" }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_content) +
                              "2"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(12)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_link))])
                      ]),
                      _vm._v(" "),
                      _vm._m(13)
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "page1_content_content page2_content_text page3_content_content_bottom"
                  },
                  [
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_title) +
                              "3"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(14)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_icon))])
                      ]),
                      _vm._v(" "),
                      _vm._m(15),
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
                            attrs: { type: "button", id: "teach_file_3_upbtn" }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_content) +
                              "3"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(16)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_link))])
                      ]),
                      _vm._v(" "),
                      _vm._m(17)
                    ])
                  ]
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list",
          attrs: { id: "studentbar" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "stud_frm",
                  id: "stud_frm"
                }
              },
              [
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: "transLang",
                    id: "stud_frm_transLang",
                    value: ""
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "hidden", name: "wfm", value: "st" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_student) + " " + _vm._s(_vm.cpgtxt_bar)
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page1_content_content page2_content_text" },
                  [
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_title) +
                              "1"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(18)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_icon))])
                      ]),
                      _vm._v(" "),
                      _vm._m(19),
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
                            attrs: { type: "button", id: "stud_file_1_upbtn" }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_content) +
                              "1"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(20)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_link))])
                      ]),
                      _vm._v(" "),
                      _vm._m(21)
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "page1_content_content page2_content_text page3_content_content_bottom"
                  },
                  [
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_title) +
                              "2"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(22)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_icon))])
                      ]),
                      _vm._v(" "),
                      _vm._m(23),
                      _vm._v(" "),
                      _vm._m(24)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(_vm._s(_vm.cpgtxt_font) + " Content2")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(25)
                    ]),
                    _vm._v(" "),
                    _vm._m(26)
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "page1_content_content page2_content_text page3_content_content_bottom"
                  },
                  [
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_title) +
                              "3"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(27)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_icon))])
                      ]),
                      _vm._v(" "),
                      _vm._m(28),
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
                            attrs: { type: "button", id: "stud_file_3_upbtn" }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                            "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_font) +
                              " " +
                              _vm._s(_vm.cpgtxt_content) +
                              "3"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(29)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_link))])
                      ]),
                      _vm._v(" "),
                      _vm._m(30)
                    ])
                  ]
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list",
          attrs: { id: "advancedbar" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "advan_frm",
                  id: "advan_frm"
                }
              },
              [
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: "transLang",
                    id: "advan_frm_transLang",
                    value: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_background))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2" }, [
                      _c("span", [_vm._v(_vm._s(_vm.cpgtxt_image))])
                    ]),
                    _vm._v(" "),
                    _vm._m(31),
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
                          attrs: { type: "button", id: "advan_file_upbtn" }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.cbtntxt_edit) +
                              "\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                ])
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
        staticClass: "modal fade",
        attrs: { id: "myAddPicModal", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "div",
                {
                  staticStyle: {
                    color: "#5c6bc0",
                    "font-size": "20px",
                    "font-weight": "600"
                  }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_createpicture))]
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
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "form",
                {
                  attrs: {
                    method: "post",
                    enctype: "multipart/form-data",
                    name: "slider_img_frm",
                    id: "slider_img_frm"
                  }
                },
                [
                  _c("input", {
                    attrs: {
                      type: "hidden",
                      name: "transLang",
                      id: "slider_img_transLang",
                      value: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "page2_modal page2_content_text" }, [
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_name))])
                      ]),
                      _vm._v(" "),
                      _vm._m(32)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_image))])
                      ]),
                      _vm._v(" "),
                      _vm._m(33),
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
                            attrs: { type: "button" },
                            on: { click: _vm.getsliderimgfromfile }
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
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_link))])
                      ]),
                      _vm._v(" "),
                      _vm._m(34)
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn page1_custom_select_btn",
                  attrs: { type: "button", id: "addpic_btn" },
                  on: { click: _vm.addpicmodalclose }
                },
                [
                  _c("span", {
                    staticClass: "iconify",
                    staticStyle: { "font-size": "24px" },
                    attrs: { "data-inline": "false", "data-icon": "gg:add" }
                  }),
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.cbtntxt_add) +
                      "\n                    "
                  )
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "sliderModal" } }, [
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
                    _vm._s(_vm.cpgtxt_character) + " " + _vm._s(_vm.cpgtxt_set)
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
                attrs: { id: "sliderModalbody" }
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
                      _vm._m(35),
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
                                      return _vm.slider_image_add()
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
    ]),
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
          id: "webs-wesglobal-pages-index-fav",
          "data-status": "off",
          "data-page-info": "Index_webs-wesglobal-pages-index"
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
    return _c("div", { staticClass: "col-md-3" }, [
      _c("span", { attrs: { id: "image_size" } }, [_vm._v("527*300px")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: { type: "text", value: "10", id: "slider_playtime" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: { type: "text", value: "2", id: "slider_sliding_time" }
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
        attrs: { id: "selected_image_name" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "form",
      {
        attrs: {
          method: "post",
          enctype: "multipart/form-data",
          name: "slider_img_panel_frm",
          id: "slider_img_panel_frm"
        }
      },
      [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "sliderUploadId",
            id: "sliderUploadId",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            name: "transLang",
            id: "slider_img_panel_frm_transLang",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            name: "oldfilename",
            id: "oldfilename",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            name: "selCondition",
            id: "selCondition",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "hidden", name: "filesize", id: "filesize", value: "" }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            name: "fileformat",
            id: "fileformat",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "hidden",
            name: "filecapacity",
            id: "filecapacity",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "container-fluid p-0",
          attrs: { id: "picture-container" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          placeholder: "Font Title",
          name: "teach_font1_tit",
          id: "teach_font1_tit",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "teach_file_1_pre",
            id: "teach_file_1_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "teach_file_1",
            id: "teach_file_1",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "teach_file_1_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          placeholder: "Font Content",
          value: "",
          name: "teach_font1_cont",
          id: "teach_font1_cont"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          placeholder: "Link",
          value: "",
          name: "teach_font1_link",
          id: "teach_font1_link"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          placeholder: "Font Title",
          value: "",
          name: "teach_font2_tit",
          id: "teach_font2_tit"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "teach_file_2_pre",
            id: "teach_file_2_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "teach_file_2",
            id: "teach_file_2",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "teach_file_2_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          placeholder: "Font Content",
          value: "",
          name: "teach_font2_cont",
          id: "teach_font2_cont"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          placeholder: "Link",
          value: "",
          name: "teach_font2_link",
          id: "teach_font2_link"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          value: "",
          placeholder: "Font Title",
          name: "teach_font3_tit",
          id: "teach_font3_tit"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "teach_file_3_pre",
            id: "teach_file_3_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "teach_file_3",
            id: "teach_file_3",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "teach_file_3_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          value: "",
          placeholder: "Font Content",
          name: "teach_font3_cont",
          id: "teach_font3_cont"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          value: "",
          placeholder: "Link",
          name: "teach_font3_link",
          id: "teach_font3_link"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          placeholder: "Font Title",
          name: "stud_font1_tit",
          id: "stud_font1_tit",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "stud_file_1_pre",
            id: "stud_file_1_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "stud_file_1",
            id: "stud_file_1",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "stud_file_1_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          value: "",
          placeholder: "Font Content",
          name: "stud_font1_cont",
          id: "stud_font1_cont"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          value: "",
          placeholder: "Link",
          name: "stud_font1_link",
          id: "stud_font1_link"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          placeholder: "Font Title",
          value: "",
          name: "stud_font2_tit",
          id: "stud_font2_tit"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "stud_file_2_pre",
            id: "stud_file_2_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "stud_file_2",
            id: "stud_file_2",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "stud_file_2_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
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
          attrs: { type: "button", id: "stud_file_2_upbtn" }
        },
        [
          _vm._v(
            "\n                                Edit\n                            "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          value: "",
          placeholder: "Font Content",
          name: "stud_font2_cont",
          id: "stud_font2_cont"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row page2_row" }, [
      _c("div", { staticClass: "col-md-2" }, [_c("span", [_vm._v("Link")])]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c("input", {
          staticClass: "page2_input",
          attrs: {
            type: "text",
            value: "",
            placeholder: "Link",
            name: "stud_font2_link",
            id: "stud_font2_link"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          value: "",
          placeholder: "Font Title",
          name: "stud_font3_tit",
          id: "stud_font3_tit"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "stud_file_3_pre",
            id: "stud_file_3_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "stud_file_3",
            id: "stud_file_3",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "stud_file_3_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          value: "",
          placeholder: "Font Content",
          name: "stud_font3_cont",
          id: "stud_font3_cont"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          value: "",
          placeholder: "Link",
          name: "stud_font3_link",
          id: "stud_font3_link"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "advan_file_pre",
            id: "advan_file_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "advan_file",
            id: "advan_file",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "advan_file_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          placeholder: "Picture Name",
          value: "",
          name: "pic_name",
          id: "pic_name"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "new_image_file_dlg",
            id: "new_image_file_dlg"
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "new_image_file_dlg_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10" }, [
      _c("input", {
        staticClass: "page2_input",
        attrs: {
          type: "text",
          placeholder: "Picture Link",
          value: "",
          name: "pic_link",
          id: "pic_link"
        }
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

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue":
/*!*****************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalPagesIndex_vue_vue_type_template_id_1d136af2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalPagesIndex.vue?vue&type=template&id=1d136af2& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=template&id=1d136af2&");
/* harmony import */ var _WebsWesGlobalPagesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalPagesIndex.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalPagesIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalPagesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalPagesIndex_vue_vue_type_template_id_1d136af2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalPagesIndex_vue_vue_type_template_id_1d136af2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=template&id=1d136af2&":
/*!************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=template&id=1d136af2& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_template_id_1d136af2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesIndex.vue?vue&type=template&id=1d136af2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesIndex.vue?vue&type=template&id=1d136af2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_template_id_1d136af2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesIndex_vue_vue_type_template_id_1d136af2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);