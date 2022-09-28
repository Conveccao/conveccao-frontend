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
          <NavbarLink to="">
            Página inicial
          </NavbarLink>

          <NavbarLink to="">
            Perfil
          </NavbarLink>

          <NavbarLink to="">
            Usuários cadastrados
          </NavbarLink>

          <NavbarLink to="">
            Cadastro de estações
          </NavbarLink>

          <NavbarLink to="">
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