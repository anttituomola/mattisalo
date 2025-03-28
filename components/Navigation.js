import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
	const router = useRouter();

	return (
		<nav className={styles.nav}>
			<div className={styles.navLeft}>
				<ul className={styles.navList}>
					<li className={router.pathname === '/' ? styles.active : ''}>
						<Link href="/" className={styles.navLink}>
							HOME
						</Link>
					</li>
					<li className={router.pathname === '/artist' ? styles.active : ''}>
						<Link href="/#artist" className={styles.navLink}>
							ARTIST
						</Link>
					</li>
					<li className={router.pathname === '/bands' ? styles.active : ''}>
						<Link href="/#bands" className={styles.navLink}>
							BANDS & PROJECTS
						</Link>
					</li>
				</ul>
			</div>

			<div className={styles.navCenter}>
				<Link href="/" className={styles.logo}>
					MATTI SALO
				</Link>
			</div>

			<div className={styles.navRight}>
				<ul className={styles.navList}>
					<li className={router.pathname === '/listen' ? styles.active : ''}>
						<Link href="/#listen" className={styles.navLink}>
							LISTEN
						</Link>
					</li>
					<li className={router.pathname === '/watch' ? styles.active : ''}>
						<Link href="/#watch" className={styles.navLink}>
							WATCH
						</Link>
					</li>
					<li className={router.pathname === '/booking' ? styles.active : ''}>
						<Link href="/booking" className={styles.navLink}>
							BOOKING
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
} 