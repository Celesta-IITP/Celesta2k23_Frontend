import React from "react";
// import abc2 from "../../assets/img/ryan.jpg";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import "./sponsors.css";
import sponsdata from "./sponsorsdata" ;



const Sponsors = ( ) =>  {



  return(

   <div className="spbg">
      {/* <div className="sp-main"> */}
        <Navbar />
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <h1 className="sp-head">Sponsors</h1>
        <br></br> <br></br>
        <div className="sp-slider" style={{"background-image": "url()"}}>

          <br/><br/>

          <h1 className=""> OUR LAST YEAR SPONSORS! </h1>
          
          {sponsdata.map(( x , i) =>{
            return(

              <section class="room top" id="room">
            <div className="container"key={i}>
            <div class="heading_top flex1">
        <div class="heading">
          <h5>CELESTA VERDANT ODYSSEY</h5>
          <h2>{x.name}</h2>
        </div>
        
      </div>
            <div className="content grid">
            {x.image.map((y) => <img className="box" src={`${y}`} alt="sponsor" />)}
            </div>
            </div>

         </section>
      )
            })}
        </div>
        {/* </div> */}
        <Footer />
      
       </div>

  )
}




export default Sponsors;
