import { ChartDefault } from "../../components/CardChart";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { Container, ButtonDownload} from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SessionController from "../../session/sessionController";

const options = {
  chart: {
    type: "spline",
  },
  series: [
    {
      data: [1, 2, 3,4,5,6,7,8,9,10],
    },
  ],
  title: {
    text: "Monthly Average Temperature",
  },
  subtitle: {
    text: "Source: WorldClimate.com",
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  yAxis: {
    title: {
      text: "Temperature (°C)",
    },
  },
}


export function DashboardFatec() {

  return (
    <>
      <HeaderDefault title="Estação Fatec"/>
      <Sidebar />
      <Container>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
        <ChartDefault title="Sensor pluviométrico" options={options}/>
      </Container>
      <ButtonDownload>
          EXPORTAR DADOS PARA CSV
      </ButtonDownload>
    </>
  );
}