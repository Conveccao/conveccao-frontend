import { useState } from 'react';
import StationHandlers from '../../integration/handlers/stationHandlers';
import { FormFooter } from '../../pages/StationList/styles';
import THEME from '../../styles/theme';
import { ButtonDefault } from '../ButtonDefault';
import {CustomInput} from '../InputDefault';
import { Footer } from '../Sidebar/styles';
import {SForm, SFieldset, SLabel} from './styles'

export function StationForm() {

    const [name, setName] = useState('')
    const [installDate, setInstallDate] = useState('')
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [reference, setReference] = useState('')

    let station = {
        installation_date: installDate,
        name: name,
        lat: lat,
        lon: lon,
        reference: reference
    }

    let stationHandlers = new StationHandlers()

    const handleNewStation = async(e:any) => {
        e.preventDefault()

        try{
            stationHandlers.handleNewStation(station)
            e.target.reset()
            console.log(station)
        } catch (err){
            console.log(err)
        }
    }

    return (
        <SForm onSubmit={(e: any) => {handleNewStation(e)}}>
            <SFieldset>
                <SLabel>Nome da estação</SLabel>
                <CustomInput placeholder='Digite o nome da estação'
                onChange={(e) => setName(e.target.value)}/>
            </SFieldset>

            <SFieldset>
                <SLabel>Data da instalação</SLabel>
                <CustomInput placeholder='Digite a data da instalação'
                type='date'
                onChange={(e) => setInstallDate(e.target.value)}/>
            </SFieldset>
 
            <SFieldset>
                <SLabel>Latitude</SLabel>
                <CustomInput placeholder='Digite a latitude da estação'
                onChange={(e) => setLat(e.target.value)}/>
            </SFieldset>

            <SFieldset>
                <SLabel>Longitude</SLabel>
                <CustomInput placeholder='Digite a longitude da estação'
                onChange={(e) => setLon(e.target.value)}/>
            </SFieldset>

            <SFieldset>
                <SLabel>Referência</SLabel>
                <CustomInput placeholder='Digite a referência da estação'
                onChange={(e) => setReference(e.target.value)}/>
            </SFieldset>
            <Footer>
                <FormFooter>
                     <ButtonDefault 
                     title='Cadastrar' 
                     backgroundButton={THEME.colors.green_50}
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     type = "submit"
                     />
                </FormFooter>
            </Footer>
        </SForm>
    );
}