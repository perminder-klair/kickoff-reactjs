/* global $:true */

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { Button, TextField, TextAreaField } from '../elements';

const validate = () => {
	const errors = {};
	$('#contactForm').form({
		fields: {
			name: ['empty'],
			email: ['empty'],
			message: ['empty'],
		},
	});
	if (!$('#contactForm').form('validate form')) {
		errors.name = 'Name is required';
	}
	return errors;
};

const ContactForm = ({ handleSubmit }) => {
	$('#contactForm').submit(() => false);

	return (
		<form className="ui form" id="contactForm" onSubmit={handleSubmit}>
			<TextField name="name" label="Full name" />
			<TextField type="email" name="email" label="Email" />
			<TextAreaField name="message" label="Fill in specific message" />
			<br />
			<Button type="secondary">Submit</Button>
			<div className="ui error message" />
		</form>
	);
};

ContactForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
	form: 'contactForm',
	validate,
})(ContactForm);
