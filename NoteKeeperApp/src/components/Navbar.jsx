import React from 'react'
import { NavLink } from 'react-router-dom'
import '/src/index.css'

const Navbar = () => {
  return (
	<div className='navbar-container'>
		  <NavLink to="/">
			  Home
		  </NavLink>
		  <NavLink to="/Notes">
			  Notes
		  </NavLink>
		  
	</div>
  )
}

export default Navbar
