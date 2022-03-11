import { forwardRef } from 'react';
import './css/PageContent.css';

const PageContent = forwardRef((props, ref) => {
	console.log(props.mainTitle);
	return (
		<div
			className={`${props?.coverType ? props.coverType + ' ' : ''}demoPage`}
			ref={ref}
			data-density={props.cover && 'hard'}>
			{(props?.title || props?.mainTitle) && (
				<h1 className={props.title ? 'pageTitle' : 'mainTitle'}>{props.title || props.mainTitle}</h1>
			)}
			{props?.subtitle && (
				<h3 className="subtitle">{props.subtitle}</h3>
			)}
			{props.src && (
				<img className="projectImage" src={props.src} alt={props.title} />
			)}
			{props.text && (
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