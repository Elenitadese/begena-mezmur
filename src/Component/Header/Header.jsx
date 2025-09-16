import React from 'react'

const Header = () => {
  return (
    <>
      <div className="outer_div">
        <div className="First_div">
          {/* Center: Logo + Nav Links */}
          <div className="header_center">
            <img
              src={netflixLogo}
              alt="Netflix Logo"
              className="netflix-logo"
            />

            
            <ul className="nav_links">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse By Languages</li>
            </ul>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Header