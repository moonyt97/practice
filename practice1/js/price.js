const priceSectionTitle = document.querySelector(".price-section__title");
const priceSectionContent = document.querySelectorAll(
  ".price-section__content "
);

function priceSectionActive() {
  priceSectionTitle.classList.add("price-section__active");
  for (let i = 0; i < priceSectionContent.length; i++) {
    priceSectionContent[i].classList.add("price-section__active");
  }
}

function scrollPriceSection() {
  if (window.innerWidth > 990) {
    if (window.scrollY > 2500 && window.scrollY < 3200) {
      priceSectionActive();
    }
  } else if (window.innerWidth > 750) {
    if (window.scrollY > 3500 && window.scrollY < 4900) {
      priceSectionActive();
    }
  } else if (window.innerWidth > 0) {
    if (window.scrollY > 4300 && window.scrollY < 5600) {
      priceSectionActive();
    }
  }
}

window.addEventListener("scroll", scrollPriceSection);
