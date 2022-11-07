import { useEffect, useState } from "react";

import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";

import { Container, Card, InfoAlerts, TypeAlert, TypeAlertTitle, TypeAlertText, HourAlert, HourAlertTitle, HourAlertText, DateAlert, DateAlertTitle, DateAlertText, DescriptionAlerts, DescriptionAlertsTitle, DescriptionAlertsText, TitleCard } from "./styles";

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
      <TitleCard>Alerta de Chuva</TitleCard>
        <Card>
          <InfoAlerts>            
            <TypeAlert>
              <TypeAlertTitle>
                  Tipo do Alerta:
              </TypeAlertTitle>
              <TypeAlertText>
                  Deslizamento de Terra
              </TypeAlertText>
            </TypeAlert>
            <HourAlert>
              <HourAlertTitle>
                Data:
              </HourAlertTitle>
              <HourAlertText>
                12/12/2022
              </HourAlertText>
            </HourAlert>
            <DateAlert>
              <DateAlertTitle>
                  Hora:
              </DateAlertTitle>
              <DateAlertText>
                  13:29:58
              </DateAlertText>
            </DateAlert>
          </InfoAlerts>

          <DescriptionAlerts>
            <DescriptionAlertsTitle>
                Descrição do Alerta:
            </DescriptionAlertsTitle>
            <DescriptionAlertsText>
                Atenção, deslizamento de chuva pode ocorrer a qualquer momento.
            </DescriptionAlertsText>  
          </DescriptionAlerts>
        </Card>      

      </Container>
    </>
  );
}


