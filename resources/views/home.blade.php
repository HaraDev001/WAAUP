@extends('layouts.home_layout')
@section('content')
    <section class="section-main" style="background: url('{{$pgbk}}'); background-size: cover; background-repeat: no-repeat; position: relative; height: calc(100vh - 10.8vh/*120px*/ - 27vh);">
        <!-- content-center -->
        <div style="flex-direction: column; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; justify-content: center; align-items: center; display: flex;">
            <!-- search box -->
            <div class="search-group">
                <div class="no-gutters" id="searchinputcontainer" style="margin: auto; width: 41.66vw/*800px*/; height: 10.8vh/*120px*/;min-width: 420px;min-height: 90px">
                    <div class="col header" style="/*padding-left: 25px;*/">
                        <div class="header-container">
                            <div class="header-search-full-container display-none active">
                                <div class="search-icon" style="flex-grow: 0">
                                    <button class="btn" style="/*padding: 10px*/">
                                        <svg t="1600751578690" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3237"><path d="M431.460674 862.921348C192.719101 862.921348 0 670.202247 0 431.460674S192.719101 0 431.460674 0s431.460674 192.719101 431.460674 431.460674-192.719101 431.460674-431.460674 431.460674z m0-776.629213C241.617978 86.292135 86.292135 241.617978 86.292135 431.460674s155.325843 345.168539 345.168539 345.168539 345.168539-155.325843 345.168539-345.168539S621.303371 86.292135 431.460674 86.292135z" fill="#252525" p-id="3238"></path><path d="M963.595506 1006.741573c-11.505618 0-23.011236-2.876404-31.64045-11.505618l-230.112359-230.112359c-17.258427-17.258427-17.258427-43.146067 0-60.404495s43.146067-17.258427 60.404494 0l230.11236 230.11236c17.258427 17.258427 17.258427 43.146067 0 60.404494-5.752809 8.629213-17.258427 11.505618-28.764045 11.505618z" fill="#252525" p-id="3239"></path></svg>
                                    </button>
                                </div>
                                <div class="search-content" style="flex-grow: 10">
                                    <input class="form-control search-input" type="text" id="search-input-val" style="font-size: 0.83rem/*16px*/; color: #7889b3;/* height: 0.5vh*/" placeholder="{{$frtxt['frtxt_search']}} {{$frtxt['frtxt_for']}} {{$frtxt['frtxt_courses']}}.." value="" autocomplete="on">
                                </div>
                                <div class="search-close" style="flex-grow: 0">
                                    <svg t="1600751602857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4007"><path d="M497.220619 717.85567c107.678351 0 194.243299-86.564948 194.243299-194.243299V202.68866c0-107.678351-86.564948-194.243299-194.243299-194.243299s-194.243299 86.564948-194.243299 194.243299v320.923711c2.11134 107.678351 86.564948 194.243299 194.243299 194.243299z m299.810309-333.591752c-21.113402 0-38.004124 16.890722-38.004124 38.004123v105.567011c0 145.682474-118.235052 263.917526-263.917526 263.917525S231.191753 673.517526 231.191753 527.835052v-114.012372c0-21.113402-16.890722-38.004124-38.004124-38.004123s-38.004124 16.890722-38.004124 38.004123V527.835052c0 173.129897 133.014433 318.812371 301.92165 337.814433v82.342268h-126.680413c-21.113402 0-38.004124 16.890722-38.004123 38.004123s16.890722 38.004124 38.004123 38.004124h331.480413c21.113402 0 38.004124-16.890722 38.004123-38.004124s-16.890722-38.004124-38.004123-38.004123h-126.680413V865.649485c168.907216-16.890722 301.921649-162.573196 301.92165-337.814433v-105.567011c-2.11134-23.224742-19.002062-38.004124-40.115464-38.004123z" p-id="4008"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div style="padding-left: 20px; margin-top: 7px; color: #b5b5b5; display: flex; flex-direction: row">
                            <span id="moresearchterms" style="font-size: 0.8em/*14px*/">{{$frtxt['frtxt_more']}} {{$frtxt['frtxt_search']}} {{$frtxt['frtxt_terms']}} &nbsp&nbsp >></span>
                        </div>
                    </div>
                </div>
                <!-- carousel -->
                <div class="d-flex flex-row" id="slider_container" style="width: 41.66vw/*800px*/; height: 27vh/*300px*/;min-width: 420px;">
                    <!-- slide image -->
                    <div id="slider_img_container">
                        @if($pageslider!=='')
                            <?php
                            $filters = json_decode($pageslider);
                            ?>
                            @if (is_array($filters) === false)
                                <?php
                                $fname=$filters->fname;
                                ?>
                                <div class="carousel-item">
                                    <img src="{{$fname}}" id="oneslideimg1" class="d-block" style="border-top-left-radius: 10px;border-bottom-left-radius: 10px;" alt="" onerror="this.src ='/images/noimg.png';">
                                </div>
                            @else
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <?php
                                        $j=0;
                                        ?>
                                        @foreach ($filters as $item)
                                            <?php
                                            $fname =$item->fname;
                                            $name = $item->name;
                                            $link = $item->link;
                                            $active='';
                                            if($j==0)
                                                $active='class="active"';
                                            ?>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="{{$j}}" {{$active}}></li>
                                            <?php
                                            $j++;
                                            ?>
                                        @endforeach
                                    </ol>
                                    <div class="carousel-inner" style="border-top-left-radius: 10px; border-bottom-left-radius: 10px">
                                        <?php
                                        $i=0;
                                        ?>
                                        @foreach ($filters as $item)
                                            <?php
                                            $fname =$item->fname;
                                            $name = $item->name;
                                            $link = $item->link;
                                            $active='';
                                            if($i==0)
                                                $active='active';
                                            ?>
                                            <div class="carousel-item {{$active}}">
                                                <img style="width: 100%; height: 100%" src="{{$fname}}" alt="" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <?php
                                            $i++;
                                            ?>
                                        @endforeach
                                    </div>
                                </div>
                            @endif
                        @else
                            <div class="carousel-item" style="display: block">
                                <img src="uploads/images/waaupimg/pgcenter.jpg" id="oneslideimg1" class="d-block" style="border-top-left-radius: 10px;border-bottom-left-radius: 10px;width: 100%;height: 100%" alt="" onerror="this.src ='/images/noimg.png';">
                            </div>
                        @endif
                    </div>
                    <!-- slide text -->
                    <div id="slider_txt_container" class="display: flex; flex-direction: row;">
                        <div class="flex-grow-1" style="margin-top: 3.6vh; text-align: center;">
                            @if(!empty($teacher))
                                <?php
                                $teacher = json_decode($teacher);
                                $t_1=$teacher->t1;
                                $t_2=$teacher->t2;
                                $t_3=$teacher->t3;
                                //echo($t_1->title);
                                ?>
                                <h2>
                                    {{$t_1->title}}
                                </h2>
                                <div class="d-flex flex-row">
                                    <div class="flex-grow-1" style="width: 33%">
                                        <a href="#" class="teacher_link" data-link="{{$t_1->link}}">
                                            @if(!empty($t_1->img))
                                                <img src="{{$t_1->img}}" onerror="this.src ='/images/noimg.png';">
                                            @endif
                                            <span class="teacher_title">{{$t_1->cont}}</span>
                                        </a>
                                    </div>
                                    <div class="flex-grow-1" style="width: 33%">
                                        <a href="#" class="teacher_link" data-link="{{$t_2->link}}">
                                            @if(!empty($t_2->img))
                                                <img src="{{$t_2->img}}" onerror="this.src ='/images/noimg.png';">
                                            @endif
                                            <span class="teacher_title">{{$t_2->cont}}</span>
                                        </a>
                                    </div>
                                    <div class="flex-grow-1" style="width: 33%">
                                        <a href="#" class="teacher_link" data-link="{{$t_3->link}}">
                                            @if(!empty($t_3->img))
                                                <img src="{{$t_3->img}}" onerror="this.src ='/images/noimg.png';">
                                            @endif
                                            <span class="teacher_title">{{$t_3->cont}}</span>
                                        </a>
                                    </div>
                                </div>
                            @endif
                        </div>

                        <div class="flex-grow-1" style="margin-top: 3.6vh; text-align: center;">
                            @if(!empty($student))
                                <?php
                                $student = json_decode($student);
                                $s_1=$student->t1;
                                $s_2=$student->t2;
                                $s_3=$student->t3;
                                //echo($s_1->title);
                                ?>
                                <h2>
                                    {{$s_1->title}}
                                </h2>
                                <div class="d-flex flex-row">
                                    <div class="flex-grow-1" style="width: 33%">
                                        <a href="#" class="teacher_link" data-link="{{$s_1->link}}">
                                            @if(!empty($s_1->img))
                                                <img src="{{$s_1->img}}" onerror="this.src ='/images/noimg.png';">
                                            @endif
                                            <span class="teacher_title">{{$s_1->cont}}</span>
                                        </a>
                                    </div>
                                    <div class="flex-grow-1" style="width: 33%">
                                        <a href="#" class="teacher_link" data-link="{{$s_2->link}}">
                                            @if(!empty($s_2->img))
                                                <img src="{{$s_2->img}}" onerror="this.src ='/images/noimg.png';">
                                            @endif
                                            <span class="teacher_title">{{$s_2->cont}}</span>
                                        </a>
                                    </div>
                                    <div class="flex-grow-1" style="width: 33%">
                                        <a href="#" class="teacher_link" data-link="{{$s_3->link}}">
                                            @if(!empty($s_3->img))
                                                <img src="{{$s_3->img}}" onerror="this.src ='/images/noimg.png';">
                                            @endif
                                            <span class="teacher_title">{{$s_3->cont}}</span>
                                        </a>
                                    </div>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script type="text/javascript">
        $(document).ready(function (){
            var sliderstatus = '{{$sliderstatus}}';
            if(sliderstatus !== null && sliderstatus !== ''){
                sliderstatus = htmldecodejs(sliderstatus);
                sliderstatus = $.parseJSON(sliderstatus);
                var time= (parseInt(sliderstatus.t) < 1000) ? parseInt(sliderstatus.t) * 1000 : parseInt(sliderstatus.t);
                $('.carousel').carousel({
                    interval: time
                });
            }

            $('a.teacher_link').click(function (event) {
                event.preventDefault();
                var url = $(this).attr('data-link');
                if(url.indexOf('http://') > -1 || url.indexOf('https://') > -1)
                    window.open(url, '_blank');
                else
                {
                    //window.location.href="http://"+url;
                    window.open("http://"+url, '_blank');
                }
            });
        });
    </script>
@endsection
