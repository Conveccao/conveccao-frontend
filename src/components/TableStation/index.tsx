import THEME from "../../styles/theme";
import {ButtonDefault} from "../ButtonDefault";

import {
  Table,
  STHead,
  STHeadTR,
  STh,
  STBody,
  STBodyTR,
  STd,
  ButtonContainer,
} from "./styles";

export function TableStation() {
  return (
    <Table>
      <STHead>
        <STHeadTR>
          <STh>Código da estação</STh>
          <STh>Nome da estação</STh>
          <STh>Localização</STh>
        </STHeadTR>
      </STHead>
      <STBody>
        <STBodyTR>
          <STd>0001</STd>
          <STd>Teste</STd>
          <STd>Teste</STd>
          <ButtonContainer>
            <ButtonDefault
            title="Detalhes"
            backgroundButton={THEME.colors.green_50}
            widthButton={"184px"}
            heightButton={"40px"}
            hoverBackgroundButton={THEME.colors.green_100}
            />
          </ButtonContainer>
        </STBodyTR>

        <STBodyTR>
          <STd>0001</STd>
          <STd>Teste</STd>
          <STd>Teste</STd>
          <ButtonContainer>
            <ButtonDefault
             title="Detalhes"
             backgroundButton={THEME.colors.green_50}
             widthButton={"184px"}
             heightButton={"40px"}
             hoverBackgroundButton={THEME.colors.green_100}
            />
          </ButtonContainer>
        </STBodyTR>

        <STBodyTR>
          <STd>0001</STd>
          <STd>Teste</STd>
          <STd>Teste</STd>
          <ButtonContainer>
            <ButtonDefault
              title="Detalhes"
              backgroundButton={THEME.colors.green_50}
              widthButton={"184px"}
              heightButton={"40px"}
              hoverBackgroundButton={THEME.colors.green_100}
            />
          </ButtonContainer>
        </STBodyTR>

        <STBodyTR>
          <STd>0001</STd>
          <STd>Teste</STd>
          <STd>Teste</STd>
          <ButtonContainer>
            <ButtonDefault
              title="Detalhes"
              backgroundButton={THEME.colors.green_50}
              widthButton={"184px"}
              heightButton={"40px"}
              hoverBackgroundButton={THEME.colors.green_100}
            />
          </ButtonContainer>
        </STBodyTR>
      </STBody>
    </Table>
  );
}
