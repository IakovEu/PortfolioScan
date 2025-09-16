'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import st from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { carouselIcons, carouselTxt } from '@/store/staticData';

export const Slider = () => {
	return (
		<Swiper
			className={st.carousel}
			spaceBetween={35}
			slidesPerView={3}
			slidesPerGroup={3}
			loop={true}
			modules={[Navigation]}
			navigation={{
				prevEl: `.${st.customPrev}`,
				nextEl: `.${st.customNext}`,
			}}>
			{carouselIcons.map((el, ind) => {
				return (
					<SwiperSlide className={st.slide} key={ind}>
						<Image className={st.slideImage} src={el} alt="*" />
						<p
							className={st.sliderTxt}
							dangerouslySetInnerHTML={{ __html: carouselTxt[ind] }}
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
