(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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





var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.jsonparse(window.Laravel.userinfo).id;
var preview = '';
var tabstatus = 0;
var vueOBJ = null;
var wwgfield = 'topheader';
var btntxt_save = "";
var btntxt_delete = "";
var btntxt_edit = "";
var btntxt_change = "";
var checked_del_items = new Array();
var categorys = new Array();
var systemTexts = new Array();
var sub_c_id = 0;
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var is_subedit = false;
var subedit_id = 0;
var subheader_breadcrumbs_hide_check = 0;
var subheader_title_hide_check = 0;
var subheader_fixed_check = 1;
var subheader_bgcolor_check = 0;
var subheader_name = "";
var subheader_category_id = 0;
var subheader_style = "";
var subheader_padding = "";
var subheader_pagetitle_id = 0;
var subheader_pagetitle_size = 0;
var subheader_pagetitle_color = "";
var subheader_breadcrumbs_id = 0;
var subheader_breadcrumbs_size = 0;
var subheader_breadcrumbs_color = "";
var subheader_background_image = "";
var subheader_background_color = "";

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

    if (tabstatus == 0) {
      showRolesDepartmentList();
    } else if (tabstatus == 1) {
      showRolesPositionList();
    } else if (tabstatus == 2) {}
  });
}

function initTopHeader() {}

function getTopHeader() {}

function initHeader() {}

function getHeader() {} // Subheader tab start /////////////////////////////////////////////////////////////////////////////////////////////


function initSubheaderCategory() {
  getSubheaderCategoryList();
  $('#awah_sub_category_add').click(function () {
    $('#category_item_name').val('');
    $('#ModalAddCategory').modal('show');
  });
  $('#awah_sub_category_edit').click(function () {
    $('#ModalEditCategory').modal('show');
  });
  $('#awa_system_field_images').change(function () {
    var imgstyle_id = $('#awa_system_field_images').val();
    $.ajax({
      url: 'admin.setAWAHeadSubheaderBackground',
      data: {
        userid: userid,
        imgstyle_id: imgstyle_id
      },
      type: 'POST',
      success: function success(data) {
        modalSelectImageCondition(data.lists);
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  });
}

function modifyFunc(lists) {
  editSubheaderCategoryList(lists);
  showSearchSubheaderCategoryList(lists);
}

function getSubheaderCategoryList() {
  $.ajax({
    url: 'admin.getAWAHeadSubheaderCategoryList',
    data: {
      userid: userid,
      sc_id: sub_c_id
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        systemTexts = data.texts;
        sub_c_id = data.scid;
        if (data.lists == null) categorys = new Array();else categorys = data.lists;
        getImageStyleList(data.images, data.selimg);
        modifyFunc(data.lists);
        showCategoryList();
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function showSearchSubheaderCategoryList(lists) {
  var tags = '<option selected value="0">Name</option>';

  if (lists != null) {
    for (var i = 0; i < lists.length; i++) {
      var id = lists[i].scid;
      var name = lists[i].scname;
      tags += '<option value="' + id + '">' + name + '</option>';
    }
  }

  $('#subheader_category_items').html(tags);
}

function showCategoryList() {
  var tags = '';

  for (var i = 0; i < categorys.length; i++) {
    var id = categorys[i].scid;
    var name = categorys[i].scname;
    tags += '<option value="' + id + '">' + name + '</option>';
  }

  $('#Modal_Category_List').html(tags);
}

function addSubHeaderCategoryFunc() {
  var category_name = $('#category_item_name').val();
  $.ajax({
    url: 'admin.addAWAHeadSubheader',
    data: {
      userid: userid,
      sc_id: sub_c_id,
      category_name: category_name
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        sub_c_id = data.scid;
        modifyFunc(data.lists);
        $('#ModalAddCategory').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function editSubheaderCategoryList(lists) {
  $('#awa_subheader_category_lists').html('');
  var tags = "";
  if (lists == null) return;

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].scid;
    var name = lists[i].scname;
    tags += '<tr style="border-bottom: 1px solid #e4e2e2;">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="text" id="subheader_category-' + id + '" value="' + name + '" style="border: none;">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="awa_category_item-' + id + '" name="awa_category_item-' + id + '">';
    tags += '               <option selected value="">' + btntxt_edit + '</option>';
    tags += '               <option value="save">' + btntxt_save + '</option>';
    tags += '               <option value="delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#awa_subheader_category_lists').html(tags);
  $('select[id^="awa_category_item-"]').change(function () {
    var id = $(this).attr("id");
    var event_id = id.split('-')[1];
    var sel_val = $(this).val();
    var scname = $('#subheader_category-' + event_id).val();

    if (sel_val == "save") {
      $.ajax({
        url: 'admin.saveAWAHeadSubheaderCategory',
        data: {
          userid: userid,
          sc_id: event_id,
          sc_name: scname
        },
        type: 'POST',
        success: function success(data) {
          if (data.msg === "ok") {
            sub_c_id = data.scid;
            modifyFunc(data.lists);
          } else {
            console.log(data.msg);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    } else if (sel_val == "delete") {
      if (window.confirm("Do you want to delete this item")) {
        $.ajax({
          url: 'admin.deleteAWAHeadSubheaderCategory',
          data: {
            sc_id: event_id,
            userid: userid
          },
          type: 'POST',
          success: function success(data) {
            if (data.msg === "ok") {
              sub_c_id = data.scid;
              modifyFunc(data.lists);
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
  });
}

function modalSelectImageCondition(data) {
  var image_size = data.size;
  var image_capacity = data.capacity;
  $('#hide_selectable_image_size').val(image_size);
  $('#hide_selectable_image_capacity').val(image_capacity);
  var size = image_size.split('*');
  $('#awa_subheader_selectable_image_size').text(size[0] + "px " + size[1] + "px");
  $('#awa_subheader_selectable_image_capacity').text(image_capacity + " kb");
}

function getImageStyleList(lists, selimg) {
  var tags = '';
  if (selimg == 0) tags += '<option selected value=""></option>';else tags += '<option value=""></option>';

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].id;
    var name = lists[i].name;

    if (selimg == id) {
      tags += '<option selected value="' + id + '">' + name + '</option>';
      modalSelectImageCondition(lists[i]);
    } else tags += '<option value="' + id + '">' + name + '</option>';
  }

  $('#awa_system_field_images').html(tags);
}

function getSystemFieldTextList() {
  var tags = '';

  for (var i = 0; i < systemTexts.length; i++) {
    var id = systemTexts[i].id;
    var name = systemTexts[i].name;
    tags += '<option value="' + id + '">' + name + '</option>';
  }

  $('#Modal_Subheader_pagetitle').html(tags);
  $('#Modal_Subheader_breadcrumbs').html(tags);
}

function subContentList(lists, cg_lists) {
  $('#awa_subheader_content_lists').html('');
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].id;
    var name = lists[i].name;
    var category = cg_lists[i];
    tags += '<tr class="sub_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="subcontCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>' + category + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="sub_content_list_edit-' + id + '" name="sub_content_list_edit-' + id + '">';
    tags += '               <option selected value="">' + btntxt_edit + '</option>';
    tags += '               <option value="change">' + btntxt_change + '</option>';
    tags += '               <option value="delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#awa_subheader_content_lists').html(tags);
  $('input[id^="subcontCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="sub_content_list_edit-"]').change(function () {
    var id = $(this).attr("id");
    var event_id = id.split('-')[1];
    var sel_val = $(this).val();

    if ($('#subcontCheckbox_' + event_id).is(':checked')) {
      if (sel_val == "change") {
        var item_name = $('.sua_department_item-' + event_id).attr("data-name");
        is_subedit = true;
        subedit_id = event_id;
        showCategoryList();
        getSystemFieldTextList();
        SubheaderAddModalEvent();
        editSubContentModal(event_id);
      } else if (sel_val == "delete") {
        if (window.confirm("Do you want to delete this item")) {
          deldteSubheaderContentFunc(event_id);
        }
      }
    }
  });
}

function editSubContentModal(id) {
  $.ajax({
    url: 'admin.showAWAHeadSubheaderContentItem',
    data: {
      userid: userid,
      id: id
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          $('#Modal_Subheader_Name').val(lists.name);
          $('#Modal_Category_List').val(lists.scid);
          $('#Modal_Subheader_Styles').val(lists.style);
          var hides = lists.hide.split(':');
          if (hides[0] == 1) $('#Modal_Breadcrumbs_Hide').attr('checked', true);else $('#Modal_Breadcrumbs_Hide').attr('checked', false);
          if (hides[1] == 1) $('#Modal_Title_Hide').attr('checked', true);else $('#Modal_Title_Hide').attr('checked', false);

          if (lists.fixed == 0) {
            $('#Modal_Subheader_fixed_yes').attr("checked", false);
            $('#Modal_Subheader_fixed_no').attr("checked", true);
          } else {
            $('#Modal_Subheader_fixed_yes').attr("checked", true);
            $('#Modal_Subheader_fixed_no').attr("checked", false);
          }

          $('#Modal_Subheader_padding').val(lists.padding);
          $('#Modal_Subheader_pagetitle').val(lists.pagetitle);
          $('#Modal_Subheader_pagetitle_size').val(lists.pagetitle_size);
          $('#Modal_Subheader_breadcrumbs').val(lists.breadcrumbs);
          $('#Modal_Subheader_breadcrumbs_size').val(lists.breadcrumbs_size);
          $('#Modal_Subheader_background').val(lists.bg_img);
          if (lists.bg_color_check == 1) $('#Modal_Subheader_background_check').attr('checked', true);else $('#Modal_Subheader_background_check').attr('checked', false);
          setSubheaderColorPickers(lists.pagetitle_color, lists.breadcrumbs_color, lists.bg_color);
          $('#ModalAddSubContent').modal('show');
        }
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function getSubheaderContentList(is_search) {
  var search_id = $('#subheader_category_items').val();
  var search_txt = $('#subheader_search_cont').val();

  if (is_search == 0) {
    search_id = "";
    search_txt = "";
  }

  $.ajax({
    url: 'admin.getAWAHeadSubheaderContentList',
    data: {
      userid: userid,
      search_id: search_id,
      search_txt: search_txt,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var cg_lists = data.category_list;

        if (lists !== null && lists != "") {
          subContentList(lists, cg_lists);
        } else $('#awa_subheader_content_lists').html('');

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

function SubheaderAddModalEvent() {
  $('input[name="Modal_Subheader_fixed"]').on("click", function () {
    var v = $(this).val();

    if (v == 'yes') {
      $('#Modal_Subheader_fixed_yes').attr("checked", true);
      $('#Modal_Subheader_fixed_no').attr("checked", false);
      subheader_fixed_check = 1;
    } else if (v == 'no') {
      $('#Modal_Subheader_fixed_yes').attr("checked", false);
      $('#Modal_Subheader_fixed_no').attr("checked", true);
      subheader_fixed_check = 0;
    }
  });
}

function setSubheaderColorPickers(color1, color2, color3) {
  $('#subheader_pagetitle_colorpicker_value').text(color1);
  $('#subheader_pagetitle_color').val(color1);
  $('#subheader_breadcrumbs_colorpicker_value').text(color2);
  $('#subheader_breadcrumbs_color').val(color2);
  $('#subheader_background_colorpicker_value').text(color3);
  $('#subheader_background_color').val(color3);
  var subheader_pagetitle_colorpicker = document.getElementById('subheader_pagetitle_colorpicker');
  var picker1 = new ColorPicker(subheader_pagetitle_colorpicker, color1);
  subheader_pagetitle_colorpicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa;
    $('#subheader_pagetitle_colorpicker_value').text(color);
    $('#subheader_pagetitle_color').val(color);
  });
  var subheader_breadcrumbs_colorpicker = document.getElementById('subheader_breadcrumbs_colorpicker');
  var picker2 = new ColorPicker(subheader_breadcrumbs_colorpicker, color2);
  subheader_breadcrumbs_colorpicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa;
    $('#subheader_breadcrumbs_colorpicker_value').text(color);
    $('#subheader_breadcrumbs_color').val(color);
  });
  var subheader_background_colorpicker = document.getElementById('subheader_background_colorpicker');
  var picker3 = new ColorPicker(subheader_background_colorpicker, color3);
  subheader_background_colorpicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa;
    $('#subheader_background_colorpicker_value').text(color);
    $('#subheader_background_color').val(color);
  });
}

function SubheaderAddModalFunc() {
  subheader_name = $('#Modal_Subheader_Name').val();
  subheader_category_id = $('#Modal_Category_List').val();
  subheader_style = $('#Modal_Subheader_Styles').val();

  if ($('#Modal_Breadcrumbs_Hide').is(':checked')) {
    subheader_breadcrumbs_hide_check = 1;
  } else {
    subheader_breadcrumbs_hide_check = 0;
  }

  if ($('#Modal_Title_Hide').is(':checked')) {
    subheader_title_hide_check = 1;
  } else {
    subheader_title_hide_check = 0;
  }

  if ($('#Modal_Subheader_background_check').is(':checked')) {
    subheader_bgcolor_check = 1;
  } else {
    subheader_bgcolor_check = 0;
  }

  subheader_padding = $('#Modal_Subheader_padding').val();
  subheader_pagetitle_id = $('#Modal_Subheader_pagetitle').val();
  subheader_pagetitle_size = $('#Modal_Subheader_pagetitle_size').val();
  subheader_pagetitle_color = $('#subheader_pagetitle_color').val();
  subheader_breadcrumbs_id = $('#Modal_Subheader_breadcrumbs').val();
  subheader_breadcrumbs_size = $('#Modal_Subheader_breadcrumbs_size').val();
  subheader_breadcrumbs_color = $('#subheader_breadcrumbs_color').val();
  subheader_background_image = $('#Modal_Subheader_background').val();
  subheader_background_color = $('#subheader_background_color').val();
}

function addSubheaderContentFunc() {
  SubheaderAddModalFunc();
  var search_id = $('#subheader_category_items').val();
  var search_txt = $('#subheader_search_cont').val();
  var postData = {
    userid: userid,
    search_id: search_id,
    search_txt: search_txt,
    pstart: pstart,
    pcnt: pcnt,
    subheader_name: subheader_name,
    subheader_category_id: subheader_category_id,
    subheader_style: subheader_style,
    subheader_breadcrumbs_hide_check: subheader_breadcrumbs_hide_check,
    subheader_title_hide_check: subheader_title_hide_check,
    subheader_fixed_check: subheader_fixed_check,
    subheader_bgcolor_check: subheader_bgcolor_check,
    subheader_padding: subheader_padding,
    subheader_pagetitle_id: subheader_pagetitle_id,
    subheader_pagetitle_size: subheader_pagetitle_size,
    subheader_pagetitle_color: subheader_pagetitle_color,
    subheader_breadcrumbs_id: subheader_breadcrumbs_id,
    subheader_breadcrumbs_size: subheader_breadcrumbs_size,
    subheader_breadcrumbs_color: subheader_breadcrumbs_color,
    subheader_background_image: subheader_background_image,
    subheader_background_color: subheader_background_color
  };
  $.ajax({
    url: 'admin.setAWAHeadSubheaderContentList',
    data: postData,
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var cg_lists = data.category_list;

        if (lists !== null && lists != "") {
          subContentList(lists, cg_lists);
        } else $('#awa_subheader_content_lists').html('');

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

function editSubheaderContentFunc() {
  SubheaderAddModalFunc();
  var search_id = $('#subheader_category_items').val();
  var search_txt = $('#subheader_search_cont').val();
  var postData = {
    userid: userid,
    editid: subedit_id,
    search_id: search_id,
    search_txt: search_txt,
    pstart: pstart,
    pcnt: pcnt,
    subheader_name: subheader_name,
    subheader_category_id: subheader_category_id,
    subheader_style: subheader_style,
    subheader_breadcrumbs_hide_check: subheader_breadcrumbs_hide_check,
    subheader_title_hide_check: subheader_title_hide_check,
    subheader_fixed_check: subheader_fixed_check,
    subheader_bgcolor_check: subheader_bgcolor_check,
    subheader_padding: subheader_padding,
    subheader_pagetitle_id: subheader_pagetitle_id,
    subheader_pagetitle_size: subheader_pagetitle_size,
    subheader_pagetitle_color: subheader_pagetitle_color,
    subheader_breadcrumbs_id: subheader_breadcrumbs_id,
    subheader_breadcrumbs_size: subheader_breadcrumbs_size,
    subheader_breadcrumbs_color: subheader_breadcrumbs_color,
    subheader_background_image: subheader_background_image,
    subheader_background_color: subheader_background_color
  };
  $.ajax({
    url: 'admin.editAWAHeadSubheaderContentList',
    data: postData,
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var cg_lists = data.category_list;

        if (lists !== null && lists != "") {
          subContentList(lists, cg_lists);
        } else $('#awa_subheader_content_lists').html('');

        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        is_subedit = false;
        subedit_id = 0;
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
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
      search_id: search_id,
      search_txt: search_txt,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var cg_lists = data.category_list;

        if (lists !== null && lists != "") {
          subContentList(lists, cg_lists);
        } else $('#awa_subheader_content_lists').html('');

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

function allDeleteFunc() {
  $('.subheader_selected_all_delete').click(function () {
    var search_id = $('#subheader_category_items').val();
    var search_txt = $('#subheader_search_cont').val();

    if (checked_del_items.length > 0) {
      $.ajax({
        url: 'admin.allDeleteAWASubheaderChecked',
        data: {
          userid: userid,
          ids: checked_del_items,
          search_id: search_id,
          search_txt: search_txt,
          pstart: pstart,
          pcnt: pcnt
        },
        type: 'POST',
        success: function success(data) {
          if (data.msg === "ok") {
            var lists = data.lists;
            var cg_lists = data.category_list;

            if (lists !== null && lists != "") {
              subContentList(lists, cg_lists);
            } else $('#awa_subheader_content_lists').html('');

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
  });
} // Subheader tab end ///////////////////////////////////////////////////////////////////////////////////////////////


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppsWebSiteToolsMenu",
  data: function data() {
    return {
      pageid: 'apps-website-tools-menu-fav',
      mu_apps: '',
      musu_apps_website: '',
      mususu_apps_website_appear: '',
      musususu_apps_website_appear_head: '',
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_save: '',
      btntxt_delete: '',
      btntxt_change: '',
      btntxt_topheader: '',
      btntxt_header: '',
      btntxt_subheader: '',
      btntxt_browse: '',
      pgtxt_category: '',
      pgtxt_background: '',
      pgtxt_list: '',
      pgtxt_name: '',
      pgtxt_operation: '',
      pgtxt_style: '',
      pgtxt_titleontheleft: '',
      pgtxt_titleontheright: '',
      pgtxt_breadcrumbsontheleft: '',
      pgtxt_breadcrumbsontheright: '',
      pgtxt_titlebreadcrumbsontheleft: '',
      pgtxt_titlebreadcrumbsontheright: '',
      pgtxt_titlebreadcrumbsonthemiddle: '',
      pgtxt_hide: '',
      pgtxt_fixed: '',
      pgtxt_breadcrumbs: '',
      pgtxt_page: '',
      pgtxt_title: '',
      pgtxt_yes: '',
      pgtxt_no: '',
      pgtxt_padding: '',
      pgtxt_use: '',
      pgtxt_value: '',
      pgtxt_swidth: '',
      pgtxt_or: '',
      pgtxt_example: '',
      pgtxt_readcontentfields: '',
      pgtxt_specifiedsize: '',
      pgtxt_nogreaterthan: '',
      pgtxt_color: ''
    };
  },
  computed: {
    cmususu_apps_website_appear: function cmususu_apps_website_appear() {
      return this.mususu_apps_website_appear;
    },
    cmusususu_apps_website_appear_head: function cmusususu_apps_website_appear_head() {
      return this.musususu_apps_website_appear_head;
    },
    cmu_apps: function cmu_apps() {
      return this.mu_apps;
    },
    cmusu_apps_website: function cmusu_apps_website() {
      return this.musu_apps_website;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_save: function cbtntxt_save() {
      return this.btntxt_save;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cbtntxt_topheader: function cbtntxt_topheader() {
      return this.btntxt_topheader;
    },
    cbtntxt_header: function cbtntxt_header() {
      return this.btntxt_header;
    },
    cbtntxt_subheader: function cbtntxt_subheader() {
      return this.btntxt_subheader;
    },
    cbtntxt_browse: function cbtntxt_browse() {
      return this.btntxt_browse;
    },
    cpgtxt_category: function cpgtxt_category() {
      return this.pgtxt_category;
    },
    cpgtxt_background: function cpgtxt_background() {
      return this.pgtxt_background;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_operation: function cpgtxt_operation() {
      return this.pgtxt_operation;
    },
    cpgtxt_style: function cpgtxt_style() {
      return this.pgtxt_style;
    },
    cpgtxt_titleontheleft: function cpgtxt_titleontheleft() {
      return this.pgtxt_titleontheleft;
    },
    cpgtxt_titleontheright: function cpgtxt_titleontheright() {
      return this.pgtxt_titleontheright;
    },
    cpgtxt_breadcrumbsontheleft: function cpgtxt_breadcrumbsontheleft() {
      return this.pgtxt_breadcrumbsontheleft;
    },
    cpgtxt_breadcrumbsontheright: function cpgtxt_breadcrumbsontheright() {
      return this.pgtxt_breadcrumbsontheright;
    },
    cpgtxt_titlebreadcrumbsontheleft: function cpgtxt_titlebreadcrumbsontheleft() {
      return this.pgtxt_titlebreadcrumbsontheleft;
    },
    cpgtxt_titlebreadcrumbsontheright: function cpgtxt_titlebreadcrumbsontheright() {
      return this.pgtxt_titlebreadcrumbsontheright;
    },
    cpgtxt_titlebreadcrumbsonthemiddle: function cpgtxt_titlebreadcrumbsonthemiddle() {
      return this.pgtxt_titlebreadcrumbsonthemiddle;
    },
    cpgtxt_hide: function cpgtxt_hide() {
      return this.pgtxt_hide;
    },
    cpgtxt_fixed: function cpgtxt_fixed() {
      return this.pgtxt_fixed;
    },
    cpgtxt_breadcrumbs: function cpgtxt_breadcrumbs() {
      return this.pgtxt_breadcrumbs;
    },
    cpgtxt_page: function cpgtxt_page() {
      return this.pgtxt_page;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_yes: function cpgtxt_yes() {
      return this.pgtxt_yes;
    },
    cpgtxt_no: function cpgtxt_no() {
      return this.pgtxt_no;
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
    cpgtxt_readcontentfields: function cpgtxt_readcontentfields() {
      return this.pgtxt_readcontentfields;
    },
    cpgtxt_specifiedsize: function cpgtxt_specifiedsize() {
      return this.pgtxt_specifiedsize;
    },
    cpgtxt_nogreaterthan: function cpgtxt_nogreaterthan() {
      return this.pgtxt_nogreaterthan;
    },
    cpgtxt_color: function cpgtxt_color() {
      return this.pgtxt_color;
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

    btntxt_save = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_save');
    btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
    btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
    btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
    this.initpage();
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
    initpage: function initpage() {
      this.sliderTabs();
      getTopHeader();
    } //initpage
    ,
    loaddata: function loaddata() {},
    addDlgCategory: function addDlgCategory() {},
    sliderTabs: function sliderTabs() {
      $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');
        $('.col-md-12.page_slider_content_list').removeClass('active');
        $('#' + subid).addClass('active');

        if (subid == 'topheader') {
          tabstatus = 0;
          wwgfield = 'topheader';
          getTopHeader();
        } else if (subid == 'header') {
          tabstatus = 1;
          wwgfield = 'header';
          getHeader();
        } else if (subid == 'subheader') {
          tabstatus = 2;
          wwgfield = 'subheader';
          systemTexts = new Array();
          initSubheaderCategory();
          getSubheaderContentList(0);
          allDeleteFunc();
        }
      });
      initTopHeader();
      initHeader();
    },
    addCategoryModalBtn: function addCategoryModalBtn() {
      addSubHeaderCategoryFunc();
    },
    SearchSubheaderCategoryBtn: function SearchSubheaderCategoryBtn() {
      getSubheaderContentList(1);
    },
    addAWASubheaderContentModalBtn: function addAWASubheaderContentModalBtn() {
      is_subedit = false;
      subedit_id = 0;
      getSystemFieldTextList();
      getSubheaderCategoryList();
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
      $('#ModalAddSubContent').modal('show');
    },
    addSubheaderImageBtn: function addSubheaderImageBtn() {
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID("Modal_Subheader_background", "Modal_Subheader_background");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#ModalAddSubContent').modal('hide');
      $('#MediaDirectoryModal').modal('show');
      $("#MediaDirectoryModal").on('hide.bs.modal', function () {
        $('#ModalAddSubContent').modal('show');
      });
    },
    addSubheaderContentBtn: function addSubheaderContentBtn() {
      $('#ModalAddSubContent').modal('hide');
      if (is_subedit) editSubheaderContentFunc();else addSubheaderContentFunc();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.awah_page_button{\n    width: 120px;\n}\n#aqah_page1_content_side_bar_text,\n#aqah_page2_content_side_bar_text,\n#aqah_page3_content_side_bar_text\n{\n    float: left;\n    cursor: pointer;\n    height: auto;\n}\n#addpic_btn{\n    height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=template&id=d2d55ada&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=template&id=d2d55ada& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_apps_website_appear_head))]),
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
              _vm._s(_vm.cmu_apps) +
              "   >> " +
              _vm._s(_vm.cmusu_apps_website) +
              "   >>  " +
              _vm._s(_vm.cmususu_apps_website_appear) +
              "   >>  " +
              _vm._s(_vm.cmusususu_apps_website_appear_head) +
              "\n                      "
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
              _c("div", { staticClass: "awah_page_button" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "page1_content_side_bar_text page1_content_side_bar_seleted",
                    attrs: {
                      id: "aqah_page1_content_side_bar_text",
                      "data-target": "topheader"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cbtntxt_topheader))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "awah_page_button" }, [
                _c(
                  "div",
                  {
                    staticClass: "page1_content_side_bar_text",
                    attrs: {
                      id: "aqah_page2_content_side_bar_text",
                      "data-target": "header"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cbtntxt_header))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "awah_page_button" }, [
                _c(
                  "div",
                  {
                    staticClass: "page1_content_side_bar_text",
                    attrs: {
                      id: "aqah_page3_content_side_bar_text",
                      "data-target": "subheader"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cbtntxt_subheader))]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list",
          attrs: { id: "subheader" }
        },
        [
          _c("input", {
            attrs: {
              type: "hidden",
              id: "hide_selectable_image_size",
              value: ""
            }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: {
              type: "hidden",
              id: "hide_selectable_image_capacity",
              value: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "div",
              {
                staticClass: "page1_content_content_title",
                staticStyle: { padding: "20px 20px", height: "auto" }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.cpgtxt_category) +
                    "\n                    "
                ),
                _c(
                  "button",
                  {
                    staticClass: "btn page1_custom_btn active",
                    staticStyle: {
                      height: "40px",
                      "border-radius": "20px",
                      padding: "0px 30px",
                      margin: "0 25px 0 50px"
                    },
                    attrs: { type: "button", id: "awah_sub_category_add" }
                  },
                  [
                    _vm._v(
                      "\n                       + " +
                        _vm._s(_vm.cbtntxt_add) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn page1_custom_btn",
                    staticStyle: {
                      height: "40px",
                      "border-radius": "20px",
                      padding: "0px 30px"
                    },
                    attrs: { type: "button", id: "awah_sub_category_edit" }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.cbtntxt_edit) +
                        "\n                    "
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "page1_content_content_title border-0",
                staticStyle: {
                  padding: "20px 20px",
                  height: "auto",
                  display: "flex",
                  "align-items": "center"
                }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.cpgtxt_background) +
                    "\n                    "
                ),
                _vm._m(3)
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "div",
              {
                staticClass: "page1_content_content_title",
                staticStyle: { padding: "0px" }
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
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          width: "380px",
                          position: "relative",
                          display: "flex"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "input-group-append",
                            staticStyle: { width: "100%" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.SearchSubheaderCategoryBtn($event)
                              }
                            }
                          },
                          [
                            _c("input", {
                              staticClass: "form-control",
                              staticStyle: {
                                height: "calc(1.5em + .75rem + 6px)",
                                "padding-left": "160px"
                              },
                              attrs: {
                                type: "text",
                                id: "subheader_search_cont",
                                name: "subheader_search_cont"
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(4)
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(5)
                      ]
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
                          _vm._v(_vm._s(_vm.cpgtxt_category))
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
                                staticClass: "subheader_selected_all_delete",
                                staticStyle: { cursor: "pointer" }
                              },
                              [_vm._v(_vm._s(_vm.cbtntxt_delete))]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("tbody", { attrs: { id: "awa_subheader_content_lists" } })
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _vm._m(6),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 text-right" }, [
              _c(
                "div",
                {
                  staticClass:
                    "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.addAWASubheaderContentModalBtn()
                    }
                  }
                },
                [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
              )
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "ModalAddCategory" } },
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
                  { staticClass: "modal-title", attrs: { id: "Modal_Title" } },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_add) +
                        " " +
                        _vm._s(_vm.cpgtxt_category)
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
                  attrs: { id: "AddCategoryModalBody" }
                },
                [
                  _c("div", { staticClass: "panel", attrs: { id: "tab4" } }, [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { "padding-bottom": "20px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-md-12",
                            staticStyle: { "margin-top": "20px" }
                          },
                          [
                            _c("div", { staticClass: "d-flex flex-wrap" }, [
                              _c("div", { staticClass: "col-md-2" }, [
                                _c(
                                  "label",
                                  {
                                    staticStyle: {
                                      "margin-top": "8px",
                                      color: "#666"
                                    },
                                    attrs: { id: "Modal_Add_Name" }
                                  },
                                  [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(7)
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12 text-center" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                            attrs: { id: "ssfe-model-add" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.addCategoryModalBtn()
                              }
                            }
                          },
                          [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
                        )
                      ])
                    ])
                  ])
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
      { staticClass: "modal fade", attrs: { id: "ModalEditCategory" } },
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
                    attrs: { id: "Modal_Edit_Title" }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_edit) +
                        " " +
                        _vm._s(_vm.cpgtxt_category)
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
                  attrs: { id: "EditCategoryModalBody" }
                },
                [
                  _c("div", { staticClass: "panel" }, [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { "padding-bottom": "20px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-md-12",
                            staticStyle: {
                              "margin-top": "20px",
                              height: "200px",
                              "overflow-y": "auto"
                            }
                          },
                          [
                            _c(
                              "table",
                              {
                                staticClass: "table table-lg  no-footer",
                                attrs: {
                                  role: "grid",
                                  "aria-describedby": "user-list_info"
                                }
                              },
                              [
                                _c("thead", [
                                  _c("tr", { attrs: { role: "row" } }, [
                                    _c(
                                      "th",
                                      {
                                        staticClass: "role_user_th",
                                        staticStyle: { border: "0" }
                                      },
                                      [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticClass: "role_user_th",
                                        staticStyle: {
                                          border: "0",
                                          float: "right"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.cpgtxt_operation))]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tbody", {
                                  attrs: { id: "awa_subheader_category_lists" }
                                })
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
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "ModalAddSubContent" } },
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
                    attrs: { id: "Modal_SubContent_Title" }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_add) +
                        " " +
                        _vm._s(_vm.cbtntxt_subheader)
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
                  attrs: { id: "AddSubContentModalBody" }
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
                          _vm._m(8)
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
                              [_vm._v(_vm._s(_vm.cpgtxt_category))]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(9)
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
                              [_vm._v(_vm._s(_vm.cpgtxt_style))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4" }, [
                            _c(
                              "select",
                              {
                                staticClass:
                                  "form-control w-100 select-noneborder-rightcolor",
                                attrs: {
                                  id: "Modal_Subheader_Styles",
                                  name: "Modal_Subheader_Styles"
                                }
                              },
                              [
                                _c("option", { attrs: { value: "TL" } }, [
                                  _vm._v(_vm._s(_vm.cpgtxt_titleontheleft))
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TR" } }, [
                                  _vm._v(_vm._s(_vm.cpgtxt_titleontheright))
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BL" } }, [
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_breadcrumbsontheleft)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BR" } }, [
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_breadcrumbsontheright)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TBL" } }, [
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_titlebreadcrumbsontheleft)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TBR" } }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.cpgtxt_titlebreadcrumbsontheright
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TBM" } }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.cpgtxt_titlebreadcrumbsonthemiddle
                                    )
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex flex-wrap" }, [
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "label",
                            {
                              staticStyle: {
                                "margin-top": "8px",
                                color: "#666"
                              }
                            },
                            [_vm._v(_vm._s(_vm.cpgtxt_hide))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-md-4",
                            staticStyle: { display: "flex" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "form-check form-check-inline" },
                              [
                                _c("input", {
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    id: "Modal_Breadcrumbs_Hide",
                                    value: ""
                                  }
                                }),
                                _vm._v(
                                  _vm._s(_vm.cpgtxt_breadcrumbs) +
                                    "\n                                "
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
                          staticClass: "d-flex flex-wrap",
                          staticStyle: { "margin-bottom": "20px" }
                        },
                        [
                          _vm._m(10),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-md-4",
                              staticStyle: { display: "flex" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    staticClass: "form-check-input",
                                    attrs: {
                                      type: "checkbox",
                                      id: "Modal_Title_Hide",
                                      value: ""
                                    }
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_page) +
                                      " " +
                                      _vm._s(_vm.cpgtxt_title) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex flex-wrap" }, [
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "label",
                            {
                              staticStyle: {
                                "margin-top": "8px",
                                color: "#666"
                              }
                            },
                            [_vm._v(_vm._s(_vm.cpgtxt_fixed))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-md-4",
                            staticStyle: { display: "flex" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "form-check form-check-inline" },
                              [
                                _c("input", {
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "radio",
                                    name: "Modal_Subheader_fixed",
                                    id: "Modal_Subheader_fixed_yes",
                                    value: "yes",
                                    checked: ""
                                  }
                                }),
                                _vm._v(
                                  _vm._s(_vm.cpgtxt_yes) +
                                    "\n                                "
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
                          staticClass: "d-flex flex-wrap",
                          staticStyle: { "margin-bottom": "20px" }
                        },
                        [
                          _vm._m(11),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-md-4",
                              staticStyle: { display: "flex" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    staticClass: "form-check-input",
                                    attrs: {
                                      type: "radio",
                                      name: "Modal_Subheader_fixed",
                                      id: "Modal_Subheader_fixed_no",
                                      value: "no"
                                    }
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_no) +
                                      "\n                                "
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
                          _vm._m(12),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-md-6",
                              staticStyle: { "font-size": "11px" }
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
                                    " \n                                    "
                                  ),
                                  _c(
                                    "font",
                                    { staticStyle: { color: "#000" } },
                                    [_vm._v("px")]
                                  ),
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
                                    [_vm._v(_vm._s(_vm.cpgtxt_example) + ":")]
                                  ),
                                  _vm._v(
                                    " \n                                    "
                                  ),
                                  _c(
                                    "font",
                                    { staticStyle: { color: "#000" } },
                                    [_vm._v("20px 0")]
                                  ),
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
                                  _c(
                                    "font",
                                    { staticStyle: { color: "#000" } },
                                    [_vm._v("20px 0 30px 0")]
                                  ),
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
                              [
                                _vm._v(
                                  _vm._s(_vm.cpgtxt_page) +
                                    " " +
                                    _vm._s(_vm.cpgtxt_title)
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(13),
                          _vm._v(" "),
                          _vm._m(14),
                          _vm._v(" "),
                          _vm._m(15)
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
                              [_vm._v(_vm._s(_vm.cpgtxt_breadcrumbs))]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(16),
                          _vm._v(" "),
                          _vm._m(17),
                          _vm._v(" "),
                          _vm._m(18)
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
                              [_vm._v(_vm._s(_vm.cpgtxt_background))]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(19),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-2" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "btn btn-outline-light dash-my-btn-0",
                                staticStyle: { padding: "10px 15px" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.addSubheaderImageBtn()
                                  }
                                }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "icon",
                                    attrs: {
                                      t: "1608175123337",
                                      viewBox: "0 0 1024 1024",
                                      version: "1.1",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "p-id": "31858",
                                      width: "200",
                                      height: "200"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M587.58656 750.78144A101.9648 101.9648 0 0 1 486.7072 758.784l-213.71904-100.62336-123.88864 64.5632a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77376a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-108.3648-42.2912-171.81696 117.1456z m176.62976-159.11936l118.3744 46.19264c31.50848 12.29312 47.09376 47.82592 34.81088 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l132.84864-69.23264a20.39296 20.39296 0 0 1 18.10944-0.36352l222.8736 104.92416a61.17888 61.17888 0 0 0 60.52352-4.80256l180.70528-123.20256a20.39296 20.39296 0 0 1 18.90304-2.1504z m-42.92608-177.19808l-133.70368 91.15648a101.9648 101.9648 0 0 1-100.87936 8.00768L314.17856 432.40448l-165.07904 86.02112a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80256l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192L721.29024 414.464z m4.8128-41.97376l156.4928 61.06624c31.50336 12.29312 47.08864 47.82592 34.80576 79.36512a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.4592a101.9648 101.9648 0 0 1-100.87936 8.0128l-354.24256-166.77888c-30.60224-14.40768-43.74016-50.9184-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l174.04416-90.69568a20.39296 20.39296 0 0 1 18.10944-0.36864l181.67296 85.53472a61.17888 61.17888 0 0 0 60.52864-4.80768l142.592-97.21344a20.39296 20.39296 0 0 1 18.89792-2.1504zM483.54304 98.98496L149.0944 273.26976a20.43904 20.43904 0 0 0 0.73728 36.608l354.24256 166.77888a61.17888 61.17888 0 0 0 60.52864-4.80768l307.23584-209.4592a20.43392 20.43392 0 0 0-4.07552-35.92192l-333.70624-130.22208a61.17376 61.17376 0 0 0-50.51392 2.7392z m399.04768 89.41568c31.50336 12.29312 47.08864 47.82592 34.80576 79.36a61.28128 61.28128 0 0 1-22.5792 28.39552l-307.23584 209.46432a101.9648 101.9648 0 0 1-100.87936 8.00768L132.46464 346.84928c-30.60224-14.40256-43.74016-50.91328-29.34784-81.54624a61.2608 61.2608 0 0 1 27.136-28.27776l334.44352-174.2848a101.95968 101.95968 0 0 1 84.19328-4.56192l333.70624 130.22208z",
                                        "p-id": "31859"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticStyle: { "margin-left": "10px" } },
                                  [
                                    _vm._v(
                                      " " + _vm._s(_vm.cbtntxt_browse) + " "
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
                              staticClass: "col-md-4",
                              staticStyle: { "font-size": "11px" }
                            },
                            [
                              _c(
                                "div",
                                { staticStyle: { "margin-left": "20px" } },
                                [
                                  _c(
                                    "font",
                                    { staticStyle: { color: "#b0b0af" } },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.cpgtxt_readcontentfields)
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticStyle: { "margin-left": "20px" } },
                                [
                                  _c(
                                    "font",
                                    { staticStyle: { color: "#b0b0af" } },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.cpgtxt_specifiedsize) + " : "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("font", {
                                    staticStyle: { color: "#000" },
                                    attrs: {
                                      id: "awa_subheader_selectable_image_size"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticStyle: { "margin-left": "20px" } },
                                [
                                  _c(
                                    "font",
                                    { staticStyle: { color: "#b0b0af" } },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.cpgtxt_nogreaterthan) + " : "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("font", {
                                    staticStyle: { color: "#000" },
                                    attrs: {
                                      id:
                                        "awa_subheader_selectable_image_capacity"
                                    }
                                  })
                                ],
                                1
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
                          _c("div", { staticClass: "col-md-2" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-md-4",
                              staticStyle: { display: "flex" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    staticClass: "form-check-input",
                                    attrs: {
                                      type: "checkbox",
                                      name: "Modal_Subheader_background_check",
                                      id: "Modal_Subheader_background_check",
                                      value: "normal",
                                      checked: ""
                                    }
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_color) +
                                      "\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._m(20)
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
                                  return _vm.addSubheaderContentBtn()
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
          id: "apps-website-appearance-head-fav",
          "data-status": "off",
          "data-page-info": "Head_apps-website-appearance-head"
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
    return _c(
      "div",
      {
        staticClass: "col-md-12 page_slider_content_list active",
        attrs: { id: "topheader" }
      },
      [_c("div", { staticClass: "page1_content_content_bar" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-12 page_slider_content_list",
        attrs: { id: "header" }
      },
      [_c("div", { staticClass: "page1_content_content_bar" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: { width: "250px", "margin-left": "50px" },
        attrs: { id: "awah_category_background" }
      },
      [
        _c("select", {
          staticClass: "form-control",
          attrs: {
            id: "awa_system_field_images",
            name: "awa_system_field_images"
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
      "span",
      { staticClass: "btn", staticStyle: { padding: "5px", right: "30px" } },
      [_c("i", { staticClass: "ti-search" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          display: "flex",
          "flex-direction": "row",
          width: "150px",
          position: "absolute",
          "border-right": "1px solid #fff"
        }
      },
      [
        _c("select", {
          staticClass: "form-control w-100 select-noneborder-rightcolor",
          staticStyle: { "border-bottom": "0px" },
          attrs: {
            id: "subheader_category_items",
            name: "subheader_category_items"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10 text-center" }, [
      _c("div", {
        staticStyle: { width: "100%" },
        attrs: { id: "ssmu_page_nav" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "category_item_name",
          name: "category_item_name"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "Modal_Subheader_Name",
          name: "Modal_Subheader_Name"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("select", {
        staticClass: "form-control w-100 select-noneborder-rightcolor",
        attrs: { id: "Modal_Category_List", name: "Modal_Category_List" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("label", { staticStyle: { "margin-top": "8px", color: "#666" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("label", { staticStyle: { "margin-top": "8px", color: "#666" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "Modal_Subheader_padding",
          name: "Modal_Subheader_padding"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("select", {
        staticClass: "form-control w-100 select-noneborder-rightcolor",
        attrs: {
          id: "Modal_Subheader_pagetitle",
          name: "Modal_Subheader_pagetitle"
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
        "select",
        {
          staticClass: "form-control w-100 select-noneborder-rightcolor",
          attrs: {
            id: "Modal_Subheader_pagetitle_size",
            name: "Modal_Subheader_pagetitle_size"
          }
        },
        [
          _c("option", { attrs: { value: "11pt" } }, [_vm._v("11pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "12pt" } }, [_vm._v("12pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "13pt" } }, [_vm._v("13pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "14pt" } }, [_vm._v("14pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "15pt" } }, [_vm._v("15pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "16pt" } }, [_vm._v("16pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "17pt" } }, [_vm._v("17pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "18pt" } }, [_vm._v("18pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "19pt" } }, [_vm._v("19pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "20pt" } }, [_vm._v("20pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "22pt" } }, [_vm._v("22pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "25pt" } }, [_vm._v("25pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "27pt" } }, [_vm._v("27pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "30pt" } }, [_vm._v("30pt")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-3", staticStyle: { display: "flex" } },
      [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "subheader_pagetitle_color",
            id: "subheader_pagetitle_color",
            value: "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: {
            border: "1px solid #000",
            width: "40px",
            cursor: "pointer",
            background: "#000000",
            height: "20px"
          },
          attrs: {
            id: "subheader_pagetitle_colorpicker",
            "data-color": "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "subheader_pagetitle_colorpicker_value" } }, [
          _vm._v("#000000")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("select", {
        staticClass: "form-control w-100 select-noneborder-rightcolor",
        attrs: {
          id: "Modal_Subheader_breadcrumbs",
          name: "Modal_Subheader_breadcrumbs"
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
        "select",
        {
          staticClass: "form-control w-100 select-noneborder-rightcolor",
          attrs: {
            id: "Modal_Subheader_breadcrumbs_size",
            name: "Modal_Subheader_breadcrumbs_size"
          }
        },
        [
          _c("option", { attrs: { value: "11pt" } }, [_vm._v("11pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "12pt" } }, [_vm._v("12pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "13pt" } }, [_vm._v("13pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "14pt" } }, [_vm._v("14pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "15pt" } }, [_vm._v("15pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "16pt" } }, [_vm._v("16pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "17pt" } }, [_vm._v("17pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "18pt" } }, [_vm._v("18pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "19pt" } }, [_vm._v("19pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "20pt" } }, [_vm._v("20pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "22pt" } }, [_vm._v("22pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "25pt" } }, [_vm._v("25pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "27pt" } }, [_vm._v("27pt")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "30pt" } }, [_vm._v("30pt")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-3", staticStyle: { display: "flex" } },
      [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "subheader_breadcrumbs_color",
            id: "subheader_breadcrumbs_color",
            value: "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: {
            border: "1px solid #000",
            width: "40px",
            cursor: "pointer",
            background: "#000000",
            height: "20px"
          },
          attrs: {
            id: "subheader_breadcrumbs_colorpicker",
            "data-color": "#000000"
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          { attrs: { id: "subheader_breadcrumbs_colorpicker_value" } },
          [_vm._v("#000000")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "Modal_Subheader_background",
          name: "Modal_Subheader_background",
          readonly: ""
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
      { staticClass: "col-md-8", staticStyle: { display: "flex" } },
      [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "subheader_background_color",
            id: "subheader_background_color",
            value: "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: {
            border: "1px solid #000",
            width: "40px",
            cursor: "pointer",
            background: "#000000",
            height: "20px"
          },
          attrs: {
            id: "subheader_background_colorpicker",
            "data-color": "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "subheader_background_colorpicker_value" } }, [
          _vm._v("#000000")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue":
/*!**************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppsWebsiteToolsMenu_vue_vue_type_template_id_d2d55ada___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppsWebsiteToolsMenu.vue?vue&type=template&id=d2d55ada& */ "./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=template&id=d2d55ada&");
/* harmony import */ var _AppsWebsiteToolsMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppsWebsiteToolsMenu.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppsWebsiteToolsMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppsWebsiteToolsMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppsWebsiteToolsMenu_vue_vue_type_template_id_d2d55ada___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppsWebsiteToolsMenu_vue_vue_type_template_id_d2d55ada___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteToolsMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=template&id=d2d55ada&":
/*!*********************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=template&id=d2d55ada& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_template_id_d2d55ada___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteToolsMenu.vue?vue&type=template&id=d2d55ada& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteToolsMenu.vue?vue&type=template&id=d2d55ada&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_template_id_d2d55ada___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteToolsMenu_vue_vue_type_template_id_d2d55ada___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);