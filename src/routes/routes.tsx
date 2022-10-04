import { Routes, Route } from 'react-router-dom';

import { StationList } from '../pages/StationList';
import { StationRegister } from '../pages/StationRegister';
import { Login } from '../pages/Login/index';
import { Dashboard } from '../pages/Dashboard';
import { Presentation } from '../pages/Presentation';
import { ParameterRegister } from '../pages/ParameterRegister';
import { UserControl } from '../pages/UserControl';

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
      <Route path="/home" element={<Presentation />} />
    </Routes>
  );
}