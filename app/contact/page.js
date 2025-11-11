'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/main/Footer';
import { GetStartedButton } from '@/components/ui/GetStartedButton';
import Navbar from '@/components/main/Navbar';

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

export default function Contact() {

	const organizers = [
		{
			name: 'Naheel Bran',
			phone: '+91 8590659086',
			role: 'Organizer',
			image: '/images/organizers/Naheel.webp',
		},
		{
			name: 'Muhammed Sahal',
			phone: '+91 9061905314',
			role: 'Co-Organizer',
			image: '/images/organizers/Sahal.webp',
		},
		{
			name: 'Hawwa Ayyoob',
			phone: '+91 9072920614',
			role: 'Curator',
			image: '/images/organizers/Hawwa.webp',
		},
	];

	return (

		<div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
			<div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

			<Navbar activePage="Contact" />

			<div className=" px-6 md:px-12 py-6 flex flex-col items-center overflow-hidden">
				<motion.div
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="flex flex-col items-center mb-12 text-center"
				>
					<div className="flex items-center gap-4 mt-0">
						<h1 className="text-4xl sm:text-3xl lg:text-7xl font-bold tracking-tight">
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
							className="w-full rounded-xl overflow-hidden aspect-[5/4]"
						>
							<div className="mapouter w-full h-full">
								<div className="gmap_canvas w-full h-full">
									<iframe
										className="w-full h-full border-0"
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										src="https://www.google.com/maps/embed/v1/place?q=Farook%20college%2C%20Calicut&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
									></iframe>
								</div>
							</div>
						</motion.div>

						<style jsx>{`
      .mapouter {
        position: relative;
        text-align: right;
        width: 100%;
        height: 100%;
      }
      .gmap_canvas {
        overflow: hidden;
        background: none !important;
        width: 100%;
        height: 100%;
      }
      .gmap_canvas iframe {
        width: 100%;
        height: 100%;
      }
    `}</style>
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
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg sm:max-w-5xl mx-auto px-4">
						{organizers.map((person, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.15 }}
								className="relative rounded-2xl overflow-hidden group shadow-md sm:shadow-none hover:shadow-lg transition-all duration-300 mx-auto w-10/12 sm:w-full"
							>
								<img
									width={500}
									height={500}
									src={person.image}
									alt={person.name}
									className="w-full h-64 sm:h-52 object-cover rounded-2xl sm:rounded-xl grayscale-0 sm:grayscale group-hover:grayscale-0 transition duration-500"
								/>

								{/* Mobile overlay (always visible) */}
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent sm:hidden flex flex-col justify-end p-3 rounded-b-2xl">
									<p className="text-white font-semibold text-lg leading-tight">{person.name}</p>
									<p className="text-white/70 text-sm">{person.role}</p>
									<p className="text-white/60 text-xs mt-1">{person.phone}</p>
								</div>

								{/* Desktop hover overlay */}
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent hidden sm:flex flex-col justify-end p-4 rounded-xl"
								>
									<p className="text-white font-semibold text-base">{person.name}</p>
									<p className="text-white/60 text-sm">{person.role}</p>
									<p className="text-white/50 text-xs mt-1">{person.phone}</p>
								</motion.div>
							</motion.div>
						))}
					</div>



				</motion.div>
			</div>
			<Footer />
		</div>
	);
}
