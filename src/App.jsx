import { useState } from 'react'
import NavBar from './NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Body from './Body'
import Login from './Login'
import Profile from './Profile'

const router=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[{
    path:'/Login',
    element:<Login/>
  },
  {
    path:'/Profile',
    element:<Profile/>
  }
  
]
}])

function App() {
  const [count, setCount] = useState(0);
  console.log('app .jsx')

  return (
    <>
    
    <RouterProvider router={router}/>
      

       
    </>
  )
}

export default App
