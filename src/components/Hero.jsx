import { useRef } from "react";

function Hero() {

  const sliderRef = useRef(null);

  const scrollLeft = () => {

    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });

  };

  const scrollRight = () => {

    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });

  };

  return (

    <section className="hero">

      {/* LEFT PANEL */}

      <div className="hero-panel">

        <div className="panel-header">

          <h2>Recently Played</h2>

          <span>Favorite Tracks</span>

        </div>

        <div className="music-grid">

          <div className="music-box">

            <div className="music-image"></div>

            <h3>Ilegal</h3>

            <p>Cultura Profética</p>

            <span>4:31</span>

          </div>

          <div className="music-box">

            <div className="music-image"></div>

            <h3>Yellow</h3>

            <p>Coldplay</p>

            <span>4:27</span>

          </div>

          <div className="music-box">

            <div className="music-image"></div>

            <h3>Cancer</h3>

            <p>My Chemical Romance</p>

            <span>2:22</span>

          </div>

          <div className="music-box">

            <div className="music-image"></div>

            <h3>Rasta Got Soul</h3>

            <p>Fantan Mojah</p>

            <span>4:30</span>

          </div>

          <div className="music-box">

            <div className="music-image"></div>

            <h3>V6</h3>

            <p>Latin Flow</p>

            <span>3:49</span>

          </div>

          <div className="music-box">

            <div className="music-image"></div>

            <h3>I-Lon</h3>

            <p>Hermanos de Lealtad</p>

            <span>5:01</span>

          </div>

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="hero-panel">

        <div className="panel-header">

          <h2>Rock Essentials</h2>

          <span>Featured Categories</span>

        </div>

        <div className="category-grid">

          <div className="category-card large">

            <h3>Classic Rock</h3>

          </div>

          <div className="category-card">

            <h3>Heavy Metal</h3>

          </div>

          <div className="category-card">

            <h3>Alternative</h3>

          </div>

          <div className="category-card">

            <h3>Indie Rock</h3>

          </div>

        </div>

      </div>

      {/* EXPLORE MUSIC */}

      <div className="music-slider">

        <h2>Explore Music</h2>

        {/* CONTROLS */}

        <div className="slider-controls">

          <button onClick={scrollLeft}>{"<"}</button>

          <button onClick={scrollRight}>{">"}</button>

        </div>

        {/* TRACK */}

        <div className="slider-track" ref={sliderRef}>

          <div className="slider-card">Jazz</div>

          <div className="slider-card">Rock</div>

          <div className="slider-card">Lo-Fi</div>

          <div className="slider-card">Electronic</div>

          <div className="slider-card">Metal</div>

          <div className="slider-card">Reggae</div>

          <div className="slider-card">Synthwave</div>

          <div className="slider-card">Chill</div>

          <div className="slider-card">Hip-Hop</div>

          <div className="slider-card">Blues</div>

          <div className="slider-card">Drum & Bass</div>

          <div className="slider-card">Punk</div>

        </div>

      </div>

      {/* FLOATING PLAYER */}

      <div className="floating-player">

        {/* LEFT */}

        <div className="player-left">

          <div className="player-disc"></div>

          <div className="player-info">

            <h3>V6</h3>

            <p>Latin Flow</p>

          </div>

        </div>

        {/* CENTER */}

        <div className="player-center">

          <button>⏮</button>

          <button>⏸</button>

          <button>⏭</button>

        </div>

        {/* RIGHT */}

        <div className="player-right">

          <span>0:58 / 3:49</span>

          <div className="player-progress">

            <div className="player-progress-bar"></div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;