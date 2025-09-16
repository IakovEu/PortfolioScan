'use client';
import { Provider } from 'react-redux';
import { store } from '@/store/reducers/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/store/reducers/store';

export default function ClientProviderWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
}
