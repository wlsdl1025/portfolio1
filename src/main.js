"use strict";
//메인자바스트립트에는 페이지 전반적인 내용을 구현

// header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});
// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  //console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
// arrow_up버튼 아래로 스크롤시 보이게 함
const arrow = document.querySelector(".arrow_up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.classList.add("arrow_up--show");
  } else {
    arrow.classList.remove("arrow_up--show");
  }
});

//navbar toggle버튼 클릭 처리
const navbarMenu = document.querySelector(".header_menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});
//Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
