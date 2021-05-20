(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.jsonparse(window.Laravel.userinfo).id;
var email = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.jsonparse(window.Laravel.userinfo).email;
var pwd = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.jsonparse(window.Laravel.userinfo).password;
var mainTabstatus = 0;
var permss;
var tagCount = 0;

function colorButtons() {
  var hiddenThemeColorPicker = document.getElementById('hiddenThemeColorPicker');
  var pickerLeft = new ColorPicker(hiddenThemeColorPicker, '#ffffff');
  hiddenThemeColorPicker.addEventListener('colorChange', function (event) {
    // This will give you the color you selected
    var color = event.detail.color.hexa;
    $('#hiddenThemeColorPicker').val(color);
    addThemeColor(color);
  });
}

function DeleteColorEvent() {
  $('span[id^="delcolor_"]').click(function () {
    var colorid = $(this).attr("data-id");
    $.ajax({
      url: 'admin.delssbhemeColor',
      type: 'POST',
      data: {
        userid: userid,
        colorid: colorid
      },
      async: false,
      success: function success(data) {
        if (data.msg == "ok") {
          var color_list = data.list.color_info; //var sel_color = data.list.sel_color;

          getColorList(color_list);
        } else alert(data.msg);
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  });
}

function getColorList(jsonstr) {
  $('#addedSystemThemeColorList').html('');

  if (jsonstr != '') {
    var color_list = $.parseJSON(jsonstr);
    var tags = '';

    for (var j = 0; j < color_list.length; j++) {
      var obj = color_list[j];
      var cid = obj.colorid;
      var color = obj.colorinfo;
      tags += '<div style="margin-bottom: 20px;">';
      tags += '<div id="addedcolor_' + j + '" style="display: flex;flex-direction: row; width: 130px; height: 20px;">';
      tags += '   <div id="addcolor_' + j + '" class="selectedThemeColor" data-color="' + color + '" style="background: ' + color + '"></div>';
      tags += '   <div style="margin-left: 10px;"><span id="delcolor_' + j + '" data-id="' + cid + '" class="delete-theme-color">' + btntxt_delete + '</span></div>';
      tags += '</div>';
      tags += '</div>';
      tagCount = j;
    }

    $('#addedSystemThemeColorList').html(tags);
    DeleteColorEvent();
  }
}

function showThemeColorPage() {
  $.ajax({
    url: 'admin.getssbhemeColor',
    type: 'POST',
    data: {
      userid: userid
    },
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        var color_list = data.list.color_info;
        getColorList(color_list);
      } else alert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function addThemeColor(color) {
  tagCount++;
  $.ajax({
    url: 'admin.addssbhemeColor',
    type: 'POST',
    data: {
      userid: userid,
      color: color
    },
    async: false,
    success: function success(data) {
      if (data.msg == "ok") {
        var color_list = data.list.color_info;
        getColorList(color_list);
      } else alert(data.msg);
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SystemSetBasic",
  data: function data() {
    return {
      pageid: 'system-setting-basic-fav',
      mu_system: '',
      musu_system_set: '',
      mususu_system_set_basic: '',
      pgtxt_dashboard: '',
      pgtxt_front: '',
      pgtxt_pages: '',
      pgtxt_setting: '',
      pgtxt_domain: '',
      pgtxt_name: '',
      pgtxt_slogan: '',
      pgtxt_login: '',
      pgtxt_register: '',
      btntxt_savechange: '',
      btntxt_cancel: '',
      pgtxt_dbsaved: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      ptabstatus: -1
    };
  },
  components: {
    // 여기서 동적으로 로딩한다
    'SystemSetBasicFrontPagesLogin': function SystemSetBasicFrontPagesLogin() {
      return Promise.all(/*! import() */[__webpack_require__.e(59), __webpack_require__.e(60)]).then(__webpack_require__.bind(null, /*! ../../pages/system/SystemSetBasicFrontPagesLogin */ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesLogin.vue"));
    },
    'SystemSetBasicFrontPagesRegister': function SystemSetBasicFrontPagesRegister() {
      return Promise.all(/*! import() */[__webpack_require__.e(59), __webpack_require__.e(61)]).then(__webpack_require__.bind(null, /*! ../../pages/system/SystemSetBasicFrontPagesRegister */ "./resources/vuedir/pages/system/SystemSetBasicFrontPagesRegister.vue"));
    }
  },
  computed: {
    FrontPageComponentitem: function FrontPageComponentitem() {
      switch (this.ptabstatus) {
        case 0:
          return 'SystemSetBasicFrontPagesLogin';

        case 1:
          return 'SystemSetBasicFrontPagesRegister';
      }
    },
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmu_system: function cmu_system() {
      return this.mu_system;
    },
    cmusu_system_set: function cmusu_system_set() {
      return this.musu_system_set;
    },
    cmususu_system_set_basic: function cmususu_system_set_basic() {
      return this.mususu_system_set_basic;
    },
    cpgtxt_dashboard: function cpgtxt_dashboard() {
      return this.pgtxt_dashboard;
    },
    cpgtxt_front: function cpgtxt_front() {
      return this.pgtxt_front;
    },
    cpgtxt_pages: function cpgtxt_pages() {
      return this.pgtxt_pages;
    },
    cpgtxt_setting: function cpgtxt_setting() {
      return this.pgtxt_setting;
    },
    cpgtxt_domain: function cpgtxt_domain() {
      return this.pgtxt_domain;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_slogan: function cpgtxt_slogan() {
      return this.pgtxt_slogan;
    },
    cpgtxt_login: function cpgtxt_login() {
      return this.pgtxt_login;
    },
    cpgtxt_register: function cpgtxt_register() {
      return this.pgtxt_register;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
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
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  watch: {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.permissionDefinition();
    /* fav part*/

    this.sliderTabs();
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

    /*fav part*/
    sliderTabs: function sliderTabs() {
      $('.page1_content_tab_bar div.page1_content_side_bar_text').click(function () {
        $('.page1_content_tab_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');

        if (subid == 'dash') {
          $('.col-md-12 div.page1_content_tab_bar').removeClass('active');
          $('div.page2_content_tab_bar').removeClass('active');
          $('.col-md-12 div.page2_content_tab_bar .page1_content_side_bar_text').removeClass('active');
          $('.page_slider_content_list').removeClass('active');
          $('#' + subid).addClass('active');
          mainTabstatus = 0;
        } else if (subid == 'front') {
          $('div.page1_content_tab_bar').addClass('active');
          $('div.page2_content_tab_bar').addClass('active');
          $('.page_slider_content_list').removeClass('active');
          $('#' + subid).addClass('active');
          $('.page2_content_tab_bar div.front_content_bar_text').removeClass('front_content_bar_seleted');
          $('#ssb_page3_content_side_bar_text').addClass('front_content_bar_seleted');
          vueOBJ.ptabstatus = 0;
          mainTabstatus = 1;
        }
      });
      $('.page2_content_tab_bar div.front_content_bar_text').click(function () {
        $('.page2_content_tab_bar div.front_content_bar_text').removeClass('front_content_bar_seleted');
        $(this).addClass('front_content_bar_seleted');
        var subid = $(this).attr('data-target');

        if (subid == 'login') {
          vueOBJ.ptabstatus = 0;
        } else if (subid == 'reg') {
          vueOBJ.ptabstatus = 1;
        }
      });
    },
    initpage: function initpage() {
      $.ajax({
        url: 'admin.getSystemSettingBasic',
        type: 'POST',
        data: {
          userid: userid
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#ssb_input_domain_name').val(data.domain);
            $('#ssb_input_dashboard_name').val(data.dashboard);
            $('#ssb_input_slogan').val(data.slogan);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    SaveSettingBasicInfo: function SaveSettingBasicInfo() {
      if (permss.pcreate == 1 || permss.pwrite == 1) {
        var pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
        var domain = $('#ssb_input_domain_name').val();
        var dashboard = $('#ssb_input_dashboard_name').val();
        var slogan = $('#ssb_input_slogan').val();

        if (domain == null || domain == '') {
          alert('Please enter a domain name.');
          return;
        }

        if (dashboard == null || dashboard == '') {
          alert('Please enter a dashboard name.');
          return;
        }

        if (slogan == null || slogan == '') {
          alert('Please enter a slogan.');
          return;
        }

        $.ajax({
          url: 'admin.setSystemSettingBasic',
          type: 'POST',
          data: {
            userid: userid,
            domain: domain,
            dashboard: dashboard,
            slogan: slogan
          },
          async: false,
          success: function success(data) {
            if (data.msg == "ok") {
              var title = dashboard + "-" + slogan;
              $('head title[id="dashboard_title"]').text(title);
              alert(pgtxt_dbsaved);
            }
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table.table-lg td {\n    padding: 0.7rem 0.75rem;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.delete-theme-color{\n    cursor: pointer;\n}\n.selectedThemeColor{\n    width: 50px;\n    border: 2px solid #888;\n    background: #ffffff;\n}\n.page1_content_tab_bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border: 1px solid #d6d6d6;\n    border-radius: 20px;\n    min-height: 40px;\n    padding: 10px 20px;\n}\n.page1_content_tab_bar.active{\n    border-radius: 0px;\n    border: 1px solid #d6d6d6;\n    min-height: 40px;\n    padding: 10px 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n}\n.page2_content_tab_bar{\n    display: none;\n}\n.page2_content_tab_bar.active{\n    border: 1px solid #d6d6d6;\n    border-top: 0px;\n    min-height: 40px;\n    padding: 10px 20px;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    background-color: #f8f8f8;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.front_content_bar_seleted {\n    color: #d8be8f;\n}\n#ssb_page1_content_side_bar_text,\n#ssb_page3_content_side_bar_text,\n#ssb_page4_content_side_bar_text\n{\n    float: left;\n    cursor: pointer;\n    height: auto;\n}\n.ssb_page_button{\n    width: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetBasic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=template&id=a436adc0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=template&id=a436adc0& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmususu_system_set_basic))]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n               "),
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
            "\n                      " +
              _vm._s(_vm.cmu_system) +
              "   >>  " +
              _vm._s(_vm.cmusu_system_set) +
              "   >>  " +
              _vm._s(_vm.cmususu_system_set_basic) +
              "\n                  "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12", staticStyle: { "margin-bottom": "30px" } },
        [
          _c("div", { staticClass: "page1_content_tab_bar" }, [
            _c("div", { staticClass: "ssb_page_button" }, [
              _c(
                "div",
                {
                  staticClass:
                    "page1_content_side_bar_text page1_content_side_bar_seleted",
                  attrs: {
                    id: "ssb_page1_content_side_bar_text",
                    "data-target": "dash"
                  }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_dashboard))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ssb_page_button" }, [
              _c(
                "div",
                {
                  staticClass: "page1_content_side_bar_text",
                  attrs: {
                    id: "page_content_submenu_text",
                    "data-target": "front"
                  }
                },
                [
                  _vm._v(
                    _vm._s(_vm.cpgtxt_front) + " " + _vm._s(_vm.cpgtxt_pages)
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "page2_content_tab_bar" }, [
            _c("div", { staticClass: "ssb_page_button" }, [
              _c(
                "div",
                {
                  staticClass:
                    "front_content_bar_text front_content_bar_seleted",
                  attrs: {
                    id: "ssb_page3_content_side_bar_text",
                    "data-target": "login"
                  }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_login))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ssb_page_button" }, [
              _c(
                "div",
                {
                  staticClass: "front_content_bar_text",
                  attrs: {
                    id: "ssb_page4_content_side_bar_text",
                    "data-target": "reg"
                  }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_register))]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list active",
          attrs: { id: "dash" }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body", staticStyle: { padding: "20px" } },
              [
                _c("h6", { staticClass: "card-title m-b-20" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_setting))
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "col-md-10" }, [
                _c(
                  "div",
                  {
                    staticClass: "d-flex flex-wrap",
                    staticStyle: { "margin-bottom": "20px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "margin-top": "8px" }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.cpgtxt_domain) +
                            " " +
                            _vm._s(_vm.cpgtxt_name)
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(1)
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
                    _c(
                      "div",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "margin-top": "8px" }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.cpgtxt_dashboard) +
                            " " +
                            _vm._s(_vm.cpgtxt_name)
                        )
                      ]
                    ),
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
                    _c(
                      "div",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "margin-top": "8px" }
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_slogan))]
                    ),
                    _vm._v(" "),
                    _vm._m(3)
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { "text-align": "right", "margin-bottom": "25px" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "btn btn-outline-light  dash-my-btn-0 active p-l-r-30",
                  attrs: { id: "add_domainBtn" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.SaveSettingBasicInfo()
                    }
                  }
                },
                [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_savechange))])]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12 page_slider_content_list",
          attrs: { id: "front" }
        },
        [_c(_vm.FrontPageComponentitem, { tag: "component" })],
        1
      )
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
          id: "system-setting-basic-fav",
          "data-status": "off",
          "data-page-info": "Basic_system-setting-basic"
        }
      },
      [
        _vm._v("\n                   "),
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
    return _c("div", { staticClass: "col-md-5" }, [
      _c("input", {
        staticClass: "form-control border-input-text",
        attrs: {
          type: "text",
          id: "ssb_input_domain_name",
          name: "ssb_input_domain_name"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("input", {
        staticClass: "form-control border-input-text",
        attrs: {
          type: "text",
          id: "ssb_input_dashboard_name",
          name: "ssb_input_dashboard_name"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5" }, [
      _c("input", {
        staticClass: "form-control border-input-text",
        attrs: {
          type: "text",
          id: "ssb_input_slogan",
          name: "ssb_input_slogan"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasic.vue":
/*!**********************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasic.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemSetBasic_vue_vue_type_template_id_a436adc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemSetBasic.vue?vue&type=template&id=a436adc0& */ "./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=template&id=a436adc0&");
/* harmony import */ var _SystemSetBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemSetBasic.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SystemSetBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SystemSetBasic.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SystemSetBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemSetBasic_vue_vue_type_template_id_a436adc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SystemSetBasic_vue_vue_type_template_id_a436adc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemSetBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetBasic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=template&id=a436adc0&":
/*!*****************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=template&id=a436adc0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_template_id_a436adc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetBasic.vue?vue&type=template&id=a436adc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetBasic.vue?vue&type=template&id=a436adc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_template_id_a436adc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetBasic_vue_vue_type_template_id_a436adc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);