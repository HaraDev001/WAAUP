// JavaScript Document
$(function(){
	 window.onscroll = function() {myFunction()};
        var header = document.getElementById("myheader");
        var sticky = header.offsetTop+10;
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }

	/*	 $("#back_to_top").click(function(){
			// window.scrollTo({top: 0, behavior: 'smooth'});
			  //$('html, body').stop().animate({scrollTop:0}, 2000);
			  $('html, body').animate({scrollTop:0}, 'smooth');
		 });*/
      /*  $("#back_to_top").click(function(){

            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 800);
            return false;
        });*/

});
