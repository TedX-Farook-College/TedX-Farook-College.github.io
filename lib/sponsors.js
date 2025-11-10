const sponsorList = [
	{
		logo: `/images/sponsors/tornado.webp`,
		name: 'TORNADO',
		description:
			'Premium luxury timepiece brand combining elegant design with innovative engineering. Known for unique morphing transitions and exceptional craftsmanship.',
		link: 'https://tornado.store',
	},
	{
		logo: `/images/sponsors/khaleez.webp`,
		name: 'KHALEEZ Restuarant',
		description:
			'Khaleez brings people together through rich flavors and heartfelt hospitality — from elegant meals at Khaleez Restaurant, quick bites at Khaleez Kitchen, to authentic Arabic experiences at Qwaish. ',
		link: 'https://khaleez.com/',
	},
	{
		logo: `/images/sponsors/MediaOne.webp`,
		name: 'Media One',
		description:
			'Leading Malayalam news channel reaching over 4 million viewers across India and Middle East. Known for bold journalism, integrity, and being the trusted voice of Kerala since 2013.',
		link: 'https://www.mediaoneonline.com/',
	},
	{
		logo: `/images/sponsors/Fulva.webp`,
		name: 'Fulva',
		description:
			'Artisanal halwa brand blending traditional recipes with modern craftsmanship. Known for premium ingredients and authentic flavors that honor the rich heritage of this iconic sweet.',
		link: 'https://www.fulva.in/',
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
