import axios from "../axios"
import { URI } from "../uri"

export default class UserRequests{

    public async createUser(user: object){
        try{
            const res = await axios.post(URI.CREATEUSER, user)
            return res.data
        } catch(error){
            console.log(error)
            window.alert("Ocorreu um erro")
        }
    }

    public async userExists(email: string) {
        try {
            const res = await axios.post(URI.USEREXISTS, {email: email})
            console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}