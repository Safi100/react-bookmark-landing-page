import React from 'react'
import Card from './Card'
import "./extension.css"
import Chrome from "../../Assets/logo-chrome.svg"
import Firefox from "../../Assets/logo-firefox.svg"
import Opera from "../../Assets/logo-opera.svg"
const Extension = () => {
  return (
    <div className='extension'>
      <div className="wrapper">
        <h2 className='heading'>Download the extension</h2>
        <p className='paragraph'>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
        got a favourite you’d like us to prioritize.</p>
        <div className="cards_container">
          <Card img={Chrome} alt={"Chrome logo"} heading={"Add to Chrome"} paragraph={"Minimum version 62"} />
          <Card img={Firefox} alt={"Firefox logo"} heading={"Add to Firefox"} paragraph={"Minimum version 55"} />
          <Card img={Opera} alt={"Opera logo"} heading={"Add to Opera"} paragraph={"Minimum version 46"} />
        </div>
      </div>
    </div>

  )
}

export default Extension
