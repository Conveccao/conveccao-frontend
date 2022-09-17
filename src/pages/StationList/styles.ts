import styled from "styled-components";
import THEME from "../../styles/theme";

export const Container = styled.div``;

export const Main = styled.main`
  max-width: 1200px;
  height: calc(80vh - 95px);
  margin: 2rem auto 2rem 30rem;
  padding: 24px;

  border-radius: 8px;
  background: ${THEME.colors.white_100};

  box-shadow: ${THEME.boxShadow.shadowDefault};

  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: rgba(0,0,0,0.2);
    margin-block: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${THEME.colors.blue_100};
    border-radius: 8px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  max-width: 1200px;

  margin: 4.5rem 2rem 0rem 30rem;
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
