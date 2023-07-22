import React, { Component } from "react";
import axios from "axios";
import AdminDashboardNavbar from "../Layout/AdminDashboardNavbar";
import Footer from "../Layout/Footer";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

export default class BusDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bus: [],
    };
  }
  componentDidMount() {
    this.retrieveBus();
  }
  retrieveBus() {
    axios.get("http://localhost:8080/api/busRoute/allbusroutes").then((res) => {
      if (res.data.success) {
        this.setState({
          bus: res.data.existingBusRoutes,
        });
        console.log(this.state.bus);
      }
    });
  }

  //delete bus
  onDelete = (id) => {
    if (window.confirm("Are you sure you wish to delete this bus route?")) {
      axios
        .delete(`http://localhost:8080/api/busRoute/deletebusroutes/${id}`)
        .then((res) => {
          this.retrieveBus();
        });
    }
  };

  render() {
    return (
      <div>
        <AdminDashboardNavbar />
        <br /> <br />
        <div className="container">
          <div align="center">
            <h3 style={{ fontFamily: "times new roman", fontSize: "45px" }}>
              <u>
                <b>Available Bus Routes</b>
              </u>
            </h3>
            <br></br>

            <table class="table">
              <thead>
                <tr bgcolor="#98AFC7">
                  <th>
                    <font color="black">No</font>
                  </th>
                  <th>
                    <font color="black">Bus Number</font>
                  </th>
                  <th>
                    <font color="black">Routes</font>
                  </th>
                  <th>
                    <font color="black">Inspector Name</font>
                  </th>
                  <th>
                    <font color="black">Departure</font>
                  </th>
                  <th>
                    <font color="black">Departure Time</font>
                  </th>
                  <th>
                    <font color="black">Destination</font>
                  </th>
                  <th>
                    <font color="black">Destination Time</font>
                  </th>
                  <th>
                    <font color="black">Check Routes</font>
                  </th>
                  <th>
                    <font color="black">Action</font>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.bus.map((bus, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{bus.busNumber}</td>
                    <td>{bus.route}</td>
                    <td>{bus.inspectorName}</td>
                    <td>{bus.departure}</td>
                    <td>{bus.departureTime}</td>
                    <td>{bus.destination}</td>
                    <td>{bus.destinationTime}</td>
                    <td>
                      <IconButton
                        aria-label="edit"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 50 }}
                        href={`/checkroutes/${bus._id}`}
                      >
                        <DirectionsBusIcon                      
                          fontSize="small"
                          style={{ color: "#151B54" }}
                        />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        aria-label="edit"
                        color="primary"
                        size="small"
                        href={`/updatebusRoutes/${bus._id}`}
                      >
                        <EditIcon
                          fontSize="small"
                          style={{ color: "#151B54" }}
                        />
                      </IconButton>{" "}
                      &nbsp;
                      <IconButton aria-label="delete" size="small">
                        <DeleteForeverIcon
                          fontSize="small"
                          onClick={() => this.onDelete(bus._id)}
                          style={{ color: "red" }}
                        />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
        <br /> <br /> 
        <Footer />
      </div>
    );
  }
}
