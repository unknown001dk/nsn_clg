import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/header.css';

function Header() {
  const location = useLocation(); // Get the current route
  const [isScrolled, setIsScrolled] = useState(false);

  // Change header style on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to determine if the link is active
  const getLinkClass = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <div>
      <header className={`transport-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="transport-header-left">
          <nav>
            <Link to="/transport" className={getLinkClass("/transport")}>
              Transport
            </Link>
            <Link to="/bus-route-details" className={getLinkClass("/bus-route-details")}>
              Bus Route Details
            </Link>
            <Link to="/transport-officers" className={getLinkClass("/transport-officers")}>
              Transport Officers
            </Link>
            <Link to="/route-changing-form" className={getLinkClass("/id-card-details")}>
              Route change
            </Link>
          </nav>
        </div>
        <div className="transport-header-right">
          <Link to="/student-register" className="register-link">
            Student Register
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
