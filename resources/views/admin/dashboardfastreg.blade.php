<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/wes-logo.ico">
    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/fonts/fontawesome-all.min.css">
    <link rel="stylesheet" href="/fonts/ionicons.min.css">
    <link rel="stylesheet" href="/c_js/css/intlTelInput.css">
    <link rel="stylesheet" href="/css/studentmanagement.css">
    <link rel="stylesheet" href="/css/p_login_frm.css">
<!-- jQuery library -->
    <script src="/js/jquery.min.js"></script>
    <!-- Popper JS -->
    <script src="/js/popper.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="/bootstrap/js/bootstrap.min.js"></script>
    <script src="/js/common.js"></script>
    <title>FastRegister-WAAUP</title>
    <style>
        #p_login_frm_1{
            padding: 20px 10px; border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            border-radius: 12px;
        }
        #p_login_frm_1 .p_login_step_sub{
            padding: 8px 5px;
            height: auto;
            display: inline-table;
            width: 100%;
            text-align: center;
            color: rgb(5, 90, 218);
            font-size: 20px;
            font-weight: 600;
        }
        #p_login_frm_1 input{
            background-color: rgb(255, 255, 255);
            border: 1px solid rgb(206, 212, 218);
            width: 100%;
            border-radius: 5px;
            height: 35px;
        }
        #p_login_frm_1 .input-group.mb-3{
            margin-bottom:0!important;
        }
        .dropdown-item{
            padding-left: 0;
            padding-right: 0;
        }
        .fastLangDropdownList{
            margin-right: -5px;
            position: absolute;
            min-width: auto;
            display: none;
        }
        .fastLangDropdownList show{
            display: block;
        }
        .dropdown-menu .dropdown-item{
            padding: 5px 5px !important;
        }
        .iti__flag-box, .iti__country-name{
            margin-right:0px;
        }
        #fastreg_sumbit{
            width: 150px;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
        }
    </style>

</head>
<?php
    if($pageinfo != ''){
        $backimg = $pageinfo->backimg;
        $fontcolor = $pageinfo->fontcolor;
        $themecolor = $pageinfo->themecolor;
        $backcolor = $pageinfo->backcolor;
        $logoimg = $pageinfo->logoimg;
        $tiptxt = $pageinfo->tiptxt;
    }
    else{
        $backimg = '';
        $fontcolor = '#ffffff';
        $themecolor = '#104f8e';
        $backcolor = '#ffffff';
        $logoimg = '';
        $tiptxt = '';
    }
?>

<body  style="width:100%;height:100%;padding:0;margin:0">
    <div class="page-container  page-contqainer-logbk" id="page-container-logbk-reg" style="background-image: url('{{$backimg}}')">
        <script>
            var ww=document.documentElement.clientWidth;
            //var ww=window.innerWidth;
            var wh=document.documentElement.clientHeight;
            //alert(wh);
            document.getElementById('page-container-logbk-reg').style.height=""+wh+"px";
        </script>
        <!-- start part -->
        <div class="row no-gutters" id="fastregister_content">
            <div class="container  mycontainer">
                <div class="contact-clean" style="margin-top: calc(100vh/2 - 45vh);">
                    <!-- three step start -->
                    <div class="content_wrap_frm" id="person_reg_1" style="display: block">
                        <form method="post" enctype="multipart/form-data" name="p_login_frm_1" id="p_login_frm_1" style="text-align: center; background-color: {{$backcolor}}">
                            {{ csrf_field() }}
                            <div style="position: relative; margin: 0 20px;">
                                <div class="d-inline-flex">
                                    <h4 class="card-title text-center font-weight-bolder wesg_login_title" id="fastregister_title" style="color: {{$themecolor}};" >{{$contents['frtxt_fastreg']}}</h4>
                                    <div class="logocontainerLine" id="logocontainerLine" style="height: 30px; margin: 0 10px; border-right:2px solid {{$themecolor}}"></div>
                                    <img id="fast_logo" style="height: 30px;" src="{{$logoimg}}">
                                </div>
                                <div style="position: absolute; right: 0px; top: 0px;">
                                    <div id="fastreg-selected-country" style="cursor: pointer;">
                                        <div class="iti__flag-box">
                                            <div class="iti__flag iti__{{$ciso}}"></div>
                                        </div>
                                    </div>

                                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in fastLangDropdownList" id="fastLangDropdownList">
                                        @if($langlist!=null && $langlist!='')
                                            @foreach($langlist as $lang)
                                                <a class="dropdown-item" id="scEnabledLangs_{{$lang->iso}}" href="/{{$token}}/{{$lang->iso}}/fastreg">
                                                    <div class="iti__flag-box">
                                                        <div class="iti__flag iti__{{$lang->iso}}"></div>
                                                    </div>
                                                </a>
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                            </div>
                            {{--content start--}}
                            <div style="margin: 10px 10px 0px; padding-bottom: 10px; text-align: left;">

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;" id="fast_email">{{$contents['frtxt_email']}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="email" placeholder="" aria-label="email" id="email" name="email" aria-describedby="basic-addon2" class="form-control" style="width: 300px;">
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;" id="fast_username">{{$contents['frtxt_username']}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="text" placeholder="" aria-label="username" id="username" name="username" aria-describedby="basic-addon2" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group"><label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;" id="fast_name">{{$contents['frtxt_name']}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="text" placeholder="" aria-label="name" id="name" name="name" aria-describedby="basic-addon2" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px 10px 0 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102); width: 100px;" id="fast_password">{{$contents['frtxt_password']}}</label>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="password" placeholder="" aria-label="pwd1" id="pwd1" name="pwd1" aria-describedby="basic-addon2" class="form-control">
                                        </div>
                                    </div>
                                 </div>
                                <div class="row" style="padding: 0px;">
                                    <div class="col-md-12" style="padding: 0 30px;">
                                        <div id="passwordworings" style="padding:0;margin:0; width:28px;background:#bfbebe; height: 6px;float: right;border-radius: 5px;"></div>
                                    </div>
                                </div>

                                <div class="row" style="padding: 10px;">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label style="margin-top: 8px; color: rgb(102, 102, 102);" id="fast_confirmpassword">{{$contents['frtxt_confirmpassword']}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group mb-3">
                                            <input type="password" placeholder="" aria-label="pwd2" id="pwd2" name="pwd2" aria-describedby="basic-addon2" class="form-control">
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="form-group" style="text-align: center;padding: 0 13px;">
                                <button type="button" id="fastreg_sumbit" class="btn btn-primary" style=" color: {{$fontcolor}}; background-color: {{$themecolor}};">{{$contents['frtxt_register']}}</button>
                            </div>

                            <div style="text-align: right; padding-right: 25px;" class="fastreg-tip-container">
                                <i style='font-size: 18px;color: #aaa; cursor: pointer;' class='far fastreghelpicon'>&#xf059;</i>
                            </div>

                        </form>

                    </div>
                    <!-- end -->
                </div>
            </div>

        </div>
    </div>

    <!-- The Modal start-->
    <div class="modal fade" id="myAlertModal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title" style="color: #055ada">通知</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body" id="myAlertModalbody">
                    Modal body..
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" style="background-color: #055ada">关闭</button>
                </div>

            </div>
        </div>
    </div>
    <!-- The Modal end-->
    <script>
        /*==  part upload of photo end ==*/

        var fastreg='{{$fastreg}}';
        var tip = '{{$tiptxt}}';
        var ciso = '{{$ciso}}'
        var show_lang = false;
        var fast_token = '{{$token}}';

        function selectLanguage() {
            $('input').click(function () {
                $('#fastLangDropdownList').removeClass('show');
                show_lang = false;
            });

            $('#fastreg-selected-country').click(function () {
                if(!show_lang) {
                    $('.fastLangDropdownList').addClass('show');
                    show_lang = true;
                }
                else{
                    $('.fastLangDropdownList').removeClass('show');
                    show_lang = false;
                }
            });
        }
        var getShurtLang=function(lang){
            var allshurtLang= [
                ["zh", "cn"]
                , ["ko", "kr"]
                , ["ja", "jp"]
                , ["us", "en"]
            ];
            var relang="";
            for (var i = 0; i < allshurtLang.length; i++) {
                var c = allshurtLang[i];
                if(c[0]==lang)
                {
                    relang=c[1];
                    break;
                }
            }

            if(relang!="")
                return relang;
            else
                return lang;

        }

        function getappearanceData() {
            $('.fastreghelpicon').mouseenter(function () {
                if(tip=='')return;
                $('.fastregTip').remove();
                var tag = '<div class="fastregTip" style="background-color: rgb(250, 255, 189); text-align: left; border-radius: 5px; border: 1px solid #b1afaf">';
                tag += '<pre style="margin:5px; font-size: 14px; color: #b1afaf;">'+tip+'</pre></div>';
                $('.fastreg-tip-container').append(tag);
                $('.fastregTip').css({'position':'relative','left':'5%','top':'10px'});
            });

            $('.fastreghelpicon').mouseleave(function () {
                $('.fastregTip').remove();
            });
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

        $(document).ready(function (){
            //getLanguage(ciso);
            selectLanguage();
            getappearanceData();

            var docH = $(document).height();

            $("#pwd1").on("keyup", function (){
                var pwdstr=$("#pwd1").val();
                var len=pwdstr.length;
                if(len<1)
                {
                    $('#passwordworings').css('background','#bfbebe');
                }
                else if(len<3)
                {
                    $('#passwordworings').css('background','#f14e5c');
                }
                else if(len<6)
                {
                    $('#passwordworings').css('background','#f8ac16');
                }
                else
                {
                    $('#passwordworings').css('background','#1647f8');
                }
            });

            $('#fastreg_sumbit').click(function (){
                var email = $.trim($("#email").val());
                var username = $.trim($("#username").val());
                var name = $.trim($("#name").val());
                var pwd1 = $.trim($("#pwd1").val());
                var pwd2 = $.trim($("#pwd2").val());

                if(email=="")
                {
                    alramMSG("This email must not empty.");
                    return false;
                }

                if(username=="")
                {
                    alramMSG("This username must not empty.");
                    return false;
                }

                if(name=="")
                {
                    alramMSG("This name have must not empty.");
                    return false;
                }

                if(pwd1=="" || pwd2=="")
                {
                    alramMSG('This password1 and password2 must not empty.');
                    return false;
                }

                if(pwd1!==pwd2){
                    alramMSG('Must equal password1 and password2');
                    return false;
                }

                var frm = document.getElementById("p_login_frm_1");
                var CSRF_TOKEN = frm._token.value;
                $.ajax({
                    method: "POST",
                    url: "/user.fastreg",
                    data: {_token: CSRF_TOKEN
                        , fast_token:fast_token
                        , name:name
                        , username: username
                        , qualify:''
                        , contact:''
                        , contactmethod:''
                        , contactaddr:''
                        , email:email
                        , password:pwd1
                        , phonenumEmail:''
                        , uploaddoc:''
                        , photo:''
                        , partwho:2
                    },
                    statusCode: {
                        404: function() {
                            alramMSG("page not found");
                            return false;
                        }
                    },
                    success: function(response) {
                        console.log(response.status);
                        if(response.status=="dup")
                        {
                            alramMSG("A user with the same ID or email already exists. Please enter another ID or email.");
                            return false;
                        }
                        else if(response.status=="ok")
                        {
                            alramMSG("Success Register.");
                            setTimeout(function () {
                                window.location.href="/login";
                            },5000);
                        }
                        else //response.status=="dberr"
                        {
                            alramMSG("Error To write into Database.");
                            return false;
                        }
                    }
                });

            });


        });
    </script>

</body>
</html>
