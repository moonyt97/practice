const aboutContent = document.querySelector(".about-section__content");
const aboutImage = document.querySelector(".about-section__img");
function aboutSectionActive() {
  aboutContent.classList.add("about-section__active");
  aboutImage.classList.add("about-section__active");
}

function scrollPage() {
  if (window.innerWidth > 990) {
    if (window.scrollY > 650 && window.scrollY < 1500) {
      aboutSectionActive();
    }
  } else if (window.innerWidth > 750) {
    if (window.scrollY > 1500 && window.scrollY < 2057) {
      aboutSectionActive();
    }
  } else if (window.innerWidth > 0) {
    if (window.scrollY > 1800 && window.scrollY < 2450) {
      aboutSectionActive();
    }
  }
}

window.addEventListener("scroll", scrollPage);
