const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("section[id]")];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-38% 0px -55% 0px" },
);

sections.forEach((section) => observer.observe(section));

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
});
