import Link from 'next/link';
import { FaSoundcloud, FaFacebookF, FaLink, FaInstagram } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
	return (
		<>
			<div className={styles.socialLinks}>
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

			<footer className={styles.footer}>
				<nav className={styles.footerNav}>
					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<Link href="/" className={styles.navLink}>HOME</Link>
						</li>
						<li className={styles.navItem}>
							<Link href="/#artist" className={styles.navLink}>ARTIST</Link>
						</li>
						<li className={styles.navItem}>
							<Link href="/#bands" className={styles.navLink}>BANDS & PROJECTS</Link>
						</li>
						<li className={styles.navItem}>
							<Link href="/#listen" className={styles.navLink}>LISTEN</Link>
						</li>
						<li className={styles.navItem}>
							<Link href="/#watch" className={styles.navLink}>WATCH</Link>
						</li>
						<li className={styles.navItem}>
							<Link href="/booking" className={styles.navLink}>BOOKING</Link>
						</li>
					</ul>
				</nav>

				<div className={styles.copyright}>
					All Material Copyright Matti Salo {new Date().getFullYear()}
				</div>
			</footer>
		</>
	);
} 