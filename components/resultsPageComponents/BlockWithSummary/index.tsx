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
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '@/store/reducers/store';
import { createBody } from '@/helpers/createBodyForRequest';
import axios from 'axios';
import { useEffect } from 'react';
import { setHistogram } from '@/store/reducers/histogramSlice';
import { formatDateToDDMMYY } from '@/helpers/dateValidator';
import { setIds } from '@/store/reducers/idSlice';

export const BlockWithSummary = () => {
	const dispatch = useDispatch<RootDispatch>();
	const isEmptyIds = useSelector((state: RootState) => state.ids.isEmpty);
	const isEmptyHistogram = useSelector(
		(state: RootState) => state.histogram.isEmpty
	);
	const accessToken = useSelector(
		(state: RootState) => state.authorization.accessToken
	);
	const configuration = useSelector(
		(state: RootState) => state.searchConfiguration
	);
	const total = useSelector((state: RootState) => state.histogram.total);
	const withRisk = useSelector((state: RootState) => state.histogram.withRisk);
	const headers = {
		Authorization: `Bearer ${accessToken}`,
	};
	const body = createBody({ ...configuration, ...configuration.checkboxes });

	const getHistograms = async () => {
		try {
			const response = await axios.post(
				'https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms',
				body,
				{ headers }
			);
			dispatch(setHistogram(response.data.data));
		} catch (e) {
			console.log(e);
		}
	};

	const getIds = async () => {
		try {
			const response = await axios.post(
				'https://gateway.scan-interfax.ru/api/v1/objectsearch',
				body,
				{ headers }
			);
			dispatch(setIds(response.data.items));
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (isEmptyHistogram) {
			getHistograms();
		}
		if (isEmptyIds) {
			getIds();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isEmptyHistogram]);

	return (
		<section className={st.container}>
			<h2 className={st.subTitle}>ОБЩАЯ СВОДКА</h2>
			{total === null ? (
				<p className={st.underSubTitle}>Информация загружается...</p>
			) : (
				<p className={st.underSubTitle}>
					Найдено {total.length}{' '}
					{total.length > 4
						? 'вариантов'
						: total.length === 1
						? 'вариант'
						: 'варианта'}
				</p>
			)}
			<div className={st.swiperContainer}>
				<div className={st.customPrev}>
					<Image src={leftArrow} alt="<—" />
				</div>
				<Swiper
					className={st.carousel}
					slidesPerView={
						!total || !withRisk ? 1 : total.length > 5 ? 5 : total.length
					}
					slidesPerGroup={
						!total || !withRisk ? 1 : total.length > 5 ? 5 : total.length
					}
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
					{!total || !withRisk ? (
						<SwiperSlide>
							<CircularProgress className={st.loader} thickness={5} />
							<p className={st.underLoader}>Загружаем данные</p>
						</SwiperSlide>
					) : (
						total.map((el, ind) => {
							return (
								<SwiperSlide className={st.slide} key={ind}>
									<p className={st.slideCategories}>
										{formatDateToDDMMYY(el.date)}
									</p>
									<p className={st.slideCategories}>{el.value}</p>
									<p className={st.slideCategories}>{withRisk[ind].value}</p>
								</SwiperSlide>
							);
						})
					)}
				</Swiper>
				<div className={st.customNext}>
					<Image src={rightArrow} alt="—>" />
				</div>
			</div>
		</section>
	);
};
