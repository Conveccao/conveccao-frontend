import React, { useRef } from 'react';
import Scrollspy from 'react-scrollspy'


import { useEffect, useState } from "react";

import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";

import { Container, Main, ContentMain, ScrollMain, TitleTutorialOne, TitleTutorial, SubtitleTutorial, LinkTitleOne, LinkTitle, LinkSubTitle } from "./styles";

import graficos from '../../assets/images/assets-documents/graficos.png'
import estação from '../../assets/images/assets-documents/estação.png'
import home from '../../assets/images/assets-documents/home.png'
import login from '../../assets/images/assets-documents/login.png'
import logo from '../../assets/images/assets-documents/logo.png'
import menuLateral from '../../assets/images/assets-documents/menuLateral.png'
import paginaInicial from '../../assets/images/assets-documents/paginaInicial.png'
import perfil from '../../assets/images/assets-documents/perfil.png'

export function Documentation() {
  const navigate = useNavigate();
  const [autenticado, setAutenticado] = useState(true);



  useEffect(() => {
    checarAutenticacao()
  }, [])

  useEffect(() => {
    if (!autenticado) {
      navigate('/login')
    } else {
      if (!checkAuthorization()) navigate('/home-page')
    }
  }, [autenticado, navigate])

  const checkAuthorization = () => {
    const userRole = SessionController.getUserRole()
    if (userRole == 'user') return false
    return true
  }

  const checarAutenticacao = async () => {
    const token = SessionController.getToken()
    if (token == null) {
      setAutenticado(false)
    } else {
      setAutenticado(true)
    }
    return autenticado
  }



  return (
    <>
      <HeaderDefault title="Guia de Uso" />
      <Sidebar />
      <Container>
        <Main>
          <ContentMain>
            <TitleTutorialOne>
            1. Página de Inicial
            </TitleTutorialOne>
            <SubtitleTutorial>
            Na página inicial o usuário terá três opções, efetuar o Login, Acessar a plataforma (caso o login já tenha sido efetuado) e entrar na Documentação.
            </SubtitleTutorial>
            <img src={paginaInicial} style={{ width: '80%' }} />


            <TitleTutorial>
            2. Página de Login
            </TitleTutorial>
            <SubtitleTutorial>
            Nesta página o usuário poderá efetuar o Login/Cadastro de sua conta com as opções disponíveis: Google e Github.
            </SubtitleTutorial>
            <img src={login} style={{ width: '80%' }} />

            <TitleTutorial>
            3. Página Home do Usuário. 
            </TitleTutorial>
            <SubtitleTutorial>
            Nesta página o usuário terá acesso a algumas funções essenciais do software como: Menu Lateral, Mapa Geral das Estações e o acesso às Estações (Principais e Outras). E também Sair da aplicação.
            </SubtitleTutorial>
            <img src={home} style={{ width: '80%' }} />

            <TitleTutorial>
              3.1 Menu Lateral
            </TitleTutorial>
            <SubtitleTutorial>
            No Menu lateral o Usuário poderá navegar para as outras páginas e funções do nosso software, entre elas temos: Página Inicial (ao qual ele já está), Alertas e Perfil.
            </SubtitleTutorial>
            <img src={menuLateral} style={{ width: '80%' }} />

            <TitleTutorial>
            4. Página de Perfil do Usuário
            </TitleTutorial>
            <SubtitleTutorial>
            Nesta Página o usuário poderá conferir as informações de seu cadastro (Nome, Email e Permissões de Acesso), que foi feito no início da aplicação. 
            </SubtitleTutorial>
            <img src={perfil} style={{ width: '80%' }} />

          <TitleTutorial>
            5. Página de Perfil do Usuário
            </TitleTutorial>
            <SubtitleTutorial>
            Nesta seção da página inicial o usuário poderá escolher uma das estações cadastradas para acessar sua página própria a partir do botão “Ver Dados”
            </SubtitleTutorial>
            
          </ContentMain>

          <ScrollMain>
            <LinkTitleOne href=''>
             Titulo 1
            </LinkTitleOne>

            <LinkTitle href=''>
              Titulo 2
            </LinkTitle>

            <LinkTitle href=''>
              Titulo 3
            </LinkTitle>


            <LinkSubTitle href=''>
              Titulo 3.1
            </LinkSubTitle>

            <LinkTitle href=''>
              Titulo 4
            </LinkTitle>

            <LinkTitle href=''>
              Titulo 5
            </LinkTitle>
          </ScrollMain>
        </Main>


      </Container>
    </>
  );
}


