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

const Topic = () => {

  const id = useParams();
  console.log("here 1",id);
  console.log(id.id)

  const [topicContent,setTopicContent]=useState([]);

  useEffect(()=>{
  async function getTopicContent(){
    let response1=await axios({
      method:"get",
      url:`http://localhost:5000/api/v1/topics/getTopicId/${id.id}`
    })
    console.log(response1.data.data);
    response1=response1.data.data;
    let topicId=response1.id;
    console.log(topicId);
    let response2=await axios({
      method:"get",
      url:`http://localhost:5000/api/v1/topics/getTopicContent/${topicId}`
    })
   
    response2=response2.data.data;
    console.log(response2)
    let tempArr=[];
    tempArr.push(<Sidebar className="sidebar" data={response2}/>);
    setTopicContent((topicContent)=>{
      return [...tempArr];
    })
  }
  getTopicContent();
  },[id.id])

  

  return (
    <div className='recursion'>
          
          <div className='topicDiv'>

            {/* <Route path= {`/${id}`} > */}
             {topicContent}
            {/* </Route> */}
            
          </div>
          
        
        {/* <Content para={id} /> */}
        
        
    </div>
  )
}


export default Topic