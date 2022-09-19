import styled from "styled-components";
import THEME from "../../styles/theme";

export const Container = styled.div``;

export const Main = styled.main`
  max-width: 800px;
  height: 550px;
  margin: 100px auto;
  padding: 24px;

  display: flex;
  align-items: center;

  background: ${THEME.colors.white_100};

  border-radius: 8px;
 
  box-shadow: ${THEME.boxShadow.shadowDefault};
  
   @media (max-height: 900px) {
    margin: 50px auto;
  }
`;

export const Footer = styled.footer`
  width: 60%;
  margin: auto;
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
   @media (max-width: 900px) {
    justify-content: center;
  }
`;
