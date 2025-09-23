import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
	try {
		const { login, password } = await request.json();
		const response = await axios.post(
			'https://gateway.scan-interfax.ru/api/v1/account/login',
			{
				login: login,
				password: password,
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
