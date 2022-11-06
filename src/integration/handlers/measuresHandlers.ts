import MeasuresRequests from "../requests/measuresRequests";

export default class MeasuresHandlers{
    private measuresRequests = new MeasuresRequests();

    public handleMeasuresPerStationAndReference(stationId: number, reference: string){
        return this.measuresRequests.measuresPerStationAndReference(stationId, reference);
    }
}