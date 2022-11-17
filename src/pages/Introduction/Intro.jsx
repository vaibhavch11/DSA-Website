import React from 'react'
import { useState,useEffect } from 'react';

function Intro({data}) {

  console.log(data , "Intro main hu");

   const [intro, setIntro] = useState([]);

   useEffect(() => {
     setIntro((intro)=>{
       let arr = [];
       let dataObjectArray= Object.entries(data);
       let introObjectArray = Object.entries(dataObjectArray[1][1]);

       console.log(introObjectArray , "data object in useEffect");

      //  console.log(dataObjectArray , "data object in useEffect");

       for(var i = 0;i<introObjectArray.length;++i){
        arr.push(<div >
                 <h1>{introObjectArray[i][0]}</h1>
                  <p>{introObjectArray[i][1]}</p>
          </div>)
       }
       return [...arr];
     })

   
   }, [])



   
  return (
    <div>
  {intro}
    </div>
    
  )
}

export default Intro