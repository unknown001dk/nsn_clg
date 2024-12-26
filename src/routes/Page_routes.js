import React from "react";
import { Routes, Route } from "react-router-dom";
import Transport from "../pages/Transport/Transport";
import BusRouteDetails from "../pages/Transport/BusRouteDetails";
import TransportOfficers from "../pages/Transport/TransportOfficers";
import IDCardDetails from "../pages/Transport/IDCardDetails";
import StudentRegister from "../pages/Transport/Forms/StudentRegister";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/transport" element={<Transport />} />
      <Route path="/bus-route-details" element={<BusRouteDetails />} />
      <Route path="/transport-officers" element={<TransportOfficers />} />
      <Route path="/id-card-details" element={<IDCardDetails />} />
      <Route path="/student-register" element={<StudentRegister />} />
    </Routes>
  );
};

export default PageRoutes;
