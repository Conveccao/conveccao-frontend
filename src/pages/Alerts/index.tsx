import { useEffect, useState } from "react";

import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <HeaderDefault title="Lista de Alertas" />
      <Sidebar />
      <Container>
        <Card>
          <TitleCard>DESLIZAMENTO DE CHUVA</TitleCard>
          <InfoAlerts>            
            <TypeAlert>
              <TypeAlertTitle>
                  LOCAL:
              </TypeAlertTitle>
              <TypeAlertText>
                  SAO JOSE DOS CAMPOS
              </TypeAlertText>
            </TypeAlert>
            <HourAlert>
              <HourAlertTitle>
                DATA:
              </HourAlertTitle>
              <HourAlertText>
                12/12/2022
              </HourAlertText>
            </HourAlert>
            <DateAlert>
              <DateAlertTitle>
                  HORA:
              </DateAlertTitle>
              <DateAlertText>
                  13:29:58
              </DateAlertText>
            </DateAlert>
          </InfoAlerts>
        </Card>
      </Container>
    </>
  );
}


