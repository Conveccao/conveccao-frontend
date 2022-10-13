import { HeaderDefault } from '../../components/HeaderDefault';
import ParameterForm from '../../components/ParameterRegisterForm';
import { Sidebar } from '../../components/Sidebar';

import ControleSessao from '../../Login/ControleSessao';
import { useNavigate } from "react-router-dom";

import { Main, Container } from './styles';
import { useEffect, useState } from 'react';

export function ParameterRegister() {
    const navigate = useNavigate();
    const [autenticado, setAutenticado] = useState(true);

    useEffect(() => {
        checarAutenticacao()
    }, [])

    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        if (!autenticado || ControleSessao.getUserCargo() != 'moderator' && 'admin') {
            navigate('/home-page')
        }
    }, [autenticado, navigate])

    const checarAutenticacao = async () => {
        const token = ControleSessao.getToken()
        if (token == null) {
            setAutenticado(false)
        } else {
            setAutenticado(true)
        }
        return autenticado
    }


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