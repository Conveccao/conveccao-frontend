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

import logo from '../../assets/icons/logo.svg';


export function Sidebar() {
  return (
    <Container>
      <Header>
        <ContainerLogo>
          <Logo src={logo} alt="logo" />
          <Title>Menu</Title>
        </ContainerLogo>
       
        <Navbar>
          <NavbarLink to="/home">
            Página inicial
          </NavbarLink>

          <NavbarLink to="">
            Perfil
          </NavbarLink>

          <NavbarLink to="">
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