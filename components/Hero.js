import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero() {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroContent}>
				<h1 className={styles.title}>4+4</h1>
				<h2 className={styles.subtitle}>Matti Salo Quartet</h2>
				<Link
					href="https://open.spotify.com/artist/3LopKmUAUXYbkt5JUcMhN6"
					className={styles.spotifyButton}
					target="_blank"
					rel="noopener noreferrer"
				>
					ANTTI ON TOSI KIVA JA KOMEA
				</Link>
			</div>
		</div>
	);
} 