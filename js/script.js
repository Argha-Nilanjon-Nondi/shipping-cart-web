let navToggle = document.querySelector(".nav-toggle-btn");
let navWrapper = document.querySelector(".nav-wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    searchForm.classList.remove("active");
    searchToggle.classList.remove("active");
  }
});

