import React from 'react'
import { NavLink } from 'react-router-dom'
// import '/src/index.css'

const Navbar = () => {
	return (
		<div className='flex flex-row gap-4 place-content-evenly'>

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
