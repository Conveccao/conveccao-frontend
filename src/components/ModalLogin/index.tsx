import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../../services/firebase";

import LogoGoogle from '../../assets/icons/googleIcon.svg';

import {
  Container,
  TitleContainer,
  SubtitleContainer,
  Title,
  Subtitle,
  ButtonContainer,
  ButtonGoogle,
  ButtonGithub,
  Header,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserHandlers from "../../integration/handlers/userHandlers";
import SessionController from "../../session/sessionController";

export default function ModalLogin() {
  const [user, setUser] = useState<User>({} as User);
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  let userHandler = new UserHandlers();

  useEffect(() => {
    checkAuthentication()
  }, [])

  const checkAuthentication = async () => {
    const token = SessionController.getToken()
    if (token == null) {
      setAuthenticated(false)
    } else {
      setAuthenticated(true)
    }
    return authenticated
  }

  useEffect(() => {
    if (authenticated) {
      navigate('/home-page')
    }
  }, [authenticated, navigate])

  const handleCreateUser = async (user: object) => {
    try {
      userHandler.handleCreateUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (email: string) => {
    try {
      const obj = await userHandler.handleLogin(email);
      SessionController.setToken(obj.token)
      SessionController.setUserData(obj.user)
      setAuthenticated(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUserExists = async (email: string) => {
    try {
      return await userHandler.handleUserExists(email);
    } catch (error) {
      console.log(error);
    }
  };

  async function handleFacebookLogin(){
    const provider = new FacebookAuthProvider();
    provider.addScope('name');
    provider.addScope('email');
    provider.addScope('picture{url}');

    signInWithPopup(auth, provider)
    .then(result => {console.log(result)}).catch(error => {console.log(error)});
  }

  async function handleGithubLogin() {
    const provider = new GithubAuthProvider();
  
    signInWithPopup(auth, provider)
    .then(async (result: any) => {
        setUser(result.user);
        let newUser = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        };
        let userExists = await handleUserExists(result.user.email);
        if (!userExists) {
          handleCreateUser(newUser);
        }
        await handleLogin(result.user.email)
      })
      .catch((error: any) => {
        console.log(error);
        window.alert("Email cadastrado! Tente Logar com Gmail")
      });

  }

  async function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result: any) => {
        setUser(result.user);
        let newUser = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        };
        let userExists = await handleUserExists(result.user.email);
        if (!userExists) {
          handleCreateUser(newUser);
        }
        await handleLogin(result.user.email)
      })
      .catch((error: any) => {
        console.log(error);
        window.alert("Email cadastrado! Tente Logar com GitHub")
      });
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Header>
        <TitleContainer>
          {isLoading ? (
            <Title>Bem vindo</Title>
          ) : (
            <Skeleton animation="wave" variant="text" width={125} height={50} />
          )}
        </TitleContainer>

        <SubtitleContainer>
          {isLoading ? (
            <Subtitle>Acesse com sua rede social favorita</Subtitle>
          ) : (
            <Skeleton
              animation="wave"
              variant="text"
              width="200px"
              height={25}
            />
          )}
        </SubtitleContainer>
      </Header>
      <ButtonContainer>
        {isLoading ? (
          <ButtonGoogle onClick={handleGoogleLogin}>
            <img src={LogoGoogle} alt="Google Icon"/>
            Fa??a login com o Google
          </ButtonGoogle>
        ) : (
          <Skeleton
            variant="rounded"
            animation="wave"
            width={272}
            height={40}
            style={{ marginBottom: "16px" }}
          />
        )}

        {isLoading ? (
          <ButtonGithub onClick={handleGithubLogin}>
           <FontAwesomeIcon icon={faGithub} size="lg" />
              Fa??a login com o Github
          </ButtonGithub>
        ) : (
          <Skeleton
            variant="rounded"
            animation="wave"
            width={272}
            height={40}
            style={{ marginBottom: "16px" }}
          />
        )}
      </ButtonContainer>
    </Container>
  );
}
