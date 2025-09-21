'use client';
import st from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { sx } from '@/store/staticData';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '@/store/reducers/store';
import {
	clearUsedAndLimit,
	deleteTokenData,
	setUsedAndLimit,
} from '@/store/reducers/authorizationSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import axios from 'axios';

export const Header = () => {
	const dispatch = useDispatch<RootDispatch>();
	const isAuthorized = useSelector(
		(state: RootState) => state.authorization.isAuthorized
	);
	const accessToken = useSelector(
		(state: RootState) => state.authorization.accessToken
	);
	const usedCompanies = useSelector(
		(state: RootState) => state.authorization.usedCompanies
	);
	const limitCompanies = useSelector(
		(state: RootState) => state.authorization.limitCompanies
	);
	const router = useRouter();

	useEffect(() => {
		const sendData = async () => {
			if (accessToken.length !== 0 && limitCompanies === null) {
				try {
					const response = await axios.get(
						'https://gateway.scan-interfax.ru/api/v1/account/info',
						{
							headers: {
								Authorization: `Bearer ${accessToken}`,
							},
						}
					);
					// Как я понял, задумывалось, чтобы эта проверка выполнялась на сервере, но этого не проиходит,
					// поэтому ограничивать запросы пользователя для текущей сессии по одному токену буду я
					dispatch(setUsedAndLimit(response.data.eventFiltersInfo));
				} catch (e) {
					console.error(e);
				}
			}
		};

		sendData();
	}, [accessToken, dispatch, limitCompanies]);

	return (
		<header>
			<div className={st.container}>
				<Link href="/">
					<Image className={st.logo} src={logo} alt="logo" priority />
				</Link>
				<nav className={st.links}>
					<Link className={st.link} href="/">
						Главная
					</Link>
					<Link className={st.link} href="/tariffs">
						Тарифы
					</Link>
					<Link className={st.link} href="/FAQ">
						FAQ
					</Link>
				</nav>
				{isAuthorized ? (
					<div className={st.limitAndAuthorized}>
						<div className={st.limit}>
							{limitCompanies || usedCompanies ? (
								<>
									<p className={st.lineOne}>
										Использовано компаний <span>&nbsp;{usedCompanies}</span>
									</p>
									<p className={st.lineTwo}>
										Лимит по компаниям <span>&nbsp;{limitCompanies}</span>
									</p>
								</>
							) : (
								<div className={st.loaderContainer}>
									<CircularProgress
										className={st.loader}
										thickness={3}
										size={30}
									/>
								</div>
							)}
						</div>
						<div className={st.authorizedUser}>
							<div className={st.nameAndBtn}>
								<p className={st.name}>Mr. Pickles</p>
								<Button
									className={st.exitBtn}
									sx={sx}
									onClick={() => {
										dispatch(deleteTokenData());
										dispatch(clearUsedAndLimit());
										router.push('/');
									}}>
									Выйти
								</Button>
							</div>
							<div className={st.avatar}></div>
						</div>
					</div>
				) : (
					<div className={st.authorization}>
						<Button
							className={st.btnRegister}
							sx={sx}
							onClick={() => {
								router.push('/authorization/register');
							}}>
							Зарегистрироваться
						</Button>
						<div className={st.stick}></div>
						<Button
							className={st.btnAuthorize}
							sx={sx}
							onClick={() => {
								router.push('/authorization/login');
							}}>
							Войти
						</Button>
					</div>
				)}
			</div>
		</header>
	);
};
