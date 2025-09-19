'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import st from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import leftArrow from '@/public/leftArrow.svg';
import rightArrow from '@/public/rightArrow.svg';
import CircularProgress from '@mui/material/CircularProgress';

export const BlockWithSummary = () => {
	// const getHistograms = async () => {
	// 	const headers = {
	// 		Authorization: `Bearer ${accessToken}`,
	// 	};

	// 	const body = createBody(
	// 		'19.01.2019',
	// 		'29.09.2025',
	// 		7710137066,
	// 		true,
	// 		true,
	// 		true,
	// 		false,
	// 		true,
	// 		true,
	// 		true,
	// 		1000,
	// 		'any'
	// 	);

	// 	try {
	// 		const response = await axios.post(
	// 			'https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms',
	// 			body,
	// 			{ headers }
	// 		);

	// 		console.log(response.data);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	return (
		<section className={st.container}>
			<h2 className={st.subTitle}>ОБЩАЯ СВОДКА</h2>
			<p className={st.underSubTitle}>Найдено {0} вариантов</p>
			<div className={st.swiperContainer}>
				<div className={st.customPrev}>
					<Image src={leftArrow} alt="<—" />
				</div>
				<Swiper
					className={st.carousel}
					slidesPerView={1}
					slidesPerGroup={1}
					loop={true}
					modules={[Navigation]}
					navigation={{
						prevEl: `.${st.customPrev}`,
						nextEl: `.${st.customNext}`,
					}}>
					<div className={st.fixedSlide}>
						<p className={st.categories}>Период</p>
						<p className={st.categories}>Всего</p>
						<p className={st.categories}>Риски</p>
					</div>
					{1 ? (
						<SwiperSlide>
							<CircularProgress className={st.loader} thickness={5} />
							<p className={st.underLoader}>Загружаем данные</p>
						</SwiperSlide>
					) : (
						<>
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
						</>
					)}
				</Swiper>
				<div className={st.customNext}>
					<Image src={rightArrow} alt="—>" />
				</div>
			</div>
		</section>
	);
};
