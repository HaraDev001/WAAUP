@extends('layouts.admin_layout')

@section('content')
    <!--strt part-->
    <div class="container">
        <div class="adminloginfrmcontainer">
            <h2>Login</h2>
            <form action="admin.temp" enctype="multipart/form-data" id="adminlogin_temp" name="adminlogin_temp" method="post">
                {{ csrf_field() }}
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="temail" placeholder="Enter email" name="temail">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="tpwd" placeholder="Enter password" name="tpwd">
                </div>
                <div class="form-group mb-0 text-center">
                <button type="submit" class="btn btn-success mt-3" >Submit</button>
                </div>
            </form>
        </div>
		{{--<form action="admin.userinfopage" enctype="multipart/form-data" id="adminlogin_frm" name="adminlogin_frm" method="post" style="width:100%;height:1px;">--}}
        <form action="admin.dashboard" enctype="multipart/form-data" id="adminlogin_frm" name="adminlogin_frm" method="post" style="width:100%;height:1px;">
		{{ csrf_field() }}
		<input type="hidden" class="form-control" id="email"  name="email" value="">
		<input type="hidden" class="form-control" id="pwd"  name="pwd" value="">
		</form>
    </div>
    <!--end part-->
	<script>
	$(document).ready(function(){

		$("#adminlogin_temp").submit(function (event) {
			event.preventDefault();

			var temail = $.trim($("#temail").val());
			var tpwd = $.trim($("#tpwd").val());

			if(temail=="" || tpwd==""){
				return false;
				alert("Empty email or pwd");
			}

			$.ajax({
				url: '/admincheck',
				method: 'POST',
				headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),'email':temail,'pwd':tpwd},
				async: false,
				success: function (data) {
					if(data.type=="success")
					{
						if(data.approve!="ys")
						{
							alramMSG("you have not admin permision!");
							return false;
						}
						else
						{
							$("#email").val(temail);
							$("#pwd").val(tpwd);
							$("#adminlogin_frm").submit();
						}
					}
					else
					{
						alramMSG("invalid admin info. please again.");
						return false;
					}

				},
				error: function (jqXHR, errdata, errorThrown) {
					alert('Error ajax');
					return false;
				},
				cache: false,
				contentType: false,
				processData: false
			});

		});

	});
	</script>

@endsection
