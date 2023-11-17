document
  .getElementById("toggle-friends-tab")
  .addEventListener("click", function () {
    const rightAside = document.getElementById("right-aside");
    rightAside.classList.toggle("d-md-flex");
  });

document
  .getElementById("close-friends-tab")
  .addEventListener("click", function () {
    const rightAside = document.getElementById("right-aside");
    rightAside.classList.remove("d-md-flex");
  });
