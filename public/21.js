(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var vueOBJ;
var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.jsonparse(window.Laravel.userinfo).id;
var tabstatus = 0;
var btntxt_edit = "";
var btntxt_change = "";
var btntxt_delete = "";
var pgtxt_department = "";
var pgtxt_position = "";
var pgtxt_superior = "";
var pgtxt_name = "";
var btntxt_add = "";
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var is_edit = false;
var group_user_ids = new Array();
var group_user_names = new Array();
var checked_del_items = new Array();
var group_id = 0;
var permss;

String.prototype.trim = function () {
  var trimmed = this.replace(/^\s+|\s+$/g, '%|%');
  return trimmed;
};

String.prototype.ltrim = function () {
  var trimmed = this.replace(/^\s+/g, '%|%');
  return trimmed;
};

String.prototype.rtrim = function () {
  var trimmed = this.replace(/\s+$/g, '%|%');
  return trimmed;
};

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
    } else if (tabstatus == 2) {
      showRolesGroupList();
    }
  });
}

function selectItemFunc(lists) {
  var tags = "";
  $('#sum_sel_items').html("");
  tags += "<option selected value='0'>--None--</option>";

  if (lists != "" && lists != null) {
    for (var i = 0; i < lists.length; i++) {
      tags += "<option value='" + lists[i].id + "'>" + lists[i].name + "</option>";
    }
  }

  $('#sum_sel_items').html(tags);
  $('#sum_sel_items').change(function () {
    var sel_name = $("#sum_sel_items option:selected").text();
    var sel_id = $('#sum_sel_items').val();
    $('#select_name').val(sel_name);
    $('#select_id').val(sel_id);
  });
} /// department /////////////////////////////////////////////////////////////////////////////////////////////////////


function showDepartmentModal() {
  if (tabstatus == 0) {
    $('#Modal_Title').text(btntxt_add + " " + pgtxt_department);
    $('#Modal_Add_Name').text(pgtxt_department + " " + pgtxt_name);
    $('#Modal_Select_Title').text(pgtxt_superior + " " + pgtxt_department);
  } else if (tabstatus == 1) {
    $('#Modal_Title').text(btntxt_add + " " + pgtxt_position);
    $('#Modal_Add_Name').text(pgtxt_position + " " + pgtxt_name);
    $('#Modal_Select_Title').text(pgtxt_department);
  }

  $.ajax({
    url: 'admin.getSUMRolesDepartment',
    data: {
      userid: userid
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        selectItemFunc(data.lists);
        $('#ModalForAddItem').modal('show');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function departmentList(lists) {
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].fid;
    var name = lists[i].fname;
    var position = lists[i].position;
    var number = lists[i].number;
    tags += '<tr class="sua_department_item-' + id + '" data-id="' + id + '" data-name="' + name + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="oneCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>' + position + '</td>';
    tags += '   <td>' + number + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="sumr_department_table-' + id + '" name="sumr_department_table-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#ssu_management_roles_department').html(tags);
  $('input[id^="oneCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="sumr_department_table-"]').change(function () {
    var id = $(this).attr("id");
    var event_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (sel_val == "change") {
      if (permss.pwrite == 1) {
        var item_name = $('.sua_department_item-' + event_id).attr("data-name");
        $('#item_id').val(event_id);
        $('#item_name').val(item_name);
        is_edit = true;
        showDepartmentModal();
        $('#ModalForAddItem').modal('show');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    } else if (sel_val == "delete") {
      if (permss.pdelete == 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.confirmAlert(deleteDepartmentItem, event_id, 'pgtxt_wantdeleteitem');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    }
  });
}

function showRolesDepartmentList() {
  $.ajax({
    url: 'admin.getSUMRolesDepartmentList',
    data: {
      userid: userid,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        if (data.lists != "" && data.lists != null) {
          var lists = data.lists;

          if (lists !== null && lists != "") {
            departmentList(lists);
          }

          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
        } else $('#ssu_management_roles_department').html('');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function addRolesDepartment() {
  var name = $('#item_name').val();
  var sel_id = $('#select_id').val();
  $.ajax({
    url: 'admin.addSUMRolesDepartment',
    data: {
      userid: userid,
      name: name,
      d_id: sel_id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          departmentList(lists);
          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
        } else $('#ssu_management_roles_department').html('');

        $('#item_name').val('');
        $('#select_name').val('');
        $('#select_id').val('');
        $('#ModalForAddItem').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function editRolesDepartment() {
  var name = $('#item_name').val();
  var sel_id = $('#select_id').val();
  var item_id = $('#item_id').val();
  $.ajax({
    url: 'admin.editSUMRolesDepartment',
    data: {
      item_id: item_id,
      userid: userid,
      name: name,
      d_id: sel_id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          departmentList(lists);
          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
        } else $('#ssu_management_roles_department').html('');

        $('#item_name').val('');
        $('#select_name').val('');
        $('#select_id').val('');
        $('#ModalForAddItem').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function deleteDepartmentItem(id) {
  $.ajax({
    url: 'admin.deleteSUMRolesDepartment',
    data: {
      userid: userid,
      id: id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          departmentList(lists);
          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
        } else $('#ssu_management_roles_department').html('');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
} ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// position ///////////////////////////////////////////////////////////////////////////////////////////////////////


function positionList(lists) {
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].fid;
    var name = lists[i].fname;
    var d_name = lists[i].d_name;
    var number = lists[i].number;
    tags += '<tr class="sua_position_item-' + id + '" data-id="' + id + '" data-name="' + name + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="posCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>' + d_name + '</td>';
    tags += '   <td>' + number + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="sumr_position_table-' + id + '" name="sumr_position_table-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#ssu_management_roles_position').html(tags);
  $('input[id^="posCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="sumr_position_table-"]').change(function () {
    var id = $(this).attr("id");
    var event_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (sel_val == "change") {
      if (permss.pwrite == 1) {
        var item_name = $('.sua_position_item-' + event_id).attr("data-name");
        $('#item_id').val(event_id);
        $('#item_name').val(item_name);
        is_edit = true;
        showDepartmentModal();
        $('#ModalForAddItem').modal('show');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    } else if (sel_val == "delete") {
      if (permss.pdelete == 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.confirmAlert(deletePostionItem, event_id, 'pgtxt_wantdeleteitem');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    }
  });
}

function showRolesPositionList() {
  $.ajax({
    url: 'admin.getSUMRolesPositionList',
    data: {
      userid: userid,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        if (data.lists != "" && data.lists != null) {
          var lists = data.lists;

          if (lists !== null && lists != "") {
            positionList(lists);
          }

          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
        } else $('#ssu_management_roles_position').html('');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function addRolesPosition() {
  var name = $('#item_name').val();
  var sel_id = $('#select_id').val();
  $.ajax({
    url: 'admin.addSUMRolesPosition',
    data: {
      userid: userid,
      name: name,
      d_id: sel_id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          positionList(lists);
          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
        } else $('#ssu_management_roles_position').html('');

        $('#select_id').val('');
        $('#item_name').val('');
        $('#ModalForAddItem').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function deletePostionItem(id) {
  $.ajax({
    url: 'admin.deleteSUMRolesPosition',
    data: {
      userid: userid,
      id: id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          positionList(lists);
          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
        } else $('#ssu_management_roles_position').html('');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function editRolesPosition() {
  var name = $('#item_name').val();
  var sel_id = $('#select_id').val();
  var item_id = $('#item_id').val();
  $.ajax({
    url: 'admin.editSUMRolesPosition',
    data: {
      item_id: item_id,
      userid: userid,
      name: name,
      d_id: sel_id,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          positionList(lists);
          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
        } else $('#ssu_management_roles_position').html('');

        $('#select_id').val('');
        $('#item_name').val('');
        $('#ModalForAddItem').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
} ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// group //////////////////////////////////////////////////////////////////////////////////////////////////////////


function selete_role_sel() {
  if ($('#sum_user_role_sel').val() == 0) {
    $('#sum_user_role_content_sel').html('<option value="0">Name</option>');
  }

  $('select[id^="sum_user_role_sel"]').change(function () {
    var sel_val = $(this).val();

    if (sel_val == 0) {
      $('#sum_user_role_content_sel').html('<option value="0">Name</option>');
      showUserListTable();
    } else {
      getSubRoleType();
    }
  });
  $('select[id^="sum_user_role_content_sel"]').change(function () {
    var sel_val = $(this).val();
    showUserListTable();
  });
  $('.modal-content').click(function () {
    $('#div_ssu_management_group_user').css('display', 'none');
  });
  $('#group_item_name').click(function () {
    $('#div_ssu_management_group_user').css('display', 'none');
  });
  $('#group_item_usres').click(function () {
    showGroupedUsersList();
  });
}

function getSubRoleType() {
  var type = $('#sum_user_role_sel').val();
  $('#sum_user_role_content_sel').html('');

  if (type != 0) {
    $.ajax({
      url: 'admin.getSubRoleType',
      data: {
        type: type,
        userid: userid
      },
      type: 'POST',
      async: false,
      success: function success(data) {
        if (data.msg === "ok") {
          var lists = data.lists;

          if (lists !== null && lists != "") {
            var otag = "";

            for (var i = 0; i < lists.length; i++) {
              otag += '<option value="' + lists[i].id + '">' + lists[i].name + '</option>';
            }

            $('#sum_user_role_content_sel').html(otag);
            showUserListTable();
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
}

function checked_users_func() {
  var u_tag = '';

  for (var i = 0; i < group_user_names.length; i++) {
    if (group_user_names[i] != "") {
      u_tag += '<div style="display: flex; font-size: 15px; height: 20px;">';
      u_tag += '<div class="ssu_username" id="ssu_username-' + group_user_ids[i] + '" style="height: 20px; margin-right: 5px;">' + group_user_names[i] + '</div>';
      u_tag += '<div style="height: 20px;"><button type="button" class="close" id="selectedCloseBtn-' + group_user_ids[i] + '">&times;</button></div>';
      u_tag += '<div style="height: 20px; margin-right: 2px;">&nbsp;|&nbsp;</div>';
      u_tag += '</div>';
    }
  }

  $('#select_users_name_group').html(u_tag);
  var checked_users = new Array();
  var checked_ids = new Array();
  $('button[id^=selectedCloseBtn-]').click(function () {
    var un_id = $(this).attr('id').split("-")[1];
    $('#userCheckbox_' + un_id).prop("checked", false);
    var check_user = $('#ssu_username-' + un_id).text();
    var idx = group_user_ids.indexOf(un_id);
    if (idx > -1) group_user_ids.splice(idx, 1);
    var uname = group_user_names.indexOf(check_user);
    if (uname > -1) group_user_names.splice(uname, 1);
    checked_users_func();
  });
}

function user_list_func(lists) {
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var is_checked = false;
    var id = lists[i].id;
    var name = lists[i].name;
    var department = lists[i].d_name;
    var position = lists[i].p_name;
    tags += '<tr class="sua_user_item-' + id + '" data-id="' + id + '" data-name="' + name + '">';
    tags += '<td>';
    tags += '<div class="form-check form-check-inline">';

    for (var c = 0; c < group_user_ids.length; c++) {
      if (group_user_ids[c] == id) {
        is_checked = true;
        break;
      } else {
        is_checked = false;
      }
    }

    if (is_checked) {
      tags += '<input class="form-check-input" type="checkbox" checked id="userCheckbox_' + id + '" value="' + name + '">';
    } else {
      tags += '<input class="form-check-input" type="checkbox" id="userCheckbox_' + id + '" value="' + name + '">';
    }

    tags += '</div>';
    tags += '</td>';
    tags += '<td>' + name + '</td>';
    tags += '<td>' + department + '</td>';
    tags += '<td>' + position + '</td>';
    tags += '</tr>';
  }

  $('#ssu_management_roles_user').html(tags);
  $('input[id^="userCheckbox_"]').click(function () {
    var id = $(this).attr("id");
    var uid = id.split("_")[1];
    var user_name = $(this).val();

    if ($(this).is(':checked')) {
      group_user_ids.push(uid);
      group_user_names.push(user_name);
    } else {
      var idx = group_user_ids.indexOf(uid);
      if (idx > -1) group_user_ids.splice(idx, 1);
      var uname = group_user_names.indexOf(user_name);
      if (uname > -1) group_user_names.splice(uname, 1);
    }

    checked_users_func();
  });
}

function showUserListTable() {
  $('#ssu_management_roles_user').html('');
  var type = $('#sum_user_role_sel').val();
  var subtype = $('#sum_user_role_content_sel').val();
  var search = $('#user_search_cont').val();
  $.ajax({
    url: 'admin.getUserInfoList',
    data: {
      type: type,
      subtype: subtype,
      search: search
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          user_list_func(lists);
        } else $('#ssu_management_roles_user').html('');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function addSelectedUsers() {
  var user_txt = "";

  for (var i = 0; i < group_user_names.length; i++) {
    if (i == 0) user_txt += group_user_names[i];else user_txt += ' | ' + group_user_names[i];
  }

  $('#group_item_usres').val(user_txt);
}

function groupList(lists, d_numbers, p_numbers, g_numbers) {
  $('#ssu_management_roles_group').html('');
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].fid;
    var name = lists[i].fname;
    var d_number = d_numbers[i];
    var p_number = p_numbers[i];
    var g_number = g_numbers[i];
    tags += '<tr class="sua_group_item-' + id + '" data-id="' + id + '" data-name="' + name + '" data-num="' + i + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="groupCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>' + p_number + '</td>';
    tags += '   <td>' + d_number + '</td>';
    tags += '   <td>' + g_number + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="sumr_group_table-' + id + '" name="sumr_group_table-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#ssu_management_roles_group').html(tags);
  $('input[id^="groupCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="sumr_group_table-"]').change(function () {
    var id = $(this).attr("id");
    var event_id = id.split('-')[1];
    var sel_val = $(this).val();
    group_id = event_id;

    if (sel_val == "change") {
      if (permss.pwrite == 1) {
        var group_name = $('.sua_group_item-' + event_id).attr("data-name");
        var index = $('.sua_group_item-' + event_id).attr("data-num");
        var unames = lists[index].user_names;
        var uids = lists[index].user_ids;
        group_user_names = $.parseJSON(unames);
        group_user_ids = $.parseJSON(uids);
        is_edit = true;
        $('#group_item_name').val(group_name);
        addSelectedUsers();
        checked_users_func();
        $('#ModalForGroupItem').modal('show');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    } else if (sel_val == "delete") {
      if (permss.pdelete == 1) {
        var index = $('.sua_group_item-' + event_id).attr("data-num");
        var unames = lists[index].user_names;
        var uids = lists[index].user_ids;
        group_user_names = $.parseJSON(unames);
        group_user_ids = $.parseJSON(uids);
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.confirmAlert(deleteGroupItem, event_id, 'pgtxt_wantdeleteitem');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    }
  });
}

function deleteGroupItem(gid) {
  $.ajax({
    url: 'admin.deleteSUMRolesGroup',
    data: {
      userid: userid,
      gid: gid,
      group_user_ids: group_user_ids,
      group_user_names: group_user_names,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        if (data.lists != "" && data.lists != null) {
          var lists = data.lists;
          var d_numbers = data.d_numbers;
          var p_numbers = data.p_numbers;
          var g_numbers = data.g_numbers;

          if (lists !== null && lists != "") {
            groupList(lists, d_numbers, p_numbers, g_numbers);
          }

          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
          group_user_ids = new Array();
          group_user_names = new Array();
        } else $('#ssu_management_roles_group').html('');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function addNewGroup(group_name) {
  $.ajax({
    url: 'admin.addSUMRolesGroup',
    data: {
      userid: userid,
      group_name: group_name,
      group_user_ids: group_user_ids,
      group_user_names: group_user_names,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        if (data.lists != "" && data.lists != null) {
          var lists = data.lists;
          var d_numbers = data.d_numbers;
          var p_numbers = data.p_numbers;
          var g_numbers = data.g_numbers;

          if (lists !== null && lists != "") {
            groupList(lists, d_numbers, p_numbers, g_numbers);
          }

          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
          group_user_ids = new Array();
          group_user_names = new Array();
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

function showRolesGroupList() {
  $.ajax({
    url: 'admin.getSUMRolesGroup',
    data: {
      userid: userid,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        if (data.lists != "" && data.lists != null) {
          var lists = data.lists;
          var d_numbers = data.d_numbers;
          var p_numbers = data.p_numbers;
          var g_numbers = data.g_numbers;

          if (lists !== null && lists != "") {
            groupList(lists, d_numbers, p_numbers, g_numbers);
          }

          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
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

function editGroup(group_name) {
  $.ajax({
    url: 'admin.editSUMRolesGroup',
    data: {
      gid: group_id,
      userid: userid,
      group_name: group_name,
      group_user_ids: group_user_ids,
      group_user_names: group_user_names,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        if (data.lists != "" && data.lists != null) {
          var lists = data.lists;
          var d_numbers = data.d_numbers;
          var p_numbers = data.p_numbers;
          var g_numbers = data.g_numbers;

          if (lists !== null && lists != "") {
            groupList(lists, d_numbers, p_numbers, g_numbers);
          }

          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

          pstart = data.pstart;
          var totalpage = data.totalpage;
          pageNavigation(totalpage);
          group_user_ids = new Array();
          group_user_names = new Array();
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

function showGroupedUsersList() {
  if (group_user_ids.length > 0) {
    $.ajax({
      url: 'admin.showGroupUserInfo',
      data: {
        g_uids: group_user_ids
      },
      type: 'POST',
      success: function success(data) {
        if (data.msg === "ok") {
          if (data.lists != "" && data.lists != null) {
            var lists = data.lists;
            $('#ssu_management_group_user').html('');
            var tags = '';

            for (var i = 0; i < lists.length; i++) {
              var id = lists[i].id;
              var name = lists[i].name;
              var department = lists[i].d_name;
              var position = lists[i].p_name;
              tags += '<tr class="sua_user_item-' + id + '">';
              tags += '   <td>' + name + '</td>';
              tags += '   <td>' + department + '</td>';
              tags += '   <td>' + position + '</td>';
              tags += '</tr>';
            }

            $('#ssu_management_group_user').html(tags);
            $('#div_ssu_management_group_user').css('display', 'block');
          } else $('#div_ssu_management_group_user').css('display', 'none');
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

function allDeleteFunc() {
  $('.roles_selected_all_delete').click(function () {
    if (permss.pdelete == 0) {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
      return;
    }

    if (checked_del_items.length > 0) {
      $.ajax({
        url: 'admin.allDeleteSUMRolesChecked',
        data: {
          userid: userid,
          ids: checked_del_items,
          pstart: pstart,
          pcnt: pcnt,
          tabstatus: tabstatus
        },
        type: 'POST',
        success: function success(data) {
          if (data.msg === "ok") {
            var lists = data.lists;
            var d_numbers = data.d_numbers;
            var p_numbers = data.p_numbers;
            var g_numbers = data.g_numbers;

            if (lists !== null && lists != "") {
              if (tabstatus == 0) departmentList(lists);else if (tabstatus == 1) positionList(lists);else if (tabstatus == 2) groupList(lists, d_numbers, p_numbers, g_numbers);
              var total = data.total;

              if (total <= 0) {
                $('#ssmu_page_nav').html('');
                return;
              }

              pstart = data.pstart;
              var totalpage = data.totalpage;
              pageNavigation(totalpage);
              group_user_ids = new Array();
              group_user_names = new Array();
            } else {
              if (tabstatus == 0) $('#ssu_management_roles_department').html('');else if (tabstatus == 1) $('#ssu_management_roles_position').html('');else if (tabstatus == 2) $('#ssu_management_roles_group').html('');
            }

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
} ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pageid: 'system-suser-management-roles-fav',
      mu_system: '',
      musu_system_bsuser: '',
      mususu_system_suser_manage: '',
      musususu_system_suser_manage_roles: '',
      btntxt_roles: '',
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_change: '',
      btntxt_delete: '',
      pgtxt_department: '',
      pgtxt_position: '',
      pgtxt_group: '',
      pgtxt_list: '',
      pgtxt_name: '',
      pgtxt_number: '',
      pgtxt_delete: '',
      pgtxt_superior: '',
      pgtxt_colleagues: '',
      pgtxt_suserlist: '',
      pgtxt_all: '',
      pgtxt_wantdeleteitem: '',
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
    cmu_system: function cmu_system() {
      return this.mu_system;
    },
    cmusu_system_bsuser: function cmusu_system_bsuser() {
      return this.musu_system_bsuser;
    },
    cmususu_system_suser_manage: function cmususu_system_suser_manage() {
      return this.mususu_system_suser_manage;
    },
    cmusususu_system_suser_manage_roles: function cmusususu_system_suser_manage_roles() {
      return this.musususu_system_suser_manage_roles;
    },
    cbtntxt_roles: function cbtntxt_roles() {
      return this.btntxt_roles;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_department: function cpgtxt_department() {
      return this.pgtxt_department;
    },
    cpgtxt_position: function cpgtxt_position() {
      return this.pgtxt_position;
    },
    cpgtxt_group: function cpgtxt_group() {
      return this.pgtxt_group;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_number: function cpgtxt_number() {
      return this.pgtxt_number;
    },
    cpgtxt_delete: function cpgtxt_delete() {
      return this.pgtxt_delete;
    },
    cpgtxt_superior: function cpgtxt_superior() {
      return this.pgtxt_superior;
    },
    cpgtxt_colleagues: function cpgtxt_colleagues() {
      return this.pgtxt_colleagues;
    },
    cpgtxt_suserlist: function cpgtxt_suserlist() {
      return this.pgtxt_suserlist;
    },
    cpgtxt_all: function cpgtxt_all() {
      return this.pgtxt_all;
    },
    cpgtxt_notpermission: function cpgtxt_notpermission() {
      return this.pgtxt_notpermission;
    },
    cpgtxt_notification: function cpgtxt_notification() {
      return this.pgtxt_notification;
    },
    cpgtxt_wantdeleteitem: function cpgtxt_wantdeleteitem() {
      return this.pgtxt_wantdeleteitem;
    },
    cbtntxt_ok: function cbtntxt_ok() {
      return this.btntxt_ok;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
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
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.permissionDefinition();
    this.sliderTabs();
    this.initPage();
  },
  methods: {
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list != null && list != '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
    },
    initPage: function initPage() {
      btntxt_add = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_add');
      btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
      btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
      btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
      pgtxt_department = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_department');
      pgtxt_position = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_position');
      pgtxt_superior = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_superior');
      pgtxt_name = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_name');
      is_edit = false;
      showRolesDepartmentList();
      allDeleteFunc();
    },
    sliderTabs: function sliderTabs() {
      $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
        pstart = 1;
        pnum = pstart;
        $('#ssmu_page_nav').html('');
        is_edit = false;
        $('#item_id').val('');
        checked_del_items = new Array();
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');
        $('.page_roles_content_list').removeClass('active');
        $('#' + subid).addClass('active');

        if (subid == 'departmentbar') {
          tabstatus = 0;
          showRolesDepartmentList();
        } else if (subid == 'positionbar') {
          tabstatus = 1;
          showRolesPositionList();
        } else if (subid == 'groupbar') {
          tabstatus = 2;
          selete_role_sel();
          showRolesGroupList();
        }

        allDeleteFunc();
      });
    },
    addRoleList: function addRoleList() {
      if (permss.pcreate == 1) {
        is_edit = false;
        $('#item_id').val('');

        if (tabstatus == 0 || tabstatus == 1) {
          showDepartmentModal();
          $('#ModalForAddItem').modal('show');
        } else if (tabstatus == 2) {
          group_id = 0;
          group_user_ids = new Array();
          group_user_names = new Array();
          $('#group_item_name').val('');
          $('#group_item_usres').val('');
          $('#select_users_name_group').html('');
          $('#ModalForGroupItem').modal('show');
        }
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    },
    addModalBtn: function addModalBtn() {
      var item_name = $('#item_name').val();

      if (item_name != null && item_name != "") {
        if (tabstatus == 0) {
          if (is_edit) {
            editRolesDepartment();
          } else {
            addRolesDepartment();
          }
        }

        if (tabstatus == 1) {
          if (is_edit) {
            editRolesPosition();
          } else {
            addRolesPosition();
          }
        }

        is_edit = false;
        $('#item_id').val('');
      }
    },
    selectUserBtn: function selectUserBtn() {
      $('#user_search_cont').val('');
      $('#div_ssu_management_group_user').css('display', 'none');
      showUserListTable();
      $('#ModalForGroupItem').modal('hide');
      $('#ModalForUserItem').modal('show');
    },
    allGroupSearchBtn: function allGroupSearchBtn() {},
    role_userSearchBtn: function role_userSearchBtn() {
      showUserListTable();
    },
    addUserListModalBtn: function addUserListModalBtn() {
      var str = $('#select_users_name_group').text();

      if (str != "" && str != null) {
        addSelectedUsers();
        $('#ModalForGroupItem').modal('show');
        $('#ModalForUserItem').modal('hide');
      }
    },
    addGroupModalBtn: function addGroupModalBtn() {
      var group_name = $('#group_item_name').val();

      if (group_name != '') {
        if (!is_edit) addNewGroup(group_name);else editGroup(group_name);
        $('#ModalForGroupItem').modal('hide');
        group_id = 0;
        group_user_ids = new Array();
        group_user_names = new Array();
        $('#select_users_name_group').html('');
        $('#group_item_name').val('');
        $('#group_item_usres').val('');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page_roles_content_list{\n    display: none;\n}\n.page_roles_content_list.active{\n    display: block;\n}\n.page1_content_side_bar_text{\n    cursor: pointer;\n    float: left;\n}\n.select-noneborder-rightcolor{\n    border-right: 1px solid #fff;\n    border-radius: inherit;\n    margin-left: 10px;\n}\n.role_user_th{\n    color: #000 !important;\n    font-size:11px;\n    border-bottom: 0px !important;\n}\n.bsuser_management_roles_tab{\n    width: 150px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=template&id=e4759860&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=template&id=e4759860& ***!
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_system_suser_manage_roles))]),
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
            "\n                   " +
              _vm._s(_vm.cmu_system) +
              "  >>  " +
              _vm._s(_vm.cmusu_system_bsuser) +
              "  >>  " +
              _vm._s(_vm.cmususu_system_suser_manage) +
              "  >>  " +
              _vm._s(_vm.cmusususu_system_suser_manage_roles) +
              "\n                  "
          ),
          _vm._m(0)
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
        _c("div", { staticClass: "bsuser_management_roles_tab" }, [
          _c(
            "div",
            {
              staticClass:
                "page1_content_side_bar_text page1_content_side_bar_seleted",
              attrs: { "data-target": "departmentbar" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_department))]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "bsuser_management_roles_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "positionbar" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_position))]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "bsuser_management_roles_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "groupbar" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_group))]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card border-0 m-b-10 text-right" }, [
          _c("div", [
            _c(
              "div",
              {
                staticClass:
                  "btn btn-outline-light dash-my-btn-0 active p-l-r-30",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.addRoleList()
                  }
                }
              },
              [_c("span", [_vm._v(" " + _vm._s(_vm.cbtntxt_add) + " ")])]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_roles_content_list active",
          attrs: { id: "departmentbar" }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass: "col-md-4",
                staticStyle: { margin: "20px 0px 0px 20px" }
              },
              [
                _c("h6", { staticClass: "card-title m-b-20" }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_department) +
                      " " +
                      _vm._s(_vm.cpgtxt_list)
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-lg  no-footer",
                    attrs: {
                      id: "sum-department-list",
                      role: "grid",
                      "aria-describedby": "user-list_info"
                    }
                  },
                  [
                    _c("thead", [
                      _c("tr", { attrs: { role: "row" } }, [
                        _c("th", { staticStyle: { width: "40px!important" } }),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_name))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_position))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_number))
                        ]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: {
                              "font-size": "14px",
                              "text-align": "right",
                              "padding-right": "40px"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "roles_selected_all_delete",
                                staticStyle: { cursor: "pointer" }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_delete))]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", {
                      attrs: { id: "ssu_management_roles_department" }
                    })
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_roles_content_list",
          attrs: { id: "positionbar" }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass: "col-md-4",
                staticStyle: { margin: "20px 0px 0px 20px" }
              },
              [
                _c("h6", { staticClass: "card-title m-b-20" }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_position) + " " + _vm._s(_vm.cpgtxt_list)
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-lg  no-footer",
                    attrs: {
                      id: "sum-position-list",
                      role: "grid",
                      "aria-describedby": "user-list_info"
                    }
                  },
                  [
                    _c("thead", [
                      _c("tr", { attrs: { role: "row" } }, [
                        _c("th", { staticStyle: { width: "40px!important" } }),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_name))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_department))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_number))
                        ]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: {
                              "font-size": "14px",
                              "text-align": "right",
                              "padding-right": "40px"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "roles_selected_all_delete",
                                staticStyle: { cursor: "pointer" }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_delete))]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", {
                      attrs: { id: "ssu_management_roles_position" }
                    })
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_roles_content_list",
          attrs: { id: "groupbar" }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass: "col-md-12",
                staticStyle: {
                  display: "flex",
                  padding: "20px 20px 20px 20px",
                  "flex-direction": "row",
                  "align-items": "center"
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
                  [
                    _vm._v(
                      _vm._s(_vm.cpgtxt_group) + " " + _vm._s(_vm.cpgtxt_list)
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: {
                      width: "330px",
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
                            return _vm.allGroupSearchBtn($event)
                          }
                        }
                      },
                      [
                        _c("input", {
                          staticClass: "form-control",
                          staticStyle: {
                            height: "calc(1.5em + .75rem + 6px)",
                            "padding-left": "150px"
                          },
                          attrs: {
                            type: "text",
                            id: "search-cont",
                            name: "search-cont"
                          }
                        }),
                        _vm._v(" "),
                        _vm._m(1)
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          display: "flex",
                          "flex-direction": "row",
                          width: "135px",
                          position: "absolute"
                        }
                      },
                      [
                        _c(
                          "select",
                          {
                            staticClass:
                              "form-control w-100 select-noneborder-rightcolor",
                            attrs: {
                              id: "sum_group_sel_bar",
                              name: "sum_group_sel_bar"
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "0", selected: "" } },
                              [_vm._v(_vm._s(_vm.cpgtxt_all))]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_department))
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_position))
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-lg  no-footer",
                    attrs: {
                      id: "sum-group-list",
                      role: "grid",
                      "aria-describedby": "user-list_info"
                    }
                  },
                  [
                    _c("thead", [
                      _c("tr", { attrs: { role: "row" } }, [
                        _c("th", { staticStyle: { width: "40px!important" } }),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_name))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_position))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_department))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_number))
                        ]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: {
                              "font-size": "14px",
                              "text-align": "right",
                              "padding-right": "40px"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "roles_selected_all_delete",
                                staticStyle: { cursor: "pointer" }
                              },
                              [_vm._v(_vm._s(_vm.cpgtxt_delete))]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { id: "ssu_management_roles_group" } })
                  ]
                )
              ])
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "ModalForAddItem" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered modal-sm",
          staticStyle: { "min-width": "500px!important" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                id: "item_id",
                name: "item_id",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                id: "select_id",
                name: "select_id",
                value: "0"
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                id: "select_name",
                name: "select_name",
                value: "--None--"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-body",
                staticStyle: { padding: "0 1.5rem 1.5rem 1.5rem" },
                attrs: { id: "myAlertEmailModalbody" }
              },
              [
                _c("div", { staticClass: "panel", attrs: { id: "tab4" } }, [
                  _c("form", { attrs: { id: "ssfe-email-frm" } }, [
                    _vm._m(4),
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
                                return _vm.addModalBtn()
                              }
                            }
                          },
                          [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      attrs: { type: "hidden", id: "ssfe-id", value: "" }
                    })
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
      { staticClass: "modal fade", attrs: { id: "ModalForGroupItem" } },
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
                _c("h4", { staticClass: "modal-title" }, [
                  _vm._v(
                    _vm._s(_vm.cbtntxt_add) + " " + _vm._s(_vm.cpgtxt_group)
                  )
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
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "sel_group_id",
                  name: "item_id",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "sel_group_name",
                  name: "select_name",
                  value: "--None--"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-body",
                  staticStyle: { padding: "0 1.5rem 1.5rem 1.5rem" },
                  attrs: { id: "groupModalbody" }
                },
                [
                  _c("div", { staticClass: "panel" }, [
                    _c("form", { attrs: { id: "ssfe-groupModal-frm" } }, [
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
                                _c("div", { staticClass: "col-md-4" }, [
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
                                        _vm._s(_vm.cpgtxt_group) +
                                          " " +
                                          _vm._s(_vm.cpgtxt_name)
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._m(5)
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-md-12",
                              staticStyle: { "margin-top": "20px" }
                            },
                            [
                              _c("div", { staticClass: "d-flex flex-wrap" }, [
                                _c("div", { staticClass: "col-md-4" }, [
                                  _c(
                                    "label",
                                    {
                                      staticStyle: {
                                        "margin-top": "8px",
                                        color: "#666"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.cpgtxt_colleagues))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-md-8",
                                    staticStyle: { display: "flex" }
                                  },
                                  [
                                    _vm._m(6),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "btn btn-outline-light dash-my-btn-0",
                                        staticStyle: { "margin-left": "10px" },
                                        attrs: { id: "ssfe-groupuser-add" },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            return _vm.selectUserBtn()
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              version: "1.1",
                                              id: "user",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              "xmlns:xlink":
                                                "http://www.w3.org/1999/xlink",
                                              x: "0px",
                                              y: "0px",
                                              viewBox: "0 0 785.8159 1010",
                                              "enable-background":
                                                "new 0 0 785.8159 1010",
                                              "xml:space": "preserve"
                                            }
                                          },
                                          [
                                            _c(
                                              "g",
                                              { attrs: { id: "user-user" } },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    fill: "#323B5A",
                                                    d:
                                                      "M392.9692,0c135.251,0,244.8565,109.5234,244.8565,244.6914c0,135.312-109.6055,244.8145-244.8565,244.8145\n                                                            c-135.1269,0-244.7734-109.5025-244.7734-244.8145C148.1958,109.5234,257.8423,0,392.9692,0z"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("path", {
                                                  attrs: {
                                                    fill: "#323B5A",
                                                    d:
                                                      "M785.8159,1010h-0.5762H0V876.8457c0-173.7793,109.3999-321.1318,261.9521-376.0586l131.0171,174.6016\n                                                            l130.9756-174.6016c152.5938,54.9268,261.8711,202.2793,261.8711,376.0586V1010z"
                                                  }
                                                })
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
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                display: "none",
                                position: "absolute",
                                "margin-left": "180px",
                                "margin-top": "115px",
                                "font-size": "11px",
                                "z-index": "10"
                              },
                              attrs: { id: "div_ssu_management_group_user" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "table-responsive",
                                  staticStyle: {
                                    "border-radius": "10px",
                                    "background-color": "#e9ecef",
                                    "border-top": "1px solid #e0dede",
                                    "border-bottom": "1px solid #e0dede",
                                    height: "100px",
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
                                            { staticClass: "role_user_th" },
                                            [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "role_user_th" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.cpgtxt_department)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "role_user_th" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.cpgtxt_position)
                                              )
                                            ]
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tbody", {
                                        attrs: {
                                          id: "ssu_management_group_user"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
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
                              attrs: { id: "ssfe-groupmodel-add" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.addGroupModalBtn()
                                }
                              }
                            },
                            [
                              _c("span", [
                                _vm._v("+ " + _vm._s(_vm.cbtntxt_add))
                              ])
                            ]
                          )
                        ])
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
      { staticClass: "modal fade", attrs: { id: "ModalForUserItem" } },
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
                _c("h4", { staticClass: "modal-title" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_suserlist))
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
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "sel_role_type",
                  name: "sel_role_type",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "sel_role_subtype",
                  name: "sel_role_subtype",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-body",
                  staticStyle: { padding: "0 1.5rem 1.5rem 1.5rem" },
                  attrs: { id: "groupModalUserbody" }
                },
                [
                  _c("div", { staticClass: "panel" }, [
                    _c("form", { attrs: { id: "ssfe-groupUserModal-frm" } }, [
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
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      width: "100%",
                                      position: "relative",
                                      display: "flex"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "input-group-append",
                                        staticStyle: { width: "100%" }
                                      },
                                      [
                                        _c("input", {
                                          staticClass: "form-control",
                                          staticStyle: {
                                            height:
                                              "calc(1.5em + .75rem + 6px)",
                                            "padding-left": "270px",
                                            "padding-right": "40px"
                                          },
                                          attrs: {
                                            type: "text",
                                            id: "user_search_cont",
                                            name: "user_search_cont"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "btn",
                                            staticStyle: {
                                              position: "absolute",
                                              right: "0px"
                                            },
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                return _vm.role_userSearchBtn(
                                                  $event
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "ti-search"
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          display: "flex",
                                          "flex-direction": "row",
                                          width: "135px",
                                          position: "absolute"
                                        }
                                      },
                                      [
                                        _c(
                                          "select",
                                          {
                                            staticClass:
                                              "form-control w-100 select-noneborder-rightcolor",
                                            attrs: {
                                              id: "sum_user_role_sel",
                                              name: "sum_user_role_sel"
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "0",
                                                  selected: ""
                                                }
                                              },
                                              [_vm._v(_vm._s(_vm.cpgtxt_all))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "1" } },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.cpgtxt_department)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "2" } },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.cpgtxt_position)
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._m(7)
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
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
                                  staticClass: "table-responsive",
                                  staticStyle: {
                                    "border-top": "1px solid #e0dede",
                                    "border-bottom": "1px solid #e0dede",
                                    height: "150px",
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
                                          _c("th", {
                                            staticClass: "role_user_th",
                                            staticStyle: {
                                              width: "40px!important"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "role_user_th" },
                                            [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "role_user_th" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.cpgtxt_department)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "role_user_th" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.cpgtxt_position)
                                              )
                                            ]
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tbody", {
                                        attrs: {
                                          id: "ssu_management_roles_user"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "d-flex flex-wrap",
                            staticStyle: {
                              width: "100%",
                              height: "60px",
                              "overflow-y": "auto",
                              margin: "10px 15px 0px 20px"
                            },
                            attrs: { id: "select_users_name_group" }
                          })
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
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.addUserListModalBtn()
                                }
                              }
                            },
                            [
                              _c("span", [
                                _vm._v("+ " + _vm._s(_vm.cbtntxt_add))
                              ])
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
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
          id: "system-suser-management-roles-fav",
          "data-status": "off",
          "data-page-info": "Roles_system-suser-management-roles"
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
      "span",
      { staticClass: "btn", staticStyle: { padding: "5px", right: "30px" } },
      [_c("i", { staticClass: "ti-search" })]
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
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title", attrs: { id: "Modal_Title" } }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "row", staticStyle: { "padding-bottom": "20px" } },
      [
        _c(
          "div",
          { staticClass: "col-md-12", staticStyle: { "margin-top": "20px" } },
          [
            _c("div", { staticClass: "d-flex flex-wrap" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("label", {
                  staticStyle: { "margin-top": "8px", color: "#666" },
                  attrs: { id: "Modal_Add_Name" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", id: "item_name", name: "item_name" }
                })
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-12", staticStyle: { "margin-top": "20px" } },
          [
            _c("div", { staticClass: "d-flex flex-wrap" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("label", {
                  staticStyle: { "margin-top": "8px", color: "#666" },
                  attrs: { id: "Modal_Select_Title" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8" }, [
                _c("select", {
                  staticClass: "form-control w-100",
                  attrs: { id: "sum_sel_items", name: "sum_sel_items" }
                })
              ])
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", id: "group_item_name", name: "group_item_name" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "group_item_usres",
          name: "group_item_usres",
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
        staticStyle: {
          display: "flex",
          "flex-direction": "row",
          width: "135px",
          position: "absolute",
          "margin-left": "125px"
        }
      },
      [
        _c("select", {
          staticClass: "form-control w-100 select-noneborder-rightcolor",
          attrs: {
            id: "sum_user_role_content_sel",
            name: "sum_user_role_content_sel"
          }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserManagementRoles.vue":
/*!**********************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserManagementRoles.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemSuserManagementRoles_vue_vue_type_template_id_e4759860___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemSuserManagementRoles.vue?vue&type=template&id=e4759860& */ "./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=template&id=e4759860&");
/* harmony import */ var _SystemSuserManagementRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemSuserManagementRoles.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SystemSuserManagementRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SystemSuserManagementRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemSuserManagementRoles_vue_vue_type_template_id_e4759860___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SystemSuserManagementRoles_vue_vue_type_template_id_e4759860___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemSuserManagementRoles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSuserManagementRoles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=template&id=e4759860&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=template&id=e4759860& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_template_id_e4759860___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSuserManagementRoles.vue?vue&type=template&id=e4759860& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementRoles.vue?vue&type=template&id=e4759860&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_template_id_e4759860___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementRoles_vue_vue_type_template_id_e4759860___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);