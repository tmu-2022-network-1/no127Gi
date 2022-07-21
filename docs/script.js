$(function() {
    $(window).scroll(function() {
      $(".text").each(function() {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 300) {
          $(this).addClass("blockIn");
        }
      });
    });
  });

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 130) {
        $('.box').css('opacity', 0.5);
      } else {
        $('.box').css('opacity', 1);
      }
    });
  });