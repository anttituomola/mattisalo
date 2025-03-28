import Link from 'next/link';
import styles from '../styles/BandsSection.module.css';
import { FaSpotify, FaYoutube, FaSoundcloud } from 'react-icons/fa';

const projects = [
	{
		id: 'quartet',
		title: 'QUARTET',
		image: '/1.jpg',
		role: 'composer / guitarist',
		description: 'Jazz quartet that performs an eclectic fusion of free jazz, world music, ambient, rock with avant garde influences.',
		members: 'Matti Salo: guitar, compositions. Sami Sippola: Saxophone. Ville Rauhala: Double bass. Janne Tuomi: drums, percussion.',
		photographer: 'Photograph: Matti Salo',
		links: [
			{ platform: 'spotify', url: 'https://open.spotify.com/artist/3LopKmUAUXYbkt5JUcMhN6' },
			{ platform: 'youtube', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
		]
	},
	{
		id: 'solo',
		title: 'SOLO',
		image: '/2.jfif',
		role: 'Solo project',
		description: 'My solo project is a free exploration of sound through combining varying acoustic and electronic instruments to create deep psychedelic mindscapes.',
		photographer: 'Photograph: Toni Ketola',
		links: [
			{ platform: 'soundcloud', url: 'https://soundcloud.com/mattisalo' },
			{ platform: 'youtube', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
		]
	},
	{
		id: 'trio',
		title: 'TRIO',
		image: '/3.jpg',
		role: 'composer / guitarist',
		description: 'Rest in the airy atmospheres and lyrical ambience of this trio. Expect anything from modern jazz and ambient, to world music and free jazz.',
		members: 'Matti Salo: guitar, compositions. Juho Kanervo: double and electric bass. Simo Laihonen: drums, percussion.',
		photographer: 'Photographs: Johanna Hjorth',
		links: [
			{ platform: 'spotify', url: 'https://open.spotify.com/artist/3LopKmUAUXYbkt5JUcMhN6' },
			{ platform: 'youtube', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
		]
	},
	{
		id: 'kielo',
		title: 'KIELO KÄRKKÄINEN & MATTI SALO',
		image: '/4.jpeg',
		role: 'Guitar / Composer',
		description: 'Project with singer-songwriter Kielo Kärkkäinen. Exploring life and it\'s mysteries.',
		members: 'Matti Salo: Guitars, vocals, keyboard. Kielo Kärkkäinen: Vocals. Leo-Pekka Lyytikäinen: Trumpet. Anri Tuohimäki: Violin. Juho Kanervo: Cello, bass. Simo Laihonen: Drums.',
		artwork: 'Artwork: Marina Salmela',
		links: [
			{ platform: 'spotify', url: 'https://open.spotify.com/artist/3LopKmUAUXYbkt5JUcMhN6' },
			{ platform: 'other', text: 'Shop merch on Texicalli Records', url: 'https://www.texicalli.fi' }
		]
	},
	{
		id: 'soundtrack',
		title: 'SOUNDTRACK / THEATRE',
		image: '/5.jpg',
		role: 'Composer / Sound design',
		description: 'Since 2007 I have been composing music and done sound design for various puppet theatre shows, theatre performances, and films. I work mainly for Teatteri Liikutus, based in Rovaniemi.',
		photographer: 'Photograph: Tatu Kantomaa',
		links: []
	}
];

export default function BandsSection() {
	return (
		<section id="bands" className={styles.bandsSection}>
			<h2 className={styles.sectionTitle}>BANDS & PROJECTS</h2>

			<div className={styles.projectsGrid}>
				{projects.map((project) => (
					<div key={project.id} className={styles.projectCard}>
						<div className={styles.imageContainer}>
							<img
								src={project.image}
								alt={project.title}
								className={styles.projectImage}
							/>
							{project.photographer && (
								<div className={styles.photographer}>{project.photographer}</div>
							)}
							{project.artwork && (
								<div className={styles.photographer}>{project.artwork}</div>
							)}
						</div>

						<div className={styles.projectDetails}>
							<h3 className={styles.projectTitle}>{project.title}</h3>
							<div className={styles.projectRole}>{project.role}</div>

							<p className={styles.projectDescription}>{project.description}</p>

							{project.members && (
								<p className={styles.projectMembers}>{project.members}</p>
							)}

							<div className={styles.projectLinks}>
								{project.links.map((link, index) => (
									<div key={index} className={styles.linkContainer}>
										{link.platform === 'spotify' && (
											<a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.platformLink}>
												<span className={styles.listenText}>LISTEN ON</span> <FaSpotify className={styles.platformIcon} /> <span className={styles.platformName}>SPOTIFY</span>
											</a>
										)}
										{link.platform === 'youtube' && (
											<a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.platformLink}>
												<span className={styles.listenText}>WATCH ON</span> <FaYoutube className={styles.platformIcon} /> <span className={styles.platformName}>YOUTUBE</span>
											</a>
										)}
										{link.platform === 'soundcloud' && (
											<a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.platformLink}>
												<span className={styles.listenText}>LISTEN ON</span> <FaSoundcloud className={styles.platformIcon} /> <span className={styles.platformName}>SOUNDCLOUD</span>
											</a>
										)}
										{link.platform === 'other' && (
											<a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.platformLink}>
												{link.text}
											</a>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
} 