import StationRequests from "../requests/stationRequests";

export default class StationHandlers{
    public handleNewStation(station : object){
        let stationRequests = new StationRequests()
        return stationRequests.newStation(station)
    }
}