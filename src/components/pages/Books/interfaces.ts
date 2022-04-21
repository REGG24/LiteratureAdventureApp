export interface Books {
    TITLE: string;
    PRICE: number;
    STOCK: number;
    AUTHOR: number;
  }

  export interface BookFormInput {
    name: string;
    description: string;
    price: number;
    stock: number;
    author: string;
}

export interface AuthorFormInput{
    name:string;
    nationality: string;
}

export interface Author{
  ID_AUTHOR: number;
  NAME: string;
}

export interface AuthorLabel{
  label: string;
  id: number;
}