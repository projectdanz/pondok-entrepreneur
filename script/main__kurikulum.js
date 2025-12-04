const carousel = document.getElementById("carousel");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function getScrollAmount() {
  const card = carousel.querySelector('.card');
  if (!card) return 300; // Default fallback

  const style = window.getComputedStyle(carousel);
  const gap = parseFloat(style.gap) || 0;
  return card.offsetWidth + gap;
}

// NEXT BUTTON
nextBtn.onclick = () => {
  const scrollAmount = getScrollAmount();
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  if (carousel.scrollLeft >= maxScroll - 10) { // Tolerance
    carousel.scrollLeft = 0; // balik ke kiri
  } else {
    carousel.scrollLeft += scrollAmount;
  }
};

// PREV BUTTON
prevBtn.onclick = () => {
  const scrollAmount = getScrollAmount();

  if (carousel.scrollLeft <= 10) { // Tolerance
    carousel.scrollLeft = carousel.scrollWidth; // balik ke kanan
  } else {
    carousel.scrollLeft -= scrollAmount;
  }
};

// --- DRAG / SWIPE ---
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => isDown = false);
carousel.addEventListener("mouseup", () => isDown = false);

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5;
  carousel.scrollLeft = scrollLeft - walk;
});

// TOUCH SUPPORT
carousel.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("touchend", () => isDown = false);

carousel.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 1.5;
  carousel.scrollLeft = scrollLeft - walk;
});