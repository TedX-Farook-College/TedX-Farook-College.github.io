import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const InterSans = Inter({
	variable: '--font-Inter',
	subsets: ['latin'],
});

export const metadata = {
	metadataBase: new URL('https://tedx.farookcollege.ac.in'),
	title: 'TEDxFC X3',
	description:
		'TEDx Farook College is an independently organized TED event serving as a hub of ideas and knowledge for the thinkers of Malabar.',
	keywords: [
		'TEDx',
		'Farook College',
		'Kerala',
		'Ideas',
		'Innovation',
		'Education',
	],
	authors: [{ name: 'TEDx Farook College' }],
	openGraph: {
		title: 'TedXFC X3 - Ideas Worth Spreading',
		description:
			'Join us for an unforgettable journey of innovation, inspiration.',
		url: 'https://tedx.farookcollege.ac.in',
		siteName: 'TEDx Farook College',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TedXFC X3',
		description:
			'Join us for innovation and inspiration.',
		images: ['/twitter-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: '/favicon.ico',
	},
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

			<body className={`${InterSans.variable} antialiased bg-black text-white`}>
				{/* ✅ GLOBAL SPACING FOR FIXED NAVBAR */}
				<main className="pt-28">
					{children}
				</main>

				{/* ✅ Correct placement */}
				<GoogleAnalytics gaId="G-F4673C0949" />
			</body>
		</html>
	);
}