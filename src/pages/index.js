import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
	return (
		<>
			<Head>
				<title>Celesta</title>
				<meta name="description" content="Celesta is the TechFest of IIT Patna." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div style={{ zIndex: "2", position: "relative" }}>
				<section className={styles.heroSection}></section>
				<section className={styles.aboutSection}></section>
			</div>
		</>
	);
}
