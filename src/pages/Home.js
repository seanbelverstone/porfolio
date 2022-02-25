import ImageCarousel from "../components/ImageCarousel";
import { allImages } from '../assets/index';
import './css/Home.css';

const Home = () => {
	return (
		<div id="homePage">
			<ImageCarousel />
			<div id="descriptionWrapper">
				<div id="introWrapper">
					<h1 className="title">I'm Sean Belverstone</h1>
					<h2 className="subtitle">Full Stack Web Developer.</h2>
					<p>Lover of climbing, dogs, cooking, and gaming.</p>
					<p>Let's collaborate!</p>
				</div>
				<img id="meAndPoppy" src={allImages.meAndPoppy} alt="Sean and his dog, Poppy" />
			</div>


		</div>

	)
}

export default Home;