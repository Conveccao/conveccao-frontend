import { SInput } from './styles'
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string,
    widthInput?: string;
    heightInput?: string;
    backgroundInput?: string;
}

export default function CustomInput({
    placeholder,
    widthInput,
    heightInput,
    backgroundInput
}: InputProps){
    return(
        <SInput 
        placeholder={placeholder}
        widthInput={widthInput} 
        heightInput={heightInput} 
        backgroundInput={backgroundInput}
        />
    )
}