import React from 'react'
import Features from '../../components/Features/Features'
import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'
import Cards from '../../components/Card/Cards'
import "./Home.scss";


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import db from "../firebase";
// import {setTopics} from "../redux/dsa/dsaSlice";


// const  topics = [
//   { topic : 'Recursion' , level : 'Easy'},
//   { topic : 'Binary Tree' , level : 'Easy'},
//   { topic : 'Dynamic Programming' , level : 'Medium'},
//   { topic : 'Graph' , level : 'Medium'}
// ]

export const Home = () => {

  // const box = data.cards;

  // console.log(data);

  // let data = JSON.parse(jsonString);
  // const cards = data;
  return (
    <div className='Home'>

        <Navbar />
        <Main />
        <Features />

      <div className="cards">

       <div className="heading">Data Structures and Algorithms Topics</div>
       <hr className='line' />


        <Cards />
    
      
   
       
      </div>
        
    </div>
  )
}