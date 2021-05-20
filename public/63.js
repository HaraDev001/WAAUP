(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.jsonparse(window.Laravel.userinfo).id;
var numg = 5;
var edit_id = 0;
var checked_del_items = new Array();
var permss;
var head_list = new Array();
var foot_list = new Array();
var layout_list = new Array();
var is_head = 0;
var is_foot = 0;
var transedlang = 'en-1';

function pageNavigation(totalpage) {
  var nav_tag = '';
  nav_tag += '<nav aria-label="..." class="mb-4">';
  nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
  var disble = "";
  if (_assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex() == 1) disble = "disabled";
  var prenum = parseInt(_assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex()) - 1;
  nav_tag += '<li class="page-item  ' + disble + ' ">';
  nav_tag += '<a class="page-link" href="#"  id="ssmunavnum_' + prenum + '" >';
  nav_tag += '<i class="ti-angle-left"></i>';
  nav_tag += '</a>';
  nav_tag += '</li>';
  var pnum = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex() <= numg ? 1 : parseInt(_assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex()) - 1;

  for (var idx = 0; idx < numg; idx++) {
    var actv = "";
    var aria_current = '';
    var spantag = '';
    var oid = '';

    if (pnum == _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex()) {
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

  var nextnum = parseInt(_assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex()) + 1;
  var edisble = "";
  if (_assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex() == totalpage) edisble = "disabled";
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
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.setPageIndex(oid.split('_')[1]);
    getPagesContentList();
  });
}

function getLanuage(stored_langs) {
  var tags = '';
  tags += '<option value="" style="font-weight: bold">---</option>';

  for (var j = 0; j < stored_langs.length; j++) {
    var obj = stored_langs[j];
    var iso = obj.iso;
    var dialCode = obj.dialcode;
    var cname = obj.name;
    var status = obj.status;
    var dcont = iso + '-' + dialCode;

    if (status == 'enable') {
      tags += '<option value="' + dcont + '" >' + cname + '</option>';
    }
  }

  $('#wwgp_management_language').html(tags); //list of lists
}

function showPagesContentList(lists) {
  $('#wwgpp_list_container').html('');
  var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
  var btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
  var btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  var pgctl_active = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_active');
  var pgctl_block = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_block');
  var tags = '';

  for (var i = 0; i < lists.length; i++) {
    var id = lists[i].id;
    var pagename = lists[i].page_name;
    var title = lists[i].title;
    if (title == null) title = '';
    var page_type = lists[i].page_type;
    var language = lists[i].language;
    var author = lists[i].author;
    if (author == null) author = '';
    var time = lists[i].created_at;
    var url = lists[i].url;
    var status = lists[i].status;
    var trans = lists[i].trans;
    tags += '<tr class="wwpp_content_list-' + id + '" data-id="' + id + '">';
    tags += '   <td>';
    tags += '   <div class="form-check form-check-inline">';
    tags += '       <input class="form-check-input" type="checkbox" id="wwppCheckbox_' + id + '" value="">';
    tags += '   </div>';
    tags += '   </td>';
    tags += '   <td>' + pagename + '</td>';
    tags += '   <td>' + page_type + '</td>';
    tags += '   <td>' + language + '</td>';
    tags += '   <td>' + title + '</td>';
    tags += '   <td>' + author + '</td>';
    tags += '   <td>' + time + '</td>';
    tags += '   <td>' + url + '</td>';
    if (status == 1) tags += '   <td class="data-ajax" data-ajax="pgctl_active">' + pgctl_active + '</td>';else tags += '   <td class="data-ajax" data-ajax="pgctl_block">' + pgctl_block + '</td>';
    tags += '   <td>';
    tags += '       <div class="form-group m-b-0">';
    tags += '           <select class="my-border-radius-slt form-control float-right" id="wwpp_content_list_edit-' + id + '" name="wwpp_content_list_edit-' + id + '" data-name="' + pagename + '" data-lang="' + trans + '">';
    tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
    tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
    tags += '               <option value="active" class="data-ajax" data-ajax="pgctl_active">' + pgctl_active + '</option>';
    tags += '               <option value="block" class="data-ajax" data-ajax="pgctl_block">' + pgctl_block + '</option>';
    tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
    tags += '           </select>';
    tags += '       </div>';
    tags += '   </td>';
    tags += '</tr>';
  }

  $('#wwgpp_list_container').html(tags);
  $('input[id^="wwppCheckbox_"]').change(function () {
    var id = $(this).attr("id");
    var del_id = id.split('_')[1];

    if ($(this).is(':checked')) {
      checked_del_items.push(del_id);
    } else {
      var idx = checked_del_items.indexOf(del_id);
      if (idx > -1) checked_del_items.splice(idx, 1);
    }
  });
  $('select[id^="wwpp_content_list_edit-"]').change(function () {
    var id = $(this).attr("id");
    var pagename = $(this).attr("data-name");
    var lang = $(this).attr("data-lang");
    edit_id = id.split('-')[1];
    var sel_val = $(this).val();

    if (sel_val == "change") {
      if (permss.pwrite == 1) {
        vueOBJ.setEdit(edit_id);
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.setEditLang(lang);
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.setEditPageName(pagename);
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    } else if (sel_val == "active") {
      if (permss.pwrite == 1) {
        changePagesStatus(edit_id, 1);
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    } else if (sel_val == "block") {
      if (permss.pwrite == 1) {
        changePagesStatus(edit_id, 0);
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    } else if (sel_val == "delete") {
      if (permss.pcreate == 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.confirmAlert(deletePagesContentList, edit_id, 'pgtxt_wantdeleteitem');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    }
  });
}

function getPagesContentList() {
  transedlang = $('#wwgp_management_language').val();
  var search = $('#wwgpp_list_s_c').val();
  $.ajax({
    url: 'admin.wwppGetContent',
    data: {
      trans: transedlang,
      userid: userid,
      search: search,
      pstart: _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex(),
      pcnt: _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getRowCount()
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        if (lists != null && lists != '') showPagesContentList(lists);else $('#wwgpp_list_container').html('');
        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

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

function changePagesStatus(edit_id, status) {
  transedlang = $('#wwgp_management_language').val();
  var search = $('#wwgpp_list_s_c').val();
  $.ajax({
    url: 'admin.wwppChangeStatus',
    data: {
      trans: transedlang,
      editid: edit_id,
      search: search,
      status: status,
      pstart: _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex(),
      pcnt: _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getRowCount()
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        if (lists != null && lists != '') showPagesContentList(lists);else $('#wwgpp_list_container').html('');
        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

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

function deletePagesContentList(edit_id) {
  transedlang = $('#wwgp_management_language').val();
  var search = $('#wwgpp_list_s_c').val();
  $.ajax({
    url: 'admin.wwppDeleteContent',
    data: {
      trans: transedlang,
      editid: edit_id,
      userid: userid,
      search: search,
      pstart: _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex(),
      pcnt: _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getRowCount()
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        var lists = data.lists;
        if (lists != null && lists != '') showPagesContentList(lists);else $('#wwgpp_list_container').html('');
        var total = data.total;

        if (total <= 0) {
          $('#ssmu_page_nav').html('');
          return;
        }

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

function allDeletePagesContentList() {
  transedlang = $('#wwgp_management_language').val();
  var search = $('#wwgpp_list_s_c').val();
  $('#wwpp_selected_all_delete').click(function () {
    $.ajax({
      url: 'admin.wwppAllDeleteContent',
      data: {
        trans: transedlang,
        ids: checked_del_items,
        userid: userid,
        search: search,
        pstart: _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex(),
        pcnt: _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getRowCount()
      },
      type: 'POST',
      success: function success(data) {
        if (data.msg === "ok") {
          var lists = data.lists;
          if (lists != null && lists != '') showPagesContentList(lists);else $('#wwgpp_list_container').html('');
          var total = data.total;

          if (total <= 0) {
            $('#ssmu_page_nav').html('');
            return;
          }

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
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalPagesManagementList",
  components: {},
  data: function data() {
    return {
      pgtxt_list: '',
      pgtxt_pagetype: '',
      pgtxt_page: '',
      pgtxt_title: '',
      pgtxt_url: '',
      pgtxt_filters: '',
      pgtxt_name: '',
      btntxt_edit: '',
      btntxt_delete: '',
      btntxt_change: '',
      btntxt_cancel: '',
      pgtxt_create: '',
      pgtxt_setupthe: '',
      pgtxt_basic: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      pgtxt_language: '',
      pgtxt_author: '',
      pgtxt_time: '',
      pgtxt_status: '',
      pgtxt_search: ''
    };
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
    this.getWWGStoredLang();
  },
  computed: {
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_pagetype: function cpgtxt_pagetype() {
      return this.pgtxt_pagetype;
    },
    cpgtxt_page: function cpgtxt_page() {
      return this.pgtxt_page;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_url: function cpgtxt_url() {
      return this.pgtxt_url;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_filters: function cpgtxt_filters() {
      return this.pgtxt_filters;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    cpgtxt_create: function cpgtxt_create() {
      return this.pgtxt_create;
    },
    cpgtxt_setupthe: function cpgtxt_setupthe() {
      return this.pgtxt_setupthe;
    },
    cpgtxt_basic: function cpgtxt_basic() {
      return this.pgtxt_basic;
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
    cpgtxt_language: function cpgtxt_language() {
      return this.pgtxt_language;
    },
    cpgtxt_author: function cpgtxt_author() {
      return this.pgtxt_author;
    },
    cpgtxt_time: function cpgtxt_time() {
      return this.pgtxt_time;
    },
    cpgtxt_status: function cpgtxt_status() {
      return this.pgtxt_status;
    },
    cpgtxt_search: function cpgtxt_search() {
      return this.pgtxt_search;
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
  methods: {
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list != null && list != '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
    },
    initpage: function initpage() {
      $('#userid').val(userid);
      getPagesContentList();
      allDeletePagesContentList();
      $('input#wwgpp_list_s_c').on('keyup', function () {
        $('#wwpp_search').val($('#wwgpp_list_s_c').val());
        getPagesContentList();
      });
    },
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('admin.getWWGStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          var stored_langs = response.data.langlist;

          if (stored_langs != '') {
            stored_langs = $.parseJSON(stored_langs);
            getLanuage(stored_langs);
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
      this.initpage();
    },
    setWWPPtypeBtn: function setWWPPtypeBtn() {},
    showWWPPModalBtn: function showWWPPModalBtn() {
      if (permss.pcreate == 1) {
        $('#ModalAddWWPPContent').modal('show');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_notpermission');
    },
    CreateWWPPContentBtn: function CreateWWPPContentBtn() {
      vueOBJ.setEdit(0);
    },
    wwgp_management_search: function wwgp_management_search() {
      getPagesContentList();
    },
    setEdit: function setEdit(id) {
      $('#ModalAddWWPPContent').modal('hide');
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.setEditID(id);
      this.$emit("fromchild", 1);
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page1_content_content_title{\n    border: 0;\n}\n.form-control.page2_input:focus,.form-control.page2_input:hover{\n    background-color:#d6d6d6;\n}\n.table thead th{\n    text-transform:none;\n    font-size: 14px;\n}\n.table thead th.th-lp-20, .table tbody td.th-lp-20{\n    padding-left: 20px;\n}\n.table thead th.th-rp-20, .table tbody td.th-rp-20{\n    padding-right: 20px;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    height: 350px;\n    min-height: 350px !important;\n}\n.input-group-append-my{\n    border-top-right-radius:1.25rem;\n    border-bottom-right-radius:1.25rem;\n    position: absolute;\n    top: 3px;\n    right: 16px;\n}\n.input-group-text-my{\n    background-color: #d6d6d6;\n    border-top-right-radius:1.25rem;\n    border-bottom-right-radius:1.25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=template&id=64f49e11&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=template&id=64f49e11& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { width: "100%" } }, [
    _c("div", { staticStyle: { display: "none" } }, [
      _vm._v(_vm._s(_vm.contentchange))
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
                attrs: { "data-target": "page_management_list" }
              },
              [_vm._v(_vm._s(_vm.cpgtxt_list))]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "wwgp_pagelist" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c("div", { staticClass: "page1_content_content_title" }, [
              _vm._v(_vm._s(_vm.cpgtxt_filters))
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "page1_content_content page2_content_text",
                staticStyle: { padding: "1.5rem" }
              },
              [
                _c("div", { staticClass: "d-flex flex-wrap" }, [
                  _c("div", { staticClass: "d-flex col-sm-4" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_language))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-8" }, [
                      _c(
                        "select",
                        {
                          staticClass: "form-control page2_input",
                          attrs: {
                            id: "wwgp_management_language",
                            name: "wwgp_management_language"
                          },
                          on: { change: _vm.wwgp_management_search }
                        },
                        [
                          _c(
                            "option",
                            {
                              staticStyle: { "font-weight": "bold" },
                              attrs: { value: "", selected: "selected" }
                            },
                            [_vm._v("---")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex col-sm-6" }, [
                    _c("div", { staticClass: "col-md-2" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_search))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-8" }, [
                      _c("input", {
                        staticClass: "form-control page2_input",
                        attrs: {
                          type: "text",
                          id: "wwgpp_list_s_c",
                          name: "wwgpp_list_s_c"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "input-group-append input-group-append-my cursor-pointer",
                          on: { click: _vm.wwgp_management_search }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "input-group-text input-group-text-my",
                              attrs: { id: "basic-addon1" }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "feather feather-search ",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24px",
                                    height: "24px",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                  }
                                },
                                [
                                  _c("circle", {
                                    attrs: { cx: "11", cy: "11", r: "8" }
                                  }),
                                  _vm._v(" "),
                                  _c("line", {
                                    attrs: {
                                      x1: "21",
                                      y1: "21",
                                      x2: "16.65",
                                      y2: "16.65"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "div",
              {
                staticStyle: {
                  "padding-top": "20px",
                  border: "0px",
                  display: "flex"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "page1_content_content_title",
                    staticStyle: { width: "50%" }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_list))]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6 text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn page1_custom_select_btn mb-sm-2",
                      staticStyle: {
                        height: "40px",
                        "border-radius": "20px",
                        padding: "0 25px",
                        "margin-right": "15px"
                      },
                      attrs: { type: "button", id: "pageCreate_btn" },
                      on: {
                        click: function($event) {
                          return _vm.showWWPPModalBtn()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            + " +
                          _vm._s(_vm.cpgtxt_create) +
                          " " +
                          _vm._s(_vm.cpgtxt_page) +
                          "\n                        "
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
                staticClass: "table-responsive",
                attrs: { id: "list_container" }
              },
              [
                _c(
                  "table",
                  {
                    staticClass: "table table-lg  no-footer",
                    staticStyle: { margin: "10px 0" },
                    attrs: {
                      id: "user-list",
                      role: "grid",
                      "aria-describedby": "user-list_info"
                    }
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
                            staticStyle: {
                              width: "40px!important",
                              border: "0"
                            }
                          }),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(
                              _vm._s(_vm.cpgtxt_page) +
                                " " +
                                _vm._s(_vm.cpgtxt_name)
                            )
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_pagetype))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_language))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_title))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.pgtxt_author))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.pgtxt_time))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_url))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { border: "0" } }, [
                            _vm._v(_vm._s(_vm.cpgtxt_status))
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
                                  attrs: { id: "wwpp_selected_all_delete" }
                                },
                                [_vm._v(_vm._s(_vm.cbtntxt_delete))]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { id: "wwgpp_list_container" } })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-3", staticStyle: { display: "flex" } },
              [
                _c(
                  "div",
                  {
                    staticStyle: {
                      width: "auto",
                      "padding-left": "15px",
                      "padding-right": "15px",
                      "line-height": "35px"
                    }
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.cpgtxt_setupthe))])]
                ),
                _vm._v(" "),
                _vm._m(0)
              ]
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "col-md-7",
              attrs: { id: "ssmu_page_nav" }
            })
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "ModalAddWWPPContent" } },
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
                      _vm._s(_vm.cpgtxt_create) + " " + _vm._s(_vm.cpgtxt_page)
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
                  staticClass: "col-md-12",
                  staticStyle: { "text-align": "left", "margin-left": "10px" }
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
                          return _vm.setWWPPtypeBtn()
                        }
                      }
                    },
                    [
                      _c("span", [
                        _vm._v("+ " + _vm._s(_vm.cpgtxt_basic) + " ")
                      ])
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
                  attrs: { id: "AddWWPPContentModalBody" }
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
                                  return _vm.CreateWWPPContentBtn()
                                }
                              }
                            },
                            [
                              _c("span", [
                                _vm._v("+ " + _vm._s(_vm.cpgtxt_create) + " ")
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
      "div",
      { staticClass: "input-group", staticStyle: { width: "50%" } },
      [
        _c(
          "select",
          {
            staticClass: "form-control page2_input",
            attrs: { id: "wwgpp_list_nav_cnt", name: "wwgpp_list_nav_cnt" }
          },
          [
            _c("option", { attrs: { value: "5", selected: "selected" } }, [
              _vm._v("5")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "15" } }, [_vm._v("15")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "20" } }, [_vm._v("20")])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue":
/*!**************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalPagesManagementList_vue_vue_type_template_id_64f49e11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalPagesManagementList.vue?vue&type=template&id=64f49e11& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=template&id=64f49e11&");
/* harmony import */ var _WebsWesGlobalPagesManagementList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalPagesManagementList.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalPagesManagementList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalPagesManagementList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalPagesManagementList_vue_vue_type_template_id_64f49e11___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalPagesManagementList_vue_vue_type_template_id_64f49e11___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesManagementList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=template&id=64f49e11&":
/*!*********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=template&id=64f49e11& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_template_id_64f49e11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesManagementList.vue?vue&type=template&id=64f49e11& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue?vue&type=template&id=64f49e11&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_template_id_64f49e11___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementList_vue_vue_type_template_id_64f49e11___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);