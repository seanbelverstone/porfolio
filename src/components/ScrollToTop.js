import React, { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './css/ScrollToTop.css';
import Button from './Button';
import { isEmpty } from '../utils';

const ScrollToTop = (props) => {
	const [scrollHeight, setScrollHeight] = useState('')
	document.addEventListener('scroll', () => {
		setScrollHeight(window.scrollY);
	});

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	return (
		<Button
			id="scrollArrow"
			callback={goToTop}
			className={!isEmpty(scrollHeight) && scrollHeight >= 150
				? 'show' : 'hide'}
			icon={<ArrowUpwardIcon />}
			text="back to top"
		/>
	)

}

export default ScrollToTop;