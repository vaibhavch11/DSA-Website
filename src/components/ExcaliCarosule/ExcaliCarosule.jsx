import React from 'react'
import Excalidraw from '../Excalidraw/Excalidraw';
import {useState} from "react"

const ExcaliCarosule = (props) => {
    const [addPages, setAddPages] = useState([]);

    function handleClick(){
        console.log("reaced here")
        setAddPages((prevValue)=>{
            return [...prevValue,<Excalidraw id = {prevValue.length+1}/>]
        })
    }

  return (
    <div>
        <button className='add' onClick={handleClick}>+</button>
        {addPages}
        {/* <button className='add' onClick={}>-</button> */}
    </div>

  )
}

export default ExcaliCarosule