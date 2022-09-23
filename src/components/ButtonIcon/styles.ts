import styled from 'styled-components';
import THEME from '../../styles/theme';

type ButtonProps = {
    marginBottom?: string;
    widthButton?: string;
    heightButton?: string;
    backgroundButton?: string;
    colorButton?: string;
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

    color: ${props => props.colorButton};

    box-shadow: ${THEME.boxShadow.ShadowSecondary};

    cursor: pointer;
`;