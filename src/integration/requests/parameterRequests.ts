import axios from "../axios";
import { URI } from "../uri";

export default class ParameterRequests{
    public async newParameter(parameter: object){
        try {
            const res = await axios.post(URI.SENSORTYPES, parameter)
            window.alert("Parâmetro cadastrado.")
            return res.data
        } catch (err) {
            console.log(err)
            window.alert("Ocorreu um erro.")
        }
    }
}