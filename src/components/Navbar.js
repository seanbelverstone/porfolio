import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { applyActiveClass } from '../utils';
import './css/Navbar.css';

const Navbar = () => {
	const [scrollHeight, setScrollHeight] = useState(window.scrollY);

	useEffect(() => {
		applyActiveClass('navlinks');
	})
	useEffect(() => {
		window.addEventListener('scroll', handleResize, false);
	}, [])

	const handleResize = () => {
		setScrollHeight(window.scrollY);
	}


	return (
		<div id="navbarWrapper" className={scrollHeight > 0 ? 'opaque' : 'transparent'}>
			<NavLink className="navlinks" to="/">HOME</NavLink>
			<NavLink className="navlinks" to="/about">ABOUT</NavLink>
			<NavLink className="navlinks" to="/projects">PROJECTS</NavLink>
			<NavLink className="navlinks" to="/contact">CONTACT</NavLink>
		</div>
	)
}

export default Navbar;