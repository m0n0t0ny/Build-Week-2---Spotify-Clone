const imgDirectory = "./assets/img/users-img/";
const imgFiles = [
  "Alessandro Anghebn.webp",
  "Antonio Bertuccio.webp",
  "Chiara Puleio.webp",
  "David Rios.webp",
  "Giordano Zagatti.webp",
  "Laura Ceragioli.webp",
  "Otman Karim.webp",
  "Paolo Pascucci.webp",
  "Stefano Miceli.webp"
];

function randomTime() {
  const randomValue = Math.floor(Math.random() * 13);
  if (randomValue === 0) {
    return "Now";
  } else {
    return randomValue.toString() + "hrs ago";
  }
}

function randomNum() {
  return Math.floor(Math.random() * 18240511) + 1;
}

imgFiles.forEach(async (imgFile) => {
  try {
    const response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/track/${randomNum()}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6d9b0d1d96msh687029ace86e165p179be1jsnda071e179ac4",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
        }
      }
    );

    if (response.ok) {
      const output = await response.json();

      const imgSrc = imgDirectory + imgFile;
      const friendName = imgFile.replace(`/\.[^/.]+$/`, "");
      const friendSongTitle = output.title_short;
      const friendArtistName = output.artist
        ? output.artist.name
        : "Unknown Artist";
      const friendArtistAlbum = output.album.title;
      const friendListeningTime = randomTime();

      const friendCard = document.createElement("div");
      friendCard.className = "friend-card d-flex text-truncate";
      friendCard.style.width = "275px";
      friendCard.innerHTML = `
        <div class="img-cover me-3">
          <img src="${imgSrc}" alt="User profile image" class="w-32 rounded-circle">
        </div>
        <div class="d-flex flex-column friend-listening lh-md ms-auto w-100 text-truncate">
          <div class="d-flex w-100 align-items-center justify-content-between">
          <a
          href="#"
          class="friend-name fs-08 fw-bold grey-font d-flex align-items-center text-truncate">
              ${friendName}
            </a>
            <span id="friends-when" class="fs-08 grey-font">${friendListeningTime}</span>
          </div>
          <div>
            <div href="#" class="fs-08 grey-font d-flex align-items-center">
              <a href="#" id="friend-song-title" class="grey-font text-truncate">${friendSongTitle}</a>
              <span class="text-white">&nbsp;•&nbsp;</span>
              <a href="#" id="friend-artist-name" class="grey-font text-truncate">${friendArtistName}</a>
            </div>
          </div>
          <div class="friend-album-title fs-08 d-flex align-items-center grey-font">
            <svg data-encore-id="icon" role="img" aria-hidden="true" data-testid="album" class="w-10px currentcolor me-1 greyfont" viewBox="0 0 16 16">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
              <path d="M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"></path>
            </svg>
            <a href="#" class="grey-font text-truncate">${friendArtistAlbum}</a>
          </div>
        </div>
      `;

      const friendsList = document.getElementById("friends-list");
      friendsList.appendChild(friendCard);
    } else {
      console.error("Failed to fetch data");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
