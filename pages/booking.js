import { getContentData } from '../utils/mdUtils';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Booking.module.css';

export default function Booking({ contentData }) {
	return (
		<Layout
			title={contentData.metadata.title}
			description={contentData.metadata.description}
		>
			<div className={styles.container}>
				<MarkdownContent content={contentData.content} />
				<ContactForm />
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const contentData = getContentData('contact');

	return {
		props: {
			contentData
		}
	};
} 