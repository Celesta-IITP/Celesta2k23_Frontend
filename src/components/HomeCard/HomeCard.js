import React from "react";
import styles from "./HomeCard.module.css";

export default function HomeCard({ title }) {
	return (
		<div className={styles.card}>
			<img className={styles.image} src="/home/robowars1.jpg" />
			<div className={styles.title}>{title}</div>
		</div>
	);
}
