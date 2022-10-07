import axios from "axios";

export default axios.create({
    baseURL: "https://conveccao.onrender.com"
    //baseURL: "http://localhost:8081" // -> Para backend local
})