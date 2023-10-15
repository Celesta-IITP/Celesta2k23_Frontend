import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_3.png";
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
			collapseOpen: false,
			userInfo: this.props.user ? this.props.user : {},
		};
	}
	logoutHandler = (e) => {
		this.props.logoutUser();
		/*this.props.history.push("/");*/
	};
	handleSecondaryBar = () => {
		this.setState({
			secondaryOpen: !this.state.secondaryOpen,
		});
	};
	render() {
		return (
			<Navbar className="fixed-top" color-on-scroll="100" expand="lg">
				<Container>
					<header className="cd-header">
						<div className="cd-logo">
							<ul>
								<NavLink href="/">
									<img src={logo} alt="Logo" style={{ maxHeight: "45px" }} />
								</NavLink>
							</ul>
						</div>

						<ul className="nav-desktop-primary">
							<li>
								{/* <Button> */}
								<Link to="/">HOME</Link>
								{/* </Button> */}
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
								<a className="nav-menu-opener" style={this.state.secondaryOpen ? { textDecoration: "underline" } : {}}>
									THE FEST
								</a>

								{this.state.secondaryOpen && (
									<div className="nav-desktop-secondary">
										{/* <li>THE FEST</li> */}
										{/* <NavItem> */}
										<NavLink href="/ca">CAMPUS AMBASADDOR</NavLink>
										<NavLink href="/Points">LIVE POINTS TABLE</NavLink>
										<NavLink href="/gallery">GALLERY</NavLink>
										<NavLink href="/sponsors">SPONSORS</NavLink>
										<NavLink href="/Team">OUR TEAM</NavLink>
										{/* </NavItem> */}
									</div>
								)}
							</li>

							<li>
								<Link to="/events-page">EVENTS</Link>
							</li>
						</ul>

						<div className="nav-but-wrap">
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
							{/* <NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/ca">Campus Ambasaddor</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/Points">Live Points Table</NavLink>
							</NavItem>

							<NavItem>
								<NavLink href="/events-page">Events</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/gallery">Gallery</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/sponsors">Sponsors</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/Team">Our Team</NavLink>
							</NavItem>

							<NavItem>
								<NavLink href="/contact-us-page">Contact Us</NavLink>
							</NavItem>

							{Object.keys(this.state.userInfo).length !== 0 ? (
								<nav>
									<ul>
										<NavItem>
											<Link to="/signin-page" onClick={this.logoutHandler}>
												Logout
											</Link>
										</NavItem>
										<NavItem>
											<NavLink href="/profile-page">{this.state.userInfo.name}</NavLink>
										</NavItem>
									</ul>
									<ul className="cd-secondary-nav">
										{this.state.userInfo.isAdmin ? (
											<li>
												<Button>
													<Link to="/events/add">Add an event!</Link>
												</Button>
											</li>
										) : (
											<Button>
												<Link to="/events-page">Events</Link>
											</Button>
										)}
									</ul>
								</nav>
							) : (
								<ul>
									<NavItem>
										<NavLink href="/signin-page">Login</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/register-page">Register</NavLink>
									</NavItem>
								</ul>
							)} */}
							<li>
								{/* <Button> */}
								<Link to="/">HOME</Link>
								{/* </Button> */}
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
									<a className="nav-menu-opener">
										THE FEST
									</a>
									<img src={arrow} className="nav-mobile-opener" style={this.state.secondaryOpen ? { transform: "translateY(-2px) rotate(0deg)" } : {}} />
								</div>

								{this.state.secondaryOpen && (
									<div className="nav-mobile-secondary">
										{/* <li>THE FEST</li> */}
										{/* <NavItem> */}
										<NavLink href="/ca">CAMPUS AMBASADDOR</NavLink>
										<NavLink href="/Points">LIVE POINTS TABLE</NavLink>
										<NavLink href="/gallery">GALLERY</NavLink>
										<NavLink href="/sponsors">SPONSORS</NavLink>
										<NavLink href="/Team">OUR TEAM</NavLink>
										{/* </NavItem> */}
									</div>
								)}
							</li>

							<li>
								<Link to="/events-page">EVENTS</Link>
							</li>
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
