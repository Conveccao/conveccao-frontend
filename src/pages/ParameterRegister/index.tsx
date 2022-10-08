import {HeaderDefault} from '../../components/HeaderDefault';
import ParameterForm from '../../components/ParameterRegisterForm';
import { Sidebar } from '../../components/Sidebar';

import { Main, Container } from './styles';

export function ParameterRegister(){
    return(
        <Container>
            <HeaderDefault title='Cadastro de parâmetros'/>
            <Sidebar/>
            <Main>
                <ParameterForm />
            </Main>
        </Container>
    )
}