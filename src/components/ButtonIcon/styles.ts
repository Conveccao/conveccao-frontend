import styled from 'styled-components';
import THEME from '../../styles/theme';

type ButtonProps = {
    widthButton?: string;
    heightButton?: string;
    backgroundButton?: string;
}   

export const ButtonDefault =  styled.button<ButtonProps>`
    background: ${props => props.backgroundButton ? props.backgroundButton : THEME.colors.primary_green};
    height: ${props => props.heightButton ? props.heightButton : '40px'};
    width: ${props => props.widthButton ? props.widthButton : '100%'};

    border: none;
    border-radius: 8px;

    color: ${THEME.colors.primary_white};
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
`;