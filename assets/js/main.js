$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})


$(window).scroll(function(){
    if ($(this).scrollTop()>600){
        $(".up-set").fadeIn();
    } else {
        $(".up-set").fadeOut();
    }
});


$(".up-set").click(function(){
    window.scrollTo({
            top: 0,
            behavior: "smooth" // Плавная прокрутка
        });
});










