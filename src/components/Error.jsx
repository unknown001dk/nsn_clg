import React from 'react'
import './css/Error.css';

function Error() {
  return (
    <>
      <div className="error">
        <p>404</p>
        <h2>Look like you're lost</h2>
        <h5>The page you are looking for not available</h5>
        <button>Go Home</button>
      </div>
    </>
  )
}

export default Error