<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_apps_website_appear_head}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_apps}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_apps_website}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_website_appear}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_apps_website_appear_head}}
                          <a href="#" id="apps-website-appearance-head-fav" data-status="off" data-page-info="Head_apps-website-appearance-head">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12" style="margin-bottom: 30px;">
                <div class="page1_content_side_bar" style="display: flex;">
                    <div class="awah_page_button">
                        <div id="awts_page1_content_side_bar_text" class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="imageslider">{{cpgtxt_image}} {{cpgtxt_slider}}</div>
                    </div>
                    <div class="awah_page_button">
                        <div id="awts_page2_content_side_bar_text" class="page1_content_side_bar_text" data-target="header"></div>
                    </div>
                    <div class="awah_page_button">
                        <div id="awts_page3_content_side_bar_text" class="page1_content_side_bar_text" data-target="subheader"></div>
                    </div>
                </div>
            </div>

            <div class="col-md-12" style="text-align: right; margin-bottom: 25px;">
                <div id="awtslideraddbutton" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="ShowSliderModalAddBtn()">
                    <span>+ {{ cbtntxt_add }}</span>
                </div>
            </div>

            <!--image slider tab-->
            <div class="col-md-12 page_slider_content_list active" id="imageslider">
                <input type="hidden" id="hide_selectable_image_id" name="hide_selectable_image_id" value="">
                <input type="hidden" id="hide_selectable_image_size" name="hide_selectable_image_size" value="">
                <input type="hidden" id="hide_selectable_image_capacity" name="hide_selectable_image_capacity" value="">
                <div class="page1_content_content_bar">
                    <div class="page1_content_content_title" style="padding: 0px; border: 0px;">
                        <div class="col-md-12" style="display: flex; flex-direction: row; align-items: center; padding: 0px;">
                            <div style="flex-grow: 1; margin-left:15px; font-size: 1rem;">{{cpgtxt_list}}</div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <table class="table table-lg  no-footer" role="grid" aria-describedby="user-list_info">
                            <thead>
                            <tr role="row" style="border-bottom: 1px solid #e4e2e2;">
                                <th style="width:40px!important; border: 0;"></th>
                                <th style="border: 0;">{{cpgtxt_name}}</th>
                                <th style="border: 0;">{{cpgtxt_size}}</th>
                                <th style="text-align:right; padding-right: 40px;">
                                    <div id="imgslider_selected_all_delete" style="cursor: pointer;">{{cbtntxt_delete}}</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody id="awa_imgslider_content_lists">

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 text-center" >
                        <div id="ssmu_page_nav" style="width: 100%;">

                        </div>
                    </div>
                </div>

            </div>

        </div>


        <!--Add Subheader Content Modal start-->
        <div class="modal fade" id="ModalAddImgSlider">
            <div class="modal-dialog modal-dialog-centered modal-sm" style="min-width: 600px!important;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="Modal_ImgSlider_Title">{{cbtntxt_add}} {{cpgtxt_image}} {{cpgtxt_slider}}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="AddImgSliderModalBody" style="padding: 0px 0rem 2rem">
                        <div class="col-md-12" style="margin-top: 20px;">
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_name}}</label>
                                </div>
                                <div class="col-md-10">
                                    <input type="text" class="form-control" id="Modal_ImgSlider_Name" name="Modal_ImgSlider_Name">
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                <div class="col-md-2">
                                    <label style="margin-top: 8px; color:#666;">{{cpgtxt_size}}</label>
                                </div>
                                <div class="col-md-6">
                                    <select class="form-control w-100 select-noneborder-rightcolor" id="Modal_ImgSlider_List" name="Modal_ImgSlider_List" >

                                    </select>
                                </div>
                                <div style="font-size: 11px;">
                                    <div style="margin-left: 20px;"><font style="color: #b0b0af;">{{cpgtxt_readcontentfields}}</font></div>
                                    <div style="margin-left: 20px;">
                                        <font style="color: #b0b0af;">{{cpgtxt_specifiedsize}} : </font>
                                        <font style="color: #000;" id="ImgSlider_selectable_image_size"></font>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <font style="color: #b0b0af">{{cpgtxt_nogreaterthan}} : </font>
                                        <font style="color: #000;" id="ImgSlider_selectable_image_capacity"></font>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12" style="text-align: center;">
                                <div class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" @click.stop="addImageSliderContentBtn()">
                                    <span>+ {{cbtntxt_add}} </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Add Subheader Content Modal end-->
    </div>
</template>
<style>
    .page1_content_content_bottom svg{
        color: #6b85e2;
    }
    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .awah_page_button{
        width: 120px;
    }
    #awts_page1_content_side_bar_text
    {
        float: left;
        cursor: pointer;
        height: auto;
    }

</style>

<script>
    import lang_module from "../../assets/jsfunc/lang_module";
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import media_module from "../../assets/jsfunc/media_module";

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var preview='';
    var tabstatus=0;
    var vueOBJ=null;
    var btntxt_save = "";
    var btntxt_delete = "";
    var btntxt_edit = "";
    var btntxt_change = "";
    var checked_del_items = new Array();
    var img_capacitys = new Array();
    var img_sizes = new Array();
    var img_ids = new Array();
    var pstart = 1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;
    var is_edit = false;
    var edit_id = 0;
    var permss;


    function pageNavigation(totalpage) {
        var nav_tag='';
        nav_tag+='<nav aria-label="..." class="mb-4">';
        nav_tag+='<ul class="pagination pagination-rounded justify-content-center">';

        var disble="";
        if(pstart==1)
            disble="disabled"

        var prenum= parseInt(pstart) - 1;

        nav_tag+='<li class="page-item  '+disble+' ">';
        nav_tag+='<a class="page-link" href="#"  id="ssmunavnum_' + prenum + '" >';
        nav_tag+='<i class="ti-angle-left"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        var pnum = pstart <= numg ? 1 : parseInt(pstart) - 1;

        for(var idx = 0; idx < numg; idx++)
        {
            var actv="";
            var aria_current='';
            var spantag='';
            var oid='';

            if(pnum == pstart)
            {
                actv='active';
                aria_current='aria-current="page"';
                spantag='<span class="sr-only">(current)</span>';
            }
            else
                oid="ssmunavnum_" + pnum;

            nav_tag+='<li class="page-item ' + actv + '"  ' + aria_current + '>';
            nav_tag+='<a class="page-link" id="' + oid + '"  href="#" >' + pnum + '  ' + spantag + '</a>';
            nav_tag+='</li>';

            if(pnum == totalpage) break;

            pnum = pnum + 1;
        }

        var nextnum= parseInt(pstart) + 1;

        var edisble="";
        if(pstart == totalpage)
            edisble="disabled"

        nav_tag+='<li class="page-item '+edisble+' ">';
        nav_tag+='<a class="page-link" id="ssmunavnum_' + nextnum + '" href="#">';
        nav_tag+='<i class="ti-angle-right"></i>';
        nav_tag+='</a>';
        nav_tag+='</li>';

        nav_tag+='</ul>';
        nav_tag+='</nav>';

        $('#ssmu_page_nav').html(nav_tag);

        /* events { */
        $('a[id^="ssmunavnum_"]').click(function(){
            var oid = $(this).attr("id");
            pstart = oid.split('_')[1];
            if(tabstatus == 0) {
                initImageSliderTab();
            }else if(tabstatus == 1) {

            }else if(tabstatus == 2) {

            }
        });
    }


    // Image Slider tab start /////////////////////////////////////////////////////////////////////////////////////////////
    function getImageStyleList(lists) {
        var tags = '';
        for(var i = 0; i < lists.length; i++){
            var id = lists[i].id;
            var name = lists[i].name;
            tags += '<option value="'+id+'">'+name+'</option>';
            img_capacitys.push(lists[i].capacity);
            img_sizes.push(lists[i].size);
            img_ids.push(id);
            if(i == 0){
                $('#hide_selectable_image_id').val(id);
                $('#hide_selectable_image_size').val(lists[i].size);
                $('#hide_selectable_image_capacity').val(lists[i].capacity);
                var size = lists[i].size.split('*');
                $('#ImgSlider_selectable_image_size').text(size[0]+"px "+size[1]+"px");
                $('#ImgSlider_selectable_image_capacity').text(lists[i].capacity+" kb");
            }
        }
        $('#Modal_ImgSlider_List').html(tags);

        $('#Modal_ImgSlider_List').change(function(){
            var sel_val = $(this).val();
            for(var i = 0; i < img_ids.length; i++){
                if(img_ids[i] == sel_val){
                    var image_id = img_ids[i];
                    var image_size = img_sizes[i];
                    var image_capacity = img_capacitys[i];
                    $('#hide_selectable_image_id').val(image_id);
                    $('#hide_selectable_image_size').val(image_size);
                    $('#hide_selectable_image_capacity').val(image_capacity);
                    var size = image_size.split('*');
                    $('#ImgSlider_selectable_image_size').text(size[0]+"px "+size[1]+"px");
                    $('#ImgSlider_selectable_image_capacity').text(image_capacity+" kb");
                    break;
                }
            }
        });
    }
    function imgSliderContentList(lists) {
        is_edit = false;
        edit_id = "";
        var tags = '';
        for(var i = 0; i < lists.length; i++){
            var id = lists[i].id;
            var name = lists[i].name;
            var size = lists[i].size;
            var imgid = lists[i].imgid;

            tags += '<tr class="imgslider_content_list-' + id + '" data-id="' + id + '" data-name="' + name + '" data-imgid="' + imgid + '">';
            tags += '   <td>';
            tags += '   <div class="form-check form-check-inline">';
            tags += '       <input class="form-check-input" type="checkbox" id="imgsliderCheckbox_'+id+'" value="">';
            tags += '   </div>';
            tags += '   </td>';
            tags += '   <td>' + name + '</td>';
            tags += '   <td>' + size + '</td>';
            tags += '   <td>';
            tags += '       <div class="form-group m-b-0">';
            tags += '           <select class="my-border-radius-slt form-control float-right" id="imgslider_content_list_edit-'+id+'" name="imgslider_content_list_edit-'+id+'">';
            tags += '               <option selected value="" class="data-ajax" data-ajax="btntxt_edit">'+btntxt_edit+'</option>';
            tags += '               <option value="change" class="data-ajax" data-ajax="btntxt_change">'+btntxt_change+'</option>';
            tags += '               <option value="delete" class="data-ajax" data-ajax="btntxt_delete">'+btntxt_delete+'</option>';
            tags += '           </select>';
            tags += '       </div>';
            tags += '   </td>';
            tags += '</tr>';
        }

        $('#awa_imgslider_content_lists').html(tags);

        $('input[id^="imgsliderCheckbox_"]').change(function() {
            var id = $(this).attr("id");
            var del_id = id.split('_')[1];
            if ($(this).is(':checked')) {
                checked_del_items.push(del_id);
            }
            else{
                const idx = checked_del_items.indexOf(del_id);
                if (idx > -1)
                    checked_del_items.splice(idx, 1);
            }
        });

        $('select[id^="imgslider_content_list_edit-"]').change(function(){
            var id = $(this).attr("id");
            edit_id = id.split('-')[1];
            var name = $('.imgslider_content_list-' + edit_id).attr("data-name");
            var imgid = $('.imgslider_content_list-' + edit_id).attr("data-imgid");
            var sel_val = $(this).val();
            if (sel_val == "change") {
                if(permss.pwrite == 1) {
                    is_edit = true;
                    $('#Modal_ImgSlider_Name').val(name);
                    $('#Modal_ImgSlider_List').val(imgid);
                    for (var i = 0; i < img_ids.length; i++) {
                        if (img_ids[i] == imgid) {
                            var image_id = img_ids[i];
                            var image_size = img_sizes[i];
                            var image_capacity = img_capacitys[i];
                            $('#hide_selectable_image_id').val(image_id);
                            $('#hide_selectable_image_size').val(image_size);
                            $('#hide_selectable_image_capacity').val(image_capacity);
                            var size = image_size.split('*');
                            $('#ImgSlider_selectable_image_size').text(size[0] + "px " + size[1] + "px");
                            $('#ImgSlider_selectable_image_capacity').text(image_capacity + " kb");
                            break;
                        }
                    }
                    $('#ModalAddImgSlider').modal('show');
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            } else if (sel_val == "delete") {
                if(permss.pdelete == 1) {
                    myjs.data.confirmAlert(deleteImageSliderList, edit_id, 'pgtxt_wantdeleteitem');
                }else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        });
    }
    function initImageSliderTab() {
        $.ajax({
            url: 'admin.getAWTSliderImageList',
            data: {
                userid: userid,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    var images = data.images;
                    $('#awa_imgslider_content_lists').html('');
                    if(lists !== null && lists != "") {
                        imgSliderContentList(lists);
                    }
                    if(images !== null && images != "") {
                        getImageStyleList(images);
                    }
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function addImageSliderList() {
        var name = $('#Modal_ImgSlider_Name').val();
        var imgid = $('#hide_selectable_image_id').val();
        var size = $('#hide_selectable_image_size').val();
        if(name == '')
            return;
        $.ajax({
            url: 'admin.addAWTSliderImageList',
            data: {
                userid:userid,
                name:name,
                size:size,
                imgid:imgid,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    $('#awa_imgslider_content_lists').html('');
                    if(lists != null && lists != '')
                        imgSliderContentList(lists);
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalAddImgSlider').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function editImageSliderList() {
        var name = $('#Modal_ImgSlider_Name').val();
        var imgid = $('#hide_selectable_image_id').val();
        var size = $('#hide_selectable_image_size').val();
        if(name == '')
            return;
        $.ajax({
            url: 'admin.editAWTSliderImageList',
            data: {
                userid:userid,
                name:name,
                editid:edit_id,
                size:size,
                imgid:imgid,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    $('#awa_imgslider_content_lists').html('');
                    if(lists != null && lists != '')
                        imgSliderContentList(lists);
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalAddImgSlider').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function deleteImageSliderList(edit_id) {
        $.ajax({
            url: 'admin.deleteAWTSliderImageList',
            data: {
                userid:userid,
                editid:edit_id,
                pstart:pstart,
                pcnt:pcnt
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    var lists = data.lists;
                    $('#awa_imgslider_content_lists').html('');
                    if(lists != null && lists != '')
                        imgSliderContentList(lists);
                    var total = data.total;
                    if(total <= 0){
                        $('#ssmu_page_nav').html('');
                        return;
                    }
                    pstart = data.pstart;
                    var totalpage = data.totalpage;
                    pageNavigation(totalpage);
                    $('#ModalAddImgSlider').modal('hide');
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function allDeleteCheckedImageSlider() {
        $('#imgslider_selected_all_delete').click(function () {
            if (permss.pdelete == 0) {
                myjs.data.showAlert('pgtxt_notpermission');
                return;
            }
            if (checked_del_items.length == 0)
                return;
            $.ajax({
                url: 'admin.allDeleteAWAToolsSliderImage',
                data: {
                    userid: userid,
                    ids: checked_del_items,
                    pstart: pstart,
                    pcnt: pcnt
                },
                type: 'POST',
                success: function (data) {
                    if (data.msg === "ok") {
                        var lists = data.lists;
                        $('#awa_imgslider_content_lists').html('');
                        if (lists != null && lists != '')
                            imgSliderContentList(lists);
                        var total = data.total;
                        if (total <= 0) {
                            $('#ssmu_page_nav').html('');
                            return;
                        }
                        pstart = data.pstart;
                        var totalpage = data.totalpage;
                        pageNavigation(totalpage);
                        checked_del_items = new Array();
                    } else {
                        console.log(data.msg);
                    }
                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        });
    }
    // Image Slider tab end ///////////////////////////////////////////////////////////////////////////////////////////////

    export default {
        name: "AppsWebSiteToolsSlider",
        data(){
            return {
                pageid:'apps-website-tools-slider-fav',
                mu_apps:'',
                musu_apps_website:'',
                mususu_apps_website_appear:'',
                musususu_apps_website_appear_head:'',
                btntxt_add:'',
                btntxt_edit:'',
                btntxt_save:'',
                btntxt_delete:'',
                btntxt_change:'',
                pgtxt_size:'',
                pgtxt_slider:'',
                pgtxt_list:'',
                pgtxt_name:'',
                pgtxt_image:'',
                pgtxt_readcontentfields:'',
                pgtxt_specifiedsize:'',
                pgtxt_nogreaterthan:'',
                pgtxt_wantdeleteitem:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
                btntxt_ok:'',
                btntxt_cancel:'',
            }
        },
        computed: {
            cmususu_apps_website_appear:function () {
                return this.mususu_apps_website_appear;
            },
            cmusususu_apps_website_appear_head:function () {
                return this.musususu_apps_website_appear_head;
            },
            cmu_apps:function () {
                return this.mu_apps;
            },
            cmusu_apps_website:function () {
                return this.musu_apps_website;
            },
            cbtntxt_add:function () {
                return this.btntxt_add;
            },
            cbtntxt_edit:function () {
                return this.btntxt_edit;
            },
            cbtntxt_save:function () {
                return this.btntxt_save;
            },
            cbtntxt_change:function () {
                return this.btntxt_change;
            },
            cbtntxt_delete:function () {
                return this.btntxt_delete;
            },
            cpgtxt_image:function () {
                return this.pgtxt_image;
            },
            cpgtxt_size:function () {
                return this.pgtxt_size;
            },
            cpgtxt_slider:function () {
                return this.pgtxt_slider;
            },
            cpgtxt_list:function () {
                return this.pgtxt_list;
            },
            cpgtxt_name:function () {
                return this.pgtxt_name;
            },
            cpgtxt_readcontentfields:function () {
                return this.pgtxt_readcontentfields;
            },
            cpgtxt_specifiedsize:function () {
                return this.pgtxt_specifiedsize;
            },
            cpgtxt_nogreaterthan:function () {
                return this.pgtxt_nogreaterthan;
            },
            cpgtxt_wantdeleteitem:function () {
                return this.pgtxt_wantdeleteitem;
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },
            cbtntxt_ok:function () {
                return this.btntxt_ok;
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel;
            },


            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });

                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        created() {
        },
        beforeMount(){
        },
        mounted(){
            /* fav part*/
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            permss = myjs.data.permissionDefinition();
            /* fav part*/
            btntxt_save = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_save');
            btntxt_change = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_change');
            btntxt_delete = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_delete');
            btntxt_edit = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'btntxt_edit');
            this.initpage();
        },
        methods:{
            /* fav part */
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
            },
            initpage() {
                this.sliderTabs();
                initImageSliderTab();
                allDeleteCheckedImageSlider()
            },
            sliderTabs()
            {
                $('.page1_content_side_bar div.page1_content_side_bar_text').click(function()
                {
                    $('.page1_content_side_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');
                    $('.col-md-12.page_slider_content_list').removeClass('active');
                    $('#'+subid).addClass('active');

                    checked_del_items = new Array();
                    img_capacitys = new Array();
                    img_sizes = new Array();
                    img_ids = new Array();
                    is_edit = false;
                    edit_id = 0;
                    if(subid=='imageslider')
                    {
                        tabstatus=0;
                        initImageSliderTab();
                        allDeleteCheckedImageSlider();
                    }

                });
            },
            ShowSliderModalAddBtn(){
                if(permss.pcreate == 1) {
                    is_edit = false;
                    edit_id = 0;
                    $('#Modal_ImgSlider_Name').val('');
                    $('#Modal_ImgSlider_List').val(img_ids[0]);
                    var image_id = img_ids[0];
                    var image_size = img_sizes[0];
                    var image_capacity = img_capacitys[0];
                    $('#hide_selectable_image_id').val(image_id);
                    $('#hide_selectable_image_size').val(image_size);
                    $('#hide_selectable_image_capacity').val(image_capacity);
                    var size = image_size.split('*');
                    $('#ImgSlider_selectable_image_size').text(size[0] + "px " + size[1] + "px");
                    $('#ImgSlider_selectable_image_capacity').text(image_capacity + " kb");
                    $('#ModalAddImgSlider').modal('show');
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
            addImageSliderContentBtn(){
                if(is_edit)
                    editImageSliderList();
                else
                    addImageSliderList();
            }
        }//method


    }
</script>
