import { getContentData } from '../utils/mdUtils';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import BandsSection from '../components/BandsSection';
import ListenSection from '../components/ListenSection';
import WatchSection from '../components/WatchSection';
import styles from '../styles/Home.module.css';

export default function Home({ contentData }) {
	return (
		<Layout
			title={contentData.metadata.title}
			description={contentData.metadata.description}
		>
			<Hero />
			<StorySection />
			<BandsSection />
			<ListenSection />
			<WatchSection />
		</Layout>
	);
}

export async function getStaticProps() {
	const contentData = getContentData('main');

	return {
		props: {
			contentData
		}
	};
} 