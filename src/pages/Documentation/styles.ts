import styled from "styled-components";
import THEME from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 7%;
`;

export const Main = styled.div`
      width: 1200px;
      display: flex;
      flex-direction: row;
      margin-left: 10%;
`;

export const ContentMain = styled.div`
      width: 70%;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 30px;
      overflow-y: scroll;
      max-height: 800px
`;

export const ScrollMain = styled.div`
      width: 30%;
      display: flex;
      flex-direction: column;
      padding: 0px 30px;
      
`;

export const sectionContent = styled.section`

`;

export const TitleTutorialOne = styled.h2`

`;

export const TitleTutorial = styled.h2`
  margin-top: 25px;
`;

export const SubtitleTutorial = styled.p`

`;

export const LinkTitleOne = styled.a`
  text-decoration: none;
`;

export const LinkTitle = styled.a`
  margin-top: 25px;
  text-decoration: none;
`;

