import React, { useEffect, useState } from 'react';
/* TODO: Reenable once recaptcha is fixed */
// import Recaptcha from "react-google-invisible-recaptcha";
import TextField from '@mui/material/TextField';
import emailjs from "emailjs-com"
import './css/Contact.css';
import Button from '../components/Button';
import { internationalPhoneValidation, isEmpty } from '../utils';

const Contact = () => {

	// State for username section
	const [name, setName] = useState('');
	// Email state handlers
	const [email, setEmail] = useState('');
	const [emailValid, setEmailValid] = useState(true);
	// Phone state handlers
	const [phone, setPhone] = useState('');
	const [phoneValid, setPhoneValid] = useState(true);
	const [message, setMessage] = useState('');
	const refRecaptcha = React.createRef();

	useEffect(() => {
		!isEmpty(email) && validateEmail(email);
	}, [email]);

	useEffect(() => {
		validatePhone(phone)
	}, [phone]);

	const validateEmail = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		setEmailValid(re.test(email));
	};

	const validatePhone = (phone) => {
		// phone is not required
		setPhoneValid(isEmpty(phone) || internationalPhoneValidation(phone));
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (emailValid && phoneValid) {
			/* TODO: Reenable once recaptcha is fixed */
			// console.log(refRecaptcha.current);
			// refRecaptcha.current.execute();
			sendEmail();
		}
	}

	const sendEmail = () => {
		const data = {
			name: name,
			email: email,
			phone: phone,
			message: message
		};
		console.log(data);
		// Use emailjs to send an email
		emailjs.send("gmail", "portfolio_template", data, process.env.REACT_APP_EMAILJS_USER_ID)
			.then(response => {
				console.log(`Success! Response status: ${response.status} & text: ${response.text}`);
				// clear form
				setName('');
				setEmail('');
				setPhone('')
				setMessage('');
			}, (err => {
				console.log("Whoops, that failed.", err.text)
			}));
	}

	return (
		<div id="contactPage">
			<form id="contactForm" onSubmit={handleSubmit}>
				<TextField
					required
					className="input"
					id="name" label="Name"
					variant="outlined"
					value={name}
					onChange={event => setName(event.target.value)}
				/>
				<TextField
					required
					className="input"
					id="email"
					label="Email"
					variant="outlined"
					error={!emailValid}
					{...!emailValid && { helperText: "Email must be in the correct format" }}
					value={email}
					onChange={event => setEmail(event.target.value)}
				/>
				<TextField
					className="input"
					id="phone"
					label="Phone"
					variant="outlined"
					error={!phoneValid}
					{...!phoneValid && { helperText: 'Incorrect format' }}
					placeholder="eg. +15555555555"
					value={phone}
					onChange={event => setPhone(event.target.value)}
				/>
				<TextField
					className="input"
					id="message"
					label="Message"
					placeholder="Placeholder"
					variant="outlined"
					multiline
					required
					value={message}
					onChange={event => setMessage(event.target.value)}
				/>
				<Button
					text="Submit"
					type="submit"
					id="submitButton"
					disabled={isEmpty(name) ||
						isEmpty(email) ||
						isEmpty(message)}
				/>
				{/* TODO: Reenable once recaptcha is fixed */}
				{/* <Recaptcha
					ref={refRecaptcha}
					sitekey={process.env.REACT_APP_RECAPTCHA_SITE_ID}
					onResolved={sendEmail}
					badge="bottomleft"
				/> */}
			</form>
		</div>

	)
}

export default Contact;