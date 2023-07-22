import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdminDashboardNavbar from "../Layout/AdminDashboardNavbar";
import Footer from "../Layout/Footer";
import Button from "@material-ui/core/Button";

export default function UpdateBusRoutes() {
  const [busNumber, setbusNumber] = useState("");
  const [route, setroute] = useState("");
  const [inspectorName, setinspectorName] = useState("");
  const [departure, setdeparture] = useState("");
  const [departureTime, setdepartureTime] = useState("");
  const [destination, setdestination] = useState("");
  const [destinationTime, setdestinationTime] = useState("");

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/busRoute/getonebusroutes/${id}`)
      .then((res) => {
        if (res.data) {
          setbusNumber(res.data.existingBusRoutes.busNumber);
          setroute(res.data.existingBusRoutes.route);
          setinspectorName(res.data.existingBusRoutes.inspectorName);
          setdeparture(res.data.existingBusRoutes.departure);
          setdepartureTime(res.data.existingBusRoutes.departureTime);
          setdestination(res.data.existingBusRoutes.destination);
          setdestinationTime(res.data.existingBusRoutes.destinationTime);
        }
        console.log(res.data);
      });
  }, []);

  const onUpdate = (e) => {
    e.preventDefault();
    const updateBusRoutes = {
      busNumber,
      route,
      inspectorName,
      departure,
      departureTime,
      destination,
      destinationTime,
    };
    axios
      .put(
        `http://localhost:8080/api/busRoute/updatebusroutes/${id}`,
        updateBusRoutes
      )
      .then((res) => {
        if (res.data) {
          alert("Update Successfully....!");
          window.location.href = "/busRoutes";
        } else {
          alert("Update Unsuccessfelly...!");
        }
      });
  };

  return (
    <div>
      <AdminDashboardNavbar />
      <br />
      <br />
      <div class="row d-flex align-items-center justify-content-center">
        <div
          style={{
            width: 800,
            background: "#C9DFEC",
            height: 650,
            backgroundSize: "1000px ",
            borderRadius: 30,
          }}
        >
          <div className="card-body">
            <form action="" method="post" name="form" onSubmit={onUpdate}>
              <div className="row g-0">
                <div className="col-xl-7 d-none d-xl-block">
                  <br />
                  <h3
                    style={{
                      marginLeft: 430,
                      marginTop: -10,
                      fontFamily: "times new roman",
                      fontSize: 28,
                    }}
                  >
                    <b>UPDATE&nbsp;ROUTES</b>
                  </h3>
                  <br />
                </div>
                <div className="form-outline mb-2">
                  <span
                    id="passwordHelpInline"
                    className="form-text"
                    style={{ marginLeft: 435 }}
                  >
                    1. Enter Bus Number
                  </span>
                  <div
                    className="col-md-5"
                    style={{ marginRight: 12, marginLeft: 416 }}
                  >
                    <input
                      type="text"
                      value={busNumber}
                      className="form-control"
                      onChange={(e) => {
                        setbusNumber(e.target.value);
                      }}
                      readOnly
                      required
                    />
                  </div>
                </div>
                <div className="form-outline mb-2">
                  <span
                    id="passwordHelpInline"
                    className="form-text"
                    style={{ marginLeft: 435 }}
                  >
                    2. Enter Bus Routes
                  </span>
                  <div
                    className="col-md-5"
                    style={{ marginRight: 12, marginLeft: 416 }}
                  >
                    <select
                      type="number"
                      value={route}
                      class="form-control"
                      name="route"
                      onChange={(e) => {
                        setroute(e.target.value);
                      }}
                      required
                    >
                      <option value="">Select Root Number</option>
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
                    </select>
                  </div>
                </div>
                <div className="form-outline mb-2">
                  <span
                    id="passwordHelpInline"
                    className="form-text"
                    style={{ marginLeft: 435 }}
                  >
                    3. Enter InspectorName
                  </span>
                  <div
                    className="col-md-5"
                    style={{ marginRight: 12, marginLeft: 416 }}
                  >
                    <input
                      type="text"
                      onChange={(e) => {
                        setinspectorName(e.target.value);
                      }}
                      value={inspectorName}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-outline mb-2">
                  <span
                    id="passwordHelpInline"
                    className="form-text"
                    style={{ marginLeft: 435 }}
                  >
                    4. Enter Departure
                  </span>
                  <div
                    className="col-md-5"
                    style={{ marginRight: 12, marginLeft: 416 }}
                  >
                    <input
                      type="text"
                      onChange={(e) => {
                        setdeparture(e.target.value);
                      }}
                      value={departure}
                      inspectorName
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-outline mb-2">
                  <span
                    id="passwordHelpInline"
                    className="form-text"
                    style={{ marginLeft: 435 }}
                  >
                    5. Enter Departure Time
                  </span>
                  <div
                    className="col-md-5"
                    style={{ marginRight: 12, marginLeft: 416 }}
                  >
                    <input
                      type="text"
                      onChange={(e) => {
                        setdepartureTime(e.target.value);
                      }}
                      value={departureTime}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-outline mb-2">
                  <span
                    id="passwordHelpInline"
                    className="form-text"
                    style={{ marginLeft: 435 }}
                  >
                    6. Enter Destination
                  </span>
                  <div
                    className="col-md-5"
                    style={{ marginRight: 12, marginLeft: 416 }}
                  >
                    <input
                      type="text"
                      onChange={(e) => {
                        setdestination(e.target.value);
                      }}
                      value={destination}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-outline mb-2">
                  <span
                    id="passwordHelpInline"
                    className="form-text"
                    style={{ marginLeft: 435 }}
                  >
                    7. Enter Destination Time
                  </span>
                  <div
                    className="col-md-5"
                    style={{ marginRight: 12, marginLeft: 416 }}
                  >
                    <input
                      type="text"
                      onChange={(e) => {
                        setdestinationTime(e.target.value);
                      }}
                      value={destinationTime}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <Button
                  variant="contained"
                  className="w-10"
                  style={{
                    background: "#488AC7",
                    marginTop: 7,
                    width: 15 + "%",
                    color: "black",
                    borderRadius: 20,
                    marginLeft: 475,
                  }}
                  disableElevation
                  type="submit"
                >
                  <b> UPDATE</b>
                </Button>
                &nbsp; &nbsp;
                <Button
                  variant="contained"
                  href="/busDetails"
                  className="w-10"
                  style={{
                    background: "#488AC7",
                    width: 15 + "%",
                    marginTop: 7,
                    color: "black",
                    borderRadius: 20,
                  }}
                  disableElevation
                  type="submit"
                >
                  <b>CANCEL</b>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/nibmsa/image/upload/v1667313803/ezgif.com-webp-to-jpg-removebg-preview_kupzpy.png"
        style={{
          width: 530,
          height: 530,
          marginLeft: 320,
          marginRight: 200,
          marginTop: -650,
        }}
      />
      <br />
      <Footer />
    </div>
  );
}
