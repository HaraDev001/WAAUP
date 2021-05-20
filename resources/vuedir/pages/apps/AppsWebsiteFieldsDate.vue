<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusususu_apps_website_fields_date}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_apps}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_apps_website}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_apps_website_fields}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_apps_website_fields_date}}
                          <a href="#" id="apps-website-fields-date-fav"  data-status="off" data-page-info="Date_apps-website-fields-date">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>

            <div id="SSFContainer_5" class="sf-tab-container active" style="margin-top:20px;">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div style="display:flex;flex-direction:row;align-items:center">
                                            <div  style="width: 8rem;">{{cpgtxt_ssf_footerlimit}}</div>
                                            <div  style="width: 10rem;">
                                                <select class="form-control w-100" id="ssfd_state_limit" name="ssft_state">
                                                    <option value="12">12</option>
                                                    <option value="24">24</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select>
                                            </div>
                                            <div class="m-l-10">{{cpgtxt_ssf_limit}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="card border-0 m-b-10 text-right">
                                            <div>
                                                <div id="system-field-date-btn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30" @click.stop="ShowSSFDateDLG()">
                                                    <span>{{cbtntxt_savechange}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div><!--/SSFContainer_5 Date-->

        </div><!--/content-->
</template>
<style>
.table .odd td{
 border:0;
}
.table tr.odd.bot{
    border-bottom: 1px solid #e6e6e6;
}
.sf-tab-container{
    display: none;
}
.sf-tab-container.active{
    display: block;
}
</style>
<script>
    import axios from "axios";

    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var pstart=1;
    var pnum = pstart;
    var pcnt=5;
    var numg = 5;

    var pstart1=1;
    var pnum1 = pstart1;
    var pcnt1=5;
    var numg1 = 5;

    var pstart_n=1;
    var pnum_n = pstart_n;
    var pcnt_n=5;
    var numg_n = 5;
    var permss;


    export default {
        data(){
            return {
                pageid:'apps-website-fields-date-fav',
                mu_apps:'',
                musu_apps_website:'',
                mususu_apps_website_fields:'',
                musususu_apps_website_fields_date:'',
                pgtxt_ssf_footerlimit:'',
                pgtxt_ssf_limit:'',
                btntxt_savechange:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_apps: function () {
                return this.mu_apps
            },
            cmusu_apps_website: function () {
                return this.musu_apps_website
            },
            cmususu_apps_website_fields: function () {
                return this.mususu_apps_website_fields
            },
            cmusususu_apps_website_fields_date: function () {
                return this.musususu_apps_website_fields_date
            },
            cpgtxt_ssf_footerlimit:function(){
                return this.pgtxt_ssf_footerlimit
            },
            cpgtxt_ssf_limit:function(){
                return this.pgtxt_ssf_limit
            },
            cbtntxt_savechange:function(){
                return this.btntxt_savechange
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },

            contentchange: function () {
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    // console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                return this.$store.state.contentchange;
            }
        },
        created() {

        },
        beforeMount() {
        },
        mounted() {
            /* fav part*/
            var vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
            permss = myjs.data.permissionDefinition();
        },
        methods: {
            /* fav part */
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }

            },
            ShowSSFDateDLG() {
                if (permss.pcreate == 1) {

                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            },
        }/*end method*/

    }
</script>
