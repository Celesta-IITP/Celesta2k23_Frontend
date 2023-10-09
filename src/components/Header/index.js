import styles from "./Header.module.css";

export default function Header() {
	return (
		<div className={styles.navbar}>
			<div className={styles.celestaLogo}>
				C
			</div>
			<div className={styles.navLinks}>
				<a href="/page1" className={styles.navLink}>
					Page 1
				</a>
				<a href="/page2" className={styles.navLink}>
					Page 2
				</a>
				<a href="/page3" className={styles.navLink}>
					Page 3
				</a>
				<a href="/page4" className={styles.navLink}>
					Page 4
				</a>
				<a href="/page5" className={styles.navLink}>
					Page 5
				</a>
			</div>
			<div className={styles.mobileMenu}></div>
		</div>
	);
}
