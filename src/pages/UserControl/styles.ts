import styled from "styled-components";
import THEME from "../../styles/theme";

export const Main = styled.main`
  margin: 5rem 0 0 20rem;
  height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.2);
    margin-block: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${THEME.colors.blue_100};
    border-radius: 8px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 59px;
  right: 385px;
`;

export const Table = styled.table`
  margin-top: 1rem;
  width: 100%;
  min-width: 550px;
  height: auto;
`;

export const TableTH = styled.th`
  padding-bottom: 0.5rem;

  text-align: left;
  font-weight: 700;
  font-size: 1.5rem;

  color: ${THEME.colors.blue_100};
`;

export const TableTD = styled.td`
  padding: 0.5rem 0;

  text-align: left;
  font-size: 1rem;
  font-weight: 400;

  border-bottom: 1px solid ${THEME.colors.green_100};
`;

export const TableTDButton = styled(TableTD)`
  border: none;
  max-width: 50px;
`;
