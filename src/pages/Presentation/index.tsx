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

import { useNavigate } from "react-router-dom";

import LogoMenu from "../../assets/images/logosubtitle.png";
import { useEffect, useState } from "react";

export function Presentation() {
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