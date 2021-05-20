(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var pgtxt_selectlanguagesave = "";
var permss;

function colorButtons() {
  var wwga_footbarleftcolorpicker = document.getElementById('wwga_footbarleftcolorpicker');
  var pickerLeft = new ColorPicker(wwga_footbarleftcolorpicker, '#000000');
  wwga_footbarleftcolorpicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa; //console.log(color);

    $('#wwga_footbarleftcolorpicker_value').text(color);
    $('#wwga_footbarleftcolorpicker_val').val(color);
  });
  var wwga_footbarcentcolorpicker = document.getElementById('wwga_footbarcentcolorpicker');
  var pickerCenter = new ColorPicker(wwga_footbarcentcolorpicker, '#000000');
  wwga_footbarcentcolorpicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa; //console.log(color);

    $('#wwga_footbarcentcolorpicker_value').text(color);
    $('#wwga_footbarcentcolorpicker_val').val(color);
  });
  var wwga_footbarrightcolorpicker = document.getElementById('wwga_footbarrightcolorpicker');
  var pickerRight = new ColorPicker(wwga_footbarrightcolorpicker, '#000000');
  wwga_footbarrightcolorpicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa; //console.log(color);

    $('#wwga_footbarrightcolorpicker_value').text(color);
    $('#wwga_footbarrightcolorpicker_val').val(color);
  });
}

var vueOBJ = null;
var wwgfield = 'foot';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalAppearanceFoot",
  components: {
    'editor0': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'editor1': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'editor2': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      pageid: 'webs-wesglobal-appearance-foot-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_appearance: '',
      musususu_webs_wesglobal_appearance_foot: '',
      pgtxt_head: '',
      pgtxt_foot: '',
      pgtxt_topheader: '',
      pgtxt_hide: '',
      pgtxt_location: '',
      pgtxt_logo: '',
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
      pgtxt_dbsaved: '',
      pgtxt_previewpage: '',
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
    cmususu_webs_wesglobal_appearance: function cmususu_webs_wesglobal_appearance() {
      return this.mususu_webs_wesglobal_appearance;
    },
    cmusususu_webs_wesglobal_appearance_foot: function cmusususu_webs_wesglobal_appearance_foot() {
      return this.musususu_webs_wesglobal_appearance_foot;
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
        //console.log(obj.hasOwnProperty(key));
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
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
    pgtxt_selectlanguagesave = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
    colorButtons();
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
                $('#wwga_tranedLang').val(sky);
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
      var lang = $('#wwga_tranedLang').val();
      if (lang == '' || lang == null) lang = "en";else lang = lang.split("-")[0];
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
              part: "HeadFootBar",
              tabstatus: 'foot',
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
              part: "HeadFootBar",
              tabstatus: 'foot',
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
        var tlang = $('#wwga_tranedLang').val();

        if (tlang == '') {
          alert(pgtxt_selectlanguagesave);
          return;
        }

        var pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
        $('input[name="tranedLang"]').val(tlang);
        $('#editcont0').val(this.TinyMCMcontent0);
        $('#editcont1').val(this.TinyMCMcontent1);
        $('#editcont2').val(this.TinyMCMcontent2);
        formData = new FormData($("#wwga_foot_flw")[0]);
        $.ajax({
          url: 'admin.WebsWesGlobalUpload',
          type: 'POST',
          data: formData,
          async: false,
          success: function success(data) {
            // data = JSON.parse(data);
            if (data.msg == "ok") {
              alert(pgtxt_dbsaved);
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
      $('input[name="wwga_footbarleft"]').on("click", function () {
        var v = $(this).val(); //console.log(v);

        if (v == 'normal') {
          $('.barleft_css_part').css('display', 'none');
          $('.barleft_normal_part').css('display', 'block');
        } else if (v == 'css') {
          $('.barleft_css_part').css('display', 'block');
          $('.barleft_normal_part').css('display', 'none');
        }
      });
      /*barcent*/

      $('input[name="wwga_footbar_cent"]').on("click", function () {
        var v = $(this).val(); //console.log(v);

        if (v == 'normal') {
          $('.barcent_css_part').css('display', 'none');
          $('.barcent_normal_part').css('display', 'block');
        } else if (v == 'css') {
          $('.barcent_css_part').css('display', 'block');
          $('.barcent_normal_part').css('display', 'none');
        }
      });
      /*foot*/

      $('#wwga_footbarleft_editbtn').click(function () {
        if (permss.pdelete == 1) {
          $('#wwga_footbarleft_upload').val('');
          $('#wwga_footbarleft_upload').trigger('click');
        } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
      });
      $("#wwga_footbarleft_upload").change(function () {
        if (this.files && this.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $('#wwga_footbarleft_upload_preview').text('');
            $('#wwga_footbarleft_upload_preview').css('background-image', 'url("' + e.target.result + '")');
          };

          reader.readAsDataURL(this.files[0]); // convert to base64 string
        }
      });
      $('#wwga_footbarcent_editbtn').click(function () {
        $('#wwga_footbarcent_upload').val('');
        $('#wwga_footbarcent_upload').trigger('click');
      });
      $("#wwga_footbarcent_upload").change(function () {
        if (this.files && this.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $('#wwga_footbarcent_upload_preview').text('');
            $('#wwga_footbarcent_upload_preview').css('background-image', 'url("' + e.target.result + '")');
          };

          reader.readAsDataURL(this.files[0]); // convert to base64 string
        }
      });
      $('#wwga_footbarright_editbtn').click(function () {
        $('#wwga_footbarright_upload').val('');
        $('#wwga_footbarright_upload').trigger('click');
      });
      $("#wwga_footbarright_upload").change(function () {
        if (this.files && this.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $('#wwga_footbarright_upload_preview').text('');
            $('#wwga_footbarright_upload_preview').css('background-image', 'url("' + e.target.result + '")');
          };

          reader.readAsDataURL(this.files[0]); // convert to base64 string
        }
      });
      $('input[name="wwga_footbarright"]').on("click", function () {
        var v = $(this).val(); //console.log(v);

        if (v == 'normal') {
          $('.barright_css_part').css('display', 'none');
          $('.barright_normal_part').css('display', 'block');
        } else if (v == 'css') {
          $('.barright_css_part').css('display', 'block');
          $('.barright_normal_part').css('display', 'none');
        }
      });
      this.loaddata();
    },
    loaddata: function loaddata() {
      var transedlang = $('#wwga_tranedLang').val();
      $.ajax({
        url: 'admin.getWebsWesGlobalUpload',
        data: {
          tedLang: transedlang,
          wwgfield: wwgfield
        },
        type: 'POST',
        success: function success(data) {
          var list = data.lists; //console.log(list);

          if (list !== '') {
            if (list.barleft == 'normal') {
              $('input[id="wwga_footbarleftnor"]').prop('checked', true);
              $('.barleft_normal_part').css('display', 'block');
              $('.barleft_css_part').css('display', 'none');
            } else if (list.barleft == 'css') {
              $('input[id="wwga_footbarleftcss"]').prop('checked', true);
              $('.barleft_normal_part').css('display', 'none');
              $('.barleft_css_part').css('display', 'block');
            }

            if (list.barleftfontcolor != '') {
              $('#wwga_footbarleftcolorpicker_val').val(list.barleftfontcolor);
              $('#wwga_footbarleftcolorpicker').css('background', list.barleftfontcolor);
              $('#wwga_footbarleftcolorpicker').attr('data-color', list.barleftfontcolor);
              $('#wwga_footbarleftcolorpicker_value').text(list.barleftfontcolor);
            }

            $('#wwga_footbarleft_fontsize_s').val(list.barleftfontsize);
            $('#wwga_footbarleft_fontcont').val(list.barleftfontcont);

            if (list.barleftimg != '') {
              $('#wwga_footbarleft_upload_preview').text('');
              $('#wwga_footbarleft_upload_preview_temp').val(list.slogan);
              $('#wwga_footbarleft_upload_preview').css('background-image', 'url("/uploads/images/waaupimg/' + list.barleftimg + '")');
            }

            if (list.barleftfontlink != '#') $('#wwga_footbarleft_imglink').val(list.barleftfontlink);
            /* bar center*/

            if (list.barcent == 'normal') {
              $('input[id="wwga_footbarcent_nor"]').prop('checked', true);
              $('.barcent_normal_part').css('display', 'block');
              $('.barcent_css_part').css('display', 'none');
            } else if (list.barcent == 'css') {
              $('input[id="wwga_footbarcent_css"]').prop('checked', true);
              $('.barcent_normal_part').css('display', 'none');
              $('.barcent_css_part').css('display', 'block');
            }

            if (list.barcentfontcolor != '') {
              $('#wwga_footbarcentcolorpicker_val').val(list.barcentfontcolor);
              $('#wwga_footbarcentcolorpicker').css('background', list.barcentfontcolor);
              $('#wwga_footbarcentcolorpicker').attr('data-color', list.barcentfontcolor);
              $('#wwga_footbarcentcolorpicker_value').text(list.barcentfontcolor);
            }

            $('#wwga_footbarcent_fontsize_s').val(list.barcentfontsize);
            $('#wwga_footbarcent_fontcont').val(list.barcentfontcont);

            if (list.barcentimg != '') {
              $('#wwga_footbarcent_upload_preview').text('');
              $('#wwga_footbarcent_upload_preview_temp').val(list.barcentimg);
              $('#wwga_footbarcent_upload_preview').css('background-image', 'url("/uploads/images/waaupimg/' + list.barcentimg + '")');
            }

            if (list.barcentfontlink != '#') $('#wwga_footbarcent_imglink').val(list.barcentfontlink);

            if (list.edit0 != '') {
              var edt0 = htmldecodejs(list.edit0);
              vueOBJ.TinyMCMcontent0 = edt0;
            }

            if (list.edit1 != '') {
              var edt1 = htmldecodejs(list.edit1);
              vueOBJ.TinyMCMcontent1 = edt1;
            }

            if (list.edit2 != '') {
              var edt2 = htmldecodejs(list.edit2);
              vueOBJ.TinyMCMcontent2 = edt2;
            }
            /*foot right*/


            if (list.barright == 'normal') {
              $('input[id="wwga_footbarright_nor"]').prop('checked', true);
              $('.barright_normal_part').css('display', 'block');
              $('.barright_css_part').css('display', 'none');
            } else if (list.barright == 'css') {
              $('input[id="wwga_footbarright_css"]').prop('checked', true);
              $('.barright_normal_part').css('display', 'none');
              $('.barright_css_part').css('display', 'block');
            }

            if (list.barrightfontcolor != '') {
              $('#wwga_footbarrightcolorpicker_val').val(list.barrightfontcolor);
              $('#wwga_footbarrightcolorpicker').css('background', list.barrightfontcolor);
              $('#wwga_footbarrightcolorpicker').attr('data-color', list.barrightfontcolor);
              $('#wwga_footbarrightcolorpicker_value').text(list.barrightfontcolor);
            }

            $('#wwga_footbarright_fontsize_s').val(list.barrightfontsize);
            $('#wwga_footbarright_fontcont').val(list.barrightfontcont);

            if (list.barrightimg != '') {
              $('#wwga_footbarright_upload_preview').text('');
              $('#wwga_footbarright_upload_preview_temp').val(list.barrightimg);
              $('#wwga_footbarright_upload_preview').css('background-image', 'url("/uploads/images/waaupimg/' + list.barrightimg + '")');
            }

            if (list.barrightfontlink != '#') $('#wwga_footbarright_imglink').val(list.barrightfontlink);

            if (transedlang != null && transedlang != '') {
              $('.page1_alarm_bar').addClass('active');
              $('.page1_alarm_bar span').text('Save  Appear');
            }
          } else {
            $('.page1_alarm_bar').removeClass('active');
            $('.page1_alarm_bar span').text('No Save No Appear');
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sl-tab-container{\n    display: none;\n}\n.sl-tab-container.active{\n    display: block;\n}\n.ck.ck-editor {\n    width: 100%;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    min-height: 350px !important;\n}\n.apper-top-lang{\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}\n.apper-top-lang div{\n    line-height: 25px;\n    text-align: center;\n}\n.form-check-input.group{\n    width: 16px;height: 16px;border-radius: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.group > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.group.active > div{\n    width: 10px; height: 10px; border-radius: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n#wwga_footbarleft_upload_preview, #wwga_footbarright_upload_preview, #wwga_slogan_upload_preview, #wwga_log_upload_preview{\n    background-repeat: no-repeat;\n    background-size:100% 100%;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=template&id=784d1a76&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=template&id=784d1a76& ***!
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
          _vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_appearance_foot))
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
              _vm._s(_vm.cmusususu_webs_wesglobal_appearance_foot) +
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
        staticStyle: { "margin-top": "25px" },
        attrs: { id: "FootContainer" }
      },
      [
        _c(
          "form",
          {
            attrs: {
              method: "post",
              enctype: "multipart/form-data",
              name: "wwga_foot_flw",
              id: "wwga_foot_flw"
            }
          },
          [
            _c("input", {
              attrs: { type: "hidden", name: "wwgafrm", value: "foot" }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "tranedLang", value: "" }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_footbarleft_upload_preview_temp",
                id: "wwga_footbarleft_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_footbarcent_upload_preview_temp",
                id: "wwga_footbarcent_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "wwga_footbarright_upload_preview_temp",
                id: "wwga_footbarright_upload_preview_temp",
                value: ""
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-20" }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_bar) +
                          "(" +
                          _vm._s(_vm.cpgtxt_left) +
                          ")"
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "d-flex flex-row m-b-20",
                        staticStyle: {
                          padding: "0px 100px",
                          "align-items": "center"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "130px",
                              "margin-left": "20px"
                            }
                          },
                          [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "wwga_footbarleft",
                                id: "wwga_footbarleftnor",
                                value: "normal",
                                checked: ""
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "wwga_footbarleftnor" }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.cpgtxt_normal) +
                                    "\n                                    "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { width: "130px" } }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "wwga_footbarleft",
                              id: "wwga_footbarleftcss",
                              value: "css"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "wwga_footbarleftcss" }
                            },
                            [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.cpgtxt_css) +
                                  "\n                                    "
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
                        staticClass: "barleft_normal_part",
                        staticStyle: { display: "block" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_font))
                            ]),
                            _vm._v(" "),
                            _vm._m(1)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_size)
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
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_content)
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
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_image))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticStyle: { "flex-grow": "1" } }, [
                              _c("div", { staticClass: "flex-container" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "logimag",
                                    attrs: {
                                      id: "wwga_footbarleft_upload_preview"
                                    }
                                  },
                                  [_vm._v("LOGO")]
                                ),
                                _vm._v(" "),
                                _vm._m(4),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "btn btn-outline-light webglogappearbtn",
                                      attrs: { id: "wwga_footbarleft_editbtn" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.cbtntxt_edit))
                                      ])
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
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_image) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_link)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(5)
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "barleft_css_part",
                        staticStyle: { display: "none", "margin-top": "30px" }
                      },
                      [
                        _c("textarea", {
                          staticStyle: { display: "none" },
                          attrs: {
                            name: "editcont0",
                            id: "editcont0",
                            value: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-column m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("editor0", {
                              attrs: {
                                "api-key":
                                  "vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh",
                                "cloud-channel": "5-dev",
                                init: {
                                  id: "00",
                                  height: 250,
                                  plugins: [
                                    "lists link image code table paste help wordcount "
                                  ],
                                  toolbar:
                                    "undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ",
                                  images_upload_handler: _vm.upload_handler0,
                                  init_instance_callback:
                                    _vm.edit_init_callback0
                                }
                              },
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
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-20" }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_bar) +
                          "(" +
                          _vm._s(_vm.cpgtxt_center) +
                          ")"
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "d-flex flex-row m-b-20",
                        staticStyle: {
                          padding: "0px 100px",
                          "align-items": "center"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "130px",
                              "margin-left": "20px"
                            }
                          },
                          [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "wwga_footbar_cent",
                                id: "wwga_footbarcent_nor",
                                value: "normal",
                                checked: ""
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "wwga_footbarcent_nor" }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.cpgtxt_normal) +
                                    "\n                                    "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { width: "130px" } }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "wwga_footbar_cent",
                              id: "wwga_footbarcent_css",
                              value: "css"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "wwga_footbarcent_css" }
                            },
                            [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.cpgtxt_css) +
                                  "\n                                    "
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
                        staticClass: "barcent_normal_part",
                        staticStyle: { display: "block" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_font))
                            ]),
                            _vm._v(" "),
                            _vm._m(6)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_size)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(7)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_content)
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
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_image))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticStyle: { "flex-grow": "1" } }, [
                              _c("div", { staticClass: "flex-container" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "logimag",
                                    attrs: {
                                      id: "wwga_footbarcent_upload_preview"
                                    }
                                  },
                                  [_vm._v("LOGO")]
                                ),
                                _vm._v(" "),
                                _vm._m(9),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "btn btn-outline-light webglogappearbtn",
                                      attrs: { id: "wwga_footbarcent_editbtn" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.cbtntxt_edit))
                                      ])
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
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_image) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_link)
                              )
                            ]),
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
                        staticClass: "barcent_css_part",
                        staticStyle: { display: "none", "margin-top": "30px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-column m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("textarea", {
                              staticStyle: { display: "none" },
                              attrs: {
                                name: "editcont1",
                                id: "editcont1",
                                value: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("editor1", {
                              attrs: {
                                "api-key":
                                  "vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh",
                                "cloud-channel": "5-dev",
                                init: {
                                  id: "01",
                                  height: 250,
                                  plugins: [
                                    "lists link image code table paste help wordcount "
                                  ],
                                  toolbar:
                                    "undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ",
                                  images_upload_handler: _vm.upload_handler1,
                                  init_instance_callback:
                                    _vm.edit_init_callback1
                                }
                              },
                              model: {
                                value: _vm.TinyMCMcontent1,
                                callback: function($$v) {
                                  _vm.TinyMCMcontent1 = $$v
                                },
                                expression: "TinyMCMcontent1"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h6", { staticClass: "card-title m-b-20" }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_bar) +
                          "(" +
                          _vm._s(_vm.cpgtxt_right) +
                          ")"
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "d-flex flex-row m-b-20",
                        staticStyle: {
                          padding: "0px 100px",
                          "align-items": "center"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "130px",
                              "margin-left": "20px"
                            }
                          },
                          [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "wwga_footbarright",
                                id: "wwga_footbarright_nor",
                                value: "normal",
                                checked: ""
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "wwga_footbarright_nor" }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.cpgtxt_normal) +
                                    "\n                                    "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { width: "130px" } }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "wwga_footbarright",
                              id: "wwga_footbarright_css",
                              value: "css"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "wwga_footbarright_css" }
                            },
                            [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.cpgtxt_css) +
                                  "\n                                    "
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
                        staticClass: "barright_normal_part",
                        staticStyle: { display: "block" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_font) + " ")
                            ]),
                            _vm._v(" "),
                            _vm._m(11)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_size)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(12)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_font) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_content)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(13)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(_vm._s(_vm.cpgtxt_image))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticStyle: { "flex-grow": "1" } }, [
                              _c("div", { staticClass: "flex-container" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "logimag",
                                    attrs: {
                                      id: "wwga_footbarright_upload_preview"
                                    }
                                  },
                                  [_vm._v("LOGO")]
                                ),
                                _vm._v(" "),
                                _vm._m(14),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "btn btn-outline-light webglogappearbtn",
                                      attrs: { id: "wwga_footbarright_editbtn" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.cbtntxt_edit))
                                      ])
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
                            staticClass: "d-flex flex-row  m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("div", { staticStyle: { width: "130px" } }, [
                              _vm._v(
                                _vm._s(_vm.cpgtxt_image) +
                                  " " +
                                  _vm._s(_vm.cpgtxt_link)
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(15)
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "barright_css_part",
                        staticStyle: { display: "none", "margin-top": "30px" }
                      },
                      [
                        _c("textarea", {
                          staticStyle: { display: "none" },
                          attrs: {
                            name: "editcont2",
                            id: "editcont2",
                            value: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-column m-b-20",
                            staticStyle: {
                              padding: "0px 100px",
                              "align-items": "center"
                            }
                          },
                          [
                            _c("editor2", {
                              attrs: {
                                "api-key":
                                  "vozqdhfpn1ddjlq31cj4d788tvxdfyyv5sl208xskz86xqoh",
                                "cloud-channel": "5-dev",
                                init: {
                                  id: "02",
                                  height: 250,
                                  plugins: [
                                    "lists link image code table paste help wordcount "
                                  ],
                                  toolbar:
                                    "undo redo | code table | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor | link image ",
                                  images_upload_handler: _vm.upload_handler2,
                                  init_instance_callback:
                                    _vm.edit_init_callback2
                                }
                              },
                              model: {
                                value: _vm.TinyMCMcontent2,
                                callback: function($$v) {
                                  _vm.TinyMCMcontent2 = $$v
                                },
                                expression: "TinyMCMcontent2"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
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
          id: "webs-wesglobal-appearance-foot-fav",
          "data-status": "off",
          "data-page-info": "Foot_webs-wesglobal-appearance-foot"
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
            onerror: "this.src ='';"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { display: "flex" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "wwga_footbarleftcolorpicker_val",
            id: "wwga_footbarleftcolorpicker_val",
            value: "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: {
            width: "70px",
            cursor: "pointer",
            background: "rgb(227, 13, 13)"
          },
          attrs: { id: "wwga_footbarleftcolorpicker", "data-color": "#000000" }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "wwga_footbarleftcolorpicker_value" } }, [
          _vm._v("#000000")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c(
        "div",
        {
          staticClass: "m-r-15",
          staticStyle: { width: "200px" },
          attrs: { id: "wwga_footbarleft_fontsize" }
        },
        [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: {
                id: "wwga_footbarleft_fontsize_s",
                name: "wwga_footbarleft_fontsize_s"
              }
            },
            [
              _c("option", { attrs: { value: "11" } }, [_vm._v("11px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "12" } }, [_vm._v("12px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "14" } }, [_vm._v("14px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "16" } }, [_vm._v("16px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "18" } }, [_vm._v("18px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "20", selected: "selected" } }, [
                _vm._v("20px")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "22" } }, [_vm._v("22px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "24" } }, [_vm._v("24px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "26" } }, [_vm._v("26px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "28" } }, [_vm._v("28px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "30" } }, [_vm._v("30px")])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: { width: "60%" },
        attrs: {
          type: "text",
          id: "wwga_footbarleft_fontcont",
          name: "wwga_footbarleft_fontcont",
          value: "Copyright @WES 2020"
        }
      })
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
          name: "wwga_footbarleft_upload",
          id: "wwga_footbarleft_upload",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: { width: "60%" },
        attrs: {
          type: "text",
          id: "wwga_footbarleft_imglink",
          name: "wwga_footbarleft_imglink",
          placeholder: "Image Link",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { display: "flex" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "wwga_footbarcentcolorpicker_val",
            id: "wwga_footbarcentcolorpicker_val",
            value: "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: {
            width: "70px",
            cursor: "pointer",
            background: "rgb(227, 13, 13)"
          },
          attrs: { id: "wwga_footbarcentcolorpicker", "data-color": "#000000" }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "wwga_footbarcentcolorpicker_value" } }, [
          _vm._v("#000000")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c(
        "div",
        {
          staticClass: "m-r-15",
          staticStyle: { width: "200px" },
          attrs: { id: "wwga_footbarcent_fontsize" }
        },
        [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: {
                id: "wwga_footbarcent_fontsize_s",
                name: "wwga_footbarcent_fontsize_s"
              }
            },
            [
              _c("option", { attrs: { value: "11" } }, [_vm._v("11px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "12" } }, [_vm._v("12px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "14" } }, [_vm._v("14px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "16" } }, [_vm._v("16px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "18" } }, [_vm._v("18px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "20", selected: "selected" } }, [
                _vm._v("20px")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "22" } }, [_vm._v("22px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "24" } }, [_vm._v("24px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "26" } }, [_vm._v("26px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "28" } }, [_vm._v("28px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "30" } }, [_vm._v("30px")])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: { width: "60%" },
        attrs: {
          type: "text",
          id: "wwga_footbarcent_fontcont",
          name: "wwga_footbarcent_fontcont",
          value: "Copyright @WES 2020"
        }
      })
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
          name: "wwga_footbarcent_upload",
          id: "wwga_footbarcent_upload",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: { width: "60%" },
        attrs: {
          type: "text",
          id: "wwga_footbarcent_imglink",
          name: "wwga_footbarcent_imglink",
          placeholder: "Image Link",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { display: "flex" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "wwga_footbarrightcolorpicker_val",
            id: "wwga_footbarrightcolorpicker_val",
            value: "#000000"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: {
            width: "70px",
            cursor: "pointer",
            background: "rgb(227, 13, 13)"
          },
          attrs: { id: "wwga_footbarrightcolorpicker", "data-color": "#000000" }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "wwga_footbarrightcolorpicker_value" } }, [
          _vm._v("#000000")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c(
        "div",
        {
          staticClass: "m-r-15",
          staticStyle: { width: "200px" },
          attrs: { id: "wwga_footbarright_fontsize" }
        },
        [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: {
                id: "wwga_footbarright_fontsize_s",
                name: "wwga_footbarright_fontsize_s"
              }
            },
            [
              _c("option", { attrs: { value: "11" } }, [_vm._v("11px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "12" } }, [_vm._v("12px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "14" } }, [_vm._v("14px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "16" } }, [_vm._v("16px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "18" } }, [_vm._v("18px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "20", selected: "selected" } }, [
                _vm._v("20px")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "22" } }, [_vm._v("22px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "24" } }, [_vm._v("24px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "26" } }, [_vm._v("26px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "28" } }, [_vm._v("28px")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "30" } }, [_vm._v("30px")])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: { width: "60%" },
        attrs: {
          type: "text",
          id: "wwga_footbarright_fontcont",
          name: "wwga_footbarright_fontcont",
          placeholder: "Link your future",
          value: ""
        }
      })
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
          name: "wwga_footbarright_upload",
          id: "wwga_footbarright_upload",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: { width: "60%" },
        attrs: {
          type: "text",
          id: "wwga_footbarright_imglink",
          name: "wwga_footbarright_imglink",
          placeholder: "Image Link",
          value: ""
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue":
/*!*********************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalAppearanceFoot_vue_vue_type_template_id_784d1a76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalAppearanceFoot.vue?vue&type=template&id=784d1a76& */ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=template&id=784d1a76&");
/* harmony import */ var _WebsWesGlobalAppearanceFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalAppearanceFoot.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalAppearanceFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalAppearanceFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalAppearanceFoot_vue_vue_type_template_id_784d1a76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalAppearanceFoot_vue_vue_type_template_id_784d1a76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceFoot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=template&id=784d1a76&":
/*!****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=template&id=784d1a76& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_template_id_784d1a76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalAppearanceFoot.vue?vue&type=template&id=784d1a76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalAppearanceFoot.vue?vue&type=template&id=784d1a76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_template_id_784d1a76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalAppearanceFoot_vue_vue_type_template_id_784d1a76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);