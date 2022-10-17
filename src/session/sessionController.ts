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
        console.log(user)
    }

    getUserData(){
        const userData = sessionStorage.getItem('user_data')
        if(userData) return JSON.parse(userData)
        return null
    }

    removeUserData(){
        sessionStorage.removeItem('user_data')
    }

    getUserRole(){
<<<<<<< HEAD
        if(this.getUserData()) return this.getUserData().role
        return null
    }

    //STATION
    setStationData(station: object){
        sessionStorage.setItem('current_station', JSON.stringify(station))
    }

    getStationData(){
        const stationData = sessionStorage.getItem('current_station')
        if (stationData) return JSON.parse(stationData)
        return null
    }

    getStationName(){
        const station = this.getStationData()
        if (station) return station.name
        return null
    }

    getStationInstallDate(){
        const station = this.getStationData()
        if (station) return station.installation_date
        return null
    }

    getStationLat(){
        const station = this.getStationData()
        if (station) return station.lat
        return null
    }

    getStationLon(){
        const station = this.getStationData()
        if (station) return station.lon
        return null
    }

    getStationReference(){
        const station = this.getStationData()
        if (station) return station.reference
        return null
    }

    getStationId(){
        const station = this.getStationData()
        if (station) return station.id
        return null
    }
=======
        const userRole = this.getUserData().role
        return userRole
    } 
>>>>>>> e060c2a (Feat: adicionado a integração da página inicial)
}