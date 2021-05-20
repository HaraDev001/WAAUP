(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SystemLanguage",
  data: function data() {
    return {
      pageid: 'system-setting-language-fav',
      mu_system: '',
      musu_system_set: '',
      mususu_system_set_lang: '',
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
      pgtxt_select: '',
      btntxt_edit: '',
      btntxt_change: ''
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

    this.getStoredLang();
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
    cpgtxt_select: function cpgtxt_select() {
      return this.pgtxt_select;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
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
      if (showlangDlg === true) {
        $("#myLangModal").modal('show');
        sslangAddonDlg();
      } //$('input[id^="onelangCheckbox_"]').prop('checked',false);

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
        c_tag += '<option value="">Edit</option>';
        if (status != null && status != "" && status == "enable") c_tag += '<option value="enable" selected>Enable</option>';else c_tag += '<option value="enable">Enable</option>';
        if (status != null && status != "" && status == "disable") c_tag += '<option value="disable" selected>Disable</option>';else c_tag += '<option value="disable">Disable</option>';
        if (status != null && status != "" && status == "delete") c_tag += '<option value="delete" selected>Delete</option>';else c_tag += '<option value="delete">Delete</option>';
        c_tag += '</select>';
        c_tag += '</div>';
        c_tag += '</td>';
        c_tag += '</tr>';
        $('#sslang-main-list').append(c_tag);
      }

      var vueObj = this;
      /* start event */

      $('select[id^="sslangselect_"]').change(function () {
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
    },
    SLtabClick: function SLtabClick(n) {
      $(".sl-tab-container").hide();
      $(".btn.btn-outline-light.dash-my-btn-0.lang_tab").removeClass('active');

      if (n == 1) {
        $("#SLLContainer").show();
        $("#system-setting-lang-btn").addClass('active');
      } else {
        $("#SLTContainer").show();
        $("#system-setting-tran-btn").addClass('active');
        var langlist = _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getStoreLangList(); //console.log(langlist);

        var otag = '';
        otag += '<option data-fname="" value="0" selected class="data-ajax" data-ajax="pgtxt_select">' + pgtxt_select + '</option>';

        for (var i = 0; i < langlist.length; i++) {
          var item = langlist[i];

          if (item.indexOf('-') > -1) {
            var shortname = item.split('-')[0];
            var isocode = item.split('-')[1];
            var name = item.split('-')[2];
            otag += '<option data-fname="' + shortname + '" value="' + isocode + '">' + name + '</option>';
          }
        }

        $('#ssl_trans_slt').html(otag);
        this.getTransContLangs('0'); //when start first
      }
    },
    SSLChangeEvent: function SSLChangeEvent(id) {
      /*  $('select[id^="sslangselect_"]').change(function(){
        });*/
      var val = $('select[id=' + id + ']').val();
      $("#myLangTransModal").modal('show'); //
    },
    sslt_trans_btn: function sslt_trans_btn() {
      var _this3 = this;

      var vueOBJ = this;
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
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.changesslangbyiso', pdata).then(function (response) {
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
            var obj = _this3.$store.state.sitecontents;
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
      var st = 0;
      if (isNaN(objval)) st = 0;else st = parseInt(objval);
      var iso = st;
      var txt = $('#ssl_orgname').val();
      txt = $.trim(txt);
      g_Cont = txt;
      this.getTransContLangs(iso);
    },
    getTransContLangs: function getTransContLangs(iso) {
      var vueOBJ = this;
      var postData = {
        start: pstart,
        cnt: pcnt,
        orgiso: org_iso,
        iso: iso,
        searchcont: g_Cont
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getsslangbyiso', postData).then(function (response) {
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
                $('#myLangTransModal .modal-title').text('Add String');
                $('#myLangTransModal #lb_lang_org').text('Basic String');
                $('#myLangTransModal #sslt-org-str').val(data_cont); //$('#myLangTransModal #sslt-org-str').attr('readonly','readonly');

                $('#myLangTransModal #lb_lang_trans').text('String to Translation');
                $('#myLangTransModal #sslt-trans-str').val(data_tcont);
                $('#myLangTransModal #sslt-str-type').val(data_type);
                $('#myLangTransModal #sslt-str-key').val(data_key);
                $('#myLangTransModal #sslt-iso').val(data_tiso);
                $('#myLangTransModal #sslt-id').val('add');
                $('#myLangTransModal #sslt-model-add span').text('+ Add');
                showSSLTransDlg();
              } else if (value == "change") {
                if (parseInt(data_tid) < 1) {
                  alert('No empty to change data!');
                  return;
                } else {
                  $('#myLangTransModal .modal-title').text('Edit String');
                  $('#myLangTransModal #lb_lang_org').text('Basic String');
                  $('#myLangTransModal #sslt-org-str').val(data_cont); // $('#myLangTransModal #sslt-org-str').attr('readonly','readonly');

                  $('#myLangTransModal #lb_lang_trans').text('Change String');
                  $('#myLangTransModal #sslt-trans-str').val(data_tcont);
                  $('#myLangTransModal #sslt-str-type').val(data_type);
                  $('#myLangTransModal #sslt-str-key').val(data_key);
                  $('#myLangTransModal #sslt-iso').val(data_tiso);
                  $('#myLangTransModal #sslt-id').val('change');
                  $('#myLangTransModal #sslt-model-add span').text('Save Change');
                  showSSLTransDlg(); //here
                }
              } else if (value == "delete") {
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table.table-lg td {\n    padding: 0.7rem 0.75rem;\n}\n.sl-tab-container{\n    display: none;\n}\n.sl-tab-container.active{\n    display: block;\n}\n.spinner-border {\n    display: none;\n    width: 6rem;\n    height: 6rem;\n    vertical-align: text-bottom;\n    border: 0.6em solid currentColor;\n    border-right-color: transparent;\n    border-radius: 50%;\n    -webkit-animation: spinner-border .75s linear infinite;\n    animation: spinner-border .75s linear infinite;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemLanguage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=template&id=3abb918c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=template&id=3abb918c& ***!
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
        _c("h3", [_vm._v(_vm._s(_vm.cmususu_system_set_lang))]),
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
              "\n                  "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card border-0 m-b-10" }, [
          _c("div", [
            _c(
              "div",
              {
                staticClass:
                  "btn btn-outline-light  dash-my-btn-0  lang_tab active p-l-r-30 m-r-15",
                attrs: { id: "system-setting-lang-btn" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.SLtabClick(1)
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "icon",
                    staticStyle: { color: "white", fill: "white" },
                    attrs: {
                      t: "1599123866231",
                      viewBox: "0 0 1024 1024",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "p-id": "11767",
                      width: "17",
                      height: "17"
                    }
                  },
                  [
                    _c("path", {
                      staticStyle: { color: "white", fill: "white" },
                      attrs: {
                        d:
                          "M673.409026 907.907944l-90.543629-98.029912H126.363712c-48.216419 0-87.320961-41.029587-87.320961-91.28988V190.779023c0-50.402889 39.251892-91.28988 87.320961-91.28988h755.049918c48.216419 0 87.316208 41.029587 87.316208 91.28988v527.956478c0 50.402889-39.247138 91.28988-87.316208 91.28988H770.540583l-97.131557 97.882563zM126.363712 135.390031c-29.15135 0-52.979121 24.9115-52.979121 55.388992v527.956478c0 30.477492 23.827771 55.388992 52.979121 55.388992h471.222333l76.669049 83.081111 82.277821-83.081111h124.742872c29.15135 0 52.979121-24.9115 52.979122-55.388992V190.779023c0-30.477492-23.827771-55.388992-52.979122-55.388992H126.363712z",
                        fill: "#707070",
                        "p-id": "11768"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "M670.999155 921.601901l-91.812731-101.437953H131.41636c-51.025558 0-92.378362-44.304539-92.378362-98.643074V189.500413c0-54.485884 41.490647-98.633568 92.378362-98.633567h744.935117c51.025558 0 92.378362 44.290279 92.378361 98.633567v532.020461c0 54.490638-41.490647 98.643074-92.378361 98.643074h-106.889869l-98.462453 101.437953zM131.41636 104.009432c-44.114411 0-79.924989 38.391563-79.924989 85.348385v532.015708c0 47.108924 35.953174 85.343632 79.924989 85.343632h453.155435l86.845641 95.981284 93.062822-95.981284h111.871219c44.109658 0 79.924989-38.382057 79.924988-85.343632V189.500413c0-47.099418-35.94842-85.348385-79.924988-85.348385H131.41636v-0.142596z m540.414604 766.353018l-78.133033-86.522425H131.41636c-32.221915 0-58.497582-28.058115-58.497582-62.471253V189.500413c0-34.403632 26.270914-62.4665 58.497582-62.4665h744.935117c32.217162 0 58.502335 28.058115 58.502334 62.4665v532.020461c0 34.403632-26.275667 62.461747-58.502334 62.461747h-120.583827l-83.936686 86.379829zM126.506308 135.637197c-25.781334 0-46.652618 22.292489-46.652617 49.813493v539.036178c0 27.535264 20.876036 49.822999 46.652617 49.823h473.698748l74.116583 81.983122 79.592265-81.983122h127.219288c25.781334 0 46.652618-22.292489 46.652617-49.823V185.460197c0-27.530511-20.876036-49.80874-46.652617-49.80874H126.506308v-0.01426z",
                        fill: "#707070",
                        "p-id": "11769"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticStyle: { color: "white", fill: "white" },
                      attrs: {
                        d:
                          "M483.480825 227.530733h43.510755l188.283595 471.711912h-52.123546l-55.094294-142.890574H410.866251L359.018391 699.242645H307.080219m121.83867-193.649953h159.864237l-49.219343-130.698627c-14.963061-39.660666-26.237641-72.376914-33.481512-97.830277a601.554963 601.554963 0 0 1-25.458117 90.11584l-51.705265 138.413064z",
                        fill: "#707070",
                        "p-id": "11770"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticStyle: { color: "white", fill: "white" },
                      attrs: {
                        d:
                          "M722.371696 713.136237h-68.127556l-55.374732-146.983076h-188.464217l-52.118792 146.983076H299.765051l187.537343-499.494342h35.282973l199.786329 499.494342z m-58.507088-14.288107h46.799967l-188.307361-470.913375h-34.726849l-176.828393 470.918128h37.721362l52.118793-146.97357h208.009358l55.213123 146.968817z m-69.491723-184.904073H413.504275l55.688443-152.054736a632.531541 632.531541 0 0 0 25.287002-91.579825l5.585005-29.04678 7.914071 28.409852c7.286649 25.871645 18.45666 59.685881 33.505278 99.992982l52.888811 144.278507z m-189.486154 26.632157h198.265306l-64.928655-175.801703c-14.867997-40.040922-27.107476-75.604334-36.718438-106.020034a918.540843 918.540843 0 0 1-28.195958 94.612364l-68.422255 187.209373z",
                        fill: "#707070",
                        "p-id": "11771"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "m-l-10" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_language))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "btn btn-outline-light  dash-my-btn-0 lang_tab p-l-r-30",
                attrs: { id: "system-setting-tran-btn" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.SLtabClick(2)
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "icon",
                    staticStyle: { color: "white", fill: "white" },
                    attrs: {
                      t: "1599123973688",
                      viewBox: "0 0 1024 1024",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "p-id": "12823",
                      width: "17",
                      height: "17"
                    }
                  },
                  [
                    _c("path", {
                      staticStyle: { color: "white", fill: "white" },
                      attrs: {
                        d:
                          "M981.845333 738.304H925.013333a159.232 159.232 0 0 0-27.477333-66.389333l40.106667-40.106667c10.069333-10.069333 10.069333-26.453333 0-36.522667-10.069333-10.069333-26.453333-10.069333-36.522667 0l-40.106667 40.106667a157.2864 157.2864 0 0 0-66.389333-27.648v-56.661333c0-14.336-11.605333-25.770667-25.770667-25.770667-14.336 0-25.770667 11.605333-25.770666 25.770667v56.661333c-24.405333 4.096-47.104 13.653333-66.389334 27.477333l-40.106666-40.106666c-10.069333-10.069333-26.453333-10.069333-36.522667 0-10.069333 10.069333-10.069333 26.453333 0 36.522666l40.106667 40.106667a157.2864 157.2864 0 0 0-27.648 66.389333h-56.661334c-14.336 0-25.770667 11.605333-25.770666 25.770667 0 14.336 11.605333 25.770667 25.770666 25.770667h56.661334c4.096 24.405333 13.653333 47.104 27.477333 66.389333l-40.106667 40.106667c-10.069333 10.069333-10.069333 26.453333 0 36.522666 10.069333 10.069333 26.453333 10.069333 36.522667 0l40.106667-40.106666c19.285333 13.994667 41.984 23.552 66.389333 27.648v56.832c0 14.336 11.605333 25.770667 25.770667 25.770666s25.770667-11.605333 25.770666-25.770666v-56.661334a159.232 159.232 0 0 0 66.389334-27.477333l40.106666 40.106667c10.069333 10.069333 26.453333 10.069333 36.522667 0 10.069333-10.069333 10.069333-26.453333 0-36.522667l-40.106667-40.106667a157.2864 157.2864 0 0 0 27.648-66.389333h56.661334c14.336 0 25.770667-11.605333 25.770666-25.770667 0.170667-14.336-11.434667-25.941333-25.6-25.941333z m-212.992 133.12c-59.221333 0-107.349333-48.128-107.349333-107.349333s48.128-107.349333 107.349333-107.349334 107.349333 48.128 107.349334 107.349334-48.298667 107.349333-107.349334 107.349333z",
                        "p-id": "12824"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "M273.92 746.496h65.024l73.216-178.858667 50.346667-1.024 55.466666-49.664-83.968 1.365334 108.032-280.405334 109.738667 272.554667-64.682667 1.194667 43.178667 44.032 79.36-13.994667-6.485333-62.805333-129.365334-298.325334h-63.658666",
                        "p-id": "12825"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "M517.290667 954.368H136.021333c-44.714667 0-81.066667-36.693333-81.066666-81.749333V131.584c0-45.056 36.352-81.749333 81.066666-81.749333h731.989334c44.714667 0 81.066667 36.693333 81.066666 81.749333v356.010667c0 14.165333-11.434667 25.6-25.6 25.6s-25.6-11.434667-25.6-25.6V131.584c0-16.896-13.312-30.549333-29.866666-30.549333H136.021333c-16.384 0-29.866667 13.653333-29.866666 30.549333v741.034667c0 16.896 13.312 30.549333 29.866666 30.549333h381.269334c14.165333 0 25.6 11.434667 25.6 25.6s-11.434667 25.6-25.6 25.6z",
                        "p-id": "12826"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "m-l-10" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_translation))
                ])
              ]
            )
          ])
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
    _c(
      "div",
      {
        staticClass: "sl-tab-container",
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
        _vm._m(2)
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
                      _vm._m(3),
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
                          _vm._m(4),
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
                                  _vm._m(5),
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
                                  _vm._m(6)
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
                                _vm._v("+ " + _vm._s(_vm.cbtntxt_add))
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
    _vm._m(7)
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
          id: "system-setting-language-fav",
          "data-status": "off",
          "data-page-info": "Language_system-setting-language"
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12", attrs: { id: "ssl_trans_nav" } })
    ])
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

/***/ "./resources/vuedir/pages/system/SystemLanguage.vue":
/*!**********************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemLanguage.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemLanguage_vue_vue_type_template_id_3abb918c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemLanguage.vue?vue&type=template&id=3abb918c& */ "./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=template&id=3abb918c&");
/* harmony import */ var _SystemLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemLanguage.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SystemLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SystemLanguage.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SystemLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemLanguage_vue_vue_type_template_id_3abb918c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SystemLanguage_vue_vue_type_template_id_3abb918c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemLanguage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemLanguage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemLanguage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=template&id=3abb918c&":
/*!*****************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=template&id=3abb918c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_template_id_3abb918c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemLanguage.vue?vue&type=template&id=3abb918c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemLanguage.vue?vue&type=template&id=3abb918c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_template_id_3abb918c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemLanguage_vue_vue_type_template_id_3abb918c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);