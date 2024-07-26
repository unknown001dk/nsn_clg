import React from 'react'
import './css/Error.css';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
      <div className="error">
        <p>404</p>
        <h2>Look like you're lost</h2>
        <h5>The page you are looking for not available</h5>
        <Link to='/' className='btn'>Go Home</Link>
      </div>
    </>
  )
}

export default Error