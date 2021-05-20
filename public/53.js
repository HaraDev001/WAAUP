(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=script&lang=js& ***!
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



var permss;

function colorButtons() {
  var stfleftcolorpicker = document.getElementById('stfleftcolorpicker');
  var pickerLeft = new ColorPicker(stfleftcolorpicker, '#000000');
  stfleftcolorpicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa; //console.log(color);

    $('#stfleftcolorpicker_value').text(color);
  });
  var stfcentercolorpicker = document.getElementById('stfcentercolorpicker');
  var pickerCenter = new ColorPicker(stfcentercolorpicker, '#000000');
  stfcentercolorpicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa; //console.log(color);

    $('#stfcentercolorpicker_value').text(color);
  });
  var stfrightcolorpicker = document.getElementById('stfrightcolorpicker');
  var pickerRight = new ColorPicker(stfrightcolorpicker, '#000000');
  stfrightcolorpicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa; //console.log(color);

    $('#stfrightcolorpicker_value').text(color);
  });
}

var leftmaxtext = 3;
var centmaxtext = 3;
var rightmaxtext = 3;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pageid: 'system-theme-foot-fav',
      musu_system_theme_foot: '',
      mu_system: '',
      musu_system_theme: '',
      pgtxt_style: '',
      pgtxt_left: '',
      pgtxt_font: '',
      pgtxt_color: '',
      pgtxt_size: '',
      pgtxt_content: '',
      pgtxt_center: '',
      pgtxt_right: '',
      btntxt_savechange: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  created: function created() {},
  computed: {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmusu_system_theme_foot: function cmusu_system_theme_foot() {
      return this.musu_system_theme_foot;
    },
    cmu_system: function cmu_system() {
      return this.mu_system;
    },
    cmusu_system_theme: function cmusu_system_theme() {
      return this.musu_system_theme;
    },
    cpgtxt_style: function cpgtxt_style() {
      return this.pgtxt_style;
    },
    cpgtxt_left: function cpgtxt_left() {
      return this.pgtxt_left;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_color: function cpgtxt_color() {
      return this.pgtxt_color;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_center: function cpgtxt_center() {
      return this.pgtxt_center;
    },
    cpgtxt_right: function cpgtxt_right() {
      return this.pgtxt_right;
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
    $("#stfleftfontcont, #stfcenterfontcont, #stfrightfontcont").on("keyup", function () {
      var str = $.trim($(this).val());
      var len = str.length;
      var objid = $(this).attr("id");

      if (objid == 'stfleftfontcont') {
        if (len > leftmaxtext) {
          alert('Cannot enter text because it has more than the specified number.');
          var astr = str.substr(0, leftmaxtext);
          $(this).val(astr);
        }
      } else if (objid == 'stfcenterfontcont') {
        if (len > centmaxtext) {
          alert('Cannot enter text because it has more than the specified number.');
          var astr = str.substr(0, centmaxtext);
          $(this).val(astr);
        }
      } else if (objid == 'stfrightfontcont') {
        if (len > rightmaxtext) {
          alert('Cannot enter text because it has more than the specified number.');
          var astr = str.substr(0, rightmaxtext);
          $(this).val(astr);
        }
      }
    });
    colorButtons();
    this.getfootstyle();
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
    getfootstyle: function getfootstyle() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.stf_getfootstyle').then(function (response) {
        var msg = response.data.msg; //console.log(type);

        if (msg === "ok") {
          var list = response.data.list; //console.log(list.centcont);

          if (list !== null && list !== '') {
            $('#stfleftcolorpicker_value').text(list.leftclr);
            $('#stfleftcolorpicker').css({
              'background': list.leftclr
            }); //#666666

            $('#stfleftfontsize_s option[value="' + list.leftsize + '"]').attr("selected", "selected");
            if (list.leftcont == null) $('#stfleftfontcont').val('');else $('#stfleftfontcont').val(list.leftcont);
            $('#stfcentercolorpicker_value').text(list.centclr);
            $('#stfcentercolorpicker').css({
              'background': list.centclr
            }); //#666666

            $('#stfcenterfontsize_s option[value="' + list.centsize + '"]').attr("selected", "selected");
            if (list.centcont == null) $('#stfcenterfontcont').val('');else $('#stfcenterfontcont').val(list.centcont);
            $('#stfrightcolorpicker_value').text(list.rightclr);
            $('#stfrightcolorpicker').css({
              'background': list.rightclr
            }); //#666666

            $('#stfrightfontsize_s option[value="' + list.rightsize + '"]').attr("selected", "selected");
            if (list.rightcont == null) $('#stfrightfontcont').val('');else $('#stfrightfontcont').val(list.rightcont);
            leftmaxtext = list.leftmaxtext;
            centmaxtext = list.centmaxtext;
            rightmaxtext = list.rightmaxtext; //alert(leftmaxtext);
          }
        } else {
          console.log(msg);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    Savefooterstyles: function Savefooterstyles() {
      if (permss.pcreate == 1 || permss.pwrite == 1) {
        var stfleftcolorpicker_value = $('#stfleftcolorpicker_value').text();
        var stfleftfontsize_s = $('#stfleftfontsize_s').val();
        var stfleftfontcont = $('#stfleftfontcont').val();
        var stfcentercolorpicker_value = $('#stfcentercolorpicker_value').text();
        var stfcenterfontsize_s = $('#stfcenterfontsize_s').val();
        var stfcenterfontcont = $('#stfcenterfontcont').val();
        var stfrightcolorpicker_value = $('#stfrightcolorpicker_value').text();
        var stfrightfontsize_s = $('#stfrightfontsize_s').val();
        var stfrightfontcont = $('#stfrightfontcont').val();
        var postData = {
          leftclr: stfleftcolorpicker_value,
          leftsize: stfleftfontsize_s,
          leftcont: stfleftfontcont,
          centclr: stfcentercolorpicker_value,
          centsize: stfcenterfontsize_s,
          centcont: stfcenterfontcont,
          rightclr: stfrightcolorpicker_value,
          rightsize: stfrightfontsize_s,
          rightcont: stfrightfontcont
        };
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.stf_savefootstyle', postData).then(function (response) {
          var msg = response.data.msg; //console.log(type);

          if (msg == "ok") {
            $('#footer-left a').text(stfleftfontcont);
            $('#footer-left a').css({
              'color': stfleftcolorpicker_value,
              'font-size': stfleftfontsize_s + 'px'
            }); //#666666

            if ($('#footer-center')) {
              $('#footer-center a').text(stfcenterfontcont);
              $('#footer-center a').css({
                'color': stfcentercolorpicker_value,
                'font-size': stfcenterfontsize_s + 'px'
              }); //#666666
            }

            $('#footer-right a').text(stfrightfontcont);
            $('#footer-right a').css({
              'color': stfrightcolorpicker_value,
              'font-size': stfrightfontsize_s + 'px'
            }); //#666666
          } else {
            $('#footer-left a').css({
              'color': '#666666',
              'font-size': '11px'
            }); //#666666

            if ($('#footer-center')) $('#footer-center a').css({
              'color': '#666666',
              'font-size': '11px'
            }); //#666666

            $('#footer-right a').css({
              'color': '#666666',
              'font-size': '11px'
            }); //#666666
          }
        })["catch"](function (error) {
          console.log(error);
        });
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=template&id=7163d65a&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=template&id=7163d65a& ***!
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusu_system_theme_foot))]),
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
              "  >>  " +
              _vm._s(_vm.cmusu_system_theme_foot) +
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
            _c("h6", { staticClass: "card-title m-b-20" }, [
              _vm._v(
                _vm._s(_vm.cpgtxt_style) + "(" + _vm._s(_vm.cpgtxt_left) + ")"
              )
            ]),
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
                    _vm._s(_vm.cpgtxt_font) + " " + _vm._s(_vm.cpgtxt_color)
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
                staticClass: "colr_pickr_min m-b-20",
                staticStyle: { padding: "0 100px", "align-items": "center" }
              },
              [
                _c("div", { staticStyle: { width: "130px" } }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_font) + " " + _vm._s(_vm.cpgtxt_size)
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
                staticClass: "colr_pickr_min",
                staticStyle: { padding: "0 100px", "align-items": "center" }
              },
              [
                _c("div", { staticStyle: { width: "130px" } }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_font) + " " + _vm._s(_vm.cpgtxt_content)
                  )
                ]),
                _vm._v(" "),
                _vm._m(3)
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
            _c("h6", { staticClass: "card-title m-b-20" }, [
              _vm._v(
                _vm._s(_vm.cpgtxt_style) + "(" + _vm._s(_vm.cpgtxt_center) + ")"
              )
            ]),
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
                    _vm._s(_vm.cpgtxt_font) + " " + _vm._s(_vm.cpgtxt_color)
                  )
                ]),
                _vm._v(" "),
                _vm._m(4)
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
                    _vm._s(_vm.cpgtxt_font) + " " + _vm._s(_vm.cpgtxt_size)
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
                    _vm._s(_vm.cpgtxt_font) + " " + _vm._s(_vm.cpgtxt_content)
                  )
                ]),
                _vm._v(" "),
                _vm._m(6)
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
            _c("h6", { staticClass: "card-title m-b-20" }, [
              _vm._v(
                _vm._s(_vm.cpgtxt_style) + "(" + _vm._s(_vm.cpgtxt_right) + ")"
              )
            ]),
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
                    _vm._s(_vm.cpgtxt_font) + " " + _vm._s(_vm.cpgtxt_color)
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
                staticClass: "colr_pickr_min m-b-20",
                staticStyle: { padding: "0 100px", "align-items": "center" }
              },
              [
                _c("div", { staticStyle: { width: "130px" } }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_font) + " " + _vm._s(_vm.cpgtxt_size)
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
                staticClass: "colr_pickr_min",
                staticStyle: { padding: "0 100px", "align-items": "center" }
              },
              [
                _c("div", { staticStyle: { width: "130px" } }, [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_font) + " " + _vm._s(_vm.cpgtxt_content)
                  )
                ]),
                _vm._v(" "),
                _vm._m(9)
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body text-right" }, [
            _c(
              "div",
              {
                staticClass:
                  "btn btn-outline-light  dash-my-btn-0  lang_tab active p-l-r-30 m-r-15",
                attrs: { id: "system-theme-footsave-btn" },
                on: {
                  click: function($event) {
                    return _vm.Savefooterstyles()
                  }
                }
              },
              [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_savechange))])]
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
          id: "system-theme-foot-fav",
          "data-status": "off",
          "data-page-info": "Foot_system-theme-foot"
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
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { display: "flex" } }, [
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: { width: "70px", cursor: "pointer" },
          attrs: { id: "stfleftcolorpicker" }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "stfleftcolorpicker_value" } }, [
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
          attrs: { id: "stfleftfontsize" }
        },
        [
          _c(
            "select",
            { staticClass: "form-control", attrs: { id: "stfleftfontsize_s" } },
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
              _c("option", { attrs: { value: "20" } }, [_vm._v("20px")]),
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
        attrs: { type: "text", id: "stfleftfontcont", value: "@2020 WAAUP" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { display: "flex" } }, [
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: { width: "70px", cursor: "pointer" },
          attrs: { id: "stfcentercolorpicker" }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "stfcentercolorpicker_value" } }, [
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
          attrs: { id: "stfcenterfontsize" }
        },
        [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: { id: "stfcenterfontsize_s" }
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
              _c("option", { attrs: { value: "20" } }, [_vm._v("20px")]),
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
        attrs: { type: "text", id: "stfcenterfontcont", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "flex-grow": "1" } }, [
      _c("div", { staticStyle: { display: "flex" } }, [
        _c("div", {
          staticClass: "m-r-15",
          staticStyle: { width: "70px", cursor: "pointer" },
          attrs: { id: "stfrightcolorpicker" }
        }),
        _vm._v(" "),
        _c("div", { attrs: { id: "stfrightcolorpicker_value" } }, [
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
          attrs: { id: "stfrightfontsize" }
        },
        [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: { id: "stfrightfontsize_s" }
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
              _c("option", { attrs: { value: "20" } }, [_vm._v("20px")]),
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
          id: "stfrightfontcont",
          value: "WAAUP(SINGAPORE)INTERNATIONAL PTE.LTD"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/system/SystemThemeFoot.vue":
/*!***********************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemThemeFoot.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemThemeFoot_vue_vue_type_template_id_7163d65a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemThemeFoot.vue?vue&type=template&id=7163d65a& */ "./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=template&id=7163d65a&");
/* harmony import */ var _SystemThemeFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemThemeFoot.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SystemThemeFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemThemeFoot_vue_vue_type_template_id_7163d65a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SystemThemeFoot_vue_vue_type_template_id_7163d65a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemThemeFoot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemThemeFoot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeFoot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=template&id=7163d65a&":
/*!******************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=template&id=7163d65a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeFoot_vue_vue_type_template_id_7163d65a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemThemeFoot.vue?vue&type=template&id=7163d65a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemThemeFoot.vue?vue&type=template&id=7163d65a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeFoot_vue_vue_type_template_id_7163d65a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemThemeFoot_vue_vue_type_template_id_7163d65a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);