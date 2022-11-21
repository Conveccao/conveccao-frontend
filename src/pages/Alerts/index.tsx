import { useEffect, useState } from "react";

import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { URI } from "../../integration/uri";

import { Container, Card, InfoAlerts, TypeAlert, TypeAlertTitle, TypeAlertText, HourAlert, HourAlertTitle, HourAlertText, DateAlert, DateAlertTitle, DateAlertText, TitleCard } from "./styles";

export function Alerts() {
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

  const [alerts, setAlerts] = useState([]);

  const handleGetAll = async () => {
    const res = await axios.get(URI.ALERTS);
    return res.data;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAllAlerts = async () => {
    const allAlerts: [] = await handleGetAll();
    setAlerts(allAlerts);
  };

  useEffect(() => {
    getAllAlerts();
  }, [getAllAlerts]);




  return (
    <>
      <HeaderDefault title="Lista de Alertas" />
      <Sidebar />
      <Container>
      {alerts.map((alert: any) => (
        <Card>
          <TitleCard>{alert.occurrence}</TitleCard>
          <InfoAlerts>            
            <TypeAlert>
              <TypeAlertTitle>
                  LOCAL:
              </TypeAlertTitle>
              <TypeAlertText>
                  {alert.place}
              </TypeAlertText>
            </TypeAlert>
            <HourAlert>
              <HourAlertTitle>
                DATA:
              </HourAlertTitle>
              <HourAlertText>
                {alert.date}
              </HourAlertText>
            </HourAlert>
            <DateAlert>
              <DateAlertTitle>
                  HORA:
              </DateAlertTitle>
              <DateAlertText>
                  {alert.hour}
              </DateAlertText>
            </DateAlert>
          </InfoAlerts>
        </Card>
      ))} 
      </Container>
    </>
  );
}


