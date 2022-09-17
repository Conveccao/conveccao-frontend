import styled from 'styled-components';
import THEME from '../../styles/theme';

export const SForm = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
`;

export const SFieldset = styled.fieldset` 
    border: none;
    margin-bottom: 12px;
`;

export const SLabel = styled.label`
    display: block;
    margin-bottom: 12px;

    color: ${THEME.colors.blue_100};
    font-weight: ${THEME.fontWeights.bold};
`;