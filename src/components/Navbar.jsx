import { useState } from "react";

import { FaSearch } from "react-icons/fa";

function Navbar() {

  const [activeSearch, setActiveSearch] = useState(false);

  const [showCategories, setShowCategories] = useState(false);

  const [showTrending, setShowTrending] = useState(false);

  const [showTop, setShowTop] = useState(false);

  return (

    <nav className="navbar">

      <div className="logo">
        MusicApp
      </div>

      <ul className="nav-links">

        {/* CATEGORIES */}

        <li
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >

          Categories

          {showCategories && (

            <div className="dropdown-menu">

              <p>Rock</p>
              <p>Metal</p>
              <p>Jazz</p>
              <p>Electronic</p>
              <p>Lo-Fi</p>
              <p>Indie</p>
              <p>Classical</p>

            </div>

          )}

        </li>

        {/* TRENDINGS */}

        <li
          onMouseEnter={() => setShowTrending(true)}
          onMouseLeave={() => setShowTrending(false)}
        >

          Trendings

          {showTrending && (

            <div className="dropdown-menu">

              <p>Night Drive</p>
              <p>Dark Echoes</p>
              <p>Red Horizon</p>
              <p>Electric Dreams</p>

            </div>

          )}

        </li>

        {/* TOP */}

        <li
          onMouseEnter={() => setShowTop(true)}
          onMouseLeave={() => setShowTop(false)}
        >

          Top Global

          {showTop && (

            <div className="dropdown-menu top-list">

              <p>#1 Blinding Lights</p>
              <p>#2 Starboy</p>
              <p>#3 Believer</p>
              <p>#4 Heat Waves</p>
              <p>#5 Levitating</p>
              <p>#6 As It Was</p>
              <p>#7 Stay</p>
              <p>#8 One Dance</p>
              <p>#9 Bad Habit</p>
              <p>#10 Shape Of You</p>

            </div>

          )}

        </li>

      </ul>

      {/* SEARCH */}

      <div
        className={`search-container ${activeSearch ? "active" : ""}`}
        onMouseEnter={() => setActiveSearch(true)}
        onMouseLeave={() => setActiveSearch(false)}
      >

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search music..."
        />

      </div>

    </nav>

  );
}

export default Navbar;