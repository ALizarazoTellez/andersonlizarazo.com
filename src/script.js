"use strict";

let mainContent = document.querySelector("main");
let topbar = document.querySelector(".topbar");

document.querySelector("body").addEventListener("scroll", () => {
  if (window.scrollY >= mainContent.getBoundingClientRect().y) {
    topbar.hidden = false;
  } else {
    topbar.hidden = true;
  }
});
