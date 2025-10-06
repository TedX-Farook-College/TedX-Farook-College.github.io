'use client';
import React from 'react';
import { motion } from 'motion/react';

export default function Contact() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const organizers = [
		{
			name: 'Lyman Rasheed',
			role: 'Organizer',
			phone: '+91 9638 5890',
			image: '/images/lyman.jpg',
		},
		{
			name: 'Hawwa Ayub',
			role: 'Co-organizer',
			phone: '+91 7029 2614',
			image: '/images/hawwa.jpg',
		},
		{
			name: 'Hanan Sulficar',
			role: 'Curator',
			phone: '+91 9638 7634',
			image: '/images/hanan.jpg',
		},
		{
			name: 'Ridwan Mujeeb',
			role: 'Curator',
			phone: '+91 9186 4917',
			image: '/images/ridwan.jpg',
		},
	];

	return (
		<div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/60 rounded-full blur-[250px] opacity-30 pointer-events-none"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-800/50 rounded-full blur-[300px] opacity-20 pointer-events-none"></div>

			<motion.nav
				className="flex justify-between items-center py-10 px-16 relative z-20"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.img
					src="/images/logo-white.png"
					alt="TedxFarook College Logo"
					className="text-2xl w-60 font-bold tracking-wider"
					variants={itemVariants}
				/>
				<ul className="flex gap-8 text-md text-white/90">
					{[
						'Home',
						'About',
						'Speakers',
						'Sponsors',
						'Season 1',
						'Season 2',
						'Contact',
					].map((item) => (
						<motion.a
							key={item}
							href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`}
							className={`cursor-pointer transition-colors hover:text-white ${
								item === 'Contact' ? 'text-red-500 font-bold' : ''
							}`}
							variants={itemVariants}
						>
							{item}
						</motion.a>
					))}
				</ul>
			</motion.nav>

			<motion.section
				className="py-20 px-16 relative z-10"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
					variants={containerVariants}
				>
					{/* Organizers Grid */}
					<motion.div className="space-y-8" variants={itemVariants}>
						<h2 className="text-4xl font-bold text-red-500 mb-8">Our Team</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{organizers.map((organizer, index) => (
								<motion.div
									key={organizer.name}
									className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: index * 0.1 }}
								>
									<img
										src={organizer.image}
										alt={organizer.name}
										className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-red-500"
									/>
									<h3 className="text-xl font-semibold mb-2">
										{organizer.name}
									</h3>
									<p className="text-red-400 font-medium mb-2">
										{organizer.role}
									</p>
									<p className="text-gray-400 text-sm">{organizer.phone}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div className="space-y-6" variants={itemVariants}>
						<h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
						<p className="text-white/70 mb-8">
							Fill out the form, and we'll get back to you within 2 hours.
						</p>
						<form className="space-y-4">
							<input
								type="text"
								placeholder="Enter your name"
								className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
							/>
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
							/>
							<textarea
								rows={5}
								placeholder="Enter your message"
								className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 resize-none"
							></textarea>
							<button
								type="submit"
								className="w-full px-8 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
							>
								Send
							</button>
						</form>
						<div className="pt-4 border-t border-gray-800">
							<p className="text-gray-400 text-sm">Or email us at:</p>
							<a
								href="mailto:contact@tedxfarook@gmail.com"
								className="text-red-400 hover:text-red-300 text-sm font-medium"
							>
								contact@tedxfarook@gmail.com
							</a>
						</div>
						<a
							href="#"
							className="inline-flex items-center gap-2  text-red-500 hover:text-red-400 text-md font-medium"
						>
							Join us on WhatsApp
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
							</svg>
						</a>
					</motion.div>
				</motion.div>
			</motion.section>

		</div>
	);
}
