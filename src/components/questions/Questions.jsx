import React from 'react'
import Question from './Question'
import "./questions.css"
const Questions = () => {
  return (
    <div className='questions'>
      <div className="wrapper">
        <h2 className='heading'>Frequently Asked Questions</h2>
        <p className='paragraph'>Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us.</p>
        <div className="questions_container">
          <Question question={"What is Bookmark?"} answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."} />
          <Question question={"How can I request a new browser?"} answer={"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie"} />
          <Question question={"Is there a mobile app?"} answer={"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."} />
          <Question question={"What about other Chromium browsers?"} answer={"Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."} />
        </div>
        <div className="button_div"><button className='btn blue_btn'>More Info</button></div>
      </div>
    </div>
  )
}

export default Questions
