(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var checked_del_items = new Array();
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var is_edit = false;
var edit_id = 0;
var topHeaderLists = new Array();
var headHeaderLists = new Array();
var subHeaderLists = new Array();
var radio_top = 0;
var radio_head = 0;
var radio_sub = 0;
var header_names = new Array();
var header_ids = new Array();
var permss;

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
    getWWAHeadContentList();
  });
}

function wawHeadContentList(lists, tops, heads, subs, total_lists) {
  $('#wwa_head_content_lists').html('');
  var tags = '';
  header_ids = new Array();
  header_names = new Array();

  for (var i = 0; i < total_lists.length; i++) {
    var id = total_lists[i].id;
    var name = total_lists[i].name;
    header_ids.push(id);
    header_names.push(name);
  }

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].id;
    var name = lists[i].name;
    var is_top = lists[i].topheader_status;
    var is_head = lists[i].header_status;
    var is_sub = lists[i].subheader_status;
    var top = tops[i];
    if (is_top == 0) top = "--";
    var head = heads[i];
    if (is_head == 0) head = "--";
    var sub = subs[i];
    if (is_sub == 0) sub = "--";
    tags += '<tr class="wawh_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="wawhCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + name + '</td>';
    tags += '   <td>' + top + '</td>';
    tags += '   <td>' + head + '</td>';
    tags += '   <td>' + sub + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="wawh_content_list_edit-' + id + '" name="wawh_content_list_edit-' + id + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#wwa_head_content_lists').html(tags);
  $('input[id^="wawhCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="wawh_content_list_edit-"]').change(function () {
    var id = $(this).attr("id");
    edit_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (sel_val == "change") {
      if (permss.pwrite == 1) {
        is_edit = true;
        selectWWAHeadContentList();
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    } else if (sel_val == "delete") {
      if (permss.pdelete == 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.confirmAlert(deleteWWAHeadContentList, edit_id, 'pgtxt_wantdeleteitem');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    }
  });
}

function getWWAHeadContentList() {
  $.ajax({
    url: 'admin.getWWAHeadContentList',
    data: {
      userid: userid,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var tops = data.tops;
        var heads = data.heads;
        var subs = data.subs;
        var total_lists = data.total_lists;

        if (lists !== null && lists != "") {
          wawHeadContentList(lists, tops, heads, subs, total_lists);
        } else $('#wwa_head_content_lists').html('');

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

function showAppHeaderLists() {
  $.ajax({
    url: 'admin.getAWAHContentLists',
    data: {
      userid: userid
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        topHeaderLists = data.toplists;
        headHeaderLists = data.headlists;
        subHeaderLists = data.sublists;
        setModalHeadercontentOptions();
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function wawHeadModalEventFunc() {
  $('#Modal_Topheader_show').click(function () {
    $('#Modal_Topheader_show').prop("checked", true);
    $('#Modal_Topheader_hide').prop("checked", false);
    $('#Modal_Topheader_Content_List').attr('disabled', false);
    $('#Modal_Topheader_Content_List').addClass('border-input-text');
    radio_top = 1;
  });
  $('#Modal_Topheader_hide').click(function () {
    $('#Modal_Topheader_show').prop("checked", false);
    $('#Modal_Topheader_hide').prop("checked", true);
    $('#Modal_Topheader_Content_List').attr('disabled', true);
    $('#Modal_Topheader_Content_List').removeClass('border-input-text');
    radio_top = 0;
  });
  $('#Modal_header_show').click(function () {
    $('#Modal_header_show').prop("checked", true);
    $('#Modal_header_hide').prop("checked", false);
    $('#Modal_header_Content_List').attr('disabled', false);
    $('#Modal_header_Content_List').addClass('border-input-text');
    radio_head = 1;
  });
  $('#Modal_header_hide').click(function () {
    $('#Modal_header_show').prop("checked", false);
    $('#Modal_header_hide').prop("checked", true);
    $('#Modal_header_Content_List').attr('disabled', true);
    $('#Modal_header_Content_List').removeClass('border-input-text');
    radio_head = 0;
  });
  $('#Modal_Subheader_show').click(function () {
    $('#Modal_Subheader_show').prop("checked", true);
    $('#Modal_Subheader_hide').prop("checked", false);
    $('#Modal_Subheader_Content_List').attr('disabled', false);
    $('#Modal_Subheader_Content_List').addClass('border-input-text');
    radio_sub = 1;
  });
  $('#Modal_Subheader_hide').click(function () {
    $('#Modal_Subheader_show').prop("checked", false);
    $('#Modal_Subheader_hide').prop("checked", true);
    $('#Modal_Subheader_Content_List').attr('disabled', true);
    $('#Modal_Subheader_Content_List').removeClass('border-input-text');
    radio_sub = 0;
  });
}

function editModalRadioEvent(top, head, sub) {
  $('#Modal_Topheader_Content_List').removeClass('border-input-text');
  $('#Modal_header_Content_List').removeClass('border-input-text');
  $('#Modal_Subheader_Content_List').removeClass('border-input-text');

  if (top == 1) {
    $('#Modal_Topheader_show').prop("checked", true);
    $('#Modal_Topheader_hide').prop("checked", false);
    $('#Modal_Topheader_Content_List').attr('disabled', false);
    $('#Modal_Topheader_Content_List').addClass('border-input-text');
  }

  if (top == 0) {
    $('#Modal_Topheader_show').prop("checked", false);
    $('#Modal_Topheader_hide').prop("checked", true);
    $('#Modal_Topheader_Content_List').attr('disabled', true);
  }

  if (head == 1) {
    $('#Modal_header_show').prop("checked", true);
    $('#Modal_header_hide').prop("checked", false);
    $('#Modal_header_Content_List').attr('disabled', false);
    $('#Modal_header_Content_List').addClass('border-input-text');
  }

  if (head == 0) {
    $('#Modal_header_show').prop("checked", false);
    $('#Modal_header_hide').prop("checked", true);
    $('#Modal_header_Content_List').attr('disabled', true);
  }

  if (sub == 1) {
    $('#Modal_Subheader_show').prop("checked", true);
    $('#Modal_Subheader_hide').prop("checked", false);
    $('#Modal_Subheader_Content_List').attr('disabled', false);
    $('#Modal_Subheader_Content_List').addClass('border-input-text');
  }

  if (sub == 0) {
    $('#Modal_Subheader_show').prop("checked", false);
    $('#Modal_Subheader_hide').prop("checked", true);
    $('#Modal_Subheader_Content_List').attr('disabled', true);
  }
}

function selectWWAHeadContentList() {
  $.ajax({
    url: 'admin.selectWWAHeadContentList',
    data: {
      userid: userid,
      sel_id: edit_id
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;

        if (lists !== null && lists != "") {
          $('#Modal_Head_Name').val(lists.name);
          $('#Modal_Topheader_Content_List').val(lists.topheader_id);
          $('#Modal_header_Content_List').val(lists.header_id);
          $('#Modal_Subheader_Content_List').val(lists.suheader_id);
          radio_top = lists.topheader_status;
          radio_head = lists.header_status;
          radio_sub = lists.subheader_status;
          editModalRadioEvent(radio_top, radio_head, radio_sub);
        }

        $('#ModalWAWHeadContent').modal('show');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function setModalHeadercontentOptions() {
  var tags = '';

  for (var i = 0; i < topHeaderLists.length; i++) {
    var id = topHeaderLists[i].id;
    var name = topHeaderLists[i].name;
    var selected = '';
    if (i == 0) selected = 'selected';
    tags += '<option ' + selected + ' value="' + id + '">' + name + '</option>';
  }

  $('#Modal_Topheader_Content_List').html(tags);
  tags = '';

  for (var i = 0; i < headHeaderLists.length; i++) {
    var id = headHeaderLists[i].id;
    var name = headHeaderLists[i].name;
    var selected = '';
    if (i == 0) selected = 'selected';
    tags += '<option ' + selected + ' value="' + id + '">' + name + '</option>';
  }

  $('#Modal_header_Content_List').html(tags);
  tags = '';

  for (var i = 0; i < subHeaderLists.length; i++) {
    var id = subHeaderLists[i].id;
    var name = subHeaderLists[i].name;
    var selected = '';
    if (i == 0) selected = 'selected';
    tags += '<option ' + selected + ' value="' + id + '">' + name + '</option>';
  }

  $('#Modal_Subheader_Content_List').html(tags);
}

function addWAWHeadContentList() {
  var name = $('#Modal_Head_Name').val();
  var sel_top = $('#Modal_Topheader_Content_List').val();
  var sel_head = $('#Modal_header_Content_List').val();
  var sel_sub = $('#Modal_Subheader_Content_List').val();
  var is_exist = false;

  for (var i = 0; i < header_names.length; i++) {
    if (name == header_names[i]) {
      is_exist = true;
      break;
    }
  }

  if (is_exist) {
    alert("The title already exist.");
    return;
  }

  $.ajax({
    url: 'admin.addWWAHeadContentList',
    data: {
      userid: userid,
      name: name,
      pstart: pstart,
      pcnt: pcnt,
      sel_top: sel_top,
      sel_head: sel_head,
      sel_sub: sel_sub,
      radio_top: radio_top,
      radio_head: radio_head,
      radio_sub: radio_sub
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var tops = data.tops;
        var heads = data.heads;
        var subs = data.subs;
        var total_lists = data.total_lists;

        if (lists !== null && lists != "") {
          wawHeadContentList(lists, tops, heads, subs, total_lists);
        } else $('#wwa_head_content_lists').html('');

        var total = data.total;

        if (total <= 0) {
          $('.ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        $('#ModalWAWHeadContent').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function editWAWHeadContentList() {
  var name = $('#Modal_Head_Name').val();
  var sel_top = $('#Modal_Topheader_Content_List').val();
  var sel_head = $('#Modal_header_Content_List').val();
  var sel_sub = $('#Modal_Subheader_Content_List').val();
  var is_exist = false;

  for (var i = 0; i < header_names.length; i++) {
    if (name == header_names[i] && header_ids[i] != edit_id) {
      is_exist = true;
      break;
    }
  }

  if (is_exist) {
    alert("The title already exist.");
    return;
  }

  $.ajax({
    url: 'admin.editWWAHeadContentList',
    data: {
      edit_id: edit_id,
      userid: userid,
      name: name,
      pstart: pstart,
      pcnt: pcnt,
      sel_top: sel_top,
      sel_head: sel_head,
      sel_sub: sel_sub,
      radio_top: radio_top,
      radio_head: radio_head,
      radio_sub: radio_sub
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var tops = data.tops;
        var heads = data.heads;
        var subs = data.subs;
        var total_lists = data.total_lists;

        if (lists !== null && lists != "") {
          wawHeadContentList(lists, tops, heads, subs, total_lists);
        } else $('#wwa_head_content_lists').html('');

        var total = data.total;

        if (total <= 0) {
          $('.ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        $('#ModalWAWHeadContent').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function deleteWWAHeadContentList(edit_id) {
  $.ajax({
    url: 'admin.deleteWWAHeadContentList',
    data: {
      edit_id: edit_id,
      userid: userid,
      pstart: pstart,
      pcnt: pcnt
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        var tops = data.tops;
        var heads = data.heads;
        var subs = data.subs;
        var total_lists = data.total_lists;

        if (lists !== null && lists != "") {
          wawHeadContentList(lists, tops, heads, subs, total_lists);
        } else $('#wwa_head_content_lists').html('');

        var total = data.total;

        if (total <= 0) {
          $('.ssmu_page_nav').html('');
          return;
        }

        pstart = data.pstart;
        var totalpage = data.totalpage;
        pageNavigation(totalpage);
        $('#ModalWAWHeadContent').modal('hide');
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function groupDeleteWWAHeadContentList() {
  $('#wwa_head_all_delete').click(function () {
    if (permss.pdelete == 1) {
      $.ajax({
        url: 'admin.groupDeleteWWAHeadContentList',
        data: {
          ids: checked_del_items,
          userid: userid,
          pstart: pstart,
          pcnt: pcnt
        },
        type: 'POST',
        success: function success(data) {
          if (data.msg === "ok") {
            var lists = data.lists;
            var tops = data.tops;
            var heads = data.heads;
            var subs = data.subs;
            var total_lists = data.total_lists;

            if (lists !== null && lists != "") {
              wawHeadContentList(lists, tops, heads, subs, total_lists);
            } else $('#wwa_head_content_lists').html('');

            var total = data.total;

            if (total <= 0) {
              $('.ssmu_page_nav').html('');
              return;
            }

            pstart = data.pstart;
            var totalpage = data.totalpage;
            pageNavigation(totalpage);
            $('#ModalWAWHeadContent').modal('hide');
          } else {
            console.log(data.msg);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalAppearanceHead",
  data: function data() {
    return {
      pageid: 'webs-wesglobal-appearance-head-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_appearance: '',
      musususu_webs_wesglobal_appearance_head: '',
      pgtxt_head: '',
      btntxt_add: '',
      btntxt_edit: '',
      btntxt_save: '',
      btntxt_delete: '',
      btntxt_change: '',
      btntxt_topheader: '',
      btntxt_header: '',
      btntxt_subheader: '',
      pgtxt_list: '',
      pgtxt_name: '',
      pgtxt_hide: '',
      pgtxt_show: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      btntxt_ok: '',
      btntxt_cancel: ''
    };
  },
  computed: {
    cmususu_webs_wesglobal_appearance: function cmususu_webs_wesglobal_appearance() {
      return this.mususu_webs_wesglobal_appearance;
    },
    cmusususu_webs_wesglobal_appearance_head: function cmusususu_webs_wesglobal_appearance_head() {
      return this.musususu_webs_wesglobal_appearance_head;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
    },
    cpgtxt_head: function cpgtxt_head() {
      return this.pgtxt_head;
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
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_hide: function cpgtxt_hide() {
      return this.pgtxt_hide;
    },
    cpgtxt_show: function cpgtxt_show() {
      return this.pgtxt_show;
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
    /* fav part*/

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.permissionDefinition();
    btntxt_save = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_save');
    btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
    btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
    btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
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
      showAppHeaderLists();
      wawHeadModalEventFunc();
      getWWAHeadContentList();
      groupDeleteWWAHeadContentList();
      $("#ModalWAWHeadContent").on('hide.bs.modal', function () {
        $('select[id^="wawh_content_list_edit-"]').val('');
      });
    },
    showWAWHeadModalBtn: function showWAWHeadModalBtn() {
      if (permss.pcreate == 1) {
        radio_top = 0;
        radio_head = 0;
        radio_sub = 0;
        $('#Modal_Head_Name').val('');
        setModalHeadercontentOptions();
        $('#ModalWAWHeadContent').modal('show');
        editModalRadioEvent(0, 0, 0);
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    },
    addWAWHeadContentBtn: function addWAWHeadContentBtn() {
      if (is_edit) editWAWHeadContentList();else addWAWHeadContentList();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.modal_top_bar{\n    margin-right: 10px;\n}\n#awa_module_lists td{\n    border: none;\n}\n#awa_headmodule_lists td{\n    border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=template&id=1e4bd2e8&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=template&id=1e4bd2e8& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
          _vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_appearance_head))
        ]),
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
              _vm._s(_vm.cmususu_webs_wesglobal_appearance) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_appearance_head) +
              "\n                      "
          ),
          _vm._m(0)
        ])
      ])
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
                    _vm._v(_vm._s(_vm.cbtntxt_topheader))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { border: "0" } }, [
                    _vm._v(_vm._s(_vm.cbtntxt_header))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { border: "0" } }, [
                    _vm._v(_vm._s(_vm.cbtntxt_subheader))
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
                          attrs: { id: "wwa_head_all_delete" }
                        },
                        [_vm._v(_vm._s(_vm.cbtntxt_delete))]
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("tbody", { attrs: { id: "wwa_head_content_lists" } })
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2 text-right" }, [
        _c(
          "div",
          {
            staticClass: "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.showWAWHeadModalBtn()
              }
            }
          },
          [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "ModalWAWHeadContent" } },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered modal-sm",
            staticStyle: { "min-width": "550px!important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h4",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "Modal_WAWHead_Title" }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_add) + " " + _vm._s(_vm.cpgtxt_head)
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
                  attrs: { id: "WAWHeadModalBody" }
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
                          _vm._m(2)
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
                              [_vm._v(_vm._s(_vm.cbtntxt_topheader))]
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
                                      name: "Modal_wawhTopheader_radio",
                                      id: "Modal_Topheader_show",
                                      value: "show"
                                    }
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_show) +
                                      "\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    staticClass: "form-check-input",
                                    attrs: {
                                      type: "radio",
                                      name: "Modal_wawhTopheader_radio",
                                      id: "Modal_Topheader_hide",
                                      value: "hide",
                                      checked: ""
                                    }
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_hide) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ]
                          ),
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
                              [_vm._v(_vm._s(_vm.cbtntxt_header))]
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
                                      name: "Modal_wawhheader_radio",
                                      id: "Modal_header_show",
                                      value: "show"
                                    }
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_show) +
                                      "\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    staticClass: "form-check-input",
                                    attrs: {
                                      type: "radio",
                                      name: "Modal_wawhheader_radio",
                                      id: "Modal_header_hide",
                                      value: "hide",
                                      checked: ""
                                    }
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_hide) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(4)
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
                              [_vm._v(_vm._s(_vm.cbtntxt_subheader))]
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
                                      name: "Modal_wawhSubheader_radio",
                                      id: "Modal_Subheader_show",
                                      value: "show"
                                    }
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_show) +
                                      "\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-check form-check-inline" },
                                [
                                  _c("input", {
                                    staticClass: "form-check-input",
                                    attrs: {
                                      type: "radio",
                                      name: "Modal_wawhSubheader_radio",
                                      id: "Modal_Subheader_hide",
                                      value: "hide",
                                      checked: ""
                                    }
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_hide) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(5)
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
                                  return _vm.addWAWHeadContentBtn()
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
          id: "webs-wesglobal-appearance-head-fav",
          "data-status": "off",
          "data-page-info": "Head_webs-wesglobal-appearance-head"
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
        staticClass: "form-control border-input-text",
        attrs: { type: "text", id: "Modal_Head_Name", name: "Modal_Head_Name" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("select", {
        staticClass: "form-control",
        attrs: {
          id: "Modal_Topheader_Content_List",
          name: "Modal_Topheader_Content_List"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("select", {
        staticClass: "form-control",
        attrs: {
          id: "Modal_header_Content_List",
          name: "Modal_header_Content_List"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("select", {
        staticClass: "form-control",
        attrs: {
          id: "Modal_Subheader_Content_List",
          name: "Modal_Subheader_Content_List"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue":
/*!*********************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalAppearanceHead_vue_vue_type_template_id_1e4bd2e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalAppearanceHead.vue?vue&type=template&id=1e4bd2e8& */ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=template&id=1e4bd2e8&");
/* harmony import */ var _WebsWesGlobalAppearanceHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalAppearanceHead.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalAppearanceHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalAppearanceHead_vue_vue_type_template_id_1e4bd2e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalAppearanceHead_vue_vue_type_template_id_1e4bd2e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceHead.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=template&id=1e4bd2e8&":
/*!****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=template&id=1e4bd2e8& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_template_id_1e4bd2e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceHead.vue?vue&type=template&id=1e4bd2e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceHead.vue?vue&type=template&id=1e4bd2e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_template_id_1e4bd2e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceHead_vue_vue_type_template_id_1e4bd2e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);