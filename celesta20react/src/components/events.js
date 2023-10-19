import styles from "./events.module.css";
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import Head from 'next/head'
import React, { useEffect, useState } from "react";

import EventItem from "./EventItem/index";
import Navbar from "./Navbars/Navbar";

const Events = () => {
	const [events, setEvents] = useState([
		// {
		// 	is_active: true,
		// 	poster: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
		// 	name: "Webinar",
		// 	start_time: new Date(),
		// 	end_time: new Date() + 1000 * 60 * 60,
		// 	venue: "FuN",
		// 	description: "fUN Karenge",
		// 	min_team_size: 2,
		// 	max_team_size: 5,
		// 	registration_fee: 150,
		// 	registration_deadline: new Date() + 100 * 60 * 30,
		// 	prize: 750,
		// 	organizer: [["Astitva", "7903125867"]],
		// 	video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
		// 	is_online: 1,
		// 	is_solo: 0,
		// 	registration_link: "www.google.com",
		// 	id: "1234567890",
		// },
	]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let host = process.env.REACT_APP_PUBLIC_HOST;

		async function callAPI() {
			try {
				const res = await fetch(`${host}/api/events/detailed`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await res.json();
				setEvents(data.data);
			} catch (e) {
				console.error("Failed to fetch");
			}
			finally {
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
						{/* {events.length === 0 && (
							<EventItem
								event={{
									is_active: true,
									poster: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
									name: "Webinar",
									start_time: new Date(),
									end_time: new Date() + 1000 * 60 * 60,
									venue: "FuN",
									description: "fUN Karenge",
									min_team_size: 2,
									max_team_size: 5,
									registration_fee: 150,
									registration_deadline: new Date() + 100 * 60 * 30,
									prize: 750,
									organizer: [["Astitva", "7903125867"]],
									video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-poster-portrait-OTKxrh39Cs0.jpg",
									is_online: 1,
									is_solo: 0,
									registration_link: "www.google.com",
									id: "1234567890",
								}}
							/>
						)} */}
						{events.map((event, index) => {
							return <EventItem event={event} key={index} />;
						})}
					</div>
				</div>
			)}
		</div>
	);
};
export default Events;
