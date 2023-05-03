import axios from "axios";
const url = 'http://localhost:5000'


class Https {
    instance;
    constructor(){
        this.instance = axios.create({
            baseURL: url,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

const https = new Https().instance


const userAPI = {

    register: async (data)=>{
        const result = await https.post('/user/register', data)
        return result.data;
    },

    login: async (data) => {
        const result = await https.post('/user/login', data)
        return result.data;
    },

    getAllUser: async  () =>{
        const result = await axios.get(url);
        return result.data;
    },

    getOneUser: async  (id) =>{ 
        const result = await axios.get(`${url}/${id}`)
        return result.data;
    },

    updateUser: async  (id, data) =>{
        const result = await axios.patch(`${url}/${id}`, data);
        return result.data;
    },

    deleteUser : async  (id)=>{
        const result = await axios.delete(`${url}/${id}`);
        return result.data;
 
    }
}

export default userAPI