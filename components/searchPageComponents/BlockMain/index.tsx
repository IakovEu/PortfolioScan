'use client';
import st from './styles.module.scss';
import Button from '@mui/material/Button';
import { sx } from '@/staticData';
import { Tonality } from './tonality';
import { DateSelection } from './dateSelection';
import { Checkboxes } from './checkboxes';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import imageGroupImg from '@/public/imageGroup3.png';

export const BLockMain = () => {
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		router.push('/results');

		for (const entry of formData.entries()) {
			const [key, value] = entry;
			console.log(`${key}: ${value}`);
		}
	};

	return (
		<section className={st.container}>
			<form className={st.form} onSubmit={handleSubmit}>
				<div className={st.labelsAndInputs}>
					<label className={st.label} htmlFor="i1">
						ИНН компании<span className={st.star}>*</span>
						{/* <p className={st.incorrectValue}>Введите корректные данные</p> */}
					</label>
					<input
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
						Количество документов в выдаче<span className={st.star}>*</span>
						{/* <p className={st.incorrectValue}>Введите корректные данные</p> */}
					</label>
					<input
						className={st.input}
						id="i3"
						name="docCount"
						type="number"
						min={1}
						placeholder="От 1 до 1000"
						style={{ marginBottom: '39px' }}
					/>
					<label className={st.label}>
						Диапазон поиска<span className={st.star}>*</span>
						{/* <p className={st.anotherIncorrectValue}>
							Введите корректные данные
						</p> */}
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
							sx={sx}>
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
