import st from './styles.module.scss';
import { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<main className={st.main}>
				{children}
			</main>
			<Footer />
		</>
	);
};
