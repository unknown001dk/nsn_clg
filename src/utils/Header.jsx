import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/images/logo.png";
import BGvideo from "/videos/test.mp4";
import "./header.css";
import "./video.css";

const App = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window size

  // Function to handle resizing and update navbar visibility
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 720) {
        setNavbarVisible(true); // Open navbar for screens larger than 720px
      } else {
        setNavbarVisible(false); // Close navbar for screens smaller than 720px
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Card rotation logic
  useEffect(() => {
    const displayTime = 10000;
    const interval = setInterval(() => {
      setCardIndex((prevIndex) => (prevIndex + 1) % 3);
    }, displayTime);

    return () => clearInterval(interval);
  }, []);

  // Function to handle link clicks and close the sidebar on small screens
  const handleLinkClick = () => {
    if (windowWidth <= 720) {
      setNavbarVisible(false); // Close navbar if screen size is <= 720px
    }
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src={Logo} alt="NSN Logo" />
          <div className="text-content">
            <h1 className="title-1">N.S.N COLLEGE OF ENGINEERING</h1>
            <h1 className="title-2">AND TECHNOLOGY</h1>
            <p>
              N.S.N Kalvi Nagar, Karur- Madurai NH-7, Manalmedu, Karur - 639
              003, TN, India
            </p>
            <p>
              (Approved by AICTE, New Delhi, Affiliated to Anna University,
              Chennai)
            </p>
          </div>
          <div className="toggle-bar">
            <div className="toggle-icon" onClick={() => setNavbarVisible(true)}>
              &#9776;
            </div>
            <div className="close-icon" onClick={() => setNavbarVisible(false)}>
              &times;
            </div>
          </div>
          {/* <div className="rank-section">
            <div className="rank-content">
              <span className="rank-title">19th Rank in</span>
              <br />
              <span className="rank-subtitle">Anna University</span>
            </div>
          </div> */}
        </div>

        <div className="video-container">
          <video
            autoPlay
            muted
            loop
            className="background-video"
            id="background-video"
          >
            <source src={BGvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="video-overlay"></div>

          <div className="card-container">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className={`card ${idx === cardIndex ? "show" : "hide"}`}
              >
                <h1>{`Card Title ${idx + 1}`}</h1>
                <p>
                  This is some content inside the {idx + 1} transparent card.
                </p>
                <a
                  href={`https://example.com/page${idx + 1}`}
                  className="cta-button"
                >
                  Visit Link {idx + 1}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="scrolling-content">
          <div className="button-container">
            <button className="marquee-button">Home</button>
            <button className="marquee-button">Admissions</button>
            <button className="marquee-button">Courses</button>
            <button className="marquee-button">Contact Us</button>
          </div>
          <div className="marquee-wrapper">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="6"
              loop="infinite"
              onMouseOver={(e) => e.target.stop()}
              onMouseOut={(e) => e.target.start()}
              className="marquee-text"
            >
              Admissions Open for 2025-2026! Apply Now. | TNEA Counselling Code
              2327...
            </marquee>
          </div>
        </div>

        <nav className={`navbar ${navbarVisible ? "visible" : "hidden"}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active"
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-nsn"
                activeClassName="active"
                onClick={handleLinkClick}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/administration"
                activeClassName="active"
                onClick={handleLinkClick}
              >
                Administration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/department-page"
                activeClassName="active"
                onClick={handleLinkClick}
              >
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/placement-page"
                activeClassName="active"
                onClick={handleLinkClick}
              >
                Placements
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admission-page"
                activeClassName="active"
                onClick={handleLinkClick}
              >
                Admissions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/facilities"
                activeClassName="active"
                onClick={handleLinkClick}
              >
                Facilities
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transport"
                activeClassName="active"
                onClick={handleLinkClick}
              >
                Transport
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                activeClassName="active"
                onClick={handleLinkClick}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-page"
                activeClassName="active"
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {navbarVisible && (
          <div className="sidebar">
            <div className="sidebar-header">
              {/* <h2>Menu</h2> */}
              <span
                className="close-sidebar"
                onClick={() => setNavbarVisible(false)}
              >
                &times;
              </span>
            </div>
            <nav className="sidebar-nav">
              <ul>
                <li>
                  <NavLink to="/" exact activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-nsn" activeClassName="active">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/administration" activeClassName="active">
                    Administration
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/department-page" activeClassName="active">
                    Departments
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/placement-page" activeClassName="active">
                    Placements
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admission-page" activeClassName="active">
                    Admissions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/facilities" activeClassName="active">
                    Facilities
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/transport" activeClassName="active">
                    Transport
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" activeClassName="active">
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact-page" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
