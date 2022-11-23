import { ChartDefault } from "../../components/CardChart";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { Container, ButtonDownload } from "./styles";
import { useEffect, useState } from "react";
import Options from "./options/options";

import { CSVLink, CSVDownload } from 'react-csv';

import SessionController from "../../session/sessionController";

import MeasuresHandlers from "../../integration/handlers/measuresHandlers";
import MeasuresHandlersDownload from "../../integration/handlers/measuresHandlersDownload";
import React from "react";


// OBTER JSON DE DADOS PARA DOWNLOAD
const measuresHandlerDownload = new MeasuresHandlersDownload();

const handleGetMeasuresDownload = async (id: number) => {
  return await measuresHandlerDownload.handleMeasuresPerStation(id);
};


const setMeasuresDownload = (id: number) => {
  const measuresDownload = handleGetMeasuresDownload(id);
  return measuresDownload;
};

setMeasuresDownload(SessionController.getStationId())


const data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];

const headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
];

const csvReport = {
  filename: "DataStation.csv",
  headers: headers,
  data: data,
};


export function Dashboard() {
  const [pluvMeasuresList, setPluvMeasuresList] = useState([]);
  const [tempMeasuresList, setTempMeasuresList] = useState([]);
  const [umidMeasuresList, setUmidMeasuresList] = useState([]);
  const [vVentMeasuresList, setVVentMeasuresList] = useState([]);
  const [dVentMeasuresList, setDVentMeasuresList] = useState([]);

  const [stationId, setStationId] = useState(SessionController.getStationId());
  const [name, setName] = useState(SessionController.getStationName());

  const measuresHandler = new MeasuresHandlers();

  const handleGetMeasures = async (id: number, reference: string) => {
    return await measuresHandler.handleMeasuresPerStationAndReference(
      id,
      reference
    );
  };

  const setMeasuresList = async (id: number, reference: string) => {
    const measuresValues: any[] = [];
    const measures = await handleGetMeasures(id, reference);
    measures.forEach((measure: any) => {
      measuresValues.push(measure.value);
    });
    return measuresValues;
  };

  const handleSetAllMeasures = async (id: number) => {
    const pluvMeasuresValues: any = await setMeasuresList(id, "pluv");
    const tempMeasuresValues: any = await setMeasuresList(id, "temp");
    const umidMeasuresValues: any = await setMeasuresList(id, "umid");
    const vVentMeasuresValues: any = await setMeasuresList(id, "v_vent");
    const dVentMeasuresValues: any = await setMeasuresList(id, "d_vent");
    setPluvMeasuresList(pluvMeasuresValues);
    setTempMeasuresList(tempMeasuresValues);
    setUmidMeasuresList(umidMeasuresValues);
    setVVentMeasuresList(vVentMeasuresValues);
    setDVentMeasuresList(dVentMeasuresValues);
  };

  useEffect(() => {
    handleSetAllMeasures(stationId);
  });

  const pluvOptions = new Options(
    pluvMeasuresList,
    name,
    "pluviômetro",
    "mm",
    "Chuva"
  );
  const tempOptions = new Options(
    tempMeasuresList,
    name,
    "termômetro",
    "°C",
    "Temperatura"
  );
  const umidOptions = new Options(
    umidMeasuresList,
    name,
    "higrômetro",
    "%",
    "Umidade do ar"
  );
  const vVentOptions = new Options(
    vVentMeasuresList,
    name,
    "anenômetro",
    "km/h",
    "Velocidade do vento"
  );
  const dVentOptions = new Options(
    dVentMeasuresList,
    name,
    "catavento",
    "Direção",
    "Direção do vento"
  );

  return (
    <>
      <div>

      </div>

      <HeaderDefault title={name} />
      <Sidebar />
      <Container>
        <ChartDefault
          title="Sensor pluviométrico"
          options={pluvOptions.options}
        />
        <ChartDefault
          title="Sensor temperatura"
          options={tempOptions.options}
        />
        <ChartDefault title="Sensor umidade" options={umidOptions.options} />
        <ChartDefault
          title="Sensor velocidade do vento"
          options={vVentOptions.options}
        />
        <ChartDefault
          title="Sensor direção do vento"
          options={dVentOptions.options}
        />
      </Container>
      <ButtonDownload>
        <CSVLink {...csvReport}>
          EXPORTAR DADOS PARA CSV
        </CSVLink>
      </ButtonDownload>
    </>
  );
}