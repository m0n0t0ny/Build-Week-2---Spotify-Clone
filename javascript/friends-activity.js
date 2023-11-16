const imgDirectory = "./assets/img/users-img/";
const imgFiles = [
  "Alessandro Anghebn.webp",
  "Antonio Bertuccio.webp",
  "Chiara Puleio.webp",
  "David Rios.webp",
  "Giordano Zagatti.webp",
  "Giuseppe Triolo.webp",
  "Laura Ceragioli.webp",
  "Otman Karim.webp",
  "Paolo Pascucci.webp",
  "Stefano Miceli.webp"
];

// Loop through the image files and fetch data for each friend card
imgFiles.forEach(async (imgFile) => {
  try {
    // Fetch data using the specified API
    const response = await fetch("API_ENDPOINT_HERE", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9854be37camsh23039a018f26824p142f52jsn217be1d9cce0",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
      }
    });

    if (response.ok) {
      const data = await response.json();

      const imgSrc = imgDirectory + imgFile;
      const friendName = imgFile.replace(/\.[^/.]+$/, "");
      const friendArtistTitle = data.title;
      const friendArtistName = data.name;

      const friendCard = document.createElement("div");
      friendCard.className = "friend-card d-flex w-100";
      friendCard.innerHTML = `
        <div class="img-cover me-3">
          <img src="${imgSrc}" alt="User profile image" class="rounded-5 h-75">
        </div>
        <div class="friend-listening lh-md ms-auto w-100">
          <div class="d-flex w-100 align-items-center justify-content-between">
            <a href="#" class="friend-name fs-08 fw-bold grey-font d-flex align-items-center">
              ${friendName}
            </a>
            <span id="friends-when" class="fs-08 grey-font">Now</span>
          </div>
          <div>
            <div href="#" class="friend-song-title fs-08 grey-font d-flex align-items-center">
              <a href="#" id="friend-artist-title">${friendArtistTitle}</a>•<a href="#" id="friend-artist-name">${friendArtistName}</a>
            </div>
          </div>
          <div class="friend-album-title fs-08 d-flex align-items-center">
            <svg data-encore-id="icon" role="img" aria-hidden="true" data-testid="album" class="w-10px currentcolor me-1" viewBox="0 0 16 16">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
              <path d="M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"></path>
            </svg>
            <a href="#" class="grey-font">It Is Time For A Love Revolution</a>
          </div>
        </div>
      `;

      const container = document.getElementById("friends-container");
      container.appendChild(friendCard);
    } else {
      console.error("Failed to fetch data");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
