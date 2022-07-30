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
export default App
