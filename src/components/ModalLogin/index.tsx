import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider, signInWithPopup, User} from "firebase/auth";
import { auth } from "../../services/firebase";

import {
  Container,
  TitleContainer,
  SubtitleContainer,
  Title,
  Subtitle,
  ButtonContainer,
  ButtonGoogle,
  ButtonFacebook,
  Header,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ModalLogin() {

  const [ user, setUser ] = useState<User>({} as User);

  function handleGoogleLogin(){
    const provider = new GoogleAuthProvider();

    signInWithPopup (auth, provider)
    .then (result => {setUser(result.user); console.log(result);})
    .catch((error) => {console.log(error);})

  }

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
            <Skeleton animation="wave" variant="text" width="200px" height={25} />
          )}
      </SubtitleContainer>
      </Header>

      <div className=" user">
        {user.photoURL && <img src={user.photoURL} style={{width: "40px", height: "40px"}}/>}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>
      
      <ButtonContainer>
        {isLoading ? (
            <ButtonGoogle onClick={handleGoogleLogin}>
                <FontAwesomeIcon icon={faGoogle} />
                Google
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
          <ButtonFacebook onClick={() => navigate('/dashboard')}>
            <FontAwesomeIcon icon={faFacebook} />
            Facebook
          </ButtonFacebook>
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
