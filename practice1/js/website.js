const websiteContainer = document.querySelector(".website-section__container ");

function scrollWebsite() {
  if (window.scrollY > 1700) {
    websiteContainer.classList.add("website-section__active");
  }
}

function scrollWebsite() {
  if (window.innerWidth > 990) {
    if (window.scrollY > 1700 && window.scrollY < 2400) {
      websiteContainer.classList.add("website-section__active");
    }
  } else if (window.innerWidth > 750) {
    if (window.scrollY > 2700 && window.scrollY < 3600) {
      websiteContainer.classList.add("website-section__active");
    }
  } else if (window.innerWidth > 0) {
    if (window.scrollY > 4300 && window.scrollY < 5000) {
      websiteContainer.classList.add("website-section__active");
    }
  }
}

window.addEventListener("scroll", scrollWebsite);
