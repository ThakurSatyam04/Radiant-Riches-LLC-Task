import React from 'react'
import Card from '../card/Card'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards-container'>
      <Card heading={"WixPro 72-Inch Responsive Website Builder-"} para1={"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"} para2={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."} tag={"Best Choice"} rating={"9.8"} title={"Builder 1"}/>
      <Card heading={"iteCraft 68-Inch Ultimate Web Design Studio-"} para1={"S Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"} para2={"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."} tag={"Best Value"} rating={"9.5"} title={"Builder"}/>
      <Card heading={"ixPro 72-Inch Responsive Website Builder-"} para1={"W Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"} para2={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}   rating={"9.3"} title={"Builder 1"}/>
      <Card heading={"CDK Resposive Builder:"} para1={" An extensive library of widgets and apps, and detailed step-by-step guides"} para2={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}  rating={"9.1"} title={"CDK"}/>
    </div>
  )
}

export default Cards
