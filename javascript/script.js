const homeButton = document.getElementById("home-button");

homeButton.addEventListener("click", async function () {
  const innerMain = document.getElementById("inner-main");
  innerMain.className = "p-1 pt-0 p-sm-2 pt-sm-0 p-md-3 pt-md-1";
  innerMain.innerHTML = `
  <div id="inner-main" class="p-1 pt-0 p-sm-2 pt-sm-0 p-md-3 pt-md-1">
    <div id="main-body">
      <div id="inner-main-body" class="overflow-hidden">
        <section id="home-section" class="d-flex flex-column">
          <div id="inner-home-section" class="d-flex flex-column">
            <section
              id="recently-listened"
              class="mb-1 mb-sm-2 mb-md-3 mb-lg-4 mt-3"
            >
              <div
                id="recently-listened-inner-header"
                class="inner-home-section-header d-flex w-100 mt-3 mb-2"
              >
                <h3 id="time-based-greeting" class="text-white"></h3>
                <div
                  id="mobile-header"
                  class="gap-3 ms-auto d-flex d-sm-none align-items-center m-0"
                >
                  <button
                    id="whats-new-btn"
                    type="button"
                    class="grey-font fw-bold rounded-5 d-flex align-items-center justify-content-center"
                  >
                    <svg
                      data-encore-id="icon"
                      role="img"
                      aria-hidden="true"
                      aria-label="What's New"
                      class="w-24px currentcolor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>
                    </svg>
                  </button>
                  <button
                    id="history-btn"
                    type="button"
                    aria-hidden="true"
                    aria-label="History"
                    class="bi bi-clock-history grey-font fw-bold rounded-5 fs-2"
                  ></button>
                  <button
                    id="settings-btn"
                    type="button"
                    class="grey-font fw-bold rounded-5 d-flex align-items-center justify-content-center"
                  >
                    <svg
                      data-encore-id="icon"
                      role="img"
                      aria-hidden="true"
                      aria-label="Settings"
                      viewBox="0 0 24 24"
                      class="w-24px currentcolor"
                    >
                      <path d="m23.2 11.362-1.628-.605a.924.924 0 0 1-.52-.7.88.88 0 0 1 .18-.805l1.2-1.25a1 1 0 0 0 .172-1.145 12.075 12.075 0 0 0-3.084-3.865 1 1 0 0 0-1.154-.086l-1.35.814a.982.982 0 0 1-.931-.02 1.01 1.01 0 0 1-.59-.713l-.206-1.574a1 1 0 0 0-.787-.848 12.15 12.15 0 0 0-4.945 0 1 1 0 0 0-.785.848l-.2 1.524a1.054 1.054 0 0 1-.62.747 1.024 1.024 0 0 1-.968.02l-1.318-.795a1 1 0 0 0-1.152.086 12.118 12.118 0 0 0-3.085 3.867 1 1 0 0 0 .174 1.143l1.174 1.218a.91.91 0 0 1 .182.828.949.949 0 0 1-.532.714l-1.618.6a1 1 0 0 0-.653.955 12.133 12.133 0 0 0 1.1 4.822 1 1 0 0 0 1 .578l1.935-.183a.83.83 0 0 1 .654.327.794.794 0 0 1 .188.726l-.6 1.822a1 1 0 0 0 .34 1.106c.66.504 1.369.94 2.117 1.3.748.36 1.532.642 2.338.841a.988.988 0 0 0 .715-.09 1 1 0 0 0 .362-.332l1.136-1.736a.81.81 0 0 1 1.16.022l1.124 1.714a1 1 0 0 0 1.077.422c1.617-.4 3.133-1.13 4.454-2.145a1 1 0 0 0 .341-1.106l-.613-1.859a.771.771 0 0 1 .18-.7.78.78 0 0 1 .635-.317l1.945.183a.994.994 0 0 0 1-.578 12.133 12.133 0 0 0 1.1-4.822 1 1 0 0 0-.643-.953zm-1.6 2.977c-.103.448-.237.888-.4 1.318l-1.213-.115a2.851 2.851 0 0 0-2.9 3.637l.383 1.16a10.09 10.09 0 0 1-2.473 1.191l-.72-1.1a2.691 2.691 0 0 0-2.275-1.18 2.637 2.637 0 0 0-2.232 1.16l-.735 1.12a10.117 10.117 0 0 1-2.471-1.19l.37-1.125a2.879 2.879 0 0 0-2.93-3.669l-1.2.113a10.46 10.46 0 0 1-.4-1.317 10.09 10.09 0 0 1-.214-1.358l.93-.345a3.032 3.032 0 0 0 1.095-4.8L3.55 7.15a10.158 10.158 0 0 1 1.71-2.146l.688.415a3 3 0 0 0 2.875.066 3.022 3.022 0 0 0 1.726-2.283l.105-.8a10.174 10.174 0 0 1 2.745 0l.11.844a3.099 3.099 0 0 0 4.542 2.184l.721-.435a10.22 10.22 0 0 1 1.712 2.146l-.694.72a3.005 3.005 0 0 0 1.084 4.768l.942.35c-.042.457-.113.912-.215 1.36H21.6zM12 7.001a5 5 0 1 0 5 5 5.006 5.006 0 0 0-4.993-5H12zm0 8a3 3 0 1 1 .007 0H12z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div id="recently-listened-inner-body" class="row g-2"></div>
            </section>
            <section class="inner-home-random-section mb-1 mb-sm-2 mb-md-3 mb-lg-4">
              <div class="inner-home-random-section-header d-flex align-items-center justify-content-between w-100 mt-3 mb-2">
                <h3
                  id="inner-home-random-section-header-h3"
                  class="text-white m-0"
                >
                  Creato per te
                </h3>
                <a href="#" class="text-white">
                  Mostra tutto
                </a>
              </div>
              <div class="inner-home-random-section-body row g-1 g-sm-2 g-md-3">
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="inner-home-random-section mb-1 mb-sm-2 mb-md-3 mb-lg-4">
              <div class="inner-home-random-section-header d-flex align-items-center justify-content-between w-100 mt-3 mb-2">
                <h3
                  id="inner-home-random-section-header-h3"
                  class="text-white m-0"
                >
                  Ascoltato di recente
                </h3>
                <a href="#" class="text-white">
                  Mostra tutto
                </a>
              </div>
              <div class="inner-home-random-section-body row g-1 g-sm-2 g-md-3">
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-lg-3 col-xl-2">
                  <div class="card border-0 p-1 p-sm-2 p-md-3 rounded-3">
                    <img
                      src="./assets/img/cd-cover.jpg"
                      class="card-img-top rounded-2"
                      alt="Album cover"
                    />
                    <div class="card-body p-0 pt-3 text-white">
                      <h5 class="card-title text-truncate fs-5">
                        Discover Weekly
                      </h5>
                      <p class="card-text text-truncate-2 grey-font">
                        II tuo mixtape settimanale di musica...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  </div>`;

  const dynamicBg = document.getElementById("dynamicBg");
  dynamicBg.classList.add("d-none");

  await timeBasedGreeting();
  await generateRecentlyListened();
});
