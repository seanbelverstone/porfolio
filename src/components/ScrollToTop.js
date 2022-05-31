import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './css/ScrollToTop.css';

const ScrollToTop = (props) => {
	const { scrollHeight } = props;

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	return (
		<div
			id="scrollArrow"
			onClick={goToTop}
			className={window.innerWidth < 1152 && scrollHeight > 150
			? 'show' : 'hide'}>
			<ArrowUpwardIcon />
		</div>
	)

}

export default ScrollToTop;