import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 600px;
  height: 100vh;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
  padding: 1rem;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const ButtonLogin = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 40px;
  border-radius: 8px;

  text-decoration: none;
  background-color: ${(props) => props.theme.colors.blue_100};
  color: white;

  transition: all 0.2s;

  :hover {
    background-color: ${(props) => props.theme.colors.blue_50};
  }
`;

export const MainContent = styled.div`
    min-width: 600px;
    width: 100vw;
    height: 80vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 30rem 0 30rem;
    width: 100vw;
    height: 100%;
`;

export const Title = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.blue_100};
`;

export const Subtitle = styled.div`
    font-size: 5.125rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.green_100};
`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const ButtonAccess = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 150px;
    height: 40px;

    border-radius: 8px;

    text-decoration: none;

    background-color: ${(props) => props.theme.colors.green_100};

    color: ${(props) => props.theme.colors.white_100};

    transition: all 0.2s;

    :hover {
        background-color: ${(props) => props.theme.colors.green_50};
    }
`;

export const ButtonDoc = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 150px;
    height: 40px;

    border-radius: 8px;

    text-decoration: none;

    background-color: ${(props) => props.theme.colors.green_100};

    color: ${(props) => props.theme.colors.white_100};

    transition: all 0.2s;

    :hover {
        background-color: ${(props) => props.theme.colors.green_50};
    }
`;

