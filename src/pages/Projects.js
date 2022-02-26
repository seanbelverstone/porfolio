import HTMLFlipBook from 'react-pageflip';
import { allImages } from '../assets';
import PageContent from '../components/PageContent';
import './css/Projects.css';

const Projects = () => {
	return (
		<div id="projectsPage">
			<div id="bookWrapper">
				<HTMLFlipBook width={300} height={500}>
					{/* Page 1 */}
					<PageContent title="Antre" src={allImages.antre}/>
					<PageContent text="Hello, this is test text"/>

					{/* Page 2 */}
					<PageContent title="Thanksgiving Biscuits" src={allImages.biscuits}/>
					<PageContent text="Hello, this more text for testing"/>

					{/* Page 3 */}
					<PageContent title="Lord of the Rings Quiz" src={allImages.lotr}/>
					<PageContent text="Hello, this more text for testing"/>

					{/* Page 4 */}
					<PageContent title="Reel Time" src={allImages.reelTime}/>
					<PageContent text="Hello, this more text for testing"/>
				</HTMLFlipBook>
			</div>

		</div>

	)
}

export default Projects;