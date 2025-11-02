// components/main/SponsorMarquee.jsx

import { Marquee } from '../ui/marquee';
import { SponsorCard } from './SponsorCard';
// Import data from our new central file
import { marqueeSponsors } from '@/lib/sponsors';

// Split sponsors into 3 even rows
const sponsors = marqueeSponsors; // Use the imported list
const itemsPerRow = Math.ceil(sponsors.length / 3);
const row1 = sponsors.slice(0, itemsPerRow);
const row2 = sponsors.slice(itemsPerRow, itemsPerRow * 2);
const row3 = sponsors.slice(itemsPerRow * 2);

export function SponsorMarquee() {
	return ( 
        <div className="w-full flex flex-col items-center justify-center space-y-4"> 
            <Marquee
				pauseOnHover={true}
				className="[--gap:1.5rem]"
				style={{ '--duration': '40s' }}
			>
				{row1.map((sponsor) => (
					<SponsorCard
						key={sponsor.name}
						logo={sponsor.logo}
						name={sponsor.name}
						link={sponsor.link}
					/>
				))}
			</Marquee> 
            <Marquee
				pauseOnHover={true}
				reverse={true}
				className="[--gap:1.5rem]"
				style={{ '--duration': '35s' }}
			>
				{row2.map((sponsor) => (
					<SponsorCard
						key={sponsor.name}
						logo={sponsor.logo}
						name={sponsor.name}
						link={sponsor.link}
					/>
				))}
			</Marquee> 
            <Marquee
				pauseOnHover={true}
				className="[--gap:1.5rem]"
				style={{ '--duration': '45s' }}
			>
				{row3.map((sponsor) => (
					<SponsorCard
						key={sponsor.name}
						logo={sponsor.logo}
						name={sponsor.name}
						link={sponsor.link}
					/>
				))}
			</Marquee>
        </div>
    );
}
