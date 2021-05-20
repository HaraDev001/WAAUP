@extends('layouts.home_layout')
@section('content')
    <section class="section-main" style="background: url('/uploads/images/waaupimg/1601806854-wesbk.png'); background-size: cover; background-repeat: no-repeat; position: relative; height: calc(100vh - 10.8vh/*120px*/ - 27vh);">
        <!-- content-center -->
        <div style="flex-direction: column; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; justify-content: center; align-items: center; display: flex;">
            <div class="d-flex flex-column reg_container">

                <div class="card h-100 border-0">
                    <div class="card-body wesg_reg_body">

                        <form action="/wesResTUserLogin" enctype="multipart/form-data" method="post" name="wesg_reg_frm" id="wesg_login_frm">
                            {{ csrf_field() }}
                            <input type="hidden" id="tab_ck" name="tab_ck" value="org"/>
                            <input type="hidden" id="sub_ck" name="sub_ck" value="m"/>
                            <ul class="nav nav-tabs">
                                <li class="nav-item active" data-tab="org" id="li-left-p">
                                    <a class="nav-link" data-tab="org" data-toggle="tab" id="t_org" href="#c_org">{{$frtxt['frtxt_organization']}}</a>
                                </li>
                                <li class="nav-item" data-tab="ind" id="li-right-p">
                                    <a class="nav-link" data-tab="ind" data-toggle="tab" id="t_ind" href="#c_ind">{{$frtxt['frtxt_individual']}}</a>
                                </li>
                            </ul>
                           <div id="c_org" class="tab_container active">

                             <div class="c_org_sub active" id="c_org_m">
                                 <div class="form-group wesg_input_group">
                                     <label for="o_mobile" style="font-weight: bold">{{$frtxt['frtxt_mobile']}}</label>
                                     <input type="text" class="form-control regctrl" name="o_mobile" id="o_mobile" placeholder="">
                                     <div class="invalid-feedback text-right feedback-o_mobile">{{$frtxt['frtxt_please']}}.</div>
                                 </div>
                                 <div class="form-group wesg_input_group"  style="position: relative;">
                                     <label for="o_ckcode" style="font-weight: bold">{{$frtxt['frtxt_verification']}} {{$frtxt['frtxt_code']}}</label>
                                     <input type="text" class="form-control regctrl" name="o_ckcode" id="o_ckcode" placeholder="" autocomplete="Off">
                                     <div class="o_div_ckbtn" style="position: absolute;right: 2%;top: 55%;cursor: pointer">{{$frtxt['frtxt_send']}} {{$frtxt['frtxt_code']}}</div>
                                     <input type="hidden" id="o_recvcode" name="o_recvcode" value=0/>
                                     <div class="invalid-feedback text-right  feedback-o_ckcode">{{$frtxt['frtxt_please']}}.</div>
                                 </div>
                                 <div class="form-group wesg_input_group">
                                     <label for="o_mpwd" style="font-weight: bold">{{$frtxt['frtxt_password']}}</label>
                                     <input type="password" class="form-control regctrl" name="o_mpwd" id="o_mpwd" placeholder="" autocomplete="Off">
                                      <div class="invalid-feedback text-right feedback-o_mpwd">{{$frtxt['frtxt_please']}}.</div>
                                 </div>
                                 <div class="form-group wesg_input_group">
                                     <label for="o_mpwd1" style="font-weight: bold">{{$frtxt['frtxt_confirm']}} {{$frtxt['frtxt_pwd']}}</label>
                                     <input type="password" class="form-control regctrl" name="o_mpwd1" id="o_mpwd1" placeholder="{{$frtxt['frtxt_enter']}} {{$frtxt['frtxt_pwd']}}" autocomplete="off">
                                     <div class="valid-feedback">{{$frtxt['frtxt_valid']}}.</div>
                                     <div class="invalid-feedback text-right feedback-o_mpwd1">{{$frtxt['frtxt_please']}}.</div>
                                 </div>
                             </div>

                               <div class="c_org_sub" id="c_org_e">
                                   <div class="form-group wesg_input_group">
                                       <label for="o_email" style="font-weight: bold">{{$frtxt['frtxt_email']}}</label>
                                       <input type="text" class="form-control regctrl" name="o_email" id="o_email" placeholder="">
                                       <div class="invalid-feedback text-right feedback-o_email">{{$frtxt['frtxt_please']}}.</div>
                                   </div>

                                   <div class="form-group wesg_input_group">
                                       <label for="o_epwd" style="font-weight: bold">{{$frtxt['frtxt_password']}}</label>
                                       <input type="password" class="form-control regctrl" name="o_epwd" id="o_epwd" placeholder="" autocomplete="Off">
                                        <div class="invalid-feedback text-right feedback-o_epwd">{{$frtxt['frtxt_please']}}.</div>
                                   </div>

                                   <div class="form-group wesg_input_group">
                                       <label for="o_epwd1" style="font-weight: bold">{{$frtxt['frtxt_confirm']}} {{$frtxt['frtxt_pwd']}}</label>
                                       <input type="password" class="form-control regctrl" name="o_epwd1" id="o_epwd1" placeholder="{{$frtxt['frtxt_enter']}} {{$frtxt['frtxt_pwd']}}" autocomplete="off">
                                        <div class="invalid-feedback text-right feedback-o_epwd1">{{$frtxt['frtxt_please']}}.</div>
                                   </div>
                               </div>

                               <div class="form-group d-flex flex-row wesg-reg-btns" style="align-items:center;margin-bottom:0.5rem;justify-content:center">
                                   <div class="wesg-submit-btn">
                                       <button type="button" class="btn btn-primary" id="o_reg_org">{{$frtxt['frtxt_registered']}}</button>
                                   </div>
                                   <div class="wesg-retpwd-btn">
                                       <a href="#" style="color:#af6067;text-decoration: underline;" class="c_org_change_btn">{{$frtxt['frtxt_email']}} {{$frtxt['frtxt_reg']}}</a>
                                   </div>
                               </div>
                               <div style="text-align: right" class="wes-orghelper-container">
                                   <i style="font-size: 18px;color: #aaa;cursor: pointer" class="far orghelpericon" id="i_org_help"></i>
                               </div>

                           </div>

                            <div id="c_ind" class="tab_container">

                                <div class="c_ind_sub active" id="c_ind_m">
                                    <div class="form-group wesg_input_group">
                                        <label for="i_mobile" style="font-weight: bold">{{$frtxt['frtxt_mobile']}}</label>
                                        <input type="text" class="form-control regctrl" name="i_mobile" id="i_mobile" placeholder="">
                                        <div class="invalid-feedback text-right feedback-i_mobile">{{$frtxt['frtxt_please']}}.</div>
                                    </div>
                                    <div class="form-group wesg_input_group" style="position: relative;">
                                        <label for="i_ckcode" style="font-weight: bold">{{$frtxt['frtxt_verification']}} {{$frtxt['frtxt_code']}}</label>
                                        <input type="text" class="form-control regctrl" name="i_ckcode" id="i_ckcode" placeholder="" autocomplete="Off">
                                        <div class="i_div_ckbtn" style="position: absolute;right: 2%;top: 55%;cursor: pointer">{{$frtxt['frtxt_send']}} {{$frtxt['frtxt_code']}}</div>
                                        <input type="hidden" id="i_recvcode" name="i_recvcode" value=0/>
                                        <div class="invalid-feedback text-right feedback-i_ckcode">{{$frtxt['frtxt_please']}}.</div>
                                    </div>
                                    <div class="form-group wesg_input_group">
                                        <label for="i_mpwd" style="font-weight: bold">{{$frtxt['frtxt_password']}}</label>
                                        <input type="password" class="form-control regctrl" name="i_mpwd" id="i_mpwd" placeholder="" autocomplete="Off">
                                        <div class="invalid-feedback text-right feedback-i_mpwd">{{$frtxt['frtxt_please']}}.</div>
                                    </div>
                                    <div class="form-group wesg_input_group">
                                        <label for="i_mpwd1" style="font-weight: bold">{{$frtxt['frtxt_confirm']}} {{$frtxt['frtxt_pwd']}}</label>
                                        <input type="password" class="form-control regctrl" name="i_mpwd1" id="i_mpwd1" placeholder="{{$frtxt['frtxt_enter']}} {{$frtxt['frtxt_pwd']}}" autocomplete="off">
                                        <div class="valid-feedback">{{$frtxt['frtxt_valid']}}.</div>
                                        <div class="invalid-feedback text-right feedback-i_mpwd1">{{$frtxt['frtxt_please']}}.</div>
                                    </div>
                                </div>

                                <div class="c_ind_sub" id="c_ind_e">
                                    <div class="form-group wesg_input_group">
                                        <label for="i_email" style="font-weight: bold">{{$frtxt['frtxt_email']}}</label>
                                        <input type="text" class="form-control regctrl" name="i_email" id="i_email" placeholder="">
                                        <div class="invalid-feedback text-right feedback-i_email">{{$frtxt['frtxt_please']}}.</div>
                                    </div>

                                    <div class="form-group wesg_input_group" style="position: relative;">
                                        <label for="i_epwd" style="font-weight: bold">{{$frtxt['frtxt_password']}}</label>
                                        <input type="password" class="form-control regctrl" name="i_epwd" id="i_epwd" placeholder="" autocomplete="Off">
                                        <div class="invalid-feedback text-right feedback-i_epwd">{{$frtxt['frtxt_please']}}.</div>
                                    </div>

                                    <div class="form-group wesg_input_group">
                                        <label for="i_epwd1" style="font-weight: bold">{{$frtxt['frtxt_confirm']}} {{$frtxt['frtxt_pwd']}}</label>
                                        <input type="password" class="form-control regctrl" name="i_epwd1" id="i_epwd1" placeholder="{{$frtxt['frtxt_enter']}} {{$frtxt['frtxt_pwd']}}" autocomplete="off">
                                        <div class="invalid-feedback text-right feedback-i_epwd1">{{$frtxt['frtxt_please']}}.</div>
                                    </div>
                                </div>


                                <div class="form-group d-flex flex-row wesg-reg-btns" style="align-items:center;margin-bottom:0.5rem;justify-content:center">
                                    <div class="wesg-submit-btn">
                                        <button type="button" class="btn btn-primary" id="i_reg_ind">{{$frtxt['frtxt_registered']}}</button>
                                    </div>
                                    <div class="wesg-retpwd-btn">
                                        <a href="#" style="color:#af6067;text-decoration: underline;" class="c_ind_change_btn">{{$frtxt['frtxt_email']}} {{$frtxt['frtxt_reg']}}</a>
                                    </div>
                                </div>
                                <div style="text-align: right" class="wes-indhelper-container" id="i_ind_help">
                                    <i style="font-size: 18px;color: #aaa;cursor: pointer" class="far indhelpericon"></i>
                                </div>

                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    </section>
    <script type="text/javascript">
        var please = "{{$frtxt['frtxt_please']}}";
        var emailreg = "{{$frtxt['frtxt_email']}} {{$frtxt['frtxt_registered']}}";
        var emptycode = "{{$frtxt['frtxt_epvercode']}}";
        var pwdsame = "{{$frtxt['frtxt_pwdsame']}}";
        var vercodeno = "{{$frtxt['frtxt_vercodeno']}}";
        var phoneregd = "{{$frtxt['frtxt_phoneregd']}}";
        var noemailtype = "{{$frtxt['frtxt_noemailtype']}}";
        var nophonenum = "{{$frtxt['frtxt_nophonenum']}}";
        var mobilereg = "{{$frtxt['frtxt_mobile']}} {{$frtxt['frtxt_reg']}}";
        var fsuccess = "{{$frtxt['frtxt_success']}}";
        var freg = "{{$frtxt['frtxt_reg']}}";
        var ferror = "{{$frtxt['frtxt_errors']}}";
        var mailregd = "{{$frtxt['frtxt_mailregd']}}";

        function invalidfeedbackMsg(clsobj, msg){
            $('.feedback-'+clsobj).addClass('d-block');
            if(msg!=='')
                $('.feedback-'+clsobj).text(msg);
            setTimeout(function () {
                $('.feedback-'+clsobj).removeClass('d-block');
                $('.feedback-'+clsobj).text(please);
            },2000);
        }

        function WesResisterCheck(url, params){
            var rt='';
            $.ajax({
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                url: url,
                type: 'POST',
                data: params,
                async:false,
                dataType: 'json',
                success: function(data, textStatus, jqXHR)
                {
                      rt=data.status;
                },
                error: function(jqXHR, textStatus, errorThrown)
                {
                   //alert("ERRORS: : " + textStatus);
                    //console.log('ERRORS: ' + textStatus);
                    rt=textStatus;
                }
            });

            return rt;
        }

        $(document).ready(function(){
            /* change tab */
            $('form#wesg_login_frm ul.nav.nav-tabs li').click(function () {
                $('form#wesg_login_frm ul.nav.nav-tabs li').removeClass('active');
                $(this).addClass('active');

                var v=$(this).attr('data-tab');
                $('input[name="tab_ck"]').val(v);
                $('input[name="sub_ck"]').val('m');

                $('.reg_container').removeClass('small_cont');
                $('#c_org_m').addClass('active');
                $('#c_org_e').removeClass('active');
                $('form#wesg_login_frm .c_org_change_btn').text(emailreg);

                $('.reg_container').removeClass('small_cont');
                $('#c_ind_m').addClass('active');
                $('#c_ind_e').removeClass('active');
                $('form#wesg_login_frm .c_ind_change_btn').text(emailreg);
            });

            /* click register btn of organization and individual */
            $('#o_reg_org, #i_reg_ind').click(function () {
                var tv = $('input[name="tab_ck"]').val();
                var sv = $('input[name="sub_ck"]').val();
                if(tv==='org')
                {
                    if(sv==='m')
                    {
                        var moblie =  $.trim($('#o_mobile').val());
                        var ckcode =  $.trim($('#o_ckcode').val());
                        var pass =  $.trim($('#o_mpwd').val());
                        var pass1 =  $.trim($('#o_mpwd1').val());
                        var o_recvcode =  $.trim($('#o_recvcode').val());
                        if(moblie.length < 1){
                            invalidfeedbackMsg('o_mobile','');
                            return;
                        }
                        if(ckcode.length < 1){
                            invalidfeedbackMsg('o_ckcode','');
                            return;
                        }
                        if(parseInt(o_recvcode) < 1){
                            invalidfeedbackMsg('o_ckcode',emptycode);
                            return;
                        }
                       /* if(parseInt(ckcode) !==parseInt(o_recvcode)){
                            invalidfeedbackMsg('o_ckcode','verification code is not correct!');
                            $('#o_recvcode').val(0);
                            return;
                        }*/
                        if(pass.length < 1){
                            invalidfeedbackMsg('o_mpwd','');
                            return;
                        }
                        if(pass1.length < 1){
                            invalidfeedbackMsg('o_mpwd1','');
                            return;
                        }
                        if(pass!==pass1){
                            invalidfeedbackMsg('o_mpwd',pwdsame);
                            return;
                        }

                        var url='/wesTORegCheck';
                        var postData = {
                            regtype: sv,
                            phone:moblie,
                            pwd:pass,
                            incode:ckcode,
                            recvcode:o_recvcode
                        };

                       var result = WesResisterCheck(url,postData);
                       if(result==='errcode')
                       {
                           invalidfeedbackMsg('o_ckcode',vercodeno);
                           $('#o_recvcode').val(0);
                       }
                       else if(result==='duser')
                       {
                           invalidfeedbackMsg('o_mobile',phoneregd);
                        }
                       else if(result==='regok')
                       {
                          alert(fsuccess);
                       }

                      $('#wesg_login_frm')[0].reset();

                    }
                    else if(sv==='e')
                    {
                        var o_email =  $.trim($('#o_email').val());
                        var o_epwd =  $.trim($('#o_epwd').val());
                        var o_epwd1 =  $.trim($('#o_epwd1').val());
                        if(!IsEmail(o_email)){
                            invalidfeedbackMsg('o_email',noemailtype);
                            return;
                        }
                        if(o_epwd.length < 1){
                            invalidfeedbackMsg('o_epwd','');
                            return;
                        }
                        if(o_epwd1.length < 1){
                            invalidfeedbackMsg('o_epwd1','');
                            return;
                        }
                        if(o_epwd!==o_epwd1){
                            invalidfeedbackMsg('o_epwd',pwdsame);
                            return;
                        }

                        var url='/wesTORegCheck';
                        var postData = {
                            regtype: sv,
                            email:o_email,
                            pwd:o_epwd
                        };

                        var result = WesResisterCheck(url,postData);
                        if(result==='duser')
                        {
                            invalidfeedbackMsg('o_email',mailregd);
                        }
                        else if(result==='regok')
                        {
                           alert(fsuccess);
                        }

                        $('#wesg_login_frm')[0].reset();

                    }
                }
                else if(tv==='ind')
                {
                    if(sv==='m')
                    {
                        var moblie =  $.trim($('#i_mobile').val());
                        var ckcode =  $.trim($('#i_ckcode').val());
                        var pass =  $.trim($('#i_mpwd').val());
                        var pass1 =  $.trim($('#i_mpwd1').val());
                        var i_recvcode =  $.trim($('#i_recvcode').val());
                        if(moblie.length < 1){
                            invalidfeedbackMsg('i_mobile','');
                            return;
                        }
                        if(ckcode.length < 1){
                            invalidfeedbackMsg('i_ckcode','');
                            return;
                        }
                        if(parseInt(i_recvcode) < 1){
                            invalidfeedbackMsg('i_ckcode',emptycode);
                            return;
                        }
                        if(parseInt(ckcode) !==parseInt(i_recvcode)){
                            invalidfeedbackMsg('i_ckcode',vercodeno);
                            $('#i_recvcode').val(0);
                            return;
                        }
                        if(pass.length < 1){
                            invalidfeedbackMsg('i_mpwd','');
                            return;
                        }
                        if(pass1.length < 1){
                            invalidfeedbackMsg('i_mpwd1','');
                            return;
                        }
                        if(pass!==pass1){
                            invalidfeedbackMsg('i_mpwd',pwdsame);
                            return;
                        }
                        // to server. moblie, pass
                        var url='/wesTIRegCheck';
                        var postData = {
                            regtype: sv,
                            phone:moblie,
                            pwd:pass,
                            incode:ckcode,
                            recvcode:i_recvcode
                        };

                        var result = WesResisterCheck(url,postData);
                        if(result==='errcode')
                        {
                            invalidfeedbackMsg('i_ckcode',vercodeno);
                            $('#i_recvcode').val(0);
                        }
                        else if(result==='duser')
                        {
                            invalidfeedbackMsg('i_mobile',phoneregd);
                        }
                        else if(result==='regok')
                        {
                            alert(fsuccess+' '+freg);
                        }

                        $('#wesg_login_frm')[0].reset();

                    }
                    else if(sv==='e')
                    {
                        var i_email =  $.trim($('#i_email').val());
                        var i_epwd =  $.trim($('#i_epwd').val());
                        var i_epwd1 =  $.trim($('#i_epwd1').val());
                        if(!IsEmail(i_email)){
                            invalidfeedbackMsg('i_email',noemailtype);
                            return;
                        }
                        if(i_epwd.length < 1){
                            invalidfeedbackMsg('i_epwd','');
                            return;
                        }
                        if(i_epwd1.length < 1){
                            invalidfeedbackMsg('i_epwd1','');
                            return;
                        }
                        if(i_epwd!==i_epwd1){
                            invalidfeedbackMsg('i_epwd',pwdsame);
                            return;
                        }
                        // to server i_email, i_epwd
                        var url='/wesTIRegCheck';
                        var postData = {
                            regtype: sv,
                            email:i_email,
                            pwd:i_epwd
                        };

                        var result = WesResisterCheck(url,postData);
                        if(result==='errcode')
                        {
                            invalidfeedbackMsg('i_ckcode',vercodeno);
                            $('#i_recvcode').val(0);
                        }
                        else if(result==='duser')
                        {
                            invalidfeedbackMsg('i_mobile',phoneregd);
                        }
                        else if(result==='regok')
                        {
                            alert(fsuccess+' '+freg);
                        }

                        $('#wesg_login_frm')[0].reset();
                    }

                }
            });
            /* SMS mobile part  organization*/
            $('form#wesg_login_frm .o_div_ckbtn').click(function () {
                var moblie =  $.trim($('#o_mobile').val());
                if(moblie.length < 1){
                    invalidfeedbackMsg('o_mobile','');
                    return;
                }
                if(!IsPhoneNumber(moblie))
                {
                    invalidfeedbackMsg('o_mobile',nophonenum);
                    return;
                }

                 /*  alert("Success : Send verify Code, show your phone! 995474");
                    $('#o_recvcode').val("31279974457921");//995474
                    return;*/

                var svurl = 'admin.svurlfromSMS';
                $.ajax({
                    url: svurl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    type: 'POST',
                    data: {
                        phone: moblie
                    },
                    cache: false,
                    dataType: 'json',
                    success: function(data, textStatus, jqXHR)
                    {
                        if( data.status == 'ok')
                        {
                            $('#o_recvcode').val(data.ckcode);
                            alert(fsuccess+" : "+sendvercode);
                        }
                        else
                        {
                            alert(ferror+" : " + data.status);
                            //console.log('ERRORS: ' + data.status);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown)
                    {
                        alert(ferror+" : " + textStatus);
                        //console.log('ERRORS: ' + textStatus);
                    }
                });
            });
            /* SMS mobile part  individual*/
            $('form#wesg_login_frm .i_div_ckbtn').click(function () {
               var moblie =  $.trim($('#i_mobile').val());
                if(moblie.length < 1){
                    invalidfeedbackMsg('i_mobile','');
                    return;
                }
                if(!IsPhoneNumber(moblie))
                {
                    invalidfeedbackMsg('i_mobile',nophonenum);
                    return;
                }

                //ckd
               /* alert("Success : Send verify Code, show your phone! 995474");
                $('#i_recvcode').val("31279974457921");//995,474
                return;*/

                var svurl = 'admin.svurlfromSMS';
                $.ajax({
                    url: svurl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    type: 'POST',
                    data: {
                        phone: moblie
                    },
                    cache: false,
                    dataType: 'json',
                    success: function(data, textStatus, jqXHR)
                    {
                        if( data.status == 'ok')
                        {
                            $('#i_recvcode').val(data.ckcode);
                            alert(fsuccess+" : "+sendvercode);
                        }
                        else
                        {
                            alert(ferror+" : " + data.status);
                           // console.log('ERRORS: ' + data.status);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown)
                    {
                        alert(ferror+" : " + textStatus);
                        //console.log('ERRORS: ' + textStatus);
                    }
                });
            });
            /* organization  */
            $('form#wesg_login_frm .c_org_change_btn').click(function () {
               var v = $('input[name="sub_ck"]').val();
               if(v==='m'){
                   $('.reg_container').addClass('small_cont');
                   $('#c_org_m').removeClass('active');
                   $('#c_org_e').addClass('active');
                   $('input[name="sub_ck"]').val('e');
                   $(this).text(mobilereg);
               }
               else if(v==='e'){
                   $('.reg_container').removeClass('small_cont');
                   $('#c_org_m').addClass('active');
                   $('#c_org_e').removeClass('active');
                   $('input[name="sub_ck"]').val('m');
                   $(this).text(emailreg);
               }
            });
            /* individual  */
            $('form#wesg_login_frm .c_ind_change_btn').click(function () {
                var v = $('input[name="sub_ck"]').val();
                if(v==='m'){
                    $('.reg_container').addClass('small_cont');
                    $('#c_ind_m').removeClass('active');
                    $('#c_ind_e').addClass('active');
                    $('input[name="sub_ck"]').val('e');
                    $(this).text(mobilereg);
                }
                else if(v==='e'){
                    $('.reg_container').removeClass('small_cont');
                    $('#c_ind_m').addClass('active');
                    $('#c_ind_e').removeClass('active');
                    $('input[name="sub_ck"]').val('m');
                    $(this).text(emailreg);
                }
            });


            var orgcont = '{{$orgHelper}}';
            var orgbackcolor='';
            var orgbordercolor='';
            var orgfontcolor='';
            var orghelp='';
            if(orgcont!='')
            {
                orgcont = htmldecodejs(orgcont);
                orgcont = $.parseJSON(orgcont);

                orgbackcolor='background:'+orgcont.backcolor+';';
                orgbordercolor='border:1px solid; border-color:'+orgcont.bordercolor+';';
                orgfontcolor='color:'+orgcont.fontcolor+';';
                orghelp = decodeURIComponent(orgcont.help);
            }
            else
            {
                orgbackcolor='background: #ffffff;';
                orgbordercolor='border:1px solid #d6d6d6;';
                orgfontcolor='font-color: #00000099;';
            }

            $('.orghelpericon').mouseenter(function () {
                if(orghelp=='')return;
                $('.instructionToolTip').remove();
                var tag = '<div class="instructionToolTip" style="'+orgbackcolor + orgbordercolor + '"><pre style="margin:0;font-size: 14px; '+orgfontcolor+'">'+orghelp+'</pre></div>';
                $('.wes-orghelper-container').append(tag);
                $('.wes-orghelper-container .instructionToolTip').css({'position':'relative','left':'5%','top':'10px'});
            });

            $('.orghelpericon').mouseleave(function () {
                $('.wes-orghelper-container .instructionToolTip').remove();
            });

            var indcont = '{{$indHelper}}';
            var indbackcolor='';
            var indbordercolor='';
            var indfontcolor='';
            var indhelp='';
            if(indcont!='')
            {
                indcont = htmldecodejs(indcont);
                indcont = $.parseJSON(indcont);

                indbackcolor='background:'+indcont.backcolor+';';
                indbordercolor='border:1px solid; border-color:'+indcont.bordercolor+';';
                indfontcolor='color:'+indcont.fontcolor+';';
                indhelp = decodeURIComponent(indcont.help);
            }
            else
            {
                indbackcolor='background: #ffffff;';
                indbordercolor='border:1px solid #d6d6d6;';
                indfontcolor='font-color: #00000099;';
            }

            $('.indhelpericon').mouseenter(function () {
                if(indhelp=='')return;
                $('.wes-indhelper-container .instructionToolTip').remove();
                var tag1 = '<div class="instructionToolTip" style="'+indbackcolor + indbordercolor + '"><pre style="margin:0;font-size: 14px; '+indfontcolor+'">'+indhelp+'</pre></div>';
                $('.wes-indhelper-container').append(tag1);
                $('.wes-indhelper-container .instructionToolTip').css({'position':'relative','left':'5%','top':'10px'});
            });

            $('.indhelpericon').mouseleave(function () {
                $('.wes-indhelper-container .instructionToolTip').remove();
            });

        });
    </script>
@endsection
