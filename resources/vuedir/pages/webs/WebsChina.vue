<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>

            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusu_webs_china}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_webs}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp; {{cmusu_webs_china}}
                          <a href="#" id="webs-china-fav" data-status="off" data-page-info="WES_webs-china">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="card border-0 m-b-10">
                        <div>
                            <div id="ecommerce-system-account" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-25">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tool nav-link-icon m-r-10">
                                    <path fill-rule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM6 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zm4.5 0a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z"></path>
                                    <path fill-rule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z"></path>
                                </svg>
                                <span>Theme</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row m-t-15">
                <div class="col-md-12">

                    <div class="card p-t-20 p-b-20 p-l-20 p-r-20 min-vh-60" style="border:0;border-radius:0;">
                        <div class="row">
                            <div style="min-width:175px;width:18%">
                                <div class="wes-custorm-div">
                                    <ul style="display: block;">
                                        <li>
                                            <a href="#" id="webswes-header" data-state="0" data-list="1" @click.stop="listMenuChange('webswes-header')">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book nav-link-icon m-r-5">
                                                     <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                </svg>
                                                <span>Head</span> <i class="sub-menu-arrow fa fa-caret-right"></i>
                                            </a>
                                            <ul id="webswes-header-container" style="display: none;">
                                                <li><a href="#" id="webswes-header-top" >
                                                    <span>Top Header</span>
                                                </a>
                                                </li>
                                                <li>
                                                    <a href="#" id="webswes-header-head">
                                                        <span>Header</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" id="webswes-header-sub">
                                                        <span>Sub Header</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" id="webswes-foot" data-state="0" data-list="0" @click.stop="listMenuChange('webswes-foot')">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book nav-link-icon m-r-5">
                                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                </svg>
                                                <span>Foot</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
</template>
<script>
    import myjs from "../../assets/jsfunc/mjs_module";
    import axios from "axios";
    import nav_module from "../../assets/jsfunc/nav_module";


    function sublistShow(pid)
    {
        var prestr0=pid.split('-')[0];
        var prestr1=pid.split('-')[1];
        var acls=prestr0+"-";

        var containerul = pid+'-container';
        var lchild=$("a#"+pid).attr('data-list');
        var lstate=$("a#"+pid).attr('data-state');

        if(lchild=="1")
        {
            if(lstate=="0")
            {
                $(".wes-custorm-div ul li > a[id^='"+acls+"']").attr('class','');
                $("a#"+pid).attr('class','active');

                $(".wes-custorm-div ul li > ul").attr('style','display:none;');
                //$(".wes-custorm-div ul li > ul").hide(500);

                $("ul#"+containerul).attr('style','display:block;');
                //$("ul#"+containerul).show(500);

                $("a#"+pid).attr('data-state','1');

                /* arrow */
                $('a#' + pid + ' > i').addClass('rotate-in');
            }
            else
            {
                $(".wes-custorm-div ul li > a[id^='"+acls+"']").attr('class','');

                $(".wes-custorm-div ul li > ul").attr('style','display:none;');
               // $(".wes-custorm-div ul li > a[id^='"+acls+"']").hide(500);

                $("a#"+pid).attr('data-state','0');
                /* arrow */
                $('a#' + pid + ' > i').removeClass('rotate-in');
            }
        }
        else
        {
            $(".wes-custorm-div ul li > a[id^='"+acls+"']").attr('class','');
            $(".wes-custorm-div ul li > a[id^='"+acls+"']").attr('data-state','0');
            $("a#"+pid).attr('class','active');
            $(".wes-custorm-div ul li > ul").attr('style','display:none;');
            //$(".wes-custorm-div ul li > ul").hide(500);


        }



    }
    export default {
        data(){
            return {
                pageid:'webs-china-fav',
                musu_webs_china:'',
                mu_webs:''
            }
        },
	created() {

        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmusu_webs_china:function () {
                return this.musu_webs_china
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                return this.$store.state.contentchange;
            },
        },
        mounted() {
            /* fav part*/
            var vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            /* fav part*/
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
            /*fav part*/
            listMenuChange(pid) {
                {
                    sublistShow(pid);
                }
            }
        }
    }
</script>
