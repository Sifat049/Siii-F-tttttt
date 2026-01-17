/* Loader */
window.addEventListener("load", () => {
  document.getElementById("page-loader").style.display = "none";
});

/* Theme Toggle */
document.getElementById("theme-toggle").onclick = () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
};

/* Hamburger */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.onclick = () => navLinks.classList.toggle("show");

/* Typing Effect */
const texts = ["Frontend Developer", "UI/UX Designer", "JavaScript Lover"];
let i = 0, j = 0;
const typing = document.getElementById("typing-text");

function type() {
  if (j < texts[i].length) {
    typing.textContent += texts[i][j++];
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (j > 0) {
    typing.textContent = texts[i].substring(0, --j);
    setTimeout(erase, 60);
  } else {
    i = (i + 1) % texts.length;
    setTimeout(type, 400);
  }
}
type();

/* Reveal + Scroll Spy */
const reveals = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    if (r.getBoundingClientRect().top < window.innerHeight - 100) {
      r.classList.add("active");
    }
  });

  sections.forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 150) {
      links.forEach(l => l.classList.remove("active"));
      document.querySelector(`a[href="#${sec.id}"]`)?.classList.add("active");
    }
  });

  document.querySelectorAll(".progress").forEach(bar => {
    bar.style.width = bar.dataset.progress;
  });
});
