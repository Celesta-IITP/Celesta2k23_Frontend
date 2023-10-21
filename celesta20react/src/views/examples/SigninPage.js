import React from "react";
import "./RegisterPage.css";
import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
// import { Alert } from "antd";
import { Link } from "react-router-dom";
import imageLinkMobile from "../../assets/img/RegisterImageMobile.webp";
import imageLink from "../../assets/img/RegisterImage.webp";

// reactstrap components
import { CardFooter, Form, Input } from "reactstrap";

// core components
import { loginUser } from "../../redux/actions/authActions";
// import { refreshPage } from "../../redux/actions/authActions";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
// import { USER_LOADING } from "../../redux/actions/types";
import { clearErrors } from "../../redux/actions/errorActions";
// import ValidatedLoginForm from "./ValidateLogin";
// import { serverUrl } from "../../config";
class SigninPage extends React.Component {
	state = {
		name: "",
		email: "",
		password: "",
		msg: null,
		mobileView: window.innerWidth < 911,
	};
	componentDidMount() {
		document.body.classList.toggle("register-page");
		document.documentElement.addEventListener("mousemove", this.followCursor);
		window.addEventListener("resize", this.resize);
	}
	componentDidUpdate(prevProps) {
		//console.log(prevProps);
		const { error, isAuthenticated } = this.props;
		const { email, password } = this.state;
		//console.log(error);
		if (error !== prevProps.error) {
			if (error.id === "REGISTER_FAIL") {
				if (!email || !password) {
					this.setState({
						msg: "Please enter all fields",
					});
				} else {
					this.setState({
						msg: "Please enter your correct email and password.",
					});
				}
			} else {
				/*if(!email || !password){
          this.setState({
            msg:"Please enter all fields"
          })
        }*/
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
	handleCreate = (email, password) => {
		const user = {
			email,
			password,
		};
		this.props.loginUser(user).then(() => this.props.history.push("/"));
	};
	resize = () => {
		this.setState({
			mobileView: window.innerWidth < 911,
		});
	};
	submitHandler = (e) => {
		e.preventDefault();
		const x = this.state.email;
		const y = this.state.password;
		this.handleCreate(x, y);
	};
	render() {
		// const { msg } = this.state;
		return (
			<>
				{/* Temparary fix */}
				<div
					style={{
						height: "90px",
					}}></div>
				<Navbar />
				<div className="wrapper">
					<div className="page-header">
						{/* <div className="page-header-image" /> */}
						<section className="mid-section">
							<div className="register">
								<div className="row-1" style={{ minWidth: "50%", width: "100%" }}>
									<div style={{ textAlign: "center" }}>
										<h4 className="Registersty">Sign in</h4>
									</div>
									<br></br>

									{/* <div><h5 className="msgbox">This is a message box</h5></div> */}
									<Form id="form" className="flex flex-col" onSubmit={this.submitHandler}>
										<Input
											type="text"
											placeholder="Email"
											className={classnames({
												"input-group-focus": this.state.emailFocus,
											})}
											onFocus={(e) =>
												this.setState({
													emailFocus: true,
												})
											}
											onBlur={(e) =>
												this.setState({
													emailFocus: false,
												})
											}
											onChange={(e) => {
												this.setState({
													email: e.target.value,
												});
												// console.log(e.target.value);
											}}
										/>
										<Input
											type="password"
											placeholder="Password"
											className={classnames({
												"input-group-focus": this.state.passwordFocus,
											})}
											onFocus={(e) =>
												this.setState({
													passwordFocus: true,
												})
											}
											onBlur={(e) =>
												this.setState({
													passwordFocus: false,
												})
											}
											onChange={(e) => {
												this.setState({
													password: e.target.value,
												});
											}}
										/>
										<Link to="/forgot-page">
											<div className="forbut">
												<div className="btnfg"> Forgot Password?</div>
												<br></br>
												<br></br>
											</div>
										</Link>
										{/* <Button
                          className="btn-round"
                          color="white"
                          size="lg"
                          onClick={this.submitHandler}
                        >
                          {" "}
                          Login
                        </Button> */}
										<button className="bttn" onClick={this.submitHandler}>
											Login
										</button>
									</Form>
									<CardFooter style={{ backgroundColor: "transparent", border: "none" }}>
										<div>
											<h4
												style={{
													color: "black",
													textAlign: "center",
												}}>
												Dont have an account?
											</h4>
										</div>
										<div style={{ textAlign: "center" }}>
											<a
												href="/register-page"
												style={{
													color: "black",
													textAlign: "center",
													textDecoration: "underline black",
												}}>
												Register
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

export default compose(connect(mapStateToProps, { loginUser, clearErrors }))(SigninPage);
