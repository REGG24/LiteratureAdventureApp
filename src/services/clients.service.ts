import axios from "axios";
import { Clients } from "../components/pages/Clients/interfaces";
const API_URL=process.env.REACT_APP_API_URL;

export class ClientsService {

    public static async  addClient ( name: string, telephone: string, address: string ) {
        return axios.post(`${API_URL}clients`, 
        { name, telephone, address  })
    };
    public static async getClients (): Promise<Clients[]>{
        const response = await axios.get(`${API_URL}clients`)
        return response.data;
    };
}