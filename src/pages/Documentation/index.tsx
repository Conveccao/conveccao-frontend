import React, { useRef } from 'react';
import Scrollspy from 'react-scrollspy'


import { useEffect, useState } from "react";

import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import SessionController from '../../session/sessionController';
import { useNavigate } from "react-router-dom";

import { Container, Main, ContentMain, ScrollMain, TitleTutorialOne, TitleTutorial, SubtitleTutorial, LinkTitleOne, LinkTitle } from "./styles";

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
              Titulo 1
            </TitleTutorialOne>
            <SubtitleTutorial>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?
            </SubtitleTutorial>


            <TitleTutorial>
              Titulo 2
            </TitleTutorial>
            <SubtitleTutorial>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?
            </SubtitleTutorial>

            <TitleTutorial>
              Titulo 3
            </TitleTutorial>
            <SubtitleTutorial>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?
            </SubtitleTutorial>

            <TitleTutorial>
              Titulo 4
            </TitleTutorial>
            <SubtitleTutorial>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?
            </SubtitleTutorial>

            <TitleTutorial>
              Titulo 5
            </TitleTutorial>
            <SubtitleTutorial>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, corrupti. Ab veniam nulla enim sit corporis quasi nisi eveniet illum quam ducimus voluptatem earum dignissimos, atque eligendi sequi? Numquam, ex?
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


