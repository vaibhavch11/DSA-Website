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

const Sidebar = (paraObject) => {

  console.log("here 2",paraObject.para.id);
  let key = paraObject.para.id;
  let id;

  switch (key) {
    case "Dynamic Programming":
      id = 0;
      break;
    
    case "Graph":
      id = 1;
      break;

    case "Tree":
      id = 2;
      break;

    case "LinkedList":
      id = 3;
      break;
    default:
      break;
  }
 
  
  return (
    <div className='sidebar'>

       
        <div className='center'>
            <ul>
                <p className="title"></p>
                
                  <li> <DashboardIcon className='icon'/> <span>{record[id].title}</span></li>
                
                <p className="title">Introduction</p>

                {/* to={`/${paraObject.para.id}/${record[id].introductions.first}`} */}

                <Link to="/" style={{textDecoration:'none'}}>
                  <li> <QueryStatsIcon className='icon'/> <span>{record[id].introductions.first}</span></li>
                </Link>
                
                <li> <NotificationsActiveIcon className='icon'/> <span>{record[id].introductions.secound}</span></li>
                  <li> <NotificationsActiveIcon className='icon'/> <span>{record[id].introductions.third}</span></li>
              

                
                <p className="title">Implementation</p>
                <li> <SettingsSystemDaydreamIcon className='icon'/> <span>{record[id].implementation.java}</span></li>
                <li> <PsychologyIcon className='icon'/> <span>{record[id].implementation.java}</span></li>
                  
                <p className="title">Problems</p>
                <li> <PersonIcon className='icon'/> <span>{record[id].Problems.Ques1}</span></li>
                <li> <Inventory2Icon className='icon'/> <span>{record[id].Problems.Ques2}</span></li>
                <li> <BorderColorIcon className='icon'/> <span>{record[id].Problems.Ques3}</span></li>
                <li> <LocalShippingIcon className='icon'/> <span>{record[id].Problems.Ques4}</span></li>


                <p className="title">Useful Articals</p>
                <li><AccountCircleIcon className='icon'/> <span>{record[id].Articals.Section1}</span></li>
                <li><LogoutIcon className='icon'/> <span>{record[id].Articals.Section2}</span></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar