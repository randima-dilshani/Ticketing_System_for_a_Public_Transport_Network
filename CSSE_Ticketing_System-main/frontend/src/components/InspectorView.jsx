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
import axios from "axios";
import { useEffect, useState } from "react";
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

export default function InspectorsView() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [allInspectors, setAllInspectors] = React.useState([]);

  const [busRoute, setBusRoute] = useState([]);

  //Create Inspector
  const [createFirstName, setCreateFirstName] = useState("");
  const [createLastName, setCreateLastName] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [createPhoneNumber, setCreatePhoneNumber] = useState("");
  const [createNic, setCreateNic] = useState("");
  const [createRoute, setCreateRoute] = useState("");

  const handleCreateInspector = (e) => {
    e.preventDefault();

    const inspector = {
      firstName: createFirstName,
      lastName: createLastName,
      email: createEmail,
      password: createPassword,
      phoneNo: createPhoneNumber,
      nic: createNic,
      route: createRoute,
      role: "Inspector",
    };

    axios
      .post(
        "https://csse-hosting-app.herokuapp.com/api/user/userRegister",
        inspector
      )
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    axios
      .get("https://csse-hosting-app.herokuapp.com/api/user/GetAllInspectors")
      .then((response) => {
        setAllInspectors(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://csse-hosting-app.herokuapp.com/api/helper/getAllRoutes")
      .then((res) => {
        console.log("Routes", res.data.data);
        setBusRoute(res.data.data);
      });
  }, []);

  return (
    <>
      <AdminDashboardNavbar />
      <>
        <h1
          style={{
            textAlign: "center",
            fontWeight: 200,
            marginTop: "100px",
          }}
        >
          Inspector Management
        </h1>
        <TableContainer
          component={Paper}
          style={{
            width: "1100px",
            margin: "auto",
            marginBottom: "100px",
          }}
        >
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    onClick={handleOpen}
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
                    <ControlPointIcon />
                  </div>
                </TableCell>

                <TableCell align="center">Full Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Mobile Number</TableCell>
                <TableCell align="center">Route Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allInspectors.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
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
                      to={`/inspector/${row._id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
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
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this Inspector?"
                          )
                        )
                          axios
                            .delete(
                              `https://csse-hosting-app.herokuapp.com/api/user/deleteUserById/${row._id}`
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
                      <DeleteIcon />
                    </div>
                  </TableCell>
                  <TableCell align="center">{row.fullName}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.phoneNo}</TableCell>
                  <TableCell align="center">{row.route}</TableCell>

                  {busRoute.map((route) => {
                    if (route._id === row.route) {
                      return (
                        <TableCell align="center">{route.routeName}</TableCell>
                      );
                    }
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* ----------Create Inspector Modal---------------- */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add New Inspector
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <form
                  onSubmit={handleCreateInspector}
                  style={{
                    marginTop: "50px",
                  }}
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
                      <label for="name">First Name</label>
                      <input
                        type="text"
                        required
                        id="name"
                        name="name"
                        style={{
                          outline: "none",
                          border: "1px solid grey",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                        onChange={(e) => {
                          setCreateFirstName(e.target.value);
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
                      <label for="name">Last Name</label>
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
                        onChange={(e) => {
                          setCreateLastName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      gap: "10px",
                      marginTop: "20px",
                    }}
                  >
                    <label for="name">Email</label>
                    <input
                      required
                      type="email"
                      id="name"
                      name="name"
                      style={{
                        outline: "none",
                        border: "1px solid grey",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                      onChange={(e) => {
                        setCreateEmail(e.target.value);
                      }}
                    />
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
                        onChange={(e) => {
                          setCreatePhoneNumber(e.target.value);
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
                      <label for="name">NIC</label>
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
                        onChange={(e) => {
                          setCreateNic(e.target.value);
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
                      <label for="name">Password</label>
                      <input
                        required
                        type="password"
                        id="name"
                        name="name"
                        style={{
                          outline: "none",
                          border: "1px solid grey",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                        onChange={(e) => {
                          setCreatePassword(e.target.value);
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
                        onChange={(e) => {
                          setCreateRoute(e.target.value);
                        }}
                      >
                        {busRoute.map((route) => {
                          return (
                            <option value={route._id}>{route.routeId}</option>
                          );
                        })}
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
                        color: "black",
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
      </>
      <Footer />
    </>
  );
}
