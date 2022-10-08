import { useState } from 'react';
import ParameterHandlers from '../../integration/handlers/parameterHandlers';
import { FormFooter } from '../../pages/StationList/styles';
import THEME from '../../styles/theme';
import { ButtonDefault } from '../ButtonDefault';
import {CustomInput} from '../InputDefault';
import { Footer } from '../Sidebar/styles';
import {SForm, SFieldset, SLabel} from './styles'

export default function ParameterForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [unit, setUnit] = useState('')
    const [factor, setFactor] = useState(0)
    const [offset, setOffset] = useState(0)

    let parameter = {
        name: name,
        description: description,
        unit1: unit,
        factor1: factor,
        offset1: offset
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
                <CustomInput placeholder='Digite o nome'
                onChange={(e:any) => setName(e.target.value)}/>
            </SFieldset>
            <SFieldset>
                <SLabel>Descrição</SLabel>
                <CustomInput placeholder='Digite a descrição'
                onChange={(e:any) => setDescription(e.target.value)}/>
            </SFieldset>
            <SFieldset>
                <SLabel>Unidade</SLabel>
                <CustomInput placeholder='(ml³ / °C / km / etc)'
                onChange={(e:any) => setUnit(e.target.value)}/>
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