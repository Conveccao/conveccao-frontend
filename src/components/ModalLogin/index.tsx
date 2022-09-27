import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";

import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

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
      
      <ButtonContainer>
        {isLoading ? (
            <ButtonGoogle >
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
          <ButtonFacebook>
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
