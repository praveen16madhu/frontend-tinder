import React, { useState } from 'react'

const Login = () => {

   const[emailData,setEmailData]=useState('');
   const[password,setPassword]=useState('');

   const emailChangeHandler=(e)=>{
    
    const currentValue=e.target.value;

    setEmailData((prevData)=>{
     
      return currentValue;
    })

   }

   

   const passwordChangeHandler=(e)=>{

    const currentValue=e.target.value;

    setPassword((prevData)=>{
     
      return currentValue;
    })

   }
  
   
  return (
    <div className=' bg-gray-700 flex justify-center'>

       <div className="card bg-base-100 w-96 my-9 h-[60%] bg-gray-800  shadow-sm">
        <div className="card-body">
         <h2 className="card-title justify-center">LogIn Page</h2>

         <fieldset className="fieldset">
          <legend className="fieldset-legend font-bold"> your email?</legend>
           <input type="text" className="input bg-gray-800" value={emailData} onChange={emailChangeHandler} placeholder="Type name here" />

           <legend className="fieldset-legend font-bold"> your password?</legend>
           <input type="password" value={password} onChange={passwordChangeHandler} className="input bg-gray-800"  placeholder="Type password here" />


          
        </fieldset>
        



        
         <div className="card-actions justify-center">
         <button className="btn btn-primary">Login</button>
       </div>
      </div>
     </div>

   </div>
  )
}

export default Login
