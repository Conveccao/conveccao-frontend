import { useEffect, useState } from 'react';
import StationHandlers from '../../integration/handlers/stationHandlers';

import { ButtonDefault } from "../../components/ButtonDefault";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import THEME from "../../styles/theme";

import SessionController from '../../session/sessionController';

import { 
  Main,
  TopDiv,
  Title,
  Description,
  StyledHR,
  FormDetails,
  Fieldset,
  Legend,
  Input,
  FieldsetTextBox,
  InputRef,
  ButtonDiv
} from "./styles";
import { useNavigate } from 'react-router-dom';

export function StationDetails() {
  const navigate = useNavigate();
  const [autenticado, setAutenticado] = useState(true);
  const [id, setId] = useState(SessionController.getStationId())
  const [name, setName] = useState(SessionController.getStationName())
  const [installDate, setInstallDate] = useState(SessionController.getStationInstallDate())
  const [lat, setLat] = useState(SessionController.getStationLat())
  const [lon, setLon] = useState(SessionController.getStationLon())
  const [reference, setReference] = useState(SessionController.getStationReference())
  const [link, setLink] = useState(SessionController.getStationLink())

  useEffect(() => {
    checarAutenticacao()
  }, [])

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (!autenticado) {
        navigate('/')
    }
  }, [autenticado, navigate])

  useEffect(() => {
    if (!autenticado || (SessionController.getUserRole() == 'user')) {
        navigate('/home-page')
    }
  }, [autenticado, navigate])


  const checkStationExistence = () => {
    const station = SessionController.getStationData()
    if(station) return true
    return false
  }

  useEffect(() => {
    if (!autenticado || SessionController.getUserRole() == 'user') {
        navigate('/home-page')
    } else {
      if(!checkStationExistence()) navigate('/station-list')
    }
  }, [autenticado, navigate])


  const checarAutenticacao = async () => {
    const token = SessionController.getToken()
    if (token == null) {
        setAutenticado(false)
    } else {
        setAutenticado(true)
    }
    return autenticado
  }

    let station = {
        installation_date: installDate,
        name: name,
        lat: lat,
        lon: lon,
        reference: reference,
        link: link
    }

    let stationHandlers = new StationHandlers()

    const handleUpdateStation = async(id: number, station: object) => {

        try{
            stationHandlers.handleUpdateStation(id, station)
        } catch (err){
            console.log(err)
        }
    }

  return (
    <>
      <HeaderDefault title="Detalhes da estação" />
      <Sidebar /> 
      <Main>
        <TopDiv>
          <Title>{name}</Title>
          <Description>Data de criação: {installDate}</Description>
          <StyledHR />
        </TopDiv>

        <FormDetails>
          <Fieldset>
            <Legend>Nome da estação</Legend>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Fieldset>

          <Fieldset>
            <Legend>Data da instalação</Legend>
            <Input value={installDate} type='date' onChange={(e) => setInstallDate(e.target.value)} />
          </Fieldset>

          <Fieldset>
            <Legend>Latitude</Legend>
            <Input value={lat} onChange={(e) => setLat(e.target.value)} />
          </Fieldset>

          <Fieldset>
            <Legend>Longitude</Legend>
            <Input value={lon} onChange={(e) => setLon(e.target.value)} />
          </Fieldset>

          <FieldsetTextBox>
            <Legend>Link de Imagem da Estação</Legend>
            <InputRef value={link} onChange={(e) => setLink(e.target.value)}  />
          </FieldsetTextBox>

          <FieldsetTextBox>
            <Legend>Referência</Legend>
            <InputRef value={reference} onChange={(e) => setReference(e.target.value)}  />
          </FieldsetTextBox>

        </FormDetails>
        <ButtonDiv>
          <ButtonDefault title="Atualizar informações" widthButton="250px" backgroundButton={THEME.colors.green_100} hoverBackgroundButton={THEME.colors.green_50} onClick={(e) => handleUpdateStation(id, station)}/>
          <ButtonDefault title="Visualizar sensores" widthButton="250px" backgroundButton={THEME.colors.green_100} hoverBackgroundButton={THEME.colors.green_50} onClick={(e) => navigate('/sensor-list')}/>
        </ButtonDiv>
      </Main>
    </>
  );
}