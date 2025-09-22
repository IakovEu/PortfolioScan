import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
	try {
		const { login, password } = await request.json();

		const realLogin = process.env.APP_LOGIN || process.env.NEXT_PUBLIC_LOGIN;
		const realPassword =
			process.env.APP_PASSWORD || process.env.NEXT_PUBLIC_PASSWORD;

		if (!realLogin || !realPassword) {
			return NextResponse.json(
				{ error: true, message: 'Server config error' },
				{ status: 500 }
			);
		}

		// Например, если хотите аутентифицировать только при совпадении с локальным
		if (login !== 'bebra1' || password !== '000111') {
			return NextResponse.json(
				{ error: true, message: 'Invalid credentials' },
				{ status: 401 }
			);
		}

		const response = await axios.post(
			'https://gateway.scan-interfax.ru/api/v1/account/login',
			{
				login: realLogin,
				password: realPassword,
			}
		);

		return NextResponse.json(response.data);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: true, message: 'Internal server error' },
			{ status: 500 }
		);
	}
}
