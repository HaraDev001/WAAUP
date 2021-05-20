(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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




var coutryLists = [];
var precountryLists = []; //us-1-

var permss;

function hidenLangModel() {
  $("#myLangModal").modal('hide');
}

function wwglangAddonDlg() {
  var c_tag = "";
  var j = 0;

  for (var i = 0; i < coutryLists.length; i++) {
    var nameobj = coutryLists[i].name;
    var name = $.trim(nameobj.split('(')[0]);
    var dialCode = $.trim(coutryLists[i].dialCode);
    var iso2 = $.trim(coutryLists[i].iso2);
    var ckid = iso2 + '-' + dialCode; //console.log(ckid+': country');

    var check = "";

    for (var k = 0; k < precountryLists.length; k++) {
      var oneobj = precountryLists[k];
      var iso = oneobj.iso;
      var dialcd = oneobj.dialcode;
      var temp = iso + '-' + dialcd; //console.log(temp+': precountry');

      if (temp == ckid) {
        check = "checked";
        break;
      }
    }

    if (j == 0) c_tag += '<tr role="row" class="odd">';
    c_tag += '<td style="width:50%;">';
    c_tag += '<div class="form-check form-check-inline">';
    c_tag += '<input class="form-check-input m-r-10" data-country="' + name + '" type="checkbox" ' + check + ' id="onelangCheckbox_' + ckid + '" value="">'; // c_tag +='<div class="iti__flag-box">';
    // c_tag +='<div class="iti__flag iti__'+iso2+'"></div>';
    // c_tag +='</div>';

    c_tag += '<span class="iti__country-name" style="background: #3f6ad2; color: white; text-transform:uppercase;border: 1px solid transparent; border-radius: 20px; padding: 5px 3px; font-size: 12px">' + iso2 + '</span>';
    c_tag += '<span class="iti__country-name">' + name + '</span>';
    c_tag += '</div>';
    c_tag += '</td>';
    j++;

    if (j == 2) {
      c_tag += '</tr>';
      j = 0;
    }
  }

  c_tag += '<tr role="row" class="odd"> <td style="padding: 0 0.75rem !important;width:50%;">&nbsp;</td>';
  c_tag += '<td  style="padding: 0 0.75rem !important;width:50%;">&nbsp;</td></tr>';
  $('#sslang_dlg_list').html(c_tag);
}

function wwglangMainAdd(stored_langs, n) {
  var fidx = 0;
  var plen = precountryLists.length > 0 ? 1 : 0;
  stored_langs = $.parseJSON(stored_langs);
  var c_tag = ""; // console.log(vueOBJ);

  var edittxt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
  var enabletxt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_enable');
  var deletetxt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
  var disabletxt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_disable');

  for (var j = 0; j < stored_langs.length; j++) {
    var obj = stored_langs[j];
    precountryLists[j] = obj; //console.log(precountryLists[j]+':aaaaaa');

    var iso = obj.iso;
    var dialCode = obj.dialcode;
    var cname = obj.name;
    var status = obj.status;
    var idx = iso + '-' + dialCode + '-' + cname;
    var border_top = "";
    /*  if (fidx == 0 && plen == 0)
          border_top = "border-top-0";*/

    if (j == 0) border_top = "border-top-0";
    c_tag += '<tr role="row" class="odd" id="wwglangonerow_' + idx + '">';
    c_tag += '<td class="' + border_top + '" style="width:70%;padding-left:20px;">'; // c_tag += '<div class="iti__flag-box">';
    // c_tag += '<div class="iti__flag iti__' + iso + '"></div>';
    // c_tag += '</div>';

    c_tag += '<span class="iti__country-name" style="background: #3f6ad2; color: white; text-transform:uppercase;border: 1px solid transparent; border-radius: 20px; padding: 5px 3px; font-size: 12px">' + iso + '</span>';
    c_tag += '<span class="iti__country-name">' + cname + '</span>';
    c_tag += '</td>';
    c_tag += '<td class="text-right ' + border_top + '" style="width:30%;">';
    c_tag += '<div class="form-group m-b-0 border-top-0">';
    c_tag += '<select class="my-border-radius-slt form-control float-right" id="wwglangselect_' + idx + '">';
    c_tag += '<option value="">' + edittxt + '</option>';
    if (status != null && status != "" && status == "enable") c_tag += '<option value="enable" selected>' + enabletxt + '</option>';else c_tag += '<option value="enable">' + enabletxt + '</option>';
    if (status != null && status != "" && status == "disable") c_tag += '<option value="disable" selected>' + disabletxt + '</option>';else c_tag += '<option value="disable">' + disabletxt + '</option>';
    if (status != null && status != "" && status == "delete") c_tag += '<option value="delete" selected>' + deletetxt + '</option>';else c_tag += '<option value="delete">' + deletetxt + '</option>';
    c_tag += '</select>';
    c_tag += '</div>';
    c_tag += '</td>';
    c_tag += '</tr>';
    fidx++;
  }

  $('#wwglang-main-list').html(c_tag);
  /* start event */

  $('select[id^="wwglangselect_"]').change(function () {
    var tid = $(this).attr("id");
    var t_id = tid.split("_")[1];
    var value = $(this).val();

    if (value != null && value != "") {
      var iso = t_id.split("-")[0];
      var dialcode = t_id.split("-")[1];
      var name = t_id.split("-")[2];
      var status = value;
      var postData = {
        iso: iso,
        dialcode: dialcode,
        status: status
      };

      if (status == "enable" && permss.pwrite == 0) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      if (status == "disable" && permss.pwrite == 0) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      if (status == "delete" && permss.pdelete == 0) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      if (status == 'enable') {
        if (permss.pwrite == 1) {
          $('div.spinner-border').css('display', 'block');
        } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.wwglang_saveStatusChange', postData).then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          if (status == "disable" || status == "delete") {
            if (status == "delete") {
              $('#wwglangonerow_' + t_id).remove();
              var tempaayy = [];

              for (var k = 0; k < precountryLists.length; k++) {
                var oneobj = precountryLists[k];
                var piso = oneobj.iso;
                var pdialcd = oneobj.dialcode; //console.log(temp+': precountry');

                if (iso != piso && dialcode != pdialcd) {
                  tempaayy.push(oneobj);
                }
              }

              precountryLists = tempaayy;
            }

            var langlist = _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getStoreWWGLangList();
            var templist = [];

            for (var i = 0; i < langlist.length; i++) {
              var lang = langlist[i];

              try {
                if (t_id != lang && lang.indexOf('-') > -1) templist[i] = lang;
              } catch (e) {}
            }

            _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.setStoreWWGLangList(templist);
          } else //enable
            {
              var langlist = _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getStoreWWGLangList();
              var templist = [];

              for (var i = 0; i < langlist.length; i++) {
                var lang = langlist[i]; //console.log("ee::"+lang+"::"+t_id);

                try {
                  if (t_id != lang && lang.indexOf('-') > -1) templist[i] = lang;
                } catch (e) {}
              }

              templist[templist.length] = t_id;
              _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.setStoreWWGLangList(templist);
              $('div.spinner-border').css('display', 'none');
            }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  });
}

var vueOBJ = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalConfigurationLanguage",

  /* components: {
       CKEditor
   },*/
  data: function data() {
    return {
      pageid: 'webs-wesglobal-configuration-language-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_configuration: '',
      musususu_webs_wesglobal_configuration_language: '',
      pgtxt_language: '',
      btntxt_add: '',
      pgtxt_addlanguage: '',
      pgtxt_link: '',
      btntxt_edit: '',
      btntxt_enable: '',
      btntxt_disable: '',
      btntxt_delete: '',
      pgtxt_notpermission: '',
      pgtxt_notification: ''
    };
  },
  created: function created() {
    coutryLists = _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getLangCodes();
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.permissionDefinition(); // this.getWWGFrontStoredLang();
  },
  computed: {
    cmususu_webs_wesglobal_configuration: function cmususu_webs_wesglobal_configuration() {
      return this.mususu_webs_wesglobal_configuration;
    },
    cmusususu_webs_wesglobal_configuration_language: function cmusususu_webs_wesglobal_configuration_language() {
      return this.musususu_webs_wesglobal_configuration_language;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
    },
    cpgtxt_language: function cpgtxt_language() {
      return this.pgtxt_language;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_addlanguage: function cpgtxt_addlanguage() {
      return this.pgtxt_addlanguage;
    },
    cpgtxt_link: function cpgtxt_link() {
      return this.pgtxt_link;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_enable: function cbtntxt_enable() {
      return this.btntxt_enable;
    },
    cbtntxt_disable: function cbtntxt_disable() {
      return this.btntxt_disable;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
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
      this.getWWGFrontStoredLang();
      return this.$store.state.contentchange;
    }
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
    WWGLangDlgShow: function WWGLangDlgShow() {
      if (permss.pcreate == 1) {
        $("#myLangModal").modal('show');
        wwglangAddonDlg();
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    },
    wwglang_add: function wwglang_add() {
      var idlist = [];
      $('input:checkbox[id^="onelangCheckbox_"]:checked').each(function () {
        var oneidstr = $(this).attr('id');
        var cname = $(this).attr('data-country');
        var t_id = oneidstr.split('_')[1];
        t_id += '-' + cname;
        idlist.push(t_id);
      }); // console.log(idlist); return;//ckd

      if (idlist.length > 0) {
        var postData = {
          langlist: idlist
        };
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.wwgLang_SaveLang', postData).then(function (response) {
          var msg = response.data.msg;

          if (msg == "ok") {
            if (response.data.cnt > 0) {
              var addlist = response.data.addlist;
              wwglangMainAdd(addlist, 1);
              hidenLangModel();
            }
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    getWWGFrontStoredLang: function getWWGFrontStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getWWGFrontStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          // stored_langs = JSON.parse(response.data.langlist);
          var stored_langs = response.data.langlist; //console.log(stored_langs);

          if (stored_langs != '') wwglangMainAdd(stored_langs, 0);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n}\n.btn.page1_custom_select_btn.add_lang{\n    height: 40px;\n    border-radius: 20px;\n    padding: 0 30px;\n    margin-right: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=template&id=4189da9a&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=template&id=4189da9a& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
          _vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_configuration_language))
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
              _vm._s(_vm.cmusususu_webs_wesglobal_configuration_language) +
              "\n                      "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card border-0 m-b-10 text-right" }, [
          _c("div", [
            _c(
              "div",
              {
                staticClass:
                  "btn btn-outline-light  dash-my-btn-0 active p-l-r-30",
                attrs: { id: "system-add-btn" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.WWGLangDlgShow()
                  }
                }
              },
              [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "myLangModal" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered modal-sm",
          staticStyle: { "min-width": "500px!important" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h4",
                {
                  staticClass: "modal-title",
                  staticStyle: { color: "#055ada", "font-size": "16px" }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_addlanguage))]
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
                attrs: { id: "myAlertModalbody" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "panel",
                    staticStyle: { display: "block" },
                    attrs: { id: "tab4" }
                  },
                  [
                    _c("form", { attrs: { id: "sslang_reg_lang" } }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            {
                              staticClass: "bottom",
                              staticStyle: {
                                "text-align": "center",
                                "padding-top": "0px"
                              }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-info",
                                  staticStyle: {
                                    background: "#5c6bc0 !important",
                                    "border-color": "#5c6bc0 !important",
                                    "border-radius": "1.8rem !important",
                                    padding: "10px 20px"
                                  },
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.wwglang_add()
                                    }
                                  }
                                },
                                [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]
            )
          ])
        ]
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
          id: "webs-wesglobal-configuration-language-fav",
          "data-status": "off",
          "data-page-info": "Language_webs-wesglobal-configuration-language"
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
    return _c(
      "div",
      { staticClass: "row", staticStyle: { "margin-top": "30px" } },
      [
        _c(
          "div",
          {
            staticClass: "col-md-12 page_slider_content_list active",
            attrs: { id: "Listbar" }
          },
          [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "table",
                    {
                      staticClass: "table table-lg dataTable no-footer",
                      staticStyle: { "margin-bottom": "0" },
                      attrs: {
                        role: "grid",
                        "aria-describedby": "user-list_info"
                      }
                    },
                    [_c("tbody", { attrs: { id: "wwglang-main-list" } })]
                  )
                ])
              ])
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row", staticStyle: { padding: "10px" } }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          {
            staticClass: "table-responsive",
            staticStyle: {
              "max-height": "300px",
              "overflow-y": "auto",
              "min-height": "100px"
            }
          },
          [
            _c(
              "table",
              {
                staticClass: "table table-lg  no-footer",
                attrs: {
                  id: "sslang-list-table",
                  role: "grid",
                  "aria-describedby": "sslang-list_info"
                }
              },
              [_c("tbody", { attrs: { id: "sslang_dlg_list" } })]
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue":
/*!****************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalConfigurationLanguage_vue_vue_type_template_id_4189da9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationLanguage.vue?vue&type=template&id=4189da9a& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=template&id=4189da9a&");
/* harmony import */ var _WebsWesGlobalConfigurationLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationLanguage.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalConfigurationLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalConfigurationLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalConfigurationLanguage_vue_vue_type_template_id_4189da9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalConfigurationLanguage_vue_vue_type_template_id_4189da9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationLanguage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=template&id=4189da9a&":
/*!***********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=template&id=4189da9a& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_template_id_4189da9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationLanguage.vue?vue&type=template&id=4189da9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationLanguage.vue?vue&type=template&id=4189da9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_template_id_4189da9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationLanguage_vue_vue_type_template_id_4189da9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);