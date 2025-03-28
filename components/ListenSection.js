import styles from '../styles/ListenSection.module.css';

export default function ListenSection() {
	return (
		<section id="listen" className={styles.listenSection}>
			<div className={styles.contentContainer}>
				<h2 className={styles.sectionTitle}>LISTEN</h2>

				<div className={styles.spotifyContainer}>
					<div className={styles.albumImageContainer}>
						<img
							src="/next_to_spotify.jpg"
							alt="4+4 Album Cover"
							className={styles.albumImage}
						/>
					</div>

					<div className={styles.spotifyEmbed}>
						<iframe
							src="https://open.spotify.com/embed/album/3X4t87BNYs31DBMdZJ5qAs?utm_source=generator"
							width="100%"
							height="352"
							frameBorder="0"
							allowFullScreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
							title="Spotify Embed"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
} 