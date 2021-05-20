 function bindDragScroll($container, $scroller) {
     var $window = $(window);

     var x = 0;
     var y = 0;

     var x2 = 0;
     var y2 = 0;
     var t = 0;

     $container.on("mousedown", down);
     $container.on("click", preventDefault);
     $scroller.on("mousewheel", horizontalMouseWheel); // prevent macbook trigger prev/next page while scrolling

     function down(evt) {

         if (evt.button === 0) {

             t = Date.now();
             x = x2 = evt.pageX;
             y = y2 = evt.pageY;

             $container.addClass("down");
             $window.on("mousemove", move);
             $window.on("mouseup", up);

             evt.preventDefault();

         }

     }

     function move(evt) {

         if ($container.hasClass("down")) {

             var _x = evt.pageX;
             var _y = evt.pageY;
             var deltaX = _x - x;
             var deltaY = _y - y;

             $scroller[0].scrollTop -= deltaY;
             $scroller[0].scrollLeft -= deltaX;

             x = _x;
             y = _y;

         }

     }

     function up(evt) {

         $window.off("mousemove", move);
         $window.off("mouseup", up);

         var deltaT = Date.now() - t;
         var deltaX = evt.pageX - x2;
         var deltaY = evt.pageY - y2;
         if (deltaT <= 300) {
             $scroller.stop().animate({
                 scrollTop: "-=" + deltaY * 3,
                 scrollLeft: "-=" + deltaX * 3
             }, 500, function (x, t, b, c, d) {
                 // easeOutCirc function from http://gsgd.co.uk/sandbox/jquery/easing/
                 return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
             });
         }

         t = 0;

         $container.removeClass("down");

     }

     function preventDefault(evt) {
         if (x2 !== evt.pageX || y2 !== evt.pageY) {
             evt.preventDefault();
             return false;
         }
     }

     function horizontalMouseWheel(evt) {
         evt = evt.originalEvent;
         var x = $scroller.scrollLeft();
         var max = $scroller[0].scrollWidth - $scroller[0].offsetWidth;
         var dir = (evt.deltaX || evt.wheelDeltaX);
         var stop = dir > 0 ? x >= max : x <= 0;
         if (stop && dir) {
             evt.preventDefault();
         }
     }

 }
