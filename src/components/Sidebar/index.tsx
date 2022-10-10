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
          <NavbarLink to="/home-page">
            Página inicial
          </NavbarLink>

          {/* <NavbarLink to="">
            Perfil
          </NavbarLink> */}

          <NavbarLink to="/user-control">
            Usuários cadastrados
          </NavbarLink>

          <NavbarLink to="/station-register">
            Cadastro de estações
          </NavbarLink>

          <NavbarLink to="/station-list">
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