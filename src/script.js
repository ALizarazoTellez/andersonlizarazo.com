"use strict";

let mainContent = document.querySelector("main");
let topbar = document.querySelector(".topbar");

const observer = new IntersectionObserver(
  (elems) => {
    let showTopbar = false;
    for (let elem of elems) {
      if (elem.isIntersecting) {
        showTopbar = true;
        topbar.innerText = elem.target.dataset.title;
      }
    }

    topbar.hidden = !showTopbar;
  },
  {
    rootMargin: "0px",
    threshold: 0.85,
  },
);

mainContent.querySelectorAll("section").forEach((elem) => {
  observer.observe(elem);
});
