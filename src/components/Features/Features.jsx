import React from 'react'
import "./Features.scss"

const Features = () => {
  return (
    <div className='Features'>

        <div className="items">

            <div className="item">
                <div className="image">
                    <img src="./images/diagram.png" alt=""/>
                </div>
                <div className="title">
                  Easy to understand visual <br/>
                  explanations.
                </div>
            </div>

            <div className="item">
                <div className="image">
                   <img src="./images/brain-process.png" alt=""/>
                </div>
                <div className="title">
                Increase your logic building, <br/>
                clear understanding of concepts.
                </div>
            </div>

            <div className="item">
                <div className="image">
                   <img src="./images/process.png" alt=""/>
                </div>
                <div className="title">
                Dry-run of a problems <br/>
                 leads you to increase <br/>
                 your logic building.
                </div>
            </div>

        </div>
    </div>
  )
}

export default Features