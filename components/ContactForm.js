import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		subject: '',
		message: ''
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// In a real implementation, this would send the data to a server or email service
		// For now, we'll just simulate a successful submission
		setSubmitted(true);

		// Reset form after 5 seconds if needed
		setTimeout(() => {
			setSubmitted(false);
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				subject: '',
				message: ''
			});
		}, 5000);
	};

	return (
		<div className={styles.formContainer}>
			{submitted ? (
				<div className={styles.thankYou}>
					<p>Thank you! I will get back to you as soon as possible.</p>
				</div>
			) : (
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.nameFields}>
						<div className={styles.inputGroup}>
							<label htmlFor="firstName">First Name *</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								required
							/>
						</div>
						<div className={styles.inputGroup}>
							<label htmlFor="lastName">Last Name *</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								required
							/>
						</div>
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="email">Email Address *</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="subject">Subject *</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							required
						/>
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="message">Message *</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							rows={5}
						/>
					</div>

					<button type="submit" className={styles.submitButton}>
						Send
					</button>
				</form>
			)}
		</div>
	);
} 