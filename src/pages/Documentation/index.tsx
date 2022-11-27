import React, { useRef } from 'react';
import Scrollspy from 'react-scrollspy'

import { Link, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";

import { Container, Main, ContentMain, ScrollMain, TitleTutorialOne, TitleTutorial, SubtitleTutorial, LinkTitleOne, LinkTitle, LinkSubTitle } from "./styles";

import home from '../../assets/images/assets-documents/home.png'
import login from '../../assets/images/assets-documents/login.png'
import logo from '../../assets/images/assets-documents/logo.png'
import menuLateral from '../../assets/images/assets-documents/menuLateral.png'
import paginaInicial from '../../assets/images/assets-documents/paginaInicial.png'
import perfil from '../../assets/images/assets-documents/perfil.png'
import estacao from '../../assets/images/assets-documents/estacao.png'

export function Documentation() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderDefault title="Guia de Uso" />
      <Sidebar />
      <Container>
        <Main>
          <ContentMain>

            <TitleTutorialOne id='termos'>
              Termos e Definições
            </TitleTutorialOne>

            <SubtitleTutorial id='sensores' >
              <b>Sensores:</b> São Instrumentos capazes de medir condições da natureza entre eles temos:
            </SubtitleTutorial>

            <SubtitleTutorial id='pluviometro'>
              <b>Pluviômetro:</b> Instrumento que mede a quantidade de chuva que cai em determinado lugar ou época.
            </SubtitleTutorial>

            <SubtitleTutorial id='temperatura'>
              <b>Temperatura:</b> Instrumento que indica a temperatura do ambiente. Como um termômetro.
            </SubtitleTutorial>

            <SubtitleTutorial id='umidade' >
              <b>Umidade:</b> Instrumento que mede a porcentagem de água suspensa no ar. Como o vapor no banheiro depois de um banho.
            </SubtitleTutorial>

            <SubtitleTutorial id='pressao' > 
              <b>Pressão:</b> Instrumento que mede é a relação entre uma determinada força e sua área. Você pode sentir a pressão ao descer e subir a serra em que o ar exerce uma pressão em seu ouvido.
            </SubtitleTutorial>

            <SubtitleTutorial id='direcionamentovento' >
              <b>Direcionamento do Vento:</b> Instrumento de verificação capaz de informar a direção do vento (Norte, Sul, Leste e Oeste).
            </SubtitleTutorial>

            <SubtitleTutorial id='valocidadevento' >
              <b>Velocidade do Vento:</b> Instrumento que mede a velocidade média do vento e suas rajadas.
            </SubtitleTutorial>

            <SubtitleTutorial id='parametro' >
              <b>Parâmetro:</b> Unidade da Medida de cada Sensor (Milímetros (mm³), ºC… ) ou seja, definição do dado em questão.
            </SubtitleTutorial>

            <SubtitleTutorial id='estacaometeorologica' >
              <b>Estação Meteorológica:</b> Conjunto de Sensores
            </SubtitleTutorial>

            <SubtitleTutorial  id='latitudelongitude' >
              <b>Latitude e Longitude:</b> É o endereço geográfico de um local, são importantes para a localização e orientação no espaço, sua casa além do endereço possui uma latitude e uma longitude. É muito utilizada no GPS e no Google Maps.
            </SubtitleTutorial>

            <SubtitleTutorial id='medida' >
              <b>Medida:</b> Valor coletado pelos Sensores de cada estação ao longo do tempo.
            </SubtitleTutorial>


            <TitleTutorial id='paginainicial' >
              1. Página de Inicial
            </TitleTutorial>
            <SubtitleTutorial>
              Na página inicial o usuário terá três opções, efetuar o Login, Acessar a plataforma (caso o login já tenha sido efetuado) e entrar na Documentação.
            </SubtitleTutorial>
            <img src={paginaInicial} style={{ width: '100%' }} />


            <TitleTutorial id='paginalogin' >
              2. Página de Login
            </TitleTutorial>
            <SubtitleTutorial>
              Nesta página o usuário poderá efetuar o Login/Cadastro de sua conta com as opções disponíveis: Google e Github.
            </SubtitleTutorial>

            <SubtitleTutorial>
              Realizando o login, o usuário conta com algumas vantagens como a possibilidade de realizar o download de dados, para o uso de sua escolha.
            </SubtitleTutorial>

            <img src={login} style={{ width: '100%', marginTop: '2%' }} />

            <TitleTutorial id='paginahome' >
              3. Página Home do Usuário.
            </TitleTutorial>
            <SubtitleTutorial>
              Nesta página o usuário terá acesso a algumas funções essenciais do software como: Menu Lateral, Mapa Geral das Estações e o acesso às Estações (Principais e Outras). E também Sair da aplicação.
            </SubtitleTutorial>
            <img src={home} style={{ width: '100%', marginTop: '2%' }} />

            <TitleTutorial id='menulateral' >
              3.1 Menu Lateral
            </TitleTutorial>
            <SubtitleTutorial>
              No Menu lateral o Usuário poderá navegar para as outras páginas e funções do nosso software, entre elas temos: Página Inicial (ao qual ele já está), Alertas e Perfil.
            </SubtitleTutorial>
            <img src={menuLateral} style={{ width: '30%', marginTop: '2%' }} />

            <TitleTutorial id='paginaperfil' >
              4. Página de Perfil do Usuário
            </TitleTutorial>
            <SubtitleTutorial>
              Nesta Página o usuário poderá conferir as informações de seu cadastro (Nome, Email e Permissões de Acesso), que foi feito no início da aplicação.
            </SubtitleTutorial>
            <img src={perfil} style={{ width: '100%', marginTop: '2%' }} />



            <TitleTutorial id='estacoes'>
              5. Estações
            </TitleTutorial>
            <SubtitleTutorial>
              Nesta seção da página inicial o usuário poderá escolher uma das estações cadastradas para acessar sua página própria a partir do botão "Ver Dados"
            </SubtitleTutorial>
            <img src={estacao} style={{ width: '50%', marginTop: '2%' }} />

          </ContentMain>

          <ScrollMain>

            <LinkTitleOne >
              Índice
            </LinkTitleOne>

            <LinkTitle>
              <a href='#termos' style={{ textDecoration: 'none', color: '#282c34' }} >
                Termos e Definições

              </a>
            </LinkTitle>

            <LinkSubTitle>
              <a href='#sensores' style={{ textDecoration: 'none', color: '#282c34' }} >
                Sensores
              </a>
            </LinkSubTitle>

            <LinkSubTitle >
              <a href='#pluviometro' style={{ textDecoration: 'none', color: '#282c34' }} >
                Pluviômetro
              </a>
            </LinkSubTitle>

            <LinkSubTitle >
              <a href='#temperatura' style={{ textDecoration: 'none', color: '#282c34' }} >
                Temperatura
              </a>
            </LinkSubTitle>

            <LinkSubTitle >
              <a href='#umidade' style={{ textDecoration: 'none', color: '#282c34' }} >
                Umidade
              </a>
            </LinkSubTitle>

            <LinkSubTitle >
              <a href='#pressao' style={{ textDecoration: 'none', color: '#282c34' }} >
                Pressão
              </a>
            </LinkSubTitle>

            <LinkSubTitle >
              <a href='#direcionamentovento' style={{ textDecoration: 'none', color: '#282c34' }} >
                Direcionamento do Vento
              </a>
            </LinkSubTitle>

            <LinkSubTitle >
              <a href='#valocidadevento' style={{ textDecoration: 'none', color: '#282c34' }} >
                Velocidade do Vento
              </a>
            </LinkSubTitle>

            <LinkSubTitle >
              <a href='#parametro' style={{ textDecoration: 'none', color: '#282c34' }} >
                Parâmetro
              </a>
            </LinkSubTitle>

            <LinkSubTitle >
              <a href='#estacaometeorologica' style={{ textDecoration: 'none', color: '#282c34' }} >
                Estação Meteorológica
              </a>
            </LinkSubTitle>

            <LinkSubTitle >
              <a href='#latitudelongitude' style={{ textDecoration: 'none', color: '#282c34' }} >
                Latitude e Longitude
              </a>
            </LinkSubTitle>

            <LinkSubTitle >
              <a href='#medida' style={{ textDecoration: 'none', color: '#282c34' }} >
                Medida
              </a>
            </LinkSubTitle>

            <LinkTitle >
              <a href='#paginainicial' style={{ textDecoration: 'none', color: '#282c34' }} >
                Página de Inicial
              </a>
            </LinkTitle>

            <LinkTitle >
              <a href='#paginalogin' style={{ textDecoration: 'none', color: '#282c34' }} >
                Página de Login
              </a>
            </LinkTitle>

            <LinkTitle >
              <a href='#paginahome' style={{ textDecoration: 'none', color: '#282c34' }} >
                Página Home do Usuário.
              </a>
            </LinkTitle>

            <LinkSubTitle >
              <a href='#menulateral' style={{ textDecoration: 'none', color: '#282c34' }} >
                Menu Lateral
              </a>
            </LinkSubTitle>

            <LinkTitle>
              <a href="#paginaperfil" style={{ textDecoration: 'none', color: '#282c34' }} >
                Página de Perfil do Usuário
              </a>
            </LinkTitle>

            <LinkTitle>
              <a href="#estacoes" style={{ textDecoration: 'none', color: '#282c34' }} >
                Estações
              </a>
            </LinkTitle>

          </ScrollMain>

        </Main>
      </Container>
    </>
  );
}


