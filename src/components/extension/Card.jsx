import React from 'react'
import "./extension.css"
import Dots from "../../Assets/bg-dots.svg"
const Card = ({img, alt, heading, paragraph}) => {
  return (
    <div className='card'>
      <img className="logo" src={img} alt={alt}/>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <img className='dots' src={Dots} alt="Dots" />
      <button className='btn card_btn blue_btn'>Add & Install Extension</button>
    </div>
  )
}

export default Card
