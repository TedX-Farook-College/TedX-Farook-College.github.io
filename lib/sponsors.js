const sponsorList = [
	{
		logo: `https://logo.clearbit.com/google.com`,
		name: 'Google',
		description: 'A description for Google.',
		link: 'https://google.com',
	},
	{
		logo: `https://logo.clearbit.com/apple.com`,
		name: 'Apple',
		description: 'A description for Apple.',
		link: 'https://apple.com',
	},
	{
		logo: `https://logo.clearbit.com/microsoft.com`,
		name: 'Microsoft',
		description: 'A description for Microsoft.',
		link: 'https://microsoft.com',
	},
	{
		logo: `https://logo.clearbit.com/amazon.com`,
		name: 'Amazon',
		description: 'A description for Amazon.',
		link: 'https://amazon.com',
	},
	{
		logo: `https://logo.clearbit.com/meta.com`,
		name: 'Meta',
		description: 'A description for Meta.',
		link: 'https://meta.com',
	},
	{
		logo: `https://logo.clearbit.com/github.com`,
		name: 'GitHub',
		description: 'A description for GitHub.',
		link: 'https://github.com',
	},
	{
		logo: `https://logo.clearbit.com/vercel.com`,
		name: 'Vercel',
		description: 'A description for Vercel.',
		link: 'https://vercel.com',
	},
	{
		logo: `https://logo.clearbit.com/openai.com`,
		name: 'OpenAI',
		description: 'A description for OpenAI.',
		link: 'https://openai.com',
	},
	{
		logo: `https://logo.clearbit.com/netflix.com`,
		name: 'Netflix',
		description: 'A description for Netflix.',
		link: 'https://netflix.com',
	},
];

export const marqueeSponsors = sponsorList.map((sponsor) => ({
	logo: sponsor.logo,
	name: sponsor.name,
	link: sponsor.link,
}));

export const hoverEffectSponsors = sponsorList.map((sponsor) => ({
	title: sponsor.name,
	description: sponsor.description,
	link: sponsor.link,
	logo: sponsor.logo,
}));
