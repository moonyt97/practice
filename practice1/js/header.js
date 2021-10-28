const btn = document.querySelector(".header__nav button");
const section = document.querySelector("section");

function clickBtn() {
  section.classList.toggle("section-active");
}

function resizeWindow() {
  if (window.innerWidth > 990) {
    section.classList.remove("section-active");
  }
}

window.addEventListener("resize", resizeWindow);

btn.addEventListener("click", clickBtn);
