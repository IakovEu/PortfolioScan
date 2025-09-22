import st from './styles.module.scss';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import rectangleIcon from '@/public/rectangleIcon.svg';
import clsx from 'clsx';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { RootDispatch } from '@/store/reducers/store';
import { setTonality } from '@/store/reducers/searchFormAnswersSlice';

export const Tonality = () => {
	const dispatch = useDispatch<RootDispatch>();
	const [ton, setTon] = useState('Любая');
	const [rotate, setRotate] = useState(false);

	const handleChange = (event: SelectChangeEvent) => {
		setTon(event.target.value);
		dispatch(setTonality(event.target.value));
	};

	return (
		<div className={st.inputTonality}>
			<Box sx={{ minWidth: 120, mb: '30px' }}>
				<FormControl fullWidth variant="outlined">
					<Select
						name="tonality"
						value={ton}
						onChange={handleChange}
						onClick={() => setRotate((prev) => !prev)}
						MenuProps={{ disableScrollLock: true }}
						variant="outlined"
						IconComponent={(props) => (
							<CustomArrowIcon {...props} rotate={rotate} />
						)}
						sx={{
							// width: 	,
							height: 43,
							'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
								borderColor: '#029491',
								borderWidth: 1,
							},
						}}>
						<MenuItem value={'Позитивная'}>Позитивная</MenuItem>
						<MenuItem value={'Негативная'}>Негативная</MenuItem>
						<MenuItem value={'Любая'}>Любая</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
};

const CustomArrowIcon = (props: { className?: string; rotate?: boolean }) => {
	const rotate = false;

	return (
		<Image
			className={clsx(props.className, {
				[st.rotateRectangle]: rotate,
			})}
			style={{
				position: 'absolute',
				top: '15px',
				right: '16px',
				zIndex: -1,
			}}
			src={rectangleIcon}
			alt="треугольник"
		/>
	);
};
