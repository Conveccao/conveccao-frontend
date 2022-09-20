import { useEffect, useState } from "react";
import { CircularProgress, Box } from "@mui/material";

import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { Container, Main } from "./styles";
import { ChartDefault } from "../../components/Chart";


export function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <HeaderDefault title="Dashboard" />
      <Sidebar />
      <Main>
        {isLoading ? (
          <ChartDefault/> 
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress color="success" />
          </Box>
        )}
        {isLoading ? (
          <ChartDefault/> 
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress color="success" />
          </Box>
        )}
      </Main>
      <Main>
        {isLoading ? (
          <ChartDefault/> 
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress color="success" />
          </Box>
        )}
        {isLoading ? (
          <ChartDefault/> 
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress color="success" />
          </Box>
        )}
      </Main>
    </Container>
  );
}
