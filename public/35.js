(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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




var coutryLists = [];
var precountryLists = []; //us-1-

var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var g_Cont = '';
var g_fname = 'en';
var org_iso = 'en'; //1;

var showlangDlg = true;
var vueOBJ = null;
var btntxt_edit = "";
var btntxt_change = "";
var pgtxt_select = "";
var permss;

function showSSLTransDlg() {
  $("#myLangTransModal").modal('show');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalConfigurationTranslation",
  data: function data() {
    return {
      pageid: 'webs-wesglobal-configuration-translation-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_configuration: '',
      mususu_system_set_lang: '',
      musususu_system_setting_language_trans: '',
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
      btntxt_change: '',
      btntxt_savechange: '',
      pgtxt_select: '',
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

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.permissionDefinition();
    this.getStoredLang();
  },
  computed: {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
    },
    cmusu_system_set: function cmusu_system_set() {
      return this.musu_system_set;
    },
    cmususu_system_set_lang: function cmususu_system_set_lang() {
      return this.mususu_system_set_lang;
    },
    cmusususu_system_setting_language_trans: function cmusususu_system_setting_language_trans() {
      return this.musususu_system_setting_language_trans;
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
    cmususu_webs_wesglobal_configuration: function cmususu_webs_wesglobal_configuration() {
      return this.mususu_webs_wesglobal_configuration;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cpgtxt_select: function cpgtxt_select() {
      return this.pgtxt_select;
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
    getStoredLang: function getStoredLang() {
      var _this = this;

      btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
      btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
      pgtxt_select = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_select');
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.webs_getStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg === "ok") {
          if (response.data.cnt > 0) {
            // stored_langs = JSON.parse(response.data.langlist);
            var langlist = response.data.langlist; //console.log(langlist);

            var otag = '';
            otag += '<option data-fname="" value="en" selected class="data-ajax" data-ajax="pgtxt_select">' + pgtxt_select + '</option>';

            for (var i = 0; i < langlist.length; i++) {
              var item = langlist[i];

              if (item.indexOf('-') > -1) {
                var shortname = item.split('-')[0];
                var isocode = item.split('-')[1];
                var name = item.split('-')[2];
                otag += '<option data-fname="' + shortname + '" value="' + shortname + '">' + name + '</option>';
              }
            }

            $('#ssl_trans_slt').html(otag);

            _this.getTransContLangs('en'); //when start first

          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    SSLChangeEvent: function SSLChangeEvent(id) {
      /*  $('select[id^="sslangselect_"]').change(function(){
        });*/
      var val = $('select[id=' + id + ']').val();
      $("#myLangTransModal").modal('show'); //
    },
    sslt_trans_btn: function sslt_trans_btn() {
      var _this2 = this;

      var value = $('#myLangTransModal #sslt-id').val();
      var str_type = $('#myLangTransModal #sslt-str-type').val();
      var str_key = $('#myLangTransModal #sslt-str-key').val();
      var iso = $('#myLangTransModal #sslt-iso').val();
      var str_cont = $('#myLangTransModal #sslt-trans-str').val();
      var str_cont = $.trim(str_cont);

      if (str_cont.length < 1) {
        alert('you have not content for translation!');
        return;
      }

      var pdata = {
        iso: iso,
        str_key: str_key,
        str_type: str_type,
        str_cont: str_cont,
        value: value,
        str_fname: g_fname
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.changeWesTranslation', pdata).then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          var status = response.data.status; //cckd

          var sts = vueOBJ.$store.getters.getContentChange;
          var ny = '';
          if (sts == 'y') ny = 'n';else ny = 'y';
          vueOBJ.$store.dispatch('ContentChange', ny); //cckd

          var localelang = vueOBJ.$store.getters.doDefaultLang;

          if (localelang == g_fname) {
            var cstr = str_type + '_' + str_key;
            var obj = _this2.$store.state.sitecontents;
            var keys = Object.keys(obj);

            for (var i = 0; i < keys.length; i++) {
              if (keys[i] == cstr) {
                obj[keys[i]] = str_cont;
                break;
              }
            }
          }

          vueOBJ.getTransContLangs(iso);
        }

        $('#myLangTransModal').modal('hide');
      })["catch"](function (error) {
        console.log(error);
      });
    },
    ssl_trans_search: function ssl_trans_search() {
      var objval = $('#ssl_trans_slt').val();
      g_fname = $("#ssl_trans_slt option:selected").attr('data-fname');
      var st = 'en';
      /*if (isNaN(objval))
          st='en';
      else*/

      st = objval; //st=parseInt(objval);

      pstart = 1;
      var iso = st;
      var txt = $('#ssl_orgname').val();
      txt = $.trim(txt);
      g_Cont = txt;
      this.getTransContLangs(iso);
    },
    getTransContLangs: function getTransContLangs(iso) {
      var postData = {
        start: pstart,
        cnt: pcnt,
        orgiso: org_iso,
        iso: iso,
        searchcont: g_Cont
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getWesTranslation', postData).then(function (response) {
        var msg = response.data.msg;
        var total = response.data.total;

        if (total <= 0) {
          $('#sslang-trans-list').html('');
          $('#ssl_trans_nav').html('');
          return;
        }

        if (msg === "ok") {
          //var stored_langs = JSON.parse(response.data.addlist);
          pstart = response.data.start;
          var totalpage = response.data.totalpage;
          var list = response.data.list;
          var ltag = '';
          var iso = response.data.iso;

          for (var j = 0; j < list.length; j++) {
            var item = list[j];
            var id = item.id;
            var str_type = item.str_type;
            var str_key = item.str_key;
            var str_cont = item.str_cont;
            var str_iso = item.iso;
            var tid = parseInt(item.tid);
            var tcont = item.tcont;
            var tiso = item.tiso;
            var explain = "";
            if (str_type == "mu") explain = "(Main Menu)";else if (str_type == "musu") explain = "(Menu &nbsp;/&nbsp; Sub Menu)";else if (str_type == "mususu") explain = "(Menu &nbsp;/&nbsp; Sub Menu &nbsp;/&nbsp; Sub Menu)";else if (str_type == "pgtit") explain = "(Page Title)";else if (str_type == "pgcont") explain = "(Page Content)";else if (str_type == "mutit") explain = "(Menu Title)";
            ltag += '<tr role="row" class="odd">';
            ltag += '<td  style="padding:20px 30px;">';
            ltag += '<span class="iti__country-name">' + str_cont + '&nbsp;&nbsp;' + explain + '</span>';
            ltag += '</td>';
            ltag += ' <td  style="padding:20px 30px;">';
            ltag += ' <span class="iti__country-name">' + tcont + '</span>';
            ltag += '</td>';
            ltag += '<td class="text-right" style="padding:20px 30px;">';
            ltag += '<div class="form-group m-b-0 border-top-0">';
            ltag += '<select class="my-border-radius-slt form-control float-right" data-id="' + id + '" data-type="' + str_type + '" data-key="' + str_key + '" data-cont="' + str_cont + '" data-iso="' + str_iso + '" data-tid="' + tid + '" data-tcont="' + tcont + '" data-tiso="' + tiso + '" id="sslang_status_select_' + j + '" >';
            ltag += '<option value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
            if (tid > 0) ltag += '<option value="change" class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</option>';
            /*  else
                  ltag +='<option value="add">&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;</option>';*/

            /* ltag +='<option value="delete">Delete</option>';*/

            ltag += '</select>';
            ltag += '</div>';
            ltag += ' </td>';
            ltag += ' </tr>';
          }

          $('#sslang-trans-list').html(ltag);
          var nav_tag = '';
          nav_tag += '<nav aria-label="..." class="mb-4">';
          nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
          var disble = "";
          if (pstart == 1) disble = "disabled";
          var prenum = parseInt(pstart) - 1;
          nav_tag += '<li class="page-item  ' + disble + ' ">';
          nav_tag += '<a class="page-link" data-tiso="' + iso + '" href="#"  data-num="sflunavnum_' + prenum + '" >';
          nav_tag += '<i class="ti-angle-left"></i>';
          nav_tag += '</a>';
          nav_tag += '</li>'; //alert(totalpage);

          pnum = pstart <= numg ? 1 : parseInt(pstart) - 1; // console.log("total:"+total);

          for (var idx = 0; idx < numg; idx++) {
            var actv = "";
            var aria_current = '';
            var spantag = '';
            var oid = '';

            if (pnum == pstart) {
              actv = 'active';
              aria_current = 'aria-current="page"';
              spantag = '<span class="sr-only">(current)</span>';
            } else oid = "sflunavnum_" + pnum;

            nav_tag += '<li class="page-item ' + actv + '"  ' + aria_current + '>';
            nav_tag += '<a class="page-link" data-tiso="' + iso + '" data-num="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
            nav_tag += '</li>';
            if (pnum == totalpage) break;
            pnum = pnum + 1;
          }

          var nextnum = parseInt(pstart) + 1;
          var edisble = "";
          if (pstart == totalpage) edisble = "disabled";
          nav_tag += '<li class="page-item ' + edisble + ' ">';
          nav_tag += '<a class="page-link" data-tiso="' + iso + '"  data-num="sflunavnum_' + nextnum + '" href="#">';
          nav_tag += '<i class="ti-angle-right"></i>';
          nav_tag += '</a>';
          nav_tag += '</li>';
          nav_tag += '</ul>';
          nav_tag += '</nav>';
          $('#ssl_trans_nav').html(nav_tag);
          $('a[data-num^="sflunavnum_"]').click(function () {
            var oid = $(this).attr("data-num");
            pstart = oid.split('_')[1];
            var ttiso = $(this).attr("data-tiso");
            vueOBJ.getTransContLangs(ttiso);
          });
          $('select[id^="sslang_status_select_"]').change(function () {
            var data_type = $(this).attr("data-type");
            var data_key = $(this).attr("data-key");
            var data_cont = $(this).attr("data-cont");
            var data_id = $(this).attr("data-id");
            var data_tid = $(this).attr("data-tid");
            var data_tcont = $(this).attr("data-tcont");
            var data_tiso = $(this).attr("data-tiso");
            var value = $(this).val();

            if (value != '') {
              if (value == "add") {
                if (permss.pcreate == 1) {
                  //$('#myLangTransModal .modal-title').text('Add String');
                  //$('#myLangTransModal #lb_lang_org').text('Basic String');
                  $('#myLangTransModal #sslt-org-str').val(data_cont); //$('#myLangTransModal #sslt-org-str').attr('readonly','readonly');

                  $('#myLangTransModal #lb_lang_trans').text('String to Translation');
                  $('#myLangTransModal #sslt-trans-str').val(data_tcont);
                  $('#myLangTransModal #sslt-str-type').val(data_type);
                  $('#myLangTransModal #sslt-str-key').val(data_key);
                  $('#myLangTransModal #sslt-iso').val(data_tiso);
                  $('#myLangTransModal #sslt-id').val('add'); //$('#myLangTransModal #sslt-model-add span').text('+ Add');

                  showSSLTransDlg();
                } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
              } else if (value == "change") {
                if (permss.pwrite == 1) {
                  if (parseInt(data_tid) < 1) {
                    alert('No empty to change data!');
                    return;
                  } else {
                    //$('#myLangTransModal .modal-title').text('Edit String');
                    //$('#myLangTransModal #lb_lang_org').text('Basic String');
                    $('#myLangTransModal #sslt-org-str').val(data_cont); // $('#myLangTransModal #sslt-org-str').attr('readonly','readonly');
                    //$('#myLangTransModal #lb_lang_trans').text('Change String');

                    $('#myLangTransModal #sslt-trans-str').val(data_tcont);
                    $('#myLangTransModal #sslt-str-type').val(data_type);
                    $('#myLangTransModal #sslt-str-key').val(data_key);
                    $('#myLangTransModal #sslt-iso').val(data_tiso);
                    $('#myLangTransModal #sslt-id').val('change'); //$('#myLangTransModal #sslt-model-add span').text('Save Change');

                    showSSLTransDlg(); //here
                  }
                } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
              } else if (value == "delete") {
                if (permss.pdelete == 1) {
                  if (parseInt(data_tid) < 1) {
                    alert('No empty to change data!');
                    return;
                  } else {
                    if (window.confirm("Do you want to delete this item")) {
                      var pdata = {
                        iso: data_tiso,
                        str_key: data_key,
                        str_type: data_type
                      };
                      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.deletesslangbyiso', pdata).then(function (response) {
                        var msg = response.data.msg;

                        if (msg == "ok") {
                          vueOBJ.getTransContLangs(data_tiso);
                        }
                      })["catch"](function (error) {
                        console.log(error);
                      });
                    }
                  }
                } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
              }
            }
          });
        }
      })["catch"](function (error) {
        console.log(error);
      }); //$( "#ssl_trans_slt option:selected" ).text();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table.table-lg td {\n    padding: 0.7rem 0.75rem;\n}\n.sl-tab-container{\n    display: none;\n}\n.sl-tab-container.active{\n    display: block;\n}\n.spinner-border {\n    display: none;\n    width: 6rem;\n    height: 6rem;\n    vertical-align: text-bottom;\n    border: 0.6em solid currentColor;\n    border-right-color: transparent;\n    border-radius: 50%;\n    -webkit-animation: spinner-border .75s linear infinite;\n    animation: spinner-border .75s linear infinite;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=template&id=70cda842&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=template&id=70cda842& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_system_setting_language_trans))]),
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
              _vm._s(_vm.cmu_webs) +
              "   >>  " +
              _vm._s(_vm.cmusu_webs_wesglobal) +
              "  >>  " +
              _vm._s(_vm.cmususu_webs_wesglobal_configuration) +
              "   >>  " +
              _vm._s(_vm.cmusususu_system_setting_language_trans) +
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
        staticStyle: { "margin-top": "25px" },
        attrs: { id: "SLTContainer" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("h6", { staticClass: "card-title m-b-30" }, [
                      _vm._v(_vm._s(_vm.cpgtxt_filters))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "h6",
                      {
                        staticClass: "card-title m-b-10",
                        staticStyle: { color: "#878585", "font-size": "13px" }
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_includestring))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "h6",
                      {
                        staticClass: "card-title m-b-10",
                        staticStyle: { color: "#878585", "font-size": "13px" }
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_translationlanguage))]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group m-b-0" }, [
                      _c("input", {
                        staticClass: "form-control w-75",
                        attrs: {
                          type: "text",
                          placeholder: "",
                          id: "ssl_orgname"
                        },
                        on: {
                          keyup: function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              $event.keyCode !== 13
                            ) {
                              return null
                            }
                            return _vm.ssl_trans_search()
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group m-b-0" }, [
                      _c("select", {
                        staticClass: "form-control w-75",
                        attrs: { id: "ssl_trans_slt", name: "ssl_trans_slt" },
                        on: {
                          change: function($event) {
                            return _vm.ssl_trans_search()
                          }
                        }
                      })
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
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "table",
                    {
                      staticClass: "table table-lg dataTable no-footer",
                      attrs: {
                        role: "grid",
                        "aria-describedby": "lang-list_info"
                      }
                    },
                    [
                      _c("thead", [
                        _c("tr", { attrs: { role: "row" } }, [
                          _c(
                            "th",
                            {
                              staticClass: "sorting",
                              staticStyle: {
                                width: "40%",
                                padding: "30px 30px 20px 30px",
                                "font-size": "13px"
                              },
                              attrs: {
                                tabindex: "0",
                                "aria-controls": "lang-list",
                                rowspan: "1",
                                colspan: "1",
                                "aria-label":
                                  "language: activate to sort column ascending"
                              }
                            },
                            [_vm._v(_vm._s(_vm.cpgtxt_basicstring))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "sorting",
                              staticStyle: {
                                width: "40%",
                                padding: "30px 30px 20px 30px",
                                "font-size": "13px"
                              },
                              attrs: {
                                tabindex: "0",
                                "aria-controls": "lang-list",
                                rowspan: "1",
                                colspan: "1",
                                "aria-label":
                                  "language: activate to sort column ascending"
                              }
                            },
                            [_vm._v(_vm._s(_vm.cpgtxt_translationlanguage))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "sorting",
                              staticStyle: {
                                width: "20%",
                                padding: "30px 30px 20px 30px",
                                "font-size": "13px"
                              },
                              attrs: {
                                tabindex: "0",
                                "aria-controls": "lang-list",
                                rowspan: "1",
                                colspan: "1",
                                "aria-label":
                                  "action: activate to sort column ascending"
                              }
                            },
                            [_vm._v(" ")]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", {
                        staticStyle: { "font-size": "13px" },
                        attrs: { id: "sslang-trans-list" }
                      })
                    ]
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(1)
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "myLangTransModal" } },
      [
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
                    staticStyle: {
                      color: "#055ada",
                      "font-size": "17px",
                      "font-weight": "800",
                      "padding-top": "10px",
                      "padding-left": "10px"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_sua_edit))]
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
                    attrs: { id: "sfl_alert" }
                  },
                  [_vm._v("Create Translate String.")]
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
                  attrs: { id: "myLangTransModalbody" }
                },
                [
                  _c("div", { staticClass: "panel", attrs: { id: "tab3" } }, [
                    _c("form", { attrs: { id: "ssfi-num-add-frm" } }, [
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
                                  _c("div", { staticClass: "col-md-2" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticStyle: {
                                            "margin-top": "8px",
                                            color: "#666",
                                            width: "100px"
                                          },
                                          attrs: { id: "lb_lang_org" }
                                        },
                                        [_vm._v(_vm._s(_vm.cpgtxt_basicstring))]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _vm._m(3),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-2" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticStyle: {
                                            "margin-top": "8px",
                                            color: "#666",
                                            width: "100px"
                                          },
                                          attrs: { id: "lb_lang_trans" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.cpgtxt_stringtotranslation
                                            )
                                          )
                                        ]
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
                              attrs: { id: "sslt-model-add" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.sslt_trans_btn()
                                }
                              }
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.cbtntxt_savechange))
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        attrs: {
                          type: "hidden",
                          id: "sslt-str-type",
                          value: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden", id: "sslt-str-key", value: "" }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden", id: "sslt-iso", value: "" }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden", id: "sslt-id", value: "" }
                      })
                    ])
                  ])
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(5)
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
          id: "webs-wesglobal-configuration-translation-fav",
          "data-status": "off",
          "data-page-info":
            "Translation_webs-wesglobal-configuration-translation"
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12", attrs: { id: "ssl_trans_nav" } })
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
      { staticClass: "col-md-10", staticStyle: { "padding-left": "62px" } },
      [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: { width: "300px" },
            attrs: {
              type: "text",
              readonly: "",
              placeholder: "",
              name: "sslt-org-str",
              id: "sslt-org-str"
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
      { staticClass: "col-md-10", staticStyle: { "padding-left": "62px" } },
      [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: { width: "300px" },
            attrs: {
              type: "text",
              placeholder: "",
              name: "sslt-trans-str",
              id: "sslt-trans-str"
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

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue":
/*!*******************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalConfigurationTranslation_vue_vue_type_template_id_70cda842___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationTranslation.vue?vue&type=template&id=70cda842& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=template&id=70cda842&");
/* harmony import */ var _WebsWesGlobalConfigurationTranslation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationTranslation.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalConfigurationTranslation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalConfigurationTranslation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalConfigurationTranslation_vue_vue_type_template_id_70cda842___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalConfigurationTranslation_vue_vue_type_template_id_70cda842___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationTranslation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=template&id=70cda842&":
/*!**************************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=template&id=70cda842& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_template_id_70cda842___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalConfigurationTranslation.vue?vue&type=template&id=70cda842& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalConfigurationTranslation.vue?vue&type=template&id=70cda842&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_template_id_70cda842___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalConfigurationTranslation_vue_vue_type_template_id_70cda842___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);