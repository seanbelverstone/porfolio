import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './css/ScrollToTop.css';
import Button from './Button';

const ScrollToTop = (props) => {
	const { scrollHeight } = props;

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	console.log(scrollHeight);
	return (
		<Button
		id="scrollArrow"
		callback={goToTop}
		className={scrollHeight > 150
		? 'show' : 'hide'}
		icon={<ArrowUpwardIcon />}
		text="back to top"
		/>
	)

}

export default ScrollToTop;