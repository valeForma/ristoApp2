
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import * as ProductsActions from './products.actions';
import * as fromProducts from './products.reducer';
import {Store} from '@ngrx/store';
import {Product} from '../product.model';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductsEffects {

  private url: String = './api/';
  @Effect()
  productsLoad = this.actions$
    .ofType(ProductsActions.LOAD_PRODUCTS)
    .switchMap( (action: ProductsActions.LoadProducts) => {
      return this.httpClient.get<Product[]>(this.url + 'products/', {
        observe: 'body',
        responseType: 'json'
      });
    })
    .map( (products) => {
      console.log(products);
     return {
        type: ProductsActions.SET_PRODUCTS,
        payload: products
      };
    }, (err) => {
      console.log(err);
    });



  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromProducts.State>) {

  }
}
