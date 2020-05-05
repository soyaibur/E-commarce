(function($){
    "use strict";



$(document).ready(function(){



    /*$('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        1000:{
                            items:3
                        }
                    }
    })*/

    $(".product-list").masonry();

    $(".homepage-slides").owlCarousel({
        items: 1,
        stagePadding: 0,
        loop:true,
        autoplay: false,
        dots: false,
        nav:true,
        navText:["<i class='fa fa-long-arrow-alt-left'></i>","<i class='fa fa-long-arrow-alt-right'></i>"]
    });

    $(".product-promotions").owlCarousel({
        items:1,
        loop: true,
        autoplay:false,
        nav:false,
        dots: true, 
    })

  
  $(".menu-trigger").on("click",function(){
   $(".off-canvas-manu,.off-canvas-overly").addClass("active");
  });

  $(".menu-close,.off-canvas-overly").on("click",function(){
    $(".off-canvas-manu,.off-canvas-overly").removeClass("active");
   });

});

jquery(window).load(function(){


});


}(jQuery));