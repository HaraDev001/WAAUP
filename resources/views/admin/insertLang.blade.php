<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/wes-logo.ico">
    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/fonts/fontawesome-all.min.css">
    <link rel="stylesheet" href="/fonts/ionicons.min.css">
    <link rel="stylesheet" href="/css/adminpage.css">

    <!-- jQuery library -->
    <script src="/js/jquery/3.1.1/jquery.min.js"></script>
    <!-- Popper JS -->
    <script src="/js/popper.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="/bootstrap/js/bootstrap.min.js"></script>
    <script src="/js/common.js"></script>

    <title>Insert Word</title>
    <style>
        #lang-insert-add, #lang-change-add{
            background: darkcyan !important;
            color: #fff;
        }
        .btn.tab {
            background: #535353 !important;
            color: #fff;
        }
        .btn.tab.active{
            background: darkcyan !important;
            color: #fff  !important;
        }
        #lang-other-add{
            background: #535353 !important;
            color: #fff  !important;
        }
    </style>
</head>
<body>
<section  style="width: 100%">
    <header>
        <div class="container-fluid container-bk">
            <div class="row">
                <div class="col-sm-3" style="flex: 0 0 25%;max-width: 25%;"><img src="/images/WES-LOGO8.png" class="logoimg"  alt="" onerror="this.src ='/images/noimg.png';"/></div>
                <div class="col-sm-9 row-col-title" style="flex: 0 0 74%;max-width: 74%;">Dashboard language Management</div>
            </div>
        </div>
    </header>
</section>
<section style="margin-top:100px;">
    <div style="width:95%; height:auto; margin:0 auto;">
        <div class="row">
            <div class="col-md-3"  style="text-align: right">
                Search:
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <input class="form-control w-100"  type="text" autocomplete="on" name="search_cont" id="search_cont" value=""/>
                </div>
            </div>
            <div class="col-md-3">
                <div id="lang-search" class="btn btn-primary">
                    <span>Search</span>
                </div>
            </div>
            <div class="col-md-3">
            </div>
        </div>
    </div>
</section>
 <section style="margin-top:10px;">
    <div style="width:95%; height:auto; margin:0 auto;">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="email">Current Str_Type:</label>
                        <select class="form-control w-100" name="cstr_type"  id="cstr_type">
                            <option value="">--Select--</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="email">Current Str_Key:</label>
                        <select class="form-control w-100" name="cstr_key"  id="cstr_key">
                            <option value="">--Select--</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="email">Current Str_link:</label>
                        <select class="form-control w-100" name="cstr_link"  id="cstr_link">
                            <option value="">--Select--</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="cstr_cont">Current Str_cont:</label>
                        <select class="form-control w-100" name="cstr_cont"  id="cstr_cont">
                            <option value="" data-id="0">--Select--</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="str_type">Str_Type:</label>
                        <input class="form-control w-100"  type="text" autocomplete="on" name="str_type" id="str_type" value="" />
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="str_key">Str_Key:</label>
                        <input class="form-control w-100"  type="text" autocomplete="on" name="str_key" id="str_key" value=""/>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="str_link">Str_link:</label>
                        <input class="form-control w-100"  type="text" autocomplete="on" name="str_link" id="str_link" />
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="str_cont">Str_cont:</label>
                        <input class="form-control w-100"  type="text" autocomplete="on" name="str_cont" id="str_cont"/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="str_type">view:</label>
                        <div class="form-control w-100"  name="view" id="view" value="" ></div>
                    </div>
                </div>
                <div class="col-md-6">

                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <div id="lang-insert-add" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35 m-r-10">
                        <span>+ Add</span>
                    </div>
                    <div id="lang-insert-change" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35 m-r-10" style="background-color: #e1af17">
                        <span style="color: white">Change</span>
                    </div>
                    <div id="lang-insert-remove" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-35" style="background-color: #db6c83">
                        <span style="color: white">Remove</span>
                    </div>
                </div>
            </div>
    </div>
</section>

<script>
    var sid=0;
    var scont='';
    function getDLangStr_type(){
        $.ajax({
            method: "POST",
            url: "/admin.getDLangStr_type",
            statusCode: {
                404: function() {
                    return false;
                }
            },
            success: function(response) {
                if(response.msg=="ok")
                {
                    if(response.str_type instanceof Array){
                        var tags='<option value="">--Select--</option>';
                       for(var i=0;i<response.str_type.length;i++){
                           var item = response.str_type[i];
                          // console.log(val.str_type);
                           tags+='<option value="'+item.str_type+'">'+item.str_type+'</option>';
                       }
                       $('#cstr_type').html(tags);
                    }
                }
            }
        });
    }
    function getDLangStr_key(){
        $.ajax({
            method: "POST",
            url: "/admin.getDLangStr_key",
            statusCode: {
                404: function() {
                    return false;
                }
            },
            success: function(response) {
                if(response.msg==="ok")
                {
                    if(response.str_key instanceof Array){
                        var tags='<option value="">--Select--</option>';
                        for(var i=0;i<response.str_key.length;i++){
                            var item = response.str_key[i];
                            // console.log(val.str_type);
                            tags+='<option value="'+item.str_key+'">'+item.str_key+'</option>';
                        }
                        $('#cstr_key').html(tags);
                    }
                }
            }
        });
    }
    function getDLangStr_link(){
        $.ajax({
            method: "POST",
            url: "/admin.getDLangStr_link",
            statusCode: {
                404: function() {
                    return false;
                }
            },
            success: function(response) {
                if(response.msg=="ok")
                {
                    if(response.str_link instanceof Array){
                        var tags='<option value="">--Select--</option>';
                        for(var i=0;i<response.str_link.length;i++){
                            var item = response.str_link[i];
                            // console.log(val.str_type);
                            tags+='<option value="'+item.str_link+'">'+item.str_link+'</option>';
                        }
                        $('#cstr_link').html(tags);
                    }
                }
            }
        });
    }
    function getDLangStr_cont(){
        $.ajax({
            method: "POST",
            url: "/admin.getDLangStr_cont",
            data:{
                scont:scont
            },
            statusCode: {
                404: function() {
                    return false;
                }
            },
            success: function(response) {
                if(response.msg==="ok")
                {
                    if(response.str_cont instanceof Array){
                        var tags='<option value="">--Select--</option>';
                        for(var i=0;i<response.str_cont.length;i++){
                            var item = response.str_cont[i];
                            var id=item.id;
                            var val=item.str_type+':'+item.str_key+':'+item.str_link;
                            // console.log(val.str_type);
                            tags+='<option value="'+val+'" data-id="'+id+'" >'+item.str_cont+'</option>';
                        }
                        $('#cstr_cont').html(tags);
                    }
                }
            }
        });
    }
    $(document).ready(function() {
        getDLangStr_type();
        getDLangStr_key();
        getDLangStr_link();
        getDLangStr_cont();
        $('#lang-insert-remove').click(function(){
            if(sid===0){
                alert('삭제할 정보를 선택');
                return;
            }
            if(confirm('정말 삭제하겠습니까.')==false)
                return;

            $.ajax({
                method: "POST",
                url: "/admin.deleteLangTemp",
                data: {
                    id:sid
                },
                statusCode: {
                    404: function() {
                        return false;
                    }
                },
                success: function(response) {
                    if(response.msg=="ok")
                    {
                        sid=0;
                        scont='';
                        getDLangStr_type();
                        getDLangStr_key();
                        getDLangStr_link();
                        getDLangStr_cont();
                        alert('성공삭제');
                    }
                    else //response.status=="dberr"
                    {
                        alert('Error  in Database.');
                    }
                }
            });
        });
        $('#lang-insert-change').click(function(){
            if(sid===0){
                alert('변경할 정보를 선택');
                return;
            }
            var str_type = $.trim($('#str_type').val());
            var str_key = $.trim($('#str_key').val());
            var str_cont = $.trim($('#str_cont').val());
            var str_link = $.trim($('#str_link').val());

            if(confirm('정말 변경하겠습니까.')==false)
                return;

            $.ajax({
                method: "POST",
                url: "/admin.UpdateLangTemp",
                data: {
                    str_type:str_type,
                    str_key:str_key,
                    str_cont:str_cont,
                    str_link:str_link,
                    id:sid,
                    iso:'en'
                },
                statusCode: {
                    404: function() {
                        return false;
                    }
                },
                success: function(response) {
                    if(response.msg==="ok")
                    {
                        sid=0;
                        scont='';
                        getDLangStr_type();
                        getDLangStr_key();
                        getDLangStr_link();
                        getDLangStr_cont();
                        alert('성공변경');
                        //window.location.href='/lang';
                    }
                    else //response.status=="dberr"
                    {
                        alert('Error  in Database.');
                    }
                }
            });
        });
        $('#lang-insert-add').click(function(){
            var str_type = $.trim($('#str_type').val());
            var str_key = $.trim($('#str_key').val());
            var str_cont = $.trim($('#str_cont').val());
            //var iso = $.trim($('#iso').val());
            var iso = 'en';
            var str_link = $.trim($('#str_link').val());
            if(str_type=='' || str_key =='' || str_cont =='')
            {
                alert("Enter contents");
                return;
            }
            $.ajax({
                method: "POST",
                url: "/admin.InsertLangTemp",
                data: {
                    str_type:str_type,
                    str_key:str_key,
                    str_cont:str_cont,
                    str_link:str_link,
                    iso:iso
                },
                statusCode: {
                    404: function() {
                        return false;
                    }
                },
                success: function(response) {
                    if(response.msg==="ok")
                    {
                        scont='';
                        getDLangStr_type();
                        getDLangStr_key();
                        getDLangStr_link();
                        getDLangStr_cont();
                        alert('성공입력');
                        // window.location.href='/lang';
                    }
                    else if(response.msg=="du")
                    {
                        sid=response.row.id;
                        alert('이미 존재한다.  id=>'+response.row.id);
                    }
                    else //response.status=="dberr"
                    {
                        alert('Error  in Database.');
                    }
                }
            });
        });
        $('#lang-search').click(function () {
          scont = $('#search_cont').val();
             scont = $.trim(scont);
            getDLangStr_cont();
        });
        $('#search_cont').keypress(function (e) {
            if (e.which == 13) {
                $('#lang-search').click();
                return false;
            }
        });
        $('#cstr_type').change(function(){
            var value=$(this).val();
            if(value=='')
                return;
            var pstr = $('#cstr_type option:selected').text();
            $('#str_type').val(pstr);
        });
        $('#cstr_key').change(function(){
            var value=$(this).val();
            if(value=='')
                return;
            var pstr = $('#cstr_key option:selected').text();
            $('#str_key').val(pstr);
            var v= $.trim($('#view').val());
        });
        $('#cstr_link').change(function(){
            var value=$(this).val();
            if(value=='')
                return;
            var pstr = $('#cstr_link option:selected').text();
            $('#str_link').val(pstr);
        });
        $('#cstr_cont').change(function(){
            var value=$(this).val();
            if(value=='')
                return;
            var pstr = $('#cstr_cont option:selected').text();
            $('#str_cont').val(pstr);
            var type=value.split(':')[0];
            var key=value.split(':')[1];
            var link=value.split(':')[2];
            sid=$('#cstr_cont option:selected').attr('data-id');
            var instr='<span style="padding-left: 5px;">id :</span><span style="color:#0c6eca;font-weight: bold">'+sid+'</span>';
            instr +='<span style="padding-left: 20px;">type :</span><span style="color:#0c6eca;font-weight: bold">'+type+'</span><span style="padding-left: 20px;">key:</span><span style="color:#0c6eca;font-weight: bold">'+key+'</span>  <span style="padding-left: 20px;">link:</span><span style="color:#0c6eca;font-weight: bold">'+link+'</span>';
            if(parseInt(sid) > 0){
                $('#str_type').val(type);
                $('#str_key').val(key);
                $('#str_link').val(link);
            }
            $('#view').html(instr);
        });
    });
</script>
</body>
</html>
