import { configureStore } from '@reduxjs/toolkit';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { authorizationSlice } from './authorizationSlice';
import { searchConfigurationSlice } from './searchFormAnswersSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['authorization', 'searchConfiguration'],
};

const persistedReducer = persistCombineReducers(persistConfig, {
	authorization: authorizationSlice.reducer,
	searchConfiguration: searchConfigurationSlice.reducer,
});

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
