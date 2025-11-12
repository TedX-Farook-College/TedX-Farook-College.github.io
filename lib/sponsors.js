const sponsorList = [
	{
		logo: `/images/s3/sponsors/IIS-Logo.webp`,
		name: 'IIS',
		description:
			'Private training institute in Kerala that offers courses in accounting, tax, and related skills, emphasizing hands-on experience and placement assistance.',
		link: 'https://www.instagram.com/indian_institute_of_skills/',
	},
	{
		logo: `/images/s3/sponsors/Kaif-zip.webp`,
		name: 'Zee sip',
		description:
			'A juice company based in Kerala, founded by Kaif Muhammad, that produces natural fruit juices with a focus on freshness. They are known for their tagline, "Feel the freshness in every sip"',
		link: 'https://www.instagram.com/zee_sip_india/?hl=en',
	},
	{
		logo: `/images/s3/sponsors/tornado.webp`,
		name: 'TORNADO',
		description:
			'Premium luxury timepiece brand combining elegant design with innovative engineering. Known for unique morphing transitions and exceptional craftsmanship.',
		link: 'https://tornado.store',
	},
	{
		logo: `/images/s3/sponsors/Khaleez.webp`,
		name: 'KHALEEZ Restuarant',
		description:
			'Khaleez brings people together through rich flavors and heartfelt hospitality — from elegant meals at Khaleez Restaurant, quick bites at Khaleez Kitchen, to authentic Arabic experiences at Qwaish. ',
		link: 'https://khaleez.com/',
	},
	{
		logo: `/images/s3/sponsors/MediaOne.webp`,
		name: 'Media One',
		description:
			'Leading Malayalam news channel reaching over 4 million viewers across India and Middle East. Known for bold journalism, integrity, and being the trusted voice of Kerala since 2013.',
		link: 'https://www.mediaoneonline.com/',
	},
	{
		logo: `/images/s3/sponsors/fulva.webp`,
		name: 'Fulva',
		description:
			'Kerala-based food startup that specializes in Kozhikode halwa, a traditional sweet from the region.',
		link: 'https://fulva.in',
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