import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Services from './screens/Services'
import Logout from './screens/Logout'
import Nav from './Components/Nav'
import Webdev from './Components/services/Webdev'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}>
            <Route path='/webdev' element={<Webdev/>}/>
          </Route>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='*' element={<h1>Page not found</h1>}/>
        </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App