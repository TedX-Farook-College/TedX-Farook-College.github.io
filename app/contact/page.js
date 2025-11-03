'use client';
import React from 'react';
import { motion } from 'framer-motion';
import GlassNavigation from '@/components/main/navbar';
import Footer from '@/components/main/footer';
import Image from 'next/image';

const cn = (...classes) => classes.filter(Boolean).join(' ');

function SlideArrowButton({
	text = 'Get Started',
	primaryColor = '#6f3cff',
	className = '',
	...props
}) {
	return (
		<button
			className={cn(
				`group relative rounded-full border border-white bg-zinc-950 p-2 text-xl font-semibold`,
				className
			)}
			{...props}
		>
			<div
				className="absolute left-0 top-0 flex h-full w-11 items-center justify-end rounded-full transition-all duration-200 ease-in-out group-hover:w-full"
				style={{ backgroundColor: primaryColor }}
			>
				<span className="mr-3 text-white transition-all duration-200 ease-in-out">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z" />
					</svg>
				</span>
			</div>
			<span className="relative left-4 z-10 whitespace-nowrap px-8 font-semibold text-white transition-all duration-200 ease-in-out group-hover:-left-3 group-hover:text-white">
				{text}
			</span>
		</button>
	);
}

function GetStartedButton({ text = 'Get started', className, type, ...props }) {
	return (
		<div className="min-h-12 w-full">
			<button
				type={type}
				className={cn(
					'group flex h-12 w-full items-center justify-center gap-3 rounded-lg p-2 font-bold transition-colors duration-100 ease-in-out', // Changed from w-48
					'bg-zinc-950 border-2 border-white/10 hover:bg-red-600',
					className
				)}
				{...props}
			>
				<span
					className={cn(
						'transition-colors duration-100 ease-in-out',
						'text-white group-hover:text-white'
					)}
				>
					{text}
				</span>
				<div
					className={cn(
						'relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100',
						'bg-red-600 group-hover:bg-white'
					)}
				>
					<div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							className={cn(
								'size-7 transform p-1 opacity-0 group-hover:opacity-100',
								'text-red-600'
							)}
							fill="currentColor"
						>
							<path d="M3 20v-6l8-2l-8-2V4l19 8l-19 8Z" />
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							className={cn(
								'size-7 transform p-1 opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0',
								'text-white'
							)}
							fill="currentColor"
						>
							<path d="M3 20v-6l8-2l-8-2V4l19 8l-19 8Z" />
						</svg>
					</div>
				</div>
			</button>
		</div>
	);
}

export default function Contact() {
	const organizers = [
		{
			name: 'Lyman Rasheed',
			phone: '+91 96385890',
			image: '/images/contacts/lymen.webp',
		},
		{
			name: 'Hawwa Ayub',
			phone: '+91 70292614',
			image: '/images/contacts/Hawwa.webp',
		},
		{
			name: 'Hanan Sulficar',
			phone: '+91 96387634',
			image: '/images/contacts/Hanan.webp',
		},
		{
			name: 'Ridwan Mujeeb',
			phone: '+91 91864917',
			image: '/images/contacts/Ridwan4.webp',
		},
	];

	const handleImageError = (e) => {
		const name = e.target.alt || 'Member';
		e.target.src = `https://placehold.co/300x300/1a1a1a/666?text=${
			name.split(' ')[0]
		}`;
	};

	return (
		<section className="bg-black min-h-screen text-white font-sans">
			<GlassNavigation />
			<div className=" px-6 md:px-12 py-16 flex flex-col items-center overflow-hidden">
				<motion.div
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="flex flex-col items-center mb-12 text-center"
				>
					<div className="flex items-center gap-4 mt-20">
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight">
							Contact Us
						</h1>

						<div className="flex flex-col gap-[4px]">
							{[24, 38, 52, 66, 80, 94, 108].map((w, i) => (
								<motion.div
									key={i}
									className="h-[4px] bg-red-600 rounded-full origin-left"
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									transition={{ duration: 0.5, delay: i * 0.05 }}
									style={{ width: `${w}px` }}
								/>
							))}
						</div>
					</div>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="text-white/70 mt-3 text-sm md:text-base"
					>
						for general enquiries mail us at{' '}
						<a
							href="mailto:contact@tedxfarook@gmail.com"
							className="underline hover:text-red-500 transition"
						>
							contact@tedxfarook@gmail.com
						</a>
					</motion.p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 w-full max-w-7xl items-stretch">
					<motion.div
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="bg-neutral-900 p-6 rounded-2xl flex flex-col justify-between"
					>
						<div>
							<h2 className="text-xl font-semibold mb-2 tracking-tight">
								Farook College
							</h2>
							<p className="text-white/70 text-sm leading-relaxed mb-4">
								Farook College P.O, Kozhikode, <br />
								Kerala, India - 673632
							</p>
						</div>

						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="w-full h-[300px] rounded-xl overflow-hidden"
						>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31254.89085005649!2d75.8111!3d11.1795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65decd9a16edb%3A0xa8b93a17ee7c87b3!2sFarook%20College!5e0!3m2!1sen!2sin!4v16987654321"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="bg-neutral-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col justify-between"
					>
						<a
							href="https://chat.whatsapp.com/LU2wm2RGOCA6krVD7YHEIE"
							target="_blank"
							rel="noopener noreferrer"
							className="block w-full mb-5"
						>
							<SlideArrowButton
								text="Message us"
								primaryColor="#dc2626"
								className="w-full"
							/>
						</a>

						<div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
							<span className="w-12 h-[1px] bg-white/30"></span> OR{' '}
							<span className="w-12 h-[1px] bg-white/30"></span>
						</div>

						<form
							action="https://formsubmit.co/74f7ef5728eeb55f706a5bf1d459c450"
							method="POST"
							autoComplete="off"
							className="flex flex-col gap-5"
						>
							{['Name', 'Email', 'Message'].map((label, i) => (
								<motion.div
									key={label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.1 }}
									className="flex flex-col gap-2"
								>
									<label
										htmlFor={label.toLowerCase()}
										className="text-sm text-white/70 font-medium tracking-wide"
									>
										{label}
									</label>
									{label === 'Message' ? (
										<textarea
											name={label.toLowerCase()}
											id={label.toLowerCase()}
											rows="5"
											placeholder="Enter your message"
											required
											className="p-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
										></textarea>
									) : (
										<input
											type={label === 'Email' ? 'email' : 'text'}
											name={label.toLowerCase()}
											id={label.toLowerCase()}
											placeholder={`Enter your ${label.toLowerCase()}`}
											required
											className="p-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
										/>
									)}
								</motion.div>
							))}

							<div className="mt-4 w-full">
								<GetStartedButton text="Send" type="submit" />
							</div>
						</form>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mt-16 text-center w-full"
				>
					<p className="text-white/60 mb-6 text-sm md:text-base tracking-wide">
						or Contact a team Member Directly
					</p>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
						{organizers.map((person, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.15 }}
								className="relative rounded-xl overflow-hidden group"
							>
								<Image
									width={500}
									height={500}
									src={person.image}
									alt={person.name}
									onError={handleImageError}
									className="w-full h-44 object-cover grayscale group-hover:grayscale-0 transition duration-500"
								/>
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 group-hover:opacity-90 transition flex flex-col justify-end p-4"
								>
									<p className="text-white font-semibold text-base">
										{person.name}
									</p>
									<p className="text-white/70 text-sm">{person.phone}</p>
								</motion.div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
			<Footer />
		</section>
	);
}
