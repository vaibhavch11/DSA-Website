import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PersonIcon from '@mui/icons-material/Person';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import "./Sidebar.scss";
//  import data from "../../Store/TopicStore"
import record from "../../Store/TopicStore";
import {Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Content from "../../pages/content/Content"

const Sidebar = ({para}) => {

  
  return (
    <div className='box-div'>
    <div className='sidebar'>

       
        <div className='center'>
            <ul>
                <p className="title"></p>
                
                  <li> <DashboardIcon className='icon'/> <span>TopicName</span></li>
                
                <p className="title">Introduction</p>

                {/* to={`/${paraObject.para.id}/${record[id].introductions.first}`} */}

                
              <li o> 
              
              <QueryStatsIcon className='icon'/> <span>What</span></li>

                
                <li > <NotificationsActiveIcon className='icon'/> <span>When</span></li>
                <li > <NotificationsActiveIcon className='icon'/> <span>How</span></li>
              

                
                <p className="title">Implementation</p>
                <li > <SettingsSystemDaydreamIcon className='icon'/> <span>Java</span></li>
                <li > <PsychologyIcon className='icon'/> <span>C++</span></li>
                  
                <p className="title">Problems</p>
                <li > <PersonIcon className='icon'/> <span>Problem Ques1</span></li>
                <li > <Inventory2Icon className='icon'/> <span>Problem Ques2</span></li>
                <li > <BorderColorIcon className='icon'/> <span>Problem Ques3</span></li>
                <li > <LocalShippingIcon className='icon'/> <span>Problem Ques4</span></li>

            </ul>
        </div>
    </div>
    </div>
  )
}

export default Sidebar

// {
//   topicName : "Dynamic Programming"
//   ,
//   introductions : {
//       "first" : "What is DP?",
//       "secound" : "How do DP work?",
//       "third" : "When do we use it?"
//   },
//   implementation : {
//       "java" : "Java",
//       "C++" : "C++"
//   }
// }