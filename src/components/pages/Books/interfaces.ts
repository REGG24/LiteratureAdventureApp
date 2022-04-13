export interface Books {
    ID_BOOK: number;
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
    id_author: number;
}

export interface AuthorFormInput{
    name:string;
    nationality: string;
}