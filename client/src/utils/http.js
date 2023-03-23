import axios from "axios";

class HTTP {
    instance;
    constructor(){
        this.instance = axios.create({
            baseURL: "http://localhost:5000/api/post",
            headers:{
                "Content-Type": "application/json"
            }
        })
    }

}

const http = new HTTP().instance

export default http