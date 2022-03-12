import './css/Button.css';

const Button = (props) => {
	const { text, callback, id } = props;

	return (
		<button id={id} onClick={callback}>
			{text}
		</button>
	)
}

export default Button;