import { ChartDefault } from "../../components/CardChart";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { Container, ButtonDownload } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import SessionController from '../../session/sessionController';

import StationHandlers from '../../integration/handlers/stationHandlers';
import axios from "axios";
import { URI } from "../../integration/uri";

export function Dashboard() {
  const [measuresList, setMeasuresList] = useState([])
  const [stationId, setStationId] = useState(SessionController.getStationId())

  const handleGetAllMeasures = async (id: number) => {
    const res = await axios.get(`${URI.STATIONMEASURES}/${id}`);
    return res.data;
  };

  const handleSetMeasures = async (id: number) => {
    const measuresValues: any = [];
    const measures = await handleGetAllMeasures(id);
    measures.forEach((measure: any) => {
      measuresValues.push(measure.value);
    });
    setMeasuresList(measuresValues);
  }

  useEffect(() => {
    handleSetMeasures(stationId)
  })

  const options = {
    chart: {
      type: "spline",
    },
    series: [
      {
        data: measuresList,
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

  const [autenticado, setAutenticado] = useState(true);
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
        <ChartDefault title="Sensor pluviométrico" options={options} />
      </Container>
      <ButtonDownload>
          EXPORTAR DADOS PARA CSV
      </ButtonDownload>
    </>
  );
}

function handleDownload() {
  throw new Error("Function not implemented.");
}
