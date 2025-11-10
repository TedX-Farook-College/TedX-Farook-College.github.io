'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GetStartedButton } from '@/components/ui/GetStartedButton';
import { Icon } from '@iconify/react';

export function BookingForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		food: 'veg',
		ticket: 'standard',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	React.useEffect(() => {
		if (submitStatus) {
			const timer = setTimeout(() => setSubmitStatus(null), 5000); 
			return () => clearTimeout(timer); 
		}
	}, [submitStatus]);

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
		if (!formData.phone.trim()) {
			tempErrors.phone = 'Mobile number is required.';
		} else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
			tempErrors.phone = 'Enter a valid mobile number.';
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

		if (!validate()) return;

		setIsSubmitting(true);

		try {
			const fd = new FormData();

			// ✅ Normalize phone number to always include +91
			let phone = formData.phone.trim().replace(/\s/g, '');
			if (!phone.startsWith('+91')) {
				// Remove leading 0 if present
				if (phone.startsWith('0')) phone = phone.slice(1);

				phone = '+91' + phone;
			}

			fd.append('name', formData.name);
			fd.append('phone', phone); 
			fd.append('email', formData.email);
			fd.append('food', formData.food === 'veg' ? 'Veg' : 'Non-Veg');
			fd.append(
				'__tickets[]',
				JSON.stringify({
					ticket_id: '19a74eca-cbeb-4327-a7b6-25c3cc0ec330',
					count: 1,
					my_ticket: true,
				})
			);

			const response = await fetch(
				'https://api.makemypass.com/makemypass/public-form/ea1b4199-c0b4-47c7-91f4-93ac32949251/submit/',
				{
					method: 'POST',
					body: fd,
				}
			);

		
			let result;
			try {
				result = await response.json();
			} catch {
				result = null; 
			}

			if (!response.ok) {
				let message = 'Something went wrong. Please try again later.';

				if (result?.message) {
					if (typeof result.message === 'object' && !Array.isArray(result.message)) {
						message = Object.values(result.message)
							.flat() 
							.join('\n');
					} else if (typeof result.message === 'string') {
						message = result.message;
					}
				}

				if (response.status === 404)
					message =
						result?.message ||
						'The booking service could not be reached. Please try again later.';
				if (response.status === 500)
					message =
						result?.message ||
						'Server error — please try again in a few minutes.';

				throw new Error(message);
			}

			if (result?.hasError) {
				let errorMessage = 'We could not process your booking. Please try again.';

				if (result.message) {
					if (typeof result.message === 'object' && !Array.isArray(result.message)) {
						errorMessage = Object.values(result.message)
							.flat()
							.join('\n');
					} else if (typeof result.message === 'string') {
						errorMessage = result.message;
					}
				}

				throw new Error(errorMessage);
			}

			if (result?.hasError) {
				throw new Error(result?.message || 'We could not process your booking. Please try again.');
			}

			console.log('Success:', result);
			setSubmitStatus({
				type: 'success',
				message: 'Demo Booking successful! Check your email for details.',
			});
			setFormData({ name: '', email: '', phone: '', food: 'veg', ticket: 'standard' });

		} catch (error) {
			console.error('Error:', error);
			setSubmitStatus({
				type: 'error',
				message: error.message || 'Unexpected error occurred. Please try again.',
			});
		} finally {
			setIsSubmitting(false);
		}

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
						htmlFor="phone"
						className="text-sm text-white/70 font-medium tracking-wide"
					>
						Mobile Number
					</label>
					<input
						type="tel"
						name="phone"
						id="phone"
						placeholder="e.g., +919876543210"
						value={formData.phone}
						onChange={handleChange}
						disabled={isSubmitting}
						className={cn(
							inputBaseClass,
							errors.phone && 'border-red-500 ring-red-500'
						)}
					/>
					{errors.phone && (
						<p className="text-xs text-red-400">{errors.phone}</p>
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

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="flex flex-col gap-2"
				>
					<label
						htmlFor="ticket-type"
						className="text-sm text-white/70 font-medium tracking-wide"
					>
						Ticket Type
					</label>
					<select
						name="ticket"
						id="ticket"
						value={formData.ticket}
						onChange={handleChange}
						disabled={isSubmitting}
						className={cn(inputBaseClass, 'bg-black/40')}
					>
						<option value="standard" className="bg-neutral-800">
							Standard
						</option>
						<option value="student" className="bg-neutral-800">
							Student
						</option>
						<option value="free" className="bg-neutral-800">
							Free
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

				{submitStatus && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className={cn(
							"flex items-start gap-2 text-sm p-3 border rounded-lg",
							submitStatus.type === "success"
								? "text-green-400 bg-green-900/30 border-green-700"
								: "text-red-400 bg-red-900/30 border-red-700"
						)}
					>
						<Icon
							icon={
								submitStatus.type === "success"
									? "lucide:check-circle"
									: "lucide:x-circle"
							}
							className="size-5 flex-shrink-0 mt-[2px]"
						/>
						<span className="whitespace-pre-line leading-relaxed">
							{typeof submitStatus.message === 'object'
								? JSON.stringify(submitStatus.message)
								: submitStatus.message}
						</span>
					</motion.div>
				)}


			</form>
		</motion.div>
	);
}
