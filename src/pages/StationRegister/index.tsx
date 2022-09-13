import ButtonDefault from '../../components/ButtonDefault';
import HeaderDefault from '../../components/HeaderDefault';
import StationForm from '../../components/StationRegisterForm';


import THEME from '../../styles/theme';

import { Main, Footer, ContentFooter, Container } from './styles';

export function StationRegister(){
    return(
        <Container>
            <HeaderDefault title='Cadastro de estação'/>
            <Main>
                <StationForm />
            </Main>
            <Footer>
                <ContentFooter>
                     <ButtonDefault 
                     title='Cadastrar' 
                     backgroundButton={THEME.colors.primary_green} 
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     />
                </ContentFooter>
            </Footer>
        </Container>
    )
}