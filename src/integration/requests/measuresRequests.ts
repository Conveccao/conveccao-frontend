import axios from "../axios";
import { URI } from "../uri";

export default class MeasuresRequests{

    public async measuresPerStationAndReference(stationId: number, reference: string) {
        try {
            const res = await axios.get(`${URI.STATIONMEASURES}/${stationId}/${reference}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

}