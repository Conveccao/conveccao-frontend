import { Routes, Route } from "react-router-dom";

import {
  StationList,
  StationRegister,
  Login,
  Dashboard,
  Presentation,
  ParameterRegister,
  StationDetails,
  UserControl,
  Home,
  SensorList
} from "../pages/index";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Presentation />} />
      <Route path="/station-list" element={<StationList />} />
      <Route path="/station-register" element={<StationRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user-control" element={<UserControl />} />
      <Route path="/parameter-register" element={<ParameterRegister />} />
      <Route path="/sensor-list" element={<SensorList />} />
      <Route path="/home-page" element={<Home />} />
      <Route path="/station-details" element={<StationDetails />} />
    </Routes>
  );
}
