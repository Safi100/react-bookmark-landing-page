import React from 'react'
import "./intro.css"
import Illustration_hero from "../../Assets/illustration-hero.svg"
const Intro = () => {
  return (
    <div className='intro'>
      <div className="wrapper">
        <div className="left">
          <h2>A Simple Bookmark Manager</h2>
          <p>A clean and simple interface to organize your favourite<br/>websites. Open a new 
          browser tab and see your sites<br/>load instantly. Try it for free.</p>
          <div className="buttons">
            <button className='btn blue_btn'>Get it on Chrome</button>
            <button className='btn firefox_btn'>Get it on Firefox</button>
          </div>
        </div>
        <div className="right">
          <div className="draw"></div>
          <img src={Illustration_hero} alt="Illustration_hero" />
        </div>
      </div>
    </div>
  )
}

export default Intro
