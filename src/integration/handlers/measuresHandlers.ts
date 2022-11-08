import MeasuresRequests from "../requests/measuresRequests";

export default class MeasuresHandlers{
    handleMeasuresPerStation(id: number) {
      throw new Error("Method not implemented.");
    }
    private measuresRequests = new MeasuresRequests();

    public handleMeasuresPerStationAndReference(stationId: number, reference: string){
        return this.measuresRequests.measuresPerStationAndReference(stationId, reference);
    }
}