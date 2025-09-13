import clsx from 'clsx';
import st from './styles.module.scss';
import Image from 'next/image';
import lamp from '@/public/lampIcon.png';
import target from '@/public/targetIcon.png';
import laptop from '@/public/laptopIcon.png';
import checkMark from '@/public/checkMark.svg';
import Button from '@mui/material/Button';

export const BlockWithTariffs = () => {
	const active = 0;

	const dataCards = [
		{
			cardTop: 'firstCardTop',
			name: 'Beginner',
			underName: 'Для небольшого исследования',
			icon: 'firstIcon',
			src: lamp,
			price: { normal: '799 ₽', crossed: '1 200 ₽' },
			perMonth: 150,
			firstPoint: 'Безлимитная история запросов',
			secondPoint: 'Безопасная сделка',
			thirdPoint: 'Поддержка 24/7',
			activeStyle: 'activeFirstCard',
		},
		{
			cardTop: 'secondCardTop',
			name: 'Pro',
			underName: 'Для HR и фрилансеров',
			icon: 'secondIcon',
			src: target,
			price: { normal: '1 299 ₽', crossed: '2 600 ₽' },
			perMonth: 279,
			firstPoint: 'Все пункты тарифа Beginner',
			secondPoint: 'Экспорт истории',
			thirdPoint: 'Рекомендации по приоритетам',
			activeStyle: 'activeSecondCard',
		},
		{
			cardTop: 'thirdCardTop',
			name: 'Business',
			underName: 'Для корпоративных клиентов',
			icon: 'thirdIcon',
			src: laptop,
			price: { normal: '2 379 ₽', crossed: '3 700 ₽' },
			perMonth: 150,
			firstPoint: 'Все пункты тарифа Pro',
			secondPoint: 'Безлимитное количество запросов',
			thirdPoint: 'Приоритетная поддержка',
			activeStyle: 'activeThirdCard',
		},
	];

	return (
		<section>
			<h2 className={st.subTitle}>НАШИ ТАРИФЫ</h2>
			<div className={st.cards}>
				{dataCards.map((el, ind) => {
					return (
						<div
							className={clsx(st.card, {
								[st[el.activeStyle]]: active === ind,
							})}
							key={ind}>
							<div className={clsx(st.cardTop, st[el.cardTop])}>
								<h3 className={st.name}>{el.name}</h3>
								<p className={st.underName}>{el.underName}</p>
								<Image className={st[el.icon]} src={el.src} alt="*" />
							</div>
							<div className={st.cardBody}>
								<h3 className={st.price}>
									{el.price.normal}
									<del className={st.crossedPrice}>{el.price.crossed}</del>
								</h3>
								<p
									className={clsx(st.underPrice, {
										[st.makeInvisible]: ind === 2,
									})}>
									или {el.perMonth} ₽/мес. при рассрочке на 24 мес.
								</p>
								<h4 className={st.inTariff}>В тариф входит:</h4>
								<div className={st.tariffPoints}>
									<Image src={checkMark} alt="*" />
									<p className={st.tariffPoint}>{el.firstPoint}</p>
								</div>
								<div className={st.tariffPoints}>
									<Image src={checkMark} alt="*" />
									<p className={st.tariffPoint}>{el.secondPoint}</p>
								</div>
								<div className={st.tariffPoints}>
									<Image src={checkMark} alt="*" />
									<p className={st.tariffPoint}>{el.thirdPoint}</p>
								</div>
							</div>
							<div className={st.btnBlock}>
								{active === ind ? (
									<Button
										className={st.activeBtn}
										variant="contained"
										sx={{
											textTransform: 'none',
											fontFamily: 'inter',
										}}>
										Перейти в личный кабинет
									</Button>
								) : (
									<Button
										className={st.defaultBtn}
										variant="contained"
										sx={{
											textTransform: 'none',
											fontFamily: 'inter',
										}}>
										Подробнее
									</Button>
								)}
							</div>
							{active === ind && (
								<div className={st.currentTariff}>Текущий тариф</div>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
};
