const svgPath = document.querySelectorAll(".cls-1");

const svgText = anime({
  targets: svgPath,
  loop: true,
  direction: "alternate",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: (el, i) => {
    return i * 100;
  }
});
