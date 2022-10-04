import react from 'react';
import { Link } from 'react-router-dom';


import { Container, Menu, Main, Logo, Nav, ButtonNav, Title, Subtitle, ButtonDoc, ButtonAcess, AreaButton, Page, ButtonLink, } from './styles';

import LogoMenu from '../../assets/images/logosubtitle.jpeg';



export function Presentation() {

  return (
    <Page>
      <Container>
        <Menu>
          <Nav></Nav>
          <Logo src={LogoMenu} alt="logo" />
          <ButtonLink to="/login"><ButtonNav>LOGIN</ButtonNav></ButtonLink>
        </Menu>
        <Main>
          <Title>Convecção</Title>
          <Subtitle>Plataforma de disseminação de dados.</Subtitle>
          <AreaButton>
            <ButtonLink to="/dashboard"><ButtonDoc>ACESSAR</ButtonDoc></ButtonLink>
            <a href='https://app.swaggerhub.com/apis-docs/Nathtruyts/Conveccao/1.0' ><ButtonAcess>DOCUMENTAÇÃO</ButtonAcess></a>
          </AreaButton>
        </Main>
      </Container>
    </Page>
  );
}
