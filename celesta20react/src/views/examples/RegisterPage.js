import React from "react";
import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
import { Alert } from "antd";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import "../../font.css";

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardImg,
	CardTitle,
	Label,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
	Dropdown,
	ButtonDropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	InputGroupButtonDropdown,
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import { USER_LOADING } from "redux/actions/types";
import { registerUser } from "redux/actions/authActions";
import { clearErrors } from "redux/actions/errorActions";
import ValidatedLoginForm from "./ValidateLogin";
import { serverUrl } from "../../config";
class RegisterPage extends React.Component {
	state = {
		email: "",
		password: "",
		name: "",
		sex: 2,
		college: "",
		referralId: "",
		phone: "",
		msg: "",
		temp: "0",
	};
	componentDidMount() {
		document.body.classList.toggle("register-page");
		document.documentElement.addEventListener(
			"mousemove",
			this.followCursor
		);
		console.log(this.props.isLoading);
		console.log(serverUrl);
	}
	componentDidUpdate(prevProps) {
		const { error, isAuthenticated } = this.props;
		const { name, email, password, college, sex, phone } = this.state;
		if (error !== prevProps.error) {
			if (error.id === "REGISTER_FAIL") {
				if (
					!email ||
					!password ||
					!name ||
					!college ||
					!sex ||
					!phone
				) {
					this.setState({
						temp: "1",
						msg: "Please enter all fields",
					});
				} else if (error.status === 403) {
					this.setState({
						temp: "1",
						msg: "Email is already registered",
					});
				} else if (error.status === 500) {
					this.setState({
						temp: "1",
						msg: "Mail send failed.",
					});
				} else if (error.status === 404) {
					this.setState({
						temp: "1",
						msg: "Please check your referral id",
					});
				} else {
					this.setState({
						msg: "",
					});
				}
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
		document.documentElement.removeEventListener(
			"mousemove",
			this.followCursor
		);
		//alert("You have registered succesfully.")
	}

	handleCreate = async (
		name,
		email,
		password,
		college,
		sex,
		phone,
		referralId
	) => {
		const user = {
			name,
			email,
			password,
			college,
			sex,
			phone,
			referralId,
		};
		this.setState({
			msg: "",
		});
		await this.props.registerUser(user);
		if (this.state.msg === "") {
			this.setState({
				msg: "Registered Succesfully",
			});
			this.resetUserInputs();
		}
	};
	resetUserInputs = () => {
		console.log("Hello");
		this.setState({
			name: "",
			email: "",
			sex: 2,
			phone: "",
			password: "",
			college: "",
			referralId: "",
		});
		console.log(this.state.name);
	};
	submitHandler = (e) => {
		e.preventDefault();
		const email = this.state.email;
		const password = this.state.password;
		const name = this.state.name;
		const college = this.state.college;
		const phone = this.state.phone;
		const sex = this.state.sex;
		const referralId = this.state.referralId
			? this.state.referralId
			: "CLST0000";
		console.log(name, email, password, college, sex, phone, referralId);
		this.handleCreate(
			name,
			email,
			password,
			college,
			sex,
			phone,
			referralId
		);
	};
	changeValue = (e) => {
		let result;
		if (e.currentTarget.textContent == "Male") result = 0;
		else if (e.currentTarget.textContent == "Female") result = 1;
		else result = 2;
		console.log(result);
		this.setState({ sex: e.currentTarget.textContent });
	};
	render() {
		const { msg } = this.state;
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
						<div className="page-header-image" />
						<section className="mid-section">
							<div className="register">
								<div className="row-1">
									<div>
										<h4 className="Registersty">
											Register
										</h4>
									</div>
									{/* <div><h5 className="msgbox">This is a message box</h5></div> */}
									<Form
										id="form"
										className="flex flex-col"
										onSubmit={this.submitHandler}>
										<Input
											type="text"
											placeholder="Full Name"
											className="fields"
											onChange={(e) => {
												this.setState({
													name: e.target.value,
												});
											}}
										/>
										<Input
											type="text"
											placeholder="Email"
											onChange={(e) => {
												this.setState({
													email: e.target.value,
												});
											}}
										/>
										<Input
											type="password"
											placeholder="Create Password"
											onChange={(e) => {
												this.setState({
													password: e.target.value,
												});
											}}
										/>
										<Input
											type="text"
											placeholder="College name"
											onChange={(e) => {
												this.setState({
													college: e.target.value,
												});
											}}
										/>
										<Input
											type="text"
											placeholder="Mobile Number"
											onChange={(e) => {
												this.setState({
													phone: e.target.value,
												});
											}}
										/>
										<Input
											type="text"
											placeholder="Refferal ID"
											onChange={(e) => {
												this.setState({
													referralId: e.target.value,
												});
											}}
										/>
										<button className="bttn">
											Register
										</button>
									</Form>
									<div>
										<h4 className="alrdyregis">
											Already Registered?
										</h4>
									</div>
									<div style={{ textAlign: "center" }}>
										<a
											href="/signin-page"
											style={{
												color: "black",
												textAlign: "center",
												textDecoration:
													"underline black",
											}}>
											LogIN
										</a>
									</div>
								</div>
								<div className="row-2">
									<img
										src="https://github-production-user-asset-6210df.s3.amazonaws.com/99478938/275152281-153aa4ef-93ae-46b9-92e8-5639b16f463d.png"
										alt=""
									/>
								</div>
							</div>
						</section>
					</div>
					<Footer />
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

export default compose(connect(mapStateToProps, { registerUser, clearErrors }))(
	RegisterPage
);
