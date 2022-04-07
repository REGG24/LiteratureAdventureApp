export interface Books {
    ID_BOOK: number;
    NAME: string;
    DESCRIPTION: string;
    PRICE: number;
    STOCK: number;
    ID_AUTHOR: number;
  }

  export interface BookFormInput {
    name: string;
    description: string;
    price: number;
    stock: number;
    id_author: number;
}