import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Footer from "./Layout/Footer";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";
import Typography from "@mui/material/Typography";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  width: "100%",
};

const BusUpdate = () => {
  //Edit Bus
  const [driverName, setDriverName] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [sheetCount, setSheetCount] = useState("");
  const [route, setRoute] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [driverId, setDriverId] = useState("");

  const { id } = useParams();

  //Get Routes
  const [busRoute, setBusRoute] = useState([]);

  useEffect(() => {
    axios
      .get("https://csse-hosting-app.herokuapp.com/api/helper/getAllRoutes")
      .then((res) => {
        console.log("Routes", res.data.data);
        setBusRoute(res.data.data);
      });
  }, []);

  //Get one Bus
  useEffect(() => {
    axios
      .get(`https://csse-hosting-app.herokuapp.com/api/bus/getOneBus/${id}`)
      .then((res) => {
        setDriverId(res.data.busdetails.driver._id);
        setDriverName(res.data.busdetails.driver.fullName);
        setBusNumber(res.data.busdetails.busNumber);
        setSheetCount(res.data.busdetails.sheetCount);
        setRoute(res.data.busdetails.route);
        setMobileNo(res.data.busdetails.driver.phoneNo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  //Update Bus
  const handleEditInspector = (e) => {
    e.preventDefault();

    const bus = {
      driver: driverId,
      busNumber: busNumber,
      sheetCount: sheetCount,
      route: route,
      fullName: driverName,
    };

    axios
      .patch(
        `https://csse-hosting-app.herokuapp.com/api/bus/updateBus/${id}`,
        bus
      )
      .then((res) => {
        console.log(res.data);
        window.location.href = "/busDetails";
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update Bus Details");
      });
  };

  //Get all drivers
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios
      .get("https://csse-hosting-app.herokuapp.com/api/user/getAllDrivers")
      .then((res) => {
        setDrivers(res.data.users);
      });
  }, []);

  return (
    <>
      <AdminDashboardNavbar />
      <div>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Bus Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
            <form
              onSubmit={handleEditInspector}
              style={{
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "10px",
                }}
              >
                <label for="name">Driver Name</label>
                <select
                  id="cars"
                  required
                  style={{
                    outline: "none",
                    border: "1px solid grey",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  value={driverName}
                  onChange={(e) => {
                    setDriverName(e.target.value);
                  }}
                >
                  {drivers.map((driver) => {
                    return (
                      <option value={driver._id}>{driver.fullName}</option>
                    );
                  })}
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "50px",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    gap: "10px",
                  }}
                >
                  <label for="name">Bus Number</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    style={{
                      outline: "none",
                      border: "1px solid grey",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                    value={busNumber}
                    onChange={(e) => {
                      setBusNumber(e.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    gap: "10px",
                  }}
                >
                  <label for="name">Sheet Count</label>
                  <input
                    required
                    type="number"
                    id="name"
                    name="name"
                    style={{
                      outline: "none",
                      border: "1px solid grey",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                    value={sheetCount}
                    onChange={(e) => {
                      setSheetCount(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "50px",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    gap: "10px",
                  }}
                >
                  <label for="name">Mobile Number</label>
                  <input
                    disabled
                    required
                    type="number"
                    id="name"
                    name="name"
                    style={{
                      outline: "none",
                      border: "1px solid grey",
                      padding: "10px",
                      borderRadius: "5px",
                      cursor: "not-allowed",
                    }}
                    value={mobileNo}
                    onChange={(e) => {
                      setMobileNo(e.target.value);
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    gap: "10px",
                  }}
                >
                  <label for="name">Route</label>
                  <select
                    id="cars"
                    name="carlist"
                    form="carform"
                    required
                    style={{
                      outline: "none",
                      border: "1px solid grey",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                    value={route}
                    onChange={(e) => {
                      setRoute(e.target.value);
                    }}
                  >
                    {busRoute.map((route) => {
                      return <option value={route._id}>{route.routeId}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "50px",
                  marginTop: "20px",
                }}
              ></div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <button
                  type="submit"
                  style={{
                    outline: "none",
                    border: "none",
                    padding: "10px 20px",
                    backgroundColor: "#A0CFEC",
                    color: "black",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "20px",
                  }}
                >
                  Update
                </button>
              </div>
            </form>
          </Typography>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default BusUpdate;
