import { Employee, EmployeeFormInput } from '../components/pages/Employees/interfaces';
const API_URL=process.env.REACT_APP_API_URL;

export async function getAllEmployees(): Promise<Employee[]> {
    let response;
    let data: Employee[] = [];
    try {
        response = await fetch(`${API_URL}/employees`);
        data = await response.json();
    } catch (error) {
        console.log(error);
    }
   
    if (!response) {
        throw new Error('Could not get employees');
    } 

    return data;
};

export async function addEmployee(employee: EmployeeFormInput): Promise<any> {
    let response;
    let data: any;
    try {
        response = await fetch(`${API_URL}/employees`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(employee)
        });
        data = await response.json();
    } catch (error) {
        console.log(error);
    }
   
    if (!response) {
        throw new Error('Could not get employees');
    } 

    return data;
};