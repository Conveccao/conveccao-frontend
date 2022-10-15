import { HeaderDefault } from '../../components/HeaderDefault';
import ParameterForm from '../../components/ParameterRegisterForm';
import { Sidebar } from '../../components/Sidebar';
import { useNavigate } from "react-router-dom";

import { Main, Container } from './styles';
import { useEffect, useState } from 'react';

export function ParameterRegister() {

    return (
        <Container>
            <HeaderDefault title='Cadastro de parâmetros' />
            <Sidebar />
            <Main>
                <ParameterForm />
            </Main>
        </Container>
    )
}