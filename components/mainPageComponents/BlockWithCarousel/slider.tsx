'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import st from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { carouselIcons, carouselTxt } from '@/store/staticData';

export const Slider = ({
	amount,
	prev,
	next,
}: {
	amount: number;
	prev: string;
	next: string;
}) => {
	return (
		<Swiper
			className={st.carousel}
			spaceBetween={35}
			slidesPerView={amount}
			slidesPerGroup={amount}
			loop={true}
			modules={[Navigation]}
			navigation={{
				prevEl: `.${st[prev]}`,
				nextEl: `.${st[next]}`,
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
