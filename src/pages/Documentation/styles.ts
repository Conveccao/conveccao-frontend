import styled from "styled-components";
import THEME from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 6%;
  width: 100%;
  background: #F8F8FF;
`;

export const Main = styled.div`
      width: 80%;
      display: flex;
      flex-direction: row;
      background: #F8F8FF;
`;

export const ContentMain = styled.div`
      background: #F8F8FF;
      width: 70%;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-y: scroll;
      max-height: 870px;
`;

export const ScrollMain = styled.div`
      background: #F8F8FF;
      width: 30%;
      display: flex;
      flex-direction: column;
      padding: 0px 30px;
      max-height: 900px;
`;

export const sectionContent = styled.section`

`;

export const TitleTutorialOne = styled.h2`
  text-decoration: none;
  font-size: 60px;
  color: #282c34;
  font-weight: 900;
`;

export const TitleTutorial = styled.h2`
  text-decoration: none;
  font-size: 32px;
  color: #282c34;
  font-weight: bold;
  margin-top: 50px;
`;

export const SubtitleTutorial = styled.p`
  margin-top: 25px;
  text-decoration: none;
  color: #282c34;
  letter-spacing: 1px;
  line-height: 26px;
`;

export const LinkTitleOne = styled.a`
  text-decoration: none;
  font-size: 32px;
  color: #282c34;
  font-weight: bold;
`;

export const LinkTitle = styled.a`
  margin-top: 25px;
  text-decoration: none;
  color: #282c34;
`;

export const LinkSubTitle = styled.a`
  margin-top: 25px;
  text-decoration: none;
  padding-left: 15px;
  color: #282c34;
`;


