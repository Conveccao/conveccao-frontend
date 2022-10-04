import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {HeaderDefault} from '../../components/HeaderDefault';
import { Sidebar } from '../../components/Sidebar';
import { TableUsers } from '../../components/TableUsers';
import {CircularProgress, Box} from '@mui/material';
import { Main, Container } from './styles';


export function UserControl(){
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
            <HeaderDefault title='Usuários cadastrados'/>
            <Main>  
            { 
                isLoading ? 
                <TableUsers />
                :
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
                    <CircularProgress color="success" />
                </Box>
            }
            </Main>
        </Container>
    )
}
