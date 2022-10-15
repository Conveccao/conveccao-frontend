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

  const navigate = useNavigate();
  const [autenticado, setAutenticado] = useState(true);

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
    if (!autenticado || SessionController.getUserRole() != 'admin' && 'moderator'  ) {
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

    const [name, setName] = useState('')
    const [installDate, setInstallDate] = useState('')
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [reference, setReference] = useState('')

    let station = {
        installation_date: installDate,
        name: name,
        lat: lat,
        lon: lon,
        reference: reference
    }

    let stationHandlers = new StationHandlers()

    const handleNewStation = async(e:any) => {
        e.preventDefault()

        try{
            stationHandlers.handleNewStation(station)
            e.target.reset()
            console.log(station)
        } catch (err){
            console.log(err)
        }
    }

    return (
      <Container>     
        <Title>Estação 001 - FATEC</Title>
        <Subtitle>Estação criada dia 01/01/2022</Subtitle>
        <Row>
          <Col>   
            <SFieldset>
              <SLabel>Nome da estação</SLabel>
              <CustomInput placeholder='Digite o nome da estação'
              onChange={(e) => setName(e.target.value)}/>
            </SFieldset>
          </Col>
          <Col>
            <SFieldset>
              <SLabel>Cidade</SLabel>
              <CustomInput placeholder='Digite a data da instalação'
              type='date'
              onChange={(e) => setInstallDate(e.target.value)}/>
            </SFieldset>
          </Col>
        </Row>
        <Row>
          <Col>
            <SFieldset>
              <SLabel>Referência</SLabel>
              <CustomInput placeholder='Digite a latitude da estação'
              onChange={(e) => setLat(e.target.value)}/>
            </SFieldset>
          </Col>
          <Col>
            <SFieldset>
              <SLabel>Tipo</SLabel>
              <CustomInput placeholder='Digite a longitude da estação'
              onChange={(e) => setLon(e.target.value)}/>
            </SFieldset>
          </Col>
        </Row>
        <Row style={{alignItems: 'end'}}>  
          <Col>
            <SFieldsetObs>
              <SLabel>Observações</SLabel>
              <CustomInput placeholder='Digite a referência da estação'
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