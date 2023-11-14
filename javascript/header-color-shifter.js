// header color shifter 🎨🔄

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const main = document.getElementById("main");

  main.addEventListener("scroll", function () {
    if (main.scrollTop > 120) {
      header.classList.add("bg-12");
    } else {
      header.classList.remove("bg-12");
    }
  });
});
