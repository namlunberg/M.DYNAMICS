$(document).ready(function () {
  // SLIDER

  $('.examples-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
  });

  $('.reviews-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
  });

  // DOTS => NUMS
  let i = 1; 
  
  $('.examples-slider').find('.owl-dot').each(function () { 
    $(this).find('span').html(i); i++; 
  });
  
  let n = 1;

  $('.reviews-slider').find('.owl-dot').each(function () { 
    $(this).find('span').html(n); n++; 
  });


  // HEADER FIXED

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header-top").addClass("fixed");
    } else {
      $(".header-top").removeClass("fixed");
    }
  });

  // TELMASK
  $("input[name=user-tel]").inputmask("+7(999)999-99-99");

  $(".header-top-wrap__mobile-btn").click(function () {
    if (!$(".header-top-wrap-pages").css("display","inline-flex")) {
      $(".header-top-wrap-pages").css("display","inline-flex");
    } else {
      $(".header-top-wrap-pages").css("display","none");
    }
  });

});