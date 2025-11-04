'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Spiral as Hamburger } from 'hamburger-react';

export default function GlassNavigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isSeasonsOpen, setIsSeasonsOpen] = useState(false);

	const closeAllMenus = () => {
		setIsMobileMenuOpen(false);
		setIsSeasonsOpen(false);
	};

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-100 md:mx-auto max-w-6xl px-4 py-3 mx-3 my-2 flex items-center justify-between border border-white/10 bg-white/5 backdrop-blur-md md:left-6 md:right-6 md:top-6 rounded-xl">
				<Link href="/" onClick={closeAllMenus}>
					<Image
						src="/tedx-logo.png"
						alt="TEDx Logo"
						width={480}
						height={160}
						className="h-10 w-auto"
						priority
					/>
				</Link>

				<div className="hidden md:flex items-center gap-2">
					<Link
						href="/about"
						className="relative rounded-lg px-3 py-2 text-white/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
					>
						About
					</Link>

					<div className="relative group">
						<button
							type="button"
							className="relative flex items-center gap-1 rounded-lg px-3 py-2 text-white/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
						>
							Past Seasons
							<Icon
								icon="lucide:chevron-down"
								className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
							/>
						</button>

						<div className="absolute left-0 mt-3 w-full bg-black/50 backdrop-blur-md border border-white/10 rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out z-50 text-center">
							<Link
								href="/seasons/x1"
								className="block px-5 py-3 text-sm text-white/90 hover:bg-white/20 rounded-lg transition"
							>
								Season 1
							</Link>
							<Link
								href="/seasons/x2"
								className="block px-5 py-3 text-sm text-white/90 hover:bg-white/20 rounded-lg transition"
							>
								Season 2
							</Link>
						</div>
					</div>

					<Link
						href="/speakers"
						className="relative rounded-lg px-3 py-2 text-white/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
					>
						Speakers
					</Link>
					<Link
						href="/event"
						className="relative rounded-lg px-3 py-2 text-white/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
					>
						Event
					</Link>
					<Link
						href="/sponsors"
						className="relative rounded-lg px-3 py-2 text-white/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
					>
						Sponsors
					</Link>
					<Link
						href="/gallery"
						className="relative rounded-lg px-3 py-2 text-white/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
					>
						Gallery
					</Link>
					<Link
						href="/team"
						className="relative rounded-lg px-3 py-2 text-white/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
					>
						Team
					</Link>
					<Link
						href="/contact"
						className="relative rounded-lg px-3 py-2 text-white/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
					>
						Contact
					</Link>
				</div>

				<div className="flex items-center md:hidden">
					<button
						aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
						className="ml-2 block md:hidden text-2xl text-white/90 hover:text-white transition"
						onClick={() => {
							const newOpenState = !isMobileMenuOpen;
							setIsMobileMenuOpen(newOpenState);
							if (!newOpenState) {
								setIsSeasonsOpen(false);
							}
						}}
					>
						<Hamburger toggled={isMobileMenuOpen} size={24} color="#fff" />
					</button>
				</div>
			</nav>

			<div
				className={`fixed inset-0 top-20 p-6 bg-black/80 backdrop-blur-xl md:hidden
       transition-opacity duration-300 ease-in-out z-50
       ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
			>
				<div className="flex flex-col space-y-3">
					<Link
						href="/about"
						className={`text-lg text-white/90 hover:text-white transition-all duration-300 ${
							isMobileMenuOpen
								? 'opacity-100 translate-y-0 delay-100'
								: 'opacity-0 translate-y-2'
						}`}
						onClick={closeAllMenus}
					>
						About
					</Link>

					<div
						className={`transition-all duration-300 ${
							isMobileMenuOpen
								? 'opacity-100 translate-y-0 delay-150'
								: 'opacity-0 translate-y-2'
						}`}
					>
						<button
							type="button"
							className="flex items-center justify-between w-full text-lg text-white/90 hover:text-white"
							onClick={() => setIsSeasonsOpen(!isSeasonsOpen)}
						>
							Past Seasons
							<Icon
								icon="lucide:chevron-down"
								className={`w-5 h-5 transition-transform duration-200 ${
									isSeasonsOpen ? 'rotate-180' : ''
								}`}
							/>
						</button>
						<div
							className={`overflow-hidden transition-all duration-300 ease-in-out ${
								isSeasonsOpen ? 'max-h-40' : 'max-h-0'
							}`}
						>
							<div className="flex flex-col space-y-3 pl-4 pt-3">
								<Link
									href="/seasons/x1"
									className="text-white/90 hover:text-white"
									onClick={closeAllMenus}
								>
									Season 1
								</Link>
								<Link
									href="/seasons/x2"
									className="text-white/90 hover:text-white"
									onClick={closeAllMenus}
								>
									Season 2
								</Link>
							</div>
						</div>
					</div>

					<Link
						href="/speakers"
						className={`text-lg text-white/90 hover:text-white transition-all duration-300 ${
							isMobileMenuOpen
								? 'opacity-100 translate-y-0 delay-200'
								: 'opacity-0 translate-y-2'
						}`}
						onClick={closeAllMenus}
					>
						Speakers
					</Link>
					<Link
						href="/event"
						className={`text-lg text-white/90 hover:text-white transition-all duration-300 ${
							isMobileMenuOpen
								? 'opacity-100 translate-y-0 delay-250'
								: 'opacity-0 translate-y-2'
						}`}
						onClick={closeAllMenus}
					>
						Event
					</Link>
					<Link
						href="/sponsors"
						className={`text-lg text-white/90 hover:text-white transition-all duration-300 ${
							isMobileMenuOpen
								? 'opacity-100 translate-y-0 delay-300'
								: 'opacity-0 translate-y-2'
						}`}
						onClick={closeAllMenus}
					>
						Sponsors
					</Link>
					<Link
						href="/gallery"
						className={`text-lg text-white/90 hover:text-white transition-all duration-300 ${
							isMobileMenuOpen
								? 'opacity-100 translate-y-0 delay-[350ms]'
								: 'opacity-0 translate-y-2'
						}`}
						onClick={closeAllMenus}
					>
						Gallery
					</Link>
					<Link
						href="/team"
						className={`text-lg text-white/90 hover:text-white transition-all duration-300 ${
							isMobileMenuOpen
								? 'opacity-100 translate-y-0 delay-[400ms]'
								: 'opacity-0 translate-y-2'
						}`}
						onClick={closeAllMenus}
					>
						Team
					</Link>
					<Link
						href="/contact"
						className={`text-lg text-white/90 hover:text-white transition-all duration-300 ${
							isMobileMenuOpen
								? 'opacity-100 translate-y-0 delay-[450ms]'
								: 'opacity-0 translate-y-2'
						}`}
						onClick={closeAllMenus}
					>
						Contact
					</Link>
				</div>
			</div>
		</>
	);
}
