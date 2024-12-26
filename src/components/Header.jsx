import React, { useState } from 'react'
import { IoIosSearch, IoMdClose  } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import './css/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  const toogle = () => {
    setActive(!isActive);
  }

  return (
    <>
      <header>
        <div className='topnav'>
          <ul className={`nav-list ${navOpen ? 'open' : 'closed'}`}>
            {/* <li><NavLink>Home</NavLink></li> */}
            <li><a href="/" className={isActive ? 'active' : ''} onClick={toogle}>Home</a></li>
            <li><a href="/administration/principal" className={isActive ? 'active' : ''} onClick={toogle}   >Administration</a></li>
            <li><a href="/academics/courses">Department</a></li>
            <li><a href="/administration/principal">Facilities</a></li>
            <li><a href="/academics/courses">Course</a></li>
            <li><a href="/placement/industrial_relation">Placement</a></li>
            <li><a href="/admission/Admission_form">Admission</a></li>
            <li><a href="/contact">Contact</a></li>
            <li> <a href="/about/goals">About</a></li>
          </ul>
        
          <div className="search-container">
            <form>
              <input type="text" placeholder="Search.." name="search" />
              <button className='btn' type="submit"><IoIosSearch className='icon'/></button>
            </form>
          </div>
          <div className="menu-icon">
            <button onClick={toggleNav}>
            {navOpen ? <IoMdClose /> : <CiMenuBurger />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header