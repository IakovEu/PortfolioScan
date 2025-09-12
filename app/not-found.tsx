import { Layout } from '@/components/Layout';

export default function NotFound() {
	return (
		<Layout>
			<section style={{ height: '100vh', textAlign: 'center' }}>
				<div
					style={{
						margin: '200px auto',
						fontFamily: 'Montserrat',
						fontSize: '45px',
					}}>
					Данной страницы не существует или она еще не была создана!
				</div>
			</section>
		</Layout>
	);
}
