import React, { Component } from "react";
import axios from "axios";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";
import Footer from "./Layout/Footer";
import Button from "@material-ui/core/Button";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import DescriptionIcon from "@mui/icons-material/Description";
import { saveAs } from 'file-saver';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


export default class BusDetails extends Component {
  constructor(props) {
    super(props);
    this.generateReport = this.generateReport.bind(this);
    this.state = {
      bus: [],
    };
  }
  componentDidMount() {
    this.retrieveBus();
  }
  retrieveBus() {
    axios.get("http://localhost:8080/api/bus/getallbus").then((res) => {
      if (res.data.success) {
        this.setState({
          bus: res.data.existingBus,
        });
        console.log(this.state.bus);
      }
    });
  }

  //delete bus
  onDelete = (busNumberPlate) => {
    if (window.confirm("Are you sure you wish to delete this bus?")) {
      axios
        .delete(`http://localhost:8080/api/bus/deletebus/${busNumberPlate}`)
        .then((res) => {
          this.retrieveBus();
        });
    }
  };

  //get bus report
  async generateReport() {
    const obj = { bus: this.state.bus };
    await axios
      .post("http://localhost:8080/generatebusreport", obj, {
        responseType: "arraybuffer",
        headers: { Accept: "application/pdf" },
      })
      .then((res) => {
        alert("Report Generated");
        console.log(res);
        console.log(res.data);
        const pdfBlog = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlog, "Bus Report.pdf");
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(obj);
  }

  render() {
    return (
      <div>
        <AdminDashboardNavbar />
        <br />
        <div className="container">
          <div align="right">
            <Button
              variant="contained"
              style={{
                background: "#728FCE",
                width: 10 + "%",
                color: "black",
                borderRadius: 20,
              }}
              href="/addbus"
              disableElevation
              type="submit"
            >
              <DirectionsBusIcon /> &nbsp; ADD BUS
            </Button>
            &nbsp;
            <IconButton size="medium" onClick={this.generateReport}>
              <DescriptionIcon fontSize="large" style={{ color: "black" }} />
            </IconButton>
          </div>
          <div align="center">
            <h3 style={{ fontFamily: "times new roman", fontSize: "45px" }}>
              <u>
                <b>Available Bus List</b>
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
                    <font color="black">Length (KM) </font>
                  </th>
                  <th>
                    <font color="black">Departure</font>
                  </th>
                  <th>
                    <font color="black">Destination</font>
                  </th>
                  <th>
                    <font color="black">Route Number</font>
                  </th>
                  <th>
                    <font color="black">Seats</font>
                  </th>
                  <th>
                    <font color="black">Date</font>
                  </th>
                  <th>
                    <font color="black">Add Routes</font>
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
                    <td>{bus.length}</td>
                    <td>{bus.departure}</td>
                    <td>{bus.destination}</td>
                    <td>{bus.route}</td>
                    <td>{bus.seats}</td>

                    <td>{moment(bus.timestamps).format("DD/MM/YYYY")}</td>
                    <td>
                      <IconButton
                        aria-label="edit"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 50 }}
                        href={`/busRoutes/${bus._id}`}
                      >
                        <ControlPointIcon
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
                        href={`/updatebus/${bus._id}`}
                      >
                        <EditIcon
                          fontSize="small"
                          style={{ color: "#151B54" }}
                        />
                      </IconButton>{" "}
                      &nbsp;&nbsp;
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
        <Footer />
      </div>
    );
  }
}
