'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import st from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import leftArrow from '@/public/leftArrow.svg';
import rightArrow from '@/public/rightArrow.svg';

export const BlockWithSummary = () => {
	return (
		<section className={st.container}>
			<h2 className={st.subTitle}>ОБЩАЯ СВОДКА</h2>
			<p className={st.underSubTitle}>Найдено {0} вариантов</p>
			<div className={st.swiperContainer}>
				<div className={st.fixedSlide}>
					<p className={st.categories}>Период</p>
					<p className={st.categories}>Всего</p>
					<p className={st.categories}>Риски</p>
				</div>
				<div className={st.customPrev}>
					<Image src={leftArrow} alt="<—" />
				</div>
				<Swiper
					className={st.carousel}
					spaceBetween={0}
					slidesPerView={3}
					slidesPerGroup={3}
					loop={true}
					modules={[Navigation]}
					navigation={{
						prevEl: `.${st.customPrev}`,
						nextEl: `.${st.customNext}`,
					}}>
					<SwiperSlide className={st.slide}>
						<p className={st.slideCategories}>дата</p>
						<p className={st.slideCategories}>0</p>
						<p className={st.slideCategories}>0</p>
					</SwiperSlide>
					<SwiperSlide className={st.slide}>
						<p className={st.slideCategories}>дата</p>
						<p className={st.slideCategories}>0</p>
						<p className={st.slideCategories}>0</p>
					</SwiperSlide>
					<SwiperSlide className={st.slide}>
						<p className={st.slideCategories}>дата</p>
						<p className={st.slideCategories}>0</p>
						<p className={st.slideCategories}>0</p>
					</SwiperSlide>
					<SwiperSlide className={st.slide}>
						<p className={st.slideCategories}>дата</p>
						<p className={st.slideCategories}>0</p>
						<p className={st.slideCategories}>0</p>
					</SwiperSlide>
				</Swiper>
				<div className={st.customNext}>
					<Image src={rightArrow} alt="—>" />
				</div>
			</div>
		</section>
	);
};
