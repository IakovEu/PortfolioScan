'use client';
import st from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export const Header = () => {
	const router = useRouter();

	return (
		<header>
			<div className={st.container}>
				<Link href="/">
					<Image className={st.logo} src={logo} alt="logo" priority />
				</Link>
				<nav className={st.links}>
					<Link className={st.link} href="/">
						Главная
					</Link>
					<Link className={st.link} href="/tariffs">
						Тарифы
					</Link>
					<Link className={st.link} href="/FAQ">
						FAQ
					</Link>
				</nav>
				<div className={st.authorization}>
					<Link className={st.register} href="/register">
						Зарегистрироваться
					</Link>
					<div className={st.stick}></div>
					<Button
						className={st.btnAuthorize}
						sx={{
							textTransform: 'none',
							fontFamily: 'inter',
						}}
						onClick={() => {
							router.push('/authorization');
						}}>
						Войти
					</Button>
				</div>
			</div>
		</header>
	);
};
