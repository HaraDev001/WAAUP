<template>
        <div class="content">
            <div style="display: none">{{contentchange}}</div>
            <div class="page-header">
                <div class="page-title">
                    <h3>{{cmususu_system_set_basic}}</h3>
                    <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; &nbsp;&nbsp; {{cmu_system}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_set}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_system_set_basic}}
                          <a href="#" id="system-setting-basic-fav" data-status="off" data-page-info="Basic_system-setting-basic">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12" style="margin-bottom: 30px;">
                    <div class="page1_content_tab_bar">
                        <div class="ssb_page_button">
                            <div id="ssb_page1_content_side_bar_text" class="page1_content_side_bar_text page1_content_side_bar_seleted" data-target="dash">{{cpgtxt_dashboard}}</div>
                        </div>
                        <div class="ssb_page_button">
                            <div id="page_content_submenu_text" class="page1_content_side_bar_text" data-target="front">{{cpgtxt_front}} {{cpgtxt_pages}}</div>
                        </div>
                    </div>
                    <div class="page2_content_tab_bar">
                        <div class="ssb_page_button">
                            <div id="ssb_page3_content_side_bar_text" class="front_content_bar_text front_content_bar_seleted" data-target="login">{{cpgtxt_login}}</div>
                        </div>
                        <div class="ssb_page_button">
                            <div id="ssb_page4_content_side_bar_text" class="front_content_bar_text" data-target="reg">{{cpgtxt_register}}</div>
                        </div>
                    </div>
                </div>
                <!-- dashboard tab -->
                <div class="col-md-12 page_slider_content_list active"  id="dash">
                    <div class="card">
                        <div class="card-body" style="padding: 20px;">
                            <h6 class="card-title m-b-20">{{cpgtxt_setting}}</h6>
                        </div>
                        <div class="col-md-12">
                            <div class="col-md-10">
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-2" style="margin-top: 8px;">{{cpgtxt_domain}} {{cpgtxt_name}}</div>
                                    <div class="col-md-5">
                                        <input type="text" class="form-control border-input-text" id="ssb_input_domain_name" name="ssb_input_domain_name">
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-2" style="margin-top: 8px;">{{cpgtxt_dashboard}} {{cpgtxt_name}}</div>
                                    <div class="col-md-5">
                                        <input type="text" class="form-control border-input-text" id="ssb_input_dashboard_name" name="ssb_input_dashboard_name">
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap" style="margin-bottom: 20px;">
                                    <div class="col-md-2" style="margin-top: 8px;">{{cpgtxt_slogan}}</div>
                                    <div class="col-md-5">
                                        <input type="text" class="form-control border-input-text" id="ssb_input_slogan" name="ssb_input_slogan">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="text-align: right; margin-bottom: 25px;">
                        <div id="add_domainBtn" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-30"  @click.stop="SaveSettingBasicInfo()">
                            <span>{{ cbtntxt_savechange }}</span>
                        </div>
                    </div>
                </div>
                <!-- FrontPages tab -->
                <div class="col-md-12 page_slider_content_list"  id="front">
                    <component :is="FrontPageComponentitem"></component>
                </div>
            </div>

        </div>
</template>
<style>
    .table.table-lg td {
        padding: 0.7rem 0.75rem;
    }
    .page_slider_content_list{
        display: none;
    }
    .page_slider_content_list.active{
        display: block;
    }
    .delete-theme-color{
        cursor: pointer;
    }
    .selectedThemeColor{
        width: 50px;
        border: 2px solid #888;
        background: #ffffff;
    }
    .page1_content_tab_bar {
        display: flex;
        border: 1px solid #d6d6d6;
        border-radius: 20px;
        min-height: 40px;
        padding: 10px 20px;
    }
    .page1_content_tab_bar.active{
        border-radius: 0px;
        border: 1px solid #d6d6d6;
        min-height: 40px;
        padding: 10px 20px;
        display: flex;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .page2_content_tab_bar{
        display: none;
    }
    .page2_content_tab_bar.active{
        border: 1px solid #d6d6d6;
        border-top: 0px;
        min-height: 40px;
        padding: 10px 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: #f8f8f8;
        display: flex;
    }
    .front_content_bar_seleted {
        color: #d8be8f;
    }
    #ssb_page1_content_side_bar_text,
    #ssb_page3_content_side_bar_text,
    #ssb_page4_content_side_bar_text
    {
        float: left;
        cursor: pointer;
        height: auto;
    }
    .ssb_page_button{
        width: 100px;
    }
</style>
<script>
    import nav_module from "../../assets/jsfunc/nav_module";
    import myjs from "../../assets/jsfunc/mjs_module";

    let vueOBJ=null;

    var userid = nav_module.data.jsonparse(window.Laravel.userinfo).id;
    var email = nav_module.data.jsonparse(window.Laravel.userinfo).email;
    var pwd = nav_module.data.jsonparse(window.Laravel.userinfo).password;
    var mainTabstatus = 0;
    var permss;
    var tagCount = 0;

    function colorButtons(){
        const hiddenThemeColorPicker = document.getElementById('hiddenThemeColorPicker');
        let pickerLeft = new ColorPicker(hiddenThemeColorPicker, '#ffffff');
        hiddenThemeColorPicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            $('#hiddenThemeColorPicker').val(color);
            addThemeColor(color);
        });
    }
    function DeleteColorEvent() {
        $('span[id^="delcolor_"]').click(function () {
            var colorid = $(this).attr("data-id");
            $.ajax({
                url: 'admin.delssbhemeColor',
                type: 'POST',
                data:{
                    userid:userid,
                    colorid:colorid
                },
                async: false,
                success: function (data) {
                    if(data.msg=="ok") {
                        var color_list = data.list.color_info;
                        //var sel_color = data.list.sel_color;
                        getColorList(color_list);
                    }
                    else
                        alert(data.msg);

                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        });
    }
    function getColorList(jsonstr) {
        $('#addedSystemThemeColorList').html('');
        if (jsonstr != ''){
            var color_list = $.parseJSON(jsonstr);
            var tags = '';

            for (var j = 0; j < color_list.length; j++) {
                var obj = color_list[j];
                var cid = obj.colorid;
                var color = obj.colorinfo;

                tags += '<div style="margin-bottom: 20px;">';
                tags += '<div id="addedcolor_' + j + '" style="display: flex;flex-direction: row; width: 130px; height: 20px;">';
                tags += '   <div id="addcolor_' + j + '" class="selectedThemeColor" data-color="'+color+'" style="background: ' + color + '"></div>';
                tags += '   <div style="margin-left: 10px;"><span id="delcolor_' + j + '" data-id="' + cid + '" class="delete-theme-color">'+btntxt_delete+'</span></div>';
                tags += '</div>';
                tags += '</div>';

                tagCount = j;
            }
            $('#addedSystemThemeColorList').html(tags);
            DeleteColorEvent();
        }
    }
    function showThemeColorPage() {
        $.ajax({
            url: 'admin.getssbhemeColor',
            type: 'POST',
            data:{
                userid:userid
            },
            async: false,
            success: function (data) {
                if(data.msg=="ok") {
                    var color_list = data.list.color_info;
                    getColorList(color_list);
                }
                else
                    alert(data.msg);

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }
    function addThemeColor(color) {
        tagCount++;
        $.ajax({
            url: 'admin.addssbhemeColor',
            type: 'POST',
            data:{
                userid:userid,
                color:color
            },
            async: false,
            success: function (data) {
                if(data.msg=="ok"){
                    var color_list = data.list.color_info;
                    getColorList(color_list);
                }
                else
                    alert(data.msg);

            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }


    export default {
        name: "SystemSetBasic",
        data(){
           return {
               pageid:'system-setting-basic-fav',
               mu_system:'',
               musu_system_set:'',
               mususu_system_set_basic:'',
               pgtxt_dashboard:'',
               pgtxt_front:'',
               pgtxt_pages:'',
               pgtxt_setting:'',
               pgtxt_domain:'',
               pgtxt_name:'',
               pgtxt_slogan:'',
               pgtxt_login:'',
               pgtxt_register:'',
               btntxt_savechange:'',
               btntxt_cancel:'',
               pgtxt_dbsaved:'',
               pgtxt_notpermission:'',
               pgtxt_notification:'',
               ptabstatus:-1,
            }
        },
        components: { // 여기서 동적으로 로딩한다
            'SystemSetBasicFrontPagesLogin': () => import('../../pages/system/SystemSetBasicFrontPagesLogin'),
            'SystemSetBasicFrontPagesRegister': () => import('../../pages/system/SystemSetBasicFrontPagesRegister'),
        },
        computed: {
            FrontPageComponentitem(){
                switch (this.ptabstatus) {
                    case 0:
                        return 'SystemSetBasicFrontPagesLogin'
                    case 1:
                        return 'SystemSetBasicFrontPagesRegister'
                }
            },
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_system:function () {
                return this.mu_system
            },
            cmusu_system_set:function () {
                return this.musu_system_set
            },
            cmususu_system_set_basic:function () {
                return this.mususu_system_set_basic
            },
            cpgtxt_dashboard:function () {
                return this.pgtxt_dashboard
            },
            cpgtxt_front:function () {
                return this.pgtxt_front
            },
            cpgtxt_pages:function () {
                return this.pgtxt_pages
            },
            cpgtxt_setting:function () {
                return this.pgtxt_setting
            },
            cpgtxt_domain:function () {
                return this.pgtxt_domain
            },
            cpgtxt_name:function () {
                return this.pgtxt_name
            },
            cpgtxt_slogan:function () {
                return this.pgtxt_slogan
            },
            cpgtxt_login:function () {
                return this.pgtxt_login
            },
            cpgtxt_register:function () {
                return this.pgtxt_register
            },
            cbtntxt_savechange:function () {
                return this.btntxt_savechange
            },
            cbtntxt_cancel:function () {
                return this.btntxt_cancel
            },
            cpgtxt_dbsaved:function () {
                return this.pgtxt_dbsaved
            },
            cpgtxt_notpermission:function () {
                return this.pgtxt_notpermission;
            },
            cpgtxt_notification:function () {
                return this.pgtxt_notification;
            },


            contentchange: function () {//cckd
                myjs.data.forEachProp(this.$store.state.sitecontents, this.$data, function(obj,key, value) {
                    //console.log(obj.hasOwnProperty(key));
                    if(obj.hasOwnProperty(key)){
                        obj[key]=value;
                    }
                });
                myjs.data.realtimeTransByAjaxtexts(this.$store.state.sitecontents);
                return this.$store.state.contentchange;
            },
        },
        watch: {
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

            this.sliderTabs();
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
            /*fav part*/
            sliderTabs()
            {
                $('.page1_content_tab_bar div.page1_content_side_bar_text').click(function()
                {
                    $('.page1_content_tab_bar div.page1_content_side_bar_text').removeClass('page1_content_side_bar_seleted');
                    $(this).addClass('page1_content_side_bar_seleted');
                    var subid=$(this).attr('data-target');

                    if(subid=='dash')
                    {
                        $('.col-md-12 div.page1_content_tab_bar').removeClass('active');
                        $('div.page2_content_tab_bar').removeClass('active');
                        $('.col-md-12 div.page2_content_tab_bar .page1_content_side_bar_text').removeClass('active');
                        $('.page_slider_content_list').removeClass('active');
                        $('#'+subid).addClass('active');
                        mainTabstatus=0;
                    }
                    else if(subid=='front'){
                        $('div.page1_content_tab_bar').addClass('active');
                        $('div.page2_content_tab_bar').addClass('active');
                        $('.page_slider_content_list').removeClass('active');
                        $('#'+subid).addClass('active');

                        $('.page2_content_tab_bar div.front_content_bar_text').removeClass('front_content_bar_seleted');
                        $('#ssb_page3_content_side_bar_text').addClass('front_content_bar_seleted');
                        vueOBJ.ptabstatus=0;
                        mainTabstatus=1;
                    }

                });

                $('.page2_content_tab_bar div.front_content_bar_text').click(function()
                {
                    $('.page2_content_tab_bar div.front_content_bar_text').removeClass('front_content_bar_seleted');
                    $(this).addClass('front_content_bar_seleted');
                    var subid=$(this).attr('data-target');
                    if(subid=='login'){
                        vueOBJ.ptabstatus=0;
                    }
                    else if(subid=='reg'){
                        vueOBJ.ptabstatus=1;
                    }

                });
            },
            initpage(){
                $.ajax({
                    url: 'admin.getSystemSettingBasic',
                    type: 'POST',
                    data: {
                        userid:userid
                    },
                    async: false,
                    success: function (data) {
                        if(data.msg=="ok"){
                            $('#ssb_input_domain_name').val(data.domain);
                            $('#ssb_input_dashboard_name').val(data.dashboard);
                            $('#ssb_input_slogan').val(data.slogan);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    },
                });
            },
            SaveSettingBasicInfo() {
                if (permss.pcreate == 1 || permss.pwrite == 1) {
                    var pgtxt_dbsaved = myjs.data.getByAjaxtext(vueOBJ.$store.state.sitecontents, 'pgtxt_dbsaved');
                    var domain = $('#ssb_input_domain_name').val();
                    var dashboard = $('#ssb_input_dashboard_name').val();
                    var slogan = $('#ssb_input_slogan').val();
                    if (domain == null || domain == '') {
                        alert('Please enter a domain name.');
                        return;
                    }
                    if (dashboard == null || dashboard == '') {
                        alert('Please enter a dashboard name.');
                        return;
                    }
                    if (slogan == null || slogan == '') {
                        alert('Please enter a slogan.');
                        return;
                    }

                    $.ajax({
                        url: 'admin.setSystemSettingBasic',
                        type: 'POST',
                        data: {
                            userid: userid,
                            domain: domain,
                            dashboard: dashboard,
                            slogan: slogan,
                        },
                        async: false,
                        success: function (data) {
                            if (data.msg == "ok") {
                                var title = dashboard + "-" + slogan;
                                $('head title[id="dashboard_title"]').text(title);
                                alert(pgtxt_dbsaved);
                            }
                        },
                        error: function (jqXHR, errdata, errorThrown) {
                            console.log(errdata);
                        },
                    });
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        }//method

    }
</script>
