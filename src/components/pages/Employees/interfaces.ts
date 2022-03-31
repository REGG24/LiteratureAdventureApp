export interface Employee {
    ID_EMPLOYEE: number,
    NAME: string,
    PHONE: string,
    ADDRESS: string,
    SALARY: string
}

export interface EmployeeFormInput {
    name: string;
    phone: string;
    address: string;
    salary: number;
}