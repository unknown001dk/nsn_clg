import React from 'react'
import { IoIosSearch } from "react-icons/io";

import './css/test.css';
// import { Link } from 'react-router-dom';

function Header() {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about/goals' },
    { label: 'Academics', to: '/academics/courses' },
    { label: 'Department', to: '/department/BE/eee' },
    // { label: 'Contact', href: '/contact' },
  ]
  return (
    // <header className='header flex'>
    //   <nav className='flex'>
    //     <ul className='nav-links flex'>
    //       {links.map((link, index) => (
    //         <li key={index}>
    //           <a className='text-data' href={link.to}>{link.label}</a>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    //     <input className='search-bar' type='text' placeholder='Search...' />
    // </header>
    <div className="topnav">
      <a href="/">Home</a>
      <a href="/admission/Admission_form">Admission</a>
      <a href="/administration/principal">Administration</a>
      <a href="/contact">Contact</a>
      <a href="/about/goals">About</a>
      <div className="search-container">
        <form>
          <input type="text" placeholder="Search.." name="search" />
          <button className='btn' type="submit"><IoIosSearch /></button>
        </form>
      </div>
    </div>
  )
}

export default Header