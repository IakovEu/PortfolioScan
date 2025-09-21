'use client';
import st from './styles.module.scss';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { sx, toastSettings } from '@/store/staticData';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '@/store/reducers/store';
import {
	clearUsedAndLimit,
	deleteTokenData,
	setUsedAndLimit,
} from '@/store/reducers/authorizationSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Header = () => {
	const router = useRouter();
	const dispatch = useDispatch<RootDispatch>();
	const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
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
					// поэтому ограничивать запросы пользователя для текущей сессии по одному токену буду я,
					// в идеале нужен отдельный запрос к апи для тарифа и поерделения лимитов (тарифы также определяются на клиенте)
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
			{!burgerMenu && (
				<div className={st.container}>
					<Link href="/">
						<div className={st.logo}></div>
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
											toast('Вы вышли из аккаунта', {
												...toastSettings,
												className: st.notification,
											});
										}}>
										Выйти
									</Button>
								</div>
								<div className={st.avatar}></div>
							</div>
							<Button
								className={st.burgerBtn}
								onClick={() => {
									setBurgerMenu(true);
								}}>
								<div className={st.burger}></div>
							</Button>
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
							<Button
								className={st.burgerBtn}
								onClick={() => {
									setBurgerMenu(true);
								}}>
								<div className={st.burger}></div>
							</Button>
						</div>
					)}
				</div>
			)}
			{burgerMenu && (
				<div className={st.mobileMenu}>
					<div className={st.logoAndClose}>
						<Link href="/">
							<div className={st.mobLogo}></div>
						</Link>
						<Button
							className={st.btnClose}
							onClick={() => {
								setBurgerMenu(false);
							}}>
							&#10005;
						</Button>
					</div>
					<nav className={st.menuLinks}>
						<Link className={st.menuLink} href="/">
							Главная
						</Link>
						<Link className={st.menuLink} href="/tariffs">
							Тарифы
						</Link>
						<Link className={st.menuLink} href="/FAQ">
							FAQ
						</Link>
					</nav>
					<div className={st.mobBtnContainer}>
						{!isAuthorized ? (
							<>
								<Button
									className={st.mobReg}
									sx={sx}
									onClick={() => {
										router.push('/authorization/register');
									}}>
									Зарегистрироваться
								</Button>
								<Button
									className={st.mobAuthorize}
									sx={sx}
									onClick={() => {
										router.push('/authorization/login');
									}}>
									Войти
								</Button>
							</>
						) : (
							<div className={st.mobAuthorizedUser}>
								<p className={st.mobName}>Mr. Pickles</p>
								<div className={st.mobAvatar}></div>
								<Button
									className={st.mobExitBtn}
									sx={sx}
									onClick={() => {
										setBurgerMenu(false);
										dispatch(deleteTokenData());
										dispatch(clearUsedAndLimit());
										router.push('/');
										toast('Вы вышли из аккаунта', {
											...toastSettings,
											className: st.notification,
										});
									}}>
									Выйти
								</Button>
								<div className={st.avatar}></div>
							</div>
						)}
					</div>
				</div>
			)}
		</header>
	);
};
