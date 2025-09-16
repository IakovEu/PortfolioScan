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
import { exampleSlice } from './exampleSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [],
};

const persistedReducer = persistCombineReducers(persistConfig, {
	example: exampleSlice.reducer,
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
