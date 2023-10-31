// simple react modal component
import React from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import styles from "./Modal.module.css";
import defaultPoster from "../../assets/img/RegisterImage.webp";
import TeamEventForm from "components/EventRegisterModals/teamEventForm";
// import Image from "../Image";
// import { Link } from "react-router-dom";
// import Routes from "../route"

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: this.props.user ? this.props.user : {},
			teamModal: false,
		};
	}

	// componentDidMount() {
	// 	console.log(this.state.userInfo);
	// }
	
	closeHandler = () => {
		this.setState({
			teamModal: false,
		});
	};

	render() {
		console.log(this.props.body)
		return (
			<React.StrictMode>
				<div id="backdrop" className={styles.modal} onClick={() => this.props.closeHandler(false)}>
					<div
						className={styles.modalContent}
						onClick={(e) => {
							e.stopPropagation();
						}}>
						<div className={styles.modal_head}>
							<h1>{this.props.title}</h1>
							{/* <hr style={{height:"10px", color:"black"}}/> */}
							<svg height="20px" viewBox="0 0 384 512" alt="Closebtn" onClick={() => this.props.closeHandler(false)} style={{ cursor: "pointer" }}>
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
								{/* <a href={this.props.body.postLinks[0]} target="_blank" rel="noopener noreferrer">
								</a> */}
								<img src={this.props.body.imageUrl ? this.props.body.imageUrl : defaultPoster} alt="Fest Poster" width="300px" style={{ borderRadius: "15px", aspectRatio: "1" }} />

							</div>
							<div className={styles.modal_body}>
								<div className={styles.date_venue}>
									<span className={styles.date_text}>Date</span>
									<span className={styles.date_value}>{this.props.body.start_time.toLocaleDateString()}</span>
									<br />
									{/* <pre>{JSON.stringify(this.props,null,2)}</pre> */}
									<span className={styles.date_text}>Timings</span>
									<span className={styles.date_value}>
										{this.props.body.start_time.toLocaleString()} - {this.props.body.end_time.toLocaleString()}
									</span>
									<br />
									<span className={styles.date_text}>Venue</span>
									<span className={styles.date_value}>{this.props.body.venue}</span>
								</div>
								<p className={styles.description}>{this.props.body.description}</p>
								<div className={styles.team_pay}>
									
									
								</div>
								<div className={styles.team_pay} style={{ flexDirection: "row" }}>
									{/* <img src="/assets/alert.svg" /> */}
									Registration closes before &nbsp;
									<span style={{ fontWeight: "500" }}>{this.props.body.registration_deadline.toLocaleString()}</span>
								</div>
								{this.props.body.prize !== undefined ? (
									<div className={styles.team_pay} style={{ flexDirection: "row" }}>
										Prizes worth: &nbsp;
										<span style={{ fontWeight: "500" }}> ₹{this.props.body.prize}</span>
									</div>
								) : null}
								<div className={styles.contacts}>
									{Array.isArray(this.props.body.organizers) ? (
										<div className={styles.team_pay} style={{ flexDirection: "column" }}>
											Organizers:
											{this.props.body.organizers.map((e, index) => {
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
														href={e[1] ? 'tel:${e[1]}' : "#"}>
														<span
															style={{
																fontWeight: "500",
															}}>
															{e[0]}:
														</span>
														&nbsp;
														{e[1] ? (
															<span
																style={{
																	fontWeight: "500",
																}}>
																{e[1]}
															</span>
														) : null}
													</a>
												);
											})}
										</div>
									) : (
										<div className={styles.contact}>Organizer: {this.props.body.organizers}</div>
									)}
								</div>
							</div>
						</div>
						<div className={styles.modal_footer}>
							{this.props.body.rulebookUrl ? (
								<a
									target="_blank"
									rel="noopener noreferrer"
									className={styles.rulebtn}
									href={this.props.body.rulebookUrl}
									// onClick={(e) => this.props.closeHandler()}
								>
									Rulebook
								</a>
							) : null}
							<button
								className={styles.modal_register_button}
								onClick={() => {
									if (Object.keys(this.state.userInfo).length > 0) {
										if (this.props.body.teamSize === 1) {
										} else {
											this.setState({ teamModal: true });
										}
									} else {
										this.props.history.push("/signin-page");
									}
								}}>
								Register
							</button>
						</div>
					</div>
					{this.state.teamModal ? <TeamEventForm body={this.props.body} closeHandler={this.closeHandler} /> : null}
				</div>
			</React.StrictMode>
		);
	}
}
const mapStateToProps = (state) => ({
	user: state.auth.user,
	isLoading: state.auth.isLoading,
	error: state.error,
});
export default withRouter(compose(connect(mapStateToProps, {}))(Modal));

// export default Modal;