$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        
    });
});


$(document).ready(function(){
  $("#hamburger_menu_container").click(function(){
    $(".SP_sub_menu_li").slideToggle();
    return false;
  });
});