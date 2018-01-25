     // menu actiove 
     $(".menu li").on('click', function() {
         $(this).addClass("active-pr").siblings("li").removeClass("active-pr");
         // return false;
     });
     // menu fix  section

     $(window).scroll(function() {
         var topspeacing = $(window).scrollTop();
         if (topspeacing > 80) {
             $(".navbar.navbar-area").addClass("sticky");
         } else {
             $(".navbar.navbar-area").removeClass("sticky");

         }
     });
     // mobile menu
     /*var windoww = $(window).width()
     if(windoww <=767 ){
         var click_hide = $(".menu li a");
         click_hide.on("click",function(){
             $(".menu").css("display","none")
              return false;
         });
     };*/
       // navbar collapse activation
         $(".navbar-collapse ul li a").on('click', function() {
        $(".navbar-collapse").removeClass("in");
    });
