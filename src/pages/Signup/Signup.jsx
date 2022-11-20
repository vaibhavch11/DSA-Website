import React from 'react'
import "../Signup/Signup.scss"

const Signup = () => {

    const onSubmit =()=>{
      
    }

  return (
    <div className='signup'>

        <div className="signupForm">

       <form >

       <div className="inputSection">
            <p>First Name</p>
            <input type="text" name="name" placeholder="First Name" />
        </div>
        <div className="inputSection">
            <p>Last Name</p>
            <input type="text" name="name" placeholder="Last Name" />
        </div>
        <div className="inputSection">
            <p>Emial-ID</p>
            <input type="text" name="name" placeholder="emailID" />
        </div>
        <div className="inputSection">
            <p>Password</p>
            <input type="text" name="name" placeholder="password" />
        </div>
        <div className="inputSection">
            <p>Confirm-Password</p>
            <input type="text" name="name" placeholder="confirm password" />
        </div>

        <div className="inputSection">
         <button type='submit'>Submit</button>
        </div>
        
        

       </form>

       </div>
    </div>
  )
}

export default Signup