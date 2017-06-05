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

$(window).load(function(){
  $("#list_img > .sp_menu_item_early > img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});