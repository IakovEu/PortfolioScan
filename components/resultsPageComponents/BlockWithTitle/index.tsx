import st from './styles.module.scss';
import Image from 'next/image';
import imageGroup from '@/public/imageGroup4.png';

export const BlockWithTitle = () => {
	return (
		<section className={st.container}>
			<div className={st.titleAndTxt}>
				<h1 className={st.title}>
					ИЩЕМ. СКОРО
					<br /> БУДУТ РЕЗУЛЬТАТЫ
				</h1>
				<p className={st.underTitle}>
					Поиск может занять некоторое время,
					<br /> просим сохранять терпение.
				</p>
			</div>
			<Image className={st.imageGroup} src={imageGroup} alt="*" priority/>
		</section>
	);
};
