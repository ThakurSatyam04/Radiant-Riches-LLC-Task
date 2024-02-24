import React from 'react'
import './Card.css'
import cmpImg from "../../assessts/computer_icon.png"
import starts from '../../assessts/stars.png'


const Card = (props) => {
  return (
    <div class='card-container'>

      <div class='card-body'>
        <div class="tag">
          {
            props.tag ? <button>{props.tag}</button> : ""
          }
          
        </div>
        <div class="col1">
          <img src={cmpImg} alt="" />
          {
            props.title? <span>{props.title}</span> : ""
          }
          
        </div>
        <div class="col2">
          <p><span class='boldspan'>{props.heading}</span> {props.para1}</p>
          <span class='boldspan'>Main highlights</span>

          <div className='col2-para2'>{props.para2}</div>

          <span class="showmore">Show more...</span>
        </div>
        <div class="col3">          
            {
              props.rating ? (
                <div class='col3-rating'>
                <span>{props.rating}</span>
                <span>Exceptional</span>
                <img src={starts} alt="" />
                </div>
              ): ("no rating")
            }              
          <div>
            <button>View</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
