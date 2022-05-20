import { allImages } from '../assets/index';
import './css/Loader.css';

const Loader = (props) => {
	const { loading } = props;
	return (
		<div id="loadingWrapper" style={{
			...loading ? {
				display: 'flex'
			} : {
				display: 'none'
			}
		}}>
			<div>
				<img
					id="poppyLoader"
					src={allImages.poppyLoader}
					alt="Poppy's loading head"
				/>
				<p id="loadingText">Loading</p>
			</div>
		</div>
	)
}

export default Loader;