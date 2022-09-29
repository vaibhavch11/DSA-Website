import React from 'react'
import "./Content.scss"
import data from "../../MainDataCenter"
import { ConstructionOutlined } from '@mui/icons-material';



const Content = (paraObject) => {

  // let id = paraObject.para.change;
  console.log(paraObject);
  let id=paraObject.para;
console.log("id heree",id);
  


  
  // switch (key) {
  //   case "Dynamic Programming":
  //     id = 0;
  //     break;
    
  //   case "Graph":
  //     id = 1;
  //     break;

  //   case "Tree":
  //     id = 2;
  //     break;

  //   case "LinkedList":
  //     id = 3;
  //     break;
  //   default:
  //     break;
  // }
 
  // console.log(data[id].introductions.first.para1);
  let testData
  if(id>0){
  testData=JSON.stringify(data[id])
console.log(testData)
}


else 
testData='Lawde click kr'
//   let temp=`<div className='content'>
//   <div className="title">

//     <p>{data[id].title}</p>
//     <p>{data[id].introductions.first.para1}</p>
//     <p>{data[id].introductions.first.para2}</p>
   
//   </div>
// </div>`


  return (
    <div className='Main-context'>
       <div className='testData'>
         {testData}
       </div>
    
    </div>
  )
}

export default Content