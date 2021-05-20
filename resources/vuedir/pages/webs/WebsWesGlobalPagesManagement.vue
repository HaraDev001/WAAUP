<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusususu_webs_wesglobal_pages_management}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp;{{cmu_webs}} &nbsp;&nbsp;&gt;&gt;&nbsp;{{cmusu_webs_wesglobal}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_webs_wesglobal_pages}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusususu_webs_wesglobal_pages_management}}
                          <a href="#" id="webs-wesglobal-pages-management-fav" data-status="off" data-page-info="Management_webs-wesglobal-pages-management">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
            </div>
        </div>
        <div>
            <component :is="WebPageManagement" @fromchild="changeConponet" ></component>
        </div>
    </div>
</template>


<script>

    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";
    import Editor from '@tinymce/tinymce-vue';
    import axios from "axios";

    let vueOBJ=null;


    export default {
        name: "WebsWesGlobalPagesManagement",
        data(){
            return {
                pageid:'webs-wesglobal-pages-management-fav',
                mu_webs:'',
                musu_webs_wesglobal:'',
                mususu_webs_wesglobal_pages:'',
                musususu_webs_wesglobal_pages_management:'',
                status:0,
            }
        },
        created() {

        },
        beforeMount(){
        },
        mounted(){
            this.status = 0;
            myjs.data.setEditID(0);
        },
        components: { // 여기서 동적으로 로딩한다
            'WebsWesGlobalPagesManagementList': () => import('../../pages/webs/WebsWesGlobalPagesManagementList'),
            'WebsWesGlobalPagesManagementEdit': () => import('../../pages/webs/WebsWesGlobalPagesManagementEdit'),
        },
        computed: {
            cmususu_webs_wesglobal_pages:function () {
                return this.mususu_webs_wesglobal_pages
            },
            cmusususu_webs_wesglobal_pages_management:function () {
                return this.musususu_webs_wesglobal_pages_management
            },
            cmu_webs:function () {
                return this.mu_webs
            },
            cmusu_webs_wesglobal:function () {
                return this.musu_webs_wesglobal
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

            WebPageManagement(){
                switch (this.status) {
                    case 0:
                        return 'WebsWesGlobalPagesManagementList';
                    case 1:
                        return 'WebsWesGlobalPagesManagementEdit';
                }
            },
        },
        methods:{
            changeConponet(val){
                this.status=val;
            }
        }//method

    }
</script>
