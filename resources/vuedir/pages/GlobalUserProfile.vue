<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>Profile</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;Profile&nbsp;&nbsp;
                    <a href="#" id="global-user-profile-fav" data-status="off" data-page-info="Profile_global-user-profile">
                    <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                    </a>
                </span>
            </div>
        </div>

        <div class="row m-t-15">
            <div class="col-md-12">
                <div class="nav nav-pills nav-fill m-b-20" id="global-user-profile-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-item nav-link active m-r-15" style="flex: 0.02 1 auto;border: 1px solid #e6e6e6;border-radius:1.2rem" id="global-user-profile-general-tab" data-toggle="pill" href="#global-user-profile-general" role="tab" aria-controls="global-user-profile-general" aria-selected="true">
                        <svg t="1599124664697" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23124" width="17" height="17">
                            <path d="M512.3 63.1C264.5 63.1 63.6 264 63.6 511.8c0 137.4 61.7 260.3 159 342.6 2.5 2.9 5.6 5.4 9 7.4 76.9 61.7 174.5 98.7 280.8 98.7 106.3 0 203.9-36.9 280.8-98.7 3.4-2 6.4-4.5 9-7.4 97.2-82.3 159-205.3 159-342.6-0.1-247.8-201-448.7-448.9-448.7z m0 822.7c-81 0-155.9-25.7-217.1-69.4l1.4-3.8c33-90.7 119.2-151.1 215.7-151.1 95.4 0 183.6 51.9 211 134.3L730 816c-61.2 43.9-136.4 69.8-217.7 69.8zM400.2 474.4c0-62 50.2-112.2 112.2-112.2s112.2 50.2 112.2 112.2-50.2 112.2-112.2 112.2-112.2-50.2-112.2-112.2z m390.4 287.3c-27.3-71.3-84.4-121.9-151.4-149.8 37-34.2 60.2-83.1 60.2-137.4 0-103.3-83.7-187-187-187s-187 83.7-187 187c0 55.2 23.9 104.8 62 139-66 29.7-120.4 82.5-151.5 150.2-60.6-66.5-97.5-154.8-97.5-251.8 0-206.5 167.4-373.9 373.9-373.9s373.9 167.4 373.9 373.9c0.1 96-36.1 183.5-95.6 249.8z" p-id="23125"></path>
                        </svg>
                        <span class="m-l-10">{{cbtntxt_general}}</span>
                    </a>
                    <a class="nav-item nav-link m-r-15" style="flex: 0.02 1 auto;border: 1px solid #e6e6e6;border-radius:1.2rem" id="global-user-profile-senior-tab" data-toggle="pill" href="#global-user-profile-senior" role="tab" aria-controls="global-user-profile-senior" aria-selected="false">
                        <svg t="1599124713464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23895" width="17" height="17">
                            <path d="M627.2 328.533333C597.333333 298.666667 554.666667 281.6 512 281.6c-89.6 0-162.133333 72.533333-162.133333 162.133333 0 89.6 72.533333 162.133333 162.133333 162.133334s162.133333-72.533333 162.133333-162.133334c0-42.666667-17.066667-85.333333-46.933333-115.2z" p-id="23896"></path>
                            <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 977.066667C256 977.066667 46.933333 768 46.933333 512S256 46.933333 512 46.933333 977.066667 256 977.066667 512 768 977.066667 512 977.066667z" p-id="23897"></path>
                            <path d="M725.333333 584.533333c34.133333-46.933333 51.2-110.933333 42.666667-174.933333-12.8-115.2-110.933333-209.066667-226.133333-221.866667C384 170.666667 256 294.4 256 443.733333c0 51.2 17.066667 102.4 42.666667 140.8l-93.866667 162.133334h128l64 110.933333 93.866667-162.133333h42.666666l93.866667 162.133333 64-110.933333h128L725.333333 584.533333z m-59.733333 119.466667l-38.4 64-72.533333-119.466667c-29.866667 8.533333-59.733333 8.533333-89.6 0l-68.266667 123.733334-38.4-64H281.6l72.533333-123.733334c-21.333333-25.6-38.4-55.466667-46.933333-89.6-34.133333-153.6 98.133333-285.866667 251.733333-251.733333 76.8 17.066667 140.8 81.066667 157.866667 157.866667 17.066667 72.533333-4.266667 140.8-46.933333 187.733333l72.533333 123.733333-76.8-8.533333z" p-id="23898"></path>
                        </svg>
                        <span class="m-l-10">{{cbtntxt_senior}}</span>
                    </a>
                    <a class="nav-item nav-link m-r-15" style="flex: 0.02 1 auto;border: 1px solid #e6e6e6;border-radius:1.2rem" id="global-user-profile-infomation-tab" data-toggle="pill" href="#global-user-profile-infomation" role="tab" aria-controls="global-user-profile-infomation" aria-selected="false">
                        <svg t="1599124753113" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24641" width="17" height="17">
                            <path d="M512 64a448 448 0 1 0 0.0512 896.0512A448 448 0 0 0 512 64z m0 820.0192a372.0704 372.0704 0 0 1 0-744.0384 372.0704 372.0704 0 0 1 0 744.0384z" p-id="24642"></path><path d="M464.0256 336.0256a48.0256 48.0256 0 1 0 96 0 48.0256 48.0256 0 0 0-96.0512 0zM536.0128 448H487.936a8.0384 8.0384 0 0 0-7.9872 7.9872v272.0256c0 4.4032 3.584 7.9872 7.9872 7.9872h48.0256c4.4032 0 7.9872-3.584 7.9872-7.9872V455.9872a8.0384 8.0384 0 0 0-7.9872-7.9872z" p-id="24643"></path>
                        </svg>
                        <span class="m-l-10">{{cbtntxt_infomation}}</span>
                    </a>
                </div>

                <div class="tab-content" id="global-user-profile-tabContent">
                    <div class="tab-pane fade show active" id="global-user-profile-general" role="tabpanel" aria-labelledby="global-user-profile-general-tab">
                        <div class="row">
                            <div class="col-md-12">
                                <form id="global-user-profile-form" name="global-user-profile-form" enctype="multipart/form-data" method="post">
                                    <div class="card" >
                                        <input type="hidden" id="global-user-profile-id" name="global-user-profile-id" :value="userid">
                                        <!-- img id="global-user-profile-background" :src="backgroundImg" style="position: absolute;left:0;top:0; z-index: 0" :width="getBackgroundMaxSize()" :height="getBackgroundMaxSize()" // han 2020-11-11 -->
                                        <table class="table table-borderless mb-0 text-center" role="grid">
                                            <tbody>
                                            <tr>
                                                <th class="p-10" rowspan="2" style="width: 15%">
                                                    <div class="mt-3">
                                                        <!-- <img :src="getPhotopath()" style="border-radius: 15px" width="105px" height="105px"/>-->
                                                        <img id="global-user-profile-photo" :src="photoImg" style="border-radius: 15px; max-width: 150px; max-height: 150px;" :width="getPhotoWidth()" :height="getPhotoHeight()"  onerror="this.src ='/images/noimg.png';"/>
                                                    </div>
                                                    <div style="display: none">
                                                        <input type="file" name="global-user-profile-photo-edit" id="global-user-profile-photo-edit" value="">
                                                    </div>
                                                    <div id="global-user-profile-photo-editbtn" class="btn btn-outline-light mt-4 dash-my-btn-0 active">
                                                        <span>{{cbtntxt_edit}}</span>
                                                    </div>
                                                    <div class="mt-2">
                                                        <div style="display: none">
                                                            <input type="file" name="global-user-profile-background-edit" id="global-user-profile-background-edit" value="">
                                                        </div>
                                                        <a id="global-user-profile-background-editbtn" href="#" style="text-decoration: underline;color: #a7a7ed;">{{cpgtxt_sua_edit}} {{cpgtxt_background}}</a>
                                                    </div>
                                                </th>
                                                <td class="p-l-r-50">
                                                    <div class="form-group text-left">
                                                        <label style="margin-top: 8px; color:#666;">Username</label>
                                                    </div>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" style="background-color: #fff;border: 1px solid #ced4da;"  placeholder="" aria-label="global-user-profile-username" id="global-user-profile-username" name="global-user-profile-username" aria-describedby="basic-addon2" value="" :maxlength="getUsernameMaxLength()">
                                                    </div>
                                                </td>
                                                <td class="p-l-r-50 ">
                                                    <div class="form-group text-left">
                                                        <label style="margin-top: 8px; color:#666;">Name</label>
                                                    </div>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" style="background-color: #fff;border: 1px solid #ced4da;"  placeholder="" aria-label="global-user-profile-name" id="global-user-profile-name" name="global-user-profile-name" aria-describedby="basic-addon2" value="" :maxlength="getNameMaxLength()">
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-l-r-50 " style="vertical-align: top">
                                                    <div class="form-group text-left">
                                                        <label style="margin-top: 8px; color:#666;">Email</label>
                                                    </div>
                                                    <div class="input-group">
                                                        <input type="email" class="form-control" style="background-color: #fff;border: 1px solid #ced4da;"  placeholder="" aria-label="global-user-profile-email" id="global-user-profile-email" name="global-user-profile-email" aria-describedby="basic-addon2" value="">
                                                    </div>
                                                    <div class="form-group text-left" v-if="emailError">
                                                        <label style="color: rgb(221, 144, 29); margin-top: 8px;">*This is an invalid email address</label>
                                                    </div>
                                                </td>
                                                <td class="p-l-r-50 " style="vertical-align: top">
                                                    <div class="form-group text-left">
                                                        <label style="margin-top: 8px; color:#666;">Tel</label>
                                                    </div>
                                                    <div class="input-group">
                                                        <input type="tel" class="form-control" style="background-color: #fff;border: 1px solid #ced4da;"  placeholder="" aria-label="global-user-profile-tel" id="global-user-profile-tel" name="global-user-profile-tel" aria-describedby="basic-addon2" value="" >
                                                    </div>
                                                    <div class="form-group text-left" v-if="mobileError">
                                                        <label style="color: rgb(221, 144, 29); margin-top: 8px;">*This is an invalid mobile</label>
                                                    </div>
                                                </td>
                                                <input type="hidden" id="global-user-profile-tel-data" name="global-user-profile-tel-data" value="">
                                                <input type="hidden" id="global-user-profile-country-data" name="global-user-profile-country-data" value="">
                                            </tr>
                                            <tr>
                                                <td class="p-10 text-right" colspan="3">
                                                    <span style="font-weight: bold; color: #a7a7ed">
                                                        {{getCreateddate()}}
                                                    </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>

                            <div class="col-md-12">
                                <div class="card border-0 m-b-10 text-center">
                                    <div>
                                        <div id="sua-profile-add-item" class="btn btn-outline-light dash-my-btn-0 active" @click.stop="updateUserinfo()">
                                            <span> {{cbtntxt_sua_SaveChange}} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="global-user-profile-senior" role="tabpanel" aria-labelledby="global-user-profile-senior-tab">
                        <input type="hidden" id="global-user-profile-senior-id" name="global-user-profile-senior-id" :value="userid">
                        <div class="row mb-3" id="global-user-profile-senior-old-password">
                            <div class="col-md-12">
                                <div class="form-group text-left mb-0">
                                    <label style="color:#666;">Old Password</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="input-group">
                                    <input type="password" class="form-control" style="background-color: #ededed; border: 1px solid #ced4da;" aria-label="global-user-profile-senior-old-password-txt" id="global-user-profile-senior-old-password-txt" name="global-user-profile-senior-old-password-txt" aria-describedby="global-user-profile-senior-old-password-txt">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3" id="global-user-profile-senior-new-password">
                            <div class="col-md-12">
                                <div class="form-group text-left mb-0">
                                    <label style="color:#666;">New Password</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="input-group">
                                    <input type="password" class="form-control" style="background-color: #ededed; border: 1px solid #ced4da;" aria-label="global-user-profile-senior-new-password-txt" id="global-user-profile-senior-new-password-txt" name="global-user-profile-senior-new-password-txt" aria-describedby="global-user-profile-senior-new-password-txt">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3" id="global-user-profile-senior-confirm-password">
                            <div class="col-md-12">
                                <div class="form-group text-left mb-0">
                                    <label style="color:#666;">New Password Repeat</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="input-group">
                                    <input type="password" class="form-control" style="background-color: #ededed; border: 1px solid #ced4da;" aria-label="global-user-profile-senior-confirm-password-txt" id="global-user-profile-senior-confirm-password-txt" name="global-user-profile-senior-confirm-password-txt" aria-describedby="global-user-profile-senior-confirm-password-txt">
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col-md-12">
                                <div class="card border-0 m-b-10 text-left">
                                    <div>
                                        <div id="global-user-profile-senior-save-changes" class="btn btn-outline-light dash-my-btn-0 active" @click.stop="updateProfilePassword()">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                            </svg>
                                            <span> {{cbtntxt_sua_SaveChange}} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="global-user-profile-infomation" role="tabpanel" aria-labelledby="global-user-profile-infomation-tab">
                        <div>Information Tab</div>
                    </div>
                </div>
            </div>
        </div>
        <form action="admin.dashboard" enctype="multipart/form-data" id="globalprofile_frm" method="post" target="_top">
            <input type="hidden" class="form-control" id="email"  name="email" value="">
            <input type="hidden" class="form-control" id="pwd"  name="pwd" value="">
            <input type="hidden" class="form-control" id="profile_page"  name="profile_page" value="profile">
        </form>
    </div>
</template>

<script>
    import myjs from "../assets/jsfunc/mjs_module";
    import axios from "axios";
    import nav_module from "../assets/jsfunc/nav_module";
    import moment from "moment";

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var vueOBJ=null;
    var mobileList = [];
    var emailList = [];
    var pgtxt_dbsaved = "";

    export default {
        data() {
            return {
                pageid: 'global-user-profile-fav',
                btntxt_general: '',
                btntxt_senior: '',
                btntxt_infomation: '',
                pgtxt_sua_Security: '',
                pgtxt_sua_BirthDate: '',
                pgtxt_sua_Phone:'',
                pgtxt_sua_Website:'',
                pgtxt_sua_Languages:'',
                pgtxt_sua_Gender:'',
                pgtxt_sua_Male:'',
                pgtxt_sua_Female:'',
                pgtxt_sua_Other:'',
                pgtxt_sua_AddressLine:'',
                pgtxt_sua_PostCode:'',
                pgtxt_sua_City:'',
                pgtxt_sua_State:'',
                pgtxt_sua_Country:'',
                btntxt_sua_SaveChange:'',
                btntxt_edit:'',
                pgtxt_sua_edit:'',
                pgtxt_background:'',
                pgtxt_dbsaved:'',

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
                emailError: '',
            }
        },
        computed: {
            // 계산된 getter
            cbtntxt_general: function () {
                return this.btntxt_general;
            },
            cbtntxt_senior: function () {
                return this.btntxt_senior;
            },
            cbtntxt_infomation: function () {
                return this.btntxt_infomation;
            },
            cpgtxt_sua_Security: function () {
                return this.pgtxt_sua_Security;
            },
            cpgtxt_sua_BirthDate: function () {
                return this.pgtxt_sua_BirthDate;
            },
            cpgtxt_sua_Phone: function () {
                return this.pgtxt_sua_Phone;
            },
            cpgtxt_sua_Website: function () {
                return this.pgtxt_sua_Website;
            },
            cpgtxt_sua_Languages: function () {
                return this.pgtxt_sua_Languages;
            },
            cpgtxt_sua_Gender: function () {
                return this.pgtxt_sua_Gender;
            },
            cpgtxt_sua_Male: function () {
                return this.pgtxt_sua_Male;
            },
            cpgtxt_sua_Female: function () {
                return this.pgtxt_sua_Female;
            },
            cpgtxt_sua_Other: function () {
                return this.pgtxt_sua_Other;
            },
            cpgtxt_sua_AddressLine: function () {
                return this.pgtxt_sua_AddressLine;
            },
            cpgtxt_sua_PostCode: function () {
                return this.pgtxt_sua_PostCode;
            },
            cpgtxt_sua_City: function () {
                return this.pgtxt_sua_City;
            },
            cpgtxt_sua_State: function () {
                return this.pgtxt_sua_State;
            },
            cpgtxt_sua_Country: function () {
                return this.pgtxt_sua_Country;
            },
            cbtntxt_sua_SaveChange: function () {
                return this.btntxt_sua_SaveChange;
            },
            cbtntxt_edit: function () {
                return this.btntxt_edit;
            },
            cpgtxt_sua_edit: function () {
                return this.pgtxt_sua_edit;
            },
            cpgtxt_background: function () {
                return this.pgtxt_background;
            },
            cpgtxt_dbsaved: function () {
                return this.pgtxt_dbsaved;
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

            this.userinfo = nav_module.data.jsonparse(window.Laravel.userinfo);

            if (this.userinfo.photo != "")
                this.photoImg = '/uploads/images/'+this.userinfo.photo;
            else
                this.photoImg = "/uploads/images/someone.png";

            if (this.userinfo.background != "")
                this.backgroundImg = '/uploads/images/' + this.userinfo.background;
            else
                this.backgroundImg = "";

            this.userid = this.userinfo.id;
        },
        mounted() {
            /* fav part*/
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            this.initpage();
            this.getDefaultItemList();
            this.getMobieItemList();
            this.getEmailItemList();
            this.configureTelInput();
            pgtxt_dbsaved= myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
        },
        methods: {
            /* fav part */
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc= '/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
            },
            /*fav part*/
            getUsername() {
                var username = this.userinfo.username;
                return username;
                //return username.slice(0, this.getUsernameMaxLength());
            },
            getName() {
                var name = this.userinfo.name;
                return name;
                //return name.slice(0, this.getNameMaxLength());
            },
            getEmail() {
                return this.userinfo.email;
            },
            getPassword() {
                return this.userinfo.password;
            },
            getCountryCode() {
                return this.userinfo.countrycode;
            },
            getCountryName() {
                return this.userinfo.countryname;
            },
            getPhonenumber() {
                if(this.userinfo.phone != null && this.userinfo.phone != "")
                      return this.userinfo.phone.substring(0, this.mobileLength);
                else
                  return "";
            },
            getCreateddate() {
                var date = 'Joind Since ' + moment(String(this.userinfo.created_at)).format("YYYY.MM.DD");
                return date;
            },
            getUsernameMaxLength() {
                return this.username_maxLength;
            },
            getUsernameMinLength() {
                return this.username_minLength;
            },
            getNameMaxLength() {
                return this.name_maxLength;
            },
            getNameMinLength() {
                return this.name_minLength;
            },
            getPhotoWidth() {
                return this.photosize_width;
            },
            getPhotoHeight() {
                return this.photosize_height;
            },
            getBackgroundWidth() {
                return this.background_width;
            },
            getBackgroundHeight() {
                return this.background_height;
            },
            getMobileMaxLength() {
                return this.mobileLength;
            },
            initpage() {
                $('#global-user-profile-photo-editbtn').click(function () {
                    $('#global-user-profile-photo-edit').val('');
                    $('#global-user-profile-photo-edit').trigger('click');
                });
                $('#global-user-profile-photo-edit').change(function () {
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            vueOBJ.photoImg = e.target.result;
                        }
                        //vueOBJ.photoImg = this.files[0];
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
                        }

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
            configureTelInput() {
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
                for (nIndex = 0; nIndex < countryData.length; nIndex ++) {
                    for (var key in mobileList) {
                        if (dialcode == countryData[nIndex].dialCode && countryname == countryData[nIndex].iso2) {
                            iti.setCountry(countryData[nIndex].iso2)
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
            checkMobileValid(mobile) {
                vueOBJ.mobileError = "";

                if (mobile.length < 1)
                    return false;

                var input = document.querySelector("#global-user-profile-tel");
                var iti = window.intlTelInputGlobals.getInstance(input);
                var cur_dialcode = iti.getSelectedCountryData()['dialCode']

                var bfound = null;
                for(var i = 0; i < mobileList.length; i++){
                    if(mobileList[i].characters == mobile.length && mobileList[i].dialcode == cur_dialcode)
                    {
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
            checkEmailValid(email) {
                vueOBJ.emailError = "";

                if (email.length < 1)
                    return false;

                var emailAddress = email.split("@")[1];

                if (emailAddress == null)
                    return false;
                var bfound = emailList.find(function (elem) {
                    return elem.name == emailAddress;
                })

                if (bfound != null) {
                    return true;
                }

                return false;
            },
            updateUserinfo() {
                var username = $.trim($('#global-user-profile-username').val());
                var name = $.trim($('#global-user-profile-name').val());
                var email = $.trim($('#global-user-profile-email').val());
                var mobile = $.trim($('#global-user-profile-tel').val());

                if (username === '' || name === '' || email === '') {
                    myjs.data.showAlert("you must empty this fields.");
                    return;
                }

                if (username.length < vueOBJ.getUsernameMinLength()) {
                    myjs.data.showAlert("The length of Username must be between " + vueOBJ.getUsernameMinLength() + " and " + vueOBJ.getUsernameMaxLength());
                    return;
                }

                if (name.length < vueOBJ.getNameMinLength()) {
                    myjs.data.showAlert("The length of Name must be between " + vueOBJ.getNameMinLength() + " and " + vueOBJ.getNameMaxLength());
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
                    success: function (data) {
                        if (data.msg === "ok") {
                            myjs.data.showAlert('pgtxt_sucesssaveddata');
                            localStorage.clear();
                            $('#email').val(vueOBJ.getEmail());
                            $('#pwd').val(vueOBJ.getPassword());
                            $('#globalprofile_frm').submit();
                        }
                        else if(data.msg === "psize"){
                            myjs.data.showAlert("The profile icon cannot be greater than " + vueOBJ.photosize_width + " * " + vueOBJ.photosize_height);
                        }
                        else if(data.msg === "bsize"){
                            myjs.data.showAlert("The background image cannot be greater than " + vueOBJ.background_width + " * " + vueOBJ.background_height);
                        }
                        else {
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    },
                    cache: false,
                    contentType: false,
                    processData: false
                });
            },
            getUserinfo() {

            },
            getDefaultItemList() {
                let postData = {
                    userid:userid
                };

                axios.post('admin.getDefaultItemList', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg === "ok") {
                            let lists = response.data.list;
                            if(lists.length <= 0)
                                return;
                            for(var i = 0; i < lists.length; i++) {
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
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            updateProfilePassword() {
                let usrid = $.trim($('#global-user-profile-senior-id').val());
                let oldpwd = $.trim($('#global-user-profile-senior-old-password-txt').val());
                let newpwd = $.trim($('#global-user-profile-senior-new-password-txt').val());
                let renewpwd = $.trim($('#global-user-profile-senior-confirm-password-txt').val());

                if (oldpwd === "" || newpwd === "" || renewpwd === "") {
                    myjs.data.showAlert("you must fill all fields!");
                    return;
                }

                if (newpwd !== renewpwd) {
                    myjs.data.showAlert("please input newpwd and renewpwd correctly!");
                    return;
                }

                let postData = {
                    id: usrid,
                    oldpwd: oldpwd,
                    newpwd: newpwd
                };

                axios.post('admin.updateUserPassword', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg === "ok") {
                            myjs.data.showAlert('pgtxt_sucesssaveddata');
                            $('#global-user-profile-senior-old-password-txt').val('');
                            $('#global-user-profile-senior-new-password-txt').val('');
                            $('#global-user-profile-senior-confirm-password-txt').val('');
                        } else {
                            myjs.data.showAlert(response.data.message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            getMobieItemList() {
                $.ajax({
                    url: 'admin.getSystemSecurityMobileItem',
                    data: {
                        start: 1,
                        cnt: -1,
                        filter: 0,
                    },
                    type: 'POST',
                    async: false,
                    success: function (data) {
                        if (data.msg === "ok") {
                            let lists = data.list;
                            mobileList = [];
                            Object.keys(lists).forEach(function (elem) {
                                if (lists[elem].check == "1") {
                                    mobileList.push(lists[elem]);
                                }
                            })
                        } else {
                            console.log(data.message);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            getEmailItemList() {
                let postData = {

                };

                axios.post('admin.getSUSEmailItem', postData)
                    .then((response) => {
                        let msg = response.data.msg;

                        if (msg == "ok") {
                            let lists = response.data.list;
                            var lstIndex = 0;

                            Object.keys(lists).forEach(function (elem) {
                                if (lists[elem].check == "1") {
                                    emailList[lstIndex] = lists[elem];
                                    lstIndex ++;
                                }
                            })
                        } else {
                            console.log(response.data.message);
                        }
                    })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    }
</script>
