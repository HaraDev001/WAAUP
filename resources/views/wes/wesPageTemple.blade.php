@extends('layouts.home_layout')
@section('content')
    <section class="section-main" style="background: white; position: relative; height: calc(100vh - 10.8vh/*120px*/ - 27vh);">
        <div style="flex-direction: column; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; justify-content: center; align-items: center; display: flex;">
            <div class="row no-gutters" style="background-color: white; width: 100%; height: 100%">
                <div class="container" style="padding-top: 2rem;padding-bottom: 2rem;">
                    <div class="row no-gutters h-100">
                        <div class="col-lg-8 h-100" id="pgtempcontent">
                            <p style="width: 100%; text-align: center; font-size: 20px; font-weight: bold;"><?php echo $title; ?></p>
                            <p style="width: 100%; text-align: center; font-size: 15px;">
                                <?php
                                if($auth_state == 0){
                                ?>
                                    <span>{{$frtxt['frtxt_author']}} : </span><span><?php echo $author; ?></span>&nbsp;&nbsp;&nbsp;
                                <?php
                                }
                                if($type_state == 0){
                                ?>
                                    <span>{{$frtxt['frtxt_type']}} : </span><span><?php echo $pagetype; ?></span>&nbsp;&nbsp;&nbsp;
                                <?php
                                }
                                if($date_state == 0){
                                ?>
                                <span><?php echo $created_at; ?></span></p>
                                <?php
                                }
                                ?>
                            <?php
                             $cont = html_entity_decode($pagecontent);
                             $cont = str_ireplace('/uploads/images','uploads/images', $cont);
                             $cont = str_ireplace('uploads/images','/uploads/images', $cont);
                              echo html_entity_decode($cont);
                            ?>
                        </div>
                        <div class="col-lg-4 h-100" style="padding: 0 25px;">

                            <div class="temple_menu">
                                <aside class="widget widget_text student-txt-area">
                                    <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 1.8vh/*20px*/">
                                        Service
                                    </h4>
                                    <div class="textwidget" id="sbmuservice">
                                        <ul style="list-style: none outside; margin: 0; padding: 0;">
                                            <li style="margin-bottom: 0.9vh/*10px*/">
                                                  <a class="wesfootlist1 md-opjjpmhoiojifppkkcdabiobhakljdgm_doc" href="/Service/ourserviece" style=" font-size:14px;  color:#545454;" data-cont="/Service/ourserviece">1. our serviece</a>
                                            </li>
                                            <li style="margin-bottom: 0.9vh/*10px*/">
                                                 <a class="wesfootlist1 md-opjjpmhoiojifppkkcdabiobhakljdgm_doc" href="/Service/ourfurture" style=" font-size:14px;  color:#545454;" data-cont="/Service/ourfurture">2. our furture</a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>

                            <div class="temple_advertt" style="margin-top:2rem">
                                <aside class="widget widget_text student-txt-area">
                                    <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 0">
                                        advertising
                                    </h4>
                                    <div class="textwidget">
                                        <div class="advert-grid-container">
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/waaupimg/facebook.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/waaupimg/twitter.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/waaupimg/wechat.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/waaupimg/facebook.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <div class="advert-grid-item">
                                            </div>
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/waaupimg/facebook.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                            <div class="advert-grid-item">
                                                <img src="/uploads/images/waaupimg/facebook.png" style="width: 100%; height: 100%;" onerror="this.src ='/images/noimg.png';">
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>

                            <div class="temple_relate" style="margin-top:2rem">
                                <aside class="widget widget_text student-txt-area">
                                    <h4 class="student-txt-h4" style="font-size: 16px; font-weight: bold; color: #3859ad; margin-bottom: 1.8vh/*20px*/">
                                        Related
                                    </h4>
                                    <div class="textwidget" id="sbmuservice">
                                        <ul style="list-style: none outside; margin: 0; padding: 0;">
                                            <li style="margin-bottom: 0.9vh/*10px*/">
                                                <a class="wesfootlist1 md-opjjpmhoiojifppkkcdabiobhakljdgm_doc" href="/Service/ourserviece" style=" font-size:14px;  color:#545454;" data-cont="/Service/ourserviece">1. our serviece</a>
                                            </li>
                                            <li style="margin-bottom: 0.9vh/*10px*/">
                                                 <a class="wesfootlist1 md-opjjpmhoiojifppkkcdabiobhakljdgm_doc" href="/Service/ourfurture" style=" font-size:14px;  color:#545454;" data-cont="/Service/ourfurture">2. our furture</a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>


                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
