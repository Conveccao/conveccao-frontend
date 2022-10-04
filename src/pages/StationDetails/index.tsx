import { useNavigate, useSubmit } from 'react-router-dom';
import { ButtonDefault } from '../../components/ButtonDefault';
import { HeaderDefault } from '../../components/HeaderDefault';
import { Sidebar } from '../../components/Sidebar';
import { StationDisplay } from '../../components/StationDetails';


import THEME from '../../styles/theme';

import { Main, Footer, ContentFooter, Container } from './styles';

export function StationDetails(){
    const navigate = useNavigate();
    
    return(
        <Container>

            <HeaderDefault title='Detalhes da estação'/>
            <Sidebar/>
            <Main>
                <StationDisplay />
            </Main>
            <Footer>
            </Footer>
        </Container>
    )
}