import React from 'react'
import "./Main.scss"


const Main = () => {
  return (
    <div className='main'>
        <div className="image">
            <img src = './images/mega-creator.png'/>
        </div>
        <div className="Data">

            <div className="title">
              <div className='heading'>
                 Data Structure and Algorithms
                      with<br/>
                 Amazing Dry-Run
              </div>

              <div className="subheading">
              Learn to code with our beginner-friendly tutorials<br/> and examples. Read tutorials and examples, write<br/> programs, run code and learn to code.
              </div>
              
            </div>

            <div className="button">
              <button className='start-button'>Start Learning</button>
            </div>
            
          

        </div>
    </div>
  )
}

export default Main