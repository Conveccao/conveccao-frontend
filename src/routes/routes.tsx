import { Routes, Route } from "react-router-dom";

import {
  StationList,
  StationRegister,
  Login,
  Dashboard,
  DashboardEscola,
  DashboardFatec,
  Presentation,
  ParameterRegister,
  StationDetails,
  UserControl,
  Home,
  SensorList,
  Perfil,
  Alerts,
  Documentation
} from "../pages/index";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Presentation />} />
      <Route path="/station-list" element={<StationList />} />
      <Route path="/station-register" element={<StationRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard-escola" element={<DashboardEscola />} />
      <Route path="/dashboard-fatec" element={<DashboardFatec />} />
      <Route path="/user-control" element={<UserControl />} />
      <Route path="/parameter-register" element={<ParameterRegister />} />
      <Route path="/sensor-list" element={<SensorList />} />
      <Route path="/home-page" element={<Home />} />
      <Route path="/station-details" element={<StationDetails />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/alertas" element={<Alerts />} />
      <Route path="/documentacao" element={<Documentation />} />
    </Routes>
  );
}
