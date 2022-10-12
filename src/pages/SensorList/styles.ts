import styled from 'styled-components';
import THEME from '../../styles/theme';

export const Container = styled.main`
    width: 100%;
    height: 89vh;

    padding: 7rem 0 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.green_100};
`;

export const ContainerButton = styled.footer`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 2rem 0 0;
`;

export const SHr = styled.hr`
    width: 85%;
    margin: 0.5rem 0;
 
    border: 2px solid ${props => props.theme.colors.gray};
    border-radius: 0.5rem;    
`;


export const ButtonTrash = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme.colors.gray};
    cursor: pointer;

    transition: all 0.2s;

    :hover {
        color: ${props => props.theme.colors.red_google};
    }
`;

export const Header = styled.header`
    padding: 24px;
    border-bottom: 2px solid ${THEME.colors.gray};

    position: fixed;

    width: 100%;
    top: 0;
    z-index: 10;
    background: ${THEME.colors.white_100};
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin: 0 auto;
`;

export const TitleHeader = styled.h1`
    color: ${THEME.colors.green_100};
    font-size: 24px;
    font-weight: bold;
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    color: ${THEME.colors.black};
    cursor: pointer;
    font-size: 24px;
    transition: all 0.2s;

    :hover {
        color: ${THEME.colors.green_100};
    }
`;
