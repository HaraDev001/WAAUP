(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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




var vueOBJ = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalPagesManagement",
  data: function data() {
    return {
      pageid: 'webs-wesglobal-pages-management-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_pages: '',
      musususu_webs_wesglobal_pages_management: '',
      status: 0
    };
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.status = 0;
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.setEditID(0);
  },
  components: {
    // 여기서 동적으로 로딩한다
    'WebsWesGlobalPagesManagementList': function WebsWesGlobalPagesManagementList() {
      return __webpack_require__.e(/*! import() */ 63).then(__webpack_require__.bind(null, /*! ../../pages/webs/WebsWesGlobalPagesManagementList */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementList.vue"));
    },
    'WebsWesGlobalPagesManagementEdit': function WebsWesGlobalPagesManagementEdit() {
      return __webpack_require__.e(/*! import() */ 62).then(__webpack_require__.bind(null, /*! ../../pages/webs/WebsWesGlobalPagesManagementEdit */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagementEdit.vue"));
    }
  },
  computed: {
    cmususu_webs_wesglobal_pages: function cmususu_webs_wesglobal_pages() {
      return this.mususu_webs_wesglobal_pages;
    },
    cmusususu_webs_wesglobal_pages_management: function cmusususu_webs_wesglobal_pages_management() {
      return this.musususu_webs_wesglobal_pages_management;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
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
    },
    WebPageManagement: function WebPageManagement() {
      switch (this.status) {
        case 0:
          return 'WebsWesGlobalPagesManagementList';

        case 1:
          return 'WebsWesGlobalPagesManagementEdit';
      }
    }
  },
  methods: {
    changeConponet: function changeConponet(val) {
      this.status = val;
    }
  } //method

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=template&id=8809c45a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=template&id=8809c45a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
          _vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_pages_management))
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
              _vm._s(_vm.cmususu_webs_wesglobal_pages) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_pages_management) +
              "\n                      "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(_vm.WebPageManagement, {
          tag: "component",
          on: { fromchild: _vm.changeConponet }
        })
      ],
      1
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
          id: "webs-wesglobal-pages-management-fav",
          "data-status": "off",
          "data-page-info": "Management_webs-wesglobal-pages-management"
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue":
/*!**********************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalPagesManagement_vue_vue_type_template_id_8809c45a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalPagesManagement.vue?vue&type=template&id=8809c45a& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=template&id=8809c45a&");
/* harmony import */ var _WebsWesGlobalPagesManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalPagesManagement.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WebsWesGlobalPagesManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalPagesManagement_vue_vue_type_template_id_8809c45a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalPagesManagement_vue_vue_type_template_id_8809c45a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesManagement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=template&id=8809c45a&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=template&id=8809c45a& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagement_vue_vue_type_template_id_8809c45a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesManagement.vue?vue&type=template&id=8809c45a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesManagement.vue?vue&type=template&id=8809c45a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagement_vue_vue_type_template_id_8809c45a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesManagement_vue_vue_type_template_id_8809c45a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);