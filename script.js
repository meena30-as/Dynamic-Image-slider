const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
let index = 0;
// Create dots dynamically
images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => moveToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");
function updateSlidePosition() {
  slides.style.transform = `translateX(${-index * 600}px)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}
function moveToSlide(n) {
  index = n;
  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;
  updateSlidePosition();
}
nextBtn.addEventListener("click", () => {
  index++;
  moveToSlide(index);
});
prevBtn.addEventListener("click", () => {
  index--;
  moveToSlide(index);
});
// Auto Slide
setInterval(() => {
  index++;
  moveToSlide(index);
}, 4000);
