import * as json2csv from "json2csv";
import * as fs from "fs";
import * as uuid from "uuid";

import { ChartDefault } from "../../components/CardChart";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { Container, ButtonDownload } from "./styles";
import { useEffect, useState } from "react";
import Options from "./options/options";

import SessionController from '../../session/sessionController';

import MeasuresHandlers from "../../integration/handlers/measuresHandlers";
import MeasuresHandlersDownload from "../../integration/handlers/measuresHandlersDownload";

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


  function handleDownload(){
      console.log('funcionando')
      // DOWNLOAD
      const measuresHandlerDownload = new MeasuresHandlersDownload();
      
      const handleGetMeasuresDownload =  async (id: number) => {
        return await measuresHandlerDownload.handleMeasuresPerStation(id)
      };

      const setMeasuresDownload = async (id: number) => {
        const measuresValuesDownload: any[] = [];
        const measuresDownload = await handleGetMeasuresDownload(id);
        measuresDownload.forEach((measureDownload: any) => {
          measuresValuesDownload.push(measureDownload.value); 
        });
        
        console.log(measuresDownload)

        const fields = [ "estação", "data", "hora", "parametro", "unidade", "valor" ];
        const opts = {fields};  

        function exportFiles(){
          const tocsv = function(measuresDownload: any){
            try {
              const csv = json2csv.parseAsync(measuresDownload, opts);
              const FileName = uuid.v4() + ".csv";
              fs.writeFile("./Download/" + FileName, csv, function(err) {
                try {
                  window.alert("Arquivo salvo com sucesso!");
                } catch (error) {
                  console.log(error)
                }
              });
              return FileName;
            }catch (erro) {
              console.log(erro);
            }
          }
        }
        return measuresValuesDownload;
      }
      setMeasuresDownload(stationId)
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

  

  const pluvOptions = new Options(pluvMeasuresList, name, 'pluviômetro', 'mm', 'Chuva')
  const tempOptions = new Options(tempMeasuresList, name, 'termômetro', '°C', 'Temperatura')
  const umidOptions = new Options(umidMeasuresList, name, 'higrômetro', '%', 'Umidade do ar')
  const vVentOptions = new Options(vVentMeasuresList, name, 'anenômetro', 'km/h', 'Velocidade do vento')
  const dVentOptions = new Options(dVentMeasuresList, name, 'catavento', 'Direção', 'Direção do vento')

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
      <ButtonDownload
        onClick={handleDownload}
      >
          EXPORTAR DADOS PARA CSV
      </ButtonDownload>
    </>
  );
}
