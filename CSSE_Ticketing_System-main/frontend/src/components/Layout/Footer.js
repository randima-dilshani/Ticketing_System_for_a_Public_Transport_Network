import React, { Component } from "react";
import "./Footer.css";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DraftsIcon from "@mui/icons-material/Drafts";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default class footer extends Component {
  render() {
    return (
      <div>
        <div class="footer-dark">
          <footer>
            <br />
            <div class="container">
              <div class="row">
                <div class="col-md-3 item">
                  <img
                     src="https://res.cloudinary.com/nibmsa/image/upload/v1667199794/Screenshot_2022-10-31_at_12.32.06-removebg-preview_y9b5er.png"
                    width="90px"
                    height="80"
                    className="d-inline-block align-top"
                    alt=""
                  />

                  <div style={{ fontFamily: "TIMES NEW ROMAN" }}>
                    <h3 style={{ fontSize: "25px", marginLeft: -45 }}>
                      SMART LINE TRAVELER
                    </h3>
                    <ul>
                      <li>
                        <a href="#" style={{ marginLeft: -45 }}>
                          Fllow us on Social Media{" "}
                        </a>
                      </li>
                      <div
                        class="col item social"
                        style={{
                          marginRight: "46px",
                          marginTop: "10px",
                          marginLeft: -75,
                        }}
                      >
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                        <a href="#" class="fab fa-pinterest"></a>
                      </div>
                      <br />
                      <li>
                        <a
                          href="#"
                          style={{
                            marginLeft: -45,
                            fontSize: 12,
                          }}
                        >
                          Copyright 2022 © SMART LINE TRAVELS. All Rights
                          Reserved.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  class="col-md-3 item"
                  style={{ marginTop: 40, fontFamily: "TIMES NEW ROMAN" }}
                >
                  <h3 style={{ fontSize: "20px", marginLeft: 20 }}>Policies</h3>
                  <ul>
                    <li>
                      <Button color="black">
                        <DoubleArrowIcon
                          style={{
                            color: "black",
                            fontSize: 20,
                            marginLeft: -20,
                          }}
                        />
                      </Button>
                      <a href="#" style={{ fontSize: "16px" }}>
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <Button color="black">
                        <DoubleArrowIcon
                          style={{
                            color: "black",
                            fontSize: 20,
                            marginLeft: -20,
                          }}
                        />
                      </Button>
                      <a href="#" style={{ fontSize: "16px" }}>
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <Button color="black">
                        <DoubleArrowIcon
                          style={{
                            color: "black",
                            fontSize: 20,
                            marginLeft: -20,
                          }}
                        />
                      </Button>
                      <a href="#" style={{ fontSize: "16px" }}>
                        Ticket Policies
                      </a>
                    </li>
                    <li>
                      <Button color="black">
                        <DoubleArrowIcon
                          style={{
                            color: "black",
                            fontSize: 20,
                            marginLeft: -20,
                          }}
                        />
                      </Button>
                      <a href="#" style={{ fontSize: "15px" }}>
                        Support Service
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  class="col-md-3 item"
                  style={{ marginTop: 40, fontFamily: "TIMES NEW ROMAN" }}
                >
                  <h3 style={{ fontSize: "20px", marginLeft: 20 }}>
                    Contact Information
                  </h3>
                  <ul>
                    <Button color="black">
                      <LocationOnIcon
                        style={{
                          color: "black",
                          fontSize: 20,
                        }}
                      />
                    </Button>
                    <a style={{ color: "black" }}>
                      101/1 New Kandy Road, Malabe
                    </a>
                    <br />
                    <Button color="white">
                      <LocalPhoneIcon style={{ color: "black", ontSize: 20 }} />
                    </Button>
                    <a style={{ color: "black" }}>
                     <b> Tel No : +94112342310 | +94712345318</b>
                    </a>{" "}
                    <br />
                    <Button color="black">
                      <DraftsIcon
                        style={{
                          color: "black",
                          fontSize: 20,
                        }}
                      />
                    </Button>
                    <a style={{ color: "black" }}>
                      Email : smartlinetravels@gmail.com
                    </a>
                  </ul>
                </div>

                <div
                  class="col-md-3 item"
                  style={{ marginTop: 40, fontFamily: "TIMES NEW ROMAN" }}
                >
                  <h3 style={{ fontSize: "20px", marginLeft: 25 }}>
                    Useful Links
                  </h3>
                  <ul>
                    <Button color="black">
                      <DoubleArrowIcon
                        style={{
                          color: "black",
                          fontSize: 20,
                        }}
                      />
                    </Button>
                    <a style={{ fontSize: "16px" }}>About Us</a>
                    <br />
                    <Button color="black">
                      <DoubleArrowIcon
                        style={{
                          color: "black",
                          fontSize: 20,
                        }}
                      />
                    </Button>
                    <a style={{ fontSize: "16px" }}>Contact</a>
                  </ul>
                </div>
              </div>
              <p class="copyright">SLIIT.com © 2022</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
