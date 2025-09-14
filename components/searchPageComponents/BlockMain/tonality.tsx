import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export const Tonality = () => {
	const [ton, setTon] = useState('Любая');

	const handleChange = (event: SelectChangeEvent) => {
		setTon(event.target.value as string);
	};

	return (
		<Box sx={{ minWidth: 120, mb: '30px' }}>
			<FormControl fullWidth variant="outlined">
				<Select
					name="tonality"
					value={ton}
					onChange={handleChange}
					MenuProps={{ disableScrollLock: true }}
					variant="outlined"
					sx={{
						width: 242,
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
	);
};
