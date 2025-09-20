import { Doc, DocInitialState } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: DocInitialState = {
	docs: null,
};

export const docSlice = createSlice({
	name: 'docs',
	initialState,
	reducers: {
		setDocs: (state, action) => {
			if (state.docs) {
				state.docs = [
					...state.docs,
					...action.payload.map((el: Doc) => ({
						ok: {
							attributes: {
								isAnnouncement: el.ok.attributes.isAnnouncement,
								isDigest: el.ok.attributes.isDigest,
								isTechNews: el.ok.attributes.isTechNews,
								wordCount: el.ok.attributes.wordCount,
							},
							content: el.ok.content,
							issueDate: el.ok.issueDate,
							source: el.ok.source,
							title: el.ok.title,
							url: el.ok.url,
						},
					})),
				];
			} else {
				state.docs = action.payload.map((el: Doc) => ({
					ok: {
						attributes: {
							isAnnouncement: el.ok.attributes.isAnnouncement,
							isDigest: el.ok.attributes.isDigest,
							isTechNews: el.ok.attributes.isTechNews,
							wordCount: el.ok.attributes.wordCount,
						},
						content: el.ok.content,
						issueDate: el.ok.issueDate,
						source: el.ok.source,
						title: el.ok.title,
						url: el.ok.url,
					},
				}));
			}
		},
		clearPreviousDocs: () => initialState,
	},
});

export const { setDocs, clearPreviousDocs } = docSlice.actions;
