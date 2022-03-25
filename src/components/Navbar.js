import { useEffect, useState } from 'react';
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
			<a className="navlinks" href="/">HOME</a>
			<a className="navlinks" href="/about">ABOUT</a>
			<a className="navlinks" href="/projects">PROJECTS</a>
			<a className="navlinks" href="/contact">CONTACT</a>
		</div>
	)
}

export default Navbar;