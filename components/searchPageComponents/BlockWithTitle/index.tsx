import st from './styles.module.scss';
import Image from 'next/image';
import documentImg from '@/public/document.png';
import foldersImg from '@/public/folders.png';

export const BlockWithTitle = () => {
	return (
		<section className={st.container}>
			<div className={st.titleAndImages}>
				<h1 className={st.title}>
					НАЙДИТЕ НЕОБХОДИМЫЕ
					<br /> ДАННЫЕ В ПАРУ КЛИКОВ.
				</h1>
				<p className={st.underTitle}>
					Задайте параметры поиска.
					<br />
					Чем больше заполните, тем точнее поиск
				</p>
				<Image className={st.document} src={documentImg} alt="*" priority />
				<Image className={st.folders} src={foldersImg} alt="*" priority />
			</div>
		</section>
	);
};
