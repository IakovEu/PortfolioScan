import st from './styles.module.scss';
import Link from 'next/link';
import { Button } from '@mui/material';
import { sx } from '@/staticData';

export const BlockMain = () => {
	return (
		<section className={st.container}>
			<h2 className={st.subTitle}>СПИСОК ДОКУМЕНТОВ</h2>
			<div className={st.list}>
				<div className={st.listItem}>
					<p className={st.date}>
						Дата
						<Link className={st.publisher} href="/">
							Источник
						</Link>
					</p>
					<h3 className={st.itemTitle}>
						Скиллфэктори - лучшая онлайн-школа для будущих айтишников
					</h3>
					<span className={st.underItemTitle}>Технические новости</span>
					<div className={st.blockWithImg}></div>
					<p className={st.txtContent}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
						deserunt libero nihil expedita dolore quia id quaerat quisquam
						aperiam reiciendis illum ipsa impedit minus, fugiat blanditiis,
						voluptates aspernatur consectetur et? Voluptatum laudantium quaerat,
						natus accusamus iure quia officiis pariatur excepturi ea, eaque ad
						porro ipsam. Saepe, praesentium! Quisquam numquam nisi perspiciatis
						blanditiis id iste sed? Recusandae laboriosam consectetur architecto
					</p>
					<div className={st.linkAndWords}>
						<Link className={st.link} href="/">
							Читать в источнике
						</Link>
						<p className={st.wordsAmount}>2 слова</p>
					</div>
				</div>
			</div>
			<div className={st.btnContainer}>
				<Button className={st.btnShowMore} sx={sx} variant="contained">
					Показать больше
				</Button>
			</div>
		</section>
	);
};
