import st from './styles.module.scss';
import Image from 'next/image';
import leftArrow from '@/public/leftArrow.svg';
import rightArrow from '@/public/rightArrow.svg';
import { Slider } from './slider';

export const BlockWithCarousel = () => {
	return (
		<section className={st.container}>
			<h2 className={st.subTitle}>ПОЧЕМУ ИМЕННО МЫ</h2>
			<div className={st.customPrev}>
				<Image src={leftArrow} alt="<—" />
			</div>
			<div className={st.customNext}>
				<Image src={rightArrow} alt="—>" />
			</div>
			<Slider />
		</section>
	);
};
