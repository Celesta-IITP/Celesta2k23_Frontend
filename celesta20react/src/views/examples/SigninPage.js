import React from "react";
import  "./RegisterPage.css"
import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
import { Alert } from "antd";
import { Link } from "react-router-dom";


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
import { loginUser } from "redux/actions/authActions";
// import { clearErrors } from "redux/actions/errorActions";
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import { USER_LOADING } from "redux/actions/types";
import { registerUser } from "redux/actions/authActions";
import { clearErrors } from "redux/actions/errorActions";
import ValidatedLoginForm from "./ValidateLogin";
import { serverUrl } from "../../config";
class SigninPage extends React.Component {
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
    }
    componentDidUpdate(prevProps) {
      //console.log(prevProps);
      const { error, isAuthenticated } = this.props;
      const { email, password } = this.state;
      //console.log(error);
      if (error !== prevProps.error) {
        if (error.id === "REGISTER_FAIL") {
          if (!email || !password) {
            this.setState({
              msg: "Please enter all fields",
            });
          } else {
            this.setState({
              msg: "Please enter your correct email and password.",
            });
          }
        } else {
          /*if(!email || !password){
          this.setState({
            msg:"Please enter all fields"
          })
        }*/
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
    handleCreate = (email, password) => {
      const user = {
        email,
        password,
      };
      loginUser(user);
    };
    submitHandler = (e) => {
      e.preventDefault();
      const x = this.state.email;
      const y = this.state.password;
      this.handleCreate(x, y);
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
              <div className="col d-flex justify-content-center"><h2 className="Registersty"><b>Sign in</b></h2></div>
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
                      type="password" 
                      placeholder='Password'
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
                          <Link to="/forgot-page">
              <div className="forbut">
                <div
                  className="btnfg"
                
                >
                  {" "}
                  Forgot Password?
                </div>
                <br></br><br></br>
                </div>
                        </Link>
                        {/* <Button
                          className="btn-round"
                          color="white"
                          size="lg"
                          onClick={this.submitHandler}
                        >
                          {" "}
                          Login
                        </Button> */}
                        <button className='bttn'onClick={this.submitHandler} >Login</button>
                </Form>
                <CardFooter>
                
                        <div>
                  <h4 style={{color:"black",textAlign:"center"}}>Dont have an account?</h4>
                </div>
                <div style={{textAlign:"center"}}>
                <a href="/register-page" style={{color:"black",textAlign:"center",textDecoration: 'underline black'}}>Register</a>
                </div>
                        
                      </CardFooter>
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

export default compose(connect(mapStateToProps, { registerUser, clearErrors }))(
  SigninPage
);
