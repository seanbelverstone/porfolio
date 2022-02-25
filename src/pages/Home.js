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
				<div id="socialsWrapper">
					<a href="https://github.com/seanbelverstone" target="_blank" rel="noreferrer">
						<img className="socialLogo" id="github" src={allImages.github} alt="Github Logo" />
					</a>
					<a href="https://www.linkedin.com/in/sean-belverstone" target="_blank" rel="noreferrer">
						<img className="socialLogo" id="linkedin" src={allImages.linkedin} alt="LinkedIn Logo" />
					</a>
					<a href="https://www.instagram.com/seanbelverstone/" target="_blank" rel="noreferrer">
						<img className="socialLogo" id="instagram" src={allImages.instagram} alt="Instagram Logo" />
					</a>
				</div>
			</div>
		</div>

	)
}

export default Home;