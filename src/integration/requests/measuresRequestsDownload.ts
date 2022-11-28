import axios from "../axios";
import { URI } from "../uri";

export default class MeasuresRequestsDownload{
    public async measuresPerStation(stationId: number) {
        try {
            const res = await axios.get(`${URI.DOWNLOADMEASURES}/${stationId}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

}