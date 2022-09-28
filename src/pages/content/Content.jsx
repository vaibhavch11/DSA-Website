import React from 'react'
import "./Content.scss"
import data from "../../MainDataCenter"


const Content = (paraObject) => {

  let key = paraObject.para.id;
  console.log(paraObject);
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
 
  console.log(data[id].introductions.first.para1);

  return (
    <div className='content'>
        <div className="title">

          <p>{data[id].title}</p>
          <p>{data[id].introductions.first.para1}</p>
          <p>{data[id].introductions.first.para2}</p>
         
        </div>
    </div>
  )
}

export default Content