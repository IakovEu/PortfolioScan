import { Layout } from '@/components/Layout';
import { BLockMain } from '@/components/searchPageComponents/BlockMain';
import { BlockWithTitle } from '@/components/searchPageComponents/BlockWithTitle';

export default function Search() {
	return (
		<Layout>
			<BlockWithTitle />
			<BLockMain />
		</Layout>
	);
}
