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
                        <div id="aqah_page1_content_side_bar_text" class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="topheader">{{cbtntxt_topheader}}</div>
                    </div>
                    <div class="awah_page_button">
                        <div id="aqah_page2_content_side_bar_text" class="page1_content_side_bar_text" data-target="header">{{cbtntxt_header}}</div>
                    </div>
                    <div class="awah_page_button">
                        <div id="aqah_page3_content_side_bar_text" class="page1_content_side_bar_text" data-target="subheader">{{cbtntxt_subheader}}</div>
                    </div>
                </div>
            </div>
            <component :is="PageComponentItem"></component>
        </div>

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
    #aqah_page1_content_side_bar_text,
    #aqah_page2_content_side_bar_text,
    #aqah_page3_content_side_bar_text
    {
        float: left;
        cursor: pointer;
        height: auto;
    }
    .modal_top_bar{
        margin-right: 10px;
    }
    #awa_module_lists td{
        border: none;
    }
    #awa_headmodule_lists td{
        border: none;
    }
</style>

<script>
    import myjs from "../../assets/jsfunc/mjs_module";

    var vueOBJ=null;

    export default {
        name: "AppsWebSiteAppearanceHead",
        components: {
            'AppsWebSiteAppearanceHeadTopHeader': () => import('../../pages/apps/AppsWebSiteAppearanceHeadTopHeader'),
            'AppsWebSiteAppearanceHeadHeader': () => import('../../pages/apps/AppsWebSiteAppearanceHeadHeader'),
            'AppsWebSiteAppearanceHeadSubHeader': () => import('../../pages/apps/AppsWebSiteAppearanceHeadSubHeader'),
        },
        data(){
            return {
                pageid:'apps-website-appearance-head-fav',
                mu_apps:'',
                musu_apps_website:'',
                mususu_apps_website_appear:'',
                musususu_apps_website_appear_head:'',
                btntxt_topheader:'',
                btntxt_header:'',
                btntxt_subheader:'',
                ptabstatus:0,
            }
        },
        computed: {
            PageComponentItem(){
                switch (this.ptabstatus) {
                    case 0:
                        return 'AppsWebSiteAppearanceHeadTopHeader'
                    case 1:
                        return 'AppsWebSiteAppearanceHeadHeader'
                    case 2:
                        return 'AppsWebSiteAppearanceHeadSubHeader'
                }
            },

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
            cbtntxt_topheader:function () {
                return this.btntxt_topheader;
            },
            cbtntxt_header:function () {
                return this.btntxt_header;
            },
            cbtntxt_subheader:function () {
                return this.btntxt_subheader;
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
        mounted(){
            vueOBJ=this;
            $('#'+this.pageid).click(function(){
                myjs.data.addOnfavList(this, vueOBJ);
            });
            myjs.data.getSiteFaveritelist(this.pageid, vueOBJ);
            this.sliderTabs();
        },
        methods:{
            getSiteFaveritelist(list){
                if(list!=null && list!='')
                {
                    let imgsrc='/images/icons/star_f.png';
                    $('#'+this.pageid+' img').attr("src",imgsrc);
                    $('#'+this.pageid).attr("data-status","on");
                }
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

                    if(subid=='topheader'){
                        vueOBJ.ptabstatus=0;
                    }
                    else if(subid=='header'){
                        vueOBJ.ptabstatus=1;
                    }
                    else if(subid=='subheader'){
                        vueOBJ.ptabstatus=2;
                    }

                });
            },
        }


    }
</script>
