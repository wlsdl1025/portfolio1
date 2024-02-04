"use strict";

//프로젝트 필터링 관련 로직 처리
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");
categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  //Active 메뉴를 재설정
  const active = document.querySelector(".category_selected");
  active.classList.remove("category_selected");
  event.target.classList.add("category_selected");

  //프로젝트를 필터링

  projects.forEach((project) => {
    console.log(project.dataset.type);
    if (filter === "all" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  projectsContainer.classList.add("anim-out");
  //addclass 후 350ms이후에 removeclass anim-out
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 350);
});
