// components/sections/SponsorsHero.jsx

// Import our new responsive wrapper
import { ResponsiveSponsors } from '@/components/main/ResponsiveSponsors';

export function SponsorsHero() {
	return (
		<section className="relative w-full min-h-screen py-24 sm:py-32 flex items-center justify-center overflow-hidden">
			<div className="mx-auto w-full px-6 lg:px-8 py-10">
				<div className="mx-auto w-full text-center mb-8 md:mb-0">
					<p className="text-lg font-semibold leading-7 text-gray-400">
						The ones who make it possible
					</p>
					<h1 className="mt-4 text-5xl font-bold tracking-tight text-red-600 sm:text-6xl">
						Our Sponsors
					</h1>
					<p className="mt-6 px-3 text-base leading-relaxed max-w-prose mx-auto text-gray-300 break-words">
						We are incredibly grateful for the support of our partners, whose
						contributions are vital to our mission of sharing ideas worth
						spreading.
					</p>
				</div>

				<ResponsiveSponsors />
			</div>
		</section>
	);
}
