import UserRequests from "../requests/userRequests"

export default class UserHandlers{

    private userRequests = new UserRequests()

    public handleCreateUser(user: object){
        return this.userRequests.createUser(user)
    }

    public handleUserExists(email: string){
        return this.userRequests.userExists(email)
    }
}