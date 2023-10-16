import Footer from "components/Footer/Footer";
import Navbar from "components/Navbars/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import heroImg from "../assets/img/LandingPageHero.webp";

export default function HomePage() {
	return (
		<div>
			<Navbar />
			<div className={styles.landing_background_verdant}>
				<img className={styles.landing_hero} src={heroImg} />
				<div className={styles.landing_title}>
					<h1>Celesta ‘23</h1>
					<h2>The Techno-Management Fest of IIT Patna</h2>

					<div>
						<Link to="/register-page" className={styles.landing_register}>
							REGISTER
						</Link>
						<Link to="/signin-page" className={styles.landing_login}>
							LOG IN
						</Link>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
