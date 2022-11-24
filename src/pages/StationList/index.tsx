import { useEffect, useState } from "react";

import { ButtonDefault } from "../../components/ButtonDefault";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import axios from "axios";
import { URI } from "../../integration/uri";

import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";

import { Main, Table, TableTH, TableTD, TableTDButton } from "./styles";
import THEME from "../../styles/theme";
import StationHandlers from "../../integration/handlers/stationHandlers";

export function StationList() {
  const navigate = useNavigate();
  const [autenticado, setAutenticado] = useState(true);


  useEffect(() => {
    checarAutenticacao()
  }, [])

  useEffect(() => {
    if (!autenticado) {
        navigate('/login')
    } else {
      if (!checkAuthorization()) navigate('/home-page')
    }
  }, [autenticado, navigate])

  const checkAuthorization = () => {
    const userRole = SessionController.getUserRole()
    if(userRole == 'user') return false
    return true
  }

  const checarAutenticacao = async () => {
    const token = SessionController.getToken()
    if (token == null) {
        setAutenticado(false)
    } else {
        setAutenticado(true)
    }
    return autenticado
  }

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


  const stationHandlers = new StationHandlers()

  async function handleActiveStations (id: number) {
    try {
      stationHandlers.handleActivateStation(id)
    } catch (error) {
      console.log(error)
    }
  }

  function handleDeactiveStations (id: number) {
    try {
      stationHandlers.handleDeactivateStation(id)
    } catch (error) {
      console.log(error)
    }
  }




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
              <TableTH>Situação</TableTH>
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
                    onClick={(e) => {navigate("/station-details"); SessionController.setStationData(station)}}
                  />
                </TableTDButton>
                {station.active == true &&
                  <TableTDButton>
                      <ButtonDefault
                      title="Desativar"
                      backgroundButton={THEME.colors.red_google}
                      widthButton={"184px"}
                      heightButton={"40px"}
                      hoverBackgroundButton={THEME.colors.red_google_50}
                      onClick={() => handleDeactiveStations(station.id)}
                    /> 
                  </TableTDButton>                  
                  }
                  {station.active == false &&
                    <TableTDButton>
                        <ButtonDefault
                        title="Ativar"
                        backgroundButton={THEME.colors.green_100}
                        widthButton={"184px"}
                        heightButton={"40px"}
                        hoverBackgroundButton={THEME.colors.green_50}
                        onClick={(e) => handleActiveStations(station.id)}
                      />
                    </TableTDButton>                   
                }
              </tr>
            ))}
          </tbody>

        </Table>
      </Main>
    </>
  );
}
