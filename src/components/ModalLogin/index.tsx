import { useState, useEffect } from "react";

import {ButtonIcon} from "../ButtonIcon";
import {ButtonDefault} from "../ButtonDefault";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { Skeleton } from '@mui/material';

import { 
  Container,
  Header,
  Title,
  Subtitle,
  MainContent,
  DividerContainer,
  Divider,
  Footer } from "./styles";

import THEME from '../../styles/theme';



export function ModalLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  } , []);

  return (
    <Container>
        <Header>
          {isLoading ? 
            <Title>
              Bem vindo ao Convecção
            </Title>
            : 
            <Skeleton animation="wave" variant="text" width="100%" height={50} /> 
            }

          {isLoading ? 
            <Subtitle>
             Logue com sua rede social
            </Subtitle>
            : 
            <Skeleton animation="wave" variant="text" width="60%" height={25} /> 
            }
          
        </Header>
        <MainContent>
          {isLoading ? 
          <ButtonIcon 
            title="Google"
            icon={faGoogle}
            backgroundButton={THEME.colors.red_google}
            heightButton={'3.125rem'}
            widthButton={'19.375rem'}
            marginBottom={'1.75rem'}
            /> 
            : 
            <Skeleton 
              variant="rounded"
              animation="wave"
              width={310} 
              height={50} 
              style={{marginBottom: '28px'}}
              />
            }

        {isLoading ? 
          <ButtonIcon 
          title="Facebook" 
          icon={faFacebookF}
          backgroundButton={THEME.colors.blue_facebook}
          heightButton={'3.125rem'}
          widthButton={'19.375rem'}
          />
            : 
            <Skeleton 
            variant="rounded"
              animation="wave"
              width={310} 
              height={50} 
              />
            }
            
        </MainContent>
        <DividerContainer>
          <Divider />
        </DividerContainer>
        <Footer>
        {isLoading ? 
          <ButtonDefault
          title="Acesse"  
          heightButton={'50px'}
          widthButton={'310px'}
          backgroundButton={THEME.colors.green_100}
          hoverBackgroundButton={THEME.colors.green_50}
          onClick={() => navigate('/home')}
          />
            : 
            <Skeleton 
            variant="rounded"
              animation="wave"
              width={310} 
              height={50} 
              />
        }
        </Footer>
    </Container>
  );
}