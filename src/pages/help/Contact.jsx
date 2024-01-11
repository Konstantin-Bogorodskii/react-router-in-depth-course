import React from 'react';

import styles from '../../styles/Contact.module.css';

function Contact() {
	return (
		<>
			<h3>Contact us</h3>
			<form className={styles.form}>
				<label className={styles.label} htmlFor="email">
					Your email address:
				</label>
				<input
					className={styles.input}
					id="email"
					type="email"
					name="email"
					placeholder="Email address"
					required
				/>

				<label className={styles.label} htmlFor="message">
					Your message:
				</label>
				<textarea
					className={styles.textarea}
					id="message"
					name="message"
					placeholder="Message"
					required
				/>

				<button>Submit</button>
			</form>
		</>
	);
}

export default Contact;
