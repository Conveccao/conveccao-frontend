import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;

  grid-gap: 20px;
  margin-left: 15.625rem;
  margin-top: 6rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 0;
  }
`;
