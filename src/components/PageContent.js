import { forwardRef } from 'react';
import '../pages/css/Projects.css';

const PageContent = forwardRef((props, ref) => {
	return (
		<div className="demoPage" ref={ref}>
			{props.title && (
				<h3>{props.title}</h3>
			)}
			{props.src ? (
				<img className="projectImage" src={props.src} alt={props.title} />
			) : (
				<p>{props.text}</p>
			)}
		</div>
	)
});

export default PageContent;