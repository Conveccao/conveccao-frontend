import { SensorList } from "./pages/SensorList";
import { ThemeProvider } from 'styled-components';

import THEME from "./styles/theme";

import './styles/global.css';
import { ParameterRegister } from "./pages/ParameterRegister";

export default function App() {
  return (
   <ThemeProvider theme={THEME}>
      <ParameterRegister/>
   </ThemeProvider>
  
  );
}
