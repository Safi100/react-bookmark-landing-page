import React, { useState } from 'react'
import Feature from './Feature'
import "./features.css"
import Img_1 from "../../Assets/illustration-features-tab-1.svg"
import Img_2 from "../../Assets/illustration-features-tab-2.svg"
import Img_3 from "../../Assets/illustration-features-tab-3.svg"
const Features = () => {
  const [feature, setFeature] = useState(1)
  return (
    <div className='features'>
      <div className="wrapper">
        <h2 className='heading'>Features</h2>
        <p className='paragraph'>Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.</p>
        <ul className='feature_selector'>
          <li className={`tab ${(feature === 1) ? "active_tab" : ""}`} onClick={ ()=> setFeature(1) } >Simple Bookmarking</li>
          <li className={`tab ${(feature === 2) ? "active_tab" : ""}`} onClick={ ()=> setFeature(2) } >Speedy Searching</li>
          <li className={`tab ${(feature === 3) ? "active_tab" : ""}`} onClick={ ()=> setFeature(3) } >Easy Sharing</li>
        </ul>
        {( feature === 1 ) && <Feature img={Img_1} heading={"Bookmark in one click"}  paragraph={"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."}/>}
        {( feature === 2 ) && <Feature img={Img_2} heading={"Intelligent search"} paragraph={"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."} />}
        {( feature === 3 ) && <Feature img={Img_3} heading={"Share your bookmarks"} paragraph={"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."}/>}
      </div>
    </div>
  )
}
export default Features
