import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Layout/Footer";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const Buses = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [busNo, setBusNo] = useState("");
  const [sheetCount, setSheetCount] = useState("");
  const [route, setRoute] = useState("");
  const [driver, setDriver] = useState("");

  //Add Bus
  const handleSubmit = (e) => {
    e.preventDefault();

    const bus = {
      busNumber: busNo,
      sheetCount: Number(sheetCount),
      route: route,
      driver: driver,
    };
    console.log("====================================");
    console.log(bus);
    console.log("====================================");

    axios
      .post("https://csse-hosting-app.herokuapp.com/api/bus/registerBus", bus)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
        alert("Failed to add bus");
      });
  };

  //Get all drivers
  const [allDrivers, setAllDrivers] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://csse-hosting-app.herokuapp.com/api/user/getAllDrivers")
      .then((res) => {
        setAllDrivers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Get all routes
  const [allRoutes, setAllRoutes] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://csse-hosting-app.herokuapp.com/api/helper/getAllRoutes")
      .then((res) => {
        setAllRoutes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [busDetails, setBusDetails] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://csse-hosting-app.herokuapp.com/api/bus/getAllBuses")
      .then((response) => {
        setBusDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <AdminDashboardNavbar />

      <div
        style={{
          width: "1100px",
          margin: "auto",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: 200,
          }}
        >
          Bus Management
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={handleOpen}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
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
            <ControlPointIcon /> Add Bus
          </button>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Driver Name</TableCell>
                <TableCell align="center">Bus No</TableCell>
                <TableCell align="center">Sheet Count</TableCell>
                <TableCell align="center">Route</TableCell>
                <TableCell align="center">Driver's Number</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {busDetails.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.driver.fullName}
                  </TableCell>
                  <TableCell align="center"> {row.busNumber}</TableCell>
                  <TableCell align="center">{row.sheetCount}</TableCell>
                  <TableCell align="center">{row.route}</TableCell>
                  <TableCell align="center">{row.driver.phoneNo}</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Link
                      to={`/busDetails/${row._id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "40px",
                          width: "50px",
                          backgroundColor: "#A0CFEC",
                          borderRadius: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <EditIcon />
                      </div>
                    </Link>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "40px",
                        width: "50px",
                        backgroundColor: "#A0CFEC",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this Bus Details?"
                          )
                        )
                          axios
                            .delete(
                              `https://csse-hosting-app.herokuapp.com/api/bus/deleteBus/${row._id}`
                            )

                            .then((res) => {
                              console.log(res.data);
                              window.location.reload();
                            })
                            .catch((err) => {
                              console.log(err);
                              alert("Error");
                            });
                      }}
                    >
                      <DeleteIcon />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* -----------Add Bus-------------- */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add New Bus
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <form
                  style={{
                    marginTop: "50px",
                  }}
                  onSubmit={handleSubmit}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "50px",
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
                        onChange={(e) => setBusNo(e.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ex: NC-1234"
                        style={{
                          outline: "none",
                          border: "1px solid grey",
                          padding: "10px",
                          borderRadius: "5px",
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
                        onChange={(e) => setSheetCount(e.target.value)}
                        type="number"
                        id="name"
                        name="name"
                        style={{
                          outline: "none",
                          border: "1px solid grey",
                          padding: "10px",
                          borderRadius: "5px",
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
                        width: "100%",
                        gap: "10px",
                      }}
                    >
                      <label for="name">Driver Name</label>
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
                        onChange={(e) => setDriver(e.target.value)}
                      >
                        {allDrivers.map((driver) => (
                          <option value={driver._id}>{driver.fullName}</option>
                        ))}
                      </select>
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
                        onChange={(e) => setRoute(e.target.value)}
                      >
                        {allRoutes.map((route) => (
                          <option value={route.id}>{route.routeId}</option>
                        ))}
                      </select>
                    </div>
                  </div>

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
                        color: "white",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </Typography>
            </Box>
          </Modal>
        </TableContainer>
      </div>
      <Footer />
    </>
  );
};

export default Buses;
