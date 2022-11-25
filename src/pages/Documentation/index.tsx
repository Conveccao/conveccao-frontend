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

  return (
    <>
      <HeaderDefault title="Guia de Uso" />
      <Sidebar />
      <Container>
        <Main>
          <ContentMain>
            <TitleTutorialOne>
              Termos e Definições
            </TitleTutorialOne>
            <SubtitleTutorial>
              <b>Sensores:</b>São Instrumentos capazes de medir condições da natureza entre eles temos.
            </SubtitleTutorial>

            <SubtitleTutorial>
              <b>Pluviômetro:</b>Instrumento que mede a quantidade de chuva que cai em determinado lugar ou época.
            </SubtitleTutorial>

            <SubtitleTutorial>
              <b>Temperatura:</b> Instrumento que indica a temperatura do ambiente. Como um termômetro.
            </SubtitleTutorial>

            <SubtitleTutorial>
              <b>Umidade:</b>Instrumento que mede a porcentagem de água suspensa no ar. Como o vapor no banheiro depois de um banho.
            </SubtitleTutorial>

            <SubtitleTutorial>
              <b>Pressão:</b>Instrumento que mede é a relação entre uma determinada força e sua área. Você pode sentir a pressão ao descer e subir a serra em que o ar exerce uma pressão em seu ouvido.
            </SubtitleTutorial>

            <SubtitleTutorial>
              <b>Direcionamento do Vento:</b>Instrumento de verificação capaz de informar a direção do vento (Norte, Sul, Leste e Oeste).
            </SubtitleTutorial>


            <SubtitleTutorial>
              <b>Velocidade do Vento:</b>Instrumento que mede a velocidade média do vento e suas rajadas.
            </SubtitleTutorial>

            <SubtitleTutorial>
              <b>Parâmetro:</b> Unidade da Medida de cada Sensor (Milímetros (mm³), ºC… ) ou seja, definição do dado em questão.
            </SubtitleTutorial>

            <SubtitleTutorial>
              <b>Estação Meteorológica:</b> Conjunto de Sensores
            </SubtitleTutorial>

            <SubtitleTutorial>
              <b>Latitude e Longitude:</b>É o endereço geográfico de um local, são importantes para a localização e orientação no espaço, sua casa além do endereço possui uma latitude e uma longitude. É muito utilizada no GPS e no Google Maps.
            </SubtitleTutorial>

            <SubtitleTutorial>
              <b>Medida:</b>Valor coletado pelos Sensores de cada estação ao longo do tempo.
            </SubtitleTutorial>


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
              Termos e Definições
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


