import styled from "styled-components";
import backgroundImage from "../../assets/images/backgroundLogin.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  background-image: url(${backgroundImage});
  background-size: cover;
`;
