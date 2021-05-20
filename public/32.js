(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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




var vueOBJ = null;
var transedlang = '';
var btntxt_changes = "";
var pgtxt_no = "";
var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.jsonparse(window.Laravel.userinfo).id;
var username = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__["default"].data.jsonparse(window.Laravel.userinfo).username;
var page_content_list = new Array();
var permss;

function pageEvent() {
  $('#supr_edit_save_btn').click(function () {
    if (permss.pcreate == 1 || permss.pwrite == 1) {
      savePageContentData();
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
}

function pageLoad() {
  if (transedlang == null || transedlang == '') {
    transedlang = 'en-1';
  }

  $.ajax({
    url: 'admin.getWWCFrontPageList',
    data: {
      trans: transedlang,
      userid: userid
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg == "ok") {
        var data_list = data.lists;
        var tags = '';
        page_content_list = new Array();
        var pgtxt_index = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_index');
        var pgtxt_login = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_login');
        var pgtxt_register = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_register');
        var pgtxt_notfound = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_notfound');
        var pgtxt_accessdenied = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_accessdenied');
        var pgtxt_construction = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_construction');
        var pgtxt_comingback = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_comingback');

        for (var i = 0; i < data_list.length; i++) {
          var item = data_list[i];
          var id = i;
          var page_name = '';
          var ajax_name = '';

          if (i == 0) {
            page_name = pgtxt_index;
            ajax_name = 'pgtxt_index';
          }

          if (i == 1) {
            page_name = pgtxt_login;
            ajax_name = 'pgtxt_login';
          }

          if (i == 2) {
            page_name = pgtxt_register;
            ajax_name = 'pgtxt_register';
          }

          if (i == 3) {
            page_name = pgtxt_construction;
            ajax_name = 'pgtxt_construction';
          }

          if (i == 4) {
            page_name = pgtxt_notfound;
            ajax_name = 'pgtxt_notfound';
          }

          if (i == 5) {
            page_name = pgtxt_accessdenied;
            ajax_name = 'pgtxt_accessdenied';
          }

          if (i == 6) {
            page_name = pgtxt_comingback;
            ajax_name = 'pgtxt_index';
          }

          var page_title = item.index;
          var user_name = item.name;
          var save_time = item.date;
          var array_item = {
            id: id,
            page_title: page_title,
            changed: 0
          };
          page_content_list.push(array_item);
          tags += '<tr role="row" class="odd" style="height: 55px;">';
          tags += '<td>';
          tags += '<div class="form-check form-check-inline">';
          tags += '</div>';
          tags += '</td>';
          tags += '<td class="data-ajax" data-ajax="' + ajax_name + '">' + page_name + '</td>';
          tags += '<td>';
          tags += '<div class="input-group" style="width: 70%">';
          tags += '<input type="text" id="wwpc_page_title_' + id + '" class="page-title-input" value="' + page_title + '">';
          tags += '</div>';
          tags += '</td>';
          tags += '<td>' + save_time + '</td>';
          tags += '<td>' + user_name + '</td>';
          tags += '</tr>';
        }

        $('#wwcf_page_content_list').html(tags);
      } else {
        $('#wwcf_page_content_list').html('');
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function savePageContentData() {
  for (var i = 0; i < page_content_list.length; i++) {
    var content = page_content_list[i];
    var id = content.id;
    var page_title = content.page_title.toString();
    var idstring = 'wwpc_page_title_' + id;
    var change_page_title = $('#' + idstring).val().toString();

    if (page_title.localeCompare(change_page_title) == 0) {
      page_content_list[i].changed = 0;
    } else {
      page_content_list[i].changed = 1;
      page_content_list[i].page_title = change_page_title;
    }
  }

  var changed = false;

  for (var i = 0; i < page_content_list.length; i++) {
    if (page_content_list[i].changed == 1) {
      changed = true;
      break;
    }
  }

  if (changed) {
    $.ajax({
      url: 'admin.saveWWCFrontPageList',
      data: {
        content_list: page_content_list,
        user_name: username,
        userid: userid
      },
      type: 'POST',
      success: function success(data) {
        if (data.msg == "ok") {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_dbsaved');
          pageLoad();
        } else {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_error');
          pageLoad();
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  } else {
    alert(pgtxt_no + ' ' + btntxt_changes);
    pageLoad();
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalConfigurationFrontpages",
  data: function data() {
    return {
      pageid: 'webs-wesglobal-configuration-frontpages-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_configuration: '',
      musususu_webs_wesglobal_configuration_general: '',
      pgtxt_head: '',
      pgtxt_foot: '',
      pgtxt_topheader: '',
      pgtxt_hide: '',
      pgtxt_location: '',
      pgtxt_logo: '',
      pgtxt_site: '',
      pgtxt_title: '',
      pgtxt_enter: '',
      btntxt_edit: '',
      btntxt_setting: '',
      pgtxt_slogan: '',
      pgtxt_bar: '',
      pgtxt_normal: '',
      pgtxt_css: '',
      pgtxt_content: '',
      pgtxt_image: '',
      pgtxt_link: '',
      pgtxt_center: '',
      pgtxt_right: '',
      pgtxt_font: '',
      pgtxt_size: '',
      pgtxt_toolbar: '',
      pgtxt_calendar: '',
      pgtxt_module: '',
      pgtxt_left: '',
      btntxt_add: '',
      pgtxt_language: '',
      pgtxt_translation: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_nosavenoappear: '',
      pgtxt_please: '',
      pgtxt_select: '',
      pgtxt_extra: '',
      pgtxt_doesnt: '',
      pgtxt_work: '',
      pgtxt_index: '',
      pgtxt_front: '',
      btntxt_save: '',
      btntxt_change: '',
      pgtxt_page: '',
      pgtxt_dbsaved: '',
      pgtxt_previewpage: '',
      pgtxt_releasesuccess: '',
      pgtxt_selectlanguagesave: '',
      pgtxt_pages: '',
      pgtxt_lastsaved: '',
      pgtxt_user: '',
      pgtxt_name: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  computed: {
    cmususu_webs_wesglobal_configuration: function cmususu_webs_wesglobal_configuration() {
      return this.mususu_webs_wesglobal_configuration;
    },
    cmusususu_webs_wesglobal_configuration_general: function cmusususu_webs_wesglobal_configuration_general() {
      return this.musususu_webs_wesglobal_configuration_general;
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
    cpgtxt_foot: function cpgtxt_foot() {
      return this.pgtxt_foot;
    },
    cpgtxt_topheader: function cpgtxt_topheader() {
      return this.pgtxt_topheader;
    },
    cpgtxt_hide: function cpgtxt_hide() {
      return this.pgtxt_hide;
    },
    cpgtxt_location: function cpgtxt_location() {
      return this.pgtxt_location;
    },
    cpgtxt_logo: function cpgtxt_logo() {
      return this.pgtxt_logo;
    },
    cpgtxt_site: function cpgtxt_site() {
      return this.pgtxt_site;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_enter: function cpgtxt_enter() {
      return this.pgtxt_enter;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_setting: function cbtntxt_setting() {
      return this.btntxt_setting;
    },
    cpgtxt_slogan: function cpgtxt_slogan() {
      return this.pgtxt_slogan;
    },
    cpgtxt_bar: function cpgtxt_bar() {
      return this.pgtxt_bar;
    },
    cpgtxt_normal: function cpgtxt_normal() {
      return this.pgtxt_normal;
    },
    cpgtxt_css: function cpgtxt_css() {
      return this.pgtxt_css;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_image: function cpgtxt_image() {
      return this.pgtxt_image;
    },
    cpgtxt_link: function cpgtxt_link() {
      return this.pgtxt_link;
    },
    cpgtxt_center: function cpgtxt_center() {
      return this.pgtxt_center;
    },
    cpgtxt_right: function cpgtxt_right() {
      return this.pgtxt_right;
    },
    cpgtxt_left: function cpgtxt_left() {
      return this.pgtxt_left;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_toolbar: function cpgtxt_toolbar() {
      return this.pgtxt_toolbar;
    },
    cpgtxt_calendar: function cpgtxt_calendar() {
      return this.pgtxt_calendar;
    },
    cpgtxt_module: function cpgtxt_module() {
      return this.pgtxt_module;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_language: function cpgtxt_language() {
      return this.pgtxt_language;
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
    cpgtxt_nosavenoappear: function cpgtxt_nosavenoappear() {
      return this.pgtxt_nosavenoappear;
    },
    cpgtxt_please: function cpgtxt_please() {
      return this.pgtxt_please;
    },
    cpgtxt_select: function cpgtxt_select() {
      return this.pgtxt_select;
    },
    cpgtxt_extra: function cpgtxt_extra() {
      return this.pgtxt_extra;
    },
    cpgtxt_doesnt: function cpgtxt_doesnt() {
      return this.pgtxt_doesnt;
    },
    cpgtxt_work: function cpgtxt_work() {
      return this.pgtxt_work;
    },
    cpgtxt_index: function cpgtxt_index() {
      return this.pgtxt_index;
    },
    cpgtxt_page: function cpgtxt_page() {
      return this.pgtxt_page;
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
    cbtntxt_save: function cbtntxt_save() {
      return this.btntxt_save;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cpgtxt_front: function cpgtxt_front() {
      return this.pgtxt_front;
    },
    cpgtxt_pages: function cpgtxt_pages() {
      return this.pgtxt_pages;
    },
    cpgtxt_lastsaved: function cpgtxt_lastsaved() {
      return this.pgtxt_lastsaved;
    },
    cpgtxt_user: function cpgtxt_user() {
      return this.pgtxt_user;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
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
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.permissionDefinition();
    pgtxt_no = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_no');
    btntxt_changes = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_changes');
    this.initpage();
    this.getWWGStoredLang();
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

    /*fav part*/
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getWWGStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          var stored_langs = response.data.langlist;

          if (stored_langs !== '') {
            stored_langs = $.parseJSON(stored_langs);
            var tags = '';

            for (var j = 0; j < stored_langs.length; j++) {
              var obj = stored_langs[j]; // console.log(obj);

              var iso = obj.iso;
              var dialCode = obj.dialcode;
              var cname = obj.name;
              var status = obj.status;
              var dcont = iso + '-' + dialCode + '-' + cname;
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
                $('#transedlang').val(transedlang);
                vueOBJ.loaddata();
              }
            });
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    initpage: function initpage() {
      pageEvent();
      pageLoad();
    },
    loaddata: function loaddata() {
      transedlang = $('#transedlang').val();
      pageLoad();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sl-tab-container{\n    display: none;\n}\n.sl-tab-container.active{\n    display: block;\n}\n.ck.ck-editor {\n    width: 100%;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    min-height: 350px !important;\n}\n.apper-top-lang{\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}\n.apper-top-lang div{\n    line-height: 25px;\n    text-align: center;\n}\n.form-check-input.group{\n    width: 16px;height: 16px;border-radius: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.group > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.group.active > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n.page-title-input{\n    border: 1px solid #bbbbbb;\n    background-color: #fff;\n    border-radius: 20px;\n    height: 30px;\n    width: 300px;\n    padding: 0px 20px;\n    color: gray;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=template&id=8080c306&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=template&id=8080c306& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
          _vm._v(_vm._s(_vm.cpgtxt_front) + " " + _vm._s(_vm.cpgtxt_pages))
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
              _vm._s(_vm.cmususu_webs_wesglobal_configuration) +
              "   >>  " +
              _vm._s(_vm.cpgtxt_font) +
              " " +
              _vm._s(_vm.cpgtxt_page) +
              "\n                      "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "sl-tab-container active",
        attrs: { id: "GeneralContainer" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-body", staticStyle: { padding: "0px" } },
                [
                  _c("h6", { staticClass: "card-title m-20" }, [
                    _vm._v(_vm._s(_vm.cbtntxt_setting))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          {
                            staticClass: "table table-lg  no-footer",
                            attrs: {
                              id: "user-list",
                              role: "grid",
                              "aria-describedby": "user-list_info"
                            }
                          },
                          [
                            _c("thead", [
                              _c("tr", { attrs: { role: "row" } }, [
                                _vm._m(1),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "20%" } }, [
                                  _vm._v(_vm._s(_vm.cpgtxt_pages))
                                ]),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "45%" } }, [
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_page) +
                                      " " +
                                      _vm._s(_vm.cpgtxt_name)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticStyle: { width: "15%" } }, [
                                  _vm._v(_vm._s(_vm.cpgtxt_lastsaved))
                                ]),
                                _vm._v(" "),
                                _c("th", {}, [_vm._v(_vm._s(_vm.cpgtxt_user))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tbody", {
                              staticStyle: { color: "gray" },
                              attrs: { id: "wwcf_page_content_list" }
                            })
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "text-right" }, [
              _c(
                "div",
                {
                  staticClass: "btn btn-outline-light  dash-my-btn-0 active",
                  staticStyle: {
                    "font-size": "0.9rem",
                    padding: "10px 20px",
                    "margin-right": "15px"
                  },
                  attrs: { id: "supr_edit_save_btn" }
                },
                [
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm.cbtntxt_save) +
                        " " +
                        _vm._s(_vm.cbtntxt_change)
                    )
                  ])
                ]
              )
            ])
          ])
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
          id: "webs-wesglobal-configuration-frontpages-fav",
          "data-status": "off",
          "data-page-info": "Frontpages_webs-wesglobal-configuration-frontpages"
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
    return _c("th", { staticStyle: { width: "20px!important" } }, [
      _c("div", { staticClass: "form-check form-check-inline" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue":
/*!******************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalConfigurationFrontpages_vue_vue_type_template_id_8080c306___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationFrontpages.vue?vue&type=template&id=8080c306& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=template&id=8080c306&");
/* harmony import */ var _WebsWesGlobalConfigurationFrontpages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationFrontpages.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalConfigurationFrontpages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalConfigurationFrontpages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalConfigurationFrontpages_vue_vue_type_template_id_8080c306___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalConfigurationFrontpages_vue_vue_type_template_id_8080c306___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationFrontpages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=template&id=8080c306&":
/*!*************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=template&id=8080c306& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_template_id_8080c306___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationFrontpages.vue?vue&type=template&id=8080c306& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationFrontpages.vue?vue&type=template&id=8080c306&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_template_id_8080c306___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationFrontpages_vue_vue_type_template_id_8080c306___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);