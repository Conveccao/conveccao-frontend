import { useEffect, useState } from "react";

import { ButtonDefault } from "../../components/ButtonDefault";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import axios from "axios";
import { URI } from "../../integration/uri";

import { Main, Table, TableTH, TableTD, TableTDButton } from "./styles";
import THEME from "../../styles/theme";

export function StationList() {
  const [stations, setStations] = useState([]);

  const handleGetAll = async () => {
    const res = await axios.get(URI.STATIONS);
    return res.data;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAllStations = async () => {
    const allStations: [] = await handleGetAll();
    setStations(allStations);
  };

  useEffect(() => {
    getAllStations();
  }, [getAllStations]);

  return (
    <>
      <HeaderDefault title="Lista das estações" />
      <Sidebar />
      <Main>
        <Table>
          <thead>
            <tr>
              <TableTH>Código</TableTH>
              <TableTH>Nome da estação</TableTH>
              <TableTH>Localização</TableTH>
              <TableTH>Detalhes</TableTH>
            </tr>
          </thead>

          <tbody>
           {stations.map((station: any) => (
              <tr key={station.id}>
                <TableTD>{station.id}</TableTD>
                <TableTD>{station.name}</TableTD>
                <TableTD>{station.reference}</TableTD>
                <TableTDButton>
                  <ButtonDefault
                    title="Detalhes"
                    backgroundButton={THEME.colors.green_100}
                    widthButton={"184px"}
                    heightButton={"40px"}
                    hoverBackgroundButton={THEME.colors.green_50}
                  />
                </TableTDButton>
              </tr>
            ))}
          </tbody>
        </Table>
      </Main>
    </>
  );
}
