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
import { deleteTokenData } from '@/store/reducers/authorizationSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Header = () => {
	const dispatch = useDispatch<RootDispatch>();
	const isAuthorized = useSelector(
		(state: RootState) => state.authorization.isAuthorized
	);
	const accessToken = useSelector(
		(state: RootState) => state.authorization.accessToken
	);
	const [usedCompanies, setUsedCompanies] = useState<number>(0);
	const [limit, setLimit] = useState<number>(0);
	const router = useRouter();

	useEffect(() => {
		const sendData = async () => {
			if (accessToken.length !== 0) {
				try {
					const response = await axios.get(
						'https://gateway.scan-interfax.ru/api/v1/account/info',
						{
							headers: {
								Authorization: `Bearer ${accessToken}`,
							},
						}
					);

					setUsedCompanies(response.data.eventFiltersInfo.usedCompanyCount);
					setLimit(response.data.eventFiltersInfo.companyLimit);
				} catch (e) {
					console.error(e);
				}
			}
		};

		sendData();
	}, [accessToken]);

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
							{limit ? (
								<>
									<p className={st.lineOne}>
										Использовано компаний <span>&nbsp;{usedCompanies}</span>
									</p>
									<p className={st.lineTwo}>
										Лимит по компаниям <span>&nbsp;{limit}</span>
									</p>
								</>
							) : (
								<CircularProgress
									className={st.loader}
									thickness={3}
									size={30}
								/>
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
