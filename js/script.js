'use strict';



/* ======= PRELOADING ======= */
const loadElement = document.querySelector("[data-preloader]");

window.addEventListener("load", function() {
    loadElement.classList.add("loaded");
});

/* =======  ======= */
