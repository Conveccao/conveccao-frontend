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
            <TitleTutorialOne id='introducao'>
              Introdução
            </TitleTutorialOne>


            <SubtitleTutorial id='' >
              A meteorologia estuda os processos físicos que governam o comportamento da atmosfera e as interações entre seus fenômenos e a superfície da Terra.
              As pesquisas em meteorologia apresentam resultados de grande valor para a sociedade, tanto no que diz respeito à redução dos desastres naturais de origem atmosférica quanto no planejamento ambiental e socioeconômico a curto, médio e longo prazos.
              Além da pesquisa e da previsão do tempo, outros setores importantes cotidianos necessitam das informações sobre o tempo e o clima, como as áreas de defesa civil; agricultura; aviação e navegação; setor energético e de gerenciamento de recursos hídricos; estudos de impacto ambiental e controle de poluentes; entre outros.
            </SubtitleTutorial>

            <SubtitleTutorial id='' >

              As Estações Meteorológicas são ideais para quem toma decisões baseadas em dados climáticos. Com as constantes variações enfrentadas nos últimos anos, ter em mãos dados precisos pode tornar o dia a dia dos profissionais mais seguro, além de representar possíveis economias a curto e longo prazo.
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
              Vale destacar que a finalidade de uma estação meteorológica não é fazer uma previsão do tempo (apesar de algumas fazerem), e sim possibilitar um monitoramento das variáveis climáticas.
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
              Você ficou curioso para saber como funciona a estação meteorológica? Continue lendo o nosso post e tire todas as suas dúvidas!
              Como funciona uma estação meteorológica?
              A finalidade principal de uma estação meteorológica é realizar a coleta e a medição de dados climáticos. Com a utilização de instrumentos adequados é possível realizar uma análise que resultará em um monitoramento de variáveis climáticas. Alguns desses instrumentos são:

              
              
              
              
              
             
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
              Termômetro – temperatura do ar;
            </SubtitleTutorial>
           
            <SubtitleTutorial id='' >
            Barômetro – pressão atmosférica;
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
            Higrômetro – umidade relativa do ar;
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
            Anemômetro – velocidade e direção do vento;
            </SubtitleTutorial>

            <TitleTutorial id='vantagensestacao' >
            Quais são as vantagens de utilizar a estação meteorológica?
            </TitleTutorial>

            <SubtitleTutorial id='' >
            A utilização das informações das estações meteorológicas são destinadas a várias finalidades e, seu uso, se torna essencial para o sucesso e desempenho de atividades que dependem desses dados. Dentre elas:
            </SubtitleTutorial>


            <SubtitleTutorial id='' >
              <b>Aeroportos:</b> As Estações Meteorológicas verificação da pressão atmosférica, condições de chuva, luminosidade, direção e velocidade do vento. Pilotos podem olhar as previsões através do aplicativo quando pousarem em áreas onde não existe uma equipe permanente à disposição para orientações.
              O mesmo é válido para aeroportos privados em lugares remotos de difícil acesso. As informações precisas em tempo real da Estação tornam o pouso e a decolagem mais seguros para equipe e passageiros.
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
              <b>Construção Civil:</b> Se um piloto usa a Estação Meteorológica para aumentar a segurança durante o pouso e a decolagem, um trabalhador da construção civil se sentirá mais seguro para desenvolver seu serviço se estiver ciente das condições climáticas do local em que desenvolverá o trabalho.
              Afinal, instabilidades meteorológicas podem colocar em risco a segurança dos trabalhadores de uma obra. Por outro lado, variações climáticas inesperadas impactam o cronograma e, consequentemente, seu orçamento.
              Ainda neste tópico, poucas pessoas associam as condições meteorológicas com o aparecimento do mofo e bolor, que são facilmente encontrados em materiais usados na construção civil, como madeiras, compensados, aglomerados, gessos e placas acartonadas.
              Excesso de umidade, baixa incidência de luz e má ventilação do ambiente são ainda mais propícias para o aparecimento desse tipo de problema. Além da desvalorização financeira deste imóvel, tais fungos e micro-organismos são bastante prejudiciais à saúde humana.
              Portanto, saber detalhes climáticos do local da construção pode determinar o ritmo e a qualidade do empreendimento, assim como saber a direção e a intensidade do vento, calor e excesso de umidade também influenciam na eficiência e segurança da obra para contratantes e funcionários.
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
              <b>Defesa civil:</b> Aos poucos, a defesa civil dos municípios vem percebendo a importância das Estações Meteorológicas, principalmente no tocante à prevenção de acidentes. Acompanhar a incidência de chuvas e ventos intensos, principalmente em locais que historicamente sofrem com emergências climáticas, podem ajudar em deslizamentos, alagamentos, entupimentos de bueiros etc.
              Com a aplicação, além de ter acesso aos dados históricos da Estação, também é possível ver alertas e assim alertar à sociedade em casos de perigo.
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
              <b>Rodovias:</b> Assim como descrito no tópico anterior, as estações meteorológicas são ótimas na prevenção de acidentes. Ou seja, também são muito úteis em pontos críticos das rodovias, como em áreas de possíveis alagamentos, neblina e deslizamentos.
              Nestes casos, a estação é capaz de alertar a concessionária para deixar um veículo de segurança e sinalizar melhor o trecho para evitar acidentes em áreas de alta periculosidade.
              Outro ponto importante do uso da Estação nas rodovias diz respeito às obras. Com o histórico da região e a previsão baseada nos sensores da Estação, é possível determinar qual o melhor momento para reformas, evitando assim transtorno com usuários da pista.
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
              <b>Marinas e portos:</b> Já em marinas e portos, as Estações Meteorológicas agem fazendo monitoramento preventivo, levantando diversos dados que são essenciais para a entrada e saída de navios, como índice pluviométrico, temperatura, umidade relativa do ar, velocidade e direção do vento e pressão atmosférica.
              Logo, em termos de observação e estudo de avaliação de riscos, a Estação Meteorológica cumpre seu papel enquanto ferramenta necessária para, direta ou indiretamente, promover e garantir a segurança e a vigilância dos funcionários e usuários do porto.
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
              <b>Turismo:</b> Por fim, um uso relativamente novo mas surpreendentemente vantajoso das Estações Meteorológicas é no turismo. Com ela instalada em hotéis e resorts, os hóspedes poderão planejar suas viagens através dos dados climáticos fornecidos pela Estação.
            </SubtitleTutorial>

            <SubtitleTutorial id='' >
              Surpreso com as várias aplicações de uma estação meteorológica? Para saber mais sobre o funcionamento da Estação, continue conosco.
            </SubtitleTutorial>

            <TitleTutorial id='termos' >
              Termos e Definições
            </TitleTutorial>

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
              <b>Estação Meteorológica:</b> Conjunto de Sensores.
            </SubtitleTutorial>

            <SubtitleTutorial id='latitudelongitude' >
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
              <a href='#introducao' style={{ textDecoration: 'none', color: '#282c34' }} >
                Introdução
              </a>
            </LinkTitle>

            <LinkTitle>
              <a href='#vantagensestacao' style={{ textDecoration: 'none', color: '#282c34' }} >
                Quais são as vantagens de utilizar a estação meteorológica?
              </a>
            </LinkTitle>

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


