import React from 'react'
import Content from '../content/Content'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Home } from '../home/Home'
import "./Recursion.scss"
import { Link, useParams,useLocation } from 'react-router-dom'

const Recursion = () => {

  const id = useParams();
  // console.log("here 1",id);

  return (
    <div className='recursion'>
          
          
        <Sidebar para={id} />
        <Content para={id} />
        
        
    </div>
  )
}

{/* 
       <Sidebar name={name}/>

       <div className="conatiner">
         <Content />
       </div>  */}

export default Recursion