import React from 'react'
import Content from '../content/Content'
import Sidebar from '../../components/Sidebar/Sidebar'
// import { Home } from '../Home/Home'
import "./Topic.scss"
import { Link, useParams,useLocation } from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Topic = () => {

  const id = useParams();
  console.log("here 1",id);

  return (
    <div className='recursion'>
          
          <div className='topicDiv'>

            {/* <Route path= {`/${id}`} > */}
              <Sidebar para={id} />
            {/* </Route> */}
            
          </div>
          
        
        {/* <Content para={id} /> */}
        
        
    </div>
  )
}


export default Topic