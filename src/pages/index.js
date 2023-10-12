import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header, Footer, HomeCard } from "@/components";

export default function Home() {
	return (
		<>
			<Head>
				<title>Celesta</title>
				<meta name="description" content="Celesta is the TechFest of IIT Patna." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header currentPage={"Home"} />
			<div>
				<section className={styles.heroSection}>
					<img loading="lazy" src={"/home/verdant.jpg"} />
				</section>
				<section className={styles.aboutSection}></section>
				<section className={styles.cardSection}>
					<HomeCard title={"Events"} />
					<HomeCard title={"Workshops"} />
				</section>
				<Footer />
			</div>
		</>
	);
}
