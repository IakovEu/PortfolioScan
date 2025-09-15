import { Layout } from '@/components/Layout';
import { BlockMain } from '@/components/resultsPageComponents/BlockMain';
import { BlockWithSummary } from '@/components/resultsPageComponents/BlockWithSummary';
import { BlockWithTitle } from '@/components/resultsPageComponents/BlockWithTitle';

export default function Results() {
	return (
		<Layout>
			<BlockWithTitle />
			<BlockWithSummary />
			<BlockMain />
		</Layout>
	);
}
