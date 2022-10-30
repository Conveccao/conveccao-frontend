import { ChartDefault } from "../../components/CardChart";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import SessionController from '../../session/sessionController';

import StationHandlers from '../../integration/handlers/stationHandlers';

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

const checkStationExistence = () => {
  const station = SessionController.getStationData()
  if(station) return true
  return false
}




export function Dashboard() {

  const [autenticado, setAutenticado] = useState(true);
  const [id, setId] = useState(SessionController.getStationId())
  const [name, setName] = useState(SessionController.getStationName())
  const [installDate, setInstallDate] = useState(SessionController.getStationInstallDate())
  const [lat, setLat] = useState(SessionController.getStationLat())
  const [lon, setLon] = useState(SessionController.getStationLon())
  const [reference, setReference] = useState(SessionController.getStationReference())
  const [link, setLink] = useState(SessionController.getStationLink())

  let station = {
    installation_date: installDate,
    name: name,
    lat: lat,
    lon: lon,
    reference: reference,
    link: link
  }

  return (
    <>
      <HeaderDefault title={name} />
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
    </>
  );
}