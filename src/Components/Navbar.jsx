import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <h1>Navbar</h1>
        <div className='navink'>
        <NavLink activeClassName='active' className='link' to='/'>Home</NavLink>
        <NavLink activeClassName='active' className='link' to='/about'>About</NavLink>
        <NavLink activeClassName='active' className='link' to='/contact'>Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar