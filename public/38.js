(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_jsfunc_lang_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/jsfunc/lang_module */ "./resources/vuedir/assets/jsfunc/lang_module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jsfunc/mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
/* harmony import */ var _assets_jsfunc_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jsfunc/nav_module */ "./resources/vuedir/assets/jsfunc/nav_module.js");
/* harmony import */ var _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/jsfunc/media_module */ "./resources/vuedir/assets/jsfunc/media_module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var vueOBJ = null;
var wwgfield = 'upload';
var createtype = ''; //dir or file

var curpath = '/';
var srcpath = '';
var srccmd = '';
var despath = '';
var descmd = '';
var permss = {};
var mineType = {};
var dirinfo = {
  name: '',
  id: '',
  path: '',
  type: '',
  poptype: ''
};

function InitDirObj() {
  dirinfo.name = '';
  dirinfo.id = '';
  dirinfo.path = '';
  dirinfo.type = '';
  dirinfo.poptype = '';
}

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

function opensubfolder(fname) {
  _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert(fname);
}

function showClickHandler(e) {
  e.preventDefault();
  e.stopPropagation(); //e.stopImmediatePropagation();

  InitDirObj();
  $('div#WWGMContextMenu a').removeClass('active').removeClass('s-none');
  $('div#WWGMContextMenu a').removeClass('t-redius');
  $('div#WWGMContextMenu a').removeClass('b-redius');
  $('div#WWGMContextMenu a#list-createfolder-list, div#WWGMContextMenu a#list-paste-list').addClass('s-none');
  var contextID = $(e.target).data('info');
  var name = $('#' + contextID + ' span.cgobj-name').text();
  var path = $('#' + contextID).data('path');
  dirinfo.name = name;
  dirinfo.id = contextID;
  dirinfo.path = path;
  dirinfo.type = 'dir';
  dirinfo.poptype = 'left';
  var x = e.pageX;
  var y = e.pageY;
  $('div#WWGMContextMenu').css({
    top: y + 'px',
    left: x + 'px',
    position: 'absolute'
  });
  $('div#WWGMContextMenu').show();
}

function isUrlFound(url) {
  $('<img src="' + url + '">').load(function () {
    return true;
  }).bind('error', function () {
    return false;
  });
  return false;
}

function getDirectories(p_path) {
  $('.spinner-border.text-info').removeClass('nonactive'); // treePathMake(p_path);

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

      if (p_path.split('/').length > 0) {
        var s = p_path.split('/');
        var len = s.length;

        for (var j = 1; j < len; j++) {
          prefix += 'f';
        }
      } else prefix = 'f';

      prefix += '_';

      for (var i = 0; i < dirlist.length; i++) {
        var dirname = dirlist[i];

        if (dirname.split('/').length > 1) {
          var s_dirname = dirname.split('/');
          dirname = s_dirname[s_dirname.length - 1];
        }

        dirname = dirname.replace(p_path, '');
        var dirnameid = dirname.replace(/(\s*)/g, '');
        var tag = '';

        if (dirnameid == "[..]") {
          dirnameid = "nonDirectory";
          tag = '<div class="d-flex flex-wrap cursor-pointer dir_folder_item  media_dir_boder" data-path="' + p_path + '" id="' + prefix + dirnameid + '" >';
          tag += '<div class="col-12 media_dir_detail"></div>';
          tag += '<div class="col-12 media_dir_icon"><img src="/images/up-arrow.png" style="max-width:63px;max-height:54px;opacity:0.5"></div>';
          tag += '<div class="col-12 media_dir_name" style="border:0;display:none;"><span class="cgobj-name">' + dirname + '</span></div>';
          tag += '</div>';
        } else {
          tag = '<div class="d-flex flex-wrap cursor-pointer dir_folder_item media_dir_boder" data-path="' + p_path + '" data-selected="off" id="' + prefix + dirnameid + '" >';
          tag += '<div class="col-12 media_dir_detail"><div class="media_dir_detail_btn" data-info="' + prefix + dirnameid + '">···</div></div>';
          tag += '<div class="col-12 media_dir_icon"><i class="' + mineType["folder"] + '" style="font-size:40px;color:#f0c243e3"></i></div>';
          tag += '<div class="col-12 media_dir_name"><span class="cgobj-name">' + dirname + '</span></div>';
          tag += '</div>';
        }

        $('#dir_view').append(tag);
        $('#' + prefix + dirnameid).dblclick(function (e) {
          e.preventDefault();
          e.stopPropagation();
          var path = $(this).data('path');
          var ename = $(this).find('span.cgobj-name').text(); //console.log(ename);

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

      $('.media_dir_detail_btn').click(function (e) {
        $('.dir_folder_item').attr('data-selected', 'off');
        showClickHandler(e);
      });
      var filelist = data.files;
      var thumblist = data.thumb;

      for (var i = 0; i < filelist.length; i++) {
        var filename = filelist[i];
        var thumbs = thumblist[i];
        var fileid = "";

        if (filename.split('/').length > 1) {
          var s_filename = filename.split('/');
          filename = s_filename[s_filename.length - 1];
        } //fileid = filename.replace(/./g,"_");
        //fileid = fileid.replace(/(\s*)/g, '');


        fileid = filename.replace(/(\s*)/g, '');
        var filename_split = fileid.split('.');

        for (var s = 0; s < filename_split.length; s++) {
          if (s == 0) fileid = filename_split[s];else fileid += '_' + filename_split[s];
        }

        var ftag = '<div class="d-flex flex-wrap flex-column p-20 cursor-pointer dir_file_item" data-path="' + p_path + '" data-selected="off" id="' + prefix + fileid + '">';
        ftag += '<span class="file-icon">'; //if(isUrlFound(thumbs[0]))

        ftag += '<img src="' + thumbs[0] + '" style="max-width:63px;max-height:54px;">'; //else
        ///    ftag += '<i class="'+getMineType(filename)+'" style="font-size:48px;"></i>';

        ftag += '</span>';
        ftag += '<span class="cgobj-name" style="margin-top: 10px;">';
        ftag += filename;
        ftag += '</span>';
        ftag += '</div>';
        $('#dir_view').append(ftag);
      }
      /* $('#'+prefix+fileid).dblclick(function (e) {
           e.preventDefault();
           e.stopPropagation();
           var path = $(this).data('path');
           var ename = $(this).find('span.cgobj-name').text();
           console.log(ename);
       });*/


      $('.spinner-border.text-info').addClass('nonactive');
    },
    error: function error(jqXHR, errdata, errorThrown) {
      console.log(errdata);
    }
  });
}

function renameFolder(p_path, newname) {
  $('.spinner-border.text-info').removeClass('nonactive');
  var ret = false;

  if (dirinfo.name === '') {
    dirinfo.id = '';
    dirinfo.path = '';
    return;
  }

  $.ajax({
    url: 'admin.renameHostDirectory',
    data: {
      orgname: dirinfo.name,
      newname: newname,
      path: p_path
    },
    type: 'POST',
    async: true,
    success: function success(data) {
      if (data.msg == 'ok') {
        var newid = dirinfo.id;
        $('#' + newid).find('span.cgobj-name').text(newname);
        if (newid.split('_').length > 1) newid = newid.split('_')[0] + '_' + newname;
        $('#' + dirinfo.id).find('div.media_dir_detail_btn').attr('data-info', newid);
        $('#' + dirinfo.id).attr('id', newid);
        InitDirObj();
        ret = true;
        $('.spinner-border.text-info').addClass('nonactive');
      }
    },
    error: function error(jqXHR, errdata, errorThrown) {
      $('.spinner-border.text-info').addClass('nonactive');
      console.log(errdata);
    }
  });
  return ret;
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

        if (p_path.split('/').length > 0) {
          var s = p_path.split('/');
          var len = s.length;

          for (var j = 1; j < len; j++) {
            prefix += 'f';
          }
        } else prefix = 'f';

        prefix += '_';
        var folderid = foldername.replace(/(\s*)/g, '');
        var tag = '<div class="d-flex flex-wrap cursor-pointer dir_folder_item media_dir_boder" data-path="' + p_path + '" data-selected="off" id="' + prefix + folderid + '" >';
        tag += '<div class="col-12 media_dir_detail"><div class="media_dir_detail_btn" data-info="' + prefix + folderid + '">···</div></div>';
        tag += '<div class="col-12 media_dir_icon"><i class="' + mineType["folder"] + '" style="font-size:40px;color:#f0c243e3"></i></div>';
        tag += '<div class="col-12 media_dir_name"><span class="cgobj-name">' + foldername + '</span></div>';
        tag += '</div>';
        $('#dir_view').append(tag);
        $('#' + prefix + folderid).dblclick(function (e) {
          e.preventDefault();
          e.stopPropagation();
          var id = $(this).attr('id');
          var path = $(this).data('path');
          var ename = $(this).find('span.cgobj-name').text();
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
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert("pgtxt_filenamenocorrect");
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
  if (objinfo !== undefined && objinfo !== null && objinfo.id !== '' && objinfo.name !== '' && curpath !== '') {
    srccmd = 'copy';
    srcpath = curpath + objinfo.name;
  } else {
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert("pgtxt_selectfileorfoldercopy");
  }
}

function cutObj(objinfo) {
  if (objinfo !== undefined && objinfo !== null && objinfo.id !== "" && objinfo.name !== "" && curpath !== "") {
    srccmd = 'cut';
    srcpath = curpath + objinfo.name;
  } else {
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert("pgtxt_selectfileorfoldercut");
  }
}

function pasteObj(objinfo) {
  if (objinfo !== undefined && objinfo !== null && curpath !== "") {
    descmd = 'past';
    if (objinfo.id !== "" && objinfo.name !== "") despath = curpath + objinfo.name;else despath = curpath;
    if (srccmd == "" || srcpath == "") _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert("pgtxt_selectfileorfolderpaste");else {
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
    _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert("pgtxt_selectfileorfolderpaste");
  }
}

function deleteObj(objinfo) {
  if (objinfo !== undefined && objinfo !== null && objinfo.id !== "" && objinfo.name !== "" && curpath !== "") {
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
}

function isshowButtonArea(e) {
  if ($(e.target).is($('div.media_dir_detail_btn'))) return true;
  return false;
}

function isIntoFocus(x, y) {
  var result = {
    name: '',
    id: 0,
    path: '',
    type: ''
  };
  $('#dir_view').children().each(function (index, element) {
    var pos = $(element).offset();
    var oleft = pos.left - 10;
    var otop = pos.top - 10;
    var oright = pos.left + $(element).width() + 10;
    var obotton = pos.top + $(element).height() + 10;

    if (x >= oleft && y >= otop && x <= oright && y <= obotton) {
      var name = $(element).find('span.cgobj-name').text();
      result.id = $(element).attr('id');
      result.path = $(element).data('path');
      result.name = name;
      if ($(element).hasClass('dir_folder_item')) result.type = 'dir';else result.type = 'file';
    }
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WebsWesGlobalMediaImage",
  components: {// 'font-awesome-icon': FontAwesomeIcon
  },
  data: function data() {
    return {
      pageid: 'webs-wesglobal-media-image-fav',
      mu_webs: '',
      musu_webs_wesglobal: '',
      mususu_webs_wesglobal_media: '',
      musususu_webs_wesglobal_media_image: '',
      pgtxt_upload: '',
      pgtxt_createfolder: '',
      pgtxt_download: '',
      pgtxt_rename: '',
      pgtxt_delete: '',
      pgtxt_media: '',
      pgtxt_search: '',
      pgtxt_copy: '',
      pgtxt_paste: '',
      pgtxt_cut: '',
      btntxt_add: '',
      btntxt_addfolder: '',
      pgtxt_name: '',
      pgtxt_viewdetails: '',
      btntxt_change: '',
      btntxt_ok: '',
      btntxt_cancel: '',
      pgtxt_wantdeleteitem: '',
      pgtxt_notpermission: '',
      pgtxt_notification: '',
      pgtxt_list: '',
      pgtxt_selectfileorfolderpaste: '',
      pgtxt_selectfileorfoldercopy: '',
      pgtxt_selectfileorfoldercut: '',
      pgtxt_filenamenocorrect: '',
      pgtxt_alreadyexistname: ''
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
    cmusususu_webs_wesglobal_media_image: function cmusususu_webs_wesglobal_media_image() {
      return this.musususu_webs_wesglobal_media_image;
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
    cpgtxt_download: function cpgtxt_download() {
      return this.pgtxt_download;
    },
    cpgtxt_rename: function cpgtxt_rename() {
      return this.pgtxt_rename;
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
    cbtntxt_change: function cbtntxt_change() {
      return this.btntxt_change;
    },
    cbtntxt_add: function cbtntxt_add() {
      return this.btntxt_add;
    },
    cbtntxt_addfolder: function cbtntxt_addfolder() {
      return this.btntxt_addfolder;
    },
    cpgtxt_name: function cpgtxt_name() {
      return this.pgtxt_name;
    },
    cpgtxt_list: function cpgtxt_list() {
      return this.pgtxt_list;
    },
    cpgtxt_viewdetails: function cpgtxt_viewdetails() {
      return this.pgtxt_viewdetails;
    },
    cpgtxt_selectfileorfolderpaste: function cpgtxt_selectfileorfolderpaste() {
      return this.pgtxt_selectfileorfolderpaste;
    },
    cpgtxt_selectfileorfoldercopy: function cpgtxt_selectfileorfoldercopy() {
      return this.pgtxt_selectfileorfoldercopy;
    },
    cpgtxt_selectfileorfoldercut: function cpgtxt_selectfileorfoldercut() {
      return this.pgtxt_selectfileorfoldercut;
    },
    cpgtxt_filenamenocorrect: function cpgtxt_filenamenocorrect() {
      return this.pgtxt_filenamenocorrect;
    },
    cpgtxt_alreadyexistname: function cpgtxt_alreadyexistname() {
      return this.pgtxt_alreadyexistname;
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
    mineType = _assets_jsfunc_media_module__WEBPACK_IMPORTED_MODULE_4__["default"].data.getMediaType();
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
        if ($(e.target).is($('div.media_dir_detail_btn'))) return true;else if ($(e.target).is($('#upfile'))) return true;
        $('div#WWGMContextMenu').hide();
        return false;
      });
      $('div#WWGMContextMenu a.list-group-item').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('div#WWGMContextMenu').hide();
        var aid = $(e.target).attr('id');

        if (aid === 'list-download-list') {
          if (permss.pread !== 1) {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
            return;
          }
        } else if (aid === 'list-rename-list') {
          if (permss.pwrite !== 1) {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
            return;
          }

          createtype = 'rename';
          $('input#objModalName').val(name);
          $('#objname-model-add-cont').css('display', 'none');
          $('#objname-model-change-cont').css('display', 'block');
          $('#objNameModal').modal('show');
          $('input#objModalName').focus();
        } else if (aid === 'list-delete-list') {
          if (permss.pdelete !== 1) {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
            return;
          }

          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.Confirm('pgtxt_wantdeleteitem', function (val) {
            if (val) {
              deleteObj(dirinfo);
            }
          });
        } else if (aid === 'list-copy-list') {
          if (permss.pwrite !== 1) {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
            return;
          }

          copyObj(dirinfo);
        } else if (aid === 'list-cut-list') {
          if (permss.pdelete !== 1) {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
            return;
          }

          cutObj(dirinfo);
        } else if (aid === 'list-paste-list') {
          if (permss.pwrite !== 1) {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
            return;
          }

          pasteObj(dirinfo);
        } else if (aid === 'list-createfile-list') {
          if (permss.pcreate !== 1) {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
            return;
          }

          createtype = 'file';
          $('input#objModalName').val('');
          $('#objNameModal').modal('show');
          $('input#objModalName').focus();
        } else if (aid === 'list-createfolder-list') {
          if (permss.pcreate !== 1) {
            _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
            return;
          }

          createtype = 'dir';
          $('input#objModalName').val('');
          $('#objNameModal').modal('show');
          $('input#objModalName').focus();
        }
      });
      $('#objNameModal').on('hidden.bs.modal', function (e) {
        //myjs.data.showAlert('modal hide');
        createtype = '';
        $('#objname-model-add-cont').css('display', 'block');
        $('#objname-model-change-cont').css('display', 'none');
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
            } else _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert(data.msg);
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
          } else if (createtype == 'rename') {
            rt = renameFolder(curpath, objname);
          }

          $('input#objModalName').val('');
          $('#objNameModal').modal('hide');
        } else {
          _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_alreadyexistname');
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
        var ename = $(element).find('span.cgobj-name').text(); //console.log(ename);

        if (pname === ename) {
          rname.msg = 'same';
        }
      });
      return rname;
    },
    fileUpload: function fileUpload(e) {
      if (permss.pcreate !== 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      $('#upfile').trigger('click');
    },
    fdirSearch: function fdirSearch() {
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
              tag += '<span class="media_dir_icon">';
              tag += '<i class="' + mineType["folder"] + '" style="font-size:48px;color:#f0c243e3"></i>';
              tag += '</span>';
              tag += '<span class="cgobj-name">';
              tag += dirname;
              tag += '</span>';
              tag += '</div>';
              $('#dir_view').append(tag);
              $('#' + prefix + dirnameid).dblclick(function (e) {
                e.preventDefault();
                var path = $(this).data('path');
                var ename = $(this).find('span.cgobj-name').text();
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

              ftag += '<img src="' + thumbs[0] + '">';
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
    RightClickHandler: function RightClickHandler(e) {
      e.preventDefault();
      e.stopPropagation();
      var x = e.pageX;
      var y = e.pageY;
      if (isshowButtonArea(e) === true) return;
      InitDirObj();
      var ret = isIntoFocus(x, y);
      dirinfo.id = ret.id;
      dirinfo.name = ret.name;
      dirinfo.path = ret.path;
      dirinfo.type = ret.type;
      dirinfo.poptype = 'right';

      if (ret.id !== '' && ret.name !== '') {
        $('div#WWGMContextMenu a').removeClass('active').addClass('s-none');
        $('div#WWGMContextMenu a#list-copy-list').addClass('t-redius');
        $('div#WWGMContextMenu a#list-paste-list').removeClass('b-redius');
        $('div#WWGMContextMenu a#list-delete-list, div#WWGMContextMenu a#list-copy-list, div#WWGMContextMenu a#list-paste-list, div#WWGMContextMenu a#list-cut-list').removeClass('s-none');
        $('div#WWGMContextMenu').css({
          top: y + 'px',
          left: x + 'px',
          position: 'absolute'
        });
        $('div#WWGMContextMenu').show();
      } else {
        $('div#WWGMContextMenu a').removeClass('active').addClass('s-none');
        $('div#WWGMContextMenu a#list-createfolder-list').addClass('t-redius');
        $('div#WWGMContextMenu a#list-paste-list').addClass('b-redius');
        $('div#WWGMContextMenu a#list-createfolder-list, div#WWGMContextMenu a#list-paste-list').removeClass('s-none');
        $('div#WWGMContextMenu').css({
          top: y + 'px',
          left: x + 'px',
          position: 'absolute'
        });
        $('div#WWGMContextMenu').show();
      }
    },
    createFolderByBtn: function createFolderByBtn() {
      if (permss.pcreate !== 1) {
        _assets_jsfunc_mjs_module__WEBPACK_IMPORTED_MODULE_2__["default"].data.showAlert('pgtxt_notpermission');
        return;
      }

      createtype = 'dir';
      $('input#objModalName').val('');
      $('#objNameModal').modal('show');
      $('input#objModalName').focus();
    }
  } //method

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#card-body-div{\n    min-height: 500px;\n}\n.list-group-item.list-group-item-action.s-none{\n    display: none;\n}\n.list-group-item.list-group-item-action.t-redius{\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n}\n.list-group-item.list-group-item-action.b-redius{\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n}\n.spinner-border.text-info{\n    position: absolute;\n    top: 6rem;\n    left: 21rem;\n    z-index: 20;\n    width: 4rem;\n    height: 4rem;\n\n    display: inline-block;\n    vertical-align: text-bottom;\n    border: 0.7em solid currentColor;\n    border-right-color: transparent;\n    border-radius: 50%;\n    -webkit-animation: spinner-border .75s linear infinite;\n    animation: spinner-border .75s linear infinite;\n    color: #5c6bc0 !important;\n}\n.spinner-border.text-info.nonactive{\n    display: none;\n}\n.media_dir_name{\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    background-color: #f3f3f3;\n    border-top: 1px solid #e6e6e6;\n    padding: 0;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.media_dir_detail{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.media_dir_detail_btn{\n    font-weight: 800;\n    border-radius: 25px;\n    border: 1px solid #d9d5d5;\n    color: #d9d5d5;\n    width: 25px;\n    height: 25px;\n}\n.list-group-item:first-child{\n    border-top-left-radius: 1.0rem;\n    border-top-right-radius: 1.0rem;\n}\n.list-group-item:last-child{\n    border-bottom-left-radius: 1.0rem;\n    border-bottom-right-radius: 1.0rem;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=template&id=3ca422db&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=template&id=3ca422db& ***!
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
        _c("h3", [_vm._v(_vm._s(_vm.cmusususu_webs_wesglobal_media_image))]),
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
              "   >>  " +
              _vm._s(_vm.cmusususu_webs_wesglobal_media_image) +
              "\n                      "
          ),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 d-flex justify-content-end" }, [
        _vm._m(1),
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
              _vm._v(" " + _vm._s(_vm.cbtntxt_addfolder))
            ])
          ]
        ),
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
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    staticStyle: { "padding-top": "1rem" },
                    attrs: { id: "card-body-div" },
                    on: {
                      contextmenu: function($event) {
                        return _vm.RightClickHandler($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-auto wes-theme-color",
                          staticStyle: { "font-size": "16px" }
                        },
                        [_vm._v(_vm._s(_vm.cpgtxt_list))]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-auto" }, [
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
                                staticStyle: {
                                  "border-radius": "20px 0px 0px 20px"
                                }
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
                              staticStyle: {
                                height: "calc(1.5em + .75rem + 6px)"
                              },
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
                                staticStyle: {
                                  "border-radius": "0px 20px 20px 0px"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.fdirSearch($event)
                                  }
                                }
                              },
                              [_vm._m(3)]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "d-flex flex-wrap justify-content-start text-center",
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
                    attrs: { id: "list-viewdetails-list", href: "#" }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_viewdetails))]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "list-group-item list-group-item-action",
                    attrs: {
                      id: "list-download-list",
                      "data-toggle": "list",
                      href: "#list-Download",
                      role: "tab",
                      "aria-controls": "Download"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_download))]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "list-group-item list-group-item-action",
                    attrs: {
                      id: "list-rename-list",
                      "data-toggle": "list",
                      href: "#list-Rename",
                      role: "tab",
                      "aria-controls": "Rename"
                    }
                  },
                  [_vm._v(_vm._s(_vm.cpgtxt_rename))]
                ),
                _vm._v(" "),
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
                      id: "list-paste-list",
                      "data-toggle": "list",
                      href: "#list-Paste",
                      role: "tab",
                      "aria-controls": "Paste"
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
                    staticClass: "list-group-item list-group-item-action",
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
                              _vm._m(5)
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass: "col-md-12 text-center",
                        attrs: { id: "objname-model-add-cont" }
                      },
                      [
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
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-12 text-center",
                        staticStyle: { display: "none" },
                        attrs: { id: "objname-model-change-cont" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "btn btn-outline-light  dash-my-btn-0 active p-l-r-35",
                            attrs: { id: "objname-model-change" },
                            on: { click: _vm.setObjNameAddClick }
                          },
                          [_c("span", [_vm._v(_vm._s(_vm.cbtntxt_change))])]
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
          id: "webs-wesglobal-media-image-fav",
          "data-status": "off",
          "data-page-info": "Image_webs-wesglobal-media-image"
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

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue":
/*!*****************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebsWesGlobalMediaImage_vue_vue_type_template_id_3ca422db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebsWesGlobalMediaImage.vue?vue&type=template&id=3ca422db& */ "./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=template&id=3ca422db&");
/* harmony import */ var _WebsWesGlobalMediaImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebsWesGlobalMediaImage.vue?vue&type=script&lang=js& */ "./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WebsWesGlobalMediaImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css& */ "./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WebsWesGlobalMediaImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebsWesGlobalMediaImage_vue_vue_type_template_id_3ca422db___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebsWesGlobalMediaImage_vue_vue_type_template_id_3ca422db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMediaImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=template&id=3ca422db&":
/*!************************************************************************************************!*\
  !*** ./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=template&id=3ca422db& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_template_id_3ca422db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WebsWesGlobalMediaImage.vue?vue&type=template&id=3ca422db& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vuedir/pages/webs/WebsWesGlobalMediaImage.vue?vue&type=template&id=3ca422db&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_template_id_3ca422db___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebsWesGlobalMediaImage_vue_vue_type_template_id_3ca422db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);