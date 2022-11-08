import MeasuresRequestsDownload from "../requests/measuresRequestsDownload";

export default class MeasuresHandlersDownload{
    private MeasuresRequestsDownload = new MeasuresRequestsDownload();

    public handleMeasuresPerStation(stationId: number){
        return this.MeasuresRequestsDownload.measuresPerStation(stationId);
    }
}