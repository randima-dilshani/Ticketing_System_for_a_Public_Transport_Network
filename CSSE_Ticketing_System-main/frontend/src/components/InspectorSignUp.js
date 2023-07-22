import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";
import Footer from "../components/Layout/Footer";

export default function InspectorSignUp() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [nic, setnic] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [route, setroute] = useState("");
  const [busNumber, setbusNumber] = useState("");
  const [passportNo, setpassportNo] = useState("");
  const [country, setcountry] = useState("");
  const [userExpDate, setuserExpDate] = useState("");
  const [role, setrole] = useState("");

  const sendData = async (e) => {
    e.preventDefault();
    console.log(password);
    console.log(confirmpassword);

    let newInspector = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phoneNo,
      nic: nic,
      password: password,
      role: role,
      route: route,
      busNumber: busNumber,
      passportNo: passportNo,
      country: country,
      userExpDate: userExpDate,
    };
    if (password == confirmpassword) {
      console.log(newInspector);
      axios
        .post("http://localhost:8080/api/user/registeruser", newInspector)
        .then(() => {
          alert("Registration Success");
          window.location = "/busDetails";
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Password dismatch");
    }
    setfirstName("");
    setlastName("");
    setemail("");
    setphoneNo("");
    setnic("");
    setpassword("");
    setconfirmpassword("");
    setrole("");
    setroute("");
    setbusNumber("");
    setpassportNo("");
    setcountry("");
    setuserExpDate("");
  };

  return (
    <div>
      <AdminDashboardNavbar />
      <br />
      <div className="row d-flex align-items-center justify-content-center">
        <div
          style={{
            width: 1000,
            background: "#C9DFEC",
            height: 820,
            borderRadius: "20px",
          }}
        >
          <div className="card-body">
            <form action="" method="post" name="form" onSubmit={sendData}>
              <div className="row g-0">
                <div className="col-xl-7 d-none d-xl-block">
                  <br />
                  <h3
                    style={{
                      marginLeft: 500,
                      marginTop: -10,
                      fontFamily: "times new roman",
                      fontSize: 30,
                    }}
                  >
                    <b>INSPECTOR&nbsp;&nbsp;REGISTRATION</b>
                  </h3>
                </div>
                <div className="col-xl-5">
                  <br />
                  <br />
                  <br />
                  <div class="container text-center">
                    <div class="row justify-content-start">
                      <div class="col-6">
                        <div className="form-outline mb-2">
                          <span
                            id="passwordHelpInline"
                            className="form-text"
                            style={{ marginBottom: "2px" }}
                          >
                            <i
                              className="fa fa-bus"
                              style={{ marginRight: 12 }}
                            ></i>
                            Enter Bus Number
                          </span>
                          <div className="col-md-10">
                            <input
                              type="text"
                              placeholder="Bus Number"
                              className="form-control"
                              onChange={(e) => setbusNumber(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div className="form-outline mb-2">
                          <span
                            id="passwordHelpInline"
                            className="form-text"
                            style={{ marginBottom: "2px" }}
                          >
                            <i
                              className="fa fa-road"
                              style={{ marginRight: 12, marginLeft: -10 }}
                            ></i>
                            Select Bus Route
                          </span>
                          <div className="col-md-10">
                            <select
                              type="text"
                              className="form-control"
                              onChange={(e) => setroute(e.target.value)}
                              required
                            >
                              <option value="">Select Root</option>
                              <option value="177">177</option>
                              <option value="156">156</option>
                              <option value="170">170</option>
                              <option value="356">356</option>
                              <option value="253">253</option>
                              <option value="245">245</option>
                              <option value="255">255</option>
                              <option value="245">245</option>
                              <option value="142">142</option>
                              <option value="190">190</option>
                              <option value="199">199</option>
                              <option value="110">110</option>
                              <option value="220">220</option>
                              <option value="19">19</option>
                              <option value="90">90</option>
                              <option value="168">168</option>
                              <option value="159">159</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-2">
                    <span
                      id="passwordHelpInline"
                      className="form-text"
                      style={{ marginBottom: "2px" }}
                    >
                      <i
                        className="fa fa-user"
                        style={{ marginRight: 12, marginLeft: 16 }}
                      ></i>
                      Role
                    </span>
                    <div className="col-md-11">
                      <select
                        className="form-control"
                        name="seat"
                        class="form-control"
                        onChange={(e) => setrole(e.target.value)}
                        required
                      >
                        <option value="">Select</option>
                        <option value="Inspector">Inspector</option>
                        {/* <option value="LocalPassenager">LocalPassenager</option>
                        <option value="ForeignPassenger">
                          ForeignPassenger
                        </option> */}
                      </select>
                    </div>
                  </div>

                  {/* {role === "Inspector" ? ( */}
                  {/* <> */}
                  <div className="form-outline mb-2">
                    <span
                      id="passwordHelpInline"
                      className="form-text"
                      style={{ marginBottom: "2px" }}
                    >
                      <i
                        className="fa fa-user"
                        style={{ marginRight: 12, marginLeft: 16 }}
                      ></i>
                      First Name
                    </span>
                    <div className="col-md-11">
                      <input
                        type="text"
                        placeholder="Enter First Name"
                        className="form-control"
                        onChange={(e) => setfirstName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-2">
                    <span
                      id="passwordHelpInline"
                      className="form-text"
                      style={{ marginBottom: "2px" }}
                    >
                      <i
                        className="fa fa-user"
                        style={{ marginRight: 12, marginLeft: 16 }}
                      ></i>
                      Last Name
                    </span>
                    <div className="col-md-11">
                      <input
                        type="text"
                        placeholder="Enter Last Name"
                        className="form-control"
                        onChange={(e) => setlastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-2">
                    <span
                      id="passwordHelpInline"
                      className="form-text"
                      style={{ marginBottom: "2px" }}
                    >
                      <i
                        className="fa fa-envelope"
                        style={{ marginRight: 12, marginLeft: 16 }}
                      ></i>
                      Email Address
                    </span>
                    <div className="col-md-11">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                        onChange={(e) => setemail(e.target.value)}
                        pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-2">
                    <span
                      id="passwordHelpInline"
                      className="form-text"
                      style={{ marginBottom: "2px" }}
                    >
                      <i
                        className="fa fa-phone"
                        style={{ marginRight: 12, marginLeft: 16 }}
                      ></i>
                      Phone Number
                    </span>
                    <div className="col-md-11">
                      <input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="form-control"
                        onChange={(e) => setphoneNo(e.target.value)}
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-2">
                    <span
                      id="passwordHelpInline"
                      className="form-text"
                      style={{ marginBottom: "2px" }}
                    >
                      <i
                        className="fa fa-address-card"
                        style={{ marginRight: 12, marginLeft: 16 }}
                      ></i>
                      NIC Number
                    </span>
                    <div className="col-md-11">
                      <input
                        type="text"
                        placeholder="Enter NIC Number"
                        className="form-control"
                        pattern="^[a-zA-Z0-9]*$"
                        onChange={(e) => setnic(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-2">
                    <span
                      id="passwordHelpInline"
                      className="form-text"
                      style={{ marginBottom: "2px", marginLeft: 20 }}
                    >
                      <i className="fa fa-key" aria-hidden="true"></i>
                      &nbsp;&nbsp;&nbsp;Password
                    </span>
                    <div className="col-md-11">
                      <input
                        type="password"
                        className="form-control"
                        data-toggle="tooltip"
                        placeholder="Enter Password"
                        data-placement="center"
                        title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$"
                        onChange={(e) => setpassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-2">
                    <span
                      id="passwordHelpInline"
                      className="form-text"
                      style={{ marginBottom: "2px", marginLeft: 20 }}
                    >
                      <i className="fa fa-unlock-alt"></i>
                      &nbsp;&nbsp;&nbsp;Confirm Password
                    </span>
                    <div className="col-md-11">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Confirm Password"
                        title="Your password MUST contain at least 8 charactors, including UPPER-lowercase letters and at least one number and a charactor = 'Sample@523'"
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$"
                        onChange={(e) => setconfirmpassword(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* </>
                  ) : null} */}
                </div>
              </div>
              <br />
              <div className="d-flex justify-content-end">
                <Button
                  type="submit"
                  style={{
                    background: "#357EC7",
                    width: 13 + "%",
                    marginTop: -1,
                    marginLeft: 190,
                    height: 20 + "%",
                    color: "BLACK",
                    borderRadius: 20,
                  }}
                >
                  <i className="fa fa-check-circle" />
                  &nbsp;Submit
                </Button>
                &nbsp;
                <Button
                  href="/busDetails"
                  style={{
                    background: "#357EC7",
                    width: 13 + "%",
                    marginTop: -1,
                    marginRight: 50,
                    height: 20 + "%",
                    color: "BLACK",
                    borderRadius: 20,
                  }}
                >
                  <i className="fa fa-times-circle" />
                  &nbsp;Cancel
                </Button>
                <br />
              </div>
            </form>
          </div>
        </div>

        <img
          src="https://stories.freepiklabs.com/storage/15542/Travelers-01.svg"
          style={{
            width: 750,
            marginLeft:-100,
            marginRight: 200,
            marginTop: -750,
          }}
        />
      </div>
      <br />
      <Footer />
    </div>
  );
}
