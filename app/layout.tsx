import 'normalize.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import clsx from 'clsx';
import ClientProviderWrapper from '@/components/ClientProviderWrapper';
import { ToastContainer } from 'react-toastify';

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
				<ClientProviderWrapper>{children}</ClientProviderWrapper>
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss={false}
					draggable={false}
					pauseOnHover={false}
					theme="light"
				/>
			</body>
		</html>
	);
}
