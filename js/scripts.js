const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  if (btn.classList.contains("open")) {
    btn.classList.remove("open");
    menu.classList.add("hidden");
  } else {
    btn.classList.add("open");
    menu.classList.remove("hidden");
  }
});
