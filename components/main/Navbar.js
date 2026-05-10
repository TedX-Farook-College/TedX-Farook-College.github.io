'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { createPortal } from 'react-dom';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
	const [isClient, setIsClient] = useState(false);

	const pathname = usePathname();
	const dropdownRef = useRef(null);

	useEffect(() => {
		setIsClient(true);
	}, []);


	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target)
			) {
				setOpenDropdown(null);
			}
		};

		if (openDropdown) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [openDropdown]);

	if (!isClient) return null;


	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		// { label: 'Speakers', href: '/speakers' },
		// { label: 'Sponsors', href: '/sponsors' },
		{
			label: 'Seasons',
			children: [
				{ label: 'Season 1', href: '/season-1' },
				{ label: 'Season 2', href: '/season-2' },
				{ label: 'Season 3', href: '/season-3' },
			],
		},
		{ label: 'Gallery', href: '/gallery' },
		{ label: 'Contact', href: '/contact' },
	];

	const isActive = (item) => {
		if (!isClient) return false;
		return pathname === item.href;
	};

	const toggleDropdown = (label) => {
		setOpenDropdown((prev) => (prev === label ? null : label));
	};

	const toggleMobileDropdown = (label) => {
		setMobileOpenDropdown((prev) => (prev === label ? null : label));
	};

	// ================= MOBILE PORTAL =================
	const mobileMenu =
		typeof window !== 'undefined' &&
		createPortal(
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Overlay */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000]"
							onClick={() => setIsOpen(false)}
						/>

						{/* Sidebar */}
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ duration: 0.3 }}
							className="fixed top-0 right-0 bottom-0 w-72 sm:w-80 bg-black border-l border-red-500/30 z-[1100] overflow-y-auto"
						>
							<div className="flex justify-end p-4">
								<button
									onClick={() => setIsOpen(false)}
									className="text-white p-2 hover:bg-white/10 rounded-lg"
								>
									✕
								</button>
							</div>

							<ul className="flex flex-col gap-2 px-6 pb-6">
								{navItems.map((item) => {
									if (item.children) {
										return (
											<li key={item.label}>
												<button
													onClick={() =>
														toggleMobileDropdown(item.label)
													}
													className="w-full flex justify-between items-center py-3 px-4 text-white/90 hover:bg-white/10 rounded-lg"
												>
													{item.label}
													<span
														className={`transition-transform ${mobileOpenDropdown === item.label
															? 'rotate-180'
															: ''
															}`}
													>
														▾
													</span>
												</button>

												<AnimatePresence>
													{mobileOpenDropdown === item.label && (
														<motion.div
															initial={{ opacity: 0, height: 0 }}
															animate={{ opacity: 1, height: 'auto' }}
															exit={{ opacity: 0, height: 0 }}
															transition={{ duration: 0.2 }}
															className="pl-4"
														>
															<div className="border-l border-white/10 pl-4">
																{item.children.map((child) => (
																	<a
																		key={child.href}
																		href={child.href}
																		onClick={() => setIsOpen(false)}
																		className="
block py-2 px-2 text-sm text-white/70
transition-all duration-200
hover:text-white
hover:translate-x-1
"
																	>
																		{child.label}
																	</a>
																))}
															</div>
														</motion.div>
													)}
												</AnimatePresence>
											</li>
										);
									}

									return (
										<li key={item.href}>
											<a
												href={item.href}
												onClick={() => setIsOpen(false)}
												className={`block py-3 px-4 rounded-lg transition-colors ${isActive(item)
													? 'bg-red-500 text-white font-bold'
													: 'text-white/90 hover:bg-white/10'
													}`}
											>
												{item.label}
											</a>
										</li>
									);
								})}
							</ul>
						</motion.div>
					</>
				)}
			</AnimatePresence>,
			document.body
		);

	return (
		<>
			{/* NAVBAR */}
			<motion.nav
				className="
fixed top-4 inset-x-0 mx-auto
w-[95%] lg:w-[92%]
flex justify-between items-center
px-4 sm:px-8 md:px-12 lg:px-16 py-4
backdrop-blur-2xl bg-white/5
border border-white/10
shadow-[0_10px_40px_rgba(0,0,0,0.45)]
rounded-2xl
z-[1000]
"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				{/* Logo */}
				<a href="/">
					<Image
						width={240}
						height={40}
						priority
						src="/images/tedx-logo/logo-white.webp"
						alt="Logo"
						className="w-32 sm:w-40 md:w-48 lg:w-60"
						unoptimized
					/>
				</a>

				{/* Desktop Menu */}
				<ul className="hidden lg:flex gap-6 text-white/90">
					{navItems.map((item) => {
						if (item.children) {
							return (
								<li key={item.label} ref={dropdownRef} className="relative">
									<button
										onClick={() => toggleDropdown(item.label)}
										className="flex items-center gap-1 hover:text-white"
									>
										{item.label}
										<span
											className={`transition-transform ${openDropdown === item.label
												? 'rotate-180'
												: ''
												}`}
										>
											▾
										</span>
									</button>

									<AnimatePresence>
										{openDropdown === item.label && (
											<motion.div
												initial={{ opacity: 0, y: 14, scale: 0.95 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												exit={{ opacity: 0, y: 14, scale: 0.95 }}
												transition={{ duration: 0.2, ease: 'easeOut' }}
												className="
absolute top-10 left-0
min-w-[200px]
rounded-2xl
overflow-hidden

bg-white/10 backdrop-blur-2xl
border border-white/20

shadow-[0_20px_60px_rgba(0,0,0,0.6)]
"
											>
												{/* soft glow top highlight */}
												<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

												<div className="relative py-2">
													{item.children.map((child) => (
														<a
															key={child.href}
															href={child.href}
															onClick={() => setOpenDropdown(null)}
															className="
group relative flex items-center
px-5 py-3 text-sm text-white/80
transition-all duration-200
hover:text-white hover:bg-white/10
"
														>
															{/* left indicator line */}
															<span className="absolute left-0 h-0 w-1 bg-red-500 group-hover:h-full transition-all duration-300 rounded-r" />

															<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
																{child.label}
															</span>
														</a>
													))}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</li>
							);
						}

						return (
							<li key={item.href}>
								<a
									href={item.href}
									className={`hover:text-white ${isActive(item)
										? 'text-red-500 font-bold'
										: ''
										}`}
								>
									{item.label}
								</a>
							</li>
						);
					})}
				</ul>

				{/* Mobile Button */}
				<button
					className="lg:hidden text-white"
					onClick={() => setIsOpen(true)}
				>
					☰
				</button>
			</motion.nav>

			{/* MOBILE PORTAL */}
			{mobileMenu}
		</>
	);
};

export default Navbar;