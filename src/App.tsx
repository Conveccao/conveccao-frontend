import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/routes";

import THEME from "./styles/theme";

import "./styles/global.css";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
