const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-row");
filters.forEach(button => button.addEventListener("click", () => {
  const selected = button.dataset.filter;
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  projects.forEach(project => {
    const tools = (project.dataset.tools || "").split(",").map(s => s.trim());
    project.hidden = selected !== "Todos" && !tools.includes(selected);
  });
}));
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
