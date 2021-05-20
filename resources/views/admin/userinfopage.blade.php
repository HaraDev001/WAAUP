@extends('layouts.admin_layout')

@section('content')
    <!--strt part-->
    <div class="container" style="padding: 20px 0">
        <div class="row title-row">
            <div class="col-admin-1 line-show-top line-show-left">Photo</div>
            <div class="col-admin-1 line-show-top line-show-left">Name</div>
            <div class="col-admin-1 line-show-top line-show-left">Email</div>
            <div class="col-admin-1 line-show-top line-show-left">Phone number</div>
			<div class="col-admin-1 line-show-top line-show-left" style="line-height:1.2rem">Certificate  picture</div>
            <div class="col-admin-2 line-show-top line-show-left">Contactaddress</div>
            <div class="col-admin-1 line-show-top line-show-left">Status</div>
            <div class="col-admin-2 line-show-top line-show-left line-show-right">
                Action
            </div>
        </div>
		<?php $i = 0;?>
		 @foreach($userlists as $user)
		 <div class="row" style="text-align: center;">
            <div class="col-admin-1 line-show-top line-show-left col-admin-colum-ctrl">
			@if($user->photo!=null && $user->photo!="")
			 <img src="/uploads/images/{{$user->photo}}" data-cont="{{$user->name}}" style="width:40px;height:auto;cursor:pointer" onerror="this.src ='/images/noimg.png';">
		    @endif
			</div>
            <div class="col-admin-1 line-show-top line-show-left col-admin-colume"><p>{{$user->name}}</p></div>
            <div class="col-admin-1 line-show-top line-show-left col-admin-colume">{{$user->email}}</div>
            <div class="col-admin-1 line-show-top line-show-left col-admin-colume">{{$user->contactmethod}}</div>
			<div class="col-admin-1 line-show-top line-show-left col-admin-colum-ctrl">
			@if($user->uploaddoc!=null && $user->uploaddoc!="")
				<img src="/uploads/pdoc/{{$user->uploaddoc}}" data-cont="{{$user->name}}" style="width:40px;height:auto;cursor:pointer" onerror="this.src ='/images/noimg.png';">
			@endif
			</div>
            <div class="col-admin-2 line-show-top line-show-left col-admin-colume">{{$user->contactaddr}}</div>
            <div class="col-admin-1 line-show-top line-show-left col-admin-colume" id="wait-{{$i}}"> @if($user->permit == 0) Waiting.. @else Approved @endif </div>
            <div class="col-admin-2 line-show-top line-show-left line-show-right col-admin-colum-ctrl">
                <button class="btn userapprove @if($user->permit > 0) btn-secondary @else btn-primary @endif" @if($user->permit > 0) data-val="1" @else data-val="0" @endif  data-cont="{{$user->email}}" id="abtn-{{$i}}">Approve</button>
                <button class="btn usercancel @if($user->permit < 1) btn-secondary @else btn-primary @endif" @if($user->permit < 1) data-val="1" @else data-val="0" @endif data-cont="{{$user->email}}" id="cbtn-{{$i}}">Cancel</button>
				<!-- <button class="btn  btn-secondary" id="userdel">Delete</button> -->
            </div>
         </div>
		 <?php $i++; ?>
		 @endforeach

        <div class="row line-show-bottom" style="justify-content: center;text-align: center;"></div>
    </div>
    <!--end part-->

	<script>

	$(document).ready(function(){

	   $("img").click(function(){
		   var src =$(this).attr("src");
		   var name =$(this).attr("data-cont");
		   var htm='<img src="'+src+'"  style="width:100%;height:auto;" onerror="this.src =\'/images/noimg.png\';">';
		   adminpageImgzoom(name,htm);
	   });



		$(".userapprove").click(function(){

           if($(this).attr('data-val')=="1")
				return;

			if (window.confirm("Would you like to approve it?。")){
				var pemail=$(this).attr("data-cont");
				var mid=$(this).attr("id");
				 $.ajax({
					url: 'admin.approve',
					method: 'POST',
					headers: {'email':pemail,'id':mid},
					async: false,
					success: function (data) {
						if(data.type=="success")
						{
							var scnt=data.scnt;
							alert(scnt);

							if(scnt.indexOf("p") > -1 && scnt.indexOf("e") > -1)
								alert("Sent  Email and SMS successfully for Approved");
							else
							{
								if(scnt.indexOf("p") > -1)
								  alert("Sent  SMS  successfully for Approved");

								if(scnt.indexOf("e") > -1)
								  alert("Sent  Email successfully for Approved");
							}

							var tctrl = data.id;
							$('#'+tctrl).removeClass('btn-primary').addClass('btn-secondary');
							$('#'+tctrl).attr('data-val','1');

							var id= tctrl.split('-')[1];
							$('#cbtn-'+id).removeClass('btn-secondary').addClass('btn-primary');
							$('#cbtn-'+id).attr('data-val','0');

							$('#wait-'+id).text('Approved');
						}
						else
							alert("error approve");

					},
					error: function (jqXHR, errdata, errorThrown) {
						alert("error ajax");
					},
					cache: false,
					contentType: false,
					processData: false
				});
			}
		});

		$(".usercancel").click(function(){

			  if($(this).attr('data-val')=="1")
				return;

			var result = window.prompt('真的要取消吗?。请表明取消理由。');
			if(result!=null)
			{
				if(result==""){
					alert("please write cancel condition!");
					return;
				}
			var pemail=$(this).attr("data-cont");
			var encoded = encodeURIComponent(result);
			var mid=$(this).attr("id");

				 $.ajax({
					url: 'admin.cancel',
					method: 'POST',
					headers: {'email':pemail,'id':mid,'cont':encoded},
					async: false,
					success: function (data) {
						if(data.type=="success"){
							var scnt=data.scnt;

							if(scnt.indexOf("p") > -1 && scnt.indexOf("e") > -1)
								alert("Sent  Email and SMS successfully for canceled");
							else
							{
								if(scnt.indexOf("p") > -1)
								  alert("Sent  SMS  successfully for canceled");

								if(scnt.indexOf("e") > -1)
								  alert("Sent  Email successfully for canceled");
							}

							var tctrl = data.id;
							$('#'+tctrl).removeClass('btn-primary').addClass('btn-secondary');
							$('#'+tctrl).attr('data-val','1');

							var id= tctrl.split('-')[1];
							$('#abtn-'+id).removeClass('btn-secondary').addClass('btn-primary');
							$('#abtn-'+id).attr('data-val','0');

							$('#wait-'+id).text('Waiting..');
						}
						else
						{
							alert("error cancel");
						}


					},
					error: function (jqXHR, errdata, errorThrown) {
						alert("error ajax");
					},
					cache: false,
					contentType: false,
					processData: false
				});
			}
		});

		$("#userdel").click(function(){
			if (window.confirm("真的要删除吗?。"))
			{
				var email=$(this).attr("data-cont");
						 $.ajax({
							url: 'admin.delete',
							method: 'POST',
							data: {email:email},
							async: false,
							success: function (data) {
								if(data.type=="success"){
									alert("ok delete");
								}
								else
									alert("error delete");

							},
							error: function (jqXHR, errdata, errorThrown) {
							},
							cache: false,
							contentType: false,
							processData: false
						});
			}
		});

	});
	</script>


@endsection

