'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		'Home',
		'About',
		'Speakers',
		'Sponsors',
		'Season 1',
		'Season 2',
		'Contact',
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
	};

	const mobileMenuVariants = {
		closed: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
		open: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.3, staggerChildren: 0.05 },
		},
	};

	const mobileItemVariants = {
		closed: { x: 20, opacity: 0 },
		open: { x: 0, opacity: 1 },
	};

	return (
		<div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
			<div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

			<motion.nav
				className="flex justify-between items-center py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 relative z-20"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.a href="/" variants={itemVariants}>
					<img
						src="/images/logo-white.png"
						alt="TedxFarook College Logo"
						className="w-32 sm:w-40 md:w-48 lg:w-60"
					/>
				</motion.a>

				<ul className="hidden lg:flex gap-4 xl:gap-8 text-sm xl:text-md text-white/90">
					{navItems.map((item) => (
						<motion.a
							key={item}
							href={
								item === 'Home'
									? '/'
									: `/${item.toLowerCase().replace(/\s/g, '-')}`
							}
							className={`cursor-pointer transition-colors hover:text-white ${
								item === 'Home' ? 'text-red-500 font-bold' : ''
							}`}
							variants={itemVariants}
						>
							{item}
						</motion.a>
					))}
				</ul>

				<motion.button
					variants={itemVariants}
					className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</motion.button>

				<AnimatePresence>
					{isOpen && (
						<>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
								onClick={() => setIsOpen(false)}
							/>
							<motion.div
								variants={mobileMenuVariants}
								initial="closed"
								animate="open"
								exit="closed"
								className="fixed top-0 right-0 bottom-0 w-64 sm:w-80 bg-black border-l border-red-500/30 z-40 lg:hidden overflow-y-auto"
							>
								<div className="flex justify-end p-4">
									<button
										onClick={() => setIsOpen(false)}
										className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
										aria-label="Close menu"
									>
										<X size={28} />
									</button>
								</div>
								<ul className="flex flex-col gap-2 px-6 pb-6">
									{navItems.map((item) => (
										<motion.li key={item} variants={mobileItemVariants}>
											<a
												href={
													item === 'Home'
														? '/'
														: `/${item.toLowerCase().replace(/\s/g, '-')}`
												}
												className={`block py-3 px-4 rounded-lg text-lg transition-colors ${
													item === 'Home'
														? 'bg-red-500 text-white font-bold'
														: 'text-white/90 hover:bg-white/10 hover:text-white'
												}`}
												onClick={() => setIsOpen(false)}
											>
												{item}
											</a>
										</motion.li>
									))}
								</ul>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</motion.nav>

			<motion.section
				className="min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<h1
					className="absolute inset-0 text-[15rem] sm:text-[25rem] md:text-[35rem] lg:text-[40rem] font-bold text-transparent select-none tracking-tight z-0"
					style={{
						WebkitTextStroke: '2px rgba(255, 0, 0, 0.1)',
						lineHeight: '0.8',
					}}
					aria-hidden="true"
				>
					X3
				</h1>

				<div className="relative z-10 max-w-2xl">
					<motion.h2
						className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
						variants={itemVariants}
					>
						Book Your <span className="text-red-500">Tickets</span> Now!
					</motion.h2>
					<motion.p
						className="text-white/70 mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base"
						variants={itemVariants}
					>
						Don't miss out on a full day of ideas worth sharing and refreshing
						entertainment. Reserve your slot before seats run out!
					</motion.p>
					<motion.div variants={itemVariants} className="mt-6 sm:mt-8">
						<button
							disabled
							className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-gray-200 transition-transform text-sm sm:text-base"
						>
							Coming Soon
						</button>
					</motion.div>
				</div>
			</motion.section>

			<hr className="border-t border-red-500 mx-4 sm:mx-6 md:mx-10" />

			<motion.section
				className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 relative z-10 min-h-[40vh] sm:min-h-[50vh]"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				variants={containerVariants}
			>
				<div className="relative w-full max-w-xs sm:max-w-md flex justify-center items-center px-4">
					<div className="absolute w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
					<motion.div
						className="flex space-x-2 sm:space-x-3 md:space-x-4 text-3xl sm:text-4xl md:text-5xl font-bold z-10"
						variants={containerVariants}
					>
						{['28', '11', '25'].map((num) => (
							<motion.div
								key={num}
								className="bg-[#1c0000] border-t border-white/10 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-md shadow-lg"
								variants={itemVariants}
							>
								{num}
							</motion.div>
						))}
					</motion.div>
				</div>

				<motion.p
					className="mt-6 sm:mt-8 text-white/80 text-center max-w-xl text-xs sm:text-sm px-4"
					variants={itemVariants}
				>
					<span className="font-semibold text-white">
						TEDxFarookCollege Season 3
					</span>{' '}
					will convene at the Farook College campus on{' '}
					<span className="font-semibold text-white">28th November 2025</span>
				</motion.p>
			</motion.section>

			<hr className="border-t border-red-500 mx-4 sm:mx-6 md:mx-10" />

			<motion.section
				className="flex justify-center items-center py-12 sm:py-16 md:py-20 px-4"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.7 }}
			>
				<div className="bg-black/20 border border-gray-800 p-2 rounded-2xl shadow-2xl shadow-red-900/10 max-w-sm sm:max-w-md md:max-w-lg">
					<img
						src="/images/poster.png"
						alt="TEDx Poster"
						className="w-full object-cover rounded-lg"
					/>
				</div>
			</motion.section>
		</div>
	);
}
