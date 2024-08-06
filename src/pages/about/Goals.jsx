import React, { useEffect, useState } from 'react'

function Goals() {
  // page render after 5s 
  //page load after 5 seconds
  // set page title to 'Goals' after 5 seconds
  // this is just for demonstration purpose, actual implementation may vary based on your requirements
  setTimeout(() => {
    document.title = 'Goals'
  }, 5000)
  return (
    <>
      <h1>Goals</h1>
    </>
  )

}

export default Goals