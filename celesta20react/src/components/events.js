import styles from "./events.module.css";
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import Head from 'next/head'
import React, { useEffect, useState } from "react";

import EventItem from "./EventItem/index";
import Navbar from "./Navbars/Navbar";
import Footer from "./Footer/Footer";
import { serverUrl } from "config";

const Events = () => {
	const [events, setEvents] = useState([
		{
			is_active: true,
			poster: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
			name: "Hack it Out",
			// date:new Date("2023-10-10"),
			start_time: new Date("2023-10-10 00:00:00"),
			end_time: new Date("2023-11-03 11:59:00"),
			venue: "Online",
			description: "Hack it out is a dynamic online web development event aimed at fostering a developer mindset and motivating college students to actively engage in development pursuits. The event nurtures creative thinking skills and fosters teamwork, empowering students to collaborate effectively. It's a platform that ignites passion for coding and emphasizes the collective effort essential in the world of web development.",
			min_team_size: 1,
			max_team_size: 4,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 8000,
			organizers: [["Hemant Chaurasia", "8077063916"],["Kushal Agarwal", "6287173664"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSfdZimOM3IerTWFUOFLQBNLGGwuKV4ryYD1GSutt5D7PfmMeQ/viewform?usp=sf_link",
			id: "1234567890",
		},
		{
			is_active: true,
			poster: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
			name: "HackGPT",
			// date:new Date("2023-10-10"),
			start_time: new Date("2023-10-27 07:10:00"),
			end_time: new Date("2023-11-04 11:59:00"),
			venue: "Online",
			description: "",
			min_team_size: 1,
			max_team_size: 4,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-27 11:59:00"),
			prize: 8000,
			organizers: [["Sonalika Chandra", "9263807978"],["Erum Meraj", "9742192005"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSevgsAK2YvDlnfM7nQLuclfrfOSeizkuNqe6aeyJHgEWxO7ZA/viewform?usp=sf_link",
			id: "1234567890",
		},
		{
			is_active: true,
			poster: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
			name: "IXplorer",
			// date:new Date("2023-10-10"),
			start_time: new Date("2023-10-30 00:00:00"),
			end_time: new Date("2023-11-03 11:59:00"),
			venue: "Online",
			description: "",
			min_team_size: 4,
			max_team_size: 5,
			registration_fee: 0,
			registration_deadline: new Date("2023-11-02 11:59:00"),
			prize: 12000,
			organizers: [["Kunjal", "+91 86301 01578"],["Varesh", "+91 8275391225"],["Sonalika Chandra", "9263807978"],["Shilpa Kanjilal", "+91 6289485852"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSfLkBxm9qNajhKfvawRs4r4BN6Y6G_Rkw55cGaL7xUr3Zg6Sg/viewform?usp=sf_link",
			id: "1234567890",
		},
		{
			is_active: true,
			poster: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
			name: "Keplers maze",
			// date:new Date("2023-10-10"),
			start_time: new Date("2023-11-03"),
			end_time: new Date("2023-11-03"),
			venue: "Offline",
			description: "",
			min_team_size: 3,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-11-03"),
			prize: 3000,
			organizers: [["Subham Prasad", "7894514779"],["Aryan", "8318185530"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSeNcsqlAyno8yAzOoJAdsqHjurAWt332ycveELwSH6Q4lwvBw/viewform?usp=sf_link",
			id: "1234567890",
		},
		{
			is_active: true,
			poster: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
			name: "Astro particle voyage",
			// date:new Date("2023-10-10"),
			start_time: new Date("2023-10-28 12:00:00"),
			end_time: new Date("2023-11-03 20:00:00"),
			venue: "Online",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-28 10:00:00"),
			prize: 750,
			organizers: [["Khushal Yadav", "7536058766"],["Priyanshi Sharma", "8700067157"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSdCQ8ruX5IXOZezkeh1Y9rP1BmCk9_ZsGcXdyxhog5wblx3xA/viewform?usp=sf_link",
			id: "1234567890",
		},
	]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let host = serverUrl;

		async function callAPI() {
			try {
				const res = await fetch(${host}/events/detailed, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await res.json();
				setEvents(data.data);
			} catch (e) {
				console.error("Failed to fetch");
			} finally {
				setLoading(false);
			}
		}
		callAPI();
	}, []);
	return (
		<div className={styles.mainContainer}>
			<Navbar />
			<div style={{ height: 150, display: "unset" }}></div>
			{loading ? null : (
				<div className={styles.container}>
					<h1>Events</h1>

					<div className={styles.content}>
						{events.length === 0 && <div>Could not get data from server</div>}
						{events.map((event, index) => {
							return <EventItem event={event} key={index} />;
						})}
					</div>
				</div>
			)}
			<Footer />
		</div>
	);
};
export default Events;