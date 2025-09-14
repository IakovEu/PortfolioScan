import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import st from './styles.module.scss';

export const DateSelection = () => {
	const [dateTo, setDateTo] = useState<Date | null>(new Date());
	const [dateFrom, setDateFrom] = useState<Date | null>(new Date());

	return (
		<div className={st.chooseDate}>
			<DatePicker
				selected={dateTo}
				onChange={(date) => setDateTo(date)}
				customInput={<CustomInputFrom />}
				dateFormat="dd.MM.yyyy"
				placeholderText="Выберите дату"
			/>
			<DatePicker
				selected={dateFrom}
				onChange={(date) => setDateFrom(date)}
				customInput={<CustomInputTo />}
				dateFormat="dd.MM.yyyy"
				placeholderText="Выберите дату"
			/>
		</div>
	);
};

// Кастомные инпуты (через форвард реф тк по другому библиотека не поддерживает)
const CustomInputFrom = forwardRef<
	HTMLInputElement,
	React.HTMLProps<HTMLInputElement>
>(({ value, onClick, onChange }, ref) => (
	<input
		name="dateFrom"
		className={st.customInput}
		onClick={onClick}
		onChange={onChange}
		value={value}
		ref={ref}
		readOnly
	/>
));

CustomInputFrom.displayName = 'CustomInputFrom';

const CustomInputTo = forwardRef<
	HTMLInputElement,
	React.HTMLProps<HTMLInputElement>
>(({ value, onClick, onChange }, ref) => (
	<input
		name="dateTo"
		className={st.customInput}
		onClick={onClick}
		onChange={onChange}
		value={value}
		ref={ref}
		readOnly
	/>
));

CustomInputTo.displayName = 'CustomInputTo';
