import axios from "axios";

export default axios.create({
    baseURL: "https://conveccao.onrender.com"
    //baseURL: "http://localhost:8080" -> Para conectar ao back-end local
})