import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="contents">
          <input type="text" placeholder="Search" />
        <ul>
          <li>Categories</li>
          <li>Website Builders</li>
          <li>Today's deals</li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
