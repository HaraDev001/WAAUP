/*
function commond
*/
function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}

function IsPhoneNumber(phone) {
    var regex = /^([0-9])+([0-9])+$/;
    if (!regex.test(phone)) {
        return false;
    } else {
        return true;
    }
}


function alramMSG(txt) {
    $("#myAlertModal #myAlertModalbody").text(txt);
    $("#myAlertModal").modal('show');
}

function adminpageImgzoom(name, htm)
{
	$("#myImgViewModal #imgviewmodelname").text(name);
    $("#myImgViewModal #myImgViewModalbody").html(htm);
    $("#myImgViewModal").modal('show');
}

 function myescape(s)
 {
   return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
 };

 function getToken(name)
 {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + myescape(name) + '=([^;]*)'));
    return ab = match ? match[1] : null;
 }

function htmldecodejs(tag) {
    var ret = tag.replace(/&gt;/g, '>');
    ret = ret.replace(/&lt;/g, '<');
    ret = ret.replace(/&quot;/g, '"');
    ret = ret.replace(/&apos;/g, "'");
    ret = ret.replace(/&amp;/g, '&');
    return ret;
}
