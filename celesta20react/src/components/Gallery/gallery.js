import React from "react";
// import Gallery from "react-photo-gallery";
import Navbar from "../Navbars/Navbar";
import Footer from "../Footer/Footer.js";
// import { photos } from "./images";
import Images from "./Photos";
import "./gallery.css";
import def from "../../assets/Partners/4041.png";
import layer from "../../assets/img/LandingPageHeroBgLayer.webp"
/* popout the browser and maximize to see more rows! -> */
const Photos = () => {
  //const [x,setX]=useState(0);
  return (
<div className="bdy">
        <Navbar />
<div className="hding">
<h1>Some Previous Year Memories</h1>
</div>


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






      <Footer />
    </div>
  );
};

export default Photos;
