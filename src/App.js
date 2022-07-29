import React from 'react'
import "./app.css"
import "./index.css"
import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import Features from "./components/features/Features"
import Extension from "./components/extension/Extension"
import Questions from "./components/questions/Questions"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Features />
      <Extension />
      <Questions />
      <Contact />
      <Footer />
    </div>
  )
}
/* 




  Bookmark in one click

  Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.

  More Info

  Intelligent search

  Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.

  More Info

  Share your bookmarks

  Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.

  More Info

----------------------------------------------------



  

  

  

  Features
  Pricing
  Contact
  
  <footer>
    <p class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </p>
  </footer>


      .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
*/ 
export default App
