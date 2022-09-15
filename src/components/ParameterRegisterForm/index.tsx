import CustomInput from '../InputDefault';
import {SForm, SFieldset, SLabel} from './styles'

export default function ParameterForm() {
    return (
        <SForm>
    
            <SFieldset>
                <SLabel>Nome do parâmetro</SLabel>
                <CustomInput placeholder='Digite o nome'/>
            </SFieldset>
            <SFieldset>
                <SLabel>Descrição</SLabel>
                <CustomInput placeholder='Digite a descrição'/>
            </SFieldset>
            <SFieldset>
                <SLabel>Unidade</SLabel>
                <CustomInput placeholder='(ml³ / °C / km / etc)'/>
            </SFieldset>
            <SFieldset>
                <SLabel>Fator</SLabel>
                <CustomInput placeholder='Digite o fator de conversão'/>
            </SFieldset>
            <SFieldset>
                <SLabel>Offset</SLabel>
                <CustomInput placeholder='Digite a margem de erro'/>
            </SFieldset>
            
        </SForm>
        
    );
}