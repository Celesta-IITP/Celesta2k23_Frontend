import React from "react";
import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
import { Alert } from "antd";
import { Link } from "react-router-dom";
import  "./RegisterPage.css"

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Dropdown,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  InputGroupButtonDropdown,
} from "reactstrap";

// core components
import { loginUser, forgotPassword } from "redux/actions/authActions";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import { USER_LOADING } from "redux/actions/types";
import { registerUser } from "redux/actions/authActions";
import { clearErrors } from "redux/actions/errorActions";
import ValidatedLoginForm from "./ValidateLogin";
import { serverUrl } from "../../config";
class ForgotPage extends React.Component {
    state = {
      squares1to6: "",
      squares7and8: "",
      name: "",
      email: "",
      password: "",
      msg: null,
    };
    componentDidMount() {
      document.body.classList.toggle("register-page");
      document.documentElement.addEventListener("mousemove", this.followCursor);
      this.setState({
        msg: null,
      });
    }
    componentDidUpdate(prevProps) {
      //console.log(prevProps);
      const { error, isAuthenticated } = this.props;
      const { email } = this.state;
      //console.log(error);
      if (error !== prevProps.error) {
        if (error.id === "REGISTER_FAIL") {
          if (!email) {
            this.setState({
              msg: "Please enter all fields",
            });
          } else if (error.status === 404) {
            this.setState({
              msg: "Please check your email",
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
    handleCreate = async (email) => {
      await this.props.forgotPassword(email);
      console.log(this.props.error.message);
      if (this.props.error.message === "") this.props.history.push("/reset-page");
    };
    submitHandler = (e) => {
      e.preventDefault();
      const x = this.state.email;
      this.handleCreate(x);
    };
  render() {
    const { msg } = this.state;
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
            <div className="row-1">
              <div>
              <div className="col d-flex justify-content-center"><h2 className="Registersty"><b>Forgot?</b></h2></div>
              </div>
              <br></br>
              {/* <div><h5 className="msgbox">This is a message box</h5></div> */}
                <Form 
                  id='form' 
                  className='flex flex-col'
                  onSubmit={this.submitHandler} 
                >
                    <Input 
                      type="text"
                      placeholder="Email"
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
                      }}
                    />
                    <br></br><br></br>
                    <button className='btn'>Reset Password</button>
                    <br>
                    </br>
                    <div>
                  <h4 style={{color:"black",textAlign:"center"}}>Go to Sign in Page</h4>
                </div>
                <div style={{textAlign:"center"}}>
                <a href="/signin-page" style={{color:"black",textAlign:"center",textDecoration: 'underline black'}}>Sign In</a>
                </div>
                </Form>
            </div>
            <div className="row-2">
                <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/99478938/275152281-153aa4ef-93ae-46b9-92e8-5639b16f463d.png" alt="" />
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
    connect(mapStateToProps, { loginUser, clearErrors, forgotPassword })
  )(ForgotPage);