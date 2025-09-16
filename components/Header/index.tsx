'use client';
import st from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { sx } from '@/store/staticData';

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
					<Button
						className={st.btnRegister}
						sx={sx}
						onClick={() => {
							router.push('/authorization/register');
						}}>
						Зарегистрироваться
					</Button>
					<div className={st.stick}></div>
					<Button
						className={st.btnAuthorize}
						sx={sx}
						onClick={() => {
							router.push('/authorization/login');
						}}>
						Войти
					</Button>
				</div>
			</div>
		</header>
	);
};
