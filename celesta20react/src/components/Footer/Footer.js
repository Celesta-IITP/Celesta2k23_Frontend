import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";
export default function Footer({marginTop}) {
	return (
		<>
			<div className="Footer" style={{marginTop : (marginTop != null ? marginTop : "")}}>
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-5 col-12 ft-1">
							<h3>
								<span>CELESTA</span>
							</h3>
							<p>Celesta is the annual Techno-Management Fest of IIT Patna. </p>
							<div className="footerIcons">
								<a href="https://youtube.com/@CelestaIITPatna" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
									<i className="">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
											<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
										</svg>
									</i>
								</a>

								<a href="https://twitter.com/celesta_iitp" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
									<i className="">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
											<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
										</svg>
									</i>
								</a>

								<a href="https://instagram.com/celestaiitp_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
									<i className="">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
											<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
										</svg>
									</i>
								</a>
								<a href="https://linkedin.com/company/celesta-iit-patna/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
									<i className="">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
											<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
										</svg>
									</i>
								</a>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 col-12 ft-2">
							<h3>Quick Links</h3>
							<ul>
								<li className="nav-item">
									<a href="/events-page">Events</a>
								</li>
								<li className="nav-item">
									<a href="/page1">Workshops</a>
								</li>
								<li className="nav-item">
									<a href="/ca">CA program</a>
								</li>
								<li className="nav-item">
									<a href="/sponsors">Sponsors</a>
								</li>
								<li className="nav-item">
									<a href="/register-page">Register</a>
								</li>
								<li className="nav-item">
									<a href="/signin-page">Sign IN</a>
								</li>
							</ul>
						</div>
						<div className="col-md-6 col-lg-4 col-12 ft-3">
							<h3>Contact Us</h3>
							{/* <p><i className="fa-solid fa-envelope"></i> celesta.iitp@gmail.com</p> */}
							<a href="mailto:celesta.iitp@gmail.com" >
								celesta.iitp@gmail.com
							</a>
							<p>
								{/* <i className="fa-solid fa-paper-plane">
									<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
										<path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
									</svg>
								</i>&nbsp; */}
								Patna, Bihar
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='Last-footer'>
                <p>CELESTA 2023</p>
            </div> */}
		</>
	);
}
