import './css/Button.css';

const Button = (props) => {
	const { text, callback, id, href, target, rel } = props;

	return (
		<button
			id={id}
			onClick={callback}
			href={href}
			target={target}
			rel={rel}
			>
			{text}
		</button>
	)
}

export default Button;