import styled from "styled-components";
import THEME from "../../styles/theme";

export const Container = styled.div``;

export const Main = styled.main`
  max-width: 440px;
  height: calc(70vh - 95px);
  margin: 50px auto;
  padding: 24px;

  display: flex;
  align-items: center;

  background: ${THEME.colors.secondary_white};

  border-radius: 16px;
 
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
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