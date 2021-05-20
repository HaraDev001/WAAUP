(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var edit_id = 0;
var checked_del_items = new Array();
var permss;
var head_list = new Array();
var foot_list = new Array();
var layout_list = new Array();
var transedlang = 'en-1';
var stored_langs;
var pageOBJS = [];
var sel_lang = 'en-1';

function selectPagesPage() {
  sel_lang = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getEditLang();
  transedlang = sel_lang;
  $.ajax({
    url: 'admin.wwppSelectContent',
    data: {
      userid: userid,
      pagename: _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getEditPageName()
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        pageOBJS = new Array();
        $('.page1_translate_span').removeClass('active');
        $('span#' + sel_lang + ' > span.page1_translate_span').addClass('active');
        var row = data.row;

        for (var i = 0; i < row.length; i++) {
          var item = row[i];
          var d = new Date();
          var yy = d.getFullYear();
          var mm = d.getMonth() + 1;
          var dd = d.getDate();

          if (item.created_at.split('-').length > 2) {
            yy = item.created_at.split('-')[0];
            mm = item.created_at.split('-')[1];
            dd = item.created_at.split('-')[2];
            dd = dd.substr(0, 2);
          } else if (item.created_at.split('/').length > 2) {
            yy = item.created_at.split('/')[0];
            mm = item.created_at.split('/')[1];
            dd = item.created_at.split('/')[2];
            dd = dd.substr(0, 2);
          }

          var time = yy + '/' + mm + '/' + dd;
          var obj = {
            langname: item.language,
            trans: item.trans,
            pagename: item.page_name,
            title: item.title,
            url: item.url,
            author: item.author,
            is_author: item.is_author,
            time: time,
            is_time: item.is_time,
            layout: item.layout,
            head: item.head,
            is_head: item.is_head,
            foot: item.foot,
            is_foot: item.is_foot,
            content: item.content,
            active: item.active,
            langstate: item.langstate
          };
          pageOBJS.push(obj);

          if (sel_lang == item.trans) {
            $('#wwpp_input_page_name').val(item.page_name);
            $('#wwpp_input_page_title').val(item.title);
            $('#wwpp_input_page_url').val(item.url);
            $('#wwpp_input_page_author').val(item.author);
            if (item.is_author == 1) $('#author_invisible').prop("checked", false);else $('#author_invisible').prop("checked", true);
            $('#pagesetting_datapicker').val(time);
            if (item.is_time == 1) $('#time_invisible').prop("checked", false);else $('#time_invisible').prop("checked", true);
            $('#wwgp_management_layout_list').val(item.layout);
            $('#wwgp_management_head_list').val(item.layout);

            if (row.is_head == 1) {
              $('#wwgp_management_head_yes').prop("checked", true);
              $('#wwgp_management_head_no').prop("checked", false);
            } else {
              $('#wwgp_management_head_yes').prop("checked", false);
              $('#wwgp_management_head_no').prop("checked", true);
            }

            $('#wwgp_management_foot_list').val(item.layout);

            if (row.is_head == 1) {
              $('#wwgp_management_foot_yes').prop("checked", true);
              $('#wwgp_management_foot_no').prop("checked", false);
            } else {
              $('#wwgp_management_foot_yes').prop("checked", false);
              $('#wwgp_management_foot_no').prop("checked", true);
            }

            var edt0 = htmldecodejs(item.content);
            vueOBJ.TinyMCMcontent0 = edt0;
          }
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

function showHeadList() {
  $('#wwgp_management_head_list').html('');
  var tags = '';
  tags += '<option value="0">--</option>';

  for (var i = 0; i < head_list.length; i++) {
    var id = head_list[i].id;
    var name = head_list[i].name;
    tags += '<option value="' + id + '">' + name + '</option>';
  }

  $('#wwgp_management_head_list').html(tags);
}

function showFootList() {
  $('#wwgp_management_foot_list').html('');
  var tags = '';
  tags += '<option value="0">--</option>';

  for (var i = 0; i < foot_list.length; i++) {
    var id = foot_list[i].id;
    var name = foot_list[i].name;
    tags += '<option value="' + id + '">' + name + '</option>';
  }

  $('#wwgp_management_foot_list').html(tags);
}

function showLayoutList() {
  $('#wwgp_management_layout_list').html('');
  var tags = '';
  tags += '<option value="0">--</option>';

  for (var i = 0; i < layout_list.length; i++) {
    var id = layout_list[i].id;
    var name = layout_list[i].name;
    tags += '<option value="' + id + '">' + name + '</option>';
  }

  $('#wwgp_management_layout_list').html(tags);
}

function getLayoutAndHeadFoot() {
  $.ajax({
    url: 'admin.wwppGetLayoutAndHeadFoot',
    data: {
      userid: userid
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg === "ok") {
        head_list = data.head;
        layout_list = data.layout;
        showHeadList();
        showFootList();
        showLayoutList();
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function createPageContent() {
  var name = createRandompageName();
  $('#wwpp_input_page_name').val(name);
  var url = '/' + name;
  $('#wwpp_input_page_url').val(url);
  var d = new Date();
  var yy = d.getFullYear();
  var mm = d.getMonth() + 1;
  var dd = d.getDate();
  var time = yy + '/' + mm + '/' + dd;
  $('#pagesetting_datapicker').val(time);
}

function pageEventFunc() {
  $('#pagesetting_datapicker').datepicker({
    dateFormat: 'yy/mm/dd'
  });
  $('#wwpp_input_page_title').on("keyup", function () {
    var val = $("#wwpp_input_page_title").val();
    setContentVal(val, 3);
  });
  $('#wwpp_input_page_url').on("keyup", function () {
    var val = $("#wwpp_input_page_url").val();

    for (var i = 0; i < pageOBJS.length; i++) {
      pageOBJS[i].url = val;
    }
  });
  $('#wwpp_input_page_author').on("keyup", function () {
    var val = $("#wwpp_input_page_author").val();
    setContentVal(val, 5);
  });
  $('input[id="author_invisible"]').click(function () {
    if ($(this).is(':checked')) setContentVal(0, 6);else setContentVal(1, 6);
  });
  $('input[id="time_invisible"]').click(function () {
    if ($(this).is(':checked')) setContentVal(0, 8);else setContentVal(1, 8);
  });
  $('#wwgp_management_layout_list').change(function () {
    var val = parseInt($(this).val());
    setContentVal(val, 9);
  });
  $('#wwgp_management_head_list').change(function () {
    var val = parseInt($(this).val());
    setContentVal(val, 10);
  });
  $('input[id="wwgp_management_head_no"]').click(function () {
    if ($(this).is(':checked')) setContentVal(0, 11);
  });
  $('input[id="wwgp_management_head_yes"]').click(function () {
    if ($(this).is(':checked')) setContentVal(1, 11);
  });
  $('#wwgp_management_foot_list').change(function () {
    var val = parseInt($(this).val());
    setContentVal(val, 12);
  });
  $('input[id="wwgp_management_foot_no"]').click(function () {
    if ($(this).is(':checked')) setContentVal(0, 13);
  });
  $('input[id="wwgp_management_foot_yes"]').click(function () {
    if ($(this).is(':checked')) setContentVal(1, 13);
  });
}

function setContentVal(val, index) {
  for (var j = 0; j < pageOBJS.length; j++) {
    if (pageOBJS[j].trans == transedlang) {
      switch (index) {
        case 2:
          pageOBJS[j].pagename = val;
          break;

        case 3:
          pageOBJS[j].title = val;
          break;

        case 4:
          pageOBJS[j].url = val;
          break;

        case 5:
          pageOBJS[j].author = val;
          break;

        case 6:
          pageOBJS[j].is_author = val;
          break;

        case 7:
          pageOBJS[j].time = val;
          break;

        case 8:
          pageOBJS[j].is_time = val;
          break;

        case 9:
          pageOBJS[j].layout = val;
          break;

        case 10:
          pageOBJS[j].head = val;
          break;

        case 11:
          pageOBJS[j].is_head = val;
          break;

        case 12:
          pageOBJS[j].foot = val;
          break;

        case 13:
          pageOBJS[j].is_foot = val;
          break;

        case 14:
          pageOBJS[j].active = val;
          break;
      }
    }
  }
}

function createRandompageName() {
  var d = new Date(); //var ymd=mjs_module.data.convertNumToStr(d.getFullYear())+mjs_module.data.convertNumToStr((d.getMonth()+1))+mjs_module.data.convertNumToStr((d.getDate()));

  var month = d.getMonth() + 1;
  if (month < 10) month = '0' + month;
  var day = d.getDate();
  if (day < 10) day = '0' + day;
  var ymd = d.getFullYear() + '' + month + '' + day;
  var hours = d.getHours();
  if (hours < 10) hours = '0' + hours;
  var min = d.getMinutes();
  if (min < 10) min = '0' + min;
  var sec = d.getSeconds();
  if (sec < 10) sec = '0' + sec;
  var hms = '-' + hours + '' + min + '' + sec;
  var rpagename = 'WaaupBasicNode-' + ymd + hms;
  return rpagename;
}

function setContentPage() {
  var pgtxt_disabled = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_disabled');
  pageOBJS = new Array();
  var tags = '';

  for (var j = 0; j < stored_langs.length; j++) {
    var obj = stored_langs[j];
    var iso = obj.iso;
    var dialCode = obj.dialcode;
    var cname = obj.name;
    var status = obj.status;
    var spanid = iso + '-' + dialCode;
    var dcont = iso + '-' + dialCode + '-' + cname;
    var name = $('#wwpp_input_page_name').val();
    var url = $('#wwpp_input_page_url').val();
    var time = $('#pagesetting_datapicker').val();
    var obj = {
      langname: cname,
      trans: spanid,
      pagename: name,
      title: '',
      url: url,
      author: '',
      is_author: 1,
      time: time,
      is_time: 1,
      layout: 0,
      head: 0,
      is_head: 0,
      foot: 0,
      is_foot: 0,
      content: '',
      active: 1,
      langstate: status
    };
    pageOBJS.push(obj);

    if (status === 'enable') {
      tags += '<span id="' + spanid + '">';
      tags += '<span class="page1_translate_span" style="cursor: pointer; display: inline-block" data-cont="' + dcont + '">' + cname + '</span>&nbsp;&nbsp;|&nbsp;&nbsp;';
      tags += '<span class="span_langitem_controller" data-cont="' + dcont + '"> × </span>';
      tags += '</span>';
    } else {
      tags += '<span id="' + spanid + '">';
      tags += '<span class="page1_translate_span" style="cursor: pointer; display: inline-block" data-cont="' + dcont + '">' + cname;
      tags += '   <span class="data-ajax" data-ajax="pgtxt_disabled">(' + pgtxt_disabled + ')</span>';
      tags += '</span>';
      tags += '&nbsp;&nbsp;|&nbsp;&nbsp;<span class="span_langitem_controller" data-cont="' + dcont + '"> × </span>';
      tags += '</span>';
    }
  }

  $('#translanglist').html(tags);
  vueOBJ.initpage();
  selectLanguage();
}

function selectLanguage() {
  $('.page1_translate_span').click(function () {
    $('.page1_translate_span').removeClass('active');
    $(this).addClass('active');
    var cont = $(this).attr('data-cont');
    var len = cont.split('-').length;

    if (len > 0) {
      var sky = cont.split('-')[0] + '-' + cont.split('-')[1];
      transedlang = sky;

      for (var i = 0; i < pageOBJS.length; i++) {
        if (pageOBJS[i].trans == sel_lang) {
          pageOBJS[i].time = $('#pagesetting_datapicker').val();
          pageOBJS[i].content = vueOBJ.TinyMCMcontent0;
          break;
        }
      }

      for (var i = 0; i < pageOBJS.length; i++) {
        if (pageOBJS[i].trans == transedlang) {
          $('#wwpp_input_page_title').val(pageOBJS[i].title);
          $('#wwpp_input_page_url').val(pageOBJS[i].url);
          $('#wwpp_input_page_author').val(pageOBJS[i].author);
          if (pageOBJS[i].is_author == 0) $('#author_invisible').attr('checked', true);else $('#author_invisible').attr('checked', false);
          $('#pagesetting_datapicker').val(pageOBJS[i].time);
          if (pageOBJS[i].is_time == 0) $('#time_invisible').attr('checked', true);else $('#time_invisible').attr('checked', false);
          $('#wwgp_management_layout_list').val(pageOBJS[i].layout);
          $('#wwgp_management_head_list').val(pageOBJS[i].head);

          if (pageOBJS[i].is_head == 0) {
            $('#wwgp_management_head_no').prop('checked', true);
            $('#wwgp_management_head_yes').prop('checked', false);
          } else {
            $('#wwgp_management_head_no').prop('checked', false);
            $('#wwgp_management_head_yes').prop('checked', true);
          }

          $('#wwgp_management_foot_list').val(pageOBJS[i].foot);

          if (pageOBJS[i].is_foot == 0) {
            $('#wwgp_management_foot_no').prop('checked', true);
            $('#wwgp_management_foot_yes').prop('checked', false);
          } else {
            $('#wwgp_management_foot_no').prop('checked', false);
            $('#wwgp_management_foot_yes').prop('checked', true);
          }

          if (pageOBJS[i].content !== undefined && pageOBJS[i].content !== null && pageOBJS[i].content !== '') {
            var edt0 = htmldecodejs(pageOBJS[i].content);
            $('#editcont0').val(edt0);
            vueOBJ.TinyMCMcontent0 = edt0;
          } else {
            $('#editcont0').val('');
            vueOBJ.TinyMCMcontent0 = '';
          }

          break;
        }
      }

      sel_lang = transedlang;
    }
  });
  $('.span_langitem_controller').click(function () {
    var dcont = $(this).attr('data-cont');
    if (dcont.split('-').length < 1) return;
    var iso = dcont.split('-')[0];
    var dialcode = dcont.split('-')[1];
    var cname = dcont.split('-')[2];
    var delid = iso + '-' + dialcode;
    $('#' + delid).remove();

    for (var i = 0; i < pageOBJS.length; i++) {
      if (pageOBJS[i].trans == delid) {
        pageOBJS[i].title = '';
        pageOBJS[i].author = '';
        pageOBJS[i].is_author = 1;
        pageOBJS[i].time = '';
        pageOBJS[i].is_time = 1;
        pageOBJS[i].layout = 0;
        pageOBJS[i].head = 0;
        pageOBJS[i].is_head = 0;
        pageOBJS[i].foot = 0;
        pageOBJS[i].is_foot = 0;
        pageOBJS[i].content = '';
        pageOBJS[i].active = 0;
        break;
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalPagesManagement",
  components: {
    'editor0': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      pageid: 'webs-wesglobal-pages-management-fav',
      pgtxt_page: '',
      pgtxt_title: '',
      pgtxt_url: '',
      pgtxt_dbsaved: '',
      pgtxt_name: '',
      pgtxt_head: '',
      pgtxt_foot: '',
      pgtxt_layout: '',
      pgtxt_yes: '',
      pgtxt_no: '',
      btntxt_edit: '',
      btntxt_delete: '',
      btntxt_change: '',
      btntxt_savechange: '',
      btntxt_cancel: '',
      btntxt_add: '',
      pgtxt_create: '',
      pgtxt_basic: '',
      pgtxt_existstitle: '',
      TinyMCMcontent0: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_translation: '',
      pgtxt_author: '',
      pgtxt_time: '',
      pgtxt_content: '',
      pgtxt_hide: '',
      pgtxt_disabled: ''
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
    cpgtxt_page: function cpgtxt_page() {
      return this.pgtxt_page;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_head: function cpgtxt_head() {
      return this.pgtxt_head;
    },
    cpgtxt_foot: function cpgtxt_foot() {
      return this.pgtxt_foot;
    },
    cpgtxt_layout: function cpgtxt_layout() {
      return this.pgtxt_layout;
    },
    cpgtxt_yes: function cpgtxt_yes() {
      return this.pgtxt_yes;
    },
    cpgtxt_no: function cpgtxt_no() {
      return this.pgtxt_no;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_url: function cpgtxt_url() {
      return this.pgtxt_url;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
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
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_create: function cpgtxt_create() {
      return this.pgtxt_create;
    },
    cpgtxt_basic: function cpgtxt_basic() {
      return this.pgtxt_basic;
    },
    cpgtxt_existstitle: function cpgtxt_existstitle() {
      return this.pgtxt_existstitle;
    },
    cpgtxt_existsurl: function cpgtxt_existsurl() {
      return this.pgtxt_existsurl;
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
    cpgtxt_save: function cpgtxt_save() {
      return this.pgtxt_save;
    },
    cpgtxt_preview: function cpgtxt_preview() {
      return this.pgtxt_preview;
    },
    cpgtxt_release: function cpgtxt_release() {
      return this.pgtxt_release;
    },
    cpgtxt_translation: function cpgtxt_translation() {
      return this.pgtxt_translation;
    },
    cpgtxt_author: function cpgtxt_author() {
      return this.pgtxt_author;
    },
    cpgtxt_time: function cpgtxt_time() {
      return this.pgtxt_time;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_hide: function cpgtxt_hide() {
      return this.pgtxt_hide;
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
      getLayoutAndHeadFoot();
      pageEventFunc();
      $('#wwpp_pstart').val(_assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getPageIndex());
      $('#wwpp_pcnt').val(_assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getRowCount());
    },
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('admin.getAllStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          edit_id = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getEditID();
          if (edit_id == 0) createPageContent();
          stored_langs = response.data.langlist;

          if (stored_langs != '') {
            stored_langs = $.parseJSON(stored_langs);
            setContentPage();
          }

          if (edit_id != 0) selectPagesPage();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    editorclick0: function editorclick0() {
      $('.tox.tox-tinymce').css('height', '350px');
    },
    editorblue0: function editorblue0() {
      $('.tox.tox-tinymce').css('height', '150px');
    },
    edit_init_callback0: function edit_init_callback0() {
      $('.tox-statusbar').css('display', 'none');
    },
    upload_handler0: function upload_handler0(blobInfo, success, failure, progress) {
      var xhr, formData;
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'admin.UpdateWWGBarCenterImg');

      xhr.upload.onprogress = function (e) {
        progress(e.loaded / e.total * 100);
      };

      xhr.onload = function () {
        var json;

        if (xhr.status < 200 || xhr.status >= 300) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }

        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != 'string') {
          failure('Invalid JSON: ' + xhr.responseText);
          return;
        } // $('#wwga_footbarleft_upload_preview_temp').val(json.filename);


        success(json.location);
      };

      xhr.onerror = function () {
        failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    },
    PagePreview: function PagePreview() {},
    Adddisablelang: function Adddisablelang() {
      var tags = '';
      $('#wwpc_disable_lang_add_body').html('');

      for (var i = 0; i < pageOBJS.length; i++) {
        var obj = pageOBJS[i];

        if (obj.active === 0) {
          var dcont = obj.trans;
          var cname = obj.langname;
          tags += '<div class="col-4 form-check form-check-inline">';
          tags += '<input class="form-check-input" type="checkbox" id="' + dcont + '" value="' + cname + '">';
          tags += '<label class="form-check-label" htmlFor="' + dcont + '">' + cname;

          if (obj.langstate === "disable") {
            var pgtxt_disabled = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_disabled');
            tags += '<span class="form-check-label data-ajax" data-ajax="pgtxt_disabled">(' + pgtxt_disabled + ')</span>';
          }

          tags += '</label>';
          tags += '</div>';
        }
      }

      $('#wwpc_disable_lang_add_body').html(tags);
      $('#wwpc_AddTranslationModal').modal('show');
    },
    wwpc_addTrans_btn_event: function wwpc_addTrans_btn_event() {
      $('#wwpc_disable_lang_add_body').children().each(function (index, element) {
        var inputOBJ = $(element).find('.form-check-input');

        if ($(inputOBJ).is(':checked')) {
          var objid = $(inputOBJ).attr('id');
          var o_iso = objid.split('-')[0];
          var o_dial = objid.split('-')[1];

          var _iso_dial = o_iso + '-' + o_dial;

          var tag = '';

          for (var j = 0; j < pageOBJS.length; j++) {
            var obj = pageOBJS[j];
            var spanid = obj.trans;
            var cname = obj.langname;
            var dcont = spanid + '-' + cname;

            if (_iso_dial === spanid) {
              obj.active = 1;
              pageOBJS[j] = obj;
              tag = '<span id="' + spanid + '">';
              tag += '<span class="page1_translate_span" style="cursor: pointer" data-cont="' + dcont + '">' + cname;

              if (obj.langstate == 'disable') {
                var pgtxt_disabled = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_disabled');
                tag += '   <span class="data-ajax" data-ajax="pgtxt_disabled">(' + pgtxt_disabled + ')</span>';
              }

              tag += '</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class="span_langitem_controller" data-cont="' + dcont + '">×</span></span>';
              $('#translanglist').append(tag);
              selectLanguage();
              break;
            }
          }
        }
      });
      $('#wwpc_AddTranslationModal').modal('hide');
    },
    wwpc_saveContentpage: function wwpc_saveContentpage() {
      for (var i = 0; i < pageOBJS.length; i++) {
        if (pageOBJS[i].trans == transedlang) {
          pageOBJS[i].time = $('#pagesetting_datapicker').val();
          pageOBJS[i].content = vueOBJ.TinyMCMcontent0;
          break;
        }
      }

      var pgsetstate = 'add';
      if (edit_id != 0) pgsetstate = 'mod';
      var postData = {
        allData: pageOBJS,
        pgsetstate: pgsetstate
      };
      $.ajax({
        url: 'admin.wwppSaveContent',
        type: 'POST',
        dataType: 'json',
        data: postData,
        success: function success(data) {
          if (data.msg == "ok") {
            var pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
            vueOBJ.TinyMCMcontent0 = '';
            vueOBJ.wwpc_gotoContentList();
          } else {
            mjs_module.data.showAlertHidden(data.msg);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    wwpc_gotoContentList: function wwpc_gotoContentList() {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.setEditID(0);
      this.$emit("fromchild", 0);
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page1_content_content_title{\n    border: 0;\n}\n.form-control.page2_input:focus,.form-control.page2_input:hover{\n    background-color:#d6d6d6;\n}\n.table thead th{\n    text-transform:none;\n    font-size: 14px;\n}\n.table thead th.th-lp-20, .table tbody td.th-lp-20{\n    padding-left: 20px;\n}\n.table thead th.th-rp-20, .table tbody td.th-rp-20{\n    padding-right: 20px;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    height: 350px;\n    min-height: 350px !important;\n}\n.span_langitem_controller{\n    color: #1b78c7;\n    font-size: 15px;\n    cursor: pointer;\n    padding: 5px 5px 5px 0;\n}\n.page1_translate_span {\n    padding-left: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=template&id=743cc57d&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=template&id=743cc57d& ***!
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
        _c("div", { staticClass: "page_index_tab" }, [
          _c(
            "div",
            {
              staticClass:
                "page1_content_side_bar_text page1_content_side_bar_seleted",
              attrs: { "data-target": "page_management_list" }
            },
            [
              _vm._v(
                _vm._s(_vm.cbtntxt_edit) +
                  " " +
                  _vm._s(_vm.cpgtxt_content) +
                  " " +
                  _vm._s(_vm.cpgtxt_page)
              )
            ]
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
          attrs: { id: "wwgp_pageedit" }
        },
        [
          _c(
            "form",
            {
              attrs: {
                method: "post",
                enctype: "multipart/form-data",
                name: "pagesetting_frm",
                id: "pagesetting_frm"
              }
            },
            [
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "userid",
                  name: "userid",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "wwpp_edit",
                  name: "wwpp_edit",
                  value: "0"
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "wwpp_pstart",
                  name: "wwpp_pstart",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "wwpp_pcnt",
                  name: "wwpp_pcnt",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "wwpp_type",
                  name: "wwpp_type",
                  value: "Basic"
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "wwpp_author",
                  name: "wwpp_author",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "wwpp_time",
                  name: "wwpp_time",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "wwpp_head",
                  name: "wwpp_head",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  type: "hidden",
                  id: "wwpp_foot",
                  name: "wwpp_foot",
                  value: ""
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "page1_content_content_bar" }, [
                _c(
                  "div",
                  {
                    staticClass: "d-flex flex-wrap",
                    staticStyle: {
                      "margin-bottom": "20px",
                      "margin-top": "20px"
                    }
                  },
                  [
                    _c("div", { staticClass: "d-flex col-sm-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: { "margin-top": "8px" }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_page) +
                              " " +
                              _vm._s(_vm.cpgtxt_name)
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(0)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex col-sm-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: { "margin-top": "8px" }
                        },
                        [_vm._v(_vm._s(_vm.cpgtxt_title))]
                      ),
                      _vm._v(" "),
                      _vm._m(1)
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "d-flex flex-wrap",
                    staticStyle: {
                      "margin-bottom": "20px",
                      "margin-top": "20px"
                    }
                  },
                  [
                    _c("div", { staticClass: "d-flex col-sm-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: { "margin-top": "8px" }
                        },
                        [_vm._v(_vm._s(_vm.cpgtxt_url))]
                      ),
                      _vm._v(" "),
                      _vm._m(2)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex col-sm-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: { "margin-top": "8px" }
                        },
                        [_vm._v(_vm._s(_vm.cpgtxt_author))]
                      ),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-2",
                          staticStyle: { "line-height": "35px" }
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
                                  value: "",
                                  id: "author_invisible",
                                  name: "author_invisible"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "form-check-label",
                                  attrs: { for: "author_invisible" }
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(_vm.cpgtxt_hide) +
                                      "\n                                    "
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
                    staticClass: "d-flex flex-wrap",
                    staticStyle: { "margin-bottom": "20px" }
                  },
                  [
                    _c("div", { staticClass: "d-flex col-sm-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: { "margin-top": "8px" }
                        },
                        [_vm._v(_vm._s(_vm.cpgtxt_time))]
                      ),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-2",
                          staticStyle: { "line-height": "35px" }
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
                                  value: "",
                                  id: "time_invisible",
                                  name: "time_invisible"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "form-check-label",
                                  attrs: { for: "time_invisible" }
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(_vm.cpgtxt_hide) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex col-sm-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: { "margin-top": "8px" }
                        },
                        [_vm._v(_vm._s(_vm.cpgtxt_layout))]
                      ),
                      _vm._v(" "),
                      _vm._m(5)
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "d-flex flex-wrap",
                    staticStyle: {
                      "margin-bottom": "20px",
                      "margin-top": "20px"
                    }
                  },
                  [
                    _c("div", { staticClass: "d-flex col-sm-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: { "margin-top": "8px" }
                        },
                        [_vm._v(_vm._s(_vm.cpgtxt_head))]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
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
                                  name: "wwgp_management_head_radio",
                                  id: "wwgp_management_head_no",
                                  value: "no",
                                  checked: ""
                                }
                              }),
                              _vm._v(
                                _vm._s(_vm.cpgtxt_no) +
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
                                  name: "wwgp_management_head_radio",
                                  id: "wwgp_management_head_yes",
                                  value: "yes"
                                }
                              }),
                              _vm._v(
                                _vm._s(_vm.cpgtxt_yes) +
                                  "\n                                "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(6)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex col-sm-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: { "margin-top": "8px" }
                        },
                        [_vm._v(_vm._s(_vm.cpgtxt_foot))]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
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
                                  name: "wwgp_management_foot_radio",
                                  id: "wwgp_management_foot_no",
                                  value: "no",
                                  checked: ""
                                }
                              }),
                              _vm._v(
                                _vm._s(_vm.cpgtxt_no) +
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
                                  name: "wwgp_management_foot_radio",
                                  id: "wwgp_management_foot_yes",
                                  value: "yes"
                                }
                              }),
                              _vm._v(
                                _vm._s(_vm.cpgtxt_yes) +
                                  "\n                                "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(7)
                    ])
                  ]
                )
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
                    _c(
                      "div",
                      {
                        staticClass: "page1_translate_bar_right",
                        staticStyle: { display: "flex" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "page1_translate_div adddisablelang",
                            staticStyle: { cursor: "pointer" },
                            on: { click: _vm.Adddisablelang }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "iconify",
                                staticStyle: {
                                  "font-size": "20px",
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
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "page1_translate_span_right" },
                              [_vm._v(_vm._s(_vm.cbtntxt_add))]
                            ),
                            _vm._v("  |   \n                                ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "page1_translate_div",
                            staticStyle: { cursor: "pointer" },
                            on: { click: _vm.PagePreview }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "iconify",
                                staticStyle: {
                                  "font-size": "20px",
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
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "page1_translate_span_right" },
                              [_vm._v(_vm._s(_vm.cpgtxt_preview))]
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { margin: "1rem 0" } },
                [
                  _c("textarea", {
                    staticStyle: { display: "none" },
                    attrs: { name: "editcont0", id: "editcont0", value: "" }
                  }),
                  _vm._v(" "),
                  _c("editor0", {
                    staticClass: "page_editor",
                    attrs: {
                      "api-key":
                        "vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh",
                      "cloud-channel": "5-dev",
                      init: {
                        id: "02",

                        plugins: [
                          "lists link image code table paste help wordcount "
                        ],
                        toolbar:
                          "undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ",
                        images_upload_handler: _vm.upload_handler0,
                        init_instance_callback: _vm.edit_init_callback0
                      }
                    },
                    on: { onClick: _vm.editorclick0, onBlur: _vm.editorblue0 },
                    model: {
                      value: _vm.TinyMCMcontent0,
                      callback: function($$v) {
                        _vm.TinyMCMcontent0 = $$v
                      },
                      expression: "TinyMCMcontent0"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "row justify-content-end",
                  staticStyle: { "padding-bottom": "1.5rem" }
                },
                [
                  _c("div", { staticClass: "col-md-4 col-sm-4 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.wwpc_saveContentpage($event)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.cbtntxt_savechange))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn page1_custom_btn",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.wwpc_gotoContentList($event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.cbtntxt_cancel) +
                            "\n                        "
                        )
                      ]
                    )
                  ])
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
      {
        staticClass: "modal fade",
        attrs: { id: "wwpc_AddTranslationModal", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c(
            "div",
            {
              staticClass: "modal-content page-type-first-content",
              staticStyle: { display: "block" }
            },
            [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "div",
                  {
                    staticClass: "modal-title paytype-add-letter",
                    staticStyle: {
                      "font-size": "20px",
                      "font-weight": "600",
                      display: "block"
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_add) +
                        " " +
                        _vm._s(_vm.cpgtxt_translation)
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
              _vm._m(8),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-footer justify-content-center",
                  staticStyle: { height: "auto" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                      attrs: { type: "button" },
                      on: { click: _vm.wwpc_addTrans_btn_event }
                    },
                    [
                      _vm._v(
                        "\n                        + " +
                          _vm._s(_vm.cbtntxt_add) +
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
    return _c("div", { staticClass: "col-md-8" }, [
      _c("input", {
        staticClass: "form-control page2_input",
        attrs: {
          type: "text",
          id: "wwpp_input_page_name",
          name: "wwpp_input_page_name",
          readonly: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("input", {
        staticClass: "form-control border-input-text",
        attrs: {
          type: "text",
          id: "wwpp_input_page_title",
          name: "wwpp_input_page_title"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("input", {
        staticClass: "form-control border-input-text",
        attrs: {
          type: "text",
          id: "wwpp_input_page_url",
          name: "wwpp_input_page_url"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("input", {
        staticClass: "form-control border-input-text",
        attrs: {
          type: "text",
          id: "wwpp_input_page_author",
          name: "wwpp_input_page_author"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("input", {
        staticClass: "form-control page2_input",
        attrs: {
          type: "text",
          name: "pagesetting_datapicker",
          id: "pagesetting_datapicker",
          placeholder: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("select", {
        staticClass: "form-control",
        attrs: {
          id: "wwgp_management_layout_list",
          name: "wwgp_management_layout_list"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("select", {
        staticClass: "form-control",
        attrs: {
          id: "wwgp_management_head_list",
          name: "wwgp_management_head_list"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("select", {
        staticClass: "form-control",
        attrs: {
          id: "wwgp_management_foot_list",
          name: "wwgp_management_foot_list"
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
        staticClass: "modal-body",
        staticStyle: { padding: "5px 10px !important" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", {
            staticClass: "row m-10",
            staticStyle: { "line-height": "30px" },
            attrs: { id: "wwpc_disable_lang_add_body" }
          })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue":
/*!**************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalPagesManagementEdit_vue_vue_type_template_id_743cc57d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalPagesManagementEdit.vue?vue&type=template&id=743cc57d& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=template&id=743cc57d&");
/* harmony import */ var _WebsWesGlobalPagesManagementEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalPagesManagementEdit.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalPagesManagementEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalPagesManagementEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalPagesManagementEdit_vue_vue_type_template_id_743cc57d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalPagesManagementEdit_vue_vue_type_template_id_743cc57d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesManagementEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=template&id=743cc57d&":
/*!*********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=template&id=743cc57d& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_template_id_743cc57d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesManagementEdit.vue?vue&type=template&id=743cc57d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue?vue&type=template&id=743cc57d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_template_id_743cc57d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagementEdit_vue_vue_type_template_id_743cc57d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);