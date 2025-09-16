import clsx from 'clsx';
import st from './styles.module.scss';
import Image from 'next/image';
import checkMark from '@/public/checkMark.svg';
import Button from '@mui/material/Button';
import { dataCards, sx } from '@/store/staticData';

export const BlockWithTariffs = () => {
	const active = 0;
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
									<Button className={st.activeBtn} variant="contained" sx={sx}>
										Перейти в личный кабинет
									</Button>
								) : (
									<Button className={st.defaultBtn} variant="contained" sx={sx}>
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
