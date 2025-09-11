import 'normalize.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import clsx from 'clsx';

export const metadata: Metadata = {
	title: 'Scan',
	description: 'Scan Next.js project',
	authors: [{ name: 'Iakov' }],
	icons: {
		icon: '/favicon.ico',
	},
};

const montserrat = Montserrat({
	weight: ['900'], //Black
	subsets: ['latin', 'cyrillic'],
});

const inter = Inter({
	weight: ['400', '500', '600', '700'], // Regular, Medium, Semi-Bold, Bold
	subsets: ['latin', 'cyrillic'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx(montserrat.className, inter.className)}>
				{children}
			</body>
		</html>
	);
}
