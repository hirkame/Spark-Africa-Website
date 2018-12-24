$(function() {
  $("#research-button").click(function() {
    $("html,body").animate({ scrollTop: $("#research").offset().top - 120 });
  });
  $("#event-button").click(function() {
    $("html,body").animate({ scrollTop: $("#event").offset().top - 120 });
  });
  $("#design-button").click(function() {
    $("html,body").animate({ scrollTop: $("#design").offset().top - 120 });
  });

  var homeTop = $("#header-showup").offset().top;
  var header = $("header");
  $(window).scroll(function() {
    if ($(window).scrollTop() >= homeTop) {
      header.css("background", "rgba(255, 255, 255, 1)");
      $(".header-list").css("color", "black");
      $(".header-logo-white").css("display", "none");
      $(".header-logo-black").css("display", "inline");
      if (window.matchMedia("(max-width: 720px)").matches) {
        $(".menu-white").css("display", "none");
        $(".menu-black").css("display", "block");
      }
    } else {
      header.css("background", "rgba(255, 255, 255, 0)");
      $(".header-list").css("color", "white");
      $(".header-logo-white").css("display", "inline");
      $(".header-logo-black").css("display", "none");

      if (window.matchMedia("(max-width: 720px)").matches) {
        $(".menu-white").css("display", "block");
        $(".menu-black").css("display", "none");
      }
    }
  });
  $(".menu").click(function() {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".header-lists").addClass("open");
    } else {
      $(".header-lists").removeClass("open");
    }
  });
});
