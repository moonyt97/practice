const helpSectionTitle = document.querySelector(".help-section__title");
const line = document.querySelector(".line");
const helpSectionContent = document.querySelectorAll(".help-section__content ");

function helpSectionActive() {
  helpSectionTitle.classList.add("help-section__active");
  line.classList.add("help-section__active");
  for (let i = 0; i < helpSectionContent.length; i++) {
    helpSectionContent[i].classList.add("help-section__active");
  }
}

function scrollHelpSection() {
  if (window.innerWidth > 990) {
    if (window.scrollY > 1200 && window.scrollY < 1900) {
      helpSectionActive();
    }
  } else if (window.innerWidth > 750) {
    if (window.scrollY > 2000 && window.scrollY < 3000) {
      helpSectionActive();
    }
  } else if (window.innerWidth > 0) {
    if (window.scrollY > 2700 && window.scrollY < 4300) {
      helpSectionActive();
    }
  }
}

window.addEventListener("scroll", scrollHelpSection);
