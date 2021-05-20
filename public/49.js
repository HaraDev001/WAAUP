(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var userid = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.jsonparse(window.Laravel.userinfo).id;
var vueOBJ = null;
var mobileList = [];
var emailList = [];
var pgtxt_dbsaved = "";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pageid: 'global-user-profile-fav',
      btntxt_general: '',
      btntxt_senior: '',
      btntxt_infomation: '',
      pgtxt_sua_Security: '',
      pgtxt_sua_BirthDate: '',
      pgtxt_sua_Phone: '',
      pgtxt_sua_Website: '',
      pgtxt_sua_Languages: '',
      pgtxt_sua_Gender: '',
      pgtxt_sua_Male: '',
      pgtxt_sua_Female: '',
      pgtxt_sua_Other: '',
      pgtxt_sua_AddressLine: '',
      pgtxt_sua_PostCode: '',
      pgtxt_sua_City: '',
      pgtxt_sua_State: '',
      pgtxt_sua_Country: '',
      btntxt_sua_SaveChange: '',
      btntxt_edit: '',
      pgtxt_sua_edit: '',
      pgtxt_background: '',
      pgtxt_dbsaved: '',
      userinfo: '',
      username_maxLength: '',
      username_minLength: '',
      name_maxLength: '',
      name_minLength: '',
      photosize_width: '',
      photosize_height: '',
      background_width: '',
      background_height: '',
      photoImg: '',
      backgroundImg: '',
      userid: '',
      mobileError: '',
      mobileLength: '',
      emailError: ''
    };
  },
  computed: {
    // 계산된 getter
    cbtntxt_general: function cbtntxt_general() {
      return this.btntxt_general;
    },
    cbtntxt_senior: function cbtntxt_senior() {
      return this.btntxt_senior;
    },
    cbtntxt_infomation: function cbtntxt_infomation() {
      return this.btntxt_infomation;
    },
    cpgtxt_sua_Security: function cpgtxt_sua_Security() {
      return this.pgtxt_sua_Security;
    },
    cpgtxt_sua_BirthDate: function cpgtxt_sua_BirthDate() {
      return this.pgtxt_sua_BirthDate;
    },
    cpgtxt_sua_Phone: function cpgtxt_sua_Phone() {
      return this.pgtxt_sua_Phone;
    },
    cpgtxt_sua_Website: function cpgtxt_sua_Website() {
      return this.pgtxt_sua_Website;
    },
    cpgtxt_sua_Languages: function cpgtxt_sua_Languages() {
      return this.pgtxt_sua_Languages;
    },
    cpgtxt_sua_Gender: function cpgtxt_sua_Gender() {
      return this.pgtxt_sua_Gender;
    },
    cpgtxt_sua_Male: function cpgtxt_sua_Male() {
      return this.pgtxt_sua_Male;
    },
    cpgtxt_sua_Female: function cpgtxt_sua_Female() {
      return this.pgtxt_sua_Female;
    },
    cpgtxt_sua_Other: function cpgtxt_sua_Other() {
      return this.pgtxt_sua_Other;
    },
    cpgtxt_sua_AddressLine: function cpgtxt_sua_AddressLine() {
      return this.pgtxt_sua_AddressLine;
    },
    cpgtxt_sua_PostCode: function cpgtxt_sua_PostCode() {
      return this.pgtxt_sua_PostCode;
    },
    cpgtxt_sua_City: function cpgtxt_sua_City() {
      return this.pgtxt_sua_City;
    },
    cpgtxt_sua_State: function cpgtxt_sua_State() {
      return this.pgtxt_sua_State;
    },
    cpgtxt_sua_Country: function cpgtxt_sua_Country() {
      return this.pgtxt_sua_Country;
    },
    cbtntxt_sua_SaveChange: function cbtntxt_sua_SaveChange() {
      return this.btntxt_sua_SaveChange;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cpgtxt_sua_edit: function cpgtxt_sua_edit() {
      return this.pgtxt_sua_edit;
    },
    cpgtxt_background: function cpgtxt_background() {
      return this.pgtxt_background;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
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
    }
  },
  created: function created() {
    this.userinfo = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.jsonparse(window.Laravel.userinfo);
    if (this.userinfo.photo != "") this.photoImg = '/uploads/images/' + this.userinfo.photo;else this.photoImg = "/uploads/images/someone.png";
    if (this.userinfo.background != "") this.backgroundImg = '/uploads/images/' + this.userinfo.background;else this.backgroundImg = "";
    this.userid = this.userinfo.id;
  },
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    this.initpage();
    this.getDefaultItemList();
    this.getMobieItemList();
    this.getEmailItemList();
    this.configureTelInput();
    pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
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
    getUsername: function getUsername() {
      var username = this.userinfo.username;
      return username; //return username.slice(0, this.getUsernameMaxLength());
    },
    getName: function getName() {
      var name = this.userinfo.name;
      return name; //return name.slice(0, this.getNameMaxLength());
    },
    getEmail: function getEmail() {
      return this.userinfo.email;
    },
    getPassword: function getPassword() {
      return this.userinfo.password;
    },
    getCountryCode: function getCountryCode() {
      return this.userinfo.countrycode;
    },
    getCountryName: function getCountryName() {
      return this.userinfo.countryname;
    },
    getPhonenumber: function getPhonenumber() {
      if (this.userinfo.phone != null && this.userinfo.phone != "") return this.userinfo.phone.substring(0, this.mobileLength);else return "";
    },
    getCreateddate: function getCreateddate() {
      var date = 'Joind Since ' + moment__WEBPACK_IMPORTED_MODULE_3___default()(String(this.userinfo.created_at)).format("YYYY.MM.DD");
      return date;
    },
    getUsernameMaxLength: function getUsernameMaxLength() {
      return this.username_maxLength;
    },
    getUsernameMinLength: function getUsernameMinLength() {
      return this.username_minLength;
    },
    getNameMaxLength: function getNameMaxLength() {
      return this.name_maxLength;
    },
    getNameMinLength: function getNameMinLength() {
      return this.name_minLength;
    },
    getPhotoWidth: function getPhotoWidth() {
      return this.photosize_width;
    },
    getPhotoHeight: function getPhotoHeight() {
      return this.photosize_height;
    },
    getBackgroundWidth: function getBackgroundWidth() {
      return this.background_width;
    },
    getBackgroundHeight: function getBackgroundHeight() {
      return this.background_height;
    },
    getMobileMaxLength: function getMobileMaxLength() {
      return this.mobileLength;
    },
    initpage: function initpage() {
      $('#global-user-profile-photo-editbtn').click(function () {
        $('#global-user-profile-photo-edit').val('');
        $('#global-user-profile-photo-edit').trigger('click');
      });
      $('#global-user-profile-photo-edit').change(function () {
        if (this.files && this.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            vueOBJ.photoImg = e.target.result;
          }; //vueOBJ.photoImg = this.files[0];


          reader.readAsDataURL(this.files[0]);
        }
      });
      $('#global-user-profile-background-editbtn').click(function () {
        $('#global-user-profile-background-edit').val('');
        $('#global-user-profile-background-edit').trigger('click');
      });
      $('#global-user-profile-background-edit').change(function () {
        if (this.files && this.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            vueOBJ.backgroundImg = e.target.result;
          };

          reader.readAsDataURL(this.files[0]);
        }
      });
      var username = this.getUsername();
      var name = this.getName();
      var email = this.getEmail();
      $("#global-user-profile-username").val(username);
      $("#global-user-profile-name").val(name);
      $("#global-user-profile-email").val(email);
    },
    configureTelInput: function configureTelInput() {
      var input = document.querySelector("#global-user-profile-tel");
      var nIndex = 0;
      var countries = [];

      for (var key in mobileList) {
        countries.push(mobileList[key].countrycode);
      }

      window.intlTelInput(input, {
        onlyCountries: countries,
        separateDialCode: true
      });
      input.addEventListener("countrychange", function () {
        var input = document.querySelector("#global-user-profile-tel");
        var iti = window.intlTelInputGlobals.getInstance(input);
        $("#global-user-profile-tel-data").val(iti.getSelectedCountryData()['dialCode']);
        $("#global-user-profile-country-data").val(iti.getSelectedCountryData()['iso2']);
      });
      var iti = window.intlTelInputGlobals.getInstance(input);
      var countryData = window.intlTelInputGlobals.getCountryData();
      var dialcode = this.getCountryCode();
      var countryname = this.getCountryName();

      for (nIndex = 0; nIndex < countryData.length; nIndex++) {
        for (var key in mobileList) {
          if (dialcode == countryData[nIndex].dialCode && countryname == countryData[nIndex].iso2) {
            iti.setCountry(countryData[nIndex].iso2);
            break;
          }
        }
      }

      for (var key in mobileList) {
        if (dialcode == mobileList[key].dialcode) {
          vueOBJ.mobileLength = parseInt(mobileList[key].characters);
        }
      }

      var phone = this.getPhonenumber();
      $("#global-user-profile-tel-data").val(dialcode);
      $("#global-user-profile-country-data").val(countryname);
      $("#global-user-profile-tel").val(phone);
    },
    checkMobileValid: function checkMobileValid(mobile) {
      vueOBJ.mobileError = "";
      if (mobile.length < 1) return false;
      var input = document.querySelector("#global-user-profile-tel");
      var iti = window.intlTelInputGlobals.getInstance(input);
      var cur_dialcode = iti.getSelectedCountryData()['dialCode'];
      var bfound = null;

      for (var i = 0; i < mobileList.length; i++) {
        if (mobileList[i].characters == mobile.length && mobileList[i].dialcode == cur_dialcode) {
          bfound = 1;
          break;
        }
      }
      /*var bfound = mobileList.find(function (elem) {
          return elem.dialcode == cur_dialcode
      })*/


      if (bfound != null) {
        return true;
      }

      return false;
    },
    checkEmailValid: function checkEmailValid(email) {
      vueOBJ.emailError = "";
      if (email.length < 1) return false;
      var emailAddress = email.split("@")[1];
      if (emailAddress == null) return false;
      var bfound = emailList.find(function (elem) {
        return elem.name == emailAddress;
      });

      if (bfound != null) {
        return true;
      }

      return false;
    },
    updateUserinfo: function updateUserinfo() {
      var username = $.trim($('#global-user-profile-username').val());
      var name = $.trim($('#global-user-profile-name').val());
      var email = $.trim($('#global-user-profile-email').val());
      var mobile = $.trim($('#global-user-profile-tel').val());

      if (username === '' || name === '' || email === '') {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert("you must empty this fields.");
        return;
      }

      if (username.length < vueOBJ.getUsernameMinLength()) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert("The length of Username must be between " + vueOBJ.getUsernameMinLength() + " and " + vueOBJ.getUsernameMaxLength());
        return;
      }

      if (name.length < vueOBJ.getNameMinLength()) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert("The length of Name must be between " + vueOBJ.getNameMinLength() + " and " + vueOBJ.getNameMaxLength());
        return;
      }

      if (vueOBJ.checkEmailValid(email) == false) {
        vueOBJ.emailError = "Email Format is Error";
        return;
      }

      if (vueOBJ.checkMobileValid(mobile) == false) {
        vueOBJ.mobileError = "Mobile Format is Error";
        return;
      }

      var formData = new FormData($('#global-user-profile-form')[0]);
      formData.append('p_width', vueOBJ.photosize_width);
      formData.append('p_height', vueOBJ.photosize_height);
      formData.append('b_width', vueOBJ.background_width);
      formData.append('b_height', vueOBJ.background_height);
      $.ajax({
        url: 'admin.updateUserinfo',
        type: 'POST',
        data: formData,
        async: false,
        success: function success(data) {
          if (data.msg === "ok") {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_sucesssaveddata');
            localStorage.clear();
            $('#email').val(vueOBJ.getEmail());
            $('#pwd').val(vueOBJ.getPassword());
            $('#globalprofile_frm').submit();
          } else if (data.msg === "psize") {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert("The profile icon cannot be greater than " + vueOBJ.photosize_width + " * " + vueOBJ.photosize_height);
          } else if (data.msg === "bsize") {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert("The background image cannot be greater than " + vueOBJ.background_width + " * " + vueOBJ.background_height);
          } else {}
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        },
        cache: false,
        contentType: false,
        processData: false
      });
    },
    getUserinfo: function getUserinfo() {},
    getDefaultItemList: function getDefaultItemList() {
      var postData = {
        userid: userid
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getDefaultItemList', postData).then(function (response) {
        var msg = response.data.msg;

        if (msg === "ok") {
          var lists = response.data.list;
          if (lists.length <= 0) return;

          for (var i = 0; i < lists.length; i++) {
            var elem = lists[i];
            var photo_size = elem.val_1;
            photo_size = photo_size.split("*");
            vueOBJ.photosize_width = parseInt(photo_size[0]);
            vueOBJ.photosize_height = parseInt(photo_size[1]);
            var background_size = elem.val_2;
            background_size = background_size.split("*");
            vueOBJ.background_width = parseInt(background_size[0]);
            vueOBJ.background_height = parseInt(background_size[1]);
            var username_length = elem.val_3.split("-");
            var minValue = username_length[0];
            var maxValue = username_length[1];
            vueOBJ.username_maxLength = parseInt(maxValue);
            vueOBJ.username_minLength = parseInt(minValue);
            var name_length = elem.val_4.split("-");
            var minValue = name_length[0];
            var maxValue = name_length[1];
            vueOBJ.name_maxLength = parseInt(maxValue);
            vueOBJ.name_minLength = parseInt(minValue);
          }
        } else {
          console.log(response.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updateProfilePassword: function updateProfilePassword() {
      var usrid = $.trim($('#global-user-profile-senior-id').val());
      var oldpwd = $.trim($('#global-user-profile-senior-old-password-txt').val());
      var newpwd = $.trim($('#global-user-profile-senior-new-password-txt').val());
      var renewpwd = $.trim($('#global-user-profile-senior-confirm-password-txt').val());

      if (oldpwd === "" || newpwd === "" || renewpwd === "") {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert("you must fill all fields!");
        return;
      }

      if (newpwd !== renewpwd) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert("please input newpwd and renewpwd correctly!");
        return;
      }

      var postData = {
        id: usrid,
        oldpwd: oldpwd,
        newpwd: newpwd
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.updateUserPassword', postData).then(function (response) {
        var msg = response.data.msg;

        if (msg === "ok") {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_sucesssaveddata');
          $('#global-user-profile-senior-old-password-txt').val('');
          $('#global-user-profile-senior-new-password-txt').val('');
          $('#global-user-profile-senior-confirm-password-txt').val('');
        } else {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert(response.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getMobieItemList: function getMobieItemList() {
      $.ajax({
        url: 'admin.getSystemSecurityMobileItem',
        data: {
          start: 1,
          cnt: -1,
          filter: 0
        },
        type: 'POST',
        async: false,
        success: function success(data) {
          if (data.msg === "ok") {
            var lists = data.list;
            mobileList = [];
            Object.keys(lists).forEach(function (elem) {
              if (lists[elem].check == "1") {
                mobileList.push(lists[elem]);
              }
            });
          } else {
            console.log(data.message);
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    getEmailItemList: function getEmailItemList() {
      var postData = {};
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getSUSEmailItem', postData).then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          var lists = response.data.list;
          var lstIndex = 0;
          Object.keys(lists).forEach(function (elem) {
            if (lists[elem].check == "1") {
              emailList[lstIndex] = lists[elem];
              lstIndex++;
            }
          });
        } else {
          console.log(response.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=template&id=196d7f00&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=template&id=196d7f00& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v("Profile")]),
        _vm._v(" "),
        _c("span", { staticStyle: { color: "#656262" } }, [
          _vm._v("   |   \n                "),
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
          _vm._v("\n                  >>  Profile  \n                "),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row m-t-15" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          {
            staticClass: "nav nav-pills nav-fill m-b-20",
            attrs: {
              id: "global-user-profile-tab",
              role: "tablist",
              "aria-orientation": "vertical"
            }
          },
          [
            _c(
              "a",
              {
                staticClass: "nav-item nav-link active m-r-15",
                staticStyle: {
                  flex: "0.02 1 auto",
                  border: "1px solid #e6e6e6",
                  "border-radius": "1.2rem"
                },
                attrs: {
                  id: "global-user-profile-general-tab",
                  "data-toggle": "pill",
                  href: "#global-user-profile-general",
                  role: "tab",
                  "aria-controls": "global-user-profile-general",
                  "aria-selected": "true"
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "icon",
                    attrs: {
                      t: "1599124664697",
                      viewBox: "0 0 1024 1024",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "p-id": "23124",
                      width: "17",
                      height: "17"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M512.3 63.1C264.5 63.1 63.6 264 63.6 511.8c0 137.4 61.7 260.3 159 342.6 2.5 2.9 5.6 5.4 9 7.4 76.9 61.7 174.5 98.7 280.8 98.7 106.3 0 203.9-36.9 280.8-98.7 3.4-2 6.4-4.5 9-7.4 97.2-82.3 159-205.3 159-342.6-0.1-247.8-201-448.7-448.9-448.7z m0 822.7c-81 0-155.9-25.7-217.1-69.4l1.4-3.8c33-90.7 119.2-151.1 215.7-151.1 95.4 0 183.6 51.9 211 134.3L730 816c-61.2 43.9-136.4 69.8-217.7 69.8zM400.2 474.4c0-62 50.2-112.2 112.2-112.2s112.2 50.2 112.2 112.2-50.2 112.2-112.2 112.2-112.2-50.2-112.2-112.2z m390.4 287.3c-27.3-71.3-84.4-121.9-151.4-149.8 37-34.2 60.2-83.1 60.2-137.4 0-103.3-83.7-187-187-187s-187 83.7-187 187c0 55.2 23.9 104.8 62 139-66 29.7-120.4 82.5-151.5 150.2-60.6-66.5-97.5-154.8-97.5-251.8 0-206.5 167.4-373.9 373.9-373.9s373.9 167.4 373.9 373.9c0.1 96-36.1 183.5-95.6 249.8z",
                        "p-id": "23125"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "m-l-10" }, [
                  _vm._v(_vm._s(_vm.cbtntxt_general))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "nav-item nav-link m-r-15",
                staticStyle: {
                  flex: "0.02 1 auto",
                  border: "1px solid #e6e6e6",
                  "border-radius": "1.2rem"
                },
                attrs: {
                  id: "global-user-profile-senior-tab",
                  "data-toggle": "pill",
                  href: "#global-user-profile-senior",
                  role: "tab",
                  "aria-controls": "global-user-profile-senior",
                  "aria-selected": "false"
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "icon",
                    attrs: {
                      t: "1599124713464",
                      viewBox: "0 0 1024 1024",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "p-id": "23895",
                      width: "17",
                      height: "17"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M627.2 328.533333C597.333333 298.666667 554.666667 281.6 512 281.6c-89.6 0-162.133333 72.533333-162.133333 162.133333 0 89.6 72.533333 162.133333 162.133333 162.133334s162.133333-72.533333 162.133333-162.133334c0-42.666667-17.066667-85.333333-46.933333-115.2z",
                        "p-id": "23896"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 977.066667C256 977.066667 46.933333 768 46.933333 512S256 46.933333 512 46.933333 977.066667 256 977.066667 512 768 977.066667 512 977.066667z",
                        "p-id": "23897"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M725.333333 584.533333c34.133333-46.933333 51.2-110.933333 42.666667-174.933333-12.8-115.2-110.933333-209.066667-226.133333-221.866667C384 170.666667 256 294.4 256 443.733333c0 51.2 17.066667 102.4 42.666667 140.8l-93.866667 162.133334h128l64 110.933333 93.866667-162.133333h42.666666l93.866667 162.133333 64-110.933333h128L725.333333 584.533333z m-59.733333 119.466667l-38.4 64-72.533333-119.466667c-29.866667 8.533333-59.733333 8.533333-89.6 0l-68.266667 123.733334-38.4-64H281.6l72.533333-123.733334c-21.333333-25.6-38.4-55.466667-46.933333-89.6-34.133333-153.6 98.133333-285.866667 251.733333-251.733333 76.8 17.066667 140.8 81.066667 157.866667 157.866667 17.066667 72.533333-4.266667 140.8-46.933333 187.733333l72.533333 123.733333-76.8-8.533333z",
                        "p-id": "23898"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "m-l-10" }, [
                  _vm._v(_vm._s(_vm.cbtntxt_senior))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "nav-item nav-link m-r-15",
                staticStyle: {
                  flex: "0.02 1 auto",
                  border: "1px solid #e6e6e6",
                  "border-radius": "1.2rem"
                },
                attrs: {
                  id: "global-user-profile-infomation-tab",
                  "data-toggle": "pill",
                  href: "#global-user-profile-infomation",
                  role: "tab",
                  "aria-controls": "global-user-profile-infomation",
                  "aria-selected": "false"
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "icon",
                    attrs: {
                      t: "1599124753113",
                      viewBox: "0 0 1024 1024",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "p-id": "24641",
                      width: "17",
                      height: "17"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M512 64a448 448 0 1 0 0.0512 896.0512A448 448 0 0 0 512 64z m0 820.0192a372.0704 372.0704 0 0 1 0-744.0384 372.0704 372.0704 0 0 1 0 744.0384z",
                        "p-id": "24642"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "M464.0256 336.0256a48.0256 48.0256 0 1 0 96 0 48.0256 48.0256 0 0 0-96.0512 0zM536.0128 448H487.936a8.0384 8.0384 0 0 0-7.9872 7.9872v272.0256c0 4.4032 3.584 7.9872 7.9872 7.9872h48.0256c4.4032 0 7.9872-3.584 7.9872-7.9872V455.9872a8.0384 8.0384 0 0 0-7.9872-7.9872z",
                        "p-id": "24643"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "m-l-10" }, [
                  _vm._v(_vm._s(_vm.cbtntxt_infomation))
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-content",
            attrs: { id: "global-user-profile-tabContent" }
          },
          [
            _c(
              "div",
              {
                staticClass: "tab-pane fade show active",
                attrs: {
                  id: "global-user-profile-general",
                  role: "tabpanel",
                  "aria-labelledby": "global-user-profile-general-tab"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "form",
                      {
                        attrs: {
                          id: "global-user-profile-form",
                          name: "global-user-profile-form",
                          enctype: "multipart/form-data",
                          method: "post"
                        }
                      },
                      [
                        _c("div", { staticClass: "card" }, [
                          _c("input", {
                            attrs: {
                              type: "hidden",
                              id: "global-user-profile-id",
                              name: "global-user-profile-id"
                            },
                            domProps: { value: _vm.userid }
                          }),
                          _vm._v(" "),
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-borderless mb-0 text-center",
                              attrs: { role: "grid" }
                            },
                            [
                              _c("tbody", [
                                _c("tr", [
                                  _c(
                                    "th",
                                    {
                                      staticClass: "p-10",
                                      staticStyle: { width: "15%" },
                                      attrs: { rowspan: "2" }
                                    },
                                    [
                                      _c("div", { staticClass: "mt-3" }, [
                                        _c("img", {
                                          staticStyle: {
                                            "border-radius": "15px",
                                            "max-width": "150px",
                                            "max-height": "150px"
                                          },
                                          attrs: {
                                            id: "global-user-profile-photo",
                                            src: _vm.photoImg,
                                            width: _vm.getPhotoWidth(),
                                            height: _vm.getPhotoHeight(),
                                            onerror:
                                              "this.src ='/images/noimg.png';"
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _vm._m(1),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "btn btn-outline-light mt-4 dash-my-btn-0 active",
                                          attrs: {
                                            id:
                                              "global-user-profile-photo-editbtn"
                                          }
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(_vm._s(_vm.cbtntxt_edit))
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "mt-2" }, [
                                        _vm._m(2),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticStyle: {
                                              "text-decoration": "underline",
                                              color: "#a7a7ed"
                                            },
                                            attrs: {
                                              id:
                                                "global-user-profile-background-editbtn",
                                              href: "#"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.cpgtxt_sua_edit) +
                                                " " +
                                                _vm._s(_vm.cpgtxt_background)
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "p-l-r-50" }, [
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "input-group" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        staticStyle: {
                                          "background-color": "#fff",
                                          border: "1px solid #ced4da"
                                        },
                                        attrs: {
                                          type: "text",
                                          placeholder: "",
                                          "aria-label":
                                            "global-user-profile-username",
                                          id: "global-user-profile-username",
                                          name: "global-user-profile-username",
                                          "aria-describedby": "basic-addon2",
                                          value: "",
                                          maxlength: _vm.getUsernameMaxLength()
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "p-l-r-50 " }, [
                                    _vm._m(4),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "input-group" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        staticStyle: {
                                          "background-color": "#fff",
                                          border: "1px solid #ced4da"
                                        },
                                        attrs: {
                                          type: "text",
                                          placeholder: "",
                                          "aria-label":
                                            "global-user-profile-name",
                                          id: "global-user-profile-name",
                                          name: "global-user-profile-name",
                                          "aria-describedby": "basic-addon2",
                                          value: "",
                                          maxlength: _vm.getNameMaxLength()
                                        }
                                      })
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "p-l-r-50 ",
                                      staticStyle: { "vertical-align": "top" }
                                    },
                                    [
                                      _vm._m(5),
                                      _vm._v(" "),
                                      _vm._m(6),
                                      _vm._v(" "),
                                      _vm.emailError
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "form-group text-left"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticStyle: {
                                                    color: "rgb(221, 144, 29)",
                                                    "margin-top": "8px"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "*This is an invalid email address"
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "p-l-r-50 ",
                                      staticStyle: { "vertical-align": "top" }
                                    },
                                    [
                                      _vm._m(7),
                                      _vm._v(" "),
                                      _vm._m(8),
                                      _vm._v(" "),
                                      _vm.mobileError
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "form-group text-left"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticStyle: {
                                                    color: "rgb(221, 144, 29)",
                                                    "margin-top": "8px"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "*This is an invalid mobile"
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: {
                                      type: "hidden",
                                      id: "global-user-profile-tel-data",
                                      name: "global-user-profile-tel-data",
                                      value: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: {
                                      type: "hidden",
                                      id: "global-user-profile-country-data",
                                      name: "global-user-profile-country-data",
                                      value: ""
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "p-10 text-right",
                                      attrs: { colspan: "3" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-weight": "bold",
                                            color: "#a7a7ed"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                    " +
                                              _vm._s(_vm.getCreateddate()) +
                                              "\n                                                "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      { staticClass: "card border-0 m-b-10 text-center" },
                      [
                        _c("div", [
                          _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-outline-light dash-my-btn-0 active",
                              attrs: { id: "sua-profile-add-item" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.updateUserinfo()
                                }
                              }
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  " " + _vm._s(_vm.cbtntxt_sua_SaveChange) + " "
                                )
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                attrs: {
                  id: "global-user-profile-senior",
                  role: "tabpanel",
                  "aria-labelledby": "global-user-profile-senior-tab"
                }
              },
              [
                _c("input", {
                  attrs: {
                    type: "hidden",
                    id: "global-user-profile-senior-id",
                    name: "global-user-profile-senior-id"
                  },
                  domProps: { value: _vm.userid }
                }),
                _vm._v(" "),
                _vm._m(9),
                _vm._v(" "),
                _vm._m(10),
                _vm._v(" "),
                _vm._m(11),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-2" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      { staticClass: "card border-0 m-b-10 text-left" },
                      [
                        _c("div", [
                          _c(
                            "div",
                            {
                              staticClass:
                                "btn btn-outline-light dash-my-btn-0 active",
                              attrs: {
                                id: "global-user-profile-senior-save-changes"
                              },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.updateProfilePassword()
                                }
                              }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "bi bi-check",
                                  attrs: {
                                    width: "1em",
                                    height: "1em",
                                    viewBox: "0 0 16 16",
                                    fill: "currentColor",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "fill-rule": "evenodd",
                                      d:
                                        "M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  " " + _vm._s(_vm.cbtntxt_sua_SaveChange) + " "
                                )
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(12)
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(13)
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
          id: "global-user-profile-fav",
          "data-status": "off",
          "data-page-info": "Profile_global-user-profile"
        }
      },
      [
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
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "file",
          name: "global-user-profile-photo-edit",
          id: "global-user-profile-photo-edit",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("input", {
        attrs: {
          type: "file",
          name: "global-user-profile-background-edit",
          id: "global-user-profile-background-edit",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-left" }, [
      _c("label", { staticStyle: { "margin-top": "8px", color: "#666" } }, [
        _vm._v("Username")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-left" }, [
      _c("label", { staticStyle: { "margin-top": "8px", color: "#666" } }, [
        _vm._v("Name")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-left" }, [
      _c("label", { staticStyle: { "margin-top": "8px", color: "#666" } }, [
        _vm._v("Email")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group" }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: {
          "background-color": "#fff",
          border: "1px solid #ced4da"
        },
        attrs: {
          type: "email",
          placeholder: "",
          "aria-label": "global-user-profile-email",
          id: "global-user-profile-email",
          name: "global-user-profile-email",
          "aria-describedby": "basic-addon2",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-left" }, [
      _c("label", { staticStyle: { "margin-top": "8px", color: "#666" } }, [
        _vm._v("Tel")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group" }, [
      _c("input", {
        staticClass: "form-control",
        staticStyle: {
          "background-color": "#fff",
          border: "1px solid #ced4da"
        },
        attrs: {
          type: "tel",
          placeholder: "",
          "aria-label": "global-user-profile-tel",
          id: "global-user-profile-tel",
          name: "global-user-profile-tel",
          "aria-describedby": "basic-addon2",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row mb-3",
        attrs: { id: "global-user-profile-senior-old-password" }
      },
      [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "form-group text-left mb-0" }, [
            _c("label", { staticStyle: { color: "#666" } }, [
              _vm._v("Old Password")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              staticClass: "form-control",
              staticStyle: {
                "background-color": "#ededed",
                border: "1px solid #ced4da"
              },
              attrs: {
                type: "password",
                "aria-label": "global-user-profile-senior-old-password-txt",
                id: "global-user-profile-senior-old-password-txt",
                name: "global-user-profile-senior-old-password-txt",
                "aria-describedby":
                  "global-user-profile-senior-old-password-txt"
              }
            })
          ])
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
      {
        staticClass: "row mb-3",
        attrs: { id: "global-user-profile-senior-new-password" }
      },
      [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "form-group text-left mb-0" }, [
            _c("label", { staticStyle: { color: "#666" } }, [
              _vm._v("New Password")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              staticClass: "form-control",
              staticStyle: {
                "background-color": "#ededed",
                border: "1px solid #ced4da"
              },
              attrs: {
                type: "password",
                "aria-label": "global-user-profile-senior-new-password-txt",
                id: "global-user-profile-senior-new-password-txt",
                name: "global-user-profile-senior-new-password-txt",
                "aria-describedby":
                  "global-user-profile-senior-new-password-txt"
              }
            })
          ])
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
      {
        staticClass: "row mb-3",
        attrs: { id: "global-user-profile-senior-confirm-password" }
      },
      [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "form-group text-left mb-0" }, [
            _c("label", { staticStyle: { color: "#666" } }, [
              _vm._v("New Password Repeat")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              staticClass: "form-control",
              staticStyle: {
                "background-color": "#ededed",
                border: "1px solid #ced4da"
              },
              attrs: {
                type: "password",
                "aria-label": "global-user-profile-senior-confirm-password-txt",
                id: "global-user-profile-senior-confirm-password-txt",
                name: "global-user-profile-senior-confirm-password-txt",
                "aria-describedby":
                  "global-user-profile-senior-confirm-password-txt"
              }
            })
          ])
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
      {
        staticClass: "tab-pane fade",
        attrs: {
          id: "global-user-profile-infomation",
          role: "tabpanel",
          "aria-labelledby": "global-user-profile-infomation-tab"
        }
      },
      [_c("div", [_vm._v("Information Tab")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "form",
      {
        attrs: {
          action: "admin.dashboard",
          enctype: "multipart/form-data",
          id: "globalprofile_frm",
          method: "post",
          target: "_top"
        }
      },
      [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "hidden", id: "email", name: "email", value: "" }
        }),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "hidden", id: "pwd", name: "pwd", value: "" }
        }),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "hidden",
            id: "profile_page",
            name: "profile_page",
            value: "profile"
          }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/GlobalUserProfile.vue":
/*!******************************************************!*\
  !*** ./resources/vuedir/pages/GlobalUserProfile.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalUserProfile_vue_vue_type_template_id_196d7f00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalUserProfile.vue?vue&type=template&id=196d7f00& */ "./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=template&id=196d7f00&");
/* harmony import */ var _GlobalUserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalUserProfile.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GlobalUserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GlobalUserProfile_vue_vue_type_template_id_196d7f00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GlobalUserProfile_vue_vue_type_template_id_196d7f00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/GlobalUserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalUserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalUserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalUserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=template&id=196d7f00&":
/*!*************************************************************************************!*\
  !*** ./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=template&id=196d7f00& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalUserProfile_vue_vue_type_template_id_196d7f00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalUserProfile.vue?vue&type=template&id=196d7f00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/GlobalUserProfile.vue?vue&type=template&id=196d7f00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalUserProfile_vue_vue_type_template_id_196d7f00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalUserProfile_vue_vue_type_template_id_196d7f00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);