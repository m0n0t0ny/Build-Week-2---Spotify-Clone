document
  .getElementById("toggle-friends-tab")
  .addEventListener("click", function () {
    const rightAside = document.getElementById("right-aside");
    rightAside.classList.toggle("d-none");
  });

document
  .getElementById("close-friends-tab")
  .addEventListener("click", function () {
    const rightAside = document.getElementById("right-aside");
    rightAside.classList.add("d-none");
  });
