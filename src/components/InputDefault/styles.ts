import styled from 'styled-components';
import THEME from '../../styles/theme';

type InputProps = {
    widthInput?: string;
    heightInput?: string;
    backgroundInput?: string;
}

export const SInput = styled.input<InputProps>`
    height: ${props => props.heightInput ? props.heightInput : '56px'};
    width: ${props => props.widthInput ? props.widthInput : '100%'};

    background: none;
    padding: 16px;
    
    color: ${THEME.colors.black};
    
    border: 1px solid ${THEME.colors.primary_green};
    border-radius: 8px;

    :focus {
        outline: none;
        border: 1px solid ${THEME.colors.secondary_green};
    }

    ::placeholder {
        color: ${THEME.colors.gray};
    }
`;