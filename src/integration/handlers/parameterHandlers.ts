import ParameterRequests from "../requests/parameterRequests";

export default class ParameterHandlers{
    private parameterRequests = new ParameterRequests()

    public handleNewParameter(parameter: object){
        return this.parameterRequests.newParameter(parameter)
    }

    public handleActivateParameter(id: number){
        return this.parameterRequests.activateParameter(id)
    }

    public handleDeleteParameter(id: number) {
        return this.parameterRequests.deleteParameter(id)
    }
}