import React from "react";
import Navbar from "../Navbars/Navbar";
import Footer from "../Footer/Footer.js";
import "./team.css";
import teamdata from "./teamdata";

// import {MDBAvatar } from "mdbreact" ;

const CommiteeCard = ({ x }) => {
	return (
		<>
			<div className="sec-title light text-center">
				<h2>{x.teamname}</h2>
			</div>

			<div className="row">
				{x.members.map((y, i) => (
					<div key={i} className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image">
									<img src={`${y.image}`} alt="" />
									<div className="social-links">
										<ul>
											<li>
												<a href={y.fb}>
													<span className="fab fa-facebook-f"></span>
												</a>
											</li>
											<li>
												<a href={y.ln}>
													<span className="fab fa-linkedin-in"></span>
												</a>
											</li>
										</ul>
									</div>
								</figure>
							</div>
							<div className="caption-box">
								<h4 className="name">
									{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
									<a>{y.name}</a>
								</h4>
								<span className="designation">{y.position}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

const TeamPage = () => {
	return (
		<div className="aqua-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1">
			<Navbar />
			<section className="speakers-section">

				<div className="container">
				<div className="headBG">
        			<h1 className="head">Our Team</h1>
      			</div>

					<ul className="circles">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>

					{teamdata.map((x, i) => {
						console.log(x);
						return <CommiteeCard x={x} key={i} />;
					})}

					{/* {x.image.map((y) => <img className="sp pa5" src={`${y}`} alt="sponsor" />)} */}
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default TeamPage;
