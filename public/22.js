(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
var _computed;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var loginusermail = '';
var s_nameORemail = '';
var s_status = -1;
var countries = [];
var pgctl_activie = "";
var pgctl_inactive = "";
var pgctl_block = "";
var btntxt_edit = "";
var btntxt_delete = "";
var permss;

var randHex = function randHex(len) {
  var maxlen = 8;
  var min = Math.pow(16, Math.min(len, maxlen) - 1);
  var max = Math.pow(16, Math.min(len, maxlen)) - 1;
  var n = Math.floor(Math.random() * (max - min + 1)) + min;
  var r = n.toString(16);

  while (r.length < len) {
    r = r + randHex(len - maxlen);
  }

  return r;
};

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function g_updateurl(vueobj) {
  var rstr = randHex(12); //var protocol=document.location.protocol; http:

  var a = window.location.href;
  a = a.replace('#', '');

  if (a.indexOf('admin.dashboard') > -1) {
    a = a.split('admin.dashboard')[0];
    a = a + 'admin.dashboard/fastreg=' + rstr;
  } else {
    var aa = window.location.pathname;
    a = a.replace(aa, '/admin.dashboard');
    a = a + '/fastreg=' + rstr;
  } //ckd


  var urlval = a; // var urlval="http://www.waaup.com.cn/admin.dashboard/fastreg="+rstr;

  $('#allow_register_fastreg_input').val(urlval);
  var smstxt = "wes快速通道:您可以点击查看 \n" + urlval;
  $('#ssmu_sms_cont').val(smstxt);
  vueobj.savefasttoken();
}

function addSSMUDlg() {
  $("#myAlertModal").modal('show');
  var dh = Math.max($(document).height(), $(document.body).height()); //var mh = $('.modal .modal-content').height();alert(mh);
  // var tp = dh / 2 - 350;
  // $('#myAlertModal').css('top',tp);
}

function addUserInfo() {
  var postData = {
    name: 'name',
    username: 'username',
    email: 'test@163.com',
    sex: 1,
    birthday: '1990-02-08',
    phone: '15524206580',
    address: 'jilin,jilinshi,gaoxinbeiqu',
    city: 'jilin',
    remark: '我是这个软件开发人',
    status: 0
  };
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('inserSystemUserManagementUsersAdd', postData).then(function (response) {
    var type = response.type;
  })["catch"](function (error) {
    console.log(error);
  });
}

function phonecountry() {
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    // allowDropdown: false,
    // autoHideDialCode: false,
    // autoPlaceholder: "off",
    // dropdownContainer: document.body,
    // excludeCountries: ["us"],
    // formatOnDisplay: false,
    // geoIpLookup: function(callback) {
    //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    //     var countryCode = (resp && resp.country) ? resp.country : "";
    //     callback(countryCode);
    //   });
    // },
    // hiddenInput: "full_number",
    // initialCountry: "auto",
    //localizedCountries: { 'cn': 'Deutschland' },
    // nationalMode: false,
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    onlyCountries: countries,
    // placeholderNumberType: "MOBILE",
    // preferredCountries: ['cn'],
    separateDialCode: true // utilsScript: "build/js/utils.js",

  });
}

function show_fade_alert(text, n) {
  // if(n==1)
  $('#ssmu_alert').text(text).css({
    "background": "#000000",
    "color": "#ffffff"
  }); //  else
  //      $('#ssmu_alert').text(text).css({"color":"#e8071a"});

  $("#ssmu_alert").fadeIn(800, function () {
    setTimeout(function () {
      $("#ssmu_alert").fadeOut(1000);
    }, 3000);
  });
}

var pstart = 1;
var pnum = pstart;
var pcnt = 5;
var numg = 5;

function getSSMUUserList() {
  var postData = {
    email: loginusermail,
    s_nameORemail: s_nameORemail,
    s_status: s_status,
    start: pstart,
    cnt: pcnt
  };
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.ssmu.getDashUserListByEmail', postData).then(function (response) {
    var status = response.data.status;

    if (status == "ok") {
      var total = response.data.total;

      if (total <= 0) {
        $('#ssmu_user_list').html('');
        $('#ssmu_page_nav').html('');
        return;
      }

      pstart = response.data.start;
      var totalpage = response.data.totalpage;
      var userlist = JSON.parse(response.data.userlist);
      var tags = '';

      for (var i = 0; i < userlist.length; i++) {
        var user = userlist[i];
        tags += '<tr role="row" class="odd">';
        tags += '<td>';
        tags += '<div class="form-check form-check-inline">';
        tags += '<input class="form-check-input" type="checkbox" id="oneCheckbox_' + user.id + '" value="">';
        tags += '</div>';
        tags += '</td>';
        tags += '<td>';
        tags += '<a href="#">';
        tags += '<figure class="avatar avatar-sm mr-2">';
        if (user.photo != null && user.photo != "") tags += '<img src="/uploads/images/' + user.photo + '" class="rounded-circle" alt="avatar" onerror="this.src =\'/images/noimg.png\';">';else tags += '<img src="/uploads/images/someone.png" class="rounded-circle" alt="avatar" onerror="this.src =\'/images/noimg.png\';">';
        tags += '</figure>';
        tags += user.name;
        tags += '</a>';
        tags += '</td>';
        tags += '<td>' + user.username + '</td>';
        /*tags+='<td>'+user.email+'</td>';*/

        tags += '<td>' + user.department + '</td>';
        tags += '<td>' + user.position + '</td>';

        if (user.status == 0) {
          tags += '<td id="ssmu_user_status_view_' + user.id + '" class="data-ajax" data-ajax="pgctl_block">' + pgctl_block + '</td>';
        } else if (user.status == 1) {
          tags += '<td id="ssmu_user_status_view_' + user.id + '" class="data-ajax" data-ajax="pgctl_inactive">' + pgctl_inactive + '</td>';
        } else if (user.status == 2) {
          tags += '<td id="ssmu_user_status_view_' + user.id + '" class="data-ajax" data-ajax="pgctl_activie">' + pgctl_activie + '</td>';
        }

        tags += '<td>';
        tags += '<div class="form-group m-b-0">';
        tags += '<select class="my-border-radius-slt form-control float-right" id="ssmuser_table_status_' + user.id + '" name="ssmuser_table_state' + user.id + '">';
        tags += '<option value="" class="data-ajax" data-ajax="btntxt_edit">' + btntxt_edit + '</option>';
        tags += '<option value="active" class="data-ajax" data-ajax="pgctl_activie">' + pgctl_activie + '</option>';
        tags += '<option value="inactive" class="data-ajax" data-ajax="pgctl_inactive">' + pgctl_inactive + '</option>';
        tags += '<option value="block" class="data-ajax" data-ajax="pgctl_block">' + pgctl_block + '</option>';
        tags += '<option value="delete" class="data-ajax" data-ajax="btntxt_delete">' + btntxt_delete + '</option>';
        tags += '</select>';
        tags += '</div>';
        tags += '</td>';
        tags += '</tr>';
      }

      $('#ssmu_user_list').html(tags);
      var nav_tag = '';
      nav_tag += '<nav aria-label="..." class="mb-4">';
      nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
      var disble = "";
      if (pstart == 1) disble = "disabled";
      var prenum = parseInt(pstart) - 1;
      nav_tag += '<li class="page-item  ' + disble + ' ">';
      nav_tag += '<a class="page-link" href="#"  id="ssmunavnum_' + prenum + '" >';
      nav_tag += '<i class="ti-angle-left"></i>';
      nav_tag += '</a>';
      nav_tag += '</li>';
      pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

      for (var idx = 0; idx < numg; idx++) {
        var actv = "";
        var aria_current = '';
        var spantag = '';
        var oid = '';

        if (pnum == pstart) {
          actv = 'active';
          aria_current = 'aria-current="page"';
          spantag = '<span class="sr-only">(current)</span>';
        } else oid = "ssmunavnum_" + pnum;

        nav_tag += '<li class="page-item ' + actv + '"  ' + aria_current + '>';
        nav_tag += '<a class="page-link" id="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
        nav_tag += '</li>';
        if (pnum == totalpage) break;
        pnum = pnum + 1;
      }

      var nextnum = parseInt(pstart) + 1;
      var edisble = "";
      if (pstart == totalpage) edisble = "disabled";
      nav_tag += '<li class="page-item ' + edisble + ' ">';
      nav_tag += '<a class="page-link" id="ssmunavnum_' + nextnum + '" href="#">';
      nav_tag += '<i class="ti-angle-right"></i>';
      nav_tag += '</a>';
      nav_tag += '</li>';
      nav_tag += '</ul>';
      nav_tag += '</nav>';
      $('#ssmu_page_nav').html(nav_tag);
      /* events { */

      $('a[id^="ssmunavnum_"]').click(function () {
        var oid = $(this).attr("id");
        pstart = oid.split('_')[1];
        getSSMUUserList();
      });
      $("#ssmu_allCheckbox").prop('checked', false);
      /* click to induvidual checkbox */

      $('input[id^="oneCheckbox_"]').click(function () {
        if ($(this).is(':checked')) $("#ssmu_allCheckbox").prop('checked', false);else $("#ssmu_allCheckbox").prop('checked', false);
      });
      $('select[id^="ssmuser_table_status_"]').change(function () {
        var tid = $(this).attr("id");
        var t_id = tid.split("_")[3];
        var value = $(this).val();
        var cvalue = $('#ssmu_user_status_view_' + t_id).text();

        if (value != '' && value != cvalue) {
          setSSMUUserStatusChange(t_id, value);
        }
      });
    } else console.log('getSSMUUserList Error');
  })["catch"](function (error) {
    console.log(error);
  });
}

function setSSMUUserStatusChange(t_id, value) {
  var st = value == 'block' ? 0 : value == 'inactive' ? 1 : 2;
  if (value == 'delete') st = 3;
  var postData = {
    id: t_id,
    value: st
  };

  if (permss.pwrite == 1 || permss.pdelete == 1) {
    if (permss.pdelete == 0 && value == 'delete') {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.ssmu.setSSMUUserStatusChange', postData).then(function (response) {
      var type = response.data.status;

      if (type == "ok") {
        var txt_val = 'Activie';
        if (st == 0) txt_val = 'Block';else if (st == 1) txt_val = 'Inactivie';else if (st == 2) txt_val = 'Activie';
        $('#ssmu_user_status_view_' + t_id).text(txt_val);
        if (value == 'delete') getSSMUUserList();
      } else {
        console.log(type);
      }
    })["catch"](function (error) {
      console.log(error);
    });
  } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
}

function getsettingData() {
  $.ajax({
    url: 'admin.ssrGetSetting',
    data: {
      transLang: "en-1"
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      if (data.msg === "ok") {
        if (data.item != "") {
          var dt = data.item;
          dt = $.parseJSON(dt);
          var ct = decodeURIComponent(dt.help);
          $("#ssmu_link_content").text(ct);
        }

        if (data.sms) {
          var lists = data.sms;
          Object.keys(lists).forEach(function (elem) {
            countries.push(lists[elem].countrycode);
          });
        }
      } else {
        console.log(data.msg);
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}
/* default part */


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    var _ref;

    return _ref = {
      ssmu_sms_cont: '',
      ssmu_mail_cont: '',
      statuss: [{
        text: 'Blocked',
        id: 0
      }, {
        text: 'Inactived',
        id: 1
      }, {
        text: 'Activied',
        id: 2
      }, {
        text: 'Delete',
        id: 3
      }],
      statusid: '',
      pageid: 'system-suser-management-users-fav',
      musususu_system_suser_manage_users: '',
      mu_system: '',
      musu_system_bsuser: '',
      mususu_system_suser_manage: '',
      pgtxt_filters: '',
      pgtxt_nameoremail: '',
      pgctl_any: '',
      pgctl_activie: '',
      pgctl_inactive: '',
      pgctl_block: '',
      pgtxt_suserlist: '',
      pgctl_actions: '',
      btntxt_adduser: '',
      btntxt_delete: '',
      btntxt_edit: '',
      pgtxt_name: '',
      pgtxt_username: '',
      pgtxt_email: '',
      pgtxt_department: '',
      pgtxt_position: '',
      pgtxt_status: '',
      pgtxt_operation: '',
      pgtxt_adduser: '',
      btntxt_link: '',
      btntxt_sms: '',
      btntxt_mail: '',
      btntxt_manual: '',
      btntxt_send: '',
      btntxt_cancel: '',
      pgtxt_mail: '',
      pgtxt_msgtxt: '',
      btntxt_request: '',
      btntxt_close: '',
      btntxt_add: '',
      pgtxt_ssmu_name: ''
    }, _defineProperty(_ref, "pgtxt_username", ''), _defineProperty(_ref, "pgtxt_password", ''), _defineProperty(_ref, "pgtxt_remark", ''), _defineProperty(_ref, "pgtxt_notpermission", ''), _defineProperty(_ref, "pgtxt_notification", ''), _defineProperty(_ref, "pgtxt_dontregnewuser", ''), _ref;
  },
  created: function created() {},
  computed: (_computed = {
    // 계산된 getter
    title: function title() {
      return this.$store.state.curMenu;
    },
    cmusususu_system_suser_manage_users: function cmusususu_system_suser_manage_users() {
      return this.musususu_system_suser_manage_users;
    },
    cmu_system: function cmu_system() {
      return this.mu_system;
    },
    cmusu_system_bsuser: function cmusu_system_bsuser() {
      return this.musu_system_bsuser;
    },
    cmususu_system_suser_manage: function cmususu_system_suser_manage() {
      return this.mususu_system_suser_manage;
    },
    cpgtxt_filters: function cpgtxt_filters() {
      return this.pgtxt_filters;
    },
    cpgtxt_nameoremail: function cpgtxt_nameoremail() {
      return this.pgtxt_nameoremail;
    },
    cpgctl_any: function cpgctl_any() {
      return this.pgctl_any;
    },
    cpgctl_activie: function cpgctl_activie() {
      return this.pgctl_activie;
    },
    cpgctl_inactive: function cpgctl_inactive() {
      return this.pgctl_inactive;
    },
    cpgctl_block: function cpgctl_block() {
      return this.pgctl_block;
    },
    cpgtxt_suserlist: function cpgtxt_suserlist() {
      return this.pgtxt_suserlist;
    },
    cpgctl_actions: function cpgctl_actions() {
      return this.pgctl_actions;
    },
    cbtntxt_adduser: function cbtntxt_adduser() {
      return this.btntxt_adduser;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_username: function cpgtxt_username() {
      return this.pgtxt_username;
    },
    cpgtxt_email: function cpgtxt_email() {
      return this.pgtxt_email;
    },
    cpgtxt_department: function cpgtxt_department() {
      return this.pgtxt_department;
    },
    cpgtxt_position: function cpgtxt_position() {
      return this.pgtxt_position;
    },
    cpgtxt_status: function cpgtxt_status() {
      return this.pgtxt_status;
    },
    cpgtxt_operation: function cpgtxt_operation() {
      return this.pgtxt_operation;
    },
    cpgtxt_adduser: function cpgtxt_adduser() {
      return this.pgtxt_adduser;
    },
    cbtntxt_link: function cbtntxt_link() {
      return this.btntxt_link;
    },
    cbtntxt_sms: function cbtntxt_sms() {
      return this.btntxt_sms;
    },
    cbtntxt_mail: function cbtntxt_mail() {
      return this.btntxt_mail;
    },
    cbtntxt_manual: function cbtntxt_manual() {
      return this.btntxt_manual;
    },
    cbtntxt_send: function cbtntxt_send() {
      return this.btntxt_send;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
    },
    cbtntxt_delete: function cbtntxt_delete() {
      return this.btntxt_delete;
    },
    cbtntxt_edit: function cbtntxt_edit() {
      return this.btntxt_edit;
    },
    cpgtxt_mail: function cpgtxt_mail() {
      return this.pgtxt_mail;
    },
    cpgtxt_msgtxt: function cpgtxt_msgtxt() {
      return this.pgtxt_msgtxt;
    },
    cbtntxt_request: function cbtntxt_request() {
      return this.btntxt_request;
    },
    cbtntxt_close: function cbtntxt_close() {
      return this.btntxt_close;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_ssmu_name: function cpgtxt_ssmu_name() {
      return this.pgtxt_ssmu_name;
    }
  }, _defineProperty(_computed, "cpgtxt_username", function cpgtxt_username() {
    return this.pgtxt_username;
  }), _defineProperty(_computed, "cpgtxt_password", function cpgtxt_password() {
    return this.pgtxt_password;
  }), _defineProperty(_computed, "cpgtxt_remark", function cpgtxt_remark() {
    return this.pgtxt_remark;
  }), _defineProperty(_computed, "cpgtxt_notpermission", function cpgtxt_notpermission() {
    return this.pgtxt_notpermission;
  }), _defineProperty(_computed, "cpgtxt_notification", function cpgtxt_notification() {
    return this.pgtxt_notification;
  }), _defineProperty(_computed, "cpgtxt_notification", function cpgtxt_notification() {
    return this.pgtxt_dontregnewuser;
  }), _defineProperty(_computed, "contentchange", function contentchange() {
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
      if (obj.hasOwnProperty(key)) {
        obj[key] = value;
      }
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
    return this.$store.state.contentchange;
  }), _computed),
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    loginusermail = this.$store.state.userinfo.email;
    /* fav part*/

    var vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    /* fav part*/

    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.permissionDefinition();
    pgctl_activie = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_activie');
    pgctl_inactive = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_inactive');
    pgctl_block = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgctl_block');
    btntxt_edit = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
    btntxt_delete = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
    getSSMUUserList();
    getsettingData();
    phonecountry();
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
    ssmuser_nameoremailsearch: function ssmuser_nameoremailsearch() {
      if (permss.pread == 1) {
        var objval = $('#ssmuser_state').val();
        var st = parseInt(objval);

        if (isNaN(st)) {
          s_status = -1;
        } else s_status = st;

        var txt = $('#ssmuser_nameoremailsearch').val();
        txt = $.trim(txt);
        s_nameORemail = txt;
        getSSMUUserList();
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
    },
    ssmu_user_allCheck_change: function ssmu_user_allCheck_change(pid) {
      if (permss.pwrite == 1) {
        var id = parseInt(pid);

        if (isNaN(id)) {
          return;
        }

        var idlist = []; // if($("#ssmu_allCheckbox").is(':checked'))
        // {
        //alert(id);

        $('input:checkbox[id^="oneCheckbox_"]:checked').each(function () {
          var oneidstr = $(this).attr('id');
          var t_id = oneidstr.split('_')[1];
          idlist.push(parseInt(t_id));
        });
        this.setSSMUUserStatusAllChange(idlist, parseInt(id)); // }
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
    },
    setSSMUUserStatusAllChange: function setSSMUUserStatusAllChange(idlist, id) {
      var postData = {
        idlists: idlist,
        value: id
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.ssmu.setSSMUUserStatusAllChange', postData).then(function (response) {
        var type = response.data.status;

        if (type == "ok") {
          for (var idx = 0; idx < idlist.length; idx++) {
            var tid = idlist[idx];
            var txt = id == 0 ? 'block' : id == 1 ? 'inactive' : 'active';
            $('#ssmu_user_status_view_' + tid).text(txt);
          }

          if (id == 3) {
            getSSMUUserList();
            $('#ssmuser_table_all_actions').val("");
          }
        } else {
          console.log(type);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    data_toggle_popover: function data_toggle_popover() {},
    UpdateRandomUrl: function UpdateRandomUrl() {
      g_updateurl(this);
    },
    get_sms_mail_cont: function get_sms_mail_cont() {
      var _this = this;

      var postData = {
        cont: ''
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.ssmu.getsmsmailcont', postData).then(function (response) {
        var type = response.data.status;

        if (type == "ok") {
          // this.ssmu_sms_cont=response.data.sms_cont;
          _this.ssmu_mail_cont = response.data.mail_cont;
        } else {
          console.log('db or empty');
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    addSSMU: function addSSMU() {
      if (permss.pcreate == 1) {
        addSSMUDlg();
        this.readFastToken(); //g_updateurl(this);

        this.get_sms_mail_cont();
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_notpermission');
    },
    readFastToken: function readFastToken() {
      var postData = {
        email: loginusermail
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('getfasttoken', postData).then(function (response) {
        var type = response.data.type;

        if (type == "ok") {
          var rstr = response.data.address; //var protocol=document.location.protocol; http:

          var a = window.location.href;
          a = a.replace('#', '');

          if (a.indexOf('admin.dashboard') > -1) {
            a = a.split('admin.dashboard')[0];
            a = a + 'admin.dashboard/fastreg=' + rstr;
          } else {
            var aa = window.location.pathname;
            a = a.replace(aa, '/admin.dashboard');
            a = a + '/fastreg=' + rstr;
          } //ckd


          var urlval = a; // var urlval="http://www.waaup.com.cn:8080/admin.dashboard/fastreg="+rstr;

          $('#allow_register_fastreg_input').val(urlval);
          var smstxt = "wes快速通道:您可以点击查看 \n" + urlval;
          $('#ssmu_sms_cont').val(smstxt);
        } else {
          console.log('no address');
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    tabClick: function tabClick(n) {
      $('.modal-body .btn.btn-outline-light').removeClass('active');

      if (n == 1) {
        $('#tab-mu-1').addClass('active');
        $('#tab1').show();
        $('#tab2').hide();
        $('#tab3').hide();
        $('#tab4').hide();
      } else if (n == 2) {
        $('#tab-mu-2').addClass('active');
        $('#tab1').hide();
        $('#tab2').show();
        $('#tab3').hide();
        $('#tab4').hide();
      } else if (n == 3) {
        $('#tab-mu-3').addClass('active');
        $('#tab1').hide();
        $('#tab2').hide();
        $('#tab3').show();
        $('#tab4').hide();
      } else if (n == 4) {
        $('#tab-mu-4').addClass('active');
        $('#tab1').hide();
        $('#tab2').hide();
        $('#tab3').hide();
        $('#tab4').show();
      } //addUserInfo();

    },
    tablinkCheckbox: function tablinkCheckbox() {
      if ($("#tablinkcontentckbtn").is(':checked')) $(".tab-link-cont").show(); // checked
      else $(".tab-link-cont").hide();
    },
    copyClipboardtoUrl: function copyClipboardtoUrl(lkid) {
      var Url = document.getElementById(lkid);
      Url.focus();
      Url.select();
      Url.setSelectionRange(0, 99999);
      /*For mobile devices*/

      document.execCommand("Copy");
      $('[data-toggle="popover"]').popover('show'); // this.savefasttoken();

      setTimeout(function () {
        $('[data-toggle="popover"]').popover('hide');
      }, 1500);
    },

    /*  서버에로 토근보관  */
    savefasttoken: function savefasttoken() {
      var spt = $('#allow_register_fastreg_input').val();
      var a_dd = spt.split('=')[1];
      var postData = {
        email: loginusermail,
        address: a_dd
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('savefasttoken', postData).then(function (response) {
        var type = response.data.type;

        if (type == "ok") {}
      })["catch"](function (error) {
        console.log(error);
      });
    },
    SSMU_SendSMS: function SSMU_SendSMS() {
      //  this.set_ssmu_sms_mail_cont();
      var smscont = $('#ssmu_sms_cont').val();

      if (smscont == "") {
        alert("error: empty content of sms!");
        return;
      }

      if (smscont.indexOf("fastreg=") < 0) {
        alert("error: content of sms!");
        return;
      }

      var fastreg = smscont.split('=')[1];
      var countrycode = $('.iti__selected-dial-code').html();
      countrycode = countrycode.replace("+", "");
      var phnum = $('#phone').val();
      var patt = /^\d+$/;

      if (phnum.match(patt)) {
        var postData = {
          phone: countrycode + phnum,
          fastreg: fastreg
        }; //ckd

        var svurl = 'admin.InvokeSMS';
        if (window.Laravel.g_path === "remote") svurl = 'http://waaup.org/admin.InvokeSMS'; // for hk server
        // if(countrycode=="86" || countrycode==86)
        //  svurl = 'http://52.80.36.179/admin.InvokeSMS';

        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(svurl, postData).then(function (response) {
          var type = response.data.status;

          if (type == "ok") {
            show_fade_alert('Success: send SMS', 1);
          } else {
            console.log('type::' + type);
            show_fade_alert(type, 0);
          }
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        show_fade_alert('Invalid is phone number!', 0);
      }
    },
    set_ssmu_sms_mail_cont: function set_ssmu_sms_mail_cont() {
      var smscont = $('#ssmu_sms_cont').val();
      var mailcont = $('#ssmu_mail_cont').val(); //if(smscont=="" && mailcont=="") return;//ckd

      if (mailcont == "") return;
      var postData = {
        //sms_cont: smscont,//ckd
        sms_cont: '',
        mail_cont: mailcont
      }; //alert(smscont+':'+mailcont);

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('admin.ssmu.setSmsMailCont', postData).then(function (response) {
        var type = response.data.status;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    SSMU_SendMail: function SSMU_SendMail() {
      var emaillist = $('#useremails').val();

      if (emaillist.length < 5) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_invalidemail');
        return;
      }

      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.Confirm('Are you sure you want to send mails', function (val) {
        if (val) {
          vueOBJ.set_ssmu_sms_mail_cont();
          /*var r = window.confirm("Are you sure you want to send mails");
          if (r == false)
              return;*/

          emaillist = emaillist.replace("\n", " ");
          emaillist = emaillist.replace("\t", " ");
          emaillist = emaillist.replace(",", " ");
          emaillist = emaillist.replace(";", " ");
          emaillist = emaillist.replace(":", " ");
          var a_emails = emaillist.split(" ");
          var email_str = "";

          for (var i = 0; i < a_emails.length; i++) {
            var em = a_emails[i];
            var rt = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.validateEmail(em);
            if (rt) email_str = email_str + em + "#";
          }

          if (email_str.length < 5) {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_invalidpattern');
            return;
          }

          email_str = encodeURIComponent(email_str);
          var mailcont = $('#ssmu_mail_cont').val();
          mailcont = encodeURIComponent(mailcont);
          var postData = {
            emails: email_str,
            mailcont: mailcont
          }; //current is window.location.hostname  : wes.local.com

          var hostname = window.location.hostname;
          var flag = hostname.indexOf('waaup.org');
          var svurl = "admin.InvokeMail"; //if(window.Laravel.g_path=="remote")

          if (flag < 0) svurl = 'http://waaup.org/admin.InvokeMail';
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(svurl, postData).then(function (response) {
            var type = response.data.status;

            if (type == "ok") {
              show_fade_alert('Success: send mail', 1);
            } else {
              show_fade_alert('Error: send mail', 0);
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    SSMU_DialogClose: function SSMU_DialogClose() {
      $("#myAlertModal").modal('hide');
    },
    ssmu_user_all_check: function ssmu_user_all_check() {
      if ($("#ssmu_allCheckbox").is(':checked')) {
        $('input[id^="oneCheckbox_"]').prop('checked', true);
      } else {
        $('input[id^="oneCheckbox_"]').prop('checked', false);
      }
    },
    ssmu_manual_reg: function ssmu_manual_reg() {
      var email = $.trim($("#ssmu-email").val());
      var username = $.trim($("#ssmu-username").val());
      var name = $.trim($("#ssmu-name").val());
      var pwd = $.trim($("#ssmu-pwd").val());
      var remark = $.trim($("#ssmu-remark").val());

      if (email == "") {
        alert("This email must not empty.");
        return false;
      }

      if (username == "") {
        alert("This username must not empty.");
        return false;
      }

      if (name == "") {
        alert("This name have must not empty.");
        return false;
      }

      if (pwd == "") {
        alert('This password1 and password2 must not empty.');
        return false;
      }

      var postData = {
        name: name,
        username: username,
        qualify: '',
        contact: '',
        contactmethod: '',
        contactaddr: '',
        email: email,
        password: pwd,
        phonenumEmail: '',
        uploaddoc: '',
        photo: '',
        remark: remark,
        partwho: 2
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user.fastreg', postData).then(function (response) {
        if (response.data.status == "dup") {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_1__["default"].data.showAlert('pgtxt_dontregnewuser');
        } else if (response.data.status == "ok") {
          //show_fade_alert('Success add new user.',0);
          //setTimeout(function () {
          getSSMUUserList(); //},3000);

          $("#myAlertModal").modal('hide');
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ndiv,input{\n        /* font-family: SimHei;*/\n}\ntextarea[id=ssmu-remark] {\n        resize: none;\n        border-radius: 0.8rem;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid #ced4da;\n        overflow: visible;\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s;\n        display: block;\n        width: 100%;\n        padding: 10px;\n}\na[data-toggle=\"popover\"]:hover {\n  color: #0e61de;\n  font-weight: bold;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=template&id=e40ad4ca&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=template&id=e40ad4ca& ***!
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
      _c("div", { staticClass: "page-title p-b-25" }, [
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_system_suser_manage_users))]),
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
            "\n                   " +
              _vm._s(_vm.cmu_system) +
              "  >>  " +
              _vm._s(_vm.cmusu_system_bsuser) +
              "  >>  " +
              _vm._s(_vm.cmususu_system_suser_manage) +
              "  >>  " +
              _vm._s(_vm.cmusususu_system_suser_manage_users) +
              "\n                  "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body", staticStyle: { padding: "20px" } },
            [
              _c("h6", { staticClass: "card-title m-b-20" }, [
                _vm._v(_vm._s(_vm.cpgtxt_filters))
              ]),
              _vm._v(" "),
              _c(
                "h6",
                {
                  staticClass: "card-title m-b-10",
                  staticStyle: { color: "#878585", "font-size": "0.9rem" }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_nameoremail))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group m-b-0" }, [
                    _c("input", {
                      staticClass: "form-control w-75",
                      attrs: {
                        type: "text",
                        placeholder: "",
                        id: "ssmuser_nameoremailsearch"
                      },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            $event.keyCode !== 13
                          ) {
                            return null
                          }
                          return _vm.ssmuser_nameoremailsearch()
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group m-b-0" }, [
                    _c(
                      "select",
                      {
                        staticClass: "form-control w-75",
                        attrs: { id: "ssmuser_state", name: "ssmuser_state" },
                        on: {
                          change: function($event) {
                            return _vm.ssmuser_nameoremailsearch()
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v(_vm._s(_vm.cpgctl_any))
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v(_vm._s(_vm.cpgctl_activie))
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v(_vm._s(_vm.cpgctl_inactive))
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v(_vm._s(_vm.cpgctl_block))
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            {
              staticClass: "row",
              staticStyle: { padding: "30px 30px 5px 40px" }
            },
            [
              _c("div", { staticClass: "col-md-4" }, [
                _c("h6", { staticClass: "card-title m-b-20" }, [
                  _vm._v(_vm._s(_vm.cpgtxt_suserlist))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group m-b-0" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.statusid,
                          expression: "statusid"
                        }
                      ],
                      staticClass: "form-control w-75 float-right",
                      attrs: {
                        id: "ssmuser_table_all_actions",
                        name: "ssmuser_table_all_actions"
                      },
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.statusid = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            return _vm.ssmu_user_allCheck_change(_vm.statusid)
                          }
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v(_vm._s(_vm.cpgctl_actions))
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.statuss, function(status) {
                        return _c(
                          "option",
                          { domProps: { value: status.id } },
                          [_vm._v(_vm._s(status.text))]
                        )
                      })
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 text-right" }, [
                _c(
                  "div",
                  {
                    staticClass: "btn btn-outline-light  dash-my-btn-0 active",
                    staticStyle: {
                      "font-size": "0.9rem",
                      padding: "10px 20px"
                    },
                    attrs: { id: "ssmuser_table_btn" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.addSSMU()
                      }
                    }
                  },
                  [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_adduser))])]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-lg  no-footer",
                    attrs: {
                      id: "user-list",
                      role: "grid",
                      "aria-describedby": "user-list_info"
                    }
                  },
                  [
                    _c("thead", [
                      _c("tr", { attrs: { role: "row" } }, [
                        _c("th", { staticStyle: { width: "20px!important" } }, [
                          _c(
                            "div",
                            { staticClass: "form-check form-check-inline" },
                            [
                              _c("input", {
                                staticClass: "form-check-input",
                                attrs: {
                                  type: "checkbox",
                                  id: "ssmu_allCheckbox",
                                  value: "all"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.ssmu_user_all_check()
                                  }
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_name))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_username))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_department))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_position))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v(_vm._s(_vm.cpgtxt_status))
                        ]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: {
                              "text-align": "center",
                              "font-size": "14px"
                            }
                          },
                          [_vm._v(_vm._s(_vm.cpgtxt_operation))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", { attrs: { id: "ssmu_user_list" } })
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "myAlertModal" } }, [
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
                [_vm._v(_vm._s(_vm.cpgtxt_adduser))]
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
                  attrs: { id: "ssmu_alert" }
                },
                [_vm._v("SMS alram area.")]
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
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "btn btn-outline-light active  dash-my-btn-1",
                        attrs: { id: "tab-mu-1" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.tabClick(1)
                          }
                        }
                      },
                      [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_link))])]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "btn btn-outline-light  dash-my-btn-1 m-l-15",
                        attrs: { id: "tab-mu-2" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.tabClick(2)
                          }
                        }
                      },
                      [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_sms))])]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "btn btn-outline-light  dash-my-btn-1 m-l-15",
                        attrs: { id: "tab-mu-3" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.tabClick(3)
                          }
                        }
                      },
                      [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_mail))])]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "btn btn-outline-light  dash-my-btn-1 m-l-15",
                        attrs: { id: "tab-mu-4" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.tabClick(4)
                          }
                        }
                      },
                      [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_manual))])]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel", attrs: { id: "tab1" } }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group m-b-0",
                          staticStyle: {
                            padding: "20px 10px 5px 10px",
                            color: "#999999",
                            "font-family": "SimHei"
                          }
                        },
                        [
                          _c("input", {
                            attrs: {
                              type: "checkbox",
                              name: "tablinkcontentckbtn",
                              id: "tablinkcontentckbtn",
                              checked: ""
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.tablinkCheckbox()
                              }
                            }
                          }),
                          _vm._v(
                            "允许快速注册\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(2)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row tab-link-cont" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group m-b-0 text-right",
                          staticStyle: { padding: "20px 10px 5px 10px" }
                        },
                        [
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.UpdateRandomUrl()
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    color: "#a7a7a7",
                                    "font-family": "SimHei"
                                  }
                                },
                                [_vm._v("更新链接")]
                              ),
                              _vm._v(" "),
                              _c(
                                "svg",
                                {
                                  staticClass:
                                    "feather feather-bar-chart-2 nav-link-icon",
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    "stroke-width": "1.2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "fill-rule": "evenodd",
                                      d:
                                        "M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12 m-t-5" }, [
                      _c(
                        "a",
                        {
                          staticStyle: { "padding-left": "10px" },
                          attrs: {
                            href: "#",
                            "data-toggle": "popover",
                            "data-placement": "right",
                            title: "",
                            "data-content": "Link copied to clipboard."
                          },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.copyClipboardtoUrl(
                                "allow_register_fastreg_input"
                              )
                            }
                          }
                        },
                        [_vm._v("复制链接")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "panel",
                    staticStyle: { display: "none" },
                    attrs: { id: "tab2" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: {
                          "background-color": "#eef2f5",
                          "margin-top": "20px",
                          "padding-bottom": "10px"
                        }
                      },
                      [
                        _vm._m(6),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "100%",
                              "background-color": "#f9fbfa",
                              margin: "10px 10px 0px 10px",
                              "padding-bottom": "10px"
                            }
                          },
                          [
                            _vm._m(7),
                            _vm._v(" "),
                            _vm._m(8),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "background-color": "#f4f4f4",
                                  margin: "0px 10px 0px 10px"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-md-12 p-t-b-10" },
                                  [
                                    _c(
                                      "textarea",
                                      {
                                        staticClass: "form-control",
                                        staticStyle: {
                                          "background-color": "#fff",
                                          border: "1px solid #f2f2f2",
                                          "min-height": "62px",
                                          "-ms-overflow-style": "none",
                                          resize: "none"
                                        },
                                        attrs: {
                                          id: "ssmu_sms_cont",
                                          readonly: "readonly"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.ssmu_sms_cont))]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "div",
                          {
                            staticClass: "bottom",
                            staticStyle: {
                              "text-align": "center",
                              "padding-top": "10px"
                            }
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-info",
                                staticStyle: {
                                  "font-family": "SimHei",
                                  background: "#5c6bc0 !important",
                                  "border-color": "#5c6bc0 !important"
                                },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.SSMU_SendSMS()
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.cbtntxt_send))]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-light",
                                staticStyle: { "font-family": "SimHei" },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.SSMU_DialogClose()
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.cbtntxt_cancel))]
                            )
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
                    staticClass: "panel",
                    staticStyle: { display: "none" },
                    attrs: { id: "tab3" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: {
                          "background-color": "#eef2f5",
                          "margin-top": "20px",
                          "padding-bottom": "10px"
                        }
                      },
                      [
                        _vm._m(9),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "100%",
                              "background-color": "#f9fbfa",
                              margin: "10px 10px 0px 10px"
                            }
                          },
                          [
                            _c("div", { staticClass: "col-md-12" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "form-group",
                                  staticStyle: { "margin-bottom": "0" }
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticStyle: {
                                        "margin-top": "8px",
                                        color: "#666",
                                        width: "100px"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.cpgtxt_mail))]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(10)
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group m-b-0",
                              staticStyle: {
                                padding: "10px 0 0 10px",
                                color: "#a9a9a9",
                                "font-family": "SimHei"
                              }
                            },
                            [_vm._v(_vm._s(_vm.cpgtxt_msgtxt))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group m-b-0",
                              staticStyle: {
                                padding: "10px",
                                color: "#a9a9a9",
                                "font-family": "SimHei"
                              }
                            },
                            [
                              _c(
                                "textarea",
                                {
                                  staticClass: "form-control",
                                  staticStyle: {
                                    "background-color": "#fff",
                                    border: "1px solid #f2f2f2"
                                  },
                                  attrs: { id: "ssmu_mail_cont" }
                                },
                                [_vm._v(_vm._s(_vm.ssmu_mail_cont))]
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "div",
                          {
                            staticClass: "bottom",
                            staticStyle: {
                              "text-align": "center",
                              "padding-top": "10px"
                            }
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-info",
                                staticStyle: {
                                  "font-family": "SimHei",
                                  background: "#5c6bc0 !important",
                                  "border-color": "#5c6bc0 !important"
                                },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.SSMU_SendMail()
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.cbtntxt_request))]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-light",
                                staticStyle: { "font-family": "SimHei" },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.SSMU_DialogClose()
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.cbtntxt_close))]
                            )
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
                    staticClass: "panel",
                    staticStyle: { display: "none" },
                    attrs: { id: "tab4" }
                  },
                  [
                    _c("form", { attrs: { id: "ssmu_reg_by_manager" } }, [
                      _c(
                        "div",
                        {
                          staticClass: "row",
                          staticStyle: {
                            "background-color": "#eef2f5",
                            "margin-top": "20px",
                            "padding-bottom": "10px"
                          }
                        },
                        [
                          _vm._m(11),
                          _vm._v(" "),
                          _c("form", [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "background-color": "#f9fbfa",
                                  margin: "10px 10px 0px 10px",
                                  "padding-bottom": "10px"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "row",
                                    staticStyle: {
                                      padding: "10px 10px 10px 10px"
                                    }
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
                                    _vm._m(12),
                                    _vm._v(" "),
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
                                          [_vm._v(_vm._s(_vm.cpgtxt_username))]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(13),
                                    _vm._v(" "),
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
                                          [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(14),
                                    _vm._v(" "),
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
                                          [_vm._v(_vm._s(_vm.cpgtxt_password))]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(15),
                                    _vm._v(" "),
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
                                          [_vm._v(_vm._s(_vm.cpgtxt_remark))]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(16)
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            {
                              staticClass: "bottom",
                              staticStyle: {
                                "text-align": "center",
                                "padding-top": "10px"
                              }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-info m-r-10",
                                  staticStyle: {
                                    "font-family": "SimHei",
                                    background: "#5c6bc0 !important",
                                    "border-color": "#5c6bc0 !important"
                                  },
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.ssmu_manual_reg()
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.cbtntxt_add))]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-light",
                                  staticStyle: { "font-family": "SimHei" },
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.SSMU_DialogClose()
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.cbtntxt_close))]
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
          id: "system-suser-management-users-fav",
          "data-status": "off",
          "data-page-info": "Users_system-suser-management-users"
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
      _c("div", { staticClass: "col-md-12", attrs: { id: "ssmu_page_nav" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c(
        "div",
        {
          staticClass: "form-group m-b-0",
          staticStyle: {
            padding: "20px 10px 15px 20px",
            color: "#888888",
            "font-family": "SimHei"
          },
          attrs: { id: "ssmu_link_content" }
        },
        [
          _vm._v("那些立即邀请许同事的人远"),
          _c("br"),
          _vm._v(
            "\n                                    更快掌握 WES 并提高使用"
          ),
          _c("br"),
          _vm._v(
            "\n                                    效率。 复制链接并将其发送给您的同事 - "
          ),
          _c("br"),
          _vm._v(
            "\n                                    他们将在没有您的帮助下完成注册。\n                                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", {
        staticClass: "form-group m-b-0",
        staticStyle: {
          padding: "0px 10px 0px 10px",
          "border-bottom": "1px solid #a7a7a7"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c(
        "div",
        {
          staticClass: "form-group m-b-0",
          staticStyle: {
            padding: "20px 10px 5px 10px",
            color: "#999999",
            "font-family": "SimHei"
          }
        },
        [_c("span", [_vm._v("快速注册链接")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "form-group m-b-0" }, [
        _c("input", {
          staticClass: "form-control w-100",
          attrs: {
            type: "text",
            value: "",
            readonly: "readonly",
            id: "allow_register_fastreg_input",
            name: "allow_register_fastreg_input"
          }
        })
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
    return _c("div", { staticClass: "col-md-12" }, [
      _c(
        "div",
        {
          staticClass: "form-group m-b-0",
          staticStyle: {
            padding: "10px 10px 0px 0px",
            color: "#a9a9a9",
            "font-family": "SimHei"
          }
        },
        [_vm._v("电话")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "input-group mb-3",
        staticStyle: { padding: "10px 10px 0px 10px" }
      },
      [
        _c("input", {
          staticClass: "form-control",
          attrs: {
            id: "phone",
            name: "phone",
            type: "tel",
            placeholder: "",
            "aria-label": "phone",
            "aria-describedby": "basic-addon1"
          }
        })
      ]
    )
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
      { staticClass: "col-md-12", staticStyle: { "padding-bottom": "15px" } },
      [
        _c("div", { staticClass: "input-group" }, [
          _c("textarea", {
            staticClass: "form-control",
            staticStyle: {
              "background-color": "#fff",
              border: "1px solid #ced4da",
              "min-height": "70px"
            },
            attrs: {
              placeholder: "",
              "aria-label": "useremails",
              id: "useremails",
              "aria-describedby": "basic-addon2"
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
            staticStyle: {
              "background-color": "#fff",
              border: "1px solid #ced4da",
              width: "300px"
            },
            attrs: {
              type: "email",
              placeholder: "",
              "aria-label": "ssmu-email",
              id: "ssmu-email",
              "aria-describedby": "basic-addon2"
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
      { staticClass: "col-md-11", staticStyle: { "padding-left": "62px" } },
      [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: {
              "background-color": "#fff",
              border: "1px solid #ced4da",
              width: "300px"
            },
            attrs: {
              type: "text",
              placeholder: "",
              "aria-label": "ssmu-username",
              id: "ssmu-username",
              "aria-describedby": "basic-addon2"
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
      { staticClass: "col-md-11", staticStyle: { "padding-left": "62px" } },
      [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: {
              "background-color": "#fff",
              border: "1px solid #ced4da",
              width: "300px"
            },
            attrs: {
              type: "text",
              placeholder: "",
              "aria-label": "ssmu-name",
              id: "ssmu-name",
              "aria-describedby": "basic-addon2"
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
      { staticClass: "col-md-11", staticStyle: { "padding-left": "62px" } },
      [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            staticStyle: {
              "background-color": "#fff",
              border: "1px solid #ced4da",
              width: "300px"
            },
            attrs: {
              type: "password",
              autocomplete: "off",
              placeholder: "",
              "aria-label": "ssmu-pwd",
              id: "ssmu-pwd",
              "aria-describedby": "basic-addon2"
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
      { staticClass: "col-md-11", staticStyle: { "padding-left": "62px" } },
      [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("textarea", { attrs: { id: "ssmu-remark" } })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserManagementUsers.vue":
/*!**********************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserManagementUsers.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemSuserManagementUsers_vue_vue_type_template_id_e40ad4ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemSuserManagementUsers.vue?vue&type=template&id=e40ad4ca& */ "./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=template&id=e40ad4ca&");
/* harmony import */ var _SystemSuserManagementUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemSuserManagementUsers.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SystemSuserManagementUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SystemSuserManagementUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemSuserManagementUsers_vue_vue_type_template_id_e40ad4ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SystemSuserManagementUsers_vue_vue_type_template_id_e40ad4ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/system/SystemSuserManagementUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSuserManagementUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=template&id=e40ad4ca&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=template&id=e40ad4ca& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_template_id_e40ad4ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemSuserManagementUsers.vue?vue&type=template&id=e40ad4ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/system/SystemSuserManagementUsers.vue?vue&type=template&id=e40ad4ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_template_id_e40ad4ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSuserManagementUsers_vue_vue_type_template_id_e40ad4ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);