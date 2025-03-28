import Image from 'next/image';
import Link from 'next/link';
import { FaSoundcloud, FaFacebookF, FaLink, FaInstagram } from 'react-icons/fa';
import styles from '../styles/StorySection.module.css';

export default function StorySection() {
	return (
		<section id="artist" className={styles.storySection}>
			<div className={styles.socialIcons}>
				<a href="https://soundcloud.com/mattisalo" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
					<FaSoundcloud />
				</a>
				<a href="https://www.facebook.com/mattisaloquartet" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
					<FaFacebookF />
				</a>
				<a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
					<FaLink />
				</a>
				<a href="https://www.instagram.com/mattisalo" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
					<FaInstagram />
				</a>
			</div>

			<h2 className={styles.sectionTitle}>CREATING STORIES FROM SOUND</h2>

			<div className={styles.contentContainer}>
				<div className={styles.imageContainer}>
					<img
						src="/matti1c.jpg"
						alt="Matti Salo playing guitar"
						className={styles.image}
					/>
				</div>

				<div className={styles.textContent}>
					<p>
						Sounds and music have their own life, their own pulse, and their own magic.
						As a musician, I'm honoured to be part of this process, at times stepping aside
						to see where the music takes us. Communication through music transcends all languages
						and takes us into a deeper, more spiritual realm of connection as human beings.
					</p>

					<p>
						I aid this creative process through my roles as a bandleader, sideman, composer,
						producer, sound designer, mixer, teacher. I play many instruments, including the
						guitar, keyboard/synths, saxophone, and bass.
					</p>

					<Link href="/booking" className={styles.contactButton}>
						CONTACT ME
					</Link>
				</div>
			</div>
		</section>
	);
} 