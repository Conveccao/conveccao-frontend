import axios from "../axios";
import { URI } from "../uri";

export default class StationRequests{
    public async newStation(station : object){
        try {
            const res = await axios.post(URI.STATIONS, station)
            window.alert("Estação cadastrada.")
            return res.data
        } catch (err){
            console.log(err)
            window.alert("Ocorreu um erro.")
        }
    }
}