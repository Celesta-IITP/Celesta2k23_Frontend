import styles from "./Header.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.celestaLogo}>celestaLogo</div>
			<div className={styles.navLinks + " " + inter.className}>
				<a href="/page1" className={styles.navLink}>
					About Us
				</a>
				<a href="/page2" className={styles.navLink}>
					Events
				</a>
				<a href="/page3" className={styles.navLink}>
					CA Program
				</a>
				<a href="/page4" className={styles.navLink}>
					Sponsors
				</a>
				<a href="/page5" className={styles.register}>
					Register
				</a>
				<a href="/page5" className={styles.login}>
					<div>Sign up</div>
				</a>
			</div>
			<div className={styles.mobileMenu}></div>
		</nav>
	);
}
