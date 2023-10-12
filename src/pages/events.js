import Head from "next/head";
import styles from "../styles/Events.module.css";
import { Header } from "@/components";

export default function Events() {
	return (
		<>
			<Head>
				<title>Celesta</title>
				<meta name="description" content="Celesta is the TechFest of IIT Patna." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header currentPage={"Events"}/>
			<div>
				<div className={styles.heroSection}>
					<img loading="lazy" src={"/home/EVENTS.svg"} />
				</div>
				<section className={styles.aboutSection}></section>
			</div>
		</>
	);
}
