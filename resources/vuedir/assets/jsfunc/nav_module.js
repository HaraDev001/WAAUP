let menuList=[
    {menu:'dashboards',submenus:[
        {menu:'analytics',submenus:[]},
        {menu:'store',submenus:[]},
        {menu:'duser',submenus:[]}
    ]},
    {menu:'apps',submenus:[
        {menu:'website',submenus:[
            {menu:'fields',submenus:[
                {menu:'image',submenus:[]},
                {menu:'text',submenus:[]},
                {menu:'number',submenus:[]},
                {menu:'mobile',submenus:[]},
                {menu:'email',submenus:[]},
                {menu:'date',submenus:[]},
            ]},
            {menu:'appearance',submenus:[
                {menu:'theme',submenus:[]},
                {menu:'head',submenus:[]},
            ]},
            {menu:'module',submenus:[
                {menu:'weblanguage',submenus:[]},
            ]},
            {menu:'tools',submenus:[
                {menu:'slider',submenus:[]},
                {menu:'menu',submenus:[]},
                {menu:'view',submenus:[]},
            ]},
            {menu:'template',submenus:[]},
        ]},
        {menu:'E-commerce',submenus:[
            {menu:'management',submenus:[]},
        ]},
        {menu:'Work',submenus:[]},
        {menu:'resources',submenus:[]}
    ]},
    {menu:'users',submenus:[
        {menu:'organization',submenus:[]},
        {menu:'individual',submenus:[]}
    ]},
    {menu:'webs',submenus:[
        {menu:'wesglobal',submenus:[
            {menu:'appearance',submenus:[
                {menu:'theme',submenus:[]},
                {menu:'head',submenus:[]},
                {menu:'foot',submenus:[]}
            ]},
            {menu:'menus',submenus:[
                {menu:'main',submenus:[]},
                {menu:'foot',submenus:[]}
            ]},
            {menu:'pages',submenus:[
                {menu:'index',submenus:[]},
                /*{menu:'nopage',submenus:[]},
                {menu:'register',submenus:[]},
                {menu:'login',submenus:[]},
                {menu:'content',submenus:[]},
				{menu:'pagesetting',submenus:[]},
                {menu:'basic',submenus:[]},*/
                {menu:'management',submenus:[]}
            ]},
            {menu:'modules',submenus:[]},
            {menu:'tools',submenus:[]},
            {menu:'social',submenus:[
                {menu:'setting',submenus:[]}
            ]},
            {menu:'media',submenus:[
                {menu:'Video',submenus:[]},
                {menu:'Image',submenus:[]},
                {menu:'Audio',submenus:[]}
            ]},
            {menu:'configuration',submenus:[
                {menu:'Language',submenus:[]},
                {menu:'General',submenus:[]},
                {menu:'Frontpages',submenus:[]},
                {menu:'Translation',submenus:[]},
                {menu:'File Manager',submenus:[]}
            ]},
        ]}
    ]},
    {menu:'others',submenus:[
        {menu:'emailtemplates',submenus:[
            {menu:'basic',submenus:[]},
            {menu:'alert',submenus:[]},
            {menu:'billing',submenus:[]},
        ]},
        {menu:'menulevel',submenus:[]}
    ]},
    {menu:'system',submenus:[
        {menu:'setting',submenus:[
            {menu:'basic',submenus:[]},
            {menu:'language',submenus:[
                {menu:'lang',submenus:[]},
                {menu:'trans',submenus:[]}
            ]},
        ]},
        {menu:'theme',submenus:[
            {menu:'foot',submenus:[]},
            {menu:'logo',submenus:[]},
        ]},
        {menu:'suser',submenus:[
            {menu:'registered',submenus: []},
            {menu:'account',submenus:[]},
            {menu:'page',submenus:[]},
            {menu:'management',submenus:[
                {menu:'users',submenus:[]},
                {menu:'roles',submenus:[]},
            ]},
            {menu:'security',submenus:[]},
            {menu:'permissions',submenus:[
                {menu:'roles',submenus:[]},
                {menu:'users',submenus:[]},
            ]},
        ]},
        {menu:'bdw',submenus:[

        ]},

    ]},
];


function  menuChange(strval)
{
    //$('a').attr('data-menu-target')
    $("a[data-menu-target!='#"+strval+"']").removeClass('active');
    $("a[data-menu-target='#"+strval+"']").addClass('active');
    $(".navigation-menu-body > ul[id!='"+strval+"']").css('display','none');
    $(".navigation-menu-body > ul[id='"+strval+"']").css('display','block');
    //$(".navigation-menu-body > ul[id='"+strval+"'] > li:nth-child(2) > a").addClass('active');

    /*if(strval=='webs'){
        $('.menu-tab-icon.my-tab-icon-webs > img').attr('src','/images/wes_on.png');
    }
    else
    {
        $('.menu-tab-icon.my-tab-icon-webs > img').attr('src','/images/wes_off.png');
    }*/
}

function submenuChange_old(pid) {
    var m_mu=pid.split('-')[0];
    $('a[id^="'+m_mu+'-"]').attr('class','');
    $("a#"+pid).attr('class','active');
    for (let i = 0; i < menuList.length; i++){
        let menuobj = menuList[i];
        if(menuobj.menu==m_mu)
        {
            let num = menuobj.submenus.length;
            for(let j = 0; j < num; j++)
            {
                let submenuobj = menuobj.submenus[j];
                let cnumber = submenuobj.submenus.length;
                if(submenuobj.menu!==s_mu)
                {
                    let oulid=m_mu+'-'+submenuobj.menu;
                    $('#' + oulid + ' ').removeClass('active');
                    var ouuu=oulid+'-'+'container';
                    $('#' + oulid + ' > i').removeClass('rotate-in');
                    $('#' + ouuu).hide(500);
                    //$('#' + ouuu).css('display', 'none');
                    $('#' + ouuu+' a').removeClass('active');
                }
            }
        }
    }
}
function submenuChange(pid) {
    let m_mu=pid.split('-')[0];
    let s_mu=pid.split('-')[1];

    $('a[id^="'+m_mu+'-"]').attr('class','');

    $('a[id^="'+m_mu+'-"] > i').removeClass('rotate-in');
    $('ul[id^="'+m_mu+'-"]').hide(500);

    $("a#"+pid).attr('class','active');

}

function submenuDropdown_old(pid) {
    let m_mu=pid.split('-')[0];
    let s_mu=pid.split('-')[1];

    for (let i = 0; i < menuList.length; i++)
    {
        let menuobj = menuList[i];
        if(menuobj.menu==m_mu)
        {

            let num = menuobj.submenus.length;
            for (let j = 0; j < num; j++)
            {
                let submenuobj = menuobj.submenus[j];
                let cnumber = submenuobj.submenus.length;
                if (submenuobj.menu == s_mu)
                {
                    var ulid = pid + '-' + 'container';
                    //if($('#'+pid+' ').hasClass('active'))//이미 액티브되였다면
                    if ($('ul[id="' + pid + '-container"]').is(":visible"))
                    {
                        $('#' + pid + ' > i').removeClass('rotate-in');
                        $('#' + ulid).hide(500);
                        //$('#' + ulid).css('display', 'none');
                        //$('#' + ulid).toggle(1000);
                        $('#' + ulid + ' a').removeClass('active');
                        $('#' + pid + ' ').addClass('active');
                    }
                    else
                    {
                        $('#' + pid + ' ').addClass('active');
                        $('#' + pid + ' > i').addClass('rotate-in');
                        $('#' + ulid).show(500);
                        //$('#' + ulid).css('display', 'block');
                        //$('#' + ulid).toggle(1000);
                        $('#' + ulid + ' a').removeClass('active');
                    }

                }
                else
                {
                    let oulid = m_mu + '-' + submenuobj.menu;
                    $('#' + oulid + ' ').removeClass('active');

                    var ouuu = oulid + '-' + 'container';
                    $('#' + oulid + ' > i').removeClass('rotate-in');
                    $('#' + ouuu).hide(500);
                    //$('#' + ouuu).css('display', 'none');
                    // $('#' + ouuu).toggle(1000);
                    $('#' + ouuu + ' a').removeClass('active');
                }
            }
        }

    }


}
function submenuDropdown(pid, depth) {
    let m_mu=pid.split('-')[0];
    let s_mu=pid.split('-')[1];
    if(depth==1)
    {
       // console.log("m_mu="+m_mu+"  s_mu="+s_mu);
        $('ul#'+m_mu+' a[id^="' + m_mu +'-"]').attr('class','');
        $('ul#'+m_mu+' a[id^="' + m_mu +'-"]  > i').removeClass('rotate-in');
        $('ul#'+m_mu+' ul[id^="' + m_mu +'-"]').hide(500);

        if ($('ul[id="' + pid + '-container"]').is(":visible"))
        {
            $('a#'+pid).attr('class','active');
            $('a#' + pid + ' > i').removeClass('rotate-in');
            $('ul[id="' + pid +'-container"]').hide(500);
            $('ul[id="' + pid +'-container"] a').removeClass('active');

        }
        else
        {
            $('a#'+pid).attr('class','active');
            $('a#'+pid+' > i').addClass('rotate-in');
            $('ul[id="' + pid +'-container"]').show(500);
            $('ul[id="' + pid +'-container"] a').removeClass('active');
        }

    }
    else
    if(depth==2)
     {
            let ss_mu=pid.split('-')[2];
            let ms_id=m_mu + "-" + s_mu;
            let mss_id=m_mu + "-" + s_mu + "-" + ss_mu;
            $('ul[id="' + ms_id +'-container"] a[id^="' + ms_id +'-"]').attr('class','');
            $('ul[id="' + ms_id +'-container"] a[id^="' + ms_id +'-"]  > i').removeClass('rotate-in');
            $('ul[id="' + ms_id +'-container"] ul[id^="' + ms_id +'-"]').hide(500);

            if ($('ul[id="' + pid + '-container"]').is(":visible"))
            {
                $('a#'+ms_id).attr('class','active');
                $('a#'+pid).attr('class','active');

                $('a#' + pid + ' > i').removeClass('rotate-in');
                $('ul[id="' + pid +'-container"]').hide(500);
                $('ul[id="' + pid +'-container"] a').removeClass('active');

            }
            else
            {
                $('a#'+ms_id).attr('class','active');
                $('a#'+pid).attr('class','active');

                $('a#'+pid+' > i').addClass('rotate-in');
                $('ul[id="' + pid +'-container"]').show(500);
            }

     }
    else if(depth==3){
        let ss_mu=pid.split('-')[2];
        let sss_mu=pid.split('-')[3];

        let ms_id=m_mu + "-" + s_mu;
        let mss_id=m_mu + "-" + s_mu + "-" + ss_mu;
        let msss_id=m_mu + "-" + s_mu + "-" + ss_mu + "-" + sss_mu;

        $('ul[id="' + mss_id +'-container"] a[id^="' + mss_id +'-"]').attr('class','');
        $('ul[id="' + mss_id +'-container"] a[id^="' + mss_id +'-"]  > i').removeClass('rotate-in');
        $('ul[id="' + mss_id +'-container"] ul[id^="' + mss_id +'-"]').hide(500);

        //system-suser-management-users
        $('a#'+ms_id).attr('class','active');
        $('a#'+mss_id).attr('class','active');
        $('a#'+pid).attr('class','active');

        //$('a#'+pid+' > i').addClass('rotate-in');
        //$('ul[id="' + pid +'-container"]').show(500);
    }

}


function subsubmenuChange(pid) {
   // console.log(pid);
    var m_mu=pid.split('-')[0];
    var s_mu=pid.split('-')[1];
    var container_ul = m_mu+'-'+s_mu+'-container';
    $("ul#"+container_ul+" li a ").attr('class','');
    $("a#"+pid).attr('class','active');
    var dli = $("a#"+pid).attr('data-list');

    if(dli==undefined){
        $("ul#"+container_ul+" li > a > i").removeClass('rotate-in');
        $("ul#"+container_ul+" li > ul ").hide(500);
    }

}
/* ex:system-suser; */
function exstingChildMenu(pid, depth) {
    if(depth ==0)
        return {smenu:0,ssmenu:0};

    let mcnt=pid.split('-').length;
    let _mus=pid.split('-');
    let sNum=0;
    let ssNum=0;

    // let result={'smenu':sNum,'ssmenu':ssNum};
    for (let i = 0; i < menuList.length; i++)
    {
        let menuobj = menuList[i];
        if(menuobj.menu==_mus[0])//dashborad,apps,users,webs,others,system
        {
            let num = menuobj.submenus.length;
            //alert(num);
            for(let j = 0; j < num; j++)
            {
                let submenuobj = menuobj.submenus[j];
                if(mcnt > 0 && submenuobj.menu==_mus[1]) //suser
                {
                    sNum = submenuobj.submenus.length;
                    if(depth ==1)
                        break;
                    else
                    {
                        for(let k = 0; k <sNum; k++)
                        {
                            let ssmenu=submenuobj.submenus[k].menu;//profile,page,management
                            if(mcnt > 1 && ssmenu == _mus[2])
                            {
                                let sssmenulen=submenuobj.submenus[k].submenus.length;
                                ssNum = sssmenulen;
                                if(depth ==2)
                                    break;
                                else
                                {
                                    for(let m = 0; m <sssmenulen; m++){
                                        let ssmenuname=submenuobj.submenus[k].submenus[m].menu;//Users,Roles,Permissions
                                        //   alert(ssmenuname);
                                    }
                                }
                            }
                        }
                    }


                }
            }

            break;
        }
    }

    let result={smenu:sNum,ssmenu:ssNum};
    return result;
}


var c=0;

var wideControllerNavBar =  function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'370px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'width':'50px','margin-right':'30px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'65%','padding':'5px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'20px','height':'2px'});

}

var wideControllerNavBarsecond =  function(){
    //var aaa =$('body').attr('class');
    //console.log("bodyclass" + aaa);
    $('body:not(.small-navigation) .navigation').css({'width':'400px','background-color':'white'});
    $('body:not(.small-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body:not(.small-navigation) .navigation .navigation-menu-tab').css({'width':'90px','margin-right':'30px'});
    $('body:not(.small-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body:not(.small-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body:not(.small-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body:not(.small-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'50%','padding':'11px 0'});

    $('body:not(.small-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body:not(.small-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'24px','height':'4px'});
}

var wideControllerNavBarfirst =  function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'400px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'margin-right':'30px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'50%','padding':'11px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'24px','height':'4px'});

}

var wideControllerNavBar_pre =  function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'400px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'margin-right':'30px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'flex','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'50%','padding':'11px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'block'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'24px','height':'4px'});

}


var shrinkControllerNavBar = function(){
    $('body.small-navigation:not(.horizontal-navigation) .navigation').css({'width':'80px','background-color':'white'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-header .small-navigation-toggler').css({'display':'none'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab').css({'margin-right':'0px'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body').css({'display':'none','background-color':'white','overflow':'hidden'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a').css({'display':'flex'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a > span, body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a .sub-menu-arrow').css(
        {
            'display': 'inherit !important'
        });
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .menu-tab-icon').css({'width':'65%','padding':'5px 0'});

    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-body ul li a span:not(.nav-link-icon):not(.badge)').css({'display':'none'});
    $('body.small-navigation:not(.horizontal-navigation) .navigation .navigation-menu-tab ul li a .thisname.m-line img').css({'width':'20px','height':'2px'});
}


var jsonparse =function(str){
    var pos = str.indexOf('&quot;');
    if(pos < 0) return str;
    var searchRegExp = /&quot;/gi;
    var replaceWith = '"';
    var rstr = str.replace(searchRegExp,replaceWith);
    rstr = JSON.parse(rstr);
    return rstr;
}

var jsonparse_one =function(str){
    var pos = str.indexOf('"');
    if(pos < 0) return str;
    var searchRegExp = /"/gi;
    var replaceWith = '';
    var rstr = str.replace(searchRegExp,replaceWith);
    return rstr;
}

export default {
    data:{
        menuChange,
        submenuChange,
        subsubmenuChange,
        exstingChildMenu,
        submenuDropdown,
        wideControllerNavBar,
        wideControllerNavBarfirst,
        wideControllerNavBarsecond,
        shrinkControllerNavBar,
        jsonparse,
	jsonparse_one
    }
}
