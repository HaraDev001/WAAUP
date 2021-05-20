<!-- resources/views/layouts/home_layout.blade.php -->
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{$favico}}">
    <link rel="stylesheet" href="{{asset('/bootstrap/css/bootstrap.min.css')}}">
    {{--<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">--}}
    <link rel="stylesheet" href="{{asset('/fonts/fontawesome-all.min.css')}}">
    <link rel="stylesheet" href="{{asset('/fonts/ionicons.min.css')}}">
    <link rel="stylesheet" href="{{asset('/c_js/css/intlTelInput.css')}}">
    <link rel="stylesheet" href="{{asset('/css/app.css')}}">

    <!-- jQuery library -->
    <script type="text/javascript" type="text/javascript" src="{{asset('/js/jquery/3.1.1/jquery.min.js')}}"></script>
    {{--<script type="text/javascript" src="{{asset('/js/jquery.min.js')}}"></script>--}}
    {{--<script type="text/javascript" src="{{asset('/js/jquery-ui.js')}}"></script>--}}
<!-- Popper JS -->
    <script type="text/javascript" type="text/javascript" src="{{asset('/js/popper.min.js')}}"></script>
    <!-- Latest compiled JavaScript -->
    <script type="text/javascript" type="text/javascript" src="{{asset('/bootstrap/js/bootstrap.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('/js/common.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/wes-default.js')}}"></script>
    {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>--}}
    {{-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIlltIZr2VwNeJ_DFKGLKqTpB9-e4KL2E" type="text/javascript"></script>--}}

    <title>{{$sitetitle}}</title>
    <style>
        .iti__flag.only-text{
            background-image:none;
            background-color:white;
            color: #2e4b94;
            font-weight: bold;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
        }
        .social-grid.grid-item{
            position: relative;
        }
        .social-grid.grid-item img{
            cursor: pointer;
        }
        .social-grid.grid-item .social_org_img{
            display: none;
        }
        .social-grid.grid-item .social_org_img.active{
            display: block;
        }
        .social-grid.grid-item .social_hover_img{
            position: absolute;
            display: none;
            left: 2px;
            top:-30px;
        }
        .social-grid.grid-item .social_hover_img.active{
            position: absolute;
            left: -2px;
            top: -35px;
            display: block;
            box-shadow: 1px 1px 3px 3px #aaaaaa;
            border-radius: 2px;
            padding: 3px;
            z-index: 999;
            background:white;
        }

    </style>
</head>

<body>
<div class="page-container" id="page-container-logbk-reg">

    <section>
        <div class="no-gutters top-row" id="headerTopBar" style="height: 4.5vh/*50px*/; @if($topheader==='off') display:none; @endif">
            <div class="d-flex flex-row" id="headerTopBarArea">
                <div class="d-flex align-items-center">
                    <!--class="material-icons">edit_location</i-->
                    <i class="fas fa-map-marker-alt" aria-hidden="true" @if($toplocation==='off')style="display: none"@endif></i>
                </div>
                <div id="topcountrycity" style="padding-left: 5px; @if($toplocation==='off') display:none; @endif">
                    {{$countrycity}}
                </div>
                <div class="mr-auto">
                    <span id="location_desc" style="display: none; margin-left: 30px;">{{$frtxt['frtxt_locationdescript']}}</span>
                </div>
                <div class="d-flex align-items-center" style="cursor:pointer">
                    {{--  <i class="fas fa-chevron-up"></i>--}}
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="row no-gutters header-row" id="myheader" style="height: 6.3vh/*70px*/">
            <div class="mycontainer nav-mycontainer">
                <a href="/home" class="navigation-logo">
                    <div class="d-flex flex-row logocontainer">
                        <div>
                            @if(!empty($logoImg))
                                <img src="/uploads/images/waaupimg/logo/{{$logoImg}}" alt="logo" id="logostar" class="logo star" style="/*width: 40px;*/ height: 3.6vh/*40px*/;" onerror="this.src ='/images/noimg.png';">
                            @endif
                        </div>
                        @if(!empty($logoImg) && !empty($sitelogoImg))
                            <div class="logocontainerLine" style="border-right: 1px solid white; height: 3.6vh/*40px*/; margin: 0 10px;">
                            </div>
                        @endif
                        <div>
                            @if(!empty($sitelogoImg))
                                <img src="/uploads/images/waaupimg/logo/{{$sitelogoImg}}" alt="logo" id="logoflw" class="logo flw" style="width: 7.2vh/*80px*/; height: 3.6vh/*40px*/;" onerror="this.src ='/images/noimg.png';">
                            @endif
                            @if(!empty($slogantxt))
                                <span style="color: white; margin-left: 15px;">{{$slogantxt}}</span>
                            @endif
                        </div>
                    </div>
                </a>

                <button data-toggle="collapse" class="navbar-toggler navbar-toggler-right" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="sr-only">Toggle navigation</span> <span class="fas fa-bars" style="color:white"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto" style="height: 3.6vh/*40px*/">
                        @if($toolcalc!=='off')
                            <li class="nav-item pr-0">
                                <a class="nav-link nav-link-a" href="#" style="padding: 0px">
                                    <svg t="1600751643806" style="fill: white" class="icon" viewBox="0 0 1138 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5583" width="20" height="20"><path d="M398.222222 174.545465 739.555556 174.545465 739.555556 89.212132 398.222222 89.212132 398.222222 174.545465 398.222222 174.545465ZM910.222222 174.545465 995.795627 174.545465C1018.98314 174.545465 1038.222222 194.374827 1038.222222 219.684636L1038.222222 879.305273C1038.222222 904.491861 1018.787669 924.444444 995.344498 924.444444L142.43328 924.444444C118.944313 924.444444 99.555556 904.566158 99.555556 879.305273L99.555556 219.684636C99.555556 194.387285 118.866148 174.545465 142.562532 174.545465L229.503488 174.545465 229.503488 89.212132 142.562532 89.212132C71.211748 89.212132 14.222222 147.769515 14.222222 219.684636L14.222222 879.305273C14.222222 951.224832 71.333262 1009.777778 142.43328 1009.777778L995.344498 1009.777778C1066.425628 1009.777778 1123.555556 951.125049 1123.555556 879.305273L1123.555556 219.684636C1123.555556 147.813945 1066.69824 89.212132 995.795627 89.212132L910.222222 89.212132 910.222222 174.545465ZM270.222222 42.410439C270.222222 18.987804 289.160476 0 312.888889 0 336.453063 0 355.555556 18.983652 355.555556 42.410439L355.555556 221.554005C355.555556 244.97664 336.617301 263.964444 312.888889 263.964444 289.324715 263.964444 270.222222 244.980793 270.222222 221.554005L270.222222 42.410439ZM782.222222 42.377216C782.222222 18.9729 801.160476 0 824.888889 0 848.453063 0 867.555556 18.968804 867.555556 42.377216L867.555556 221.38038C867.555556 244.78464 848.617301 263.757596 824.888889 263.757596 801.324715 263.757596 782.222222 244.788793 782.222222 221.38038L782.222222 42.377216ZM270.222222 438.303004C270.222222 414.738887 289.42006 395.636338 313.180956 395.636338L824.596821 395.636338C848.322276 395.636338 867.555556 414.574592 867.555556 438.303004 867.555556 461.867179 848.357717 480.969671 824.596821 480.969671L313.180956 480.969671C289.455502 480.969671 270.222222 462.031474 270.222222 438.303004ZM270.222222 658.10102C270.222222 634.536846 289.42006 615.434354 313.180956 615.434354L824.596821 615.434354C848.322276 615.434354 867.555556 634.372551 867.555556 658.10102 867.555556 681.665138 848.357717 700.767687 824.596821 700.767687L313.180956 700.767687C289.455502 700.767687 270.222222 681.829433 270.222222 658.10102Z" p-id="5584"></path></svg>
                                </a>
                            </li>
                        @endif
                        @if($toolbar!=='off')
                            <li class="nav-item pr-0">
                                <a class="nav-link nav-link-a" href="#" style="padding: 0px">
                                    <svg t="1600751734287" style="fill: white" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10651" width="20" height="20"><path style="fill: white" d="M832 64H192c-70.7 0-128.1 69.2-128 154.4v463.4c0 85.3 57.3 154.5 128 154.5h261.9l149.4 108c11.2 10.3 24.6 15.6 38.1 15.6 9.4 0 18.9-2.5 27.8-7.8 21.5-12.8 34.9-38.9 34.9-67.9v-48H832c70.6 0 128-69.2 128-154.5V218.5C960 133.2 902.7 64 832 64z m68.2 617.9c0 51.4-31.2 94.8-68.2 94.8H644.4v107.7c0 6.3-1.7 10.9-3.2 13.6l-2.8-2-149.5-108-15.7-11.3H192c-37 0-68.2-43.4-68.2-94.8V218.3c0-30.3 10.5-58.2 28.8-76.6 8.2-8.2 21.7-18 39.4-18h640c37 0 68.2 43.4 68.2 94.8v463.4zM696.9 402.3c-27.6 0-49.9 22.3-49.9 49.9 0 27.6 22.3 49.9 49.9 49.9 27.6 0 49.9-22.3 49.9-49.9 0-27.6-22.3-49.9-49.9-49.9z m-184.9 0c-27.6 0-49.9 22.3-49.9 49.9 0 27.6 22.3 49.9 49.9 49.9s49.9-22.3 49.9-49.9c0-27.6-22.3-49.9-49.9-49.9z m-179.8 0c-27.6 0-49.9 22.3-49.9 49.9 0 27.6 22.3 49.9 49.9 49.9 27.6 0 49.9-22.3 49.9-49.9 0.1-27.6-22.2-49.9-49.9-49.9z" fill="#666666" p-id="10652"></path></svg>
                                </a>
                            </li>
                        @endif

                        @if($toolcalc==='on' || $toolbar==='on')
                            <li class="nav-item">
                                <div class="logocontainerLine" style="border-right: 1px solid white; height: 3.6vh/*40px*/">   </div>
                            </li>
                        @endif
                        <?php
                        $i=0;
                        ?>
                    <!-- group of menu -->
                        @foreach ($topmenus as $mu)
                            <?php
                            $menusp=explode(':', $mu);
                            $menu=$menusp[0];
                            $link= urldecode($menusp[1]);
                            $marginleft='';
                            $active='';
                            $pos = false;
                            if(!empty($link) && !empty($curMU))
                                $pos = strpos($link, $curMU);

                            if($curMU!='' && $pos !== false)
                                $active='active';
                            ?>
                            <li class="nav-item">
                                <a class="nav-link nav-link-a wesheadmenu {{$active}}" style="font-size: 15px;padding: 0px" data-idx="{{$i}}" data-cont="{{$link}}" title="{{$menu}}" href="/{{$link}}">{{$menu}}</a>
                            </li>
                        <?php
                        $i++;
                        ?>
                    @endforeach

                    <!-- language options-->
                        <li id="LangContainer" class="nav-item dropdown" style="padding-right: 0px; @if($modules==='off') display:none; @endif">
                            <?php
                            $i=0;
                            ?>
                            <div id="langDropdownBtn" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="cursor: pointer; padding: 0 0;" class="nav-link dropdown-toggle">
                                @if($ciso!=null && $ciso!='')
                                    <div class="iti__flag-box only-text">
                                        <div class="iti__flag only-text iti__{{$ciso}}">{{$ciso}}</div>
                                    </div>
                                    {{-- @foreach($langs as $lang)
                                         @if($i==0)
                                             <div class="iti__flag-box only-text">
                                                 <div class="iti__flag only-text iti__{{$lang->iso}}">{{$ciso}}</div>
                                             </div>
                                         @endif
                                         <?php
                                         $i++;
                                         ?>
                                     @endforeach--}}
                                @endif
                            </div>
                            <div id="langDropdownList" aria-labelledby="SClangDropdown" class="dropdown-menu dropdown-menu-right shadow animated&amp;#45;&amp;#45;grow-in" style="min-width: 8rem;width: auto;">
                                <img src="/images/wes_lang_arrow.png" id="show_lang_arrow" style="position: absolute; top: -0.4rem; left: 35px;">
                                @if($langs!=null && $langs!='')
                                    <?php
                                    $Length = 0;
                                    $fontSize = 14;
                                    ?>
                                    @foreach($langs as $lang)
                                        <?php
                                        $textLength = imagefontwidth($fontSize) * strlen($lang->name);
                                        if($Length < $textLength)
                                            $Length = $textLength;
                                        $idstr=$lang->iso.'-'.$lang->dialcode.'-'.$lang->name;
                                        ?>
                                        <a class="dropdown-item" id="scEnabledLangs_{{$idstr}}" title="{{$lang->name}}" style="color: #212529;padding: 5px 15px;text-align:left" href="/{{$lang->iso}}">
                                            <span class="iti__country-name" style="background: #3f6ad2; color: white; text-transform:uppercase;border: 1px solid transparent; border-radius: 20px; padding: 5px 3px; font-size: 12px">{{$lang->iso}}</span>
                                            <span class="iti__country-name" title="{{$lang->name}}" style="font-size: 15px">{{$lang->name}}</span>
                                        </a>
                                    @endforeach
                                @endif
                            </div>
                            <input type="hidden" id="textlen" value="<?php echo $Length; ?>">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    @yield('content')

    <footer id="footerSection">
        <div class="row no-gutters" id="footlists" style="background-color: white; height: 22vh">
            <div class="container">
                <div class="row no-gutters" style="display: flex; flex-direction: row; justify-content: space-between">
                    <!-- Service -->
                    <div>
                        <aside class="widget widget_text student-txt-area" >
                            <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 1.8vh/*20px*/">
                                @if($footmenus!=='')
                                    @if($menu0style === 'normal')
                                        {{$menu0fonttitle}}
                                    @endif
                                @endif
                            </h4>
                            <div class="textwidget" id="sbmuservice">
                                @if($footmenus!=='')
                                    @if($menu0style === 'normal')
                                        <?php
                                        $servicelist = array();
                                        $fontclr='';
                                        $fontsize='';
                                        ?>
                                        @if($menu0contlinks !=='')
                                            <?php
                                            $servicelist = explode(',',$menu0contlinks);
                                            $fontclr=' color:'.$menu0fontcolor.';';
                                            $fontsize=' font-size:'.$menu0fontsize.'px;';
                                            ?>
                                            <ul style="list-style: none outside; margin: 0; padding: 0;">
                                                @foreach ($servicelist as $mu)
                                                    <?php
                                                    $menusp=explode(':', $mu);
                                                    $menu=$menusp[0];
                                                    if(!empty($menusp[1]))
                                                        $link=urldecode($menusp[1]);
                                                    else
                                                        $link='#';
                                                    ?>
                                                    <li style="margin-bottom: 0.9vh/*10px*/">
                                                        <i style="margin-right: 7px;{{$fontsize}} {{$fontclr}}" class="far fa-arrow-alt-circle-right"></i>
                                                        <a class="wesfootlist1" href="{{$link}}" style="{{$fontsize}} {{$fontclr}}" data-cont="{{$link}}">{{$menu}}</a>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    @else
                                        <script type="text/javascript">
                                            var tag = '{{ $edit0 }}';
                                            // document.getElementById("app_foot_center").innerHTML=htmldecodejs(tag);
                                            $('#sbmuservice').html(htmldecodejs(tag));
                                        </script>
                                    @endif
                                @endif
                            </div>
                        </aside>
                    </div>
                    <!-- About US part-->
                    <div>
                        <aside class="widget widget_text student-txt-area">
                            <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 1.8vh/*20px*/">
                                @if($footmenus!=='')
                                    @if($menu1style === 'normal')
                                        {{$menu1fonttitle}}
                                    @endif
                                @endif
                            </h4>
                            <div class="textwidget" id="sbmuaboutus">
                                @if($footmenus!=='')
                                    @if($menu1style === 'normal')
                                        <?php
                                        $servicelist = array();
                                        $fontclr='';
                                        $fontsize='';
                                        ?>
                                        @if($menu1contlinks !=='')
                                            <?php
                                            $servicelist = explode(',',$menu1contlinks);
                                            $fontclr=' color:'.$menu1fontcolor.';';
                                            $fontsize=' font-size:'.$menu1fontsize.'px;';
                                            ?>
                                            <ul style="list-style: none outside; margin: 0; padding: 0;">
                                                @foreach ($servicelist as $mu)
                                                    <?php
                                                    $menusp=explode(':', $mu);
                                                    $menu=$menusp[0];
                                                    if(!empty($menusp[1]))
                                                        $link=urldecode($menusp[1]);
                                                    else
                                                        $link='#';
                                                    ?>
                                                    <li style="margin-bottom: 0.9vh/*10px*/">
                                                        <i style="margin-right: 7px;{{$fontsize}} {{$fontclr}}" class="far fa-arrow-alt-circle-right"></i>
                                                        <a class="wesfootlist1" href="{{$link}}" style="{{$fontsize}} {{$fontclr}}" data-cont="{{$link}}">{{$menu}}</a>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    @else
                                        <script type="text/javascript">
                                            var tag = '{{ $edit1 }}';
                                            // document.getElementById("app_foot_center").innerHTML=htmldecodejs(tag);
                                            $('#sbmuaboutus').html(htmldecodejs(tag));
                                        </script>
                                    @endif
                                @endif
                            </div>
                        </aside>
                    </div>
                    <!-- NEWS -->
                    <div>
                        <aside class="widget widget_text student-txt-area" >
                            <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 1.8vh/*20px*/">
                                @if($footmenus!=='')
                                    @if($menu2style === 'normal')
                                        {{$menu2fonttitle}}
                                    @endif
                                @endif
                            </h4>
                            <div class="textwidget" id="sbmuNews">
                                @if($footmenus!=='')
                                    @if($menu2style === 'normal')
                                        <?php
                                        $servicelist = array();
                                        $fontclr='';
                                        $fontsize='';
                                        ?>
                                        @if($menu2contlinks !=='')
                                            <?php
                                            $servicelist = explode(',',$menu2contlinks);
                                            $fontclr=' color:'.$menu2fontcolor.';';
                                            $fontsize=' font-size:'.$menu2fontsize.'px;';
                                            ?>
                                            <ul style="list-style: none outside; margin: 0; padding: 0;">
                                                @foreach ($servicelist as $mu)
                                                    <?php
                                                    $menusp=explode(':', $mu);
                                                    $menu=$menusp[0];
                                                    if(!empty($menusp[1]))
                                                        $link=urldecode($menusp[1]);
                                                    else
                                                        $link='#';
                                                    ?>
                                                    <li style="margin-bottom: 0.9vh/*10px*/">
                                                        <i style="{{$fontsize}} {{$fontclr}}" class="far fa-arrow-alt-circle-right"></i>
                                                        <a class="wesfootlist1" href="{{$link}}" style="{{$fontsize}} {{$fontclr}}" data-cont="{{$link}}">{{$menu}}</a>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    @else
                                        <script type="text/javascript">
                                            var tag = '{{ $edit2 }}';
                                            // document.getElementById("app_foot_center").innerHTML=htmldecodejs(tag);
                                            $('#sbmuNews').html(htmldecodejs(tag));
                                        </script>
                                    @endif
                                @endif
                            </div>
                        </aside>
                    </div>
                    <!-- Social -->
                    <div>
                        <aside class="widget widget_text student-txt-area" style="display: flex; justify-content: center">
                            <div class="grid-container" id="social_site_link">
                                <?php
                                $icon_path = "/uploads/images/waaupimg/icons/";
                                if(isset($socialsetting))
                                    $instrjson = json_decode($socialsetting);
                                else
                                    $instrjson = '';

                                $imgidx=1;
                                $g_idx=0;
                                ?>
                                @if($instrjson !=='' && $instrjson !==null)
                                    @foreach ($instrjson as $key => $item)
                                        <?php
                                        $i_imgpos = strpos($key, 'i_img');
                                        $i_linkpos = strpos($key, 'i_link');
                                        $h_imgpos = strpos($key, 'h_img');
                                        $h_linkpos = strpos($key, 'h_link');
                                        if($i_imgpos !==false)
                                        {
                                            $i_img = isset($item) ? $item : "";
                                            $g_idx++;
                                        }
                                        if($i_linkpos !==false)
                                        {
                                            $i_link = isset($item) ? $item : "";
                                            $g_idx++;
                                        }
                                        if($h_imgpos !==false)
                                        {
                                            $h_img = isset($item) ? $item : "";
                                            $g_idx++;
                                        }
                                        if($h_linkpos !==false)
                                        {
                                            $h_link = isset($item) ? $item : "";
                                            $g_idx++;
                                        }
                                        ?>

                                        @if($g_idx == 4)
                                            @if($i_img !== "")
                                                <div class="social-grid grid-item">
                                                    <a href="#" class="social_org_img active" id="social-org_{{$imgidx}}" data-idx="{{$imgidx}}" data-link="{{$i_link}}" target="_blank">
                                                        <img src="{{$icon_path}}{{$i_img}}" id="social-iimg_{{$imgidx}}" style="width: 25px; height: 25px">
                                                    </a>
                                                    @if($h_img !== "")
                                                        <a href="#" class="social_hover_img" id="social-hover_{{$imgidx}}" data-idx="{{$imgidx}}" data-link="{{$i_link}}" target="_blank">
                                                            <img src="{{$icon_path}}{{$h_img}}" id="social-himg_{{$imgidx}}" style="width: 25px; height: 25px">
                                                        </a>
                                                    @endif
                                                </div>
                                            @endif
                                            <?php
                                            $imgidx++;
                                            $g_idx = 0;
                                            ?>
                                        @endif
                                    @endforeach
                                @endif
                            </div>
                        </aside>
                    </div>

                </div>
            </div>
        </div>

        <div class="row no-gutters" style="background-color: white; border-top: 1px solid #e2dede; height: 5vh; bottom: 0; top: 0; align-items: center">
            <div class="container">
                <div class="myflex-container no-gutters flex-row justify-content-between">
                    <div id="app_foot_left">
                        @if($footbar!=='' && $footbar!==null)
                            @if($barleft==='normal')
                                <?php
                                $color = '';
                                $fontsize= '';
                                ?>
                                @if(!empty($barleftfontcolor))
                                    <?php
                                    $color = 'color:'.$barleftfontcolor.'; ';
                                    ?>
                                @else
                                    <?php
                                    $color = 'color:#aaaaaa; ';
                                    ?>
                                @endif
                                @if(!empty($barleftfontsize))
                                    <?php
                                    $fontsize = 'font-size:'.$barleftfontsize.'px; ';
                                    ?>
                                @else
                                    <?php
                                    $fontsize = 'font-size:14px; ';
                                    ?>
                                @endif
                                <a href="{{$barleftfontlink}}" style="{{$color.$fontsize}}">
                                    @if(!empty($barleftfontcont))
                                        {{ $barleftfontcont }}
                                    @endif
                                </a>
                            @else
                                <script type="text/javascript">
                                    var tag = '{{ $footedit0 }}';
                                    if(tag!==null && tag!=='')
                                        $('#app_foot_left').html(htmldecodejs(tag));
                                </script>
                            @endif
                        @endif
                    </div>
                    {{-- bar center content --}}
                    <div id="app_foot_center">
                        @if($footbar!=='')
                            @if($barcent==='normal')
                                <?php
                                $color = '';
                                $fontsize= '';
                                ?>
                                @if(!empty($barcentfontcolor))
                                    <?php
                                    $color = 'color:'.$barcentfontcolor.'; ';
                                    ?>
                                @else
                                    <?php
                                    $color = 'color:#aaaaaa; ';
                                    ?>
                                @endif

                                @if(!empty($barcentfontsize))
                                    <?php
                                    $fontsize = 'font-size:'.$barcentfontsize.'px; ';
                                    ?>
                                @else
                                    <?php
                                    $fontsize = 'font-size:14px; ';
                                    ?>
                                @endif
                                <a href="{{$barcentfontlink}}" style="{{$color.$fontsize}}">
                                    @if(!empty($barcentfontcont))
                                        {{ $barcentfontcont }}
                                    @endif
                                </a>
                            @else
                                <script>
                                    var tag = '{{ $footedit1 }}';
                                    // document.getElementById("app_foot_center").innerHTML=htmldecodejs(tag);
                                    if(tag!==null && tag!=='')
                                        $('#app_foot_center').html(htmldecodejs(tag));
                                </script>
                            @endif
                        @endif
                    </div>
                    <!-- bar right content -->
                    <div id="app_foot_right">
                        @if($footbar!=='')
                            @if($barright==='normal')
                                <?php
                                $color1 = '';
                                $fontsize1='';
                                ?>
                                @if(!empty($barrightfontcolor))
                                    <?php
                                    $color1 = 'color:'.$barrightfontcolor.'; ';
                                    ?>
                                @else
                                    <?php
                                    $color1 = 'color:#aaaaaa; ';
                                    ?>
                                @endif
                                @if(!empty($barrightfontsize))
                                    <?php
                                    $fontsize1 = 'font-size:'.$barrightfontsize.'px; ';
                                    ?>
                                @else
                                    <?php
                                    $fontsize1 = 'font-size:14px; ';
                                    ?>
                                @endif
                                <a href="{{$barrightfontlink}}" style="{{$color1.$fontsize1}}">
                                    @if(!empty($barrightfontcont))
                                        {{ $barrightfontcont }}
                                    @endif
                                </a>
                            @else
                                <script>
                                    var tag = '{{ $footedit2 }}';
                                    // document.getElementById("app_foot_center").innerHTML=htmldecodejs(tag);
                                    if(tag!==null && tag!=='')
                                        $('#app_foot_right').html(htmldecodejs(tag));
                                </script>
                            @endif
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div>

<!-- The Modal start-->
<div class="modal fade" id="myAlertModal" style="top:160px;">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">通知</h4>
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

<script type="text/javascript">
    $(document).ready(function () {
        var samplepx = 63;
        var icon_path = "/uploads/images/waaupimg/icons/";
        var pospx = samplepx - parseInt($('#textlen').val());
        $('#langDropdownList').css('margin-left', pospx+'px');
        var lang_arrow = 35;
        lang_arrow = lang_arrow - pospx;
        $('#show_lang_arrow').css('left', lang_arrow+'px');

        function success(position) {
            //console.log(position.coords.latitude)
            //console.log(position.coords.longitude)
            $('#topcountrycity').text(position.coords.latitude + ',' + position.coords.longitude);
        }

        function error(err) {
            console.log(err);
        }

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error);
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        }

        function SocialEnvent(){
            $('a.social_org_img').on('mouseover', function () {
                var idx= $(this).data('idx');
                $('#social-hover_'+idx).addClass('active');
            });

            $('a.social_org_img').on('mouseleave', function () {
                var idx= $(this).data('idx');
                $('#social-hover_'+idx).removeClass('active');
            });

            $('a.social_org_img').click(function () {
                var link = $(this).attr('data-link');
                link = link.replace('http', '');
                window.location.href = 'http://'+link;
            });

            $('#topcountrycity').on('mouseover', function () {
                $('#location_desc').css('display', 'block');
            });

            $('#topcountrycity').on('mouseleave', function () {
                $('#location_desc').css('display', 'none');
            });
        }

       SocialEnvent();

        var toplocation = '{{$toplocation}}';
        if (toplocation === 'on') {
            $.ajax({
                url: "https://geolocation-db.com/jsonp/7733a990-ebd4-11ea-b9a6-2955706ddbf3",
                jsonpCallback: "callback",
                dataType: "jsonp",
                async: true,
                success: function (location) {
                    if (location !== undefined && location !== null && location !== '') {
                        //$('#topcountrycity').text(location.country_name + ',' + location.state);
                        var locationname = location.country_name + ',' + location.state;
                        var ciso = '{{$ciso}}';
                        $.ajax({
                            method: "POST",
                            url: "/admin.getTranslateString",
                            data: {
                                trans_str:locationname,
                                iso:ciso
                            },
                            statusCode: {
                                404: function() {
                                    return false;
                                }
                            },
                            success: function(response) {
                                if(response.msg=="ok")
                                {
                                    $('#topcountrycity').text(response.location);
                                }
                                else //response.status=="dberr"
                                {
                                    alert('Error  in Database.');
                                }
                            }
                        });
                    }
                    else
                        getLocation();
                },
                error: function error(jqXHR, errdata, errorThrown) {
                    console.log(errdata);
                }
            });
        }


    });
</script>

</body>
</html>
