import react from 'react'

import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contract from './pages/Contract'
import Home from './pages/Home'
import { createRoutesFromElements, Route } from 'react-router'

const App =()=>{

const  myrounte = createBrowserRouter(createRoutesFromElements(

<Route>

<Route path='/'  element={<Home/>}/>

</Route>

))



return(
    

  <>

  <Navbar/>

<About/>
<Contract/>



  </>
)

}

export default App


