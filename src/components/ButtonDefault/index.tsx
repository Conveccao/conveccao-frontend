import { ButtonCustom } from './styles'
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    widthButton?: string;
    heightButton?: string;
    backgroundButton?: string;
    hoverBackgroundButton?: string;
}

export function ButtonDefault({
    title,
    widthButton,
    heightButton,
    backgroundButton,
    hoverBackgroundButton,
    ...rest
}: ButtonProps){
    return(
        <ButtonCustom  
        widthButton={widthButton} 
        heightButton={heightButton} 
        backgroundButton={backgroundButton}
        hoverBackgroundButton={hoverBackgroundButton}
        {...rest}
        >
            {title}
        </ButtonCustom> 
    )
}