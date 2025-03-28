/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true, // For static export
	},
	// Configure page extensions
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	// Enable MDX
	webpack: (config) => {
		config.module.rules.push({
			test: /\.mdx?$/,
			use: [
				{
					loader: '@mdx-js/loader',
					options: {
						providerImportSource: '@mdx-js/react',
					},
				},
			],
		});
		return config;
	},
};

module.exports = nextConfig; 