const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile__nav-links");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("hamburger__open")) {
    hamburger.classList.remove("hamburger__open");
    navMenu.classList.remove("mobile__nav-links--show");
    overlay.classList.remove("overlay--show");
  } else {
    hamburger.classList.add("hamburger__open");
    navMenu.classList.add("mobile__nav-links--show");
    overlay.classList.add("overlay--show");
  }
});

/* =========SLIDER INTERACTIVITY===========*/
/* =========SLIDER INTERACTIVITY===========*/
/* =========SLIDER INTERACTIVITY===========*/
let slides = document.querySelectorAll(".carousel__image");
let totalSlides = slides.length;
let currentIndex = 0;

//create slide indicator
for (let i = 0; i < totalSlides; i++) {
  let indicatorCircle = document.createElement("span");
  const indicators = document.querySelector(".slide__indicators");
  indicators.append(indicatorCircle);
}

displaySlide();

function displaySlide() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }
  slides[currentIndex].style.display = "block";
}

//Add eventListeners for buttons
const carouselBtn = document.querySelectorAll(".carousel__button");
let leftBtn = carouselBtn[0];
let rightBtn = carouselBtn[1];

leftBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex--;
  }
  displaySlide();
  console.log(currentIndex);
});

rightBtn.addEventListener("click", () => {
  if (currentIndex === totalSlides - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  displaySlide();
  console.log(currentIndex);
});
