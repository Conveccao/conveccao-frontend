import styled from "styled-components";
import THEME from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: left;
  margin-inline: 10px;
`;

export const TitleChart = styled.h1`
    font-size: 1.5rem;
    font-weight: 400;
    color: ${THEME.colors.black};
    margin-bottom: 0.5rem;
`;

export const ChartContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${THEME.colors.green_100};

  width: 100%;
  max-width: 526px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 526px;
`;