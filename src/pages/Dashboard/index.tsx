import { ChartDefault } from "../../components/CardChart";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { Container, ButtonDownload } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Options from "./options/options";

import SessionController from '../../session/sessionController';

import StationHandlers from '../../integration/handlers/stationHandlers';
import axios from "axios";
import { URI } from "../../integration/uri";
import MeasuresHandlers from "../../integration/handlers/measuresHandlers";
import { async } from "@firebase/util";

export function Dashboard() {
  const [pluvMeasuresList, setPluvMeasuresList] = useState([])
  const [tempMeasuresList, setTempMeasuresList] = useState([])
  const [umidMeasuresList, setUmidMeasuresList] = useState([])
  const [vVentMeasuresList, setVVentMeasuresList] = useState([])
  const [dVentMeasuresList, setDVentMeasuresList] = useState([])

  const [stationId, setStationId] = useState(SessionController.getStationId())
  const [name, setName] = useState(SessionController.getStationName())

  const measuresHandler = new MeasuresHandlers();

  const handleGetMeasures =  async (id: number, reference: string) => {
    return await measuresHandler.handleMeasuresPerStationAndReference(id, reference)
  };

  const setMeasuresList = async (id: number, reference: string) => {
    const measuresValues: any[] = [];
    const measures = await handleGetMeasures(id, reference);
    measures.forEach((measure: any) => {
      measuresValues.push(measure.value);
    });
    return measuresValues;
  }

  const handleSetAllMeasures = async (id: number) => {
    const pluvMeasuresValues: any = await setMeasuresList(id, 'pluv');
    const tempMeasuresValues: any = await setMeasuresList(id, 'temp');
    const umidMeasuresValues: any = await setMeasuresList(id, 'umid');
    const vVentMeasuresValues: any = await setMeasuresList(id, 'v_vent');
    const dVentMeasuresValues: any = await setMeasuresList(id, 'd_vent');
    setPluvMeasuresList(pluvMeasuresValues);
    setTempMeasuresList(tempMeasuresValues);
    setUmidMeasuresList(umidMeasuresValues);
    setVVentMeasuresList(vVentMeasuresValues);
    setDVentMeasuresList(dVentMeasuresValues);
  }

  useEffect(() => {
    handleSetAllMeasures(stationId)
  })

  const pluvOptions = new Options(pluvMeasuresList, name)
  const tempOptions = new Options(tempMeasuresList, name)
  const umidOptions = new Options(umidMeasuresList, name)
  const vVentOptions = new Options(vVentMeasuresList, name)
  const dVentOptions = new Options(dVentMeasuresList, name)


  return (
    <>
      <HeaderDefault title={name} />
      <Sidebar />
      <Container>
        <ChartDefault title="Sensor pluviométrico" options={pluvOptions.options} />
        <ChartDefault title="Sensor temperatura" options={tempOptions.options} />
        <ChartDefault title="Sensor umidade" options={umidOptions.options} />
        <ChartDefault title="Sensor velocidade do vento" options={vVentOptions.options} />
        <ChartDefault title="Sensor direção do vento" options={dVentOptions.options} />
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
