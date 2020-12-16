
$(document).ready(function () {
  //slider hight
  /* $(".owl-carousel .item").height($(window).height())
  $(window).resize(function(){
  $(".owl-carousel .item").height($(window).height())   
  }) */


  // owl Carousel
  $('.header .owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    animateOut: 'fadeOut',
    smartSpeed: 450,
  })
  $('.brands .owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4,
      },
      992: {
        items: 6,
      }
    }
  })

  //side-menu
  $('.manu').on('click', function () {
    $('.side-menu').toggleClass('open');
  })
  $('.fa-times').on('click', function () {
    $('.side-menu').removeClass('open');
  });

  //toogle nav 
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 30) {
      $('.nav-left').fadeOut(500);
      $('.nav-top').fadeIn(500);
    } else {
      $('.nav-left').fadeIn(500);
      $('.nav-top').fadeOut(500);
    }
  })

  // count down
  var content = $('.count-down').html();
  $('.count-down').countdown('2021/03/08', function (event) {
    $(this).html(event.strftime(content));
  });
  // swith between links
  let link = $('link[data-color="switch"]'),
    logo = $('.logo img')
  $('.fa-adjust').on('click', function () {
    if (link.attr('href') == 'css/style.css') {
      link.attr('href', 'css/light-style.css')
      logo.attr('src', 'images/logo-dark.png')
    } else {
      link.attr('href', 'css/style.css')
      logo.attr('src', 'images/logo.png')
    }
  })

  /// counter up
  $('.counterup .num').counterUp({
    delay: 10,
    time: 1000
  });
})
