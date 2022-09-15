import { Routes, Route } from 'react-router-dom';

import { StationList } from '../pages/StationList';
import { StationRegister } from '../pages/StationRegister';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/stationlist" element={<StationList />} />
      <Route path="/stationregister" element={<StationRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Dashboard />} />
    </Routes>
  );
}