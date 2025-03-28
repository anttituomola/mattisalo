import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title, description }) {
	const pageTitle = title || 'Matti Salo';
	const pageDescription = description || 'Musician, composer, sound designer';

	return (
		<div className={styles.container}>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageDescription} />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<header className={styles.header}>
				<Navigation />
			</header>

			<main className={styles.main}>{children}</main>

			<Footer />
		</div>
	);
} 