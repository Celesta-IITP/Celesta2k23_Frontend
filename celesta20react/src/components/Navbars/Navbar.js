import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_3.png";
import logoVerdant from "../../assets/img/Logo - Verdant Odyssey.svg";
import arrow from "../../assets/img/arrow.svg";
import { compose } from "redux";
import { connect } from "react-redux";
import { logoutUser, refreshPage } from "../../redux/actions/authActions";
// reactstrap components
import { Navbar, NavLink, Container } from "reactstrap";
import "./navStyle.css";

class ComponentsNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			secondaryOpen: false,
			profileOpen: false,
			collapseOpen: false,
			userInfo: this.props.user ? this.props.user : {},
		};
	}
	refreshFunction = async () => {
	  await this.props.refreshPage(JSON.parse(localStorage.getItem("user")));
	};
	logoutHandler = (e) => {
		this.props.logoutUser();
		this.props.history.push("/");
	};
	componentDidMount() {
		const token = localStorage.getItem("token");
		if (token) {
		  this.refreshFunction();
		}
		document.getElementsByClassName("cd-header").item(0).classList.remove("menu-is-open");
		document.getElementsByClassName("menu-icon").item(0).classList.remove("open");
		document.getElementsByClassName("cd-primary-nav").item(0).classList.remove("is-visible");
		document.body.classList.remove("overflow-hidden");
	}

	render() {
		return (
			<Navbar className="fixed-top" color-on-scroll="100" expand="lg">
				<Container>
					<header className="cd-header">
						<div className="cd-logo">
							<ul>
								<NavLink href="/">
									<img src={logo} alt="Logo" style={{ maxHeight: "45px" }} />
									<img src={logoVerdant} className="nav-logo-verdant" alt="Logo" style={{ maxHeight: "45px" }} />
								</NavLink>
							</ul>
						</div>

						<ul className="nav-desktop-primary">
							<li>
								<Link to="/">HOME</Link>
							</li>

							<li
								onMouseOver={() =>
									this.setState({
										secondaryOpen: true,
									})
								}
								onMouseLeave={() =>
									this.setState({
										secondaryOpen: false,
									})
								}>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<Link className="nav-menu-opener" style={this.state.secondaryOpen ? { textDecoration: "underline" } : {}}>
									THE FEST
								</Link>

								{this.state.secondaryOpen && (
									<div className="nav-desktop-secondary">
										{/* <Link to="/ca">CAMPUS AMBASADDOR</Link> */}
										{/* <Link to="/Points">LIVE POINTS TABLE</Link> */}
										<Link to="/gallery">GALLERY</Link>
										<Link to="/sponsors">SPONSORS</Link>
										<Link to="/Team">OUR TEAM</Link>
									</div>
								)}
							</li>

							<li>
								<Link to="/events-page">EVENTS</Link>
							</li>

							<li className="nav-primary-separator">
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a>|</a>
							</li>

							{Object.keys(this.state.userInfo).length !== 0 ? (
								this.state.userInfo.isAdmin ? (
									<>
										<li>
											<Link to="/events/add">ADD AN EVENT!</Link>
										</li>
										<li>
											<Link to="/signin-page" onClick={this.logoutHandler}>
												LOGOUT
											</Link>
										</li>
									</>
								) : (
									<li
										style={{ minWidth: "175px", width: "fit-content" }}
										onClick={() =>
											this.setState({
												profileOpen: !this.state.profileOpen,
											})
										}
										onMouseLeave={() =>
											this.setState({
												profileOpen: false,
											})
										}>
										<Link className="nav-menu-opener nav-profile-button">
											{this.state.userInfo.name.split(' ')[0].toUpperCase()}
											<font className="grey-text">{"(" + this.state.userInfo.celestaId.toUpperCase() + ")"}</font>
										</Link>

										{this.state.profileOpen && (
											<div className="nav-desktop-secondary">
												<Link className="red-text" to="/signin-page" onClick={this.logoutHandler}>
													SIGN OUT
												</Link>
											</div>
										)}
									</li>
								)
							) : (
								<>
									<li>
										<Link to="/signin-page">LOG IN</Link>
									</li>
									<li>
										<Link to="/register-page" className="nav-desktop-register">
											REGISTER
										</Link>
									</li>
								</>
							)}
						</ul>

						<div
							className="nav-but-wrap"
							onClick={() => {
								document.getElementsByClassName("cd-header").item(0).classList.toggle("menu-is-open");
								document.getElementsByClassName("menu-icon").item(0).classList.toggle("open");
								if (document.getElementsByClassName("cd-primary-nav").item(0).classList.contains("is-visible")) {
									document.getElementsByClassName("cd-primary-nav").item(0).classList.remove("is-visible");
									document.body.classList.remove("overflow-hidden");
								} else {
									document.getElementsByClassName("cd-primary-nav").item(0).classList.add("is-visible");
									document.body.classList.add("overflow-hidden");
								}
							}}>
							<div className="menu-icon hover-target">
								<span className="menu-icon__line menu-icon__line-left"></span>
								<span className="menu-icon__line menu-icon__line-up"></span>
								<span className="menu-icon__line menu-icon__line-down"></span>
								<span className="menu-icon__line menu-icon__line-right"></span>
							</div>
						</div>
					</header>
					<nav>
						<ul className="nav-mobile-primary cd-primary-nav">
							<li>
								<Link to="/">HOME</Link>
							</li>

							<li
								onClick={() =>
									this.setState({
										secondaryOpen: !this.state.secondaryOpen,
									})
								}
								onMouseLeave={() =>
									this.setState({
										secondaryOpen: false,
									})
								}>
								<div>
									{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
									<a className="nav-menu-opener">THE FEST</a>
									<img src={arrow} className="nav-mobile-opener" style={this.state.secondaryOpen ? { transform: "translate(-10px, -3px) rotate(0deg)" } : {}} alt="" />
								</div>

								{this.state.secondaryOpen && (
									<div className="nav-mobile-secondary">
										{/* <Link to="/ca">CAMPUS AMBASADDOR</Link> */}
										{/* <Link to="/Points">LIVE POINTS TABLE</Link> */}
										<Link to="/gallery">GALLERY</Link>
										<Link to="/sponsors">SPONSORS</Link>
										<Link to="/Team">OUR TEAM</Link>
									</div>
								)}
							</li>

							<li>
								<Link to="/events-page">EVENTS</Link>
							</li>

							{Object.keys(this.state.userInfo).length !== 0 ? (
								this.state.userInfo.isAdmin ? (
									<>
										<li>
											<Link to="/events/add">ADD AN EVENT!</Link>
										</li>
										<li>
											<Link to="/signin-page" onClick={this.logoutHandler}>
												SIGN OUT
											</Link>
										</li>
									</>
								) : (
									<li
										onClick={() =>
											this.setState({
												profileOpen: !this.state.profileOpen,
											})
										}
										onMouseLeave={() =>
											this.setState({
												profileOpen: false,
											})
										}>
										<div>
											{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
											<a className="nav-menu-opener">
												{this.state.userInfo.name.split(' ')[0].toUpperCase()}
												<font className="grey-text">{"(" + this.state.userInfo.celestaId.toUpperCase() + ")"}</font>
											</a>
										</div>

										{this.state.profileOpen && (
											<div className="nav-mobile-secondary">
												<Link className="red-text" to="/signin-page" onClick={this.logoutHandler}>
													SIGN OUT
												</Link>
											</div>
										)}
									</li>
								)
							) : (
								<>
									<li>
										<Link to="/signin-page">LOG IN</Link>
									</li>
									<li>
										<Link to="/register-page" className="nav-desktop-register">
											REGISTER
										</Link>
									</li>
								</>
							)}
						</ul>
					</nav>
				</Container>
			</Navbar>
		);
	}
}
const mapStateToProps = (state) => ({
	user: state.auth.user,
	isLoading: state.auth.isLoading,
	error: state.error,
});
export default withRouter(compose(connect(mapStateToProps, { logoutUser, refreshPage }))(ComponentsNavbar));
//export default ComponentsNavbar;
