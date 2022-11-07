import { ChartDefault } from "../../components/CardChart";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { Container, ButtonDownload} from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SessionController from "../../session/sessionController";
import axios from "axios";
import { URI } from "../../integration/uri";

const stationId = SessionController.getStationId()
let measuresList: any[];

const handleGetAll = async () => {
  const res = await axios.get(`${URI.STATIONMEASURES}/${stationId}`);
  return res.data;
};

const handleSetMeasures = async () => {
  const measuresValues:any = [];
  const measures = await handleGetAll();
  console.log(measures);
  measures.forEach((measure: any) => {
    measuresValues.push(measure.value);
  });
  measuresList = measuresValues;
  console.log(measuresList)
}

handleSetMeasures();


export function DashboardFatec() {

  const options = {
    chart: {
      type: "spline",
    },
    series: [
      {
        data: measuresList
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