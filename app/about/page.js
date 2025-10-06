'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function About() {
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
			transition: { staggerChildren: 0.15 },
		},
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6 },
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
			<div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-red-600/40 rounded-full blur-[150px] sm:blur-[200px] opacity-30"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-red-800/40 rounded-full blur-[200px] sm:blur-[250px] opacity-20"></div>

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
							className={`cursor-pointer hover:text-white transition-colors ${
								item === 'About' ? 'text-red-500 font-bold' : ''
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
													item === 'About'
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
				className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 space-y-10 sm:space-y-12 md:space-y-16 relative z-10"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.div variants={itemVariants}>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-red-500">
						About TED
					</h2>
					<p className="text-white/80 leading-relaxed text-sm sm:text-base">
						TED is a nonprofit devoted to spreading ideas, usually in the form
						of short, powerful talks. TED stands for technology, entertainment,
						and design. Its aim is to inform and educate global audiences in an
						accessible way. Through TED, thinkers, creators, designers, artists,
						and experts showcase their talents and "ideas worth spreading".
						Novel and valuable knowledge is exhibited by masterminds and viewed
						by over 3 billion enthusiasts annually. TED makes an impact by
						generating and sharing knowledge that matters.
					</p>
				</motion.div>

				<motion.div variants={itemVariants}>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-red-500">
						About TEDx
					</h2>
					<p className="text-white/80 leading-relaxed text-sm sm:text-base">
						TEDx is a grassroots initiative in the spirit of TED's mission to
						research and discover "ideas worth spreading". It brings TED to
						local communities through independently organized events. TEDx makes
						ideas accessible to students, inspiring learning minds to go beyond
						textbooks and classrooms, expanding into the future with more open
						perspectives.
					</p>
				</motion.div>

				<motion.div variants={itemVariants}>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-red-500">
						TEDx Farook College
					</h2>
					<p className="text-white/80 leading-relaxed text-sm sm:text-base">
						TEDx Farook College is an independently organized TED event serving
						as a hub of ideas and knowledge for the thinkers of Malabar. Hosted
						by the Arts and Science college in Malabar, it offers a platform for
						students across Kerala to share, learn, and aspire. With a
						futuristic approach to knowledge and progress, TEDxFarookCollege is
						guided by the idea of advancing academic and personal growth. It
						represents both a solace and an inspiration for young minds, while
						setting the stage for future events and innovation.
					</p>
				</motion.div>
			</motion.section>
		</div>
	);
}
