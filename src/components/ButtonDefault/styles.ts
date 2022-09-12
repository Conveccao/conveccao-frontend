import styled from 'styled-components';
import THEME from '../../styles/theme';

type ButtonProps = {
    widthButton?: string;
    heightButton?: string;
    backgroundButton?: string;
}   

export const ButtonCustom =  styled.button<ButtonProps>`
    display: flex;
    justify-content:center;
    align-items:center;

    height: ${props => props.heightButton ? props.heightButton : '40px'};
    width: ${props => props.widthButton ? props.widthButton : '100%'};

    padding: 16px;

    background: ${props => props.backgroundButton ? props.backgroundButton : THEME.colors.primary_green};

    border: none;
    border-radius: 8px;

    color: ${THEME.colors.primary_white};

    transition: background 0.2s;
    cursor: pointer;

    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);

    &:hover {
        background: ${props => props.backgroundButton === THEME.colors.primary_green ? THEME.colors.secondary_green : THEME.colors.primary_green};
    }
`;