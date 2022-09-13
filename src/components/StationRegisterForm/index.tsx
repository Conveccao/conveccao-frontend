import CustomInput from '../InputDefault';
import {SForm, SFieldset, SLabel} from './styles'

export default function StationForm() {
    return (
        <SForm>
            <SFieldset>
                <SLabel>Nome da estação</SLabel>
                <CustomInput placeholder='Digite o nome da estação'/>
            </SFieldset>

            <SFieldset>
                <SLabel>Data da instalação</SLabel>
                <CustomInput placeholder='Digite a data da instalação'/>
            </SFieldset>
 
            <SFieldset>
                <SLabel>Latitude</SLabel>
                <CustomInput placeholder='Digite a latitude da estação'/>
            </SFieldset>

            <SFieldset>
                <SLabel>Longitude</SLabel>
                <CustomInput placeholder='Digite a longitude da estação'/>
            </SFieldset>

            <SFieldset>
                <SLabel>Altitude</SLabel>
                <CustomInput placeholder='Digite a altitude da estação'/>
            </SFieldset>
        </SForm>
    );
}