import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

import { ButtonDefault } from "../ButtonDefault";

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
} from "./styles";

import THEME from "../../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalLogin() {
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

      <ButtonContainer>
        {isLoading ? (
            <ButtonGoogle>
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

        {isLoading ? (
          <ButtonDefault
            title="Acesse"
            backgroundButton={THEME.colors.green_100}
            onClick={() => navigate('/dashboard')}
          />
        ) : (
          <Skeleton
            variant="rounded"
            animation="wave"
            width={272}
            height={40}
          />
        )}
      </ButtonContainer>
    </Container>
  );
}
