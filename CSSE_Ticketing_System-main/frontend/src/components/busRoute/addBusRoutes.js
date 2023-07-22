import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { useParams } from "react-router-dom";
import AdminDashboardNavbar from "../Layout/AdminDashboardNavbar";
import Footer from "../Layout/Footer";
import Button from "@material-ui/core/Button";

import { MenuProps, useStyles, busStops } from "./addBusRoutes.utils";

function AddBusRoutes() {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [busNumber, setbusNumber] = useState("");
  const [inspectorName, setInspectorName] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [destinationTime, setDestinationTime] = useState("");
  const [departure, setdeparture] = useState("");
  const [destination, setdestination] = useState("");
  const [route, setroute] = useState("");
  const [length, setlength] = useState("");
  const [seats, setseats] = useState("");

  const params = useParams();
  const busNumberPlate = params.busNumberPlate;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/bus/getonebus/${busNumberPlate}`)
      .then((res) => {
        if (res.data) {
          setbusNumber(res.data.existingBus.busNumber);
          setdeparture(res.data.existingBus.departure);
          setdestination(res.data.existingBus.destination);
          setroute(res.data.existingBus.route);
          setlength(res.data.existingBus.length);
          setseats(res.data.existingBus.seats);
        }
        console.log(res.data);
      });
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === busStops.length ? [] : busStops);
      return;
    }
    setSelected(value);
  };

  const sendData = async (e) => {
    e.preventDefault();

    let new_group = {
      busNumber: busNumber,
      route: route,
      departure: departure,
      destination: destination,
      busstops: selected,
      inspectorName: inspectorName,
      departureTime: departureTime,
      destinationTime: destinationTime,
    };

    axios
      .post("http://localhost:8080/api/busRoute/addbusroutes", new_group)
      .then(() => {
        alert("Adding bus route Success");
        window.location.href = "/busRoutes";
      })
      .catch((err) => {
        alert("Adding bus route unsuccess", err);
      });

    setSelected([""]);
    setDepartureTime("");
    setDestinationTime("");
    console.log(new_group);
  };

  return (
    <div>
      <AdminDashboardNavbar />
      <br />
      <div class="row d-flex align-items-center justify-content-center">
        <div
          style={{
            width: 1000,
            background: "#DBE9FA",
            height: 600,
            borderRadius: 25,
            backgroundSize: "1000px ",
          }}
        >
          <div class="card-body">
            <form action="" method="post" name="form" onSubmit={sendData}>
              <div style={{ display: "flex" }}>
                <div class="row g-0" style={{ flex: 1 }}>
                  <img
                    src=""
                    style={{
                      objectFit: "cover",
                      height: 580,
                      borderRadius: 25,
                      marginLeft: -10,
                      marginTop: -5,
                    }}
                  ></img>
                </div>
                <div class="col-xl-10" style={{ flex: 1 }}>
                  <div class="form-outline mb-2">
                    <h3
                      style={{
                        fontFamily: "times new roman",
                        fontSize: 36,
                        marginLeft: 50,
                        color: "#0C090A",
                        marginTop: 15,
                      }}
                    >
                      <b>
                        <u>ADD BUS ROUTES</u>
                      </b>
                    </h3>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "185px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        1. Bus Number
                      </div>

                      <input
                        type="text"
                        value={busNumber}
                        class="form-control"
                        name="busNumber"
                        style={{ marginTop: 10 }}
                        onChange={(e) => {
                          setbusNumber(e.target.value);
                        }}
                        readOnly
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "185px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        2. Bus Departure
                      </div>
                      <input
                        type="text"
                        style={{ marginTop: 10 }}
                        value={departure}
                        class="form-control"
                        name="departure"
                        onChange={(e) => {
                          setdeparture(e.target.value);
                        }}
                        readOnly
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "185px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        3. Bus Departure Time
                      </div>
                      <input
                        type="text"
                        style={{ marginTop: 10 }}
                        value={departureTime}
                        class="form-control"
                        name="departureTime"
                        onChange={(e) => {
                          setDepartureTime(e.target.value);
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "185px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        4. Bus Destination
                      </div>
                      <input
                        type="text"
                        value={destination}
                        class="form-control"
                        name="busNumber"
                        style={{ marginTop: 10 }}
                        onChange={(e) => {
                          setdestination(e.target.value);
                        }}
                        readOnly
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "185px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        5. Bus Destination Time
                      </div>
                      <input
                        type="text"
                        value={destinationTime}
                        class="form-control"
                        name="busNumber"
                        style={{ marginTop: 10 }}
                        onChange={(e) => {
                          setDestinationTime(e.target.value);
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "185px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        4. Bus Routes
                      </div>
                      <input
                        type="text"
                        style={{ marginTop: 10 }}
                        value={route}
                        class="form-control"
                        name="route"
                        onChange={(e) => {
                          setroute(e.target.value);
                        }}
                        readOnly
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "185px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        5. Bus Inspector Name
                      </div>
                      <input
                        type="text"
                        style={{ marginTop: 10 }}
                        value={inspectorName}
                        class="form-control"
                        name="inspectorName"
                        onChange={(e) => {
                          setInspectorName(e.target.value);
                        }}
                      />
                    </div>
                    <div style={{ marginLeft: 200 }}>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="mutiple-select-label">
                          Select Bus Stops
                        </InputLabel>
                        <Select
                          labelId="mutiple-select-label"
                          multiple
                          value={selected}
                          onChange={handleChange}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                        >
                          {busStops.map((option) => (
                            <MenuItem key={option} value={option}>
                              <ListItemIcon>
                                <Checkbox
                                  checked={selected.indexOf(option) > -1}
                                />
                              </ListItemIcon>
                              <ListItemText primary={option} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>{" "}
                    <br />
                    <Button
                      type="submit"
                      style={{
                        background: "#357EC7",
                        width: 24 + "%",
                        marginLeft: 380,
                        height: 20 + "%",
                        color: "BLACK",
                        borderRadius: 20,
                      }}
                    >
                      <i className="fa fa-check-circle"></i>&nbsp;Submit
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default AddBusRoutes;
