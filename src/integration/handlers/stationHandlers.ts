import StationRequests from "../requests/stationRequests";

export default class StationHandlers{

    private stationRequests = new StationRequests()

    public handleNewStation(station : object){
        return this.stationRequests.newStation(station)
    }

    public handleUpdateStation(id: number, station: object){
        return this.stationRequests.updateStation(id, station)
    }

    public handleActivateStation(id: number){
        return this.stationRequests.activateStation(id)
    }

    public handleDeactivateStation(id: number){
        return this.stationRequests.deactivateStation(id)
    }
}