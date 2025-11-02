import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className="bg-black text-gray-300 px-4 md:px-8 border-b-[#a30000] border-b-3 relative overflow-hidden">
			<div className="relative max-w-[1400px] mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 items-stretch w-full gap-8 md:gap-0">
					<div className="col-span-1 row-span-1 flex flex-col justify-between">
						<div>
							<h3 className="text-3xl md:text-4xl font-extrabold text-white/90 my-2 blur-[1px]">
								Socials
							</h3>

							<ul className="space-y-3 text-xl md:text-2xl text-white/50">
								{[
									{ name: 'Facebook', icon: 'formkit:facebook', href: '#' },
									{ name: 'Twitter', icon: 'prime:twitter', href: '#' },
									{ name: 'LinkedIn', icon: 'formkit:linkedin', href: '#' },
									{ name: 'Instagram', icon: 'formkit:instagram', href: '#' },
									{ name: 'Discord', icon: 'ic:baseline-discord', href: '#' },
								].map((s, i) => (
									<li key={i}>
										<Link
											href={s.href}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-3 transition-all duration-300 ease-in-out hover:text-white hover:translate-x-1 md:blur-[1px] hover:blur-none"
										>
											<span className="flex items-center justify-center">
												<Icon icon={s.icon} width="32" height="32" />
											</span>
											<span className="">{s.name}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className="w-full inline-flex my-4 blur-[1px] md:blur-[2px]">
							<div className="text-3xl md:text-9xl font-extrabold leading-[0.9] text-white">
								TED
							</div>
							<div className="text-3xl md:text-9xl font-extrabold leading-[0.9] text-[#EB0028] inline-block">
								x
							</div>
							<div className="text-3xl md:text-9xl font-extrabold leading-[0.9] text-white inline-block">
								FC
							</div>
						</div>
					</div>

					<div className="hidden md:col-start-2 col-span-1 relative md:flex md:items-end md:justify-center overflow-hidden blur-[2px]">
						<img
							src="/images/footer-crack.png"
							alt="crack"
							className="w-full object-cover pointer-events-none md:absolute md:bottom-0 md:left-0"
						/>
					</div>

					<div className="absolute bottom-0 right-0 md:col-start-3 col-span-1 md:flex items-end justify-end blur-[4px]">
						<span className="text-9xl md:text-[17rem] font-extrabold text-[#484848]/40 select-none pointer-events-none leading-none">
							X3
						</span>
					</div>
				</div>

				<div className="sr-only">
					Footer for TEDxFC with socials and hero-style crack image.
				</div>
			</div>
		</footer>
	);
}
