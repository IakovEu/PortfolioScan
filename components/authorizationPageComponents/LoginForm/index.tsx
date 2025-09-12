'use client';
import st from './styles.module.scss';
import { useState } from 'react';

export const LoginForm = () => {
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '300px', // можно настроить по необходимости
				gap: '10px', // промежутки между элементами
			}}>
			<label>
				Телефон
				<input
					type="tel"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					style={{ padding: '8px', marginTop: '4px' }}
					placeholder="+7 (___) ___-__-__"
				/>
			</label>
			<label>
				Пароль
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					style={{ padding: '8px', marginTop: '4px' }}
					placeholder="Введите пароль"
				/>
			</label>
			<button type="submit" style={{ padding: '10px' }}>
				Войти
			</button>
		</form>
	);
};
