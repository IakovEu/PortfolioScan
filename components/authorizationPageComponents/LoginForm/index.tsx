'use client';
import st from './styles.module.scss';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import googleImg from '@/public/google.svg';
import facebookImg from '@/public/facebook.svg';
import yandexImg from '@/public/yandex.svg';
import lockImg from '@/public/lock.svg';
import { sx, toastSettings } from '@/store/staticData';
import axios from 'axios';
import {
	loginValidator,
	passwordValidator,
} from '@/helpers/logAndPassValidators';
import { useDispatch } from 'react-redux';
import { RootDispatch } from '@/store/reducers/store';
import { setTokenData } from '@/store/reducers/authorizationSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const LoginForm = () => {
	const dispatch = useDispatch<RootDispatch>();
	const pathname = usePathname();
	const router = useRouter();
	const [activeBtn, setActiveBtn] = useState<string | null>(null);
	const [password, setPassword] = useState<string>('');
	const [login, setLogin] = useState<string>('');
	const [error, setError] = useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Я показываю, как войти в приложение на вкладке Зарегистрироваться, чтобы любой, без реальных логина и пароля мог войти,
		// но чтобы не показывать реальные данные для входа, я их спрятал и вход осуществляется по выдуманным данным
		const sendData = async () => {
			try {
				if (login === 'bebra1' && password === '000111') {
					const response = await axios.post(
						'https://gateway.scan-interfax.ru/api/v1/account/login',
						{
							login: process.env.APP_LOGIN || process.env.NEXT_PUBLIC_LOGIN,
							password:
								process.env.APP_PASSWORD || process.env.NEXT_PUBLIC_PASSWORD,
						}
					);
					setError(false);
					dispatch(setTokenData(response.data));
					toast('Вы успешно вошли в аккаунт', {
						...toastSettings,
						className: st.notification,
					});
					router.push('/');
				} else {
					setError(true);
				}
			} catch (e) {
				setError(true);
				console.log(e);
			}
		};

		sendData();
	};

	useEffect(() => {
		if (pathname.includes('login')) {
			setActiveBtn('login');
		} else {
			setActiveBtn('register');
		}
	}, [pathname]);

	return (
		<form className={st.form} onSubmit={handleSubmit}>
			<div className={st.topBtns}>
				<Button
					className={clsx(st.loginBtn, {
						[st.choosedForm]: activeBtn === 'login',
					})}
					sx={sx}
					onClick={() => {
						setActiveBtn('login');
					}}>
					Войти
				</Button>
				<Button
					className={clsx(st.registerBtn, {
						[st.choosedForm]: activeBtn === 'register',
					})}
					sx={sx}
					onClick={() => {
						setActiveBtn('register');
					}}>
					Зарегистрироваться
				</Button>
			</div>
			{activeBtn === 'login' ? (
				<>
					<label className={st.firstLabel} htmlFor="tel">
						Логин или номер телефона:
					</label>
					<input
						id="tel"
						className={clsx(st.input, {
							[st.incorrectInput]: loginValidator(login),
						})}
						type="tel"
						value={login}
						onChange={(e) => setLogin(e.target.value)}
					/>
					<p
						className={clsx(st.firstIncorrectValue, {
							[st.activateIncorrectValue]: loginValidator(login),
						})}>
						Введите корректные данные
					</p>
					<label className={st.secondLabel} htmlFor="password">
						Пароль:
					</label>
					<input
						id="password"
						className={clsx(st.input, {
							[st.incorrectInput]: error || passwordValidator(password),
						})}
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<p
						className={clsx(st.secondIncorrectValue, {
							[st.activateIncorrectValue]: error,
						})}>
						Неправильный логин или пароль
					</p>
					<p
						className={clsx(st.thirdIncorrectValue, {
							[st.activateIncorrectValue]:
								!error && passwordValidator(password),
						})}>
						Пароль должен состоять минимум из 6 символов
					</p>
					<Button
						className={st.btnSubmit}
						sx={sx}
						type="submit"
						variant="contained"
						disabled={login.length === 0 || password.length === 0}>
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
				</>
			) : (
				<div className={st.register}>
					Функционал регистрации новых пользователей ещё не был добавлен.
					<br /> <br />
					Логин: bebra1 <br />
					Пароль: 000111
				</div>
			)}
			<Image className={st.lock} src={lockImg} alt="*" />
		</form>
	);
};
