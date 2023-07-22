import React, { useEffect, useState } from "react";
import "./RechargeByAdmin.scss";
import {
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";
import axios from "axios";
import Footer from "./Layout/Footer";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";

const RechargeByAdmin = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");

  //Get all passengers
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    axios
      .get("https://csse-hosting-app.herokuapp.com/api/user/getAllPassengers")
      .then((res) => {
        setPassengers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Post data
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      amount: amount,
      email: email,
      rechargeType: "From Bus Station",
      paymentMethod: "Cash",
    };

    axios
      .post(
        "https://csse-hosting-app.herokuapp.com/api/credit/rechargeCredit",
        data
      )
      .then((response) => {
        console.log(response);
        alert("Recharge Successful");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Recharge Failed! Please check the email address");
      });
  };

  return (
    <>
      <AdminDashboardNavbar />
      <div className="rechargenow-container">
        <h2>Recharge User account from here</h2>
        <p>
          You can easily recharge user's accounts from here. Just enter the
          amount and click on recharge button.
        </p>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-50">
                    <h3>Payment</h3>
                    <label for="fname">Accepted Cards</label>
                    <div
                      className="icon-container"
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <FaCcVisa
                        style={{
                          color: "navy",
                        }}
                      />

                      <FaCcAmex
                        style={{
                          color: "blue",
                        }}
                      />
                      <FaCcMastercard style={{ color: "red" }} />
                      <FaCcDiscover style={{ color: "orange" }} />
                    </div>
                    <label for="cname">Passenger Email</label>
                    <select
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    >
                      <option value="select">Select Passenger</option>
                      {passengers.map((passenger) => (
                        <option value={passenger.email}>
                          {passenger.email}
                        </option>
                      ))}
                    </select>
                    <label for="cname">Name on Card</label>
                    <input
                      required
                      maxLength={50}
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="John More Doe"
                    />
                    <label for="ccnum">Credit card number</label>
                    <input
                      maxLength={16}
                      required
                      type="number"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label for="expmonth">Exp Month</label>
                    <select name="month" id="month" required>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                    <div className="row">
                      <div className="col-50">
                        <label for="expyear">Exp Year</label>
                        <input
                          required
                          type="number"
                          id="expyear"
                          name="expyear"
                          placeholder="2018"
                        />
                      </div>
                      <div className="col-50">
                        <label for="cvv">CVV</label>
                        <input
                          maxLength={3}
                          required
                          type="number"
                          id="cvv"
                          name="cvv"
                          placeholder="352"
                        />
                      </div>
                      <div className="col-50">
                        <label for="cvv">Recharge Amount (Rs.)</label>
                        <input
                          onChange={(e) => setAmount(e.target.value)}
                          required
                          type="text"
                          id="amount"
                          name="amount"
                          placeholder="500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Continue to checkout"
                  className="btn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RechargeByAdmin;
