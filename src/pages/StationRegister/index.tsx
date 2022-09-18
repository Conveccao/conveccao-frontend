import { useNavigate, useSubmit } from 'react-router-dom';
import { ButtonDefault } from '../../components/ButtonDefault';
import { HeaderDefault } from '../../components/HeaderDefault';
import { Sidebar } from '../../components/Sidebar';
import { StationForm } from '../../components/StationRegisterForm';


import THEME from '../../styles/theme';

import { Main, Footer, ContentFooter, Container } from './styles';

export function StationRegister(){
    const navigate = useNavigate();
    
    return(
        <Container>

            <HeaderDefault title='Cadastro de estação'/>
            <Sidebar/>
            <Main>
                <StationForm />
            </Main>
            <Footer>
            </Footer>
        </Container>
    )
}