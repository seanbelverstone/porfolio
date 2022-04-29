import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './css/Contact.css';
import Button from '../components/Button';
import { isEmpty } from '../utils';

const Contact = () => {

	// State for username section
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [nameHelperText, setNameHelperText] = useState('');

	// Email state handlers
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [emailHelperText, setEmailHelperText] = useState('');

	// Phone state handlers
	const [phone, setPhone] = useState('');
	const [phoneError, setphoneError] = useState(false);
	const [phoneHelperText, setphoneHelperText] = useState('');

	const [message, setMessage] = useState('');


	const validateEmail = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	}

	return (
		<div id="contactPage">
			<form id="contactForm" onSubmit={handleSubmit}>
				<TextField className="input" id="name" label="Name" variant="outlined" onChange={event => setName(event.target.value)}/>
				<TextField className="input" id="email" label="Email" variant="outlined" onChange={event => setEmail(event.target.value)} />
				<TextField className="input" id="phone" label="Phone" variant="outlined" onChange={event => setPhone(event.target.value)} />
				<TextField
					className="input"
					id="message"
					label="Message"
					placeholder="Placeholder"
					variant="outlined"
					multiline
					onChange={event => setMessage(event.target.value)}
				/>
				<Button
					text="Submit"
					type="submit"
					id="submitButton"
					disabled={isEmpty(name) ||
						isEmpty(email) ||
						isEmpty(phone) ||
						isEmpty(message)}
					/>
			</form>

		</div>

	)
}

export default Contact;