import React from 'react'
import Excalidraw from '../Excalidraw/Excalidraw';
import {useState} from "react"

import Slider from 'react-slick';

const ExcaliCarosule = (props) => {
    const [addPages, setAddPages] = useState([]);
    console.log("printing length ",addPages.length);

    function handleRemove(event){

        let index=event.target.id
        console.log("index here",index);

        setAddPages((prevValue)=>{
            let newArr=prevValue
            console.log("before loop",newArr);
            for(var i=0;i<prevValue.length;++i){
                if(i+1==index){
                    newArr.splice(i,1);
                    break;
                }
            }
            console.log("here is the new arr",newArr);
            return newArr;
        })
    }

    function handleClick(){
        console.log("reaced here")
        setAddPages((prevValue)=>{
            return [...prevValue,<div>
                <Excalidraw id = {prevValue.length+1}/>
                <button 
                id = {prevValue.length+1}
                onClick={(event)=>{
                    handleRemove(event);
                }}>remove</button>
            </div>]

        })
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
        <button className='add' onClick={handleClick}>+</button>
       
        {/* <button className='add' onClick={}>-</button> */}
        <Slider {...settings}>
      {addPages.map((item) => (
        <div>{item}</div>
      ))}
    </Slider>
        
        
    </div>

  )
}

export default ExcaliCarosule