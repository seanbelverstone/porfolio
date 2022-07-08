import { useRef } from 'react';
import useIsInViewport from './useIsInViewport';

const SlideInDiv = ({ getStyles, children }) => {
	const elementRef = useRef();
	const isInViewport = useIsInViewport(elementRef);

	return (
		<div style={getStyles(isInViewport)} ref={elementRef}>
			{children}
		</div>
	);
}

export default SlideInDiv;