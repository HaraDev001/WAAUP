(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*  import CKEditor from '@ckeditor/ckeditor5-build-classic';*/





var vueOBJ = null;
var permss;
var pgtxt_selectlanguagesave = "";

function mainloaddata(whisfrm) {
  var transedlang = $('#wwga_tranedLang').val();
  /*if(transedlang=='')
      return;*/

  var pgtxt_navigation = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_navigation');
  var pgtxt_label = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_label');
  var btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
  var btntxt_remove = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_remove');
  var pgtxt_link = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link'); //console.log(pgtxt_navigation);
  //$('#mainmenu-container').html('');

  $.ajax({
    url: 'admin.frontGetMenu',
    data: {
      tedLang: transedlang,
      wwgfield: whisfrm
    },
    type: 'POST',
    async: true,
    success: function success(data) {
      var menulist = data.list;
      var ts = data.trans;
      var pgtxt_navigation = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_navigation');
      var pgtxt_label = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_label');
      var pgtxt_link = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
      var btntxt_remove = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_remove');

      if (menulist !== null && menulist !== '') {
        var keys = Object.keys(menulist);
        var tag = '';

        for (var i = 0; i < keys.length; i++) {
          var mcont = keys[i];
          var link = decodeURIComponent(menulist[keys[i]]);
          var style = "margin-top:25px";
          if (i == 0) style = "";
          var tagid = "fmenuarrow_" + i;
          var subid = "fmenusubcont_" + i;
          var change = "fmenucg_" + i;
          var remove = "fmenurv_" + i;
          var fmenu_nave_cont = "fmenunavelb_" + i;
          var fmenu_nave_lk = "fmenunavelk_" + i;
          var itemcontainer = 'item-container-' + i;
          tag += ' <div class="d-flex flex-column" id="' + itemcontainer + '" style="width:50%; border: 1px solid #e4e0e0;border-radius: 20px;' + style + '">';
          tag += ' <div class="d-flex flex-row justify-content-between mainmenu-item-container" >';
          tag += '<div>' + mcont + '</div>';
          tag += '<div></div>';
          tag += '<div style="cursor: pointer" id="' + tagid + '"><i class="fas fa-caret-down"></i></div>';
          tag += '</div>';
          tag += '<div class="mainmenu-item-container-sub" id="' + subid + '">';
          tag += '<div class="d-flex flex-row justify-content-start">';
          tag += '<div class="data-ajax" data-ajax="pgtxt_navigation,pgtxt_label" style="flex-grow: 1;width: 100px">' + pgtxt_navigation + pgtxt_label + '</div>';
          tag += '<div style="flex-grow: 6">';
          tag += '<input class="form-control form-control-sm" type="text" name="cont[]" data-cont="' + mcont + '" id="' + fmenu_nave_cont + '" placeholder="" value="' + mcont + '" >';
          tag += '</div>';
          tag += '</div>';
          tag += ' <div class="d-flex flex-row justify-content-start m-t-15">';
          tag += '<div class="data-ajax" data-ajax="pgtxt_link" style="flex-grow: 1;width: 100px">' + pgtxt_link + '</div>';
          tag += '<div style="flex-grow: 6">';
          tag += '<input class="form-control form-control-sm data-ajax" type="text" name="link[]" data-ajax="pgtxt_link" data-cont="' + link + '"  id="' + fmenu_nave_lk + '" placeholder="' + pgtxt_link + '" value="' + link + '">';
          tag += '</div>';
          tag += '</div>';
          tag += '<div class="d-flex flex-row justify-content-end m-t-15">';
          /* tag += '<div class="btn btn-outline-light  dash-my-btn-0  m-r-15" style="padding: 10px 20px;">';
           tag += '<span class="m-l-10" data-id="' + i + '" id="' + change + '">'+btntxt_change+'</span>';
           tag += '</div>';*/

          tag += '<div class="btn btn-outline-light  dash-my-btn-0" data-id="' + i + '" id="' + remove + '" style="padding: 10px 20px;">';
          tag += '<span class="data-ajax m-l-10" data-ajax="btntxt_remove">' + btntxt_remove + '</span>';
          tag += '</div>';
          tag += '</div>';
          tag += '</div>';
          tag += '</div>';
        }

        $('#mainmenu-container').html(tag);
        $('div[id^="fmenuarrow_"]').click(function () {
          var idstr = $(this).attr('id');
          var id = idstr.split('_')[1];

          if ($('#fmenusubcont_' + id + '').hasClass('active')) {
            $('#fmenusubcont_' + id + '').removeClass('active');
          } else $('#fmenusubcont_' + id + '').addClass('active');
        });
        $('div[id^="fmenurv_"]').click(function () {
          if (permss.pdelete == 1) {
            var id = $(this).attr('data-id');
            var itemcontainer = 'item-container-' + id;
            $('#' + itemcontainer).remove();
          } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        });

        if (transedlang != null && transedlang != '') {
          $('.page1_alarm_bar').addClass('active');
          $('.page1_alarm_bar span').text('Save  Appear');
        }
      } else {
        $('#mainmenu-container').html('');
        $('.page1_alarm_bar').removeClass('active');
        $('.page1_alarm_bar span').text('No Save No Appear');
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function hidenModel() {
  $('#wwgm-menucont').val('');
  $('#wwgm-menulink').val('');
  $("#myMenuAddModal").modal('hide');
}

var wwgfield = 'mainmenu';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalMenusMain",
  components: {
    'editor0': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'editor1': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'editor2': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      pageid: 'webs-wesglobal-menus-main-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_menus: '',
      musususu_webs_wesglobal_menus_main: '',
      mususu_mainmenu: '',
      mususu_footmenu: '',
      btntxt_add: '',
      pgtxt_font: '',
      pgtxt_content: '',
      pgtxt_link: '',
      pgtxt_createmenu: '',
      pgtxt_menu: '',
      pgtxt_normal: '',
      pgtxt_css: '',
      pgtxt_fontcolour: '',
      pgtxt_size: '',
      pgtxt_title: '',
      pgtxt_icon: '',
      btntxt_edit: '',
      pgtxt_news: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_translation: '',
      pgtxt_navigation: '',
      pgtxt_label: '',
      btntxt_change: '',
      btntxt_remove: '',
      pgtxt_nosavenoappear: '',
      pgtxt_dbsaved: '',
      pgtxt_releasesuccess: '',
      pgtxt_selectlanguagesave: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      TinyMCMcontent0: '',
      TinyMCMcontent1: '',
      TinyMCMcontent2: ''
    };
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  computed: {
    cmususu_webs_wesglobal_menus: function cmususu_webs_wesglobal_menus() {
      return this.mususu_webs_wesglobal_menus;
    },
    cmusususu_webs_wesglobal_menus_main: function cmusususu_webs_wesglobal_menus_main() {
      return this.musususu_webs_wesglobal_menus_main;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
    },
    cmususu_mainmenu: function cmususu_mainmenu() {
      return this.mususu_mainmenu;
    },
    cmususu_footmenu: function cmususu_footmenu() {
      return this.mususu_footmenu;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_link: function cpgtxt_link() {
      return this.pgtxt_link;
    },
    cpgtxt_createmenu: function cpgtxt_createmenu() {
      return this.pgtxt_createmenu;
    },
    cpgtxt_menu: function cpgtxt_menu() {
      return this.pgtxt_menu;
    },
    cpgtxt_normal: function cpgtxt_normal() {
      return this.pgtxt_normal;
    },
    cpgtxt_css: function cpgtxt_css() {
      return this.pgtxt_css;
    },
    cpgtxt_fontcolour: function cpgtxt_fontcolour() {
      return this.pgtxt_fontcolour;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_icon: function cpgtxt_icon() {
      return this.pgtxt_icon;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cpgtxt_news: function cpgtxt_news() {
      return this.pgtxt_news;
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
    cpgtxt_nosavenoappear: function cpgtxt_nosavenoappear() {
      return this.pgtxt_nosavenoappear;
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
    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.permissionDefinition();
    pgtxt_selectlanguagesave = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
    this.initpage();
    this.getWWGStoredLang();
  },
  methods: {
    /* fav part */
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list !== null && list !== '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
      /* fav part*/

    },
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getWWGStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          var stored_langs = response.data.langlist;

          if (stored_langs != '') {
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
                $('#wwga_tranedLang').val(sky);
                if (wwgfield == 'mainmenu') mainloaddata(wwgfield);else footloaddata(wwgfield);
              }
            });
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },

    /*fav part*/
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
    edit_init_callback1: function edit_init_callback1() {
      $('.tox-statusbar').css('display', 'none');
    },
    upload_handler1: function upload_handler1(blobInfo, success, failure, progress) {
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
        } //$('#wwga_footbarleft_upload_preview_temp').val(json.filename);


        success(json.location);
      };

      xhr.onerror = function () {
        failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    },
    edit_init_callback2: function edit_init_callback2() {
      $('.tox-statusbar').css('display', 'none');
    },
    upload_handler2: function upload_handler2(blobInfo, success, failure, progress) {
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
    initpage: function initpage() {
      vueOBJ = this;
      wwgfield = 'mainmenu';
      $('#mainmenu-add-btn').click(function () {
        if (permss.pcreate == 1) {
          $("#myMenuAddModal").modal('show');
        } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
      });
      /*real menu add*/

      $('#wwgm-model-add').click(function () {
        var transedlang = $('#wwga_tranedLang').val();

        if (transedlang == '') {
          alert('Please Select translate language!');
          hidenModel();
          return;
        }

        var cont = $.trim($('#wwgm-menucont').val());
        var link = $.trim($('#wwgm-menulink').val());

        if (cont == '') {
          alert('Please enter content of Menu!');
          return;
        }

        if (link == '') {
          alert('Please enter link of Menu!');
          return;
        }

        var pgtxt_navigation = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_navigation');
        var pgtxt_label = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_label');
        var btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
        var btntxt_remove = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_remove');
        var pgtxt_link = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_link');
        var i = 0;
        $('input[name^="cont"]').each(function () {
          i++;
        });
        var style = "margin-top:25px";
        i = i - 1;
        if (i == 0) style = "";
        var tagid = "fmenuarrow_" + i;
        var subid = "fmenusubcont_" + i;
        var change = "fmenucg_" + i;
        var remove = "fmenurv_" + i;
        var fmenu_nave_cont = "fmenunavelb_" + i;
        var fmenu_nave_lk = "fmenunavelk_" + i;
        var itemcontainer = 'item-container-' + i;
        var tag = '';
        tag += ' <div class="d-flex flex-column" id="' + itemcontainer + '" style="width:50%; border: 1px solid #e4e0e0;border-radius: 20px;' + style + '">';
        tag += ' <div class="d-flex flex-row justify-content-between mainmenu-item-container" >';
        tag += '<div>' + cont + '</div>';
        tag += '<div></div>';
        tag += '<div style="cursor: pointer" id="' + tagid + '"><i class="fas fa-caret-down"></i></div>';
        tag += '</div>';
        tag += '<div class="mainmenu-item-container-sub" id="' + subid + '">';
        tag += '<div class="d-flex flex-row justify-content-start">';
        tag += '<div class="data-ajax" data-ajax="pgtxt_navigation,pgtxt_label" style="flex-grow: 1;width: 100px">' + pgtxt_navigation + pgtxt_label + '</div>';
        tag += '<div style="flex-grow: 6">';
        tag += '<input class="form-control form-control-sm" type="text" name="cont[]" data-cont="' + cont + '" id="' + fmenu_nave_cont + '" placeholder="" value="' + cont + '" >';
        tag += '</div>';
        tag += '</div>';
        tag += ' <div class="d-flex flex-row justify-content-start m-t-15">';
        tag += '<div class="data-ajax" data-ajax="pgtxt_link" style="flex-grow: 1;width: 100px">' + pgtxt_link + '</div>';
        tag += '<div style="flex-grow: 6">';
        tag += '<input class="data-ajax form-control form-control-sm" data-ajax="pgtxt_link" type="text" name="link[]" data-cont="' + link + '"  id="' + fmenu_nave_lk + '" placeholder="' + pgtxt_link + '" value="' + link + '">';
        tag += '</div>';
        tag += '</div>';
        tag += '<div class="d-flex flex-row justify-content-end m-t-15">';
        /* tag += '<div class="btn btn-outline-light  dash-my-btn-0  m-r-15" style="padding: 10px 20px;">';
         tag += '<span class="m-l-10" data-id="' + i + '" id="' + change + '">'+btntxt_change+'</span>';
         tag += '</div>';*/

        tag += '<div class="btn btn-outline-light  dash-my-btn-0" data-id="' + i + '" id="' + remove + '" style="padding: 10px 20px;">';
        tag += '<span class="data-ajax m-l-10" data-ajax="btntxt_remove">' + btntxt_remove + '</span>';
        tag += '</div>';
        tag += '</div>';
        tag += '</div>';
        tag += '</div>';
        $('#mainmenu-container').append(tag);
        $('div[id^="fmenuarrow_"]').click(function () {
          var idstr = $(this).attr('id');
          var id = idstr.split('_')[1];

          if ($('#fmenusubcont_' + id + '').hasClass('active')) {
            $('#fmenusubcont_' + id + '').removeClass('active');
          } else $('#fmenusubcont_' + id + '').addClass('active');
        });
        $('div[id^="fmenurv_"]').click(function () {
          if (permss.pdelete == 1) {
            var id = $(this).attr('data-id');
            var itemcontainer = 'item-container-' + id;
            $('#' + itemcontainer).remove();
          } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        });
        hidenModel();
      });
      mainloaddata(wwgfield);
    } //initpage
    ,
    SavePageContent: function SavePageContent() {
      if (permss.pwrite == 1) {
        var tlang = $('#wwga_tranedLang').val();

        if (tlang == '') {
          alert(pgtxt_selectlanguagesave);
          return;
        }

        var pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved'); // encodeURIComponent ckdckd

        $('input[name="tranedLang"]').val(tlang);
        var formData = '';
        var vobj = this;
        var url = '';
        $('input[name^="link"]').each(function () {
          var surl = $.trim($(this).val());
          surl = surl.replace(/(\s*)/g, '');
          surl = encodeURIComponent(surl);
          $(this).val(surl);
        });
        formData = new FormData($("#wwgm_mainmenu_frm")[0]);
        url = 'admin.frontAddMenu';
        $.ajax({
          url: url,
          type: 'POST',
          data: formData,
          async: true,
          success: function success(data) {
            // data = JSON.parse(data);
            if (data.msg == "ok") {
              mainloaddata(wwgfield);
              setTimeout(alert(pgtxt_dbsaved), 500); //alert('Sucess save in Database');
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
    PagePreview: function PagePreview() {
      $("#previewModalModalbody").html('');
      var iframeH = $(window).height() - 100;
      var lang = $('#wwga_tranedLang').val();
      if (lang == '') lang = "en";else lang = lang.split("-")[0];
      $("#previewModalModalbody").html('<iframe src="/' + lang + '/preview" style="border:none;width:100%; height: ' + iframeH + 'px;" title="preview"></iframe>');
      $("#previewModal").modal('show');
    },
    PageRelease: function PageRelease() {
      if (permss.pwrite == 1) {
        var tlang = $('#wwga_tranedLang').val();

        if (tlang == '') {
          alert(pgtxt_selectlanguagesave);
          return;
        }

        var pgtxt_releasesuccess = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_releasesuccess');
        var pgtxt_release = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_release');

        if (window.confirm(pgtxt_release)) {
          $.ajax({
            url: 'admin.websGlobalFrontPageRelease',
            type: 'POST',
            data: {
              trans: tlang,
              part: "mainmenu",
              tabstatus: -1,
              release: 1
            },
            success: function success(data) {
              if (data.msg == "ok") {
                alert(pgtxt_releasesuccess);
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
              trans: tlang,
              part: "mainmenu",
              tabstatus: -1,
              release: 0
            },
            success: function success(data) {
              if (data.msg == "ok") {
                alert('Success Release Page');
              } else alert(data.msg);
            },
            error: function error(jqXHR, errdata, errorThrown) {
              console.log(errdata);
            }
          });
        }
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sl-tab-container{\n    display: none;\n}\n.sl-tab-container.active{\n    display: block;\n}\n.apper-top-lang{\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}\n.apper-top-lang div{\n  line-height: 25px;\n    text-align: center;\n}\n.form-check-input.group{\n    width: 16px;height: 16px;border-radius: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.group > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.group.active > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n#wwgm_footbarleft_upload_preview{\n    background-repeat: no-repeat;\n    background-size:100% 100%;\n}\n.mainmenu-item-container{\n    width: 100%;line-height: 30px;padding: 0 20px;-webkit-box-align: baseline;-ms-flex-align: baseline;align-items: baseline;\n}\n.mainmenu-item-container-sub{\n    width: 100%;\n    line-height: 30px;\n    padding:20px;\n    border-top: 1px solid #e4e4e4;\n    display: none\n}\n.mainmenu-item-container-sub.active{\n    width: 100%;\n    line-height: 30px;\n    padding:20px;\n    border-top: 1px solid #e4e4e4;\n    display: block;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    min-height: 350px !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=template&id=44e39d0e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=template&id=44e39d0e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_menus_main))]),
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
              _vm._s(_vm.cmususu_webs_wesglobal_menus) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_menus_main) +
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
          _c("input", {
            attrs: {
              type: "hidden",
              name: "wwga_tranedLang",
              id: "wwga_tranedLang",
              value: ""
            }
          }),
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
                attrs: { id: "wwgm_save" },
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
        attrs: { id: "MainMenuContainer" }
      },
      [
        _c(
          "form",
          {
            attrs: {
              method: "post",
              enctype: "multipart/form-data",
              name: "wwgm_mainmenu_frm",
              id: "wwgm_mainmenu_frm"
            }
          },
          [
            _c("input", {
              attrs: { type: "hidden", name: "wwgafrm", value: "mainmenu" }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "tranedLang", value: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card border-0 m-b-10 text-right" }, [
                  _c("div", [
                    _c(
                      "div",
                      {
                        staticClass:
                          "btn btn-outline-light  dash-my-btn-0 active p-l-r-30",
                        attrs: { id: "mainmenu-add-btn" }
                      },
                      [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "myMenuAddModal" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered modal-sm",
          staticStyle: { "min-width": "450px!important" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h4",
                {
                  staticClass: "modal-title",
                  staticStyle: {
                    color: "#055ada",
                    "font-size": "17px",
                    "font-weight": "800",
                    "padding-top": "10px",
                    "padding-left": "10px"
                  }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_createmenu))]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticStyle: {
                    display: "none",
                    padding: "5px 10px",
                    "border-radius": "20px"
                  },
                  attrs: { id: "sfi_alert" }
                },
                [_vm._v("Create Menu area.")]
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
                attrs: { id: "myMenuAddModalbody" }
              },
              [
                _c("div", { staticClass: "panel", attrs: { id: "tab1" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "row",
                      staticStyle: { "padding-bottom": "10px" }
                    },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticStyle: { margin: "10px 10px 0px 10px" } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "row",
                              staticStyle: { padding: "10px" }
                            },
                            [
                              _c("div", { staticClass: "col-md-1" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticStyle: {
                                        "margin-top": "8px",
                                        color: "#666",
                                        width: "100px"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.cpgtxt_font) +
                                          _vm._s(_vm.cpgtxt_content)
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(3),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-1" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticStyle: {
                                        "margin-top": "8px",
                                        color: "#666",
                                        width: "100px"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.cpgtxt_link))]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(4)
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
                          attrs: { id: "wwgm-model-add" }
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
    ]),
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
                        staticStyle: {
                          color: "#242424",
                          "font-size": "15px",
                          margin: "0 auto"
                        }
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
          id: "webs-wesglobal-menus-main-fav",
          "data-status": "off",
          "data-page-info": "Main_webs-wesglobal-menus-main"
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
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "card m-t-10" }, [
        _c("div", {
          staticClass: "card-body",
          attrs: { id: "mainmenu-container" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", {
        staticClass: "form-group m-b-0",
        staticStyle: { padding: "1px 0px 0px 0px", "font-family": "SimHei" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-11", staticStyle: { "padding-left": "62px" } },
      [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: { width: "300px" },
            attrs: {
              type: "text",
              name: "cont[]",
              placeholder: "",
              "aria-label": "wwgm-menucont",
              id: "wwgm-menucont",
              "aria-describedby": "basic-addon2"
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
    return _c(
      "div",
      { staticClass: "col-md-11", staticStyle: { "padding-left": "62px" } },
      [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: { width: "300px" },
            attrs: {
              type: "text",
              name: "link[]",
              placeholder: "",
              "aria-label": "wwgm-menulink",
              id: "wwgm-menulink",
              "aria-describedby": "basic-addon2"
            }
          })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue":
/*!****************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalMenusMain_vue_vue_type_template_id_44e39d0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalMenusMain.vue?vue&type=template&id=44e39d0e& */ "./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=template&id=44e39d0e&");
/* harmony import */ var _WebsWesGlobalMenusMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalMenusMain.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalMenusMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalMenusMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalMenusMain_vue_vue_type_template_id_44e39d0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalMenusMain_vue_vue_type_template_id_44e39d0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMenusMain.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=template&id=44e39d0e&":
/*!***********************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=template&id=44e39d0e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_template_id_44e39d0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMenusMain.vue?vue&type=template&id=44e39d0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMenusMain.vue?vue&type=template&id=44e39d0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_template_id_44e39d0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMenusMain_vue_vue_type_template_id_44e39d0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);