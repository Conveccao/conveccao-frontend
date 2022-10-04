import styled from 'styled-components';
import THEME from '../../styles/theme';

export const Container = styled.div`
    width: 100%;
    height: auto;
    align-items: center;
`;

export const Title = styled.div`
    color: #00C667;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 24px;
    width: 100%;
    height: auto;
    margin-bottom: 5px;
    align-items: center;
`;

export const Subtitle = styled.div`
    color: #C1C1C1;
    font-family: "Roboto", sans-serif;
    font-weight: regular;
    font-size: 16px;
    text-decoration-line: underline;
    width: 100%;
    height: auto;
    align-items: center;
`;

export const SFieldset = styled.fieldset` 
    border: none;
    margin-bottom: 12px;
    width: 320px;
`;

export const SFieldsetObs = styled.fieldset` 
    border: none;
    margin-bottom: 12px;
    width: 680px;
    height: 200px;
`;

export const SLabel = styled.label`
    display: block;
    margin-bottom: 12px;

    color: ${THEME.colors.blue_100};
    font-weight: ${THEME.fontWeights.bold};
`;
