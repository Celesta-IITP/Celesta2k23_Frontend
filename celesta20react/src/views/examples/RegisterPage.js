import React from "react";
// import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
// import { Alert } from "antd";
// import { Link } from "react-router-dom";
import "./RegisterPage.css";
import "../../font.css";
// import imageLink from "../../assets/img/RegisterImageMobile.png";

// reactstrap components
import {
	Form,
	Input,
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
// import { USER_LOADING } from "redux/actions/types";
import { registerUser } from "redux/actions/authActions";
import { clearErrors } from "redux/actions/errorActions";
// import ValidatedLoginForm from "./ValidateLogin";
import { serverUrl } from "../../config";
class RegisterPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: "",
    email: "",
    password: "",
    name: "",
    sex: "Sex",
    college: "",
    refId: "",
    phone: "",
    msg: "",
    temp: "0",
    dropdownOpen: false,
	mobileView: window.innerWidth < 768,
  };
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
	window.addEventListener('resize', this.resize);
    console.log(this.props.isLoading);
    console.log(serverUrl);
  }
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    const { name, email, password, college, sex, phone } = this.state;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        if (!email || !password || !name || !college || !sex || !phone) {
          this.setState({
            temp: "1",
            msg: "Please enter all fields",
          });
        } else if (error.status === 403) {
          this.setState({
            temp: "1",
            msg: "Email is already registered",
          });
        } else if (error.status === 500) {
          this.setState({
            temp: "1",
            msg: "Mail send failed.",
          });
        } else if (error.status === 404) {
          this.setState({
            temp: "1",
            msg: "Please check your referral id",
          });
        } else {
          this.setState({
            msg: "",
          });
        }
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
  toggleDropDown = (e) => {
    console.log(e.value);
    console.log(this.state.dropdownOpen);
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
    //alert("You have registered succesfully.")
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
  handleCreate = async (
    name,
    email,
    password,
    college,
    sex,
    phone,
    referralId
  ) => {
    const user = {
      name,
      email,
      password,
      college,
      sex,
      phone,
      referralId,
    };
    this.setState({
      msg: "",
    });
    await this.props.registerUser(user);
    if (this.state.msg === "") {
      this.setState({
        msg: "Registered Succesfully",
      });
      this.resetUserInputs();
    }
    //this.props.history.push("/");
  };
  resetUserInputs = () => {
    console.log("Hello");
    this.setState({
      name: "",
      email: "",
      sex: "Sex",
      phone: "",
      password: "",
      college: "",
      refId: "",
    });
    console.log(this.state.name);
  };
  submitHandler = (e) => {
    e.preventDefault();
    let result;
    if (this.state.sex === "Male") result = 0;
    else if (this.state.sex === "Female") result = 1;
    else result = 2;
    console.log(result);
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;
    const college = this.state.college;
    const sex = result;
    const phone = this.state.phone;
    const refId = this.state.refId ? this.state.refId : "CLST0000";

    this.handleCreate(name, email, password, college, sex, phone, refId);
  };
  changeValue = (e) => {
    let result;
    if (e.currentTarget.textContent === "Male") result = 0;
    else if (e.currentTarget.textContent === "Female") result = 1;
    else result = 2;
    console.log(result);
    this.setState({ sex: e.currentTarget.textContent });
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
            <div className="row-1">
              <div>
                <h4 className="Registersty">Register</h4>
              </div>
              {/* <div><h5 className="msgbox">This is a message box</h5></div> */}
                <Form
                  id='form'
                  className='flex flex-col'
                  onSubmit={this.submitHandler}
                >
                    <Input
                      type="text"
                      placeholder='Full Name'
                      className="fields"
                      onChange={(e)=>{
                        this.setState({name: e.target.value})
                      }}
                    />
                    <Input
                      type="text"
                      placeholder='Email'
                      onChange={(e)=>{
                        this.setState({email: e.target.value})
                      }}
                    />
                    <Input
                      type="password"
                      placeholder='Password'
                      onChange={(e)=>{
                        this.setState({password: e.target.value})
                      }}
                    />
                    <Input
                      type="text"
                       placeholder='College name'
                       onChange={(e)=>{
                        this.setState({college: e.target.value})
                      }}
                    />
                    <Input
                      type="text"
                      placeholder='Mobile Number'
                      onChange={(e)=>{
                        this.setState({phone: e.target.value})
                      }}
                    />
                    <Input
                      type="text"
                      placeholder='Referral ID'
                      onChange={(e)=>{
                        this.setState({refId: e.target.value})
                      }}
                    />
                    <button className='bttn'>Register</button>
                </Form>
                <div>
                  <h4 className="alrdyregis">Already Registered?</h4>
                </div>
                <div style={{textAlign:"center"}}>
                <a href="/signin-page" style={{color:"black",textAlign:"center",textDecoration: 'underline black'}}>Login</a>
                </div>
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
	RegisterPage
);
