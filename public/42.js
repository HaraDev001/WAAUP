(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var preview = '';
var tabstatus = 0;
var vueOBJ = null;
var transedlang = ''; //default;

var pstart = 1;
var pnum = pstart;
var numg = 5;
var pgtxt_selectlanguage = ""; //tinymce.activeEditor.getContent();

function initPageList() {
  $('#wwgpp_list_nav_cnt').change(function () {
    var val = $(this).val();
    tabstatus = 0;
    pstart = 1;
    getPageList();
  });
}

function initPagetype() {}

function initFunction() {
  $('#wwgpp_f_s_c').text('Current Number : ...');
  $('#wwgpp_f_s').change(function () {
    var val = $(this).val();

    if (val !== null) {
      if (val.split('_').length > 1) {
        var num = val.split('_')[1];
        $('#wwgpp_f_s_c').text('Current Number : ' + num);
      } else $('#wwgpp_f_s_c').text('Current Number : 1');
    }
  });
}

function initPagesetting() {}

function getPageList() {
  if (transedlang === '') return;
  var scont = $.trim($('#wwgpp_list_s_c').val());
  var pcnt = $('#wwgpp_list_nav_cnt').val();
  $.ajax({
    url: 'admin.getPageSettingList',
    data: {
      lang: transedlang,
      cont: scont,
      start: pstart,
      cnt: pcnt
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      var total = data.total;

      if (total <= 0) {
        $('#wwgpp_list_container').html('');
        $('#wwgpp_pagelist_nav').html('');
        $('.page1_alarm_bar').removeClass('active');
        $('.page1_alarm_bar span').text('No Save No Appear');
        return;
      }

      if (data.msg === "ok") {
        var list = data.list;
        pstart = data.start;
        var totalpage = data.totalpage;

        if (list instanceof Array) {
          var tags = '';

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var pagetype = item.name;
            var id = item.id;
            var url = decodeURIComponent(item.url);
            tags += '<tr role="row" class="odd" id="pglistitem_' + id + '">';
            tags += '<td class="th-lp-20">';
            tags += item.title;
            tags += '</td>';
            tags += '<td>' + pagetype + '</td>';
            tags += '<td>' + item.author + '</td>';
            tags += '<td>' + item.created_at + '</td>';
            tags += '<td id="0">' + url + '</td>';
            tags += '<td class="th-rp-20">';
            tags += '<div class="form-group m-b-0">';
            tags += '<select class="my-border-radius-slt form-control float-right" data-id="' + id + '" id="wwgpp_plist_ctrl_' + id + '" name="wwgpp_plist_ctrl_' + id + '">';
            tags += '<option value="">select</option>';
            tags += '<option value="edit">Edit</option>';
            tags += '<option value="del">Delete</option>';
            tags += '</select>';
            tags += '</div>';
            tags += '</td>';
            tags += '</tr>';
          }

          if (transedlang !== null && transedlang !== '') {
            $('.page1_alarm_bar').addClass('active');
            $('.page1_alarm_bar span').text('Save  Appear');
          }

          $('#wwgpp_list_container').html(tags);
          var nav_tag = '';
          nav_tag += '<nav aria-label="..." class="mb-4">';
          nav_tag += '<ul class="pagination pagination-rounded justify-content-center">';
          var disble = "";
          if (pstart == 1) disble = "disabled";
          var prenum = parseInt(pstart) - 1;
          nav_tag += '<li class="page-item  ' + disble + ' ">';
          nav_tag += '<a class="page-link"  href="#"  data-num="sflunavnum_' + prenum + '" >';
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
            nav_tag += '<a class="page-link"  data-num="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
            nav_tag += '</li>';
            if (pnum == totalpage) break;
            pnum = pnum + 1;
          }

          var nextnum = parseInt(pstart) + 1;
          var edisble = "";
          if (pstart == totalpage) edisble = "disabled";
          nav_tag += '<li class="page-item ' + edisble + ' ">';
          nav_tag += '<a class="page-link" data-lang="' + transedlang + '"  data-num="sflunavnum_' + nextnum + '" href="#">';
          nav_tag += '<i class="ti-angle-right"></i>';
          nav_tag += '</a>';
          nav_tag += '</li>';
          nav_tag += '</ul>';
          nav_tag += '</nav>';
          $('#wwgpp_pagelist_nav').html(nav_tag); //console.log(nav_tag);

          $('a[data-num^="sflunavnum_"]').click(function () {
            var oid = $(this).attr("data-num");
            pstart = oid.split('_')[1];
            getPageList();
          });
          $('select[name^="wwgpp_plist_ctrl_"]').change(function () {
            var value = $(this).val();
            if (value == '') return;
            var id = $(this).attr('data-id');
            $.ajax({
              method: "POST",
              url: "admin.changePageSettingitem",
              data: {
                id: id,
                cond: value,
                lang: transedlang
              },
              success: function success(response) {
                if (response.msg === "ok") {
                  if (value === "edit") {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $('.col-md-10.page_slider_content_list').removeClass('active');
                    $('#pagesetting').addClass('active');
                    $('input[name="pgsettranedLang"]').val('');
                    $('input[name="pgseturl"]').val('');
                    $('input[name="pgsetstate"]').val('edit');
                    $('input[name="pgsetid"]').val(id);
                    tabstatus = 3;
                    PageSettingOne(response.pagetype, response.items);
                  } else {
                    $('#pglistitem_' + id).remove();
                  }
                } else {
                  alert('Error get one item from db!');
                }
              },
              error: function error(jqXHR, errdata, errorThrown) {
                console.log(errdata);
              }
            });
          });
        }
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function getPagetype() {
  $.ajax({
    url: 'admin.getPageTypeList',
    data: {
      lang: transedlang
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      $('#pagetype-container').html('');

      if (data.msg == "ok") {
        var list = data.list;

        if (list !== null) {
          if (list instanceof Array) {
            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var name = item.name;
              var id = item.id;
              pageTypeAddEvent(id, name, 0);
            }

            if (transedlang !== null && transedlang !== '') {
              $('.page1_alarm_bar').addClass('active');
              $('.page1_alarm_bar span').text('Save  Appear');
            }
          }
        } else {
          $('.page1_alarm_bar').removeClass('active');
          $('.page1_alarm_bar span').text('No Save No Appear');
        }
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function getFunction() {
  $.ajax({
    url: 'admin.getPageTypeList',
    data: {
      lang: transedlang
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      $('#wwgpp_f_s').html('');

      if (data.msg == "ok") {
        var list = data.list;

        if (list !== null) {
          if (list instanceof Array) {
            var tags = '';

            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var name = item.name;
              var id = item.id;
              var num = item.item_cnt;
              var val = id + '_' + num;
              var seleted = '';

              if (i == 0) {
                seleted = 'selected="selected"';
                $('#wwgpp_f_s_c').text('Current Number : ' + num);
              }

              tags += '<option value="' + val + '" ' + seleted + '>' + name + '</option>';
            }

            $('#wwgpp_f_s').html(tags);

            if (transedlang !== null && transedlang !== '') {
              $('.page1_alarm_bar').addClass('active');
              $('.page1_alarm_bar span').text('Save  Appear');
            }
          }
        } else {
          $('.page1_alarm_bar').removeClass('active');
          $('.page1_alarm_bar span').text('No Save No Appear');
          $('#wwgpp_f_s_c').text('');
        }
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function PageSettingOne(ppagetype, pitem) {
  $('#pagesetting_title').val(pitem.title);
  $('#pagesetting_author').val(pitem.author);
  $('#pagesetting_datapicker').datepicker({
    dateFormat: 'yy/mm/dd'
  });
  var d = new Date();
  var yy = d.getFullYear();
  var mm = d.getMonth() + 1;
  var dd = d.getDate();
  var data_str = pitem.created_at;

  if (pitem.created_at.split(' ').length > 1) {
    data_str = pitem.created_at.split(' ')[0];

    if (data_str.split('-').length > 2) {
      yy = data_str.split('-')[0];
      mm = data_str.split('-')[1];
      dd = data_str.split('-')[2];
    }
  }

  $('#pagesetting_datapicker').val(yy + '/' + mm + '/' + dd);
  var tag = '';

  for (var i = 0; i < ppagetype.length; i++) {
    var oneobj = ppagetype[i];
    var name = oneobj.name;
    var id = oneobj.id;
    var seleted = '';

    if (id === pitem.pagetypeId) {
      seleted = 'selected="selected"';
    }

    tag += '<option value="' + id + '" ' + seleted + '>' + name + '</option>';
  }

  $('#pagesetting_pgtype').html(tag);
  var url = decodeURIComponent(pitem.url);
  $('#pagesetting_url').val(url);
  $('#pagesetting_Priority').val(pitem.priority);
  $('#pagesetting_swhi').val(pitem.shstate);

  if (pitem.content !== undefined && pitem.content !== '') {
    $('.tox.tox-tinymce').css('height', '350px');
    var edt0 = htmldecodejs(pitem.content);
    vueOBJ.TinyMCMcontent0 = edt0;
  }

  $('input[id^="pagesetting_autock"]').click(function () {
    if ($(this).is(':checked')) {
      if (transedlang !== null && transedlang !== null && transedlang.indexOf('en') > -1) {
        var title = $.trim($('#pagesetting_title').val());
        var sel = document.getElementById('pagesetting_pgtype');

        if (sel.options.length > 0) {
          var pgtype = sel.options[sel.selectedIndex].text;
          var url = '';
          if (pgtype !== null && pgtype !== '') url += '/' + pgtype;
          if (title !== null && title !== '') url += '/' + title;
          $('#pagesetting_url').val(url);
        }
      } else {
        $('#pagesetting_url').val('/Service'); //not english
      }
    } else {
      $('#pagesetting_url').val('');
    }
  });
}

function getPagesetting() {
  var d = new Date();
  var yy = d.getFullYear();
  var mm = d.getMonth() + 1;
  var dd = d.getDate();
  $('#pagesetting_datapicker').datepicker({
    dateFormat: 'yy/mm/dd'
  });
  $('#pagesetting_datapicker').val(yy + '/' + mm + '/' + dd);
  $('input[id^="pagesetting_autock"]').click(function () {
    if ($(this).is(':checked')) {
      if (transedlang !== null && transedlang !== '' && transedlang.indexOf('en') > -1) {
        var title = $.trim($('#pagesetting_title').val());
        var sel = document.getElementById('pagesetting_pgtype');

        if (sel.options.length > 0) {
          var pgtype = sel.options[sel.selectedIndex].text;
          var url = '';
          if (pgtype !== null && pgtype !== '') url += '/' + pgtype;
          if (title !== null && title !== '') url += '/' + title;
          $('#pagesetting_url').val(url);
        }
      } else {
        $('#pagesetting_url').val('/Service'); //not english
      }
    } else {
      $('#pagesetting_url').val('');
    }
  });

  if (transedlang === null || transedlang === '') {
    alert(pgtxt_selectlanguage);
    return;
  }

  $.ajax({
    url: 'admin.getPageTypeList',
    data: {
      lang: transedlang
    },
    type: 'POST',
    async: false,
    success: function success(data) {
      $('#pagesetting_pgtype').html('');

      if (data.msg === "ok") {
        var list = data.list;

        if (list !== null) {
          if (list instanceof Array) {
            var tag = '';

            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var name = item.name;
              var id = item.id;
              var seleted = '';

              if (i == 0) {
                seleted = 'selected="selected"';
              }

              tag += '<option value="' + id + '" ' + seleted + '>' + name + '</option>';
            }

            $('#pagesetting_pgtype').html(tag);
          }
        } else {
          alert('page type must do not empty!');
          return;
        }
      } else {
        alert('page type must do not empty!');
        return;
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function pageTypeAddEvent(id, name) {
  var tags = '';
  tags += '<div class="d-flex flex-column" id="item-container-' + id + '" style="width:50%; border: 1px solid #e4e0e0;border-radius: 20px; margin-bottom: 1.2rem">';
  tags += '<div class="d-flex flex-row justify-content-between mainmenu-item-container">';
  tags += '<div id="fpagetypename_' + id + '">' + name + '</div>';
  tags += '<div>';
  tags += '</div>';
  tags += '<div style="cursor: pointer" data-id="' + id + '" id="fmenuarrow_' + id + '">';
  tags += '<i class="fas fa-caret-down" aria-hidden="true"></i>';
  tags += '</div>';
  tags += '</div>';
  tags += '<div class="mainmenu-item-container-sub" id="fmenusubcont_' + id + '">';
  tags += '<div class="d-flex flex-row justify-content-start">';
  tags += '<div class="data-ajax" data-ajax="pgtxt_navigation,pgtxt_label" style="flex-grow: 1;width: 100px">Navigation Label</div>';
  tags += '<div style="flex-grow: 6">';
  tags += '<input class="form-control form-control-sm" type="text" name="cont[]" autocomplete="off" data-cont="" id="fpagetypesub_' + id + '" value="' + name + '">';
  tags += '</div>';
  tags += '</div>';
  tags += '<div class="d-flex flex-row justify-content-end m-t-15">';
  tags += '<div class="btn btn-outline-light  dash-my-btn-0" style="padding: 10px 20px;">';
  tags += '<span class="data-ajax m-l-10" data-ajax="btntxt_save" data-id="' + id + '" id="fmenusa_' + id + '">Save</span>';
  tags += '</div>';
  tags += '<div class="btn btn-outline-light  dash-my-btn-0" style="margin-left:20px;padding: 10px 20px;">';
  tags += '<span class="data-ajax m-l-10" data-ajax="btntxt_remove" data-id="' + id + '" id="fmenurv_' + id + '">Remove</span>';
  tags += '</div>';
  tags += '</div>';
  tags += '</div>';
  tags += '</div>';
  $('#pagetype-container').append(tags);
  $('div[id^="fmenuarrow_' + id + '"]').click(function () {
    var id = $(this).attr('data-id');

    if ($('#fmenusubcont_' + id).hasClass('active')) {
      $(this).removeClass('rotation_9');
      $('#fmenusubcont_' + id).removeClass('active');
    } else {
      $(this).addClass('rotation_9');
      $('#fmenusubcont_' + id).addClass('active');
    }
  });
  $('span[id^="fmenusa_' + id + '"]').click(function () {
    if (transedlang === '') {
      alert(pgtxt_selectlanguage);
      return;
      ;
    }

    var id = $(this).attr('data-id');
    var cont = $.trim($('#fpagetypesub_' + id).val());
    if (cont == '') return;
    $.ajax({
      url: 'admin.changePageType',
      type: 'POST',
      data: {
        lang: transedlang,
        cond: 'sv',
        id: id,
        name: cont
      },
      async: false,
      success: function success(data) {
        if (data.msg == "ok") {
          $('#fpagetypename_' + id).text(cont);
        } else {
          alert('Error Save from DB!');
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  });
  $('span[id^="fmenurv_' + id + '"]').click(function () {
    if (transedlang === '') {
      alert(pgtxt_selectlanguage);
      return;
      ;
    }

    var id = $(this).attr('data-id');
    var cont = $.trim($('#fpagetypesub_' + id).val());
    if (cont == '') return;
    $.ajax({
      url: 'admin.changePageType',
      type: 'POST',
      data: {
        lang: transedlang,
        cond: 'rm',
        id: id,
        name: cont
      },
      async: false,
      success: function success(data) {
        if (data.msg == "ok") {
          $('#item-container-' + id).remove();
          var clen = $("#pagetype-container").children().length;

          if (clen == 0) {
            $('.page1_alarm_bar').removeClass('active');
            $('.page1_alarm_bar span').text('No Save No Appear');
          }
        } else {
          alert('Error Delete from DB!');
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalPagesBasic",
  components: {
    'editor0': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      pageid: 'webs-wesglobal-pages-basic-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_pages: '',
      musususu_webs_wesglobal_pages_basic: '',
      pgtxt_translation: '',
      pgtxt_save: '',
      pgtxt_preview: '',
      pgtxt_release: '',
      pgtxt_nosavenoappear: '',
      pgtxt_description: '',
      pgtxt_list: '',
      pgtxt_pagetype: '',
      pgtxt_function: '',
      pgtxt_title: '',
      pgtxt_theauther: '',
      pgtxt_time: '',
      pgtxt_url: '',
      pgtxt_theeditor: '',
      pgtxt_content: '',
      pgtxt_currentnumber: '',
      pgtxt_number: '',
      pgtxt_fontcontent: '',
      pgtxt_filters: '',
      pgtxt_search: '',
      pgtxt_setupthe: '',
      pgtxt_dbsaved: '',
      pgtxt_selectlanguage: '',
      btntxt_add: '',
      TinyMCMcontent0: '',
      username: '',
      uname: ''
    };
  },
  created: function created() {
    var userinfo = _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.jsonparse(window.Laravel.userinfo);
    this.username = userinfo.username;
    this.uname = userinfo.name;
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

    pgtxt_selectlanguage = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_selectlanguage');
    this.initpage();
    this.getWWGStoredLang();
  },
  computed: {
    cmususu_webs_wesglobal_pages: function cmususu_webs_wesglobal_pages() {
      return this.mususu_webs_wesglobal_pages;
    },
    cmusususu_webs_wesglobal_pages_basic: function cmusususu_webs_wesglobal_pages_basic() {
      return this.musususu_webs_wesglobal_pages_basic;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
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
    cpgtxt_nosavenoappear: function cpgtxt_nosavenoappear() {
      return this.pgtxt_nosavenoappear;
    },
    cpgtxt_description: function cpgtxt_description() {
      return this.pgtxt_description;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_pagetype: function cpgtxt_pagetype() {
      return this.pgtxt_pagetype;
    },
    cpgtxt_function: function cpgtxt_function() {
      return this.pgtxt_function;
    },
    cpgtxt_title: function cpgtxt_title() {
      return this.pgtxt_title;
    },
    cpgtxt_theauther: function cpgtxt_theauther() {
      return this.pgtxt_theauther;
    },
    cpgtxt_time: function cpgtxt_time() {
      return this.pgtxt_time;
    },
    cpgtxt_url: function cpgtxt_url() {
      return this.pgtxt_url;
    },
    cpgtxt_theeditor: function cpgtxt_theeditor() {
      return this.pgtxt_theeditor;
    },
    cpgtxt_content: function cpgtxt_content() {
      return this.pgtxt_content;
    },
    cpgtxt_currentnumber: function cpgtxt_currentnumber() {
      return this.pgtxt_currentnumber;
    },
    cpgtxt_number: function cpgtxt_number() {
      return this.pgtxt_number;
    },
    cpgtxt_fontcontent: function cpgtxt_fontcontent() {
      return this.pgtxt_fontcontent;
    },
    cpgtxt_filters: function cpgtxt_filters() {
      return this.pgtxt_filters;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_search: function cpgtxt_search() {
      return this.pgtxt_search;
    },
    cpgtxt_setupthe: function cpgtxt_setupthe() {
      return this.pgtxt_setupthe;
    },
    cpgtxt_dbsaved: function cpgtxt_dbsaved() {
      return this.pgtxt_dbsaved;
    },
    contentchange: function contentchange() {
      //cckd
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.forEachProp(this.$store.state.sitecontents, this.$data, function (obj, key, value) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = value;
        }
      });
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
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
    getWWGStoredLang: function getWWGStoredLang() {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('admin.getWWGStoredLang').then(function (response) {
        var msg = response.data.msg;

        if (msg == "ok") {
          var stored_langs = response.data.langlist;

          if (stored_langs != '') {
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
                $('.page1_alarm_bar').removeClass('active');
                $('.page1_alarm_bar span').text('No Save No Appear');

                if (tabstatus == 0) {
                  pstart = 1;
                  getPageList();
                } else if (tabstatus == 1) getPagetype();else if (tabstatus == 2) getFunction();else if (tabstatus == 3) {
                  $('#pgsetstate').val('add');
                  $('#pgsetid').val(0);
                  $('#pagesetting_frm')[0].reset();
                  getPagesetting();
                }
              }
            });
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    initpage: function initpage() {
      transedlang = '';
      $('.page1_content_side_bar div.page1_content_side_bar_text').click(function () {
        $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
        $(this).addClass('page1_content_side_bar_seleted');
        var subid = $(this).attr('data-target');
        $('.col-md-12.page_slider_content_list').removeClass('active');
        $('#' + subid).addClass('active');
        $('.page1_alarm_bar').removeClass('active');
        $('.page1_alarm_bar span').text('No Save No Appear');

        if (subid == 'list') {
          tabstatus = 0;
          pstart = 1;
          getPageList();
        } else if (subid == 'pagetype') {
          tabstatus = 1;
          getPagetype();
        } else if (subid == 'function') {
          tabstatus = 2;
          getFunction();
        }
      });
      $('#pageContAdd_btn').click(function () {
        if (transedlang === '') {
          alert(pgtxt_selectlanguage);
          return;
        }

        if (tabstatus === 1) {
          $('#dlgErr').text('').css('display', 'none');
          $('#pagetype_add_name').val('');
          $('#myAddPageTypeModal').modal('show');
        } else {
          $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
          $('.col-md-10.page_slider_content_list').removeClass('active');
          $('#pagesetting').addClass('active');
          $("#pagesetting_frm")[0].reset();
          $('input[name="pgsettranedLang"]').val('');
          $('input[name="pgseturl"]').val('');
          $('input[name="pgsetstate"]').val('add');
          $('input[name="pagesetting_author"]').val(vueOBJ.username);
          tabstatus = 3;
          getPagesetting();
        }
      });
      initPageList();
      initPagetype();
      initFunction();
      initPagesetting();
    },
    editorclick0: function editorclick0() {
      $('.tox.tox-tinymce').css('height', '350px');
    },
    editorblue0: function editorblue0() {
      $('.tox.tox-tinymce').css('height', '150px');
    },
    edit_init_callback0: function edit_init_callback0() {
      $('.tox-statusbar').css('display', 'none');
    },
    upload_handler0: function upload_handler0(blobInfo, success, failure, progress) {
      var xhr, formData;
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'admin.UpdateWWGBarCenterImg');

      xhr.upload.onprogress = function (e) {
        progress(e.loaded / e.total * 100);
      };

      xhr.onload = function () {
        var json;

        if (xhr.status < 200 || xhr.status >= 300) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }

        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != 'string') {
          failure('Invalid JSON: ' + xhr.responseText);
          return;
        } // $('#wwga_footbarleft_upload_preview_temp').val(json.filename);


        success(json.location);
      };

      xhr.onerror = function () {
        failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    },
    SavePageContent: function SavePageContent() {
      if (transedlang === '') {
        alert(pgtxt_selectlanguage);
        return;
      }

      if (tabstatus == 0) //list
        {} else if (tabstatus == 1) //page type
        {//자체로 보관을 진행한다.
        } else if (tabstatus == 2) //function
        {
          var val = $('#wwgpp_f_s').val();
          var cnt = $('#wwgpp_f_s_n').val();
          if (val == null || val == '') return;
          var id = 0;

          if (val.split('_').length > 1) {
            id = val.split('_')[0];
          }

          if (parseInt(id) == 0) return;
          $.ajax({
            url: 'admin.addNumInPageType',
            type: 'POST',
            data: {
              id: id,
              num: cnt,
              lang: transedlang
            },
            async: false,
            success: function success(data) {
              if (data.msg === "ok") {
                $('#wwgpp_f_s_c').text('Current Number : ' + cnt); //$('#wwgpp_f_s').val(id+'_'+cnt);

                var sel = document.getElementById('wwgpp_f_s');
                sel.options[sel.selectedIndex].value = id + '_' + cnt;
                alert('Success Add Number on Content!');
              } else alert('Error Add Number on Content!');
            },
            error: function error(jqXHR, errdata, errorThrown) {
              console.log(errdata);
            }
          });
        } else if (tabstatus == 3) //page setting.
        {
          $('#editcont0').val(this.TinyMCMcontent0);
          $('input[name="pgsettranedLang"]').val(transedlang);
          var surl = $('#pagesetting_url').val();
          surl = $.trim(surl);
          surl = surl.replace(/(\s*)/g, '');
          surl = encodeURIComponent(surl);
          $('input[name="pgseturl"]').val(surl);
          var state = $('input[name="pgsetstate"]').val();
          var formData = new FormData($("#pagesetting_frm")[0]);
          $.ajax({
            url: 'admin.addwwgpp_pagesetting',
            type: 'POST',
            data: formData,
            async: true,
            success: function success(data) {
              // data = JSON.parse(data);
              if (data.msg == "ok") {
                if (state === 'edit') {
                  alert('Success edit!');
                } else {
                  alert('Success add in database!');
                  $("#pagesetting_frm")[0].reset();
                }
              } else {
                alert(data.msg);
              }
            },
            error: function error(jqXHR, errdata, errorThrown) {
              console.log(errdata);
            },
            cache: false,
            contentType: false,
            processData: false
          });
        }
    },
    addPageTypeToOne: function addPageTypeToOne() {
      if (transedlang === '') {
        alert(pgtxt_selectlanguage);
        $("#myAddPageTypeModal").modal('hide');
        return;
      }

      var pgtxt_dbsaved = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
      var cont = $.trim($('#pagetype_add_name').val());
      if (cont == '') return;
      $.ajax({
        url: 'admin.addPageType',
        type: 'POST',
        data: {
          name: cont,
          lang: transedlang
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#dlgErr').text(pgtxt_dbsaved).css({
              'display': 'block',
              'color': '#0BC334'
            });
            setTimeout(function () {
              $("#myAddPageTypeModal").modal('hide');
            }, 1000);
            var name = data.name;
            var id = data.id;
            pageTypeAddEvent(id, name);
            $('.page1_alarm_bar').addClass('active');
            $('.page1_alarm_bar span').text('Save  Appear');
          } else if (data.msg == "du") {
            $('#dlgErr').text('Exist same name in DB!').css({
              'display': 'block',
              'color': '#d41b11'
            });
          } else if (data.msg == "inserterr") {
            $('#dlgErr').text('Error insert in DB!').css({
              'display': 'block',
              'color': '#d41b11'
            });
          } else $('#dlgErr').text(data.msg).css('display', 'block');
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    SetSubSubMenuChange: function SetSubSubMenuChange(selectedMenu, pid) {
      this.$store.dispatch('SetSubMenuChange', selectedMenu + '|' + pid);
    },
    wwgpp_search: function wwgpp_search() {
      var scont = $.trim($('#wwgpp_list_s_c').val());
      if (scont !== null && scont !== '') getPageList();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page1_content_content_bottom svg{\n    color: #6b85e2;\n}\n.page_slider_content_list{\n    display: none;\n}\n.page_slider_content_list.active{\n    display: block;\n}\n.page1_content_side_bar .page1_content_side_bar_text{\n    cursor: pointer;\n    height: auto;\n    float: left;\n}\n.global_page_course_tab{\n    width: 100px;\n}\n#addDlg_btn{\n    height: 40px; border-radius: 20px; padding: 0 30px; margin-right: 15px;\n}\n.input-group-append-my{\n    border-top-right-radius:1.25rem;border-bottom-right-radius:1.25rem;\n}\n.input-group-text-my{\n    background-color: #d6d6d6;border-top-right-radius:1.25rem;border-bottom-right-radius:1.25rem;\n}\n.form-control.page2_input:focus,.form-control.page2_input:hover{\n    background-color:#d6d6d6;\n}\n.table thead th{\n    text-transform:none;\n    font-size: 14px;\n}\n.table thead th.th-lp-20, .table tbody td.th-lp-20{\n    padding-left: 20px;\n}\n.table thead th.th-rp-20, .table tbody td.th-rp-20{\n    padding-right: 20px;\n}\n.mainmenu-item-container{\n    width: 100%;line-height: 30px;padding: 0 20px;-webkit-box-align: baseline;-ms-flex-align: baseline;align-items: baseline;\n}\n.mainmenu-item-container-sub{\n    width: 100%;\n    line-height: 30px;\n    padding:20px;\n    border-top: 1px solid #e4e4e4;\n    display: none\n}\n.mainmenu-item-container-sub.active{\n    width: 100%;\n    line-height: 30px;\n    padding:20px;\n    border-top: 1px solid #e4e4e4;\n    display: block;\n}\n.tox.tox-tinymce{\n    border-radius: 20px;\n    width: 100% !important;\n    height: 150px;\n    min-height: 150px !important;\n}\n.rotation_9{\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n#dlgErr{\n    color: #d41b11;\n    text-align:center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=template&id=3023ef64&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=template&id=3023ef64& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_pages_basic))]),
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
            "\n                             " +
              _vm._s(_vm.cmu_webs) +
              "   >> " +
              _vm._s(_vm.cmusu_webs_wesglobal) +
              "   >>  " +
              _vm._s(_vm.cmususu_webs_wesglobal_pages) +
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_pages_basic) +
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
          _c("div", {
            staticClass: "page1_translate_bar_left",
            attrs: { id: "translanglist" }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "page1_translate_bar_right",
              staticStyle: { display: "flex" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "page1_translate_div",
                  staticStyle: { cursor: "pointer" },
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
                  _vm._v(" "),
                  _c("span", { staticClass: "page1_translate_span_right" }, [
                    _vm._v(_vm._s(_vm.cpgtxt_save))
                  ])
                ]
              ),
              _vm._v("  |   \n                        "),
              _c(
                "div",
                {
                  staticClass: "page1_translate_div",
                  staticStyle: { cursor: "pointer" }
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
                  _vm._v(" "),
                  _c("span", { staticClass: "page1_translate_span_right" }, [
                    _vm._v(_vm._s(_vm.cpgtxt_preview))
                  ])
                ]
              ),
              _vm._v("  |   \n                        "),
              _c(
                "div",
                {
                  staticClass: "page1_translate_div",
                  staticStyle: { cursor: "pointer" }
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
                  _vm._v(" "),
                  _c("span", { staticClass: "page1_translate_span_right" }, [
                    _vm._v(_vm._s(_vm.cpgtxt_release))
                  ])
                ]
              ),
              _vm._v("   \n                    ")
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          {
            staticClass: "page1_alarm_bar",
            staticStyle: { "margin-bottom": "10px" }
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
                      d:
                        "M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z",
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
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "page1_content_side_bar",
        staticStyle: { display: "flex", "margin-bottom": "20px" }
      },
      [
        _c(
          "div",
          {
            staticClass: "global_page_course_tab",
            staticStyle: { width: "60px" }
          },
          [
            _c(
              "div",
              {
                staticClass: "page1_content_side_bar_text",
                attrs: { "data-target": "list" }
              },
              [_vm._v(_vm._s(_vm.cpgtxt_list))]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "global_page_course_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "pagetype" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_description))]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "global_page_course_tab" }, [
          _c(
            "div",
            {
              staticClass: "page1_content_side_bar_text",
              attrs: { "data-target": "function" }
            },
            [_vm._v(_vm._s(_vm.cpgtxt_search))]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" })
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
          id: "webs-wesglobal-pages-basic-fav",
          "data-status": "off",
          "data-page-info": "Page_webs-wesglobal-pages-basic"
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 text-right" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue":
/*!*****************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalPagesBasic_vue_vue_type_template_id_3023ef64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalPagesBasic.vue?vue&type=template&id=3023ef64& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=template&id=3023ef64&");
/* harmony import */ var _WebsWesGlobalPagesBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalPagesBasic.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalPagesBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalPagesBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalPagesBasic_vue_vue_type_template_id_3023ef64___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalPagesBasic_vue_vue_type_template_id_3023ef64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=template&id=3023ef64&":
/*!************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=template&id=3023ef64& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_template_id_3023ef64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalPagesBasic.vue?vue&type=template&id=3023ef64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalPagesBasic.vue?vue&type=template&id=3023ef64&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_template_id_3023ef64___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalPagesBasic_vue_vue_type_template_id_3023ef64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);