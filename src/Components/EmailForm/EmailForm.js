import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css';

function EmailForm() {
	const [formData, setFormData] = useState({
		from_name: '',
		to_name: '',
		message: '',
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.send(
			'service_rl6km0j',
			'template_ol20gqn',
			formData,
			'YVDpjb_vhJ3Qs-eUW'
		)
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="from_name" onChange={handleInputChange}
				   placeholder="Your Name" required />
			<input type="text" name="to_name" onChange={handleInputChange}
				   placeholder="Recipient's Name" required />
			<textarea name="message" onChange={handleInputChange} placeholder="Your
Message" required />
			<button type="submit">Send Email</button>
		</form>
	);
}
export default EmailForm;