import st from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logoFooter from '@/public/logoFooter.png';

export const Footer = () => {
	return (
		<footer className={st.footer}>
			<div className={st.container}>
				<Link href="/">
					<Image className={st.logo} src={logoFooter} alt="logo"  />
				</Link>
				<div className={st.contacts}>
					<p className={st.topContacts}>
						г. Москва, Цветной б-р, 40 <br />
						+7 495 771 21 11 <br />
						info@skan.ru
					</p>
					<p>Copyright. 2022</p>
				</div>
			</div>
		</footer>
	);
};
