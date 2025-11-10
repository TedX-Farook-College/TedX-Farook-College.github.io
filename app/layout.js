import { Inter } from 'next/font/google';
import './globals.css';

const InterSans = Inter({
	variable: '--font-Inter',
	subsets: ['latin'],
});

export const metadata = {
	title: 'TedxFarook College',
	description: 'TedxFarook College Official Website',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${InterSans.variable} antialiased`}>{children}</body>
		</html>
	);
}
