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
import { useEffect, useState } from 'react';
import SessionController from '../../session/sessionController'
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';


export function Sidebar() {

  const [authenticated, setAuthenticated] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication()
  }, [])

  const checkAuthentication = async () => {
    const token = SessionController.getToken()
    if(token == null){
      setAuthenticated(false)
    } else {
      setAuthenticated(true)
    }
    return authenticated
  }

  useEffect(() => {
    if(!authenticated){
      navigate('/login')
    }
  }, [authenticated, navigate])

  function logout(e: any){
    SessionController.clear()
  }

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
        <NavbarLinkButton 
          onClick={(e) => logout(e)}
          to="/login">
          Sair
        </NavbarLinkButton>
      </Footer>
    </Container>
  );
}