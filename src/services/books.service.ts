import axios from "axios";
import {Books} from '../components/pages/Books/interfaces';
const API_URL=process.env.REACT_APP_API_URL;

export class BooksService {
    public static async  addBook (name: string, description: string, price: number, stock: number, id_author: number ) {
        return axios.post(`${API_URL}books`, 
        { name, description, price, stock, id_author})
    };
    public static async getBooks (): Promise<Books[]>{
        const response = await axios.get(`${API_URL}books`)
        return response.data;
    };
    public static async addAuthor(name: string, nationality: string){
        return axios.post(`${API_URL}authors`, 
        { name, nationality})
    };
}