(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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



 // import { faChessQueen } from '@fortawesome/free-solid-svg-icons'

var permss;
var mineType = {
  image: 'fas fa-file-image text-primary',
  jpg: 'fas fa-file-image text-danger',
  gif: 'fas fa-file-image text-warning',
  png: 'fas fa-file-image text-primary',
  jpeg: 'fas fa-file-image text-danger',
  audio: 'fas fa-file-audio text-warning',
  mp3: 'fas fa-file-audio text-warning',
  video: 'fas fa-file-movie-o text-warning',
  mp4: 'fas fa-file-movie-o text-warning',
  avi: 'fas fa-file-movie-o text-warning',
  pdf: 'fas fa-file-pdf text-danger',
  doc: 'fas fa-file-word text-primary',
  docx: 'fas fa-file-word text-primary',
  txt: 'fas fa-file-text text-info',
  xls: 'fas fa-file-excel text-success',
  xlsx: 'fas fa-file-excel text-success',
  sheet: 'fas fa-file-excel text-success',
  ppt: 'fas fa-file-powerpoint text-danger',
  pptx: 'fas fa-file-powerpoint text-danger',
  presentation: 'fas fa-file-powerpoint text-danger',
  htm: 'fas fa-file-code text-info',
  html: 'fas fa-file-code text-info',
  gzip: 'fas fa-file-archive text-muted',
  zip: 'fas fa-file-archive text-muted',
  sql: 'fas fa fa-database',
  rar: 'fas fa-file-archive text-muted',
  folder: 'fas fa-folder',
  file: 'fas fa-file'
};
var vueOBJ = null;
var wwgfield = 'upload';
var createtype = ''; //dir or file

var curpath = '/';
var srcpath = '';
var srccmd = '';
var despath = '';
var descmd = '';

function getMineType(fname) {
  var rt = mineType[fname];

  if (rt === undefined || rt === null || rt === "") {
    var ext = fname.split('.').pop(); // console.log(ext);

    if (ext === fname) return mineType["file"];else {
      var fa = mineType[ext];
      if (fa === undefined || fa === null || fa === "") return mineType["file"]; // console.log(fa);

      return fa;
    }
    return mineType["file"];
  } else return rt;
}

function hidenModel() {
  $("#folderModal").modal('hide');
}

function opensubfolder(fname) {
  alert(fname);
}

var is_allchecked = false;

function allChecked(onoff) {
  $('#dir_view').children().each(function (index, element) {
    if (onoff === 'on') {
      $(element).css({
        background: '#e5edf4'
      });
      $(element).attr('data-selected', 'on');
      is_allchecked = true;
    } else if (onoff === 'off') {
      $(element).css({
        background: 'none'
      });
      $(element).attr('data-selected', 'off');
      is_allchecked = false;
    }
  });
}

function isIntoFocus(x, y) {
  var result = false;
  $('#dir_view').children().each(function (index, element) {
    var pos = $(element).offset();
    var oleft = pos.left - 20;
    var otop = pos.top - 20;
    var oright = pos.left + $(element).width() + 20;
    var obotton = pos.top + $(element).height() + 20;

    if (x >= oleft && y >= otop && x <= oright && y <= obotton) {
      $(element).css({
        background: '#e5edf4'
      });
      $(element).attr('data-selected', 'on');
      result = true;
    } else {
      $(element).css({
        background: 'none'
      });
      $(element).attr('data-selected', 'off');
    }
  });
  return result;
}

function treePathMake(path) {
  var pgtxt_media = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_media');
  var pstr = '';

  if (path == '/') {
    pstr = '<span class="cursor-pointer data-ajax" id="p_" data-ajax="pgtxt_media">' + pgtxt_media + '</span>';
    $('#current_path').html(pstr);
  } else {
    var s_path = path.split('/');
    var id = "p";

    for (var pi = 0; pi < s_path.length; pi++) {
      var ct = s_path[pi];

      if (pi == 0 && ct == "") {
        id += "_";
        pstr += '<span class="cursor-pointer data-ajax" id="' + id + '" data-ajax="pgtxt_media">' + pgtxt_media + '</span>';
      } else {
        if (ct == "") {
          id += "_";
          pstr += '<span>/</span>';
        } else {
          id += ct + "_";
          pstr += '<span>/</span><span class="cursor-pointer filepathlist" id="' + id + '">' + ct + '</span>';
        }
      }
    }

    $('#current_path').html(pstr);
  }

  $("span[id^='p_']").click(function (e) {
    e.preventDefault();
    var id = $(this).attr('id');
    id = id.replace(/p_/g, "/");
    id = id.replace(/_/g, "/");
    getDirectories(id);
  });
}

function isUrlFound(url) {
  $('<img src="' + url + '">').load(function () {
    return true;
  }).bind('error', function () {
    return false;
  });
  return false;
}

var selected_file = "";

function getDirectories(p_path) {
  selected_file = "";
  $('.spinner-border.text-info').removeClass('nonactive');
  treePathMake(p_path);
  $.ajax({
    url: 'admin.getHostDirectories',
    data: {
      path: p_path,
      param: 1
    },
    type: 'POST',
    async: true,
    success: function success(data) {
      $('#dir_view').html('');
      var dirlist = data.dirs;
      curpath = p_path;
      var prefix = '';

      if (p_path.indexOf('/') > -1) {
        var s = p_path.split('/');
        var len = s.length;

        for (var j = 1; j < len; j++) {
          prefix += 'f';
        }
      } else prefix = 'f';

      prefix += '_';

      for (var i = 0; i < dirlist.length; i++) {
        var dirname = dirlist[i];

        if (dirname.indexOf('/') > 0) {
          var s_dirname = dirname.split('/');
          dirname = s_dirname[s_dirname.length - 1];
        }

        dirname = dirname.replace(p_path, '');
        var dirnameid = dirname.replace(/(\s*)/g, '');
        if (dirnameid == "[..]") dirnameid = "nonDirectory";
        var tag = '<div class="d-flex flex-column p-20 cursor-pointer dir_folder_item" data-path="' + p_path + '" data-selected="off" id="' + prefix + dirnameid + '">';
        tag += '<span class="folder-icon">';
        tag += '<i class="' + mineType["folder"] + '" style="font-size:48px;color:#f0c243e3"></i>';
        tag += '</span>';
        tag += '<span class="cgobj-name">';
        tag += dirname;
        tag += '</span>';
        tag += '</div>';
        $('#dir_view').append(tag);
        $('#' + prefix + dirnameid).dblclick(function (e) {
          e.preventDefault();
          var path = $(this).attr('data-path');
          var ename = $(this).children('span.cgobj-name').text();
          var selPath = path + ename + '/';

          if (ename == "[..]") {
            var out_path = '';
            var path_arr = selPath.split('/');

            for (var p = 0; p < path_arr.length - 3; p++) {
              out_path += path_arr[p] + '/';
            }

            selPath = out_path;
          }

          getDirectories(selPath);
        });
      }

      var filelist = data.files;
      var thumblist = data.thumb;

      for (var i = 0; i < filelist.length; i++) {
        var filename = filelist[i];
        var thumbs = thumblist[i];
        var fileid = "";

        if (filename.indexOf('/') > 0) {
          var s_filename = filename.split('/');
          filename = s_filename[s_filename.length - 1];
        } //fileid = filename.replace(/./g, '_');
        //fileid = fileid.replace(/(\s*)/g, '');


        fileid = filename.replace(/(\s*)/g, '');
        var filename_split = fileid.split('.');

        for (var s = 0; s < filename_split.length; s++) {
          if (s == 0) fileid = filename_split[s];else fileid += '_' + filename_split[s];
        }

        var ftag = '<div class="d-flex flex-column p-20 cursor-pointer dir_file_item" data-path="' + p_path + '" data-selected="off" id="mediafile-' + prefix + fileid + '">';
        ftag += '<span class="file-icon">'; //if(isUrlFound(thumbs[0]))

        ftag += '<img src="' + thumbs[0] + '">'; //else
        ///    ftag += '<i class="'+getMineType(filename)+'" style="font-size:48px;"></i>';

        ftag += '</span>';
        ftag += '<span class="cgobj-name">';
        ftag += filename;
        ftag += '</span>';
        ftag += '</div>';
        $('#dir_view').append(ftag);
        $('div[id^="mediafile-"]').on('mousedown', function () {
          var pgtxt_media = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_media');
          var path = $('#current_path').text();
          var path_split = path.split('/');
          var filename = $(this).attr('id');
          filename = filename.replace('mediafile-', '');
          filename = filename.replace(prefix, '');
          var exes = filename.split("_");

          for (var e = 0; e < exes.length - 1; e++) {
            if (e == 0) filename = exes[e];else filename += '_' + exes[e];
          }

          if (filename != selected_file) {
            var filepath = '';

            if (path_split.length == 1) {
              var pstr = '<span class="cursor-pointer data-ajax" id="p_" data-ajax="pgtxt_media">' + pgtxt_media + '</span>';
              filepath = pstr + '<span>/</span><span class="cursor-pointer selectedfile">' + filename + '</span>';
            } else {
              path = path.replace(selected_file, '');
              var path_split = path.split('/');
              var pstr = '<span class="cursor-pointer data-ajax" id="p_" data-ajax="pgtxt_media">' + pgtxt_media + '</span>';
              var id = "p_";

              for (var ps = 1; ps < path_split.length - 1; ps++) {
                id += path_split[ps] + '_';
                pstr += '<span>/</span><span class="cursor-pointer filepathlist" id="' + id + '">' + path_split[ps] + '</span>';
              }

              filepath = pstr + '<span>/</span><span class="cursor-pointer selectedfile">' + filename + '</span>';
            }

            $('#current_path').html(filepath);
          }

          selected_file = filename;
        });
      }

      $('.spinner-border.text-info').addClass('nonactive');
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function createFolder(p_path, foldername) {
  $('.spinner-border.text-info').removeClass('nonactive');
  var ret = false;
  $.ajax({
    url: 'admin.makeHostDirectory',
    data: {
      foldername: foldername,
      path: p_path
    },
    type: 'POST',
    async: true,
    success: function success(data) {
      if (data.msg == 'ok') {
        var prefix = '';

        if (p_path.indexOf('/') > -1) {
          var s = p_path.split('/');
          var len = s.length;

          for (var j = 1; j < len; j++) {
            prefix += 'f';
          }
        } else prefix = 'f';

        prefix += '_';
        var folderid = foldername.replace(/(\s*)/g, '');
        var tag = '<div class="d-flex flex-column p-20 cursor-pointer dir_folder_item" data-path="' + p_path + '" data-selected="off" id="' + prefix + folderid + '">';
        tag += '<span class="folder-icon">';
        tag += '<i class="fas fa-folder" style="font-size:48px;color:#f0c243e3"></i>';
        tag += '</span>';
        tag += '<span class="cgobj-name">';
        tag += foldername;
        tag += '</span>';
        tag += '</div>';
        $('#dir_view').append(tag);
        $('#' + prefix + folderid).dblclick(function (e) {
          e.preventDefault();
          var id = $(this).attr('id');
          var path = $(this).attr('data-path');
          var ename = $(this).children('span.cgobj-name').text();
          getDirectories(path + ename + '/');
        });
        $('.spinner-border.text-info').addClass('nonactive');
        ret = true;
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
  return ret;
}
/* no using*/


function createFile(p_path, filename) {
  if (filename.indexOf('.') < 1) {
    alert("file name is no correct");
    return false;
  }

  var prefix = 'f';

  if (p_path.indexOf('/') > -1) {
    var s = p_path.split('/');
    var len = s.length;

    for (var j = 1; j < len; j++) {
      prefix += 'f';
    }
  }

  prefix += '_';
  var fid = filename.replace(/./g, '_');
  var tag = '<div class="d-flex flex-column p-20 cursor-pointer dir_file_item" data-path="' + p_path + '" data-selected="off" id="' + prefix + fid + '">';
  tag += '<span class="file-icon">';
  tag += '<i class="far fa-file" style="font-size:48px;"></i>';
  tag += '</span>';
  tag += '<span class="cgobj-name">';
  tag += filename;
  tag += '</span>';
  tag += '</div>';
  $('#dir_view').append(tag);
  return true;
}

function copyObj(objinfo) {
  if (objinfo != undefined && objinfo != null && objinfo.id != "" && objinfo.name != "" && curpath != "") {
    srccmd = 'copy';
    srcpath = curpath + objinfo.name;
  } else {
    alert("please select file or folder to copy");
  }
}

function cutObj(objinfo) {
  if (objinfo != undefined && objinfo != null && objinfo.id != "" && objinfo.name != "" && curpath != "") {
    srccmd = 'cut';
    srcpath = curpath + objinfo.name;
  } else {
    alert("please select file or folder to cut");
  }
}

function pastObj(objinfo) {
  if (objinfo != undefined && objinfo != null && curpath != "") {
    descmd = 'past';
    if (objinfo.id != "" && objinfo.name != "") despath = curpath + objinfo.name;else despath = curpath; // console.log('srccmd=' + srccmd+'; srcpath=' + srcpath+'; descmd=' + descmd+'; despath=' + despath);

    if (srccmd == "" || srcpath == "") alert("please select file or folder to past");else {
      $('.spinner-border.text-info').removeClass('nonactive');
      $.ajax({
        url: 'admin.changeHostObj',
        data: {
          srccmd: srccmd,
          srcpath: srcpath,
          descmd: descmd,
          despath: despath
        },
        type: 'POST',
        async: true,
        success: function success(data) {
          if (data.msg == "ok") {
            srccmd = "";
            srcpath = "";
            descmd = "";
            despath = "";
            getDirectories(curpath);
          }

          $('.spinner-border.text-info').addClass('nonactive');
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
          $('.spinner-border.text-info').addClass('nonactive');
        }
      });
    }
  } else {
    alert("please select file or folder to past");
  }
}

function getSelectedItemInfo() {
  var name = "";
  var id = "";
  var path = "";
  $('#dir_view').children().each(function (index, element) {
    var spre = $(element).attr('data-selected');

    if (spre == 'on') {
      name = $(element).children('span.cgobj-name').text();
      id = $(element).attr('id');
      path = $(element).attr('data-path'); //console.log(name);
    }
  });
  var result = {
    name: name,
    id: id,
    path: path
  };
  return result;
}

function deletefunc() {
  var objlists = [];
  var delids = [];
  $('#dir_view').children().each(function (index, element) {
    var spre = $(element).attr('data-selected');

    if (spre == 'on') {
      var name = $(element).children('span.cgobj-name').text();
      var id = $(element).attr('id');
      var self_path = $(element).attr('data-path');
      var fpath = self_path + name;
      objlists.push(fpath);
      id = id.replace(/(\s*)/g, '');
      delids.push(id);
    }
  }); // console.log(objlists);

  if (objlists.length > 0) {
    $.ajax({
      url: 'admin.deleteAllHostObj',
      data: {
        objlist: objlists
      },
      type: 'POST',
      async: true,
      success: function success(data) {
        if (data.msg == "ok") {
          //$('#dir_view').html('');
          for (var i = 0; i < delids.length; i++) {
            $('#' + delids[i] + '').remove();
          }

          $('input[id="all_ck"]').prop('checked', false);
        }
      },
      error: function error(jqXHR, errdata, errorThrown) {
        console.log(errdata);
      }
    });
  }
}

function deleteObj(objinfo) {
  /*console.log(objinfo.id);
  console.log(objinfo.name);
  console.log(curpath);*/
  if (!is_allchecked) {
    if (objinfo != undefined && objinfo != null && objinfo.id != "" && objinfo.name != "" && curpath != "") {
      $('.spinner-border.text-info').removeClass('nonactive');
      var fid = objinfo.id;
      if (objinfo.path === "") objinfo.path = curpath;
      $.ajax({
        url: 'admin.deleteHostObj',
        data: {
          fpath: objinfo.path + objinfo.name
        },
        type: 'POST',
        async: true,
        success: function success(data) {
          if (data.msg == "ok") {
            $('#' + fid + '').remove();
          }

          $('.spinner-border.text-info').addClass('nonactive');
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    }
  } else {
    if ($('#all_ck').is(':checked')) {
      var objlists = [];
      $('#dir_view').children().each(function (index, element) {
        var spre = $(element).attr('data-selected');

        if (spre == 'on') {
          var name = $(element).children('span.cgobj-name').text();
          var id = $(element).attr('id');
          var fpath = curpath + name;
          objlists.push(fpath);
        }
      }); // console.log(objlists);

      if (objlists.length > 0) {
        $.ajax({
          url: 'admin.deleteAllHostObj',
          data: {
            objlist: objlists
          },
          type: 'POST',
          async: true,
          success: function success(data) {
            if (data.msg == "ok") {
              $('#dir_view').html('');
              $('input[id="all_ck"]').prop('checked', false);
            }
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          }
        });
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalMedia",
  components: {// 'font-awesome-icon': FontAwesomeIcon
  },
  data: function data() {
    return {
      pageid: 'webs-wesglobal-media-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_media: '',
      pgtxt_upload: '',
      pgtxt_createfolder: '',
      pgtxt_delete: '',
      pgtxt_media: '',
      pgtxt_search: '',
      pgtxt_copy: '',
      pgtxt_paste: '',
      pgtxt_cut: '',
      btntxt_add: '',
      pgtxt_name: '',
      pgtxt_all: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      pgtxt_wantdeleteitem: '',
      btntxt_ok: '',
      btntxt_cancel: ''
    };
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  computed: {
    /*queen () {
        return faChessQueen
    },*/
    cmususu_webs_wesglobal_media: function cmususu_webs_wesglobal_media() {
      return this.mususu_webs_wesglobal_media;
    },
    cmu_webs: function cmu_webs() {
      return this.mu_webs;
    },
    cmusu_webs_wesglobal: function cmusu_webs_wesglobal() {
      return this.musu_webs_wesglobal;
    },
    cpgtxt_upload: function cpgtxt_upload() {
      return this.pgtxt_upload;
    },
    cpgtxt_createfolder: function cpgtxt_createfolder() {
      return this.pgtxt_createfolder;
    },
    cpgtxt_delete: function cpgtxt_delete() {
      return this.pgtxt_delete;
    },
    cpgtxt_media: function cpgtxt_media() {
      return this.pgtxt_media;
    },
    cpgtxt_search: function cpgtxt_search() {
      return this.pgtxt_search;
    },
    cpgtxt_copy: function cpgtxt_copy() {
      return this.pgtxt_copy;
    },
    cpgtxt_paste: function cpgtxt_paste() {
      return this.pgtxt_paste;
    },
    cpgtxt_cut: function cpgtxt_cut() {
      return this.pgtxt_cut;
    },
    cpgtxt_all: function cpgtxt_all() {
      return this.pgtxt_all;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_notpermission: function cpgtxt_notpermission() {
      return this.pgtxt_notpermission;
    },
    cpgtxt_notification: function cpgtxt_notification() {
      return this.pgtxt_notification;
    },
    cpgtxt_wantdeleteitem: function cpgtxt_wantdeleteitem() {
      return this.pgtxt_wantdeleteitem;
    },
    cbtntxt_ok: function cbtntxt_ok() {
      return this.btntxt_ok;
    },
    cbtntxt_cancel: function cbtntxt_cancel() {
      return this.btntxt_cancel;
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
  mounted: function mounted() {
    /* fav part*/
    vueOBJ = this;
    $('#' + this.pageid).click(function () {
      _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.addOnfavList(this, vueOBJ);
    });
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.getSiteFaveritelist(this.pageid, vueOBJ);
    permss = _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.permissionDefinition();
    this.initpage();
  },
  methods: {
    /* fav part */
    getSiteFaveritelist: function getSiteFaveritelist(list) {
      if (list !== null && list !== '') {
        var imgsrc = '/images/icons/star_f.png';
        $('#' + this.pageid + ' img').attr("src", imgsrc);
        $('#' + this.pageid).attr("data-status", "on");
      }
      /* fav part*/

    },
    initpage: function initpage() {
      $(document).on('click', '*', function (e) {
        if (!$(e.target).is($('div.wwgmcontainer *'))) //모든 오브젝트가 이 오브젝트안에 포함되지 않으면 되돌이.
          return true;

        if ($("div#WWGMContextMenu").is(":visible")) {
          if (!$(e.target).is($('div#WWGMContextMenu, div#WWGMContextMenu *'))) {
            $('a#list-delete-list').addClass('s-none');
            $('div#WWGMContextMenu').hide();
            var x = e.pageX;
            var y = e.pageY;
            isIntoFocus(x, y);
          } else {
            /*드롭다운메뉴선택시 commands*/
            if ($(e.target).is($('div#WWGMContextMenu a.list-group-item'))) {
              var txt = $(e.target).text();
              var id = $(e.target).attr('id'); //console.log(txt);

              if (id == 'list-createfolder-list') {
                if (permss.pcreate == 1) {
                  createtype = 'dir';
                  $('input#objModalName').val('');
                  $('#objNameModal').modal('show');
                  $('input#objModalName').focus();
                } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
              } else if (id == 'list-createfile-list') {
                createtype = 'file';
                $('input#objModalName').val('');
                $('#objNameModal').modal('show');
                $('input#objModalName').focus();
              } else if (id == 'list-copy-list') {
                if (permss.pcreate == 1 && permss.pwrite == 1) {
                  copyObj(getSelectedItemInfo());
                } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
              } else if (id == 'list-cut-list') {
                if (permss.pcreate == 1 && permss.pwrite == 1) {
                  cutObj(getSelectedItemInfo());
                } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
              } else if (id == 'list-past-list') {
                if (permss.pcreate == 1 && permss.pwrite == 1) {
                  pastObj(getSelectedItemInfo());
                } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
              } else if (id == 'list-delete-list') {
                /*if (window.confirm("Do you want to delete this item")){
                    deleteObj(getSelectedItemInfo());
                }*/
                if (permss.pdelete == 1) {
                  _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.confirmNormal(deletefunc, 'pgtxt_wantdeleteitem');
                } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
              }

              $('a#list-delete-list').addClass('s-none');
              $('div#WWGMContextMenu').hide();
            }
          }

          $('input[id="all_ck"]').prop('checked', false);
          is_allchecked = false;
        } else {
          var x = e.pageX;
          var y = e.pageY;
          isIntoFocus(x, y);
          $('input[id="all_ck"]').prop('checked', false);
          is_allchecked = false;
        }

        return false;
      });
      $('#objNameModal').on('hidden.bs.modal', function (e) {
        //alert('modal hide');
        createtype = '';
        $('#objModalName').val('');
      });
      $('#upfile').change(function () {
        $('input#uppath').val(curpath);
        var formData = new FormData($("#upfile_frm")[0]);
        $.ajax({
          url: 'admin.wwgMediaUpload',
          type: 'POST',
          data: formData,
          async: false,
          success: function success(data) {
            if (data.msg == "ok") {
              getDirectories(curpath);
            } else alert(data.msg);
          },
          error: function error(jqXHR, errdata, errorThrown) {
            console.log(errdata);
          },
          cache: false,
          contentType: false,
          processData: false
        });
      });
      getDirectories('/');
    },
    RightClickHandler: function RightClickHandler(e) {
      e.preventDefault();
      $('div#WWGMContextMenu a').removeClass('active');
      var x = e.pageX;
      var y = e.pageY;

      if (!is_allchecked) {
        if (isIntoFocus(x, y)) {
          $('a#list-delete-list').removeClass('s-none');
        }
      } else {
        $('a#list-delete-list').removeClass('s-none');
      } //$('input[id="all_ck"]').prop('checked',false);


      $('div#WWGMContextMenu').css({
        top: y + 'px',
        left: x + 'px',
        position: 'absolute'
      });
      $('div#WWGMContextMenu').show();
    },
    setObjNameAddClick: function setObjNameAddClick() {
      var objname = $.trim($('#objModalName').val());

      if (objname.length > 0) {
        var ret = this.haveSameNameCheck(objname);

        if (ret.msg === 'ok') {
          var rt = true;

          if (createtype == 'dir') {
            rt = createFolder(curpath, objname);
          } else if (createtype == 'file') {
            rt = createFile(curpath, objname);
          } // if(rt)


          {
            $('#objNameModal').modal('hide');
            createtype = '';
          }
        } else {
          alert('name is exist already\n');
        }
      }
    },
    haveSameNameCheck: function haveSameNameCheck(pname) {
      // var childrens = $('#dir_view');
      var rname = {
        name: pname,
        msg: 'ok'
      };
      $('#dir_view').children().each(function (index, element) {
        // console.log(index);     // children's index
        var ename = $(element).children('span.cgobj-name').text(); //console.log(ename);

        if (pname === ename) {
          rname.msg = 'same';
        }
      });
      return rname;
    },
    allObjDelete: function allObjDelete() {
      /*if($('#all_ck').is(':checked'))
      {
          if (window.confirm("Do you want to delete all items"))
          {
              var objlists=[];
              $('#dir_view').children().each( (index, element) => {
                  var spre = $(element).attr('data-selected');
                  if(spre=='on'){
                     var name = $(element).children('span.cgobj-name').text();
                     var id =   $(element).attr('id');
                     var fpath=curpath + name;
                      objlists.push(fpath);
                  }
              });
             // console.log(objlists);
               if(objlists.length > 0)
              {
                  $.ajax({
                      url: 'admin.deleteAllHostObj',
                      data:{
                          objlist:objlists
                      },
                      type: 'POST',
                      async: true,
                      success: function (data) {
                          if(data.msg=="ok"){
                              $('#dir_view').html('');
                              $('input[id="all_ck"]').prop('checked', false);
                          }
                      },
                      error: function (jqXHR, errdata, errorThrown) {
                          console.log(errdata);
                      }
                  });
               }
          }
      }*/
      if (permss.pdelete == 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.confirmNormal(deletefunc, 'pgtxt_wantdeleteitem');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    },
    allCheckBox: function allCheckBox() {
      if ($('#all_ck').is(':checked')) {
        var clen = $('#dir_view').children().length;

        if (clen < 1) {
          $('input[id="all_ck"]').prop('checked', false);
          is_allchecked = false;
        } else allChecked('on');
      } else allChecked('off');
    },
    fileUpload: function fileUpload() {
      if (permss.pcreate == 1) {
        $('#upfile').trigger('click');
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    },
    fdirSearch: function fdirSearch() {
      if (permss.pread == 0) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      var cont = $('#search-cont').val();
      cont = $.trim(cont);
      if (cont === "") return;
      $('.spinner-border.text-info').removeClass('nonactive');
      $.ajax({
        url: 'admin.searchAllHostObj',
        data: {
          path: curpath,
          scont: cont,
          param: 1
        },
        type: 'POST',
        async: true,
        success: function success(data) {
          if (data.msg === "ok") {
            //console.log(data.dirs);
            //console.log(data.files);
            $('#dir_view').html('');
            var dirlist = data.dirs;

            for (var i = 0; i < dirlist.length; i++) {
              var dirnameArr = dirlist[i];
              var dpath = dirnameArr.split("&&")[0];
              var dirname = dirnameArr.split("&&")[1];
              var dirnameid = "";

              if (dirnameArr == "[..]") {
                dirnameid = "nonDirectory";
                dirname = dirnameArr;
              } else {
                dirnameid = dirname.replace(/(\s*)/g, '');
              }

              var prefix = '';

              if (dpath.indexOf('/') > -1) {
                var s = dpath.split('/');
                var len = s.length;

                for (var j = 1; j < len; j++) {
                  prefix += 'f';
                }
              } else prefix = 'f';

              prefix += '_';
              var tag = '<div class="d-flex flex-column p-20 cursor-pointer dir_folder_item" data-path="' + dpath + '/" data-selected="off" id="' + prefix + dirnameid + '">';
              tag += '<span class="folder-icon">';
              tag += '<i class="' + mineType["folder"] + '" style="font-size:48px;color:#f0c243e3"></i>';
              tag += '</span>';
              tag += '<span class="cgobj-name">';
              tag += dirname;
              tag += '</span>';
              tag += '</div>';
              $('#dir_view').append(tag);
              $('#' + prefix + dirnameid).dblclick(function (e) {
                e.preventDefault();
                var path = $(this).attr('data-path');
                var ename = $(this).children('span.cgobj-name').text();
                var selPath = path + ename + '/';
                if (ename == "[..]") selPath = "/";
                selPath = selPath.replace("./", "");
                getDirectories(selPath);
              });
            }

            var filelist = data.files;
            var thumblist = data.thumb;

            for (var i = 0; i < filelist.length; i++) {
              var filenameArr = filelist[i];
              var thumbs = thumblist[i];
              var dpath = filenameArr.split("&&")[0];
              var filename = filenameArr.split("&&")[1];
              var prefix = '';

              if (dpath.indexOf('/') > -1) {
                var s = dpath.split('/');
                var len = s.length;

                for (var j = 1; j < len; j++) {
                  prefix += 'f';
                }
              } else prefix = 'f';

              prefix += '_';
              var fileid = "";
              fileid = filename.replace(/./g, "_");
              fileid = fileid.replace(/(\s*)/g, '');
              var ftag = '<div class="d-flex flex-column p-20 cursor-pointer dir_file_item" data-path="' + dpath + '/" data-selected="off" id="' + prefix + fileid + '">';
              ftag += '<span class="file-icon">'; //if(isUrlFound(thumbs[0]))

              ftag += '<img src="' + thumbs[0] + '">'; //else
              //    ftag += '<i class="'+getMineType(filename)+'" style="font-size:48px;"></i>';

              ftag += '</span>';
              ftag += '<span class="cgobj-name">';
              ftag += filename;
              ftag += '</span>';
              ftag += '</div>';
              $('#dir_view').append(ftag);
            }

            $('.spinner-border.text-info').addClass('nonactive');
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
    },
    createFolderByBtn: function createFolderByBtn() {
      if (permss.pcreate == 1) {
        createtype = 'dir';
        $('input#objModalName').val('');
        $('#objNameModal').modal('show');
        $('input#objModalName').focus();
      } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dir_folder_item, .dir_file_item{\n    width:-webkit-fit-content;\n    width:-moz-fit-content;\n    width:fit-content;\n    margin: 2px;\n    background: none;\n}\n.dir_folder_item:hover, .dir_file_item:hover{\n    background: #e5edf4;\n}\n#card-body-div{\n    min-height: 450px;\n}\n.list-group-item.list-group-item-action.s-none{\n    display: none;\n}\n#current_path{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n#current_path span{\n    padding: 2px 4px;\n}\n#current_path span.cursor-pointer:hover{\n    color: #1d91e8;\n}\n.spinner-border.text-info{\n    position: absolute;\n    top: 6rem;\n    left: 21rem;\n    z-index: 20;\n    width: 4rem;\n    height: 4rem;\n\n    display: inline-block;\n    vertical-align: text-bottom;\n    border: 0.7em solid currentColor;\n    border-right-color: transparent;\n    border-radius: 50%;\n    -webkit-animation: spinner-border .75s linear infinite;\n    animation: spinner-border .75s linear infinite;\n    color: #5c6bc0 !important;\n}\n.spinner-border.text-info.nonactive{\n    display: none;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=template&id=0f803110&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=template&id=0f803110& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.cmususu_webs_wesglobal_media))]),
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
              _vm._s(_vm.cmususu_webs_wesglobal_media) +
              "\n                      "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card", staticStyle: { padding: "20px" } }, [
      _c("div", { staticClass: "row", staticStyle: { "margin-top": "10px" } }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "div",
            {
              staticClass: "card border-0 m-b-0",
              attrs: { id: "current_path" }
            },
            [
              _c(
                "span",
                { staticClass: "cursor-pointer", attrs: { "data-path": "/" } },
                [_vm._v(_vm._s(_vm.cpgtxt_media))]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row", staticStyle: { "margin-top": "10px" } }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card border-0 m-b-0" }, [
            _c(
              "div",
              {
                staticClass: "input-group m-1",
                staticStyle: {
                  width: "35%",
                  "min-width": "300px",
                  "border-radius": "20px 0px 0px 20px"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "input-group-prepend",
                    staticStyle: { "border-radius": "20px 0px 0px 20px" }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "input-group-text",
                        staticStyle: {
                          "border-radius": "20px 0 0 20px",
                          "background-color": "#ededed"
                        }
                      },
                      [_vm._v(_vm._s(_vm.cpgtxt_search))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  staticStyle: { height: "calc(1.5em + .75rem + 6px)" },
                  attrs: {
                    type: "text",
                    id: "search-cont",
                    name: "search-cont"
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group-append",
                    staticStyle: { "border-radius": "0px 20px 20px 0px" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.fdirSearch($event)
                      }
                    }
                  },
                  [_vm._m(1)]
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row", staticStyle: { "text-align": "right" } }, [
      _c("div", { staticClass: "col-md-12" }, [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "btn btn-outline-light  dash-my-btn-0 active p-l-r-20 m-r-20",
            attrs: { id: "media-upload-btn" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.fileUpload($event)
              }
            }
          },
          [
            _c("span", [
              _c("i", { staticClass: "fas fa-upload" }),
              _vm._v(" " + _vm._s(_vm.cpgtxt_upload))
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "btn btn-outline-light  dash-my-btn-0 active p-l-r-20  m-r-20",
            attrs: { id: "media-createdir-btn" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.createFolderByBtn($event)
              }
            }
          },
          [
            _c("span", [
              _c("i", { staticClass: "far fa-plus-square" }),
              _vm._v(" " + _vm._s(_vm.cpgtxt_createfolder))
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "btn btn-outline-light  dash-my-btn-0 active p-l-r-20",
            attrs: { id: "media-delete-btn" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.allObjDelete($event)
              }
            }
          },
          [
            _c("span", [
              _c("i", { staticClass: "far fa-file-code" }),
              _vm._v(" " + _vm._s(_vm.cpgtxt_delete))
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "wwgmcontainer" }, [
      _c(
        "div",
        {
          staticClass: "sl-tab-container active",
          staticStyle: { "margin-top": "10px", position: "relative" },
          attrs: { id: "FootMenuContainer" }
        },
        [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    attrs: { id: "card-body-div" },
                    on: {
                      contextmenu: function($event) {
                        return _vm.RightClickHandler($event)
                      }
                    }
                  },
                  [
                    _c("h6", { staticClass: "card-title m-b-20" }, [
                      _c("label", { staticClass: "checkbox-inline" }, [
                        _c("input", {
                          staticStyle: { width: "16px", height: "16px" },
                          attrs: {
                            type: "checkbox",
                            value: "",
                            name: "all_ck",
                            id: "all_ck"
                          },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.allCheckBox($event)
                            }
                          }
                        }),
                        _vm._v(
                          " " +
                            _vm._s(_vm.cpgtxt_all) +
                            "\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "d-flex justify-content-start flex-wrap text-center",
                      attrs: { id: "dir_view" }
                    })
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "row",
          staticStyle: {
            display: "none",
            width: "180px",
            "max-width": "180px"
          },
          attrs: { id: "WWGMContextMenu" }
        },
        [
          _c("div", { staticClass: "col-12" }, [
            _c(
              "div",
              {
                staticClass: "list-group",
                staticStyle: { background: "white" },
                attrs: { id: "list-tab", role: "tablist" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "list-group-item list-group-item-action",
                    attrs: {
                      id: "list-createfolder-list",
                      "data-toggle": "list",
                      href: "#list-Createfolder",
                      role: "tab",
                      "aria-controls": "Createfolder"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_createfolder))]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "list-group-item list-group-item-action",
                    attrs: {
                      id: "list-copy-list",
                      "data-toggle": "list",
                      href: "#list-Copy",
                      role: "tab",
                      "aria-controls": "Copy"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_copy))]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "list-group-item list-group-item-action",
                    attrs: {
                      id: "list-past-list",
                      "data-toggle": "list",
                      href: "#list-Past",
                      role: "tab",
                      "aria-controls": "Past"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_paste))]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "list-group-item list-group-item-action",
                    attrs: {
                      id: "list-cut-list",
                      "data-toggle": "list",
                      href: "#list-Cut",
                      role: "tab",
                      "aria-controls": "Cut"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_cut))]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "list-group-item list-group-item-action s-none",
                    attrs: {
                      id: "list-delete-list",
                      "data-toggle": "list",
                      href: "#list-Delete",
                      role: "tab",
                      "aria-controls": "Delete"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_delete))]
                )
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "folderModal" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered modal-sm",
          staticStyle: { "min-width": "450px!important" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-body",
                staticStyle: { padding: "0 1.5rem 1.5rem 1.5rem" },
                attrs: { id: "folderModalbody" }
              },
              [
                _c("div", { staticClass: "panel", attrs: { id: "tab1" } }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12 text-center" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                          attrs: { id: "wwgm-model-add" }
                        },
                        [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
                      )
                    ])
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "objNameModal" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered modal-sm",
          staticStyle: { "min-width": "450px!important" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v(_vm._s(_vm.cpgtxt_name))
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticStyle: {
                    display: "none",
                    padding: "5px 10px",
                    "border-radius": "20px"
                  },
                  attrs: { id: "name_alert" }
                },
                [_vm._v(_vm._s(_vm.cpgtxt_name))]
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
                attrs: { id: "objNameModalbody" }
              },
              [
                _c("div", { staticClass: "panel", attrs: { id: "tabname" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "row",
                      staticStyle: { "padding-bottom": "10px" }
                    },
                    [
                      _vm._m(6),
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
                                    [_vm._v(_vm._s(_vm.cpgtxt_name))]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(7)
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
                          attrs: { id: "objname-model-add" },
                          on: { click: _vm.setObjNameAddClick }
                        },
                        [_c("span", [_vm._v("+ " + _vm._s(_vm.cbtntxt_add))])]
                      )
                    ])
                  ])
                ])
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
          id: "webs-wesglobal-media-fav",
          "data-status": "off",
          "data-page-info": "Media_webs-wesglobal-media"
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
      "span",
      {
        staticClass: "input-group-text",
        staticStyle: {
          "border-radius": "0px 20px 20px 0px",
          "background-color": "#ededed"
        }
      },
      [
        _c("button", { staticClass: "btn", staticStyle: { padding: "5px" } }, [
          _c("i", { staticClass: "ti-search" })
        ])
      ]
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
          method: "post",
          enctype: "multipart/form-data",
          name: "upfile_frm",
          id: "upfile_frm"
        }
      },
      [
        _c("div", { staticStyle: { display: "none" } }, [
          _c("input", {
            attrs: { type: "hidden", name: "uppath", id: "uppath", value: "" }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: {
              type: "file",
              name: "upfiles[]",
              id: "upfile",
              multiple: ""
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
      {
        staticClass: "spinner-border text-info nonactive",
        attrs: { role: "status" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("create menu")]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticStyle: {
            display: "none",
            padding: "5px 10px",
            "border-radius": "20px"
          },
          attrs: { id: "sfi_alert" }
        },
        [_vm._v("Create Menu area.")]
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "row", staticStyle: { "padding-bottom": "10px" } },
      [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", {
            staticClass: "form-group m-b-0",
            staticStyle: { padding: "1px 0px 0px 0px", "font-family": "SimHei" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticStyle: { margin: "10px 10px 0px 10px" } }, [
          _c("div", { staticClass: "row", staticStyle: { padding: "10px" } }, [
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
                  [_vm._v("font content")]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-11",
                staticStyle: { "padding-left": "62px" }
              },
              [
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("input", {
                    staticClass: "form-control",
                    staticStyle: { width: "300px" },
                    attrs: {
                      type: "text",
                      name: "cont[]",
                      placeholder: "",
                      "aria-label": "wwgm-menucont",
                      id: "wwgm-menucont",
                      "aria-describedby": "basic-addon2"
                    }
                  })
                ])
              ]
            ),
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
                  [_vm._v("link")]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-11",
                staticStyle: { "padding-left": "62px" }
              },
              [
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("input", {
                    staticClass: "form-control",
                    staticStyle: { width: "300px" },
                    attrs: {
                      type: "text",
                      name: "link[]",
                      placeholder: "",
                      "aria-label": "wwgm-menulink",
                      id: "wwgm-menulink",
                      "aria-describedby": "basic-addon2"
                    }
                  })
                ])
              ]
            )
          ])
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
            staticStyle: { width: "300px" },
            attrs: {
              type: "text",
              name: "objModalName",
              placeholder: "",
              "aria-label": "wwgm-menucont",
              id: "objModalName",
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

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue":
/*!************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalMedia_vue_vue_type_template_id_0f803110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalMedia.vue?vue&type=template&id=0f803110& */ "./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=template&id=0f803110&");
/* harmony import */ var _WebsWesGlobalMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalMedia.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalMedia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalMedia_vue_vue_type_template_id_0f803110___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalMedia_vue_vue_type_template_id_0f803110___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalMedia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMedia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=template&id=0f803110&":
/*!*******************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=template&id=0f803110& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_template_id_0f803110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMedia.vue?vue&type=template&id=0f803110& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMedia.vue?vue&type=template&id=0f803110&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_template_id_0f803110___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMedia_vue_vue_type_template_id_0f803110___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);