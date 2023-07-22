import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingPage from "./components/Layout/LoadingPage";
import AdminLogin from "./components/AdminLogin";
import AddBus from "./components/AddBus";

import BusUpdate from "./components/BusUpdate";
import AddBusRoutes from "./components/busRoute/addBusRoutes";
import BusRouteDetails from "./components/busRoute/getBusRoutes";
import InspectorSignUp from "./components/InspectorSignUp";
import UpdateBusRoutes from "./components/busRoute/UpdateBusRoutes";
import Checkroutes from "./components/Checkroutes";
import BusManagement from "./components/BusManagement";
import Drivers from "./components/Drivers";
import DriverEdit from "./components/DriverEdit";
import RechargeByAdmin from "./components/RechargeByAdmin";
import RechargeHistory from "./components/RechargeHistory";
import PassengerActivities from "./components/PassengerActivities";
import InspectorsView from "./components/InspectorView";
import InspectorEdit from "./components/InspectorEdit";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
          <Routes>
            <Route path="/" element={<LoadingPage />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/addbus" element={<AddBus />} />
            <Route path="/busDetails" element={<BusManagement />} />
            <Route path="/busDetails/:id" element={<BusUpdate />} />
            {/* <Route path="/updatebus/:busNumberPlate" element={<BusUpdate />} /> */}
            <Route path="/busRoutes" element={<BusRouteDetails />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/:id" element={<DriverEdit />} />
            <Route path="/inspectorsignup" element={<InspectorSignUp />} />
            <Route path="/updatebusRoutes/:id" element={<UpdateBusRoutes />} />
            <Route path="/recharge" element={<RechargeByAdmin />} />
            <Route path="/rechargeHistory" element={<RechargeHistory />} />
            <Route
              path="/passengerActivities"
              element={<PassengerActivities />}
            />
            <Route
              path="/busRoutes/:busNumberPlate"
              element={<AddBusRoutes />}
            />
            <Route path="/busRoutes" element={<BusRouteDetails />} />
            <Route path="/inspectorsignup" element={<InspectorSignUp />} />
            <Route path="/checkroutes/:id" element={<Checkroutes />} />
            <Route path="/inspector" element={<InspectorsView />} />
            <Route path="/inspector/:id" element={<InspectorEdit />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
