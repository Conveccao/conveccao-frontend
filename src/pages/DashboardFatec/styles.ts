import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;

  grid-gap: 20px;
  margin-left: 15.625rem;
  margin-top: 6rem;
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 0;
  }
`;

export const ButtonDownload = styled.button`
    position: fixed;
    background: #007A3F;
    width: 270px;
    height: 40px;
    bottom: 3%;
    right: 2%;
    border: 1px solid #007A3F;
    color: white;
    font-weight: 900;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    :hover{
      opacity: 0.9;
    }
`;
