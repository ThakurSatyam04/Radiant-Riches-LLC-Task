import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import LandingBody from "../../components/landingbody/LandingBody"
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div class="container">
      <div>
        <Navbar/>
        <LandingBody/>
      </div>
      
    </div>
  )
}

export default LandingPage
