import styled from 'styled-components';
import THEME from '../../styles/theme';


export const Container = styled.div`
    width: 40rem;
    height: 20rem;
    padding: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${THEME.colors.white_100};
    box-shadow: ${THEME.boxShadow.shadowDefault};

    border-radius: 8px;
`;
