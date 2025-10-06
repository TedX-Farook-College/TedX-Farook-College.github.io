'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Home() {
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
			</motion.nav>

			<motion.section
				className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<h1
					className="absolute inset-0 text-[40rem] font-bold text-transparent select-none tracking-tight z-0"
					style={{
						WebkitTextStroke: '4px rgba(255, 0, 0, 0.1)',
						lineHeight: '0.8',
					}}
					aria-hidden="true"
				>
					X3
				</h1>

				<div className="relative z-10 max-w-2xl">
					<motion.h2
						className="text-5xl md:text-6xl font-extrabold leading-tight"
						variants={itemVariants}
					>
						Book Your <span className="text-red-500">Tickets</span> Now!
					</motion.h2>
					<motion.p
						className="text-white/70 mt-6 max-w-xl mx-auto"
						variants={itemVariants}
					>
						Don't miss out on a full day of ideas worth sharing and refreshing
						entertainment. Reserve your slot before seats run out!
					</motion.p>
					<motion.div variants={itemVariants} className="mt-8">
						<button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-gray-200 transition-transform">
							Book Now!
						</button>
					</motion.div>
				</div>
			</motion.section>

			<hr className="border-t border-red-500 mx-10" />

			<motion.section
				className="flex flex-col items-center justify-center py-20 relative z-10 min-h-[50vh]"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				variants={containerVariants}
			>
				<div className="relative w-full max-w-md flex justify-center items-center">
					<div className="absolute w-full px-6 h-[3px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
					<motion.div
						className="flex space-x-2 md:space-x-4 text-5xl font-bold z-10"
						variants={containerVariants}
					>
						{['28', '11', '25'].map((num) => (
							<motion.div
								key={num}
								className="bg-[#1c0000] border-t border-white/10 px-6 py-4 rounded-md shadow-lg"
								variants={itemVariants}
							>
								{num}
							</motion.div>
						))}
					</motion.div>
				</div>

				<motion.p
					className="mt-8 text-white/80 text-center max-w-xl text-sm"
					variants={itemVariants}
				>
					<span className="font-semibold text-white">
						TEDxFarookCollege Season 3
					</span>{' '}
					will convene at the Farook College campus on{' '}
					<span className="font-semibold text-white">28th November 2025</span>
				</motion.p>
			</motion.section>

			<hr className="border-t border-red-500 mx-10" />

			<motion.section
				className="flex justify-center items-center py-20 px-4"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.7 }}
			>
				<div className="bg-black/20 border border-gray-800 p-2 rounded-2xl shadow-2xl shadow-red-900/10">
					<img
						src="/images/poster.png"
						alt="TEDx Poster"
						className="w-[280px] md:w-[350px] object-cover rounded-lg"
					/>
				</div>
			</motion.section>
		</div>
	);
}
