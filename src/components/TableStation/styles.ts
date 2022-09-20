import styled from 'styled-components';
import THEME from '../../styles/theme';

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    overflow: hidden;
`;

export const STHead = styled.thead`
    color: ${THEME.colors.blue_100};
    font-weight: ${THEME.fontWeights.bold};
    background: ${THEME.colors.white_100};
`;

export const STHeadTR = styled.tr``;

export const STh = styled.th`
    padding-bottom: 8px;
`;

export const STBody = styled.tbody`
    color: ${THEME.colors.black};
    font-weight: ${THEME.fontWeights.regular};
`;

export const STBodyTR = styled.tr``;

export const STd = styled.td`
    padding: 8px;
    border-bottom: 1px solid ${THEME.colors.green_100};
    padding-bottom: 8px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 20px 0px 20px 0px;
`;