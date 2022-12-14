import UserRequests from "../requests/userRequests"

export default class UserHandlers{

    private userRequests = new UserRequests()

    public handleCreateUser(user: object){
        return this.userRequests.createUser(user)
    }

    public handleUserExists(email: string){
        return this.userRequests.userExists(email)
    }

    public handleLogin(email: string){
        return this.userRequests.login(email)
    }

    public handleUpdateUser(id: number, role: string){
        return this.userRequests.updateUser(id, role)
    }
}