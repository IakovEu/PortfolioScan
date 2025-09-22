'use client';
import st from './styles.module.scss';
import Link from 'next/link';
import { Button, CircularProgress } from '@mui/material';
import { sx } from '@/store/staticData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '@/store/reducers/store';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { increaseSliceArgs } from '@/store/reducers/idSlice';
import { setDocs } from '@/store/reducers/docSlice';
import { formatDateToDDMMYY } from '@/helpers/dateValidator';
import { decodeHtmlEntities, numberToString } from '@/helpers/others';

export const BlockMain = () => {
	const dispatch = useDispatch<RootDispatch>();
	const router = useRouter();
	const isEmptyIds = useSelector((state: RootState) => state.ids.isEmpty);
	const ids = useSelector((state: RootState) => state.ids.ids);
	const sliceFrom = useSelector((state: RootState) => state.ids.sliceFrom);
	const sliceTo = useSelector((state: RootState) => state.ids.sliceTo);
	const isAuthorized = useSelector(
		(state: RootState) => state.authorization.isAuthorized
	);
	const accessToken = useSelector(
		(state: RootState) => state.authorization.accessToken
	);
	const docs = useSelector((state: RootState) => state.docs.docs);

	const headers = {
		Authorization: `Bearer ${accessToken}`,
	};

	const createBodyWithIds = () => {
		const body = ids && { ids: [...ids].slice(sliceFrom, sliceTo) };
		dispatch(increaseSliceArgs());
		return body;
	};

	const getDocs = async () => {
		try {
			const response = await axios.post(
				'https://gateway.scan-interfax.ru/api/v1/documents',
				createBodyWithIds(),
				{ headers }
			);
			dispatch(setDocs(response.data));
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (!isAuthorized) {
			router.push('/');
		}
		if (!isEmptyIds && sliceTo === 10) {
			getDocs();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthorized, isEmptyIds]);

	return (
		<section className={st.container}>
			<h2 className={st.subTitle}>СПИСОК ДОКУМЕНТОВ</h2>
			<div className={st.list}>
				{docs ? (
					docs.map((el, ind) => {
						const decodedMarkup = decodeHtmlEntities(el.ok.content.markup);

						return (
							<div className={st.listItem} key={ind}>
								<p className={st.date}>
									{formatDateToDDMMYY(el.ok.issueDate)}
									<Link className={st.publisher} href={el.ok.url}>
										{el.ok.source.name}
									</Link>
								</p>
								<h3 className={st.itemTitle}>{el.ok.title.text}</h3>
								{el.ok.attributes.isTechNews && (
									<span className={st.underItemTitle}>Технические новости</span>
								)}
								{el.ok.attributes.isAnnouncement && (
									<span className={st.underItemTitle}>Анонсы и события</span>
								)}
								{el.ok.attributes.isDigest && (
									<span className={st.underItemTitle}>Сводки новостей</span>
								)}
								{!el.ok.attributes.isTechNews &&
									!el.ok.attributes.isAnnouncement &&
									!el.ok.attributes.isDigest && (
										<div className={st.fakeUnderItemTitle}></div>
									)}
								<div className={st.blockWithImg}>
									<h4 className={st.notImage}>NEWS</h4>
								</div>
								<p
									className={st.txtContent}
									dangerouslySetInnerHTML={{ __html: decodedMarkup }}
								/>
								<div className={st.linkAndWords}>
									<Link className={st.link} href={el.ok.url}>
										Читать в источнике
									</Link>
									<p className={st.wordsAmount}>
										{numberToString(el.ok.attributes.wordCount)}
									</p>
								</div>
							</div>
						);
					})
				) : (
					<div className={st.loaderContainer}>
						<CircularProgress className={st.loader} thickness={5} size={100} />
					</div>
				)}
			</div>
			<div className={st.btnContainer}>
				{docs && ids !== null && sliceFrom < ids.length && (
					<Button
						className={st.btnShowMore}
						sx={sx}
						variant="contained"
						onClick={getDocs}>
						Показать больше
					</Button>
				)}
			</div>
		</section>
	);
};
