// Vars
let sliderImgs = Array.from(document.querySelectorAll(".slider-container img")),
  indicators = document.querySelector("#indicators"),
  slideCount = sliderImgs.length,
  currentIndex = 0,
  slideNum = document.querySelector("#slide-number");
const next = document.querySelector("#next"),
  prev = document.querySelector("#prev");

// Fn
let ul = document.createElement("ul");
ul.className = "id-items";
ul.setAttribute("id", "pagination-ul");
for (let i = 0; i < slideCount; i++) {
  let li = document.createElement("li");
  li.className = "id-item";
  li.dataset.slide = i;
  li.setAttribute("id", "paination-li");
  li.innerHTML = i + 1;
  ul.append(li);
  li.addEventListener("click", () => {
    currentIndex = i;
    getSlide(i);
  });
}
indicators.appendChild(ul);
getSlide(0);
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function getSlide(i) {
  if (currentIndex === 0) {
    prev.classList.add("disabled");
    next.classList.remove("disabled");
  } else if (currentIndex >= slideCount - 1) {
    prev.classList.remove("disabled");
    next.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
    next.classList.remove("disabled");
  }

  sliderImgs.forEach((slide) => {
    slide.classList.remove("active");
  });
  document.querySelectorAll(".id-items li").forEach((li) => {
    li.classList.remove("active");
  });

  sliderImgs[i].classList.add("active");
  document.querySelector(".id-items").children[i].classList.add("active");

  slideNum.innerHTML = `Slide #${currentIndex + 1} of ${slideCount}`;
}

function nextSlide() {
  currentIndex++;
  currentIndex >= slideCount ? (currentIndex = 0) : null;
  getSlide(currentIndex);
}
function prevSlide() {
  currentIndex--;
  currentIndex < 0 ? (currentIndex = slideCount - 1) : null;
  getSlide(currentIndex);
}
