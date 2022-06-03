import React, {useEffect, useState} from 'react';
import './css/CircleGradient.css'

export const CircleGradient = () => {
	const [pageName, setPageName] = useState('');
	useEffect(() => {
		setPageName(document.querySelector('#projectsPage')?.id)
	}, [])
	console.log(pageName);
	return (
	<div id="circleGradient" style={{ ...(window.innerWidth < 1152 || pageName === 'projectsPage') && { display: 'none' } }}/>
)};