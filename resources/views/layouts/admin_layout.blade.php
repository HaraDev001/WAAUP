<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/wes-logo.ico">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="fonts/fontawesome-all.min.css">
    <link rel="stylesheet" href="fonts/ionicons.min.css">
    <link rel="stylesheet" href="css/adminpage.css">

	<!-- jQuery library -->
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<!-- Popper JS -->
	<script type="text/javascript" src="js/popper.min.js"></script>
	<!-- Latest compiled JavaScript -->
	<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="./js/common.js"></script>

    <title>WES-ADMIN</title>
</head>
<body>
<div  style="width: 100%">
    <!-- start header part -->
    <header>
        <div class="container-fluid container-bk">
                <div class="row">
                    <div class="col-sm-3" style="flex: 0 0 25%;max-width: 25%;"><img src="images/WES-LOGO8.png" class="logoimg"  alt="" onerror="this.src ='/images/noimg.png';"/></div>
                    <div class="col-sm-9 row-col-title" style="flex: 0 0 74%;max-width: 74%;">Manager  page</div>
                </div>
        </div>
    </header>
    <!--end header part-->

    @yield('content')


</div>

  <!-- The Modal start-->
<div class="modal fade" id="myAlertModal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
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
 <!-- The Modal start-->
<div class="modal fade" id="myImgViewModal" style="top:160px;">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title" id="imgviewmodelname">View</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body" id="myImgViewModalbody">
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

</body>
</html>
