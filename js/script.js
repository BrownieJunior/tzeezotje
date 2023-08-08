"use strict";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// burger
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }

  if (menu.classList.contains("showMenu")) {
    document.body.classList.add("menu-open"); // Добавляем класс для блокировки прокрутки
  } else {
    document.body.classList.remove("menu-open"); // Убираем класс, чтобы разблокировать прокрутку
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  const form1 = document.getElementById("form_id");
  const resultDiv1 = document.getElementById("result_div_id");

  // Форма 1
  form1.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector("input[name='name1']");
    const phoneInput = document.querySelector("input[name='phone1']");

    const name = nameInput.value;
    const phone = phoneInput.value;

    // Validate name: Allow only letters and spaces
    if (!/^[A-Za-z\s]+$/.test(name)) {
      resultDiv1.innerText =
        "Please enter a valid name (letters and spaces only).";
      return;
    }

    // Validate phone: Allow only digits and '+'
    if (!/^[0-9+]+$/.test(phone)) {
      resultDiv1.innerText =
        "Please enter a valid phone number (digits and '+').";
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "form.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resultDiv1.innerText = xhr.responseText;
        form1.reset();
      }
    };
    xhr.send(`name=${name}&phone=${phone}`);
  });

  const form2 = document.getElementById("form_id-2");
  const resultDiv2 = document.getElementById("result_div_id-2");

  // Форма 2
  form2.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector("input[name='name2']");
    const phoneInput = document.querySelector("input[name='phone2']");

    const name = nameInput.value;
    const phone = phoneInput.value;

    // Validate name: Allow only letters and spaces
    if (!/^[A-Za-z\s]+$/.test(name)) {
      resultDiv2.innerText =
        "Please enter a valid name (letters and spaces only).";
      return;
    }

    // Validate phone: Allow only digits and '+'
    if (!/^[0-9+]+$/.test(phone)) {
      resultDiv2.innerText =
        "Please enter a valid phone number (digits and '+').";
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "form.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resultDiv2.innerText = xhr.responseText;
        form2.reset();
      }
    };
    xhr.send(`name=${name}&phone=${phone}`);
  });
});

// карта
ymaps.ready(function () {
  var myMap = new ymaps.Map("YMapsID", {
    center: [55.76, 37.64],
    zoom: 10,
  });
});

const mySwiper = new Swiper(".swiper__sfeerfoto", {
  slidesPerView: 1.17,
  centeredSlides: true,
  spaceBetween: 10,
  // Optional parameters

  direction: "horizontal",
  loop: true,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".sfeerfoto-button-next",
    prevEl: ".sfeerfoto-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
