import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
	const router = useRouter();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<nav className={styles.nav}>
			<div className={styles.navCenter}>
				<Link href="/" className={styles.logo} onClick={closeMobileMenu}>
					MATTI SALO
				</Link>
			</div>

			<button className={styles.mobileMenuButton} onClick={toggleMobileMenu} aria-label="Toggle menu">
				{mobileMenuOpen ? <FaTimes /> : <FaBars />}
			</button>

			<div className={`${styles.navMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
				<ul className={styles.navList}>
					<li className={router.pathname === '/' ? styles.active : ''}>
						<Link href="/" className={styles.navLink} onClick={closeMobileMenu}>
							HOME
						</Link>
					</li>
					<li className={router.pathname === '/artist' ? styles.active : ''}>
						<Link href="/#artist" className={styles.navLink} onClick={closeMobileMenu}>
							ARTIST
						</Link>
					</li>
					<li className={router.pathname === '/bands' ? styles.active : ''}>
						<Link href="/#bands" className={styles.navLink} onClick={closeMobileMenu}>
							BANDS & PROJECTS
						</Link>
					</li>
					<li className={router.pathname === '/listen' ? styles.active : ''}>
						<Link href="/#listen" className={styles.navLink} onClick={closeMobileMenu}>
							LISTEN
						</Link>
					</li>
					<li className={router.pathname === '/watch' ? styles.active : ''}>
						<Link href="/#watch" className={styles.navLink} onClick={closeMobileMenu}>
							WATCH
						</Link>
					</li>
					<li className={router.pathname === '/booking' ? styles.active : ''}>
						<Link href="/booking" className={styles.navLink} onClick={closeMobileMenu}>
							BOOKING
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
} 