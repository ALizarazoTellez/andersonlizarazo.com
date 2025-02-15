"use strict";

let mainContent = document.querySelector("main");
let topbar = document.querySelector(".topbar");

document.querySelector("body").addEventListener("scroll", () => {
  if (
    mainContent.getBoundingClientRect().top <=
    Number.parseInt(window.getComputedStyle(topbar).height) * 3
  ) {
    topbar.hidden = false;
  } else {
    topbar.hidden = true;
  }
});
