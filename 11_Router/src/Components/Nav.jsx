import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();


  return (
    <div className='navbar'>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/services">Services</Link></li>
               <button onClick={()=>{navigate("/logout")}}>Logout</button>
            </ul>
    </div>
  )
}

export default Nav