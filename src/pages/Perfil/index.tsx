import { url } from "inspector";
import { useState, useEffect } from "react";

import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";

import SessionController from "../../session/sessionController";

import {
  Container,
  SectionBackground,
  SectionUserInfo,
  PhotoBackground,
  UserPhoto,
  UserInfoName,
  LabelUserName,
  UserName,
} from "./styles";

export function Perfil() {

  const userData = SessionController.getUserData();
  if (userData.role == 'user') {
    userData.role = 'Usuário Normal';
  } else if (userData.role == 'admin') {
    userData.role = 'Administrador';
  } else if (userData.role == 'moderator') {
    userData.role = 'Moderador';
  }

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeaderDefault title="Perfil do Usuário" />
      <Sidebar />
      <Container>
        <SectionBackground>
          <PhotoBackground>
            <UserPhoto src={userData.photo} />
          </PhotoBackground>
        </SectionBackground>
        <SectionUserInfo>
          {/* ID DO USUÁRIO */}
          <UserInfoName>
            <LabelUserName>
              ID:
            </LabelUserName>
            <UserName>
              {userData.id}
            </UserName>
          </UserInfoName>

          {/* NOME DO USUÁRIO */}
          <UserInfoName>
            <LabelUserName>
              NOME:
            </LabelUserName>
            <UserName>
              {userData.name}
            </UserName>
          </UserInfoName>

          {/* EMAIL DO USUÁRIO */}
          <UserInfoName>
            <LabelUserName>
              EMAIL:
            </LabelUserName>
            <UserName>
              {userData.email}
            </UserName>
          </UserInfoName>

          {/* PERMISSÃO DO USUÁRIO */}
          <UserInfoName>
            <LabelUserName>
              PERMISSÃO DE ACESSO:
            </LabelUserName>
            <UserName>
              {userData.role}
            </UserName>
          </UserInfoName>
        </SectionUserInfo>
      </Container>
    </>
  );
}


