import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import moment from "moment/moment";
import Footer from "./Layout/Footer";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";

const RechargeHistory = () => {
  const [rechargeHistory, setRechargeHistory] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://csse-hosting-app.herokuapp.com/api/credit/getRechargeHistory"
      )
      .then((response) => {
        setRechargeHistory(response.data.rechargeHistory);
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
            fontWeight: 200,
            marginTop: "40px",
          }}
        >
          User Recharge History
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "50px",
            margin: "40px",
            marginTop: "-20px",
            gap: "50px",
          }}
        >
          {rechargeHistory.map((item) => (
            <Card
              sx={{ minWidth: 275 }}
              style={{
                width: "300px",
                backgroundColor: "#A0CFEC",
                borderRadius: "20px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography variant="h7" component="div">
                  Passenger Name : {item.passengerDetails.fullName}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Recharged On :{" "}
                  {moment(item.createdAt).format("DD-MM-YYYY | hh:mm a")}
                </Typography>
                <Typography variant="h6" component="div">
                  Amount(Rs.) : {item.amount}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Recharged Type : {item.rechargeType}
                </Typography>
                <Typography variant="body2">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Payment Method : {item.paymentMethod}{" "}
                    <span
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      {item.paymentMethod === "Cash" ? (
                        <span>💵</span>
                      ) : (
                        <span>💳 </span>
                      )}
                    </span>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RechargeHistory;
