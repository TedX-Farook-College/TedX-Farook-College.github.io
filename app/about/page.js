'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function About() {
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

	return (
		<div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
			{/* Glows */}
			<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/40 rounded-full blur-[200px] opacity-30"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-800/40 rounded-full blur-[250px] opacity-20"></div>

			{/* Navbar */}
			<motion.nav
				className="flex justify-between items-center py-10 px-16 relative z-20"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.img
					src="/images/logo-white.png"
					alt="TedxFarook College Logo"
					className="w-60"
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
							className={`cursor-pointer hover:text-white transition-colors ${
								item === 'About' ? 'text-red-500 font-bold' : ''
							}`}
							variants={itemVariants}
						>
							{item}
						</motion.a>
					))}
				</ul>
			</motion.nav>

			{/* Content */}
			<motion.section
				className="max-w-5xl mx-auto px-8 py-16 space-y-16 relative z-10"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				{/* About TED */}
				<motion.div variants={itemVariants}>
					<h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-red-500">
						About TED
					</h2>
					<p className="text-white/80 leading-relaxed">
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

				{/* About TEDx */}
				<motion.div variants={itemVariants}>
					<h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-red-500">
						About TEDx
					</h2>
					<p className="text-white/80 leading-relaxed">
						TEDx is a grassroots initiative in the spirit of TED’s mission to
						research and discover "ideas worth spreading". It brings TED to
						local communities through independently organized events. TEDx makes
						ideas accessible to students, inspiring learning minds to go beyond
						textbooks and classrooms, expanding into the future with more open
						perspectives.
					</p>
				</motion.div>

				{/* About TEDx Farook College */}
				<motion.div variants={itemVariants}>
					<h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-red-500">
						TEDx Farook College
					</h2>
					<p className="text-white/80 leading-relaxed">
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
