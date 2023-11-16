// async function getTopTracks(limit) {
//   const url = new URL(window.location.href);
//   const params = url.searchParams.get("id");
//   const apiUrl = `https://striveschool-api.herokuapp.com/api/deezer/artist/${params}/top?limit=${limit}`;
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   return data;
// }

// function renderTopTracks(topTracks) {
//   if (topTracks.data) {
//     const mainBody = document.getElementById("main-body");
//     topTracks.data.forEach((track) => {
//       const card = document.createElement("div");
//       card.className = "card bg-transparent text-white border-0 mx-0";
//       const cardBody = document.createElement("div");
//       cardBody.className = "card-body";
//       const row = document.createElement("div");
//       row.className = "row";
//       const imgColumn = document.createElement("div");
//       imgColumn.className = "col-md-4";

//       if (track.album.cover_small) {
//         const img = document.createElement("img");
//         img.src = track.album.cover_small;
//         img.alt = track.title;
//         img.className = "img-fluid";
//         imgColumn.appendChild(img);
//       }

//       const textColumn = document.createElement("div");
//       textColumn.className = "col-md-8";
//       const title = document.createElement("h5");
//       title.className = "card-title";
//       title.textContent = track.title;
//       textColumn.appendChild(title);
//       row.appendChild(imgColumn);
//       row.appendChild(textColumn);
//       cardBody.appendChild(row);
//       card.appendChild(cardBody);
//       mainBody.appendChild(card);
//     });
//   } else {
//     console.error("Nessuna traccia trovata nell'album.");
//   }
// }
