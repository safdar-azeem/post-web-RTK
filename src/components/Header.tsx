import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
	const location = useLocation()
	return (
		<div className='d-flex justify-content-end'>
			<Link
				to={location.pathname === '/' ? '/add-post' : '/'}
				className='btn btn-outline-success btn-lg'>
				{location.pathname === '/add-post' ? 'Back' : 'Add Post'}
			</Link>
		</div>
	)
}

export default Header
