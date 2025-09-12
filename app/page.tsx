import { Layout } from '@/components/Layout';
import { BlockWithImages } from '@/components/mainPageComponents/BlockWithImages';
import { BlockWithTariffs } from '@/components/mainPageComponents/BlockWithTariffs';
import { BlockWithTitle } from '@/components/mainPageComponents/BlockWithTitle';
import { Carousel } from '@/components/mainPageComponents/Carousel';

// Главная страница
export default function Home() {
	return (
		<Layout>
			<BlockWithTitle />
			<Carousel />
			<BlockWithImages />
			<BlockWithTariffs />
		</Layout>
	);
}
