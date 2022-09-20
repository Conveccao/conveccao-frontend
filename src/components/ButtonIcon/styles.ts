import styled from 'styled-components';
import THEME from '../../styles/theme';

type ButtonProps = {
    marginBottom?: string;
    widthButton?: string;
    heightButton?: string;
    backgroundButton?: string;
}   

export const SButton =  styled.button<ButtonProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: ${props => props.widthButton ? props.widthButton : '100%'};
    height: ${props => props.heightButton ? props.heightButton : '40px'};

    padding: 16px 24px;
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};

    background: ${props => props.backgroundButton};
    border: none;
    border-radius: 8px;

    color: ${THEME.colors.white_100};

    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);

    cursor: pointer;
`;