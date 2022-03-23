import axios from "axios";
export const API_URL='http://192.168.1.77:4000/API/';

export class ClientsService {

    public static async  addClient ( name: string, phone: string, address: string ) {
        return axios.post(`${API_URL}clients`, 
        { name, phone, address  })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    };
    public static async getClient (){
        return axios.post(`${API_URL}clients`)
        .then(res=>{
            console.log(res);
        })
    };
}


