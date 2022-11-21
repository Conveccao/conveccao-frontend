import axios from "axios";

export default axios.create({
    baseURL: "http://174.138.61.49:80"
    //baseURL: "http://localhost:8081" // -> Para backend local
})
