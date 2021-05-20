(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/jsfunc/media_module */ "./resources/vuedir/assets/jsfunc/media_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var preview = '';
var tabstatus = 0;
var vueOBJ = null;

function _initpage() {
  $('#ssb_frontpage_back_upbtn').click(function () {
    $('.Media_directory_files').html("");
    $('#Media_Modal_Search_Text').val("");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID("ssb_frontpage_back_preview", "ssb_frontpage_back_pre");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
    $('#MediaDirectoryModal').modal('show');
  });
  $('#ssb_frontpage_logo_upbtn').click(function () {
    $('.Media_directory_files').html("");
    $('#Media_Modal_Search_Text').val("");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.setImageTagID("ssb_frontpage_logo_preview", "ssb_frontpage_logo_pre");
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getDirectories('/');
    _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.MediaSelectImageModal(vueOBJ);
    $('#MediaDirectoryModal').modal('show');
  });
  var ssb_frontpage_login_font_colorpicker = document.getElementById('ssb_frontpage_login_font_colorpicker');
  var pickercolor = new ColorPicker(ssb_frontpage_login_font_colorpicker, '#ffffff');
  ssb_frontpage_login_font_colorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#ssb_frontpage_login_font_color_value').text(color);
    $('#ssb_frontpage_login_font_color_val').val(color);
  });
  var ssb_frontpage_login_theme_colorpicker = document.getElementById('ssb_frontpage_login_theme_colorpicker');
  var pickerborder = new ColorPicker(ssb_frontpage_login_theme_colorpicker, '#104f8e');
  ssb_frontpage_login_theme_colorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#ssb_frontpage_login_theme_color_value').text(color);
    $('#ssb_frontpage_login_theme_color_val').val(color);
  });
  var ssb_frontpage_login_back_colorpicker = document.getElementById('ssb_frontpage_login_back_colorpicker');
  var pickerbk = new ColorPicker(ssb_frontpage_login_back_colorpicker, '#ffffff');
  ssb_frontpage_login_back_colorpicker.addEventListener('colorChange', function (event) {
    var color = event.detail.color.hexa;
    $('#ssb_frontpage_login_back_color_value').text(color);
    $('#ssb_frontpage_login_back_color_val').val(color);
  });
}

function getLoginSettingData() {
  $.ajax({
    url: 'admin.getSystemSettingBasicLogin',
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.pageinfo != '') {
        var dt = data.pageinfo;
        dt = $.parseJSON(dt);
        $('#ssb_frontpage_back_preview').attr('src', dt.backimg);
        $('#ssb_frontpage_back_pre').val(dt.backimg);
        $('#ssb_frontpage_logo_preview').attr('src', dt.logoimg);
        $('#ssb_frontpage_logo_pre').val(dt.logoimg);
        var ct = decodeURIComponent(dt.tiptxt);
        $('#ssb_frontpage_login_tip').val(ct);
        $('#ssb_frontpage_login_font_color_val').val(dt.fontcolor);
        $('#ssb_frontpage_login_font_color_value').text(dt.fontcolor);
        $('#ssb_frontpage_login_font_colorpicker').css('background', dt.fontcolor);
        $('#ssb_frontpage_login_theme_color_value').text(dt.themecolor);
        $('#ssb_frontpage_login_theme_color_val').val(dt.themecolor);
        $('#ssb_frontpage_login_theme_colorpicker').css('background', dt.themecolor);
        $('#ssb_frontpage_login_back_color_value').text(dt.backcolor);
        $('#ssb_frontpage_login_back_color_val').val(dt.backcolor);
        $('#ssb_frontpage_login_back_colorpicker').css('background', dt.backcolor);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pgtxt_setting: '',
      pgtxt_font: '',
      pgtxt_background: '',
      pgtxt_logo: '',
      btntxt_add: '',
      pgtxt_tip: '',
      pgtxt_color: '',
      btntxt_theme: '',
      pgtxt_back: '',
      pgtxt_fontcolour: '',
      btntxt_edit: '',
      pgtxt_media: '',
      btntxt_search: '',
      pgtxt_dbsaved: '',
      btntxt_savechange: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  computed: {
    cpgtxt_setting: function cpgtxt_setting() {
      return this.pgtxt_setting;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_background: function cpgtxt_background() {
      return this.pgtxt_background;
    },
    cpgtxt_logo: function cpgtxt_logo() {
      return this.pgtxt_logo;
    },
    cpgtxt_tip: function cpgtxt_tip() {
      return this.pgtxt_tip;
    },
    cpgtxt_color: function cpgtxt_color() {
      return this.pgtxt_color;
    },
    cpgtxt_back: function cpgtxt_back() {
      return this.pgtxt_back;
    },
    cbtntxt_theme: function cbtntxt_theme() {
      return this.btntxt_theme;
    },
    cpgtxt_fontcolour: function cpgtxt_fontcolour() {
      return this.pgtxt_fontcolour;
    },
    cpgtxt_media: function cpgtxt_media() {
      return this.pgtxt_media;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_search: function cbtntxt_search() {
      return this.btntxt_search;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
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
    vueOBJ = this;
    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.permissionDefinition();
    this.initpage();
  },
  methods: {
    initpage: function initpage() {
      _initpage();

      getLoginSettingData();
    },
    SavePageContent: function SavePageContent() {
      if (permss.pcreate == 1 || permss.pwrite == 1) {
        var ct = $('#ssb_frontpage_login_tip').val();
        ct = encodeURIComponent(ct);
        $('#ssb_frontpage_login_tip_val').val(ct);
        var formData = new FormData($("#ssb_frontpage_login_frm")[0]);
        $.ajax({
          url: 'admin.setSystemSettingBasicLogin',
          type: 'POST',
          data: formData,
          async: false,
          success: function success(data) {
            if (data.msg == "ok") {
              _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_dbsaved');
            } else alert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          },
          cache: false,
          contentType: false,
          processData: false
        });
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_front_content_list{\n    display: none;\n}\n.page_front_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    height: auto;\n    float: left;\n}\n#addpic_btn{\n    height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n.page_login_tab{\n    width: 150px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-md-12 page_front_content_list active",
          attrs: { id: "frontpage_login" }
        },
        [
          _c("div", { staticClass: "page1_content_content_bar" }, [
            _c(
              "form",
              {
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  name: "ssb_frontpage_login_frm",
                  id: "ssb_frontpage_login_frm"
                }
              },
              [
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: "ssb_frontpage_login_tip_val",
                    id: "ssb_frontpage_login_tip_val",
                    value: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "page1_content_content_title" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_setting))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page1_content_content page2_content_text" },
                  [
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_background))])
                      ]),
                      _vm._v(" "),
                      _vm._m(0),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn page1_custom_btn",
                            staticStyle: {
                              height: "40px",
                              "border-radius": "20px",
                              padding: "0 30px",
                              "margin-right": "15px"
                            },
                            attrs: {
                              type: "button",
                              id: "ssb_frontpage_back_upbtn"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                                "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_logo))])
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn page1_custom_btn",
                            staticStyle: {
                              height: "40px",
                              "border-radius": "20px",
                              padding: "0 30px",
                              "margin-right": "15px"
                            },
                            attrs: {
                              type: "button",
                              id: "ssb_frontpage_logo_upbtn"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.cbtntxt_edit) +
                                "\n                                "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_tip))])
                      ]),
                      _vm._v(" "),
                      _vm._m(2)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("span", [_vm._v(_vm._s(_vm.cpgtxt_fontcolour))])
                      ]),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._m(4)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cbtntxt_theme) +
                              " " +
                              _vm._s(_vm.cpgtxt_color)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(5),
                      _vm._v(" "),
                      _vm._m(6)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row page2_row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.cpgtxt_back) +
                              "  " +
                              _vm._s(_vm.cpgtxt_color)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(7),
                      _vm._v(" "),
                      _vm._m(8)
                    ])
                  ]
                )
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { "text-align": "right", "margin-bottom": "15px" } },
      [
        _c(
          "div",
          {
            staticClass: "btn btn-outline-light  dash-my-btn-0 active p-l-r-30",
            attrs: { id: "add_domainBtn" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.SavePageContent()
              }
            }
          },
          [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_savechange))])]
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
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "ssb_frontpage_back_pre",
            id: "ssb_frontpage_back_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "ssb_frontpage_back",
            id: "ssb_frontpage_back",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "ssb_frontpage_back_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticStyle: { display: "none" } }, [
        _c("input", {
          attrs: {
            type: "hidden",
            name: "ssb_frontpage_logo_pre",
            id: "ssb_frontpage_logo_pre",
            value: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "file",
            name: "ssb_frontpage_logo",
            id: "ssb_frontpage_logo",
            value: ""
          }
        })
      ]),
      _vm._v(" "),
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: {
          src: "/images/icons/image_tp.png",
          alt: "",
          id: "ssb_frontpage_logo_preview",
          onerror: "this.src ='/images/noimg.png';"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("textarea", {
        staticClass: "form-control border-input-text",
        staticStyle: { "min-height": "60px" },
        attrs: {
          placeholder: "",
          name: "ssb_frontpage_login_tip",
          id: "ssb_frontpage_login_tip",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "ssb_frontpage_login_font_color_val",
          id: "ssb_frontpage_login_font_color_val",
          value: "#ffffff"
        }
      }),
      _vm._v(" "),
      _c("div", {
        staticStyle: {
          border: "1px solid #aaaaaa",
          width: "70px",
          height: "75%",
          cursor: "pointer",
          background: "rgb(227, 13, 13)"
        },
        attrs: {
          id: "ssb_frontpage_login_font_colorpicker",
          "data-color": "#ffffff"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { attrs: { id: "ssb_frontpage_login_font_color_value" } }, [
        _vm._v("#ffffff")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "ssb_frontpage_login_theme_color_val",
          id: "ssb_frontpage_login_theme_color_val",
          value: "#104f8e"
        }
      }),
      _vm._v(" "),
      _c("div", {
        staticStyle: {
          border: "1px solid #aaaaaa",
          width: "70px",
          height: "75%",
          cursor: "pointer",
          background: "rgb(227, 13, 13)"
        },
        attrs: {
          id: "ssb_frontpage_login_theme_colorpicker",
          "data-color": "#104f8e"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { attrs: { id: "ssb_frontpage_login_theme_color_value" } }, [
        _vm._v("#104f8e")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("input", {
        attrs: {
          type: "hidden",
          name: "ssb_frontpage_login_back_color_val",
          id: "ssb_frontpage_login_back_color_val",
          value: "#ffffff"
        }
      }),
      _vm._v(" "),
      _c("div", {
        staticStyle: {
          border: "1px solid #aaaaaa",
          width: "70px",
          height: "75%",
          cursor: "pointer",
          background: "rgb(227, 13, 13)"
        },
        attrs: {
          id: "ssb_frontpage_login_back_colorpicker",
          "data-color": "#ffffff"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { attrs: { id: "ssb_frontpage_login_back_color_value" } }, [
        _vm._v("#ffffff")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue":
/*!*************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe& */ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe&");
/* harmony import */ var _SystemSetBasicFrontPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SystemSetBasicFrontPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe&":
/*!********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue?vue&type=template&id=5c2090fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasicFrontPagesLogin_vue_vue_type_template_id_5c2090fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);