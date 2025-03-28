/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Remove swcMinify as it's causing warnings with Next.js 15
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
	// Add output configuration for Next.js 15
	output: 'export',
	distDir: 'out'
};

module.exports = nextConfig; 