'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { GetStartedButton } from '@/components/ui/GetStartedButton';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

const API_BASE_URL = 'https://api.makemypass.com';
const EVENT_SLUG = 'tedx-fc-s3';
const EVENT_ID = 'ea1b4199-c0b4-47c7-91f4-93ac32949251';

const MAX_FILE_SIZE_KB = 5000;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_KB * 1024;
const MAX_FILE_SIZE_MB = MAX_FILE_SIZE_KB / 1024;
const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const loadScript = (src) => {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => resolve(true);
		script.onerror = () => reject(new Error(`Failed to load script ${src}`));
		document.body.appendChild(script);
	});
};

export function BookingForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		food: 'Veg',
		ticketType: '',
		are_you_a_student_: '',
		student_id_card: null,
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const [submitMessage, setSubmitMessage] = useState('');

	const [isLoading, setIsLoading] = useState(true);
	const [eventInfo, setEventInfo] = useState(null);
	const [ticketOptions, setTicketOptions] = useState([]);

	const fileInputRef = useRef(null);
	const router = useRouter();

	const handleStudentChange = (value, skipState = false) => {
		if (!skipState) {
			setFormData((prev) => ({
				...prev,
				are_you_a_student_: value,
			}));
		}

		if (errors.are_you_a_student_) {
			setErrors((prev) => ({ ...prev, are_you_a_student_: null }));
		}

		if (value === 'No') {
			setFormData((prev) => ({ ...prev, student_id_card: null }));
			setErrors((prev) => ({ ...prev, student_id_card: null }));
			if (fileInputRef.current) {
				fileInputRef.current.value = '';
			}
		}
	};

	useEffect(() => {
		const fetchEventInfo = async () => {
			console.log('[DEBUG] fetchEventInfo: Starting...');
			try {
				setIsLoading(true);
				setErrors({});
				const response = await fetch(
					`${API_BASE_URL}/makemypass/public-form/${EVENT_SLUG}/info/`
				);
				if (!response.ok) {
					throw new Error('Failed to load event details.');
				}
				const data = await response.json();

				if (data.hasError || !data.response) {
					throw new Error(data.message || 'Could not parse event data.');
				}

				const eventData = data.response;

				const apiTickets = eventData.tickets.map((ticket) => ({
					id: ticket.id,
					name: ticket.title.toUpperCase().trim(),
					price: `₹${parseFloat(ticket.price).toFixed(2)}`,
					rawPrice: parseFloat(ticket.price),
				}));

				console.log('[DEBUG] fetchEventInfo: Success', {
					eventData,
					apiTickets,
				});

				setTicketOptions(apiTickets);
				setEventInfo(eventData);

				const defaultApiTicket = eventData.tickets.find(
					(t) => t.default_selected
				);
				const defaultTicketId = defaultApiTicket
					? defaultApiTicket.id
					: apiTickets.length > 0
					? apiTickets[0].id
					: '';

				const defaultTicket = apiTickets.find((t) => t.id === defaultTicketId);
				const isStudent = defaultTicket && defaultTicket.name === 'STUDENT';
				const studentStatus = isStudent ? 'Yes' : 'No';

				console.log(
					`[DEBUG] fetchEventInfo: Default ticket is "${defaultTicket?.name}". Setting student status to: ${studentStatus}`
				);

				setFormData((prev) => ({
					...prev,
					ticketType: defaultTicketId,
					are_you_a_student_: studentStatus,
				}));
			} catch (error) {
				console.error('[DEBUG] fetchEventInfo: FAILED', error);
				setErrors({
					general: 'Could not load booking information. Please refresh.',
				});
			} finally {
				setIsLoading(false);
			}
		};

		fetchEventInfo();
	}, []);

	const validate = () => {
		console.log('[DEBUG] validate: Running...');
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
		} else if (!/^\+[1-9]\d{1,14}$/.test(formData.phone.replace(/\s/g, ''))) {
			tempErrors.phone =
				'Mobile number must include country code (e.g., +919876543210)';
		}

		if (!formData.are_you_a_student_) {
			tempErrors.are_you_a_student_ = 'Student status is not set.';
		}

		if (formData.are_you_a_student_ === 'Yes' && !formData.student_id_card) {
			tempErrors.student_id_card = 'Student ID image is required.';
		}

		setErrors(tempErrors);
		const isValid = Object.keys(tempErrors).length === 0;
		console.log('[DEBUG] validate: Result', { isValid, errors: tempErrors });
		return isValid;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: null }));
		}
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		console.log(
			'[DEBUG] handleFileChange:',
			file ? file.name : 'No file selected'
		);
		setErrors((prev) => ({ ...prev, student_id_card: null }));

		if (!file) {
			setFormData((prev) => ({ ...prev, student_id_card: null }));
			if (fileInputRef.current) fileInputRef.current.value = '';
			return;
		}

		if (!VALID_IMAGE_TYPES.includes(file.type)) {
			setErrors((prev) => ({
				...prev,
				student_id_card: 'Invalid file type. Use JPG, PNG, or WEBP.',
			}));
			setFormData((prev) => ({ ...prev, student_id_card: null }));
			if (fileInputRef.current) fileInputRef.current.value = '';
			return;
		}

		if (file.size > MAX_FILE_SIZE_BYTES) {
			setErrors((prev) => ({
				...prev,
				student_id_card: `File is too large. Max size is ${MAX_FILE_SIZE_MB}MB.`,
			}));
			setFormData((prev) => ({ ...prev, student_id_card: null }));
			if (fileInputRef.current) fileInputRef.current.value = '';
			return;
		}

		setFormData((prev) => ({ ...prev, student_id_card: file }));
	};

	const handleTicketTypeChange = (typeId) => {
		if (isSubmitting) return;

		setFormData((prev) => ({ ...prev, ticketType: typeId }));

		const selectedTicket = ticketOptions.find((t) => t.id === typeId);
		const isStudent = selectedTicket && selectedTicket.name === 'STUDENT';
		const studentStatus = isStudent ? 'Yes' : 'No';

		console.log(
			`[DEBUG] handleTicketTypeChange: Selected "${selectedTicket?.name}". Setting student status to: ${studentStatus}`
		);

		handleStudentChange(studentStatus);
	};

	const displayRazorpay = async (orderData) => {
		console.log(
			'[DEBUG] displayRazorpay: Initializing Razorpay with order data:',
			orderData
		);
		try {
			await loadScript('https://checkout.razorpay.com/v1/checkout.js');
			if (!window.Razorpay) {
				throw new Error('Razorpay script not loaded.');
			}

			const options = {
				key: orderData.client_id,
				amount: orderData.amount,
				currency: orderData.currency,
				name: eventInfo?.title || 'TEDx Farook College',
				description: 'Ticket Booking',
				order_id: orderData.order_id,

				handler: async (response) => {
					console.log(
						'[DEBUG] Razorpay Handler: Success response from Razorpay:',
						response
					);
					try {
						const paymentValidation = await fetch(
							`${API_BASE_URL}/makemypass/public-form/validate-payment/`,
							{
								method: 'POST',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify({
									order_id: response.razorpay_order_id,
									payment_id: response.razorpay_payment_id,
									payment_session_id: null,
									gateway: 'Razorpay',
								}),
							}
						);

						const ticketData = await paymentValidation.json();
						console.log(
							'[DEBUG] Razorpay Handler: Payment validation response:',
							ticketData
						);

						if (!paymentValidation.ok || ticketData.hasError) {
							throw new Error(
								ticketData.message || 'Payment validation failed.'
							);
						}

						const finalTicketData = ticketData.response;
						console.log(
							'[DEBUG] Razorpay Handler: Payment validation SUCCESS',
							finalTicketData
						);

						setSubmitStatus('success');
						setSubmitMessage(
							finalTicketData.followup_msg ||
								'Booking successful! Check your email.'
						);
						setIsSubmitting(false);

						if (finalTicketData.redirection) {
							router.push(finalTicketData.redirection);
						}

						setFormData({
							name: '',
							email: '',
							phone: '',
							food: 'Veg',
							ticketType: ticketOptions[0].id,
							are_you_a_student_: '',
							student_id_card: null,
						});
						if (fileInputRef.current) fileInputRef.current.value = '';
					} catch (error) {
						console.error(
							'[DEBUG] Razorpay Handler: Payment validation FAILED',
							error
						);
						setSubmitStatus('error');
						setSubmitMessage(
							'Payment successful, but ticket confirmation failed. Please contact support.'
						);
						setIsSubmitting(false);
					}
				},
				ondismiss: () => {
					console.warn(
						'[DEBUG] displayRazorpay: User dismissed Razorpay modal.'
					);
					setSubmitStatus('error');
					setSubmitMessage('Payment was cancelled. Please try again.');
					setIsSubmitting(false);
				},
			};

			const rzp = new window.Razorpay(options);
			rzp.open();
		} catch (error) {
			console.error(
				'[DEBUG] displayRazorpay: FAILED to load script or open modal',
				error
			);
			setSubmitStatus('error');
			setSubmitMessage(error.message || 'Payment gateway failed to load.');
			setIsSubmitting(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('[DEBUG] handleSubmit: Starting...');
		setSubmitStatus(null);
		setSubmitMessage('');

		if (!validate()) {
			console.warn('[DEBUG] handleSubmit: Local validation FAILED.');
			return;
		}

		setIsSubmitting(true);
		console.log('[DEBUG] handleSubmit: Current Form State', formData);

		try {
			console.log(
				'[DEBUG] handleSubmit: STEP 2 - validate-rsvp - Building FormData...'
			);
			const rsvpFormData = new FormData();
			rsvpFormData.append('name', formData.name);
			rsvpFormData.append('email', formData.email);
			rsvpFormData.append('phone', formData.phone);
			rsvpFormData.append('food', formData.food);
			rsvpFormData.append('are_you_a_student_', formData.are_you_a_student_);

			// --- FIX: DO NOT send the file for validation, it causes a 500 error. ---
			// The file is only sent in the final 'submit' (Step 4).
			/*
			if (formData.student_id_card) {
				rsvpFormData.append('student_id_card', formData.student_id_card);
			}
			*/

			const rsvpResponse = await fetch(
				`${API_BASE_URL}/makemypass/public-form/${EVENT_ID}/validate-rsvp/`,
				{
					method: 'POST',
					body: rsvpFormData,
				}
			);

			const rsvpData = await rsvpResponse.json();
			console.log(
				'[DEBUG] handleSubmit: STEP 2 - validate-rsvp - Server Response:',
				rsvpData
			);

			if (!rsvpResponse.ok || rsvpData.hasError) {
				const fieldErrors = {};
				if (rsvpData.message) {
					for (const [key, value] of Object.entries(rsvpData.message)) {
						fieldErrors[key] = value[0];
					}
				}
				setErrors((prev) => ({ ...prev, ...fieldErrors }));
				throw new Error('Server validation failed.');
			}

			console.log(
				'[DEBUG] handleSubmit: STEP 4 - submit - Building FormData...'
			);
			const orderFormData = new FormData();
			orderFormData.append('name', formData.name);
			orderFormData.append('email', formData.email);
			orderFormData.append('phone', formData.phone);
			orderFormData.append('food', formData.food);
			orderFormData.append('are_you_a_student_', formData.are_you_a_student_);

			// --- FIX: File IS sent here for final submission ---
			if (formData.student_id_card) {
				orderFormData.append('student_id_card[]', formData.student_id_card);
			}

			orderFormData.append(
				'__tickets[]',
				JSON.stringify({
					ticket_id: formData.ticketType,
					count: 1,
					my_ticket: true,
				})
			);

			const orderResponse = await fetch(
				`${API_BASE_URL}/makemypass/public-form/${EVENT_ID}/submit/`,
				{
					method: 'POST',
					body: orderFormData,
				}
			);

			const orderData = await orderResponse.json();
			console.log(
				'[DEBUG] handleSubmit: STEP 4 - submit - Server Response:',
				orderData
			);

			if (!orderResponse.ok || orderData.hasError) {
				throw new Error(orderData.message?.detail || 'Failed to create order.');
			}

			const orderResponseData = orderData.response;

			if (!orderResponseData.gateway) {
				console.log('[DEBUG] handleSubmit: Path taken: FREE');
				setSubmitStatus('success');
				setSubmitMessage(
					orderResponseData.followup_msg || 'Registration successful!'
				);
				setIsSubmitting(false);
				setFormData({
					name: '',
					email: '',
					phone: '',
					food: 'Veg',
					ticketType: ticketOptions[0].id,
					are_you_a_student_: '',
					student_id_card: null,
				});
				if (fileInputRef.current) fileInputRef.current.value = '';

				if (orderResponseData.redirection) {
					router.push(orderResponseData.redirection);
				}
			} else if (orderResponseData.gateway === 'Razorpay') {
				console.log('[DEBUG] handleSubmit: Path taken: PAID (Razorpay)');
				await displayRazorpay(orderResponseData);
			}
		} catch (error) {
			console.error('[DEBUG] handleSubmit: FAILED', error);
			setSubmitStatus('error');
			setSubmitMessage(
				error.message || 'Something went wrong. Please try again.'
			);
			setIsSubmitting(false);
		}
	};

	const inputBaseClass =
		'p-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 transition w-full';

	const selectedTicket = ticketOptions.find(
		(t) => t.id === formData.ticketType
	);
	let finalPrice = selectedTicket?.rawPrice || 0;

	if (isLoading) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="bg-neutral-900/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex items-center justify-center min-h-[700px]"
			>
				<Icon
					icon="lucide:loader-2"
					className="animate-spin size-10 text-red-500"
				/>
			</motion.div>
		);
	}

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
				{errors.general && (
					<div className="flex items-center gap-2 text-sm text-red-400 p-3 bg-red-900/30 border border-red-700 rounded-lg">
						<Icon icon="lucide:x-circle" className="size-5" />
						<span>{errors.general}</span>
					</div>
				)}

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
						Mobile Number (with Country Code)
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
					<label className="text-sm text-white/70 font-medium tracking-wide">
						Ticket Type
					</label>
					<div className="grid grid-cols-2 gap-2 md:gap-3">
						{ticketOptions.map((option) => (
							<button
								key={option.id}
								type="button"
								disabled={isSubmitting}
								onClick={() => handleTicketTypeChange(option.id)}
								className={cn(
									'p-3 rounded-lg border text-center transition-all duration-200',
									'flex flex-col items-center justify-center min-h-[70px]',
									formData.ticketType === option.id
										? 'border-red-500 bg-red-900/30 ring-1 ring-red-500 shadow-lg shadow-red-500/10'
										: 'border-white/20 bg-black/40 hover:bg-white/10 hover:border-white/40',
									isSubmitting
										? 'opacity-50 cursor-not-allowed'
										: 'cursor-pointer'
								)}
							>
								<span className="font-semibold text-xs md:text-sm text-white block">
									{option.name}
								</span>
								<span className="text-xs text-white/70 block">
									{option.price}
								</span>
							</button>
						))}
					</div>
				</motion.div>

				<AnimatePresence>
					{formData.are_you_a_student_ === 'Yes' && (
						<motion.div
							initial={{ opacity: 0, y: -20, height: 0 }}
							animate={{
								opacity: 1,
								y: 0,
								height: 'auto',
								marginTop: '0px',
							}}
							exit={{ opacity: 0, y: -20, height: 0, marginTop: '0px' }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className="flex flex-col gap-2 overflow-hidden"
						>
							<label
								htmlFor="student_id_card"
								className="text-sm text-white/70 font-medium tracking-wide"
							>
								Student ID Image (Max {MAX_FILE_SIZE_MB}MB)
							</label>
							<input
								type="file"
								name="student_id_card"
								id="student_id_card"
								ref={fileInputRef}
								onChange={handleFileChange}
								disabled={isSubmitting}
								accept={VALID_IMAGE_TYPES.join(',')}
								className={cn(
									'file:mr-4 file:py-2 file:px-4',
									'file:rounded-md file:border-0',
									'file:text-sm file:font-semibold',
									'file:bg-red-500/20 file:text-red-300',
									'hover:file:bg-red-500/30 transition-colors',
									'text-sm text-white/60',
									errors.student_id_card &&
										'file:bg-red-900/50 file:text-red-200'
								)}
							/>
							{formData.student_id_card && !errors.student_id_card && (
								<div className="flex items-center gap-2 text-xs text-green-400 mt-2">
									<Icon icon="lucide:check-circle" />
									<span>{formData.student_id_card.name}</span>
								</div>
							)}
							{errors.student_id_card && (
								<p className="text-xs text-red-400">{errors.student_id_card}</p>
							)}
						</motion.div>
					)}
				</AnimatePresence>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
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
						<option value="Veg" className="bg-neutral-800">
							Vegetarian
						</option>
						<option value="Non-Veg" className="bg-neutral-800">
							Non-Vegetarian
						</option>
					</select>
				</motion.div>

				<div className="text-right text-white mt-2">
					<span className="text-xl font-bold">
						Total: ₹{finalPrice.toFixed(2)}
					</span>
				</div>

				<div className="mt-4 w-full">
					<GetStartedButton
						text={
							isSubmitting
								? 'Processing...'
								: `Book for ₹${finalPrice.toFixed(2)}`
						}
						type="submit"
						disabled={isSubmitting || isLoading}
					/>
				</div>

				{submitStatus === 'success' && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="flex items-center gap-2 text-sm text-green-400 p-3 bg-green-900/30 border border-green-700 rounded-lg"
					>
						<Icon icon="lucide:check-circle" className="size-5" />
						<span>{submitMessage}</span>
					</motion.div>
				)}
				{submitStatus === 'error' && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="flex items-center gap-2 text-sm text-red-400 p-3 bg-red-900/30 border border-red-700 rounded-lg"
					>
						<Icon icon="lucide:x-circle" className="size-5" />
						<span>{submitMessage}</span>
					</motion.div>
				)}
			</form>
		</motion.div>
	);
}
