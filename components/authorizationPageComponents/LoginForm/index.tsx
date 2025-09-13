'use client';
import st from './styles.module.scss';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import googleImg from '@/public/google.svg';
import facebookImg from '@/public/facebook.svg';
import yandexImg from '@/public/yandex.svg';
import lockImg from '@/public/lock.svg';

export const LoginForm = () => {
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const activeForm: string = 'login';
	const sx = {
		textTransform: 'none',
		fontFamily: 'inter',
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form className={st.form} onSubmit={handleSubmit}>
			<div className={st.topBtns}>
				<Button
					className={clsx(st.login, {
						[st.choosedForm]: activeForm === 'login',
					})}
					sx={sx}>
					Войти
				</Button>
				<Button
					className={clsx(st.register, {
						[st.choosedForm]: activeForm === 'register',
					})}
					sx={sx}>
					Зарегистрироваться
				</Button>
			</div>
			<label className={st.firstLabel} htmlFor="tel">
				Логин или номер телефона:
			</label>
			<input
				id="tel"
				className={clsx(st.input, {
					[st.incorrectInput]: 0,
				})}
				type="tel"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>
			<p
				className={clsx(st.firstIncorrectValue, {
					[st.activateIncorrectValue]: 0,
				})}>
				Введите корректные данные
			</p>
			<label className={st.secondLabel} htmlFor="password">
				Пароль:
			</label>
			<input
				id="password"
				className={clsx(st.input, {
					[st.incorrectInput]: 0,
				})}
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<p
				className={clsx(st.secondIncorrectValue, {
					[st.activateIncorrectValue]: 0,
				})}>
				Неправильный пароль
			</p>
			<Button
				className={st.btnSubmit}
				sx={sx}
				type="submit"
				variant="contained"
				disabled={true}>
				Войти
			</Button>
			<div className={st.linkRecoverContainer}>
				<Link className={st.linkRecover} href="/password-recover">
					Восстановить пароль
				</Link>
			</div>
			<p className={st.alternativeLogin}>Войти через:</p>
			<div className={st.bottomBtns}>
				<Button className={st.altLoginBtn}>
					<Image src={googleImg} alt="*" />
				</Button>
				<Button className={st.altLoginBtn}>
					<Image src={facebookImg} alt="*" />
				</Button>
				<Button className={st.altLoginBtn}>
					<Image src={yandexImg} alt="*" />
				</Button>
			</div>
			<Image className={st.lock} src={lockImg} alt="*" />
		</form>
	);
};
