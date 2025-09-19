import React, { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import { dataCheckboxes } from '@/store/staticData';
import { useDispatch } from 'react-redux';
import { RootDispatch } from '@/store/reducers/store';
import { setCheckboxes } from '@/store/reducers/searchFormAnswersSlice';

export const Checkboxes = () => {
	const dispatch = useDispatch<RootDispatch>();
	const initiallyUnchecked = new Set([3, 4, 6]);
	const [checkedState, setCheckedState] = useState(() =>
		dataCheckboxes.map((_, ind) => (initiallyUnchecked.has(ind) ? false : true))
	);

	const handleChange =
		(index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const newCheckedState = [...checkedState];
			newCheckedState[index] = event.target.checked;
			setCheckedState(newCheckedState);
		};

	useEffect(() => {
		dispatch(setCheckboxes(checkedState));
	}, [checkedState, dispatch]);

	return (
		<div>
			{dataCheckboxes.map((el, ind) => {
				return (
					<FormControlLabel
						key={ind}
						control={
							<Checkbox
								name={el[1]}
								checked={checkedState[ind]}
								onChange={handleChange(ind)}
								icon={<CustomIcon checked={false} />}
								checkedIcon={
									<CustomCheckedIcon checked={true}>
										<CheckIcon />
									</CustomCheckedIcon>
								}
								sx={{
									width: 20,
									height: 20,
									padding: 0,
									marginTop: '15px',
								}}
							/>
						}
						label={el[0]}
						sx={{
							'& .MuiFormControlLabel-label': {
								fontFamily: 'inter',
								fontSize: 18,
								margin: '15px 0 0 17px',
								whiteSpace: 'nowrap',
								height: '22px',
								color: checkedState[ind] ? '#000000' : '#949494',
							},
						}}
					/>
				);
			})}
		</div>
	);
};

interface CustomIconProps {
	checked?: boolean;
}

// Кастомная иконка для unchecked
const CustomIcon = styled('span')<CustomIconProps>(({ checked }) => ({
	width: 20,
	height: 20,
	border: `1px solid ${checked ? '#000000' : '#949494'}`,
	display: 'block',
	transition: 'all 0.2s ease',
}));

// Кастомная иконка для checked (с галочкой)
const CustomCheckedIcon = styled(CustomIcon)<CustomIconProps>(() => ({
	position: 'relative',
	backgroundColor: 'white',
	border: '1px solid #000000',
	'& svg': {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 18,
		height: 18,
		color: 'green',
	},
}));
