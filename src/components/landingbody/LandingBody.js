import React from 'react'
import Header from './header/Header'
import "./LandingBody.css"
import Cards from '../cards/Cards'
import DealSection from '../dealSection/DealSection'
import Footer from '../footer/Footer'

const LandingBody = () => {
  return (
    <div class='container'>
      <div>
        <Header/>
        <Cards/>
        <DealSection/>
      </div>
      <div style={{maxWidth:"900px", margin:"auto", display:"flex", fontSize:"1.2rem", display:"flex ", alignItems:"center", justifyContent:"center"}}>
        <h1>Sign up and get exclusive special deals</h1>
        <button >Sign Up</button>
      </div>

      <Footer/>
    </div>
  )
}

export default LandingBody
