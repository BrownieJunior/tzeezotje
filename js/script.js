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
  const form = document.getElementById("form_id");
  const resultDiv = document.getElementById("result_div_id");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector("input[name='name']");
    const phoneInput = document.querySelector("input[name='phone']");

    const name = nameInput.value;
    const phone = phoneInput.value;

    // Validate name: Allow only letters and spaces
    if (!/^[A-Za-z\s]+$/.test(name)) {
      resultDiv.innerText =
        "Please enter a valid name (letters and spaces only).";
      return;
    }

    // Validate phone: Allow only digits and '+'
    if (!/^[0-9+]+$/.test(phone)) {
      resultDiv.innerText =
        "Please enter a valid phone number (digits and '+').";
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "form.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resultDiv.innerText = xhr.responseText;
        form.reset();
      }
    };
    xhr.send(`name=${name}&phone=${phone}`);
  });
});
