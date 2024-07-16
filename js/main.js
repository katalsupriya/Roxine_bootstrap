//on scrolling navbar changes its color from transparent to white color
$(window).on('scroll', function () {
  if ($(window).width() > 992) {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".navbar").addClass("bg-white");
      $(".navbar .nav-link, .navbar .fa-icon").addClass("text-primary").removeClass("text-white");
      $(".navbar .light-img").addClass("d-none").removeClass("d-lg-block");
      $(".navbar .dark-img").addClass("d-block").removeClass("d-lg-none");
    }else{
      $(".navbar").removeClass("bg-white");
      $(".navbar .nav-link, .navbar .fa-icon").removeClass("text-primary").addClass("text-white");
      $(".navbar .light-img").addClass("d-lg-block");
      $(".navbar .dark-img").addClass("d-lg-none");
    }
  }
  });