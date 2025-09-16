import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'gateway.scan-interfax.ru',
				port: '',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
