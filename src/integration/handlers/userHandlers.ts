import UserRequests from "../requests/userRequests"

export default class UserHandlers{
    public handleCreateUser(user: object){
        let userRequests = new UserRequests()
        return userRequests.createUser(user)
    }
}