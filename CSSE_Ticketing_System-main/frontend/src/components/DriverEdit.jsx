import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "./Layout/Footer";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  width: "100%",
};

const DriverEdit = () => {
  //Edit Inspector
  const [editId, setEditId] = useState("");
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editPhoneNumber, setEditPhoneNumber] = useState("");
  const [editNic, setEditNic] = useState("");
  const [editRoute, setEditRoute] = useState("");

  const { id } = useParams();

  const [busRoute, setBusRoute] = useState([]);

  useEffect(() => {
    axios
      .get("https://csse-hosting-app.herokuapp.com/api/helper/getAllRoutes")
      .then((res) => {
        setBusRoute(res.data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://csse-hosting-app.herokuapp.com/api/user/getOneUser/${id}`)
      .then((res) => {
        setEditId(res.data.user._id);
        setEditFirstName(res.data.user.firstName);
        setEditLastName(res.data.user.lastName);
        setEditEmail(res.data.user.email);
        setEditPassword(res.data.user.password);
        setEditPhoneNumber(res.data.user.phoneNo);
        setEditNic(res.data.user.nic);
        setEditRoute(res.data.user.route);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setEditId, setEditPassword]);

  const handleEditInspector = (e) => {
    e.preventDefault();

    const inspector = {
      firstName: editFirstName,
      lastName: editLastName,
      phoneNo: editPhoneNumber,
      nic: editNic,
      route: editRoute,
    };

    axios
      .patch(
        `https://csse-hosting-app.herokuapp.com/api/user/updateUserById/${id}`,
        inspector
      )
      .then((res) => {
        console.log(res.data);
        window.location.href = "/drivers";
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update inspector");
      });
  };
  return (
    <>
      <AdminDashboardNavbar />
      <div>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Driver Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form
              onSubmit={handleEditInspector}
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
                    value={editFirstName}
                    onChange={(e) => {
                      setEditFirstName(e.target.value);
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
                    value={editLastName}
                    onChange={(e) => {
                      setEditLastName(e.target.value);
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
                  disabled
                  type="email"
                  id="name"
                  name="name"
                  style={{
                    outline: "none",
                    border: "1px solid grey",
                    padding: "10px",
                    borderRadius: "5px",
                    cursor: "not-allowed",
                  }}
                  value={editEmail}
                  onChange={(e) => {
                    setEditEmail(e.target.value);
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
                    value={editPhoneNumber}
                    onChange={(e) => {
                      setEditPhoneNumber(e.target.value);
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
                    value={editNic}
                    onChange={(e) => {
                      setEditNic(e.target.value);
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
                      width: "94%",
                    }}
                    value={editRoute}
                    onChange={(e) => {
                      setEditRoute(e.target.value);
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
                  Save
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

export default DriverEdit;
