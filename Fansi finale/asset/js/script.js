"use strict";

const addEven = function(elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const header = document.querySelector('[data-header');
const  nav = document.querySelector('[data-navbar]');
const navBtn = document.querySelectorAll('[data-nav-toggler]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const overlay = document.querySelector('[data-overlay]');
const pushTop = document.querySelector('[data-top]');
const preloader = document.querySelector("[data-preloader]");


window.addEventListener('load', () => {
  preloader.classList.add('loaded');
  document.body.classList.add('loaded')
});






const openNav = function() {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
};

addEven(navBtn, 'click', openNav);


const closeNav = function() {
  nav.classList.remove('active');
  overlay.classList.remove('active');
}

addEven(navLinks, 'click', closeNav);

const activeHeader = function() {
  if (window.scrollY > 80) {
    header.classList.add('active');
    pushTop.classList.add('active');
  } else {
    header.classList.remove('active');
    pushTop.classList.remove('active');
  }
}
addEven(window, 'scroll', activeHeader);


//accordion
document.querySelectorAll(".accordion").forEach((accordions) => {
  accordions.onclick = () => {
    accordions.classList.toggle("active");
  };
});


// swiper


var swiper = new Swiper(".info-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1180: {
      slidesPerView: 6,
    },
    
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
    },
    
  },
});


var swiper = new Swiper(".info-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1180: {
      slidesPerView: 6,
    },
    
  },
});

