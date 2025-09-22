import st from './styles.module.scss';
import Image from 'next/image';
import leftArrow from '@/public/leftArrow.svg';
import rightArrow from '@/public/rightArrow.svg';
import { Slider } from './slider';

export const BlockWithCarousel = () => {
	return (
		<section className={st.container}>
			<h2 className={st.subTitle}>ПОЧЕМУ ИМЕННО МЫ</h2>
			<div className={st.threeSlides}>
				<Slider amount={3} prev="customPrev" next="customNext" />
				<div className={st.customPrev}>
					<Image src={leftArrow} alt="<—" />
				</div>
				<div className={st.customNext}>
					<Image src={rightArrow} alt="—>" />
				</div>
			</div>
			<div className={st.twoSlides}>
				<Slider amount={2} prev="customPrev2" next="customNext2" />
				<div className={st.customPrev2}>
					<Image src={leftArrow} alt="<—" />
				</div>
				<div className={st.customNext2}>
					<Image src={rightArrow} alt="—>" />
				</div>
			</div>
			<div className={st.oneSlide}>
				<Slider amount={1} prev="customPrev3" next="customNext3" />
				<div className={st.customPrev3}>
					<Image src={leftArrow} alt="<—" />
				</div>
				<div className={st.customNext3}>
					<Image src={rightArrow} alt="—>" />
				</div>
			</div>
		</section>
	);
};
