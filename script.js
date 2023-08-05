var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
});

var tl = gsap.timeline();

tl.to("#page1", {
  y: "100vh",
  scale: 0.4,
  duration: 0,
});

tl.to("#page1", {
  y: "-50vh",
  duration: 1,
  delay: 1,
});
tl.to("#page1", {
  y: "0vh",
  rotate: 360,
  scale: 1,
  duration: 0.7,
});
