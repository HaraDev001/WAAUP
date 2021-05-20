(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var vueOBJ = null;
var btntxt_edit = "";
var btntxt_change = "";
var btntxt_delete = "";
var tabstatus = 0;
var colum_index = 0;
var tagCount = 0;
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var checked_del_items = new Array();
var is_edit = false;
var edit_id = "";
var permss;
var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.jsonparse(window.Laravel.userinfo).id;
var email = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.jsonparse(window.Laravel.userinfo).email;
var pwd = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.jsonparse(window.Laravel.userinfo).password;
var stored_langs = '';
var color_sel_lang = {};
var lang_name = '';
var page_lang = '';

function pageNavigation(totalpage) {
  var nav_tag = '';
  nav_tag += '<nav aria-label="..." class="mb-4">';
  nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
  var disble = "";
  if (pstart == 1) disble = "disabled";
  var prenum = parseInt(pstart) - 1;
  nav_tag += '<li class="page-item  ' + disble + ' ">';
  nav_tag += '<a class="page-link" href="#"  id="ssmunavnum_' + prenum + '" >';
  nav_tag += '<i class="ti-angle-left"></i>';
  nav_tag += '</a>';
  nav_tag += '</li>';
  var pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

  for (var idx = 0; idx < numg; idx++) {
    var actv = "";
    var aria_current = '';
    var spantag = '';
    var oid = '';

    if (pnum == pstart) {
      actv = 'active';
      aria_current = 'aria-current="page"';
      spantag = '<span class="sr-only">(current)</span>';
    } else oid = "ssmunavnum_" + pnum;

    nav_tag += '<li class="page-item ' + actv + '"  ' + aria_current + '>';
    nav_tag += '<a class="page-link" id="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
    nav_tag += '</li>';
    if (pnum == totalpage) break;
    pnum = pnum + 1;
  }

  var nextnum = parseInt(pstart) + 1;
  var edisble = "";
  if (pstart == totalpage) edisble = "disabled";
  nav_tag += '<li class="page-item ' + edisble + ' ">';
  nav_tag += '<a class="page-link" id="ssmunavnum_' + nextnum + '" href="#">';
  nav_tag += '<i class="ti-angle-right"></i>';
  nav_tag += '</a>';
  nav_tag += '</li>';
  nav_tag += '</ul>';
  nav_tag += '</nav>';
  $('#ssmu_page_nav').html(nav_tag);
  /* events { */

  $('a[id^="ssmunavnum_"]').click(function () {
    var oid = $(this).attr("id");
    pstart = oid.split('_')[1];

    if (tabstatus == 1) {
      getBoxedList();
    }
  });
}

function colorButtons() {
  var modalcolorpicker = document.getElementById('modalcolorpicker');
  var pickerLeft = new ColorPicker(modalcolorpicker, '#ffffff');
  modalcolorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#modalcolorpicker_value').text(color);
    $('#modalcolorpicker_val').val(color);
  });
}

function DeleteColorEvent() {
  $('span[id^="delcolor_"]').click(function () {
    if (permss.pdelete == 1) {
      var colorid = $(this).attr("data-id");
      $.ajax({
        url: 'admin.delAWAThemeColor',
        type: 'POST',
        data: {
          userid: userid,
          colorid: colorid
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            var color_list = data.list.color_info; //var sel_color = data.list.sel_color;

            getColorList(color_list);
          } else alert(data.msg);
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.showAlert('pgtxt_notpermission');
  });
}

function getColorList(jsonstr) {
  $('#addedSystemThemeColorList').html('');

  if (jsonstr != '') {
    var color_list = $.parseJSON(jsonstr);
    var tags = '';

    for (var j = 0; j < color_list.length; j++) {
      var obj = color_list[j];
      var cid = obj.colorid;
      var color = obj.colorinfo;
      var color_cont = obj.contentdata;
      var color_name = color_cont[lang_name];
      tags += '<div style="margin-bottom: 20px;">';
      tags += '<div id="addedcolor_' + j + '" style="display: flex;flex-direction: row; height: 20px; margin-right: 20px;">';
      tags += '   <div id="addcolor_' + j + '" class="selectedThemeColor" data-color="' + color + '" style="background: ' + color + '"></div>';
      tags += '   <div style="margin-left: 10px;"><span id="colorname_' + j + '" data-id="' + cid + '">' + color_name + '</span></div>';
      tags += '   <div style="margin-left: 10px;"><span >|</span></div>';
      tags += '   <div style="margin-left: 10px;"><span id="delcolor_' + j + '" data-id="' + cid + '" class="delete-theme-color">x</span></div>';
      tags += '</div>';
      tags += '</div>';
      tagCount = j;
    }

    $('#addedSystemThemeColorList').html(tags);
    DeleteColorEvent();
  }
}

function showThemeColorPage() {
  $.ajax({
    url: 'admin.getAWAThemeColor',
    type: 'POST',
    data: {
      userid: userid
    },
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        var color_list = data.list.color_info;
        getColorList(color_list);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function addThemeColor(color) {
  tagCount++;
  $.ajax({
    url: 'admin.addAWAThemeColor',
    type: 'POST',
    data: {
      userid: userid,
      color: color
    },
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        var color_list = data.list.color_info;
        getColorList(color_list);
      } else alert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function showLanguageItem(n) {
  var tags = '';
  var f_ac = 0;

  for (var j = 0; j < stored_langs.length; j++) {
    var obj = stored_langs[j];
    var iso = obj.iso;
    var dialCode = obj.dialcode;
    var cname = obj.name;
    var status = obj.status;
    var dcont = iso + '-' + cname.toLowerCase();

    if (status == 'enable') {
      if (n === 0) {
        color_sel_lang[cname.toLowerCase()] = ''; //add key lang

        tags += '<div class="m-2"><a id="' + iso + '" data-state="add" data-cont="' + dcont + '" data-name="' + cname.toLowerCase() + '">' + cname + '</a></div>';
      } else {
        var cls = '';

        if (color_sel_lang[cname.toLowerCase()] !== undefined && color_sel_lang[cname.toLowerCase()] !== null && color_sel_lang[cname.toLowerCase()] !== '') {
          if (f_ac === 0) {
            cls = ' class="active" ';
            $('#color_add_name').val(color_sel_lang[cname.toLowerCase()]);
            f_ac = 1;
          } else cls = ' class="enable" ';
        } else color_sel_lang[cname.toLowerCase()] = '';

        tags += '<div class="m-2"><a id="' + iso + '" ' + cls + ' data-state="add" data-cont="' + dcont + '" data-name="' + cname.toLowerCase() + '">' + cname + '</a></div>';
      }
    }
  }

  $('#dlg-color-lang-list').html(tags);
  dlg_color_lang_list_a_click();
}

function initColorDlg(n) {
  if (n == 0) {
    color_sel_lang = {};
    $('#dlg-color-lang-list').html('');
    $('#color_add_name').val('');
    $('#color_add_span_messagebox').html('');
    $('#color_add_span_messagebox_container').css('display', 'none');
    $('.color_first-first-content').css('display', 'block');
    $('#dlg-color-next-lang-list').html('');
    $('.color_first-next-content').css('display', 'none');
  } else if (n == 1) {
    $('#color_add_name').val('');
    $('#color_add_span_messagebox').html('');
    $('#color_add_span_messagebox_container').css('display', 'none');
    $('.color_first-first-content').css('display', 'block');
    $('#dlg-color-next-lang-list').html('');
    $('.color_first-next-content').css('display', 'none');
  }
}

function dlg_color_lang_list_a_click() {
  $('#dlg-color-lang-list a').click(function () {
    var this_state = $(this).data('state');

    if (this_state === 'up') {} else if (this_state === 'add') {}

    var this_n = $(this).data('name');
    var this_id = $(this).attr('id');
    $('#dlg-color-lang-list a').each(function (index, element) {
      var ele_n = $(element).data('name');
      var ele_id = $(element).attr('id');

      if (this_id !== ele_id) {
        var input_n = '';

        if ($(element).hasClass('active')) {
          $(element).removeClass('active');
          input_n = $.trim($('#color_add_name').val());
          color_sel_lang[ele_n] = input_n;
          if (color_sel_lang[ele_n] !== '') $(element).addClass('enable');
        } else {
          if (color_sel_lang[ele_n] !== '') $(element).addClass('enable');
        }
      }
    });

    if (color_sel_lang[this_n] !== '') {
      $(this).removeClass('enable');
      $('#color_add_name').val(color_sel_lang[this_n]);
    } else $('#color_add_name').val('');

    $(this).addClass('active');
  });
}

function addColorModalToNextDlg() {
  var keys = Object.keys(color_sel_lang);
  $('#dlg-color-next-lang-list').html('');
  if (keys.length < 1) return;
  var tag = '';

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var v = color_sel_lang[key];
    tag += '<div class="col-3 wes-theme-color">';
    tag += key;
    tag += '</div>';
    tag += '<div class="col-9">';
    tag += v;
    tag += '</div>';
  }

  $('#dlg-color-next-lang-list').html(tag);
}

function showBoxedList(lists) {
  is_edit = false;
  edit_id = "";
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].id;
    var name = lists[i].name;
    var padding = lists[i].padding;
    tags += '<tr class="boxed_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '" data-padding="' + padding + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="boxedCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>' + padding + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="boxed_content_list_edit-' + id + '" name="boxed_content_list_edit-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#awa_boxed_content_lists').html(tags);
  $('input[id^="boxedCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="boxed_content_list_edit-"]').change(function () {
    var id = $(this).attr("id");
    edit_id = id.split('-')[1];
    var name = $('.boxed_content_list-' + edit_id).attr("data-name");
    var padding = $('.boxed_content_list-' + edit_id).attr("data-padding");
    var sel_val = $(this).val();

    if (sel_val == "change") {
      if (permss.pwrite == 1) {
        is_edit = true;
        $('#Modal_Boxed_Name').val(name);
        $('#Modal_Boxed_padding').val(padding);
        $('#ModalAddBoxedContent').modal('show');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.showAlert('pgtxt_notpermission');
    } else if (sel_val == "delete") {
      if (permss.pdelete == 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.confirmAlert(deleteBoxedList, edit_id, 'pgtxt_wantdeleteitem');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.showAlert('pgtxt_notpermission');
    }
  });
}

function getBoxedList() {
  $.ajax({
    url: 'admin.getAWAThemeBoxedList',
    data: {
      userid: userid,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        $('#awa_boxed_content_lists').html('');
        if (lists != null && lists != '') showBoxedList(lists);
        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function addBoxedList() {
  var name = $('#Modal_Boxed_Name').val();
  var padding = $('#Modal_Boxed_padding').val();
  if (name == '' || padding == '') return;
  $.ajax({
    url: 'admin.addAWAThemeBoxedList',
    data: {
      userid: userid,
      name: name,
      padding: padding,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        $('#awa_boxed_content_lists').html('');
        if (lists != null && lists != '') showBoxedList(lists);
        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        $('#ModalAddBoxedContent').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function editBoxedList() {
  var name = $('#Modal_Boxed_Name').val();
  var padding = $('#Modal_Boxed_padding').val();
  if (name == '' || padding == '') return;
  $.ajax({
    url: 'admin.editAWAThemeBoxedList',
    data: {
      userid: userid,
      name: name,
      editid: edit_id,
      padding: padding,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        $('#awa_boxed_content_lists').html('');
        if (lists != null && lists != '') showBoxedList(lists);
        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        $('#ModalAddBoxedContent').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function deleteBoxedList(edit_id) {
  $.ajax({
    url: 'admin.deleteAWAThemeBoxedList',
    data: {
      userid: userid,
      deleteid: edit_id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        $('#awa_boxed_content_lists').html('');
        if (lists != null && lists != '') showBoxedList(lists);
        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function allDeleteCheckedBoxed() {
  $('#boxed_selected_all_delete').click(function () {
    if (permss.pdelete == 0) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.showAlert('pgtxt_notpermission');
      return;
    }

    if (checked_del_items.length == 0) return;
    $.ajax({
      url: 'admin.allDeleteAWAThemeBoxed',
      data: {
        userid: userid,
        ids: checked_del_items,
        pstart: pstart,
        pcnt: pcnt
      },
      type: 'POST',
      success: function success(data) {
        if (data.msg === "ok") {
          var lists = data.lists;
          $('#awa_boxed_content_lists').html('');
          if (lists != null && lists != '') showBoxedList(lists);
          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
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
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppsWebsiteAppearanceTheme",
  data: function data() {
    return {
      pageid: 'apps-website-appearance-theme-fav',
      mu_apps: '',
      musu_apps_website: '',
      mususu_apps_website_appear: '',
      musususu_apps_website_appear_theme: '',
      musu_system_theme: '',
      pgtxt_color: '',
      pgtxt_list: '',
      btntxt_add: '',
      btntxt_delete: '',
      btntxt_boxed: '',
      pgtxt_name: '',
      pgtxt_padding: '',
      pgtxt_use: '',
      pgtxt_value: '',
      pgtxt_swidth: '',
      pgtxt_or: '',
      pgtxt_example: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      btntxt_change: '',
      btntxt_nextstep: '',
      pgtxt_translation: '',
      pgtxt_choose: '',
      pgtxt_confirm: '',
      pgtxt_notlanguage: '',
      pgtxt_sucesssaveddata: ''
    };
  },
  computed: {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmu_apps: function cmu_apps() {
      return this.mu_apps;
    },
    cmusu_apps_website: function cmusu_apps_website() {
      return this.musu_apps_website;
    },
    cmususu_apps_website_appear: function cmususu_apps_website_appear() {
      return this.mususu_apps_website_appear;
    },
    cmusususu_apps_website_appear_theme: function cmusususu_apps_website_appear_theme() {
      return this.musususu_apps_website_appear_theme;
    },
    cmusu_system_theme: function cmusu_system_theme() {
      return this.musu_system_theme;
    },
    cpgtxt_color: function cpgtxt_color() {
      return this.pgtxt_color;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cbtntxt_boxed: function cbtntxt_boxed() {
      return this.btntxt_boxed;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_padding: function cpgtxt_padding() {
      return this.pgtxt_padding;
    },
    cpgtxt_use: function cpgtxt_use() {
      return this.pgtxt_use;
    },
    cpgtxt_value: function cpgtxt_value() {
      return this.pgtxt_value;
    },
    cpgtxt_swidth: function cpgtxt_swidth() {
      return this.pgtxt_swidth;
    },
    cpgtxt_or: function cpgtxt_or() {
      return this.pgtxt_or;
    },
    cpgtxt_example: function cpgtxt_example() {
      return this.pgtxt_example;
    },
    cpgtxt_wantdeleteitem: function cpgtxt_wantdeleteitem() {
      return this.pgtxt_wantdeleteitem;
    },
    cpgtxt_notpermission: function cpgtxt_notpermission() {
      return this.pgtxt_notpermission;
    },
    cpgtxt_notification: function cpgtxt_notification() {
      return this.pgtxt_notification;
    },
    cbtntxt_ok: function cbtntxt_ok() {
      return this.btntxt_ok;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_nextstep: function cbtntxt_nextstep() {
      return this.btntxt_nextstep;
    },
    cpgtxt_translation: function cpgtxt_translation() {
      return this.pgtxt_translation;
    },
    cpgtxt_choose: function cpgtxt_choose() {
      return this.pgtxt_choose;
    },
    cpgtxt_confirm: function cpgtxt_confirm() {
      return this.pgtxt_confirm;
    },
    cpgtxt_notlanguage: function cpgtxt_notlanguage() {
      return this.pgtxt_notlanguage;
    },
    cpgtxt_sucesssaveddata: function cpgtxt_sucesssaveddata() {
      return this.pgtxt_sucesssaveddata;
    },
    contentchange: function contentchange() {
      page_lang = this.$store.state.defaultlang;
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        //console.log(obj.hasOwnProperty(key));
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);

      for (var i = 0; i < stored_langs.length; i++) {
        if (page_lang == stored_langs[i].iso) {
          lang_name = stored_langs[i].name.toLowerCase();
          showThemeColorPage();
        }
      }

      return this.$store.state.contentchange;
    }
  },
  watch: {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.permissionDefinition();
    /* fav part*/

    btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
    btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
    btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
    this.getWWGStoredLang();
    this.sliderTabs();
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
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.getSystemStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg === "ok") {
          if (response.data.langlist != '') {
            stored_langs = $.parseJSON(response.data.langlist);
            vueOBJ.initpage();
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },

    /*fav part*/
    sliderTabs: function sliderTabs() {
      $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');
        $('.col-md-12.page_slider_content_list').removeClass('active');
        $('#' + subid).addClass('active');
        checked_del_items = new Array();

        if (subid == 'color') {
          tabstatus = 0;
          showThemeColorPage();
        } else if (subid == 'boxed') {
          tabstatus = 1;
          getBoxedList();
          allDeleteCheckedBoxed();
        }
      });
    },
    initpage: function initpage() {
      colorButtons();

      for (var i = 0; i < stored_langs.length; i++) {
        if (page_lang == stored_langs[i].iso) {
          lang_name = stored_langs[i].name.toLowerCase();
          showThemeColorPage();
        }
      }

      $("#ModalAddBoxedContent").on('hide.bs.modal', function () {
        $('select[id^="boxed_content_list_edit-"]').val('');
      });
    },
    AddColorPalette: function AddColorPalette() {
      if (permss.pcreate != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      initColorDlg(0);
      $('#dlgErr').text('').css('display', 'none');
      $('.color-add-letter').css('display', 'block');
      $('.color-up-letter').css('display', 'none');
      $('.color_first-content').css('display', 'block');
      $('.color_next-content').css('display', 'none');
      $('#addNextDlg_btn').css('display', 'block');
      $('#changeNextDlg_btn').css('display', 'none');
      $('#modalcolorpicker_val').val('#ffffff');
      $('#modalcolorpicker_value').text('#ffffff');
      $('#modalcolorpicker').css('background', '#ffffff');

      if (stored_langs !== '') {
        $('#ModalAddColorContent').modal('show');
        showLanguageItem(0);
      } else {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.showAlert('pgtxt_notlanguage');
      }
    },
    modal_nextstep: function modal_nextstep() {
      var input_n = $.trim($('#color_add_name').val());

      if (input_n !== '') {
        var ele_n = $('#dlg-color-lang-list a.active').data('name');
        if (ele_n !== undefined) color_sel_lang[ele_n] = input_n;
      } else {
        var ele_n = $('#dlg-color-lang-list a.active').data('name');
        if (ele_n !== undefined) color_sel_lang[ele_n] = '';
      }

      var keys = Object.keys(color_sel_lang);
      if (keys.length < 1) return;
      var msg = '';
      var idx = 0;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var v = color_sel_lang[key];

        if (v == '') {
          if (idx == 0) msg += 'There is no content in <span style="color:#67a6d2">' + key + '</span>';else msg += ' and <span style="color:#67a6d2">' + key + '</span>';
          idx++;
        }
      }

      if (msg !== '') {
        $('#color_add_span_messagebox').html(msg);
        $('#color_add_span_messagebox_container').css('display', 'block');
      } else {
        $('.color_first-content').css('display', 'none');
        $('.color_next-content').css('display', 'block');
        addColorModalToNextDlg();
      }
    },
    addColorModalToNextOne: function addColorModalToNextOne() {
      var pgtxt_sucesssaveddata = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_sucesssaveddata');
      var sel_color = $('#modalcolorpicker_val').val();
      $.ajax({
        url: 'admin.addAWAThemeColor',
        type: 'POST',
        data: {
          userid: userid,
          color: sel_color,
          contentdata: color_sel_lang
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#dlgNextErr').text(pgtxt_sucesssaveddata).css({
              'display': 'block',
              'color': '#16D414'
            });
            setTimeout(function () {
              $('#dlgNextErr').text('').css('display', 'none');
              $("#ModalAddColorContent").modal('hide');
            }, 1000);
            showThemeColorPage();
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    changeColorModalToNextOne: function changeColorModalToNextOne() {},
    cancelColorModalToNextOne: function cancelColorModalToNextOne() {
      //return pre page

      /*initColorDlg(1);
      showLanguageItem(1);*/
      $('.color_first-content').css('display', 'block');
      $('.color_next-content').css('display', 'none'); //$('#ModalAddColorContent').modal('hide');
    },
    AddBoxedBtn: function AddBoxedBtn() {
      if (permss.pcreate == 1) {
        is_edit = false;
        $('#Modal_Boxed_Name').val('');
        $('#Modal_Boxed_padding').val('');
        $('#ModalAddBoxedContent').modal('show');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.showAlert('pgtxt_notpermission');
    },
    addBoxedContentBtn: function addBoxedContentBtn() {
      if (is_edit) editBoxedList();else addBoxedList();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table.table-lg td {\n    padding: 0.7rem 0.75rem;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.delete-theme-color{\n    cursor: pointer;\n}\n.selectedThemeColor{\n    width: 50px;\n    border: 2px solid #888;\n    background: #ffffff;\n}\n#awa_page1_content_side_bar_text,\n#awa_page2_content_side_bar_text\n{\n    float: left;\n    cursor: pointer;\n    height: auto;\n}\n.awat_page_button{\n    width: 80px;\n}\n#dlg-color-lang-list div{\n    line-height:20px;\n}\n#dlg-color-lang-list a{\n    text-decoration:underline !important;\n    padding: 3px;\n    cursor: pointer;\n    color:#b9b9b9;\n}\n#dlg-color-lang-list a.enable{\n    color:rgba(0, 0, 0, 0.7);\n}\n#dlg-color-lang-list a.active{\n    color:rgba(0, 0, 0, 1);\n    font-weight: bold;\n}\n.waaup-theme-color{\n    color: #d8be8f !important;\n}\n#modalcolorpicker{\n    width: 70px;\n    height: 25px;\n    cursor: pointer;\n    background: #ffffff;\n    border: 1px solid #888888;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=template&id=83f67b84&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=template&id=83f67b84& ***!
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_apps_website_appear_theme))]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n               "),
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
            "\n                      " +
              _vm._s(_vm.cmu_apps) +
              "   >>  " +
              _vm._s(_vm.cmusu_apps_website) +
              "   >>  " +
              _vm._s(_vm.cmususu_apps_website_appear) +
              "  >>  " +
              _vm._s(_vm.cmusususu_apps_website_appear_theme) +
              "\n                  "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12", staticStyle: { "margin-bottom": "30px" } },
        [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar",
              staticStyle: { display: "flex" }
            },
            [
              _c("div", { staticClass: "awat_page_button" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "page1_content_side_bar_text page1_content_side_bar_seleted",
                    attrs: {
                      id: "awa_page1_content_side_bar_text",
                      "data-target": "color"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_color))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "awat_page_button" }, [
                _c(
                  "div",
                  {
                    staticClass: "page1_content_side_bar_text",
                    attrs: {
                      id: "awa_page2_content_side_bar_text",
                      "data-target": "boxed"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cbtntxt_boxed))]
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
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "color" }
        },
        [
          _c(
            "div",
            { staticStyle: { "text-align": "right", "margin-bottom": "25px" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "btn btn-outline-light  dash-my-btn-0 active p-l-r-30",
                  attrs: { id: "themecoloraddbutton" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.AddColorPalette()
                    }
                  }
                },
                [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
              ),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  value: "",
                  id: "hiddenThemeColorPicker"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body", staticStyle: { padding: "20px" } },
              [
                _c("h6", { staticClass: "card-title m-b-20" }, [
                  _vm._v(
                    _vm._s(_vm.cmusu_system_theme) +
                      " " +
                      _vm._s(_vm.cpgtxt_color) +
                      " " +
                      _vm._s(_vm.cpgtxt_list)
                  )
                ]),
                _vm._v(" "),
                _vm._m(1)
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
          attrs: { id: "boxed" }
        },
        [
          _c(
            "div",
            { staticStyle: { "text-align": "right", "margin-bottom": "25px" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "btn btn-outline-light  dash-my-btn-0 active p-l-r-30",
                  attrs: { id: "awat_addboxed" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.AddBoxedBtn()
                    }
                  }
                },
                [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "div",
              {
                staticClass: "page1_content_content_title",
                staticStyle: { padding: "0px", border: "0px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-md-12",
                    staticStyle: {
                      display: "flex",
                      "flex-direction": "row",
                      "align-items": "center",
                      padding: "0px"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "flex-grow": "1",
                          "margin-left": "15px",
                          "font-size": "1rem"
                        }
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_list))]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "table",
                {
                  staticClass: "table table-lg  no-footer",
                  attrs: { role: "grid", "aria-describedby": "user-list_info" }
                },
                [
                  _c("thead", [
                    _c(
                      "tr",
                      {
                        staticStyle: { "border-bottom": "1px solid #e4e2e2" },
                        attrs: { role: "row" }
                      },
                      [
                        _c("th", {
                          staticStyle: { width: "40px!important", border: "0" }
                        }),
                        _vm._v(" "),
                        _c("th", { staticStyle: { border: "0" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_name))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { border: "0" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_padding))
                        ]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: {
                              "text-align": "right",
                              "padding-right": "40px"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticStyle: { cursor: "pointer" },
                                attrs: { id: "boxed_selected_all_delete" }
                              },
                              [_vm._v(_vm._s(_vm.cbtntxt_delete))]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("tbody", { attrs: { id: "awa_boxed_content_lists" } })
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(2)
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "ModalAddBoxedContent" } },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered modal-sm",
            staticStyle: { "min-width": "600px!important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h4",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "Modal_BoxedContent_Title" }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_add) + " " + _vm._s(_vm.cbtntxt_boxed)
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
                  staticStyle: { padding: "0px 0rem 2rem" },
                  attrs: { id: "AddBoxedContentModalBody" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-md-12",
                      staticStyle: { "margin-top": "20px" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "d-flex flex-wrap",
                          staticStyle: { "margin-bottom": "20px" }
                        },
                        [
                          _c("div", { staticClass: "col-md-2" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "margin-top": "8px",
                                  color: "#666"
                                }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_name))]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(3)
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "d-flex flex-wrap",
                          staticStyle: { "margin-bottom": "20px" }
                        },
                        [
                          _c("div", { staticClass: "col-md-2" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "margin-top": "8px",
                                  color: "#666"
                                }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_padding))]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _c("div", { staticStyle: { "font-size": "11px" } }, [
                            _c(
                              "div",
                              [
                                _c(
                                  "font",
                                  { staticStyle: { color: "#b0b0af" } },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.cpgtxt_use) +
                                        " " +
                                        _vm._s(_vm.cpgtxt_value) +
                                        " " +
                                        _vm._s(_vm.cpgtxt_swidth)
                                    )
                                  ]
                                ),
                                _vm._v(
                                  " \n                                    "
                                ),
                                _c("font", { staticStyle: { color: "#000" } }, [
                                  _vm._v("px")
                                ]),
                                _vm._v(
                                  " \n                                    "
                                ),
                                _c(
                                  "font",
                                  { staticStyle: { color: "#b0b0af" } },
                                  [_vm._v(_vm._s(_vm.cpgtxt_or))]
                                ),
                                _vm._v(
                                  " \n                                    "
                                ),
                                _c("font", { staticStyle: { color: "#000" } }, [
                                  _vm._v("em")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "font",
                                  { staticStyle: { color: "#b0b0af" } },
                                  [_vm._v(_vm._s(_vm.cpgtxt_example) + ":")]
                                ),
                                _vm._v(
                                  " \n                                    "
                                ),
                                _c("font", { staticStyle: { color: "#000" } }, [
                                  _vm._v("20px 0")
                                ]),
                                _vm._v(
                                  " \n                                    "
                                ),
                                _c(
                                  "font",
                                  { staticStyle: { color: "#b0b0af" } },
                                  [_vm._v(_vm._s(_vm.cpgtxt_or))]
                                ),
                                _vm._v(
                                  " \n                                    "
                                ),
                                _c("font", { staticStyle: { color: "#000" } }, [
                                  _vm._v("20px 0 30px 0")
                                ]),
                                _vm._v(
                                  " \n                                    "
                                ),
                                _c(
                                  "font",
                                  { staticStyle: { color: "#b0b0af" } },
                                  [_vm._v(_vm._s(_vm.cpgtxt_or))]
                                ),
                                _vm._v(
                                  " \n                                    "
                                ),
                                _c("font", { staticStyle: { color: "#000" } }, [
                                  _vm._v("2em 0")
                                ])
                              ],
                              1
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-12",
                          staticStyle: { "text-align": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.addBoxedContentBtn()
                                }
                              }
                            },
                            [
                              _c("span", [
                                _vm._v("+ " + _vm._s(_vm.cbtntxt_add) + " ")
                              ])
                            ]
                          )
                        ]
                      )
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
        attrs: { id: "ModalAddColorContent", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c(
            "div",
            {
              staticClass: "modal-content color_first-content",
              staticStyle: { display: "block" }
            },
            [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "div",
                  {
                    staticClass: "modal-title color-add-letter",
                    staticStyle: {
                      "font-size": "20px",
                      "font-weight": "600",
                      display: "block"
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_add) + " " + _vm._s(_vm.cpgtxt_color)
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "modal-title color-up-letter",
                    staticStyle: {
                      "font-size": "20px",
                      "font-weight": "600",
                      display: "none"
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_change) +
                        " " +
                        _vm._s(_vm.cpgtxt_color)
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
              _c("div", { staticClass: "modal-body pt-0" }, [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page2_modal page2_content_text p-0" },
                  [
                    _c("div", { staticClass: "container-fluid p-0 m-0" }, [
                      _c("div", { staticClass: "row m-2 mt-3" }, [
                        _c("label", { staticClass: "col-4 col-form-label" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.cpgtxt_choose) +
                              " " +
                              _vm._s(_vm.cpgtxt_color) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(6)
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "row m-2",
                          staticStyle: {
                            "min-height": "80px",
                            border: "1px solid rgb(223, 221, 221)",
                            "border-radius": "20px"
                          }
                        },
                        [
                          _c(
                            "label",
                            {
                              staticClass:
                                "col-3 col-form-label waaup-theme-color",
                              staticStyle: { "line-height": "3.5rem" }
                            },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(_vm.cpgtxt_translation) +
                                  "\n                                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "col-9 d-flex flex-wrap",
                            attrs: { id: "dlg-color-lang-list" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row m-2 mt-3" }, [
                        _c("label", { staticClass: "col-4 col-form-label" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.cpgtxt_color) +
                              " " +
                              _vm._s(_vm.cpgtxt_name) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(7)
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "row m-2 mt-3",
                          staticStyle: { display: "none" },
                          attrs: { id: "color_add_span_messagebox_container" }
                        },
                        [
                          _c("div", { staticClass: "col-12" }, [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "margin-bottom": "0px",
                                  height: "auto",
                                  "background-color": "#ededed",
                                  "line-height": "28px",
                                  "border-radius": "20px",
                                  padding: "0 20px"
                                }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "iconify",
                                    staticStyle: {
                                      "font-size": "22px",
                                      transform: "rotate(360deg)"
                                    },
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink":
                                        "http://www.w3.org/1999/xlink",
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
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z",
                                          fill: "currentColor"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z",
                                          fill: "currentColor"
                                        }
                                      })
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", {
                                  attrs: { id: "color_add_span_messagebox" }
                                })
                              ]
                            )
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
                  staticClass: "modal-footer",
                  staticStyle: { height: "auto" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn page1_custom_select_btn",
                      attrs: { type: "button", id: "addDlg_btn" },
                      on: { click: _vm.modal_nextstep }
                    },
                    [
                      _c("span", {
                        staticClass: "iconify",
                        staticStyle: { "font-size": "24px" },
                        attrs: { "data-inline": "false", "data-icon": "gg:add" }
                      }),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.cbtntxt_nextstep) +
                          "\n                    "
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal-content color_next-content",
              staticStyle: { display: "none" }
            },
            [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "div",
                  {
                    staticClass: "wes-theme-color",
                    staticStyle: { "font-size": "20px", "font-weight": "600" }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_confirm))]
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
              _vm._m(8),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-footer",
                  staticStyle: { height: "auto", "justify-content": "center" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn page1_custom_select_btn mr-2",
                      attrs: { type: "button", id: "addNextDlg_btn" },
                      on: { click: _vm.addColorModalToNextOne }
                    },
                    [
                      _vm._v(
                        "\n                        + " +
                          _vm._s(_vm.cbtntxt_add) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn page1_custom_select_btn mr-2 ",
                      attrs: { type: "button", id: "changeNextDlg_btn" },
                      on: { click: _vm.changeColorModalToNextOne }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.cbtntxt_change) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn page1_custom_select_btn",
                      attrs: { type: "button", id: "cancelNextDlg_btn" },
                      on: { click: _vm.cancelColorModalToNextOne }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.cbtntxt_cancel) +
                          "\n                    "
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ])
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
          id: "apps-website-appearance-theme-fav",
          "data-status": "off",
          "data-page-info": "Theme_apps-website-appearance-theme"
        }
      },
      [
        _vm._v("\n                   "),
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
    return _c(
      "div",
      {
        staticClass: "row",
        staticStyle: { "margin-left": "50px", "margin-top": "30px" }
      },
      [
        _c("div", {
          staticClass: "d-flex flex-wrap",
          staticStyle: { display: "flex" },
          attrs: { id: "addedSystemThemeColorList" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12", attrs: { id: "ssmu_page_nav" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10" }, [
      _c("input", {
        staticClass: "form-control border-input-text",
        attrs: {
          type: "text",
          id: "Modal_Boxed_Name",
          name: "Modal_Boxed_Name"
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
        staticClass: "form-control border-input-text",
        attrs: {
          type: "text",
          id: "Modal_Boxed_padding",
          name: "Modal_Boxed_padding"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row",
        staticStyle: { display: "none" },
        attrs: { id: "dlgErr" }
      },
      [
        _c("div", { staticClass: "col" }, [
          _vm._v(
            "\n                            error;\n                        "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { display: "flex", "line-height": "30px" } },
      [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "modalcolorpicker_val",
            id: "modalcolorpicker_val",
            value: "#ffffff"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "m-r-15",
          attrs: { id: "modalcolorpicker", "data-color": "#ffffff" }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "modalcolorpicker_value" } }, [
          _vm._v("#ffffff")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: {
          background: "rgb(234, 234, 234)",
          "border-radius": "20px"
        },
        attrs: {
          type: "text",
          name: "color_add_name",
          id: "color_add_name",
          placeholder: "",
          "aria-label": "content input"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body pt-0" }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "colorchangeid",
          id: "colorchangeid",
          value: ""
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "row",
          staticStyle: { display: "none", padding: "5px 10px 5px 20px" },
          attrs: { id: "dlgNextErr" }
        },
        [_vm._v("\n                        error\n                    ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "page2_modal page2_content_text p-0" }, [
        _c("div", { staticClass: "container-fluid p-0 m-0" }, [
          _c("div", {
            staticClass: "row m-2",
            attrs: { id: "dlg-color-next-lang-list" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue":
/*!********************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppsWebsiteAppearanceTheme_vue_vue_type_template_id_83f67b84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppsWebsiteAppearanceTheme.vue?vue&type=template&id=83f67b84& */ "./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=template&id=83f67b84&");
/* harmony import */ var _AppsWebsiteAppearanceTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppsWebsiteAppearanceTheme.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppsWebsiteAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppsWebsiteAppearanceTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppsWebsiteAppearanceTheme_vue_vue_type_template_id_83f67b84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppsWebsiteAppearanceTheme_vue_vue_type_template_id_83f67b84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteAppearanceTheme.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=template&id=83f67b84&":
/*!***************************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=template&id=83f67b84& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_template_id_83f67b84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteAppearanceTheme.vue?vue&type=template&id=83f67b84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteAppearanceTheme.vue?vue&type=template&id=83f67b84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_template_id_83f67b84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteAppearanceTheme_vue_vue_type_template_id_83f67b84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);