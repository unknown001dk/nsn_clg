import React from 'react'
import { IoIosSearch } from "react-icons/io";
import './css/test.css';

function Header() {

  return (
    <div className="topnav">
      <a href="/">Home</a>
      <a href="/administration/principal">Administration</a>
      {/* <a href="/academics/courses">Department</a> */}
      <a href="/administration/principal">Facilities</a>
      <a href="/academics/courses">Course</a>
      <a href="/placement/industrial_relation">Placement</a>
      <a href="/admission/Admission_form">Admission</a>
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