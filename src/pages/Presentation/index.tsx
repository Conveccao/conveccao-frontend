import {
  Container,
  Menu,
  Logo,
  ButtonLogin,
  MainContent,
  Content,
  Title,
  Subtitle,
  ContainerButton,
  ButtonAccess,
  ButtonDoc
} from "./styles";


import ControleSessao from '../../Login/ControleSessao';
import { useNavigate } from "react-router-dom";

import LogoMenu from "../../assets/images/logosubtitle.png";
import { useEffect, useState } from "react";

export function Presentation() {

  const navigate = useNavigate();
  const [autenticado, setAutenticado] = useState(true);

  useEffect(() => {
    checarAutenticacao()
  }, [])

  useEffect(() => {
    if (autenticado) {
        if (ControleSessao.getUserCargo() == 'admin') {
            navigate('/home-page')
        } else if (ControleSessao.getUserCargo() == 'moderator') {
            navigate('/home-page')
        } else if (ControleSessao.getUserCargo() == 'user') {
            navigate('/home-page')
        }
    }
}, [autenticado, navigate])

  const checarAutenticacao = async () => {
    const token = ControleSessao.getToken()
    if (token == null) {
      setAutenticado(false)
    } else {
      setAutenticado(true)
    }
    return autenticado
  }

  return (
    
      <Container>
        <Menu>
          <Logo src={LogoMenu} alt="logo" />
          <ButtonLogin to="/login">
            Login
          </ButtonLogin>
        </Menu>

        <MainContent>
            <Content>
                <Title>Convecção</Title>
                <Subtitle>Plataforma de disseminação de dados.</Subtitle>
            </Content>
            <ContainerButton>
                <ButtonAccess to="/home-page">Acessar</ButtonAccess>
                <ButtonDoc href="https://app.swaggerhub.com/apis-docs/Nathtruyts/Conveccao/1.0" target="_blank">Documentação</ButtonDoc>
            </ContainerButton>
        </MainContent>
      </Container>
  );
}