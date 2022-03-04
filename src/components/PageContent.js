import { forwardRef } from 'react';
import '../pages/css/Projects.css';

const PageContent = forwardRef((props, ref) => {
	return (
		<div
			className={`${props?.coverType ? props.coverType + ' ' : ''}demoPage`}
			ref={ref}
			data-density={props.cover && 'hard'}>
			{props.title && (
				<h3>{props.title}</h3>
			)}
			{props.src ? (
				<img className="projectImage" src={props.src} alt={props.title} />
			) : (
				<p>{props.text}</p>
			)}
			<div className="footer"><p>{props.number}</p></div>
		</div>
	)
});

export default PageContent;