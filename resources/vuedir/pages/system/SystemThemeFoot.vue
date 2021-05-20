<template>
    <div class="content">
        <div style="display: none">{{contentchange}}</div>
        <div class="page-header">
            <div class="page-title">
                <h3>{{cmusu_system_theme_foot}}</h3>
                <span style="color:#656262">&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        &nbsp;&nbsp; {{cmu_system}} &nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_theme}}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{{cmusu_system_theme_foot}}
                        &nbsp;&nbsp; <a href="#" id="system-theme-foot-fav" data-status="off" data-page-info="Foot_system-theme-foot">
                        &nbsp;&nbsp; <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                          </a>
                    </span>

            </div>
        </div>

        <div class="row m-t-15">
            <div class="col-md-12">

                <div class="card">

                    <div class="card-body">
                        <h6 class="card-title m-b-20">{{cpgtxt_style}}({{cpgtxt_left}})</h6>
                        <div class="colr_pickr_min m-b-20" style="padding:0 100px;align-items:center;">
                            <div style="width:130px;">{{cpgtxt_font}} {{cpgtxt_color}}</div>
                            <div style="flex-grow: 1">
                                <div style="display: flex;">
                                    <div id="stfleftcolorpicker" class="m-r-15" style="width: 70px; cursor: pointer"></div>
                                    <div id="stfleftcolorpicker_value">#000000</div>
                                </div>
                            </div>
                        </div>
                        <div class="colr_pickr_min m-b-20" style="padding:0 100px; align-items:center;">
                            <div style="width:130px;">{{cpgtxt_font}} {{cpgtxt_size}}</div>
                            <div style="flex-grow: 1">
                                <div id="stfleftfontsize" class="m-r-15" style="width: 200px;">
                                    <select class="form-control" id="stfleftfontsize_s">
                                        <option value="11">11px</option>
                                        <option value="12">12px</option>
                                        <option value="14">14px</option>
                                        <option value="16">16px</option>
                                        <option value="18">18px</option>
                                        <option value="20">20px</option>
                                        <option value="22">22px</option>
                                        <option value="24">24px</option>
                                        <option value="26">26px</option>
                                        <option value="28">28px</option>
                                        <option value="30">30px</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="colr_pickr_min" style="padding:0 100px;align-items:center;">
                            <div style="width:130px;">{{cpgtxt_font}} {{cpgtxt_content}}</div>
                            <div style="flex-grow: 1">
                                <input type="text" class="form-control" id="stfleftfontcont" style="width:60%"   value="@2020 WAAUP">
                            </div>
                        </div>
                    </div>
                    <div style="width: 100%; height:3px; border:0; border-top:1px solid #e6e6e6"></div>

                    <div class="card-body">
                        <h6 class="card-title m-b-20">{{cpgtxt_style}}({{cpgtxt_center}})</h6>
                        <div class="colr_pickr_min m-b-20" style="padding:0 100px;align-items:center;">
                            <div style="width:130px;">{{cpgtxt_font}} {{cpgtxt_color}}</div>
                            <div style="flex-grow: 1">
                                <div style="display: flex;">
                                    <div id="stfcentercolorpicker" class="m-r-15" style="width: 70px; cursor: pointer"></div>
                                    <div id="stfcentercolorpicker_value">#000000</div>
                                </div>
                            </div>
                        </div>
                        <div class="colr_pickr_min m-b-20" style="padding:0 100px; align-items:center;">
                            <div style="width:130px;">{{cpgtxt_font}} {{cpgtxt_size}}</div>
                            <div style="flex-grow: 1">
                                <div id="stfcenterfontsize" class="m-r-15" style="width: 200px;">
                                    <select class="form-control" id="stfcenterfontsize_s">
                                        <option value="11">11px</option>
                                        <option value="12">12px</option>
                                        <option value="14">14px</option>
                                        <option value="16">16px</option>
                                        <option value="18">18px</option>
                                        <option value="20">20px</option>
                                        <option value="22">22px</option>
                                        <option value="24">24px</option>
                                        <option value="26">26px</option>
                                        <option value="28">28px</option>
                                        <option value="30">30px</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="colr_pickr_min" style="padding:0 100px;align-items:center;">
                            <div style="width:130px;">{{cpgtxt_font}} {{cpgtxt_content}}</div>
                            <div style="flex-grow: 1">
                                <input type="text" id="stfcenterfontcont" class="form-control" style="width:60%" value="" >
                            </div>
                        </div>
                    </div>
                    <div style="width: 100%; height:3px; border:0; border-top:1px solid #e6e6e6"></div>

                    <div class="card-body">
                        <h6 class="card-title m-b-20">{{cpgtxt_style}}({{cpgtxt_right}})</h6>
                        <div class="colr_pickr_min m-b-20" style="padding:0 100px;align-items:center;">
                            <div style="width:130px;">{{cpgtxt_font}} {{cpgtxt_color}}</div>
                            <div style="flex-grow: 1">
                                <div style="display: flex;">
                                    <div id="stfrightcolorpicker" class="m-r-15" style="width: 70px; cursor: pointer"></div>
                                    <div id="stfrightcolorpicker_value">#000000</div>
                                </div>
                            </div>
                        </div>
                        <div class="colr_pickr_min m-b-20" style="padding:0 100px; align-items:center;">
                            <div style="width:130px;">{{cpgtxt_font}} {{cpgtxt_size}}</div>
                            <div style="flex-grow: 1">
                                <div id="stfrightfontsize" class="m-r-15" style="width: 200px;">
                                    <select class="form-control" id="stfrightfontsize_s">
                                        <option value="11">11px</option>
                                        <option value="12">12px</option>
                                        <option value="14">14px</option>
                                        <option value="16">16px</option>
                                        <option value="18">18px</option>
                                        <option value="20">20px</option>
                                        <option value="22">22px</option>
                                        <option value="24">24px</option>
                                        <option value="26">26px</option>
                                        <option value="28">28px</option>
                                        <option value="30">30px</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="colr_pickr_min" style="padding:0 100px;align-items:center;">
                            <div style="width:130px;">{{cpgtxt_font}} {{cpgtxt_content}}</div>
                            <div style="flex-grow: 1">
                                <input type="text" id="stfrightfontcont" class="form-control" style="width:60%" value="WAAUP(SINGAPORE)INTERNATIONAL PTE.LTD">
                            </div>
                        </div>
                    </div>

                    <div class="card-body text-right">
                        <div id="system-theme-footsave-btn" class="btn btn-outline-light  dash-my-btn-0  lang_tab active p-l-r-30 m-r-15" @click="Savefooterstyles()">
                            <span>{{cbtntxt_savechange}}</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
</template>
<script>
    import axios from 'axios'
    import myjs from "../../assets/jsfunc/mjs_module";
    import nav_module from "../../assets/jsfunc/nav_module";

    var permss;

    function colorButtons(){
        const stfleftcolorpicker = document.getElementById('stfleftcolorpicker');
        let pickerLeft = new ColorPicker(stfleftcolorpicker, '#000000');
        stfleftcolorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            //console.log(color);
            $('#stfleftcolorpicker_value').text(color);
        });
        const stfcentercolorpicker = document.getElementById('stfcentercolorpicker');
        let pickerCenter = new ColorPicker(stfcentercolorpicker, '#000000');
        stfcentercolorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            //console.log(color);
            $('#stfcentercolorpicker_value').text(color);
        });
        const stfrightcolorpicker = document.getElementById('stfrightcolorpicker');
        let pickerRight = new ColorPicker(stfrightcolorpicker, '#000000');
        stfrightcolorpicker.addEventListener('colorChange', function (event) {
            // This will give you the color you selected
            const color = event.detail.color.hexa;
            //console.log(color);
            $('#stfrightcolorpicker_value').text(color);
        });
    }
    var leftmaxtext=3;
    var centmaxtext=3;
    var rightmaxtext=3;

    export default {
        data(){
            return {
                pageid:'system-theme-foot-fav',
                musu_system_theme_foot:'',
                mu_system:'',
                musu_system_theme:'',
                pgtxt_style:'',
                pgtxt_left:'',
                pgtxt_font:'',
                pgtxt_color:'',
                pgtxt_size:'',
                pgtxt_content:'',
                pgtxt_center:'',
                pgtxt_right:'',
                btntxt_savechange:'',
                pgtxt_notpermission:'',
                pgtxt_notification:'',
            }
        },
        created() {

        },
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            },
            cmusu_system_theme_foot: function () {
                return this.musu_system_theme_foot
            },
            cmu_system: function () {
                return this.mu_system
            },
            cmusu_system_theme: function () {
                return this.musu_system_theme
            },
            cpgtxt_style: function () {
                return this.pgtxt_style
            },
            cpgtxt_left: function () {
                return this.pgtxt_left
            },
            cpgtxt_font: function () {
                return this.pgtxt_font
            },
            cpgtxt_color: function () {
                return this.pgtxt_color
            },
            cpgtxt_size: function () {
                return this.pgtxt_size
            },
            cpgtxt_content: function () {
                return this.pgtxt_content
            },
            cpgtxt_center: function () {
                return this.pgtxt_center
            },
            cpgtxt_right: function () {
                return this.pgtxt_right
            },
            cbtntxt_savechange: function () {
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

            $("#stfleftfontcont, #stfcenterfontcont, #stfrightfontcont").on("keyup", function (){
                var str=$.trim($(this).val());
                var len=str.length;
                var objid=$(this).attr("id");
                if(objid=='stfleftfontcont')
                {
                    if(len > leftmaxtext){
                        alert('Cannot enter text because it has more than the specified number.');
                        var astr = str.substr(0,leftmaxtext);
                        $(this).val(astr);
                    }

                }
                else if(objid=='stfcenterfontcont'){
                    if(len > centmaxtext){
                        alert('Cannot enter text because it has more than the specified number.');
                        var astr = str.substr(0,centmaxtext);
                        $(this).val(astr);
                    }

                }
                else if(objid=='stfrightfontcont'){
                    if(len > rightmaxtext){
                        alert('Cannot enter text because it has more than the specified number.');
                        var astr = str.substr(0,rightmaxtext);
                        $(this).val(astr);
                    }
                }
            });
            colorButtons();
            this.getfootstyle();
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
            getfootstyle(){
                axios.post('admin.stf_getfootstyle')
                    .then((response) => {
                        var msg = response.data.msg;
                        //console.log(type);
                        if(msg==="ok")
                        {
                            var list = response.data.list;
                            //console.log(list.centcont);
                            if(list !== null && list !== '')
                            {
                                $('#stfleftcolorpicker_value').text(list.leftclr);
                                $('#stfleftcolorpicker').css({'background':list.leftclr});//#666666
                                $('#stfleftfontsize_s option[value="'+list.leftsize+'"]').attr("selected", "selected");

                                if(list.leftcont == null)
                                    $('#stfleftfontcont').val('');
                                else
                                    $('#stfleftfontcont').val(list.leftcont);


                                $('#stfcentercolorpicker_value').text(list.centclr);
                                $('#stfcentercolorpicker').css({'background':list.centclr});//#666666
                                $('#stfcenterfontsize_s option[value="'+list.centsize+'"]').attr("selected", "selected");

                                if(list.centcont == null)
                                    $('#stfcenterfontcont').val('');
                                else
                                    $('#stfcenterfontcont').val(list.centcont);


                                $('#stfrightcolorpicker_value').text(list.rightclr);
                                $('#stfrightcolorpicker').css({'background':list.rightclr});//#666666
                                $('#stfrightfontsize_s option[value="'+list.rightsize+'"]').attr("selected", "selected");

                                if(list.rightcont == null)
                                    $('#stfrightfontcont').val('');
                                else
                                    $('#stfrightfontcont').val(list.rightcont);

                                leftmaxtext = list.leftmaxtext;
                                centmaxtext = list.centmaxtext;
                                rightmaxtext = list.rightmaxtext;
                                //alert(leftmaxtext);
                            }
                        }
                        else
                        {
                            console.log(msg);
                        }

                    }).catch(function (error) {
                    console.log(error);
                })
            },
            Savefooterstyles(){
                if (permss.pcreate == 1 || permss.pwrite == 1) {
                    let stfleftcolorpicker_value = $('#stfleftcolorpicker_value').text();
                    let stfleftfontsize_s = $('#stfleftfontsize_s').val();
                    let stfleftfontcont = $('#stfleftfontcont').val();

                    let stfcentercolorpicker_value = $('#stfcentercolorpicker_value').text();
                    let stfcenterfontsize_s = $('#stfcenterfontsize_s').val();
                    let stfcenterfontcont = $('#stfcenterfontcont').val();

                    let stfrightcolorpicker_value = $('#stfrightcolorpicker_value').text();
                    let stfrightfontsize_s = $('#stfrightfontsize_s').val();
                    let stfrightfontcont = $('#stfrightfontcont').val();

                    let postData = {
                        leftclr: stfleftcolorpicker_value,
                        leftsize: stfleftfontsize_s,
                        leftcont: stfleftfontcont,

                        centclr: stfcentercolorpicker_value,
                        centsize: stfcenterfontsize_s,
                        centcont: stfcenterfontcont,

                        rightclr: stfrightcolorpicker_value,
                        rightsize: stfrightfontsize_s,
                        rightcont: stfrightfontcont
                    }
                    axios.post('admin.stf_savefootstyle', postData)
                        .then((response) => {
                            var msg = response.data.msg;
                            //console.log(type);
                            if (msg == "ok") {

                                $('#footer-left a').text(stfleftfontcont);
                                $('#footer-left a').css({
                                    'color': stfleftcolorpicker_value,
                                    'font-size': stfleftfontsize_s + 'px'
                                });//#666666

                                if ($('#footer-center')) {
                                    $('#footer-center a').text(stfcenterfontcont);
                                    $('#footer-center a').css({
                                        'color': stfcentercolorpicker_value,
                                        'font-size': stfcenterfontsize_s + 'px'
                                    });//#666666
                                }

                                $('#footer-right a').text(stfrightfontcont);
                                $('#footer-right a').css({
                                    'color': stfrightcolorpicker_value,
                                    'font-size': stfrightfontsize_s + 'px'
                                });//#666666

                            } else {
                                $('#footer-left a').css({'color': '#666666', 'font-size': '11px'});//#666666

                                if ($('#footer-center'))
                                    $('#footer-center a').css({'color': '#666666', 'font-size': '11px'});//#666666

                                $('#footer-right a').css({'color': '#666666', 'font-size': '11px'});//#666666
                            }

                        }).catch(function (error) {
                        console.log(error);
                    })
                }
                else
                    myjs.data.showAlert('pgtxt_notpermission');
            }
        }
    }
</script>
