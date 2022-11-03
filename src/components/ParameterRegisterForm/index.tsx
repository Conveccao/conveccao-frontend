import { red } from '@mui/material/colors';
import { useState } from 'react';
import ParameterHandlers from '../../integration/handlers/parameterHandlers';
import { FormFooter } from '../../pages/StationList/styles';
import THEME from '../../styles/theme';
import { ButtonDefault } from '../ButtonDefault';
import {CustomInput} from '../InputDefault';
import { Footer } from '../Sidebar/styles';
import {SForm, SFieldset, SFieldsetSelect, SLabel} from './styles'

export default function ParameterForm(this: any) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [unit, setUnit] = useState('')
    const [factor, setFactor] = useState(0)
    const [offset, setOffset] = useState(0)
    const [referencia, setReferencia] = useState(0)

    let parameter = {
        name: name,
        description: description,
        unit1: unit,
        factor1: factor,
        offset1: offset,
        reference: referencia
    }

    let parameterHandlers = new ParameterHandlers()

    const handleNewParameter = async(e: any) => {
        e.preventDefault()

        try {
            parameterHandlers.handleNewParameter(parameter)
            e.target.reset()
            console.log(parameter)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <SForm onSubmit={(e:any) => handleNewParameter(e)}>
            <SFieldset>
                <SLabel>Nome do parâmetro</SLabel>
                <SFieldsetSelect onChange={(e:any) => setName(e.target.value)} style={{ height: '55px', background: '#f8f8ff', border: '1px solid #00C667', borderRadius: '8px', color: '#D0D0D0', fontWeight: '300'}}>
                    <option selected style={{ fontSize: '16px', color: '#000000' }}>Escolha o parâmetro</option>
                    <option value="pluviometro" style={{ fontSize: '16px', color: '#000000' }}>Pluviomêtro</option>
                    <option value="temperatura" style={{ fontSize: '16px', color: '#000000' }}>Temperatura</option>
                    <option value="umidade" style={{ fontSize: '16px', color: '#000000' }}>Umidade</option>
                    <option value="pressao" style={{ fontSize: '16px', color: '#000000' }}>Pressão</option>
                    <option value="direcao_vento" style={{ fontSize: '16px', color: '#000000' }}>Direção do Vento</option>
                    <option value="velocidade_vento" style={{ fontSize: '16px', color: '#000000' }}>Velocidade do Vento</option>
                </SFieldsetSelect>
            </SFieldset>
            <SFieldset>
                <SLabel>Descrição</SLabel>
                <CustomInput placeholder='Digite a descrição'
                onChange={(e:any) => setDescription(e.target.value)}/>
            </SFieldset>

            <SFieldset>
            <SLabel>Unidade</SLabel>
                <SFieldsetSelect onChange={(e:any) => setUnit(e.target.value)} style={{ height: '55px', background: '#f8f8ff', border: '1px solid #00C667', borderRadius: '8px', color: '#D0D0D0', fontWeight: '300'}}>
                    <option selected style={{ fontSize: '16px' }}>Escolha a unidade</option>
                    <option value="mm" style={{ fontSize: '16px' }}>mm</option>
                    <option value="ºC" style={{ fontSize: '16px' }}>ºC</option>
                    <option value="km/h" style={{ fontSize: '16px' }}>km/h</option>
                    <option value="%" style={{ fontSize: '16px' }}>%</option>
                    <option value="Pa" style={{ fontSize: '16px' }}>Pa</option>
                    <option value="outros" style={{ fontSize: '16px' }}>Outros</option>
                </SFieldsetSelect>
            </SFieldset>
            <SFieldset>
                <SLabel>Fator</SLabel>
                <CustomInput placeholder='Digite o fator de conversão'
                onChange={(e:any) => setFactor(e.target.value)}/>
            </SFieldset>
            <SFieldset>
                <SLabel>Offset</SLabel>
                <CustomInput placeholder='Digite a margem de erro'
                onChange={(e:any) => setOffset(e.target.value)}/>
            </SFieldset>
            <SFieldset>
                <SLabel>Referência</SLabel>
                <SFieldsetSelect onChange={(e:any) => setReferencia(e.target.value)} style={{ height: '55px', background: '#f8f8ff', border: '1px solid #00C667', borderRadius: '8px', color: '#D0D0D0', fontWeight: '300'}}>
                    <option selected style={{ fontSize: '16px', color: '#000000' }}>Escolha a referência</option>
                    <option value="temp" style={{ fontSize: '16px', color: '#000000' }}>Temperatura</option>
                    <option value="umid" style={{ fontSize: '16px', color: '#000000' }}>Umidade</option>
                    <option value="v_vent" style={{ fontSize: '16px', color: '#000000' }}>Velocidade do Vento</option>
                    <option value="d_vent" style={{ fontSize: '16px', color: '#000000' }}>Direção do Vento</option>
                    <option value="pluv" style={{ fontSize: '16px', color: '#000000' }}>Milimetros</option>
                </SFieldsetSelect>
            </SFieldset>
            
            <Footer>
                <FormFooter>
                     <ButtonDefault 
                     title='Cadastrar' 
                     backgroundButton={THEME.colors.green_100} 
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     type = "submit"
                     />
                </FormFooter>
            </Footer>
        </SForm>
    );
}