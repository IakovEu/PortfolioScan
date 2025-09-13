'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import st from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import firstIcon from '@/public/firstIconSlider.svg';
import secondIcon from '@/public/secondIconSlider.svg';
import thirdIcon from '@/public/thirdIconSlider.svg';
import iconFour from '@/public/dancer.svg';
import iconFive from '@/public/somersault.svg';
import iconSix from '@/public/somersaultBack.svg';

export const Slider = () => {
	const imagesArr = [
		firstIcon,
		secondIcon,
		thirdIcon,
		iconFour,
		iconFive,
		iconSix,
	];
	const txt = [
		'Высокая и оперативная скорость <br /> обработки заявки',
		'Огромная комплексная база <br /> данных, обеспечивающая <br /> объективный ответ на запрос',
		'Защита конфеденциальных сведений, <br /> не подлежащих разглашению по <br />федеральному законодательству',
		'Могу крутиться вокруг своей оси <br />Могу долго крутиться <br />Могу ооочень долго крутиться',
		'Хоба, кувырок вперед, безумный трюк',
		'А это, не ну вы не поверите, <br /> это не ну это короче ээээ кувырок назад',
	];

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
			{imagesArr.map((el, ind) => {
				return (
					<SwiperSlide className={st.slide} key={ind}>
						<Image className={st.slideImage} src={el} alt="*" />
						<p
							className={st.sliderTxt}
							dangerouslySetInnerHTML={{ __html: txt[ind] }}
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
