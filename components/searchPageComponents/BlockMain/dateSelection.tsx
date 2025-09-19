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

export const DateSelection = () => {
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
				customInput={<CustomInputFrom rotate={isOpenFrom} />}
				dateFormat="dd.MM.yyyy"
				calendarClassName={st.castomCalendar}
				popperPlacement="top-start"
				onCalendarOpen={() => setIsOpenFrom(true)}
				onCalendarClose={() => setIsOpenFrom(false)}
			/>

			<DatePicker
				selected={dateTo}
				onChange={(date) => {
					dispatch(setEDate(formatDateToDDMMYYYY(date)));
					setDateTo(date);
				}}
				customInput={<CustomInputTo rotate={isOpenTo} />}
				dateFormat="dd.MM.yyyy"
				calendarClassName={st.castomCalendar}
				popperPlacement="top-start"
				onCalendarOpen={() => setIsOpenTo(true)}
				onCalendarClose={() => setIsOpenTo(false)}
			/>
		</div>
	);
};

interface CustomInputProps extends React.HTMLProps<HTMLInputElement> {
	rotate: boolean;
}

const CustomInputFrom = forwardRef<HTMLInputElement, CustomInputProps>(
	({ value, onClick, onChange, rotate }, ref) => (
		<>
			<input
				name="sDate"
				className={st.customInput}
				onClick={onClick}
				onChange={onChange}
				value={value}
				ref={ref}
				readOnly
				placeholder="Дата начала"
				style={{ marginRight: '20px' }}
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
	({ value, onClick, onChange, rotate }, ref) => (
		<>
			<input
				name="eDate"
				className={st.customInput}
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
