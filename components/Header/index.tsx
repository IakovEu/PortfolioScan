import st from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import clsx from 'clsx';

export const Header = () => {
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
					<Link className={clsx(st.link, st.actionsDisabled)} href="/tariffs">
						Тарифы
					</Link>
					<Link className={clsx(st.link, st.actionsDisabled)} href="/FAQ">
						FAQ
					</Link>
				</nav>
				<div className={st.authorization}>
					<Link className={st.register} href="/register">
						Зарегистрироваться
					</Link>
					<div className={st.stick}></div>
					<Link href="/authorization">
						<button className={st.btnAuthorize}>Войти</button>
					</Link>
				</div>
			</div>
		</header>
	);
};
