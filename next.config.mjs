/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [new URL('https://logo.clearbit.com/**')],
	},
};

export default nextConfig;
