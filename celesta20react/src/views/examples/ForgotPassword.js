import React from "react";
import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
// import { Alert } from "antd";
// import { Link } from "react-router-dom";
import "./RegisterPage.css";
import imageLinkMobile from "../../assets/img/RegisterImageMobile.webp";
import imageLink from "../../assets/img/RegisterImage.webp";

// reactstrap components
import { Form, Input, CardFooter } from "reactstrap";

// core components
import { forgotPassword } from "../../redux/actions/authActions";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
// import { USER_LOADING } from "redux/actions/types";
// import { registerUser } from "redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";
// import ValidatedLoginForm from "./ValidateLogin";
// import { serverUrl } from "../../config";
class ForgotPage extends React.Component {
	state = {
		squares1to6: "",
		squares7and8: "",
		name: "",
		email: "",
		password: "",
		msg: null,
		mobileView: window.innerWidth < 911,
	};
	componentDidMount() {
		document.body.classList.toggle("register-page");
		document.documentElement.addEventListener("mousemove", this.followCursor);
		this.setState({
			msg: null,
		});
		window.addEventListener("resize", this.resize);
	}
	componentDidUpdate(prevProps) {
		//console.log(prevProps);
		const { error, isAuthenticated } = this.props;
		const { email } = this.state;
		//console.log(error);
		if (error !== prevProps.error) {
			if (error.id === "REGISTER_FAIL") {
				if (!email) {
					this.setState({
						msg: "Please enter all fields",
					});
				} else if (error.status === 404) {
					this.setState({
						msg: "Please check your email",
					});
				}
			} else {
				this.setState({
					msg: null,
				});
			}
		}
		if (isAuthenticated) {
			this.toggleModal();
		}
	}
	toggleModal = () => {
		this.props.clearErrors();
		this.props.history.push("/");
	};

	componentWillUnmount() {
		document.body.classList.toggle("register-page");
		document.documentElement.removeEventListener("mousemove", this.followCursor);
		window.removeEventListener("resize", this.resize);
	}
	followCursor = (event) => {
		let posX = event.clientX - window.innerWidth / 2;
		let posY = event.clientY - window.innerWidth / 6;
		this.setState({
			squares1to6: "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * -0.05 + "deg)",
			squares7and8: "perspective(500px) rotateY(" + posX * 0.02 + "deg) rotateX(" + posY * -0.02 + "deg)",
		});
	};
	handleCreate = (email) => {
		this.props.forgotPassword(email);
		console.log(this.props.error.message);
		if (this.props.error.message === "") this.props.history.push("/reset-page");
	};
	resize = () => {
		this.setState({
			mobileView: window.innerWidth < 911,
		});
	};
	submitHandler = (e) => {
		e.preventDefault();
		const x = this.state.email;
		this.handleCreate(x);
	};
	render() {
		// const { msg } = this.state;
		return (
			<>
				<Navbar />
				<div className="wrapper">
					{/* Temparary fix */}
					<div
						style={{
							height: "90px",
						}}></div>
					<div className="page-header">
						{/* <div className="page-header-image" /> */}
						<section className="mid-section">
							<div className="register">
								<div className="row-1" style={{ minWidth: "50%", width: "100%" }}>
									<div style={{ textAlign : 'center' }}>
										<h4 className="Registersty">Forget Password</h4>
									</div>
									<br />
									{/* <div><h5 className="msgbox">This is a message box</h5></div> */}
									<Form id="form" className="flex flex-col" onSubmit={this.submitHandler}>
										<Input
											type="email"
											required
											placeholder="Email"
											className={classnames({
												"input-group-focus": this.state.emailFocus,
											})}
											onFocus={(e) => this.setState({ emailFocus: true })}
											onBlur={(e) => this.setState({ emailFocus: false })}
											onChange={(e) => {
												this.setState({ email: e.target.value });
											}}
										/>
										<br />
										<button className="bttn">Send Verification mail</button>
									</Form>
									<CardFooter style={{ backgroundColor: "transparent", border: "none" }}>
										<div>
											<h4 style={{ color: "black", textAlign: "center" }}>Go to Sign in Page</h4>
										</div>
										<div style={{ textAlign: "center" }}>
											<a href="/signin-page" style={{ color: "black", textAlign: "center", textDecoration: "underline black" }}>
												Sign In
											</a>
										</div>
									</CardFooter>
								</div>
								<div className="row-2" style={{ minWidth: "50%", width: "100%" }}>
									{!this.state.mobileView
									? <img src={imageLink} alt="" />
									: <img src={imageLinkMobile} alt="" />}
								</div>
							</div>
						</section>
					</div>
					<Footer marginTop={"100px"} />
				</div>
			</>
		);
	}
}
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	isLoading: state.auth.isLoading,
	error: state.error,
});

export default compose(connect(mapStateToProps, { clearErrors, forgotPassword }))(ForgotPage);
