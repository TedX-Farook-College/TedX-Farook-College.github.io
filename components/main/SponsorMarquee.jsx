import { Marquee } from '../ui/marquee';
import { SponsorCard } from './SponsorCard';
import { marqueeSponsors } from '@/lib/sponsors';

const sponsors = marqueeSponsors;

function splitIntoRows(list) {
	if (list.length === 3) return [list];
	if (list.length === 6) return [list.slice(0, 3), list.slice(3, 6)];
	if (list.length === 9)
		return [list.slice(0, 3), list.slice(3, 6), list.slice(6, 9)];

	const itemsPerRow = Math.ceil(list.length / 3);
	return [
		list.slice(0, itemsPerRow),
		list.slice(itemsPerRow, itemsPerRow * 2),
		list.slice(itemsPerRow * 2),
	];
}

const rows = splitIntoRows(sponsors);

export function SponsorMarquee() {
	const durations = ['40s', '35s', '45s'];

	return (
		<div className="w-full flex flex-col items-center justify-center space-y-4">
			{rows.map((row, idx) => (
				<Marquee
					key={idx}
					pauseOnHover={true}
					reverse={idx % 2 === 1}
					className="[--gap:1.5rem]"
					style={{ '--duration': durations[idx % durations.length] }}
				>
					{row.map((sponsor) => (
						<SponsorCard
							key={sponsor.name}
							logo={sponsor.logo}
							name={sponsor.name}
							link={sponsor.link}
						/>
					))}
				</Marquee>
			))}
		</div>
	);
}
