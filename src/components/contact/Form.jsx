import React from 'react'

const Form = () => {
  return (
    <form>
    <div className="left_in_form">
      <div className="input"><input type="text"/><div className="error_icon"></div></div>
      <div className='error_div'><span className='error_message'>Whoops, Make sure it's an email</span></div>
    </div>
    <div className='right_in_form'><button className='btn red_btn'>Contact Us</button></div>
  </form>
  )
}

export default Form
