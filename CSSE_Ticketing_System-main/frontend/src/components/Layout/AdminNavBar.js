import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class AdminNavBar extends Component {
  render() {
    return (
      <div>
        <img
          style={{ marginLeft: 25, marginTop:0 }}
          src="https://res.cloudinary.com/nibmsa/image/upload/v1667199794/Screenshot_2022-10-31_at_12.32.06-removebg-preview_y9b5er.png"
          width="120px"
          height="110"
          className="d-inline-block align-top"
          alt=""
        ></img>
        <nav
          class="navbar navbar-expand-lg "
          style={{ backgroundColor: "#A0CFEC" }}
        >
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <img
                    style={{ marginLeft: -50 }}
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1667311443/Screenshot_2022-11-01_at_19.32.42-removebg-preview_lbhdzz.png"
                    width="300px"
                    height="50"
                    className="d-inline-block align-top"
                    alt=""
                  ></img>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="/"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 450,
                      marginRight: 30,
                    }}
                  >
                    <b>Home</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 30,
                      marginRight: 30,
                    }}
                  >
                    <b>About</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 30,
                      marginRight: 30,
                    }}
                  >
                    <b>Contact</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,

                      marginRight: 20,
                    }}
                  >
                    <b>Routes</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="/adminlogin"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
marginLeft:20,
                      marginRight: 30,
                    }}
                  >
                    <b>Sign In</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
