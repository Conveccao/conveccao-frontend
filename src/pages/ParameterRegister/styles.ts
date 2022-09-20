import styled from "styled-components";
import THEME from "../../styles/theme";

export const Container = styled.div``;

export const Main = styled.main`
  max-width: 800px;
  height: 600px;
  margin: 50px auto;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${THEME.colors.white_100};

  border-radius: 16px;
 
  box-shadow: ${THEME.boxShadow.shadowDefault};
`;

export const Footer = styled.footer`
  width: 60%;
  margin: auto;
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;