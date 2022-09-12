import { SensorList } from "./pages/SensorList";
import { ThemeProvider } from 'styled-components';

import THEME from "./styles/theme";

import './styles/global.css';

export default function App() {
  return (
   <ThemeProvider theme={THEME}>
      <SensorList/>
   </ThemeProvider>
  
  );
}
