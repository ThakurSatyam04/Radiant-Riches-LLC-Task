import React from 'react'
import cmpImg from '../../../assessts/computer_icon.png'
import './DealCard.css'

const DealCard = () => {
  return (
    <div class="deal-card-container">
      <div class='img-icon'>
        <img src={cmpImg} alt="" />
      </div>
      <div class="offers">
        <p>20% Off</p>
        <p>Limited time</p>
      </div>
      <div class='subtitle'>
        <span >Webbuilder 1</span>
      </div>
      <p>Computer Modern clasic with wix support</p>
      <p style={{lineHeight:"30px"}}><span>$39.96</span> <sub style={{opacity:"60%"}}>$39.96</sub><sub style={{color:"red", padding: "2px"}}>(20% Off)</sub></p>

      <button>View Deal</button>
      
    </div>
  )
}

export default DealCard
