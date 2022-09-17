import {
  Container,
  ContainerLogo,
  Title,
  Header,
  Navbar,
  NavbarLink,
  NavbarLinkButton,
  Footer,
  Logo,
} from './styles';

import logo from '../../assets/images/logo.svg';


export function Sidebar() {
  return (
    <Container>
      <Header>
        <ContainerLogo>
          <Logo src={logo} alt="logo" />
          <Title>Menu</Title>
        </ContainerLogo>
        <Navbar>
          <NavbarLink to="/dashboard">
            Dashboard
          </NavbarLink>
          <NavbarLink to="/stationlist">
            Visualizar estações
          </NavbarLink>
          <NavbarLink to="/stationregister">
            Cadastrar estações
          </NavbarLink>
        </Navbar>
      </Header>
      <Footer>
        <NavbarLinkButton to="/login">
          Sair
        </NavbarLinkButton>
      </Footer>
    </Container>
  );
}