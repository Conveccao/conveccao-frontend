import styled from 'styled-components';
import THEME from '../../styles/theme';

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
    justify-content: flex-end;
    align-items: center;
    
    margin: 0 auto;
`;

export const Title = styled.span`
    color: ${THEME.colors.green_100};
    font-size: 24px;
    font-weight: bold;
`;

