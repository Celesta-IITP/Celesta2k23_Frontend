// simple react modal component
import React from "react";
// import { AuthContext } from "../authContext";
// import soloEventRegistration from "../Event Registration/soloEventRegistration"
import styles from "./Modal.module.css";
// import { useRouter } from "next/router"
// import Image from "../Image";
// import { Link } from "react-router-dom";
// import Routes from "../route"

const Modal = (props) => {
	// const router = useRouter()
	// const userData = useContext(AuthContext);

	return (
		<React.StrictMode>
			<div id="backdrop" className={styles.modal} onClick={() => props.closeHandler(false)}>
				<div
					className={styles.modalContent}
					onClick={(e) => {
						e.stopPropagation();
					}}>
					<div className={styles.modal_head}>
						<h1>{props.title}</h1>
						{/* <hr style={{height:"10px", color:"black"}}/> */}
						<svg height="20px" viewBox="0 0 384 512" alt="Closebtn" onClick={() => props.closeHandler(false)} style={{ cursor: "pointer" }}>
							<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
						</svg>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<div className={styles.image}>
							<img src={props.body.poster ? props.body.poster : "/events/poster.png"} alt="Fest Poster" width="300px" style={{ borderRadius: "15px", aspectRatio: "1" }} />
						</div>
						<div className={styles.modal_body}>
							<div className={styles.date_venue}>
								<span className={styles.date_text}>Date</span>
								<span className={styles.date_value}>
									{new Date(props.body.start_time).toLocaleString("default", {
										day: "numeric",
									})}{" "}
									-{" "}
									{new Date(props.body.end_time).toLocaleString("default", {
										day: "numeric",
									})}
									{new Date(props.body.start_time).toLocaleString("default", {
										month: "long",
									})}
								</span>
								<br />
								<span className={styles.date_text}>Venue</span>
								<span className={styles.date_value}>{props.body.venue}</span>
							</div>
							<p className={styles.description}>{props.body.description}</p>
							<div className={styles.team_pay}>
								<div style={{ fontWeight: "700" }}>
									{/* <img src="/assets/team.svg" /> */}
									{props.body.max_team_size === 1
										? "Individual Participation"
										: props.body.min_team_size === props.body.max_team_size
										? props.body.min_team_size + " members"
										: props.body.min_team_size + " - " + props.body.max_team_size + " members"}
								</div>
								{props.body.registration_fee ? (
									// !userData.isAuth ? (
									<div>
										Registration Fee &nbsp;
										{/* <img src="/assets/payment.svg" /> */}
										<span style={{ fontWeight: "700" }}>₹{props.body.registration_fee}</span>
									</div>
								) : // ) : userData.state.user.user_type !==
								//   "iitp_student" ? (
								//     <div>
								//         Registration Fee &nbsp;
								//         {/* <img src="/assets/payment.svg" /> */}
								//         <span style={{ fontWeight: "700" }}>
								//             ₹{props.body.registration_fee}
								//         </span>
								//     </div>
								// ) : null
								null}
							</div>
							{props.body.registration_deadline ? (
								<div className={styles.team_pay} style={{ flexDirection: "row" }}>
									{/* <img src="/assets/alert.svg" /> */}
									Registration closes on &nbsp;
									<span style={{ fontWeight: "700" }}>
										{new Date(props.body.registration_deadline).toDateString("default", {
											day: "numeric",
											month: "long",
										})}
									</span>
								</div>
							) : null}
							{props.body.prize ? (
								<div className={styles.team_pay} style={{ flexDirection: "row" }}>
									{/* <img src="/assets/prize.svg" /> */}
									Prizes worth: &nbsp;
									<span style={{ fontWeight: "700" }}> ₹{props.body.prize}!</span>
								</div>
							) : null}
							<div className={styles.contacts}>
								{/* <img src="/assets/contact.svg" />    */}
								{Array.isArray(props.body.organizer) ? (
									<div className={styles.team_pay} style={{ flexDirection: "column" }}>
										Organizers
										{props.body.organizer.map((e, index) => {
											return (
												<a
													key={index}
													style={
														e[1]
															? null
															: {
																	pointerEvents: "none",
															  }
													}
													target="_blank"
													rel="noopener noreferrer"
													href={e[1] ? `tel:${e[1]}` : "#"}>
													<span
														style={{
															fontWeight: "700",
														}}>
														{e[0]}
													</span>
													&nbsp;
													{e[1] ? (
														<span
															style={{
																fontWeight: "700",
															}}>
															{/* <img
                                                                    alt="phone"
                                                                    src="/footer/phone.svg"
                                                                /> */}
															{e[1]}
														</span>
													) : null}
												</a>
											);
										})}
									</div>
								) : (
									<div className={styles.contact}>{props.body.organizer}</div>
								)}
							</div>
						</div>
					</div>
					<div className={styles.modal_footer}>
						{props.body.video ? (
							<a
								target="_blank"
								rel="noopener noreferrer"
								className={styles.rulebtn}
								href={props.body.video}
								// onClick={(e) => props.closeHandler()}
							>
								Rulebook
							</a>
						) : null}
						<button
							className={styles.modal_register_button}
							// onClick={() => {
							//     if (props.body.is_online) {
							//         console.log("online")
							//         router.replace(props.body.registration_link)
							//     } else if (userData.isAuth) {
							//         if (props.body.is_solo) {
							//             soloEventRegistration(
							//                 props.body.id,
							//                 router,
							//                 props.closeHandler
							//             )
							//         } else {
							//             // router.replace(props.body.registration_link)
							//             router.push({
							//                 pathname: `/event-registration/${[
							//                     props.body.id,
							//                 ]}`,
							//                 query: {
							//                     id: props.body.id,
							//                     name: props.body.name,
							//                     description:
							//                         props.body.description,
							//                     max_team_size:
							//                         props.body.max_team_size,
							//                     min_team_size:
							//                         props.body.min_team_size,
							//                     registration_fee:
							//                         props.body.registration_fee,
							//                 },
							//             })
							//         }
							//     } else {
							//         router.push("/userLogin")
							//     }
							// }}
						>
							Register
						</button>
					</div>
				</div>
			</div>
		</React.StrictMode>
	);
};

export default Modal;