import React from "react";
import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
// import { Alert } from "antd";
// import { Link } from "react-router-dom";
import  "./RegisterPage.css"
import "../../font.css";
import imageLinkMobile from "../../assets/img/RegisterImageMobile.webp";
import imageLink from "../../assets/img/RegisterImage.webp";

// reactstrap components
import {
  Form,
  Input,
} from "reactstrap";

// core components
import { loginUser, resetPassword } from "../../redux/actions/authActions";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
// import { USER_LOADING } from "../../redux/actions/types";
// import { registerUser } from "../../redux/actions/authActions";
// import { clearErrors } from "../../redux/actions/errorActions";
// import ValidatedLoginForm from "./ValidateLogin";
// import { serverUrl } from "../../config";
import { returnErrors } from "../../redux/actions/errorActions";
class ResetPage extends React.Component {
    state = {
      squares1to6: "",
      squares7and8: "",
      code: "",
      email: "",
      password: "",
      confirmPassword: "",
      msg: null,
	  mobileView: window.innerWidth < 911,
    };
    componentDidMount() {
      document.body.classList.toggle("register-page");
      document.documentElement.addEventListener("mousemove", this.followCursor);
	  window.addEventListener("resize", this.resize);
    }
    componentDidUpdate(prevProps) {
      //console.log(prevProps);
      const { error, isAuthenticated } = this.props;
      const { email, password, code, confirmPassword } = this.state;
      //console.log(error);
      if (error !== prevProps.error) {
        if (error.id === "RESET_FAIL") {
          if (!email || !password || !code || !confirmPassword) {
            this.setState({
              msg: "Please enter all fields",
            });
          } else if (error.status === 401 || error.status === 407) {
            this.setState({
              msg: "Please enter correct code.",
            });
          } else if (error.status === 403) {
            this.setState({
              msg: "Passwords doesn't match",
            });
          } else if (error.status === 404) {
            this.setState({
              msg: "Please enter correct email",
            });
          }
        } else {
          this.setState({
            msg: null,
          });
        }
      }
      if (isAuthenticated) {
        this.toggleModal();
      }
    }
    toggleModal = () => {
      this.props.clearErrors();
      this.props.history.push("/");
    };
  
    componentWillUnmount() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener(
        "mousemove",
        this.followCursor
      );
    }
    followCursor = (event) => {
      let posX = event.clientX - window.innerWidth / 2;
      let posY = event.clientY - window.innerWidth / 6;
      this.setState({
        squares1to6:
          "perspective(500px) rotateY(" +
          posX * 0.05 +
          "deg) rotateX(" +
          posY * -0.05 +
          "deg)",
        squares7and8:
          "perspective(500px) rotateY(" +
          posX * 0.02 +
          "deg) rotateX(" +
          posY * -0.02 +
          "deg)",
      });
    };
    handleCreate = async (email, password, confirmPassword, code) => {
      if (!email || !password || !code || !confirmPassword) {
        // console.log("hello");
        await this.props.returnErrors("empty details", "404", "RESET_FAIL");
      } else {
        const user = {
          email,
          password,
          confirmPassword,
          code,
        };
        await this.props.resetPassword(user);
        console.log(this.props.error.message);
        if (this.props.error.message === "") this.props.history.push("/");
      }
    };
	resize = () => {
		this.setState({
			mobileView: window.innerWidth < 911,
		});
	};
    submitHandler = (e) => {
      e.preventDefault();
      const x = this.state.email;
      const y = this.state.password;
      const z = this.state.confirmPassword;
      const a = this.state.code;
  
      this.handleCreate(x, y, z, a);
    };
  render() {
    // const { msg } = this.state;
    return (
      <>
      {/* Temparary fix */}
      <div style={{
        height:"90px"
      }}>
      </div>
        <Navbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <section className="mid-section">
            <div className="register">
            <div className="row-1" style={{ minWidth: "50%", width: "100%" }}>
              <div>
              <div className="col d-flex justify-content-center"><h4 className="Registersty">Reset Password</h4></div>
              </div>
              <br></br><br></br>
              {/* <div><h5 className="msgbox">This is a message box</h5></div> */}
              <Form 
                  id='form' 
                  className='flex flex-col'
                  onSubmit={this.submitHandler} 
                >
                    <Input 
                      type="text"
                      placeholder="Code which was sent to your registered mail!"
                      className={classnames({
                        "input-group-focus": this.state.fullNameFocus,
                      })}
                      onFocus={(e) =>
                        this.setState({ fullNameFocus: true })
                      }
                      onBlur={(e) =>
                        this.setState({ fullNameFocus: false })
                      }
                      onChange={(e) => {
                        this.setState({ code: e.target.value });
                        console.log(this.state.code);
                      }} 
                    />
                    <Input 
                      type="text" 
                      placeholder='Email' 
                      className={classnames({
                        "input-group-focus": this.state.emailFocus,
                      })}
                      onFocus={(e) =>
                        this.setState({ emailFocus: true })
                      }
                      onBlur={(e) =>
                        this.setState({ emailFocus: false })
                      }
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                        console.log(this.state.email);
                      }}
                    />
                    <Input 
                      type="text" 
                      placeholder="Password"
                      className={classnames({
                        "input-group-focus": this.state.passwordFocus,
                      })}
                      onFocus={(e) =>
                        this.setState({ passwordFocus: true })
                      }
                      onBlur={(e) =>
                        this.setState({ passwordFocus: false })
                      }
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }} 
                    />
                    <Input 
                      type="text"
                      placeholder="Confirm Password" 
                       className={classnames({
                        "input-group-focus": this.state
                          .confirmPasswordFocus,
                      })}
                      onFocus={(e) =>
                        this.setState({ confirmPasswordFocus: true })
                      }
                      onBlur={(e) =>
                        this.setState({ confirmPasswordFocus: false })
                      }
                      onChange={(e) => {
                        this.setState({
                          confirmPassword: e.target.value,
                        });
                      }}
                    />
                    <br></br><br></br>
                    <button className='bttn'>Reset Password</button>
                </Form>
                
            </div>
            <div className="row-2" style={{ minWidth: "50%", width: "100%" }}>
				{!this.state.mobileView
				? <img src={imageLink} alt="" />
				: <img src={imageLinkMobile} alt="" />}
            </div>
          </div>
        </section>
          </div>
          <Footer/>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    error: state.error,
  });
  
  export default compose(
    connect(mapStateToProps, { loginUser, returnErrors, resetPassword })
  )(ResetPage);
