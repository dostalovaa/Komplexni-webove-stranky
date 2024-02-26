const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");
const header = document.querySelector("header");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
    menuList.style.zIndex = "2";
    header.style.zIndex = "2";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
    menuList.style.zIndex = "0";
    header.style.zIndex = "0";
  }
});

const modeToggle = document.querySelector(".mode-toggle");
const iconSwitch = document.querySelector(".fa-regular");
const iconLight = document.querySelector(".fa-sun");
const iconDark = document.querySelector(".fa-moon");
const headerNav = document.querySelector(".header-nav");
const navText = document.querySelectorAll("a");
const logoSecond = document.getElementById("logo-second");
const logoMain = document.getElementById("logo-main");
const formSection = document.getElementById("form-section");
const imgSection = document.getElementById("img-section");
const toTop = document.querySelector(".to-top");
const footer = document.getElementById("footer");

modeToggle.addEventListener("click", toggleMode);

function toggleMode() {
  if (iconSwitch.classList.contains("fa-sun")) {
    iconSwitch.classList.remove("fa-sun");
    iconSwitch.classList.add("fa-moon");
    applyDarkModeStyles();
  } else {
    iconSwitch.classList.remove("fa-moon");
    iconSwitch.classList.add("fa-sun");
    applyLightModeStyles();
  }
}

function applyLightModeStyles() {
  modeToggle.style.color = "black";
  header.style.backgroundColor = "#cc1515";
  logoMain.src = "icons/light_logo.png";
  logoMain.style.width = "250px";
  logoSecond.style.display = "block";
  logoSecond.style.marginLeft = 0;
  headerNav.style.backgroundColor = "#cc1515";
  hamburgerIcon.style.color = "black";
  formSection.style.backgroundColor = "#ffffff";
  imgSection.style.backgroundColor = "#ffffff";
  toTop.style.backgroundColor = "#e8e8e8";
  footer.style.backgroundColor = "#000000d5";
  navText.forEach((navText) => {
    navText.style.color = "#000000cc";
  });
}

function applyDarkModeStyles() {
  modeToggle.style.color = "white";
  header.style.backgroundColor = "#4f0202";
  logoMain.src = "icons/dark_main.png";
  logoMain.style.width = "400px";
  logoSecond.style.display = "none";
  logoSecond.style.marginLeft = 0;
  headerNav.style.backgroundColor = "#4f0202";
  hamburgerIcon.style.color = "white";
  formSection.style.backgroundColor = "#000000d5";
  imgSection.style.backgroundColor = "#000000d5";
  footer.style.color = "#ffffff";
  toTop.style.backgroundColor = "black";
  footer.style.backgroundColor = "#000000";
  navText.forEach((navText) => {
    navText.style.color = "#ffffff";
  });
}

const imgWrappers = document.querySelectorAll(".img-wrapper");

imgWrappers.forEach((wrapper) => {
  wrapper.addEventListener("mouseenter", () => {
    wrapper.style.zIndex = "1";
    wrapper.style.transform = "scale(1.1)";
  });

  wrapper.addEventListener("mouseleave", () => {
    wrapper.style.zIndex = "0";
    wrapper.style.transform = "scale(1)";
  });
});

const formular = document.querySelector("form");
const fullName = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const passwordCheck = document.querySelector(".password-check");
const notName = document.querySelector(".notificationName");
const notEmail = document.querySelector(".notificationEmail");
const notPassword = document.querySelector(".notificationPassword");

formular.addEventListener("submit", (e) => {
  e.preventDefault();
  notName.style.display = fullName.value === "" ? "block" : "none";
  notEmail.style.display = email.value === "" ? "block" : "none";
  notPassword.style.display = password.value === "" ? "block" : "none";
  notPassword.style.display = passwordCheck.value === "" ? "block" : "none";
});

formular.addEventListener("submit", function (event) {
  event.preventDefault();
  const password = document.querySelector(".password").value;
  const passwordCheck = document.querySelector(".password-check").value;

  if (password !== passwordCheck) {
    document.querySelector(".notificationPassword").style.display = "block";
  } else {
    document.querySelector(".notificationPassword").style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
