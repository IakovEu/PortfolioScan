'use client';
import st from './styles.module.scss';
import Button from '@mui/material/Button';
import { sx } from '@/store/staticData';
import { Tonality } from './tonality';
import { DateSelection } from './dateSelection';
import { Checkboxes } from './checkboxes';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import imageGroupImg from '@/public/imageGroup3.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '@/store/reducers/store';
import { useEffect, useState } from 'react';
import {
	clearPreviousResults,
	setInnAndLimit,
} from '@/store/reducers/searchFormAnswersSlice';
import { innValidator, limitValidator } from '@/helpers/innAndLimitValidators';
import clsx from 'clsx';
import { dateValidator } from '@/helpers/dateValidator';

export const BLockMain = () => {
	const dispatch = useDispatch<RootDispatch>();
	const [inn, setInn] = useState<string | null>(null);
	const [limit, setLimit] = useState<string | null>(null);
	const isAuthorized = useSelector(
		(state: RootState) => state.authorization.isAuthorized
	);
	const sDate = useSelector(
		(state: RootState) => state.searchConfiguration.sDate
	);
	const eDate = useSelector(
		(state: RootState) => state.searchConfiguration.eDate
	);
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (inn && limit && sDate && eDate) {
			if (
				innValidator(inn) &&
				limitValidator(limit) &&
				dateValidator(sDate, eDate)
			) {
				dispatch(
					setInnAndLimit({
						inn: +inn,
						limit: +limit,
					})
				);
				router.push('/results');
			}
		}
	};

	useEffect(() => {
		if (!isAuthorized) {
			router.push('/');
		}
		dispatch(clearPreviousResults());
	}, [dispatch, isAuthorized, router]);

	return (
		<section className={st.container}>
			<form className={st.form} onSubmit={handleSubmit}>
				<div className={st.labelsAndInputs}>
					<label className={st.label} htmlFor="i1">
						ИНН компании
						<span
							className={clsx(st.star, {
								[st.redStar]: inn !== null && !innValidator(inn),
							})}>
							*
						</span>
						{inn !== null && !innValidator(inn) && (
							<p className={st.incorrectValue}>Введите корректные данные</p>
						)}
					</label>
					<input
						onChange={(e) => {
							setInn(e.target.value);
						}}
						className={st.input}
						id="i1"
						name="inn"
						type="text"
						maxLength={10}
						placeholder="10 цифр"
					/>
					<label className={st.label}>Тональность</label>
					<Tonality />
					<label className={st.label} htmlFor="i3">
						Количество документов в выдаче
						<span
							className={clsx(st.star, {
								[st.redStar]:
									(limit !== null && !limitValidator(limit)) ||
									(limit !== null && limit.length === 0),
							})}>
							*
						</span>
						{limit !== null && limit.length === 0 && (
							<p className={st.oneMoreIncrorrectValue}>Обязательное поле</p>
						)}
						{limit !== null && !limitValidator(limit) && (
							<p className={st.incorrectValue}>Введите корректные данные</p>
						)}
					</label>
					<input
						onChange={(e) => {
							setLimit(e.target.value);
						}}
						className={st.input}
						id="i3"
						name="limit"
						type="number"
						min={1}
						placeholder="От 1 до 1000"
						style={{ marginBottom: '39px' }}
					/>
					<label className={st.label}>
						Диапазон поиска
						<span
							className={clsx(st.star, {
								[st.redStar]: sDate && eDate && !dateValidator(sDate, eDate),
							})}>
							*
						</span>
						{sDate && eDate && !dateValidator(sDate, eDate) && (
							<p className={st.anotherIncorrectValue}>
								Введите корректные данные
							</p>
						)}
					</label>
					<DateSelection />
				</div>
				<div className={st.checkboxAndSubmit}>
					<Checkboxes />
					<div className={st.btnContainer}>
						<Button
							className={st.submitBtn}
							type="submit"
							variant="contained"
							sx={sx}
							disabled={
								!innValidator(inn) ||
								!limitValidator(limit) ||
								!dateValidator(sDate, eDate)
							}>
							Поиск
						</Button>
					</div>
					<p className={st.underBtn}>* Обязательные к заполнению поля</p>
				</div>
			</form>
			<Image className={st.imageGroup} src={imageGroupImg} alt="*" priority />
		</section>
	);
};
