/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'logo.clearbit.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
				pathname: '/**',
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.(glb|gltf)$/,
			type: 'asset/resource',
			generator: {
				filename: 'static/models/[name].[hash][ext]',
			},
		});

		return config;
	},
};

export default nextConfig;
