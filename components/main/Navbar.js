'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setIsClient(true);
	}, []);

	const navItems = [
		'Home',
		'About',
		'Speakers',
		'Sponsors',
		'Season 1',
		'Season 2',
		'Gallery',
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

	const isActive = (item) => {
		if (!isClient) return false;
		if (item === 'Home' && pathname === '/') return true;
		const formatted = `/${item.toLowerCase().replace(/\s/g, '-')}`;
		return pathname === formatted;
	};

	return (
		<motion.nav
			className="flex justify-between items-center py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 relative z-20"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			{/* Logo */}
			<motion.a href="/" variants={itemVariants}>
				<Image
					width={240}
					height={40}
					priority
					src="/images/tedx-logo/logo-white.webp"
					alt="TedxFarook College Logo"
					className="w-32 sm:w-40 md:w-48 lg:w-60"
					unoptimized
				/>
			</motion.a>

			{/* Desktop Menu */}
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
							isActive(item) ? 'text-red-500 font-bold' : ''
						}`}
						variants={itemVariants}
					>
						{item}
					</motion.a>
				))}
			</ul>

			{/* Mobile menu button */}
			<motion.button
				variants={itemVariants}
				className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
			>
				{isOpen ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
					>
						<path
							fill="currentColor"
							d="M5.85 5.15a.5.5 0 0 0-.707.707l2.15 2.15l-2.15 2.15a.5.5 0 0 0 .707.707L8 8.714l2.15 2.15a.5.5 0 0 0 .707-.707l-2.15-2.15l2.15-2.15a.5.5 0 0 0-.707-.707L8 7.3z"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						className="text-white"
					>
						<path
							d="M4 6h16M4 12h16M4 18h16"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</motion.button>

			{/* Mobile Menu */}
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
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16"
									>
										<path
											fill="currentColor"
											d="M5.85 5.15a.5.5 0 0 0-.707.707l2.15 2.15l-2.15 2.15a.5.5 0 0 0 .707.707L8 8.714l2.15 2.15a.5.5 0 0 0 .707-.707l-2.15-2.15l2.15-2.15a.5.5 0 0 0-.707-.707L8 7.3z"
										/>
									</svg>
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
												isActive(item)
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
	);
};

export default Navbar;
