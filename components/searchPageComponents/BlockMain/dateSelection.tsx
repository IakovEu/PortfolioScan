import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import st from './styles.module.scss';
import Image from 'next/image';
import rectangleIcon from '@/public/rectangleIcon.svg';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { RootDispatch } from '@/store/reducers/store';
import { setEDate, setSDate } from '@/store/reducers/searchFormAnswersSlice';
import { dateValidator } from '@/helpers/dateValidator';

export const DateSelection = ({
	sDate,
	eDate,
}: {
	sDate: string;
	eDate: string;
}) => {
	const dispatch = useDispatch<RootDispatch>();
	const [dateTo, setDateTo] = useState<Date | null>(null);
	const [dateFrom, setDateFrom] = useState<Date | null>(null);
	const [isOpenFrom, setIsOpenFrom] = useState(false);
	const [isOpenTo, setIsOpenTo] = useState(false);

	const formatDateToDDMMYYYY = (date: Date | null) => {
		if (date) {
			const day = date.getDate().toString().padStart(2, '0');
			const month = (date.getMonth() + 1).toString().padStart(2, '0');
			const year = date.getFullYear();
			return `${day}.${month}.${year}`;
		}
	};

	return (
		<div className={st.chooseDate}>
			<DatePicker
				selected={dateFrom}
				onChange={(date) => {
					dispatch(setSDate(formatDateToDDMMYYYY(date)));
					setDateFrom(date);
				}}
				customInput={
					<CustomInputFrom rotate={isOpenFrom} sDate={sDate} eDate={eDate} />
				}
				dateFormat="dd.MM.yyyy"
				calendarClassName={st.castomCalendar}
				onCalendarOpen={() => setIsOpenFrom(true)}
				onCalendarClose={() => setIsOpenFrom(false)}
			/>

			<DatePicker
				selected={dateTo}
				onChange={(date) => {
					dispatch(setEDate(formatDateToDDMMYYYY(date)));
					setDateTo(date);
				}}
				customInput={
					<CustomInputTo rotate={isOpenTo} sDate={sDate} eDate={eDate} />
				}
				dateFormat="dd.MM.yyyy"
				calendarClassName={st.castomCalendar}
				onCalendarOpen={() => setIsOpenTo(true)}
				onCalendarClose={() => setIsOpenTo(false)}
			/>
		</div>
	);
};

interface CustomInputProps extends React.HTMLProps<HTMLInputElement> {
	rotate: boolean;
	sDate?: string;
	eDate?: string;
}

const CustomInputFrom = forwardRef<HTMLInputElement, CustomInputProps>(
	({ value, onClick, onChange, rotate, sDate, eDate }, ref) => (
		<>
			<input
				name="sDate"
				className={clsx(st.customInput, st.customLeftInput, {
					[st.incorrectCustomInput]:
						sDate && eDate && !dateValidator(sDate, eDate),
				})}
				onClick={onClick}
				onChange={onChange}
				value={value}
				ref={ref}
				readOnly
				placeholder="Дата начала"
			/>
			<Image
				className={clsx(st.firstrectangle, { [st.rotateRectangle]: rotate })}
				src={rectangleIcon}
				alt="треугольник"
			/>
		</>
	)
);
CustomInputFrom.displayName = 'CustomInputFrom';

const CustomInputTo = forwardRef<HTMLInputElement, CustomInputProps>(
	({ value, onClick, onChange, rotate, sDate, eDate }, ref) => (
		<>
			<input
				name="eDate"
				className={clsx(st.customInput, {
					[st.incorrectCustomInput]:
						sDate && eDate && !dateValidator(sDate, eDate),
				})}
				onClick={onClick}
				onChange={onChange}
				value={value}
				ref={ref}
				readOnly
				placeholder="Дата конца"
			/>
			<Image
				className={clsx(st.secondRectangle, { [st.rotateRectangle]: rotate })}
				src={rectangleIcon}
				alt="треугольник"
			/>
		</>
	)
);
CustomInputTo.displayName = 'CustomInputTo';
