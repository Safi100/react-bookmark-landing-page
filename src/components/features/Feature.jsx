import React from 'react'

const Feature = ({img, heading, paragraph}) => {
  return (
    <div className="feature_container">
        <div className="feature_container_left">
          <div className="draw"></div>
          <img src={img} alt="illustration-features-tab" />
        </div>

        <div className="feature_container_right">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            <button className='btn blue_btn'>More Info</button>
        </div>
  </div>
  )
}

export default Feature
