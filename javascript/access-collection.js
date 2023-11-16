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

    const dynamicBg = document.getElementById("dynamic-bg");
    dynamicBg.innerHTML = "";

    // ! ---------- ARTIST ----------
    if (output.type === "artist") {
      const section = document.createElement("section");
      section.id = "artist-page";
      section.className = "mb-1 mb-sm-2 mb-md-3 mb-lg-4 mt-3";
      dynamicBg.appendChild(section);

      const artist = document.createElement("div");
      artist.className = "d-flex gap-3";
      section.appendChild(artist);

      const artistHeader = document.createElement("div");
      artistHeader.className = "d-flex flex-column";
      artist.appendChild(artistHeader);

      if (output.picture_xl) {
        const dynamicBg = document.getElementById("dynamic-bg");
        dynamicBg.style.backgroundImage = `url(${output.picture_xl})`;
        dynamicBg.style.backgroundSize = "cover";
        dynamicBg.style.backgroundPosition = "center";
      }

      const artistInfo = document.createElement("div");
      artistInfo.className =
        "d-flex flex-column justify-content-end align-items-start";
      artist.appendChild(artistInfo);

      // Se l'artista ha più di 999 "fan", carica badge
      const verifiedContainer = document.createElement("div");
      verifiedContainer.className =
        "d-flex align-items-center justify-content-center gap-2";
      artistInfo.appendChild(verifiedContainer);

      console.log("output.nb_fan:", output.nb_fan);
      if (output.nb_fan > 999) {
        const artistVerifiedBadge = document.createElement("div");
        artistVerifiedBadge.className =
          "artist-verified-badge fs-08 text-truncate";
        artistVerifiedBadge.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" class="w-24px currentcolor" viewBox="0 0 24 24"><path d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path></svg>`;
        verifiedContainer.appendChild(artistVerifiedBadge);

        const artistVerified = document.createElement("span");
        artistVerified.className = "text-white fs-08 text-truncate";
        artistVerified.innerText = "Verified Artist";
        verifiedContainer.appendChild(artistVerified);
      }

      const artistName = document.createElement("h3");
      artistName.className = "text-white text-truncate py-3 pb-0 mb-0 le-1";
      artistName.style.fontSize = "calc(2vw + 2rem)";
      artistName.innerText = `${output.name}`;
      artistInfo.appendChild(artistName);

      const artistMonthlyListeners = document.createElement("div");
      artistMonthlyListeners.className = "text-white fs-5 text-truncate";
      artistMonthlyListeners.innerText = `${output.nb_fan} monthly listeners`;
      artistInfo.appendChild(artistMonthlyListeners);

      // ! ---------- PLAYLIST ----------
    } else {
      const section = document.createElement("section");
      section.id = "playlist-page";
      section.className = "mb-1 mb-sm-2 mb-md-3 mb-lg-4 mt-3";
      innerHomeSection.appendChild(section);

      const playlist = document.createElement("div");
      playlist.className = "d-flex gap-3";
      section.appendChild(playlist);

      const playlistHeader = document.createElement("div");
      playlistHeader.className = "d-flex flex-column";
      playlist.appendChild(playlistHeader);

      const playlistCover = document.createElement("div");
      playlistCover.className =
        "rounded-2 flex-shrink-0 lg-cover-container d-flex align-items-center me-3";
      playlist.appendChild(playlistCover);

      if (output.picture) {
        const albumCover = document.createElement("img");
        albumCover.src = output.picture;
        albumCover.className = "img-fluid w-100 rounded-1";
        playlistCover.appendChild(albumCover);
      } else {
        playlistCover.style.display = "none";
      }

      const playlistInfo = document.createElement("div");
      playlistInfo.className = "d-flex flex-column justify-content-end";
      playlist.appendChild(playlistInfo);

      const playlistShared = document.createElement("div");
      playlistShared.className = "text-white fs-08 text-truncate";
      playlistShared.innerText = "Public Playlist";
      playlistInfo.appendChild(playlistShared);

      const playlistTitle = document.createElement("h3");
      playlistTitle.className =
        "text-white py-3 m-0 text-truncate pb-0 mb-0 le-1";
      playlistTitle.style.fontSize = "calc(2vw + 2rem)";
      playlistTitle.innerText = `${output.title}`;
      playlistShared.appendChild(playlistTitle);

      const playlistInfoFooter = document.createElement("div");
      playlistInfoFooter.className = "text-white m-0 text-truncate pb-0 mb-0";
      playlistInfoFooter.innerHTML = `<b>${output.creator.name}</b> • ${output.fans} likes • ${output.tracks.data.length} songs`;
      playlistInfo.appendChild(playlistInfoFooter);
    }

    // COLLECTION PLAYER

    const innerCollection = document.createElement("div");
    innerCollection.classList("d-flex p-3 h-100 w-100 z-6");
    innerHomeSection.appendChild(innerCollection);

    const innerCollectionPlayer = document.createElement("div");
    innerCollectionPlayer.className = "d-flex p-3";
    innerCollectionPlayer.innerTextFollowing;
    innerCollection.appendChild(innerCollectionPlayer);

    const playPauseButton = document.createElement("button");
    playPauseButton.type = "button";
    playPauseButton.className("w-40px  spotigreen");
    playPauseButton.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="w-32px currentcolor"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>`;
    innerCollectionPlayer.appendChild(playPauseButton);
  } catch (error) {
    console.error("🔴 Fetching error:", error);
  }
}

// window.onload = async () => {
//   if (condition) {
//   }
// };
