import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            DSA
        </div>
        <div className="items">
               <div className="item">Cources</div>
               <div className="item">DSA</div>
               <div className="item">WebDev</div>
               <div className="item">LinkedIn</div>
               <div className="item">GitHub</div>
               <div className="item">Day-Night</div>
        </div>
    </div>
  )
}

export default Navbar