<template>
    <footer class="content-footer">
        <div class="d-flex align-items-center justify-content-between w-100">
            <div id="footer-left"><a href="/home" target="_blank">&nbsp;</a></div>
            <div id="footer-center"><a href="/home" target="_blank">&nbsp;</a></div>
            <div id="footer-right">
                <a href="#" class="nav-link">&nbsp;</a>
            </div>
            <div>
                <div id="dashboard-selected-country" @click.stop="selectLanguage()" style="cursor: pointer;">

                </div>

                <div class="dropdown-menu dropdown-menu-right shadow animated&#45;&#45;grow-in" id="FooterLangDropdownList" style="position: absolute;display: none" aria-labelledby="FooterLangDropdown">

                </div>
            </div>
         </div>
    </footer>
</template>
<style>
    @media (min-width: 1200px){
        body.small-navigation:not(.horizontal-navigation) .layout-wrapper .content-wrapper .content-body .content-footer {
            padding-left: 110px;
        }
    }

    .content-footer{
        z-index: 200;
        position: fixed;
        width: 100%;
        right: 0;
        bottom: 0;
        background-color: white;
        padding: 20px 30px 20px 430px;
        margin-left:0
    }
    #FooterLangDropdownList{
        min-width: 50px;
        margin-right: 15px;
    }
    .dropdown-menu .dropdown-item{
        padding: 5px 5px !important;
    }
    .iti__flag-box, .iti__country-name{
        margin-right:0px;
    }
</style>
<script>
    import axios from 'axios'
    import myjs_md from "../assets/jsfunc/mjs_module";
    import myjs from '../assets/jsfunc/mjs_module';
    import nav_module from "../assets/jsfunc/nav_module";
    import lang_module from '../assets/jsfunc/lang_module.js'

    var coutryLists=[];
    var margin_top = '';
    var show_lang = false;

    function getLanguage(lang){
        $.ajax({
            url: 'admin.getServerBrowserLanguage',
            data: {
                lang: lang
            },
            type: 'POST',
            success: function (data) {
                if (data.msg === "ok") {
                    lang_module.data.setSystemLang(data.dashLang);
                    var tag='';
                    tag +='<div class="iti__flag-box">';
                    tag +='<div class="iti__flag iti__'+lang_module.data.getSystemLang()+'"></div>';
                    tag +='</div>';
                    //tag +='<span class="iti__country-name">'+name+'</span>';
                    $('#dashboard-selected-country').html(tag);
                } else {
                    console.log(data.msg);
                }
            },
            error: function (jqXHR, errdata, errorThrown) {
                console.log(errdata);
            }
        });
    }

    export default {
        name: "FooterCompo",
        data () {
            return {
                leftstyle: '',
                centerstyle: '',
                rightstyle: '',
                langlist:[],
                serverlocale:'en',
            }
        },
        created() {
            this.langlist = nav_module.data.jsonparse(window.Laravel.langlist);
            this.serverlocale = nav_module.data.jsonparse(window.Laravel.serverlocale);
            coutryLists = lang_module.data.getLangCodes();
        },
        computed: {

        },
        beforeMount(){
        },
        mounted() {
            var userLang = navigator.language || navigator.userLanguage;
            getLanguage(userLang.substr(0, 2));

            setTimeout(this.getfootstyle,1000);

            this.init();

            $(document).on('click', '*', function () {
                $('#FooterLangDropdownList').removeClass('show');
                show_lang = false;
            });
        },
        methods: {
            getfootstyle(){
                $.ajax({
                    url: 'admin.stf_getfootstyle',
                    type: 'POST',
                    async: true,
                    success: function (data)
                    {
                        var msg = data.msg;
                       if(msg==="ok")
                        {
                            var list = data.list;
                            //console.log(list);
                            if(list !== null && list !== '')
                            {
                            $('#footer-left a').text(list.leftcont);
                            $('#footer-left a').css({'color':list.leftclr,'font-size':list.leftsize+'px'});//#666666

                            if($('#footer-center')){
                                $('#footer-center a').text(list.centcont);
                                $('#footer-center a').css({'color':list.centclr,'font-size':list.centsize+'px'});//#666666
                            }

                            $('#footer-right a').text(list.rightcont);
                            $('#footer-right a').css({'color':list.rightclr,'font-size':list.rightsize+'px'});//#666666
                            }
                            else
                            {
                            $('#footer-left a').css({'color':'#666666','font-size':'11px'});//#666666

                            if($('#footer-center'))
                                $('#footer-center a').css({'color':'#666666','font-size':'11px'});//#666666

                            $('#footer-right a').css({'color':'#666666','font-size':'11px'});//#666666
                            }
                        }
                        else
                        {
                            console.log(msg);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            init: function () {
                var locale =lang_module.data.getLang();//from user local;
                locale = lang_module.data.getShurtLang(locale);
                this.GenerateLang(this.langlist, locale);
                var langlist = lang_module.data.getStoreLangList();
                margin_top = parseInt(langlist.length * 26) + 70;
                $('#FooterLangDropdownList').css('margin-top', '-' + margin_top + 'px');
            },
            changlangList: function () {
                var langlist = lang_module.data.getStoreLangList();
                var tag='';
                for(var i=0; i<langlist.length; i++)
                {
                    let cidx = langlist[i];
                    if(cidx===undefined || cidx==='empty')
                        continue;
                    try{
                        if(cidx.indexOf('-') < 0)
                            continue;
                        let iso=cidx.split('-')[0];
                        let name=cidx.split('-')[2];
                        tag +='<a class="dropdown-item" id="scEnabledLangs_'+cidx+'" href="#">';
                        tag +='<div class="iti__flag-box">';
                        tag +='<div class="iti__flag iti__'+iso+'"></div>';
                        tag +='</div>';
                        tag +='</a>';
                    }
                    catch(e){
                        console.log("Error::changlang=>"+e);
                    }
                }
                $('#FooterLangDropdownList').html(tag);
                this.$store.dispatch('LangChange','no');

            },
            GenerateLang(langlist, locale){
                let vueOBJ=this;
                //SCLangContainer
                var tlist=[];
                if(langlist.length > 0)
                {
                    /* start setting default */
                    var iso2="";
                    var name="";
                    for (var i = 0; i < coutryLists.length; i++)
                    {
                        var nameobj = coutryLists[i].name;
                        name = $.trim(nameobj.split('(')[0]);
                        var dialCode = $.trim(coutryLists[i].dialCode);
                        iso2 = $.trim(coutryLists[i].iso2);
                        var ckid = iso2 + '-' + dialCode;
                        if(locale===iso2)
                        {
                            break;
                        }
                    }

                    tlist=[];
                    for(var i=0; i<langlist.length; i++)
                    {
                        var lang = langlist[i];
                        var iso=lang.iso;
                        var name2=lang.name;
                        var cidx=iso+'-'+lang.dialcode+'-'+name2;
                        tlist[i] = cidx;

                        var tag='';
                        tag +='<a class="dropdown-item" id="scEnabledLangs_'+cidx+'" href="#">';
                        tag +='<div class="iti__flag-box">';
                        tag +='<div class="iti__flag iti__'+iso+'"></div>';
                        tag +='</div>';
                        tag +='</a>';
                        $('#FooterLangDropdownList').append(tag);
                    }

                    if(tlist.length > 0)
                        lang_module.data.setStoreLangList(tlist);
                }
                else
                {
                    var iso2="";
                    var name="";
                    var cidx="";
                    for (var i = 0; i < coutryLists.length; i++)
                    {
                        var nameobj = coutryLists[i].name;
                        name = $.trim(nameobj.split('(')[0]);
                        var dialcode = $.trim(coutryLists[i].dialCode);
                        iso2 = $.trim(coutryLists[i].iso2);
                        var ckid = iso2 + '-' + dialCode;
                        if(locale===iso2)
                        {
                            break;
                        }

                        cidx=iso2+'-'+dialcode+'-'+name;
                    }
                    tlist=[];
                    tlist[0] = cidx;
                    lang_module.data.setStoreLangList(tlist);
                    var tag='';
                    tag +='<div class="iti__flag-box">';
                    tag +='<div class="iti__flag iti__'+iso2+'"></div>';
                    tag +='</div>';
                }

                $('a[id^="scEnabledLangs_"]').click(function(){
                    var oid=$(this).attr('id');
                    var objP= oid.split('_')[1];
                    var objproperty=objP.split('-');
                    var iso=objproperty[0];
                    var dialcode=objproperty[1];
                    var name=objproperty[2];
                    myjs.data.getSiteContentsBylocalekey(vueOBJ, iso);
                    vueOBJ.$store.dispatch('DefaultLang',iso);
                    var tag='';
                    tag +='<div class="iti__flag-box">';
                    tag +='<div class="iti__flag iti__'+iso+'"></div>';
                    tag +='</div>';

                    $('#FooterLangDropdownList').removeClass('show');
                    lang_module.data.setSystemLang(iso);

                    var footer_lang='';
                    footer_lang +='<div class="iti__flag-box">';
                    footer_lang +='<div class="iti__flag iti__'+iso+'"></div>';
                    footer_lang +='</div>';
                    $('#dashboard-selected-country').html(footer_lang);
                });
            },
            selectLanguage(){
                if(!show_lang) {
                    $('#FooterLangDropdownList').addClass('show');
                    show_lang = true;
                }
                else{
                    $('#FooterLangDropdownList').removeClass('show');
                    show_lang = false;
                }
            }
        }

    }
</script>

