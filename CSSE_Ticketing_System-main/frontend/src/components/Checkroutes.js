import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";
import Footer from "./Layout/Footer";

export default function () {
  const [busNumber, setbusNumber] = useState("");
  const [route, setroute] = useState("");
  const [departure, setdeparture] = useState("");
  const [departureTime, setdepartureTime] = useState("");
  const [destination, setdestination] = useState("");
  const [destinationTime, setdestinationTime] = useState("");
  const [busstops, setbusstops] = useState("");
  const [inspectorName, setinspectorName] = useState("");

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/busRoute/getonebusroutes/${id}`)
      .then((res) => {
        if (res.data) {
          setbusNumber(res.data.existingBusRoutes.busNumber);
          setroute(res.data.existingBusRoutes.route);
          setdeparture(res.data.existingBusRoutes.departure);
          setdepartureTime(res.data.existingBusRoutes.departureTime);
          setdestination(res.data.existingBusRoutes.destination);
          setdestinationTime(res.data.existingBusRoutes.destinationTime);
          setbusstops(res.data.existingBusRoutes.busstops);
          setinspectorName(res.data.existingBusRoutes.inspectorName);
        }
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <AdminDashboardNavbar />
      <br />
      <div style={{ backgroundColor: "#ffff", minHeight: "900px" }}>
        <div align="center">
          <Paper
            style={{
              textAlign: "center",
              borderRadius: 5,
              width: "500px",
              height: "700px",
              backgroundColor: "#E9F6FD",
            }}
          >
            <br />
            <br />
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <div style={{ display: "flex", marginLeft: "150px" }}>
                    <h2>
                      <b>
                        <u>{busNumber}</u>
                      </b>
                    </h2>
                  </div>
                  <br />
                  <div style={{ display: "fleX", marginLeft: "50px" }}>
                    <b>Bus Route &nbsp; : &nbsp; {route}</b>
                  </div>

                  <br />

                  <div style={{ display: "fleX", marginLeft: "50px" }}>
                    <b>Departure &nbsp; : &nbsp; {departure}</b>
                  </div>

                  <br />
                  <div style={{ display: "fleX", marginLeft: "50px" }}>
                    <b>Departure Time &nbsp; : &nbsp; {departureTime}</b>
                  </div>
                  <br />
                  <div style={{ display: "fleX", marginLeft: "50px" }}>
                    <b>Destination &nbsp; : &nbsp; {destination}</b>
                  </div>
                  <br />
                  <div style={{ display: "fleX", marginLeft: "50px" }}>
                    <b>Destination Time &nbsp; : &nbsp; {destinationTime}</b>
                  </div>
                  <br />
                  <div style={{ display: "fleX", marginLeft: "50px" }}>
                    <b>InspectorName &nbsp; : &nbsp; {inspectorName}</b>
                  </div>
                  <div style={{ display: "fleX", marginLeft: "50px" }}>
                    <b>Bus Stops &nbsp; : &nbsp; </b>

                  </div>
                  <br />
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
      <Footer />
    </div>
  );
}
