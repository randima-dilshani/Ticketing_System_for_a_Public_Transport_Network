import React, { Component } from "react";
import axios from "axios";
import AdminLoginNavBar from "./Layout/AdminLoginNavBar";
import Footer from "../components/Layout/Footer";
import Button from "@material-ui/core/Button";

export default class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.AdminLoginSubmit = this.AdminLoginSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      email: "",
      password: "",
      token: "",
      open: false,
    };
  }
  async AdminLoginSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    await axios
      .post(
        "https://csse-hosting-app.herokuapp.com/api/user/userLogin",
        userData
      )
      .then((res) => {
        this.setState({
          token: res.data.token,
        });
        console.log(this.state.token);
        localStorage.setItem("Authorization", res.data.token);
        window.location = "/busDetails";
        alert("Login Successfull!!");
      })
      .catch((err) => {
        console.log(err);
        this.setState({ open: true });
        alert("Loging Failded.Please Try again!!", err);
      });
  }

  handleClose(reason) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <AdminLoginNavBar />
        <br />
        <br />
        <div class="row d-flex align-items-center justify-content-center">
          <div
            style={{
              width: 800,
              background: "#DBE9FA",
              height: 440,
              borderRadius: "20px",
            }}
          >
            <div class="card-body">
              <div class="container py-5 h-90">
                <div class="row d-flex align-items-center justify-content-center h-100">
                  <div class="col-md-8 col-lg-7 col-xl-6">
                    <img
                      src="https://res.cloudinary.com/nibmsa/image/upload/v1667246075/Screenshot_2022-11-01_at_01.23.34-removebg-preview_ublvff.png"
                      class="img-fluid"
                    />
                    <br />
                    <br />
                    <h2
                      style={{ marginLeft: 50, fontFamily: "times new roman" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <b>ADMIN&nbsp;&nbsp;LOGIN</b>
                    </h2>
                  </div>
                  <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form onSubmit={this.AdminLoginSubmit} name="form">
                      <div class="form-outline mb-4">
                        <div className="col-md-15">
                          <span
                            id="passwordHelpInline"
                            class="form-text"
                            style={{ marginBottom: "2px" }}
                          >
                            {" "}
                            <i className="fa fa-lock"> &nbsp;&nbsp;</i>
                            EMAIL
                          </span>
                          <input
                            type="text"
                            name="email"
                            placeholder="Enter Your User Name"
                            class="form-control "
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div class="form-outline mb-4">
                        <div className="col-md-15">
                          <span
                            id="passwordHelpInline"
                            class="form-text"
                            style={{ marginBottom: "2px" }}
                          >
                            <i className="fa fa-key"> &nbsp;&nbsp;</i>
                            PASSWORD
                          </span>
                          <input
                            type="password"
                            name="password"
                            class="form-control "
                            placeholder="Enter Your Password"
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        style={{
                          background: "#357EC7",
                          width: 45 + "%",
                          marginLeft: 148,
                          height: 20 + "%",
                          color: "BLACK",
                          borderRadius: 20,
                        }}
                      >
                        <i className="fa fa-check-circle"></i>&nbsp; SIGN IN
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
        <Footer />
      </div>
    );
  }
}
