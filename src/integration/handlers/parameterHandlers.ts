import ParameterRequests from "../requests/parameterRequests";

export default class ParameterHandlers{
    public handleNewParameter(parameter: object){
        let parameterRequests = new ParameterRequests()
        return parameterRequests.newParameter(parameter)
    }
}