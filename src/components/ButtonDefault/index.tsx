import { ButtonCustom } from './styles'

type ButtonProps = {
    title: string;
    widthButton?: string;
    heightButton?: string;
    backgroundButton?: string;
}

export default function ButtonDefault({
    title,
    widthButton,
    heightButton,
    backgroundButton
}: ButtonProps){
    return(
        <ButtonCustom  
        widthButton={widthButton} 
        heightButton={heightButton} 
        backgroundButton={backgroundButton}
        >
            {title}
        </ButtonCustom> 
    )
}