import { useEffect } from 'react';
import './css/Navbar.css';

const Navbar = () => {

	useEffect(() => {
		applyActiveClass();
	})

	const applyActiveClass = () => {
		const navLinks = document.getElementsByClassName('navlinks');
		console.log(navLinks);
		Array.from(navLinks).forEach((item) => {
			console.log(item.className);
			if (item.pathname === window.location.pathname) item.className = ('navlinks active')
		})
	}

	return (
		<div id="navbarWrapper">
			<a className="navlinks" href="/">HOME</a>
			<a className="navlinks" href="/about">ABOUT</a>
			<a className="navlinks" href="/projects">PROJECTS</a>
			<a className="navlinks" href="/contact">CONTACT</a>
		</div>
	)
}

export default Navbar;