import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { StationDisplay } from "../../components/StationDetails";

import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";

import { Main, Footer, Container } from "./styles";
import { useEffect, useState } from "react";

export function StationDetails() {

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

  const checkStationExistence = () => {
    const station = SessionController.getStationData()
    if(station) return true
    return false
  }

  return (
    <Container>
      <HeaderDefault title="Detalhes da estação" />
      <Sidebar />
      <Main>
        <StationDisplay />
      </Main>
      <Footer></Footer>
    </Container>
  );
}
