import './css/Button.css';

const Button = (props) => {
	const { text, callback, id, href, target, rel, type, disabled, style } = props;

	return (
		<button
			id={id}
			onClick={callback}
			href={href}
			target={target}
			rel={rel}
			type={type}
			style={{
				...style,
				...disabled ? {
					border: 'solid grey 2px',
					color: 'grey',
					opacity: '0.4',
					cursor: 'not-allowed'
				} : {
					border: 'solid var(--secondary) 2px',
					cursor: 'pointer'
				}
			}}
			>
			{text}
		</button>
	)
}

export default Button;