import react from 'react'

import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contract from './pages/Contract'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
// import { createRoutesFromElements, Route, RouterProvider } from 'react-router'

const App =()=>{


const myroute = createBrowserRouter(createRoutesFromElements(
<Route>

<Route path='/' element={<Home/>} />
<Route path='/About' element={<About/>} />
<Route path='/contact' element={<Contract/>} />
</Route>


))














// const  myrounte = createBrowserRouter(createRoutesFromElements(

// <Route>

// <Route path='/About'  element={<About/>}/>
// <Route path='/Contact'  element={<Contract/>}/>

// </Route>

// ))



return(
    

  <>

   <Navbar/>
<RouterProvider router={myroute} />



 

  






  </>
)

}

export default App


