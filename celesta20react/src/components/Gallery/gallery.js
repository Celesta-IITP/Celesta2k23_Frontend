import React from "react";
// import Gallery from "react-photo-gallery";
import Navbar from "../Navbars/Navbar";
import Footer from "../Footer/Footer.js";
// import { photos } from "./images";
import Images from "./Photos";
import "./gallery.css";
import def from "../../assets/Partners/4041.png";
import layer from "../../assets/img/LandingPageHeroBgLayer.webp";

import g1 from "../../assets/gallery/ha1.jpg";
import g2 from "../../assets/gallery/ha2.jpg";
import g3 from "../../assets/gallery/ha3.jpg";
import g4 from "../../assets/gallery/ha4.jpg";
import g5 from "../../assets/gallery/ha5.jpg";
import g6 from "../../assets/gallery/ha6.jpg";
import g7 from "../../assets/gallery/ha7.jpg";
import g8 from "../../assets/gallery/ha8.jpg";
import g9 from "../../assets/gallery/ha9.jpg";
import g10 from "../../assets/gallery/ha10.jpg";
import g13 from "../../assets/gallery/ha13.jpg";
import g14 from "../../assets/gallery/ha14.jpg";
import g15 from "../../assets/gallery/ha15.jpg";
import g16 from "../../assets/gallery/ha16.jpg";


/* popout the browser and maximize to see more rows! -> */
const Photos = () => {
  //const [x,setX]=useState(0);
  return (
<div className="bdy">
        <Navbar />
<div className="hding">
<h1>Some Previous Year Memories</h1>
</div>

{/* 
<section className="des5">

    <div className="container2">

        <div className="circle">
            <div className="crd1"><img src="images/IMG_20190515_212344.jpg"/></div>
            <div className="crd2"><img src="images/554063_City HelloRF.jpg"/></div>
            <div className="crd3"><img src="images/544720_Carpathian Mountains HelloRF.jpg"/></div>
            <div className="crd4"><img src="images/1557114614610.jpg"/></div>
            <div className="crd5"><img src="images/1594993301777.jpg"/></div>
            <div className="crd6"><img src="images/589149_Lakeside.jpg"/></div>
          
        
        </div>
        
        </div>

</section>
 */}


<section className="gllry">
    <div className="gallary23">
  
      <div className="big_strech">
        <img src={g7}></img>
      </div>
      <div>
        <img src={g8}></img>
      </div>
      <div>
        <img src={g9}></img>
      </div>
     
      <div className="h_strech">
        <img src={g10}></img>
      </div>
     
      <div className="h_strech">
        <img src={g13}></img>
      </div>
     
      
      <div className="big_strech">
        <img src={g16}></img>
      </div>

      <div>
        <img src={g14}></img>
      </div>
      <div>
        <img src={g15}></img>
      </div>
      <div className="v_strech">
        <img src={g1}></img>
      </div>
      <div>
        <img src={g2}></img>
      </div>
      <div className="h_strech">
        <img src={g3}></img>
      </div>
      <div>
        <img src={g4}></img>
      </div>
      <div>
        <img src={g5}></img>
      </div>
      <div>
        <img src={g6}></img>
      </div>

      
    </div>
    
    </section>




      <Footer />
    </div>
  );
};

export default Photos;
