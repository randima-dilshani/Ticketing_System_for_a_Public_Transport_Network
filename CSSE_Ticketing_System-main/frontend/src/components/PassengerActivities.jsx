import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Footer from "./Layout/Footer";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";
import moment from "moment";

const PassengerActivities = () => {
  const [passengerDetails, setPassengerDetails] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://csse-hosting-app.herokuapp.com/api/user/getAllTravelHistory"
      )
      .then((response) => {
        setPassengerDetails(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <AdminDashboardNavbar />
      <div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontWeight: 200,
            marginBottom: "50px",
          }}
        >
          Passenger Activities
        </h1>

        <TableContainer
          component={Paper}
          style={{
            width: "fit-content",
            minWidth: "1200px",
            margin: "auto",
            marginBottom: "20px",
            height: "80px",
            borderRadius: "10px",
            border: "1px solid #e0e0e0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            <div className="route">
              Route
              <input
                type="text"
                style={{
                  marginLeft: "10px",
                  width: "150px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  outline: "none",
                  padding: "0 5px",
                }}
              />
            </div>

            <div className="Todate">
              To Date
              <input
                type="date"
                style={{
                  marginLeft: "10px",
                  width: "150px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  outline: "none",
                  padding: "0 5px",
                }}
              />
            </div>

            <div className="FromDate">
              From Date
              <input
                type="date"
                style={{
                  marginLeft: "10px",
                  width: "150px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  outline: "none",
                  padding: "0 5px",
                }}
              />
            </div>

            <div className="search">
              <input
                placeholder="Search"
                type="text"
                style={{
                  marginLeft: "10px",
                  width: "200px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  outline: "none",
                  padding: "0 5px",
                }}
              />
              <button
                style={{
                  marginLeft: "10px",
                  width: "100px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  outline: "none",
                  padding: "0 5px",
                  backgroundColor: "#A0CFEC",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </TableContainer>
        <TableContainer
          component={Paper}
          style={{
            width: "fit-content",
            minWidth: "1200px",
            margin: "auto",
            marginBottom: "100px",
            border: "1px solid #e0e0e0",
            borderRadius: "10px",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <strong>Passenger Name</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Route</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>From Location</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>To Location</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Ticket Price</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Bus Number</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {passengerDetails.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.passengerName}
                  </TableCell>
                  <TableCell align="center">
                    {row.routeNo} - {row.routeName}
                  </TableCell>
                  <TableCell align="center">
                    {row.getOnHoltName}
                    <br />
                    {moment(row.getOnTime).format("DD-MM-YYYY | hh:mm a")}
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    {row.getOffHoltName}
                    <br />
                    {moment(row.getOffTime).format("DD-MM-YYYY | hh:mm a")}
                  </TableCell>
                  <TableCell align="center">{row.ticketPrice} LKR</TableCell>
                  <TableCell align="center">{row.busNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </>
  );
};

export default PassengerActivities;
