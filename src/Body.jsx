import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {


  useEffect(()=>{
  console.log("body mounted");
  },[])


  console.log('the body rendered');

  return (
    <div class="grid grid-rows-[10%,70%,20%] h-screen"> 

        <NavBar/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default Body
