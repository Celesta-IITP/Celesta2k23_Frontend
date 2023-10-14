import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";


// sections for this page/view
import Header from "views/IndexSections/Header.js";
import EventSlider from "views/IndexSections/EventSlider.js";
import StepWise from "views/IndexSections/StepWise.js";
import Stats from "../components/Stats/stats.js";
import Pronites from "../components/Pronites/pronites.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { refreshPage } from "../redux/actions/authActions.js";
import Timer from "views/IndexSections/Timer.js";

class Index extends React.Component {
  refreshFunction = async () => {
    await this.props.refreshPage(JSON.parse(localStorage.getItem("user")));
  };

  componentDidMount() {
    console.log("first");
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      this.refreshFunction();
    }
    document.body.classList.toggle("index-page");
  }

  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
		<Navbar />
        <div className="wrapper bg">
          <Header />
          <div className="main">
            <Timer />
            <br/>
            <br/>
            <br/>
            <StepWise />
            <Stats />
            <EventSlider />
            <br/>
            <br/>
            <br/>
          </div>
          <h1 align="center"  className="prontxt">
            LAST YEAR <br/> PRONITES ...
          </h1>

          <div className="wrapper-prn">
            <Pronites />
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  error: state.error,
  user: state.auth.user,
});

export default withRouter(
  compose(connect(mapStateToProps, { refreshPage }))(Index)
);
