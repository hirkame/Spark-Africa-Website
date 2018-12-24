$(function() {
  $(".menu").click(function() {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".header-lists").addClass("open");
    } else {
      $(".header-lists").removeClass("open");
    }
  });
});
