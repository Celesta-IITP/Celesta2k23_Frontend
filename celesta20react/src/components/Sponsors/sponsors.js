import React from "react";
// import abc2 from "../../assets/img/ryan.jpg";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import "./sponsors.css";
import { Link } from "react-router-dom";
import sponsdata from "./sponsorsdata";
import spons from "../../assets/Partners/4041.png";
import key21 from "../../assets/spons2023/biharelecdevlop.png";
import key22 from "../../assets/spons2023/stpi.png";
import eve21 from "../../assets/spons2023/PulNirman 1 (1).png";
import eve22 from "../../assets/spons2023/Department of industries 1.png";
import stra21 from "../../assets/spons2023/oil.png";
import stra22 from "../../assets/spons2023/gail_logo_web-page 1 (1).png";
import pho21 from "../../assets/spons2023/instax.png";
import ins21 from "../../assets/spons2023/LIC_logo1 1.png";
import moto21 from "../../assets/spons2023/hero.png";
import zin21 from "../../assets/spons2023/zing.png";
import med21 from "../../assets/spons2023/garda.png";
import med23 from "../../assets/spons2023/patna_se  11.png";
import med24 from "../../assets/spons2023/patna_se_haii  1 (2).png";
import med25 from "../../assets/spons2023/robotics India  1 (1).png";
import med26 from "../../assets/spons2023/patnabeats.png";
import med27 from "../../assets/spons2023/Waah patna 1 (1).png";
import med28 from "../../assets/Partners/Radiomirchi_logo.png";
import med29 from "../../assets/spons2023/patnaites  1 (1).png";
import foo21 from "../../assets/spons2023/amul.png";


import key1 from "../../assets/Partners/J K Logo ver.png";
import key2 from "../../assets/Partners/PulNirman.png";
import groom1 from "../../assets/Partners/beardo_logo_black.png";
import gate1 from "../../assets/Partners/LogoM-0.png";
import strat1 from "../../assets/Partners/ULTRATECH CEMENT 2023.jpg";
import strat2 from "../../assets/Partners/BeltronLogo.png";
import work1 from "../../assets/Partners/Techobyte.png";
import ins1 from "../../assets/Partners/LIC-Logo.png";
import impl1 from "../../assets/Partners/SybyllineRobotics.png";
import socl1 from "../../assets/Partners/GardaPatna.png";
import socl2 from "../../assets/Partners/ItHappensinBihar.png";
import socl3 from "../../assets/Partners/Patnaites.png";
import socl4 from "../../assets/Partners/StoriesOfBihar.jpg";
import media1 from "../../assets/Partners/PatnaBeats.png";
import robo1 from "../../assets/Partners/RoboticsIndia.png";
import ent1 from "../../assets/Partners/Radiomirchi_logo.png";
import hospi1 from "../../assets/Partners/HotelAmalfiGrandPatna.png";

const Sponsors = () => {
  return (
    <div className="spbg">
      {/* <div className="sp-main"> */}
      <Navbar />
      <br></br> <br></br> <br></br> <br></br> <br></br>
      <h1 className="sp-head">Sponsors</h1>
      <br></br> <br></br>
      <div className="sp-slider" style={{ "background-image": "url()" }}>
        <br />
        <br />

        <h1 className=""> THIS YEAR SPONSORS! </h1>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Key Sponsors</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://bsedc.bihar.gov.in/en/">
                        <img src={key21} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>JK TYRE</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://stpi.in/en/home">
                        <img src={key22} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PUL NIRMAN</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>

                <h2>Event Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://brpnnl.bihar.gov.in/">
                        <img src={eve21} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>BEARDO</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://state.bihar.gov.in/industries/CitizenHome.html">
                        <img src={eve22} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>BEARDO</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

   

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Strategic Sponser </h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://iocl.com/">
                        <img src={stra21} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>ULTRATECH</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.gailonline.com/">
                        <img src={stra22} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>BELTRON</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Photography Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://instax.com/">
                        <img src={pho21} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>TECHOBYTE</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Insurance Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://licindia.in/">
                        <img src={ins21} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>LIC</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Motocorp Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.heromotocorp.com/en-in.html">
                        <img src={moto21} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>SYBYLINE ROBOTICS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Travel Partners</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.zingbus.com/">
                        <img src={zin21} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>GARDA PATNA</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

               

               
        
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Media Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/gardapatna/">
                        <img src={med21} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PATNA BEATS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

               


                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/patna_se/?hl=hi">
                        <img src={med23} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PATNA BEATS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>


                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/patna_se_haii/">
                        <img src={med24} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PATNA BEATS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>


                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://roboticsindia.live/">
                        <img src={med25} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PATNA BEATS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>



                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/patnabeats/">
                        <img src={med26} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PATNA BEATS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>


                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/waah_patna/">
                        <img src={med27} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PATNA BEATS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://mirchi.in/">
                        <img src={med28} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PATNA BEATS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/patnaite/">
                        <img src={med29} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PATNA BEATS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Food Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://amul.com/">
                        <img src={foo21} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>ROBOTICS INDIA</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

     
        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Hospitality Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.amalfigrand.com/index.html">
                        <img src={hospi1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    
                <p>HOTEL AMALFI</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>












      <div className="sp-slider" style={{ "background-image": "url()" }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className=""> OUR LAST YEAR SPONSORS! </h1>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Key Sponsors</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.jktyre.com/">
                        <img src={key1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>JK TYRE</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://brpnnl.bihar.gov.in/">
                        <img src={key2} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PUL NIRMAN</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>

                <h2>Grooming Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://beardo.in/">
                        <img src={groom1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>BEARDO</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Gate Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://iesmaster.org/">
                        <img src={gate1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>I.E.S MASTER</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Strategic Sponser </h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.ultratechcement.com/">
                        <img src={strat1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>ULTRATECH</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://bsedc.bihar.gov.in/en/">
                        <img src={strat2} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>BELTRON</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Workshop Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://techobytes.com/">
                        <img src={work1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>TECHOBYTE</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Insurance Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://licindia.in/">
                        <img src={ins1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>LIC</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Implementation Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://in.linkedin.com/company/sybylline-robotics-private-limited">
                        <img src={impl1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>SYBYLINE ROBOTICS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Social Media Partners</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/gardapatna/?hl=hi">
                        <img src={socl1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    <p>GARDA PATNA</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/ithappensinbihar/">
                        <img src={socl2} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>IHOIB</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/patnaite/">
                        <img src={socl3} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PATNAITES</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>

                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/stories.of.bihar/">
                        <img src={socl4} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>STORIES OF BIHAR</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Media Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.instagram.com/patnabeats/">
                        <img src={media1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>PATNA BEATS</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Robotics Media Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://roboticsindia.live/">
                        <img src={robo1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>ROBOTICS INDIA</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Entertainment Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://mirchi.in/">
                        <img src={ent1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                <p>RADIO MIRCHI</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="room top" id="room">
          <div className="container">
            <div class="heading_top flex1">
              <div class="heading">
                <h5>CELESTA VERDANT ODYSSEY</h5>
                <h2>Hospitality Partner</h2>
              </div>
            </div>
            <section className="cursh">
              <div className="crdconta">
                <div className="crd">
                  <div className="crdcont">
                    <div className="crdimg">
                      <a href="https://www.amalfigrand.com/index.html">
                        <img src={hospi1} />
                      </a>
                    </div>
                    {/* <div className="crdtxt">
                    
                <p>HOTEL AMALFI</p>
                </div> */}
                  </div>
                  <div className="curshd"></div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
