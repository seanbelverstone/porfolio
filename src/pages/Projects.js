import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import PageContent from '../components/PageContent';
import { projectList } from '../utils';
import './css/Projects.css';

const Projects = () => {
	const { antre, biscuits, lotr, reelTime } = projectList;
	const book = useRef();

	return (
		<div id="projectsPage">
			<HTMLFlipBook
				width={500}
				height={600}
				size="stretch"
				minWidth={300}
				maxWidth={600}
				minHeight={400}
				maxHeight={1000}
				maxShadowOpacity={0.5}
				// showCover={true}
				mobileScrollSupport={true}
				// onFlip={this.onPage}
				// onChangeOrientation={this.onChangeOrientation}
				// onChangeState={this.onChangeState}
				className="demo-book"
				ref={book}>
				<PageContent coverType="preCover" />
				<PageContent coverType='cover' title="Projects" cover />
				{/* Page 1 */}
				<PageContent title={antre.title} src={antre.src} number={1} />
				<PageContent text={antre.description} live={antre.liveLink} git={antre.githubLink} number={2} />

				{/* Page 2 */}
				<PageContent title={biscuits.title} src={biscuits.src} number={3} />
				<PageContent text={biscuits.description} live={biscuits.liveLink} git={biscuits.githubLink} number={4} />

				{/* Page 3 */}
				<PageContent title={lotr.title} src={lotr.src} number={5} />
				<PageContent text={lotr.description} live={lotr.liveLink} git={lotr.githubLink} number={6} />

				{/* Page 4 */}
				<PageContent title={reelTime.title} src={reelTime.src} number={7} />
				<PageContent text={reelTime.description} live={reelTime.liveLink} git={reelTime.githubLink} number={8} />

				<PageContent coverType="backCover" title="Thank you!" cover />
				<PageContent coverType="postCover" />
			</HTMLFlipBook>
			<div id="buttons">
				<button onClick={() => book.current.pageFlip().flipPrev()}>Prev page</button>
				<button onClick={() => book.current.pageFlip().flipNext()}>Next page</button>
			</div>

		</div>

	)
}

export default Projects;