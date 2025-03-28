import Link from 'next/link';
import styles from '../styles/WatchSection.module.css';

const videos = [
	{
		id: 'trio',
		title: 'Matti Salo Trio - Version in One',
		embedId: '7ofXpREyt-Y',
	},
	{
		id: 'kites',
		title: 'Matti Salo Quartet - Kites',
		embedId: 'jS_S89ft-Ws',
	},
	{
		id: 'promo',
		title: 'Matti Salo Quartet - Promovideo',
		embedId: 'iALVhXGLvdg',
		listParam: 'list=PLYIbGye77DMuKnOze88R79S4IrZCmIPea'
	},
	{
		id: 'huminoita',
		title: 'Huminoita – Gameover',
		embedId: 'aV51W5qFWMg',
		listParam: 'list=PLYIbGye77DMsbqwApIlmXiXqGKVZeC-lm'
	}
];

export default function WatchSection() {
	return (
		<section id="watch" className={styles.watchSection}>
			<div className={styles.contentContainer}>
				<h2 className={styles.sectionTitle}>WATCH</h2>

				<div className={styles.videosGrid}>
					{videos.map((video) => (
						<div key={video.id} className={styles.videoCard}>
							<h3 className={styles.videoTitle}>{video.title}</h3>
							<div className={styles.videoWrapper}>
								<iframe
									width="489"
									height="275"
									src={`https://www.youtube.com/embed/${video.embedId}${video.listParam ? `?${video.listParam}` : ''}`}
									title={video.title}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								/>
							</div>
						</div>
					))}
				</div>

				<div className={styles.moreVideos}>
					<a
						href="https://www.youtube.com/channel/UCj0CwMr2xhdZwrPfLm9ns4Q"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.moreVideosLink}
					>
						MORE VIDEOS
					</a>
				</div>
			</div>
		</section>
	);
} 