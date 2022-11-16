import React from 'react'
import "./Topics.scss"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'


const Cards = (props) => {
 
  console.log(props.topicName + " Cards main hu");
  return (

    <div className='Topics'>
    <Link to={`/${props.topicName}`}>

    
      <div className="text">
        {props.topicName} 
      </div>
    
    </Link>
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