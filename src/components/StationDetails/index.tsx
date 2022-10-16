import { useEffect, useState } from 'react';
import StationHandlers from '../../integration/handlers/stationHandlers';
import { FormFooter } from '../../pages/StationList/styles';
import THEME from '../../styles/theme';
import { ButtonDefault } from '../ButtonDefault';
import {CustomInput} from '../InputDefault';
import { Footer } from '../Sidebar/styles';
import { SFieldset, SLabel, SFieldsetObs, Title, Subtitle } from './styles'
import { Col, Row, Container } from 'react-grid-system';

import SessionController from '../../session/sessionController';
import { useNavigate } from 'react-router-dom';

export function StationDisplay() {

  console.log(SessionController.getStationInstallDate())

  const navigate = useNavigate();
  const [autenticado, setAutenticado] = useState(true);
  const [id, setId] = useState(SessionController.getStationId())
  const [name, setName] = useState(SessionController.getStationName())
  const [installDate, setInstallDate] = useState(SessionController.getStationInstallDate())
  const [lat, setLat] = useState(SessionController.getStationLat())
  const [lon, setLon] = useState(SessionController.getStationLon())
  const [reference, setReference] = useState(SessionController.getStationReference())

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
        reference: reference
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
      <Container>     
        <Title>{name}</Title>
        <Subtitle>Estação criada dia {installDate}</Subtitle>
        <Row>
          <Col>   
            <SFieldset>
              <SLabel>Nome da estação</SLabel>
              <CustomInput placeholder={name}
              onChange={(e) => setName(e.target.value)}/>
            </SFieldset>
          </Col>
          <Col>
            <SFieldset>
              <SLabel>Data de instalação</SLabel>
              <CustomInput placeholder={installDate}
              type='date'
              onChange={(e) => setInstallDate(e.target.value)}/>
            </SFieldset>
          </Col>
        </Row>
        <Row>
          <Col>
            <SFieldset>
              <SLabel>Latitude</SLabel>
              <CustomInput placeholder={lat}
              onChange={(e) => setLat(e.target.value)}/>
            </SFieldset>
          </Col>
          <Col>
            <SFieldset>
              <SLabel>Longitude</SLabel>
              <CustomInput placeholder={lon}
              onChange={(e) => setLon(e.target.value)}/>
            </SFieldset>
          </Col>
        </Row>
        <Row style={{alignItems: 'end'}}>  
          <Col>
            <SFieldsetObs>
              <SLabel>Referência</SLabel>
              <CustomInput placeholder={reference}
              onChange={(e) => setReference(e.target.value)}/>
            </SFieldsetObs>
          </Col>
        </Row>  
        <Row>
          <Footer>
            <FormFooter>
              <Col>
                <ButtonDefault 
                  title='Editar Informações' 
                  backgroundButton={THEME.colors.green_50}
                  widthButton={'184px'} 
                  heightButton={'56px'}
                  onClick={(e) => handleUpdateStation(id, station)}
                  type = "submit"
                />
              </Col>
              <Col>
                <ButtonDefault 
                  title='Visualizar Sensores' 
                  backgroundButton={THEME.colors.green_50}
                  widthButton={'184px'} 
                  heightButton={'56px'}
                  type = "submit"
                />
              </Col>
            </FormFooter>
          </Footer>
        </Row>
      </Container>
    );
}