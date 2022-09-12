import { ButtonDefault } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


type ButtonProps = {
    title: string;
    widthButton?: string;
    heightButton?: string;
    backgroundButton?: string;
    icon?: IconDefinition;
}   

export default function ButtonIcon({
    title,
    icon,
    widthButton,
    heightButton,
    backgroundButton
}: ButtonProps){
    return(
        <ButtonDefault  
        widthButton={widthButton} 
        heightButton={heightButton} 
        backgroundButton={backgroundButton}
        > 
            {icon && <FontAwesomeIcon icon={icon} />}
            {title}
        </ButtonDefault> 
    )
}