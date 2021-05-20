<template>
    <div class="header d-print-none">
        <div class="header-container">

            <div class="header-left">
                <ul class="navbar-nav">
                    <li class="nav-item navigation-toggler">
                        <a href="#" class="nav-link">
                            <i class="ti-menu"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="header-left-icons">
                <ul class="navbar-nav">

                   <!-- <li class="nav-item  fav-SCitemsDropdownList">
                        <a href="#" class="nav-link" style="padding: 0;" id="SCitemsDropdownList" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span class="p-2 cursor-pointer feather-icon select-none relative">
                                   <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';">
                                </span>
                        </a>
                        <div class="dropdown-menu  shadow animated&#45;&#45;grow-in"  style="min-width:14rem"  aria-labelledby="SCitemsDropdownList" id="faveritelists">

                        </div>
                    </li>-->
                    <li class="nav-item fav-SCitemsDropdownList" id="SCitemsDropdownList" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="flex">
                        <span class="cursor-pointer  ml-2  relative">
                        <img src="/images/icons/star_e.png" width="16" height="16" class="iconsimg" onerror="this.src ='/images/noimg.png';" style="vertical-align: top;">
                        </span>
                        </div>
                        <div class="dropdown-menu  shadow animated&#45;&#45;grow-in"  style="min-width:14rem"  aria-labelledby="SCitemsDropdownList" id="faveritelists">

                        </div>
                    </li>
                </ul>
            </div>

            <div class="header-search-full-container display-none">
                <div class="search-icon" style="flex-grow: 0">
                    <button class="btn" style="padding: 10px;">
                        <i class="ti-search"></i>
                    </button>
                </div>
                <div class="search-content" style="flex-grow: 10">
                    <input type="text" class="form-control search-input" id="search-input-val" placeholder="Search">
                </div>
                <div class="search-close" style="flex-grow: 0" @click.stop="hidenSearchPart()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x ">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>

            <div class="header-right">
                <ul class="navbar-nav">
                    <li class="nav-item btn-mobile-search">
                        <a href="#" title="Search" class="nav-link">
                            <i data-feather="search"></i>
                        </a>
                    </li>

                    <li class="nav-item">
                        <div class="flex"  @click.stop="showSearchPart()">
                            <span class="cursor-pointer navbar-fuzzy-search ml-3 feather-icon select-none relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search ">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link" title="Notifications"><!--data-toggle="dropdown"-->
                            <span class="badge badge-danger nav-link-notify">1</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#" title="Chat" class="nav-link"><!--data-toggle="dropdown"-->
                            <span class="badge badge-danger nav-link-notify">4</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        </a>
                    </li>

                    <li class="nav-item"><!--data-toggle="dropdown"-->
                        <a href="#" title="Cart" class="nav-link" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        </a>
                    </li>

                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link" title="User menu" data-toggle="dropdown" aria-expanded="false">
                            <span class="mr-2 d-sm-inline d-none">
                                <strong>{{userinfo.name}}</strong>
                            </span>
                            <figure class="avatar avatar-sm">
                                <img :src="userAvatar" class="rounded-circle" alt="avatar" data-type="user-photo" onerror="this.src ='/images/noimg.png';">
                            </figure>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-big" x-placement="top-end">
                            <div class="text-center py-4" v-bind:style="{ backgroundImage: 'url(' + this.userBackground + ')' }">
                                <figure class="avatar avatar-lg mb-3 border-0">
                                    <img :src="userAvatar" class="rounded-circle" alt="image" data-type="user-photo" onerror="this.src ='/images/noimg.png';">
                                </figure>
                                <h5 class="mb-0">{{userinfo.name}}</h5>
                                <h6 class="mb-0 m-t-5">{{userinfo.manager}}</h6>
                            </div>
                            <div class="list-group list-group-flush">
                                <a href="#" class="list-group-item text-center" @click.stop="SetSubMenuChange('Profile','global-user-profile')"><strong>Profile</strong></a>
                                <a href="#" class="list-group-item text-center" @click.stop="UserChat('Profile','global-user-profile')"><strong>Chat</strong></a>
                                <a href="#" class="list-group-item text-center" style="position: relative" id="a-language-container" @click.stop="selectLanguage()"><strong>Language</strong>
                                    <div style="display: none">{{defaultlang}}</div>
                                    <div style="display: none">{{changelang}}</div>



                                </a>
                                <a href="adminsignout" class="list-group-item text-danger text-center">Sign Out!</a>
                            </div>


                        </div>
                    </li>
                </ul>
            </div>

        </div>

        <div id="suggestions-container" style="position: relative; float: left; width: 100%; margin: 5px 0 0 0;">

        </div>

        <div class="dropdown-menu dropdown-menu-right shadow animated&#45;&#45;grow-in" id="SClangDropdownList" style="position: absolute;display: none" aria-labelledby="SClangDropdown">

        </div>

    </div>
</template>
<style>
    .text-center.py-4{
        background-size: cover !important;
        background-repeat: no-repeat;
    }
</style>

<script>
    import lang_module from '../assets/jsfunc/lang_module.js'
    import i18n from '../langs/index';
    import axios from 'axios'
    import nav_module from "../assets/jsfunc/nav_module";
    import  myjs from '../assets/jsfunc/mjs_module';
    var coutryLists=[];
    var search_txts=[];

    export default {
        name:'SearchCompo',
        data () {
            return {
                userinfo : '',
                userAvatar: ('/uploads/images/someone.png'),
                userBackground: ('/images/winlock.png'),// han 2020-11-11
                langlist:[],
                serverlocale:'en',
                favorites:[],
                pgtxt_profile:'',
                pgtxt_chat:'',
                pgtxt_language:'',
                pgtxt_signout:'',
            }
        },
        beforeCreate()
        {
            //console.log("SearchCompo");
        },
        created() {
            this.userinfo = nav_module.data.jsonparse(window.Laravel.userinfo);
            this.userAvatar=('/uploads/images/' +this.userinfo.photo + '');
            this.userBackground=('/uploads/images/' +this.userinfo.background + '');// han 2020-11-11
            this.langlist = nav_module.data.jsonparse(window.Laravel.langlist);
            this.serverlocale = nav_module.data.jsonparse(window.Laravel.serverlocale);
            //this.favorites = nav_module.data.jsonparse(window.Laravel.favorites);
            //console.log(this.langlist);
            coutryLists = lang_module.data.getLangCodes();
        },
        beforeMount(){
        },
        mounted(){
            // myjs_md.data.InitfavList(this.favorites,this);
            if(this.$store.getters.doChangePageStatus!=='fastreg'){
                this.init();
            }

            $("li.nav-item.dropdown").on("hide.bs.dropdown", function(){
                $('#SClangDropdownList').removeClass('show');
            });
        },
        computed: {
            defaultlang: function () {
               // i18n.locale = this.$store.state.defaultlang;
                return this.$store.state.defaultlang;
            },
            changelang: function () {
                if(this.$store.state.langstatus!='no'){
                    this.changlangList();
                    return this.$store.state.langstatus;
                }
                else
                    return this.$store.state.langstatus;
            },
            cpgtxt_profile:function () {
                return this.pgtxt_profile;
            },
            cpgtxt_chat:function () {
                return this.pgtxt_chat;
            },
            cpgtxt_language:function () {
                return this.pgtxt_language;
            },
            cpgtxt_signout:function () {
                return this.pgtxt_signout;
            },
        },
        watch: {

        },
        methods: {
            changlangList: function () {
                var langlist =  lang_module.data.getStoreLangList();
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
                        tag +='<span class="iti__country-name">'+name+'</span>';
                        tag +='</a>';
                    }
                    catch(e){
                        console.log("Error::changlang=>"+e);
                    }
                }
                $('#SClangDropdownList').html(tag);
                this.$store.dispatch('LangChange','no');
                var vueobj=this;

            },
            init: function () {
                this.$store.dispatch('SaveUserinfo', this.userinfo);
                var locale =lang_module.data.getLang();//from user local;
                locale = lang_module.data.getShurtLang(locale);
                this.GenerateLang(this.langlist, locale);

                var lanTag = document.getElementById("a-language-container");
                var pos_left = lanTag.offsetLeft;
                var pos_top = lanTag.offsetLeft;
                var dlg = document.getElementById("SClangDropdownList");
                dlg.style.marginRight = pos_left + 360 + 'px';
                dlg.style.marginTop = pos_top + 240 + 'px';
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
                        tag +='<span class="iti__country-name">'+name2+'</span>';
                        tag +='</a>';
                        $('#SClangDropdownList').append(tag);
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
                    tag +='<span class="iti__country-name">'+name+'</span>';
                    //$('#SClangDropdownBtn').html(tag);
                    //$('#SClangDropdownBtn').removeClass('dropdown-toggle');
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
                    tag +='<span class="iti__country-name">'+name+'</span>';

                    $('#SClangDropdownList').removeClass('show');
                    lang_module.data.setSystemLang(iso);

                    var footer_lang='';
                    footer_lang +='<div class="iti__flag-box">';
                    footer_lang +='<div class="iti__flag iti__'+iso+'"></div>';
                    footer_lang +='</div>';
                    $('#dashboard-selected-country').html(footer_lang);
                });
            },
            SetSubMenuChange:function (selectedMenu,pid) {
                var ppp = selectedMenu+"|"+pid;
                this.$store.dispatch('ChangePageStatus', 'profile');
                this.$store.dispatch('SetSubMenuChange', ppp);
                $(".navigation .navigation-menu-tab a[data-menu-target]").removeClass('active');
                $(".navigation .navigation-menu-body a").removeClass('active');
                $(".small-navigation-toggler").trigger('click');

                this.$store.dispatch('ChangeNavigation', 'small-navigation');
                $('body').attr('class', 'small-navigation');
            },
            searchReady(){
                var vueOBJ=this;
                var lang = this.$store.getters.doDefaultLang;
                $.ajax({
                    url: 'admin.getSiteContentsBylocale',
                    data  : {
                        iso: lang
                    },
                    type: 'POST',
                    success: function (data) {
                        if(data.msg=="ok")
                        {
                            search_txts=[];
                            var list = data.list;
                            for (var i = 0; i < list.length; i++) {
                                var item = list[i];
                                var str_type = item.str_type;
                                var str_key = item.str_key;
                                var str_cont = item.str_cont;
                                var str_link = item.str_link;
                                var contentKey = str_type + '_' + str_key;
                                var pg_link = "";
                                if (str_link !== undefined && str_link !== 'undefined' && str_link !== null && str_link !== '')
                                    pg_link = str_link.split('_')[1];
                                else
                                    pg_link = '';
                                var obj = { value: str_cont, data:[str_type ,pg_link] };
                                search_txts.push(obj);
                            }
                            search_txts = $.makeArray(search_txts);
                            search_txts = $.map(search_txts, function (item) {
                                 var str_type=item.data[0];
                                var link = [];
                                 if(item.data[1]!=='')
                                     link=item.data[1].split('-');
                                 var cate='';
                                 if(str_type==='mu')
                                 {
                                     cate='Main Menu';
                                 }
                                 else if (str_type==='musu')
                                 {
                                     var sustr='page menu';
                                     if(link.length > 1)
                                         sustr=link[0];
                                     cate=sustr;
                                 }
                                 else if (str_type==='mususu')
                                 {
                                     var sustr='page menu';
                                     if(link.length > 2)
                                         sustr=link[0]+'/'+link[1];
                                     cate=sustr;

                                 }
                                 else if (str_type==='musususu')
                                 {
                                     var sustr='page menu';
                                     if(link.length > 3)
                                         sustr=link[0]+'/'+link[1]+'/'+link[2];
                                     cate=sustr;
                                 }
                                 else if (str_type==='pgtxt')
                                 {
                                     cate='text of page';
                                 }
                                 else if (str_type==='btntxt')
                                 {
                                     cate='button text of page';
                                 }
                                 else if (str_type==='pgctl')
                                 {
                                     cate='controller of page';
                                 }
                                return { value: item.value, data: { category: cate , datas:item.data } };
                            });
                            $('#search-input-val').devbridgeAutocomplete({
                                lookup: search_txts,
                                lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
                                    if(suggestion.value!==undefined){
                                        return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1;
                                    }
                                },
                                showNoSuggestionNotice: true,
                                groupBy: 'category',
                                appendTo: '#suggestions-container',
                                onSelect: function (suggestion) {
                                    if(suggestion.data.datas.length > 0)
                                    {
                                        var mu=suggestion.data.datas[0];
                                        var pname="";
                                        var selectedMenu='';
                                        var pid='';
                                        if(mu==='mu')
                                        {
                                            pname=suggestion.data.datas[1];
                                            nav_module.data.menuChange(pname);
                                            vueOBJ.$store.dispatch('SetMenuChange', pname);
                                        }
                                        else if(mu==='musu')
                                        {
                                             selectedMenu = suggestion.value;
                                             pid=suggestion.data.datas[1];
                                            let m_mu=pid.split('-')[0];
                                            nav_module.data.menuChange(m_mu);
                                            let aaa = {smenu:0, ssmenu:0};
                                            aaa =  nav_module.data.exstingChildMenu(pid, 1);
                                            if(aaa.smenu < 1)//더이상 자식메뉴가 없다면 내용이 보여야 한다.
                                            {
                                                nav_module.data.submenuChange(pid);

                                                var ppp = selectedMenu+"|"+pid;
                                                vueOBJ.$store.dispatch('SetSubMenuChange', ppp);
                                            }
                                            else
                                            {
                                                nav_module.data.submenuDropdown(pid);
                                            }
                                        }
                                        else if(mu==='mususu')
                                        {
                                            /* 머리부의 account을 눌렀다가 새롭게 들어올떄 필요함. */
                                             selectedMenu = suggestion.value;
                                             pid=suggestion.data.datas[1];
                                            let m_mu=pid.split('-')[0];
                                            let s_mu=pid.split('-')[1];
                                            nav_module.data.menuChange(m_mu);
                                            let cnum =  nav_module.data.exstingChildMenu(pid);
                                            nav_module.data.submenuChange(m_mu+'-'+s_mu);
                                            let aaa = {smenu:0, ssmenu:0};
                                            aaa =  nav_module.data.exstingChildMenu(pid, 2);
                                            if(aaa.ssmenu < 1) {
                                                nav_module.data.subsubmenuChange(pid);

                                                var ppp = selectedMenu + "|" + pid;
                                                vueOBJ.$store.dispatch('SetSubMenuChange', ppp);
                                            }
                                            else
                                            {
                                                nav_module.data.submenuDropdown(pid);
                                            }
                                        }
                                        else if(mu==='musususu')
                                        {
                                            /* 머리부의 account 눌렀다가 새롭게 들어올떄 필요함. */
                                             selectedMenu = suggestion.value;
                                             pid=suggestion.data.datas[1];
                                            let m_mu=pid.split('-')[0];
                                            let s_mu=pid.split('-')[1];
                                            let ss_mu=pid.split('-')[2];
                                            nav_module.data.menuChange(m_mu);
                                            nav_module.data.submenuChange(m_mu+'-'+s_mu);
                                            nav_module.data.subsubmenuChange(m_mu+'-'+s_mu+'-'+ss_mu);
                                            $("a#"+pid).attr('class','active');
                                            var ppp = selectedMenu + "|" + pid;
                                            vueOBJ.$store.dispatch('SetSubMenuChange', ppp);
                                        }
                                        vueOBJ.hidenSearchPart();
                                    }
                                }
                            });
                            /****************/
                        }
                        else
                        {
                            console.log(data.msg);
                        }
                    },
                    error: function (jqXHR, errdata, errorThrown) {
                        console.log(errdata);
                    }
                });
            },
            showSearchPart(){
                this.searchReady();

                $('.header-left, .header-right, .header-left-icons').addClass('display-none');

                $('.header-search-full-container').removeClass('display');
                $('.header-search-full-container').addClass('active');
                $('ul.navbar-nav.ml-auto').addClass('display-none');

            },
            hidenSearchPart(){
                $('.header-left, .header-right, .header-left-icons').removeClass('display-none');
                $('.header-search-full-container').removeClass('active');
                $('.header-search-full-container').addClass('display');
                $('ul.navbar-nav.ml-auto').removeClass('display-none');
                $('#search-input-val').val('');
            },
            selectLanguage(){
                $('#SClangDropdownList').addClass('show');

            }

        }
    }
</script>
