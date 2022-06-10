import { forwardRef, useState } from 'react';
import './css/PageContent.css';

const PageContent = forwardRef((props, ref) => {
	const {
		coverType,
		cover,
		title,
		mainTitle,
		subtitle,
		src,
		altImage,
		text,
		live,
		git,
		number
	} = props;
	const [currentImage, setCurrentImage] = useState(src);

	const mouseEnter = () => setCurrentImage(altImage);
	const mouseLeave = () => setCurrentImage(src);

	const renderText = () => {
		return text.split('\n').map(item => (
			<p>{item}</p>
		))
	}
	
	return (
		<div
			className={`${coverType ? coverType + ' ' : ''}demoPage`}
			ref={ref}
			data-density={cover && 'hard'}>
			{(title || mainTitle) && (
				<h1 className={title ? 'pageTitle' : 'mainTitle'}>{title || mainTitle}</h1>
			)}
			{subtitle && (
				<h3 className="subtitle">{subtitle}</h3>
			)}
			{src && (
				<>
				<img className="projectImage" src={currentImage} alt={title} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}/>
				<i style={{ marginTop: '0.5em' }}>Hover over the image for an alternate view</i>
				</>
			)}
			{text && (
				<div className="projectText glass">
					{renderText()}
					{(live && git) && (
						<div className="projectLinks">
							<a href={live} target="_blank" rel="noreferrer">Live Demo</a>
							<a href={git} target="_blank" rel="noreferrer">GitHub Repo</a>
						</div>

					)}

				</div>
			)}
			{number && (<div className="footer"><span>{number}</span></div>)}
		</div>
	)
});

export default PageContent;