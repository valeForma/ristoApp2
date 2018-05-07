import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import {Product} from '../products/product';
import {Observable} from 'rxjs/Observable';
import {HttpErrorHandler , HandleError} from "./http-error-handler.service";
import {myOrder} from "../orders/myorder.model";

@Injectable()
export class DataService {
  private url: String = './';
  private handleError: HandleError;
  constructor(private http: HttpClient , httpErrorHandler: HttpErrorHandler) {
  this.handleError = httpErrorHandler.createHandleError('DataService');
}


  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.url + 'products/',{
       observe: 'body',
       responseType: 'json'
    }).map((prods) =>{
      for (let prod of prods) {
        prod['_id'] = prod['_id'].toString();
      }
      return prods;
    }).pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  saveOrder(order: myOrder){
    return this.http.post(this.url + 'orders/insert' , order ,{
      observe: 'response'
    }).pipe(
      catchError(this.handleError<any>('saveOrder', []))
    );
  }
  loadOrders(){
    return this.http.get<myOrder[]>(this.url + 'orders' ,{
      observe: 'body',
      responseType: 'json'
    }).map((orders) => {
      return orders;
    }).pipe(
      catchError(this.handleError<any>('get order', []))
    );

  }
}
