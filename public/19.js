(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var g_Cont = '';
var g_fname = 'en';
var org_iso = 1;
var showlangDlg = true;
var btntxt_delete = "";
var btntxt_enable = "";
var btntxt_disable = "";
var btntxt_edit = "";
var permss;

function sslangAddonDlg() {
  var c_tag = "";
  var j = 0;

  for (var i = 0; i < coutryLists.length; i++) {
    var nameobj = coutryLists[i].name;
    var name = $.trim(nameobj.split('(')[0]);
    var dialCode = $.trim(coutryLists[i].dialCode);
    var iso2 = $.trim(coutryLists[i].iso2);
    var ckid = iso2 + '-' + dialCode;
    var check = '';

    for (var k = 0; k < precountryLists.length; k++) {
      var oneobj = precountryLists[k];
      var iso = oneobj.split('-')[0];
      var dialcd = oneobj.split('-')[1];
      var temp = iso + '-' + dialcd;

      if (temp === ckid) {
        //  console.log(ckid);
        check = "checked";
        break;
      }
    }

    if (j == 0) c_tag += '<tr role="row" class="odd">';
    c_tag += '<td style="width:50%;">';
    c_tag += '<div class="form-check form-check-inline">';
    c_tag += '<input class="form-check-input m-r-10" data-country="' + name + '" type="checkbox" ' + check + ' id="onelangCheckbox_' + ckid + '" value="">';
    c_tag += '<div class="iti__flag-box">';
    c_tag += '<div class="iti__flag iti__' + iso2 + '"></div>';
    c_tag += '</div>';
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

function showSSLTransDlg() {
  $("#myLangTransModal").modal('show');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SystemSetLanguage",
  data: function data() {
    return {
      pageid: 'system-setting-language-lang-fav',
      mu_system: '',
      musu_system_set: '',
      mususu_system_set_lang: '',
      musususu_system_setting_language_lang: '',
      pgtxt_language: '',
      pgtxt_translation: '',
      btntxt_add: '',
      pgtxt_addlanguage: '',
      pgtxt_filters: '',
      pgtxt_includestring: '',
      pgtxt_translationlanguage: '',
      pgtxt_basicstring: '',
      pgtxt_sua_edit: '',
      pgtxt_stringtotranslation: '',
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
    var vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.permissionDefinition();
    this.getStoredLang();
    btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
    btntxt_enable = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_enable');
    btntxt_disable = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_disable');
    btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
  },
  computed: {
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
    cmususu_system_set_lang: function cmususu_system_set_lang() {
      return this.mususu_system_set_lang;
    },
    cmusususu_system_setting_language_lang: function cmusususu_system_setting_language_lang() {
      return this.musususu_system_setting_language_lang;
    },
    cpgtxt_language: function cpgtxt_language() {
      return this.pgtxt_language;
    },
    cpgtxt_translation: function cpgtxt_translation() {
      return this.pgtxt_translation;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_addlanguage: function cpgtxt_addlanguage() {
      return this.pgtxt_addlanguage;
    },
    cpgtxt_filters: function cpgtxt_filters() {
      return this.pgtxt_filters;
    },
    cpgtxt_includestring: function cpgtxt_includestring() {
      return this.pgtxt_includestring;
    },
    cpgtxt_translationlanguage: function cpgtxt_translationlanguage() {
      return this.pgtxt_translationlanguage;
    },
    cpgtxt_basicstring: function cpgtxt_basicstring() {
      return this.pgtxt_basicstring;
    },
    cpgtxt_sua_edit: function cpgtxt_sua_edit() {
      return this.pgtxt_sua_edit;
    },
    cpgtxt_stringtotranslation: function cpgtxt_stringtotranslation() {
      return this.pgtxt_stringtotranslation;
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
        //console.log(obj.hasOwnProperty(key));
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  watch: {},
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
    SSLangDlgShow: function SSLangDlgShow() {
      if (permss.pcreate == 1) {
        if (showlangDlg === true) {
          $("#myLangModal").modal('show');
          sslangAddonDlg();
        }
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    },
    getStoredLang: function getStoredLang() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.sslang_getStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg === "ok") {
          if (response.data.cnt > 0) {
            // stored_langs = JSON.parse(response.data.langlist);
            var stored_langs = response.data.langlist;

            _this.sslangMainAdd(stored_langs, 0);
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    sslangMainAdd: function sslangMainAdd(stored_langs, n) {
      if (n == 0) {
        precountryLists = [];
        $('#sslang-main-list').html('');
      }

      var clen = $("#sslang-main-list").children().length;

      for (var j = 0; j < stored_langs.length; j++) {
        var obj = stored_langs[j];
        precountryLists.push(obj);
        var iso = obj.split('-')[0];
        var dialCode = obj.split('-')[1];
        var cname = obj.split('-')[2];
        var status = obj.split('-')[3];
        var idx = iso + '-' + dialCode + '-' + cname;
        var c_tag = '';
        var border_top = "border-top: 1px solid #dee2e6;";
        if (clen == 0 && j == 0) border_top = "border-top: 0px solid #dee2e6;";
        c_tag += '<tr role="row" class="odd" id="sslangonerow_' + idx + '">';
        c_tag += '<td style="width:70%;padding-left:20px;' + border_top + '">';
        c_tag += '<div class="iti__flag-box">';
        c_tag += '<div class="iti__flag iti__' + iso + '"></div>';
        c_tag += '</div>';
        c_tag += '<span class="iti__country-name">' + cname + '</span>';
        c_tag += '</td>';
        c_tag += '<td class="text-right" style="width:30%;' + border_top + '">';
        c_tag += '<div class="form-group m-b-0 border-top-0">';
        c_tag += '<select class="my-border-radius-slt form-control float-right" id="sslangselect_' + idx + '">';
        c_tag += '<option value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
        if (status != null && status != "" && status == "enable") c_tag += '<option value="enable" selected class="data-ajax" data-ajax="btntxt_enable">' + btntxt_enable + '</option>';else c_tag += '<option value="enable" class="data-ajax" data-ajax="btntxt_enable">' + btntxt_enable + '</option>';
        if (status != null && status != "" && status == "disable") c_tag += '<option value="disable" selected class="data-ajax" data-ajax="btntxt_disable">' + btntxt_disable + '</option>';else c_tag += '<option value="disable" class="data-ajax" data-ajax="btntxt_disable">' + btntxt_disable + '</option>';
        if (status != null && status != "" && status == "delete") c_tag += '<option value="delete" selected class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';else c_tag += '<option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
        c_tag += '</select>';
        c_tag += '</div>';
        c_tag += '</td>';
        c_tag += '</tr>';
        $('#sslang-main-list').append(c_tag);
      }

      var vueObj = this;
      /* start event */

      $('select[id^="sslangselect_"]').change(function () {
        var cssdis = $('div.spinner-border').css('display');
        if (cssdis == 'block') return;
        if (showlangDlg === false) return;
        var tid = $(this).attr("id");
        var t_id = tid.split("_")[1];
        var value = $(this).val();

        if (value != null && value != '') {
          var iso = t_id.split("-")[0];
          var dialcode = t_id.split("-")[1];
          var name = t_id.split("-")[2];
          var status = value;
          var ckid = iso + '-' + dialcode;
          var postData = {
            iso: iso,
            dialcode: dialcode,
            status: status
          };

          if (permss.pwrite == 1 || permss.pdelete == 1) {
            if (status == 'delete') {
              if (permss.pdelete == 0) {
                _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
                return;
              }
            }

            if (status == 'enable') {
              $('div.spinner-border').css('display', 'block');
              showlangDlg = false;
            }

            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.sslang_saveStatusChange', postData).then(function (response) {
              var msg = response.data.msg;

              if (msg == "ok") {
                // console.log(vueObj);
                if (status == "disable" || status == "delete") {
                  if (status == "delete") {
                    $('#sslangonerow_' + t_id).remove();
                    var ttmp = [];
                    var j = 0;

                    for (var k = 0; k < precountryLists.length; k++) {
                      var oneobj = precountryLists[k];
                      var iso1 = oneobj.split('-')[0];
                      var dialcd1 = oneobj.split('-')[1];
                      var temp = iso1 + '-' + dialcd1;
                      if (temp !== ckid) ttmp[j++] = oneobj;
                    }

                    precountryLists = [];
                    precountryLists = ttmp; //console.log(precountryLists);
                  }

                  var langlist = _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getStoreLangList();
                  var templist = [];
                  var jj = 0;

                  for (var i = 0; i < langlist.length; i++) {
                    var lang = langlist[i];

                    try {
                      if (t_id !== lang && lang.indexOf('-') > -1) templist[jj++] = lang;
                    } catch (e) {}
                  }

                  _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.setStoreLangList(templist);
                } else //enable
                  {
                    var langlist = _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getStoreLangList();
                    var templist = [];
                    var jj = 0;

                    for (var i = 0; i < langlist.length; i++) {
                      var lang = langlist[i]; //console.log("ee::"+lang+"::"+t_id);

                      try {
                        if (t_id !== lang && lang.indexOf('-') > -1) templist[jj++] = lang;
                      } catch (e) {}
                    }

                    templist[templist.length] = t_id;
                    _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.setStoreLangList(templist);
                    $('div.spinner-border').css('display', 'none');
                  } //console.log(vueObj);


                vueObj.$store.dispatch('LangChange', status);
              }

              showlangDlg = true;
            })["catch"](function (error) {
              console.log(error);
            });
          } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        }
      });
      /* end  event */
    },
    sslang_add: function sslang_add() //add back
    {
      var _this2 = this;

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
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.sslang_saveLang', postData).then(function (response) {
          var msg = response.data.msg;

          if (msg == "ok") {
            if (response.data.cnt > 0) {
              //var stored_langs = JSON.parse(response.data.addlist);
              var addlist = response.data.addlist;

              _this2.sslangMainAdd(addlist, 1);

              $("#myLangModal").modal('hide');
            }
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table.table-lg td {\n    padding: 0.7rem 0.75rem;\n}\n.sl-tab-container{\n    display: none;\n}\n.sl-tab-container.active{\n    display: block;\n}\n.spinner-border {\n    display: none;\n    width: 6rem;\n    height: 6rem;\n    vertical-align: text-bottom;\n    border: 0.6em solid currentColor;\n    border-right-color: transparent;\n    border-radius: 50%;\n    -webkit-animation: spinner-border .75s linear infinite;\n    animation: spinner-border .75s linear infinite;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetLanguage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=template&id=40973a56&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=template&id=40973a56& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_system_setting_language_lang))]),
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
              _vm._s(_vm.cmususu_system_set_lang) +
              "   >>  " +
              _vm._s(_vm.cmusususu_system_setting_language_lang) +
              "\n                  "
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
        staticStyle: { "margin-top": "20px" },
        attrs: { id: "SLLContainer" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
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
                        return _vm.SSLangDlgShow()
                      }
                    }
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
    ),
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
                                      return _vm.sslang_add()
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
    ]),
    _vm._v(" "),
    _vm._m(3)
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
          id: "system-setting-language-lang-fav",
          "data-status": "off",
          "data-page-info": "Language_system-setting-language-lang"
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
    return _c(
      "div",
      { staticClass: "col-md-12", staticStyle: { "padding-top": "20px" } },
      [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "table",
                {
                  staticClass: "table table-lg dataTable no-footer",
                  attrs: { role: "grid", "aria-describedby": "user-list_info" }
                },
                [_c("tbody", { attrs: { id: "sslang-main-list" } })]
              )
            ])
          ])
        ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "spinner-border text-primary", attrs: { role: "status" } },
      [
        _c("span", { staticClass: "sr-only" }, [
          _vm._v("language translating...")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetLanguage.vue":
/*!*************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetLanguage.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemSetLanguage_vue_vue_type_template_id_40973a56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemSetLanguage.vue?vue&type=template&id=40973a56& */ "./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=template&id=40973a56&");
/* harmony import */ var _SystemSetLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemSetLanguage.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SystemSetLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SystemSetLanguage.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SystemSetLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemSetLanguage_vue_vue_type_template_id_40973a56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SystemSetLanguage_vue_vue_type_template_id_40973a56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemSetLanguage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetLanguage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetLanguage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=template&id=40973a56&":
/*!********************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=template&id=40973a56& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_template_id_40973a56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSetLanguage.vue?vue&type=template&id=40973a56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSetLanguage.vue?vue&type=template&id=40973a56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_template_id_40973a56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetLanguage_vue_vue_type_template_id_40973a56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);