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
            Página inicial
          </NavbarLink>
          <NavbarLink to="/usercontrol">
            Usuários cadastrados
          </NavbarLink>

          <NavbarLink to="/stationregister">
            Cadastro de estações
          </NavbarLink>

          <NavbarLink to="/stationlist">
            Estações cadastradas
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