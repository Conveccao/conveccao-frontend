import { useNavigate } from 'react-router-dom';
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
                <ContentFooter>
                     <ButtonDefault 
                     title='Cadastrar' 
                     backgroundButton={THEME.colors.green_50}
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     onClick={() => {navigate(`/stationlist`)}}
                     />
                </ContentFooter>
            </Footer>
        </Container>
    )
}