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
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCPagD5y5vweLSxPHiRgYNO2uR_fMmmqTSggSfu6pnMriMUUWs3SgfBAHL3-_mjCDwz49aFt4HZ5BYlDuhnwk1C3LDZ3Q=s1600",
			name: "Hack it Out",
			// date:new Date("2023-10-10"),
			start_time: new Date("2023-10-10 00:00:00"),
			end_time: new Date("2023-11-03 11:59:00"),
			venue: "Online",
			description: "Hack it out is a dynamic online web development event aimed at fostering a developer mindset and motivating college students to actively engage in development pursuits. The event nurtures creative thinking skills and fosters teamwork, empowering students to collaborate effectively. It's a platform that ignites passion for coding and emphasizes the collective effort essential in the world of web development.",
			min_team_size: 1,
			max_team_size: 1,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 11:59:00"),
			prize: 8000,
			organizers: [["Hemant Chaurasia", "8077063916"],["Kushal Agarwal", "6287173664"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 1,
			registration_link: "https://celestalinks.pythonanywhere.com/WzZc8",
			id: "1234567890",
		},
		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBX1OvLBRksJ-VY60xu49DdcJAOWbOGY3Kbpg0pTfTnuY6lMwkMFfW_lj0Lqxkcq7pBKwxobR4sSUUtU9WGZIvv0JDa-w=s1600",
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
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/9dGRc",
			id: "1234567890",
		},
		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaC6RXDuyMJ64B1rzHRZT2Jg2aYvpdlpwsEyxQRaLfjVRpLrlzZfqCO-BF3hnM34AkzjWoLHPW9del4QwbxTDhWpX6X0Aw=s1600",
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
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/0GBez",
			id: "1234567890",
		},
		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaA-TeJ7UIqErk04Yp3sNln_Sin6jXOWSbgfYJBSYCpc4LMOtqYLgPioD5_ppjA4--HSjkIR6nkoL84TxVo5jn1OnAmdQA=s1600",
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
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/csFbn",
			id: "1234567890",
		},
		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBxft6HQOXflNkP2YQKlo_SDCcVGpr4vDoIjT_gQ7vL9ZzI1Jn5oeAGm_8zTaA3o0aTbhKpTGk74Wtld2Wqt8nVBkgzKA=s1600",
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
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/RUUXf",
			id: "1234567890",
		},

		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDNCvvPn7pLEy-2YS6jDPOab66EvBSW2s3okr_dR6s6XMLEhFEWRSF1W7pn2xjJelCYTULXqDMyDG4H7wo8-OYpcNevIQ=s1600",
			name: "Depiction",
			// date:new Date("2023-10-10"),
			start_time: new Date("2023-10-20 12:00:00"),
			end_time: new Date("2023-11-03 20:00:00"),
			venue: "Online",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-20 10:00:00"),
			prize: 8000,
			organizers: [["Bhavika Choudhary", "9999850245"],[" Ishani Sharma", "6239521344"],["Vikramaditya", "6305904198"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/3WggH",
			id: "1234567890",
		},

		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaA07wjPr6hLZuI_pyYiU6ACypkd6H1B3KJ0B2mkpkcijN4H2FG5d_Rp17Zv8TyiwJWK62SwiO0u4_TNDk3jeonAunHavQ=s1600",
			name: "Njath",
			// date:new Date("2023-10-10"),
			start_time: new Date("2023-10-20 12:00:00"),
			end_time: new Date("2023-10-30 20:00:00"),
			venue: "Online",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-20 10:00:00"),
			prize: 10000,
			organizers: [["Moulik Jain ", "70874784760"],[" Harpranav Singh Uppal", "884754464"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/m4iyc",
			id: "1234567890",
		},



		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaArRqbEOPImfvlDzdkTcoU70EoqJ5yEDye_3creSk_lKz5LubIk_eY1di8V6xBQueH6_0m_svzt7higlygwoadbI1t9=s1600",
			name: "Meme Mastermind",
			
			start_time: new Date("2023-10-20 12:00:00"),
			end_time: new Date("2023-11-03 20:00:00"),
			venue: "Online",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-20 10:00:00"),
			prize: 3000,
			organizers: [["Shanzal ", "78976 64959"],["  Sakshi jha ", " 7292902984"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/yuNQW",
			id: "1234567890",
		},

 


		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAlOdSR7IlSRXEbETzcESK94EpOpvShTAef72fV8tdkRAPgfwZEDbJ-2InWPQ4kRCoV8ye-MOa4l3Y72okDRJl-WrDY=s1600",
			name: "Case Study",
			
			start_time: new Date("2023-10-20 12:00:00"),
			end_time: new Date("2023-11-05 20:00:00"),
			venue: "Online",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-20 10:00:00"),
			prize: 8000,
			organizers: [["Anvaya sharma ", "6398703839 "],["Hemant Chaurasia", "8077063916"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/9pMkg",
			id: "1234567890",
		},
		 
 



		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAqNWW8mIDAJn7t_nDDra6WYfxYshm-S7V69eOD2DFq4uRxSqYhPrOzs0Mh6L97Y8D0oErORVGGKek_KVV66nhlcCfaPw=s1600",
			name: "Sudo Overide",
			
			start_time: new Date("2023-11-03 12:00:00"),
			end_time: new Date("2023-11-04 20:00:00"),
			venue: "Online",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-11-03 10:00:00"),
			prize: 10000,
			organizers: [["Animesh Sharma ", "9835086449 "],["Dhruv Sharma ", "7389754010"],["Krishna Singh ", "8543906009"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/BMQxu",
			id: "1234567890",
		},
		 






		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCB53A-9ef6Q3BgwyAwR7eTWLUgFMUMBEKRXxutBKNFISVE-z35RTBKLPY92LHraEKL3tx_xvjphbLso5yy4vbsUOuduQ=s1600",
			name: "Solid Design",
			
			start_time: new Date("2023-10-27 12:00:00"),
			end_time: new Date("2023-11-02 20:00:00"),
			venue: "Online",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-27 10:00:00"),
			prize: 10000,
			organizers: [["	Areeba Mirza", "8936898549"],["Sohum Bansal", "7023647147"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/CXHnH",
			id: "1234567890",
		},
		 


		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDr-Z0Zz5LaRj_OSG7DesulWGToYVftwdKMkVHCJgdBXPSPkISMsHXfyMtI_tCnAcllSTxdkqWel36mKN1sE4PwrmvF=s1600",
			name: "Branding Hackathon",
			
			start_time: new Date("2023-10-29 12:00:00"),
			end_time: new Date("2023-11-05 20:00:00"),
			venue: "Online",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize: 5000,
			organizers: [["	Kunjal ", "8630101578"],["Swastik", "9936946872"],["Hrishikesh ", "9431266201"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/aewYN",
			id: "1234567890",
		},
		 




		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAcB7j2zHP2PjQzMAqJFShe_4hhKStQFsDdSoGmf-DLfTey4Luaoa5Nh9xC-c4-umZtqiz2cD3Uf1uZIaNH87NgdBfc=s1600",
			name: "Robowars",
			
			start_time: new Date("2023-11-04 12:00:00"),
			end_time: new Date("2023-11-05 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize: 200000,
			organizers: [["	Yash Raj ", "8789866763"],["Luqman Motiwala", "8619904982"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/SNm2D",
			id: "1234567890",
		},

		


		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCnBbLdqmbX5waePneDuCUy-HbAHQHbA0y72W6K4DzVF9PoJj9x59g2LZJRUhJjZTM21_Pkn6Efo3yGPsWn-B2R6CrmPw=s1600",
			name: "Death Race",
			
			start_time: new Date("2023-11-04 12:00:00"),
			end_time: new Date("2023-11-04 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize: 25000,
			organizers: [["	Kushal Agarwal", "6287173664"],[" Arti Dewangan", "7225060779"],[" Tejas", "8303747346"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/ZgIjk",
			id: "1234567890",
		},

	

		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaALcGhrZbFUDR-MGa8j3Nu6dECIsNKy98U3w6MUBnxsb7hT-eHSfE39MHfee-BeEylpHJqwFwSqNylsObuUorme3Cv7ug=s1600",
			name: "Robosoccer",
			
			start_time: new Date("2023-11-04 12:00:00"),
			end_time: new Date("2023-11-04 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize: 15000,
			organizers: [["Krishna Teja", "7815892596"],[" Srija", "8074402112"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/a2KQM",
			id: "1234567890",
		},


		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCxmKMnJU8O6tclrzQdmKJPevKaWdJHdARWBhpRsDV-d8HAvaNE-0OwwczhCcDgm2juUHpNd74mTAAwv4EzDphfIaY2=s1600",
			name: "Line Follower",
			
			start_time: new Date("2023-11-05 12:00:00"),
			end_time: new Date("2023-11-05 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize: 15000,
			organizers: [["Gaurav Kumar", "9693132209"],[" Sougata saha", "9123789635"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/UWeuP",
			id: "1234567890",
		},


		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCudHAY3ioRdH9FTwrcxj5uZBqtCk5sH6F9MJe5_5M1xX5LTBfPz-OJV2HuGhPErYM_0y6fy-2dIfKaT5Wiyg-ju1Cp2g=s1600",
			name: "Aeronautica Rally",
			
			start_time: new Date("2023-11-05 12:00:00"),
			end_time: new Date("2023-11-05 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize: 25000,
			organizers: [["Mayank", "7023256707"],["Harshita", "9555733251"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/gpMu5",
			id: "1234567890",
		},

		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCxhcVTHITMl7extCWN0hni9AnMBwMmRHV4h5M-FFx4HjTrKkwCtuX0jcfUxaCuKVbIQ4Fn0_rdKeE4oyMR-KwvbxKvjg=s1600",
			name: "Aqua Rush",
			
			start_time: new Date("2023-11-04 12:00:00"),
			end_time: new Date("2023-11-04 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize: 15000,
			organizers: [["Moulik jain", "9814064766"],[" Mohit Kumar", "6299463187"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/YRf2r",
			id: "1234567890",
		},

		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCFpSGcLUisuDV8F2IodJLdAjOiTydfVYhyAKoJZ4l5GkoboEt_pbrQOZikVMfknJ1pCxm2eh7Cw8bW_GIdD4zZmIhx=s1600",
			name: "Micromouse",
			
			start_time: new Date("2023-11-04 12:00:00"),
			end_time: new Date("2023-11-04 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize: 10000,
			organizers: [["Mayank sen", "7023256707"],[" Satyam sahoo", "9668536676"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/vpTUL",
			id: "1234567890",
		},

	




		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAv_WTR5py-u1vXdZ3OfS5dmeT0ljXd6zzcISj8rvrXIJPfi53NpgfOY5BNT9PCxq6IpOaYeACc1GdLcLozwNhDsbu-2g=s1600",
			name: "	V^2:Vinegar Velocity ",
			
			start_time: new Date("2023-10-26 12:00:00"),
			end_time: new Date("2023-11-04 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize:4000,
			organizers: [["Abhinav Tiwari", "8960689150"],["Rakshit Luna", "8529882003 "],["Sanchay", "9769565878"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://bit.ly/celesta23_vinegar_velocity_reg",
			id: "1234567890",
		},




		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAY8GEfKqofzvu62B20luO6XYewqj7wgGfpCxYt9extbmb99Yk65hseEsd_AuAHY3-O9grAe1ZaHzQzAs5GsxlNR_b2cQ=s1600",
			name: "	Quest-Ion ",
			
			start_time: new Date("2023-11-03 12:00:00"),
			end_time: new Date("2023-11-03 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize:5000,
			organizers: [["Akhand Singh", "7007616490"],["Anirudh DB", "8867003694 "]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://bit.ly/celesta23_quest-ion_registration",
			id: "1234567890",
		},


		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAKTLINAsuSYjVfjHqdhbQi72bQv-IZZbFK9bO77KbW5Gmw_PqAw2NB2NJAlLULga5XPX1Z18Fvy5wbcQ-cN_NGL7MB=s1600",
			name: "	Youth Parliament",
			
			start_time: new Date("2023-11-04 12:00:00"),
			end_time: new Date("2023-11-04 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize:10000,
			organizers: [["Aakash Shanker", "9523817796"],["Divyam Gupta", "9911312300"],["Krishna Purwar", "7023919299"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://bit.ly/celesta23_youth_parliament_reg",
			id: "1234567890",
		},


		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBGJ2_--tt6AqrUeHTQcCaUaGR85RFn5UVfg7CAMhnTvmu4QSOdkYmtoRBV9_CKa64srkoDXJfRuAd2tMQNfYN7HRINCg=s1600",
			name: "	Static Rush",
			
			start_time: new Date("2023-11-04 12:00:00"),
			end_time: new Date("2023-11-04 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize:5000,
			organizers: [["Krishna Kant", "9935025775"],[" Pranesh Priyanshu", "8210196102"],["Harshith Patnaik", "8074540206"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/VzmcI",
			id: "1234567890",
		},


		 

		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCPVz0KKAjzuXghwEaT2-HMeKNE-wEMFhtl-wN8kHGBOjdb7yOqBRlRX1AJjzxqLU7OiMohRW1fZ6IwoJzjrhjEzq4B6w=s1600",
			name: "Mind Bender",
			
			start_time: new Date("2023-11-04 12:00:00"),
			end_time: new Date("2023-11-04 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize:3000,
			organizers: [["divyam goel", "6283872232"],["anchal dubey", "8401512177"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/MwSV3",
			id: "1234567890",
		},


		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBffmj20x6QZmXxpBKyJQhi75DfyY1Sw4ogNQGRiMOXl0udMbAIxYVWa9JDnDcHZCkGxo1uVxfnwG7X3mnPmQXn-cqbJw=s1600",
			name: "BBS",
			
			start_time: new Date("2023-11-05 12:00:00"),
			end_time: new Date("2023-11-05 20:00:00"),
			venue: "Offline",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize:5000,
			organizers: [["pulah panara", "8511129351"],["aryan kaushal", "7073692364"]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 0,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/r2QTU",
			id: "1234567890",
		},


		{
			is_active: true,
			imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBMxn0Z_gbMXowhgITEDi4kUqQS4BtCM2TnyeveWFJE3O6Sz0t2rIQLsR79hfro2-golyErn_5iexQyLowzZtc-QBDyTw=s1600",
			name: "Mine the Model",
			
			start_time: new Date("2023-10-31 12:00:00"),
			end_time: new Date("2023-11-07 20:00:00"),
			venue: "Online",
			description: "",
			min_team_size: 2,
			max_team_size: 3,
			registration_fee: 0,
			registration_deadline: new Date("2023-10-29 10:00:00"),
			prize:15000,
			organizers: [["Archit Sharma", "93015 97124 "],["Atharva Deshmukh ", "86682 55873"],["A.S. Poornash  ", "94433 54972 "]],
			video: "https://marketplace.canva.com/EAFnqN5K_CI/1/0/1131w/canva-purple-and-orange-modern-business-webinar-imageUrl-portrait-OTKxrh39Cs0.jpg",
			is_online: 1,
			is_solo: 0,
			registration_link: "https://celestalinks.pythonanywhere.com/y2xUq",
			id: "1234567890",
		},



	]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let host = serverUrl;

		async function callAPI() {
			try {
				const res = await fetch('${host}/events/detailed', {
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
		<div className="spbg">
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
		</div>
	);
};
export default Events;