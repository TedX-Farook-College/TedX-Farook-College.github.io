const outer = document.querySelector(".outer");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let scrollAmount = outer.clientWidth * 0.15; // 15% scroll for each click

leftArrow.addEventListener("click", () => {
  outer.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

rightArrow.addEventListener("click", () => {
  outer.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

// Swipe functionality for mobile
let startX, scrollLeft;

outer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = outer.scrollLeft;
});

outer.addEventListener("touchmove", (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 2; // Multiplying by 2 to make the swipe more responsive
  outer.scrollLeft = scrollLeft - walk;
});
