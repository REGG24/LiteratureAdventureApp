import { Employee } from '../components/pages/Employees/interfaces';
const API_URL=process.env.REACT_APP_API_URL;

export async function getAllEmployees(): Promise<Employee[]> {
    let response;
    let data: Employee[] = [];
    try {
        response = await fetch(`${API_URL}employees`);
        data = await response.json();
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
   
    if (!response) {
        throw new Error('Could not get employees');
    } 

    return data;
};