import {Product} from '../products/product.model';

export class myOrder {

  public id: number;
  public persons: number;
  public  total: number;
  public date: number;
  public products: {product: Product , quantity: number}[] ;
  constructor(id: number ,  persons: number, total: number, date: number ,  products: {product: Product , quantity: number}[]){
    this.id = id;
    this.persons = persons;
    this.total = total;
    this.products = products;
    this.date = date;
  }



}
