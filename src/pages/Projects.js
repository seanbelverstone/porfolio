import { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Button from '../components/Button';
import PageContent from '../components/PageContent';
import { projectList } from '../utils';
import './css/Projects.css';

const Projects = () => {
	const { antre, biscuits, lotr, reelTime } = projectList;
	const book = useRef();
	const innerWidth = window.innerWidth;
	const [bookView, setBookView] = useState(true);
	const [dimentions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	});

	useEffect(() => {
		window.addEventListener('resize', handleResize, false);
	}, [])

	const handleResize = () => {
		setDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		});
		if (window.innerWidth < 1150) {
			setBookView(false)
		} else {
			setBookView(true)
		}
	}

	return (
		<div id="projectsPage">
			{bookView ? (
				<>
					<HTMLFlipBook
						width={500}
						height={600}
						size="stretch"
						minWidth={300}
						maxWidth={600}
						minHeight={400}
						maxHeight={1000}
						maxShadowOpacity={0.5}
						mobileScrollSupport={true}
						className="demo-book"
						ref={book}>
						<PageContent coverType="preCover" />
						<PageContent coverType='cover' mainTitle="Projects" subtitle="Open the book to see my past work!" cover />
						{/* Page 1 */}
						<PageContent title={antre.title} src={antre.src} altImage={antre.srcTwo} number={1} />
						<PageContent text={antre.description} live={antre.liveLink} git={antre.githubLink} number={2} />

						{/* Page 2 */}
						<PageContent title={biscuits.title} src={biscuits.src} altImage={biscuits.srcTwo} number={3} />
						<PageContent text={biscuits.description} live={biscuits.liveLink} git={biscuits.githubLink} number={4} />

						{/* Page 3 */}
						<PageContent title={reelTime.title} src={reelTime.src} altImage={reelTime.srcTwo} number={5} />
						<PageContent text={reelTime.description} live={reelTime.liveLink} git={reelTime.githubLink} number={6} />

						{/* Page 4 */}
						<PageContent title={lotr.title} src={lotr.src} altImage={lotr.srcTwo} number={7} />
						<PageContent text={lotr.description} live={lotr.liveLink} git={lotr.githubLink} number={8} />

						<PageContent coverType="backCover" mainTitle="Thank you!" cover />
						<PageContent coverType="postCover" />
					</HTMLFlipBook><div id="buttons">
						<Button text="&lt;&lt; Prev page" callback={() => book.current.pageFlip().flipPrev()} />
						<Button text="Next page &gt;&gt;" callback={() => book.current.pageFlip().flipNext()} />
					</div>
				</>
			) : (
				<div>Card view y'all</div>
			)}


		</div>

	)
}

export default Projects;