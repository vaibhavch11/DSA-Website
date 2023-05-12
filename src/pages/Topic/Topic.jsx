import React from 'react'
import Content from '../content/Content'
import Sidebar from '../../components/Sidebar/Sidebar'
import axios from "axios";
// import { Home } from '../Home/Home'
import "./Topic.scss"
import { Link, useParams,useLocation } from 'react-router-dom'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

import { useState,useEffect } from 'react';
import Intro from '../Introduction/Intro';
import Navbar from '../../components/Navbar/Navbar';

const Topic = () => {

  const id = useParams();
  console.log("here 1",id);
  console.log(id.id)

  const [topicContent,setTopicContent]=useState('');

  useEffect(()=>{
  async function getTopicContent(){

    let response=await axios({
      method:"get",
      url:`http://localhost:5000/api/v1/topics/getTopic/${id.id}`
    })
    
   let parsed_data=JSON.parse(response.data.data.data)
   console.log(parsed_data)
    setTopicContent((topicContent)=>{
      
      return parsed_data
    })
  }
  getTopicContent()
  },[])

  

  return (
    <div className='recursion'>

         <Navbar />
          
          <div className='topicDiv'>
          

          <div dangerouslySetInnerHTML={{__html: topicContent}} />
             
            
            
          </div>

    </div>
  )
}


export default Topic