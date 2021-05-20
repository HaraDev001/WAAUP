(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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



var vueOBJ = null;
var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;
var pstart1 = 1;
var pnum1 = pstart1;
var pcnt1 = 5;
var numg1 = 5;
var pstart_n = 1;
var pnum_n = pstart_n;
var pcnt_n = 5;
var numg_n = 5;
var permss;
var sel_val = '';

function showSSFEmailDlg() {
  $("#myAlertEmailAddModal").modal('show');
}

function deleteSiteEmaillist(id) {
  var postData = {
    id: id,
    value: sel_val
  };
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.deleteSiteEmaillist', postData).then(function (response) {
    var msg = response.data.msg;

    if (msg == "ok") {
      vueOBJ.getSFEmailList();
    } else {
      console.log(response.data.msg);
    }
  })["catch"](function (error) {
    console.log(error);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SystemFieldsEmail",
  data: function data() {
    return {
      pageid: 'apps-website-fields-email-fav',
      mu_apps: '',
      musu_apps_website: '',
      mususu_apps_website_fields: '',
      musususu_apps_website_fields_email: '',
      btntxt_img: '',
      btntxt_text: '',
      btntxt_number: '',
      pgtxt_number: '',
      btntxt_email: '',
      btntxt_date: '',
      pgtxt_name: '',
      pgtxt_font: '',
      pgtxt_size: '',
      pgtxt_style: '',
      pgtxt_operation: '',
      btntxt_add: '',
      pgtxt_email: '',
      pgtxt_ssf_footerlimit: '',
      pgtxt_ssf_limit: '',
      btntxt_savechange: '',
      pgtxt_line: '',
      pgtxt_weight: '',
      pgtxt_createimage: '',
      pgtxt_createemail: '',
      pgtxt_width: '',
      pgtxt_height: '',
      pgtxt_pixels: '',
      pgtxt_createnumber: '',
      btntxt_change: '',
      btntxt_edit: '',
      btntxt_delete: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      btntxt_ok: '',
      btntxt_cancel: ''
    };
  },
  computed: {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmu_apps: function cmu_apps() {
      return this.mu_apps;
    },
    cmusu_apps_website: function cmusu_apps_website() {
      return this.musu_apps_website;
    },
    cmususu_apps_website_fields: function cmususu_apps_website_fields() {
      return this.mususu_apps_website_fields;
    },
    cmusususu_apps_website_fields_email: function cmusususu_apps_website_fields_email() {
      return this.musususu_apps_website_fields_email;
    },
    cbtntxt_img: function cbtntxt_img() {
      return this.btntxt_img;
    },
    cbtntxt_text: function cbtntxt_text() {
      return this.btntxt_text;
    },
    cbtntxt_number: function cbtntxt_number() {
      return this.btntxt_number;
    },
    cbtntxt_email: function cbtntxt_email() {
      return this.btntxt_email;
    },
    cbtntxt_date: function cbtntxt_date() {
      return this.btntxt_date;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_font: function cpgtxt_font() {
      return this.pgtxt_font;
    },
    cpgtxt_width: function cpgtxt_width() {
      return this.pgtxt_width;
    },
    cpgtxt_height: function cpgtxt_height() {
      return this.pgtxt_height;
    },
    cpgtxt_pixels: function cpgtxt_pixels() {
      return this.pgtxt_pixels;
    },
    cpgtxt_size: function cpgtxt_size() {
      return this.pgtxt_size;
    },
    cpgtxt_style: function cpgtxt_style() {
      return this.pgtxt_style;
    },
    cpgtxt_line: function cpgtxt_line() {
      return this.pgtxt_line;
    },
    cpgtxt_createnumber: function cpgtxt_createnumber() {
      return this.pgtxt_createnumber;
    },
    cpgtxt_operation: function cpgtxt_operation() {
      return this.pgtxt_operation;
    },
    cpgtxt_ssf_footerlimit: function cpgtxt_ssf_footerlimit() {
      return this.pgtxt_ssf_footerlimit;
    },
    cpgtxt_ssf_limit: function cpgtxt_ssf_limit() {
      return this.pgtxt_ssf_limit;
    },
    cbtntxt_savechange: function cbtntxt_savechange() {
      return this.btntxt_savechange;
    },
    cpgtxt_weight: function cpgtxt_weight() {
      return this.pgtxt_weight;
    },
    cpgtxt_email: function cpgtxt_email() {
      return this.pgtxt_email;
    },
    cpgtxt_createimage: function cpgtxt_createimage() {
      return this.pgtxt_createimage;
    },
    cpgtxt_createemail: function cpgtxt_createemail() {
      return this.pgtxt_createemail;
    },
    cpgtxt_number: function cpgtxt_number() {
      return this.pgtxt_number;
    },
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cpgtxt_wantdeleteitem: function cpgtxt_wantdeleteitem() {
      return this.pgtxt_wantdeleteitem;
    },
    cpgtxt_notpermission: function cpgtxt_notpermission() {
      return this.pgtxt_notpermission;
    },
    cpgtxt_notification: function cpgtxt_notification() {
      return this.pgtxt_notification;
    },
    cbtntxt_ok: function cbtntxt_ok() {
      return this.btntxt_ok;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    contentchange: function contentchange() {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        // console.log(obj.hasOwnProperty(key));
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.permissionDefinition();
    this.getSFEmailList();
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
    ShowSSFEmailInitDLG: function ShowSSFEmailInitDLG() {
      if (permss.pcreate == 1) {
        $('#myAlertEmailAddModal .modal-title').text('Create Email');
        $('#myAlertEmailAddModal #ssfe-email').val('');
        $('#myAlertEmailAddModal #ssfe-id').val('');
        $('#myAlertEmailAddModal #ssfe-model-add span').text('+ Add');
        showSSFEmailDlg();
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
    },
    ssf_model_email_add: function ssf_model_email_add() {
      var vueOBJ = this;
      var email = $.trim($('#ssfe-email').val());

      if (email == '') {
        alert("you must empty this fields.");
      }
      /*
      else if(!myjs.data.verifyEmail(email)){
         alert("not email type");
      }*/
      else {
          var id = $('#myAlertEmailAddModal #ssfe-id').val();
          var etype = 'save';

          if (id != '' && parseInt(id) > 0) {
            etype = 'change';
          } //userinfo.username


          var postData = {
            userid: '',
            email: email,
            etype: etype,
            cid: parseInt(id)
          };
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.savesitefieldemail', postData).then(function (response) {
            var msg = response.data.msg;

            if (msg == "ok") {
              $('#ssfe-email').val('');
              $('#ssfe-id').val('');
              vueOBJ.getSFEmailList();
            } else {
              if (msg == 'duplicate') {
                alert('Email already exists.');
              } else console.log(response.data.message);
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
    },
    getSFEmailList: function getSFEmailList() {
      var vueOBJ = this;
      var postData = {
        start: pstart1,
        cnt: pcnt1
      };
      var btntxt_change = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
      var btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
      var btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.getSFEmailList', postData).then(function (response) {
        var msg = response.data.msg;
        var total = response.data.total;

        if (total <= 0) {
          $('#siteemaillists').html('');
          $('#ssmu_page_nav_email').html('');
          return;
        }

        if (msg == "ok") {
          pstart1 = response.data.start;
          var totalpage = response.data.totalpage;
          var logolists = response.data.list; //console.log(logolists);

          var tag = "";

          for (var i = 0; i < logolists.length; i++) {
            var list = logolists[i];
            var id = list.id;
            var email = list.email;
            var userid = list.userid;
            var cls = '';
            if (i < logolists.length - 1) cls = 'bot';
            var alldate = email;
            tag += '<tr role="row" class="odd ' + cls + '">';
            tag += '<td style="width:90%; padding-left:30px">' + email + '</td>';
            tag += '<td style="padding-right:20px">';
            tag += '<div class="form-group m-b-0">';
            tag += '<select class="my-border-radius-slt form-control float-right" data-cont="' + alldate + '" id="ssfemailselect_' + id + '" name="ssfemailselect">';
            tag += '<option value="" class="data-ajax" data-ajax="btntxt_edit" >' + btntxt_edit + '</option>';
            tag += '<option value="change" class="data-ajax" data-ajax="btntxt_change" >' + btntxt_change + '</option>';
            tag += '<option value="delete" class="data-ajax" data-ajax="btntxt_delete" >' + btntxt_delete + '</option>';
            tag += '</select>';
            tag += '</div>';
            tag += '</td>';
            tag += '</tr>';
          }

          $('#siteemaillists').html(tag);
          var nav_tag = '';
          nav_tag += '<nav aria-label="..." class="mb-4">';
          nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
          var disble = "";
          if (pstart1 == 1) disble = "disabled";
          var prenum = parseInt(pstart1) - 1;
          nav_tag += '<li class="page-item  ' + disble + ' ">';
          nav_tag += '<a class="page-link" href="#"  data-num="sfenavnum_' + prenum + '" >';
          nav_tag += '<i class="ti-angle-left"></i>';
          nav_tag += '</a>';
          nav_tag += '</li>'; //alert(totalpage);

          pnum1 = pstart1 <= numg1 ? 1 : parseInt(pstart1) - 1; // console.log("total:"+total);

          for (var idx = 0; idx < numg1; idx++) {
            var actv = "";
            var aria_current = '';
            var spantag = '';
            var oid = '';

            if (pnum1 == pstart1) {
              actv = 'active';
              aria_current = 'aria-current="page"';
              spantag = '<span class="sr-only">(current)</span>';
            } else oid = "sfenavnum_" + pnum1;

            nav_tag += '<li class="page-item ' + actv + '"  ' + aria_current + '>';
            nav_tag += '<a class="page-link" data-num="' + oid + '"  href="#" >' + pnum1 + '  ' + spantag + '</a>';
            nav_tag += '</li>';
            if (pnum1 == totalpage) break;
            pnum1 = pnum1 + 1;
          }

          var nextnum = parseInt(pstart1) + 1;
          var edisble = "";
          if (pstart1 == totalpage) edisble = "disabled";
          nav_tag += '<li class="page-item ' + edisble + ' ">';
          nav_tag += '<a class="page-link" data-num="sfenavnum_' + nextnum + '" href="#">';
          nav_tag += '<i class="ti-angle-right"></i>';
          nav_tag += '</a>';
          nav_tag += '</li>';
          nav_tag += '</ul>';
          nav_tag += '</nav>';
          $('#ssmu_page_nav_email').html(nav_tag);
          /* events { */

          $('a[data-num^="sfenavnum_"]').click(function () {
            var oid = $(this).attr("data-num");
            pstart1 = oid.split('_')[1];
            vueOBJ.getSFEmailList();
          });
          $('select[id^="ssfemailselect_"]').change(function () {
            var tid = $(this).attr("id");
            var t_id = tid.split("_")[1];
            var email = $(this).attr("data-cont");
            sel_val = $(this).val();

            if (sel_val != '') {
              if (sel_val == 'change') {
                if (permss.pwrite == 1) {
                  var alldate = $(this).attr("data-cont");
                  $('#myAlertEmailAddModal .modal-title').text('Change Email');
                  $('#myAlertEmailAddModal #ssfe-email').val(email);
                  $('#myAlertEmailAddModal #ssfe-id').val(t_id);
                  $('#myAlertEmailAddModal #ssfe-model-add span').text('Change');
                  showSSFEmailDlg();
                } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
              } else {
                if (permss.pdelete == 1) {
                  _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.confirmAlert(deleteSiteEmaillist, t_id, 'pgtxt_wantdeleteitem');
                } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
              }
            }
          });
          /* } events */
        } else {
          console.log(response.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
  /*end method*/

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table .odd td{\n border:0;\n}\n.table tr.odd.bot{\n    border-bottom: 1px solid #e6e6e6;\n}\n.sf-tab-container{\n    display: none;\n}\n.sf-tab-container.active{\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=template&id=c9604748&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=template&id=c9604748& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_apps_website_fields_email))]),
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
              _vm._s(_vm.cmu_apps) +
              "   >>  " +
              _vm._s(_vm.cmusu_apps_website) +
              "   >>  " +
              _vm._s(_vm.cmususu_apps_website_fields) +
              "   >>  " +
              _vm._s(_vm.cmusususu_apps_website_fields_email) +
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
        staticClass: "sf-tab-container active",
        staticStyle: { "margin-top": "20px" },
        attrs: { id: "SSFContainer_4" }
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
                    attrs: { id: "system-field-email-btn" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.ShowSSFEmailInitDLG()
                      }
                    }
                  },
                  [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-md-12",
              staticStyle: { "padding-top": "10px" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "card",
                  staticStyle: { padding: "3px 20px", "margin-bottom": "1rem" }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          {
                            staticClass: "table table-lg  no-footer m-b-0",
                            attrs: {
                              role: "grid",
                              "aria-describedby": "user-list_info"
                            }
                          },
                          [
                            _c("tbody", [
                              _c(
                                "tr",
                                { staticClass: "odd", attrs: { role: "row" } },
                                [
                                  _c("td", { staticStyle: { width: "90%" } }, [
                                    _vm._v(_vm._s(_vm.cpgtxt_email))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticStyle: { "text-align": "end" } },
                                    [_vm._v(_vm._s(_vm.cpgtxt_operation))]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _vm._m(2)
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "myAlertEmailAddModal" } },
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
                  [_vm._v(_vm._s(_vm.cpgtxt_createemail))]
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
                    attrs: { id: "stfe_alert" }
                  },
                  [_vm._v("Create Email area.")]
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
                  attrs: { id: "myAlertEmailModalbody" }
                },
                [
                  _c("div", { staticClass: "panel", attrs: { id: "tab4" } }, [
                    _c("form", { attrs: { id: "ssfe-email-frm" } }, [
                      _c(
                        "div",
                        {
                          staticClass: "row",
                          staticStyle: { "padding-bottom": "10px" }
                        },
                        [
                          _vm._m(3),
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
                                  _c("div", { staticClass: "col-md-1" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticStyle: {
                                            "margin-top": "8px",
                                            color: "#666",
                                            width: "100px"
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.cpgtxt_email))]
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
                              attrs: { id: "ssfe-model-add" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.ssf_model_email_add()
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
                        attrs: { type: "hidden", id: "ssfe-id", value: "" }
                      })
                    ])
                  ])
                ]
              )
            ])
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
          id: "apps-website-fields-email-fav",
          "data-status": "off",
          "data-page-info": "Email_apps-website-fields-email"
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
      { staticClass: "col-md-12", staticStyle: { "padding-top": "10px" } },
      [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-lg  no-footer",
                    staticStyle: { "margin-top": "1rem" },
                    attrs: {
                      role: "grid",
                      "aria-describedby": "user-list_info"
                    }
                  },
                  [_c("tbody", { attrs: { id: "siteemaillists" } })]
                )
              ])
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
      _c("div", {
        staticClass: "col-md-12",
        attrs: { id: "ssmu_page_nav_email" }
      })
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
      { staticClass: "col-md-11", staticStyle: { "padding-left": "62px" } },
      [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: { width: "300px" },
            attrs: {
              type: "text",
              placeholder: "",
              "aria-label": "ssfe-email",
              id: "ssfe-email",
              name: "ssfe-email",
              "aria-describedby": "basic-addon2"
            }
          })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue":
/*!****************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppsWebsiteFieldsEmail_vue_vue_type_template_id_c9604748___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppsWebsiteFieldsEmail.vue?vue&type=template&id=c9604748& */ "./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=template&id=c9604748&");
/* harmony import */ var _AppsWebsiteFieldsEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppsWebsiteFieldsEmail.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppsWebsiteFieldsEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppsWebsiteFieldsEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppsWebsiteFieldsEmail_vue_vue_type_template_id_c9604748___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppsWebsiteFieldsEmail_vue_vue_type_template_id_c9604748___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteFieldsEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=template&id=c9604748&":
/*!***********************************************************************************************!*\
  !*** ./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=template&id=c9604748& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_template_id_c9604748___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppsWebsiteFieldsEmail.vue?vue&type=template&id=c9604748& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/apps/AppsWebsiteFieldsEmail.vue?vue&type=template&id=c9604748&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_template_id_c9604748___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppsWebsiteFieldsEmail_vue_vue_type_template_id_c9604748___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);