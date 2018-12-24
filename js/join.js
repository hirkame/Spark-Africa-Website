$(function() {
  var joinTop = $("#join").offset().top;
  var header = $("header");
  $(window).scroll(function() {
    if ($(window).scrollTop() >= joinTop) {
      header.css("background", "rgba(255, 255, 255, 1)");
      $(".header-list").css("color", "black");
      $(".header-logo-white").css("display", "none");
      $(".header-logo-black").css("display", "inline");
    } else {
      header.css("background", "rgba(255, 255, 255, 0)");
      $(".header-list").css("color", "white");
      $(".header-logo-white").css("display", "inline");
      $(".header-logo-black").css("display", "none");
    }
  });
});
