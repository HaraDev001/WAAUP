(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
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



var permss;

function sendLogDataToServer(n, fromData) {
  if (permss.pcreate == 1 || permss.pwrite == 1) {
    $.ajax({
      url: 'admin.logimgdata.upload',
      type: 'POST',
      data: fromData,
      async: false,
      success: function success(data) {
        // data = JSON.parse(data);
        if (data.msg == "ok") {
          if (data.dbid) {
            var filename = data.filename;
            var size = data.size;
            var style = data.style;
            var iw = "";
            var ih = "";

            if (size != null && size.indexOf('*') > -1) {
              iw = size.split('*')[0];
              ih = size.split('*')[1];
            }

            if (n == 1) {
              if (ih == "" || iw == "") {
                iw = "74";
                ih = "22";
              }

              $('#logoflw').attr('src', '/images/' + filename);
              $('#logoflw').css({
                'width': iw + 'px',
                'height': ih + 'px'
              });
            } else if (n == 2) {
              if (ih == "" || iw == "") {
                iw = "36";
                ih = "32";
              }

              $('#logostar').attr('src', '/images/' + filename);
              $('#logostar').css({
                'width': iw + 'px',
                'height': ih + 'px'
              });
              $('#logostar_s').attr('src', '/images/' + filename);
              $('#logostar_s').css({
                'width': iw + 'px',
                'height': ih + 'px'
              });
            } else if (n == 3) {
              if (ih == "" || iw == "") {
                iw = "36";
                ih = "32";
              }

              $('head link[id="dashboard_icon"]').attr('href', '/images/' + filename);
            }
          } else {
            alert("Error : save in database");
          }
        } else {
          alert(data.message);
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      },
      cache: false,
      contentType: false,
      processData: false
    });
  } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      logoinfo: '',
      pageid: 'system-theme-logo-fav',
      mususu_system_theme_logo: '',
      mu_system: '',
      musu_system_theme: '',
      pgtxt_logo: '',
      btntxt_upload: '',
      pgtxt_image: '',
      pgtxt_size: '',
      pgtxt_imgupcondition: '',
      pgtxt_style: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  created: function created() {// this.logoinfo = nav_module.data.jsonparse(window.Laravel.logoinfo);
  },
  computed: {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmu_system: function cmu_system() {
      return this.mu_system;
    },
    cmususu_system_theme_logo: function cmususu_system_theme_logo() {
      return this.mususu_system_theme_logo;
    },
    cmusu_system_theme: function cmusu_system_theme() {
      return this.musu_system_theme;
    },
    cpgtxt_logo: function cpgtxt_logo() {
      return this.pgtxt_logo;
    },
    cbtntxt_upload: function cbtntxt_upload() {
      return this.btntxt_upload;
    },
    cpgtxt_image: function cpgtxt_image() {
      return this.pgtxt_image;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_imgupcondition: function cpgtxt_imgupcondition() {
      return this.pgtxt_imgupcondition;
    },
    cpgtxt_style: function cpgtxt_style() {
      return this.pgtxt_style;
    },
    cpgtxt_notpermission: function cpgtxt_notpermission() {
      return this.pgtxt_notpermission;
    },
    cpgtxt_notification: function cpgtxt_notification() {
      return this.pgtxt_notification;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        //console.log(obj.hasOwnProperty(key));
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      return this.$store.state.contentchange;
    }
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    /* fav part*/
    var vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.permissionDefinition();
    this.getSiteLogoFiles();
    $("#uploadflw").change(function () {
      if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('.stl_flw_previewpanel').css('background-image', 'url("' + e.target.result + '")');
        };

        reader.readAsDataURL(this.files[0]); // convert to base64 string
      }
    });
    $("#uploadstar").change(function () {
      if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('.stl_star_previewpanel').css('background-image', 'url("' + e.target.result + '")');
        };

        reader.readAsDataURL(this.files[0]); // convert to base64 string
      }
    });
    $("#uploadfavico").change(function () {
      if (this.files && this.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('.stl_favico_previewpanel').css('background-image', 'url("' + e.target.result + '")');
        };

        reader.readAsDataURL(this.files[0]); // convert to base64 string
      }
    });
    $('#stl_frm_flw').submit(function (event) {
      event.preventDefault();
      var formData = new FormData($("#stl_frm_flw")[0]);
      sendLogDataToServer(1, formData);
    });
    $('#stl_frm_star').submit(function (event) {
      event.preventDefault();
      var formData = new FormData($("#stl_frm_star")[0]);
      sendLogDataToServer(2, formData);
    });
    $('#stl_frm_favico').submit(function (event) {
      event.preventDefault();
      var formData = new FormData($("#stl_frm_favico")[0]);
      sendLogDataToServer(3, formData);
    });
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
    PreviewLogoFlw: function PreviewLogoFlw() {
      $("#uploadflw").trigger('click');
    },
    SaveLogoFlw: function SaveLogoFlw() {
      if ($("#uploadflw").val() == "") {
        alert('Please select a file to upload');
        return;
      } else $('#stl_frm_flw').submit();
    },
    PreviewLogoStar: function PreviewLogoStar() {
      $("#uploadstar").trigger('click');
    },
    SaveLogoStar: function SaveLogoStar() {
      if ($("#uploadstar").val() == "") {
        alert('Please select a file to upload');
        return;
      } else $('#stl_frm_star').submit();
    },
    PreviewLogoFavico: function PreviewLogoFavico() {
      $("#uploadfavico").trigger('click');
    },
    SaveLogoFavico: function SaveLogoFavico() {
      if ($("#uploadfavico").val() == "") {
        alert('Please select a file to upload');
        return;
      } else $('#stl_frm_favico').submit();
    },
    getSiteLogoFiles: function getSiteLogoFiles() {
      $.ajax({
        url: 'admin.getSiteLogoFiles',
        data: {
          srv: 'hk'
        },
        //ckd
        type: 'POST',
        success: function success(data) {
          if (data.msg == "ok") {
            var logflw_name = data.logflw_name;
            var logflw_size = data.logflw_size;
            var logflw_style = data.logflw_style;
            var stylelists = data.stylelists; //console.log(stylelists);

            var fiw = "74";
            var fih = "22";

            if (logflw_size != null && logflw_size.indexOf('*') > -1) {
              fiw = logflw_size.split('*')[0];
              fih = logflw_size.split('*')[1];
            }

            var logstar_name = data.logstar_name;
            var logstar_size = data.logstar_size;
            var logstar_style = data.logstar_style;
            var siw = "36";
            var sih = "32";

            if (logstar_size != null && logstar_size.indexOf('*') > -1) {
              siw = logstar_size.split('*')[0];
              sih = logstar_size.split('*')[1];
            }

            var favico_name = data.favico_name;
            var favico_size = data.favico_size;
            var favico_style = data.favico_style;
            var faiw = "36";
            var faih = "32";

            if (favico_size != null && favico_size.indexOf('*') > -1) {
              faiw = favico_size.split('*')[0];
              faih = favico_size.split('*')[1];
            }

            $('.stl_flw_previewpanel').css('background-image', 'url("/images/' + logflw_name + '")');
            $('.stl_star_previewpanel').css('background-image', 'url("/images/' + logstar_name + '")');
            $('.stl_favico_previewpanel').css('background-image', 'url("/images/' + favico_name + '")');
            $('#stl_flw_sz_slt').val(logflw_size); // $('#stl_flw_st_slt').val(logflw_style);

            $('#stl_star_sz_slt').val(logstar_size); // $('#stl_star_st_slt').val(logstar_style);

            $('#stl_favico_sz_slt').val(favico_size);

            if (stylelists.length > 0) {
              $('#stl_flw_st_slt').append('<option value="">Select</option>');
              $('#stl_star_st_slt').append('<option value="">Select</option>');
              $('#stl_favico_st_slt').append('<option value="">Select</option>');

              for (var i = 0; i < stylelists.length; i++) {
                var lst = stylelists[i];
                var selected = "";

                if (logflw_size == lst.size) {
                  selected = "selected";
                  $('#stl_flw_sz_slt').val(lst.size);
                }

                var tag = '<option value="' + lst.size + '"  ' + selected + ' >' + lst.style + '</option>';
                $('#stl_flw_st_slt').append(tag);
              }

              for (var i = 0; i < stylelists.length; i++) {
                var lst = stylelists[i];
                var selected = "";

                if (logstar_size == lst.size) {
                  selected = "selected";
                  $('#stl_star_sz_slt').val(lst.size);
                }

                var tag = '<option value="' + lst.size + '"  ' + selected + ' >' + lst.style + '</option>';
                $('#stl_star_st_slt').append(tag);
              }

              for (var i = 0; i < stylelists.length; i++) {
                var lst = stylelists[i];
                var selected = "";

                if (favico_size == lst.size) {
                  selected = "selected";
                  $('#stl_favico_sz_slt').val(lst.size);
                }

                var tag = '<option value="' + lst.size + '"  ' + selected + ' >' + lst.style + '</option>';
                $('#stl_favico_st_slt').append(tag);
              }
            } else {
              var tag = '<option value="">Empty Style</option>';
              $('#stl_flw_st_slt').html(tag);
              $('#stl_star_st_slt').html(tag);
              $('#stl_favico_st_slt').html(tag);
            }

            $('#stl_flw_st_slt').change(function () {
              var value = $(this).val();
              if (value == '') return;
              var stylename = $("#stl_flw_st_slt option:selected").text();
              $('#stl_flw_sz_slt').val(value);
              var iw = '74';
              var ih = '25';

              if (value.indexOf('*') > -1) {
                iw = value.split('*')[0];
                ih = value.split('*')[1];
              }

              $('#logoflw').css({
                'width': iw + 'px',
                'height': ih + 'px'
              });
              $.ajax({
                method: "POST",
                url: "admin.SeletedChangeLogImgInfo",
                data: {
                  frm_no: 1,
                  server: 'hk' //ckd
                  ,
                  logosize: value,
                  logostyle: stylename
                },
                statusCode: {
                  404: function _() {
                    console.log("Not found page.");
                  }
                },
                success: function success(response) {
                  if (response.msg == "ok" && response.dbid == 1) {} else {
                    alert('Error changing Logo status');
                  }
                },
                error: function error(jqXHR, errdata, errorThrown) {
                  console.log(errdata);
                }
              });
            });
            $('#stl_star_st_slt').change(function () {
              var value = $(this).val();
              if (value == '') return;
              var stylename = $("#stl_star_st_slt option:selected").text();
              $('#stl_star_sz_slt').val(value);
              var iw = '36';
              var ih = '32';

              if (value.indexOf('*') > -1) {
                iw = value.split('*')[0];
                ih = value.split('*')[1];
              }

              $('#logostar').css({
                'width': iw + 'px',
                'height': ih + 'px'
              });
              $.ajax({
                method: "POST",
                url: "admin.SeletedChangeLogImgInfo",
                data: {
                  frm_no: 2,
                  server: 'hk' //ckd
                  ,
                  logosize: value,
                  logostyle: stylename
                },
                statusCode: {
                  404: function _() {
                    console.log("Not found page.");
                  }
                },
                success: function success(response) {
                  if (response.msg == "ok" && response.dbid == 1) {} else {
                    alert('Error changing Logo status');
                  }
                },
                error: function error(jqXHR, errdata, errorThrown) {
                  console.log(errdata);
                }
              });
            });
            $('#stl_favico_st_slt').change(function () {
              var value = $(this).val();
              if (value == '') return;
              var stylename = $("#stl_favico_st_slt option:selected").text();
              $('#stl_favico_sz_slt').val(value);
              var iw = '16';
              var ih = '16';

              if (value.indexOf('*') > -1) {
                iw = value.split('*')[0];
                ih = value.split('*')[1];
              }

              $('head link[id="dashboard_icon"]').css({
                'width': iw + 'px',
                'height': ih + 'px'
              });
              $.ajax({
                method: "POST",
                url: "admin.SeletedChangeLogImgInfo",
                data: {
                  frm_no: 3,
                  server: 'en' //ckd
                  ,
                  logosize: value,
                  logostyle: stylename
                },
                statusCode: {
                  404: function _() {
                    console.log("Not found page.");
                  }
                },
                success: function success(response) {
                  if (response.msg == "ok" && response.dbid == 1) {} else {
                    alert('Error changing Logo status');
                  }
                },
                error: function error(jqXHR, errdata, errorThrown) {
                  console.log(errdata);
                }
              });
            });
          } else {
            alert(data.msg);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.stl_flw_previewpanel,\n.stl_star_previewpanel,\n.stl_favico_previewpanel{\n    width:120px;\n    height:120px;\n    background-color: #efefef;\n    border: 1px solid #efefef;\n    border-radius:8px;\n    cursor: pointer;\n    background-position: center; /* Center the image */\n    background-repeat: no-repeat; /* Do not repeat the image */\n    background-size: contain; /* Resize the background image to cover the entire container */\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemThemeLogo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=template&id=28a7e790&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=template&id=28a7e790& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmususu_system_theme_logo))]),
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
            "\n                       " +
              _vm._s(_vm.cmu_system) +
              "   >>  " +
              _vm._s(_vm.cmusu_system_theme) +
              "   >>  " +
              _vm._s(_vm.cmususu_system_theme_logo) +
              "\n                       "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row m-t-15" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "stl_frm_flw",
                  id: "stl_frm_flw"
                }
              },
              [
                _c("input", {
                  attrs: { type: "hidden", name: "stl_frm_no", value: "1" }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "hidden", name: "server", value: "hk" }
                }),
                _vm._v(" "),
                _c("input", {
                  staticStyle: {
                    visibility: "hidden",
                    width: "1px",
                    height: "1px"
                  },
                  attrs: { type: "file", name: "uploadflw", id: "uploadflw" }
                }),
                _vm._v(" "),
                _c("h6", { staticClass: "card-title m-b-20" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_logo) + " 1")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "colr_pickr_min m-b-20",
                    staticStyle: { padding: "0 100px", "align-items": "center" }
                  },
                  [
                    _c("div", {
                      staticClass: "stl_flw_previewpanel",
                      attrs: { id: "sfl-flw-img-preview" },
                      on: {
                        click: function($event) {
                          return _vm.PreviewLogoFlw()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "flex-grow": "1",
                          height: "120px",
                          "margin-left": "30px"
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            {
                              staticClass: "col-12",
                              staticStyle: { margin: "10px 30px 10px 50px" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "btn btn-outline-light  dash-my-btn-0  lang_tab active p-l-r-30",
                                  attrs: { id: "system-lgup-btn" },
                                  on: {
                                    click: function($event) {
                                      return _vm.SaveLogoFlw()
                                    }
                                  }
                                },
                                [
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.cbtntxt_upload))
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-12",
                              staticStyle: { margin: "15px 30px 10px 50px" }
                            },
                            [
                              _c(
                                "div",
                                { staticStyle: { "font-size": "15px" } },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { color: "#aa0d00" } },
                                    [_vm._v("*")]
                                  ),
                                  _vm._v(
                                    _vm._s(_vm.cpgtxt_imgupcondition) +
                                      "\n                                        "
                                  )
                                ]
                              )
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
                  {
                    staticClass: "colr_pickr_min m-b-20",
                    staticStyle: { padding: "0 100px", "align-items": "center" }
                  },
                  [
                    _c("div", { staticStyle: { width: "130px" } }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_image) + " " + _vm._s(_vm.cpgtxt_size)
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "colr_pickr_min",
                    staticStyle: { padding: "0 100px", "align-items": "center" }
                  },
                  [
                    _c("div", { staticStyle: { width: "130px" } }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_image) +
                          " " +
                          _vm._s(_vm.cpgtxt_style)
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(2)
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", {
            staticStyle: {
              width: "100%",
              height: "3px",
              border: "0",
              "border-top": "1px solid #e6e6e6"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "stl_frm_star",
                  id: "stl_frm_star"
                }
              },
              [
                _c("input", {
                  attrs: { type: "hidden", name: "stl_frm_no", value: "2" }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "hidden", name: "server", value: "hk" }
                }),
                _vm._v(" "),
                _c("input", {
                  staticStyle: {
                    visibility: "hidden",
                    width: "1px",
                    height: "1px"
                  },
                  attrs: { type: "file", name: "uploadstar", id: "uploadstar" }
                }),
                _vm._v(" "),
                _c("h6", { staticClass: "card-title m-b-20" }, [
                  _vm._v("Logo 2")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "colr_pickr_min m-b-20",
                    staticStyle: { padding: "0 100px", "align-items": "center" }
                  },
                  [
                    _c("div", {
                      staticClass: "stl_star_previewpanel",
                      attrs: { id: "sfl-star-img-preview" },
                      on: {
                        click: function($event) {
                          return _vm.PreviewLogoStar()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "flex-grow": "1",
                          height: "120px",
                          "margin-left": "30px"
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            {
                              staticClass: "col-12",
                              staticStyle: { margin: "10px 30px 10px 50px" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "btn btn-outline-light  dash-my-btn-0  lang_tab active p-l-r-30",
                                  attrs: { id: "system-lgup-btn1" },
                                  on: {
                                    click: function($event) {
                                      return _vm.SaveLogoStar()
                                    }
                                  }
                                },
                                [
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.cbtntxt_upload))
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-12",
                              staticStyle: { margin: "15px 30px 10px 50px" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticStyle: { "font-size": "15px" },
                                  attrs: { id: "stfleftcolorpicker_value1" }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { color: "#aa0d00" } },
                                    [_vm._v("*")]
                                  ),
                                  _vm._v(_vm._s(_vm.cpgtxt_imgupcondition))
                                ]
                              )
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
                  {
                    staticClass: "colr_pickr_min m-b-20",
                    staticStyle: { padding: "0 100px", "align-items": "center" }
                  },
                  [
                    _c("div", { staticStyle: { width: "130px" } }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_image) + " " + _vm._s(_vm.cpgtxt_size)
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
                    staticClass: "colr_pickr_min",
                    staticStyle: { padding: "0 100px", "align-items": "center" }
                  },
                  [
                    _c("div", { staticStyle: { width: "130px" } }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_image) +
                          " " +
                          _vm._s(_vm.cpgtxt_style)
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(4)
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", {
            staticStyle: {
              width: "100%",
              height: "3px",
              border: "0",
              "border-top": "1px solid #e6e6e6"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "stl_frm_favico",
                  id: "stl_frm_favico"
                }
              },
              [
                _c("input", {
                  attrs: { type: "hidden", name: "stl_frm_no", value: "3" }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "hidden", name: "server", value: "hk" }
                }),
                _vm._v(" "),
                _c("input", {
                  staticStyle: {
                    visibility: "hidden",
                    width: "1px",
                    height: "1px"
                  },
                  attrs: {
                    type: "file",
                    name: "uploadfavico",
                    id: "uploadfavico"
                  }
                }),
                _vm._v(" "),
                _c("h6", { staticClass: "card-title m-b-20" }, [
                  _vm._v("Favicon")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "colr_pickr_min m-b-20",
                    staticStyle: { padding: "0 100px", "align-items": "center" }
                  },
                  [
                    _c("div", {
                      staticClass: "stl_favico_previewpanel",
                      attrs: { id: "sfl-favico-img-preview" },
                      on: {
                        click: function($event) {
                          return _vm.PreviewLogoFavico()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "flex-grow": "1",
                          height: "120px",
                          "margin-left": "30px"
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            {
                              staticClass: "col-12",
                              staticStyle: { margin: "10px 30px 10px 50px" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "btn btn-outline-light  dash-my-btn-0  lang_tab active p-l-r-30",
                                  attrs: { id: "system-favico-btn1" },
                                  on: {
                                    click: function($event) {
                                      return _vm.SaveLogoFavico()
                                    }
                                  }
                                },
                                [
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.cbtntxt_upload))
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-12",
                              staticStyle: { margin: "15px 30px 10px 50px" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticStyle: { "font-size": "15px" },
                                  attrs: { id: "stfleftcolorpicker_favico" }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { color: "#aa0d00" } },
                                    [_vm._v("*")]
                                  ),
                                  _vm._v(_vm._s(_vm.cpgtxt_imgupcondition))
                                ]
                              )
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
                  {
                    staticClass: "colr_pickr_min m-b-20",
                    staticStyle: { padding: "0 100px", "align-items": "center" }
                  },
                  [
                    _c("div", { staticStyle: { width: "130px" } }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_image) + " " + _vm._s(_vm.cpgtxt_size)
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "colr_pickr_min",
                    staticStyle: { padding: "0 100px", "align-items": "center" }
                  },
                  [
                    _c("div", { staticStyle: { width: "130px" } }, [
                      _vm._v(
                        _vm._s(_vm.cpgtxt_image) +
                          " " +
                          _vm._s(_vm.cpgtxt_style)
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(6)
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ])
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
          id: "system-theme-logo-fav",
          "data-status": "off",
          "data-page-info": "Logo_system-theme-logo"
        }
      },
      [
        _vm._v("\n                          "),
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
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { width: "120px", "margin-left": "65px" } }, [
        _c("input", {
          staticClass: "form-control",
          staticStyle: { width: "100%" },
          attrs: {
            type: "text",
            readonly: "readonly",
            placeholder: "",
            "aria-label": "stl_flw_sz_slt",
            id: "stl_flw_sz_slt",
            name: "stl_flw_sz_slt",
            "aria-describedby": "basic-addon2"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { width: "95%", "margin-left": "65px" } }, [
        _c("select", {
          staticClass: "form-control",
          attrs: { id: "stl_flw_st_slt", name: "stl_flw_st_slt" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { width: "120px", "margin-left": "65px" } }, [
        _c("input", {
          staticClass: "form-control",
          staticStyle: { width: "100%" },
          attrs: {
            type: "text",
            readonly: "readonly",
            placeholder: "",
            "aria-label": "stl_star_sz_slt",
            id: "stl_star_sz_slt",
            name: "stl_star_sz_slt",
            "aria-describedby": "basic-addon2"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { width: "95%", "margin-left": "65px" } }, [
        _c("select", {
          staticClass: "form-control",
          attrs: { id: "stl_star_st_slt", name: "stl_star_st_slt" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { width: "120px", "margin-left": "65px" } }, [
        _c("input", {
          staticClass: "form-control",
          staticStyle: { width: "100%" },
          attrs: {
            type: "text",
            readonly: "readonly",
            placeholder: "",
            "aria-label": "stl_favico_sz_slt",
            id: "stl_favico_sz_slt",
            name: "stl_favico_sz_slt",
            "aria-describedby": "basic-addon2"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { width: "95%", "margin-left": "65px" } }, [
        _c("select", {
          staticClass: "form-control",
          attrs: { id: "stl_favico_st_slt", name: "stl_favico_st_slt" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/system/SystemThemeLogo.vue":
/*!***********************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemThemeLogo.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemThemeLogo_vue_vue_type_template_id_28a7e790___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemThemeLogo.vue?vue&type=template&id=28a7e790& */ "./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=template&id=28a7e790&");
/* harmony import */ var _SystemThemeLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemThemeLogo.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SystemThemeLogo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SystemThemeLogo.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SystemThemeLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemThemeLogo_vue_vue_type_template_id_28a7e790___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SystemThemeLogo_vue_vue_type_template_id_28a7e790___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemThemeLogo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemThemeLogo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemThemeLogo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=template&id=28a7e790&":
/*!******************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=template&id=28a7e790& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_template_id_28a7e790___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemThemeLogo.vue?vue&type=template&id=28a7e790& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeLogo.vue?vue&type=template&id=28a7e790&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_template_id_28a7e790___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeLogo_vue_vue_type_template_id_28a7e790___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);