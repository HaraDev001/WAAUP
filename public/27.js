(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
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




var vueOBJ = null;
var tabstatus = 0;
var transedlang = "";
var ssr_field = "appearance";
var pgtxt_selectlanguage = "";
var pgtxt_selectlanguagesave = "";

function getappearanceData() {
  var trans = transedlang;
  if (transedlang = "") trans = "en-1";
  $.ajax({
    url: 'admin.ssrGetAppearance',
    data: {
      transLang: trans
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        if (data.item != "") {
          var dt = data.item;

          if (dt != null && dt != "") {
            dt = $.parseJSON(dt);
            var ct = decodeURIComponent(dt.help);
            $("#ssr_appearance_content").val(ct);
            $("#ssr_appearance_maxline").val(dt.maxline);
            $("#ssr_appearance_font_color_val").val(dt.fontcolor);
            $("#ssr_appearance_font_color_value").text(dt.fontcolor);
            $("#ssr_appearance_font_colorpicker").css("background", dt.fontcolor);
            $("#ssr_appearance_border_color_val").val(dt.bordercolor);
            $("#ssr_appearance_border_color_value").text(dt.bordercolor);
            $("#ssr_appearance_border_colorpicker").css("background", dt.bordercolor);
            $("#ssr_appearance_back_color_val").val(dt.backcolor);
            $("#ssr_appearance_back_color_value").text(dt.backcolor);
            $("#ssr_appearance_back_colorpicker").css("background", dt.backcolor);

            if (dt.advancss != "") {
              $("#ssr_appearance_file_preview").attr("src", "/uploads/images/waaupimg/" + dt.advancss);
              $("#ssr_appearance_file_pre").val(dt.advancss);
            }
          }
        }
      } else {
        alert(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}
/*function initappearance() {
    const ssr_appearance_font_colorpicker = document.getElementById("ssr_appearance_font_colorpicker");
    let pickercolor = new ColorPicker(ssr_appearance_font_colorpicker, "#000000");
    ssr_appearance_font_colorpicker.addEventListener("colorChange", function (event) {
        const color = event.detail.color.hexa;
        $("#ssr_appearance_font_color_value").text(color);
        $("#ssr_appearance_font_color_val").val(color);
    });
     const ssr_appearance_border_colorpicker = document.getElementById("ssr_appearance_border_colorpicker");
    let pickerborder = new ColorPicker(ssr_appearance_border_colorpicker, "#000000");
    ssr_appearance_border_colorpicker.addEventListener("colorChange", function (event) {
        const color = event.detail.color.hexa;
        $("#ssr_appearance_border_color_value").text(color);
        $("#ssr_appearance_border_color_val").val(color);
    });
     const ssr_appearance_back_colorpicker = document.getElementById("ssr_appearance_back_colorpicker");
    let pickerbk = new ColorPicker(ssr_appearance_back_colorpicker, "#000000");
    ssr_appearance_back_colorpicker.addEventListener("colorChange", function (event) {
        const color = event.detail.color.hexa;
        $("#ssr_appearance_back_color_value").text(color);
        $("#ssr_appearance_back_color_val").val(color);
    });
     $("input#ssr_appearance_content").on("keyup", function () {
        var lengthOfText = $(this).val().replace(/\s/g, '').length;
        var maxnum = $("#ssr_appearance_maxline").val();
        if (lengthOfText > maxnum)
            alert("Maximum Characters Per Number " + maxnum + ".");
    });
     $("#ssr_appearance_file_upbtn").click(function () {
        if(transedlang===''){
            alert(pgtxt_selectlanguage);
            return;
        }
        $("#ssr_appearance_file").trigger("click");
    });
    $("#ssr_appearance_file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#ssr_appearance_file_preview").attr("src", e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    })
}*/

/*function getsettingData() {
    var trans = transedlang;
    if(transedlang = "")
        trans = "en-1";
    $.ajax({
        url: 'admin.ssrGetSetting',
        data: {
            transLang: trans
        },
        type: 'POST',
        async: false,
        success: function (data) {
            if (data.msg === "ok") {
                if (data.sms != "") {
                    let lists = data.sms;
                    var tags = "";
                    var header_val = "";
                     Object.keys(lists).forEach(function (element) {
                        tags += "<div class='input-group w-25' style='line-height: 24px'>";
                            tags += "<div class='form-check' style='margin-top: 5px;'>";
                                tags += "<div id='" + lists[element].name + "' data-num='ssr_setting_country_check_" + lists[element].name + "' class='form-check-input rect-group'>";
                                    tags += "<div></div>";
                                tags += "</div>";
                                tags += "<label class='form-check-label m-l-10'>" + lists[element].name + "</label>";
                            tags += "</div>";
                        tags += "</div>";
                    });
                     $("#ssr_setting_country_section").html(tags);
                     $("div[data-num^='ssr_setting_country_check_']").click(function () {
                        if ($(this).hasClass("active")) {
                            var thisid = $(this).attr("id");
                            var sval = $("#ssr_setting_headbar_val").val();
                             if (sval != "") {
                                var sval_list = sval.split(":");
                                var tmp_list = "";
                                 if (sval_list.length > 0)
                                {
                                    for (var i = 0; i < sval_list.length; i ++)
                                    {
                                        var item = sval_list[i];
                                        if (item != thisid) {
                                            if (tmp_list === "") {
                                                tmp_list = item;
                                            } else {
                                                tmp_list += ":" + item;
                                            }
                                        }
                                    }
                                    $("#ssr_setting_headbar_val").val(tmp_list);
                                }
                            } else {
                                if (sval == thisid)
                                    $("#ssr_setting_headbar_val").val("");
                            }
                             $(this).removeClass("active");
                        } else {
                            var thisid = $(this).attr("id");
                            var sval = $("#ssr_setting_headbar_val").val();
                            if (sval == "") {
                                sval = thisid;
                            } else {
                                sval += ":"+thisid;
                            }
                            $("#ssr_setting_headbar_val").val(sval);
                            $(this).addClass("active");
                        }
                    });
                 }
                 if (data.item != "") {
                    var dt = data.item;
                    dt = $.parseJSON(dt);
                    var ct = decodeURIComponent(dt.help);
                    $("#ssr_setting_content").val(ct);
                     var countrylist = dt.sms;
                     if (countrylist == "" || countrylist == null) {
                     } else {
                        var sval_list = countrylist.split(":");
                         if (sval_list.length > 0)
                        {
                            for (var i = 0; i < sval_list.length; i ++)
                            {
                                var item = sval_list[i];
                                 if (header_val == "")
                                    header_val = item;
                                else
                                    header_val += ":"+item;
                                 item = "ssr_setting_country_check_" + item;
                                 $("div[data-num^='"+item+"']").addClass("active");
                            }
                             $("#ssr_setting_headbar_val").val(header_val);
                        }
                    }
                 }
            } else {
                alert(data.msg);
            }
        },
        error: function (jqXHR, errdata, errorThrown) {
            console.log(errdata);
        }
    });
}*/


function initsetting() {}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Lang_module: _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      pageid: 'system-suser-registered-fav',
      mususu_system_suser_account: '',
      mu_system: '',
      musu_system_bsuser: '',
      mususu_system_suser_registered: '',
      pgtxt_translation: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_setting: '',
      pgtxt_appearance: '',
      pgtxt_content: '',
      pgtxt_maximumcharacters: '',
      pgtxt_pleaseenter: '',
      pgtxt_fontcolour: '',
      pgtxt_tab: '',
      pgtxt_border: '',
      pgtxt_color: '',
      pgtxt_background: '',
      pgtxt_advanced: '',
      pgtxt_css: '',
      pgtxt_image: '',
      btntxt_edit: '',
      pgtxt_link: '',
      pgtxt_sms: '',
      pgtxt_sua_Country: '',
      pgtxt_instructionbar: '',
      pgtxt_nosavenoappear: '',
      pgtxt_dbsaved: '',
      pgtxt_selectlanguage: '',
      pgtxt_selectlanguagesave: ''
    };
  },
  computed: {
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmususu_system_suser_account: function cmususu_system_suser_account() {
      return this.mususu_system_suser_account;
    },
    cmu_system: function cmu_system() {
      return this.mu_system;
    },
    cmusu_system_bsuser: function cmusu_system_bsuser() {
      return this.musu_system_bsuser;
    },
    cmususu_system_suser_registered: function cmususu_system_suser_registered() {
      return this.mususu_system_suser_registered;
    },
    cpgtxt_translation: function cpgtxt_translation() {
      return this.pgtxt_translation;
    },
    cpgtxt_save: function cpgtxt_save() {
      return this.pgtxt_save;
    },
    cpgtxt_preview: function cpgtxt_preview() {
      return this.pgtxt_preview;
    },
    cpgtxt_release: function cpgtxt_release() {
      return this.pgtxt_release;
    },
    cpgtxt_setting: function cpgtxt_setting() {
      return this.pgtxt_setting;
    },
    cpgtxt_appearance: function cpgtxt_appearance() {
      return this.pgtxt_appearance;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_maximumcharacters: function cpgtxt_maximumcharacters() {
      return this.pgtxt_maximumcharacters;
    },
    cpgtxt_pleaseenter: function cpgtxt_pleaseenter() {
      return this.pgtxt_pleaseenter;
    },
    cpgtxt_fontcolour: function cpgtxt_fontcolour() {
      return this.pgtxt_fontcolour;
    },
    cpgtxt_tab: function cpgtxt_tab() {
      return this.pgtxt_tab;
    },
    cpgtxt_border: function cpgtxt_border() {
      return this.pgtxt_border;
    },
    cpgtxt_color: function cpgtxt_color() {
      return this.pgtxt_color;
    },
    cpgtxt_background: function cpgtxt_background() {
      return this.pgtxt_background;
    },
    cpgtxt_advanced: function cpgtxt_advanced() {
      return this.pgtxt_advanced;
    },
    cpgtxt_css: function cpgtxt_css() {
      return this.pgtxt_css;
    },
    cpgtxt_image: function cpgtxt_image() {
      return this.pgtxt_image;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cpgtxt_link: function cpgtxt_link() {
      return this.pgtxt_link;
    },
    cpgtxt_sms: function cpgtxt_sms() {
      return this.pgtxt_sms;
    },
    cpgtxt_sua_Country: function cpgtxt_sua_Country() {
      return this.pgtxt_sua_Country;
    },
    cpgtxt_instructionbar: function cpgtxt_instructionbar() {
      return this.pgtxt_instructionbar;
    },
    cpgtxt_nosavenoappear: function cpgtxt_nosavenoappear() {
      return this.pgtxt_nosavenoappear;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
    },
    contentchange: function contentchange() {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
      return this.$store.state.contentchange;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    pgtxt_selectlanguage = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguage');
    pgtxt_selectlanguagesave = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguagesave');
    this.getWWGStoredLang();
    this.sliderTabs(); //getappearanceData();
  },
  methods: {
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list != null && list != '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
    },
    SavePageContent: function SavePageContent() {
      /*var tlang = $('#wwga_tranedLang').val();
      if(tlang == "" || tlang == null){
          alert(pgtxt_selectlanguagesave);
          return;
      }
      var pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
      if (tabstatus == 0) {
          var ct = $('#ssr_appearance_content').val();
          ct = encodeURIComponent(ct);
          $('#registered_appearance_content_val').val(ct);
          var formData = new FormData($('#appearance_frm')[0]);
          $.ajax({
              url: 'admin.ssrRegisterAppearance',
              type: 'POST',
              data: formData,
              async: false,
              success: function (data) {
                  if (data.msg === "ok") {
                      alert(pgtxt_dbsaved);
                  } else {
                      alert(data.msg);
                  }
              },
              error: function (jqXHR, errdata, errorThrown) {
                  console.log(errdata);
              },
              cache: false,
              contentType: false,
              processData: false,
          });
      } else if (tabstatus == 1) {
          var ct = $('#ssr_setting_content').val();
          ct = encodeURIComponent(ct);
          $('#registered_setting_content_val').val(ct);
          $('#setting_frm_transLang').val(transedlang);
           var formData = new FormData($('#setting_frm')[0]);
          $.ajax({
              url: 'admin.ssrRegisterSetting',
              type: 'POST',
              data: formData,
              async: false,
              success: function (data) {
                  if (data.msg === "ok") {
                      alert(pgtxt_dbsaved);
                  } else {
                      alert(data.msg);
                  }
              },
              error: function (jqXHR, errdata, errorThrown) {
                  console.log(errdata);
              },
              cache: false,
              contentType: false,
              processData: false,
          });
      }*/
    },
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getWWGStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          var stored_langs = response.data.langlist;

          if (stored_langs !== '') {
            stored_langs = $.parseJSON(stored_langs);
            var tags = '';

            for (var j = 0; j < stored_langs.length; j++) {
              var obj = stored_langs[j];
              var iso = obj.iso;
              var dialCode = obj.dialcode;
              var cname = obj.name;
              var status = obj.status;
              var dcont = iso + '-' + dialCode + '-' + cname;
              if (status == 'enable') tags += '<span class="page1_translate_span" style="cursor: pointer" data-cont="' + dcont + '">' + cname + '</span>&nbsp;&nbsp;&nbsp;';
            }

            $('#translanglist').html(tags);
            $('.page1_translate_span').click(function () {
              $('.page1_translate_span').removeClass('active');
              $(this).addClass('active');
              var cont = $(this).attr('data-cont');
              var len = cont.split('-').length;

              if (len > 0) {
                var sky = cont.split('-')[0] + '-' + cont.split('-')[1];
                transedlang = sky;
                $('#wwga_tranedLang').val(transedlang);
                $(".page1_alarm_bar").addClass("active");
                $(".page1_alarm_bar span").text("Save  Appear");

                if (ssr_field == "appearance") {
                  getappearanceData();
                } else if (ssr_field == "setting") {
                  getsettingData();
                }
              }
            });
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    sliderTabs: function sliderTabs() {
      $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');
        $('.col-md-12.page_slider_content_list').removeClass('active');
        $('#' + subid).addClass('active');
        $('.page1_alarm_bar span').text("No Save No Appear");
        $(".page1_alarm_bar").removeClass("active");
        $(".page1_translate_span").removeClass("active");
        transedlang = "";

        if (subid == 'appearancebar') {
          tabstatus = 0;
          ssr_field = "appearance"; //getappearanceData();
        } else if (subid == 'settingbar') {
          tabstatus = 1;
          ssr_field = "setting"; //getsettingData();
        }
      }); //initappearance();
      //initsetting();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    float: left;\n}\n.form-check-input.rect-group{\n    width: 16px;height: 16px; border: 1px solid #bbbbbb;\n    cursor: pointer;\n}\n.form-check-input.rect-group > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #e4e6e8;\n}\n.form-check-input.rect-group.active > div{\n    width: 10px; height: 10px; position: absolute;left: 2px;top: 2px;; background-color: #0075ff;\n}\n.bsuser_registered_tab{\n    width: 120px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemUserRegistered.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=template&id=cb1de93e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=template&id=cb1de93e& ***!
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
        _c("h3", [_vm._v(_vm._s(_vm.cmususu_system_suser_registered))]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n                       "),
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
            "\n                           " +
              _vm._s(_vm.cmu_system) +
              "  >>  " +
              _vm._s(_vm.cmusu_system_bsuser) +
              "  >>  " +
              _vm._s(_vm.cmususu_system_suser_registered) +
              "\n                          "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "page1_translate_bar" }, [
          _c("div", { staticClass: "page1_translate_text" }, [
            _vm._v(_vm._s(_vm.cpgtxt_translation))
          ]),
          _vm._v(" "),
          _c("input", {
            attrs: {
              type: "hidden",
              name: "wwga_tranedLang",
              id: "wwga_tranedLang",
              value: ""
            }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "page1_translate_bar_left",
            attrs: { id: "translanglist" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "page1_translate_bar_right" }, [
            _c(
              "span",
              {
                staticClass: "page1_translate_span_right cursor-pointer",
                attrs: { id: "wwga_save" },
                on: { click: _vm.SavePageContent }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "iconify",
                    staticStyle: {
                      "font-size": "24px",
                      transform: "rotate(360deg)"
                    },
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      focusable: "false",
                      width: "1em",
                      height: "1em",
                      preserveAspectRatio: "xMidYMid meet",
                      viewBox: "0 0 24 24",
                      "data-inline": "false",
                      "data-icon": "ic:sharp-save-alt"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2v9.67z",
                        fill: "currentColor"
                      }
                    })
                  ]
                ),
                _vm._v(
                  "\n                            " +
                    _vm._s(_vm.cpgtxt_save) +
                    "\n                        "
                )
              ]
            ),
            _vm._v("   |   \n                        "),
            _c(
              "span",
              { staticClass: "page1_translate_span_right cursor-pointer" },
              [
                _c(
                  "svg",
                  {
                    staticClass: "iconify",
                    staticStyle: {
                      "font-size": "24px",
                      transform: "rotate(360deg)"
                    },
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      focusable: "false",
                      width: "1em",
                      height: "1em",
                      preserveAspectRatio: "xMidYMid meet",
                      viewBox: "0 0 24 24",
                      "data-inline": "false",
                      "data-icon": "ic:outline-preview"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5c-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z",
                        fill: "currentColor"
                      }
                    })
                  ]
                ),
                _vm._v(
                  "\n                            " +
                    _vm._s(_vm.cpgtxt_preview) +
                    "\n                        "
                )
              ]
            ),
            _vm._v("   |   \n                        "),
            _c(
              "span",
              { staticClass: "page1_translate_span_right cursor-pointer" },
              [
                _c(
                  "svg",
                  {
                    staticClass: "iconify",
                    staticStyle: {
                      "font-size": "24px",
                      transform: "rotate(360deg)"
                    },
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      "aria-hidden": "true",
                      focusable: "false",
                      width: "1em",
                      height: "1em",
                      preserveAspectRatio: "xMidYMid meet",
                      viewBox: "0 0 24 24",
                      "data-inline": "false",
                      "data-icon": "ic:outline-new-releases"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z",
                        fill: "currentColor"
                      }
                    })
                  ]
                ),
                _vm._v(
                  "\n                            " +
                    _vm._s(_vm.cpgtxt_release) +
                    "\n                        "
                )
              ]
            ),
            _vm._v("   \n                    ")
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "page1_alarm_bar" }, [
          _c(
            "svg",
            {
              staticClass: "iconify",
              staticStyle: { "font-size": "24px", transform: "rotate(360deg)" },
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "aria-hidden": "true",
                focusable: "false",
                width: "1em",
                height: "1em",
                preserveAspectRatio: "xMidYMid meet",
                viewBox: "0 0 24 24",
                "data-inline": "false",
                "data-icon": "mi:circle-warning"
              }
            },
            [
              _c("g", { attrs: { fill: "none" } }, [
                _c("path", {
                  attrs: {
                    d:
                      "M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z",
                    fill: "currentColor"
                  }
                }),
                _c("path", {
                  attrs: {
                    d: "M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z",
                    fill: "currentColor"
                  }
                }),
                _c("path", {
                  attrs: {
                    d: "M10.5 16.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z",
                    fill: "currentColor"
                  }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.cpgtxt_nosavenoappear))])
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
          id: "system-suser-registered-fav",
          "data-status": "off",
          "data-page-info": "Registered_system-suser-registered"
        }
      },
      [
        _vm._v("\n                           "),
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

/***/ "./resources/vuedir/pages/system/SystemUserRegistered.vue":
/*!****************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemUserRegistered.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemUserRegistered_vue_vue_type_template_id_cb1de93e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemUserRegistered.vue?vue&type=template&id=cb1de93e& */ "./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=template&id=cb1de93e&");
/* harmony import */ var _SystemUserRegistered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemUserRegistered.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SystemUserRegistered_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SystemUserRegistered.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SystemUserRegistered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemUserRegistered_vue_vue_type_template_id_cb1de93e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SystemUserRegistered_vue_vue_type_template_id_cb1de93e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemUserRegistered.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemUserRegistered.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemUserRegistered.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=template&id=cb1de93e&":
/*!***********************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=template&id=cb1de93e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_template_id_cb1de93e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemUserRegistered.vue?vue&type=template&id=cb1de93e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemUserRegistered.vue?vue&type=template&id=cb1de93e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_template_id_cb1de93e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemUserRegistered_vue_vue_type_template_id_cb1de93e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);