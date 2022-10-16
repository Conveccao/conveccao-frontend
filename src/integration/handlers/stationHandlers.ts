import StationRequests from "../requests/stationRequests";

export default class StationHandlers{

    private stationRequests = new StationRequests()

    public handleNewStation(station : object){
        return this.stationRequests.newStation(station)
    }

    public handleUpdateStation(id: number, station: object){
        return this.stationRequests.updateStation(id, station)
    }
}