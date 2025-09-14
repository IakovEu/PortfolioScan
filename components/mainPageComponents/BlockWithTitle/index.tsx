'use client';
import st from './styles.module.scss';
import Image from 'next/image';
import image from '@/public/mainPage-1.png';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { sx } from '@/staticData';

export const BlockWithTitle = () => {
	const router = useRouter();

	return (
		<section className={st.container}>
			<div>
				<h1 className={st.title}>
					СЕРВИС ПО ПОИСКУ <br /> ПУБЛИКАЦИЙ <br />О КОМПАНИИ <br />
					ПО ЕГО ИНН
				</h1>
				<p className={st.txt}>
					Комплексный анализ публикаций, получение данных <br /> в формате PDF
					на электронную почту.
				</p>
				<Button
					className={st.requestBtn}
					variant="contained"
					sx={sx}
					onClick={() => {
						router.push('/search');
					}}>
					Запросить данные
				</Button>
			</div>
			<Image className={st.image} src={image} alt="*" priority />
		</section>
	);
};
