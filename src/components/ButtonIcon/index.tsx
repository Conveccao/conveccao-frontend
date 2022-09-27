import { SButton } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    marginBottom?: string;
    widthButton?: string;
    heightButton?: string;
    backgroundButton?: string;
    colorButton?: string;
    icon?: IconDefinition;
}   

export function ButtonIcon({
    title,
    icon,
    marginBottom,
    widthButton,
    heightButton,
    backgroundButton,
    colorButton
}: ButtonProps){
    return(
        <SButton  
        widthButton={widthButton} 
        heightButton={heightButton} 
        backgroundButton={backgroundButton}
        marginBottom={marginBottom}
        colorButton={colorButton}
        > 
            {icon && <FontAwesomeIcon icon={icon} />}
            {title}
        </SButton> 
    )
}