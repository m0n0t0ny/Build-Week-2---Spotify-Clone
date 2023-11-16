async function playSong(artistId) {
  console.log(" -------------------");
  console.log("artistId:", artistId);
  console.log(" -------------------");
  const url = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=5`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
    }
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("🔴 Network error");
    }

    const topTracks = await response.json();
    console.log("topTracks:", topTracks);

    const audioPlayer = document.getElementById("audio-player");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const currentlyPlayingSongImg = document.getElementById(
      "currently-playing-song-img"
    );
    const currentlyPlayingSongTitle = document.querySelector(
      ".currently-playing-song-title"
    );
    const currentlyPlayingSongArtist = document.querySelector(
      ".currently-playing-song-artist"
    );

    audioPlayer.src = topTracks.data[0].preview;
    console.log(" -----------------------------------------------");
    console.log("topTracks.data.preview:", topTracks.data[0].preview);
    console.log(" -----------------------------------------------");

    playButton.addEventListener("click", () => {
      console.log("▶ Play");
      audioPlayer.play();
    });

    pauseButton.addEventListener("click", () => {
      console.log("⏸ Pause");
      audioPlayer.pause();
    });

    currentlyPlayingSongImg.src = topTracks.data[0].album.cover_medium;
    currentlyPlayingSongTitle.textContent = topTracks.data[0].album.title;
    currentlyPlayingSongArtist.textContent = topTracks.data[0].artist.name;
  } catch (error) {
    console.error("🔴 Fetching top tracks error:", error);
  }
}
