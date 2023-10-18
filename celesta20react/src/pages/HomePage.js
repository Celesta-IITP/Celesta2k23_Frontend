import Footer from "components/Footer/Footer";
import Navbar from "components/Navbars/Navbar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import heroImg from "../assets/img/LandingPageHero.webp";
import heroBg from "../assets/img/LandingPageHeroBgLayer.webp";
import heroBgAlt from "../assets/img/LandingPageHeroBgLayerAlt.webp";

export default function HomePage() {
	const [heroBgLayer, setHeroBgLayer] = useState(window.innerWidth > 600 ? heroBg : heroBgAlt);

	{
		/* For Dev Purposes only */
		function onWidthChange() {
			window.innerWidth > 600 ? setHeroBgLayer(heroBg) : setHeroBgLayer(heroBgAlt);
		}
		window.addEventListener("resize", onWidthChange);
	}

	return (
		<div>
			<Navbar />
			<div className={styles.landing_background_verdant}>
				<img className={styles.landing_background_odyssey} src={heroBgLayer} />
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
			</div>
			<Footer marginTop={0} />
		</div>
	);
}
