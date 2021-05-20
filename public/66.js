(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/media_module */ "./resources/vuedir/assets/jsfunc/media_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.jsonparse(window.Laravel.userinfo).id;
var preview = '';
var tabstatus = 0;
var vueOBJ = null;
var wwgfield = 'topheader';
var btntxt_save = "";
var btntxt_delete = "";
var btntxt_edit = "";
var btntxt_change = "";
var pgtxt_name = "";
var checked_del_items = new Array();
var categorys = new Array();
var systemTexts = new Array();
var sub_c_id = 0;
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var is_edit = false;
var subedit_id = 0;
var modal_fixed_check = 1;
var modal_left_blocks = new Array();
var modal_right_blocks = new Array();
var modal_bottom_blocks = new Array();
var pgtxt_wantdeleteitem = "";
var pgtxt_left = "";
var pgtxt_right = "";
var pgtxt_bottom = "";
var pgtxt_bar = "";
var pgtxt_blocks = "";
var media_dlg = 0;
var permss;
var names_arr = new Array();
var cg_id;
var device_name = "D";
var block_list = new Array();

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
  $('.ssmu_page_nav').html(nav_tag);
  /* events { */

  $('a[id^="ssmunavnum_"]').click(function () {
    var oid = $(this).attr("id");
    pstart = oid.split('_')[1];
    getTopheaderContentList(1);
  });
}

function addCategoryFunc() {
  var category_name = $('#category_item_name').val();
  var same_name = false;

  for (var i = 0; i < categorys.length; i++) {
    if (categorys[i].scname == category_name) {
      $("#ModalAddCategory").modal('hide');
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert("pgtxt_existsname");
      same_name = true;
      break;
    }
  }

  if (same_name) return;
  $.ajax({
    url: 'admin.addAWAHeadCategory',
    data: {
      userid: userid,
      sc_id: sub_c_id,
      category_name: category_name,
      tabstatus: tabstatus
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        sub_c_id = data.scid;
        categorys = new Array();
        if (data.lists != null && data.lists != '') categorys = data.lists;
        modifyFunc();
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

function saveCategoryFunc() {
  var scname = $('#category_save_name').val();
  var same_name = false;
  var same_id = 0;

  for (var i = 0; i < categorys.length; i++) {
    if (scname == categorys[i].scname) {
      same_id = categorys[i].scid;
      same_name = true;
      break;
    }
  }

  if (same_name) {
    if (same_id != cg_id) {
      $('#ModalSaveCategory').modal('hide');
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert("pgtxt_existsname");
      return;
    }
  }

  $.ajax({
    url: 'admin.saveAWAHeadCategory',
    data: {
      userid: userid,
      sc_id: cg_id,
      sc_name: scname,
      tabstatus: tabstatus
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        $('#ModalSaveCategory').modal('hide');
        sub_c_id = data.scid;
        categorys = new Array();
        if (data.lists != null && data.lists != '') categorys = data.lists;
        modifyFunc();
        getTopheaderContentList(0);
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function editCategoryList() {
  $('#awa_category_lists').html('');
  var tags = "";
  var top_tags = "";

  for (var i = 0; i < categorys.length; i++) {
    var id = categorys[i].scid;
    var name = categorys[i].scname;
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
    tags += '               <option value="save">' + btntxt_change + '</option>';
    tags += '               <option value="delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
    if (i == 0) top_tags += '<div>' + name + "</div>";else top_tags += '<div>, ' + name + "</div>";
  }

  $('#awa_category_lists').html(tags);
  $('#top_category_lists').html(top_tags);
  $('select[id^="awa_category_item-"]').change(function () {
    var id = $(this).attr("id");
    cg_id = id.split('-')[1];
    var sel_val = $(this).val();
    var scname = $('#subheader_category-' + cg_id).val();

    if (sel_val == "save") {
      $('#ModalEditCategory').modal('hide');

      if (permss.pwrite != 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      $('#category_save_name').val(scname);
      $('#ModalSaveCategory').modal('show');
    } else if (sel_val == "delete") {
      if (window.confirm(pgtxt_wantdeleteitem)) {
        $.ajax({
          url: 'admin.deleteAWAHeadCategory',
          data: {
            sc_id: cg_id,
            userid: userid,
            tabstatus: tabstatus
          },
          type: 'POST',
          success: function success(data) {
            if (data.msg === "ok") {
              sub_c_id = data.scid;
              categorys = new Array();
              if (data.lists != null && data.lists != '') categorys = data.lists;
              modifyFunc();
              getTopheaderContentList(0);
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

function getCategoryList() {
  $.ajax({
    url: 'admin.getAWACategoryList',
    data: {
      userid: userid,
      sc_id: sub_c_id,
      tabstatus: tabstatus
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        systemTexts = data.texts;
        sub_c_id = data.scid;
        categorys = new Array();
        if (data.lists != null && data.lists != '') categorys = data.lists;
        modifyFunc();
        $('#Modal_TopCategory_List').html(showCategoryList());
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function showCategoryList() {
  var tags = '';

  for (var i = 0; i < categorys.length; i++) {
    var id = categorys[i].scid;
    var name = categorys[i].scname;
    tags += '<option value="' + id + '">' + name + '</option>';
  }

  return tags;
}

function modifyFunc() {
  editCategoryList();
  showSearchCategoryList();
}

function showSearchCategoryList() {
  var tags = '<option selected value="0" class="data-ajax" data-ajax="pgtxt_name">' + pgtxt_name + '</option>';
  tags += showCategoryList();
  $('#topheader_category_items').html(tags);
}

function initialize() {
  device_name = 'D';
  sub_c_id = 0;
  is_edit = false;
  checked_del_items = new Array();
  subedit_id = 0;
  modal_fixed_check = 1;
  modal_left_blocks = new Array();
  modal_right_blocks = new Array();
  modal_bottom_blocks = new Array();
  $('#Modal_TopCategory_List').html(showCategoryList());
  TopheaderAddModalEvent();
  $('#Modal_Topheader_Name').val('');
  $('#Modal_Topheader_Maxwidth').val('');
  $('#Modal_Topheader_padding').val('');
  $('#Modal_Topheader_background').val('');
  $('#Modal_Topheader_Height').val('');
  $('#Modal_Topheader_leftpadding').val('');
  $('#Modal_Topheader_rightpadding').val('');
  $('#Modal_Topheader_bottomheight').val('');
  $('#Modal_Topheader_bottompadding').val('');
  $('#Modal_Topheader_fixed_yes').attr("checked", true);
  $('#Modal_Topheader_fixed_no').attr("checked", false);
  setTopheaderColorPickers('#000000');
  $('.responsive-device').removeClass('active');
  $('#device-D').addClass('active');
  getBlocksList();
}

function ChangeItemNameSelectTab() {
  $('#topheader_category_items').change(function () {
    getTopheaderContentList(1);
  });
} // Topheader tab start /////////////////////////////////////////////////////////////////////////////////////////////


function initTopHeader() {
  getCategoryList();
  $('#awah_top_category_add').click(function () {
    if (permss.pcreate == 1) {
      $('#category_item_name').val('');
      $('#ModalAddCategory').modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
  });
  $('#awah_top_category_edit').click(function () {
    if (permss.pwrite == 1) {
      editCategoryList();
      $('#ModalEditCategory').modal('show');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
  });
  $('.responsive-device').click(function () {
    var id = $(this).attr("id");
    $('.responsive-device').removeClass('active');
    device_name = id.split('-')[1];
    $('#' + id).addClass('active');
  });
}

function TopheaderAddModalEvent() {
  $('input[name="Modal_Topheader_fixed"]').on("click", function () {
    var v = $(this).val();

    if (v == 'yes') {
      $('#Modal_Topheader_fixed_yes').attr("checked", true);
      $('#Modal_Topheader_fixed_no').attr("checked", false);
      modal_fixed_check = 1;
    } else if (v == 'no') {
      $('#Modal_Topheader_fixed_yes').attr("checked", false);
      $('#Modal_Topheader_fixed_no').attr("checked", true);
      modal_fixed_check = 0;
    }
  });
}

function setTopheaderColorPickers(color) {
  $('#topheader_background_colorpicker_value').text(color);
  $('#topheader_background_color').val(color);
  var topheader_background_colorpicker = document.getElementById('topheader_background_colorpicker');
  var picker2 = new ColorPicker(topheader_background_colorpicker, color);
  topheader_background_colorpicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa;
    $('#topheader_background_colorpicker_value').text(color);
    $('#topheader_background_color').val(color);
  });
}

function topContentList(lists, cg_lists) {
  $('#awa_topheader_content_lists').html('');
  var tags = '';
  names_arr = new Array();

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].id;
    var name = lists[i].name;
    names_arr.push(name);
    var category = cg_lists[i];
    tags += '<tr class="top_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="topcontCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>' + category + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="top_content_list_edit-' + id + '" name="top_content_list_edit-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#awa_topheader_content_lists').html(tags);
  $('input[id^="topcontCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="top_content_list_edit-"]').change(function () {
    var id = $(this).attr("id");
    var event_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (sel_val == "change") {
      if (permss.pwrite == 1) {
        is_edit = true;
        subedit_id = event_id;
        $('#Modal_Category_List').html(showCategoryList());
        TopheaderAddModalEvent();
        editTopContentModal(event_id);
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    } else if (sel_val == "delete") {
      if (permss.pdelete == 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.confirmAlert(deldteTopheaderContentFunc, event_id, 'pgtxt_wantdeleteitem');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    }
  });
}

function editTopContentModal(id) {
  $.ajax({
    url: 'admin.showAWAHeadTopheaderContentItem',
    data: {
      userid: userid,
      id: id
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          $('#Modal_Topheader_Name').val(lists.name);
          $('#Modal_TopCategory_List').val(lists.scid);

          if (lists.fixed == 0) {
            $('#Modal_Topheader_fixed_yes').attr("checked", false);
            $('#Modal_Topheader_fixed_no').attr("checked", true);
          } else {
            $('#Modal_Topheader_fixed_yes').attr("checked", true);
            $('#Modal_Topheader_fixed_no').attr("checked", false);
          }

          $('#Modal_Topheader_Maxwidth').val(lists.maxwidth);
          $('#Modal_Topheader_padding').val(lists.padding);
          $('#Modal_Topheader_background').val(lists.bg_img);
          setTopheaderColorPickers(lists.bg_color);
          $('#Modal_Topheader_Height').val(lists.top_height);
          $('#Modal_Topheader_leftpadding').val(lists.left_padding);
          $('#Modal_Topheader_rightpadding').val(lists.right_padding);
          $('#Modal_Topheader_leftalign_select').val(lists.left_align);
          $('#Modal_Topheader_rightalign_select').val(lists.right_align);
          $('#Modal_Topheader_bottomheight').val(lists.bottom_height);
          $('#Modal_Topheader_bottompadding').val(lists.bottom_padding);
          $('#Modal_Topheader_bottomalign_select').val(lists.bottom_align);
          modal_left_blocks = $.parseJSON(lists.left_blocks);
          modal_right_blocks = $.parseJSON(lists.right_blocks);
          modal_bottom_blocks = $.parseJSON(lists.bottom_blocks);
          showTopheaderModulepart(1);
          $('#Modal_Topheader_Name').attr('readonly', true);
          $('#ModalAddTopContent').modal('show');
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

function addTopheaderContentFunc() {
  var search_id = $('#topheader_category_items').val();
  var search_txt = $('#topheader_search_cont').val();
  var same_name = false;

  for (var i = 0; i < names_arr.length; i++) {
    if (names_arr[i] == $('#Modal_Topheader_Name').val()) {
      $("#ModalAddTopContent").modal('hide');
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert("pgtxt_existsname");
      same_name = true;
      break;
    }
  }

  if (same_name) return;
  var postData = {
    userid: userid,
    device: device_name,
    search_id: search_id,
    search_txt: search_txt,
    pstart: pstart,
    pcnt: pcnt,
    modal_content_name: $('#Modal_Topheader_Name').val(),
    modal_category_id: $('#Modal_TopCategory_List').val(),
    modal_maxwidth: $('#Modal_Topheader_Maxwidth').val(),
    modal_padding: $('#Modal_Topheader_padding').val(),
    modal_background_image: $('#Modal_Topheader_background').val(),
    modal_background_color: $('#topheader_background_color').val(),
    modal_fixed_check: modal_fixed_check,
    modal_top_height: $('#Modal_Topheader_Height').val(),
    modal_left_padding: $('#Modal_Topheader_leftpadding').val(),
    modal_left_align: $('#Modal_Topheader_leftalign_select').val(),
    //modal_left_blocks : $('#Modal_Topheader_Name').val(),
    modal_right_padding: $('#Modal_Topheader_rightpadding').val(),
    modal_right_align: $('#Modal_Topheader_rightalign_select').val(),
    //modal_right_blocks : $('#Modal_Topheader_Name').val(),
    modal_bottom_height: $('#Modal_Topheader_bottomheight').val(),
    modal_bottom_padding: $('#Modal_Topheader_bottompadding').val(),
    modal_bottom_align: $('#Modal_Topheader_bottomalign_select').val() //modal_bottom_blocks : $('#Modal_Topheader_Name').val()

  };
  $.ajax({
    url: 'admin.setAWAHeadTopheaderContentList',
    data: postData,
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        $('#ModalAddTopContent').modal('hide');
        var lists = data.lists;
        var cg_lists = data.category_list;

        if (lists !== null && lists != "") {
          topContentList(lists, cg_lists);
        } else $('#awa_topheader_content_lists').html('');

        var total = data.total;

        if (total <= 0) {
          $('.ssmu_page_nav').html('');
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

function getTopheaderContentList(is_search) {
  var search_id = $('#topheader_category_items').val();
  var search_txt = $('#topheader_search_cont').val();

  if (is_search == 0) {
    search_id = "";
    search_txt = "";
  }

  $.ajax({
    url: 'admin.getAWAHeadTopheaderContentList',
    data: {
      userid: userid,
      device: device_name,
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
          topContentList(lists, cg_lists);
        } else $('#awa_topheader_content_lists').html('');

        var total = data.total;

        if (total <= 0) {
          $('.ssmu_page_nav').html('');
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

function editTopheaderContentFunc() {
  var search_id = $('#topheader_category_items').val();
  var search_txt = $('#topheader_search_cont').val();
  var postData = {
    userid: userid,
    device: device_name,
    editid: subedit_id,
    search_id: search_id,
    search_txt: search_txt,
    pstart: pstart,
    pcnt: pcnt,
    modal_content_name: $('#Modal_Topheader_Name').val(),
    modal_category_id: $('#Modal_TopCategory_List').val(),
    modal_maxwidth: $('#Modal_Topheader_Maxwidth').val(),
    modal_padding: $('#Modal_Topheader_padding').val(),
    modal_background_image: $('#Modal_Topheader_background').val(),
    modal_background_color: $('#topheader_background_color').val(),
    modal_fixed_check: modal_fixed_check,
    modal_top_height: $('#Modal_Topheader_Height').val(),
    modal_left_padding: $('#Modal_Topheader_leftpadding').val(),
    modal_left_align: $('#Modal_Topheader_leftalign_select').val(),
    //modal_left_blocks : $('#Modal_Topheader_Name').val(),
    modal_right_padding: $('#Modal_Topheader_rightpadding').val(),
    modal_right_align: $('#Modal_Topheader_rightalign_select').val(),
    //modal_right_blocks : $('#Modal_Topheader_Name').val(),
    modal_bottom_height: $('#Modal_Topheader_bottomheight').val(),
    modal_bottom_padding: $('#Modal_Topheader_bottompadding').val(),
    modal_bottom_align: $('#Modal_Topheader_bottomalign_select').val() //modal_bottom_blocks : $('#Modal_Topheader_Name').val()

  };
  $.ajax({
    url: 'admin.editAWAHeadTopheaderContentList',
    data: postData,
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        $('#ModalAddTopContent').modal('hide');
        var lists = data.lists;
        var cg_lists = data.category_list;

        if (lists !== null && lists != "") {
          topContentList(lists, cg_lists);
        } else $('#awa_topheader_content_lists').html('');

        var total = data.total;

        if (total <= 0) {
          $('.ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        is_edit = false;
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

function deldteTopheaderContentFunc(del_id) {
  var search_id = $('#topheader_category_items').val();
  var search_txt = $('#topheader_search_cont').val();
  $.ajax({
    url: 'admin.deleteAWAHeadTopheaderContentList',
    data: {
      userid: userid,
      device: device_name,
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
          topContentList(lists, cg_lists);
        } else $('#awa_topheader_content_lists').html('');

        var total = data.total;

        if (total <= 0) {
          $('.ssmu_page_nav').html('');
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

function allDeleteTopCheckedFunc() {
  $('#topheader_selected_all_delete').click(function () {
    if (permss.pdelete == 0) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
      return;
    }

    var search_id = $('#topheader_category_items').val();
    var search_txt = $('#topheader_search_cont').val();

    if (checked_del_items.length > 0) {
      $.ajax({
        url: 'admin.allDeleteAWATopheaderChecked',
        data: {
          userid: userid,
          device: device_name,
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
              topContentList(lists, cg_lists);
            } else $('#awa_topheader_content_lists').html('');

            var total = data.total;

            if (total <= 0) {
              $('.ssmu_page_nav').html('');
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
} // Topheader tab end ///////////////////////////////////////////////////////////////////////////////////////////////


function getBlocksList() {
  $.ajax({
    url: 'admin.showAWAHeadBlocksList',
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          block_list = $.parseJSON(lists);
          console.log(block_list);
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

function showBlockList(dc, idx, is_edit) {
  if (is_edit) {} else {
    for (var i = 0; i < block_list.length; i++) {
      var block_item = block_list[i];
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_save: '',
      btntxt_delete: '',
      btntxt_change: '',
      btntxt_topheader: '',
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
      pgtxt_color: '',
      pgtxt_module: '',
      btntxt_text: '',
      pgtxt_weblanguage: '',
      pgtxt_location: '',
      pgtxt_currency: '',
      pgtxt_register: '',
      pgtxt_login: '',
      pgtxt_remind: '',
      pgtxt_member: '',
      pgtxt_left: '',
      pgtxt_middle: '',
      pgtxt_right: '',
      pgtxt_bar: '',
      pgtxt_logo: '',
      pgtxt_slogan: '',
      pgtxt_menu: '',
      pgtxt_searchbar: '',
      pgtxt_language: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      pgtxt_responsive: '',
      pgctl_desktop: '',
      pgctl_tablet: '',
      pgctl_mobile: '',
      pgtxt_maximumwidth: '',
      pgtxt_top: '',
      pgtxt_height: '',
      pgtxt_align: '',
      pgtxt_bottom: '',
      pgtxt_notdisplaybar: '',
      pgtxt_blocks: ''
    };
  },
  computed: {
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
    cpgtxt_module: function cpgtxt_module() {
      return this.pgtxt_module;
    },
    cbtntxt_text: function cbtntxt_text() {
      return this.btntxt_text;
    },
    cpgtxt_weblanguage: function cpgtxt_weblanguage() {
      return this.pgtxt_weblanguage;
    },
    cpgtxt_location: function cpgtxt_location() {
      return this.pgtxt_location;
    },
    cpgtxt_currency: function cpgtxt_currency() {
      return this.pgtxt_currency;
    },
    cpgtxt_register: function cpgtxt_register() {
      return this.pgtxt_register;
    },
    cpgtxt_login: function cpgtxt_login() {
      return this.pgtxt_login;
    },
    cpgtxt_remind: function cpgtxt_remind() {
      return this.pgtxt_remind;
    },
    cpgtxt_member: function cpgtxt_member() {
      return this.pgtxt_member;
    },
    cpgtxt_left: function cpgtxt_left() {
      return this.pgtxt_left;
    },
    cpgtxt_middle: function cpgtxt_middle() {
      return this.pgtxt_middle;
    },
    cpgtxt_right: function cpgtxt_right() {
      return this.pgtxt_right;
    },
    cpgtxt_bar: function cpgtxt_bar() {
      return this.pgtxt_bar;
    },
    cpgtxt_logo: function cpgtxt_logo() {
      return this.pgtxt_logo;
    },
    cpgtxt_sloganr: function cpgtxt_sloganr() {
      return this.pgtxt_slogan;
    },
    cpgtxt_menu: function cpgtxt_menu() {
      return this.pgtxt_menu;
    },
    cpgtxt_searchbar: function cpgtxt_searchbar() {
      return this.pgtxt_searchbar;
    },
    cpgtxt_language: function cpgtxt_language() {
      return this.pgtxt_language;
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
    cpgtxt_responsive: function cpgtxt_responsive() {
      return this.pgtxt_responsive;
    },
    cpgctl_desktop: function cpgctl_desktop() {
      return this.pgctl_desktop;
    },
    cpgctl_tablet: function cpgctl_tablet() {
      return this.pgctl_tablet;
    },
    cpgctl_mobile: function cpgctl_mobile() {
      return this.pgctl_mobile;
    },
    cpgtxt_maximumwidth: function cpgtxt_maximumwidth() {
      return this.pgtxt_maximumwidth;
    },
    cpgtxt_top: function cpgtxt_top() {
      return this.pgtxt_top;
    },
    cpgtxt_height: function cpgtxt_height() {
      return this.pgtxt_height;
    },
    cpgtxt_align: function cpgtxt_align() {
      return this.pgtxt_align;
    },
    cpgtxt_bottom: function cpgtxt_bottom() {
      return this.pgtxt_bottom;
    },
    cpgtxt_notdisplaybar: function cpgtxt_notdisplaybar() {
      return this.pgtxt_notdisplaybar;
    },
    cpgtxt_blocks: function cpgtxt_blocks() {
      return this.pgtxt_blocks;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.permissionDefinition();
    /* fav part*/

    this.initpage();
    pgtxt_wantdeleteitem = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_wantdeleteitem');
    pgtxt_name = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
    btntxt_save = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_save');
    btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
    btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
    btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
    pgtxt_left = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_left');
    pgtxt_right = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_right');
    pgtxt_bottom = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_bottom');
    pgtxt_bar = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_bar');
    pgtxt_blocks = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_blocks');
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
      initTopHeader();
      getTopheaderContentList(0);
      allDeleteTopCheckedFunc();
      $("#ModalAddTopContent").on('hide.bs.modal', function () {
        $('select[id^="top_content_list_edit-"]').val('');
      });
      ChangeItemNameSelectTab();
    },
    addCategoryModalBtn: function addCategoryModalBtn() {
      addCategoryFunc();
    },
    saveCategoryModalBtn: function saveCategoryModalBtn() {
      saveCategoryFunc();
    },
    SearchTopheaderCategoryBtn: function SearchTopheaderCategoryBtn() {
      getTopheaderContentList(1);
    },
    addAWATopheaderContentModalBtn: function addAWATopheaderContentModalBtn() {
      if (permss.pcreate == 1) {
        initialize();
        $('#Modal_Topheader_Name').attr('readonly', false);
        $('#ModalAddTopContent').modal('show');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    },
    addTopheaderImageBtn: function addTopheaderImageBtn() {
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.setImageTagID("Modal_Topheader_background", "Modal_Topheader_background");
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getDirectories('/');
      _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.MediaSelectImageModal(vueOBJ);
      $('#ModalAddTopContent').modal('hide');
      $('#MediaDirectoryModal').modal('show');
      $("#MediaDirectoryModal").on('hide.bs.modal', function () {
        $('#ModalAddTopContent').modal('show');
      });
    },
    addTopheaderContentBtn: function addTopheaderContentBtn() {
      if (is_edit) editTopheaderContentFunc();else addTopheaderContentFunc();
    },
    editTopheaderLeftBlocks: function editTopheaderLeftBlocks() {
      var tags = '<h4 className="modal-title" class="data-ajax" data-ajax="pgtxt_left,pgtxt_bar,pgtxt_blocks">' + pgtxt_left;
      var tags = ' ' + pgtxt_bar;
      var tags = ' ' + pgtxt_blocks;
      var tags = '</h4>';
      $('#Modal_Blocks_Title').html(tags);
    },
    editTopheaderRightBlocks: function editTopheaderRightBlocks() {
      var tags = '<h4 className="modal-title" class="data-ajax" data-ajax="pgtxt_right,pgtxt_bar,pgtxt_blocks">' + pgtxt_right;
      var tags = ' ' + pgtxt_bar;
      var tags = ' ' + pgtxt_blocks;
      var tags = '</h4>';
      $('#Modal_Blocks_Title').html(tags);
    },
    editTopheaderBottomBlocks: function editTopheaderBottomBlocks() {
      var tags = '<h4 className="modal-title" class="data-ajax" data-ajax="pgtxt_bottom,pgtxt_bar,pgtxt_blocks">' + pgtxt_bottom;
      var tags = ' ' + pgtxt_bar;
      var tags = ' ' + pgtxt_blocks;
      var tags = '</h4>';
      $('#Modal_Blocks_Title').html(tags);
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.awah_page_button{\n    width: 120px;\n}\n#addpic_btn{\n    height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n.modal_top_bar{\n    margin-right: 10px;\n}\n#awa_module_lists td{\n    border: none;\n}\n#awa_headmodule_lists td{\n    border: none;\n}\n.responsive-device.active{\n    color: rgb(102, 102, 102);\n    font-weight: bold;\n    font-size: 14px;\n    margin-bottom: 0px;\n}\n.responsive-device{\n    color: rgb(102, 102, 102);\n    cursor: pointer;\n    margin-bottom: 0px;\n}\n.page1_content_content_title.responsive-text{\n    margin: auto;\n    height: 0;\n    line-height: 0;\n    padding: 0 10px;\n}\n.non-padding{\n    padding: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=template&id=44d11d17&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=template&id=44d11d17& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticStyle: { display: "none" } }, [
      _vm._v(_vm._s(_vm.contentchange))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "topheader" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "div",
              {
                staticClass: "page1_content_content_title",
                staticStyle: { height: "auto", display: "flex" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-md-1",
                    staticStyle: { margin: "auto" },
                    attrs: { id: "top_title" }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_category))]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "col-md-8 d-flex flex-wrap",
                  staticStyle: { display: "flex", color: "rgba(0, 0, 0, 0.6)" },
                  attrs: { id: "top_category_lists" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-3",
                    staticStyle: { margin: "auto" },
                    attrs: { id: "top_button" }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn page1_custom_btn active",
                        staticStyle: {
                          height: "40px",
                          "border-radius": "20px",
                          padding: "0px 30px",
                          margin: "0 25px 0px 0px"
                        },
                        attrs: { type: "button", id: "awah_top_category_add" }
                      },
                      [
                        _vm._v(
                          "\n                            + " +
                            _vm._s(_vm.cbtntxt_add) +
                            "\n                        "
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
                        attrs: { type: "button", id: "awah_top_category_edit" }
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.cbtntxt_edit) +
                            "\n                        "
                        )
                      ]
                    )
                  ]
                )
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
                                return _vm.SearchTopheaderCategoryBtn($event)
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
                                id: "topheader_search_cont",
                                name: "topheader_search_cont"
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(0)
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(1)
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
                                staticStyle: { cursor: "pointer" },
                                attrs: { id: "topheader_selected_all_delete" }
                              },
                              [_vm._v(_vm._s(_vm.cbtntxt_delete))]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("tbody", { attrs: { id: "awa_topheader_content_lists" } })
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _vm._m(2),
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
                      return _vm.addAWATopheaderContentModalBtn()
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
                              _vm._m(3)
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
      { staticClass: "modal fade", attrs: { id: "ModalSaveCategory" } },
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
                    attrs: { id: "Modal_Save_Title" }
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
                  attrs: { id: "SaveCategoryModalBody" }
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
                                    attrs: { id: "Modal_Save_Name" }
                                  },
                                  [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(4)
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
                            attrs: { id: "ssfe-model-save" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.saveCategoryModalBtn()
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
                              height: "400px",
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
                                  attrs: { id: "awa_category_lists" }
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
      { staticClass: "modal fade", attrs: { id: "ModalAddTopContent" } },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered modal-sm",
            staticStyle: { "min-width": "1150px!important" }
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-content",
                staticStyle: { height: "700px" }
              },
              [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h4",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "Modal_TopContent_Title" }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.cbtntxt_add) +
                          " " +
                          _vm._s(_vm.cbtntxt_topheader)
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
                    staticClass: "page1_content_content_bar",
                    staticStyle: {
                      display: "flex",
                      margin: "0 25px",
                      "border-radius": "5px"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-3 page1_content_content_title responsive-text"
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_responsive))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3",
                        staticStyle: { margin: "auto" }
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "responsive-device active",
                            attrs: { id: "device-D" }
                          },
                          [_vm._v(_vm._s(_vm.cpgctl_desktop))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3",
                        staticStyle: { margin: "auto" }
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "responsive-device",
                            attrs: { id: "device-T" }
                          },
                          [_vm._v(_vm._s(_vm.cpgctl_tablet))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-3",
                        staticStyle: { margin: "auto" }
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "responsive-device",
                            attrs: { id: "device-M" }
                          },
                          [_vm._v(_vm._s(_vm.cpgctl_mobile))]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "modal-body",
                    staticStyle: { padding: "0px 0rem 2rem" },
                    attrs: { id: "AddTopContentModalBody" }
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
                            staticClass:
                              "d-flex flex-wrap col-md-12 non-padding",
                            staticStyle: { "margin-bottom": "10px" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-3" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-5 non-padding" },
                                  [
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
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(5)
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex flex-wrap col-md-3 non-padding"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 non-padding" },
                                  [
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
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(6)
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-wrap col-md-12 non-padding",
                            staticStyle: { "margin-bottom": "10px" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-3" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-5 non-padding" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticStyle: {
                                          "margin-top": "8px",
                                          color: "#666"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.cpgtxt_maximumwidth))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(7)
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex flex-wrap col-md-3 non-padding"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 non-padding" },
                                  [
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
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(8)
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-3 non-padding",
                                staticStyle: { "font-size": "10px" }
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
                            staticClass: "d-flex flex-wrap col-md-12",
                            staticStyle: {
                              padding: "0px",
                              "margin-bottom": "10px"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-6" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 non-padding" },
                                  [
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
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(9),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 non-padding" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "btn btn-outline-light dash-my-btn-0 active",
                                        staticStyle: {
                                          padding: "10px 15px",
                                          "border-radius": "5px",
                                          "border-width": "0px"
                                        },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            return _vm.addTopheaderImageBtn()
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
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
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
                                          {
                                            staticStyle: {
                                              "margin-left": "10px"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(_vm.cbtntxt_browse) +
                                                " "
                                            )
                                          ]
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
                                staticClass:
                                  "d-flex flex-wrap col-md-3 non-padding"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 non-padding" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticStyle: {
                                          "margin-top": "8px",
                                          color: "#666"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.cpgtxt_color))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(10)
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-wrap col-md-12",
                            staticStyle: {
                              padding: "0px",
                              "margin-bottom": "10px"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-3" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-5 non-padding" },
                                  [
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
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-md-2 non-padding",
                                    staticStyle: { margin: "auto" }
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "radio",
                                        name: "Modal_Topheader_fixed",
                                        id: "Modal_Topheader_fixed_yes",
                                        value: "yes",
                                        checked: ""
                                      }
                                    }),
                                    _vm._v(
                                      _vm._s(_vm.cpgtxt_yes) +
                                        "\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-md-2 non-padding",
                                    staticStyle: { margin: "auto" }
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "radio",
                                        name: "Modal_Topheader_fixed",
                                        id: "Modal_Topheader_fixed_no",
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
                            staticClass:
                              "d-flex flex-wrap page_content_bottom_border"
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.cbtntxt_topheader) +
                                " " +
                                _vm._s(_vm.cpgtxt_top) +
                                " " +
                                _vm._s(_vm.cpgtxt_bar) +
                                "\n                       "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-wrap col-md-12 non-padding",
                            staticStyle: { "margin-bottom": "10px" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-3" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-5 non-padding" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticStyle: {
                                          "margin-top": "8px",
                                          color: "#666"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.cpgtxt_height))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(11)
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-wrap col-md-12 non-padding",
                            staticStyle: { "margin-bottom": "10px" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-3" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-5 non-padding" },
                                  [
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
                                          _vm._s(_vm.cpgtxt_left) +
                                            " " +
                                            _vm._s(_vm.cpgtxt_padding)
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(12)
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-3 non-padding",
                                staticStyle: { "font-size": "10px" }
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
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex flex-wrap col-md-3 non-padding"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 non-padding" },
                                  [
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
                                          _vm._s(_vm.cpgtxt_right) +
                                            " " +
                                            _vm._s(_vm.cpgtxt_padding)
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(13)
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-3 non-padding",
                                staticStyle: { "font-size": "10px" }
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
                            staticClass:
                              "d-flex flex-wrap col-md-12 non-padding",
                            staticStyle: { "margin-bottom": "10px" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-3" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-5 non-padding" },
                                  [
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
                                          _vm._s(_vm.cpgtxt_left) +
                                            " " +
                                            _vm._s(_vm.cpgtxt_align)
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(14)
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 non-padding" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex flex-wrap col-md-3 non-padding"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 non-padding" },
                                  [
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
                                          _vm._s(_vm.cpgtxt_right) +
                                            " " +
                                            _vm._s(_vm.cpgtxt_align)
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(15)
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-wrap col-md-12 non-padding",
                            staticStyle: { "margin-bottom": "10px" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-3" },
                              [
                                _c("div", {
                                  staticClass: "col-md-5 non-padding"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-7 non-padding" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "btn-block-edit active",
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            return _vm.editTopheaderLeftBlocks()
                                          }
                                        }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(_vm.cbtntxt_edit) +
                                              " " +
                                              _vm._s(_vm.cpgtxt_left) +
                                              " " +
                                              _vm._s(_vm.cpgtxt_blocks)
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 non-padding" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex flex-wrap col-md-3 non-padding"
                              },
                              [
                                _c("div", {
                                  staticClass: "col-md-4 non-padding"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-7 non-padding" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "btn-block-edit active",
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            return _vm.editTopheaderRightBlocks()
                                          }
                                        }
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(_vm.cbtntxt_edit) +
                                              " " +
                                              _vm._s(_vm.cpgtxt_right) +
                                              " " +
                                              _vm._s(_vm.cpgtxt_blocks)
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-wrap page_content_bottom_border"
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.cbtntxt_topheader) +
                                " " +
                                _vm._s(_vm.cpgtxt_bottom) +
                                " " +
                                _vm._s(_vm.cpgtxt_bar) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-wrap col-md-12 non-padding",
                            staticStyle: { "margin-bottom": "30px" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-4" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 non-padding" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticStyle: {
                                          "margin-top": "8px",
                                          color: "#666"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.cpgtxt_height))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(16),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-md-4",
                                    staticStyle: { "font-size": "10px" }
                                  },
                                  [
                                    _c(
                                      "font",
                                      { staticStyle: { color: "#b0b0af" } },
                                      [_vm._v(_vm._s(_vm.cpgtxt_notdisplaybar))]
                                    ),
                                    _vm._v(
                                      " \n                                "
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-3" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-3 non-padding" },
                                  [
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
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(17)
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex flex-wrap col-md-3" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-3 non-padding" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticStyle: {
                                          "margin-top": "8px",
                                          color: "#666"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.cpgtxt_align))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(18)
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2 non-padding" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "btn-block-edit active",
                                  staticStyle: { width: "80%" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.editTopheaderBottomBlocks()
                                    }
                                  }
                                },
                                [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(_vm.cbtntxt_edit) +
                                        " " +
                                        _vm._s(_vm.cpgtxt_bottom) +
                                        " " +
                                        _vm._s(_vm.cpgtxt_blocks)
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
                          { staticClass: "col-md-12 align-self-center" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "btn-block-edit active",
                                staticStyle: {
                                  width: "100px",
                                  "margin-left": "45%"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.addTopheaderContentBtn()
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
              ]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "ModalEditBlocks" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered modal-sm",
          staticStyle: { "min-width": "500px!important" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("div", { attrs: { id: "Modal_Blocks_Title" } }, [
                _c("h4", { staticClass: "modal-title" }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_left) +
                      " " +
                      _vm._s(_vm.cpgtxt_bar) +
                      " " +
                      _vm._s(_vm.cpgtxt_blocks)
                  )
                ])
              ]),
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
                attrs: { id: "EditBlocksModalBody" }
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
                            height: "400px",
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
                                  _c("th", {
                                    staticClass: "role_user_th",
                                    staticStyle: { border: "0", float: "right" }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tbody", { attrs: { id: "awa_blocks_lists" } })
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
    ])
  ])
}
var staticRenderFns = [
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
            id: "topheader_category_items",
            name: "topheader_category_items"
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
        staticClass: "ssmu_page_nav",
        staticStyle: { width: "100%" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-10" }, [
      _c("input", {
        staticClass: "form-modal-control",
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
    return _c("div", { staticClass: "col-md-10" }, [
      _c("input", {
        staticClass: "form-modal-control",
        attrs: {
          type: "text",
          id: "category_save_name",
          name: "category_save_name"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c("input", {
        staticClass: "form-modal-control",
        attrs: {
          type: "text",
          id: "Modal_Topheader_Name",
          name: "Modal_Topheader_Name"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c("select", {
        staticClass: "form-modal-control w-100 select-noneborder-rightcolor",
        attrs: { id: "Modal_TopCategory_List", name: "Modal_TopCategory_List" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c("input", {
        staticClass: "form-modal-control",
        staticStyle: { "text-align": "center" },
        attrs: {
          type: "text",
          id: "Modal_Topheader_Maxwidth",
          name: "Modal_Topheader_Maxwidth"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c("input", {
        staticClass: "form-modal-control",
        attrs: {
          type: "text",
          id: "Modal_Topheader_padding",
          name: "Modal_Topheader_padding"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7" }, [
      _c("input", {
        staticClass: "form-modal-control",
        attrs: {
          type: "text",
          id: "Modal_Topheader_background",
          name: "Modal_Topheader_background",
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
      {
        staticClass: "col-md-7 non-padding",
        staticStyle: { display: "flex", margin: "auto 0px" }
      },
      [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "topheader_background_color",
            id: "topheader_background_color",
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
            id: "topheader_background_colorpicker",
            "data-color": "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "topheader_background_colorpicker_value" } }, [
          _vm._v("#000000")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c("input", {
        staticClass: "form-modal-control",
        staticStyle: { "text-align": "center" },
        attrs: {
          type: "text",
          id: "Modal_Topheader_Height",
          name: "Modal_Topheader_Height"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c("input", {
        staticClass: "form-modal-control",
        attrs: {
          type: "text",
          id: "Modal_Topheader_leftpadding",
          name: "Modal_Topheader_leftpadding"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c("input", {
        staticClass: "form-modal-control",
        attrs: {
          type: "text",
          id: "Modal_Topheader_rightpadding",
          name: "Modal_Topheader_rightpadding"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c(
        "select",
        {
          staticClass: "form-modal-control w-100 select-noneborder-rightcolor",
          attrs: {
            id: "Modal_Topheader_leftalign_select",
            name: "Modal_Topheader_leftalign_select"
          }
        },
        [
          _c("option", { attrs: { value: "left" } }, [_vm._v("Left")]),
          _vm._v(" "),
          _c("option", { attrs: { selected: "", value: "center" } }, [
            _vm._v("Center")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "right" } }, [_vm._v("Right")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c(
        "select",
        {
          staticClass: "form-modal-control w-100 select-noneborder-rightcolor",
          attrs: {
            id: "Modal_Topheader_rightalign_select",
            name: "Modal_Topheader_rightalign_select"
          }
        },
        [
          _c("option", { attrs: { value: "left" } }, [_vm._v("Left")]),
          _vm._v(" "),
          _c("option", { attrs: { selected: "", value: "center" } }, [
            _vm._v("Center")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "right" } }, [_vm._v("Right")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5 non-padding" }, [
      _c("input", {
        staticClass: "form-modal-control",
        staticStyle: { "text-align": "center" },
        attrs: {
          type: "text",
          id: "Modal_Topheader_bottomheight",
          name: "Modal_Topheader_bottomheight"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c("input", {
        staticClass: "form-modal-control",
        attrs: {
          type: "text",
          id: "Modal_Topheader_bottompadding",
          name: "Modal_Topheader_bottompadding"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-7 non-padding" }, [
      _c(
        "select",
        {
          staticClass: "form-modal-control w-100 select-noneborder-rightcolor",
          attrs: {
            id: "Modal_Topheader_bottomalign_select",
            name: "Modal_Topheader_bottomalign_select"
          }
        },
        [
          _c("option", { attrs: { value: "left" } }, [_vm._v("Left")]),
          _vm._v(" "),
          _c("option", { attrs: { selected: "", value: "center" } }, [
            _vm._v("Center")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "right" } }, [_vm._v("Right")])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue":
/*!****************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_template_id_44d11d17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=template&id=44d11d17& */ "./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=template&id=44d11d17&");
/* harmony import */ var _AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_template_id_44d11d17___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_template_id_44d11d17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=template&id=44d11d17&":
/*!***********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=template&id=44d11d17& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_template_id_44d11d17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=template&id=44d11d17& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebSiteAppearanceHeadTopHeader.vue?vue&type=template&id=44d11d17&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_template_id_44d11d17___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebSiteAppearanceHeadTopHeader_vue_vue_type_template_id_44d11d17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);