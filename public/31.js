(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.jsonparse(window.Laravel.userinfo).id;
var tabstatus = 0;
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var checked_del_items = new Array();
var is_edit = false;
var edit_id = "";
var first_boxed = 0;
var is_left = 0;
var is_right = 0;
var permss;
var lang_name = '';
var stored_langs = '';
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
      getWWATLayoutList();
    }
  });
}

function getColorList(jsonstr, sel_id) {
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
      if (cid == sel_id) tags += '   <div id="addcolor_' + j + '" class="selectedThemeColorActive" data-id="' + cid + '" data-color="' + color + '" style="background: ' + color + '"></div>';else tags += '   <div id="addcolor_' + j + '" class="selectedThemeColor" data-id="' + cid + '" data-color="' + color + '" style="background: ' + color + '"></div>';
      tags += '   <div style="margin-left: 10px;"><span id="colorname_' + j + '" data-id="' + cid + '">' + color_name + '</span></div>';
      tags += '</div>';
      tags += '</div>';
    }

    $('#addedSystemThemeColorList').html(tags);
  }
}

function colorEvent() {
  $('div[id^="addcolor_"]').click(function () {
    if (permss.pwrite == 1) {
      var color_val = $(this).attr("data-color");
      var color_id = $(this).attr("data-id");
      $.ajax({
        url: 'admin.setWebsiteThemeColor',
        type: 'POST',
        data: {
          userid: userid,
          color: color_val,
          cid: color_id
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            var color_list = data.list.color_info;
            var sel_color = data.list.f_id;
            getColorList(color_list, sel_color);
            colorEvent();
          } else alert(data.msg);
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
  });
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
        var sel_color = data.list.f_id;
        getColorList(color_list, sel_color);
        colorEvent();
      } else alert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function setLayoutModalEvent() {
  $.ajax({
    url: 'admin.getWWATLayoutBoxedList',
    type: 'POST',
    data: {
      userid: userid
    },
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        var boxeds = data.boxeds;
        first_boxed = boxeds[0].id;
        var tags = '';

        for (var i = 0; i < boxeds.length; i++) {
          var id = boxeds[i].id;
          var name = boxeds[i].name;
          tags += '<option value="' + id + '">' + name + '</option>';
        }

        $('#Modal_WWATLayout_BoxedList').html(tags);
      } else alert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
  $('select[id="Modal_WWATLayout_Style"]').change(function () {
    var val = $(this).val();

    if (val == 'Fullwidth') {
      $('#BoxedListLayer').removeClass('active');
    } else if (val == 'Boxed') {
      $('#BoxedListLayer').addClass('active');
    }
  });
  $('input[id="Modal_WWATLayout_Left"]').change(function () {
    if ($(this).is(':checked')) {
      is_left = 1;
      $('#Modal_WWATLayout_left_occupied').attr('readonly', false);
      $('#Modal_WWATLayout_left_occupied').removeClass('bgcolor-input-text');
      $('#Modal_WWATLayout_left_occupied').addClass('border-input-text');
      $('#Modal_WWATLayout_left_padding').attr('readonly', false);
      $('#Modal_WWATLayout_left_padding').removeClass('bgcolor-input-text');
      $('#Modal_WWATLayout_left_padding').addClass('border-input-text');
    } else {
      is_left = 0;
      $('#Modal_WWATLayout_left_occupied').attr('readonly', true);
      $('#Modal_WWATLayout_left_occupied').removeClass('border-input-text');
      $('#Modal_WWATLayout_left_occupied').addClass('bgcolor-input-text');
      $('#Modal_WWATLayout_left_occupied').val('');
      $('#Modal_WWATLayout_left_padding').attr('readonly', true);
      $('#Modal_WWATLayout_left_padding').removeClass('border-input-text');
      $('#Modal_WWATLayout_left_padding').addClass('bgcolor-input-text');
      $('#Modal_WWATLayout_left_padding').val('');
    }
  });
  $('input[id="Modal_WWATLayout_Right"]').change(function () {
    if ($(this).is(':checked')) {
      is_right = 1;
      $('#Modal_WWATLayout_right_occupied').attr('readonly', false);
      $('#Modal_WWATLayout_right_occupied').removeClass('bgcolor-input-text');
      $('#Modal_WWATLayout_right_occupied').addClass('border-input-text');
      $('#Modal_WWATLayout_right_padding').attr('readonly', false);
      $('#Modal_WWATLayout_right_padding').removeClass('bgcolor-input-text');
      $('#Modal_WWATLayout_right_padding').addClass('border-input-text');
    } else {
      is_right = 0;
      $('#Modal_WWATLayout_right_occupied').attr('readonly', true);
      $('#Modal_WWATLayout_right_occupied').removeClass('border-input-text');
      $('#Modal_WWATLayout_right_occupied').addClass('bgcolor-input-text');
      $('#Modal_WWATLayout_right_occupied').val('');
      $('#Modal_WWATLayout_right_padding').attr('readonly', true);
      $('#Modal_WWATLayout_right_padding').removeClass('border-input-text');
      $('#Modal_WWATLayout_right_padding').addClass('bgcolor-input-text');
      $('#Modal_WWATLayout_right_padding').val('');
    }
  });
}

function setLayountModalValue(infos) {
  $('#Modal_WWATLayout_Name').val(infos[1]);
  $('#Modal_WWATLayout_Style').val(infos[2]);

  if (infos[2] == "Boxed") {
    $('#BoxedListLayer').addClass('active');
  } else {
    $('#BoxedListLayer').removeClass('active');
  }

  $('#Modal_WWATLayout_BoxedList').val(infos[3]);
  $('#Modal_WWATLayout_left_occupied').val(infos[4]);
  $('#Modal_WWATLayout_left_padding').val(infos[5]);
  is_left = infos[6];

  if (infos[6] == 0) {
    $('input[id="Modal_WWATLayout_Left"]').prop('checked', false);
    $('#Modal_WWATLayout_left_occupied').attr('readonly', true);
    $('#Modal_WWATLayout_left_occupied').removeClass('border-input-text');
    $('#Modal_WWATLayout_left_occupied').addClass('bgcolor-input-text');
    $('#Modal_WWATLayout_left_padding').attr('readonly', true);
    $('#Modal_WWATLayout_left_padding').removeClass('border-input-text');
    $('#Modal_WWATLayout_left_padding').addClass('bgcolor-input-text');
  } else {
    $('input[id="Modal_WWATLayout_Left"]').prop('checked', true);
    $('#Modal_WWATLayout_left_occupied').attr('readonly', false);
    $('#Modal_WWATLayout_left_occupied').removeClass('bgcolor-input-text');
    $('#Modal_WWATLayout_left_occupied').addClass('border-input-text');
    $('#Modal_WWATLayout_left_padding').attr('readonly', false);
    $('#Modal_WWATLayout_left_padding').removeClass('bgcolor-input-text');
    $('#Modal_WWATLayout_left_padding').addClass('border-input-text');
  }

  $('#Modal_WWATLayout_right_occupied').val(infos[7]);
  $('#Modal_WWATLayout_right_padding').val(infos[8]);
  is_right = infos[9];

  if (infos[9] == 0) {
    $('input[id="Modal_WWATLayout_Right"]').prop('checked', false);
    $('#Modal_WWATLayout_right_occupied').attr('readonly', true);
    $('#Modal_WWATLayout_right_occupied').removeClass('border-input-text');
    $('#Modal_WWATLayout_right_occupied').addClass('bgcolor-input-text');
    $('#Modal_WWATLayout_right_padding').attr('readonly', true);
    $('#Modal_WWATLayout_right_padding').removeClass('border-input-text');
    $('#Modal_WWATLayout_right_padding').addClass('bgcolor-input-text');
  } else {
    $('input[id="Modal_WWATLayout_Right"]').prop('checked', true);
    $('#Modal_WWATLayout_right_occupied').attr('readonly', false);
    $('#Modal_WWATLayout_right_occupied').removeClass('bgcolor-input-text');
    $('#Modal_WWATLayout_right_occupied').addClass('border-input-text');
    $('#Modal_WWATLayout_right_padding').attr('readonly', false);
    $('#Modal_WWATLayout_right_padding').removeClass('bgcolor-input-text');
    $('#Modal_WWATLayout_right_padding').addClass('border-input-text');
  }
}

function getWWATLayoutList() {
  $.ajax({
    url: 'admin.getWWATLayoutList',
    data: {
      userid: userid,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        $('#wwat_layout_content_lists').html('');
        if (lists != null && lists != '') showLayoutList(lists);
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

function showLayoutList(lists) {
  is_edit = false;
  edit_id = "";
  var tags = '';
  var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
  var btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
  var btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');

  for (var i = 0; i < lists.length; i++) {
    var infos = new Array();
    var id = lists[i].id;
    infos.push(id);
    var name = lists[i].name;
    infos.push(name);
    var style = lists[i].style;
    infos.push(style);
    if (style == "Boxed") style = lists[i].bname;
    infos.push(lists[i].bid);
    var left_occupied = lists[i].left_occupied;
    infos.push(left_occupied);
    var left_padding = lists[i].left_padding;
    infos.push(left_padding);
    if (left_padding == '' || left_padding == null) left_padding = '-';
    infos.push(lists[i].is_left);
    var right_occupied = lists[i].right_occupied;
    infos.push(right_occupied);
    var right_padding = lists[i].right_padding;
    infos.push(right_padding);
    if (right_padding == '' || right_padding == null) right_padding = '-';
    infos.push(lists[i].is_right);
    tags += '<tr class="layount_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '" data-info="' + infos + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="layoutCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>' + style + '</td>';
    tags += '   <td>' + left_occupied + '%</td>';
    tags += '   <td>' + left_padding + '</td>';
    tags += '   <td>' + right_occupied + '%</td>';
    tags += '   <td>' + right_padding + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="layout_content_list_edit-' + id + '" name="layout_content_list_edit-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#wwat_layout_content_lists').html(tags);
  $('input[id^="layoutCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="layout_content_list_edit-"]').change(function () {
    var id = $(this).attr("id");
    edit_id = id.split('-')[1];
    var info = $('.layount_content_list-' + edit_id).attr("data-info");
    var infos = info.split(',');
    var sel_val = $(this).val();

    if (sel_val == "change") {
      if (permss.pwrite == 1) {
        is_edit = true;
        setLayountModalValue(infos);
        $('#ModalWWATLayoutContent').modal('show');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
    } else if (sel_val == "delete") {
      if (permss.pdelete == 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.confirmAlert(deleteWWATLayoutList, edit_id, 'pgtxt_wantdeleteitem');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
    }
  });
}

function addWWATLayoutList() {
  var name = $('#Modal_WWATLayout_Name').val();
  var style = $('#Modal_WWATLayout_Style').val();
  var bid = $('#Modal_WWATLayout_BoxedList').val();
  var left_occ = $('#Modal_WWATLayout_left_occupied').val();
  var left = $('#Modal_WWATLayout_left_padding').val();
  var right_occ = $('#Modal_WWATLayout_right_occupied').val();
  var right = $('#Modal_WWATLayout_right_padding').val();

  if (name != null && name != '') {
    $.ajax({
      url: 'admin.addWWATLayoutList',
      data: {
        userid: userid,
        name: name,
        style: style,
        bid: bid,
        left_occ: left_occ,
        left: left,
        is_left: is_left,
        right_occ: right_occ,
        right: right,
        is_right: is_right,
        pstart: pstart,
        pcnt: pcnt
      },
      type: 'POST',
      success: function success(data) {
        if (data.msg === "ok") {
          var lists = data.lists;
          $('#wwat_layout_content_lists').html('');
          if (lists != null && lists != '') showLayoutList(lists);
          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
          $('#ModalWWATLayoutContent').modal('hide');
        } else {
          console.log(data.msg);
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  }
}

function editWWATLayoutList() {
  var name = $('#Modal_WWATLayout_Name').val();
  var style = $('#Modal_WWATLayout_Style').val();
  var boxed = $('#Modal_WWATLayout_BoxedList').val();
  var left_occ = $('#Modal_WWATLayout_left_occupied').val();
  var left = $('#Modal_WWATLayout_left_padding').val();
  var right_occ = $('#Modal_WWATLayout_right_occupied').val();
  var right = $('#Modal_WWATLayout_right_padding').val();
  var is_save = false;

  if (is_left == 1) {
    if (left_occ != null && left_occ != '') is_save = true;
  }

  if (is_right == 1) {
    if (right_occ != null || right_occ != '') is_save = true;
  }

  if (is_save) {
    $.ajax({
      url: 'admin.editWWATLayoutList',
      data: {
        userid: userid,
        editid: edit_id,
        name: name,
        style: style,
        boxed: boxed,
        left_occ: left_occ,
        left: left,
        is_left: is_left,
        right_occ: right_occ,
        right: right,
        is_right: is_right,
        pstart: pstart,
        pcnt: pcnt
      },
      type: 'POST',
      success: function success(data) {
        if (data.msg === "ok") {
          var lists = data.lists;
          $('#wwat_layout_content_lists').html('');
          if (lists != null && lists != '') showLayoutList(lists);
          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
          $('#ModalWWATLayoutContent').modal('hide');
        } else {
          console.log(data.msg);
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  }
}

function deleteWWATLayoutList(edit_id) {
  $.ajax({
    url: 'admin.deleteWWATLayoutList',
    data: {
      userid: userid,
      editid: edit_id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        $('#wwat_layout_content_lists').html('');
        if (lists != null && lists != '') showLayoutList(lists);
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

function allDeleteWWATLayoutList() {
  $('#layout_selected_all_delete').click(function () {
    if (permss.pdelete == 1) {
      if (checked_del_items.length > 0) {
        $.ajax({
          url: 'admin.allDeleteWWATLayoutList',
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
              $('#wwat_layout_content_lists').html('');
              if (lists != null && lists != '') showLayoutList(lists);
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
      }
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalAppearanceTheme",
  data: function data() {
    return {
      pageid: 'webs-wesglobal-appearance-theme-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_appearance: '',
      musususu_webs_wesglobal_appearance_theme: '',
      musu_system_theme: '',
      btntxt_add: '',
      btntxt_delete: '',
      btntxt_edit: '',
      btntxt_change: '',
      btntxt_boxed: '',
      pgtxt_name: '',
      pgtxt_color: '',
      pgtxt_list: '',
      pgtxt_layout: '',
      pgtxt_style: '',
      pgtxt_left: '',
      pgtxt_right: '',
      pgtxt_slider: '',
      pgtxt_bar: '',
      pgtxt_use: '',
      pgtxt_value: '',
      pgtxt_swidth: '',
      pgtxt_or: '',
      pgtxt_example: '',
      pgtxt_fullwidth: '',
      pgtxt_occupied: '',
      pgtxt_leftoccupieddesc: '',
      pgtxt_rightoccupieddesc: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      btntxt_ok: '',
      btntxt_cancel: ''
    };
  },
  computed: {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmususu_webs_wesglobal_appearance: function cmususu_webs_wesglobal_appearance() {
      return this.mususu_webs_wesglobal_appearance;
    },
    cmusususu_webs_wesglobal_appearance_theme: function cmusususu_webs_wesglobal_appearance_theme() {
      return this.musususu_webs_wesglobal_appearance_theme;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
    },
    cmusu_system_theme: function cmusu_system_theme() {
      return this.musu_system_theme;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
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
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_boxed: function cbtntxt_boxed() {
      return this.btntxt_boxed;
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
    cpgtxt_layout: function cpgtxt_layout() {
      return this.pgtxt_layout;
    },
    cpgtxt_style: function cpgtxt_style() {
      return this.pgtxt_style;
    },
    cpgtxt_left: function cpgtxt_left() {
      return this.pgtxt_left;
    },
    cpgtxt_right: function cpgtxt_right() {
      return this.pgtxt_right;
    },
    cpgtxt_slider: function cpgtxt_slider() {
      return this.pgtxt_slider;
    },
    cpgtxt_bar: function cpgtxt_bar() {
      return this.pgtxt_bar;
    },
    cpgtxt_fullwidth: function cpgtxt_fullwidth() {
      return this.pgtxt_fullwidth;
    },
    cpgtxt_occupied: function cpgtxt_occupied() {
      return this.pgtxt_occupied;
    },
    cpgtxt_leftoccupieddesc: function cpgtxt_leftoccupieddesc() {
      return this.pgtxt_leftoccupieddesc;
    },
    cpgtxt_rightoccupieddesc: function cpgtxt_rightoccupieddesc() {
      return this.pgtxt_rightoccupieddesc;
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
    contentchange: function contentchange() {
      //cckd
      page_lang = this.$store.state.defaultlang;
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        //console.log(obj.hasOwnProperty(key));
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);

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
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.permissionDefinition();
    this.getWWGStoredLang();
    this.sliderTabs();
  },
  methods: {
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
        } else if (subid == 'layout') {
          tabstatus = 1;
          setLayoutModalEvent();
          getWWATLayoutList();
          allDeleteWWATLayoutList();
        }
      });
    },
    initpage: function initpage() {
      for (var i = 0; i < stored_langs.length; i++) {
        if (page_lang == stored_langs[i].iso) {
          lang_name = stored_langs[i].name.toLowerCase();
          showThemeColorPage();
        }
      }

      $("#ModalWWATLayoutContent").on('hide.bs.modal', function () {
        $('select[id^="layout_content_list_edit-"]').val('');
      });
    },
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('admin.getSystemStoredLang').then(function (response) {
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
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list != null && list != '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
    },
    ShowColorPalette: function ShowColorPalette() {
      $('#hiddenThemeColorPicker').trigger('click');
    },
    AddLayoutBtn: function AddLayoutBtn() {
      if (permss.pcreate == 1) {
        is_edit = false;
        is_left = 0;
        is_right = 0;
        var infos = ['0', '', 'Fullwidth', first_boxed, '', '', 0, '', '', 0];
        setLayountModalValue(infos);
        $('#ModalWWATLayoutContent').modal('show');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
    },
    addWWATLayoutContentBtn: function addWWATLayoutContentBtn() {
      if (is_edit) editWWATLayoutList();else addWWATLayoutList();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table.table-lg td {\n    padding: 0.7rem 0.75rem;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.selectedThemeColor{\n    width: 50px;\n    border: 1px solid #888;\n    background: #ffffff;\n    cursor: pointer;\n}\n.selectedThemeColorActive{\n    width: 50px;\n    height: 22px;\n    margin-top: -1px;\n    border: 2px solid #000000;\n    background: #ffffff;\n    cursor: pointer;\n}\n#awa_page1_content_side_bar_text,\n#awa_page2_content_side_bar_text\n{\n    float: left;\n    cursor: pointer;\n    height: auto;\n}\n.awat_page_button{\n    width: 80px;\n}\n.d-flex.flex-wrap.flex-boxed{\n    display: none !important;\n    margin-bottom: 20px;\n    margin-left: 155px;\n}\n.d-flex.flex-wrap.flex-boxed.active{\n    display: block !important;\n    margin-bottom: 20px;\n    margin-left: 155px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=template&id=883bb11e&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=template&id=883bb11e& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [
          _vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_appearance_theme))
        ]),
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
              _vm._s(_vm.cmu_webs) +
              "   >>  " +
              _vm._s(_vm.cmusu_webs_wesglobal) +
              "   >>  " +
              _vm._s(_vm.cmususu_webs_wesglobal_appearance) +
              "  >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_appearance_theme) +
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
                      "data-target": "layout"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_layout))]
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
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: "col-md-12",
                staticStyle: { "padding-top": "20px" }
              },
              [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card-body",
                      staticStyle: { padding: "20px" }
                    },
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
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list",
          attrs: { id: "layout" }
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
                  attrs: { id: "awat_addlayout" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.AddLayoutBtn()
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
                          _vm._v(_vm._s(_vm.cpgtxt_style))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { border: "0" } }, [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_left) +
                              " " +
                              _vm._s(_vm.cpgtxt_occupied)
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { border: "0" } }, [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_left) +
                              " " +
                              _vm._s(_vm.cpgtxt_slider) +
                              _vm._s(_vm.cpgtxt_bar)
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { border: "0" } }, [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_right) +
                              " " +
                              _vm._s(_vm.cpgtxt_occupied)
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { border: "0" } }, [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_right) +
                              " " +
                              _vm._s(_vm.cpgtxt_slider) +
                              _vm._s(_vm.cpgtxt_bar)
                          )
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
                                attrs: { id: "layout_selected_all_delete" }
                              },
                              [_vm._v(_vm._s(_vm.cbtntxt_delete))]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("tbody", { attrs: { id: "wwat_layout_content_lists" } })
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
      { staticClass: "modal fade", attrs: { id: "ModalWWATLayoutContent" } },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered modal-sm",
            staticStyle: { "min-width": "650px!important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h4",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "Modal_WWATLayout_Title" }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_add) + " " + _vm._s(_vm.cpgtxt_layout)
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
                  attrs: { id: "AddWWATLayoutModalBody" }
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
                          _c("div", { staticClass: "col-md-3" }, [
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
                          _c("div", { staticClass: "col-md-3" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "margin-top": "8px",
                                  color: "#666"
                                }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_style))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c(
                              "select",
                              {
                                staticClass: "form-control border-input-text",
                                staticStyle: { "margin-left": "-9px" },
                                attrs: {
                                  id: "Modal_WWATLayout_Style",
                                  name: "Modal_WWATLayout_Style"
                                }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    attrs: { selected: "", value: "Fullwidth" }
                                  },
                                  [_vm._v(_vm._s(_vm.cpgtxt_fullwidth))]
                                ),
                                _vm._v(
                                  "';\n                                    "
                                ),
                                _c("option", { attrs: { value: "Boxed" } }, [
                                  _vm._v(_vm._s(_vm.cbtntxt_boxed))
                                ]),
                                _vm._v("';\n                                ")
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "d-flex flex-wrap",
                          staticStyle: { "margin-bottom": "20px" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "col-md-12",
                              staticStyle: { display: "flex" }
                            },
                            [
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("input", {
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    name: "Modal_WWATLayout_Left",
                                    id: "Modal_WWATLayout_Left",
                                    value: ""
                                  }
                                }),
                                _vm._v(
                                  _vm._s(_vm.cpgtxt_left) +
                                    " " +
                                    _vm._s(_vm.cpgtxt_slider) +
                                    _vm._s(_vm.cpgtxt_bar) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(5),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    margin: "auto 0",
                                    width: "40px",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("%")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "11px",
                                    "margin-left": "5px"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticStyle: { "margin-top": "8px" } },
                                    [
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#b0b0af" } },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.cpgtxt_leftoccupieddesc)
                                          )
                                        ]
                                      ),
                                      _vm._v(
                                        " \n                                    "
                                      )
                                    ],
                                    1
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
                          staticClass: "d-flex flex-wrap",
                          staticStyle: { "margin-bottom": "20px" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "col-md-12",
                              staticStyle: { display: "flex" }
                            },
                            [
                              _c("div", {
                                staticClass: "col-md-2",
                                staticStyle: { "margin-right": "50px" }
                              }),
                              _vm._v(" "),
                              _vm._m(6),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "11px",
                                    "margin-left": "5px"
                                  }
                                },
                                [
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
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("px")]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#b0b0af" } },
                                        [_vm._v(_vm._s(_vm.cpgtxt_or))]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("em")]
                                      )
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
                                        [
                                          _vm._v(
                                            _vm._s(_vm.cpgtxt_example) + ":"
                                          )
                                        ]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("20px 0")]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#b0b0af" } },
                                        [_vm._v(_vm._s(_vm.cpgtxt_or))]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("20px 0 30px 0")]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#b0b0af" } },
                                        [_vm._v(_vm._s(_vm.cpgtxt_or))]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("2em 0")]
                                      )
                                    ],
                                    1
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
                          staticClass: "d-flex flex-wrap",
                          staticStyle: { "margin-bottom": "20px" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "col-md-12",
                              staticStyle: { display: "flex" }
                            },
                            [
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("input", {
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    name: "Modal_WWATLayout_Right",
                                    id: "Modal_WWATLayout_Right",
                                    value: ""
                                  }
                                }),
                                _vm._v(
                                  _vm._s(_vm.cpgtxt_right) +
                                    " " +
                                    _vm._s(_vm.cpgtxt_slider) +
                                    _vm._s(_vm.cpgtxt_bar) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(7),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    margin: "auto 0",
                                    width: "40px",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v("%")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "11px",
                                    "margin-left": "5px"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticStyle: { "margin-top": "8px" } },
                                    [
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#b0b0af" } },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.cpgtxt_rightoccupieddesc)
                                          )
                                        ]
                                      ),
                                      _vm._v(
                                        " \n                                    "
                                      )
                                    ],
                                    1
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
                          staticClass: "d-flex flex-wrap",
                          staticStyle: { "margin-bottom": "20px" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "col-md-12",
                              staticStyle: { display: "flex" }
                            },
                            [
                              _c("div", {
                                staticClass: "col-md-2",
                                staticStyle: { "margin-right": "50px" }
                              }),
                              _vm._v(" "),
                              _vm._m(8),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "font-size": "11px",
                                    "margin-left": "5px"
                                  }
                                },
                                [
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
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("px")]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#b0b0af" } },
                                        [_vm._v(_vm._s(_vm.cpgtxt_or))]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("em")]
                                      )
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
                                        [
                                          _vm._v(
                                            _vm._s(_vm.cpgtxt_example) + ":"
                                          )
                                        ]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("20px 0")]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#b0b0af" } },
                                        [_vm._v(_vm._s(_vm.cpgtxt_or))]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("20px 0 30px 0")]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#b0b0af" } },
                                        [_vm._v(_vm._s(_vm.cpgtxt_or))]
                                      ),
                                      _vm._v(
                                        " \n                                        "
                                      ),
                                      _c(
                                        "font",
                                        { staticStyle: { color: "#000" } },
                                        [_vm._v("2em 0")]
                                      )
                                    ],
                                    1
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
                                  return _vm.addWWATLayoutContentBtn()
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
          id: "webs-wesglobal-appearance-theme-fav",
          "data-status": "off",
          "data-page-info": "Theme_webs-wesglobal-appearance-theme"
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
    return _c("div", { staticClass: "col-md-9" }, [
      _c("input", {
        staticClass: "form-control border-input-text",
        staticStyle: { "margin-left": "-9px" },
        attrs: {
          type: "text",
          id: "Modal_WWATLayout_Name",
          name: "Modal_WWATLayout_Name"
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
        staticClass: "d-flex flex-wrap flex-boxed",
        attrs: { id: "BoxedListLayer" }
      },
      [
        _c("div", { staticClass: "col-md-12" }, [
          _c("select", {
            staticClass: "form-control border-input-text",
            staticStyle: { "margin-left": "-9px" },
            attrs: {
              id: "Modal_WWATLayout_BoxedList",
              name: "Modal_WWATLayout_BoxedList"
            }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { margin: "auto 0" } }, [
      _c("input", {
        staticClass: "form-control bgcolor-input-text",
        staticStyle: { width: "160px" },
        attrs: {
          type: "text",
          id: "Modal_WWATLayout_left_occupied",
          readonly: "",
          name: "Modal_WWATLayout_left_occupied"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { margin: "auto 0" } }, [
      _c("input", {
        staticClass: "form-control bgcolor-input-text",
        attrs: {
          type: "text",
          id: "Modal_WWATLayout_left_padding",
          readonly: "",
          name: "Modal_WWATLayout_left_padding"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { margin: "auto 0" } }, [
      _c("input", {
        staticClass: "form-control bgcolor-input-text",
        staticStyle: { width: "160px" },
        attrs: {
          type: "text",
          id: "Modal_WWATLayout_right_occupied",
          readonly: "",
          name: "Modal_WWATLayout_right_occupied"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { margin: "auto 0" } }, [
      _c("input", {
        staticClass: "form-control bgcolor-input-text",
        attrs: {
          type: "text",
          id: "Modal_WWATLayout_right_padding",
          readonly: "",
          name: "Modal_WWATLayout_right_padding"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue":
/*!**********************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalAppearanceTheme_vue_vue_type_template_id_883bb11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalAppearanceTheme.vue?vue&type=template&id=883bb11e& */ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=template&id=883bb11e&");
/* harmony import */ var _WebsWesGlobalAppearanceTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalAppearanceTheme.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalAppearanceTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalAppearanceTheme_vue_vue_type_template_id_883bb11e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalAppearanceTheme_vue_vue_type_template_id_883bb11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceTheme.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=template&id=883bb11e&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=template&id=883bb11e& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_template_id_883bb11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceTheme.vue?vue&type=template&id=883bb11e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceTheme.vue?vue&type=template&id=883bb11e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_template_id_883bb11e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceTheme_vue_vue_type_template_id_883bb11e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);