import SessionController from "../../session/sessionController";
import axios from "../axios";
import { URI } from "../uri";

export default class StationRequests{

    public async newStation(station : object){
        try {
            const res = await axios.post(URI.STATIONS, station)
            window.alert("Estação cadastrada.")
            return res.data
        } catch (error){
            console.log(error)
            window.alert("Ocorreu um erro.")
        }
    }

    public async updateStation(id: number, station: object) {
        try {
            const res = await axios.put(`${URI.STATIONS}/${id}`, station)
            SessionController.setStationData(res.data)
            window.alert("Estação atualizada.")
            window.location.href = './station-list'
            
            return res.data
        } catch (error) {
            console.log(error)
            window.alert("Ocorreu um erro. Tente novamente")
        }
    }

    public async activateStation(id: number) {
        try {
            const res = await axios.put(`${URI.ACTIVATE_STATION}/${id}`)
            return res.data
        } catch (error) {
            console.log(error)
            window.alert("Ocorreu um erro. Tente novamente")
        }
    }

    public async deactivateStation(id: number) {
        try {
            const res = await axios.put(`${URI.DEACTIVATE_STATION}/${id}`)
            return res.data
        } catch (error) {
            console.log(error)
            window.alert("Ocorreu um erro. Tente novamente")
        }
    }
}