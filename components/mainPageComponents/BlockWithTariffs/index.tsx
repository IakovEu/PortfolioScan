'use client';
import clsx from 'clsx';
import st from './styles.module.scss';
import Image from 'next/image';
import checkMark from '@/public/checkMark.svg';
import Button from '@mui/material/Button';
import { dataCards, sx } from '@/store/staticData';
import { RootState } from '@/store/reducers/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export const BlockWithTariffs = () => {
	const router = useRouter();
	const isAuthorized = useSelector(
		(state: RootState) => state.authorization.isAuthorized
	);
	const activeTariff = useSelector(
		(state: RootState) => state.authorization.activeTariff
	);

	return (
		<section>
			<h2 className={st.subTitle}>НАШИ ТАРИФЫ</h2>
			<div className={st.cards}>
				{dataCards.map((el, ind) => {
					return (
						<div
							className={clsx(st.card, {
								[st[el.activeStyle]]: activeTariff === ind && isAuthorized,
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
								{activeTariff === ind && isAuthorized ? (
									<Button
										className={st.activeBtn}
										variant="contained"
										sx={sx}
										onClick={() => {
											router.push('/account');
										}}>
										Перейти в личный кабинет
									</Button>
								) : (
									<Button className={st.defaultBtn} variant="contained" sx={sx}>
										Подробнее
									</Button>
								)}
							</div>
							{activeTariff === ind && isAuthorized && (
								<div className={st.currentTariff}>Текущий тариф</div>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
};
