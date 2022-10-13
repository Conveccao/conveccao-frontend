export default new class SessionController{
    clear() {
        sessionStorage.clear()
    }

    //TOKEN
    setToken(token: string){
        sessionStorage.setItem('authentication_token', JSON.stringify(token))
    }

    getToken(){
        const sessionToken = sessionStorage.getItem('authentication_token')
        if(sessionToken == null) return null
        
        const token: string = JSON.parse(sessionToken)
        return token
    }

    removeToken(){
        sessionStorage.removeItem('authentication_token')
    }

    //USER
    setUserData(user: object){
        sessionStorage.setItem('user_data', JSON.stringify(user))
    }

    getUserData(){
        sessionStorage.getItem('user_data')
    }

    removeUserData(){
        sessionStorage.removeItem('user_data')
    }
}