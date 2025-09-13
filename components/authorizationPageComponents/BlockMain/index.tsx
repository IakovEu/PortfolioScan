import st from './styles.module.scss';
import Image from 'next/image';
import image from '@/public/imageGroup2.png';
import { LoginForm } from '../LoginForm';

export const BlockMain = () => {
	return (
		<section className={st.container}>
			<h1 className={st.title}>
				ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ
				<br /> НА ТАРИФ, НЕОБХОДИМО
				<br /> АВТОРИЗОВАТЬСЯ.
			</h1>
			<Image className={st.image} src={image} alt="*" priority />
			<LoginForm />
		</section>
	);
};
