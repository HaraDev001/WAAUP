
function  menuChange(strval)
{
    //$('a').attr('data-menu-target')
    $("a[data-menu-target!='#"+strval+"']").removeClass('active');
    $("a[data-menu-target='#"+strval+"']").addClass('active');
    $(".navigation-menu-body > ul[id!='"+strval+"']").css('display','none');
    $(".navigation-menu-body > ul[id='"+strval+"']").css('display','block');
    //$(".navigation-menu-body > ul[id='"+strval+"'] > li:nth-child(2) > a").addClass('active');
}

function submenuChange(pid) {
    var prestr=pid.split('-')[0];
    $("ul#"+prestr+" li a ").attr('class','');
    $("a#"+pid).attr('class','active');

    let m_mu=pid.split('-')[0];
    let t_mu=pid.split('-')[1];
    for (let i = 0; i < menuList.length; i++){
        let menuobj = menuList[i];
        if(menuobj.menu==m_mu){
            let num = menuobj.submenus.length;
            for(let j = 0; j < num; j++){
                let submenuobj = menuobj.submenus[j];
                let cnumber = submenuobj.submenus.length;
                if(submenuobj.menu!=t_mu){
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

function subsubmenuChange(pid) {
    var prestr0=pid.split('-')[0];
    var prestr1=pid.split('-')[1];
    var containerul = prestr0+'-'+prestr1+'-container';
    $("ul#"+containerul+" li a ").attr('class','');
    $("a#"+pid).attr('class','active');
}

function exstingChildMenu(pid) {
    let m_mu=pid.split('-')[0];
    let s_mu=pid.split('-')[1];
    let returnNum=0;

    for (let i = 0; i < menuList.length; i++)
    {
        let menuobj = menuList[i];
        if(menuobj.menu==m_mu)
        {
            let num = menuobj.submenus.length;
            for(let j = 0; j < num; j++){
                let submenuobj = menuobj.submenus[j];
                if(submenuobj.menu==s_mu) {
                    returnNum = submenuobj.submenus.length;
                    break;
                }
            }

            break;
        }
    }

    return returnNum;
}

function submenuDropdown(pid) {
    let m_mu=pid.split('-')[0];
    let t_mu=pid.split('-')[1];
    for (let i = 0; i < menuList.length; i++)
    {
        let menuobj = menuList[i];
        if(menuobj.menu==m_mu){
            let num = menuobj.submenus.length;
            for(let j = 0; j < num; j++){
                let submenuobj = menuobj.submenus[j];
                let cnumber = submenuobj.submenus.length;
                if(submenuobj.menu==t_mu)
                {
                    var ulid = pid + '-' + 'container';

                    if($('#'+pid+' ').hasClass('active'))//이미 액티브되였다면
                    {
                        var css = $('#' + ulid).css('display');
                        if(css=='none')
                        {
                            $('#' + pid + ' > i').addClass('rotate-in');
                            $('#' + ulid).show(500);
                            //$('#' + ulid).css('display', 'block');
                            //$('#' + ulid).toggle(1000);
                            $('#' + ulid+' a').removeClass('active');
                        }
                        else
                        {
                            $('#' + pid + ' > i').removeClass('rotate-in');
                            $('#' + ulid).hide(500);
                            //$('#' + ulid).css('display', 'none');
                            //$('#' + ulid).toggle(1000);
                            $('#' + ulid+' a').removeClass('active');
                        }

                    }
                    else
                    {
                        $('#' + pid + ' ').addClass('active');
                        $('#' + pid + ' > i').addClass('rotate-in');
                        $('#' + ulid).show(500);
                        //$('#' + ulid).css('display', 'block');
                        //$('#' + ulid).toggle(1000);
                        $('#' + ulid+' a').removeClass('active');
                    }

                }
                else
                {
                    let oulid=m_mu+'-'+submenuobj.menu;
                    $('#' + oulid + ' ').removeClass('active');

                    var ouuu=oulid+'-'+'container';
                    $('#' + oulid + ' > i').removeClass('rotate-in');
                    $('#' + ouuu).hide(500);
                    //$('#' + ouuu).css('display', 'none');
                    // $('#' + ouuu).toggle(1000);
                    $('#' + ouuu+' a').removeClass('active');
                }
            }
        }
    }

}
