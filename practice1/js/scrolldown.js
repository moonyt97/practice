const scrollDown = document.querySelector(".scroll-down");

function scrollDownClick() {
  window.scroll({
    top: 950,
    behavior: "smooth",
  });
}

scrollDown.addEventListener("click", scrollDownClick);
