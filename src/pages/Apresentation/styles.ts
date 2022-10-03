import { Link } from "react-router-dom";
import styled from "styled-components";


export const Page = styled.body`
    background-color: #FFFFFF;
`;

export const Container = styled.div`
    max-width: 980px;
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
`;

export const Menu = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 15vh;    
`;

export const Main = styled.main`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;


export const Nav = styled.main`
    display: flex;
`;

export const ButtonNav = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00C667;
    width: 160px;
    height: 40px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    text-decoration: none;
    :hover{
        text-decoration: none;
        color: #fff;
    }    
`;

export const Title = styled.h1`
    font-size: 32px;
    color: #1d629d;
    font-weight: bold;
    text-transform: uppercase;
`;

export const Subtitle = styled.p`
    font-size: 82px;
    color: #00C667;
    font-weight: bold;
    text-transform: uppercase;
    max-width: 800px;
`;



export const Logo = styled.img`
    max-width: 200px;
`;

export const ButtonDoc = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1d629d;
    width: 180px;
    height: 40px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    text-decoration: none;
    :hover{
        text-decoration: none;
        color: #fff;
    }    
`;

export const ButtonAcess = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00C667;
    width: 180px;
    height: 40px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    border: none;   
`;

export const AreaButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    margin: 10px 0px;
`;


export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: white;

    :hover{
        color: white;
    }
`;

