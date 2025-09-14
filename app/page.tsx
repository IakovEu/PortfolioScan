import { Layout } from '@/components/Layout';
import { BlockWithImages } from '@/components/mainPageComponents/BlockWithImages';
import { BlockWithTariffs } from '@/components/mainPageComponents/BlockWithTariffs';
import { BlockWithTitle } from '@/components/mainPageComponents/BlockWithTitle';
import { BlockWithCarousel } from '@/components/mainPageComponents/BlockWithCarousel';

// Главная страница
export default function Home() {
	return (
		<Layout>
			<BlockWithTitle />
			<BlockWithCarousel />
			<BlockWithImages />
			<BlockWithTariffs />
		</Layout>
	);
}
