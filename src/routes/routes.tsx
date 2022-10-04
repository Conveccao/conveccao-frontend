import { Routes, Route } from 'react-router-dom';

import { StationList } from '../pages/StationList';
import { StationRegister } from '../pages/StationRegister';
import { Login } from '../pages/Login/index';
import { Dashboard } from '../pages/Dashboard';
import { Apresentation } from '../pages/Apresentation';
import { ParameterRegister } from '../pages/ParameterRegister';
import { UserControl } from '../pages/UserControl';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Apresentation />} />
      <Route path="/stationlist" element={<StationList />} />
      <Route path="/stationregister" element={<StationRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/parameterregister" element={<ParameterRegister />} />
      <Route path="/home" element={<Apresentation />} />
      <Route path="/usercontrol" element={<UserControl />} />
    </Routes>
  );
}