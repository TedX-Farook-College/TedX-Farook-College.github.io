'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GetStartedButton } from '@/components/ui/GetStartedButton';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

export function BookingForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		mobile: '',
		food: 'veg',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const validate = () => {
		let tempErrors = {};
		if (!formData.name.trim()) {
			tempErrors.name = 'Name is required.';
		}
		if (!formData.email.trim()) {
			tempErrors.email = 'Email is required.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			tempErrors.email = 'Email is invalid.';
		}
		if (!formData.mobile.trim()) {
			tempErrors.mobile = 'Mobile number is required.';
		} else if (!/^\+?[1-9]\d{1,14}$/.test(formData.mobile.replace(/\s/g, ''))) {
			tempErrors.mobile = 'Mobile number is invalid. (e.g., +919876543210)';
		}
		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: null }));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitStatus(null);

		if (!validate()) {
			return;
		}

		setIsSubmitting(true);

		// --- API Submission Logic ---
		// This is where you would make the API call to your hook (e.g., /api/book).
		// The following code is commented out as requested.

		/*
		try {
			const response = await fetch('/api/book', { // Your API hook URL
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const result = await response.json();
			console.log('Success:', result);
            // Assuming result.url is the payment link or ticket URL
            // window.location.href = result.url; 
			setSubmitStatus('success');
            setFormData({ name: '', email: '', mobile: '', food: 'veg' });

		} catch (error) {
			console.error('Error:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
        */

		// --- Dummy Submission Logic (as requested) ---
		console.log('Submitting form data (dummy):', formData);
		await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

		// Simulate a successful response
		const dummyResponse = {
			success: true,
			message: 'Booking successful!',
			ticketId: `TEDX${Math.floor(Math.random() * 90000) + 10000}`,
			// In a real scenario, you might get a checkout URL:
			// url: 'https://dummy-payment-gateway.com/checkout/12345'
		};
		console.log('Dummy response:', dummyResponse);
		setSubmitStatus('success');
		setFormData({ name: '', email: '', mobile: '', food: 'veg' });

		// Simulate an error response (uncomment to test error)
		// console.log('Dummy error');
		// setSubmitStatus('error');

		setIsSubmitting(false);
	};

	const inputBaseClass =
		'p-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 transition w-full';

	return (
		<motion.div
			initial={{ opacity: 0, x: -60 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.7 }}
			className="bg-neutral-900/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col justify-center h-full"
		>
			<form
				onSubmit={handleSubmit}
				autoComplete="off"
				className="flex flex-col gap-5"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="flex flex-col gap-2"
				>
					<label
						htmlFor="name"
						className="text-sm text-white/70 font-medium tracking-wide"
					>
						Full Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name"
						value={formData.name}
						onChange={handleChange}
						disabled={isSubmitting}
						className={cn(
							inputBaseClass,
							errors.name && 'border-red-500 ring-red-500'
						)}
					/>
					{errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="flex flex-col gap-2"
				>
					<label
						htmlFor="email"
						className="text-sm text-white/70 font-medium tracking-wide"
					>
						Email Address
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email"
						value={formData.email}
						onChange={handleChange}
						disabled={isSubmitting}
						className={cn(
							inputBaseClass,
							errors.email && 'border-red-500 ring-red-500'
						)}
					/>
					{errors.email && (
						<p className="text-xs text-red-400">{errors.email}</p>
					)}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="flex flex-col gap-2"
				>
					<label
						htmlFor="mobile"
						className="text-sm text-white/70 font-medium tracking-wide"
					>
						Mobile Number
					</label>
					<input
						type="tel"
						name="mobile"
						id="mobile"
						placeholder="e.g., +919876543210"
						value={formData.mobile}
						onChange={handleChange}
						disabled={isSubmitting}
						className={cn(
							inputBaseClass,
							errors.mobile && 'border-red-500 ring-red-500'
						)}
					/>
					{errors.mobile && (
						<p className="text-xs text-red-400">{errors.mobile}</p>
					)}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="flex flex-col gap-2"
				>
					<label
						htmlFor="food"
						className="text-sm text-white/70 font-medium tracking-wide"
					>
						Food Preference
					</label>
					<select
						name="food"
						id="food"
						value={formData.food}
						onChange={handleChange}
						disabled={isSubmitting}
						className={cn(inputBaseClass, 'bg-black/40')}
					>
						<option value="veg" className="bg-neutral-800">
							Vegetarian
						</option>
						<option value="non-veg" className="bg-neutral-800">
							Non-Vegetarian
						</option>
					</select>
				</motion.div>

				<div className="mt-4 w-full">
					<GetStartedButton
						text={isSubmitting ? 'Processing...' : 'Book Your Ticket'}
						type="submit"
						disabled={isSubmitting}
					/>
				</div>

				{submitStatus === 'success' && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="flex items-center gap-2 text-sm text-green-400 p-3 bg-green-900/30 border border-green-700 rounded-lg"
					>
						<Icon icon="lucide:check-circle" className="size-5" />
						<span>Booking successful! Check your email for details.</span>
					</motion.div>
				)}
				{submitStatus === 'error' && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="flex items-center gap-2 text-sm text-red-400 p-3 bg-red-900/30 border border-red-700 rounded-lg"
					>
						<Icon icon="lucide:x-circle" className="size-5" />
						<span>Something went wrong. Please try again.</span>
					</motion.div>
				)}
			</form>
		</motion.div>
	);
}
