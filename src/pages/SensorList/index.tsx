import ButtonDefault from '../../components/ButtonDefault';
import HeaderDefault from '../../components/HeaderDefault';
import { TableStation } from '../../components/TableStation';
import THEME from '../../styles/theme';

import { Main, Footer, ContentFooter, Container } from './styles';

export function SensorList(){
    return(
        <Container>
            <HeaderDefault title='Estações meteorológicas'/>
            <Main>  
                <TableStation />
            </Main>
            <Footer>
                <ContentFooter>
                    <ButtonDefault 
                     title='Voltar' 
                     backgroundButton={THEME.colors.primary_green} 
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     />
                     <ButtonDefault 
                     title='Cadastrar estação' 
                     backgroundButton={THEME.colors.primary_green} 
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     />
                </ContentFooter>
            </Footer>
        </Container>
    )
}
