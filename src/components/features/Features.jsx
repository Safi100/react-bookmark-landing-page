import React from 'react'
import "./features.css"
const Features = () => {
  return (
    <div className='features'>
      <div className="wrapper">
        <h2>Features</h2>
        <p>Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.</p>
        <ul className='feature_selector'>
          <li className='feature'>Simple Bookmarking</li>
          <li className='feature'>Speedy Searching</li>
          <li className='feature'>Easy Sharing</li>
        </ul>
        <div className="">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  )
}
export default Features
