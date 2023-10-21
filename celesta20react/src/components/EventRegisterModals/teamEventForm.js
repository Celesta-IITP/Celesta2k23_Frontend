import React from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";
import { Form, Input } from "reactstrap";
import "../../views/examples/RegisterPage.css";
import styles from "../BigModal/Modal.module.css";
import { toast } from "react-toastify";
import { serverUrl } from "config";
// import Image from "../Image";
// import { Link } from "react-router-dom";
// import Routes from "../route"

class TeamModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teamIds: new Array(this.props.body.teamSize).fill(""),
			focus: new Array(this.props.body.teamSize).fill(false),
			eventDetails: this.props.body ? this.props.body : {},
			userInfo: this.props.user ? this.props.user : {},
		};
	}

	// componentDidMount() {
	// 	console.log(this.state.userInfo);
	// }
	submitHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${serverUrl}/registrations/register/${this.state.eventDetails._id}`, {
				// credentials: "include",
				method: "POST",
				referrerPolicy: "no-referrer",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ teamDetails: this.state.teamIds }),
			});
			// setMessage(response.message);
			console.log(response);
			// console.log(message);
			if (response.status === 200) {
				toast.success(response.message);
				// this.props.history.push("/events-page");
			} else {
				toast.error(response.message);
			}
		} catch (error) {
			toast.error("An error occurred during registration");
		}
	};

	render() {
		return (
			<React.StrictMode>
				<div id="backdrop" className={styles.modal} onClick={() => this.props.closeHandler(false)}>
					<div
						className={styles.modalContent}
						onClick={(e) => {
							e.stopPropagation();
						}}>
						<div className={styles.modal_head}>
							<h1>Enter Celesta IDs of your team</h1>
							{/* <hr style={{height:"10px", color:"black"}}/> */}
							<svg height="20px" viewBox="0 0 384 512" alt="Closebtn" onClick={() => this.props.closeHandler(false)} style={{ cursor: "pointer" }}>
								<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
							</svg>
						</div>
						<div className={styles.modal_body}>
							{/* <div className="row-1" style={{ minWidth: "50%", width: "100%" }}>
								{!this.state.mobileView ? <img src={imageLink} alt="" /> : <img src={imageLinkMobile} alt="" />}
							</div> */}
							<div className="row-2" style={{ minWidth: "50%", width: "100%" }}>
								{/* <div><h5 className="msgbox">This is a message box</h5></div> */}
								<Form id="form" className="flex flex-col" onSubmit={this.submitHandler}>
									{new Array(this.props.body.teamSize).fill(0).map((s, index) => {
										return (
											<Input
												key={index}
												type="text"
												placeholder={`Celesta ID of member ${index + 1}`}
												className={classnames({
													"input-group-focus": this.state.focus[0],
												})}
												onFocus={(e) => {
													let focus = [...this.state.focus];
													focus[index] = true;
													this.setState({
														focus: focus,
													});
												}}
												onBlur={(e) => {
													let focus = [...this.state.focus];
													focus[index] = false;
													this.setState({
														focus: focus,
													});
												}}
												onChange={(e) => {
													let teamIds = [...this.state.teamIds];
													teamIds[index] = e.target.value;
													this.setState({
														teamIds: teamIds,
													});
													console.log(this.state.teamIds);
												}}
											/>
										);
									})}
									<br />
									<button className="bttn" onClick={this.submitHandler}>
										Submit & Go <br /> to Payment Page
									</button>
								</Form>
							</div>
						</div>
					</div>
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
export default withRouter(compose(connect(mapStateToProps))(TeamModal));
