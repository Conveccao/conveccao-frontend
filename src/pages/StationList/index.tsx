import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {ButtonDefault} from '../../components/ButtonDefault';
import {HeaderDefault} from '../../components/HeaderDefault';
import { Sidebar } from '../../components/Sidebar';
import { TableStation } from '../../components/TableStation';
import THEME from '../../styles/theme';
import {CircularProgress, Box} from '@mui/material';
import { Main, Footer, ContentFooter, Container } from './styles';

export function StationList(){
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(true);
        }, 2000);
        return () => clearTimeout(timer);
      } , []);

    return(
        <Container>
            <Sidebar />
            <HeaderDefault title='Estações meteorológicas'/>
            <Main> 
            { 
                isLoading ? 
                <TableStation />
                :
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
                    <CircularProgress color="success" />
                </Box>
            }
            </Main>
            <Footer>
                <ContentFooter>
                    <ButtonDefault 
                     title='Cadastrar estação' 
                     backgroundButton={THEME.colors.green_100} 
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     hoverBackgroundButton={THEME.colors.green_50}
                     onClick={() => navigate('/stationregister')}
                     />
                </ContentFooter>
            </Footer>
        </Container>
    )
}
