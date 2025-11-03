'use client';

import { SponsorMarquee } from '@/components/main/SponsorMarquee';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { hoverEffectSponsors } from '@/lib/sponsors';

export function ResponsiveSponsors() {
	return (
		<div className="w-full">
			<div className="md:hidden">
				<SponsorMarquee />
			</div>

			<div className="hidden md:block max-w-6xl mx-auto">
				<HoverEffect items={hoverEffectSponsors} />
			</div>
		</div>
	);
}
