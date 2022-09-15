import {ButtonDefault} from '../../components/ButtonDefault';
import {HeaderDefault} from '../../components/HeaderDefault';
import { TableStation } from '../../components/TableStation';
import THEME from '../../styles/theme';

import { Main, Footer, ContentFooter, Container } from './styles';

export function StationList(){
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
                     backgroundButton={THEME.colors.green_100} 
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     hoverBackgroundButton={THEME.colors.green_50}
                     />
                     <ButtonDefault 
                     title='Cadastrar estação' 
                     backgroundButton={THEME.colors.green_100} 
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     hoverBackgroundButton={THEME.colors.green_50}
                     />
                </ContentFooter>
            </Footer>
        </Container>
    )
}
