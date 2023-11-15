async function accessCollection(event) {
  event.preventDefault();
  const card = event.currentTarget;
  const cardIdUrl = card.querySelector(".d-none");
  const collectionUrl = cardIdUrl.innerText;
  console.log("collectionUrl:", collectionUrl);
  try {
    const response = await fetch(collectionUrl, options);

    if (!response.ok) {
      throw new Error("🔴 Network error");
    }

    const output = await response.json();

    const innerHomeSection = document.getElementById("inner-home-section");
    innerHomeSection.innerHTML = "";

    const section = document.createElement("section");
    section.className = "mb-1 mb-sm-2 mb-md-3 mb-lg-4 mt-3";
    innerHomeSection.appendChild(section);

    const elementContainer = document.createElement("div");
    elementContainer.className = "d-flex gap-3";
    section.appendChild(elementContainer);

    const imgContainer = document.createElement("div");
    imgContainer.className =
      "rounded-2 flex-shrink-0 lg-cover-container d-flex align-items-center me-3";
    elementContainer.appendChild(imgContainer);

    if (output.picture) {
      const albumCover = document.createElement("img");
      albumCover.src = output.picture;

      if (output.type === "artist") {
        albumCover.className = "img-fluid w-100 rounded-circle";
      } else {
        albumCover.className = "img-fluid w-100 rounded-1";
      }

      imgContainer.appendChild(albumCover);
    } else {
      imgContainer.style.display = "none";
    }
  } catch (error) {
    console.error("🔴 Fetching error:", error);
  }
}
