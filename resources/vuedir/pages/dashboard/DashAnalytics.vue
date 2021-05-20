<template>

        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmusu_dash_analy}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_dash}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_dash_analy}}
                          <a href="#" id="dashboard-analytics-fav" data-status="off" data-page-info="Analytics_dashboard-analytics">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card p-t-20 p-b-20 p-l-20 p-r-20 min-vh-60">
                        <div>
                            <div id="ecommerce-dashboard-daterangepicker" class="btn btn-outline-light  dash-my-btn">
                                <i class="ti-calendar mr-2 text-muted"></i>
                                <span>This is Analytics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</template>
<script>
    import axios from 'axios'
    import myjs_md from "../../assets/jsfunc/mjs_module"
    import nav_module from "../../assets/jsfunc/nav_module";

    var vueOBJ=null;
    export default {
        data(){
            return {
                pageid:'dashboard-analytics-fav',
                mu_dash:'',
                musu_dash_analy:''
            }
        },
        created(){

        },
        computed: {
            // 계산된 getter
            title: function () {
                // `this` 는 vm 인스턴스를 가리킵니다.
                return this.$store.state.curMenu
            },
            cmu_dash:function(){
                return this.mu_dash;
            },
            cmusu_dash_analy:function () {
                return this.musu_dash_analy;
            },


            contentchange: function () {//cckd
               // this.setPGSiteChacters();//cckd
                myjs_md.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });

                return this.$store.state.contentchange;
            },
        },
        beforeMount() {
        },
        mounted() {
            vueOBJ=this;
            /* fav part*/
            $('#'+this.pageid).click(function(){
                myjs_md.data.addOnfavList(this, vueOBJ);
            });
            setTimeout(this.getfavor,300);
            /* fav part*/
        },
        methods: {
            /* fav part */
            getSiteFaveritelist(list) {
                if (list != null && list != '') {
                    let imgsrc = '/images/icons/star_f.png';
                    $('#' + this.pageid + ' img').attr("src", imgsrc);
                    $('#' + this.pageid).attr("data-status", "on");
                }
            },  /*fav part*/
            getfavor(){
                myjs_md.data.getSiteFaveritelist(this.pageid, vueOBJ);
            },
            setPGSiteChacters()
            {//cckd
            var locale=this.$store.getters.doDefaultLang;
            let postData = {
                iso: locale
            };
            axios.post('admin.getSiteContentsBylocale', postData)
                .then((response) => {
                    let msg = response.data.msg;
                    if(msg =="ok") {
                        var list = response.data.list;
                        for (var i = 0; i < list.length; i++) {
                            var item = list[i];
                            var str_type = item.str_type;
                            var str_key = item.str_key;
                            var str_cont = item.str_cont;
                            var contentKey = str_type + '_' + str_key;

                            if (contentKey == 'mu_dash')
                                this.mu_dash = str_cont;
                            else if (contentKey == 'musu_dash_analy')
                                this.musu_dash_analy = str_cont;

                        }
                    }

                }).catch(function (error) {
                console.log(error);
            })
        }

        }

    }
</script>
