import React from "react";
import { withRouter } from "react-router";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbars/Navbar";
import { compose } from "redux";
import { connect } from "react-redux";
import { refreshPage } from "../redux/actions/authActions";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import heroImg from "../assets/img/LandingPageHero.webp";
import heroBg from "../assets/img/LandingPageHeroBgLayer.webp";
import heroBgAlt from "../assets/img/LandingPageHeroBgLayerAlt.webp";
import cloud1 from "../assets/img/cloud1.png";
import cloud2 from "../assets/img/cloud2.png";
import cloud5 from "../assets/img/cloud3.png";
import cloud4 from "../assets/img/cloud4.png";
class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: this.props.user ? this.props.user : {},
			heroBgLayer: window.innerWidth > 600 ? heroBg : heroBgAlt,
		};
	}

	onWidthChange = () => {
		window.innerWidth > 600 ? this.setState({ heroBgLayer: heroBg }) : this.setState({ heroBgLayer: heroBgAlt });
	}
	componentDidMount() {
		window.addEventListener("resize", this.onWidthChange);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.onWidthChange);
	}

	render() {
		return (
			<div className="bg">
				<Navbar />
				<div className={styles.landing_background_verdant}>
					{/* <img alt="" className={styles.landing_background_odyssey} src={this.state.heroBgLayer} /> */}
					<img alt="Hero" className={styles.landing_hero} src={heroImg} />
					<img alt="Hero" className={styles.cloud1} src={cloud1} />
					<img alt="Hero" className={styles.cloud2} src={cloud2} /> 
					 <img alt="Hero" className={styles.cloud3} src={cloud5} />
					<img alt="Hero" className={styles.cloud4} src={cloud4} />
					<div className={styles.landing_title}>
						<h1>Celesta ’23</h1>
						<h2>The Techno-Management Fest of IIT Patna</h2>

						<div>
							{Object.keys(this.state.userInfo).length > 0 ? (
								<Link to="/events-page" className={styles.landing_register}>
									#getTechXited
								</Link>
							) : (
								<>
									<Link to="/register-page" className={styles.landing_register}>
										REGISTER
									</Link>
									<Link to="/signin-page" className={styles.landing_login}>
										LOG IN
									</Link>
								</>
							)}
						</div>


					</div>
				</div>



				<Footer marginTop={0} />
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	user: state.auth.user,
	isLoading: state.auth.isLoading,
	error: state.error,
});
export default withRouter(compose(connect(mapStateToProps, { refreshPage }))(HomePage));
