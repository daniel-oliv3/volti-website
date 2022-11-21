'use strict';



/* ======= PRELOADING ======= */
const loadElement = document.querySelector("[data-preloader]");

window.addEventListener("load", function() {
    loadElement.classList.add("loaded");
});


/* ======= MOBILE NAVBAR TOGGLE ======= */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNavbar);




