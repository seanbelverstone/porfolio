import { forwardRef } from 'react';
import '../pages/css/Projects.css';

const PageContent = forwardRef((props, ref) => {
	return (
		<div
			className={`${props?.coverType ? props.coverType + ' ' : ''}demoPage`}
			ref={ref}
			data-density={props.cover && 'hard'}>
			{props.title && (
				<h1>{props.title}</h1>
			)}
			{props.src ? (
				<img className="projectImage" src={props.src} alt={props.title} />
			) : (
				<div className="projectText">
					<p>{props.text}</p>
					{(props.live && props.git) && (
						<div className="projectLinks">
							<a href={props.live} target="_blank" rel="noreferrer">Live Demo</a>
							<a href={props.git} target="_blank" rel="noreferrer">GitHub Repo</a>
						</div>

					)}

				</div>
			)}
			{props.number && (<div className="footer"><span>{props.number}</span></div>)}
		</div>
	)
});

export default PageContent;