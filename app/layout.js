import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'TEDxFC X3',
	description:
		'TEDx Farook College is an independently organized TED event serving as a hub of ideas and knowledge for the thinkers of Malabar. Hosted by the Arts and Science college in Malabar, it offers a platform for students across Kerala to share, learn, and aspire. With a futuristic approach to knowledge and progress, TEDxFarookCollege is guided by the idea of advancing academic and personal growth. It represents both a solace and an inspiration for young minds, while setting the stage for future events and innovation.',
	keywords: [
		'TEDx',
		'Farook College',
		'Kerala',
		'Ideas',
		'Innovation',
		'Education',
		'Conference',
	],
	authors: [{ name: 'TEDx Farook College' }],
	openGraph: {
		title: 'TedXFC X3 - Ideas Worth Spreading',
		description:
			'Join us for an unforgettable journey of innovation, inspiration, and ideas that will shape our future.',
		url: 'https://tedx.farookcollege.ac.in',
		siteName: 'TEDx Farook College',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'TEDx Farook College',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TedXFC X3 - Ideas Worth Spreading',
		description:
			'Join us for an unforgettable journey of innovation, inspiration, and ideas that will shape our future.',
		images: ['/twitter-image.jpg'], // need to add our twitter image
		creator: '@tedxfarookcollege',
		site: '@tedxfarookcollege',
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png', // need to add apple touch icon
		other: {
			rel: 'apple-touch-icon-precomposed', // here too
			url: '/apple-touch-icon.png',
		},
	},
	manifest: '/site.webmanifest',
};

export const viewport = {
	themeColor: '#ed2635',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-title" content="TEDxFC" />
			</head>

			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
