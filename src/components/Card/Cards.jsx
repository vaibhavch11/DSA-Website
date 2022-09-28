import React from 'react'
import "./Topics.scss"
import { Link } from 'react-router-dom'

import data from "../../Store/CardStore"




const Cards = () => {
  
  return (


    <div className='Topics'>
     {data.map(user => {
      return (
        <Link to={`/${user.title}`}> 
          <div className="wrap">
           {/* <div className="left">difficulty Level : {user.level}</div> */}
           <div className="right">{user.title}</div>
          </div>
        </Link>
      )
      
     })}
       
       
    </div>
    
  )
}

export default Cards





{/*       
      <Link to="/recursion">
        <div className="wrap">
          <div className="left">difficulty Level : {level}</div>
          <div className="right">Recursion</div>
        </div>
      </Link>

      <Link to="/graph">
        <div className="wrap">
          <div className="left">difficulty Level : {level}</div>
          <div className="right">Graph</div>
        </div>
      </Link>

      <Link to="/dp">
        <div className="wrap">
          <div className="left">difficulty Level : {level}</div>
          <div className="right">Dynamic Programming</div>
        </div>
      </Link>

      <Link to="/tree">
        <div className="wrap">
          <div className="left">difficulty Level : {level}</div>
          <div className="right">Binary Tree</div>
        </div>
      </Link>
        */}