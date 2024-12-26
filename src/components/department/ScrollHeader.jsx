import React from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import styles from './ScrollHeader.module.css'; // Import CSS module

function ScrollHeader() {
  const { deptId } = useParams();
  const location = useLocation();

  // Function to check if the current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      {/* Header Section */}
      <header className={styles['department-header']}>
        <nav>
          <ul className={styles['nav-links']}>
            <li>
              <Link 
                to="/department-page" 
                className={isActive("/department-page") ? styles['active'] : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to={`/departments/${deptId}`} 
                className={isActive(`/departments/${deptId}`) ? styles['active'] : ''}
              >
                Department Details
              </Link>
            </li>
            <li>
              <Link 
                to={`/faculty/${deptId}`} 
                className={isActive(`/faculty/${deptId}`) ? styles['active'] : ''}
              >
                Faculty
              </Link>
            </li>
            <li>
              <Link 
                to={`/${deptId}/association`} 
                className={isActive(`/${deptId}/association`) ? styles['active'] : ''}
              >
                Association
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default ScrollHeader;
