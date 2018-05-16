

import {HttpClient} from "@angular/common/http";
import {Actions, Effect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs-compat';
import * as OrdersActions from './orders.actions';
import {myOrder} from "../myorder.model";
import {Store} from "@ngrx/store";
import * as fromOrders from './orders.reducers';
import * as fromApp from '../../store/app.reducers';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Injectable()
export class OrderEffects {
  private url = './api/orders/'

  @Effect()
  saveOrder = this.action$
    .ofType(OrdersActions.SAVE_ORDER)
    .withLatestFrom(this.store.select('orders'))
    .take(1)
    .switchMap(([action, item])  => {
        console.log(item.orderItem);
          return this.httpClient.post<myOrder>(this.url + 'insert', item.orderItem);

    })
    .mergeMap((retVal) => {
       if (retVal) {
         this.snackBar.open('Order saved succesfully','OK!!!!',{
           duration:2000,
           panelClass:['mySnackbarSuccess']
         });
         return[{
           type: OrdersActions.CANCEL_ORDER
         },
         {
           type: OrdersActions.SET_ORDER_TO_SAVE,
           payload: false
         }];
       }
       else {
         this.snackBar.open('Error during order Saving','retry',{
           duration:2000,
           panelClass:['mySnackbarError']
         });
         return [ {
           type: OrdersActions.SET_ORDER_TO_SAVE,
           payload: false
         }
         ];
       }
    });

   @Effect()
   loadOrders = this.action$
     .ofType(OrdersActions.LOAD_ORDERS)
     .switchMap((action: OrdersActions.LoadOrders) => {
        return this.httpClient.get<myOrder[]>(this.url );
     })
     .map((orders) => {
        if (orders) {
          return {
            type : OrdersActions.SET_ORDERS_LIST,
            payload: orders
          };
        }
       return {
         type : OrdersActions.SET_ORDERS_LIST,
         payload: []
       };
     });


  constructor(private action$: Actions ,  private httpClient: HttpClient , private store: Store<fromApp.AppState>
  , private router: Router, private snackBar: MatSnackBar) {
  }
}
