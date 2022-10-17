import axios from "../axios";
import { URI } from "../uri";
import SessionController from "../../session/sessionController";

export default class ParameterRequests{
    public async newParameter(parameter: object){
        try {
            const res = await axios.post(URI.PARAMETERTYPES, parameter)
            const newParam = await axios.post(URI.PARAMETERS, {
                station_id: SessionController.getStationId(),
                parameterType_id: res.data.id
            })
            window.alert("Parâmetro Cadastrado com Sucesso.")
            window.location.href = './sensor-list'
            return res.data
        } catch (error) {
            console.log(error)
            window.alert("Ocorreu um Erro. Tente Novamente")
            window.location.href = './sensor-list'
        }
    }

    public async activateParameter(id: number){
        try {
            const res = await axios.put(`${URI.PARAMETERS}/activate/${id}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    public async deleteParameter(id: number) {
        try {
            const res = await axios.delete(`${URI.PARAMETERS}/${id}`)
            window.alert('Parâmetro Deletado com Sucesso')
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}