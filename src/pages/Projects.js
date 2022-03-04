import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import PageContent from '../components/PageContent';
import { projectList } from '../utils';
import './css/Projects.css';

const Projects = () => {
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
				<PageContent coverType='cover' title="Projects" cover/>
				{/* Page 1 */}
				<PageContent title={projectList.antre.title} src={projectList.antre.src} number={1} />
				<PageContent text={projectList.antre.description} number={2} />

				{/* Page 2 */}
				<PageContent title={projectList.biscuits.title} src={projectList.biscuits.src} number={3} />
				<PageContent text={projectList.biscuits.description} number={4} />

				{/* Page 3 */}
				<PageContent title={projectList.lotr.title} src={projectList.lotr.src} number={5} />
				<PageContent text={projectList.lotr.description} number={6} />

				{/* Page 4 */}
				<PageContent title={projectList.reelTime.title} src={projectList.reelTime.src} number={7} />
				<PageContent text={projectList.reelTime.description} number={8} />

				<PageContent title="Thank you!" cover/>
				<PageContent coverType="postCover" />
			</HTMLFlipBook>
			<button onClick={() => book.current.pageFlip().flipPrev()}>Prev page</button>
			<button onClick={() => book.current.pageFlip().flipNext()}>Next page</button>
		</div>

	)
}

export default Projects;