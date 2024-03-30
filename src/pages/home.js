import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Nav --> */}

        <header class="d-md-flex flex-row pb-3 justify-content-between md sm text-center">
          <div class="p-4 title">WaciWaci</div>
          <div class="p-4">
            <nav>
              <ul class="d-md-flex gap-5 md-5">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Genres</a>
                </li>
                <li>
                  <a href="#">Series</a>
                </li>
                <li>
                  <a href="#">Originals</a>
                </li>
              </ul>
              <ul>
                <li class="search">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Search Movies or Series Here..."
                    aria-label="default input example"
                  />
                </li>
              </ul>
            </nav>
          </div>
          <div class="p-5">
            <ul class="d-flex gap-4 login">
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </header>

        <main>
          {/* <!-- Trending Section --> */}

          <section class="trending pt-3">
            <h2 class="text-center pb-3">Trending Now</h2>
            <div class="container text-center gap-5">
              <div class="row">
                <div class="col">
                  <img
                    src="assets/posters/infinity-war.jpg"
                    alt="Infinity War"
                  />
                  <h3>Avengers: Infinity War</h3>
                  <p>
                    Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his
                    twisted will on reality.
                  </p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/aquaman.jpg"
                    alt="Oppenheimer"
                  />
                  <h3>Aquaman</h3>
                  <p>
                    Arthur Curry, the half-human heir to Atlantis, embarks on a quest to prevent war between ocean and land. With allies Nuidis Vulko and Mera, he must embrace his destiny, find the Trident of Atlantis, and thwart his
                    vengeful half-brother Orm's evil plot
                  </p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/Oppenhiemer.jpg"
                    alt="Oppenheimer"
                  />
                  <h3>Oppenheimer</h3>
                  <p>
                    During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Their work comes to fruition on July 16, 1945, as they witness the world's first
                    nuclear explosion, forever changing the course of history.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Genres Section --> */}
          <section class="genres">
            <h2 class="text-center pb-3">Genres</h2>
            <div class="container text-center gap-4">
              <div class="row">
                <div class="col">
                  <p fs-4>
                    <a href="#">Action</a>
                  </p>
                </div>
                <div class="col">
                  <p fs-4>
                    <a href="#">Biopic</a>
                  </p>
                </div>
                <div class="col">
                  <p fs-4>
                    <a href="#">Comedy</a>
                  </p>
                </div>
                <div class="col">
                  <p fs-4>
                    <a href="#">Horror</a>
                  </p>
                </div>
                <div class="col">
                  <p fs-4>
                    <a href="#">See More...</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Series Section --> */}
          <section class="series">
            <h2 class="text-center pb-3">Series</h2>
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <img
                    src="assets/posters/ahs.jpg"
                    alt="American Horror Stories"
                  />
                  <p fs-4>American Horror Stories</p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/the-simpsons.jpg"
                    alt="The Simpsons"
                  />
                  <p fs-4>The Simpsons</p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/family-guy.jpg"
                    alt="Family Guy"
                  />
                  <p fs-4>Family Guy</p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/the-last-airbender.jpg"
                    alt="the last airbender.jpg"
                  />
                  <p fs-4>The Last Airbender</p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/blackish.jpg"
                    alt="blackish"
                  />
                  <p fs-4>Blackish</p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/kuwtk.jpg"
                    alt="Keeping Up With The Kardashians"
                  />
                  <p fs-4>Keeping Up With The Kardashians</p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Originals Section --> */}
          <section class="originals">
            <h2 class="text-center">Originals</h2>
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <img
                    src="assets/posters/indies/missing.jpg"
                    alt="Missing"
                  />
                  <p fs-4>Missing</p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/indies/pack.jpg"
                    alt="pack"
                  />
                  <p fs-4>pack</p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/indies/join-navy.jpg"
                    alt="Join the Navy"
                  />
                  <p fs-4>Join the Navy</p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/indies/Fire.jpg"
                    alt="Fire"
                  />
                  <p fs-4>Fire</p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/indies/capitol-teatre.jpg"
                    alt="Capitol Theatre"
                  />
                  <p fs-4>Capitol Theatre</p>
                </div>
                <div class="col">
                  <img
                    src="assets/posters/indies/fight-for-liberty.jpg"
                    alt="Fight For Liberty"
                  />
                  <p fs-4>Fight For Liberty</p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Footer --> */}

          <footer class="text-center">
            <p class="p-4 title">WaciWaci</p>
            <div class="printilan d-md-flex flex-row justify-content-evenly md sm text-center">
              <div class="d-md-flex flex-column">
                <p>About Us</p>
                <p>
                  <a href="#">The Company</a>
                </p>
                <p>
                  <a href="#">The Website</a>
                </p>
              </div>
              <div class="d-md-flex flex-column">
                <p>Language</p>
                <p>
                  <a href="#">English</a>
                </p>
                <p>
                  <a href="#">Bahasa Indonesia</a>
                </p>
              </div>
              <div class="d-md-flex flex-column">
                <p>Need Help?</p>
                <p>
                  <a href="#">Help</a>
                </p>
                <p>
                  <a href="#">Feedback</a>
                </p>
              </div>
              <div class="d-md-flex flex-column">
                <p>Connect With Us</p>
                <div class="d-md-flex justify-content-between">
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <p class="p-4 copyright">© Rmaulana and its all entities. All rights Reserved.</p>
          </footer>
        </main>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
      </div>
    );
  }
}

export default Home;
