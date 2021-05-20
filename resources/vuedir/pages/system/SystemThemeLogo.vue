<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmususu_system_theme_logo}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_system}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_theme}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmususu_system_theme_logo}}
                        &nbsp;&nbsp; <a href="#" id="system-theme-logo-fav" data-status="off" data-page-info="Logo_system-theme-logo">
                        &nbsp;&nbsp;    <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>

            </div>
        </div>

        <div class="row m-t-15">
            <div class="col-md-12">

                <div class="card">

                    <div class="card-body">
                        <form method="post" enctype="multipart/form-data" name="stl_frm_flw" id="stl_frm_flw">
                            <input type="hidden" name="stl_frm_no" value="1">
                            <input type="hidden" name="server" value="hk"><!-- //ckd -->
                            <input type="file" name="uploadflw" id="uploadflw" style="visibility: hidden;width: 1px;height: 1px;">
                            <h6 class="card-title m-b-20">{{cpgtxt_logo}} 1</h6>
                            <div class="colr_pickr_min m-b-20" style="padding:0 100px;align-items:center;">

                                <div id="sfl-flw-img-preview" class="stl_flw_previewpanel" @click="PreviewLogoFlw()">
                                    <!-- <img id="sfl-img-tag" src="#" alt="preview image" style="width: 100%;height:auto"  onerror="this.src ='/images/noimg.png';"/>-->
                                </div>

                                <div style="flex-grow: 1; height:120px; margin-left: 30px;">
                                    <div class="row">
                                        <div class="col-12" style="margin:10px 30px 10px 50px">
                                            <div id="system-lgup-btn" class="btn btn-outline-light  dash-my-btn-0  lang_tab active p-l-r-30" @click="SaveLogoFlw()">
                                                <span>{{cbtntxt_upload}}</span>
                                            </div>
                                        </div>
                                        <div class="col-12" style="margin:15px 30px 10px 50px">
                                            <div style="font-size:15px;">
                                                <span style="color:#aa0d00">*</span>{{cpgtxt_imgupcondition}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="colr_pickr_min m-b-20" style="padding:0 100px; align-items:center;">
                                <div style="width:130px;">{{cpgtxt_image}} {{cpgtxt_size}}</div>
                                <div style="flex-grow: 1">
                                    <div  style="width: 120px; margin-left: 65px;">
                                        <input type="text" class="form-control" style="width: 100%;" readonly="readonly" placeholder="" aria-label="stl_flw_sz_slt" id="stl_flw_sz_slt" name="stl_flw_sz_slt" aria-describedby="basic-addon2">

                                        <!-- <select class="form-control" id="stl_flw_sz_slt" name="stl_flw_sz_slt">
                                             <option value="74*24">74*22</option>
                                             <option value="148*48">135*44</option>
                                         </select>-->
                                    </div>
                                </div>
                            </div>
                            <div class="colr_pickr_min" style="padding:0 100px;align-items:center;">
                                <div style="width:130px;">{{cpgtxt_image}} {{cpgtxt_style}}</div>
                                <div style="flex-grow: 1;">
                                    <div  style="width: 95%; margin-left: 65px;">
                                        <select class="form-control" id="stl_flw_st_slt" name="stl_flw_st_slt">
                                            <!--<option value="flower">Style (flower)</option>-->
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div style="width: 100%; height:3px; border:0; border-top:1px solid #e6e6e6;"></div>

                    <div class="card-body">
                        <form method="post" enctype="multipart/form-data" name="stl_frm_star" id="stl_frm_star">
                            <input type="hidden" name="stl_frm_no" value="2">
                            <input type="hidden" name="server" value="hk"><!-- //ckd -->
                            <input type="file" name="uploadstar" id="uploadstar" style="visibility: hidden;width: 1px;height: 1px;">
                            <h6 class="card-title m-b-20">Logo 2</h6>
                            <div class="colr_pickr_min m-b-20" style="padding:0 100px;align-items:center;">
                                <div id="sfl-star-img-preview" class="stl_star_previewpanel" @click="PreviewLogoStar()">

                                </div>
                                <div style="flex-grow: 1; height:120px; margin-left: 30px;">
                                    <div class="row">
                                        <div class="col-12" style="margin:10px 30px 10px 50px">
                                            <div id="system-lgup-btn1" class="btn btn-outline-light  dash-my-btn-0  lang_tab active p-l-r-30" @click="SaveLogoStar()">
                                                <span>{{cbtntxt_upload}}</span>
                                            </div>
                                        </div>
                                        <div class="col-12" style="margin:15px 30px 10px 50px">
                                            <div id="stfleftcolorpicker_value1" style="font-size:15px;"><span style="color:#aa0d00">*</span>{{cpgtxt_imgupcondition}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="colr_pickr_min m-b-20" style="padding:0 100px; align-items:center;">
                                <div style="width:130px;">{{cpgtxt_image}} {{cpgtxt_size}}</div>
                                <div style="flex-grow: 1">
                                    <div style="width: 120px; margin-left: 65px;">
                                        <input type="text" class="form-control" style="width: 100%;"  readonly="readonly" placeholder="" aria-label="stl_star_sz_slt" id="stl_star_sz_slt" name="stl_star_sz_slt" aria-describedby="basic-addon2">

                                        <!-- <select class="form-control" id="stl_star_sz_slt" name="stl_star_sz_slt">
                                             <option value="36*32">36*32</option>
                                             <option value="72*64">72*64</option>
                                         </select>-->
                                    </div>
                                </div>
                            </div>
                            <div class="colr_pickr_min" style="padding:0 100px;align-items:center;">
                                <div style="width:130px;">{{cpgtxt_image}} {{cpgtxt_style}}</div>
                                <div style="flex-grow: 1;">
                                    <div  style="width: 95%; margin-left: 65px;">
                                        <select class="form-control" id="stl_star_st_slt" name="stl_star_st_slt">
                                            <!--<option value="36*32">Style (Star)</option>-->
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div style="width: 100%; height:3px; border:0; border-top:1px solid #e6e6e6;"></div>

                    <div class="card-body">
                        <form method="post" enctype="multipart/form-data" name="stl_frm_favico" id="stl_frm_favico">
                            <input type="hidden" name="stl_frm_no" value="3">
                            <input type="hidden" name="server" value="hk"><!-- //ckd -->
                            <input type="file" name="uploadfavico" id="uploadfavico" style="visibility: hidden;width: 1px;height: 1px;">
                            <h6 class="card-title m-b-20">Favicon</h6>
                            <div class="colr_pickr_min m-b-20" style="padding:0 100px;align-items:center;">
                                <div id="sfl-favico-img-preview" class="stl_favico_previewpanel" @click="PreviewLogoFavico()">

                                </div>
                                <div style="flex-grow: 1; height:120px; margin-left: 30px;">
                                    <div class="row">
                                        <div class="col-12" style="margin:10px 30px 10px 50px">
                                            <div id="system-favico-btn1" class="btn btn-outline-light  dash-my-btn-0  lang_tab active p-l-r-30" @click="SaveLogoFavico()">
                                                <span>{{cbtntxt_upload}}</span>
                                            </div>
                                        </div>
                                        <div class="col-12" style="margin:15px 30px 10px 50px">
                                            <div id="stfleftcolorpicker_favico" style="font-size:15px;"><span style="color:#aa0d00">*</span>{{cpgtxt_imgupcondition}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="colr_pickr_min m-b-20" style="padding:0 100px; align-items:center;">
                                <div style="width:130px;">{{cpgtxt_image}} {{cpgtxt_size}}</div>
                                <div style="flex-grow: 1">
                                    <div style="width: 120px; margin-left: 65px;">
                                        <input type="text" class="form-control" style="width: 100%;"  readonly="readonly" placeholder="" aria-label="stl_favico_sz_slt" id="stl_favico_sz_slt" name="stl_favico_sz_slt" aria-describedby="basic-addon2">

                                        <!-- <select class="form-control" id="stl_star_sz_slt" name="stl_star_sz_slt">
                                             <option value="36*32">36*32</option>
                                             <option value="72*64">72*64</option>
                                         </select>-->
                                    </div>
                                </div>
                            </div>
                            <div class="colr_pickr_min" style="padding:0 100px;align-items:center;">
                                <div style="width:130px;">{{cpgtxt_image}} {{cpgtxt_style}}</div>
                                <div style="flex-grow: 1;">
                                    <div  style="width: 95%; margin-left: 65px;">
                                        <select class="form-control" id="stl_favico_st_slt" name="stl_favico_st_slt">
                                            <!--<option value="36*32">Style (Star)</option>-->
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>

    </div>
</template>
<style>
    .stl_flw_previewpanel,
    .stl_star_previewpanel,
    .stl_favico_previewpanel{
        width:120px;
        height:120px;
        background-color: #efefef;
        border: 1px solid #efefef;
        border-radius:8px;
        cursor: pointer;
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: contain; /* Resize the background image to cover the entire container */
    }
</style>
<script>
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var permss;

    function sendLogDataToServer (n,fromData){
        if (permss.pcreate == 1 || permss.pwrite == 1) {
            $.ajax({
                url: 'admin.logimgdata.upload',
                type: 'POST',
                data: fromData,
                async: false,
                success: function (data) {
                    // data = JSON.parse(data);
                    if(data.msg=="ok"){
                        if(data.dbid)
                        {
                            var filename = data.filename;
                            var size = data.size;
                            var style = data.style;
                            var iw="";
                            var ih="";

                            if(size!=null && size.indexOf('*') > -1){
                                iw = size.split('*')[0];
                                ih = size.split('*')[1];
                            }

                            if(n == 1)
                            {
                                if(ih=="" || iw=="")
                                {
                                    iw="74";
                                    ih="22";
                                }
                                $('#logoflw').attr('src','/images/'+filename);
                                $('#logoflw').css({'width':iw+'px','height':ih+'px'});
                            }
                            else if(n == 2)
                            {
                                if(ih=="" || iw=="")
                                {
                                    iw="36";
                                    ih="32";
                                }
                                $('#logostar').attr('src','/images/'+filename);
                                $('#logostar').css({'width':iw+'px','height':ih+'px'});
                                $('#logostar_s').attr('src','/images/'+filename);
                                $('#logostar_s').css({'width':iw+'px','height':ih+'px'});
                            }
                            else if(n == 3)
                            {
                                if(ih=="" || iw=="")
                                {
                                    iw="36";
                                    ih="32";
                                }
                                $('head link[id="dashboard_icon"]').attr('href', '/images/'+filename);
                            }
                        }
                        else
                        {
                            alert("Error : save in database");
                        }
                    }
                    else
                    {
                        alert(data.message);
                    }

                },
                error: function (jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                },
                cache: false,
                contentType: false,
                processData: false
            });
        }
        else
            myjs.data.showAlert('pgtxt_notpermission');
    }

    export default {
        data () {
            return {
                logoinfo : '',
                pageid:'system-theme-logo-fav',
                mususu_system_theme_logo:'',
                mu_system:'',
                musu_system_theme:'',
                pgtxt_logo:'',
                btntxt_upload:'',
                pgtxt_image:'',
                pgtxt_size:'',
                pgtxt_imgupcondition:'',
                pgtxt_style:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        created() {
            // this.logoinfo = nav_module.data.jsonparse(window.Laravel.logoinfo);
        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmu_system:function() {
                return this.mu_system
            },
            cmususu_system_theme_logo:function() {
                return this.mususu_system_theme_logo
            },
            cmusu_system_theme:function() {
                return this.musu_system_theme
            },
            cpgtxt_logo:function() {
                return this.pgtxt_logo
            },
            cbtntxt_upload:function() {
                return this.btntxt_upload
            },
            cpgtxt_image:function() {
                return this.pgtxt_image
            },
            cpgtxt_size:function() {
                return this.pgtxt_size
            },
            cpgtxt_imgupcondition:function() {
                return this.pgtxt_imgupcondition
            },
            cpgtxt_style:function() {
                return this.pgtxt_style
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
                return this.$store.state.contentchange;
            }

        },
        beforeMount(){
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

            this.getSiteLogoFiles();
            $("#uploadflw").change(function(){
                if (this.files && this.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $('.stl_flw_previewpanel').css('background-image', 'url("'+e.target.result+'")');
                    }

                    reader.readAsDataURL(this.files[0]); // convert to base64 string
                }
            });
            $("#uploadstar").change(function(){
                if (this.files && this.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $('.stl_star_previewpanel').css('background-image', 'url("'+e.target.result+'")');
                    }

                    reader.readAsDataURL(this.files[0]); // convert to base64 string
                }
            });
            $("#uploadfavico").change(function(){
                if (this.files && this.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $('.stl_favico_previewpanel').css('background-image', 'url("'+e.target.result+'")');
                    }

                    reader.readAsDataURL(this.files[0]); // convert to base64 string
                }
            });
            $('#stl_frm_flw').submit(function(event){
                event.preventDefault();
                var formData = new FormData($("#stl_frm_flw")[0]);
                sendLogDataToServer(1,formData);
            });
            $('#stl_frm_star').submit(function(event){
                event.preventDefault();
                var formData = new FormData($("#stl_frm_star")[0]);
                sendLogDataToServer(2,formData);
            });
            $('#stl_frm_favico').submit(function(event){
                event.preventDefault();
                var formData = new FormData($("#stl_frm_favico")[0]);
                sendLogDataToServer(3,formData);
            });
        },
        methods : {
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
            PreviewLogoFlw(){
                $("#uploadflw").trigger('click');
            },
            SaveLogoFlw(){
                if($("#uploadflw").val() == "")
                {
                    alert('Please select a file to upload');return;
                }
                else
                    $('#stl_frm_flw').submit();
            },
            PreviewLogoStar(){
                $("#uploadstar").trigger('click');
            },
            SaveLogoStar(){
                if($("#uploadstar").val() == "")
                {
                    alert('Please select a file to upload');return;
                }
                else
                    $('#stl_frm_star').submit();
            },
            PreviewLogoFavico(){
                $("#uploadfavico").trigger('click');
            },
            SaveLogoFavico(){
                if($("#uploadfavico").val() == "")
                {
                    alert('Please select a file to upload');return;
                }
                else
                    $('#stl_frm_favico').submit();
            },
            getSiteLogoFiles(){
                $.ajax({
                    url: 'admin.getSiteLogoFiles',
                    data  : {srv:'hk'}, //ckd
                    type: 'POST',
                    success: function (data) {
                        if(data.msg=="ok")
                        {
                            var logflw_name = data.logflw_name;
                            var logflw_size = data.logflw_size;
                            var logflw_style = data.logflw_style;
                            var stylelists = data.stylelists;

                            //console.log(stylelists);

                            var fiw="74";
                            var fih="22";
                            if(logflw_size!=null && logflw_size.indexOf('*') > -1){
                                fiw = logflw_size.split('*')[0];
                                fih = logflw_size.split('*')[1];
                            }

                            var logstar_name = data.logstar_name;
                            var logstar_size = data.logstar_size;
                            var logstar_style = data.logstar_style;

                            var siw="36";
                            var sih="32";
                            if(logstar_size!=null && logstar_size.indexOf('*') > -1){
                                siw = logstar_size.split('*')[0];
                                sih = logstar_size.split('*')[1];
                            }

                            var favico_name = data.favico_name;
                            var favico_size = data.favico_size;
                            var favico_style = data.favico_style;

                            var faiw="36";
                            var faih="32";
                            if(favico_size!=null && favico_size.indexOf('*') > -1){
                                faiw = favico_size.split('*')[0];
                                faih = favico_size.split('*')[1];
                            }


                            $('.stl_flw_previewpanel').css('background-image', 'url("/images/'+logflw_name+'")');
                            $('.stl_star_previewpanel').css('background-image', 'url("/images/'+logstar_name+'")');
                            $('.stl_favico_previewpanel').css('background-image', 'url("/images/'+favico_name+'")');

                            $('#stl_flw_sz_slt').val(logflw_size);
                            // $('#stl_flw_st_slt').val(logflw_style);

                            $('#stl_star_sz_slt').val(logstar_size);
                            // $('#stl_star_st_slt').val(logstar_style);

                            $('#stl_favico_sz_slt').val(favico_size);

                            if(stylelists.length > 0)
                            {
                                $('#stl_flw_st_slt').append('<option value="">Select</option>');
                                $('#stl_star_st_slt').append('<option value="">Select</option>');
                                $('#stl_favico_st_slt').append('<option value="">Select</option>');
                                for(var i=0; i<stylelists.length; i++){
                                    var lst=stylelists[i];
                                    var selected="";
                                    if(logflw_size == lst.size){
                                        selected="selected";
                                        $('#stl_flw_sz_slt').val(lst.size);
                                    }

                                    var tag ='<option value="'+lst.size+'"  '+selected+' >'+lst.style+'</option>';

                                    $('#stl_flw_st_slt').append(tag);
                                }

                                for(var i=0; i<stylelists.length; i++){
                                    var lst=stylelists[i];
                                    var selected="";
                                    if(logstar_size == lst.size){
                                        selected="selected";
                                        $('#stl_star_sz_slt').val(lst.size);
                                    }

                                    var tag ='<option value="'+lst.size+'"  '+selected+' >'+lst.style+'</option>';

                                    $('#stl_star_st_slt').append(tag);
                                }

                                for(var i=0; i<stylelists.length; i++){
                                    var lst=stylelists[i];
                                    var selected="";
                                    if(favico_size == lst.size){
                                        selected="selected";
                                        $('#stl_favico_sz_slt').val(lst.size);
                                    }

                                    var tag ='<option value="'+lst.size+'"  '+selected+' >'+lst.style+'</option>';

                                    $('#stl_favico_st_slt').append(tag);
                                }

                            }
                            else {
                                var tag ='<option value="">Empty Style</option>';
                                $('#stl_flw_st_slt').html(tag);
                                $('#stl_star_st_slt').html(tag);
                                $('#stl_favico_st_slt').html(tag);
                            }

                            $('#stl_flw_st_slt').change(function(){
                                var value=$(this).val();
                                if(value=='') return;

                                var stylename=$("#stl_flw_st_slt option:selected").text();
                                $('#stl_flw_sz_slt').val(value);

                                var iw='74';
                                var ih='25';

                                if(value.indexOf('*') > -1){
                                    iw = value.split('*')[0];
                                    ih = value.split('*')[1];
                                }
                                $('#logoflw').css({'width':iw+'px','height':ih+'px'});

                                $.ajax({
                                    method: "POST",
                                    url: "admin.SeletedChangeLogImgInfo",
                                    data: {
                                        frm_no: 1
                                        , server:'hk' //ckd
                                        , logosize:value
                                        , logostyle:stylename
                                    },
                                    statusCode: {
                                        404: function() {
                                            console.log( "Not found page." );
                                        }
                                    },
                                    success: function(response) {
                                        if(response.msg=="ok" && response.dbid==1){

                                        }
                                        else {
                                            alert('Error changing Logo status');
                                        }
                                    },
                                    error: function (jqXHR, errdata, errorThrown) {
                                        console.log(errdata);
                                    }
                                });

                            });

                            $('#stl_star_st_slt').change(function(){
                                var value=$(this).val();
                                if(value=='') return;

                                var stylename=$("#stl_star_st_slt option:selected").text();
                                $('#stl_star_sz_slt').val(value);

                                var iw='36';
                                var ih='32';

                                if(value.indexOf('*') > -1){
                                    iw = value.split('*')[0];
                                    ih = value.split('*')[1];
                                }
                                $('#logostar').css({'width':iw+'px','height':ih+'px'});

                                $.ajax({
                                    method: "POST",
                                    url: "admin.SeletedChangeLogImgInfo",
                                    data: {
                                        frm_no: 2
                                        , server:'hk' //ckd
                                        , logosize:value
                                        , logostyle:stylename
                                    },
                                    statusCode: {
                                        404: function() {
                                            console.log( "Not found page." );
                                        }
                                    },
                                    success: function(response) {
                                        if(response.msg=="ok" && response.dbid==1)
                                        {

                                        }
                                        else {
                                            alert('Error changing Logo status');
                                        }
                                    },
                                    error: function (jqXHR, errdata, errorThrown) {
                                        console.log(errdata);
                                    }
                                });

                            });

                            $('#stl_favico_st_slt').change(function(){
                                var value=$(this).val();
                                if(value=='') return;

                                var stylename=$("#stl_favico_st_slt option:selected").text();
                                $('#stl_favico_sz_slt').val(value);

                                var iw='16';
                                var ih='16';

                                if(value.indexOf('*') > -1){
                                    iw = value.split('*')[0];
                                    ih = value.split('*')[1];
                                }

                                $('head link[id="dashboard_icon"]').css({'width':iw+'px','height':ih+'px'});

                                $.ajax({
                                    method: "POST",
                                    url: "admin.SeletedChangeLogImgInfo",
                                    data: {
                                        frm_no: 3
                                        , server:'en' //ckd
                                        , logosize:value
                                        , logostyle:stylename
                                    },
                                    statusCode: {
                                        404: function() {
                                            console.log( "Not found page." );
                                        }
                                    },
                                    success: function(response) {
                                        if(response.msg=="ok" && response.dbid==1)
                                        {

                                        }
                                        else {
                                            alert('Error changing Logo status');
                                        }
                                    },
                                    error: function (jqXHR, errdata, errorThrown) {
                                        console.log(errdata);
                                    }
                                });

                            });

                        }
                        else
                        {
                            alert(data.msg);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            }

        }
    }
</script>
