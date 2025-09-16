import React, { useState } from "react";

import { Link } from "react-router";
const AppleHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  // This new function will close the menu
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">☰</span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <Link to="/alert" className="nav-link" onClick={closeNavbar}>
                  ......
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m1" className="nav-link" onClick={closeNavbar}>
                  አባታችን
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m2" className="nav-link" onClick={closeNavbar}>
                  የአዋጅ..
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m3" className="nav-link" onClick={closeNavbar}>
                  መስቀል.ኃ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m4" className="nav-link" onClick={closeNavbar}>
                  በወንጌሉ..
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m5" className="nav-link" onClick={closeNavbar}>
                  መስቀልከ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m6" className="nav-link" onClick={closeNavbar}>
                  ብርሃን.ወ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m7" className="nav-link" onClick={closeNavbar}>
                  ሰላም.ለኪ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m8" className="nav-link" onClick={closeNavbar}>
                  FANNOOGOFTAAKENYA
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/m9" className="nav-link" onClick={closeNavbar}>
                  መስቀልብርሃን
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m10" className="nav-link" onClick={closeNavbar}>
                  ሎላ.ፈኖኢሳቲን
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/m11" className="nav-link" onClick={closeNavbar}>
                  Jaalallaan Hunda
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/m12" className="nav-link" onClick={closeNavbar}>
                  አባታችንሆይ
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/m13" className="nav-link" onClick={closeNavbar}>
                  አንገቴን አልሰብርም
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/m14" className="nav-link" onClick={closeNavbar}>
                  Abbootiin.Q
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/m15" className="nav-link" onClick={closeNavbar}>
                  Nuufkadhadhu
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/m15" className="nav-link" onClick={closeNavbar}>
                  ባርከን ባርከን
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/m15" className="nav-link" onClick={closeNavbar}>
                  Nuufkadhadhu
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AppleHeader;
