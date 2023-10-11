import React from 'react'
import styles from "./footer.module.css";
export default function Footer () {
    return (
        <>
            <div className={styles.Footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>CELESTA</span></h3>
                            <p>Celesta is the annual Techno-Management Fest of IIT Patna. </p>
                            <div className="footer-icons">
                                <a
                                href="https://youtube.com/@CelestaIITPatna"
                                target="_blank"
                                aria-label="Youtube"
                                >
                                <i class="fa-brands fa-youtube"></i></a>

                                <a
                                 href="https://twitter.com/celesta_iitp"
                                target="_blank"
                                aria-label="Twitter"
                                >
                                <i class="fa-brands fa-twitter"></i></a>

                                <a href="https://instagram.com/celestaiitp_official/" 
                                target="_blank"
                                aria-label="Instagram"
                                >
                                <i class="fa-brands fa-instagram"></i></a>
                                <a
                                href="https://linkedin.com/company/celesta-iit-patna/"
                                target="_blank"
                                aria-label="LinkedIn"
                                >
                                <i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">CA program</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Sponsors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Sign up</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact Us</h5>
                            {/* <p><i class="fa-solid fa-envelope"></i> celesta.iitp@gmail.com</p> */}
                            <a href="mailto:celesta.iitp@gmail.com" class="fa-solid fa-envelope">
            celesta.iitp@gmail.com
          </a>
                            <p><i class="fa-solid fa-paper-plane"></i> Patna ,Bihar</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='Last-footer'>
                <p>CELESTA 2023</p>
            </div> */}
        </>
    )
}
