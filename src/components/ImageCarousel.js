import { Carousel } from "react-responsive-carousel";
import images from '../assets/index';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/ImageCarousel.css';

const ImageCarousel = () => {
	return (
		<div id="carouselWrapper">
			<Carousel
				infiniteLoop
				autoPlay
				showArrows={false}
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				animationHandler="fade"
				interval={5000}
			>
			{images.map((image) => (
				<div key={image.alt}>
					<img src={image.src} alt={image.alt} />
					<p className="carouselText">{image.alt}</p>
				</div>
			))}
			</Carousel>
		</div>
	)

}

export default ImageCarousel;