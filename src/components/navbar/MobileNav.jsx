import React from 'react'
import "./mobilenav.css"
import Facebook from "../../Assets/icon-facebook.svg"
import Twitter from "../../Assets/icon-twitter.svg"
const MobileNav = () => {
  return (
    <ul className='mobile_list_container'>
    <li className='mobile_list'><a href="">Features</a></li>
    <li className='mobile_list'><a href="">Pricing</a></li>
    <li className='mobile_list'><a href="">Contact</a></li>
    <a className='mobile_list mobile_login_btn' href="">Login</a>
    <div className="social">
      <a href=""><img src={Facebook} alt="Facebook icon" /></a>
      <a href=""><img src={Twitter} alt="Twitter icon" /></a>
    </div>
  </ul>
  )
}

export default MobileNav
