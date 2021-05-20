(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var permss;
var transedlang = '';
var logo_path = "/uploads/images/waaupimg/logo/";

function JsonDataSocialSetting(jsonstr) {
  if (jsonstr != '') {
    var datas = $.parseJSON(jsonstr);

    if (datas.logoImg != '' && datas.logoImg != null) {
      //$('#wwga_logo_upload_preview').text('');
      $('#wwga_logo_upload_preview_temp').val(datas.logoImg);
      $('#wwga_logo_upload_preview').css('background-image', 'url("' + logo_path + datas.logoImg + '")');
    }

    if (datas.sitelogoImg != '' && datas.sitelogoImg != null) {
      //$('#wwga_sitelogo_upload_preview').text('');
      $('#wwga_sitelogo_upload_preview_temp').val(datas.sitelogoImg);
      $('#wwga_sitelogo_upload_preview').css('background-image', 'url("' + logo_path + datas.sitelogoImg + '")');
    }

    if (datas.sloganImg != '' && datas.sloganImg != null) {
      //$('#wwga_slogan_upload_preview').text('');
      $('#wwga_slogan_upload_preview_temp').val(datas.sloganImg);
      $('#wwga_slogan_upload_preview').css('background-image', 'url("' + logo_path + datas.sloganImg + '")');
    }

    if (datas.favicoImg != '' && datas.favicoImg != null) {
      //$('#wwga_slogan_upload_preview').text('');
      $('#wwga_favico_upload_preview_temp').val(datas.favicoImg);
      $('#wwga_favico_upload_preview').css('background-image', 'url("' + logo_path + datas.favicoImg + '")');
    }

    if (datas.slogantxt != '') {
      $('#wwga_slogan_input').val(datas.slogantxt);
    }

    if (datas.sitetitle != '') {
      $('#wwga_sitetitle_input').val(datas.sitetitle);
    }
  } else {
    //$('#wwga_logo_upload_preview').text('');
    $('#wwga_logo_upload_preview_temp').val('');
    $('#wwga_logo_upload_preview').css('background-image', 'url("")'); //$('#wwga_sitelogo_upload_preview').text('');

    $('#wwga_sitelogo_upload_preview_temp').val('');
    $('#wwga_sitelogo_upload_preview').css('background-image', 'url("")'); //$('#wwga_slogan_upload_preview').text('');

    $('#wwga_slogan_upload_preview_temp').val('');
    $('#wwga_slogan_upload_preview').css('background-image', 'url("")');
    $('#wwga_favico_upload_preview_temp').val('');
    $('#wwga_favico_upload_preview').css('background-image', 'url("")');
    $('#wwga_slogan_input').val('');
    $('#wwga_sitetitle_input').val('');
  }
}

function pageEvent() {
  $('#wwga_logo_editbtn').click(function () {
    if (permss.pwrite == 1) {
      if (transedlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguage');
        return;
      }

      $('#wwga_logo_upload').val('');
      $('#wwga_logo_upload').trigger('click');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
  $("#wwga_logo_upload").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#wwga_logo_upload_preview').text('');
        $('#wwga_logo_upload_preview').css('background-image', 'url("' + e.target.result + '")');
      };

      reader.readAsDataURL(this.files[0]); // convert to base64 string
    }
  });
  $('#wwga_sitelogo_editbtn').click(function () {
    if (permss.pwrite == 1) {
      if (transedlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguage');
        return;
      }

      $('#wwga_sitelogo_upload').val('');
      $('#wwga_sitelogo_upload').trigger('click');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
  $("#wwga_sitelogo_upload").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#wwga_sitelogo_upload_preview').text('');
        $('#wwga_sitelogo_upload_preview').css('background-image', 'url("' + e.target.result + '")');
      };

      reader.readAsDataURL(this.files[0]); // convert to base64 string
    }
  });
  $('#wwga_favico_editbtn').click(function () {
    if (permss.pwrite == 1) {
      if (transedlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguage');
        return;
      }

      $('#wwga_favico_upload').val('');
      $('#wwga_favico_upload').trigger('click');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
  $("#wwga_favico_upload").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#wwga_favico_upload_preview').text('');
        $('#wwga_favico_upload_preview').css('background-image', 'url("' + e.target.result + '")');
      };

      reader.readAsDataURL(this.files[0]); // convert to base64 string
    }
  });
  $('#wwga_slogan_editbtn').click(function () {
    if (permss.pwrite == 1) {
      if (transedlang == '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguage');
        return;
      }

      $('#wwga_slogan_upload').val('');
      $('#wwga_slogan_upload').trigger('click');
    } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
  });
  $("#wwga_slogan_upload").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#wwga_slogan_upload_preview').text('');
        $('#wwga_slogan_upload_preview').css('background-image', 'url("' + e.target.result + '")');
      };

      reader.readAsDataURL(this.files[0]); // convert to base64 string
    }
  });
}

function pageLoad() {
  $.ajax({
    url: 'admin.getConfigurationGeneral',
    data: {
      transedlang: transedlang
    },
    type: 'POST',
    success: function success(data) {
      if (data.msg == "ok") {
        if (transedlang != null && transedlang != '') {
          $('.page1_alarm_bar').addClass('active');
          $('.page1_alarm_bar span').text('Save  Appear');
        }

        JsonDataSocialSetting(data.lists);
      } else alert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalConfigurationGeneral",
  data: function data() {
    return {
      pageid: 'webs-wesglobal-configuration-general-fav',
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
      pgtxt_page: '',
      pgtxt_dbsaved: '',
      pgtxt_previewpage: '',
      pgtxt_releasesuccess: '',
      pgtxt_selectlanguagesave: '',
      pgtxt_selectlanguage: '',
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
    cpgtxt_selectlanguage: function cpgtxt_selectlanguage() {
      return this.pgtxt_selectlanguage;
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
              var obj = stored_langs[j];
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
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguagesave');
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
              part: "configgeneral",
              tabstatus: -1,
              release: 1
            },
            success: function success(data) {
              if (data.msg == "ok") {
                _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_releasesuccess');
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
              part: "configgeneral",
              tabstatus: -1,
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
    SavePageContent: function SavePageContent() {
      if (permss.pwrite == 1) {
        var formData = '';

        if (transedlang == '') {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_selectlanguage');
          return;
        }

        formData = new FormData($("#wwga_configgeneral_flw")[0]);
        $.ajax({
          url: 'admin.saveConfigurationGeneral',
          type: 'POST',
          data: formData,
          async: false,
          success: function success(data) {
            if (data.msg == "ok") {
              $('#wwga_logo_upload_preview_temp').val(data.logoImg);
              $('#wwga_sitelogo_upload_preview_temp').val(data.sitelogoImg);
              $('#wwga_slogan_upload_preview_temp').val(data.sloganImg);
              $('#wwga_favico_upload_preview_temp').val(data.sloganImg);
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_dbsaved');
            } else {
              alert(data.msg);
            }
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          },
          cache: false,
          contentType: false,
          processData: false
        });
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    },
    initpage: function initpage() {
      pageLoad();
      pageEvent();
    },
    loaddata: function loaddata() {
      transedlang = $('#transedlang').val();
      pageLoad();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sl-tab-container{\n    display: none;\n}\n.sl-tab-container.active{\n    display: block;\n}\n.ck.ck-editor {\n    width: 100%;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    min-height: 350px !important;\n}\n.apper-top-lang{\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}\n.apper-top-lang div{\n    line-height: 25px;\n    text-align: center;\n}\n.form-check-input.group{\n    width: 16px;height: 16px;border-radius: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.group > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.group.active > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n#wwga_sitelogo_upload_preview,\n#wwga_slogan_upload_preview,\n#wwga_logo_upload_preview,\n#wwga_favico_upload_preview\n{\n    background-repeat: no-repeat;\n    background-size:100% 100%;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=template&id=b4616cd4&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=template&id=b4616cd4& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
          _vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_configuration_general))
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
              _vm._s(_vm.cmusususu_webs_wesglobal_configuration_general) +
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
                attrs: { id: "wwga_save" },
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
        _c(
          "div",
          {
            staticClass: "page1_alarm_bar",
            staticStyle: { "margin-bottom": "0" }
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
                      d:
                        "M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z",
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
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "sl-tab-container active",
        staticStyle: { "margin-top": "20px" },
        attrs: { id: "GeneralContainer" }
      },
      [
        _c(
          "form",
          {
            attrs: {
              method: "post",
              enctype: "multipart/form-data",
              name: "wwga_configgeneral_flw",
              id: "wwga_configgeneral_flw"
            }
          },
          [
            _c("input", {
              attrs: {
                type: "hidden",
                name: "transedlang",
                id: "transedlang",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_logo_upload_preview_temp",
                id: "wwga_logo_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_sitelogo_upload_preview_temp",
                id: "wwga_sitelogo_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_slogan_upload_preview_temp",
                id: "wwga_slogan_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_favico_upload_preview_temp",
                id: "wwga_favico_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_site) + " " + _vm._s(_vm.cpgtxt_logo)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11" }, [
                        _c("div", { staticClass: "flex-container" }, [
                          _c("div", {
                            staticClass: "logimag",
                            attrs: { id: "wwga_logo_upload_preview" }
                          }),
                          _vm._v(" "),
                          _vm._m(2),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "btn btn-outline-light webglogappearbtn",
                                attrs: { id: "wwga_logo_editbtn" }
                              },
                              [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_edit))])]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_extra) + " " + _vm._s(_vm.cpgtxt_logo)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11" }, [
                        _c("div", { staticClass: "flex-container" }, [
                          _c("div", {
                            staticClass: "logimag",
                            attrs: { id: "wwga_sitelogo_upload_preview" }
                          }),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "btn btn-outline-light webglogappearbtn",
                                attrs: { id: "wwga_sitelogo_editbtn" }
                              },
                              [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_edit))])]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v("Fav Ico")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11" }, [
                        _c("div", { staticClass: "flex-container" }, [
                          _c("div", {
                            staticClass: "logimag",
                            attrs: { id: "wwga_favico_upload_preview" }
                          }),
                          _vm._v(" "),
                          _vm._m(6),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "btn btn-outline-light webglogappearbtn",
                                attrs: { id: "wwga_favico_editbtn" }
                              },
                              [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_edit))])]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_site) + " " + _vm._s(_vm.cpgtxt_title)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11" }, [
                        _c("div", { staticClass: "flex-container" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group m-b-0",
                              staticStyle: { width: "40%" }
                            },
                            [
                              _c("input", {
                                staticClass: "form-control w-75",
                                attrs: {
                                  type: "text",
                                  placeholder: [
                                    [_vm.cpgtxt_enter][_vm.cpgtxt_title]
                                  ],
                                  name: "wwga_sitetitle_input",
                                  id: "wwga_sitetitle_input"
                                }
                              })
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_slogan))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _vm._m(8),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-11" }, [
                        _c("div", { staticClass: "flex-container" }, [
                          _c("div", {
                            staticClass: "logimag",
                            staticStyle: { "font-size": "22px" },
                            attrs: { id: "wwga_slogan_upload_preview" }
                          }),
                          _vm._v(" "),
                          _vm._m(9),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "btn btn-outline-light webglogappearbtn",
                                attrs: { id: "wwga_slogan_editbtn" }
                              },
                              [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_edit))])]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-container" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group m-b-0",
                              staticStyle: { width: "40%" }
                            },
                            [
                              _c("input", {
                                staticClass: "form-control w-75",
                                attrs: {
                                  type: "text",
                                  placeholder: [
                                    [{ cpgtxt_enter: _vm.cpgtxt_enter }]
                                  ][[{ cpgtxt_slogan: _vm.cpgtxt_slogan }]],
                                  name: "wwga_slogan_input",
                                  id: "wwga_slogan_input"
                                }
                              })
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_index) + " " + _vm._s(_vm.cpgtxt_page)
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(10)
                  ])
                ])
              ])
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
                        staticStyle: { margin: "0px auto" }
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
          id: "webs-wesglobal-configuration-general-fav",
          "data-status": "off",
          "data-page-info": "General_webs-wesglobal-configuration-general"
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
    return _c("div", { staticClass: "col-md-1" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _vm._v(
          "\n                                         \n                                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "file",
          name: "wwga_logo_upload",
          id: "wwga_logo_upload",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _vm._v(
          "\n                                         \n                                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "file",
          name: "wwga_sitelogo_upload",
          id: "wwga_sitelogo_upload",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _vm._v(
          "\n                                         \n                                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "file",
          name: "wwga_favico_upload",
          id: "wwga_favico_upload",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _vm._v(
          "\n                                         \n                                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _vm._v(
          "\n                                         \n                                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "file",
          name: "wwga_slogan_upload",
          id: "wwga_slogan_upload",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-1" }, [
        _c("div", { staticClass: "form-group m-b-0" }, [
          _vm._v(
            "\n                                         \n                                    "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-11" }, [
        _c("div", { staticClass: "flex-container" }, [
          _c(
            "div",
            { staticClass: "form-group m-b-0", staticStyle: { width: "40%" } },
            [
              _c("input", {
                staticClass: "form-control w-75",
                attrs: {
                  type: "text",
                  placeholder: "Index Page",
                  name: "wwga_siteindex_input",
                  id: "wwga_siteindex_input"
                }
              })
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue":
/*!***************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalConfigurationGeneral_vue_vue_type_template_id_b4616cd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationGeneral.vue?vue&type=template&id=b4616cd4& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=template&id=b4616cd4&");
/* harmony import */ var _WebsWesGlobalConfigurationGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationGeneral.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalConfigurationGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalConfigurationGeneral_vue_vue_type_template_id_b4616cd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalConfigurationGeneral_vue_vue_type_template_id_b4616cd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationGeneral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=template&id=b4616cd4&":
/*!**********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=template&id=b4616cd4& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_template_id_b4616cd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationGeneral.vue?vue&type=template&id=b4616cd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationGeneral.vue?vue&type=template&id=b4616cd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_template_id_b4616cd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationGeneral_vue_vue_type_template_id_b4616cd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);