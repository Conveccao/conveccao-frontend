import { useEffect, useState } from 'react';
import { HeaderDefault } from '../../components/HeaderDefault';
import { Sidebar } from '../../components/Sidebar';
import { StationForm } from '../../components/StationRegisterForm';

import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";

import { Main, Footer, Container } from './styles';

export function StationRegister(){ 

    const navigate = useNavigate();
    const [autenticado, setAutenticado] = useState(true);

    useEffect(() => {
        checarAutenticacao()
    }, [])

    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        if (!autenticado) {
            navigate('/')
        }
    }, [autenticado, navigate])

    useEffect(() => {
        if (!autenticado || SessionController.getUserRole() == 'user') {
            navigate('/home-page')
        }
    }, [autenticado, navigate])

    const checarAutenticacao = async () => {
        const token = SessionController.getToken()
        if (token == null) {
            setAutenticado(false)
        } else {
            setAutenticado(true)
        }
        return autenticado
    }

    return(
        <Container>

            <HeaderDefault title='Cadastro de Estação'/>
            <Sidebar/>
            <Main>
                <StationForm />
            </Main>
            <Footer>
            </Footer>
        </Container>
    )
}