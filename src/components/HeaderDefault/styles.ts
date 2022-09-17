import styled from 'styled-components';
import THEME from '../../styles/theme';

export const Header = styled.header`
    margin-left: 18rem;
    padding: 24px;
    border-bottom: 2px solid ${THEME.colors.gray};

    transition: 0.25s ease-in-out;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    max-width: 1640px;
    margin: 0 auto;
`;

export const Image = styled.img`
    max-height: 45px;
`;

export const Title = styled.span`
    color: ${THEME.colors.blue_100};
    font-size: 24px;
    font-weight: bold;
`;

