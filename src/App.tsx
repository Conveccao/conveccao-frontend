import { SensorList } from "./pages/SensorList";
import { ThemeProvider } from 'styled-components';

import THEME from "./styles/theme";

import './styles/global.css';
import { StationRegister } from "./pages/StationRegister";

export default function App() {
  return (
   <ThemeProvider theme={THEME}>
      <StationRegister/>
   </ThemeProvider>
  
  );
}
