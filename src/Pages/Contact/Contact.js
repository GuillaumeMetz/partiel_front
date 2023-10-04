import React from 'react';
import { useForm } from 'react-hook-form';
import EmailForm from '../../Components/EmailForm/EmailForm';
import './Contact.css';

const Contact = () => {

	return (<>
			<div className={"center-form"}>
				<p>Pour pouvoir me contacter, veuiller remplir ce formulaire</p>
				<EmailForm/>
			</div>
		</>
	);
};

export default Contact;
