<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title id="dashboard_title">{{$title}}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="Expires" content="Mon, 06 Jan 2020 00:00:01 GMT">
    <meta http-equiv="Expires" content="-1">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    {{--<script src="https://cdn.ckeditor.com/ckeditor5/22.0.0/inline/ckeditor.js"></script>--}}
    {{--<script src="{{asset('js/ckediter.js')}}" type="text/javascript"></script>--}}
    <script type="text/javascript">
    window.Laravel = {
        csrfToken: '{{  csrf_token() }}'
        ,userinfo: '{{$userinfo}}'
        ,langlist:'{{$langlist}}'
        ,serverlocale:'{{$serverlocale}}'
        ,logoinfo:'{{$logoinfo}}'
        ,favorites:'{{$favorites}}'
        ,g_path:'{{$g_path}}'
        ,theme:'{{$theme}}'
        ,permissions:'{{$userpermissions}}'
    }
   </script>

    <link id="dashboard_icon" rel="icon" href="{{$favicon}}">
    <link rel="stylesheet" href="{{asset('vuedir/css/bundle.css')}}">
    {{--<link rel="stylesheet" href="{{asset('vuedir/css/app.css')}}">--}}
    <link rel="stylesheet" href="{{asset('c_js/css/intlTelInput.css')}}">
    <link rel="stylesheet" href="{{asset('css/color_pickr_min.css')}}">
    <link rel="stylesheet" href="{{asset('css/jquery-ui.css')}}">
    <link rel="stylesheet" href="{{asset('css/all.min.css')}}" >
    <link rel="stylesheet" href="{{$style_path}}">

    {{--<script  src="vuedir/js/vue.js"> </script>--}}
</head>
<body>
<div id="app">
</div>
<script src="{{asset('js/jquery.min.js')}}"></script>
<script src="{{asset('js/jquery-ui.js')}}"></script>
<script src="{{asset('js/dragScroll.js')}}"></script>
<script src="{{asset('js/popper.min.js')}}"></script>
<script src="{{asset('js/jquery.mousewheel.js')}}"></script>
<script src="{{asset('bootstrap/js/bootstrap.min.js')}}"></script>
<script src="{{asset('js/jquery.autocomplete.min.js')}}"></script>
<script src="{{asset('js/color_pickr_min.js')}}"></script>
<script src="{{asset('js/common.js')}}"></script>
{{--<script src='https://kit.fontawesome.com/a076d05399.js'></script>--}}
<script src="{{asset('vuedir/js/app.min.js')}}"></script>
<script src="{{asset('c_js/js/intlTelInput.js')}}" type="text/javascript"></script>

</body>
<script src="{{asset('vuedir/main.js')}}"></script>
</html>
