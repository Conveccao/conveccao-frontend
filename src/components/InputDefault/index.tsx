import { SInput } from './styles'
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string,
    widthInput?: string;
    heightInput?: string;
    backgroundInput?: string;
}

export function CustomInput({
    placeholder,
    widthInput,
    heightInput,
    backgroundInput,
    onChange
}: InputProps){
    return(
        <SInput 
        placeholder={placeholder}
        widthInput={widthInput} 
        heightInput={heightInput} 
        backgroundInput={backgroundInput}
        onChange={onChange}
        />
    )
}