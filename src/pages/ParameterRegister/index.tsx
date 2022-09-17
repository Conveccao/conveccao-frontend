import {ButtonDefault} from '../../components/ButtonDefault';
import {HeaderDefault} from '../../components/HeaderDefault';
import ParameterForm from '../../components/ParameterRegisterForm';


import THEME from '../../styles/theme';

import { Main, Footer, ContentFooter, Container } from './styles';

export function ParameterRegister(){
    return(
        <Container>
            <HeaderDefault title='Cadastro de parâmetros'/>
            <Main>
                <ParameterForm />
            </Main>
            <Footer>
                <ContentFooter>
                     <ButtonDefault 
                     title='Cadastrar' 
                     backgroundButton={THEME.colors.green_100} 
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     />
                </ContentFooter>
            </Footer>
        </Container>
    )
}