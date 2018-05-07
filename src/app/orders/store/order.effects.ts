

import {HttpClient} from "@angular/common/http";
import {Actions, Effect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import * as OrdersActions from './orders.actions';
import {myOrder} from "../myorder.model";
import {Store} from "@ngrx/store";
import * as fromOrders from './orders.reducers';
import * as fromApp from '../../store/app.reducers';

@Injectable()
export class OrderEffects {
  private url = './api/orders/'

  @Effect({dispatch: false})
  saveOrder = this.action$
    .ofType(OrdersActions.SAVE_ORDER)
    .withLatestFrom(this.store.select('orders'))
    .switchMap(([action, item])  => {
        console.log(item.orderItem);
        return this.httpClient.post(this.url + 'insert', item.orderItem);
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
        return;
     });


  constructor(private action$: Actions ,  private httpClient: HttpClient , private store: Store<fromApp.AppState>) {
  }
}
