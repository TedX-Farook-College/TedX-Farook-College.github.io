'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Footer from '@/components/main/Footer';
import Navbar from '@/components/main/Navbar';

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
			<div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-red-600/40 rounded-full blur-[150px] sm:blur-[200px] opacity-30"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-red-800/40 rounded-full blur-[200px] sm:blur-[250px] opacity-20"></div>

			<Navbar activePage="About" />

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
						TEDx is a grassroots initiative in the spirit of TED's mission to research and discover "ideas worth spreading."  It brings TED to local communities through independently organized events. On its 40th anniversary, TED has sharpened its goals through the slogan 'Ideas Change Everything,' focusing on the impact good ideas can bring. TEDx makes ideas accessible to students, inspiring learning minds to go beyond textbooks and classrooms, expanding into the future with more open perspectives.
					</p>
				</motion.div>

				<motion.div variants={itemVariants}>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-red-500">
						TEDx Farook College
					</h2>
					<p className="text-white/80 leading-relaxed text-sm sm:text-base">
						TEDx Farook College is an independently organized TED event serving
						as a hub of ideas and knowledge for the thinkers of Malabar. Hosted
						by the Arts and Science college in Kozhikode, it offers a platform for
						students across Kerala to share, learn, and aspire. With a
						futuristic approach to knowledge and progress, TEDxFarookCollege is
						guided by the idea of advancing academic and personal growth. It
						represents both a solace and an inspiration for young minds, while
						setting the stage for future events and innovation.
					</p>
				</motion.div>
			</motion.section>
			<Footer />
		</div>
	);
}
